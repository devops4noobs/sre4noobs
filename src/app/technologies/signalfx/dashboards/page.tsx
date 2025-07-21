export default function DashboardsPage() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md text-sm text-gray-300 space-y-4">
      <h3 className="text-xl font-semibold text-indigo-400">📈 Dashboards</h3>

      <p>
        Dashboards in Splunk Observability Cloud (formerly SignalFx) are interactive visualizations that aggregate metrics, logs, and traces to provide real-time insights into system health. They enable teams to monitor performance, detect trends, and make data-driven decisions.
      </p>

      <h4 className="text-indigo-400 font-semibold">🎯 Why This Matters</h4>
      <p>
        Complex systems generate vast amounts of data. Dashboards transform this data into clear, actionable visuals, helping technical and non-technical stakeholders understand system performance, identify issues, and align on priorities using observability tools.
      </p>

      <h4 className="text-indigo-400 font-semibold">🏁 Mission: Visualize, Understand, Act</h4>
      <ul className="space-y-1 list-none">
        <li><strong>Clarity:</strong> Present complex data in intuitive formats.</li>
        <li><strong>Real-Time Insights:</strong> Enable immediate awareness of system status.</li>
        <li><strong>Collaboration:</strong> Bridge technical and business teams through shared visuals.</li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">❓ What Are Dashboards?</h4>
      <p>
        Dashboards are customizable interfaces in Splunk Observability Cloud that display real-time and historical data from metrics, logs, and traces. They integrate with sources like AWS CloudWatch, Prometheus, or OpenTelemetry, providing a unified view of system performance to support monitoring, troubleshooting, and strategic decisions.
      </p>

      <h4 className="text-indigo-400 font-semibold">🧭 Guiding Principles</h4>
      <ol className="space-y-3 list-decimal list-inside">
        <li>
          <strong>Focus on Key Metrics</strong><br />
          <em>Why?</em> Relevant data ensures actionable insights.<br />
          <em>What?</em> Highlight critical indicators like latency, error rates, or resource usage.
        </li>
        <li>
          <strong>Integrate Observability Data</strong><br />
          <em>Why?</em> Comprehensive views require metrics, logs, and traces.<br />
          <em>What?</em> Pull data from AWS CloudWatch, Prometheus, or OpenTelemetry for a holistic perspective.
        </li>
        <li>
          <strong>Design for Clarity</strong><br />
          <em>Why?</em> Overloaded dashboards confuse users.<br />
          <em>What?</em> Use simple charts (e.g., line, bar) and avoid clutter to focus on critical insights.
        </li>
        <li>
          <strong>Enable Real-Time Monitoring</strong><br />
          <em>Why?</em> Timely data drives faster responses.<br />
          <em>What?</em> Configure dashboards to refresh with real-time data from Splunk or Grafana.
        </li>
        <li>
          <strong>Support Collaboration</strong><br />
          <em>Why?</em> Dashboards bridge technical and business teams.<br />
          <em>What?</em> Create dashboards for both SREs (e.g., infrastructure health) and stakeholders (e.g., service availability).
        </li>
        <li>
          <strong>Link to Detectors</strong><br />
          <em>Why?</em> Alerts provide context for dashboard insights.<br />
          <em>What?</em> Embed detector-triggered alerts in dashboards to correlate issues with visuals.
        </li>
        <li>
          <strong>Iterate and Refine</strong><br />
          <em>Why?</em> Systems and needs evolve over time.<br />
          <em>What?</em> Regularly update dashboards based on RCA findings or changing priorities.
        </li>
      </ol>

      <h4 className="text-indigo-400 font-semibold">📚 Example Scenarios</h4>
      <ul className="space-y-1 list-none">
        <li>
          <strong>Service Health Monitoring:</strong> A dashboard visualizes AWS CloudWatch metrics for CPU and memory usage, helping SREs detect resource bottlenecks in real time.
        </li>
        <li>
          <strong>Incident Investigation:</strong> A Splunk dashboard correlates OpenTelemetry traces and Kibana logs to pinpoint a latency spike, guiding RCA.
        </li>
        <li>
          <strong>Business Reporting:</strong> A dashboard tracks API uptime and error rates, shared with stakeholders to demonstrate system reliability.
        </li>
      </ul>

      <p className="italic text-gray-400">
        Dashboards are the window into system health, turning observability data into actionable insights that drive reliability and collaboration.
      </p>
    </div>
  );
}