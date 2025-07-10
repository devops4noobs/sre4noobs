export default function EliminatingToil() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Eliminating Toil</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <p className="mb-4">
          The "Eliminating Toil" pillar of Site Reliability Engineering (SRE) emphasizes reducing repetitive, manual tasks that offer little long-term value. By automating toil, SRE teams free up engineers to focus on innovation, improve system reliability, and prevent burnout, aligning with the goal of scalable and efficient operations.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Core Concept: Defining Toil</h2>
        <p className="mb-4">
          Toil is work that is manual, repetitive, reactive, interrupt-driven, and lacks enduring benefit. According to Google SRE practices, if a task is performed more than once, it’s a candidate for automation. Eliminating toil is about transforming operational overhead into strategic improvement.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🛠️ Characteristics of Toil</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Manual:</strong> Requires human intervention rather than automation.</li>
          <li><strong>Repetitive:</strong> Occurs regularly with little variation.</li>
          <li><strong>Reactive:</strong> Responds to incidents rather than preventing them.</li>
          <li><strong>Interrupt-Driven:</strong> Disrupts planned work with urgent tasks.</li>
          <li><strong>No Lasting Value:</strong> Doesn’t improve the system long-term.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📋 Examples of Toil</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">🔄</span>
            <p>
              Manually restarting a server after a crash every few hours.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📦</span>
            <p>
              Copying files via SSH to deploy new code versions.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📊</span>
            <p>
              Building custom dashboards for each new service from scratch.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📞</span>
            <p>
              Responding to low-priority alerts during off-hours.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🤖 Automation Strategies</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Auto-Recovery:</strong> Scripts to restart failed services automatically.</li>
          <li><strong>CI/CD Pipelines:</strong> Automate code deployment with testing.</li>
          <li><strong>Infrastructure as Code:</strong> Use tools like Terraform for provisioning.</li>
          <li><strong>Alert-Driven Remediation:</strong> Trigger fixes based on monitoring alerts.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🌟 Real-World Examples</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">💻</span>
            <p>
              A financial firm automated server patching, reducing manual effort by 200 hours annually.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">⏱️</span>
            <p>
              An e-commerce site implemented auto-scaling scripts, cutting response times to incidents from 30 minutes to 2 minutes.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">📈</span>
            <p>
              A SaaS company used a deployment pipeline to eliminate manual rollbacks, saving 50 hours per quarter.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 Best Practices</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Identify toil by tracking time spent on manual tasks weekly.</li>
          <li>Prioritize automation for high-frequency toil first.</li>
          <li>Validate automation with testing to ensure reliability.</li>
          <li>Monitor automation outcomes to refine processes.</li>
          <li>Train teams to recognize and report toil opportunities.</li>
        </ul>

        <p className="text-gray-400 mt-6">
          Eliminating toil is a continuous effort that enhances efficiency, reliability, and team morale, paving the way for a more innovative SRE practice.
        </p>
      </section>
    </div>
  );
}