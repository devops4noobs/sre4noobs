export default function SREPrinciplesPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">SRE Principles</h2>
      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <li>✅ Embrace risk with error budgets</li>
        <li>⚙️ Automate everything to eliminate toil</li>
        <li>📏 Define SLIs and SLOs to measure reliability</li>
        <li>🤝 Foster collaboration between devs and ops</li>
        <li>📝 Conduct blameless postmortems</li>
      </ul>
    </div>
  );
}
