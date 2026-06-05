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
  resumeUrl: "https://drive.google.com/file/d/1ibgBYOmQ08W14_Q5EhDJICr7Y0YplpVV/view?usp=sharing", 
  cvUrl: "https://drive.google.com/file/d/1xUW07sxsvT-FQyw56Lbj2JI9-iW8HgM4/view?usp=drive_link",
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
    role: "Research Intern",
    company: "Universiti Malaysia Perlis (UniMAP)",
    period: "Oct 2025 - Mar 2026",
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

export const emailJsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};
