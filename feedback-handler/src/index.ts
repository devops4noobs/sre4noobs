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
  const FEEDBACK_KV: KVNamespace;
}

import { handleContactRequest } from './email-handler';

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event: FetchEvent): Promise<Response> {
  const request = event.request;
  const url = new URL(request.url);
<<<<<<< HEAD
  // Normalize pathname by removing the '/feedback-handler' prefix if present
=======
>>>>>>> df8c1f1 (add approve feedback)
  let path = url.pathname.replace(/^\/feedback-handler/, '');

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(),
    });
  }

<<<<<<< HEAD
  // GET /feedback-handler/feedbacks returns recent feedbacks as JSON
=======
  // GET /feedbacks returns only approved feedbacks as JSON
>>>>>>> df8c1f1 (add approve feedback)
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
        new Response(JSON.stringify({ error: 'Failed to fetch feedbacks' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        })
      );
    }
  }

<<<<<<< HEAD
  // POST /contact-handler/submit-message (new contact form route)
  if (request.method === 'POST' && url.pathname.endsWith('/contact-handler/submit-message')) {
    // Use env for secrets in module Worker, or globalThis for service Worker
    return await handleContactRequest(request, globalThis);
  }

  // POST /feedback-handler/submit-feedback
=======
  // POST /submit-feedback
>>>>>>> df8c1f1 (add approve feedback)
  if (request.method === 'POST' && path === '/submit-feedback') {
    return await handleRequest(request);
  }

<<<<<<< HEAD
  // Fallback for other routes
  return addCorsToResponse(new Response('Not Found', { status: 404, headers: { 'Content-Type': 'text/plain' } }));
=======
  // New endpoint: POST /approve-feedback (admin-only)
  if (request.method === 'POST' && path === '/approve-feedback') {
    return await handleApproveRequest(request);
  }

  return addCorsToResponse(new Response('Not Found', { status: 404 }));
>>>>>>> df8c1f1 (add approve feedback)
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
  } catch {
    return addCorsToResponse(new Response(JSON.stringify({ error: 'Failed to save feedback' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    }));
  }
}

async function handleApproveRequest(request: Request): Promise<Response> {
  try {
    const { key } = await request.json() as { key: string }; // Expect the KV key from the admin
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
  } catch {
    return addCorsToResponse(new Response(JSON.stringify({ error: 'Failed to approve feedback' }), {
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