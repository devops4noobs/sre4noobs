export default function InfraPage() {
  return (
    <main className="p-6 bg-gray-900 text-white ml-64 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Kubernetes Infrastructure</h1>
      <p className="mb-4">
        Managing Kubernetes infrastructure involves setting up clusters, nodes, and storage for reliability and scalability.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Cluster Setup</strong>: Use tools like kubeadm or managed services (e.g., EKS, GKE).</li>
        <li><strong>Node Management</strong>: Monitor node health and capacity with tools like Prometheus.</li>
        <li><strong>Storage Solutions</strong>: Configure Persistent Volumes (PV) and Persistent Volume Claims (PVC).</li>
        <li><strong>Networking</strong>: Set up CNI plugins (e.g., Calico, Flannel) for pod communication.</li>
      </ul>
      <p className="mt-4">
        SREs use these practices to minimize downtime and optimize resource utilization.
      </p>
    </main>
  );
}