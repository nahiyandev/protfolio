<div align="center">

# ⚡ MD RAHIM MIAH — Full Stack & Web Architecture Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.4.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.x-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge)](LICENSE)

<p align="center">
  <strong>Architecting resilient, distributed web systems & crafting ultra-responsive full-stack platforms from code to cloud.</strong>
</p>

[🌐 Live Demo (Vercel)](https://protfolio-nahiyandev.vercel.app) • [💼 LinkedIn Profile](https://linkedin.com/in/nahiyandev) • [📘 Facebook](https://facebook.com/nahiyandev) • [🐙 GitHub](https://github.com/nahiyandev)

---

</div>

## 📌 Executive Summary

This repository contains the production personal branding portfolio website for **MD Rahim Miah**, a **Senior Full Stack Web Developer and Architecture Web Engineer**.

Engineered using **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**, this portfolio demonstrates modern web systems design: bridging reactive client UX with resilient distributed backends, edge caching, and cloud-native infrastructure.

---

## 🌟 Key Features

### 1. 🎯 Global Animated Cursor Follower
- **Dual-Layer Precision Cursor**: Features an instant inner cyan glowing dot coupled with an outer animated ring driven by linear interpolation (lerp) physics.
- **Contextual Hover Expansion**: Scales up and pulses whenever hovering over cards, links, tabs, and interactive buttons.
- **Device-Aware Performance**: Activates on fine-pointer devices (desktop/laptops) and gracefully defers to native touch gestures on mobile devices.

### 2. 🌌 Interactive Full-Page Constellation Background
- **Hardware-Accelerated HTML5 Canvas**: Renders dynamic network nodes and glowing constellation laser beams.
- **Interactive Mouse Repulsion**: Subtle proximity physics where particles accelerate and create energetic connection beams around the user's cursor.
- **Ambient Multi-Stop Lighting**: Radial glows in cyan, sky blue, and deep indigo with zero layout shift.

### 3. 🛸 Floating Capsule Navigation Bar
- **Pill-Shaped Floating Bar**: Glassmorphic backdrop blur adhering to modern cyber aesthetics.
- **Brand Avatar**: Features official personal logo with glowing dual-tone border.
- **Direct Modal Triggers**: Instant access to **Education**, **Resume**, and a prominent neon cyan **Hire Me** CTA button.
- **Active Section Spy**: Automatically tracks and highlights the active section as you scroll.

### 4. 🎛️ Technical Matrix (Skills Grid)
- **Authentic Brand Logos**: Vector SVG brand iconography for HTML5, CSS3, JavaScript, TypeScript, React 19, Next.js, React Router, Tailwind CSS, Express.js, MongoDB, Node.js, PostgreSQL, Redis, Kafka, Docker, Kubernetes, AWS, Nginx, and Prometheus.
- **Cyber Reticle Brackets `⌝`**: Architectural corner accents on every card.
- **Multi-Category Filter**: Instant switching between `ALL`, `FRONTEND`, `BACKEND & SERVICES`, and `DEVOPS & TOOLS`.

### 5. 🏗️ Interactive 5-Tier Architecture Blueprint
- **End-to-End System Diagram**: Visualizes request traversal from Global Edge CDN $\rightarrow$ Next.js 16 SSR $\rightarrow$ Express API Gateway $\rightarrow$ Kubernetes Microservices $\rightarrow$ MongoDB & Redis Persistence.
- **Deep-Dive Blueprint Inspector**: Clickable layers revealing SLA targets, functional scope, implementation details, and multi-region failover protocols.

### 6. 🚀 Production Systems & Projects Showcase
- **Real-World System Placeholders**:
  - **CloudScale Nexus**: Enterprise Distributed Microservices Platform (85K req/s, <18ms P99, 99.995% SLA).
  - **HyperStore Engine**: Ultra-Fast E-Commerce Core & Real-Time Inventory (14.5K QPS, 0% oversell).
  - **PulseFlow Real-time Telemetry**: Low-latency Web Observability Hub (120M pts/day, 60 FPS).
  - **AuthSentinel Gateway**: Zero-Trust Identity, OAuth2 & Distributed RBAC Gateway.
  - **SaaSFlow Orchestrator**: Multi-tenant Workflow Engine & Distributed Queue.
  - **DevPulse Observability Hub**: GitOps CI/CD Health & Microservices Portal.
- **Architecture Specs Modal**: Interactive technical modal breaking down problem statements, system architectures, and benchmarks.

### 7. 📑 Curriculum Vitae & PDF Export Modal
- **Print / Save as PDF**: Native `@media print` layout formatting the CV cleanly for employers and enterprise clients.
- **Raw CV Download**: One-click download of technical resume data.

### 8. 📝 Technical Publications (Blog Reader)
- Built-in reader modal for architectural guides on:
  - *Deconstructing Modern Web Architecture: From Monoliths to Modular Edge Services*
  - *Scaling Next.js & Turbopack for High-Traffic Enterprise SaaS Applications*
  - *Designing High-Throughput Distributed Backends with Express.js, MongoDB & Redis*
  - *Zero-Downtime Deployments & Multi-Region Resiliency with Docker & Kubernetes*

### 9. 📬 Collaboration & Consultation Pipeline
- Interactive proposal form with service model selection, budget tier, timeline options, and guaranteed response time SLA.
- Direct communication channels: Email, Phone, Location, and verified social links (GitHub, LinkedIn, Facebook, Twitter/X).

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Core** | Next.js 16.4.1 (App Router), React 19.3.0, TypeScript 5.x |
| **Styling & Design** | Tailwind CSS v4, Glassmorphism, CSS Grid, Custom WebKit Scrollbars |
| **Backend & APIs** | Node.js, Express.js REST APIs, Server Components, Route Handlers |
| **Data & Caching** | MongoDB (Document Store), Redis (In-Memory Cache & Distributed Lock), PostgreSQL |
| **Cloud & DevOps** | Docker, Kubernetes (K8s), AWS (ECS, S3, CloudFront), GitHub Actions CI/CD |
| **Icons & Media** | Custom SVG Brand Engine, Lucide Icons |
| **Build & Tooling** | Next.js Turbopack, ESLint 9 |

---

## 📂 Project Structure

```text
nehiyan-dev/
├── public/                     # Static assets & logos
│   ├── favicon.ico             # Browser favicon
│   ├── hero-image.jpg          # High-resolution hero avatar
│   └── logo.jpg                # Official developer brand mark
├── src/
│   ├── app/
│   │   ├── favicon.ico         # App-level favicon
│   │   ├── globals.css         # Modern dark theme, grid backgrounds & cursor rules
│   │   ├── layout.tsx          # RootLayout, SEO metadata, Viewport & CustomCursor
│   │   └── page.tsx            # Main portfolio composite page
│   ├── components/
│   │   ├── AboutSection.tsx        # Expertise summary, workflow & architecture pillars
│   │   ├── ArchitectureSection.tsx # Interactive 5-tier web architecture blueprint
│   │   ├── BlogModal.tsx           # Technical article dialog reader
│   │   ├── BlogSection.tsx         # Engineering publications showcase
│   │   ├── ContactSection.tsx      # Proposal inquiry form & social links (LinkedIn, FB, GitHub)
│   │   ├── CustomCursor.tsx        # High-performance lerp animated cursor follower
│   │   ├── EducationModal.tsx      # Academic degrees & verified cloud certifications
│   │   ├── Footer.tsx              # System telemetry, back-to-top & copyright
│   │   ├── HeroSection.tsx         # Animated hero, dynamic ticker & profile card
│   │   ├── HireMeModal.tsx         # Fast inquiry modal with budget & timeline selectors
│   │   ├── Icons.tsx               # Custom SVG brand icons (GitHub, LinkedIn, Facebook, Twitter)
│   │   ├── InteractiveBackground.tsx # HTML5 Canvas constellation network
│   │   ├── Navbar.tsx              # Floating capsule navigation bar with active spy
│   │   ├── ProjectDetailModal.tsx  # In-depth architectural breakdown dialog
│   │   ├── ProjectsSection.tsx     # Filterable production projects grid
│   │   ├── ResumeModal.tsx         # Interactive CV viewer with PDF export & download
│   │   ├── SkillsSection.tsx       # Technical matrix grid matching screenshot
│   │   └── TechIcons.tsx           # Vector SVG logos for HTML5, CSS3, JS, TS, React, etc.
│   └── data/
│       └── portfolioData.ts    # Centralized data model for skills, projects, blogs & bio
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript strict configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nahiyandev/protfolio.git
   cd protfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build & Linting

```bash
# Run ESLint validation
npm run lint

# Compile production build with Turbopack
npm run build

# Start production server
npm run start
```

---

## ☁️ Deploy on Vercel

The easiest way to deploy this portfolio is directly through [Vercel](https://vercel.com/):

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "feat: complete portfolio build"
   git push -u origin main
   ```
2. **Go to [Vercel Dashboard](https://vercel.com/new).**
3. **Import Git Repository**: Select `nahiyandev/protfolio`.
4. **Project Settings**:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
5. **Click Deploy**: Vercel will build and assign your production domain (e.g., `https://protfolio-nahiyandev.vercel.app`).

---

## 🌐 Connect With Me

- **Developer**: MD Rahim Miah (Nahiyan)
- **Role**: Full Stack Web Developer & Architecture Web Engineer
- **GitHub**: [@nahiyandev](https://github.com/nahiyandev)
- **LinkedIn**: [linkedin.com/in/nahiyandev](https://linkedin.com/in/nahiyandev)
- **Facebook**: [facebook.com/nahiyandev](https://facebook.com/nahiyandev)
- **Email**: [nahiyandev@gmail.com](mailto:nahiyandev@gmail.com)
- **Phone**: [+8801924648788](tel:+8801924648788)
- **Location**: Gafargaon, Mymensingh, Bangladesh

---

<div align="center">
  <sub>Built with ❤️ using React 19, Next.js 16 (Turbopack) & Tailwind CSS v4. &copy; 2026 MD Rahim Miah. All rights reserved.</sub>
</div>
