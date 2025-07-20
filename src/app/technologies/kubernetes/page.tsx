'use client';
import Link from 'next/link';

export default function KubernetesPage() {
  return (
    <main className="p-6 bg-gray-900 text-white ml-32 mr-32 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">About Kubernetes: Mastering Container Orchestration for SRE Excellence</h1>
      <p className="mb-4">
        Welcome to the Kubernetes section of Devops4Noobs – your ultimate guide to becoming a Site Reliability Engineer powerhouse! Kubernetes (often abbreviated as K8s) is the gold standard for managing containerized applications at scale. Whether you're a beginner DevOps engineer or an experienced SRE looking to optimize your infrastructure, this page will give you a solid foundation. Plus, unlock premium features like interactive cheatsheets, advanced infra tutorials, and SRE certifications to supercharge your learning and career.
      </p>

      <h2 className="text-2xl font-bold mb-2">What is Kubernetes?</h2>
      <p className="mb-4">
        Kubernetes is an open-source platform designed to automate deploying, scaling, and operating application containers. Originating from Google's internal systems (Borg), it was open-sourced in 2014 and has since become the de facto standard for container orchestration. In SRE terms, Kubernetes helps you maintain high availability, minimize downtime, and enforce reliability principles like SLOs (Service Level Objectives) through automation and self-healing.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Portability</strong>: Run your apps consistently across on-premises, hybrid, or public clouds (AWS, GCP, Azure).</li>
        <li><strong>Extensibility</strong>: Customize with plugins for monitoring (e.g., Prometheus), logging (e.g., ELK stack), and networking.</li>
        <li><strong>Community-Driven</strong>: Backed by the Cloud Native Computing Foundation (CNCF), with contributions from thousands of developers.</li>
      </ul>
      <p className="mb-4">
        Why learn Kubernetes as an SRE? It reduces toil by automating repetitive tasks, allowing you to focus on strategic reliability engineering. Professionals with Kubernetes skills earn 20-30% higher salaries – start your journey today!
      </p>

      <h2 className="text-2xl font-bold mb-2">Fundamental Concepts</h2>
      <p className="mb-4">
        Kubernetes builds on containers (e.g., Docker) to manage workloads efficiently. Here's a breakdown:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Containers</strong>: Lightweight, isolated environments that package code, dependencies, and configs. They solve "it works on my machine" issues by ensuring consistency from dev to prod.</li>
        <li><strong>Pods</strong>: The smallest deployable unit in Kubernetes – a group of one or more containers sharing storage and network. Pods are ephemeral; if one fails, Kubernetes replaces it automatically.</li>
        <li><strong>Nodes</strong>: Worker machines (VMs or physical servers) that run pods. Each node has a kubelet (agent) for communication with the control plane.</li>
        <li><strong>Services</strong>: Abstractions for exposing pods to the network, enabling load balancing and service discovery.</li>
        <li><strong>Deployments</strong>: Manage pod replicas, rollouts, and scaling. Ideal for stateless apps.</li>
        <li><strong>StatefulSets</strong>: For stateful apps (e.g., databases) that need persistent storage and stable identities.</li>
      </ul>
      

      <h2 className="text-2xl font-bold mb-2">Kubernetes Architecture: Infra Schemas and Components</h2>
      <p className="mb-4">
        Understanding Kubernetes architecture is crucial for SREs to design resilient systems. At its core, Kubernetes follows a master-worker model:
      </p>

      <h3 className="text-xl font-bold mb-2">High-Level Architecture Schema</h3>
      <img 
        src="https://kubernetes.io/images/docs/components-of-kubernetes.svg" 
        alt="Kubernetes High-Level Architecture Diagram" 
        className="w-full max-w-3xl mx-auto mb-4 " 
      />
      <p className="mb-4">
        <strong>Description</strong>:
        - <strong>Control Plane (Master)</strong>: The brain of the cluster. It makes global decisions (e.g., scheduling pods) and maintains the desired state. Components include:
          - <strong>API Server</strong>: Entry point for all requests; exposes the Kubernetes API.
          - <strong>Scheduler</strong>: Assigns pods to nodes based on resource availability and constraints.
          - <strong>Controller Manager</strong>: Runs controllers for replication, endpoints, etc.
          - <strong>etcd</strong>: Distributed key-value store for cluster data (highly available, consistent).
        - <strong>Nodes (Workers)</strong>: Run the actual workloads. Each node includes:
          - <strong>Kubelet</strong>: Ensures pods are running and healthy.
          - <strong>Container Runtime</strong>: Executes containers (e.g., containerd, CRI-O).
          - <strong>Kube Proxy</strong>: Manages network rules for service abstraction.
        - <strong>Pods & Infra Flow</strong>: Pods are scheduled on nodes via "bin packing" (efficient resource use). Self-healing restarts failed pods, and scaling adjusts replicas based on metrics (e.g., CPU usage).
      </p>

      <h3 className="text-xl font-bold mb-2">Advanced Infra Schema: Scaling and Reliability</h3>
      <img 
        src="https://kubernetes.io/images/docs/kubernetes-cluster-architecture.svg" 
        alt="Kubernetes Multi-Node Cluster Diagram" 
        className="w-full max-w-3xl mx-auto mb-4" 
      />
      <p className="mb-4">
        Imagine a multi-node cluster spanning availability zones. This setup ensures high availability – if AZ1 fails, traffic routes to AZ2. As an SRE, use Kubernetes to define SLOs (e.g., 99.99% uptime) and error budgets.
      </p>

      <h2 className="text-2xl font-bold mb-2">Benefits of Kubernetes for SRE</h2>
      <p className="mb-4">
        Kubernetes isn't just tech; it's a game-changer for reliability:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-4">
        <li><strong>Self-Healing</strong>: Automatically restarts failed containers and reschedules pods.</li>
        <li><strong>Scalability</strong>: Auto-scale based on demand, preventing outages during traffic spikes.</li>
        <li><strong>Observability</strong>: Integrate with tools like Prometheus and Grafana for metrics, logs, and traces.</li>
        <li><strong>Toil Reduction</strong>: Automate deployments, reducing manual interventions and errors.</li>
        <li><strong>Cost Efficiency</strong>: Optimize resource usage, lowering cloud bills by 30-50%.</li>
      </ul>
      <p className="mb-4">
        Real-world impact: Companies like Google, Netflix, and Spotify use Kubernetes to handle billions of requests reliably. As an SRE, mastering it means fewer incidents and more innovation time.
      </p>
      <p className="text-sm text-gray-400">
        *Last updated: July 20, 2025. Content sourced from official Kubernetes documentation and SRE best practices.*
      </p>
    </main>
  );
}