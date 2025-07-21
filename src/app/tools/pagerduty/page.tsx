export default function PagerDutyPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">PagerDuty Integration</h2>
      <p className="text-gray-300 mb-4">PagerDuty helps manage on-call scheduling and alerts. Key steps:</p>
      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <li>Set up schedules and escalation policies</li>
        <li>Connect monitoring tools (e.g. CloudWatch, SignalFx)</li>
        <li>Use incident webhooks for automation</li>
        <li>Review incident metrics (MTTA, MTTR)</li>
      </ul>
    </div>
  );
}
