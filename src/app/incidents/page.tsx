export default function IncidentPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">Incident Response</h2>
      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <li>Detect incidents through alerts, logs, or user reports</li>
        <li>Assign on-call responders and communicate status</li>
        <li>Mitigate or rollback broken systems</li>
        <li>Document impact, timeline, and fix</li>
        <li>Run postmortem afterward</li>
      </ul>
    </div>
  );
}
