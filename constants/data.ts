import type {
  NavLink,
  FooterLink,
  Service,
  Testimonial,
  Stat,
  Principle,
  BlogPost,
  CaseStudy,
  Job,
  TeamMember,
  FloatingCard,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_SERVICES_LINKS: FooterLink[] = [
  { label: "IT Support", href: "/services#it-support" },
  { label: "Ecommerce CRM", href: "/services#crm" },
  { label: "Web Development", href: "/services#web-dev" },
  { label: "Business Automation", href: "/services#automation" },
  { label: "Ongoing Technical Support", href: "/services#managed-it" },
  { label: "App Development", href: "/services#app-dev" },
  { label: "Cloud Security", href: "/services#cloud-security" },
];

export const FOOTER_COMPANY_LINKS: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Sitemap", href: "/sitemap" },
];

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    icon: "Globe",
    title: "Website Development",
    description:
      "Fast, secure, and scalable websites built for performance. From landing pages to complex web platforms — delivered with clarity and precision.",
    features: ["Next.js / React", "SEO Optimized", "Mobile-First Design"],
    longDescription:
      "We build high-performance websites and web applications that convert visitors into customers. Every project starts with a deep understanding of your business goals, target audience, and competitive landscape. We deliver clean code, fast load times, and designs that work across all devices.",
    benefits: [
      "Core Web Vitals optimized for Google ranking",
      "Accessibility-compliant (WCAG 2.1)",
      "CMS integration (Contentful, Sanity, Notion)",
      "E-commerce ready with payment gateway support",
      "Ongoing maintenance plans available",
    ],
  },
  {
    id: "crm",
    icon: "Users",
    title: "CRM Systems",
    description:
      "Custom CRM platforms tailored to your sales pipeline, support workflows, and reporting needs. Built to scale with your business.",
    features: ["Lead Management", "Sales Automation", "Custom Dashboards"],
    longDescription:
      "Stop losing leads to spreadsheets. We build custom CRM systems that fit your exact sales and support workflows — not the other way around. From lead capture to deal closure to post-sale support, we automate and track every step of your customer journey.",
    benefits: [
      "Custom pipeline stages matching your sales process",
      "Automated follow-up sequences",
      "Real-time reporting and analytics dashboards",
      "Integration with email, WhatsApp, and telephony",
      "Role-based access control for team management",
    ],
  },
  {
    id: "automation",
    icon: "Zap",
    title: "Business Automation",
    description:
      "Eliminate repetitive tasks and streamline operations. We design intelligent workflows that integrate your existing tools seamlessly.",
    features: ["Workflow Automation", "API Integrations", "Process Optimization"],
    longDescription:
      "Manual processes are costing your business time and money. We analyze your operations, identify bottlenecks, and build automated workflows that connect your tools, eliminate repetitive tasks, and give your team back hours every week.",
    benefits: [
      "End-to-end workflow automation",
      "Integration with 50+ business tools",
      "Inventory and order management automation",
      "Automated invoicing and payment tracking",
      "Custom internal dashboards and reporting",
    ],
  },
  {
    id: "managed-it",
    icon: "Shield",
    title: "Managed IT Services",
    description:
      "Continuous monitoring, maintenance, and technical support so your systems run at peak performance around the clock.",
    features: ["24/7 Monitoring", "Infrastructure Management", "Proactive Support"],
    longDescription:
      "Focus on your business while we handle your IT. Our managed IT services provide proactive monitoring, regular maintenance, and rapid response to issues — before they affect your operations. We become your dedicated tech team.",
    benefits: [
      "24/7 system monitoring with instant alerts",
      "Regular security patching and updates",
      "Backup and disaster recovery planning",
      "Vendor management and procurement support",
      "Monthly IT health reports",
    ],
  },
  {
    id: "app-dev",
    icon: "Smartphone",
    title: "App Development",
    description:
      "Cross-platform mobile and web applications engineered for reliability, speed, and an exceptional user experience.",
    features: ["React Native", "Progressive Web Apps", "API-First Architecture"],
    longDescription:
      "From concept to app store — we build mobile and web applications that users love. Using React Native for cross-platform efficiency, we deliver native-quality experiences on iOS and Android from a single codebase, reducing cost without sacrificing quality.",
    benefits: [
      "Single codebase for iOS and Android",
      "Offline-first architecture for reliability",
      "Push notifications and real-time features",
      "App Store and Google Play deployment",
      "Ongoing updates and performance optimization",
    ],
  },
  {
    id: "cloud-security",
    icon: "Lock",
    title: "Cloud & Security",
    description:
      "Robust cloud infrastructure with enterprise-grade security. Protect your data, ensure compliance, and scale with confidence.",
    features: ["Cloud Architecture", "Security Audits", "Compliance Ready"],
    longDescription:
      "Modern businesses run in the cloud — but not all cloud setups are equal. We architect scalable, secure, and cost-efficient cloud infrastructure on AWS, GCP, and Azure. We also conduct thorough security audits to identify and fix vulnerabilities before they become breaches.",
    benefits: [
      "Cloud migration and architecture design",
      "Cost optimization and right-sizing",
      "Penetration testing and security audits",
      "GDPR and data compliance consulting",
      "DevOps and CI/CD pipeline setup",
    ],
  },
];

