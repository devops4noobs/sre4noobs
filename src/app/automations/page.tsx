export default function AutomationsPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">Automations</h2>
      <p className="text-gray-300">
        Automations help reduce toil by creating scripts, workflows, and tools that handle repetitive tasks reliably and at scale.
      </p>
      <ul className="list-disc ml-6 mt-4 text-gray-300 space-y-2">
        <li>Automate incident response steps</li>
        <li>Build CI/CD pipelines</li>
        <li>Use infrastructure-as-code</li>
        <li>Set up alerting and auto-remediation</li>
      </ul>
    </div>
  );
}
