/// <reference types="@cloudflare/workers-types" />
export {};

interface FeedbackData {
  message: string;
  rating: number;
  name?: string;
  email?: string;
  timestamp: string;
}

// Declare the KV namespace binding
declare global {
  const FEEDBACK_KV: KVNamespace;
}


addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event: FetchEvent): Promise<Response> {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(),
    });
  }
  // GET /feedbacks returns recent feedbacks as JSON
  if (request.method === 'GET' && url.pathname === '/feedbacks') {
    try {
      const list = await FEEDBACK_KV.list({ prefix: 'feedback_', limit: 20 });
      const feedbacks = await Promise.all(
        list.keys.map(async (entry) => {
          const value = await FEEDBACK_KV.get(entry.name);
          return value ? JSON.parse(value) : null;
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
  // POST /submit-feedback
  if (request.method === 'POST' && url.pathname === '/submit-feedback') {
    return await handleRequest(request);
  }
  // Fallback for other routes
  return addCorsToResponse(new Response('Not Found', { status: 404, headers: { 'Content-Type': 'text/plain' } }));
}

async function handleRequest(request: Request): Promise<Response> {
  try {
    const data = await request.json() as FeedbackData;
    const { message, rating, name, email, timestamp } = data;

    // Validate required fields
    if (!message || typeof rating !== 'number' || !timestamp) {
      return addCorsToResponse(new Response(JSON.stringify({ error: 'Message, rating, and timestamp are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }));
    }

    // Generate a unique key (consider using UUID or add randomness)
    const key = `feedback_${timestamp}_${Math.random().toString(36).slice(2, 10)}`;
    const feedbackData = JSON.stringify({
      message,
      rating,
      name: name || 'Anonymous',
      email: email || 'N/A',
      timestamp,
    });

    // Store in Workers KV
    await FEEDBACK_KV.put(key, feedbackData);

    return addCorsToResponse(new Response(JSON.stringify({ message: 'Feedback saved successfully' }), {
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