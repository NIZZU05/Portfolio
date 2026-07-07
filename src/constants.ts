import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Cpu, 
  Globe, 
  Database, 
  BrainCircuit, 
  BarChart3,
  Code2,
  Terminal
} from 'lucide-react';

import nexusLandingPage from './assets/images/nexus_landing_page_1779709076139.png';
import nexusWebApp from './assets/images/nexus_web_app_1779709096554.png';

export const personalInfo = {
  name: "Nizam Khan M",
  professions: [
    "Full Stack Developer",
    "Software Developer",
    "IoT Engineer",
    "AI/ML Engineer",
    "Data Analyst",
    "Business Intelligence Developer"
  ],
  tagline: "I don't code - I build complete working systems",
  about: "Computer Science undergraduate specializing in Machine Learning, IoT systems, and full-stack development. Experienced in developing real-time monitoring systems, predictive models, and scalable backend applications using Python, Node.js, and cloud-integrated databases. Currently a Research Intern at Universiti Malaysia Perlis (UniMAP), contributing to data-driven system design and applied research.",
  photoUrl: "https://lh3.googleusercontent.com/d/1RBcASW0vYhnZX8vLVra8uw4hhmSSKGDJ", // User's uploaded photo
  email: "nizamkhan5049@gmail.com",
  phone: "+91 63809 28108",
  resumeUrl: "https://drive.google.com/file/d/1ClSXoHxPz2774yR7JiWCz-nXXKjCTAGn/view?usp=drivesdk", 
  cvUrl: "https://drive.google.com/file/d/1Tn7ZAuN7OS_vFQ-PVfBCghJ-GOYRPTXu/view?usp=sharing",
};

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology",
    period: "Jun 2023 – May 2026",
    grade: "CGPA: 8.31 (Current)",
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Panimalar Polytechnic College",
    period: "Jun 2020 – May 2023",
    grade: "CGPA: 9.1",
  }
];

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/NIZZU05",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nizam-khan-m-841a14351?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: Mail,
  }
];

export const skills = [
  { name: "Python", icon: Terminal },
  { name: "JavaScript", icon: Code2 },
  { name: "C++", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "Node.js", icon: Globe },
  { name: "Express.js", icon: Globe },
  { name: "React", icon: Globe },
  { name: "IoT Systems", icon: Cpu },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Backend Development", icon: Terminal },
  { name: "Frontend Development", icon: Globe },
  { name: "REST APIs", icon: Globe },
  { name: "Data Processing", icon: BarChart3 },
  { name: "Arduino IDE", icon: Cpu },
  { name: "MongoDB", icon: Database },
  { name: "Firebase", icon: Database },
  { name: "Supabase", icon: Database },
];

