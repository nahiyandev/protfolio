export const experience = [
  {
    role: "Managing Director",
    company: "Nahiyan Dev",
    period: "2019 – Present",
    location: "Bangladesh",
    points: [
      "Run my own independent web development practice building full-stack projects.",
    ],
  },
  {
    role: "Computer Operator",
    company: "Gafargaon Puoroshova",
    period: "Jan 2019 – Present",
    location: "Mymensingh Division, Bangladesh · On-site · Full-time",
    points: [
      "Data entry, data management and day-to-day computer operations for the municipal office.",
    ],
  },
];



export const profile = {
  name: "Md Nayem",
  alias: "Nahiyan Dev",
  headline: "Full Stack Developer | Next.js, React, TypeScript & MERN",
  location: "Gafargaon, Mymensingh, Bangladesh",
  availability: "Open to remote work worldwide",
  email: "nahiyandev@gmail.com",
  phone: "+8801924648788",
  github: "https://github.com/Nahiyandev",
  linkedin: "https://www.linkedin.com/in/nahiyandev",
};

export const aboutParagraphs = [
  "I'm Md Nayem, a Full Stack Developer from Mymensingh, Bangladesh. By day I work as a Computer Operator at Gafargaon Puoroshova — and alongside that, I taught myself modern web development, one project at a time.",
  "I build real, working full-stack applications with Next.js, React, TypeScript and the MERN stack: from database-backed apps with authentication to interactive front-ends deployed on Vercel. I'm still early in my development journey, and I let my projects speak for themselves.",
  "I'm currently looking for a web development role — remote or on-site, in Bangladesh or anywhere in the world.",
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Vercel"],
  },
];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
  image?: string;
}


export const projects: Project[] = [
  {
    name: "Bazar Dor",
    tagline: "Daily commodity price tracker for Bangladesh",
    description:
      "A full-stack web app that tracks daily market prices of everyday commodities across Bangladesh — 33 products in 8 categories, with Bengali live search, 30-day price trend charts, a grocery budget calculator, watchlists, and Google/GitHub sign-in with protected routes.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "MongoDB", "Better-Auth"],
    github: "https://github.com/Nahiyandev/bazar-dor",
    live: "https://bazar-dor-chi.vercel.app",
    featured: true,
    image: "/projects/bazar-dor.png",
  },
  {
    name: "FitLog",
    tagline: "Workout library & daily training planner",
    description:
      "A workout library and routine planner with an exercise grid, muscle-group filters, a rule-based daily training scheduler, a metrics dashboard, live search, and a rest timer — with plans persisted in localStorage.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React Context"],
    github: "https://github.com/Nahiyandev/workout-library",
    live: "https://workout-library-omega.vercel.app",
    image: "/projects/fitlog.png",
  },
  {
    name: "Bangla News 24",
    tagline: "Bangla news portal with auth UI",
    description:
      "A mobile-responsive Bangla news portal featuring a breaking-news marquee, category-based news feeds, article pages, and sign-in / sign-up authentication UI.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "HeroUI"],
    github: "https://github.com/Nahiyandev/news-auth",
    live: "https://news-auth-bay.vercel.app",
    image: "/projects/bangla-news-24.png",
  },
  {
    name: "Kivo IT",
    tagline: "Agency-style website (front-end project)",
    description:
      "A modern agency-style website built with Next.js 15 and Tailwind CSS, including an interactive service quote calculator, demo sandboxes, and client review sections.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Nahiyandev/kivo-it",
  },
];


export const education = [
  {
    degree: "MSc in Psychology",
    school: "National University, Bangladesh",
    year: "2022",
  },
  {
    degree: "BSc (Honours) in Psychology",
    school: "National University, Bangladesh",
    year: "2021",
  },
  {
    degree: "AI-Driven Full Stack Web Engineering",
    school: "Programming Hero · 6-month online program",
    year: "Training",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
