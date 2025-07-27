import PostmortemForm from '@/components/PostmortemForm';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function PostmortemPage() {
  return (
    <main>
      <ErrorBoundary>
        <PostmortemForm />
      </ErrorBoundary>
    </main>
  );
}