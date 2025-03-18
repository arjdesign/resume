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
  address?: string;
}

// Add Professional Membership interface
interface ProfessionalMembership {
  organization: string;
  period: string;
  role?: string;
}

// Add Teaching Experience interface
interface TeachingExperience {
  position: string;
  course: string;
  institution: string;
  period: string;
  responsibilities: string[];
  impact?: string;
}

// Add Proposal Development interface
interface ProposalDevelopment {
  title: string;
  agency: string;
  period: string;
  amount: string;
  role: string;
  status: 'funded' | 'in-review' | 'completed';
  description: string[];
}

// Add Presentation interface
interface Presentation {
  title: string;
  event: string;
  location: string;
  date: string;
  type: 'conference' | 'workshop' | 'extension' | 'invited';
  description?: string[];
}

// Add Media Coverage interface
interface MediaCoverage {
  type: 'tv' | 'news' | 'social' | 'speaker';
  title: string;
  outlet: string;
  subscribers?: string;
  link: string;
  description?: string;  // Add this optional property
}

// Add Community Service interface
interface CommunityService {
  role: string;
  organization: string;
  period: string;
  description: string[];
}

// Add Entrepreneurship and Leadership interface
interface EntrepreneurshipLeadership {
  title: string;
  organization: string;
  period: string;
  description: string[];
  link?: string;
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
          'Leading the Life Cycle Analysis (LCA) for ECO-CBET: Transforming the Nitrogen Bioeconomy project funded by NSF ($1.7 million)',
          'Spearheading LCA for interdisciplinary C-CHANGE project funded by USDA NIFA ($10 million)',
          'Managing extensive datasets integrating inputs from multiple Life Cycle Inventory databases',
          'Employing open-source LCA software, openLCA, to perform complex environmental impact assessments',
          'Working closely with interdisciplinary team of experts in agronomy, ecology, engineering, and economics',
          'Coordinating with project stakeholders to ensure alignment of LCA objectives with broader sustainability goals',
          'Compiling comprehensive reports and presentations detailing LCA studies outcomes',
          'Contributing to scientific literature and academic conferences',
          'Engaged in outreach activities to disseminate research findings'
        ]
      },
      {
        subtitle: 'Master\'s Research',
        details: [
          'Evaluated soil biological, physical, and economic facets to the integration of management intensive grazing of the cover crop (MIGCC) as the best management practice in Pennsylvania under a no-till system',
          'Analyzed soil microbial health (soil carbon dioxide burst, Permanganate Oxidizable carbon, total Carbon) in response to the integration of MIG',
          'Analyzed effect on soil compaction, soil structural stability, nutrient & water cycling',
          'Conducted partial budget analysis, and net present value analysis to compare farm profitability',
          'Collaborated with NRCS, ARS, Capital RC &D to deliver pasture walks',
          'Participated in extension program (Pasture Walk) conducted to share findings among 30+ farmers'
        ]
      }
    ]
  },
  {
    title: 'NSF Innovation in Graduate Education Internship',
    organization: 'Penn State University',
    period: '2023-2024',
    roles: [
      {
        details: [
          'Facilitated collaboration between Penn State and Tribhuvan University, enhancing STEM graduate education through NSF-funded project',
          'Led a pioneering NSF-funded IGE internship focused on Innovations in Sustainable Energy and Waste Management in Nepal',
          'Managed planning and collaboration aspects of anaerobic digester plant (30 tons/day organic waste)',
          'Transformed waste into resources for nutrient recovery',
          'Conducting Social Life Cycle Assessment (S-LCA) of biogas systems in Nepal',
          'Leading Nepal\'s first carbon farming pilot at Dhangadi commercial biogas facility',
          'Evaluating GHG emission reductions and carbon credit potential',
          'Building networks between stakeholders for carbon market development'
        ]
      }
    ]
  },
  {
    title: 'Undergraduate Research',
    organization: 'Tribhuvan University, Nepal',
    period: '2014-2018',
    roles: [
      {
        details: [
          'Led the screening of rice varieties under reproductive stage drought stress',
          'Conducted comprehensive field trials and data analysis on rice genotypes for drought tolerance',
          'Presented findings to academic and local stakeholders'
        ]
      }
    ]
  }
];