export const projects = [
  {
    title: "Nexus AI Algo Landing Page",
    company: "Nexus AI Algo",
    description: "Designed and developed a highly optimized, high-fidelity corporate landing page for Nexus AI Algo. Employs sophisticated smooth-scroll interactions, interactive algorithm visualizers, responsive modules, and custom brand assets.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    thumbnailUrl: nexusLandingPage,
    githubUrl: "#",
    liveUrl: "https://nexus-ai-algo.vercel.app/",
    category: "Frontend",
    customButtons: [
      {
        label: "Visit Live Landing Page",
        url: "https://nexus-ai-algo.vercel.app/",
        variant: "success",
      }
    ]
  },
  {
    title: "Nexus AI Algo Web Application",
    company: "Nexus AI Algo",
    description: "Architected and engineered a comprehensive algorithms administration client and analytical data platform for Nexus AI Algo. Features customized tracking statistics, live interactive charting components, parameter configuration panels, and modern layout systems (Under active development).",
    tags: ["React", "Node.js", "Express", "Tailwind CSS", "Recharts"],
    thumbnailUrl: nexusWebApp,
    githubUrl: "#",
    liveUrl: "https://nexus-ai-algo-application.vercel.app/",
    category: "Full Stack",
    customButtons: [
      {
        label: "View Application (In Development)",
        url: "https://nexus-ai-algo-application.vercel.app/",
        variant: "accent",
      }
    ]
  },
  {
    title: "IoT-Based Cold Storage Monitoring",
    description: "Developed an IoT-based warehouse monitoring system for Ice City Refrigeration to track electrical and environmental parameters in real time. Built cloud-based logging using Google Sheets API / Firebase for real-time data tracking.",
    tags: ["IoT", "ESP32", "Firebase", "PZEM-004T"],
    thumbnailUrl: "https://lh3.googleusercontent.com/d/1fiIHYmGV1hS6Dvz3ODNCTogCFiyabmtK",
    githubUrl: "#",
    liveUrl: "https://script.google.com/macros/s/AKfycbxS8qT7FevVYYNbqwrlJUjnYWpkH43MSqfTct6xrFivRWGUPve992OOSHo8i1U9YkDzoA/exec",
    category: "IoT",
    customButtons: [
      {
        label: "Live Web App (24/7 Live)",
        url: "https://script.google.com/macros/s/AKfycbxS8qT7FevVYYNbqwrlJUjnYWpkH43MSqfTct6xrFivRWGUPve992OOSHo8i1U9YkDzoA/exec",
        variant: "success",
      }
    ]
  },
  {
    title: "WiFi-Enabled Real-Time ADC Monitoring",
    description: "Designed a portable real-time signal monitoring system using ESP32 with built-in 12-bit ADC. Features WebSocket-based data streaming and a browser-based dashboard for live waveform visualization. Accepted for publication in Springer LNNS series at the ICCCNet 2026 conference.",
    tags: ["ESP32", "WebSockets", "Chart.js", "C++"],
    thumbnailUrl: "https://lh3.googleusercontent.com/d/1-BgJZ8yEB0Xo9t9zRWp-GAnX1Y-CWUhc",
    githubUrl: "#",
    liveUrl: "#",
    category: "IoT",
    customButtons: [
      {
        label: "Springer Letter of Acceptance",
        action: "view_acceptance",
        variant: "accent",
      },
      {
        label: "Read Accepted Research Paper",
        action: "view_paper",
        variant: "glass",
      }
    ]
  },
  {
    title: "Cervical Cancer Prediction Model",
    description: "Built a predictive machine learning model for cervical cancer detection using structured healthcare datasets. Achieved 88% accuracy using supervised learning (SVM, Logistic Regression).",
    tags: ["ML", "Python", "Scikit-Learn", "Healthcare"],
    thumbnailUrl: "https://lh3.googleusercontent.com/d/1qvQCPU53TubXSFu_mJaKc0ATJ8swMwel",
    githubUrl: "#",
    liveUrl: "https://colab.research.google.com/drive/1imuF-sQKZ05RB8PCYYB_8qqtMsCrUI_9",
    category: "AI/ML",
    customButtons: [
      {
        label: "Interactive Google Colab Demo",
        url: "https://colab.research.google.com/drive/1imuF-sQKZ05RB8PCYYB_8qqtMsCrUI_9",
        variant: "accent",
      }
    ]
  }
];

export const experience = [
  {
    role: "AI Engineer (Freelancer)",
    company: "Drytis",
    period: "Jul 2026 - Present",
    description: [
      "Working as a freelance AI Engineer and independent contractor on an as-needed basis, delivering timely bug fixes and feature improvements.",
      "Supporting AI integration tasks and maintaining reliable, production-ready performance for client-facing systems.",
      "Communicating directly with the client, building projects, fixing bugs, and providing microservices."
    ],
  },
  {
    role: "Web Application Developer (Freelancer)",
    company: "Nexus AI Algo",
    period: "Mar 2026 - May 2026",
    description: [
      "Developed a landing page and a full-stack AI web application — Nexus AI — over a 4-month freelance engagement.",
      "Built a unified dashboard enabling users to interact with multiple AI tools; implemented secure auth, API integration, and real-time data processing.",
      "Designed scalable backend architecture with database integration for user management, session handling, and data persistence.",
      "Deployed on cloud hosting with performance optimization and continuous updates post-launch."
    ],
  },
  {
    role: "Research Intern",
    company: "Universiti Malaysia Perlis (UniMAP)",
    period: "Oct 2025 - Feb 2026",
    description: [
      "Developed an IoT-based warehouse monitoring system for Ice City Refrigeration to track electrical and environmental parameters.",
      "Designed and implemented a WiFi-enabled real-time ADC monitoring system using ESP32 with WebSocket streaming.",
      "Performed data preprocessing, system validation, and integration for real-world industrial applications.",
      "Collaborated with industry stakeholders and academic researchers at AdvComp on system design."
    ],
  },
  {
    role: "Intern - Computer Hardware & Networking",
    company: "Vectra Technosoft Pvt. Ltd., Chennai",
    period: "Jul 2022",
    description: [
      "Completed hands-on experience in hardware servicing and networking fundamentals.",
      "Assisted in real-time system maintenance and hardware troubleshooting.",
      "Installed and troubleshot operating systems, device drivers, and peripheral hardware components.",
      "Monitored system performance and supported preventive maintenance to ensure smooth hardware operations"
    ],
  }
];

