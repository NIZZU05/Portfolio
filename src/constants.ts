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
  email: "nizzukhan5049@gmail.com",
  resumeUrl: "/resume.pdf", // Updated for the attached file
};

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
  { name: "TensorFlow", icon: BrainCircuit },
  { name: "Keras", icon: BrainCircuit },
  { name: "IoT Systems", icon: Cpu },
  { name: "Data Processing", icon: BarChart3 },
  { name: "MongoDB", icon: Database },
  { name: "Firebase", icon: Database },
  { name: "Supabase", icon: Database },
];

export const projects = [
  {
    title: "WiFi-Enabled Real-Time ADC Monitoring",
    description: "A portable real-time signal monitoring system using ESP32 with built-in 12-bit ADC. Features WebSocket-based data streaming for low-latency communication and a browser-based dashboard for live visualization. Research findings and system architecture are documented in an upcoming IEEE conference paper (Publication Pending).",
    tags: ["ESP32", "WebSockets", "Chart.js", "C++"],
    thumbnailUrl: "https://lh3.googleusercontent.com/d/1-BgJZ8yEB0Xo9t9zRWp-GAnX1Y-CWUhc",
    githubUrl: "https://github.com/NIZZU05",
    liveUrl: "#",
    category: "IoT",
    hideLinks: true,
  },
  {
    title: "Cervical Cancer Prediction Model",
    description: "Built a predictive machine learning model for cervical cancer detection using structured healthcare datasets. Achieved 88% accuracy using supervised learning algorithms.",
    tags: ["ML", "Python", "TensorFlow", "Scikit-Learn"],
    thumbnailUrl: "https://lh3.googleusercontent.com/d/1qvQCPU53TubXSFu_mJaKc0ATJ8swMwel",
    githubUrl: "https://github.com/NIZZU05",
    liveUrl: "https://colab.research.google.com/drive/1imuF-sQKZ05RB8PCYYB_8qqtMsCrUI_9#scrollTo=1de8d154",
    category: "AI/ML",
  },
  {
    title: "Warehouse Monitoring System",
    description: "Developed an IoT-based warehouse monitoring system for Ice City Refrigeration to track electrical and environmental parameters in real time. This industrial-grade solution integrates sensor networks with cloud data logging. A research paper detailing the implementation and data analysis is set for IEEE publication soon.",
    tags: ["IoT", "Data Visualization", "Sensors"],
    thumbnailUrl: "https://lh3.googleusercontent.com/d/1fiIHYmGV1hS6Dvz3ODNCTogCFiyabmtK",
    githubUrl: "https://github.com/NIZZU05",
    liveUrl: "#",
    category: "IoT + Web",
    hideLinks: true,
  }
];

export const experience = [
  {
    role: "Research Intern",
    company: "Universiti Malaysia Perlis (UniMAP)",
    period: "Oct 2025 - Mar 2026",
    description: [
      "Developed an IoT-based warehouse monitoring system for Ice City Refrigeration.",
      "Designed and implemented a WiFi-enabled real-time ADC monitoring system using ESP32.",
      "Performed data preprocessing, system validation, and integration for industrial applications.",
      "Collaborated with academic researchers and industry stakeholders at AdvComp."
    ],
  },
  {
    role: "Intern - Computer Hardware & Networking",
    company: "Vectra Technosoft Pvt. Ltd.",
    period: "Jul 2022",
    description: [
      "Completed hands-on internship in hardware service and networking fundamentals.",
      "Assisted in real-time system maintenance and hardware troubleshooting."
    ],
  }
];

export const emailJsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};
