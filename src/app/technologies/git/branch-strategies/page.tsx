export default function BranchStrategiesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Branch Strategies</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <p className="mb-4">
          Branch strategies in Git define how teams organize code changes, collaborate, and deploy to production. They minimize risks, enable efficient workflows, and support SRE goals like zero-downtime releases and quick recoveries. In production, the right strategy can reduce merge conflicts by 50% and speed up deployments.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Core Concept: Workflow Optimization</h2>
        <p className="mb-4">
          These strategies use branches to isolate work, integrate changes safely, and align with production needs. They balance speed (frequent merges) with stability (protected main branches), crucial for SRE in high-stakes environments.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🧠 Key Principles</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Isolation:</strong> Separate features to prevent production breaks.</li>
          <li><strong>Integration Frequency:</strong> Merge often to catch issues early.</li>
          <li><strong>Review Gates:</strong> Require PRs for production-quality code.</li>
          <li><strong>Automation:</strong> CI/CD on branches for validated changes.</li>
          <li><strong>Protection:</strong> Lock main branches in production repos.</li>
          <li><strong>Adaptability:</strong> Evolve with team size and release cadence.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📊 Types of Branch Strategies</h2>
        <p className="mb-4">
          Key strategies for production, with step-by-step commit processes:
        </p>
        <ul className="list-disc list-inside space-y-4 mb-4">
          <li><strong>GitFlow:</strong> Multi-branch model for versioned releases. Steps: 1. Branch from develop (git checkout -b feature/xyz develop). 2. Commit changes (git add .; git commit -m &quot;Add xyz&quot;). 3. Push branch (git push origin feature/xyz). 4. Create PR to develop. 5. After review/merge, create release branch for QA fixes. 6. Merge release to main/develop and tag.</li>
          <li><strong>GitHub Flow:</strong> Simple for continuous deployment. Steps: 1. Branch from main (git checkout -b feature/xyz). 2. Commit (git add .; git commit -m &quot;Implement xyz&quot;). 3. Push (git push origin feature/xyz). 4. Open PR to main with tests. 5. Merge after approval. 6. Deploy from main automatically.</li>
          <li><strong>GitLab Flow:</strong> Environment-focused. Steps: 1. Branch from main (git checkout -b feature/xyz). 2. Commit/push changes. 3. Merge to staging branch via MR. 4. Test in staging env. 5. Merge to production branch. 6. Deploy from production branch.</li>
          <li><strong>Trunk-Based:</strong> Main-only for fast production. Steps: 1. Commit small changes directly to main (git commit -m &quot;Add xyz with flag&quot;). 2. Use feature flags for incomplete work. 3. Push (git push origin main). 4. Run CI tests. 5. Deploy if tests pass. 6. Toggle flags in production.</li>
          <li><strong>Feature Branch:</strong> Isolated development. Steps: 1. Branch from main (git checkout -b feature/xyz). 2. Commit changes iteratively. 3. Push branch. 4. Create PR to main. 5. Address reviews. 6. Merge and deploy from main.</li>
          <li><strong>Release Flow:</strong> Stabilized releases. Steps: 1. Develop in develop branch. 2. Commit features (git commit -m &quot;Add xyz&quot;). 3. Create release branch from develop. 4. Fix bugs in release. 5. Merge to main/develop. 6. Tag and deploy from main.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🎯 Real-World Production Examples</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🌐</span>
            <p>
              Meta uses trunk-based in production for Facebook, committing to main with flags, handling billions of users via automated tests.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📱</span>
            <p>
              Uber employs GitHub Flow in production, with feature branches merged after CI, supporting 1M+ daily rides with minimal downtime.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🛒</span>
            <p>
              Shopify uses GitLab Flow in production, with env branches for staging/prod, enabling Black Friday scales without outages.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Automate PR approvals with tools like GitHub Actions for production merges.</li>
          <li>Monitor branch metrics (e.g., age, size) to prevent production delays.</li>
          <li>Use squash merges for clean history in production repos.</li>
          <li>Implement branch policies to enforce SLO-related tests.</li>
          <li>Train on strategy to align with production reliability goals.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📐 Calculating Branch Health</h2>
        <p className="mb-4 italic">
          <strong>Health Score = (Commits Per Day × Merge Success Rate) / Open Branches</strong><br />
          Example: 50 commits/day, 95% success, 10 open branches = (50 × 0.95) / 10 = 4.75 – aim for `{'>'}`5 in production.
        </p>

        <p className="text-gray-400 mt-6">
          Optimized branch strategies drive SRE success in production by enabling resilient, scalable systems.
        </p>
      </section>
    </div>
  );
}