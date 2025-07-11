export default function KubernetesPage() {
  return (
    <main className="p-6 bg-gray-900 text-white ml-64 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Kubernetes in SRE</h1>
      <p className="mb-4">
        Kubernetes (K8s) is the cornerstone of modern cloud-native infrastructure, enabling SREs to manage scale, automate deployments, and ensure reliability across hybrid and multi-cloud environments. Learn the fundamentals, practical tools, and advanced strategies to master K8s.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><a href="/kubernetes/fundamental-concepts" className="text-purple-400 hover:underline">Fundamental Kubernetes Concepts</a></li>
        <li><a href="/kubernetes/cheatsheets" className="text-purple-400 hover:underline">Kubernetes Cheatsheets</a></li>
        <li><a href="/kubernetes/infra" className="text-purple-400 hover:underline">K8s Infrastructure</a></li>
      </ul>
    </main>
  );
}