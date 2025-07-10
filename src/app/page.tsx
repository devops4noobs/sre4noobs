export default function HomePage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">
        Welcome to the SRE Learning Platform
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">

        {/* What is SRE Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">What is SRE?</h2>
          <p className="mb-4">
            Site Reliability Engineering (SRE) combines software and systems engineering to build scalable, reliable, and highly available systems.
            SREs aim to automate operations, enhance reliability, and reduce manual toil.
          </p>

          <h3 className="text-xl font-semibold text-indigo-400">What does a SRE do day-to-day?</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Monitor system health and respond to incidents</li>
            <li>Automate repetitive operational tasks to reduce toil</li>
            <li>Define and measure SLIs, SLOs, and error budgets</li>
            <li>Run postmortems and conduct root cause analyses (RCA)</li>
            <li>Improve CI/CD and deployment pipelines</li>
            <li>Collaborate with development teams</li>
          </ul>

          <h3 className="text-xl font-semibold text-indigo-400">Core SRE Principles</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Balance risk and reliability with error budgets</li>
            <li>Automate to reduce operational toil</li>
            <li>Use SLIs/SLOs to measure reliability</li>
            <li>Drive decisions with error budgets</li>
            <li>Conduct blameless postmortems</li>
          </ul>

          <h3 className="text-xl font-semibold text-indigo-400">SRE Pillars</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Monitoring & Alerting:</strong> Detect problems early</li>
            <li><strong>Incident Management:</strong> Handle incidents efficiently</li>
            <li><strong>Automation & Tooling:</strong> Reduce manual work</li>
            <li><strong>Capacity Planning:</strong> Prepare for growth</li>
            <li><strong>Change Management:</strong> Deploy safely</li>
            <li><strong>Postmortem & RCA:</strong> Learn from failures</li>
          </ul>
        </section>

        {/* Observability Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Observability vs Monitoring</h2>
          <p className="mb-4">
            In today&apos;s fast-paced digital landscape, ensuring system reliability is critical across industries. Organizations strive to deliver seamless user experiences while maintaining operational transparency. To meet these demands, robust monitoring and observability strategies are essential. Though often confused, monitoring and observability serve distinct yet complementary roles. Monitoring focuses on tracking predefined metrics to detect known issues, such as CPU usage spikes or error rates crossing a threshold. Observability, however, goes deeper, enabling teams to explore a system&apos;s internal state to diagnose complex, unpredictable problems by correlating metrics, logs, and traces.
          </p>

          <h3 className="text-xl font-semibold text-indigo-400">Modern Tech Stack for Observability:</h3>
          <p>To achieve robust observability, organizations rely on a modern tech stack tailored to collect, analyze, and visualize system data. Here’s how leading tools contribute:</p>
          <br></br>

          <h3 className="text-xl font-semibold text-indigo-400">Monitoring vs. Observability: A Clear Distinction</h3>
          <ul className="list-disc list-inside space-y-1">
            <h3 className="text-l font-semibold text-indigo-400">Monitoring</h3>
            <li><strong>Purpose:</strong> Tracks known issues using predefined metrics and alerts.</li>
            <li><strong>Scope:</strong> Focuses on specific, expected failure modes (e.g., server downtime, high latency).</li>
            <li><strong>Approach:</strong> Reactive; answers “what” is happening (e.g., “the API is slow”).</li>
            <li><strong>Example:</strong> Alerting when a website&apos;s response time exceeds 500ms or when error rates increase by 10%.</li>
            <li><strong>Limitations:</strong> Struggles with unknown issues or complex systems where root causes aren&apos;t predefined.</li>
            <h3 className="text-l font-semibold text-indigo-400">Observability</h3>
            <li><strong>Purpose:</strong> Provides deep insights into a system’s behavior to understand both known and unknown issues.</li>
            <li><strong>Scope:</strong> Captures comprehensive data (metrics, logs, traces) to explore dynamic, unpredictable failures.</li>
            <li><strong>Approach:</strong> Proactive; answers “why” something is happening (e.g., “the API is slow due to a database bottleneck”).</li>
            <li><strong>Example:</strong> Tracing a user request across microservices to identify a third-party API causing delays or analyzing logs to uncover an intermittent authentication failure.</li>
            <li><strong>Strengths:</strong>Enables root-cause analysis in complex, distributed systems.</li>
          </ul>
          <br></br>
          <ul className="list-none space-y-2 mb-4">
            <li><strong>⚡️ SignalFx (now Splunk Observability Cloud):</strong> A SaaS solution for real-time monitoring and analytics, it excels at high-speed data ingestion and streaming analytics. It&apos;s ideal for detecting and responding to issues across infrastructure and applications in seconds.</li>
            <li><strong>☁️ AWS CloudWatch:</strong> A monitoring and observability service that collects metrics, logs, and events from AWS resources and applications. It provides real-time insights, automated dashboards, and alarms for detecting issues like resource utilization spikes or application errors.</li>
            <li><strong>🔹 Prometheus:</strong> TA lightweight, scalable tool for collecting real-time metrics. It&apos;s widely used in cloud-native environments to monitor latency, API performance, memory usage, and error rates, with alerting for immediate issue detection.</li>
            <li><strong>📊 Grafana:</strong> A visualization platform that transforms data from sources like Prometheus into intuitive dashboards. It provides real-time views of system health, enabling both technical and non-technical stakeholders to monitor performance and trends.</li>
            <li><strong>📁 Kibana:</strong> Part of the Elastic Stack, Kibana makes log data actionable. It supports querying large volumes of logs for debugging, visualizing anomalies, and creating dashboards for long-term trend analysis.</li>
            <li><strong>📡 OpenTelemetry:</strong> Essential for distributed systems, OpenTelemetry captures end-to-end request traces across microservices. It helps identify bottlenecks, measure third-party service impacts, and debug complex workflows.</li>
          </ul>
          <br></br>
          <h3 className="text-xl font-semibold text-indigo-400">Why Observability Matters</h3>
          <p>
            While monitoring ensures systems stay operational by catching known issues, observability empowers teams to understand and resolve unpredictable problems in dynamic environments. Together, they build resilient systems that maintain user trust and operational efficiency. By leveraging tools like SignalFX, Prometheus, Grafana, Kibana, and OpenTelemetry, organizations can create transparent, intelligent systems that not only stay online but also adapt to evolving challenges.
          </p>
        </section>
      </div>
    </div>
  );
}
