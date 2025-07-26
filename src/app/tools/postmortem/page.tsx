import PostmortemForm from '@/components/PostmortemForm';
import ErrorBoundary from '@/components/ErrorBoundary';

export default function PostmortemPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-indigo-400 mb-8 text-center">Blameless Postmortem Tool</h1>
      <p className="text-l font-semibold text-indigo-300 mb-2 text-center">
        Simulate writing a blameless postmortem to learn from incidents without pointing fingers. Fill out the form below and download your report.
      </p>
      <ErrorBoundary>
        <PostmortemForm />
      </ErrorBoundary>
    </main>
  );
}