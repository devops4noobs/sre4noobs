export default function AthenaPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">AWS</h2>
      <p className="text-gray-300 mb-4">Use Athena to query CloudWatch Logs in real time. Steps:</p>
      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <li>Export CloudWatch Logs to S3 via subscription filters</li>
        <li>Create a Glue table with correct schema</li>
        <li>Use SQL queries in Athena (e.g. top 4xx errors)</li>
        <li>Integrate into dashboards or automated reports</li>
      </ul>
    </div>
  );
}
