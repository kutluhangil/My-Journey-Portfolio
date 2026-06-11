/**
 * Every word on the site lives here.
 * Edit this file — never the components — to change content.
 */

// Flip to false when you land a job: the lobby sign switches to "NO VACANCY".
export const AVAILABLE_FOR_WORK = true

export const profile = {
  name: 'Kutluhan Gül',
  role: 'Full Stack Developer',
  email: 'kutluhangil@gmail.com',
  location: 'Istanbul, Türkiye · remote-friendly (CET±2)',
  cv: '/documents/Kutluhan_Gul_Full_Stack_Developer.pdf',
  certificate: '/certifikate_fullstack_developer.pdf',
  github: 'https://github.com/kutluhangil',
  linkedin: 'https://linkedin.com/in/kutluhangil',
}

export const stats = [
  { value: '2.5+', label: 'years in tech' },
  { value: '10+', label: 'projects built' },
  { value: '8+', label: 'years of professional experience' },
  { value: '∞', label: 'coffee consumed' },
]

export const story = [
  'I spent eight years in rooms where the customer is always present — hotel front desks in Park City and Istanbul, then two and a half years at Amazon untangling marketplace problems for sellers across Europe. Service teaches you to read people fast, stay calm under pressure, and never ship a sloppy experience.',
  'In 2024 I made the deliberate jump into software. Through GoIT’s Full Stack Developer program and a Computer Programming degree at Anadolu University, I rebuilt my toolkit around React, TypeScript and Node.js — and shipped four team projects along the way.',
  'What survived the career change is the obsession with the guest experience. It just renders in the browser now.',
]

export type Stop = {
  years: string
  kind: 'work' | 'study'
  place: string
  title: string
  note?: string
  link?: { href: string; label: string }
}

export const itinerary: Stop[] = [
  {
    years: '2025 — 2026',
    kind: 'study',
    place: 'IT School GoIT',
    title: 'Full Stack Developer Program',
    note: 'The pivot, formalized — certified full stack developer.',
    link: { href: '/certifikate_fullstack_developer.pdf', label: 'View certificate' },
  },
  {
    years: '2022 — 2026',
    kind: 'study',
    place: 'Anadolu University',
    title: 'Associate’s Degree, Computer Programming',
  },
  {
    years: '2022 — 2024',
    kind: 'work',
    place: 'Amazon — remote',
    title: 'Senior Selling Partner Support Associate',
    note: 'Multi-channel technical support for 60+ active sellers across European marketplaces — product listings, catalog errors, account health and backend troubleshooting.',
  },
  {
    years: '2021 — 2022',
    kind: 'work',
    place: 'Crowne Plaza Istanbul Tuzla',
    title: 'Guest Service Agent',
    note: 'Front desk: reservations, check-ins and check-outs, secure transactions.',
  },
  {
    years: '2019 — 2021',
    kind: 'study',
    place: 'Anadolu University',
    title: 'Associate’s Degree, Web Coding',
  },
  {
    years: '2019 — 2021',
    kind: 'work',
    place: 'Radisson Blu Hotel & Spa',
    title: 'Guest Service Agent',
    note: 'Front-desk operations, guest support and payment handling.',
  },
  {
    years: '2017 — 2019',
    kind: 'study',
    place: 'Atilim University',
    title: 'Master’s Degree, Tourism & Travel Services Management',
  },
  {
    years: '2013 — 2016',
    kind: 'work',
    place: 'Park City, Utah — USA',
    title: 'Floor Supervisor & Inspector',
    note: 'Work & Travel seasons at Westgate Resorts and Canyons Resort — promoted to supervisory roles: inspections, standards, inventory.',
  },
  {
    years: '2009 — 2014',
    kind: 'study',
    place: 'Mustafa Kemal University',
    title: 'Bachelor’s Degree, Tourism & Hotel Management',
  },
]

export type Project = {
  id: string
  title: string
  subtitle: string
  tags: string[]
  blurb: string
  about: string[]
  highlights: string[]
  role?: string
  tech: string[]
  cover: string
  shots: string[]
  links: { github?: string; live?: string }
}

