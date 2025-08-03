import { 
  ChevronDownIcon, HomeIcon, QuestionMarkCircleIcon, ScaleIcon, KeyIcon, 
  ShieldCheckIcon, ChartBarIcon, TrashIcon, EyeIcon, CogIcon, RocketLaunchIcon, 
  PuzzlePieceIcon, BookOpenIcon, BeakerIcon, UsersIcon, ChatBubbleLeftRightIcon, 
  UserCircleIcon, ChartPieIcon, AcademicCapIcon, DocumentTextIcon, ServerIcon, 
  BellIcon, LockClosedIcon, XMarkIcon, StarIcon, MagnifyingGlassIcon, 
  BuildingLibraryIcon, WrenchScrewdriverIcon, CpuChipIcon, LightBulbIcon, 
  ClipboardDocumentCheckIcon 
} from '@heroicons/react/24/outline';

// MenuItem interface
export interface MenuItem {
  label: string;
  href?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  isPremium?: boolean;
  subItems?: MenuItem[];
  isFavorite?: boolean;
  id?: string;
  category?: string;
  description?: string;
  lastVisited?: number;
  visitCount?: number;
  tags?: string[];
}

export const menuItems: MenuItem[] = [
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
