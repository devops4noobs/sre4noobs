export default function SignalFxPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">SignalFx Monitoring</h2>
      <p className="text-gray-300 mb-4">SignalFx (Splunk Observability Cloud) is used to monitor metrics, services, and infrastructure. You can:</p>
      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <li>Create detectors with thresholds or analytics</li>
        <li>Build dashboards with real-time graphs</li>
        <li>Send alerts to PagerDuty or Slack</li>
        <li>Correlate metrics with traces and logs</li>
      </ul>
    </div>
  );
}
