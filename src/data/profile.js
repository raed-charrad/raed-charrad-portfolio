/* ============================================================================
   THE ONLY FILE YOU NEED TO EDIT.
   ----------------------------------------------------------------------------
   Every word on the site comes from here. No component contains any copy.

   Sources: "Raed charrad cv.pdf", the Elise.Connector.Fast and
   Neoledge.Component.Lib repositories, the NeoForm Studio package, and
   ultimateit.io (read 4 Sept 2026).

   Several `CHECK` notes remain — search for that word before you publish.
   The UltimateIT entries need dates and tech stacks only you can supply.
   ========================================================================== */

export const profile = {
  name: 'Raed Charrad',
  role: 'Software Engineer & Co-founder',
  location: 'Aouina, Tunis',
  email: 'raidcharrad@gmail.com',
  phone: '+216 54 575 220',

  // Cycled one at a time under the name. Always rendered, never empty.
  focuses: ['Full Stack', 'Data Engineering', 'Systems Integration'],

  // The hero thesis. One sentence.
  tagline:
    'I build the pipeline end to end — the form someone fills in, the workflow it triggers, the systems it has to talk to, and the warehouse and dashboards it lands in.',

  bio: [
    'I am a software engineer at NeoLedge, working across the full stack with a second specialism in data engineering. Most of my time goes to NeoForm — a multi-tenant SaaS platform for building intelligent forms and orchestrating the workflows behind them — and to the integration connectors that wire our document platform into systems it was never designed to meet.',
    'On the backend that means .NET with CQRS, Entity Framework Core, .NET Aspire and Docker, and a lot of care about what happens when a remote service is slow, down, or lying to you. On the frontend, Vue 3 and TypeScript, including drag-and-drop designers where the hard part is making a genuinely complex builder feel obvious to someone who has never seen it before.',
    'The other half of my work is data: ETL pipelines, star-schema warehouses, Power BI dashboards, and the models that sit on top of them. I trained at ISET Bizerte and am completing my engineering degree at ESPRIT on an apprenticeship track.',
    'Alongside that I co-founded UltimateIT, a software studio building web, mobile and DevOps work for clients in Germany. We ship ordering and delivery platforms that real restaurants take real money through, which is a very direct way to learn what "production" means.',
  ],

  // Shown as a framed portrait beside the hero text; null removes the frame
  // and the hero goes full width. Keep the file small — it is above the fold.
  // Paths here are resolved through src/asset.js against the site's base URL,
  // so write them as '/name.ext' and they work at a subpath too.
  // The committed portrait.jpg is a 760px downscale; the full-res original is
  // at ./portrait-original.jpg (gitignored).
  portrait: '/portrait.jpg',

  // No CV published — the PDF was removed (it carried your phone number), so
  // the top-bar button falls back to "Contact". To re-add one: drop the file in
  // /public and set this to its path, e.g. '/raed-charrad-cv.pdf'.
  resume: null,

  links: [
    { label: 'Email', href: 'mailto:raidcharrad@gmail.com' },
    { label: 'GitHub', href: 'https://github.com/raed-charrad' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raed-charrad/' },
  ],
}

/* ---------------------------------------------------------------------------
   THE PIPELINE — drives the animated hero diagram.
   These are the real stages of the work, so the diagram is content, not decor.
   Order matters: it is the direction data actually travels.
   ------------------------------------------------------------------------ */
export const pipeline = [
  { short: 'Form', label: 'Form', note: 'Vue 3 drag-and-drop designer' },
  { short: 'Flow', label: 'Workflow', note: 'Elsa orchestration engine' },
  { short: 'Link', label: 'Connector', note: 'Resilient .NET integration layer' },
  { short: 'ETL', label: 'ETL', note: 'SSIS and Pandas pipelines' },
  { short: 'DWH', label: 'Warehouse', note: 'Star schema on SQL Server' },
  { short: 'Model', label: 'Model', note: 'Scikit-learn and XGBoost' },
  { short: 'BI', label: 'Insight', note: 'Power BI dashboards' },
]

/* ---------------------------------------------------------------------------
   METRICS — counted up on scroll. Every figure here comes from the CV and is
   defensible in an interview. Do not add one you cannot back up.
   ------------------------------------------------------------------------ */
export const metrics = [
  { value: 3, suffix: '', label: 'Years engineering at NeoLedge' },
  { value: 130, suffix: 'K', label: 'Records modelled in a warehouse' },
  { value: 10, suffix: '+', label: 'ML models shipped' },
  { value: 4, suffix: '', label: 'Products live at UltimateIT' },
]

/* ---------------------------------------------------------------------------
   NOW — what is on your desk this month. Keep this fresh; it is the section
   that makes the site look alive rather than archived.
   ------------------------------------------------------------------------ */
export const now = [
  {
    title: 'Elise Connector — FAST',
    blurb:
      'Extending the FAST integration: e-signature circuits, return tasks and tracking sheets, freshly migrated to .NET 10.',
    state: 'In production',
  },
  {
    title: 'NeoForm Studio',
    blurb:
      'The deployable side of NeoForm: configuration, schema and external-source mapping packaged so a tenant can be stood up as one artefact.',
    state: 'Shipping',
  },
  {
    title: 'UltimateIT',
    blurb:
      'Co-founding a software studio: ordering and delivery platforms for restaurants in Germany, plus web, mobile and DevOps consulting.',
    state: 'Co-founder',
  },
  {
    title: 'Legacy form migration',
    blurb:
      'Tooling that reads legacy Elise field dictionaries and grid structures and emits the NeoForm equivalent, so customers migrate without re-authoring every form by hand.',
    state: 'In progress',
  },
]

/* ---------------------------------------------------------------------------
   EXPERIENCE — newest first. end: 'Present' renders as a live node.
   ------------------------------------------------------------------------ */
export const experience = [
  {
    // CHECK the founding date is a guess from the site's 2026 copyright.
    // Put your real start month in, and correct the role title if you use
    // something more specific (CTO, Technical Co-founder, etc.).
    company: 'UltimateIT',
    team: null,
    role: 'Co-founder',
    contract: 'ultimateit.io',
    start: '2025',
    end: 'Present',
    summary:
      'Co-founded a software studio — “bridging ideas with technology” — serving clients in Germany.',
    highlights: [
      'Build and ship web applications, mobile applications and websites for client businesses.',
      'Delivered a restaurant ordering and payment platform now live for three separate restaurants.',
      'Built Jibly Taw, a food-delivery marketplace connecting customers, restaurants and doorstep delivery.',
      'Offer DevOps consulting and SEO alongside delivery work.',
      'Co-founder responsibilities beyond code: scoping client work, technical decisions and delivery.',
    ],
    tech: ['Laravel', 'Vue.js', 'PWA', 'Leaflet'],
  },
  {
    company: 'NeoLedge',
    team: 'MEA — Product Integration',
    role: 'Integration Engineer',
    contract: 'Apprenticeship',
    start: 'Sept 2023',
    end: 'Present',
    summary:
      'Full Stack Vue.js / .NET development inside the product integration team.',
    highlights: [
      'Full Stack development of NeoForm, a multi-tenant SaaS platform for intelligent form creation and workflow orchestration.',
      'Designed backend features with .NET, CQRS, Entity Framework Core, .NET Aspire and Docker.',
      'Built advanced interfaces with Vue 3, TypeScript and drag-and-drop designers.',
      'Integrated the Elsa workflow engine.',
      'Built automatic form generation powered by LLMs.',
      'Lead developer on the FAST integration connector, and contributed components to the shared Vue 3 component library.',
      'Worked in Agile Scrum with Azure DevOps.',
    ],
    tech: [
      '.NET',
      'CQRS',
      'EF Core',
      '.NET Aspire',
      'Vue 3',
      'TypeScript',
      'Docker',
      'Elsa',
      'Polly',
      'Azure DevOps',
    ],
  },
  {
    company: 'Station NeoLedge',
    team: null,
    role: 'Final-Year Engineering Internship',
    contract: 'PFE Internship',
    start: 'Feb 2023',
    end: 'May 2023',
    summary:
      'Built a mobile client for the Elise ECM platform, plus the PDF rendering library behind it.',
    highlights: [
      'Developed a mobile application for Elise ECM.',
      'Created neo-pdf-viewer, a reusable viewer library built on PDF.js.',
      'Set up CI/CD and worked in an Agile team.',
    ],
    tech: ['Vue 3', 'TypeScript', 'Ionic', 'Capacitor', 'PDF.js'],
  },
]

/* ---------------------------------------------------------------------------
   PROJECTS — featured: true gives a full-width panel.
   href: null renders a panel with no outbound link.

   Ordering note: these are private company repositories, so the panels have
   no links. If you ever get clearance to show code, add `href`.
   ------------------------------------------------------------------------ */
export const projects = [
  {
    title: 'Elise Connector — FAST',
    year: '2025 — 2026',
    kind: 'Systems integration · Lead developer',
    featured: true,
    description:
      'A production connector between the FAST dematerialised-exchange platform and the Elise ECM. It deposits documents and their attachments into Elise, drives e-signature circuits, and keeps both sides in step when one of them is unavailable. I am the lead developer on it.',
    highlights: [
      'ASP.NET Core API plus an Elise CustomAction front end, layered into API, services, provider and SOAP-facade projects with Autofac for dependency injection and Serilog for structured logging.',
      'Resilient HTTP throughout: Polly retry policies around every outbound call, with retry attempts logged so a failure is diagnosable rather than silent.',
      'Credentials never sit in plaintext — a startup hosted service encrypts secrets in configuration using ASP.NET Data Protection, with matching decryption helpers on the automate side.',
      'Attachment handling that survives real customer data: documents zipped for transfer with filename conflicts and duplicates resolved rather than overwritten.',
      'Drives approval circuits end to end — signature routing, return-task creation and tracking-sheet updates — with Application Insights telemetry over the top.',
      'Migrated the whole solution from .NET 8 to .NET 10, and covered the provider layer with NUnit and Moq.',
    ],
    tech: [
      '.NET 10',
      'ASP.NET Core',
      'Autofac',
      'Polly',
      'Serilog',
      'SOAP',
      'Data Protection',
      'NUnit',
      'Moq',
    ],
    href: null,
  },
  {
    title: 'NeoForm',
    year: '2023 — Present',
    kind: 'Multi-tenant SaaS platform',
    featured: true,
    description:
      'The platform I spend most of my time on: a multi-tenant SaaS product for building intelligent forms and orchestrating the workflows they trigger. My work spans the .NET backend and the Vue 3 designer surface.',
    highlights: [
      'Backend built on .NET with CQRS, Entity Framework Core and .NET Aspire, containerised with Docker.',
      'Drag-and-drop form designer in Vue 3 and TypeScript, where the design problem is hiding the complexity rather than exposing it.',
      'Elsa workflow engine integrated so a submitted form can drive a real business process.',
      'LLM-backed form generation: describe the form you need and get a working draft.',
      'NeoForm Studio packages configuration, database schema and external-source mapping so a tenant deploys as a single artefact.',
    ],
    tech: ['.NET', 'CQRS', 'EF Core', '.NET Aspire', 'Vue 3', 'TypeScript', 'Elsa', 'Docker'],
    href: null,
  },
  {
    // CHECK confirm the years.
    title: 'Restaurant Ordering Platform',
    year: '2025 — 2026',
    kind: 'UltimateIT · Product',
    featured: true,
    description:
      'A white-label ordering and payment platform for restaurants: customers browse the menu, place an order and pay securely from their phone, with no app to install. Built once at UltimateIT and now running live for three separate restaurants in Germany.',
    highlights: [
      'Menu browsing, order placement and secure mobile payment as a single flow on the customer’s own phone.',
      'Deployed per restaurant under its own brand and domain, so each venue keeps its own identity.',
      'Handling real orders and real money for paying venues — Pizzeria Bellissima, Da Cono Cimino 48 and Ristorante Lastalla.',
    ],
    tech: ['Laravel', 'Vue.js'],
    href: null,
    links: [
      { label: 'Pizzeria Bellissima', href: 'https://app.pizzabellissima.de/' },
      { label: 'Da Cono Cimino 48', href: 'https://app.daconocimino.de/' },
      { label: 'Ristorante Lastalla', href: 'https://app.ristorantelastalla.de/' },
    ],
  },
  {
    // Merged: this is your CV's "Application mobile de livraison" (2025,
    // Laravel/Vue/PWA/Leaflet, three roles, live tracking) and Jibly Taw on
    // ultimateit.io — the same product. Listed once, under its real name.
    title: 'Jibly Taw',
    year: '2025 — 2026',
    kind: 'UltimateIT · Marketplace',
    featured: false,
    description:
      'A food-delivery marketplace that connects customers with restaurants, takes the order and gets it to the door. Three coordinated roles in one platform, with the driver’s position tracked live on a map. Built and operated at UltimateIT.',
    highlights: [
      'Separate experiences for customer, driver and administrator, kept in step with each other.',
      'Real-time order tracking on a live map, so the customer can see where their food actually is.',
      'Delivered as a PWA, so it installs from the browser with no app-store round trip.',
    ],
    tech: ['Laravel', 'Vue.js', 'PWA', 'Leaflet'],
    href: 'https://www.jiblytaw.com/',
  },
  {
    title: 'Airline Data Warehouse & Analytics Platform',
    year: '2026', // CHECK confirm this year
    kind: 'Data engineering · Machine learning',
    featured: true,
    description:
      'An end-to-end decision-support platform analysing air-passenger satisfaction and loyalty across roughly 130,000 records — from raw extract through to dashboards and predictive models.',
    highlights: [
      'ETL pipeline in SSIS and Python (Pandas), with cleaning and a star-schema warehouse on SQL Server: 5 dimensions using SCD Type 2, plus 2 fact tables.',
      'Interactive Power BI dashboards tracking KPIs, customer satisfaction, delays and passenger segmentation.',
      'Over 10 machine-learning models: satisfaction prediction (Logistic Regression, Random Forest, XGBoost), churn prediction, CLV estimation, RFM / K-Means segmentation and TF-IDF text analysis.',
      'A React + FastAPI web application with an AI chatbot, DeepFace recognition, OTP authentication, bcrypt and MongoDB.',
    ],
    tech: [
      'SQL Server',
      'SSIS',
      'Python',
      'Pandas',
      'Scikit-learn',
      'XGBoost',
      'Power BI',
      'React',
      'FastAPI',
      'MongoDB',
    ],
    href: null,
  },
  {
    // CHECK ─────────────────────────────────────────────────────────────────
    // Git history: 7 of ~192 commits are yours; Yassine SBOUI is the primary
    // author. Worded as a contribution rather than as your library, which is
    // what the history supports. Adjust only if you actually owned more of it
    // than the commits show.
    // ───────────────────────────────────────────────────────────────────────
    title: 'NeoLibrary',
    year: '2025 — 2026',
    kind: 'Design system · Contributor',
    featured: false,
    description:
      'The team’s shared Vue 3 component library — an opinionated PrimeVue 4 abstraction layer of 35 enterprise components with Tailwind styling, full i18n, a Blockly visual-scripting surface and a schema-driven form renderer. I contribute components and fixes; it is published as a restricted npm package and documented in Storybook.',
    highlights: [],
    tech: ['Vue 3', 'TypeScript', 'PrimeVue 4', 'Tailwind', 'Storybook', 'Vitest', 'Blockly'],
    href: null,
  },
  {
    title: 'Legacy Form Migration Tooling',
    year: '2026',
    kind: 'Internal tooling',
    featured: false,
    description:
      'A generator that reads legacy field dictionaries and grid structures — XML definitions plus CSV layout exports — and emits the spreadsheet that drives a NeoForm build, so a migrating customer keeps their form estate without re-authoring it by hand. Written against the standard library only, so it runs anywhere with no install step.',
    highlights: [],
    tech: ['Python', 'XML', 'CSV', 'OpenXML'],
    href: null,
  },
  {
    title: 'neo-pdf-viewer',
    year: '2023',
    kind: 'Library',
    featured: false,
    description:
      'A reusable PDF viewing library built on PDF.js, created during my final-year internship to power document preview inside the Elise ECM mobile app.',
    highlights: [],
    tech: ['TypeScript', 'PDF.js', 'Vue 3'],
    href: null,
  },
]

/* ---------------------------------------------------------------------------
   SKILLS — grouped. `accent: 'model'` tints a group amber instead of blue.
   ------------------------------------------------------------------------ */
export const skillGroups = [
  {
    label: 'Languages',
    // CHECK the CV's PDF text layer dropped a "#" — assuming C# and C.
    items: ['C#', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'PHP', 'Kotlin', 'Dart', 'C'],
  },
  {
    label: 'Backend',
    items: [
      '.NET',
      'ASP.NET Core',
      'CQRS',
      'EF Core',
      '.NET Aspire',
      'FastAPI',
      'Laravel',
      'Spring Boot',
      'Elsa',
    ],
  },
  {
    label: 'Frontend',
    items: ['Vue 3', 'React', 'Angular', 'PrimeVue', 'Tailwind', 'Ionic', 'Flutter', 'PWA'],
  },
  {
    label: 'Integration',
    items: ['REST', 'SOAP', 'Polly', 'Autofac', 'Serilog', 'Data Protection', 'OpenID Connect'],
  },
  {
    label: 'Data & AI',
    accent: 'model',
    items: [
      'Machine Learning',
      'Data Engineering',
      'ETL',
      'Data Warehouse',
      'SSIS',
      'Power BI',
      'Pandas',
      'Scikit-learn',
      'XGBoost',
      'NLP',
      'LLMs',
    ],
  },
  {
    label: 'Databases',
    items: ['SQL Server', 'MongoDB', 'MySQL', 'Oracle'],
  },
  {
    label: 'Delivery',
    items: [
      'Docker',
      'Azure DevOps',
      'Git',
      'Agile Scrum',
      'Storybook',
      'Vitest',
      'NUnit',
      'SonarQube',
    ],
  },
]

export const education = [
  {
    school: 'ESPRIT',
    detail: 'Engineering degree · apprenticeship track',
    period: 'Sept 2023 — Present',
  },
  { school: 'ISET Bizerte', detail: null, period: '2020 — 2023' },
]

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Fluent' },
  { name: 'English', level: 'Intermediate' },
]

/* ---------------------------------------------------------------------------
   NAVIGATION — ids must match the section ids rendered in App.jsx
   ------------------------------------------------------------------------ */
export const nav = [
  { id: 'now', label: 'Now' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]
