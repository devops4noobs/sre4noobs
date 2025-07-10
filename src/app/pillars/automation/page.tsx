export default function Automation() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Automation</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <p className="mb-4">
          The `&quot;`Automation`&quot;` pillar of Site Reliability Engineering (SRE) is about leveraging technology to reduce manual effort, enhance consistency, and scale operations efficiently. By automating repetitive tasks and processes, SRE teams can focus on innovation, improve system reliability, and respond to incidents more effectively.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Core Concept: Efficiency Through Automation</h2>
        <p className="mb-4">
          Automation replaces manual, error-prone tasks with reliable, repeatable processes. In SRE, this means scripting deployments, auto-scaling resources, and triggering remediation actions, ensuring systems operate smoothly with minimal human intervention while maintaining high standards of reliability.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🛠️ Key Areas for Automation</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Deployment:</strong> Automate code releases with CI/CD pipelines.</li>
          <li><strong>Incident Response:</strong> Trigger auto-recovery or notifications based on alerts.</li>
          <li><strong>Infrastructure:</strong> Provision and manage resources using Infrastructure as Code (IaC).</li>
          <li><strong>Monitoring:</strong> Automate data collection and alert generation.</li>
          <li><strong>Testing:</strong> Run automated tests to validate changes before deployment.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📋 Examples of Automation in Action</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🚀</span>
            <p>
              A cloud provider automates server scaling during traffic spikes, maintaining 99.95% uptime.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🔧</span>
            <p>
              An e-commerce platform uses a script to restart failed services, reducing downtime by 80%.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📊</span>
            <p>
              A data analytics firm automates dashboard updates, saving 15 hours of manual work weekly.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🤖 Benefits of Automation</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Consistency:</strong> Reduces human error in repetitive tasks.</li>
          <li><strong>Speed:</strong> Accelerates response times and deployments.</li>
          <li><strong>Scalability:</strong> Handles growing complexity without proportional effort.</li>
          <li><strong>Cost Efficiency:</strong> Lowers operational overhead over time.</li>
          <li><strong>Team Focus:</strong> Allows engineers to tackle strategic challenges.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Start with high-impact areas, like incident response or deployments.</li>
          <li>Test automation scripts in a staging environment before production.</li>
          <li>Monitor automation outcomes to ensure reliability.</li>
          <li>Document processes for transparency and maintenance.</li>
          <li>Iterate based on feedback from automated systems.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📝 Sample Automation Script</h2>
        <p className="mb-4 italic">
          <strong>Auto-Restart Script (Pseudo-Code):</strong><br />
          <code>{`
          if (service.status === "down") { restart(service); log("Service restarted"); }<br />
          alert("Service issue resolved") if (retry > 3);`}</code>
        </p>

        <p className="text-gray-400 mt-6">
          Automation is the engine of SRE, driving efficiency and enabling teams to build resilient, future-ready systems.
        </p>
      </section>
    </div>
  );
}