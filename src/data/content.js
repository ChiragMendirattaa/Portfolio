export const profile = {
  name: "Chirag Mendiratta",
  role: "Full Stack Developer — Java / Spring Boot, React & AI-driven products",
  location: "Delhi, India",
  status: "open to work · Noida / Gurugram / Remote",
  email: "chiragmendiratta27@gmail.com",
  phone: "+91-8447898447",
  github: "https://github.com/ChiragMendirattaa",
  linkedin: "https://www.linkedin.com/in/chiragmendiratta",
  summary:
    "15+ months building production-grade backends and frontends — from REST APIs at Nexdew Technologies to architecting Luna Health AI solo, a live multi-service platform with AI coaching and payment integrations.",
  about:
    "I'm a full-stack developer based in Delhi, India, working across Java/Spring Boot backends and React frontends. At Nexdew Technologies I build production features for enterprise clients; outside of work I design and ship my own products end to end — most notably Luna Health AI, a three-service women's health platform I architected, built, and deployed solo, complete with AI coaching, freemium billing, and live payment integrations.",
};

export const stats = [
  { label: "15+ months", sub: "professional experience" },
  { label: "5", sub: "AI-integrated products shipped" },
  { label: "MCA", sub: "Amity University (in progress)" },
  { label: "3", sub: "certifications" },
];

export const skills = [
  { group: "Languages & Frameworks", items: ["Java", "Spring Boot", "Microservices", "Python", "FastAPI", "JavaScript", "TypeScript", "React", "Angular", "HTML/CSS"] },
  { group: "Databases & Infrastructure", items: ["MySQL", "PostgreSQL", "Supabase", "Redis", "AWS", "Render", "Netlify", "Docker"] },
  { group: "AI & Integrations", items: ["Gemini API", "Groq", "OpenRouter", "LLM Integration", "n8n", "Razorpay", "Dodo Payments", "Google OAuth"] },
  { group: "Testing & Quality", items: ["JUnit", "Mockito", "SonarQube", "Postman"] },
  { group: "Tools & Practices", items: ["Git", "GitHub", "REST APIs", "JWT", "Spring Security", "Agile/Scrum"] },
];