const publications: Publication[] = [
  {
    title: "Soil and Ocean Carbon Sequestration, Carbon Capture, Utilization, and Storage as Negative Emission Strategies for Global Climate Change",
    authors: "Pant, D., Shah, K. K., Sharma, S., Bhatta, M., Tripathi, S., Pandey, H. P., Tiwari, H., Shrestha, J., & Bhat, A. K.",
    journal: "Journal of Soil Science and Plant Nutrition",
    year: "2023",
    doi: "10.1007/s42729-023-01215-5"
  },
  {
    title: "Correlation coefficient and path analysis of rice (Oryza sativa) genotypes under reproductive drought stress in mid hill of Nepal",
    authors: "Pant, D., Sharma, S., & Poudel, A.",
    journal: "Crop Research, 54, 152–157",
    year: "2022",
    doi: "10.31830/2454-1761.2019.026"
  },
  {
    title: "Intensive Grazing Management of Cover Crops for Soil Health",
    authors: "Pant, D., & Duiker, S.",
    journal: "",
    year: "2021"
  },
  {
    title: "Strawberry Grey Mould, a Devastating Disease Caused by the Airborne Fungal Pathogen Botrytis cinerea",
    authors: "Rhouma, A., Lobna, H.-H., Othmen, B., Shah, K., Matrood, A., Okon, O., & Pant, D.",
    journal: "Egyptian Journal of Phytopathology, 50, 44–50",
    year: "2022",
    doi: "10.21608/ejp.2022.161763.1070"
  },
  {
    title: "Downy mildew of cucurbits caused by Pseudoperonospora cubensis: Disease profile and management",
    authors: "Rhouma, A., Shah, K., Pant, D., & Khrieba, M.",
    journal: "2, 8–15",
    year: "2022"
  },
  {
    title: "Access to Solar Energy for Livelihood Security in Odisha, India",
    authors: "Giri, N. C., Das, S., Pant, D., Bhadoria, V. S., Mishra, D. P., Mahalik, G., & Mrabet, R.",
    journal: "Signals, Machines and Automation: Select Proceedings of SIGMA 2022, 1023, 235",
    year: "2023"
  },
  {
    title: "Secure Blockchain-Based Intelligent Internet of Things",
    authors: "Das, S., Giri, N. C., Mazumdar, K., Bhowmick, P., Tiwari, H., Pant, D., & Mehta, S.",
    journal: "Security Implementation in Internet of Medical Things (pp. 23-36). CRC Press",
    year: "2023"
  },
  {
    title: "Access to Solar Energy for Livelihood Security in Odisha, India",
    authors: "Giri, N. C., Das, S., Pant, D., Bhadoria, V. S., Mishra, D. P., Mahalik, G., & Mrabet, R.",
    journal: "International Conference on Signals, Machines, and Automation (pp. 235-242). Singapore: Springer Nature Singapore",
    year: "2022"
  },
  {
    title: "Alternate Bearing in Fruit Crops: Causes and Control Measures",
    authors: "Jangid, R., Kumar, A., Masu, M., Kanade, N., & Pant, D.",
    journal: "Asian Journal of Agricultural and Horticultural Research, 10–19",
    year: "2023",
    doi: "10.9734/ajahr/2023/v10i1217"
  },
  {
    title: "An overview on possible management strategies for coffee white stem Borer Xylotrechus quadripes Chevrolat (Coleoptera: Cerambycidae) in Nepal",
    authors: "Pandey, M., Kayastha, P., Khanal, S., Shrestha, S., Thakur, G., Adhikari, K., Shah, K., Pant, D., & Khanal, D.",
    journal: "Heliyon, 8",
    year: "2022",
    doi: "10.1016/j.heliyon.2022.e10445"
  }
];

