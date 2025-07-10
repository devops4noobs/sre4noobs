export default function DetectorsPage() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md text-sm text-gray-300 space-y-4">
      <h3 className="text-xl font-semibold text-indigo-400">🔧 Detectors</h3>

      <p>
        Detectors in Splunk Observability Cloud (formerly SignalFx) are automated monitoring tools that analyze metrics and trigger alerts when predefined conditions are met. They enable proactive incident detection by identifying anomalies or thresholds in real-time data, ensuring rapid response to potential issues.
      </p>

      <h4 className="text-indigo-400 font-semibold">🎯 Why This Matters</h4>
      <p>
        In complex systems, manual monitoring can miss critical issues. Detectors leverage observability data from Splunk Observability Cloud and AWS CloudWatch to catch anomalies early, reducing downtime and ensuring system reliability. Integration with PagerDuty streamlines incident management workflows.
      </p>

      <h4 className="text-indigo-400 font-semibold">🏁 Mission: Detect, Alert, Act</h4>
      <ul className="space-y-1 list-none">
        <li><strong>Proactive Detection:</strong> Identify issues before they impact users.</li>
        <li><strong>Automation:</strong> Reduce manual oversight with real-time alerts.</li>
        <li><strong>Integration:</strong> Connect alerts to PagerDuty for faster incident response.</li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">❓ What Are Detectors?</h4>
      <p>
        Detectors are rule-based components in Splunk Observability Cloud that monitor metrics, such as latency, error rates, or resource usage, and trigger alerts when conditions (e.g., thresholds, anomalies) are detected. They integrate with AWS CloudWatch and Splunk to provide real-time insights, enabling teams to stay ahead of issues in dynamic environments.
      </p>

      <h4 className="text-indigo-400 font-semibold">🧭 Guiding Principles</h4>
      <ol className="space-y-3 list-decimal list-inside">
        <li>
          <strong>Define Clear Conditions</strong><br />
          <em>Why?</em> Precise rules ensure relevant alerts without noise.<br />
          <em>What?</em> Set thresholds (e.g., CPU > 80%) or anomaly detection based on historical data in Splunk Observability Cloud.
        </li>
        <li>
          <strong>Leverage Real-Time Data</strong><br />
          <em>Why?</em> Timely detection requires current metrics.<br />
          <em>What?</em> Integrate with AWS CloudWatch Metric Streams or Splunk Observability Cloud for high-frequency data ingestion.
        </li>
        <li>
          <strong>Prioritize Actionable Alerts</strong><br />
          <em>Why?</em> Alerts must guide teams to specific issues.<br />
          <em>What?</em> Use severity levels (e.g., Critical, Warning) and include context (e.g., affected service) in alerts sent to PagerDuty.
        </li>
        <li>
          <strong>Integrate with Incident Workflows</strong><br />
          <em>Why?</em> Alerts are only useful if acted upon.<br />
          <em>What?</em> Route alerts to PagerDuty for immediate team response and escalation.
        </li>
        <li>
          <strong>Refine and Tune</strong><br />
          <em>Why?</em> Over-alerting reduces effectiveness.<br />
          <em>What?</em> Regularly review alert performance using Splunk Observability Cloud dashboards to adjust thresholds and reduce false positives.
        </li>
        <li>
          <strong>Correlate with Splunk Data</strong><br />
          <em>Why?</em> Context speeds up diagnosis.<br />
          <em>What?</em> Use Splunk Observability Cloud to analyze metrics and logs alongside detector alerts for deeper investigation during incidents.
        </li>
        <li>
          <strong>Document and Learn</strong><br />
          <em>Why?</em> Alerts provide insights for system improvements.<br />
          <em>What?</em> Use detector-triggered incidents as inputs for Root Cause Analysis (RCA) in Splunk to prevent recurrence.
        </li>
      </ol>

      <h4 className="text-indigo-400 font-semibold">📊 Example SignalFlow Detectors</h4>
      <p>
        Below are example SignalFlow programs for detectors monitoring AWS metrics in Splunk Observability Cloud. These detectors use data from AWS CloudWatch, trigger alerts via PagerDuty, and can be visualized in Splunk dashboards. [Image Placeholder: Screenshot of Splunk Observability Cloud UI showing a detector configuration for HTTP 5xx errors, with SignalFlow code editor open.]
      </p>
      <ul className="space-y-3 list-none">
        <li>
          <strong>HTTP 4xx/5xx Error Rate</strong><br />
          Monitors client (4xx) and server (5xx) errors for Amazon API Gateway or ALB, calculating error rates as a percentage of total requests.<br />
          <pre className="bg-gray-900 p-3 rounded-md text-gray-200 text-xs">
            <code>
{`E = data('http_status.count', filter=filter('Status', '4*')).sum().publish(label='4xx')
G = data('http_status.count', filter=filter('Status', '5*')).sum().publish(label='5xx')
T = data('http_status.count').sum().publish(label='Total')
error_rate = ((E + G) / T * 100).publish(label='ErrorRate')
detect(when(error_rate > 5, '5m')).publish('HighErrorRate')
# Routes alert to PagerDuty for escalation`}
            </code>
          </pre>
          <p>
            This detector triggers when the combined 4xx/5xx error rate exceeds 5% for 5 minutes, using CloudWatch metrics ingested into Splunk Observability Cloud.[](https://stackoverflow.com/questions/76871918/signal-fx-signal-flow-calculating-error-rate)
          </p>
        </li>
        <li>
          <strong>TargetResponseTime Latency</strong><br />
          Detects high latency in ALB or API Gateway requests, alerting when response times exceed a threshold.<br />
          <pre className="bg-gray-900 p-3 rounded-md text-gray-200 text-xs">
            <code>
{`A = data('TargetResponseTime', filter=filter('LoadBalancer', 'app/*') and filter('stat', 'mean')).mean().publish(label='Latency')
detect(when(A > 0.5, '3m')).publish('HighLatency')
# Routes alert to PagerDuty for immediate response`}
            </code>
          </pre>
          <p>
            This detector alerts when the average `TargetResponseTime` exceeds 500ms for 3 minutes, sourced from CloudWatch. [Image Placeholder: Screenshot of Splunk Observability Cloud dashboard showing a latency chart with a detector alert.][](https://medium.com/poka-techblog/integrate-signalfx-with-statuspage-io-effortlessly-using-signalflow-6118d878c703)
          </p>
        </li>
        <li>
          <strong>EC2 CPU Utilization</strong><br />
          Monitors CPU usage for EC2 instances, triggering alerts for sustained high utilization.<br />
          <pre className="bg-gray-900 p-3 rounded-md text-gray-200 text-xs">
            <code>
{`C = data('CPUUtilization', filter=filter('InstanceId', '*')).mean(by=['InstanceId']).publish(label='CPU')
detect(when(C > 80, '10m')).publish('HighCPU')
# Integrates with PagerDuty for team notification`}
            </code>
          </pre>
          <p>
            This detector triggers when CPU utilization exceeds 80% for 10 minutes, using CloudWatch metrics synced to Splunk Observability Cloud.[](https://github.com/signalfx/signalflow-library/blob/master/library/signalfx/detectors/against_recent/README.md)
          </p>
        </li>
        <li>
          <strong>Network In/Out Anomalies</strong><br />
          Detects unusual network traffic patterns for AWS services like EC2 or ELB.<br />
          <pre className="bg-gray-900 p-3 rounded-md text-gray-200 text-xs">
            <code>
{`from signalfx.detectors.against_recent import against_recent
N = data('NetworkIn').mean(by=['aws_tag_service']).publish(label='NetworkIn')
against_recent.detector_mean_std(N, current_window=duration('5m'), historical_window=duration('1h'), fire_num_stddev=3).publish('NetworkAnomaly')
# Alerts routed to PagerDuty`}
            </code>
          </pre>
          <p>
            This detector uses the SignalFlow library to identify network traffic anomalies, comparing recent data against a historical baseline. [Image Placeholder: Screenshot of Splunk Observability Cloud UI showing network anomaly detector configuration.][](https://github.com/signalfx/signalflow-library/blob/master/library/signalfx/detectors/against_recent/README.md)
          </p>
        </li>
      </ul>

      <h4 className="text-indigo-400 font-semibold">📚 Example Scenarios</h4>
      <ul className="space-y-1 list-none">
        <li>
          <strong>High Latency Alert:</strong> A detector triggers when API latency exceeds 500ms, using AWS CloudWatch metrics. The team investigates with Splunk Observability Cloud, identifying a slow database query.
        </li>
        <li>
          <strong>Error Rate Spike:</strong> A detector alerts on a 10% increase in error rates via Splunk Observability Cloud data. The team uses Splunk dashboards to pinpoint a faulty deployment and rolls back.
        </li>
        <li>
          <strong>Resource Overload:</strong> A detector flags high CPU usage in an AWS EC2 instance. Integration with PagerDuty escalates the issue, and Splunk logs reveal a misconfigured application.
        </li>
      </ul>


      <p className="italic text-gray-400">
        Detectors are the backbone of proactive monitoring, transforming observability data from Splunk and AWS CloudWatch into actionable alerts that keep systems reliable and teams responsive.
      </p>
    </div>
  );
}