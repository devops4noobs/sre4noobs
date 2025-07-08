export default function KubernetesPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-400 mb-4">Kubernetes</h2>
      <p className="text-gray-300 mb-4">
        Kubernetes (K8S) is an open-source platform to automate deploying, scaling, and managing containerized applications.
      </p>
      <ul className="list-disc ml-6 space-y-2 text-gray-300">
        <li>Cluster architecture overview (master, nodes, pods)</li>
        <li>Managing workloads with Deployments and StatefulSets</li>
        <li>Services and networking basics</li>
        <li>ConfigMaps and Secrets</li>
        <li>Monitoring and logging in Kubernetes</li>
        <li>Using kubectl and YAML manifests</li>
      </ul>
    </div>
  );
}