// Add manuscripts in review
const manuscriptsInReview: Publication[] = [
  {
    title: "Forage production from intensive grazing of cover crops and impact on soil health",
    authors: "Pant, Divya., Duiker, Sjoerd W., Bryant Ray B & White, Charles M.",
    journal: "Agriculture, Ecosystems & Environment",
    year: "2022",
    status: "in-review"
  },
  {
    title: "Disease resistance triggered by plant immunity system: concept and mechanism",
    authors: "Bhatta, M., Pant, Divya., Shah, K.K., Giri, N.C., Rhouma, A., & Shrestha, J.",
    journal: "Phytopathology Research. BMC",
    year: "2022",
    status: "in-review"
  }
];

// Combine publications and manuscripts in review
const allPublications = [...publications, ...manuscriptsInReview];

const awards: Award[] = [
  {
    title: "Harold V. and Velma B. Walton Doctoral Student Endowment in Agricultural and Biological Engineering Award",
    organization: "Penn State University",
    year: "2024",
    description: "Awarded for outstanding performance and accomplishments as doctoral students"
  },
  {
    title: "Award of Excellence and 3rd Prize for Poster Competition",
    organization: "Bio-renewable Symposium",
    year: "2024",
    description: "Awarded the 2024 award of excellence along with 3rd prize for the poster competition"
  },
  {
    title: "3rd Prize for Poster Competition",
    organization: "Northeast Agricultural & Biological Engineering Conference",
    year: "2024",
    description: "Awarded at the 2024 Northeast Agricultural & Biological Engineering Conference, Pennsylvania"
  },
  {
    title: "NSF Innovation in Graduate Education Program Grant",
    organization: "National Science Foundation",
    year: "2023",
    description: "Awarded $6000-$8000 grant for piloting innovative STEM graduate education approaches"
  },
  {
    title: "USDA Travel Grant",
    organization: "USDA",
    year: "2023",
    description: "Awarded $1000 to support research contributions in agricultural sustainability at International Symposium on Sustainable Systems and Technology"
  },
  {
    title: "United Nations Forum on Forests Invitation",
    organization: "United Nations",
    year: "2023",
    description: "Invited to attend the 18th Session focused on forest conservation and sustainable management"
  },
  {
    title: "Community Service Recognition",
    organization: "City of New York",
    year: "2023",
    description: "Awarded certificate for commitment and dedication to serving diverse communities"
  },
  {
    title: "Graduate Recognition and Honors Award",
    organization: "Lions Club of Baltimore Nepalese",
    year: "2022"
  },
  {
    title: "Second Runner Up",
    organization: "Miss Nepal North America",
    year: "2022"
  },
  {
    title: "Climate Action4Clean Air Business Pitching Competition Finalist",
    organization: "ICIMOD & Antarprerana Pvt. Ltd.",
    year: "2021"
  },
  {
    title: "Outstanding Academic Achievement and Leadership Award",
    organization: "Gamma Sigma Delta Honor Society for Agricultural Sciences",
    year: "2021",
    description: "Awarded for outstanding academic achievement and leadership potential"
  },
  {
    title: "Ag Springboard Student Business Pitch Contest - Second Prize",
    organization: "Penn State University",
    year: "2021",
    description: "Awarded $2500 as winning prize for startup 'Carbon Compost'"
  },
  {
    title: "International Agriculture Scholarship",
    organization: "Penn State University",
    year: "2021",
    description: "Awarded $1717 for contribution to international agriculture development"
  },
  {
    title: "College of Agricultural Sciences General Scholarship",
    organization: "Penn State University",
    year: "2019-2021",
    description: "Awarded for maintaining good academic records and leadership"
  },
  {
    title: "Merit Scholarship and Outstanding Student Award",
    organization: "Adarsh Vidya Niketan Secondary School",
    year: "2000-2018",
    description: "Awarded merit scholarship from primary school to bachelor's degree"
  }
];

