'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDownIcon, HomeIcon, QuestionMarkCircleIcon, ScaleIcon, KeyIcon, ShieldCheckIcon, ChartBarIcon, TrashIcon, EyeIcon, CogIcon, RocketLaunchIcon, PuzzlePieceIcon, BookOpenIcon, BeakerIcon, UsersIcon, ChatBubbleLeftRightIcon, UserCircleIcon, ChartPieIcon, AcademicCapIcon, DocumentTextIcon, ServerIcon, BellIcon, LockClosedIcon, XMarkIcon, StarIcon, MagnifyingGlassIcon, BuildingLibraryIcon, WrenchScrewdriverIcon, CpuChipIcon, LightBulbIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

// MenuItem interface
interface MenuItem {
  label: string;
  href?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  isPremium?: boolean;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { label: 'Favorites', subItems: [], icon: StarIcon },
  { label: 'Home', href: '/', icon: HomeIcon },
  {
    label: 'SRE Fundamentals',
    icon: AcademicCapIcon,
    subItems: [
      { label: 'What is SRE?', href: '/fundamentals/what-is-sre', icon: QuestionMarkCircleIcon },
      { label: 'SRE vs. DevOps', href: '/fundamentals/sre-vs-devops', icon: ScaleIcon },
      { label: 'Observability vs. Monitoring', href: '/fundamentals/observability-vs-monitoring', icon: EyeIcon },
      { label: 'Key Principles', href: '/fundamentals/principles', icon: KeyIcon },
      { label: 'Interview Questions', href: '/fundamentals/interviewfundamentals', icon: KeyIcon },
    ],
  },
  {
    label: 'SRE Pillars',
    icon: BuildingLibraryIcon,
    subItems: [
      { label: 'Embracing Risk', href: '/pillars/embracing-risk', icon: ShieldCheckIcon },
      { label: 'SLOs', href: '/pillars/slo', icon: ChartBarIcon },
      { label: 'Eliminating Toil', href: '/pillars/toil', icon: TrashIcon },
      { label: 'Monitoring', href: '/pillars/monitoring', icon: EyeIcon },
      { label: 'Automation', href: '/pillars/automation', icon: CogIcon },
      { label: 'Release Engineering', href: '/pillars/release-engineering', icon: RocketLaunchIcon },
      { label: 'Simplicity', href: '/pillars/simplicity', icon: PuzzlePieceIcon },
    ],
  },
  {
    label: 'Tools',
    icon: WrenchScrewdriverIcon,
    subItems: [
      { label: 'Blameless Postmortems', href: '/tools/postmortem', icon: BookOpenIcon },
      { label: 'RCA', href: '/tools/rca', icon: BookOpenIcon },
      { label: 'SLO Calculator', href: '/tools/slo-calculator', icon: ChartBarIcon },
      { label: 'Error Budget Tracker', href: '/tools/error-budget', icon: ShieldCheckIcon },
      { label: 'Incident Simulator', href: '/tools/incident-simulator', icon: BeakerIcon },
      { label: 'Non-critical Incident', href: '/tools/non-critical', icon: BeakerIcon },
      { label: 'PagerDuty', href: '/tools/pagerduty', icon: BellIcon },
      { label: 'AWS', href: '/tools/aws', icon: ServerIcon },
    ],
  },
  {
    label: 'Technologies',
    icon: CpuChipIcon,
    subItems: [
      {
        label: 'Kubernetes',
        subItems: [
          { label: 'About K8S', href: '/technologies/kubernetes', icon: ChartPieIcon },
          { label: 'Fundamentals', href: '/technologies/kubernetes/fundamentals', icon: AcademicCapIcon },
          { label: 'Cheatsheets', href: '/technologies/kubernetes/cheatsheets', icon: DocumentTextIcon },
          { label: 'CKA Mocks', href: '/technologies/kubernetes/ckamocks', icon: ServerIcon, isPremium: true },
        ],
      },
      {
        label: 'SignalFX',
        subItems: [
          { label: 'About', href: '/technologies/signalfx', icon: BellIcon },
          { label: 'Metrics', href: '/technologies/signalfx/metrics', icon: BellIcon },
          { label: 'Detectors', href: '/technologies/signalfx/detectors', icon: BellIcon },
          { label: 'Dashboards', href: '/technologies/signalfx/dashboards', icon: ChartBarIcon },
        ],
      },
      {
        label: 'GIT',
        subItems: [
          { label: 'About GIT', href: '/technologies/git', icon: AcademicCapIcon },
          { label: 'Cheatsheets', href: '/technologies/git/cheatsheets', icon: DocumentTextIcon },
          { label: 'Branch Strategies', href: '/technologies/git/branch-strategies', icon: DocumentTextIcon },
          { label: 'Best Practices', href: '/technologies/git/best-practices', icon: ServerIcon, isPremium: true },
        ],
      },
    ],
  },
  {
    label: 'Advanced Topics',
    icon: LightBulbIcon,
    subItems: [
      { label: 'Case Studies', href: '/advanced/case-studies', icon: BookOpenIcon },
      { label: 'Chaos Engineering', href: '/advanced/chaos-engineering', icon: BeakerIcon },
      { label: 'Scaling SRE', href: '/advanced/scaling-sre', icon: UsersIcon },
    ],
  },
  {
    label: 'Assessments',
    icon: ClipboardDocumentCheckIcon,
    subItems: [
      { label: 'Quizzes', href: '/assessments/quizzes', icon: QuestionMarkCircleIcon },
      { label: 'Hands-On Labs', href: '/assessments/labs', icon: BeakerIcon },
      { label: 'Certification Path', href: '/assessments/certification', icon: ShieldCheckIcon },
    ],
  },
  { label: 'Feedback', href: '/feedback', icon: ChatBubbleLeftRightIcon },
  { label: 'About', href: '/about', icon: UserCircleIcon },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const toggleFavorite = (label: string, href: string) => {
    setFavorites((prev) =>
      prev.includes(href) ? prev.filter((f) => f !== href) : [...prev, href]
    );
  };

