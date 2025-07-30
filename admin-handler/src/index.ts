/// <reference types="@cloudflare/workers-types" />
export {};

interface FeedbackData {
  message: string;
  rating: number;
  name?: string;
  email?: string;
  timestamp: string;
  approved?: boolean;
  key?: string; // Added for admin response
}

declare global {
  const FEEDBACK_KV: KVNamespace;
}

export default {
  async fetch(request: Request): Promise<Response> {
    console.log(`Request received: ${request.method} ${request.url}`);
    const url = new URL(request.url);
    let path = url.pathname.replace(/^\/admin-handler/, '');

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(),
      });
    }

    // GET /pending-feedback: List unapproved feedback
    if (request.method === 'GET' && path === '/pending-feedback') {
      try {
        console.log('Listing pending feedbacks from KV');
        const list = await FEEDBACK_KV.list({ prefix: 'feedback_', limit: 100 });
        console.log(`Found ${list.keys.length} keys`);
        const feedbacks = await Promise.all(
          list.keys.map(async (entry) => {
            console.log(`Processing key: ${entry.name}`);
            const value = await FEEDBACK_KV.get(entry.name);
            const data = value ? JSON.parse(value) : null;
            return data && data.approved !== true ? { key: entry.name, ...data } : null;
          })
        );
        const filteredFeedbacks = feedbacks.filter(Boolean);
        console.log(`Returning ${filteredFeedbacks.length} pending feedbacks`);
        return addCorsToResponse(
          new Response(JSON.stringify(filteredFeedbacks), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          })
        );
      } catch (err) {
        console.error('Error fetching pending feedbacks:', err);
        return addCorsToResponse(
          new Response(JSON.stringify({ error: 'Failed to fetch pending feedbacks' + (err instanceof Error ? `: ${err.message}` : '') }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          })
        );
      }
    }

    // POST /approve-feedback: Approve a specific feedback by key
    if (request.method === 'POST' && path === '/approve-feedback') {
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
        console.error('Error approving feedback:', err);
        return addCorsToResponse(new Response(JSON.stringify({ error: 'Failed to approve feedback' + (err instanceof Error ? `: ${err.message}` : '') }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }));
      }
    }

    return addCorsToResponse(new Response('Not Found', { status: 404 }));
  },
};

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*', // Update to your app's origin (e.g., 'https://yourdomain.com') for security
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