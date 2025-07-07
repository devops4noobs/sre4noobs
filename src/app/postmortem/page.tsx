export default function PostmortemPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">Postmortem Analysis</h2>
      <p className="text-gray-300 mb-4">A blameless postmortem helps teams understand what went wrong and how to prevent it again. It includes:</p>
      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <li>Incident timeline and detection time</li>
        <li>Root cause and contributing factors</li>
        <li>Impact and user-facing symptoms</li>
        <li>What went well and what could improve</li>
        <li>Action items and owners</li>
      </ul>
    </div>
  );
}
