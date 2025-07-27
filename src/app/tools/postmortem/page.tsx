import PostmortemForm from '@/components/PostmortemForm';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function PostmortemPage() {
  return (
    <main className="container mx-auto p-8">
      <ErrorBoundary>
        <PostmortemForm />
      </ErrorBoundary>
    </main>
  );
}