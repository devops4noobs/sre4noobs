export default function IncidentManagementPage() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md text-sm text-gray-300 space-y-4">
      <h3 className="text-xl font-semibold text-indigo-400">🚨 Incident Management</h3>

      <p>
        Incident Management is the process of detecting, responding to, and resolving disruptions in systems or services. By combining real-time observability, clear communication, and structured workflows, it minimizes downtime and ensures rapid recovery, maintaining user trust and system reliability.
      </p>

      <h4 className="text-indigo-400 font-semibold">🎯 Why This Matters</h4>
      <p>
        Incidents can disrupt operations, frustrate users, and damage reputation. Effective incident management reduces impact, restores services quickly, and leverages observability tools to identify issues in real time, enabling teams to respond proactively and learn from each event.
      </p>

      <h4 className="text-indigo-400 font-semibold">🏁 Mission: Respond, Resolve, Learn</h4>
      <ul className="space-y-1 list-none">
        <li><strong>Rapid Response:</strong> Detect and address issues before they escalate.</li>
        <li><strong>Coordination:</strong> Ensure clear communication and role clarity during incidents.</li>
        <li><strong>Continuous Improvement:</strong> Use insights to prevent future disruptions.</li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">❓ What Is Incident Management?</h4>
      <p>
        Incident Management is a disciplined approach to handling system disruptions, from detection to resolution and post-incident learning. It relies on observability tools (e.g., metrics, logs, traces) to identify issues, structured processes to coordinate responses, and post-incident analysis to drive improvements, ensuring systems remain reliable and resilient.
      </p>

      <h4 className="text-indigo-400 font-semibold">🧭 Guiding Principles</h4>
      <ol className="space-y-3 list-decimal list-inside">
        <li>
          <strong>Prioritize Detection with Observability</strong><br />
          <em>Why?</em> Early detection minimizes impact and speeds up resolution.<br />
          <em>What?</em> Use tools like AWS CloudWatch or Splunk Observability Cloud to monitor metrics and set alerts for anomalies (e.g., latency spikes, error rates).
        </li>
        <li>
          <strong>Define Clear Roles and Responsibilities</strong><br />
          <em>Why?</em> Clarity prevents chaos during high-pressure incidents.<br />
          <em>What?</em> Assign roles like Incident Commander, Communications Lead, and Technical Lead to streamline response efforts.
        </li>
        <li>
          <strong>Communicate Transparently</strong><br />
          <em>Why?</em> Stakeholders need timely, accurate updates to maintain trust.<br />
          <em>What?</em> Share real-time status updates internally and externally, using tools like Grafana dashboards for visibility.
        </li>
        <li>
          <strong>Leverage Observability for Diagnosis</strong><br />
          <em>Why?</em> Understanding the issue requires comprehensive data.<br />
          <em>What?</em> Use OpenTelemetry traces to track request flows or Kibana logs to debug errors, enabling precise diagnosis.
        </li>
        <li>
          <strong>Resolve with Speed and Stability</strong><br />
          <em>Why?</em> Quick resolution restores services, but hasty fixes can cause new issues.<br />
          <em>What?</em> Apply temporary mitigations (e.g., rollbacks) and verify stability before closing the incident.
        </li>
        <li>
          <strong>Conduct Post-Incident Analysis</strong><br />
          <em>Why?</em> Learning from incidents prevents recurrence.<br />
          <em>What?</em> Perform Root Cause Analysis (RCA) using observability data to identify underlying issues and propose fixes.
        </li>
        <li>
          <strong>Build a Culture of Learning</strong><br />
          <em>Why?</em> Continuous improvement strengthens systems over time.<br />
          <em>What?</em> Document and share incident findings, update monitoring thresholds, and refine processes to enhance resilience.
        </li>
      </ol>

      <h4 className="text-indigo-400 font-semibold">📚 Example Scenarios</h4>
      <ul className="space-y-1 list-none">
        <li>
          <strong>Application Outage:</strong> A service fails due to a memory leak. AWS CloudWatch alerts detect high memory usage, and the team rolls обратно changes, restoring service while planning a fix.
        </li>
        <li>
          <strong>Performance Degradation:</strong> Users report slow responses. OpenTelemetry traces reveal a database bottleneck, prompting the team to scale resources and update Prometheus alerts.
        </li>
        <li>
          <strong>Security Incident:</strong> A login anomaly is detected via Splunk Observability Cloud. The team isolates the affected system, communicates updates via shared dashboards, and conducts RCA to strengthen security.
        </li>
      </ul>

      <p className="italic text-gray-400">
        Incident Management is more than a reactive process—it’s a strategic practice that combines observability, coordination, and learning to build reliable systems and maintain user confidence.
      </p>
    </div>
  );
}