  // Simplified filter logic
  const filteredItems = menuItems
    .map((item) => {
      if (item.label === 'Favorites') {
        const favoriteItems = menuItems
          .flatMap((i) => [
            ...(i.href && favorites.includes(i.href) ? [{ ...i, isFavorite: true }] : []),
            ...(i.subItems || []).flatMap((sub) => [
              ...(sub.href && favorites.includes(sub.href) ? [{ ...sub, isFavorite: true }] : []),
              ...(sub.subItems || []).filter((child) => child.href && favorites.includes(child.href)).map((child) => ({ ...child, isFavorite: true })),
            ]),
          ])
          .filter((sub) => sub.href);
        return { ...item, subItems: favoriteItems };
      }

      if (!searchQuery) return { ...item, subItems: item.subItems || [] };

      const matchesQuery = (label: string) => label.toLowerCase().includes(searchQuery.toLowerCase());
      return {
        ...item,
        subItems: (item.subItems || []).filter(
          (sub) =>
            matchesQuery(sub.label) ||
            (sub.href && matchesQuery(sub.href)) ||
            (sub.subItems || []).some((child) => matchesQuery(child.label) || (child.href && matchesQuery(child.href)))
        ),
      };
    })
    .filter((item) => {
      if (!searchQuery) return true;
      const matchesQuery = (label: string) => label.toLowerCase().includes(searchQuery.toLowerCase());
      return (
        item.label === 'Favorites' ||
        matchesQuery(item.label) ||
        (item.href && matchesQuery(item.href)) ||
        (item.subItems && item.subItems.length > 0)
      );
    });

  // Debug: Log filtered items
  console.log('Filtered Items:', filteredItems);

  const renderMenuItem = (item: MenuItem, depth: number = 0): React.ReactNode => {
    const Icon = item.icon || null;
    const isActive = pathname === item.href;
    const hasChildren = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedSections.includes(item.label);
    const isFavorite = item.href ? favorites.includes(item.href) : false;

    // Debug: Log item being rendered
    console.log(`Rendering Item: ${item.label}, Depth: ${depth}, HasChildren: ${hasChildren}`);

    return (
      <li key={item.label} className={`relative ${depth > 0 ? 'ml-4' : ''}`}>
        <div className="flex items-center justify-between group">
          {item.href ? (
            <Link
              href={item.href}
              className={`flex items-center w-full p-2 rounded-md transition-colors ${
                isActive ? 'bg-purple-500 text-white' : 'hover:bg-gray-700 text-gray-200'
              }`}
              onClick={() => !item.isPremium && onClose()}
              aria-current={isActive ? 'page' : undefined}
            >
              {Icon && (
                <Icon
                  className={`w-${depth === 0 ? 5 : 4} h-${depth === 0 ? 5 : 4} mr-2 ${
                    isActive ? 'text-white' : depth === 0 ? 'text-purple-400' : 'text-gray-400'
                  }`}
                />
              )}
              <span className={depth > 0 ? 'text-sm' : ''}>{item.label}</span>
              {item.isPremium && <LockClosedIcon className="w-4 h-4 ml-2 text-yellow-400" />}
            </Link>
          ) : (
            <button
              onClick={() => toggleSection(item.label)}
              className="flex items-center w-full p-2 rounded-md hover:bg-gray-700 text-gray-200 transition-colors"
              aria-expanded={isExpanded}
              aria-controls={`submenu-${item.label.replace(/\s+/g, '-')}`}
            >
              {Icon && (
                <Icon
                  className={`w-5 h-5 mr-2 ${isActive ? 'text-white' : 'text-purple-400'}`}
                />
              )}
              <span className={depth > 0 ? 'text-sm' : ''}>{item.label}</span>
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
          {item.href && (
            <button
              onClick={() => item.href && toggleFavorite(item.label, item.href)}
              className="ml-2 p-1 rounded hover:bg-gray-600"
              aria-label={isFavorite ? `Remove ${item.label} from favorites` : `Add ${item.label} to favorites`}
            >
              <StarIcon className={`w-4 h-4 ${isFavorite ? 'text-yellow-400' : 'text-gray-400'}`} />
            </button>
          )}
        </div>
        {isExpanded && hasChildren && (
          <ul id={`submenu-${item.label.replace(/\s+/g, '-')}`} className="space-y-1 mt-1">
            {item.subItems!.map((subItem) => renderMenuItem(subItem, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <aside
      className={`bg-gray-800 text-white border-r border-gray-700 fixed top-0 bottom-0 z-30 shadow-lg transform transition-all duration-300 w-64 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">SRE Dashboard</h2>
        <button onClick={onClose} className="md:hidden" aria-label="Close Sidebar">
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="px-4 mb-4">
        <div className="relative">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search menu..."
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      <nav className="px-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
        <ul className="space-y-2">
          {filteredItems.map((item) => renderMenuItem(item))}
        </ul>
      </nav>
    </aside>
  );
}