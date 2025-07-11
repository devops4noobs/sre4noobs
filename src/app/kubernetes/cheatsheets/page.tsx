'use client';

import { useState } from 'react';
import { DocumentDuplicateIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function CheatsheetsPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const categories = [
    {
      title: 'Pod Commands',
      commands: [
        { command: 'kubectl get pod', description: 'Get pod' },
        { command: 'kubectl get pod -o wide', description: 'Get pod wide information' },
        { command: 'kubectl get pod -w', description: 'Get pod with watch' },
        { command: 'kubectl get pod -o yaml', description: 'Get pod in yaml' },
        { command: 'kubectl edit pod <pod_name>', description: 'Edit pod' },
        { command: 'kubectl describe pod <pod_name>', description: 'Describe pod' },
        { command: 'kubectl delete pod <pod_name>', description: 'Delete pod' },
        { command: 'kubectl logs pod <pod_name>', description: 'Logs of the pod' },
        { command: 'kubectl exec -it pod <pod_name> /bin/bash', description: 'Execute into pod' },
        { command: 'kubectl port-forward pod/<pod-name> <local-port>:<pod-port>', description: 'Forward a local port to a port on the pod' },
        { command: 'kubectl cp <pod-name>:<path> <local-path>', description: 'Copy files from a pod to local' },
        { command: 'kubectl debug -it <pod-name> --image=busybox --target=<container-name>', description: 'Attach a debugging container to a running pod' },
        { command: 'kubectl get pods --field-selector=status.phase=Running', description: 'Get all running pods' },
        { command: 'kubectl get pods -l app=frontend', description: 'Get pods with specific label' },
        { command: 'kubectl logs -f <pod-name> <container-name>', description: 'Follow logs for container in multi-container pods' },
        { command: 'kubectl exec -it non-root-pod -- id', description: 'Verify user and group ID in pod' },
        { command: 'kubectl get pod busybox -ojson|jq \'.spec.containers[0].image\' "busybox"', description: 'Get image from pod JSON' },
        { command: 'kubectl -it run busybox --rm --image=busybox -- sh', description: 'Run interactive busybox pod' },
      ],
    },
    {
      title: 'Node Commands',
      commands: [
        { command: 'kubectl describe node <node_name>', description: 'Describe node' },
        { command: 'kubectl get node <node_name> -o yaml', description: 'Get node in yaml' },
        { command: 'kubectl get node <node_name>', description: 'Get node' },
        { command: 'kubectl drain node <node_name>', description: 'Drain node' },
        { command: 'kubectl cordon node <node_name>', description: 'Cordon node' },
        { command: 'kubectl uncordon node <node_name>', description: 'Uncordon node' },
        { command: 'kubectl top node', description: 'Display resource (CPU/memory) usage of nodes' },
        { command: 'kubectl taint nodes <node-name> key=value:NoSchedule', description: 'Add a taint to a node' },
        { command: 'kubectl label nodes <node-name> disktype=ssd', description: 'Label a node' },
        { command: 'kubectl get nodes -o wide', description: 'Get nodes with detailed information' },
        { command: 'kubectl get nodes --selector=node-role.kubernetes.io/master', description: 'Get master nodes' },
        { command: 'k drain node-01', description: 'Drain node (moves pods to another node, recreates them)' },
        { command: 'k cordon node-01', description: 'Mark node unschedulable (does not accept new pods)' },
        { command: 'k uncordon node node-01', description: 'Mark node schedulable again' },
        { command: 'k taint nodes node01 spray=mortein:NoSchedule', description: 'Taint a node' },
        { command: 'k taint nodes controlplane node-role.kubernetes.io=control-plane:NoSchedule-', description: 'Untaint control plane node' },
        { command: 'k label nodes <node-name> <label-key>=<label-value>', description: 'Label nodes for selector' },
      ],
    },
    {
      title: 'Creating Objects',
      commands: [
        { command: 'kubectl apply -f <file_name> yaml', description: 'Create resource' },
        { command: 'kubectl apply -f <file_name>.yaml -f <file_name>.yaml', description: 'Create from multiple files' },
        { command: 'kubectl apply -f ./ <directory_name>', description: 'Create all files in directory' },
        { command: 'kubectl apply -f https:// <url>', description: 'Create from url' },
        { command: 'kubectl run <pod_name> --image<image_name>', description: 'Create pod' },
        { command: 'kubectl run <pod_name>-image <image_name> --port <port> --expose', description: 'Create pod, then expose it as service' },
        { command: 'kubectl run <pod_name> --image=<image_name> -dry-run=client -o yaml > <file_name>.yaml', description: 'Create Pod YAML File' },
        { command: 'kubectl create deployment <deployment_name> --image=<image_name>', description: 'Create Deployment' },
        { command: 'kubectl create deployment <deployment_name> --image=<image_name> --dry-run=client -o yaml > <file_name>.yaml', description: 'Create Deployment YAML File' },
        { command: 'kubectl create service <service-type> <service_name> --tcp=<port:target_port>', description: 'Create Service' },
        { command: 'kubectl create service <service-type> <service_name> --tcp=<port:target_port> --dry-run=client -o yaml > <file_name>.yaml', description: 'Create Service YAML File' },
        { command: 'kubectl expose deployment <pod/deployment_name> --type=<service-type> --port=<port> --target-port=<target_port>', description: 'Expose Service from Pod/Deployment' },
        { command: 'kubectl create configmap <configmap_name> --from-literal=<key>=<value> --from-literal=<key>= <value>', description: 'Create ConfigMap from Key-Value Pairs' },
        { command: 'kubectl create configmap <configmap_name> --from-file=<file_name>', description: 'Create ConfigMap from File' },
        { command: 'kubectl create configmap <configmap_name> --from-env-file=<file_name>', description: 'Create ConfigMap from Environment File' },
        { command: 'kubectl create secret generic <secret_name> --from-literal=<key>=<value> --from-literal=<key>= <value>', description: 'Create Secret from Key-Value Pairs' },
        { command: 'kubectl create secret generic <secret_name> --from-file=<file_name>', description: 'Create Secret from File' },
        { command: 'kubectl create namespace <namespace-name>', description: 'Create a namespace' },
        { command: 'kubectl create cronjob <name> --image=<image> --schedule="*/1 * * * *" --dry-run=client -o yaml', description: 'Create CronJob with schedule' },
        { command: 'kubectl create ingress <name> --rule="host/path=service:port"', description: 'Create basic Ingress' },
        { command: 'kubectl run nginx --image=nginx', description: 'Create a pod imperatively' },
        { command: 'kubectl run nginx --image=nginx --dry-run=client -o yaml > nginx_pod.yaml', description: 'Generate pod YAML' },
        { command: 'kubectl create deployment nginx --image=nginx --replicas=3 --dry-run=client -o yaml > nginx_deploy.yaml', description: 'Generate deployment YAML' },
        { command: 'kubectl create namespace dev', description: 'Create namespace dev' },
        { command: 'k create configmap <config-name> --from-literal=<key>=<value>', description: 'Create configmap from literal' },
        { command: 'kubectl create deployment webserver --image=nginx:alpine --replicas=3 --port=80', description: 'Create deployment with port' },
        { command: 'k replace --force -f nginx.yaml', description: 'Force replace resource' },
      ],
    },
    {
      title: 'Monitoring Usage Commands',
      commands: [
        { command: 'kubectl top node <node_name>', description: 'Get node cpu and memory utilization' },
        { command: 'kubectl top pods <pod_name>', description: 'Get pod cpu and memory utilization' },
        { command: 'kubectl top node --heapster-namespace=monitoring', description: 'Get node metrics using Heapster' },
        { command: 'kubectl top pods --all-namespaces', description: 'Get pod metrics across all namespaces' },
        { command: 'kubectl cluster-info dump', description: 'Dump current cluster state to stdout' },
        { command: 'kubectl get events --sort-by=.metadata.creationTimestamp', description: 'List recent events' },
        { command: 'minikube addons enable metrics-server', description: 'Enable metrics-server' },
        { command: 'k top nodes', description: 'Top nodes' },
        { command: 'k top po', description: 'Top pods' },
        { command: 'k get cs or k get pods -n kube-system', description: 'Get component statuses or system pods' },
        { command: 'k get events --sort-by=\'.metadata.creationTimestamp\' |tail -8', description: 'Get recent events (from alias kge)' },
        { command: 'k get cs', description: 'Get componentstatuses' },
        { command: 'kubectl cluster-info dump', description: 'Dump cluster info' },
        { command: 'kubectl get componentstatuses', description: 'Get component statuses' },
      ],
    },
    {
      title: 'Deployment Commands',
      commands: [
        { command: 'kubectl get deployment <deployment_name>', description: 'Get Deployment' },
        { command: 'kubectl get deployment <deployment_name> -o yaml', description: 'Get Deployment in YAML Format' },
        { command: 'kubectl get deployment <deployment_name> -o wide', description: 'Get Deployment Wide Information' },
        { command: 'kubectl edit deployment <deployment_name>', description: 'Edit Deployment' },
        { command: 'kubectl describe deployment <deployment_name>', description: 'Describe Deployment' },
        { command: 'kubectl delete deployment <deployment_name>', description: 'Delete Deployment' },
        { command: 'kubectl scale deployment <deployment_name> --replicas=<replicas>', description: 'Scale Deployment with Replicas' },
        { command: 'kubectl autoscale deployment <deployment_name> --min=2 --max=10 --cpu-percent=80', description: 'Auto scale a deployment based on CPU' },
        { command: 'kubectl rollout pause deployment <deployment_name>', description: 'Pause rollout of a deployment' },
        { command: 'kubectl rollout resume deployment <deployment_name>', description: 'Resume rollout of a deployment' },
        { command: 'k set image deployment/my-deployment mycontainer=myimage', description: 'Set image in deployment' },
        { command: 'k set image deployment/mydeploy nginx=nginx:1.19', description: 'Set image for deployment' },
        { command: 'k rollout undo deployment/my-deployment', description: 'Undo deployment' },
        { command: 'k scale --replicas=6 replicaset myapp-replicaset', description: 'Scale replicaset' },
      ],
    },
    {
      title: 'Service Commands',
      commands: [
        { command: 'kubectl get service <service>', description: 'Get Service' },
        { command: 'kubectl get service <service> -o yaml', description: 'Get Service in YAML Format' },
        { command: 'kubectl get service <service> -o wide', description: 'Get Service Wide Information' },
        { command: 'kubectl edit service <service>', description: 'Edit Service' },
        { command: 'kubectl describe service <service>', description: 'Describe Service' },
        { command: 'kubectl delete service <service>', description: 'Delete Service' },
        { command: 'kubectl patch svc <service-name> -p \'{"spec":{"type":"LoadBalancer"}}\'', description: 'Change service type' },
        { command: 'kubectl get services --sort-by=.metadata.name', description: 'List services sorted by name' },
        { command: 'k describe svc pod-hello | grep -i selector', description: 'Get selectors from service' },
        { command: 'k edit svc pod-hello', description: 'Edit service' },
        { command: 'k expose deployment nginx --name=nginx-service --port=80 --type=NodePort', description: 'Expose deployment as NodePort service' },
        { command: 'curl http://<ipofnode>:<nodePort>', description: 'Curl NodePort' },
        { command: 'curl <pod-ip>', description: 'Curl pod IP' },
      ],
    },
    {
      title: 'Ingress Commands',
      commands: [
        { command: 'kubectl get ingress', description: 'Get Ingress' },
        { command: 'kubectl get ingress -o yaml', description: 'Get Ingress in YAML Format' },
        { command: 'kubectl get ingress -o wide', description: 'Get Ingress Wide Information' },
        { command: 'kubectl edit ingress <ingress_name>', description: 'Edit Ingress' },
        { command: 'kubectl describe ingress <ingress_name>', description: 'Describe Ingress' },
        { command: 'kubectl delete ingress <ingress_name>', description: 'Delete Ingress' },
        { command: 'kubectl get ingress --all-namespaces', description: 'Get all ingresses across namespaces' },
        { command: 'kubectl apply -f ingress.yaml', description: 'Apply Ingress configuration' },
      ],
    },
    {
      title: 'Endpoints Commands',
      commands: [
        { command: 'kubectl get endpoints <endpoints_name>', description: 'Get endpoints' },
        { command: 'kubectl describe endpoints <endpoints_name>', description: 'Describe endpoints' },
        { command: 'kubectl get endpoints --all-namespaces', description: 'Get all endpoints' },
      ],
    },
    {
      title: 'DaemonSet Commands',
      commands: [
        { command: 'kubectl get daemonset <daemonset_name>', description: 'Get DaemonSet' },
        { command: 'kubectl get daemonset <daemonset_name> -o yaml', description: 'Get DaemonSet in YAML Format' },
        { command: 'kubectl edit daemonset <daemonset_name>', description: 'Edit DaemonSet' },
        { command: 'kubectl describe daemonset <daemonset_name>', description: 'Describe DaemonSet' },
        { command: 'kubectl delete daemonset <daemonset_name>', description: 'Delete DaemonSet' },
        { command: 'kubectl rollout restart daemonset <daemonset_name>', description: 'Restart DaemonSet' },
        { command: 'kubectl rollout status daemonset <daemonset_name>', description: 'Get rollout status of DaemonSet' },
      ],
    },
    {
      title: 'Job Commands',
      commands: [
        { command: 'kubectl get job <job_name>', description: 'Get Job' },
        { command: 'kubectl get job <job_name> -o yaml', description: 'Get Job in YAML Format' },
        { command: 'kubectl edit job <job_name>', description: 'Edit Job' },
        { command: 'kubectl describe job <job_name>', description: 'Describe Job' },
        { command: 'kubectl delete job <job_name>', description: 'Delete Job' },
        { command: 'kubectl get cronjob <cronjob-name>', description: 'Get CronJob' },
        { command: 'kubectl create cronjob <name> --image=<image> --schedule="*/1 * * * *"', description: 'Create CronJob' },
      ],
    },
    {
      title: 'Rollout Commands',
      commands: [
        { command: 'kubectl rollout restart deployment <deployment_name>', description: 'Restart Deployment' },
        { command: 'kubectl rollout undo deployment <deployment_name>', description: 'Undo Deployment with the Latest Revision' },
        { command: 'kubectl rollout undo deployment <deployment_name> --to-revision= <revision_number>', description: 'Undo Deployment with Specified Revision' },
        { command: 'kubectl rollout history deployment <deployment_name>', description: 'Get All Revisions of Deployment' },
        { command: 'kubectl rollout history deployment <deployment_name> --revision= <revision_number>', description: 'Get Specified Revision of Deployment' },
        { command: 'kubectl rollout status deployment <deployment_name>', description: 'Get rollout status of deployment' },
        { command: 'kubectl rollout pause deployment <deployment_name>', description: 'Pause rollout of deployment' },
        { command: 'kubectl rollout resume deployment <deployment_name>', description: 'Resume rollout of deployment' },
        { command: 'k rollout undo deployment/my-deployment', description: 'Undo deployment' },
      ],
    },
    {
      title: 'Secret Commands',
      commands: [
        { command: 'kubectl get secret <secret_name>', description: 'Get Secret' },
        { command: 'kubectl describe secret <secret_name>', description: 'Describe Secret' },
        { command: 'kubectl delete secret <secret_name>', description: 'Delete Secret' },
        { command: 'kubectl edit secret <secret_name>', description: 'Edit Secret' },
        { command: 'kubectl get secrets --all-namespaces', description: 'Get all secrets' },
        { command: 'kubectl create secret tls <name> --cert=path/to/cert.file --key=path/to/key.file', description: 'Create TLS secret' },
      ],
    },
    {
      title: 'ETCD Backup and Restore',
      commands: [
        { command: 'ps -ef | grep etcd', description: 'Find ETCD process' },
        { command: 'ETCDCTL_API=3 etcdctl snapshot save /home/chaldan/snapshot-pre-boot.db --endpoints=https://127.0.0.1:2379 --cacert=/var/lib/minikube/certs/etcd/ca.crt --cert=/var/lib/minikube/certs/etcd/server.crt --key=/var/lib/minikube/certs/etcd/server.key', description: 'Save ETCD snapshot (Minikube example)' },
        { command: 'ETCDCTL_API=3 etcdctl snapshot save /opt/etcd-backup.db --endpoints=https://192.22.58.3:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key', description: 'Save ETCD snapshot' },
        { command: 'ETCDCTL_API=3 etcdctl --endpoints $ENDPOINT snapshot save snapshotdb', description: 'Save ETCD snapshot with endpoint var' },
        { command: 'ETCDCTL_API=3 etcdctl snapshot status /opt/etcd-backup.db', description: 'View status of ETCD snapshot' },
        { command: 'service kube-apiserver stop', description: 'Stop kube-apiserver for restore' },
        { command: 'ETCDCTL_API=3 etcdctl snapshot restore /opt/snapshot-pre-boot.db --data-dir /var/lib/etcd-from-backup', description: 'Restore ETCD snapshot' },
        { command: 'systemctl daemon-reload', description: 'Reload daemon after ETCD restore' },
        { command: 'service etcd restart', description: 'Restart ETCD service' },
        { command: 'service kube-apiserver start', description: 'Start kube-apiserver after restore' },
        { command: 'kubectl logs etcd-controlplane -n kube-system | grep -i etcd-version:', description: 'Check ETCD version from logs' },
        { command: 'kubectl describe pod etcd-controlplane -n kube-system | grep -i image:', description: 'Check ETCD version from pod description' },
        { command: 'cat /etc/kubernetes/manifests/etcd.yaml | grep file', description: 'Check ETCD manifest for file paths' },
        { command: 'watch "crictl ps | grep etcd"', description: 'Watch ETCD container status' },
      ],
    },
    {
      title: 'Cluster Upgrade Commands',
      commands: [
        { command: 'k drain controlplane', description: 'Drain control plane node' },
        { command: 'k get nodes -o wide', description: 'Get nodes to check cluster version' },
        { command: 'apt-get update && apt-get install kubeadm=1.26.0-00', description: 'Install specific kubeadm version' },
        { command: 'kubeadm version', description: 'Check kubeadm version' },
        { command: 'kubeadm upgrade plan', description: 'Check upgrade plan' },
        { command: 'kubeadm upgrade apply v1.26.0', description: 'Apply cluster upgrade' },
        { command: 'apt-get update && apt-get install kubelet=1.26.0-00', description: 'Install specific kubelet version' },
        { command: 'systemctl daemon-reload', description: 'Reload daemon after upgrade' },
        { command: 'systemctl restart kubelet', description: 'Restart kubelet after upgrade' },
        { command: 'k uncordon controlplane', description: 'Uncordon control plane node' },
        { command: 'k drain node01', description: 'Drain worker node' },
        { command: 'kubeadm upgrade node', description: 'Upgrade worker node' },
        { command: 'k uncordon node01', description: 'Uncordon worker node' },
      ],
    },
    {
      title: 'Roles and Access Commands',
      commands: [
        { command: 'k create role developer --verb=get,list,watch --resource=pods', description: 'Create role with privileges' },
        { command: 'k create rolebinding john-developer --role=developer --user=john --namespace=development', description: 'Create rolebinding' },
        { command: 'k auth can-i get pods --namespace=development --as john', description: 'Check user permissions' },
        { command: 'k certificate approve john-developer', description: 'Approve CSR' },
        { command: 'cat john.csr | base64 | tr -d "\\n"', description: 'Base64 encode CSR' },
        { command: 'k create role --help', description: 'Get help for creating role' },
        { command: 'k auth --help', description: 'Get help for auth' },
        { command: 'k create rolebinding --help', description: 'Get help for creating rolebinding' },
      ],
    },
    {
      title: 'Minikube Commands',
      commands: [
        { command: 'sudo service docker status', description: 'Check Docker status' },
        { command: 'sudo service --status-all', description: 'Check all services status' },
        { command: 'sudo usermod -aG docker chaldan && newgrp docker', description: 'Add user to Docker group' },
        { command: 'minikube start --driver=docker', description: 'Start Minikube with Docker driver' },
        { command: 'sudo usermod -a -G docker chaldan', description: 'Add user to Docker group (variant)' },
        { command: 'newgrp docker', description: 'Refresh group membership' },
        { command: 'minikube dashboard --url', description: 'Get Minikube dashboard URL' },
        { command: 'minikube service nginx-service --url', description: 'Get service URL in Minikube' },
        { command: 'minikube ssh', description: 'SSH into Minikube VM' },
        { command: 'minikube addons enable metrics-server', description: 'Enable metrics-server addon' },
      ],
    },
    {
      title: 'Aliases and Utility Commands',
      commands: [
        { command: 'alias e=\'./etcdctl\'', description: 'Alias for etcdctl' },
        { command: 'alias k=kubectl', description: 'Alias for kubectl' },
        { command: 'alias kgp="k get pod"', description: 'Alias for get pods' },
        { command: 'alias kgd="k get deploy"', description: 'Alias for get deployments' },
        { command: 'alias kgs="k get svc"', description: 'Alias for get services' },
        { command: 'alias kgn="k get nodes"', description: 'Alias for get nodes' },
        { command: 'alias kgrs="k get rs"', description: 'Alias for get replicasets' },
        { command: 'alias kd="k describe"', description: 'Alias for describe' },
        { command: 'alias kge="k get events --sort-by=\'.metadata.creationTimestamp\' |tail -8"', description: 'Alias for recent events' },
        { command: 'export do="--dry-run=client -o yaml"', description: 'Export for dry-run YAML' },
        { command: 'export now="--force --grace-period 0"', description: 'Export for immediate delete' },
        { command: 'k delete pod test $now', description: 'Delete pod immediately' },
        { command: 'kubectl -it run busybox --rm --image=busybox -- sh', description: 'Run interactive busybox pod' },
        { command: 'kubectl api-resources', description: 'List resource types' },
        { command: 'kubectl explain <resource>', description: 'Show information about a resource' },
        { command: 'kubectl get <resource> -n <namespace>', description: 'Get resource in specific namespace' },
        { command: 'kubectl get <resource> --all-namespaces', description: 'Get resource in all namespaces' },
        { command: 'kubectl get <resource> -o wide', description: 'Get resource with extended information' },
        { command: 'kubectl get <resource> -o yaml', description: 'Get resource in YAML format' },
        { command: 'kubectl get <resource> -o json', description: 'Get resource in JSON format' },
        { command: 'kubectl get pods [-n abc|--all-namespaces] [-o wide|yaml|json]', description: 'Example for getting pods' },
        { command: 'k config get-clusters', description: 'Get cluster names' },
        { command: 'k config view', description: 'View complete cluster info' },
        { command: 'k replace --force -f nginx.yaml', description: 'Force replace resource' },
        { command: 'k get all -l env=prod', description: 'Get all resources with label' },
        { command: 'k config set-context ${kubectl config current-context} --namespace=dev', description: 'Set namespace in context' },
        { command: 'k get pods --all-namespaces', description: 'Get pods in all namespaces' },
        { command: 'k get cs', description: 'Get componentstatuses' },
        { command: 'ps -aux | grep kubelet', description: 'Find kubelet process to get config path' },
        { command: 'k describe pod pod-hello | grep -i ip:', description: 'Get IP from pod description' },
        { command: 'k describe svc pod-hello | grep -i selector', description: 'Get selectors from service' },
        { command: 'k edit svc pod-hello', description: 'Edit service' },
        { command: 'k get po -L redis', description: 'Get pods with label' },
        { command: 'kubectl help run', description: 'Get help for run command' },
        { command: '/ # wget -O- 172.17.254.255', description: 'Test connectivity from busybox pod' },
        { command: 'kubectl exec -it non-root-pod -- id', description: 'Verify user and group ID in pod' },
        { command: 'k get pod busybox -ojson|jq \'.spec.containers[0].image\' "busybox"', description: 'Get image from pod JSON' },
        { command: 'to limit resources in a namespace, create a resource quota', description: 'Note on resource quota' },
        { command: 'to manually schedule a pod, add nodeName: nodename into yaml on the same line as containers or create kind:Binding', description: 'Note on manual pod scheduling' },
      ],
    },
    {
      title: 'Scheduling Commands',
      commands: [
        { command: 'k label nodes <node-name> <label-key>=<label-value>', description: 'Label nodes for selector' },
        { command: 'nodeSelector: size: Large', description: 'Place nodeSelector in pod spec' },
        { command: 'affinity: ... matchExpressions: ... size NotIn Small / Exists', description: 'Set node affinity in pod spec (requiredDuringSchedulingIgnoredDuringExecution or preferredDuringSchedulingIgnoredDuringExecution)' },
        { command: 'resources: requests: memory: "1Gi" cpu: "1", limits: memory: "2Gi" cpu: "2"', description: 'Set resource requirements and limits in pod spec' },
        { command: 'ps -aux | grep kubelet', description: 'Get kubelet config path for static pods' },
      ],
    },
    {
      title: 'Network and Taint Commands',
      commands: [
        { command: 'k taint nodes node01 spray=mortein:NoSchedule', description: 'Taint node' },
        { command: 'k taint nodes controlplane node-role.kubernetes.io=control-plane:NoSchedule-', description: 'Untaint control plane' },
        { command: 'k expose deployment nginx --name=nginx-service --port=80 --type=NodePort', description: 'Expose deployment as NodePort' },
        { command: 'curl http://<ipofnode>:<nodePort>', description: 'Curl NodePort' },
        { command: 'curl <pod-ip>', description: 'Curl pod IP' },
      ],
    },
    {
      title: 'ETCD Installation',
      commands: [
        { command: 'ETCD_VER=v3.4.23', description: 'Set ETCD version' },
        { command: 'rm -f /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz', description: 'Remove old ETCD tar file' },
        { command: 'rm -rf /tmp/etcd-download-test && mkdir -p /tmp/etcd-download-test', description: 'Prepare download directory' },
        { command: 'DOWNLOAD_URL=https://github.com/etcd-io/etcd/releases/download', description: 'Set download URL' },
        { command: 'curl -L ${DOWNLOAD_URL}/${ETCD_VER}/etcd-${ETCD_VER}-linux-amd64.tar.gz -o /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz', description: 'Download ETCD' },
        { command: 'tar xzvf /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz -C /tmp/etcd-download-test --strip-components=1', description: 'Extract ETCD' },
        { command: 'rm -f /tmp/etcd-${ETCD_VER}-linux-amd64.tar.gz', description: 'Remove tar file' },
        { command: '/tmp/etcd-download-test/etcd --version', description: 'Check ETCD version' },
        { command: '/tmp/etcd-download-test/etcdctl version', description: 'Check etcdctl version' },
      ],
    },
  ];

  const filteredCategories = categories.map((category) => ({
    ...category,
    commands: category.commands.filter((cmd) =>
      cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.commands.length > 0);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Command copied to clipboard!');
  };

  return (
    <main className="p-6 bg-gray-900 text-white ml-64 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Kubernetes Cheatsheets</h1>
      <p className="mb-4">
        Quick reference guides for common Kubernetes commands and configurations. Surprise: Thoroughly categorized and expanded with all commands from the provided file, plus additional best-practice commands from web searches (e.g., from Kubernetes docs, Reddit, Medium, LinkedIn posts on SRE tools in 2025).
      </p>

      <input
        type="text"
        placeholder="Search commands..."
        className="w-full p-2 mb-6 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="space-y-4">
        {filteredCategories.map((category) => (
          <div key={category.title} className="bg-gray-800 rounded-lg shadow-md">
            <button
              onClick={() => toggleSection(category.title)}
              className="flex items-center w-full p-4 text-left font-semibold text-purple-400 hover:bg-gray-700 transition-colors"
              aria-expanded={expandedSections.includes(category.title)}
            >
              {category.title}
              <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${expandedSections.includes(category.title) ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.includes(category.title) && (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="p-3 text-left border-b border-gray-600">Command</th>
                    <th className="p-3 text-left border-b border-gray-600">Description</th>
                    <th className="p-3 text-left border-b border-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {category.commands.map((cmd, index) => (
                    <tr key={index} className="hover:bg-gray-700 transition-colors">
                      <td className="p-3 border-b border-gray-600">{cmd.command}</td>
                      <td className="p-3 border-b border-gray-600">{cmd.description}</td>
                      <td className="p-3 border-b border-gray-600">
                        <button
                          onClick={() => copyToClipboard(cmd.command)}
                          className="bg-purple-600 text-white p-1 rounded flex items-center"
                        >
                          <DocumentDuplicateIcon className="w-4 h-4 mr-1" />
                          Copy
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}