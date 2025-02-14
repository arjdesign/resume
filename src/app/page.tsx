'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Add these interfaces before the data constants
interface Role {
  subtitle?: string;
  details: string[];
}

interface ResearchExperience {
  title: string;
  organization: string;
  period: string;
  roles: Role[];
}

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi?: string;
  status?: 'published' | 'in-review';
}

interface Award {
  title: string;
  organization: string;
  year: string;
  description?: string;
}

// Add interface for skills
interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  }[];
}

// Add this interface for navigation items
interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

// Add new Reference interface
interface Reference {
  name: string;
  title: string;
  institution: string;
  email: string;
  phone?: string;
  relationship: string;
}

const education = [
  {
    degree: 'Ph.D., Agricultural and Biological Engineering',
    school: 'Penn State University',
    period: '2022-Present',
    details: [
      'Ph.D. in Bio renewable systems',
      'GPA: 3.9/4.0'
    ]
  },
  {
    degree: 'Master of Science, Plant Science',
    school: 'Penn State University',
    period: '2019-2022',
    details: [
      'Major in Agronomy',
      'Minor in International Agriculture and Development',
      'Thesis: Management Intensive Grazing of Cover Crops for Soil Health and Profitability',
      'GPA: 3.92/4.0'
    ]
  },
  {
    degree: 'Bachelor of Science in Agriculture',
    school: 'Tribhuvan University, Nepal',
    period: '2014-2018',
    details: [
      'GPA: 3.90/4.0'
    ]
  }
];

const researchExperience: ResearchExperience[] = [
  {
    title: 'Graduate Research Assistant',
    organization: 'Penn State University',
    period: '2019-Present',
    roles: [
      {
        subtitle: 'Ph.D. Research',
        details: [
          'Leading the Life Cycle Analysis (LCA) for ECO-CBET: Transforming the Nitrogen Bioeconomy project funded by NSF ($1.7M)',
          'Spearheading LCA for interdisciplinary C-CHANGE project funded by USDA NIFA ($10M)',
          'Managing extensive datasets integrating inputs from multiple Life Cycle Inventory databases',
          'Employing openLCA software for complex environmental impact assessments',
          'Coordinating with stakeholders to align LCA objectives with sustainability goals',
          'Contributing to scientific literature and academic conferences'
        ]
      },
      {
        subtitle: 'Master\'s Research',
        details: [
          'Evaluated soil biological, physical, and economic aspects of management intensive grazing of cover crops',
          'Analyzed soil microbial health and structural stability in Pennsylvania',
          'Conducted partial budget analysis for farm profitability comparison',
          'Collaborated with NRCS, ARS, Capital RC &D for pasture walks promotion',
          'Participated in extension programs sharing research findings with 30+ farmers'
        ]
      }
    ]
  },
  {
    title: 'NSF Innovation in Graduate Education Internship',
    organization: 'Penn State & Tribhuvan University',
    period: '2023-2024',
    roles: [
      {
        details: [
          'Facilitated collaboration between Penn State and Tribhuvan University for STEM graduate education',
          'Led NSF-funded internship focusing on sustainable energy and waste management in Nepal',
          'Managed anaerobic digester plant processing 30 tons/day of organic waste',
          'Conducted Social Life Cycle Assessment (S-LCA) of biogas systems',
          'Led Nepal\'s first carbon farming pilot at Dhangadi commercial biogas facility'
        ]
      }
    ]
  }
];

