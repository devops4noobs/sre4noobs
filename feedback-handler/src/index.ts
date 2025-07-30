/// <reference types="@cloudflare/workers-types" />
export {};

interface FeedbackData {
  message: string;
  rating: number;
  name?: string;
  email?: string;
  timestamp: string;
  approved?: boolean;
}

declare global {
  var FEEDBACK_KV: KVNamespace;
}

import { handleContactRequest } from './email-handler';

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event: FetchEvent): Promise<Response> {
  const request = event.request;
  const url = new URL(request.url);
  let path = url.pathname.replace(/^\/feedback-handler/, '');

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(),
    });
  }

  // GET /feedbacks returns only approved feedbacks as JSON
  if (request.method === 'GET' && path === '/feedbacks') {
    try {
      const list = await FEEDBACK_KV.list({ prefix: 'feedback_', limit: 20 });
      const feedbacks = await Promise.all(
        list.keys.map(async (entry) => {
          const value = await FEEDBACK_KV.get(entry.name);
          const data = value ? JSON.parse(value) : null;
          return data && data.approved === true ? data : null; // Filter unapproved
        })
      );
      feedbacks.sort((a, b) => (b?.timestamp || '').localeCompare(a?.timestamp || ''));
      return addCorsToResponse(
        new Response(JSON.stringify(feedbacks.filter(Boolean)), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        })
      );
    } catch (err) {
      return addCorsToResponse(
        new Response(JSON.stringify({ error: 'Failed to fetch feedbacks' + (err instanceof Error ? `: ${err.message}` : '') }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        })
      );
    }
  }

  // POST /contact-handler/submit-message
  if (request.method === 'POST' && path === '/contact-handler/submit-message') {
    return await handleContactRequest(request, globalThis);
  }

  // POST /submit-feedback
  if (request.method === 'POST' && path === '/submit-feedback') {
    return await handleRequest(request);
  }

  // POST /approve-feedback (admin-only)
  if (request.method === 'POST' && path === '/approve-feedback') {
    return await handleApproveRequest(request);
  }

  // Fallback for other routes
  return addCorsToResponse(new Response('Not Found', { status: 404, headers: { 'Content-Type': 'text/plain' } }));
}

async function handleRequest(request: Request): Promise<Response> {
  try {
    const data = await request.json() as FeedbackData;
    const { message, rating, name, email, timestamp } = data;

    if (!message || typeof rating !== 'number' || !timestamp) {
      return addCorsToResponse(new Response(JSON.stringify({ error: 'Message, rating, and timestamp are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }));
    }

    const key = `feedback_${timestamp}_${Math.random().toString(36).slice(2, 10)}`;
    const feedbackData = JSON.stringify({
      message,
      rating,
      name: name || 'Anonymous',
      email: email || 'N/A',
      timestamp,
      approved: false, // Default to unapproved
    });

    await FEEDBACK_KV.put(key, feedbackData);

    return addCorsToResponse(new Response(JSON.stringify({ message: 'Feedback submitted for review' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }));
  } catch (err) {
    return addCorsToResponse(new Response(JSON.stringify({ error: 'Failed to save feedback' + (err instanceof Error ? `: ${err.message}` : '') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    }));
  }
}

async function handleApproveRequest(request: Request): Promise<Response> {
  try {
    const { key } = await request.json() as { key: string };
    if (!key) {
      return addCorsToResponse(new Response(JSON.stringify({ error: 'Key is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }));
    }

    const value = await FEEDBACK_KV.get(key);
    if (!value) {
      return addCorsToResponse(new Response(JSON.stringify({ error: 'Feedback not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      }));
    }

    const feedback = JSON.parse(value) as FeedbackData;
    feedback.approved = true;
    await FEEDBACK_KV.put(key, JSON.stringify(feedback));

    return addCorsToResponse(new Response(JSON.stringify({ message: 'Feedback approved' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }));
  } catch (err) {
    return addCorsToResponse(new Response(JSON.stringify({ error: 'Failed to approve feedback' + (err instanceof Error ? `: ${err.message}` : '') }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    }));
  }
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function addCorsToResponse(response: Response): Response {
  const newHeaders = new Headers(response.headers);
  newHeaders.set('Access-Control-Allow-Origin', '*');
  newHeaders.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  newHeaders.set('Access-Control-Allow-Headers', 'Content-Type');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}