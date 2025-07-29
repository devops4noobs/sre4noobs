/// <reference types="@cloudflare/workers-types" />
export {};

interface FeedbackData {
  message: string;
  rating: number;
  name?: string;
  email?: string;
  timestamp: string;
}


addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  // Only allow POST to /submit-feedback
  if (request.method !== 'POST' || url.pathname !== '/submit-feedback') {
    return new Response('Not Found or Method Not Allowed', { status: 404 });
  }

  try {
    const data = await request.json() as FeedbackData;
    const { message, rating, name, email, timestamp } = data;

    // Validate required fields
    if (!message || typeof rating !== 'number' || !timestamp) {
      return new Response(JSON.stringify({ error: 'Message, rating, and timestamp are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Generate a unique key (add randomness to avoid collisions)
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

    return new Response(JSON.stringify({ message: 'Feedback saved successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to save feedback' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}