const publications: Publication[] = [
  {
    title: 'Soil and Ocean Carbon Sequestration, Carbon Capture, Utilization, and Storage as Negative Emission Strategies for Global Climate Change',
    authors: 'Pant, D., Shah, K. K., Sharma, S., Bhatta, M., Tripathi, S., Pandey, H. P., Tiwari, H., Shrestha, J., & Bhat, A. K.',
    journal: 'Journal of Soil Science and Plant Nutrition, 23(2), 1421–1437',
    year: '2023',
    doi: '10.1007/s42729-023-01215-5'
  },
  {
    title: 'Correlation coefficient and path analysis of rice (Oryza sativa) genotypes under reproductive drought stress in mid hill of Nepal',
    authors: 'Pant, D., Sharma, S., & Poudel, A.',
    journal: 'Crop Research, 54, 152–157',
    year: '2022',
    doi: '10.31830/2454-1761.2019.026'
  },
  {
    title: 'Strawberry Grey Mould, a Devastating Disease Caused by the Airborne Fungal Pathogen Botrytis cinerea',
    authors: 'Rhouma, A., Lobna, H.-H., Othmen, B., Shah, K., Matrood, A., Okon, O., & Pant, D.',
    journal: 'Egyptian Journal of Phytopathology, 50, 44–50',
    year: '2022',
    doi: '10.21608/ejp.2022.161763.1070'
  },
  {
    title: 'Forage production from intensive grazing of cover crops and impact on soil health',
    authors: 'Pant, D., Duiker, Sjoerd W., Bryant Ray B & White, Charles M.',
    journal: 'Agriculture, Ecosystems & Environment',
    year: '2022',
    status: 'in-review'
  }
];

const awards: Award[] = [
  {
    title: 'NSF Innovation in Graduate Education Fellowship',
    organization: 'National Science Foundation',
    year: '2023',
    description: 'Selected for prestigious NSF fellowship to promote STEM education collaboration between US and Nepal.'
  },
  {
    title: 'Outstanding Graduate Student Award',
    organization: 'Penn State College of Agricultural Sciences',
    year: '2022',
    description: 'Recognized for exceptional academic performance and research contributions.'
  },
  {
    title: 'Graduate Student Travel Award',
    organization: 'American Society of Agronomy',
    year: '2021',
    description: 'Awarded to present research at ASA, CSSA, SSSA International Annual Meeting.'
  },
  {
    title: 'University Gold Medal',
    organization: 'Tribhuvan University',
    year: '2018',
    description: 'Awarded for achieving highest GPA in B.Sc. Agriculture.'
  }
];

// Add skills data
const skills: SkillCategory[] = [
  {
    name: 'Research & Analysis',
    skills: [
      { name: 'Life Cycle Analysis (LCA)', level: 'expert' },
      { name: 'Environmental Impact Assessment', level: 'expert' },
      { name: 'Data Analysis & Statistics', level: 'advanced' },
      { name: 'Research Design', level: 'advanced' },
      { name: 'Scientific Writing', level: 'advanced' }
    ]
  },
  {
    name: 'Technical Skills',
    skills: [
      { name: 'R Programming', level: 'advanced' },
      { name: 'Python', level: 'intermediate' },
      { name: 'MATLAB', level: 'intermediate' },
      { name: 'GIS', level: 'intermediate' },
      { name: 'openLCA', level: 'expert' }
    ]
  },
  {
    name: 'Languages',
    skills: [
      { name: 'English', level: 'expert' },
      { name: 'Nepali', level: 'expert' },
      { name: 'Hindi', level: 'advanced' }
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Project Management', level: 'advanced' },
      { name: 'Team Leadership', level: 'advanced' },
      { name: 'Public Speaking', level: 'advanced' },
      { name: 'Grant Writing', level: 'intermediate' }
    ]
  }
];

// Add references data
const references: Reference[] = [
  {
    name: "Dr. Charles M. White",
    title: "Associate Professor",
    institution: "Penn State University",
    email: "cmw29@psu.edu",
    relationship: "Ph.D. Advisor"
  },
  {
    name: "Dr. Sjoerd W. Duiker",
    title: "Professor of Soil Management and Applied Soil Physics",
    institution: "Penn State University",
    email: "swd10@psu.edu",
    relationship: "Master's Thesis Advisor"
  },
  {
    name: "Dr. Tom L. Richard",
    title: "Professor of Agricultural and Biological Engineering",
    institution: "Penn State University",
    email: "tlr20@psu.edu",
    relationship: "Graduate Committee Member"
  }
];

