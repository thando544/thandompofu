export type ProjectStatus = "live" | "in progress" | "private" | "archived";
export type ProjectCategory =
  | "AI"
  | "SaaS"
  | "Web"
  | "Mobile"
  | "Automation"
  | "Infrastructure";

export type Project = {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  architecture: string[];
  process: string[];
  challenges: string[];
  lessons: string[];
  screenshots: string[];
  relatedNotes: string[];
  technologies: string[];
  images: string[];
  liveLink?: string;
  githubLink?: string;
  readmeLink?: string;
  setupGuide?: {
    title: string;
    summary: string;
    requirements: string[];
    steps: string[];
    tips: string[];
  };
  status: ProjectStatus;
  category: ProjectCategory;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Awande African Expeditions",
    slug: "awande-african-expeditions",
    shortDescription:
      "A premium safari and travel website for African expedition discovery, storytelling, and conversion.",
    fullDescription:
      "Awande African Expeditions is a public-facing travel platform built to present expedition experiences, destination content, and booking intent with a polished, fast web experience.",
    problem:
      "Travel brands need a digital experience that feels trustworthy, visually rich, fast, and clear enough to convert visitors into real enquiries.",
    solution:
      "Built a responsive expedition website with clear content structure, strong visual hierarchy, destination storytelling, and production-ready deployment.",
    architecture: [
      "Responsive marketing website",
      "Destination and expedition content model",
      "SEO-ready page structure",
      "Lead-focused contact flow",
      "Production web deployment",
    ],
    process: [
      "Mapped the core travel discovery journey",
      "Structured expedition content for scanning and trust",
      "Built responsive pages for mobile and desktop visitors",
      "Connected the live production domain",
    ],
    challenges: [
      "Balancing premium presentation with fast loading",
      "Making travel content easy to scan on mobile",
      "Turning visual storytelling into clear enquiry paths",
    ],
    lessons: [
      "Tourism websites need clarity as much as atmosphere",
      "A strong content model makes future destinations easier to add",
      "Performance directly affects trust on public-facing sites",
    ],
    screenshots: [
      "Homepage hero",
      "Expedition detail sections",
      "Contact and enquiry flow",
    ],
    relatedNotes: [
      "react-native-field-app-build-log",
      "docker-vps-deployment-checklist",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Responsive Design",
      "Web Deployment",
    ],
    images: ["/assets/hero.png"],
    liveLink: "https://awandeafricaexpeditions.com",
    githubLink: "https://github.com/thando544/awandeafricanexpeditions",
    status: "live",
    category: "Web",
    featured: true,
  },
  {
    title: "Workforce Management Platform",
    slug: "workforce-management-platform",
    shortDescription:
      "A scalable SaaS platform for workforce coordination, reporting, and team performance tracking.",
    fullDescription:
      "A workforce management system built for task planning, operational visibility, and measurable business outcomes.",
    problem:
      "Organisations need tools to coordinate schedules, measure performance, and surface urgent issues in one place.",
    solution:
      "Delivered a platform that integrates attendance, roles, metrics, and automated alerts for field operations.",
    architecture: [
      "Role-based React dashboard",
      "Node.js service modules",
      "PostgreSQL reporting schema",
      "Supabase auth and storage",
      "Docker deployment pipeline",
    ],
    process: [
      "Modeled teams, roles, and attendance flows",
      "Designed reporting views for managers",
      "Implemented alerts for operational exceptions",
      "Hardened access control",
    ],
    challenges: [
      "Designing flexible reporting without slow queries",
      "Keeping dashboards scannable",
      "Modeling field operations cleanly",
    ],
    lessons: [
      "Operational software needs dense but calm interfaces",
      "Database indexes are product features",
      "Alerts should be actionable, not noisy",
    ],
    screenshots: ["Operations dashboard", "Attendance report", "Team detail"],
    relatedNotes: [
      "supabase-rls-patterns-saas",
      "docker-vps-deployment-checklist",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Supabase", "Docker"],
    images: [
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1778756741/codex.itsnomatata.com_-_thando_mpofu_a5zmxq.png",
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1778831609/codex-leaves_ecu71w.png",
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1778831613/codex-Itsnomatata_o9zrby.png",
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1778831611/codex-cards_msxewg.png",
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1778831609/itsnomatata-codex_heqjcb.png",
    ],
    liveLink: "https://codex.itsnomatata.com",
    githubLink: "https://github.com/thando544/itsnomatata-workspace",
    status: "live",
    category: "SaaS",
    featured: true,
  },
  {
    title: "Wildlife Safety Network",
    slug: "wildlife-safety-network",
    shortDescription:
      "A mobile-first safety system connecting field teams, sensors, and dispatch through mobile alerts.",
    fullDescription:
      "Wildlife Safety Network is a secure mobile platform for incident reporting, live status updates, and operational coordination.",
    problem:
      "Remote teams need a simple way to report hazards, receive notifications, and access critical data on mobile.",
    solution:
      "Built a React Native and Expo mobile experience with realtime alerts, mapping, and secure database sync.",
    architecture: [
      "Expo mobile app",
      "Supabase realtime alerts",
      "PostgreSQL incident records",
      "Node.js notification service",
      "Offline-aware field forms",
    ],
    process: [
      "Mapped incident reporting moments",
      "Designed mobile-first forms",
      "Built alert and status flows",
      "Tested field-friendly interaction states",
    ],
    challenges: [
      "Handling low-connectivity environments",
      "Making urgent actions fast on small screens",
      "Keeping sensitive field data secure",
    ],
    lessons: [
      "Mobile workflows should minimize typing",
      "Offline states need to be designed early",
      "Realtime updates require clear priority rules",
    ],
    screenshots: ["Mobile chat screen", "Login screen", "Mobile app preview"],
    relatedNotes: ["react-native-field-app-build-log"],
    technologies: ["React Native", "Expo", "Supabase", "PostgreSQL", "Node.js"],
    images: [
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1778832981/codex-mobile-chats_l5rfe7.png",
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1778832985/codex-login_ma1xoy.png",
      "https://res.cloudinary.com/dnqjax5ut/image/upload/v1778832980/Screenshot_2026-05-15_at_10.10.02_eu78qw.png",
    ],
    liveLink:
      "https://expo.dev/accounts/thando501/projects/wsn/builds/a2f79e8f-cffe-461e-a344-2055fd813498",
    githubLink: "https://github.com/thando544/WildSafteyNetwork",
    status: "in progress",
    category: "Mobile",
    featured: false,
  },
  {
    title: "Animal Tracking System",
    slug: "animal-tracking-system",
    shortDescription:
      "A local Python computer-vision system for animal detection and tracking with YOLOv8 and OpenCV.",
    fullDescription:
      "Animal Tracking System is a Python-based computer vision project that runs locally, uses YOLOv8 and OpenCV for animal detection/tracking, and is launched through a Windows batch workflow instead of a hosted live demo.",
    problem:
      "Wildlife and field teams need a practical way to process video footage locally, detect animals, and inspect tracking output without depending on a hosted web service.",
    solution:
      "Built a local Python workflow around YOLOv8, OpenCV, and batch-script execution so the system can be installed, launched, and tested directly from the machine.",
    architecture: [
      "Python runtime environment",
      "Windows .bat launcher",
      "YOLOv8 object detection model",
      "OpenCV video processing pipeline",
      "Local output and review workflow",
    ],
    process: [
      "Prepared the Python project structure",
      "Documented setup through README.txt and setup.bat",
      "Connected YOLOv8 detection to video/image processing",
      "Used batch execution for repeatable local startup",
    ],
    challenges: [
      "Managing model and dependency setup locally",
      "Keeping video processing usable on normal hardware",
      "Making the project understandable from the README",
    ],
    lessons: [
      "Computer vision projects need clear install instructions",
      "Local-first tools should make startup obvious",
      "Model performance depends on both data quality and runtime constraints",
    ],
    screenshots: [
      "YOLOv8 detection output",
      "OpenCV tracking preview",
      "Batch launcher workflow",
    ],
    relatedNotes: [
      "designing-trusted-ai-workflows",
      "docker-vps-deployment-checklist",
    ],
    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Ultralytics",
      "Computer Vision",
      "Batch Scripts",
    ],
    images: ["/assets/hero.png"],
    githubLink: "https://github.com/thando544/animal-tracking-system",
    readmeLink:
      "https://github.com/thando544/animal-tracking-system/blob/main/README.txt",
    setupGuide: {
      title: "Windows Setup Guide",
      summary:
        "The system detects animals, vehicles, and people using webcams or IP cameras. It is designed for a no-code Windows setup using setup.bat and RUN.bat.",
      requirements: [
        "Windows 10/11 PC with USB ports for webcams",
        "Internet access for first-run dependency/model setup",
        "Python 3.11+ installed from python.org with Add to PATH enabled",
      ],
      steps: [
        "Extract the project ZIP to a folder such as Desktop\\Animal-Tracking.",
        "Plug in USB webcams or note the IP camera RTSP URLs from the camera manual.",
        "Double-click setup.bat and wait for Setup complete. If it errors, confirm Python is installed and restart the PC.",
        "Edit config.json in Notepad if needed. Use camera_sources: [0, 1] for multiple webcams or an RTSP URL for IP cameras.",
        "Double-click RUN.bat to start the system. The camera window shows detections, q quits, and logs save to data/detections/.",
      ],
      tips: [
        "First run may take one to two minutes while the YOLO model loads.",
        "Advanced users can run RUN.bat --cameras 0 1 from Command Prompt.",
        "If cameras do not open, check Windows Camera privacy settings and allow desktop apps.",
        "Tracked classes can be customized in config.json, for example by adding elephant.",
        "Support contact: thand@thandom.tech.",
      ],
    },
    status: "live",
    category: "AI",
    featured: false,
  },
  {
    title: "n8n AI Automation System",
    slug: "n8n-ai-automation-system",
    shortDescription:
      "A workflow automation system that combines AI triggers, integrations, and low-code execution for operations.",
    fullDescription:
      "Designed automation flows using n8n to connect email, APIs, and AI services for repeatable business processes.",
    problem:
      "Teams waste time on repetitive information tasks while tools and data remain disconnected.",
    solution:
      "Built n8n workflows that automate lead routing, content approval, and system notifications through AI decisions.",
    architecture: [
      "n8n workflow engine",
      "OpenAI decision steps",
      "Supabase persistence",
      "Webhook triggers",
      "Notification integrations",
    ],
    process: [
      "Audited repetitive workflows",
      "Separated deterministic and AI steps",
      "Added manual approval points",
      "Documented recovery paths",
    ],
    challenges: [
      "Preventing fragile automations",
      "Debugging multi-service failures",
      "Designing useful human approvals",
    ],
    lessons: [
      "Automation needs logs before scale",
      "AI belongs where rules get fuzzy",
      "Manual checkpoints increase trust",
    ],
    screenshots: ["Workflow canvas", "Execution logs", "Approval queue"],
    relatedNotes: ["designing-trusted-ai-workflows"],
    technologies: ["n8n", "OpenAI", "Supabase", "APIs"],
    images: ["/assets/hero.png"],
    status: "live",
    category: "Automation",
    featured: true,
  },
  {
    title: "VPS Hosting / Deployment Setup",
    slug: "vps-hosting-deployment-setup",
    shortDescription:
      "A Linux VPS deployment stack for containerized applications with Nginx, Docker, and secure service management.",
    fullDescription:
      "VPS Hosting Setup includes Docker containers, Nginx reverse proxy, SSL, and monitoring for production-ready apps.",
    problem:
      "Applications need stable server infrastructure, automated deploys, and secure network configuration for real use.",
    solution:
      "Delivered a deployment architecture that supports Docker apps, PostgreSQL hosting, and automated updates on VPS.",
    architecture: [
      "Linux VPS",
      "Docker Compose services",
      "Nginx reverse proxy",
      "SSL certificates",
      "Backups and monitoring",
    ],
    process: [
      "Provisioned base server",
      "Containerized application services",
      "Configured reverse proxy and SSL",
      "Added update and backup routines",
    ],
    challenges: [
      "Keeping configuration repeatable",
      "Balancing cost with reliability",
      "Securing services without slowing deploys",
    ],
    lessons: [
      "Small systems still need runbooks",
      "Logs are part of the product",
      "Infrastructure decisions shape product velocity",
    ],
    screenshots: [
      "Service topology",
      "Deployment checklist",
      "Monitoring view",
    ],
    relatedNotes: ["docker-vps-deployment-checklist"],
    technologies: ["Docker", "Linux", "Nginx", "VPS", "Supabase"],
    images: ["/assets/hero.png"],
    status: "live",
    category: "Infrastructure",
    featured: false,
  },
];
