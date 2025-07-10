export default function EmbracingRisk() {
  return (
    <div >
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Embracing Risk</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto"> {/* Increased max-width and centered */}
        <p className="mb-4">
          The `&quot;`Embracing Risk`&quot;` pillar of Site Reliability Engineering (SRE) acknowledges that achieving 100% reliability is neither practical nor cost-effective. Instead, SRE encourages a calculated approach to risk management, using tools like error budgets to balance reliability with innovation. This principle empowers teams to ship features faster while maintaining an acceptable level of service performance.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Core Concept: Risk as a Trade-Off</h2>
        <p className="mb-4">
          Rather than avoiding failure entirely, SRE teams embrace the idea that some downtime or errors are inevitable. The key is to define an acceptable risk threshold and manage it proactively. This approach contrasts with traditional operations, where the focus might be on avoiding all risk at the expense of progress.
        </p>
        
        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🧠 Key Principles</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Acceptable Failure:</strong> Define how much failure is tolerable based on user needs.</li>
          <li><strong>Error Budgets:</strong> Use a quantifiable allowance for outages to guide decision-making.</li>
          <li><strong>Innovation vs. Stability:</strong> Prioritize feature development when reliability is strong, and focus on stability when it&apos;s at risk.</li>
          <li><strong>Data-Driven Decisions:</strong> Base risk acceptance on metrics, not assumptions.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📊 How Error Budgets Work</h2>
        <p className="mb-4">
          An error budget is the maximum amount of time a service can be unavailable or perform poorly while still meeting its Service Level Objective (SLO). For example:
        </p>
        <ul className="list-disc list-inside italic space-y-2 mb-4">
          <li>“99.9% uptime allows 43.2 minutes of downtime per month.”</li>
          <li>“99.95% uptime allows 21.6 minutes of downtime per month.”</li>
        </ul>
        <p className="mb-4">
          When the budget is intact, teams can push new features. If it’s exhausted, they prioritize reliability fixes.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🌟 Real-World Examples</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🚀</span>
            <p>
              A streaming service with a 99.9% SLO experiences a 30-minute outage. With 13.2 minutes of budget left, they proceed with a planned feature rollout, monitored closely.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🛠️</span>
            <p>
              After burning through 90% of their error budget due to multiple incidents, a cloud provider halts non-critical updates to restore stability.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🧪</span>
            <p>
              An e-commerce site runs chaos engineering tests during off-peak hours, using 5% of their budget to validate resilience.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Establish clear SLOs and communicate error budgets to all teams.</li>
          <li>Monitor budget usage in real-time with dashboards (e.g., Prometheus, Grafana).</li>
          <li>Conduct blameless reviews when budgets are exceeded to learn, not punish.</li>
          <li>Align risk-taking with business goals, not just technical metrics.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📐 Formula for Error Budget</h2>
        <p className="mb-4 italic">
          <strong>Error Budget = 100% – SLO Target</strong><br />
          Example: 100% – 99.9% = 0.1% (43.2 minutes/month for a 30-day period)
        </p>

        <p className="text-gray-400 mt-6">
          Embracing risk is about making informed choices. By leveraging error budgets, SRE teams turn potential failures into opportunities for growth and innovation.
        </p>
      </section>
    </div>
  );
}