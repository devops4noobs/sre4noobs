export default function RCAPage() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md text-sm text-gray-300 space-y-4">
      <h3 className="text-xl font-semibold text-indigo-400">🔍 Root Cause Analysis (RCA)</h3>

      <p>
        Root Cause Analysis (RCA) is a systematic process for identifying the underlying causes of incidents or failures in a system. By digging beyond surface-level symptoms, RCA helps teams understand why issues occur and implement lasting solutions to prevent recurrence, improving system reliability and performance.
      </p>

      <h4 className="text-indigo-400 font-semibold">🎯 Why This Matters</h4>
      <p>
        Incidents disrupt user experiences and erode trust. RCA transforms failures into opportunities for improvement by uncovering the true origins of problems, enabling teams to fix systems proactively and prevent future issues, all while leveraging insights from observability tools.
      </p>

      <h4 className="text-indigo-400 font-semibold">🏁 Mission: Understand, Resolve, Prevent</h4>
      <ul className="space-y-1 list-none">
        <li><strong>Clarity:</strong> Pinpoint the exact causes of failures to avoid guesswork.</li>
        <li><strong>Prevention:</strong> Address root causes to reduce the likelihood of repeated incidents.</li>
        <li><strong>Resilience:</strong> Strengthen systems and processes through actionable insights.</li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">❓ What Is Root Cause Analysis?</h4>
      <p>
        RCA is a structured method to investigate incidents by tracing events back to their fundamental causes. It goes beyond fixing symptoms (e.g., restarting a server) to address deeper issues (e.g., misconfigured load balancers). RCA leverages observability data—metrics, logs, and traces—to build a comprehensive understanding of system behavior, fostering long-term reliability.
      </p>

      <h4 className="text-indigo-400 font-semibold">🧭 Guiding Principles</h4>
      <ol className="space-y-3 list-decimal list-inside">
        <li>
          <strong>Focus on Systems, Not Blame</strong><br />
          <em>Why?</em> Blaming individuals stifles collaboration and obscures systemic issues.<br />
          <em>What?</em> Analyze processes, tools, and configurations to identify failure points.
        </li>
        <li>
          <strong>Leverage Observability Data</strong><br />
          <em>Why?</em> Metrics, logs, and traces provide a factual basis for analysis.<br />
          <em>What?</em> Use tools like AWS CloudWatch, Splunk Observability Cloud, or OpenTelemetry to gather detailed system insights.
        </li>
        <li>
          <strong>Ask Iterative Questions</strong><br />
          <em>Why?</em> Surface-level answers rarely reveal the full story.<br />
          <em>What?</em> Apply techniques like “The 5 Whys” to dig deeper into causes (e.g., “Why did the API fail?” → “Because the database was overloaded.” → “Why was it overloaded?”).
        </li>
        <li>
          <strong>Map the Incident Timeline</strong><br />
          <em>Why?</em> A clear timeline reveals how events unfolded and where failures occurred.<br />
          <em>What?</em> Correlate logs, metrics, and traces to reconstruct the incident&apos;s progression.
        </li>
        <li>
          <strong>Prioritize Actionable Fixes</strong><br />
          <em>Why?</em> Identifying causes is only valuable if it leads to change.<br />
          <em>What?</em> Propose specific improvements, such as updating monitoring thresholds or automating recovery processes.
        </li>
        <li>
          <strong>Document and Share Insights</strong><br />
          <em>Why?</em> Knowledge sharing prevents similar issues across teams.<br />
          <em>What?</em> Publish RCA findings in a shared knowledge base, including recommended actions and lessons learned.
        </li>
        <li>
          <strong>Iterate and Improve</strong><br />
          <em>Why?</em> Systems evolve, and so must RCA processes.<br />
          <em>What?</em> Regularly review past RCAs to assess the effectiveness of fixes and refine analysis techniques.
        </li>
      </ol>

      <h4 className="text-indigo-400 font-semibold">📚 Example Scenarios</h4>
      <ul className="space-y-1 list-none">
        <li>
          <strong>Service Downtime:</strong> A web application crashed due to high traffic. RCA reveals insufficient autoscaling rules, leading to enhanced monitoring with AWS CloudWatch and updated scaling policies.
        </li>
        <li>
          <strong>Data Processing Failure:</strong> A batch job failed silently. RCA, using Splunk Observability Cloud logs, uncovers a missing error alert, prompting new Prometheus alerts for job failures.
        </li>
        <li>
          <strong>Latency Spike:</strong> Users experienced slow responses. RCA with Splunk Observability Cloud traces identifies a third-party API bottleneck, resulting in vendor negotiations and caching improvements.
        </li>
      </ul>

      <p className="italic text-gray-400">
        Root Cause Analysis is more than a troubleshooting tool—it&apos;s a commitment to building reliable systems, fostering collaboration, and turning failures into stepping stones for resilience.
      </p>
    </div>
  );
}