// Add skills data
const skills: SkillCategory[] = [
  {
    name: 'Programming',
    skills: [
      { name: 'C++' },
      { name: 'R programming' },
      { name: 'Python' }
    ]
  },
  {
    name: 'Operating System',
    skills: [
      { name: 'Microsoft Windows- PowerPoint, Excel, Word, Spreadsheet' },
      { name: 'ArcGIS' },
      { name: 'Web Soil Survey' }
    ]
  },
  {
    name: 'Languages',
    skills: [
      { name: 'English' },
      { name: 'Nepali' },
      { name: 'Hindi' },
      { name: 'Pahadi' }
    ]
  },
  {
    name: 'Instrumentation',
    skills: [
      { name: 'TL 2800 Ammonia Analyzer' },
      { name: 'Colorimeter' },
      { name: 'PR2 Soil Moisture Profile Probe' },
      { name: 'ML3 Theta Probe Soil Moisture Sensor' },
      { name: 'Moisture Probe Installation' },
      { name: 'Soil Infiltrometer' },
      { name: 'Laminar Flow Hoods' },
      { name: 'SPAD 502 Plus Chlorophyll Meter' }
    ]
  }
];

// Add references data
const references: Reference[] = [
  {
    name: "Christine Costello",
    title: "Assistant Professor of Agricultural and Biological Engineering",
    institution: "Pennsylvania State University",
    email: "cxc693@psu.edu",
    phone: "814-865-3089",
    relationship: "Research Advisor",
    address: "217 Agricultural Engineering Building, University Park, PA 16802"
  },
  {
    name: "Rachel Brennan",
    title: "Professor of Civil and Environmental Engineering",
    institution: "Pennsylvania State University",
    email: "rab44@psu.edu",
    phone: "814-865-9428",
    relationship: "Research Advisor",
    address: "231K Sackett Building, University Park, PA 16802"
  },
  {
    name: "Sjoerd Willem Duiker",
    title: "Professor of Soil Management and Applied Soil Physics",
    institution: "Pennsylvania State University",
    email: "sduiker@psu.edu",
    phone: "814-863-7637",
    relationship: "Research Advisor",
    address: "408 Agricultural Sciences and Industries Building, University Park, PA 16802"
  },
  {
    name: "Mark A. Brennan",
    title: "Professor and UNESCO Chair in Community, Leadership, and Youth Development Director of Graduate Studies for Education, Development, and Community Engagement",
    institution: "Pennsylvania State University",
    email: "unescochair@psu.edu",
    phone: "814-863-0387",
    relationship: "Academic Advisor",
    address: "204C Ferguson Building, University Park, PA 16802"
  },
  {
    name: "Ray Bryant",
    title: "Adjunct Professor of Agronomy, USDA-ARS",
    institution: "USDA-ARS",
    email: "ray.bryant@ars.usda.gov",
    phone: "814-863-092",
    relationship: "Research Advisor",
    address: "USDA-ARS_Pasture Systems and Watershed Management Research Unit, University Park, PA 16802"
  }
];

// Add professional memberships data
const professionalMemberships: ProfessionalMembership[] = [
  {
    organization: "American Society of Agricultural and Biological Engineers",
    period: "2024-Present"
  },
  {
    organization: "Goodwill Ambassador under Miss Nepal North America",
    period: "2022-Present"
  },
  {
    organization: "Ag Springboard Alum Network-Entrepreneurship & Innovation- Penn State University",
    period: "2021-Present"
  },
  {
    organization: "Graduate Women in Engineering",
    period: "2022-Present"
  },
  {
    organization: "The International Symposium on Sustainable Systems and Technology",
    period: "2022-Present"
  },
  {
    organization: "Crop Science Society of America",
    period: "2020-2022"
  },
  {
    organization: "American Society of Agronomy",
    period: "2020-2022"
  },
  {
    organization: "Soil Science Society of America",
    period: "2020-2022"
  },
  {
    organization: "Amnesty International Nepal",
    period: "2014-Present"
  },
  {
    organization: "Nepal Red Cross Society",
    period: "2013-Present"
  }
];

// Add teaching experience data
const teachingExperience: TeachingExperience[] = [
  {
    position: "Graduate Teaching Assistant",
    course: "AGECO 144: Organic Agriculture",
    institution: "Pennsylvania State University",
    period: "Aug 2021-Dec 2021",
    responsibilities: [
      "Department of Agricultural and Environmental Plant Science",
      "Undergraduate Class instruction"
    ]
  },
  {
    position: "Undergraduate Teaching Assistant",
    course: "Sustainable agriculture system",
    institution: "Institute of Agriculture and Animal Science, Tribhuvan University",
    period: "Jan 2016-Dec 2017",
    responsibilities: [
      "3 credits undergraduate class"
    ]
  }
];

