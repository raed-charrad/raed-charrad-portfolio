/* ============================================================================
   ENGLISH — the reference locale.
   ----------------------------------------------------------------------------
   Every other locale falls back to this file key by key, so anything missing
   elsewhere still renders in English instead of vanishing. Keys are matched to
   the `id` fields in src/data/core.js.
   ========================================================================== */

export default {
  meta: { code: 'en', label: 'English', short: 'EN', dir: 'ltr' },

  ui: {
    skipToContent: 'Skip to content',
    contact: 'Contact',
    cv: 'CV',
    seeWork: 'See the work',
    workingIn: 'Working in',
    present: 'Present',
    current: 'Current',
    viewProject: 'View project',
    documentPipeline: 'Document pipeline',
    education: 'Education',
    languagesLabel: 'Languages',
    phone: 'Phone',
    location: 'Location',
    backToTop: 'Back to top',
    sectionNav: 'Section navigation',
    sections: 'Sections',
    language: 'Language',
    showLess: 'Show less',
    showMore: (n) => `Show ${n} more`,
    contactLead: 'Let’s build something',
    contactLeadAccent: 'worth shipping.',
    contactNote:
      'Open to engineering roles and collaborations across full stack, data engineering and systems integration. Email is the fastest way to reach me.',
    navLabels: {
      now: 'Now',
      about: 'About',
      work: 'Work',
      experience: 'Experience',
      stack: 'Stack',
      contact: 'Contact',
    },
    sectionTitles: {
      now: 'What I’m building now',
      about: 'About',
      work: 'Selected work',
      experience: 'Experience',
      stack: 'Stack',
      contact: 'Contact',
    },
    linkLabels: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
    documentTitle: 'Raed Charrad — Software Engineer',
    documentDescription:
      'Software engineer building multi-tenant SaaS platforms, data pipelines and systems integrations.',
  },

  profile: {
    name: 'Raed Charrad',
    role: 'Software Engineer & Co-founder',
    location: 'Aouina, Tunis',
    focuses: ['Full Stack', 'Data Engineering', 'Systems Integration'],
    tagline:
      'I build the pipeline end to end — the form someone fills in, the workflow it triggers, the systems it has to talk to, and the warehouse and dashboards it lands in.',
    bio: [
      'I am a software engineer at NeoLedge, working across the full stack with a second specialism in data engineering. Most of my time goes to NeoForm — a multi-tenant SaaS platform for building intelligent forms and orchestrating the workflows behind them — and to the integration connectors that wire our document platform into systems it was never designed to meet.',
      'On the backend that means .NET with CQRS, Entity Framework Core, .NET Aspire and Docker, and a lot of care about what happens when a remote service is slow, down, or lying to you. On the frontend, Vue 3 and TypeScript, including drag-and-drop designers where the hard part is making a genuinely complex builder feel obvious to someone who has never seen it before.',
      'The other half of my work is data: ETL pipelines, star-schema warehouses, Power BI dashboards, and the models that sit on top of them. I trained at ISET Bizerte and am completing my engineering degree at ESPRIT on an apprenticeship track.',
      'Alongside that I co-founded UltimateIT, a software studio building web, mobile and DevOps work for clients in Germany. We ship ordering and delivery platforms that real restaurants take real money through, which is a very direct way to learn what "production" means.',
    ],
  },

  pipeline: {
    form: { short: 'Form', label: 'Form', note: 'Vue 3 drag-and-drop designer' },
    flow: { short: 'Flow', label: 'Workflow', note: 'Elsa orchestration engine' },
    link: { short: 'Link', label: 'Connector', note: 'Resilient .NET integration layer' },
    etl: { short: 'ETL', label: 'ETL', note: 'SSIS and Pandas pipelines' },
    dwh: { short: 'DWH', label: 'Warehouse', note: 'Star schema on SQL Server' },
    model: { short: 'Model', label: 'Model', note: 'Scikit-learn and XGBoost' },
    bi: { short: 'BI', label: 'Insight', note: 'Power BI dashboards' },
  },

  metrics: {
    years: 'Years engineering at NeoLedge',
    records: 'Records modelled in a warehouse',
    models: 'ML models shipped',
    products: 'Products live at UltimateIT',
  },

  now: {
    fast: {
      title: 'Elise Connector — FAST',
      state: 'In production',
      blurb:
        'Extending the FAST integration: e-signature circuits, return tasks and tracking sheets, freshly migrated to .NET 10.',
    },
    neoform: {
      title: 'NeoForm Studio',
      state: 'Shipping',
      blurb:
        'The deployable side of NeoForm: configuration, schema and external-source mapping packaged so a tenant can be stood up as one artefact.',
    },
    ultimateit: {
      title: 'UltimateIT',
      state: 'Co-founder',
      blurb:
        'Co-founding a software studio: ordering and delivery platforms for restaurants in Germany, plus web, mobile and DevOps consulting.',
    },
    migration: {
      title: 'Legacy form migration',
      state: 'In progress',
      blurb:
        'Tooling that reads legacy Elise field dictionaries and grid structures and emits the NeoForm equivalent, so customers migrate without re-authoring every form by hand.',
    },
  },

  experience: {
    ultimateit: {
      company: 'UltimateIT',
      role: 'Co-founder',
      team: null,
      contract: 'ultimateit.io',
      summary:
        'Co-founded a software studio — "bridging ideas with technology" — serving clients in Germany.',
      highlights: [
        'Build and ship web applications, mobile applications and websites for client businesses.',
        'Delivered a restaurant ordering and payment platform now live for three separate restaurants.',
        'Built Jibly Taw, a food-delivery marketplace connecting customers, restaurants and doorstep delivery.',
        'Offer DevOps consulting and SEO alongside delivery work.',
        'Co-founder responsibilities beyond code: scoping client work, technical decisions and delivery.',
      ],
    },
    neoledge: {
      company: 'NeoLedge',
      role: 'Integration Engineer',
      team: 'MEA — Product Integration',
      contract: 'Apprenticeship',
      summary: 'Full Stack Vue.js / .NET development inside the product integration team.',
      highlights: [
        'Full Stack development of NeoForm, a multi-tenant SaaS platform for intelligent form creation and workflow orchestration.',
        'Designed backend features with .NET, CQRS, Entity Framework Core, .NET Aspire and Docker.',
        'Built advanced interfaces with Vue 3, TypeScript and drag-and-drop designers.',
        'Integrated the Elsa workflow engine.',
        'Built automatic form generation powered by LLMs.',
        'Lead developer on the FAST integration connector, and contributed components to the shared Vue 3 component library.',
        'Worked in Agile Scrum with Azure DevOps.',
      ],
    },
    station: {
      company: 'Station NeoLedge',
      role: 'Final-Year Engineering Internship',
      team: null,
      contract: 'PFE Internship',
      summary:
        'Built a mobile client for the Elise ECM platform, plus the PDF rendering library behind it.',
      highlights: [
        'Developed a mobile application for Elise ECM.',
        'Created neo-pdf-viewer, a reusable viewer library built on PDF.js.',
        'Set up CI/CD and worked in an Agile team.',
      ],
    },
  },

  projects: {
    fast: {
      title: 'Elise Connector — FAST',
      kind: 'Systems integration · Lead developer',
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
    },
    neoform: {
      title: 'NeoForm',
      kind: 'Multi-tenant SaaS platform',
      description:
        'The platform I spend most of my time on: a multi-tenant SaaS product for building intelligent forms and orchestrating the workflows they trigger. My work spans the .NET backend and the Vue 3 designer surface.',
      highlights: [
        'Backend built on .NET with CQRS, Entity Framework Core and .NET Aspire, containerised with Docker.',
        'Drag-and-drop form designer in Vue 3 and TypeScript, where the design problem is hiding the complexity rather than exposing it.',
        'Elsa workflow engine integrated so a submitted form can drive a real business process.',
        'LLM-backed form generation: describe the form you need and get a working draft.',
        'NeoForm Studio packages configuration, database schema and external-source mapping so a tenant deploys as a single artefact.',
      ],
    },
    ordering: {
      title: 'Restaurant Ordering Platform',
      kind: 'UltimateIT · Product',
      description:
        'A white-label ordering and payment platform for restaurants: customers browse the menu, place an order and pay securely from their phone, with no app to install. Built once at UltimateIT and now running live for three separate restaurants in Germany.',
      highlights: [
        'Menu browsing, order placement and secure mobile payment as a single flow on the customer’s own phone.',
        'Deployed per restaurant under its own brand and domain, so each venue keeps its own identity.',
        'Handling real orders and real money for paying venues.',
      ],
    },
    airline: {
      title: 'Airline Data Warehouse & Analytics Platform',
      kind: 'Data engineering · Machine learning',
      description:
        'An end-to-end decision-support platform analysing air-passenger satisfaction and loyalty across roughly 130,000 records — from raw extract through to dashboards and predictive models.',
      highlights: [
        'ETL pipeline in SSIS and Python (Pandas), with cleaning and a star-schema warehouse on SQL Server: 5 dimensions using SCD Type 2, plus 2 fact tables.',
        'Interactive Power BI dashboards tracking KPIs, customer satisfaction, delays and passenger segmentation.',
        'Over 10 machine-learning models: satisfaction prediction (Logistic Regression, Random Forest, XGBoost), churn prediction, CLV estimation, RFM / K-Means segmentation and TF-IDF text analysis.',
        'A React + FastAPI web application with an AI chatbot, DeepFace recognition, OTP authentication, bcrypt and MongoDB.',
      ],
    },
    jibly: {
      title: 'Jibly Taw',
      kind: 'UltimateIT · Marketplace',
      description:
        'A food-delivery marketplace that connects customers with restaurants, takes the order and gets it to the door. Three coordinated roles in one platform, with the driver’s position tracked live on a map. Built and operated at UltimateIT.',
      highlights: [
        'Separate experiences for customer, driver and administrator, kept in step with each other.',
        'Real-time order tracking on a live map, so the customer can see where their food actually is.',
        'Delivered as a PWA, so it installs from the browser with no app-store round trip.',
      ],
    },
    neolibrary: {
      title: 'NeoLibrary',
      kind: 'Design system · Contributor',
      description:
        'The team’s shared Vue 3 component library — an opinionated PrimeVue 4 abstraction layer of 35 enterprise components with Tailwind styling, full i18n, a Blockly visual-scripting surface and a schema-driven form renderer. I contribute components and fixes; it is published as a restricted npm package and documented in Storybook.',
      highlights: [],
    },
    migration: {
      title: 'Legacy Form Migration Tooling',
      kind: 'Internal tooling',
      description:
        'A generator that reads legacy field dictionaries and grid structures — XML definitions plus CSV layout exports — and emits the spreadsheet that drives a NeoForm build, so a migrating customer keeps their form estate without re-authoring it by hand. Written against the standard library only, so it runs anywhere with no install step.',
      highlights: [],
    },
    pdfviewer: {
      title: 'neo-pdf-viewer',
      kind: 'Library',
      description:
        'A reusable PDF viewing library built on PDF.js, created during my final-year internship to power document preview inside the Elise ECM mobile app.',
      highlights: [],
    },
  },

  skillGroups: {
    languages: 'Languages',
    backend: 'Backend',
    frontend: 'Frontend',
    integration: 'Integration',
    data: 'Data & AI',
    databases: 'Databases',
    delivery: 'Delivery',
  },

  education: {
    esprit: { school: 'ESPRIT', detail: 'Engineering degree · apprenticeship track' },
    iset: { school: 'ISET Bizerte', detail: null },
  },

  spokenLanguages: {
    arabic: { name: 'Arabic', level: 'Native' },
    french: { name: 'French', level: 'Fluent' },
    english: { name: 'English', level: 'Intermediate' },
  },

  previews: {
    fast: 'A document travelling from FAST into Elise, with a retry on failure and a signing circuit completing',
    neoform: 'Form fields dropping into a designer canvas, then triggering a workflow',
    ordering: 'A phone browsing a menu, filling a basket and confirming payment',
    airline: 'Rows flowing through ETL into a star schema, feeding a dashboard of bars',
    jibly: 'A driver tracked live along a route from restaurant to customer',
    neolibrary: 'A grid of shared components lighting up in sequence',
    migration: 'Legacy XML and CSV definitions converted row by row into a spreadsheet',
    pdf: 'Pages rendering progressively as a document is scrolled',
  },
}
