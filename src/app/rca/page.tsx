export default function RCApage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">Root Cause Analysis (RCA)</h2>
      <p className="text-gray-300 mb-4">RCA identifies the underlying cause of an incident, not just the symptoms. Common methods:</p>
      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <li>5 Whys Technique</li>
        <li>Fishbone (Ishikawa) Diagram</li>
        <li>Fault Tree Analysis</li>
        <li>Timeline review and logs/metrics correlation</li>
      </ul>
    </div>
  );
}