// Add proposal development data
const proposalDevelopment: ProposalDevelopment[] = [
  {
    title: "Elon Musk funded XPRIZE CARBON REMOVAL- Sanjeevani: Land-based approach for carbon sequestration at global scale",
    agency: "XPRIZE",
    period: "2021",
    amount: "$1 million to $100 million",
    role: "PI",
    status: "completed",
    description: [
      "Only team from Nepal to participate in X prize",
      "Not funded",
      "PI: Pant, Divya",
      "Co-PIs Ojha, R.B; Jaisi, M; Dhakal, B; Katwal, A"
    ]
  },
  {
    title: "Integration of management intensive grazing of the cover crop as the best management practice in Pennsylvania under a no-till system",
    agency: "Northeast SARE Graduate Student Grant",
    period: "2020",
    amount: "$15,000",
    role: "Co-PI",
    status: "completed",
    description: [
      "PI: Duiker, S",
      "Co-PIs: Pant, D",
      "Not funded"
    ]
  }
];

// Add presentations data
const presentations: Presentation[] = [
  // Recent and Upcoming 2024 Presentations
  {
    title: "Life cycle assessment of duckweed based manure treatment system for nutrient circularity",
    event: "Biorenewable Symposium",
    location: "Pennsylvania",
    date: "April 18-19, 2024",
    type: "conference"
  },
  {
    title: "Life cycle assessment of duckweed based manure treatment system for nutrient circularity",
    event: "Penn State Interdisciplinary Environmental Research Symposium",
    location: "Pennsylvania",
    date: "April 5-6, 2024",
    type: "conference"
  },
  {
    title: "Life cycle assessment of duckweed based manure treatment system for nutrient circularity",
    event: "International Symposium on Sustainable Systems and Technology",
    location: "Baltimore",
    date: "June 18-20, 2024",
    type: "conference"
  },
  {
    title: "Life cycle assessment of duckweed based manure treatment system for nutrient circularity",
    event: "American Society of Agricultural and Biological Engineers",
    location: "California",
    date: "July 28-31, 2024",
    type: "conference"
  },
  {
    title: "Life cycle assessment of duckweed based manure treatment system for nutrient circularity",
    event: "NORTHEAST AGRICULTURAL / BIOLOGICAL ENGINEERING CONFERENCE",
    location: "Pennsylvania",
    date: "July 14-17, 2024",
    type: "conference"
  },
  // Past Presentations 2023
  {
    title: "Life cycle assessment of pelletized duckweed soil amendment derived from farm manure wastewater",
    event: "International Symposium on Sustainable Systems and Technology",
    location: "Colorado",
    date: "June 12-15, 2023",
    type: "conference"
  },
  {
    title: "Life cycle assessment of pelletized duckweed soil amendment derived from farm manure wastewater",
    event: "C-CHANGE: Grass2Gas Annual Meeting",
    location: "Lancaster, Pennsylvania",
    date: "May 31-June 2, 2023",
    type: "conference"
  },
  {
    title: "Life cycle assessment of integrated duckweed based farm manure waste management",
    event: "Biorenewables symposium",
    location: "Pennsylvania",
    date: "April 21, 2023",
    type: "conference"
  },
  {
    title: "Life Cycle Assessment of Duckweed Based Manure Treatment System at Farm Level",
    event: "Department of Agricultural Engineering, Penn State University",
    location: "State College, PA",
    date: "December 7, 2023",
    type: "conference"
  },
  // Past Presentations 2022
  {
    title: "Holistic approach to livestock and waste management for sustainability",
    event: "International Conference 'Sudurpaschim Studies: Heritage, Innovation, and Transformation'",
    location: "Far Western University",
    date: "December 13-14, 2022",
    type: "conference"
  },
  {
    title: "Forage production from intensive grazing of cover crops and impact on soil health",
    event: "Penn State University Departmental Seminar",
    location: "Penn State",
    date: "May 2022",
    type: "conference"
  },
  // Past Presentations 2021
  {
    title: "Impact of prescribed grazing of cover crops on soil health and forage production",
    event: "Keystone Crop and Soil Conference",
    location: "",
    date: "October 19-20, 2021",
    type: "conference"
  },
  {
    title: "Soil health and profitability impacts of prescribed grazing of cover crops vs double-cropped soybeans",
    event: "Penn State Graduate Exhibition",
    location: "virtual",
    date: "March 23, 2021",
    type: "conference"
  },
  {
    title: "Impact of prescribed grazing of cover crops on soil health and forage production",
    event: "Northeast Cover Crops Council annual conference",
    location: "",
    date: "March 2021",
    type: "conference"
  },
  {
    title: "Management Intensive Grazing of Cover Crops for Soil Health and Profitability",
    event: "Making Cover Crops Pay, Penn State Extension",
    location: "virtual",
    date: "February 2021",
    type: "extension"
  },
  {
    title: "Management Intensive Grazing of Cover Crops for Soil Health and Profitability",
    event: "ASA-CSSA-SSSA Annual Meeting",
    location: "Virtual",
    date: "Nov. 9-13, 2020",
    type: "conference"
  }
];

