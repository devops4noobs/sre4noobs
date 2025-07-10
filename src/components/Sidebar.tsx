'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronDownIcon, HomeIcon, QuestionMarkCircleIcon, ScaleIcon, KeyIcon, ShieldCheckIcon, ChartBarIcon, TrashIcon, EyeIcon, CogIcon, RocketLaunchIcon, PuzzlePieceIcon, BookOpenIcon, BeakerIcon, UsersIcon, ChatBubbleLeftRightIcon, LinkIcon, CodeBracketIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const menuItems = [
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

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>(['SRE Fundamentals']);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <aside className="w-64 bg-gray-900 h-screen p-4 overflow-y-auto text-white border-r border-gray-700"> {/* Added border-r for delimitation */}
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`flex items-center p-2 rounded-md transition-colors ${
                    pathname === item.href ? 'bg-purple-600 text-white' : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  {item.icon && <item.icon className="w-5 h-5 mr-2 text-purple-400" />}
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleSection(item.label)}
                    className="flex items-center w-full p-2 rounded-md hover:bg-gray-800 text-gray-300 transition-colors"
                    aria-expanded={expandedSections.includes(item.label)}
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`w-4 h-4 ml-auto text-gray-400 transition-transform ${
                        expandedSections.includes(item.label) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedSections.includes(item.label) && (
                    <ul className="ml-4 space-y-1 mt-1">
                      {item.subItems?.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={sub.href}
                            className={`flex items-center p-2 rounded-md transition-colors ${
                              pathname === sub.href ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 text-gray-400'
                            }`}
                          >
                            {sub.icon && <sub.icon className="w-4 h-4 mr-2 text-gray-300" />}
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}