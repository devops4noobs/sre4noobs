export default function PostmortemPage() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md text-sm text-gray-300 space-y-4">
  <h3 className="text-xl font-semibold text-indigo-400">📝 Blameless Postmortems</h3>

  <p>
    Blameless postmortems are a structured way for teams to examine incidents, learn from them, and reduce the chances of repeating the same mistakes. The goal isn’t to assign blame, but to improve systems, processes, and team collaboration.
  </p>

  <h4 className="text-indigo-400 font-semibold">🎯 Why This Matters</h4>
  <p>
    Every incident presents an opportunity to learn. A postmortem gives us time to reflect on what happened, understand why it occurred, and determine how we can make things more reliable in the future—without blaming anyone.
  </p>

  <h4 className="text-indigo-400 font-semibold">🏁 Mission: Learn, Improve, and Build Trust</h4>
  <ul className="space-y-1 list-none">
    <li><strong>Transparency:</strong> Openly discuss the timeline and decisions without fear.</li>
    <li><strong>Learning:</strong> Focus on system flaws instead of personal faults.</li>
    <li><strong>Growth:</strong> Use the lessons to strengthen tools, teams, and communication.</li>
  </ul>

  <h4 className="text-indigo-400 font-semibold">❓ What Is a Blameless Postmortem?</h4>
  <p>
    A blameless postmortem is a technical and cultural practice that encourages teams to review incidents by focusing on what went wrong in the system—not who made a mistake. It creates a safe space for truth, accountability, and long-term improvement.
  </p>

  <h4 className="text-indigo-400 font-semibold">🧭 Guiding Principles</h4>
  <ol className="space-y-3 list-decimal list-inside">
    <li>
      <strong>Create Psychological Safety</strong><br />
      <em>Why?</em> People share more openly when they’re not afraid of blame.<br />
      <em>What?</em> Frame the conversation around what the system allowed, not what a person did wrong.
    </li>
    <li>
      <strong>Analyze Systems, Not Individuals</strong><br />
      <em>Why?</em> Complex incidents usually involve many moving parts.<br />
      <em>What?</em> Map out process failures, missed signals, or unclear ownership.
    </li>
    <li>
      <strong>Use Evidence-Based Analysis</strong><br />
      <em>Why?</em> To prevent assumptions or finger-pointing.<br />
      <em>What?</em> Gather timelines, metrics, and logs to build a clear story.
    </li>
    <li>
      <strong>Investigate Root Causes</strong><br />
      <em>Why?</em> Fixing symptoms isn&apos;t enough.<br />
      <em>What?</em> Techniques like “The 5 Whys” help trace the deeper causes behind failure.
    </li>
    <li>
      <strong>Design Concrete Improvements</strong><br />
      <em>Why?</em> Insights need to turn into change.<br />
      <em>What?</em> Propose fixes, assign owners, and follow up on progress.
    </li>
    <li>
      <strong>Share Findings Across Teams</strong><br />
      <em>Why?</em> Other teams may face similar risks.<br />
      <em>What?</em> Publish learnings so improvements can scale across the org.
    </li>
    <li>
      <strong>Make It a Habit</strong><br />
      <em>Why?</em> Reliability is built over time.<br />
      <em>What?</em> Review past postmortems to track whether improvements worked.
    </li>
  </ol>

  <h4 className="text-indigo-400 font-semibold">📚 Example Scenarios</h4>
  <ul className="space-y-1 list-none">
    <li>
      <strong>System Outage:</strong> A configuration mistake caused downtime. A postmortem helps identify monitoring gaps or missing safeguards.
    </li>
    <li>
      <strong>Failed Deployment:</strong> A bug made it to production. The team reviews code review practices and deployment pipelines.
    </li>
    <li>
      <strong>Communication Breakdown:</strong> Teams were unaware of an incident. The review leads to clearer escalation and handoff procedures.
    </li>
  </ul>

  <p className="italic text-gray-400">
    Blameless postmortems are not just about fixing technical issues—they're a cultural investment in reliability, trust, and shared responsibility.
  </p>
</div>

  );
}