export const projects: Project[] = [
  {
    id: 'money-guard',
    title: 'Money Guard',
    subtitle: 'Personal Finance Management App',
    tags: ['React', 'Redux Toolkit'],
    blurb:
      'A secure financial tracking system — JWT authentication, full transaction CRUD, live balance synchronization and an interactive statistics dashboard.',
    about: [
      'Money Guard is a React-based financial tracking system where users securely register, manage income and expense transactions, and visualize spending habits through interactive statistics.',
      'Built mobile-first on a scalable Redux architecture, with persistent sessions and unified error handling across the team.',
    ],
    highlights: [
      'Secure authentication with JWT persistence via redux-persist',
      'Transaction CRUD with responsive table and mobile card layouts',
      'Floating “+” add-transaction flow with modal forms',
      'Automatic balance synchronization and toast-based error handling',
      'Statistics dashboard (Chart.js) with Monobank currency integration',
    ],
    role:
      'I owned the transaction CRUD and modal logic: the floating add button, ModalAddTransaction, AddTransactionForm (react-hook-form + Yup) and the automatic balance synchronization system.',
    tech: ['React 18', 'Redux Toolkit', 'React Router', 'react-hook-form', 'Yup', 'Chart.js', 'Axios', 'Vite'],
    cover: '/images/projects/covers/moneyguard.png',
    shots: [
      '/images/projects/moneyguard/1.jpg',
      '/images/projects/moneyguard/2.jpg',
      '/images/projects/moneyguard/3.jpg',
      '/images/projects/moneyguard/4.jpg',
    ],
    links: { github: 'https://github.com/kutluhangil' },
  },
  {
    id: 'slim-moms',
    title: 'Slim Moms',
    subtitle: 'Full-Stack Calorie Tracker',
    tags: ['React', 'Node.js', 'MongoDB'],
    blurb:
      'A full-stack calorie tracker with personalized daily goals, a searchable food diary and a documented REST API — React front, Express/MongoDB back.',
    about: [
      'Slim Moms calculates a personalized daily calorie goal from height, weight, age and blood type, then tracks intake in a daily food diary with a searchable product database.',
      'Visitors get a quick calculator on the landing page; authenticated users get full tracking, personalized non-recommended food lists and persistent JWT sessions.',
    ],
    highlights: [
      'Public and private routing with persistent sessions via Redux Persist',
      'Personalized calorie algorithm based on physical parameters and blood type',
      'Interactive food diary with searchable product database',
      'Node.js + Express + MongoDB Atlas backend with bcryptjs hashing',
      'Interactive API documentation with Swagger UI',
    ],
    role: 'Full-stack team project on the GoIT Node.js track — frontend features and REST endpoints.',
    tech: ['React 19', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger UI', 'Axios', 'Vite'],
    cover: '/images/projects/covers/slimmoms.png',
    shots: [
      '/images/projects/slimmoms/1.jpg',
      '/images/projects/slimmoms/2.jpg',
      '/images/projects/slimmoms/3.jpg',
      '/images/projects/slimmoms/4.jpg',
      '/images/projects/slimmoms/5.jpg',
    ],
    links: {
      github: 'https://github.com/goit-nodejs-project/slim-moms',
      live: 'https://goit-slim-moms.vercel.app/',
    },
  },
  {
    id: 'cinemania',
    title: 'Cinemania',
    subtitle: 'Digital Movie Discovery Platform',
    tags: ['JavaScript', 'TMDB API'],
    blurb:
      'A multi-page movie discovery platform on live TMDB data — trending films, catalog search with filters, trailers and a persistent personal library.',
    about: [
      'Cinemania simulates a real-world movie discovery platform: trending films, keyword and year search, upcoming releases and a personalized movie library — all on real-time TMDB data.',
      'Designed mobile-first with semantic HTML, modular CSS architecture and asynchronous JavaScript; passed W3C validation with a PageSpeed score above 80.',
    ],
    highlights: [
      'Mobile-first responsive layout (320 / 768 / 1280)',
      'Dark–light theme switcher with localStorage persistence',
      'Movie detail modals with trailer support',
      'Server-side pagination, load-more and a global async loader',
      'My Library with add/remove logic persisted locally',
    ],
    role:
      'Group project in the GoIT program — I built the footer and the team modal, and wired their responsive integration with the rest of the app.',
    tech: ['HTML5', 'CSS3', 'Vanilla JS (ES6+)', 'Vite', 'TMDB API', 'Git & GitHub'],
    cover: '/images/projects/covers/cinemania.png',
    shots: ['/images/projects/cinemania.jpg'],
    links: {
      github: 'https://github.com/kutluhangil',
      live: 'https://january-javascript-project.github.io/cinemania/',
    },
  },
  {
    id: 'focus-frame',
    title: 'Focus Frame',
    subtitle: 'Photography School Landing Page',
    tags: ['HTML', 'CSS'],
    blurb:
      'A pixel-perfect, single-page photography school site built from Figma mockups — courses, mentors, reviews and a sign-up flow at three breakpoints.',
    about: [
      'Focus Frame simulates a real landing-page engagement: hero, course cards, mentor profiles, student reviews, a sign-up form and a full footer — built to match Figma mockups pixel for pixel.',
      'Retina-ready images, SVG sprite icons and W3C-validated markup, responsive from 375px up through a 1440px-optimized desktop.',
    ],
    highlights: [
      'Pixel-perfect implementation of Figma mockups',
      'Responsive at 375 / 768 / 1280 with 1440 optimization',
      'SVG icons served from a single sprite',
      'Optimized vector and raster assets with Retina support',
    ],
    role:
      'Team project — I delivered the complete footer section; we collaborated through GitHub branches, pull requests and Trello.',
    tech: ['HTML5', 'CSS3', 'Flexbox & Grid', 'Figma', 'Git & GitHub'],
    cover: '/images/projects/covers/focusframe.png',
    shots: ['/images/projects/focusframe.png'],
    links: {
      github: 'https://github.com/kutluhangil/goit-focusframe-project',
      live: 'https://kutluhangil.github.io/goit-focusframe-project/',
    },
  },
]

export const marqueeSkills = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Redux Toolkit',
  'REST API',
  'Express',
  'MongoDB',
  'HTML / CSS',
  'Tailwind CSS',
  'Git & GitHub',
  'Prompt Engineering',
  'Vibecoding',
]