// Add navigation data
const navigationItems: NavItem[] = [
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
    id: 'research',
    label: 'Research Experience',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
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
    id: 'presentations',
    label: 'Presentations',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    id: 'awards',
    label: 'Honors & Awards',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 'entrepreneurship',
    label: 'Entrepreneurship & Leadership',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 'memberships',
    label: 'Professional Memberships',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 'teaching',
    label: 'Teaching Experience',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  {
    id: 'proposals',
    label: 'Proposal Development',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 'media',
    label: 'Media Coverage',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'community',
    label: 'Community Service',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    id: 'references',
    label: 'References',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
 
];

// Add media coverage data
const mediaCoverage: MediaCoverage[] = [
  {
    type: 'tv',
    title: 'Academic and Entrepreneurial Excellence Interview',
    outlet: 'News24 Nepal',
    subscribers: '3.17 million',
    link: 'https://www.youtube.com/watch?v=j_Ew1ZafxhU&t=5s'
  },
  {
    type: 'tv',
    title: 'Academic and Entrepreneurial Excellence Interview',
    outlet: 'Space 4K Television',
    subscribers: '340k',
    link: 'https://www.youtube.com/watch?v=aHaDq0gFTXU&t=493s'
  },
  {
    type: 'tv',
    title: 'Academic and Entrepreneurial Excellence Interview',
    outlet: 'Prime Times HD',
    subscribers: '1.47 million',
    link: 'https://www.youtube.com/watch?v=jfUdfHI6Jd4&t=867s'
  },
  {
    type: 'tv',
    title: 'Academic and Entrepreneurial Excellence Interview',
    outlet: 'Yoho Television HD',
    subscribers: '1.01 million',
    link: 'https://www.youtube.com/watch?v=55ksIB-HO88'
  },
  {
    type: 'tv',
    title: 'Academic and Entrepreneurial Excellence Interview',
    outlet: 'Ramailo Cha',
    subscribers: '1.45 million',
    link: 'https://www.youtube.com/watch?v=8hex9LDIA3E'
  },
  {
    type: 'social',
    title: 'State of State speaker interview',
    outlet: 'Blue & White Society Facebook',
    link: 'https://www.facebook.com/BlueWhiteSociety/videos/719251525547692/?t=44'
  }
];

// Add community service data
const communityService: CommunityService[] = [
  {
    role: "Moderator",
    organization: "Club of Rome Global Youth Summit, Penn State University",
    period: "",
    description: []
  },
  {
    role: "Organizer",
    organization: "Women Empowerment-Menstrual hygiene and sexual awareness among secondary female students",
    period: "2018",
    description: ["YFAW"]
  },
  {
    role: "Event Coordinator",
    organization: "Agri debate on vulnerable issues concerning agriculture and environment",
    period: "2017",
    description: ["YFAW"]
  },
  {
    role: "Organizer",
    organization: "Workshop on 'Communication Skill Development & Proposal Writing'",
    period: "2016",
    description: ["YFAW"]
  },
  {
    role: "Event organizer",
    organization: "CoP in my city campaign",
    period: "2015",
    description: ["YFAW"]
  },
  {
    role: "Mentor",
    organization: "Network for Women Empowerment, Child-Care, Rural Agri-Research and Extension",
    period: "",
    description: []
  },
  {
    role: "Advisor",
    organization: "Youth-led NGO- Youth for Agri Welfare",
    period: "",
    description: []
  },
  {
    role: "Trainee",
    organization: "30 days training and educational excursion to learn farming practices and innovations in 10+ states of India",
    period: "2016",
    description: []
  }
];

// Add Entrepreneurship and Leadership data
const entrepreneurshipLeadership: EntrepreneurshipLeadership[] = [
  {
    title: "Goodwill Tourism Ambassador",
    organization: "Nepal Tourism Board, Miss Nepal North America",
    period: "2022-Present",
    description: [
      "Placed Second Runner up for Miss Nepal North America",
      "Featured by the largest social media account in Nepal for winning Miss Nepal North America",
      "Bagged Miss Talent Trophy for Miss Nepal North America, 2022",
      "Showcased Nepali language, ethnicities, folk dance, traditions, culture, and food among US government representatives, and local and regional communities in Northeast America to strengthen Nepal-US relations"
    ],
    link: "https://missnepalnorthamerica.com/"
  },
  {
    title: "CEO and Founder",
    organization: "Carbon Away (formerly named Carbon Compost)",
    period: "2020-Present",
    description: [
      "Carbon Away and Waste to Energy are a sustainable business model that creates economic, social, and environmental value out of organic waste",
      "Waste to Energy has built an anaerobic digester in Dhangadi Sub Metropolitan City, Nepal with the capacity to process 30 tons of organic municipal waste/day and produce 1200 kg of biogas/day and 3.5 tons of fertilizer/day from waste",
      "The project is supported by the Alternative Energy Promotion Centre (AEPC) and has a total investment of $250,000",
      "Forged collaboration with Dev Training and Management Service Center Pvt. Ltd. and collectively worked on the Waste to Energy Project in Dhangadi Sub Metropolitan City and provided related training to 120 farmers in Nepal",
      "Built collaboration among 4 academic and research institutions, 3 nonprofit youth and community development-driven organizations, and 5 agriculture startups in Nepal"
    ],
    link: "https://www.instagram.com/carbonaway_/"
  },
  {
    title: "Joint Secretary",
    organization: "Youth for Agri Welfare (YFAW)",
    period: "2015-2019",
    description: [
      "Scaled the number of YFAW's team members, community members served, and collaborators three times during my tenure as a founding member of YFAW",
      "Developed and ensured appropriate agriculture training packages for 52 resource-poor farmers in the Parbat, Lamjung, and Tahahu districts, Nepal",
      "Coordinated and facilitated training, seminar, and workshop on Integrated Farming and Sustainable Farm Design for 52 farmers",
      "Identified and promoted potential agro-enterprises in Nepal which now has scaled up from pilot scale projects to full-fledged enterprises"
    ],
    link: "https://www.facebook.com/yfaw015/"
  },
  {
    title: "Advocate",
    organization: "Women's Empowerment and Diversity",
    period: "2022-Present",
    description: [
      "Advocated for women's empowerment, equity & equality",
      "Advocated for inclusion, equity, and diversity at Penn State University",
      "Advocating for Nepal US relations through Global Connections- Building Community Across Cultures"
    ]
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

        <section id="research" className="py-16 bg-white dark:bg-gray-900">
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
                {allPublications.map((pub, index) => (
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

        <section id="teaching" className="py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Teaching Experience
              </h2>
              <div className="space-y-6">
                {teachingExperience.map((teaching, index) => (
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
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                            {teaching.position}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400 mt-1">
                            {teaching.course}
                          </p>
                          <p className="text-secondary-600 dark:text-secondary-400">
                            {teaching.institution}
                          </p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 h-fit">
                          {teaching.period}
                        </span>
                      </div>
                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {teaching.responsibilities.map((responsibility, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-secondary-600 dark:text-secondary-300 flex items-start"
                            >
                              <span className="mr-2 text-primary-400 dark:text-primary-300">•</span>
                              {responsibility}
                            </motion.li>
                          ))}
                        </ul>
                        {teaching.impact && (
                          <p className="text-primary-600 dark:text-primary-400 italic mt-2">
                            {teaching.impact}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="memberships" className="py-16 bg-white dark:bg-gray-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Professional Memberships
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {professionalMemberships.map((membership, index) => (
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
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
                          {membership.organization}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                          {membership.period}
                        </span>
                      </div>
                      {membership.role && (
                        <p className="text-secondary-600 dark:text-secondary-300 mt-2">
                          {membership.role}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="proposals" className="py-16 bg-white dark:bg-gray-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Research Proposals & Funding
              </h2>
              <div className="space-y-6">
                {proposalDevelopment.map((proposal, index) => (
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
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                            {proposal.title}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400">
                            {proposal.agency}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                            {proposal.period}
                          </span>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                            ${proposal.status === 'funded' 
                              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                              : proposal.status === 'completed'
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                              : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                            }`}
                          >
                            {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-semibold text-secondary-700 dark:text-secondary-300">
                          {proposal.amount}
                        </span>
                        <span className="text-secondary-600 dark:text-secondary-400">•</span>
                        <span className="text-secondary-600 dark:text-secondary-400">
                          {proposal.role}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {proposal.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-secondary-600 dark:text-secondary-300 flex items-start"
                          >
                            <span className="mr-2 text-primary-400 dark:text-primary-300">•</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="presentations" className="py-16 bg-white dark:bg-gray-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Presentations & Conferences
              </h2>
              <div className="space-y-6">
                {presentations.map((presentation, index) => (
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
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                            {presentation.title}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400">
                            {presentation.event}
                          </p>
                          <p className="text-secondary-600 dark:text-secondary-400">
                            {presentation.location}
                          </p>
                          <p className="text-secondary-600 dark:text-secondary-400">
                            {presentation.date}
                          </p>
                          <p className="text-secondary-600 dark:text-secondary-400">
                            {presentation.type}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                            {presentation.type}
                          </span>
                          <ul className="space-y-2">
                            {presentation.description?.map((item, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-secondary-600 dark:text-secondary-300 flex items-start"
                              >
                                <span className="mr-2 text-primary-400 dark:text-primary-300">•</span>
                                {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="media" className="py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Media & Press Coverage
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {mediaCoverage.map((media, index) => (
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
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                              ${media.type === 'tv' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
                                media.type === 'news' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                                media.type === 'social' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' :
                                'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                              }`}
                            >
                              {media.type.toUpperCase()}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                            {media.title}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400">
                            {media.outlet}
                          </p>
                          {media.subscribers && (
                            <p className="text-secondary-600 dark:text-secondary-400 mt-1">
                              {media.subscribers}
                            </p>
                          )}
                          {media.description && (
                            <p className="text-secondary-600 dark:text-secondary-400 mt-2">
                              {media.description}
                            </p>
                          )}
                        </div>
                        {media.link && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={media.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Article
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="community" className="py-16 bg-white dark:bg-gray-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Community Service & Leadership
              </h2>
              <div className="space-y-6">
                {communityService.map((service, index) => (
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
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                            {service.role}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400 mt-1">
                            {service.organization}
                          </p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                          {service.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {service.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-secondary-600 dark:text-secondary-300 flex items-start"
                          >
                            <span className="mr-2 text-primary-400 dark:text-primary-300">•</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="entrepreneurship" className="py-16 bg-white dark:bg-gray-900">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-8 tracking-tight">
                Entrepreneurship & Leadership
              </h2>
              <div className="space-y-6">
                {entrepreneurshipLeadership.map((activity, index) => (
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
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                            {activity.title}
                          </h3>
                          <p className="text-lg text-primary-600 dark:text-primary-400">
                            {activity.organization}
                          </p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                          {activity.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {activity.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-secondary-600 dark:text-secondary-300 flex items-start"
                          >
                            <span className="mr-2 text-primary-400 dark:text-primary-300">•</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                      {activity.link && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={activity.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Visit Website
                        </motion.a>
                      )}
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

//testsadas