export const STATS: Stat[] = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 85, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Uptime Guarantee" },
];

export const PRINCIPLES: Principle[] = [
  {
    title: "Understand First",
    description:
      "We take time to deeply understand your business goals before proposing any solution.",
  },
  {
    title: "Simple & Scalable",
    description:
      "We build systems that are simple today and ready to grow with your business tomorrow.",
  },
  {
    title: "Clarity & Security",
    description:
      "Clean architecture, transparent communication, and security-first development always.",
  },
  {
    title: "Long-term Partnership",
    description:
      "We're not just vendors — we're partners invested in your continued success.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Sharma",
    role: "Founder",
    company: "ShopEasy India",
    quote:
      "NexWerk transformed our e-commerce operations with a custom CRM that reduced manual work by 70%. Their team is responsive, skilled, and genuinely cares about results.",
    rating: 5,
    avatar: "RS",
  },
  {
    id: "t2",
    name: "Priya Mehta",
    role: "Operations Director",
    company: "Logix Services",
    quote:
      "The business automation solution they built saved us 20+ hours per week. Best investment we made this year. Highly professional team and flawless delivery.",
    rating: 5,
    avatar: "PM",
  },
  {
    id: "t3",
    name: "Arun Verma",
    role: "CEO",
    company: "TechVentures Pvt. Ltd.",
    quote:
      "From website to managed IT support, NexWerk handles everything. Their proactive approach means we never have to worry about downtime or security issues.",
    rating: 5,
    avatar: "AV",
  },
];

export const TECH_STACK: string[] = [
  "React", "Next.js", "Node.js", "TypeScript", "PostgreSQL",
  "Docker", "AWS", "Python", "MongoDB", "Redis",
  "Kubernetes", "Firebase", "GraphQL", "REST APIs",
  "Tailwind CSS", "React Native", "Prisma", "Vercel",
];

