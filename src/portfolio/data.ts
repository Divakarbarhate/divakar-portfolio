export const profile = {
  name: "Divakar Barhate",
  role: "Frontend Engineer",
  tagline: "React · TypeScript · Design Systems",
  location: "Pune, Maharashtra, India",
  phone: "+91 9075280428",
  email: "barhatedivakar99@gmail.com",
  linkedin: "https://linkedin.com/in/divakarbarhate",
  github: "https://github.com/divakarbarhate",
  summary:
    "Junior Software Engineer building production-grade React & TypeScript products — fast, typed, accessible interfaces backed by clean design systems and well-shaped data layers.",
};

export const stats = [
  { value: "2+", label: "Years building for production" },
  { value: "4+", label: "Shipped React applications" },
  { value: "50%", label: "Faster load times delivered" },
  { value: "12", label: "Screens in one design system" },
];

export const experience = [
  {
    company: "ZIONIT AI Software Pvt. Ltd.",
    role: "Junior Software Engineer(React)",
    period: "Oct 2024 — Present",
    place: "Pune, India",
    points: [
      "Developed 4+ production-grade React.js & TypeScript applications, improving user experience by 35%.",
      "Built responsive, reusable UI components with shadcn/ui & Tailwind CSS, cutting development time by 40%.",
      "Integrated REST APIs with TanStack Query, reducing data-fetch latency by 45%.",
      "Implemented complex multi-step forms with Zod validation, reducing submission errors by 30%.",
      "Optimised performance with lazy loading, code splitting and memoization — 50% faster loads.",
      "Implemented role-based authentication and protected routing, reducing unauthorised access by 35%.",
      "Refactored legacy code into reusable typed components, reducing duplication by 45%.",
    ],
  },
];

export const education = [
  {
    school: "Symbiosis International University",
    degree: "Master of Computer Application",
    period: "Jan 2024 — May 2026",
    place: "Pune, India",
  },
  {
    school: "Pratibha College of Commerce and Computer Studies",
    degree: "Bachelor of Computer Application",
    period: "Jun 2020 — Apr 2023",
    place: "Pune, India",
  },
];

export type Project = {
  title: string;
  kind: string;
  blurb: string;
  points: string[];
  stack: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Patient Management System",
    kind: "Healthcare · Frontend Lead",
    blurb:
      "Full-stack healthcare platform frontend consuming a Spring Boot + MySQL backend.",
    points: [
      "Patient registration, doctor scheduling, medical history dashboards and appointment booking flows.",
      "Zod-based validation with secure, role-based UI states for compliant data handling.",
      "Lazy loading and code splitting cut dashboard load time by 40%.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Zod", "Spring Boot API"],
    accent: "01",
  },
  {
    title: "CloudPulse — Multi-Cloud Monitoring",
    kind: "Cloud Observability Platform",
    blurb:
      "Infrastructure, security and billing visibility across AWS, Azure and GCP in one console.",
    points: [
      "VM-wise CPU, memory, disk and network detail screens improving infra visibility by 40%.",
      "Real-time security alerts cutting misconfiguration detection time by 35%.",
      "Cost & billing module surfacing up to 20% in potential savings.",
      "Reusable data tables, stat cards and charts across all 12 screens.",
    ],
    stack: ["React", "TypeScript", "shadcn/ui", "Recharts", "TanStack Query"],
    accent: "02",
  },
  {
    title: "Email Campaign Management",
    kind: "Marketing Automation",
    blurb:
      "Drag-and-drop campaign builder with scheduling, sending and delivery analytics.",
    points: [
      "Drag-and-drop template editor cutting campaign creation time by 50%.",
      "Prospect and group targeting for segmented sends across contact lists.",
      "Calendar-based scheduling and real-time delivery status tracking.",
      "Open, click-through and bounce-rate dashboards with date-ranged filters.",
    ],
    stack: ["React", "TypeScript", "Recharts", "REST APIs", "Zustand"],
    accent: "03",
  },
  {
    title: "Toura — Tour & Travel Management",
    kind: "Personal Project",
    blurb:
      "End-to-end travel platform for discovering packages, building itineraries and managing bookings.",
    points: [
      "Package discovery with filters for destination, budget, duration and travel style.",
      "Day-by-day itinerary builder with drag-to-reorder stops and live cost totals.",
      "Booking flow with traveller details, multi-step Zod validation and invoice summary.",
      "Admin console for packages, seat inventory, bookings and revenue charts.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
    accent: "04",
  },
  {
    title: "DevBoard — Team Task Workspace",
    kind: "Personal Project",
    blurb:
      "Kanban-style workspace with boards, labels, due dates and keyboard-first navigation.",
    points: [
      "Optimistic drag-and-drop card movement with persisted board state.",
      "Command palette, keyboard shortcuts and a fully typed store.",
      "Activity timeline and per-member workload insights.",
    ],
    stack: ["React", "TypeScript", "Zustand", "Tailwind CSS"],
    accent: "05",
  },
  {
    title: "Finlytic — Expense Analytics",
    kind: "Personal Project",
    blurb:
      "Personal finance dashboard turning raw transactions into category-level insight.",
    points: [
      "CSV import with parsing, de-duplication and auto-categorisation rules.",
      "Monthly burn, category split and trend charts built with Recharts.",
      "Budget goals with progress tracking and overspend alerts.",
    ],
    stack: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    accent: "06",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "State & Data",
    items: ["TanStack Query", "Redux", "Zustand", "Zod", "REST APIs", "Recharts"],
  },
  {
    title: "Backend & Database",
    items: ["Java", "Python", "MySQL", "Spring Boot APIs"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Postman", "VS Code", "AI-assisted development"],
  },
];

export const coreSkills = [
  { name: "React.js", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Tailwind CSS & shadcn/ui", level: 90 },
  { name: "TanStack Query & REST", level: 85 },
  { name: "Next.js", level: 78 },
  { name: "Zustand / Redux", level: 80 },
];

export const marquee = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "shadcn/ui",
  "TanStack Query",
  "Zod",
  "Zustand",
  "Redux",
  "Framer Motion",
  "Recharts",
  "Java",
  "MySQL",
  "Git",
];
