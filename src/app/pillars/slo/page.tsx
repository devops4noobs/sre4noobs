export default function SLOs() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Service Level Objectives (SLOs)</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <p className="mb-4">
          The "Service Level Objectives" (SLOs) pillar is a cornerstone of Site Reliability Engineering (SRE), providing a measurable target for service reliability that aligns with user expectations. SLOs help teams balance innovation with stability, ensuring services meet defined performance standards while allowing for calculated risk-taking.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Core Concept: Defining Reliability</h2>
        <p className="mb-4">
          SLOs are specific, measurable goals that quantify how reliable a service should be, such as uptime, latency, or error rates. They are derived from Service Level Indicators (SLIs) and may be part of Service Level Agreements (SLAs) for contractual commitments. This pillar ensures teams have a clear target to strive for and a framework to assess performance.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🧠 Key Principles</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>User-Centric:</strong> Reflect what users value, like fast response times or availability.</li>
          <li><strong>Measurable:</strong> Based on quantifiable SLIs (e.g., 99.9% uptime).</li>
          <li><strong>Balanced Approach:</strong> Avoid over-engineering by setting realistic targets.</li>
          <li><strong>Regular Review:</strong> Adjust SLOs as user needs or system capabilities evolve.</li>
          <li><strong>Focused Scope:</strong> Limit to a few critical metrics to maintain clarity.</li>
          <li><strong>Continuous Improvement:</strong> Use SLOs to drive ongoing enhancements.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📊 Types of SLOs</h2>
        <p className="mb-4">
          SLOs can cover various aspects of service performance. Common types include:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Availability:</strong> Percentage of time the service is operational (e.g., 99.95%).</li>
          <li><strong>Latency:</strong> Response time within a threshold (e.g., 95% of requests under 200ms).</li>
          <li><strong>Error Rate:</strong> Proportion of failed requests (e.g., less than 0.1% 5xx errors).</li>
          <li><strong>Throughput:</strong> Volume of successful transactions (e.g., 1000 requests per second).</li>
          <li><strong>Freshness:</strong> Timeliness of data updates (e.g., within 5 minutes).</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🎯 Real-World Examples</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🌐</span>
            <p>
              A web hosting provider sets an SLO of 99.99% uptime, allowing only 4.32 minutes of downtime per month, monitored via synthetic checks.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📱</span>
            <p>
              A mobile app aims for 99% of API calls to complete under 500ms, adjusting server capacity during peak usage to meet this target.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🛒</span>
            <p>
              An e-commerce platform maintains an SLO of less than 0.5% error rate during Black Friday sales, using load testing to ensure compliance.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Define SLOs based on user experience, not just technical metrics.</li>
          <li>Use SLIs to track progress and trigger alerts when thresholds are at risk.</li>
          <li>Align SLOs with business objectives to ensure relevance.</li>
          <li>Document and communicate SLOs to all stakeholders for transparency.</li>
          <li>Review and adjust SLOs quarterly to reflect changing service demands.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📐 Calculating SLO Impact</h2>
        <p className="mb-4 italic">
          <strong>Downtime Allowance = (1 – SLO Target) × Total Time</strong><br />
          Example: For a 99.9% SLO over 30 days (43,200 minutes), allowance = (1 – 0.999) × 43,200 = 43.2 minutes.
        </p>

        <p className="text-gray-400 mt-6">
          SLOs empower SRE teams to deliver reliable services while fostering a culture of accountability and continuous improvement.
        </p>
      </section>
    </div>
  );
}