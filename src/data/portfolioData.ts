export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullOverview: string;
  architectureDetails: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  category: 'Full Stack SaaS' | 'System Architecture' | 'High-Throughput APIs' | 'Cloud Native';
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  imagePlaceholder: string;
  stats: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend & Services' | 'Devops & Tools';
  description: string;
  iconType: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  badgeText: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  stack: string[];
}

export const PERSONAL_INFO = {
  name: "Md Nayem",
  brandName: "Nahiyan Dev",
  fullName: "Md Nayem (Nahiyan Dev)",
  title: "Full Stack Web Developer & Architecture Web Engineer",
  roles: [
    "Full Stack Web Developer",
    "Architecture Web Engineer",
    "Distributed Systems Specialist",
    "Next.js & Cloud Architect"
  ],
  bio: "Architecting resilient, distributed web applications and high-throughput cloud backends. Bridging the gap between ultra-responsive frontend UX and fault-tolerant cloud infrastructure.",
  yearsExperience: "6+",
  completedProjects: "45+",
  systemUptime: "99.99%",
  activeUsersHandled: "250K+",
  email: "nahiyandev@gmail.com",
  phone: "+8801924648788",
  location: "Gafargaon, Mymensingh, Bangladesh",
  github: "https://github.com/nahiyandev",
  linkedin: "https://linkedin.com/in/nahiyandev",
  facebook: "https://www.facebook.com/Nahiyan24",
  twitter: "https://x.com/nahiyandev",
  vercel: "https://nahiyandev.vercel.app/",
  discord: "nahiyan#8892",
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Architecture", href: "#architecture" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export const SKILLS_DATA: SkillItem[] = [
  // FRONTEND (Exactly from user screenshot)
  {
    name: "HTML5",
    category: "Frontend",
    description: "Semantic structure combined with modern web standards.",
    iconType: "html5"
  },
  {
    name: "CSS3",
    category: "Frontend",
    description: "Advanced styling, animations, and responsive layouts.",
    iconType: "css3"
  },
  {
    name: "JAVASCRIPT",
    category: "Frontend",
    description: "Advanced ES6+ logic, async patterns, and functional programming.",
    iconType: "javascript"
  },
  {
    name: "TYPESCRIPT",
    category: "Frontend",
    description: "Static typing for scalable, maintainable, and error-free codebases.",
    iconType: "typescript"
  },
  {
    name: "REACT 19",
    category: "Frontend",
    description: "Component-based architecture & high-performance state management.",
    iconType: "react"
  },
  {
    name: "NEXT.JS",
    category: "Frontend",
    description: "Full-stack React framework with SSR, ISR, and optimized routing.",
    iconType: "nextjs"
  },
  {
    name: "REACT ROUTER",
    category: "Frontend",
    description: "Declarative routing for React single-page applications.",
    iconType: "react-router"
  },
  {
    name: "TAILWIND CSS",
    category: "Frontend",
    description: "Utility-first CSS framework for rapid, responsive UI development.",
    iconType: "tailwind"
  },

  // BACKEND & SERVICES
  {
    name: "EXPRESS.JS",
    category: "Backend & Services",
    description: "High-throughput RESTful APIs, robust middleware, and microservices routing.",
    iconType: "express"
  },
  {
    name: "MONGODB",
    category: "Backend & Services",
    description: "High-scale document database design, replica sets, and aggregation pipelines.",
    iconType: "mongodb"
  },
  {
    name: "NODE.JS",
    category: "Backend & Services",
    description: "Asynchronous event-loop optimization, worker threads, and streaming I/O.",
    iconType: "nodejs"
  },
  {
    name: "POSTGRESQL",
    category: "Backend & Services",
    description: "ACID-compliant relational database modeling, indexing, and connection pooling.",
    iconType: "postgres"
  },
  {
    name: "REDIS",
    category: "Backend & Services",
    description: "In-memory caching layer, distributed locking, and sub-millisecond data access.",
    iconType: "redis"
  },
  {
    name: "KAFKA & QUEUES",
    category: "Backend & Services",
    description: "Distributed event streaming, message broker decoupling, and BullMQ worker fleets.",
    iconType: "kafka"
  },

  // DEVOPS & TOOLS
  {
    name: "DOCKER",
    category: "Devops & Tools",
    description: "Containerization, minimal multi-stage image builds, and reproducible environments.",
    iconType: "docker"
  },
  {
    name: "KUBERNETES",
    category: "Devops & Tools",
    description: "Container orchestration, rolling updates, ingress controllers, and pod autoscaling.",
    iconType: "kubernetes"
  },
  {
    name: "AWS CLOUD",
    category: "Devops & Tools",
    description: "Production cloud infrastructure: ECS, Lambda, S3, CloudFront, and VPC security.",
    iconType: "aws"
  },
  {
    name: "CI/CD ACTIONS",
    category: "Devops & Tools",
    description: "Automated testing, security SAST/DAST audits, and zero-downtime deployment pipelines.",
    iconType: "git"
  },
  {
    name: "NGINX",
    category: "Devops & Tools",
    description: "High-performance reverse proxy, SSL/TLS termination, and load balancing algorithms.",
    iconType: "nginx"
  },
  {
    name: "PROMETHEUS",
    category: "Devops & Tools",
    description: "Full-stack observability, RED metrics, custom counters, and real-time alerts.",
    iconType: "prometheus"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "cloudscale-nexus",
    title: "CloudScale Nexus",
    tagline: "Enterprise Distributed Microservices Platform & Multi-Cluster Mesh",
    description: "A mission-critical enterprise control plane orchestrating distributed microservices across multi-region Kubernetes clusters with live telemetry.",
    fullOverview: "Designed and engineered the complete end-to-end architecture for CloudScale Nexus. Features a Next.js App Router command center backed by an Express microservices gateway, Kafka event streams, and Redis cache clusters. Manages real-time service mesh routing, circuit-breaking, and multi-tenant security policies with sub-20ms p99 latency.",
    architectureDetails: [
      "Next.js App Router frontend with real-time WebSocket state streaming",
      "Express.js API Gateway with token bucket rate-limiting and JWT authentication",
      "Apache Kafka event broker processing over 50,000 events/second",
      "MongoDB distributed replica cluster with automatic failover and read-splitting",
      "Containerized microservices orchestrated via Kubernetes on AWS EKS"
    ],
    metrics: [
      { label: "Request Throughput", value: "85K req/sec" },
      { label: "P99 Latency", value: "< 18ms" },
      { label: "Availability SLA", value: "99.995%" }
    ],
    tags: ["Next.js", "Express.js", "MongoDB", "Kafka", "Kubernetes", "AWS", "TypeScript"],
    category: "System Architecture",
    liveUrl: "https://cloudscale-demo.nahiyan.dev",
    githubUrl: "https://github.com/nahiyan/cloudscale-nexus",
    featured: true,
    imagePlaceholder: "/projects/cloudscale.png",
    stats: "85K Req/s • 99.995% SLA"
  },
  {
    id: "hyperstore-core",
    title: "HyperStore Engine",
    tagline: "Ultra-Fast E-Commerce Core & Real-time Inventory System",
    description: "High-concurrency global e-commerce platform built to withstand flash-sale traffic spikes without inventory race conditions or cart lockups.",
    fullOverview: "Engineered HyperStore to solve the distributed inventory consistency challenge during high-volume sales events. Employs Redis distributed locking (Redlock) combined with MongoDB multi-document ACID transactions, wrapped in an Express.js backend and an ultra-snappy Next.js SSR storefront.",
    architectureDetails: [
      "Next.js with Incremental Static Regeneration (ISR) for instant catalog renders",
      "Express.js cluster nodes with Redis in-memory cache layer for product queries",
      "Distributed Redlock synchronization ensuring zero overselling under heavy concurrency",
      "Stripe webhook idempotent processing pipeline with MongoDB event logging",
      "CloudFront CDN caching dynamic assets at 300+ edge edge points"
    ],
    metrics: [
      { label: "Peak Flash Sale QPS", value: "14,500 QPS" },
      { label: "Lighthouse Score", value: "99 / 100" },
      { label: "Inventory Errors", value: "0.00%" }
    ],
    tags: ["React 19", "Next.js", "Express.js", "MongoDB", "Redis", "Docker", "Stripe"],
    category: "Full Stack SaaS",
    liveUrl: "https://hyperstore.nahiyan.dev",
    githubUrl: "https://github.com/nahiyan/hyperstore-engine",
    featured: true,
    imagePlaceholder: "/projects/hyperstore.png",
    stats: "14.5K QPS • 0% Oversell"
  },
  {
    id: "pulseflow-analytics",
    title: "PulseFlow Real-time Telemetry",
    tagline: "Low-Latency Web Telemetry & Architecture Observability Hub",
    description: "Live real-time observability platform visualising server health, API error rates, and user interactions with dynamic heatmaps and instant alerting.",
    fullOverview: "A robust monitoring solution that ingests telemetry metrics via lightweight client SDKs and Express streaming endpoints. Aggregates data in TimescaleDB and MongoDB, distributing real-time WebSocket updates to a slick React dashboard with canvas-rendered architectural graphs.",
    architectureDetails: [
      "Custom binary WebSocket connection protocol reducing telemetry overhead by 68%",
      "Express.js streaming ingest pipeline with backpressure buffer control",
      "MongoDB time-series collections for high-density metric capture",
      "Interactive Canvas-based topology graph visualizing microservice traffic flows",
      "Automated alerting engine hooking into Slack, Discord, and PagerDuty"
    ],
    metrics: [
      { label: "Data Ingestion", value: "120M pts/day" },
      { label: "Telemetry Overhead", value: "< 1.2 KB" },
      { label: "Dashboard Refresh", value: "60 FPS" }
    ],
    tags: ["React", "Next.js", "Express.js", "WebSockets", "MongoDB", "TimescaleDB", "Tailwind CSS"],
    category: "High-Throughput APIs",
    liveUrl: "https://pulseflow.nahiyan.dev",
    githubUrl: "https://github.com/nahiyan/pulseflow-analytics",
    featured: true,
    imagePlaceholder: "/projects/pulseflow.png",
    stats: "120M pts/day • 60 FPS"
  },
  {
    id: "authsentinel-gateway",
    title: "AuthSentinel Gateway",
    tagline: "Zero-Trust Identity, OAuth2 & Distributed RBAC Gateway",
    description: "High-performance authentication & authorization microservice with asymmetric JWT signing, automated key rotation, and granular permissions.",
    fullOverview: "Architected a zero-trust security gateway that sits at the ingress of internal microservices. Handles user authentication, MFA validation, RBAC/ABAC permission checks, and generates cryptographically signed short-lived tokens with Redis blacklist revocation.",
    architectureDetails: [
      "Express.js and Node.js microservice running on Docker containers",
      "Asymmetric RSA-4096 and ECDSA key pair rotation without client session disruption",
      "Redis distributed memory storage for token blacklist and sliding session expiration",
      "MongoDB persistent store for user credentials with Argon2id password hashing",
      "Complete OAuth2 / OpenID Connect (OIDC) provider compliance"
    ],
    metrics: [
      { label: "Token Verification", value: "< 2.1ms" },
      { label: "Security Audit", value: "A+ Rating" },
      { label: "Active Sessions", value: "150,000+" }
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Redis", "OAuth2", "Docker", "Security"],
    category: "Cloud Native",
    liveUrl: "https://authsentinel.nahiyan.dev",
    githubUrl: "https://github.com/nahiyan/authsentinel-gateway",
    featured: false,
    imagePlaceholder: "/projects/authsentinel.png",
    stats: "Sub-2.5ms Auth • A+ Audit"
  },
  {
    id: "saasflow-orchestrator",
    title: "SaaSFlow Orchestrator",
    tagline: "Multi-Tenant Workflow Engine & Background Queue System",
    description: "Scalable event-driven automation platform allowing SaaS users to build complex triggered workflows, webhooks, and third-party data integrations.",
    fullOverview: "A full-stack workflow orchestrator featuring a visual node-based workflow builder on the frontend and a resilient distributed worker queue on the backend. Designed with fault-tolerant retries, exponential backoffs, and isolated tenant sandboxes.",
    architectureDetails: [
      "React flow graph editor with custom node rendering and real-time validation",
      "Express.js REST & Webhook receiver engine with signature validation",
      "BullMQ + Redis distributed worker fleet executing parallel execution pipelines",
      "MongoDB multi-tenant database with collection-level isolation and encryption",
      "Dockerized worker containers auto-scaling based on queue depth metrics"
    ],
    metrics: [
      { label: "Daily Executions", value: "2.4M jobs" },
      { label: "Worker Auto-scale", value: "5 to 60 nodes" },
      { label: "Success Rate", value: "99.98%" }
    ],
    tags: ["Next.js", "Express.js", "MongoDB", "BullMQ", "Redis", "Docker", "AWS"],
    category: "Full Stack SaaS",
    liveUrl: "https://saasflow.nahiyan.dev",
    githubUrl: "https://github.com/nahiyan/saasflow-orchestrator",
    featured: false,
    imagePlaceholder: "/projects/saasflow.png",
    stats: "2.4M jobs/day • Auto-scaling"
  },
  {
    id: "devpulse-gitops",
    title: "DevPulse Observability Hub",
    tagline: "GitOps CI/CD Health & Microservice Deployment Dashboard",
    description: "Unified developer portal tracking pull requests, automated builds, test coverage, and Kubernetes deployment states in real time.",
    fullOverview: "Built for engineering organizations to monitor build health, deployment velocity, and infrastructure spend across cloud providers. Features instant status changes via WebSockets and deep integration with GitHub Actions and ArgoCD.",
    architectureDetails: [
      "Modern Next.js 16 frontend with Tailwind CSS and sleek dark glass UI",
      "Express.js webhook ingestion handling Git push and deployment events",
      "Prometheus metrics collector scraping cluster endpoints",
      "MongoDB document store with automated archiving of stale pipeline runs",
      "Role-based team dashboards with granular audit trails"
    ],
    metrics: [
      { label: "Deploy Time Reduced", value: "-42%" },
      { label: "Connected Repos", value: "1,200+" },
      { label: "Incident MTTR", value: "-60%" }
    ],
    tags: ["React 19", "Next.js", "Express.js", "Prometheus", "Kubernetes", "Tailwind CSS"],
    category: "Cloud Native",
    liveUrl: "https://devpulse.nahiyan.dev",
    githubUrl: "https://github.com/nahiyan/devpulse-gitops",
    featured: false,
    imagePlaceholder: "/projects/devpulse.png",
    stats: "1,200+ Repos • -42% Deploy"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "modern-web-architecture",
    title: "Deconstructing Modern Web Architecture: From Monoliths to Modular Edge Services",
    slug: "modern-web-architecture-monoliths-to-edge",
    excerpt: "An architectural deep-dive into partitioning monolithic full-stack applications into decoupled, edge-accelerated microservices with zero downtime.",
    content: `When scaling web applications to handle hundreds of thousands of concurrent users, traditional monolithic architectures often become operational bottlenecks.

### The Problem with Monolithic Scalability
In a traditional monolithic setup, scaling requires replicating the entire application stack—even if only one specific endpoint (e.g., checkout or report generation) is experiencing high load. This wastes infrastructure budget and causes memory contention.

### The Decoupled Edge Architecture
By splitting the application into three discrete tiers:
1. **The Edge & Frontend Tier (Next.js SSR & CloudFront CDN)**: Serves static assets instantly from edge points while streaming dynamic server components.
2. **The API & Ingress Gateway (Express.js)**: Handles SSL termination, token validation, rate-limiting, and routes traffic directly to specialized internal services.
3. **The Distributed Data Tier (MongoDB + Redis)**: Utilizes Redis for high-frequency transient reads (sub-1ms) and MongoDB replica sets for durable ACID multi-document persistence.

### Key Takeaways
- Decouple read-heavy workloads from write-heavy transactional operations.
- Always implement circuit breakers between inter-service network calls.
- Leverage Redis as both an in-memory caching layer and a distributed event pub/sub.`,
    category: "System Architecture",
    date: "Oct 12, 2026",
    readTime: "7 min read",
    tags: ["Architecture", "Microservices", "Next.js", "Distributed Systems"]
  },
  {
    id: "scaling-nextjs-turbopack",
    title: "Scaling Next.js & Turbopack for High-Traffic Enterprise SaaS Applications",
    slug: "scaling-nextjs-turbopack-enterprise-saas",
    excerpt: "How to maximize Next.js performance using Server Components, Streaming SSR, selective caching strategies, and Core Web Vitals optimization.",
    content: `Next.js has evolved into a premier full-stack architecture framework. However, without deliberate architectural boundaries, large SaaS applications can experience server memory leaks and hydration lag.

### 1. Server Components vs. Client Islands
Keep 90% of your component tree as Server Components (RSC). Only sprinkle \`"use client"\` at leaf interactive components (modals, dropdowns, forms). This dramatically reduces bundle size shipped over the wire.

### 2. Streaming SSR with Suspense Boundaries
Rather than blocking the entire page render while waiting for database queries, wrap slower modules in React \`<Suspense>\`. Next.js immediately sends the shell HTML to the browser, streaming in content chunks as data resolves.

### 3. Edge Middleware Routing
Offload geo-routing, authentication checks, and feature flag evaluations to Edge Middleware before the request ever reaches your Node.js compute servers.`,
    category: "Frontend Engineering",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    tags: ["Next.js", "React 19", "Performance", "Web Vitals"]
  },
  {
    id: "express-mongodb-high-throughput",
    title: "Designing High-Throughput Distributed Backends with Express.js, MongoDB & Redis",
    slug: "express-mongodb-high-throughput-backends",
    excerpt: "Proven patterns for building resilient, high-concurrency Node.js and Express services backed by MongoDB aggregation pipelines and Redis caching.",
    content: `Building backends capable of serving 50,000+ requests per second requires careful attention to the Node.js event loop and database connection pooling.

### 1. Connection Pool Optimization
Never instantiate database connections per request. Configure MongoDB connection pools properly with minPoolSize and maxPoolSize tuned to your container CPU allocations, and use PgBouncer or Redis connection multiplexing.

### 2. Guarding the Node.js Event Loop
Avoid heavy cryptographic operations or large JSON parses on the main thread. Delegate compute-heavy parsing to Worker Threads or offload to streaming pipelines.

### 3. Smart Cache-Aside Pattern
Implement stale-while-revalidate caching with Redis. When data expires, serve the cached value immediately to incoming users while triggering a single background worker to refresh the MongoDB query.`,
    category: "Backend & Database",
    date: "Aug 15, 2026",
    readTime: "8 min read",
    tags: ["Express.js", "MongoDB", "Redis", "Backend"]
  },
  {
    id: "zero-downtime-k8s-docker",
    title: "Zero-Downtime Deployments & Multi-Region Resiliency with Docker & Kubernetes",
    slug: "zero-downtime-k8s-docker-deployments",
    excerpt: "A practical guide to building containerized production pipelines with rolling updates, liveness probes, and graceful connection draining.",
    content: `Downtime during deployments is unacceptable for modern mission-critical web applications. Here is the operational checklist for true zero-downtime rollouts.

### 1. Graceful Shutdown Handlers
When Kubernetes sends a \`SIGTERM\` to your Express.js or Next.js container, do not exit immediately! Stop accepting new traffic on the HTTP server, allow in-flight requests 10-15 seconds to finish processing, and cleanly close database connection pools.

### 2. Readiness and Liveness Probes
Never consider a pod healthy until it has connected to MongoDB and Redis. Use tailored readiness probes that verify dependencies before the Kubernetes Ingress routes user traffic to the pod.

### 3. Multi-Stage Distroless Docker Builds
Shrink Docker image sizes from 1.2GB to under 90MB using multi-stage builds and distroless base images. Smaller images pull faster during autoscaling events and minimize security vulnerabilities.`,
    category: "DevOps & Cloud",
    date: "Jul 04, 2026",
    readTime: "9 min read",
    tags: ["Docker", "Kubernetes", "DevOps", "AWS"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bsc-cse",
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "University of Science and Technology",
    period: "2016 – 2020",
    grade: "Major in Software Systems & Distributed Computing • First Class Honors (3.92/4.00 GPA)",
    description: "Rigorous coursework focusing on distributed algorithms, compiler design, database internals, computer networks, and enterprise software engineering.",
    highlights: [
      "Graduation Capstone: High-Throughput Distributed Hash Table & Fault-Tolerant Consensus Protocol",
      "Dean's List of Academic Excellence across all 8 academic semesters",
      "President of University Competitive Programming & Hackathon Society"
    ]
  },
  {
    id: "hsc-science",
    degree: "Higher Secondary Certificate (HSC) in Pure Sciences",
    institution: "National College of Science",
    period: "2014 – 2016",
    grade: "Golden GPA 5.00 / 5.00",
    description: "Focus on Advanced Mathematics, Physics, Chemistry, and Foundations of Information & Communication Technology.",
    highlights: [
      "National Mathematics Olympiad Regional Finalist",
      "Top 1% ranking in regional board examinations"
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issueDate: "2024 (Valid thru 2027)",
    credentialId: "AWS-SAA-88492041",
    badgeText: "Verified Architect",
    skills: ["VPC Peering", "ECS / EKS", "CloudFront", "Route 53", "High Availability Design", "Disaster Recovery"]
  },
  {
    id: "ckad",
    title: "Certified Kubernetes Application Developer (CKAD)",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    issueDate: "2025 (Valid thru 2028)",
    credentialId: "CKAD-9912048",
    badgeText: "Certified Cloud Native",
    skills: ["Pod Design", "Ingress Controllers", "StatefulSets", "Helm Charts", "Rolling Updates", "ConfigMaps & Secrets"]
  },
  {
    id: "meta-senior-fullstack",
    title: "Meta Certified Senior Full Stack Software Engineer",
    issuer: "Meta",
    issueDate: "2023",
    credentialId: "META-ENG-773194",
    badgeText: "Specialist",
    skills: ["React Architecture", "Full Stack System Design", "API Performance", "Advanced SQL & NoSQL Modeling"]
  },
  {
    id: "mongodb-certified-developer",
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB Inc.",
    issueDate: "2023",
    credentialId: "MDB-DEV-661029",
    badgeText: "Database Pro",
    skills: ["Aggregation Pipelines", "Sharding & Replication", "Index Tuning", "Schema Optimization"]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "lead-architect",
    role: "Lead Architecture Web Engineer & Staff Developer",
    company: "Veloce Systems & Cloud Lab",
    period: "2023 – Present",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-Time",
    description: "Leading the core web platform architecture team. Redesigned legacy monolithic backends into a modular, event-driven microservice mesh powered by Next.js, Express.js, MongoDB, and Kubernetes.",
    achievements: [
      "Spearheaded architectural migration resulting in a 65% reduction in infrastructure costs and sub-20ms p99 latency.",
      "Engineered high-throughput API gateway processing 80,000+ requests per second with zero downtime.",
      "Mentored a cross-functional squad of 14 full-stack and DevOps engineers, introducing strict TypeScript standards and CI/CD automation."
    ],
    stack: ["Next.js 16", "React 19", "Express.js", "MongoDB", "Redis", "Kafka", "Docker", "Kubernetes", "AWS"]
  },
  {
    id: "senior-fullstack",
    role: "Senior Full Stack Web Developer",
    company: "Nexus Digital Innovations",
    period: "2021 – 2023",
    location: "Remote Worldwide",
    type: "Full-Time",
    description: "Architected high-growth SaaS applications from zero to 100k+ daily active users. Built real-time analytics engines, billing integration pipelines, and responsive web clients.",
    achievements: [
      "Designed and deployed real-time collaboration engines using WebSockets and Express.js, boosting user engagement by 40%.",
      "Optimized MongoDB indexing strategies and aggregation pipelines, cutting heavy reporting query times from 4.8s to 120ms.",
      "Achieved 100/100 Core Web Vitals on critical customer-facing landing pages using Next.js Incremental Static Regeneration."
    ],
    stack: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker", "Tailwind CSS"]
  },
  {
    id: "fullstack-developer",
    role: "Full Stack Web Developer",
    company: "Apex Software Foundry",
    period: "2019 – 2021",
    location: "Tech Hub",
    type: "Full-Time",
    description: "Developed and maintained full-stack web applications for fintech and logistics clients. Designed RESTful endpoints, implemented UI component libraries, and managed containerized cloud deployments.",
    achievements: [
      "Built resilient REST APIs using Express.js and MongoDB with JWT authentication and RBAC permissions.",
      "Created a reusable design system in React and Tailwind CSS adopted across 6 corporate web applications.",
      "Automated deployment pipelines with Docker and GitHub Actions, slashing deployment turnaround time by 50%."
    ],
    stack: ["JavaScript", "TypeScript", "React", "Express.js", "MongoDB", "Redis", "Docker", "Git"]
  }
];

export const ARCHITECTURE_PILLARS = [
  {
    id: "resilience",
    title: "Fault-Tolerant & Resilient",
    description: "Graceful degradation, circuit breakers, and zero single points of failure. Every service can withstand unexpected load spikes and network partitions.",
    icon: "ShieldAlert"
  },
  {
    id: "performance",
    title: "Sub-50ms Global Latency",
    description: "Edge caching, multi-region database read-replicas, and stream-optimized React 19 SSR for lightning-fast digital interactions.",
    icon: "Zap"
  },
  {
    id: "scalability",
    title: "Infinite Horizontal Scalability",
    description: "Stateless microservices, auto-scaling Kubernetes worker pods, and partitioned MongoDB document stores that scale seamlessly from 1k to 1M users.",
    icon: "Maximize2"
  },
  {
    id: "security",
    title: "Zero-Trust Security by Design",
    description: "Cryptographically verified JWTs, RBAC & ABAC permission matrices, rate-limited API gateways, and rigorous secret sanitization.",
    icon: "Lock"
  }
];