export const FLOATING_CARDS: FloatingCard[] = [
  {
    id: "fc1", icon: "Globe", stat: "Web Dev", label: "Next.js & React",
    color: "blue", live: true,
    position: { top: "14%", left: "2%" }, width: "168px", rotate: -3, floatY: 16, duration: 4.5, delay: 0,
  },
  {
    id: "fc6", icon: "Zap", stat: "Automation", label: "Save 20+ hrs/wk",
    color: "amber",
    position: { top: "43%", left: "2%" }, width: "158px", rotate: -4, floatY: 18, duration: 4.8, delay: 1.0,
  },
  {
    id: "fc2", icon: "Users", stat: "85+ Clients", label: "Worldwide",
    color: "violet",
    position: { top: "70%", left: "3%" }, width: "163px", rotate: 2, floatY: 14, duration: 3.8, delay: 0.5,
  },
  {
    id: "fc3", icon: "Shield", stat: "99% Uptime", label: "Managed IT",
    color: "emerald", live: true,
    position: { top: "13%", right: "2%" }, width: "173px", rotate: 4, floatY: 20, duration: 5.2, delay: 0.3,
  },
  {
    id: "fc4", icon: "Lock", stat: "Security", label: "Enterprise Grade",
    color: "sky",
    position: { top: "43%", right: "3%" }, width: "158px", rotate: -2, floatY: 15, duration: 4.0, delay: 1.2,
  },
  {
    id: "fc5", icon: "Star", stat: "120+ Projects", label: "Delivered",
    color: "rose",
    position: { top: "70%", right: "2%" }, width: "153px", rotate: 3, floatY: 12, duration: 3.5, delay: 0.7,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "bp1",
    slug: "why-your-business-needs-a-custom-crm",
    title: "Why Your Business Needs a Custom CRM (Not an Off-the-Shelf One)",
    excerpt:
      "Generic CRM tools force your team to adapt to software. Custom CRMs adapt to your team. Here's why it matters for Indian SMEs.",
    category: "CRM",
    date: "May 5, 2026",
    readTime: "6 min read",
    imageId: "1551288049-bebda4e38f71",
    author: "NexWerk Team",
  },
  {
    id: "bp2",
    slug: "next-js-vs-traditional-wordpress",
    title: "Next.js vs WordPress: Which is Right for Your Business Website?",
    excerpt:
      "Both have their place, but the choice significantly impacts your site's performance, security, and long-term maintenance cost.",
    category: "Web Dev",
    date: "Apr 28, 2026",
    readTime: "8 min read",
    imageId: "1461749280684-dccba630e2f6",
    author: "NexWerk Team",
  },
  {
    id: "bp3",
    slug: "business-automation-saves-20-hours-week",
    title: "How Business Automation Saved Our Client 20+ Hours Every Week",
    excerpt:
      "A real case study on how we helped a logistics company eliminate manual data entry and transform their operations.",
    category: "Automation",
    date: "Apr 15, 2026",
    readTime: "5 min read",
    imageId: "1526374965328-7f61d4dc18c5",
    author: "NexWerk Team",
  },
  {
    id: "bp4",
    slug: "cloud-security-checklist-for-smes",
    title: "The Essential Cloud Security Checklist for Indian SMEs",
    excerpt:
      "Most small businesses are one data breach away from serious damage. Here's a practical security checklist you can act on today.",
    category: "Cloud",
    date: "Apr 3, 2026",
    readTime: "7 min read",
    imageId: "1558494949-ef010cbdcc31",
    author: "NexWerk Team",
  },
  {
    id: "bp5",
    slug: "react-native-vs-flutter-2026",
    title: "React Native vs Flutter in 2026: What Should You Choose?",
    excerpt:
      "The mobile development landscape has shifted. Here's our honest take on which framework delivers better ROI for most businesses.",
    category: "App Dev",
    date: "Mar 22, 2026",
    readTime: "9 min read",
    imageId: "1512941937669-90a1b58e7e9c",
    author: "NexWerk Team",
  },
  {
    id: "bp6",
    slug: "managed-it-vs-in-house-it",
    title: "Managed IT vs In-House IT: What Makes Sense for Your Stage?",
    excerpt:
      "Hiring an in-house IT team is expensive and often overkill for growing businesses. Here's when managed IT is the smarter choice.",
    category: "IT",
    date: "Mar 10, 2026",
    readTime: "6 min read",
    imageId: "1600880292203-757bb62b4baf",
    author: "NexWerk Team",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs1",
    client: "ShopEasy India",
    industry: "E-commerce",
    challenge:
      "Managing 1,000+ orders per day manually across WhatsApp, email, and spreadsheets was causing errors and delays in fulfillment.",
    solution:
      "Built a custom CRM integrated with their marketplace accounts, automating order intake, assignment, and status tracking end-to-end.",
    results: [
      { metric: "Manual Work Reduced", value: "70%" },
      { metric: "Order Processing Time", value: "4x Faster" },
      { metric: "Customer Complaints", value: "↓ 60%" },
    ],
    imageId: "1551288049-bebda4e38f71",
  },
  {
    id: "cs2",
    client: "Logix Services",
    industry: "Logistics",
    challenge:
      "The ops team was spending 20+ hours weekly on manual data entry between their transport management system and billing software.",
    solution:
      "Designed and deployed an automation pipeline connecting 4 systems, with validation rules and exception handling built in.",
    results: [
      { metric: "Hours Saved Weekly", value: "22 hrs" },
      { metric: "Billing Errors", value: "↓ 95%" },
      { metric: "ROI in Year 1", value: "8x" },
    ],
    imageId: "1526374965328-7f61d4dc18c5",
  },
  {
    id: "cs3",
    client: "TechVentures Pvt. Ltd.",
    industry: "SaaS",
    challenge:
      "Legacy infrastructure was causing frequent downtime and slow deployments, blocking the engineering team from shipping features.",
    solution:
      "Migrated their entire infrastructure to AWS with containerized services, CI/CD pipelines, and proactive monitoring with auto-alerts.",
    results: [
      { metric: "Uptime Improved", value: "99.97%" },
      { metric: "Deploy Time", value: "↓ 80%" },
      { metric: "Infra Cost", value: "↓ 35%" },
    ],
    imageId: "1558494949-ef010cbdcc31",
  },
  {
    id: "cs4",
    client: "GreenMart Retail",
    industry: "Retail",
    challenge:
      "No online presence and a fragmented in-store experience were limiting growth in an increasingly digital-first market.",
    solution:
      "Delivered a full-stack Next.js e-commerce platform with inventory sync, mobile app, and CRM for loyalty management.",
    results: [
      { metric: "Online Revenue (Month 3)", value: "₹12L+" },
      { metric: "Mobile App Downloads", value: "5,000+" },
      { metric: "Customer Retention", value: "+45%" },
    ],
    imageId: "1461749280684-dccba630e2f6",
  },
];