export const experience = [
  {
    role: "Full Stack Developer",
    org: "Nexdew Technologies",
    time: "Jan 2026 – Present",
    points: [
      "Build and maintain full-stack features across React frontend and Spring Boot backend for enterprise clients.",
      "Develop end-to-end functionality including REST APIs, business logic, and UI components in production environments.",
      "Participate in CI/CD pipelines, code reviews, and cross-functional sprint delivery.",
      "Apply SonarQube static analysis and security best practices to maintain code quality.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "Nexdew Technologies",
    time: "Oct 2025 – Dec 2025",
    points: [
      "Led backend microservice development for enterprise project LucyRx using Java and Spring Boot.",
      "Implemented JWT authentication, Spring Security, and RESTful API contracts.",
      "Integrated Redis caching and a push-notification system, improving API response times.",
      "Gained hands-on experience with Docker-based deployment and scalability patterns.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "Nexdew Technologies",
    time: "Jul 2025 – Sep 2025",
    points: [
      "Developed REST APIs and backend business logic using Java, Spring Boot, and MySQL.",
      "Collaborated on database schema design, query optimisation, and Git-based code review workflows.",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Sanjay Accessories",
    time: "2024",
    points: [
      "Designed and deployed a responsive business website independently, end to end.",
      "Improved the client's digital presence, enabling online customer discovery.",
    ],
  },
];

export const services = [
  { icon: "Server", title: "Backend Engineering", desc: "Spring Boot REST APIs, JWT auth, Spring Security, microservices, and database schema design built for production." },
  { icon: "Code2", title: "Frontend Development", desc: "React + Vite interfaces with Tailwind CSS, responsive layouts, and clean component architecture." },
  { icon: "Sparkles", title: "AI Integration", desc: "LLM-powered features using Gemini, Groq, and OpenRouter — chat assistants, content generation, and prediction engines." },
  { icon: "Database", title: "Full-Stack Delivery", desc: "End-to-end ownership from schema to deployment — PostgreSQL/MySQL, Render/Netlify, CI/CD, and payment integrations." },
];

// To add a screenshot: drop the image into src/assets/projects/ and set
// screenshot: "/src/assets/projects/your-image.png" (or import it above and reference the import).
export const projects = [
  {
    slug: "luna-health-ai",
    name: "Luna Health AI",
    tagline: "Full-stack AI-powered women's health platform",
    problem: "Women tracking cycles and fertility lacked a product that combined accurate predictions with genuinely personalised, history-aware AI coaching rather than generic tips.",
    features: [
      "Three-service architecture: React/Vite, Spring Boot, Python/FastAPI AI microservice",
      "Freemium/Pro gating across 8+ features incl. AI health coach, predictive forecasting, partner mode",
      "Personal Health Intelligence Engine with AI memory and Caffeine-cached snapshots",
      "Razorpay (India) + Dodo Payments (international) with geo-routing",
      "Cycle/symptom prediction, BBT charting, push notifications, installable PWA",
    ],
    tech: ["React", "Spring Boot", "Python", "FastAPI", "Supabase", "Razorpay", "Gemini AI", "Groq", "JWT", "Render", "Redis", "Docker"],
    demo: "",
    github: "https://github.com/ChiragMendirattaa",
    screenshot: "",
  },
  {
    slug: "ai-crm",
    name: "AI CRM",
    tagline: "AI-powered customer relationship management platform",
    problem: "Sales agents lose time writing follow-up emails and summarising customer history manually — this CRM puts an AI assistant directly inside the workflow.",
    features: [
      "Secure two-tier architecture: Spring Boot REST API + React/Vite frontend",
      "JWT auth, BCrypt hashing, stateless Spring Security sessions",
      "Groq-powered assistant drafts emails and suggests follow-ups from live customer context",
      "Customer CRUD, transactional email with audit logging, live analytics dashboard with Recharts",
      "PostgreSQL schema with Flyway migrations, layered DTO/service/repository architecture",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Spring Boot", "Spring Security", "PostgreSQL", "Flyway", "JWT", "Groq", "Recharts"],
    demo: "",
    github: "https://github.com/ChiragMendirattaa",
    screenshot: "",
  },
  {
    slug: "pinterest-automation",
    name: "Pinterest Automation Tool",
    tagline: "Multi-agent AI content dashboard",
    problem: "Manually researching, designing, and scheduling Pinterest content doesn't scale — this rebuilds that workflow as five coordinated AI agents.",
    features: [
      "Rebuilt from a single-file HTML prototype into a full-stack React + Spring Boot app",
      "Five specialised AI agents: content research, pin creation, scheduling, publishing",
      "Pinterest API + Gemini AI integration for automated content generation",
    ],
    tech: ["React", "Spring Boot", "Pinterest API", "Gemini AI", "n8n"],
    demo: "",
    github: "https://github.com/ChiragMendirattaa",
    screenshot: "",
  },
  {
    slug: "ecombuilder",
    name: "EcomBuilder",
    tagline: "No-code AI-powered e-commerce builder",
    problem: "Non-technical store owners need a way to launch a storefront from a plain-language description instead of configuring a builder by hand.",
    features: [
      "Natural-language store description converted into product listings and layout",
      "AI-generated configuration powered by Gemini",
    ],
    tech: ["React 18", "Spring Boot", "MySQL", "Gemini AI"],
    demo: "",
    github: "https://github.com/ChiragMendirattaa",
    screenshot: "",
  },
  {
    slug: "jira-clone",
    name: "Jira Clone",
    tagline: "Full-stack project management tool",
    problem: "Teams needed a lightweight, self-hostable issue tracker with the core Jira workflow: boards, sprints, and role-based access.",
    features: [
      "Boards and sprint-based issue tracking",
      "Role-based access control",
      "REST API backend with JWT-secured endpoints",
    ],
    tech: ["Spring Boot", "Angular", "MySQL", "JWT", "REST APIs"],
    demo: "",
    github: "https://github.com/ChiragMendirattaa",
    screenshot: "",
  },
];

// Add real testimonials here later, e.g.
// { name: "Jane Doe", role: "Engineering Manager, Acme", quote: "..." }
export const testimonials = [];
