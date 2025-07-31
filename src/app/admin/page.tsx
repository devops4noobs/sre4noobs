'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface FeedbackItem {
  key: string;
  message: string;
  rating: number;
  name?: string; // Make optional to match potential KV data
  email?: string; // Make optional to match potential KV data
  timestamp: string;
}

export default function AdminPage() {
  const [pendingFeedbacks, setPendingFeedbacks] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPendingFeedbacks();
  }, []);

  const fetchPendingFeedbacks = async () => {
    try {
      const res = await fetch('https://www.devops4noobs.com/admin-handler/pending-feedback', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const data: { error?: string } | FeedbackItem[] = await res.json();
      if (!res.ok) throw new Error(data && 'error' in data && data.error ? data.error : 'Failed to fetch pending feedbacks');
      // Ensure data is an array and filter valid items
      const feedbacks = Array.isArray(data) ? data.filter((item): item is FeedbackItem => 
        item && typeof item.key === 'string' && 
        typeof item.message === 'string' && 
        typeof item.rating === 'number' && 
        typeof item.timestamp === 'string'
      ) : [];
      console.log('Processed Feedbacks:', feedbacks); // Log processed data
      setPendingFeedbacks(feedbacks);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const approveFeedback = async (key: string) => {
    try {
      const res = await fetch('https://www.devops4noobs.com/admin-handler/approve-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key }),
      });
      if (!res.ok) throw new Error('Failed to approve');
      fetchPendingFeedbacks();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Approval failed');
      console.error('Approval error:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Admin: Pending Feedbacks</h1>
      {pendingFeedbacks.length === 0 ? (
        <p>No pending feedbacks.</p>
      ) : (
        <ul className="space-y-4">
          {pendingFeedbacks.map((fb) => (
            <motion.li
              key={fb.key}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p><strong>Message:</strong> {fb.message}</p>
              <p><strong>Rating:</strong> {fb.rating} ⭐</p>
              <p><strong>Name:</strong> {fb.name || 'Anonymous'}</p>
              <p><strong>Email:</strong> {fb.email || 'N/A'}</p>
              <p><strong>Timestamp:</strong> {fb.timestamp}</p>
              <button
                onClick={() => approveFeedback(fb.key)}
                className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
              >
                Approve
              </button>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}