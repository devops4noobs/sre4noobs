'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDownIcon, HomeIcon, QuestionMarkCircleIcon, ScaleIcon, KeyIcon, ShieldCheckIcon, ChartBarIcon, TrashIcon, EyeIcon, CogIcon, RocketLaunchIcon, PuzzlePieceIcon, BookOpenIcon, BeakerIcon, UsersIcon, ChatBubbleLeftRightIcon, LinkIcon, CodeBracketIcon, UserCircleIcon, CubeIcon, ChartPieIcon, AcademicCapIcon, DocumentTextIcon, ServerIcon, BellIcon, LockClosedIcon } from '@heroicons/react/24/outline';


interface MenuItem {
  label: string;
  href?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>; // Use supertype directly
  isPremium?: boolean;
  subItems?: MenuItem[];
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/', icon: HomeIcon },
  {
    label: 'SRE Fundamentals',
    subItems: [
      { label: 'What is SRE?', href: '/fundamentals/what-is-sre', icon: QuestionMarkCircleIcon },
      { label: 'SRE vs. DevOps', href: '/fundamentals/sre-vs-devops', icon: ScaleIcon },
      { label: 'Observability vs. Monitoring', href: '/fundamentals/observability-vs-monitoring', icon: EyeIcon },
      { label: 'Key Principles Overview', href: '/fundamentals/principles', icon: KeyIcon },
    ],
  },
  {
    label: 'SRE Pillars',
    subItems: [
      { label: 'Embracing Risk', href: '/pillars/embracing-risk', icon: ShieldCheckIcon },
      { label: 'Service Level Objectives (SLOs)', href: '/pillars/slo', icon: ChartBarIcon },
      { label: 'Eliminating Toil', href: '/pillars/toil', icon: TrashIcon },
      { label: 'Monitoring Distributed Systems', href: '/pillars/monitoring', icon: EyeIcon },
      { label: 'Automation', href: '/pillars/automation', icon: CogIcon },
      { label: 'Release Engineering', href: '/pillars/release-engineering', icon: RocketLaunchIcon },
      { label: 'Simplicity', href: '/pillars/simplicity', icon: PuzzlePieceIcon },
    ],
  },
  {
    label: 'Practical Tools',
    subItems: [
      { label: 'Blameless Postmortems', href: '/tools/postmortem', icon: BookOpenIcon },
      { label: 'SLO Calculator', href: '/tools/slo-calculator', icon: ChartBarIcon },
      { label: 'Error Budget Tracker', href: '/tools/error-budget', icon: ShieldCheckIcon },
      { label: 'Incident Response Simulator', href: '/tools/incident-simulator', icon: BeakerIcon },
    ],
  },
  {
    label: 'Technologies',
    subItems: [
      {
        label: 'Kubernetes',
        href: '/technologies/kubernetes',
        icon: CubeIcon,
        children: [
          { label: 'Fundamental Concepts', href: '/technologies/kubernetes/fundamentals', icon: AcademicCapIcon},
          { label: 'Cheatsheets', href: '/technologies/kubernetes/cheatsheets', icon: DocumentTextIcon},
          { label: 'CKA mocks', href: '/technologies/kubernetes/ckamocks', icon: ServerIcon, isPremium: true },
        ],
      },
      {
        label: 'SignalFX',
        href: '/technologies/signalfx',
        icon: ChartPieIcon,
        children: [
          { label: 'Detectors', href: '/technologies/signalfx/detectors', icon: BellIcon},
          { label: 'Dashboards', href: '/technologies/signalfx/dashboards', icon: ChartBarIcon},
        ],
      },
    ],
  },
  {
    label: 'Advanced Topics',
    subItems: [
      { label: 'Case Studies & Examples', href: '/advanced/case-studies', icon: BookOpenIcon },
      { label: 'Chaos Engineering', href: '/advanced/chaos-engineering', icon: BeakerIcon },
      { label: 'Scaling SRE in Teams', href: '/advanced/scaling-sre', icon: UsersIcon },
    ],
  },
  {
    label: 'Assessments & Practice',
    subItems: [
      { label: 'Quizzes', href: '/assessments/quizzes', icon: QuestionMarkCircleIcon },
      { label: 'Hands-On Labs', href: '/assessments/labs', icon: BeakerIcon },
      { label: 'Certification Path', href: '/assessments/certification', icon: ShieldCheckIcon },
    ],
  },
  {
    label: 'Community & Resources',
    subItems: [
      { label: 'Forum/Discussions', href: '/community/forum', icon: ChatBubbleLeftRightIcon },
      { label: 'External Links', href: '/resources/links', icon: LinkIcon },
      { label: 'Contribute', href: 'https://github.com/devops4noobs/sre4noobs', icon: CodeBracketIcon },
    ],
  },
  { label: 'About/Contact', href: '/about', icon: UserCircleIcon },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0) => {
    const Icon = item.icon || null;
    const isActive = pathname === item.href;
    const hasChildren = (item.children && item.children.length > 0) || (item.subItems && item.subItems.length > 0);
    const isExpanded = expandedSections.includes(item.label);

    return (
      <li key={item.label} className={depth > 1 ? `ml-4` : ''}>
        <div className="flex items-center justify-between">
          {item.href ? (
            <Link
              href={item.href}
              className={`flex items-center flex-grow p-2 rounded-md transition-colors ${
                isActive ? 'bg-purple-600 text-white' : 'hover:bg-gray-800 text-gray-300'
              }`}
              onClick={() => {
                if (item.isPremium) {
                  console.log(`Premium content: ${item.label}`); // Replace with redirect to /subscribe
                }
              }}
            >
              {Icon && <Icon className={`w-${depth === 0 ? 5 : 4} h-${depth === 0 ? 5 : 4} mr-2 ${depth === 0 ? 'text-purple-400' : 'text-gray-300'}`} />}
              {item.label}
              {item.isPremium && <LockClosedIcon className="w-4 h-4 ml-2 text-yellow-400" />}
            </Link>
          ) : (
            <button
              onClick={() => toggleSection(item.label)}
              className="flex items-center w-full p-2 rounded-md hover:bg-gray-800 text-gray-300 transition-colors"
              aria-expanded={isExpanded}
            >
              {Icon && <Icon className="w-5 h-5 mr-2 text-purple-400" />}
              {item.label}
            </button>
          )}
          {hasChildren && (
            <ChevronDownIcon
              onClick={() => toggleSection(item.label)}
              className={`w-4 h-4 text-gray-400 transition-transform cursor-pointer ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          )}
        </div>
        {isExpanded && item.subItems && (
          <ul className="space-y-1 mt-1">
            {item.subItems.map((subItem) => renderMenuItem(subItem, depth + 1))}
          </ul>
        )}
        {isExpanded && item.children && (
          <ul className="space-y-1 mt-1">
            {item.children.map((child) => renderMenuItem(child, depth + 2))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside className="w-64 bg-gray-900 p-4 text-white border-r border-gray-700 fixed top-0 bottom-0 z-10 shadow-lg">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => renderMenuItem(item))}
        </ul>
      </nav>
    </aside>
  );
}