export const amenities: { heading: string; sub: string; items: string[] }[] = [
  {
    heading: 'Front of House',
    sub: 'what the guest sees',
    items: ['React & React Router', 'TypeScript', 'JavaScript (ES6+)', 'Redux Toolkit', 'HTML5 / CSS3', 'Tailwind CSS', 'Framer Motion', 'React Query'],
  },
  {
    heading: 'Back of House',
    sub: 'where the work happens',
    items: ['Node.js', 'Express', 'REST API design', 'PostgreSQL', 'MongoDB', 'Drizzle ORM', 'JWT authentication'],
  },
  {
    heading: 'Housekeeping',
    sub: 'kept spotless, always',
    items: ['Git & GitHub flow', 'VS Code', 'Vite', 'Postman', 'Figma → pixel-perfect', 'W3C validation', 'npm'],
  },
  {
    heading: 'Concierge',
    sub: 'special requests welcome',
    items: ['Prompt engineering', 'AI-assisted workflows', 'Vibecoding, responsibly', 'Clean UI sensibility', 'English — professional', 'Turkish — native'],
  },
]

export const testimonials = [
  {
    quote:
      'Kutluhan brings a rare combination of technical precision and creative thinking. His attention to detail in both code quality and visual design consistently raised the bar for our team.',
    author: 'Deniz Yılmaz',
    role: 'Team Lead · GoIT Full Stack Program',
  },
  {
    quote:
      'Working with Kutluhan during our Cinemania project was seamless. He owned his features independently, communicated clearly, and delivered pixel-perfect results every sprint.',
    author: 'Alina Marchenko',
    role: 'Frontend Developer · Cinemania Team',
  },
  {
    quote:
      "Kutluhan's problem-solving approach impressed me throughout our collaboration. He doesn't just fix bugs — he understands the root cause and prevents the next three.",
    author: 'Mykola Hrytsenko',
    role: 'Fullstack Developer · GoIT Cohort',
  },
]

export const featuredPosts = [
  {
    id: 1,
    title: 'From Operations to Code: My Career Transition Story',
    excerpt:
      "After 8+ years in hospitality and logistics, making the decision to pivot into software development was the most deliberate choice I've made.",
    category: 'Notes',
    date: '2025-03-15',
  },
  {
    id: 2,
    title: 'Building Cinemania: Lessons from My First Team Project',
    excerpt:
      'Working in a team of 5 across different timezones taught me more about real-world development than any solo project.',
    category: 'Dev',
    date: '2025-02-28',
  },
  {
    id: 3,
    title: 'CSS Architecture: Why I Stopped Fighting with Specificity',
    excerpt:
      "After months of !important abuse, I finally understood BEM and utility-first CSS. Here's what actually made it click.",
    category: 'Dev',
    date: '2024-12-05',
  },
]

export const navLinks = [
  { href: '/', label: 'Home', isRoute: true },
  { href: '/#about', label: 'About', isRoute: false },
  { href: '/#projects', label: 'Projects', isRoute: false },
  { href: '/workshop', label: 'GitHub', isRoute: true },
  { href: '/#certificate', label: 'Certificate', isRoute: false },
  { href: '/blog', label: 'Blog & Notes', isRoute: true },
  { href: '/now', label: 'Now', isRoute: true },
  { href: '/uses', label: 'Uses', isRoute: true },
  { href: '/#contact', label: 'Contact', isRoute: false },
]
