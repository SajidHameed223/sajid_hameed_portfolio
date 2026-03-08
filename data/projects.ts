// --- Types ---
interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  image: string;
  gallery: string[];
  techStack: string[];
  features: string[];
  duration: string;
  completedDate: string;
  liveUrl?: string;
  githubUrl?: string;
}

// --- Data ---
export const projects: Project[] = [
  {
    id: "1",
    title: "AxonERP | Enterprise Resource Planning System",
    shortDescription:
      "A modular enterprise ERP platform with WhatsApp integration, multi-department workflows, and scalable business automation tools.",
    fullDescription:
      "AxonERP is a large-scale enterprise resource planning system where I contributed across multiple modules and system integrations. The platform manages operations such as inventory, sales, purchasing, accounts, and reporting. I worked on feature development, system integrations including WhatsApp communication workflows, and optimization of internal business processes to improve operational efficiency.",
    category: "Enterprise Software",
    image: "/projects/AxonERP/home.png",
    gallery: [
      "/projects/AxonERP/dashboard.png",
      "/projects/AxonERP/modules.png",
      "/projects/AxonERP/dash.png",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "WhatsApp API",
      "Docker",
      "Redux",
    ],
    features: [
      "Multi-module ERP architecture",
      "Sales, Purchase & Inventory management",
      "Accounts & financial reporting",
      "WhatsApp notification integration",
      "Role-based access control",
      "Workflow automation",
      "Business analytics dashboard",
      "Scalable enterprise architecture",
    ],
    duration: "Ongoing",
    completedDate: "ongoing",
  },

  {
    id: "2",
    title: "SafeNet | AI-Powered Parent-Child Safety Platform",
    shortDescription:
      "An AI-driven platform designed to create a safe digital space for children while enabling real-time parental awareness and guidance.",
    fullDescription:
      "SafeNet is my Final Year Project and hackathon submission focused on child safety, emotional awareness, and parent-child communication. The system includes role-based dashboards, AI-powered chatbots for both children and parents, emergency alert features, and gamified learning modules. It integrates RAG-based AI using trusted educational sources and provides real-time monitoring with privacy-first architecture.",
    category: "AI + Social Impact",
    image: "/projects/SafeNet_App/login.jpeg",
    gallery: [
      "/projects/SafeNet_App/home.jpeg",
      "/projects/SafeNet_App/child_dasborad.jpeg",
      "/projects/SafeNet_App/parent_Profile.jpeg",
    ],
    techStack: [
      "React Native",
      "LangChain",
      "Google Gemini",
      "Hugging Face",
      "ChromaDB",
      "SQLite",
      "JWT",
      "Bcrypt",
    ],
    features: [
      "Separate dashboards for parents and children",
      "AI chatbot (SafeMigo) for child interaction & distress detection",
      "Parent assistant powered by RAG-based AI",
      "Emergency SOS button with real-time alerts",
      "Interactive body-safety games and quizzes",
      "Progress tracking & analytics dashboard",
      "Location sharing during emergencies",
      "Privacy-first encrypted architecture",
    ],
    duration: "4 months",
    completedDate: "2025",
    githubUrl: "https://lnkd.in/dbVKQJ39",
  },
{
    id: "3",
    title: "Personal Portfolio Website | Modern Developer Portfolio",
    shortDescription:
      "A fully responsive modern portfolio website featuring animated UI, light/dark themes, and structured multi-page architecture.",
    fullDescription:
      "This is my personal developer portfolio built to showcase my projects, services, and technical expertise through a clean and modern interface. The website features smooth motion animations, dark/light theme switching, responsive layouts, and modular section-based architecture. It includes Home, About, Projects, Services, and Contact pages — designed with performance, accessibility, and scalability in mind.",
    category: "Personal Branding Platform",
    image:       "/projects/Portfolio/portfolio-1.png",
    gallery: [
      "/projects/Portfolio/portfolio-2.png",
      "/projects/Portfolio/portfolio-3.png",
      "/projects/Portfolio/portfolio-4.png",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    features: [
      "Fully responsive across all screen sizes",
      "Light and dark theme toggle system",
      "Animated UI using Framer Motion",
      "Multi-page architecture (Home, About, Projects, Services, Contact)",
      "Reusable component-based structure",
      "Optimized performance & SEO-friendly routing",
      "Modern gradient UI and glassmorphism effects",
      "Smooth scroll and section-based navigation",
    ],
    duration: "Ongoing",
    completedDate: "2026",
    liveUrl: "https://your-portfolio-link.com",
  },
  {
    id: "4",
    title: "AutoPilot | Autonomous Treasury Monitoring Platform",
    shortDescription:
      "A unified operational dashboard for monitoring, auditing, and managing autonomous treasury rebalancing agents.",
    fullDescription:
      "AutoPilot was built during the Qubic Hackathon (lablab.ai). It provides complete visibility and operational control over autonomous treasury automation systems. The platform tracks active agents, execution success rates, queue depth, audit logs, and system health — enabling teams to monitor automated financial workflows with transparency and confidence.",
    category: "FinTech Automation",
    image: "/projects/AutoPilot_Crypto/dashborad.png",
    gallery: [
      "/projects/AutoPilot_Crypto/task.png",
      "/projects/AutoPilot_Crypto/wallet.png",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "REST APIs",
      "Dashboard Analytics",
    ],
    features: [
      "Centralized agent monitoring dashboard",
      "Execution success & error rate tracking",
      "Queue depth & task management system",
      "Audit logs & approval workflows",
      "Agent health monitoring",
      "Operational analytics insights",
      "Real-time system status indicators",
      "Automation pipeline transparency",
    ],
    duration: "Hackathon Project",
    completedDate: "2025",
  },

  {
    id: "5",
    title: "Moonbase_ER | Lunar Emergency Simulation System",
    shortDescription:
      "A full-stack web application simulating a futuristic moon base emergency response system.",
    fullDescription:
      "Moonbase_ER is a hackathon-winning full-stack project (2nd Position – Solaris Hackathon). The application simulates a lunar base emergency response dashboard featuring alert systems, crew management simulation, and real-time backend communication. Built to combine creativity with engineering fundamentals.",
    category: "Simulation System",
    image: "/projects/Moonbase/moonbase-1.png",
    gallery: [
      "/projects/Moonbase/moonbase-2.png",
      "/projects/Moonbase/moonbase-3.png",
      "/projects/Moonbase/moonbase-4.png",
    ],
    techStack: ["Next.js", "Node.js", "Express", "Axios", "Tailwind CSS"],
    features: [
      "Emergency alerts with sound notifications",
      "Real-time lunar base status dashboard",
      "Crew management simulation",
      "Frontend-backend API communication",
      "Responsive UI with space-themed design",
      "Structured full-stack project architecture",
      "Git-based collaborative workflow",
      "Scalable module-based structure",
    ],
    duration: "Hackathon Project",
    completedDate: "2025",
  },
  {
    id: "6",
    title: "Wellness Companion | Mental Health Check-In Platform",
    shortDescription:
      "A full-stack emotional wellness platform featuring mood tracking, pattern detection, and personalized coping strategies.",
    fullDescription:
      "Wellness Companion is a hackathon-built full-stack application designed to provide a gentle, judgment-free space for daily mental health reflection. It combines real-time mood tracking, trend detection over 7–14 days, personalized coping strategies, and a curated mental health resource system — all within a secure, privacy-first architecture.",
    category: "HealthTech Platform",
    image: "/projects/willness/login.jpg",
    gallery: [
      "/projects/willness/home.jpg",
      "/projects/willness/support.jpg",
      "/projects/willness/chatbot.jpg",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "JWT",
      "Bcrypt",
    ],
    features: [
      "5-minute daily mood check-ins",
      "Emoji-based emotional reflection",
      "7–14 day trend detection analysis",
      "Personalized coping strategies",
      "Curated mental health resources",
      "JWT-based secure authentication",
      "Encrypted user data storage",
      "GDPR-aligned architecture",
    ],
    duration: "Hackathon Project",
    completedDate: "2025",
  },

];
