export default function GitBestPractices() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Git Best Practices</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <p className="mb-4">
          Git best practices are vital for SRE teams to ensure code reliability, collaboration, and efficient deployments. They minimize errors in production, enable quick recoveries, and support scalable systems. Surprise: Integrated with emerging GitOps trends for automated IaC in 2025, drawing from production examples at companies like Google and Netflix.<grok-card data-id="d35aa7" data-type="citation_card"></grok-card><grok-card data-id="17b223" data-type="citation_card"></grok-card>
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Core Concept: Efficient Version Control</h2>
        <p className="mb-4">
          Best practices in Git focus on structured workflows, clear commits, and automation to maintain code integrity. In SRE, they align with principles like toil reduction and error budgeting, ensuring changes are traceable and reversible in production environments.<grok-card data-id="ba6ca2" data-type="citation_card"></grok-card>
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🧠 Key Principles</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Commit Often:</strong> Small, atomic commits for easy review and rollback.</li>
          <li><strong>Descriptive Messages:</strong> Use conventional commits (e.g., feat:, fix:) for clarity.</li>
          <li><strong>Branch Discipline:</strong> Follow strategies like GitFlow or trunk-based.</li>
          <li><strong>Code Reviews:</strong> Mandate PRs with automated checks.</li>
          <li><strong>Security First:</strong> Scan for vulnerabilities in dependencies.</li>
          <li><strong>Automation:</strong> Use hooks and CI/CD for consistency.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📊 Types of Best Practices</h2>
        <p className="mb-4">
          Git practices span setup, workflow, and maintenance. Common categories include:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Commit Hygiene:</strong> Meaningful messages and squashing.</li>
          <li><strong>Branch Management:</strong> Naming conventions and cleanup.</li>
          <li><strong>Collaboration:</strong> PR templates and review guidelines.</li>
          <li><strong>Security:</strong> Secret scanning and signed commits.</li>
          <li><strong>Performance:</strong> LFS for large files and shallow clones.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🎯 Real-World Examples</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🌐</span>
            <p>
              Google enforces conventional commits in monorepos, enabling traceable changes across millions of files.<grok-card data-id="eba9c0" data-type="citation_card"></grok-card>
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📱</span>
            <p>
              Netflix uses GitOps with Argo CD for automated deployments, reducing manual toil in streaming services.<grok-card data-id="9a3a67" data-type="citation_card"></grok-card>
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🛒</span>
            <p>
              Amazon integrates secret scanning in GitHub Enterprise, preventing leaks in AWS repos.<grok-card data-id="eadf92" data-type="citation_card"></grok-card>
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Use .gitignore to exclude sensitive files.</li>
          <li>Rebase interactively for clean history.</li>
          <li>Sign commits with GPG for verification.</li>
          <li>Implement pre-commit hooks for linting.</li>
          <li>Leverage Git aliases for common commands.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📐 Calculating Commit Health</h2>
        <p className="mb-4 italic">
          <strong>Health Score = (Atomic Commits × Review Coverage) / Total Changes</strong><br />
          Example: 100 atomic commits, 90% reviewed, 120 changes = (100 × 0.9) / 120 = 0.75 – aim for >0.8.
        </p>

        <p className="text-gray-400 mt-6">
          Git best practices empower SRE teams to build resilient systems through disciplined version control.
        </p>
      </section>
    </div>
  );
}