export default function ReleaseEngineering() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Release Engineering</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <p className="mb-4">
          The `&quot;`Release Engineering`&quot;` pillar of Site Reliability Engineering (SRE) focuses on delivering software updates safely, reliably, and efficiently. By integrating reliability into the release process, SRE teams minimize outages caused by changes, ensuring a seamless experience for users while supporting rapid development cycles.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Core Concept: Safe and Reliable Releases</h2>
        <p className="mb-4">
          Release engineering in SRE involves designing processes to deploy code changes with minimal risk. This includes automated testing, staged rollouts, and post-release monitoring, transforming releases from potential disruption points into opportunities for improvement and innovation.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🚀 Key Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Canary Releases:</strong> Deploy to a small subset of users to test stability.</li>
          <li><strong>Progressive Rollouts:</strong> Gradually increase deployment scope with feature flags.</li>
          <li><strong>Automated Testing:</strong> Validate changes with unit, integration, and performance tests.</li>
          <li><strong>Rollback Mechanisms:</strong> Enable quick reversions if issues arise.</li>
          <li><strong>Post-Release Monitoring:</strong> Track SLOs to assess release health.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📋 Examples of Release Engineering</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🌐</span>
            <p>
              A social media platform rolls out a new feed algorithm to 1% of users, confirming no performance drop before full deployment.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📱</span>
            <p>
              A mobile app uses feature flags to enable a new login feature for 5% of users, rolling back after detecting a 2% crash rate.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">💾</span>
            <p>
              A database service automates schema updates with a rollback plan, preventing data corruption during a major release.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🤖 Benefits of Release Engineering</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Reduced Risk:</strong> Minimizes outages with staged deployments.</li>
          <li><strong>Faster Delivery:</strong> Accelerates feature rollouts with confidence.</li>
          <li><strong>Improved Quality:</strong> Catches issues early through automation.</li>
          <li><strong>Team Alignment:</strong> Aligns dev and ops with shared release goals.</li>
          <li><strong>Resilience:</strong> Ensures quick recovery with rollback options.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Automate the entire release pipeline, from build to deploy.</li>
          <li>Test in production-like environments before rollouts.</li>
          <li>Use canary analysis to validate each deployment phase.</li>
          <li>Maintain a rollback strategy for every release.</li>
          <li>Monitor post-release metrics against SLOs in real-time.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📝 Sample Release Workflow</h2>
        <p className="mb-4 italic">
          <strong>Canary Deployment Steps:</strong><br />
          1. Deploy to 1% of traffic.<br />
          2. Monitor latency and error rate for 10 minutes.<br />
          3. If stable, increase to 25%, then 100% over 1 hour.<br />
          4. Rollback if errors exceed 0.5%.
        </p>

        <p className="text-gray-400 mt-6">
          Release engineering in SRE bridges the gap between speed and stability, enabling teams to deliver value while maintaining robust service reliability.
        </p>
      </section>
    </div>
  );
}