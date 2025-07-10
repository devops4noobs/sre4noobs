export default function MonitoringDistributedSystems() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Monitoring Distributed Systems</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <p className="mb-4">
          The `&quot;`Monitoring Distributed Systems`&quot;` pillar of Site Reliability Engineering (SRE) ensures the health, performance, and reliability of complex, distributed environments. By leveraging real-time data and actionable insights, SRE teams can detect issues early, optimize systems, and maintain service quality in dynamic, multi-component architectures.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Core Concept: Visibility into Complexity</h2>
        <p className="mb-4">
          Distributed systems, with their multiple services, nodes, and dependencies, require robust monitoring to track performance and identify failures. SRE emphasizes the `&quot;`four golden signals`&quot;`—latency, traffic, errors, and saturation—as a foundation for effective oversight, ensuring teams can respond proactively rather than reactively.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🧠 The Four Golden Signals</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Latency:</strong> The time taken to service a request, including queue and processing delays.</li>
          <li><strong>Traffic:</strong> The volume of requests or data flowing through the system.</li>
          <li><strong>Errors:</strong> The rate of failed requests or operations.</li>
          <li><strong>Saturation:</strong> The degree to which system resources (e.g., CPU, memory) are utilized.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📊 Monitoring Tools and Techniques</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong> Dashboards:</strong> Real-time views (e.g., Grafana, Kibana) for tracking signals.</li>
          <li><strong>Alerts:</strong> Configured to notify on significant deviations, avoiding alert fatigue.</li>
          <li><strong>Logging:</strong> Detailed logs for post-incident analysis.</li>
          <li><strong>Tracing:</strong> End-to-end request tracking across services (e.g., Jaeger, Zipkin).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🌟 Real-World Examples</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🌐</span>
            <p>
              A global CDN monitors latency spikes, adjusting server routing to maintain 200ms response times during traffic surges.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📡</span>
            <p>
              A microservices platform detects a 5% error rate via Prometheus, triggering an alert that resolves a misconfigured API endpoint.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">💾</span>
            <p>
              A database cluster uses saturation metrics to scale storage before hitting 90% capacity, preventing downtime.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Focus on end-user experience, not just system metrics.</li>
          <li>Implement hierarchical alerts (e.g., critical, warning) to reduce noise.</li>
          <li>Regularly review and update monitoring thresholds.</li>
          <li>Integrate monitoring with incident response workflows.</li>
          <li>Ensure data retention for trend analysis and audits.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📈 Example Monitoring Setup</h2>
        <p className="mb-4 italic">
          <strong>Alert Rule:</strong> Trigger if latency {">"} 300ms for 5% of requests over 5 minutes.<br />
          <strong>Dashboard Metric:</strong> Display traffic (requests/sec) and error rate (%) on a single pane.
        </p>

        <p className="text-gray-400 mt-6">
          Effective monitoring of distributed systems is the backbone of SRE, enabling proactive maintenance and resilience in the face of complexity.
        </p>
      </section>
    </div>
  );
}