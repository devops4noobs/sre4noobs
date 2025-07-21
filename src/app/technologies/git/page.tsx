export default function GitPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">About Git: Mastering Version Control for SRE Excellence</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <p className="mb-4">
          Git is a distributed version control system that's fundamental to modern SRE practices. It enables teams to track changes, collaborate efficiently, and maintain reliable infrastructure through code versioning. This pillar ensures SREs can implement auditable changes, quick rollbacks, and seamless integration in CI/CD pipelines.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Core Concept: Distributed Version Control</h2>
        <p className="mb-4">
          Git allows multiple developers to work on the same project without interfering with each other, using branches for isolation and merges for integration. In SRE, Git supports reliability by versioning configurations, scripts, and IaC, facilitating rapid recovery and compliance.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🧠 Key Principles</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Distribution:</strong> Every clone is a full repository, enabling offline work and redundancy.</li>
          <li><strong>Immutability:</strong> Commits are snapshots, ensuring historical integrity.</li>
          <li><strong>Branching Efficiency:</strong> Lightweight branches for parallel development.</li>
          <li><strong>Collaboration:</strong> Pull requests for reviews and discussions.</li>
          <li><strong>Traceability:</strong> Detailed logs and blame for auditing changes.</li>
          <li><strong>Extensibility:</strong> Hooks and integrations for automation.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📊 Types of Git Workflows</h2>
        <p className="mb-4">
          Git supports various workflows. Common types include:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Centralized:</strong> Single remote repo with direct commits to main (simple but risky).</li>
          <li><strong>Feature Branch:</strong> Short-lived branches for features, merged after review.</li>
          <li><strong>GitFlow:</strong> Structured with main, develop, feature, release branches.</li>
          <li><strong>Trunk-Based:</strong> Frequent commits to main with feature flags.</li>
          <li><strong>Forking:</strong> Personal forks for contributions in open-source.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🎯 Real-World Examples</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🌐</span>
            <p>
              Google uses monorepos with trunk-based development for massive-scale collaboration across thousands of engineers.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📱</span>
            <p>
              Microsoft employs GitHub Flow in Azure DevOps for continuous integration and rapid feature releases.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🛒</span>
            <p>
              Etsy leverages feature branches with rigorous PR reviews to ensure reliable e-commerce platform updates.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Commit often with clear messages following conventional commits.</li>
          <li>Use branch protection rules to require reviews and passing tests.</li>
          <li>Implement Git hooks for automated checks (e.g., linting, testing).</li>
          <li>Regularly rebase or merge from main to keep branches up-to-date.</li>
          <li>Leverage Git LFS for large files in SRE tools like container images.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📐 Calculating Merge Frequency</h2>
        <p className="mb-4 italic">
          <strong>Merge Frequency = Total Merges / (Active Developers × Work Days)</strong><br />
          Example: For 10 devs merging 50 times in 5 days, frequency = 50 / (10 × 5) = 1 merge per dev per day – aim higher for trunk-based.
        </p>

        <p className="text-gray-400 mt-6">
          Git empowers SRE teams to build resilient systems through versioned, collaborative workflows.
        </p>
      </section>
    </div>
  );
}