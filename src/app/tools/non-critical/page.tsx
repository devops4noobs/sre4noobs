export default function NonCriticalIssueTrackingProcess() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">Non-Critical Issue Tracking Process (SRE)</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
        <p className="mb-4">
          The Non-Critical Issue Tracking Process provides a systematic method for the SRE team to address issues that do not rise to the level of critical incidents. It enhances transparency, fosters knowledge acquisition, and supports proactive risk mitigation by recording and evaluating irregularities, self-correcting recoveries, and concerns raised by engineering teams.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">Core Concept: Proactive Reliability</h2>
        <p className="mb-4">
          By systematically recording non-critical issues, this process helps prevent minor irregularities from escalating. It supports SRE best practices by emphasizing learning from small incidents and strengthening reliability, all without the need for a full incident response.
        </p>
        <p className="mb-4">
          This process also tracks recurring issues, serving as a reference for future incidents. As a result, investigations can build on prior knowledge instead of starting from scratch.
        </p>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🧠 Key Principles</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>Transparency:</strong> Record all observed anomalies to keep the team informed.</li>
            <li><strong>Continuous Learning:</strong> Investigate underlying causes to reduce repeat issues.</li>
            <li><strong>Appropriate Response:</strong> Apply this process to issues that don't need urgent escalation.</li>
            <li><strong>Teamwork:</strong> Engage engineering teams for in-depth investigation as necessary.</li>
            <li><strong>Knowledge Sharing:</strong> Tag and distribute findings to enhance team expertise.</li>
            <li><strong>Streamlined Process:</strong> Use a consistent template to simplify ticket creation.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">
          <span role="img" aria-label="Bar chart" className="mr-2">📊</span>
          When to Use This Process
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Detected anomaly:</strong> An error, performance issue, or irregularity is noticed through monitoring or manual checks.</li>
            <li><strong>No urgent escalation:</strong> The situation does not require a full incident response or immediate escalation.</li>
            <li><strong>Self-resolving or minor intervention:</strong> The issue resolved itself or was fixed with minimal effort.</li>
            <li><strong>Opportunity for learning:</strong> SRE review can help prevent recurrence or provide insights into underlying causes.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">🎯 Process Overview</h2>
        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">1.</span>
            <p>
              <strong>Detection:</strong> Identify the issue through monitoring tools (e.g., SignalFx, CloudWatch Logs), alerts, or manual checks.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">2.</span>
            <p>
              <strong>Triage:</strong> SRE performs an initial investigation to assess the scope, impact, and recovery status.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">3.</span>
            <p>
              <strong>Decision Point:</strong> Evaluate if the issue qualifies as a Critical Incident (CI). If not, proceed with this process.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">4.</span>
            <p>
              <strong>JIRA Ticket Creation:</strong> Log the issue using the Non-Critical Issue Template in JIRA.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">5.</span>
            <p>
              <strong>Assignment:</strong> Assign the ticket to the appropriate engineering team for further analysis or resolution, or close if resolved.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">6.</span>
            <p>
              <strong>Follow-up & Closure:</strong> Update the ticket with investigation results, lessons learned, and any remediation steps.
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-indigo-400 mr-2">7.</span>
            <p>
              <strong>Tagging & Knowledge Sharing:</strong> Tag the ticket and share findings with the team to promote learning.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">💡 JIRA Ticket Template</h2>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Title:</strong> The ticket title should follow the format: [Tenant Name] - [Issue Title].</li>
          <li><strong>Summary:</strong> Provide a brief description of what was observed and what triggered the investigation.</li>
          <li><strong>Impact:</strong> Detail the impacted events, endpoints, or services, including any customer-facing effects.</li>
          <li><strong>Initial SRE Analysis:</strong> Describe how the issue was discovered, the checks performed, any logs or metrics reviewed, and how the issue was confirmed.</li>
          <li><strong>Root Cause:</strong> Include detailed information about the error, relevant metrics, numbers, and the timeframe of the issue.</li>
          <li><strong>Acceptance Criteria:</strong> Outline the next steps, such as monitoring for a specific duration or passing the ticket to the engineering team for further investigation.</li>
          <li><strong>Actions Taken:</strong> Document any immediate actions taken, such as restarting services, rotating containers, or applying temporary fixes.</li>
          <li><strong>Other Information:</strong> Add any additional context or useful information that could aid in resolving or understanding the issue.</li>
          <li><strong>Tags:</strong> Suggest relevant tags to categorize the ticket for easier tracking and knowledge sharing.</li>
          <li><strong>Lessons Learned:</strong> Summarize key takeaways or insights gained from the issue to prevent recurrence.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-indigo-400 mt-6 mb-4">📐 Related Content</h2>
        <p className="mb-4 italic">
          - Critical Incident (CI) Process<br />
          - Support Escalation<br />
          - Quicker Engineering Tip Sheet - Critical Incident (CI) Handling by Engineers<br />
          - Critical Issues and Support Escalation Ticket Labels - Engineering
        </p>

        <p className="text-gray-400 mt-6">
          This process empowers SRE teams to proactively manage non-critical issues, fostering a culture of continuous improvement and risk mitigation.
        </p>
      </section>
    </div>
  );
}