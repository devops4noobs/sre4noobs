export default function Simplicity() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Simplicity</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <p className="mb-4">
          The "Simplicity" pillar of Site Reliability Engineering (SRE) advocates for designing and maintaining systems that are easy to understand, manage, and scale. By reducing complexity, SRE teams enhance reliability, reduce debugging time, and lower the cognitive load on engineers, aligning with the goal of sustainable operations.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Core Concept: Complexity as a Liability</h2>
        <p className="mb-4">
          Complex systems are prone to failures, harder to debug, and more resource-intensive to maintain. Simplicity in SRE means stripping away unnecessary layers, optimizing designs, and prioritizing clarity, ensuring systems remain robust and manageable as they grow.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🧩 Key Principles</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Minimal Design:</strong> Use the fewest components necessary to achieve functionality.</li>
          <li><strong>Clarity:</strong> Ensure code and configurations are readable and well-documented.</li>
          <li><strong>Modularity:</strong> Break systems into manageable, independent parts.</li>
          <li><strong>Redundancy Reduction:</strong> Avoid duplicate processes or tools unless critical.</li>
          <li><strong>Ease of Maintenance:</strong> Design for quick updates and troubleshooting.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📋 Examples of Simplicity in Practice</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🌐</span>
            <p>
              A web service simplifies its caching layer from three tiers to one, reducing latency by 30% and maintenance overhead.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">💾</span>
            <p>
              A database team consolidates redundant backup scripts into a single, streamlined process, cutting execution time by half.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📊</span>
            <p>
              A monitoring system removes unused metrics, simplifying dashboards and improving alert accuracy.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🤖 Benefits of Simplicity</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Improved Reliability:</strong> Fewer components mean fewer failure points.</li>
          <li><strong>Faster Debugging:</strong> Easier to identify and fix issues in simple systems.</li>
          <li><strong>Scalability:</strong> Simple designs scale more predictably.</li>
          <li><strong>Team Efficiency:</strong> Reduces training and operational effort.</li>
          <li><strong>Cost Savings:</strong> Lowers maintenance and infrastructure costs.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Evaluate complexity before adding new features or tools.</li>
          <li>Refactor legacy systems to remove redundant code or processes.</li>
          <li>Use standard, well-understood technologies where possible.</li>
          <li>Document design decisions to maintain simplicity over time.</li>
          <li>Conduct regular reviews to identify and simplify bottlenecks.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📝 Simplicity Checklist</h2>
        <p className="mb-4 italic">
          <strong>Before Deployment:</strong><br />
          - Does this add unnecessary complexity?<br />
          - Can existing components handle the task?<br />
          - Is the design documented and clear?<br />
          - Have we tested for simplicity in maintenance?
        </p>

        <p className="text-gray-400 mt-6">
          Simplicity in SRE is the foundation for resilient, efficient, and sustainable systems, embodying the idea that less can indeed be more.
        </p>
      </section>
    </div>
  );
}