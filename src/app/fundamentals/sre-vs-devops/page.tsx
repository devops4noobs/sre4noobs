export default function SreVsDevOps() {
  return (
    <div >
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">SRE vs. DevOps: Key Differences and Similarities</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto"> {/* Increased max-width and centered */}
        <p className="mb-4">
          Site Reliability Engineering (SRE) and DevOps are both methodologies aimed at improving software delivery and system reliability, but they approach these goals differently. While DevOps focuses on cultural and process changes to bridge development and operations, SRE applies engineering principles to operations with specific metrics and practices.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Core Similarities</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Both emphasize automation, collaboration, and continuous improvement.</li>
          <li>They aim to reduce silos between teams and accelerate delivery.</li>
          <li>Shared tools like CI/CD pipelines, monitoring, and infrastructure as code.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Key Differences</h2>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-gray-700 border border-gray-600">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-gray-600 text-left">Aspect</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">DevOps</th>
                <th className="px-4 py-2 border-b border-gray-600 text-left">SRE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">Origin</td>
                <td className="px-4 py-2 border-b border-gray-600">Emerged from agile practices; popularized by the DevOps movement (e.g., The Phoenix Project book).</td>
                <td className="px-4 py-2 border-b border-gray-600">Created by Google; detailed in the SRE book by Ben Treynor Sloss.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">Focus</td>
                <td className="px-4 py-2 border-b border-gray-600">Cultural shift, processes, and tools for faster development and deployment.</td>
                <td className="px-4 py-2 border-b border-gray-600">Engineering discipline for reliability, using SLOs, error budgets, and blameless postmortems.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">Key Metrics</td>
                <td className="px-4 py-2 border-b border-gray-600">Deployment frequency, lead time, change failure rate, MTTR (Mean Time to Recovery).</td>
                <td className="px-4 py-2 border-b border-gray-600">SLOs (Service Level Objectives), error budgets, toil reduction.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">Team Structure</td>
                <td className="px-4 py-2 border-b border-gray-600">Cross-functional teams; "You build it, you run it."</td>
                <td className="px-4 py-2 border-b border-gray-600">Dedicated SRE teams (often 50% ops, 50% dev); caps on operational work.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-gray-600">Risk Management</td>
                <td className="px-4 py-2 border-b border-gray-600">Emphasizes experimentation and fast feedback.</td>
                <td className="px-4 py-2 border-b border-gray-600">Uses error budgets to balance reliability and innovation.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Examples</td>
                <td className="px-4 py-2">Implementing CI/CD with Jenkins, using Docker/Kubernetes for orchestration.</td>
                <td className="px-4 py-2">Setting 99.9% uptime SLOs, conducting chaos engineering tests.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="text-2xl font-semibold text-indigo-300 mb-4">When to Use Each</h2>
        <p className="mb-4">
          DevOps is ideal for organizations starting their transformation journey, focusing on culture and automation. SRE is better suited for mature teams needing precise reliability engineering, often building on DevOps foundations.
        </p>
        
        <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Real-World Example</h2>
        <p className="mb-4">
          At Google, SRE teams manage services like Gmail with error budgets—if reliability is high, they can push more features (DevOps-like innovation); if not, they focus on stability.
        </p>
        
        <p className="text-sm text-gray-400 mt-8">
          Further Reading: Check out the SRE Pillars section for deeper dives into SRE-specific practices.
        </p>
      </section>
    </div>
  );
}