export const JOBS: Job[] = [
  {
    id: "j1",
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Remote (India)",
    department: "Engineering",
    description:
      "Build scalable web applications and APIs for our growing client base. You'll work across the full stack — React/Next.js on the frontend, Node.js on the backend.",
    requirements: [
      "3+ years with React/Next.js",
      "Strong Node.js and REST API skills",
      "PostgreSQL or MongoDB experience",
      "TypeScript proficiency",
    ],
  },
  {
    id: "j2",
    title: "CRM Consultant",
    type: "Full-time",
    location: "Delhi / Remote",
    department: "Solutions",
    description:
      "Work closely with clients to understand their sales workflows and configure/build CRM systems that drive real business outcomes.",
    requirements: [
      "Experience with CRM platforms (Salesforce, Zoho, or custom)",
      "Strong business analysis skills",
      "Excellent client communication",
      "Ability to translate business needs to technical specs",
    ],
  },
  {
    id: "j3",
    title: "IT Support Engineer",
    type: "Full-time",
    location: "Delhi NCR",
    department: "IT Operations",
    description:
      "Provide proactive monitoring, maintenance, and support to our managed IT clients. You'll be the first line of response for infrastructure issues.",
    requirements: [
      "2+ years in IT support or system administration",
      "Networking and server management experience",
      "Familiarity with AWS/Azure basics",
      "Strong troubleshooting and documentation skills",
    ],
  },
  {
    id: "j4",
    title: "Business Analyst",
    type: "Full-time",
    location: "Remote (India)",
    department: "Consulting",
    description:
      "Bridge the gap between client business problems and technical solutions. You'll lead requirement gathering, process mapping, and project scoping.",
    requirements: [
      "3+ years in business analysis or operations consulting",
      "Process documentation and mapping skills",
      "Excellent written and verbal communication",
      "Familiarity with automation tools a plus",
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: "tm1", name: "Aarav Singh", role: "Founder & CEO", avatar: "AS" },
  { id: "tm2", name: "Sneha Kapoor", role: "Head of Engineering", avatar: "SK" },
  { id: "tm3", name: "Ravi Patel", role: "Lead CRM Architect", avatar: "RP" },
  { id: "tm4", name: "Divya Sharma", role: "UX & Design Lead", avatar: "DS" },
  { id: "tm5", name: "Karan Mehta", role: "Cloud & DevOps Lead", avatar: "KM" },
  { id: "tm6", name: "Pooja Nair", role: "Client Success Manager", avatar: "PN" },
];
