/* ============================================================================
   CORE — everything that is NOT language.
   ----------------------------------------------------------------------------
   Structure, identifiers, dates, URLs, numbers, and technology names. These are
   identical in every language, so they live here once instead of being copied
   into four locale files where they would drift apart.

   The prose lives in src/locales/<code>.js, keyed by the `id` fields below.
   src/content.js merges the two.

   TO ADD A PROJECT: add an entry here, then add its strings to all four locale
   files. A missing translation falls back to English rather than disappearing.
   ========================================================================== */

export const identity = {
  // `name` is deliberately NOT here: it belongs to each locale. Written in
  // Arabic the name is رائد شراد, not a transliteration of the Latin form, so
  // treating it as language-neutral would have shown Latin script on an
  // otherwise Arabic page. See profile.name in src/locales/*.js.
  email: 'raidcharrad@gmail.com',
  phone: '+216 90 425 800',

  // Framed portrait beside the hero text; null removes the frame. Paths are
  // resolved through src/asset.js against the site's base URL.
  portrait: '/portrait.jpg',

  // Put a PDF in /public and point here to turn the top-bar button into a
  // download. It carried a phone number, which is why it is not published.
  resume: null,

  links: [
    { id: 'email', href: 'mailto:raidcharrad@gmail.com' },
    { id: 'github', href: 'https://github.com/raed-charrad' },
    { id: 'linkedin', href: 'https://www.linkedin.com/in/raed-charrad/' },
  ],
}

/** Order matters: it is the direction data actually travels. */
export const pipeline = [
  { id: 'form' },
  { id: 'flow' },
  { id: 'link' },
  { id: 'etl' },
  { id: 'dwh' },
  { id: 'model' },
  { id: 'bi' },
]

/** Figures only. Every one must be defensible in an interview. */
export const metrics = [
  { id: 'years', value: 3, suffix: '' },
  { id: 'records', value: 130, suffix: 'K' },
  { id: 'models', value: 10, suffix: '+' },
  { id: 'products', value: 4, suffix: '' },
]

export const now = [{ id: 'fast' }, { id: 'neoform' }, { id: 'ultimateit' }, { id: 'migration' }]

export const experience = [
  {
    id: 'ultimateit',
    start: '2025', // CHECK your real founding month
    end: null, // null renders as "Present" in the active language
    tech: ['Laravel', 'Vue.js', 'PWA', 'Leaflet'],
  },
  {
    id: 'neoledge',
    start: 'Sept 2023',
    end: null,
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
    id: 'station',
    start: 'Feb 2023',
    end: 'May 2023',
    tech: ['Vue 3', 'TypeScript', 'Ionic', 'Capacitor', 'PDF.js'],
  },
]

export const projects = [
  {
    id: 'fast',
    year: '2025 — 2026',
    featured: true,
    preview: 'fast',
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
    id: 'neoform',
    year: '2023 — 2026',
    featured: true,
    preview: 'neoform',
    tech: ['.NET', 'CQRS', 'EF Core', '.NET Aspire', 'Vue 3', 'TypeScript', 'Elsa', 'Docker'],
    href: null,
  },
  {
    id: 'ordering',
    year: '2025 — 2026', // CHECK confirm the range
    featured: true,
    preview: 'ordering',
    tech: ['Laravel', 'Vue.js'],
    href: null,
    // Venue names are proper nouns, so they stay here rather than being
    // "translated" into four identical copies.
    links: [
      { label: 'Pizzeria Bellissima', href: 'https://app.pizzabellissima.de/' },
      { label: 'Da Cono Cimino 48', href: 'https://app.daconocimino.de/' },
      { label: 'Ristorante Lastalla', href: 'https://app.ristorantelastalla.de/' },
    ],
  },
  {
    id: 'airline',
    year: '2026', // CHECK confirm this year
    featured: true,
    preview: 'airline',
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
    id: 'jibly',
    year: '2025 — 2026',
    featured: false,
    preview: 'jibly',
    tech: ['Laravel', 'Vue.js', 'PWA', 'Leaflet'],
    href: 'https://www.jiblytaw.com/',
  },
  {
    // CHECK git history shows 7 of ~192 commits as yours, with Yassine SBOUI as
    // primary author, so every locale words this as a contribution. Change it
    // only if you owned more of it than the commits show.
    id: 'neolibrary',
    year: '2025 — 2026',
    featured: false,
    preview: 'neolibrary',
    tech: ['Vue 3', 'TypeScript', 'PrimeVue 4', 'Tailwind', 'Storybook', 'Vitest', 'Blockly'],
    href: null,
  },
  {
    id: 'migration',
    year: '2026',
    featured: false,
    preview: 'migration',
    tech: ['Python', 'XML', 'CSV', 'OpenXML'],
    href: null,
  },
  {
    id: 'pdfviewer',
    year: '2023',
    featured: false,
    preview: 'pdf',
    tech: ['TypeScript', 'PDF.js', 'Vue 3'],
    href: null,
  },
]

/** Technology names are proper nouns; only the group labels get translated. */
export const skillGroups = [
  {
    id: 'languages',
    // CHECK the CV's PDF text layer dropped a "#" — assuming C# and C.
    items: ['C#', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'PHP', 'Kotlin', 'Dart', 'C'],
  },
  {
    id: 'backend',
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
    id: 'frontend',
    items: ['Vue 3', 'React', 'Angular', 'PrimeVue', 'Tailwind', 'Ionic', 'Flutter', 'PWA'],
  },
  {
    id: 'integration',
    items: ['REST', 'SOAP', 'Polly', 'Autofac', 'Serilog', 'Data Protection', 'OpenID Connect'],
  },
  {
    id: 'data',
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
  { id: 'databases', items: ['SQL Server', 'MongoDB', 'MySQL', 'Oracle'] },
  {
    id: 'delivery',
    items: ['Docker', 'Azure DevOps', 'Git', 'Agile Scrum', 'Storybook', 'Vitest', 'NUnit', 'SonarQube'],
  },
]

export const education = [
  { id: 'esprit', period: 'Sept 2023 — 2026' },
  { id: 'iset', period: '2020 — 2023' },
]

export const spokenLanguages = [{ id: 'arabic' }, { id: 'french' }, { id: 'english' }]

/** Section order. `id` must match the section ids rendered in App.jsx. */
export const nav = [
  { id: 'now' },
  { id: 'about' },
  { id: 'work' },
  { id: 'experience' },
  { id: 'stack' },
  { id: 'contact' },
]
