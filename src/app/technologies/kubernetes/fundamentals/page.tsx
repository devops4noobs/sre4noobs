export default function FundamentalConceptsPage() {
  return (
    <main className="p-6 bg-gray-900 text-white overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Fundamental Kubernetes Concepts</h1>
      <p className="mb-4">
        Kubernetes (K8s) is the backbone of cloud-native computing, enabling SREs to automate, scale, and manage containerized applications. Understanding its fundamental concepts is crucial for designing reliable systems and mitigating issues like those outlined in incident reports (e.g., impact, root causes). Below are the core building blocks every SRE should master.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-purple-400">Pods</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Definition</strong>: The smallest deployable units in Kubernetes, running one or more containers.</li>
          <li><strong>Issue Impact</strong>: Pod failures (e.g., crashes due to resource limits) can disrupt services; monitor with liveness probes.</li>
          <li><strong>Preliminary Direct Cause</strong>: Often due to misconfigured containers or node issues; investigate logs for root causes.</li>
          <li><strong>Process Improvements</strong>: Use pod anti-affinity to distribute workloads and enhance resilience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-purple-400">Nodes</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Definition</strong>: Worker machines (physical or virtual) that host pods, managed by the control plane.</li>
          <li><strong>Issue Impact</strong>: Node outages affect all pods; plan for high availability with multiple nodes.</li>
          <li><strong>Preliminary Direct Cause</strong>: Hardware failures or resource exhaustion; use cluster autoscaler to mitigate.</li>
          <li><strong>Process Improvements</strong>: Regularly monitor node health with tools like Prometheus.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-purple-400">Deployments</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Definition</strong>: Manage pod replicas and updates, ensuring desired state is maintained.</li>
          <li><strong>Issue Impact</strong>: Failed deployments can cause downtime; use rolling updates to minimize impact.</li>
          <li><strong>Preliminary Direct Cause</strong>: Configuration errors or image pull failures; validate YAML before applying.</li>
          <li><strong>Process Improvements</strong>: Implement canary deployments for safer rollouts.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-purple-400">Services</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Definition</strong>: Abstract network endpoints to enable communication between pods and external access.</li>
          <li><strong>Issue Impact</strong>: Service misconfiguration can block traffic; ensure proper selector matching.</li>
          <li><strong>Preliminary Direct Cause</strong>: Incorrect labels or port settings; test with `kubectl describe service`.</li>
          <li><strong>Process Improvements</strong>: Use Ingress for external routing and load balancing.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-purple-400">ConfigMaps & Secrets</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Definition</strong>: Store configuration data and sensitive information for pods.</li>
          <li><strong>Issue Impact</strong>: Exposure of Secrets can compromise security; encrypt and rotate regularly.</li>
          <li><strong>Preliminary Direct Cause</strong>: Misconfigured mounts or permissions; audit with `kubectl get secrets`.</li>
          <li><strong>Process Improvements</strong>: Use external vaults (e.g., HashiCorp Vault) for advanced security.</li>
        </ul>
      </section>

      <p className="mt-4">
        Mastering these concepts enables SREs to build resilient Kubernetes clusters, aligning with best practices for reliability and scalability.
      </p>
    </main>
  );
}