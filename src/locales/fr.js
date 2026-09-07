/* ============================================================================
   FRANÇAIS
   ----------------------------------------------------------------------------
   Traduit depuis en.js. Toute clé absente ici retombe sur l'anglais.
   Les noms propres (NeoLedge, NeoForm, FAST, Elise, Power BI…) ne se
   traduisent pas. Les intitulés de poste suivent l'usage du CV.
   ========================================================================== */

export default {
  meta: { code: 'fr', label: 'Français', short: 'FR', dir: 'ltr' },

  ui: {
    skipToContent: 'Aller au contenu',
    contact: 'Contact',
    cv: 'CV',
    seeWork: 'Voir les projets',
    workingIn: 'Spécialisé en',
    present: 'Aujourd’hui',
    current: 'En cours',
    viewProject: 'Voir le projet',
    documentPipeline: 'Chaîne documentaire',
    education: 'Formation',
    languagesLabel: 'Langues',
    phone: 'Téléphone',
    location: 'Localisation',
    backToTop: 'Haut de page',
    sectionNav: 'Navigation par section',
    sections: 'Sections',
    language: 'Langue',
    showLess: 'Réduire',
    showMore: (n) => `Voir ${n} de plus`,
    contactLead: 'Construisons quelque chose',
    contactLeadAccent: 'qui mérite d’être livré.',
    contactNote:
      'Ouvert aux postes d’ingénierie et aux collaborations en full stack, data engineering et intégration de systèmes. L’e-mail est le moyen le plus rapide de me joindre.',
    navLabels: {
      now: 'Actuel',
      about: 'À propos',
      work: 'Projets',
      experience: 'Expérience',
      stack: 'Stack',
      contact: 'Contact',
    },
    sectionTitles: {
      now: 'Ce que je construis en ce moment',
      about: 'À propos',
      work: 'Projets sélectionnés',
      experience: 'Expérience',
      stack: 'Stack technique',
      contact: 'Contact',
    },
    linkLabels: { email: 'E-mail', github: 'GitHub', linkedin: 'LinkedIn' },
    documentTitle: 'Raed Charrad — Ingénieur logiciel',
    documentDescription:
      'Ingénieur logiciel : plateformes SaaS multi-tenant, pipelines de données et intégration de systèmes.',
  },

  profile: {
    name: 'Raed Charrad',
    role: 'Ingénieur logiciel & co-fondateur',
    location: 'Aouina, Tunis',
    focuses: ['Full Stack', 'Data Engineering', 'Intégration de systèmes'],
    tagline:
      'Je construis la chaîne de bout en bout — le formulaire que l’on remplit, le workflow qu’il déclenche, les systèmes avec lesquels il doit dialoguer, puis l’entrepôt de données et les tableaux de bord où tout aboutit.',
    bio: [
      'Je suis ingénieur logiciel chez NeoLedge, full stack, avec une seconde spécialisation en data engineering. L’essentiel de mon temps va à NeoForm — une plateforme SaaS multi-tenant de création de formulaires intelligents et d’orchestration des workflows associés — et aux connecteurs d’intégration qui relient notre plateforme documentaire à des systèmes qui n’ont jamais été conçus pour se rencontrer.',
      'Côté backend, cela signifie .NET avec CQRS, Entity Framework Core, .NET Aspire et Docker, et beaucoup d’attention à ce qui se passe quand un service distant est lent, indisponible, ou vous ment. Côté frontend, Vue 3 et TypeScript, y compris des concepteurs drag-and-drop où la vraie difficulté est de rendre évident, pour quelqu’un qui les découvre, un outil réellement complexe.',
      'L’autre moitié de mon travail, c’est la donnée : pipelines ETL, entrepôts en schéma en étoile, tableaux de bord Power BI, et les modèles qui s’appuient dessus. J’ai été formé à l’ISET Bizerte et je termine mon diplôme d’ingénieur à ESPRIT en alternance.',
      'En parallèle, j’ai co-fondé UltimateIT, un studio logiciel qui réalise des projets web, mobile et DevOps pour des clients en Allemagne. Nous livrons des plateformes de commande et de livraison par lesquelles de vrais restaurants encaissent de vrais paiements — une façon très directe d’apprendre ce que « production » veut dire.',
    ],
  },

  pipeline: {
    form: { short: 'Form', label: 'Formulaire', note: 'Concepteur drag-and-drop Vue 3' },
    flow: { short: 'Flux', label: 'Workflow', note: 'Moteur d’orchestration Elsa' },
    link: { short: 'Lien', label: 'Connecteur', note: 'Couche d’intégration .NET résiliente' },
    etl: { short: 'ETL', label: 'ETL', note: 'Pipelines SSIS et Pandas' },
    dwh: { short: 'DWH', label: 'Entrepôt', note: 'Schéma en étoile sur SQL Server' },
    model: { short: 'Modèle', label: 'Modèle', note: 'Scikit-learn et XGBoost' },
    bi: { short: 'BI', label: 'Analyse', note: 'Tableaux de bord Power BI' },
  },

  metrics: {
    years: 'Ans d’ingénierie chez NeoLedge',
    records: 'Enregistrements modélisés en entrepôt',
    models: 'Modèles de ML livrés',
    products: 'Produits en ligne chez UltimateIT',
  },

  now: {
    fast: {
      title: 'Connecteur Elise — FAST',
      state: 'En production',
      blurb:
        'Extension de l’intégration FAST : circuits de signature électronique, tâches de retour et fiches de suivi, tout juste migrés vers .NET 10.',
    },
    neoform: {
      title: 'NeoForm Studio',
      state: 'En livraison',
      blurb:
        'Le versant déployable de NeoForm : configuration, schéma et mapping des sources externes empaquetés pour qu’un tenant se déploie comme un seul artefact.',
    },
    ultimateit: {
      title: 'UltimateIT',
      state: 'Co-fondateur',
      blurb:
        'Co-fondation d’un studio logiciel : plateformes de commande et de livraison pour des restaurants en Allemagne, plus du conseil web, mobile et DevOps.',
    },
    migration: {
      title: 'Migration des formulaires',
      state: 'En cours',
      blurb:
        'Outillage qui lit les dictionnaires de champs et les structures de grille de l’ancien Elise et produit l’équivalent NeoForm, pour que les clients migrent sans ressaisir chaque formulaire à la main.',
    },
  },

  experience: {
    ultimateit: {
      company: 'UltimateIT',
      role: 'Co-fondateur',
      team: null,
      contract: 'ultimateit.io',
      summary:
        'Co-fondation d’un studio logiciel — « relier les idées à la technologie » — au service de clients en Allemagne.',
      highlights: [
        'Conception et livraison d’applications web, d’applications mobiles et de sites pour des entreprises clientes.',
        'Livraison d’une plateforme de commande et de paiement pour restaurants, aujourd’hui en ligne pour trois établissements distincts.',
        'Développement de Jibly Taw, une marketplace de livraison de repas reliant clients, restaurants et livraison à domicile.',
        'Conseil DevOps et SEO en complément des prestations de développement.',
        'Responsabilités de co-fondateur au-delà du code : cadrage des projets clients, décisions techniques et livraison.',
      ],
    },
    neoledge: {
      company: 'NeoLedge',
      role: 'Ingénieur intégration',
      team: 'MEA — Intégration produit',
      contract: 'Alternance',
      summary: 'Développement full stack Vue.js / .NET au sein de l’équipe d’intégration produit.',
      highlights: [
        'Développement full stack de NeoForm, plateforme SaaS multi-tenant de création de formulaires intelligents et d’orchestration de workflows.',
        'Conception de fonctionnalités backend avec .NET, CQRS, Entity Framework Core, .NET Aspire et Docker.',
        'Réalisation d’interfaces avancées en Vue 3 et TypeScript, avec concepteurs drag-and-drop.',
        'Intégration du moteur de workflows Elsa.',
        'Développement de la génération automatique de formulaires par LLM.',
        'Développeur principal du connecteur d’intégration FAST, et contributions à la bibliothèque de composants Vue 3 partagée.',
        'Travail en Agile Scrum avec Azure DevOps.',
      ],
    },
    station: {
      company: 'Station NeoLedge',
      role: 'Stage de fin d’études',
      team: null,
      contract: 'Stage PFE',
      summary:
        'Développement d’un client mobile pour la plateforme ECM Elise, et de la bibliothèque de rendu PDF qui l’alimente.',
      highlights: [
        'Développement d’une application mobile pour Elise ECM.',
        'Création de neo-pdf-viewer, bibliothèque de visualisation réutilisable basée sur PDF.js.',
        'Mise en place de la CI/CD et travail en équipe Agile.',
      ],
    },
  },

  projects: {
    fast: {
      title: 'Connecteur Elise — FAST',
      kind: 'Intégration de systèmes · Développeur principal',
      description:
        'Un connecteur en production entre la plateforme d’échange dématérialisé FAST et l’ECM Elise. Il dépose les documents et leurs pièces jointes dans Elise, pilote les circuits de signature électronique et maintient les deux côtés synchronisés quand l’un devient indisponible. J’en suis le développeur principal.',
      highlights: [
        'API ASP.NET Core et front-end CustomAction Elise, découpés en projets API, services, providers et façade SOAP, avec Autofac pour l’injection de dépendances et Serilog pour les logs structurés.',
        'HTTP résilient de bout en bout : politiques de retry Polly autour de chaque appel sortant, avec journalisation des tentatives pour qu’un échec reste diagnosticable au lieu d’être silencieux.',
        'Aucun identifiant en clair — un service hébergé chiffre les secrets de configuration au démarrage via ASP.NET Data Protection, avec les helpers de déchiffrement correspondants côté automate.',
        'Gestion des pièces jointes à l’épreuve des données réelles : documents compressés pour le transfert, avec résolution des conflits de noms et des doublons plutôt qu’un écrasement.',
        'Pilotage des circuits d’approbation de bout en bout — routage de signature, création des tâches de retour et mise à jour des fiches de suivi — avec télémétrie Application Insights.',
        'Migration complète de la solution de .NET 8 vers .NET 10, et couverture de la couche providers avec NUnit et Moq.',
      ],
    },
    neoform: {
      title: 'NeoForm',
      kind: 'Plateforme SaaS multi-tenant',
      description:
        'La plateforme sur laquelle je passe le plus de temps : un produit SaaS multi-tenant pour créer des formulaires intelligents et orchestrer les workflows qu’ils déclenchent. Mon travail couvre le backend .NET et la surface de conception en Vue 3.',
      highlights: [
        'Backend en .NET avec CQRS, Entity Framework Core et .NET Aspire, conteneurisé avec Docker.',
        'Concepteur de formulaires drag-and-drop en Vue 3 et TypeScript, où le vrai enjeu de design est de masquer la complexité plutôt que de l’exposer.',
        'Intégration du moteur de workflows Elsa pour qu’un formulaire soumis pilote un véritable processus métier.',
        'Génération de formulaires par LLM : décrivez le formulaire voulu, obtenez un brouillon fonctionnel.',
        'NeoForm Studio empaquette configuration, schéma de base de données et mapping des sources externes pour qu’un tenant se déploie en un seul artefact.',
      ],
    },
    ordering: {
      title: 'Plateforme de commande pour restaurants',
      kind: 'UltimateIT · Produit',
      description:
        'Une plateforme de commande et de paiement en marque blanche pour restaurants : le client parcourt la carte, commande et paie en toute sécurité depuis son téléphone, sans application à installer. Conçue une fois chez UltimateIT, elle tourne aujourd’hui pour trois restaurants distincts en Allemagne.',
      highlights: [
        'Consultation de la carte, passage de commande et paiement mobile sécurisé en un seul parcours, sur le téléphone du client.',
        'Déploiement par restaurant sous sa propre marque et son propre domaine, pour que chaque établissement garde son identité.',
        'Traitement de vraies commandes et de vrais paiements pour des établissements clients.',
      ],
    },
    airline: {
      title: 'Entrepôt de données & plateforme analytique aérienne',
      kind: 'Data engineering · Machine learning',
      description:
        'Une plateforme décisionnelle de bout en bout analysant la satisfaction et la fidélisation des passagers aériens sur environ 130 000 enregistrements — de l’extraction brute jusqu’aux tableaux de bord et aux modèles prédictifs.',
      highlights: [
        'Pipeline ETL en SSIS et Python (Pandas), avec nettoyage et entrepôt en schéma en étoile sur SQL Server : 5 dimensions en SCD Type 2 et 2 tables de faits.',
        'Tableaux de bord Power BI interactifs suivant les KPI, la satisfaction client, les retards et la segmentation des passagers.',
        'Plus de 10 modèles de machine learning : prédiction de la satisfaction (régression logistique, Random Forest, XGBoost), prédiction du churn, estimation de la CLV, segmentation RFM / K-Means et analyse de texte TF-IDF.',
        'Application web React + FastAPI intégrant un chatbot IA, la reconnaissance DeepFace, l’authentification OTP, bcrypt et MongoDB.',
      ],
    },
    jibly: {
      title: 'Jibly Taw',
      kind: 'UltimateIT · Marketplace',
      description:
        'Une marketplace de livraison de repas qui met en relation clients et restaurants, prend la commande et l’amène jusqu’à la porte. Trois rôles coordonnés dans une seule plateforme, avec la position du livreur suivie en direct sur une carte. Conçue et exploitée chez UltimateIT.',
      highlights: [
        'Trois expériences distinctes — client, livreur et administrateur — maintenues cohérentes entre elles.',
        'Suivi de commande en temps réel sur une carte, pour que le client voie où se trouve réellement son repas.',
        'Livrée en PWA : installation depuis le navigateur, sans passer par un store.',
      ],
    },
    neolibrary: {
      title: 'NeoLibrary',
      kind: 'Design system · Contributeur',
      description:
        'La bibliothèque de composants Vue 3 partagée de l’équipe — une couche d’abstraction opiniâtre au-dessus de PrimeVue 4, regroupant 35 composants d’entreprise avec styles Tailwind, internationalisation complète, une surface de scripting visuel Blockly et un moteur de rendu de formulaires piloté par schéma. J’y contribue des composants et des correctifs ; elle est publiée en paquet npm restreint et documentée dans Storybook.',
      highlights: [],
    },
    migration: {
      title: 'Outillage de migration des formulaires',
      kind: 'Outillage interne',
      description:
        'Un générateur qui lit les dictionnaires de champs et les structures de grille héritées — définitions XML et exports CSV de mise en page — et produit le classeur qui pilote une construction NeoForm, pour qu’un client en migration conserve son parc de formulaires sans le ressaisir. Écrit uniquement avec la bibliothèque standard, donc exécutable partout sans installation.',
      highlights: [],
    },
    pdfviewer: {
      title: 'neo-pdf-viewer',
      kind: 'Bibliothèque',
      description:
        'Une bibliothèque de visualisation PDF réutilisable basée sur PDF.js, créée pendant mon stage de fin d’études pour alimenter la prévisualisation de documents dans l’application mobile Elise ECM.',
      highlights: [],
    },
  },

  skillGroups: {
    languages: 'Langages',
    backend: 'Backend',
    frontend: 'Frontend',
    integration: 'Intégration',
    data: 'Data & IA',
    databases: 'Bases de données',
    delivery: 'Livraison',
  },

  education: {
    esprit: { school: 'ESPRIT', detail: 'Diplôme d’ingénieur · en alternance' },
    iset: { school: 'ISET Bizerte', detail: null },
  },

  spokenLanguages: {
    arabic: { name: 'Arabe', level: 'Langue maternelle' },
    french: { name: 'Français', level: 'Courant' },
    english: { name: 'Anglais', level: 'Intermédiaire' },
  },

  previews: {
    fast: 'Un document circulant de FAST vers Elise, avec un retry en cas d’échec et un circuit de signature qui se complète',
    neoform: 'Des champs de formulaire déposés sur un canevas de conception, déclenchant ensuite un workflow',
    ordering: 'Un téléphone parcourant une carte, remplissant un panier et confirmant le paiement',
    airline: 'Des lignes traversant un ETL vers un schéma en étoile, alimentant un tableau de bord',
    jibly: 'Un livreur suivi en direct sur un trajet du restaurant jusqu’au client',
    neolibrary: 'Une grille de composants partagés s’allumant en séquence',
    migration: 'Des définitions XML et CSV héritées converties ligne par ligne en classeur',
    pdf: 'Des pages qui s’affichent progressivement au fil du défilement',
  },
}