// Add navigation data
const navigationItems: NavItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: 'education',
    label: 'Education',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    )
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'publications',
    label: 'Publications',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 'awards',
    label: 'Awards',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 'references',
    label: 'References',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = React.useState('overview');
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px' // Only consider middle 50% of viewport
      }
    );

    // Observe all sections
    navigationItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize progress on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Add this new useEffect for background color
  React.useEffect(() => {
    // Set background color for both html and body
    document.documentElement.style.backgroundColor = isDarkMode ? '#111827' : '#ffffff';
    document.body.style.backgroundColor = isDarkMode ? '#111827' : '#ffffff';

    // Cleanup function
    return () => {
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
    };
  }, [isDarkMode]);

  return (
    <div className="flex dark:bg-gray-900">
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto z-50 hidden md:block">
        <div className="px-6 py-8">
          <div className="flex items-center justify-between mb-8 relative">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                <Image
                  src="/profile.jpg"
                  alt="Divya Pant"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="font-semibold text-secondary-900 dark:text-white">Divya Pant</h3>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">Ph.D. Candidate</p>
              </div>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative z-50"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
          <div className="relative">
            <div className="space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                    activeSection === item.id
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium'
                      : 'text-secondary-600 dark:text-secondary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50 md:hidden">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <Image
                src="/profile.jpg"
                alt="Divya Pant"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 dark:text-white text-sm">Divya Pant</h3>
              <p className="text-xs text-secondary-600 dark:text-secondary-400">Ph.D. Candidate</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6 text-secondary-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20
        }}
        className={`fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-40 md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 py-2">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                  activeSection === item.id
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium'
                    : 'text-secondary-600 dark:text-secondary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <main className="flex-1 ml-0 md:ml-64 min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-secondary-900 dark:text-white transition-colors duration-200 pt-16 md:pt-0">
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] dark:bg-grid-gray-100/[0.02] bg-[size:20px_20px]" />
        <section id="overview" className="relative py-20 md:py-28 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-primary-700/[0.02] dark:bg-grid-primary-100/[0.02] bg-[size:32px_32px]" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container relative mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 dark:text-white mb-6 tracking-tight">
                Divya Pant
              </h1>
              <p className="text-xl md:text-2xl text-secondary-600 dark:text-secondary-400 mb-12 font-light">
                Researcher, Entrepreneur, Leader
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8 md:mb-10">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:divyapant027@gmail.com"
                  className="w-full md:w-auto flex items-center justify-center gap-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-4 py-2 rounded-full hover:bg-white/80 dark:hover:bg-gray-800/80"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm md:text-base">divyapant027@gmail.com</span>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+12054992371"
                  className="w-full md:w-auto flex items-center justify-center gap-2 text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors px-4 py-2 rounded-full hover:bg-white/80 dark:hover:bg-gray-800/80"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm md:text-base">+1-205-499-2371</span>
                </motion.a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
                {[
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/divyapant' },
                  { name: 'Google Scholar', href: 'https://scholar.google.com/citations?user=divyapant' },
                  { name: 'ResearchGate', href: 'https://www.researchgate.net/profile/Divya-Pant' }
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:bg-white dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="education" className="py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary-200 before:to-primary-100 dark:before:from-primary-700 dark:before:to-primary-900 before:rounded-full"
                  >
                    <div className="absolute left-0 top-0 w-2 h-2 bg-primary-400 dark:bg-primary-300 rounded-full -translate-x-[3px]" />
                    <div className="bg-white dark:bg-gray-800/50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <span className="text-secondary-600 dark:text-secondary-300 font-medium">{edu.period}</span>
                      </div>
                      <p className="text-lg text-secondary-700 dark:text-secondary-200 mb-4">{edu.school}</p>
                      <ul className="space-y-4">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="text-secondary-600 dark:text-secondary-300 flex items-start">
                            <span className="mr-2 text-primary-400 dark:text-primary-300">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="experience" className="py-16 bg-white dark:bg-gray-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Research Experience
              </h2>
              <div className="space-y-8">
                {researchExperience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary-200 before:to-primary-100 dark:before:from-primary-700 dark:before:to-primary-900 before:rounded-full"
                  >
                    <div className="absolute left-0 top-0 w-2 h-2 bg-primary-400 dark:bg-primary-300 rounded-full -translate-x-[3px]" />
                    <div className="bg-white dark:bg-gray-800/50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className="text-secondary-600 dark:text-secondary-300 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-lg text-secondary-700 dark:text-secondary-200 mb-6">{exp.organization}</p>
                      <div className="space-y-4">
                        {exp.roles.map((role, roleIndex) => (
                          <div key={roleIndex} className="space-y-2">
                            {role.subtitle && (
                              <h4 className="text-lg font-medium text-primary-600 dark:text-primary-300">
                                {role.subtitle}
                              </h4>
                            )}
                            <ul className="space-y-4">
                              {role.details.map((detail, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="text-secondary-600 dark:text-secondary-300 flex items-start"
                                >
                                  <span className="mr-2 text-primary-400 dark:text-primary-300">•</span>
                                  {detail}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="publications" className="py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white tracking-tight">
                  Publications
                </h2>
                <div className="text-secondary-600 dark:text-secondary-300">
                  <span className="font-medium">Citations:</span> 43
                </div>
              </div>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white dark:bg-gray-800/50 rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-lg font-medium text-secondary-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                            {pub.title}
                          </h3>
                          <p className="text-secondary-600 dark:text-secondary-300">{pub.authors}</p>
                          <p className="text-secondary-600 dark:text-secondary-300">
                            {pub.journal} ({pub.year})
                            {pub.status && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                                {pub.status}
                              </span>
                            )}
                          </p>
                          {pub.doi && (
                            <motion.a
                              whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.2 }
                              }}
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-sm text-primary-600 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-200"
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              DOI: {pub.doi}
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="awards" className="py-16 bg-white dark:bg-gray-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Awards & Honors
              </h2>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary-200 before:to-primary-100 dark:before:from-primary-700 dark:before:to-primary-900 before:rounded-full"
                  >
                    <div className="absolute left-0 top-0 w-2 h-2 bg-primary-400 dark:bg-primary-300 rounded-full -translate-x-[3px]" />
                    <div className="bg-white dark:bg-gray-800/50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                          {award.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-lg text-secondary-700 dark:text-secondary-200 mb-3">
                        {award.organization}
                      </p>
                      {award.description && (
                        <p className="text-secondary-600 dark:text-secondary-300">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="skills" className="py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800/50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">
                      {category.name}
                    </h3>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-secondary-700 dark:text-secondary-200">{skill.name}</span>
                            {skill.level && (
                              <span className={`
                                px-2 py-1 rounded-full text-xs font-medium
                                ${skill.level === 'expert' ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200' :
                                  skill.level === 'advanced' ? 'bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200' :
                                  skill.level === 'intermediate' ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200' :
                                  'bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300'}
                              `}>
                                {skill.level}
                              </span>
                            )}
                          </div>
                          {skill.level && (
                            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-1.5">
                              <div
                                className={`h-1.5 rounded-full ${
                                  skill.level === 'expert' ? 'w-full bg-primary-500 dark:bg-primary-400' :
                                  skill.level === 'advanced' ? 'w-4/5 bg-primary-400 dark:bg-primary-500' :
                                  skill.level === 'intermediate' ? 'w-3/5 bg-primary-300 dark:bg-primary-600' :
                                  'w-2/5 bg-primary-200 dark:bg-primary-700'
                                }`}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="references" className="py-16 bg-white dark:bg-gray-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                References
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {references.map((reference, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                          {reference.name}
                        </h3>
                        <p className="text-sm text-secondary-600 dark:text-secondary-400 mt-1">
                          {reference.relationship}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-secondary-700 dark:text-secondary-300">
                          {reference.title}
                        </p>
                        <p className="text-secondary-600 dark:text-secondary-400">
                          {reference.institution}
                        </p>
                        <div className="flex flex-col space-y-2">
                          <a
                            href={`mailto:${reference.email}`}
                            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {reference.email}
                          </a>
                          {reference.phone && (
                            <a
                              href={`tel:${reference.phone}`}
                              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {reference.phone}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-primary-600 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full shadow-lg hover:bg-primary-700 transition-colors flex items-center gap-2 z-50"
        onClick={() => window.print()}
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span className="hidden md:inline">Download Resume</span>
        <span className="md:hidden">Download</span>
      </motion.button>
      <div className="fixed top-16 md:top-0 left-0 md:left-64 right-0 h-1 bg-gray-100 dark:bg-gray-800 z-50">
        <motion.div
          className="h-full bg-primary-500 dark:bg-primary-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
}

//test