export const volunteering = [
  {
    role: "Media Team Member",
    organization: "Department of CSE, Vel Tech",
    period: "2023 - Present",
    details: "Created high-quality multimedia content and managed system setups for active department-level workshops."
  },
  {
    role: "Event Organizer",
    organization: "Technical/Non-Technical Events, Vel Tech",
    period: "2024",
    details: "Coordinated operational logistics, stage telemetry, and participant queues for collegiate tech symposiums."
  },
  {
    role: "Event Organizer",
    organization: "Panimalar Polytechnic College",
    period: "2022",
    details: "Led scheduling alignment, hardware staging, and coordination for inter-departmental technical meets."
  }
];

export const credentials = [
  {
    title: "Research Intern Offer Letter - UniMAP",
    issuer: "Universiti Malaysia Perlis (UniMAP)",
    date: "2025",
    url: "https://drive.google.com/file/d/19PR6oocmkHWikQmK9pcWrow0IWQiuWAU/view?usp=drive_link",
    type: "Letter",
    id: "UniMAP-2025-L9"
  },
  {
    title: "Outstanding Volunteering & Tech Award",
    issuer: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute",
    date: "2023",
    url: "https://drive.google.com/file/d/14tfvKvrpIkGbhTsH35ukUhFerKaPwvzu/view?usp=drive_link",
    type: "Award",
    id: "VelTech-A"
  }
];

export const certifications = [
  {
    title: "Research Intern",
    issuer: "Ministry of Education, Govt. of India",
    date: "2024",
    url: "https://drive.google.com/file/d/1Pk-wkV2Bh96JfZOoTDqeTVmjFqk9DAz7/view?usp=drivesdk",
    isImportant: true,
  },
  {
    title: "Getting Started With Arduino UNO",
    issuer: "Google Cloud",
    date: "2025",
    url: "https://drive.google.com/file/d/1EuLvRhfAXyxJeesmXLK_JBtGCApZ55St/view?usp=drivesdk",
    isImportant: false,
  },
  {
    title: "Ensemble Machine Learning Techniques",
    issuer: "DeepLearning.AI / Coursera",
    date: "2024",
    url: "https://drive.google.com/file/d/1o_Kr_K0Krww597y-3KLdcnkwU3zQjNkN/view?usp=drivesdk",
    isImportant: false,
  },
  {
    title: "Building ArcGIS Cross-Platform Applications with JavaScript",
    issuer: "DeepLearning.AI",
    date: "2025",
    url: "https://drive.google.com/file/d/1ROpTXOuDVmjnbnjx2aYoUFngdIGNEhKs/view?usp=drivesdk",
    isImportant: false,
  },
  {
    title: "PCAP: Programming Essentials in Python",
    issuer: "Jovian / Vel Tech",
    date: "2024",
    url: "https://drive.google.com/file/d/1IiirklET91uTwUyyl-VdQWkC7I3yDF92/view?usp=drivesdk",
    isImportant: false,
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Universiti Malaysia Perlis (UniMAP)",
    date: "2025",
    url: "https://drive.google.com/file/d/1SrLHFCWbn2MC1BDm88mHqBaODfWbM7Ud/view?usp=drivesdk",
    isImportant: false,
  },
  {
    title: "Explore Automation Development with UiPath Studio",
    issuer: "Udemy",
    date: "2024",
    url: "https://drive.google.com/file/d/1iSz9enytTJtImy70d9MQpdDwxdBmMbGj/view?usp=drivesdk",
    isImportant: false,
  },
  {
    title: "PROGRAMMING SKILLS IN C ",
    issuer: "NPTEL / IIT",
    date: "2023",
    url: "https://drive.google.com/file/d/1BsvztcL9rkDQxnLzudRgKdwW8Wh2ilmH/view?usp=drivesdk",
    isImportant: false,
  },
  {
    title: "Python for Beginners: Learn Python Programming (Python 3)",
    issuer: "Vel Tech Institute",
    date: "2024",
    url: "https://drive.google.com/file/d/14oUjbODh_6Yh6ua-_gDmoE7hJ65_JWbR/view?usp=drivesdk",
    isImportant: false,
  }
];

export const emailJsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};
