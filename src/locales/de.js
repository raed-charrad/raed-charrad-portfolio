/* ============================================================================
   DEUTSCH
   ----------------------------------------------------------------------------
   Aus en.js übersetzt. Fehlende Schlüssel fallen auf Englisch zurück.
   Eigennamen (NeoLedge, NeoForm, FAST, Elise, Power BI …) bleiben unverändert.

   HINWEIS: Der Lebenslauf führt kein Deutsch unter den Sprachkenntnissen auf.
   Diese Fassung existiert für die UltimateIT-Kundschaft in Deutschland — wer
   sie liest, könnte annehmen, dass du fließend Deutsch sprichst.
   ========================================================================== */

export default {
  meta: { code: 'de', label: 'Deutsch', short: 'DE', dir: 'ltr' },

  ui: {
    skipToContent: 'Zum Inhalt springen',
    contact: 'Kontakt',
    cv: 'Lebenslauf',
    seeWork: 'Projekte ansehen',
    workingIn: 'Schwerpunkt',
    present: 'Heute',
    current: 'Aktuell',
    viewProject: 'Projekt ansehen',
    documentPipeline: 'Dokumenten-Pipeline',
    education: 'Ausbildung',
    languagesLabel: 'Sprachen',
    phone: 'Telefon',
    location: 'Standort',
    backToTop: 'Nach oben',
    sectionNav: 'Abschnittsnavigation',
    sections: 'Abschnitte',
    language: 'Sprache',
    showLess: 'Weniger anzeigen',
    showMore: (n) => `${n} weitere anzeigen`,
    contactLead: 'Bauen wir etwas,',
    contactLeadAccent: 'das es wert ist.',
    contactNote:
      'Offen für Engineering-Rollen und Kooperationen in Full Stack, Data Engineering und Systemintegration. Per E-Mail erreichst du mich am schnellsten.',
    navLabels: {
      now: 'Aktuell',
      about: 'Über mich',
      work: 'Projekte',
      experience: 'Erfahrung',
      stack: 'Stack',
      contact: 'Kontakt',
    },
    sectionTitles: {
      now: 'Woran ich gerade arbeite',
      about: 'Über mich',
      work: 'Ausgewählte Projekte',
      experience: 'Erfahrung',
      stack: 'Technologie-Stack',
      contact: 'Kontakt',
    },
    linkLabels: { email: 'E-Mail', github: 'GitHub', linkedin: 'LinkedIn' },
    documentTitle: 'Raed Charrad — Software-Entwickler',
    documentDescription:
      'Software-Entwickler für mandantenfähige SaaS-Plattformen, Datenpipelines und Systemintegration.',
  },

  profile: {
    name: 'Raed Charrad',
    role: 'Software-Entwickler & Mitgründer',
    location: 'Aouina, Tunis',
    focuses: ['Full Stack', 'Data Engineering', 'Systemintegration'],
    tagline:
      'Ich baue die Kette von Anfang bis Ende — das Formular, das jemand ausfüllt, den Workflow, den es auslöst, die Systeme, mit denen es sprechen muss, und das Data Warehouse samt Dashboards, in denen alles landet.',
    bio: [
      'Ich bin Software-Entwickler bei NeoLedge, arbeite über den gesamten Stack und habe einen zweiten Schwerpunkt im Data Engineering. Die meiste Zeit fließt in NeoForm — eine mandantenfähige SaaS-Plattform für intelligente Formulare und die Orchestrierung der dahinterliegenden Workflows — und in die Integrationskonnektoren, die unsere Dokumentenplattform mit Systemen verbinden, die nie dafür gedacht waren.',
      'Im Backend heißt das .NET mit CQRS, Entity Framework Core, .NET Aspire und Docker — und viel Aufmerksamkeit dafür, was passiert, wenn ein entfernter Dienst langsam ist, ausfällt oder falsche Antworten liefert. Im Frontend Vue 3 und TypeScript, samt Drag-and-drop-Designern, bei denen die eigentliche Aufgabe darin besteht, ein wirklich komplexes Werkzeug für jemanden selbsterklärend zu machen, der es zum ersten Mal sieht.',
      'Die andere Hälfte meiner Arbeit sind Daten: ETL-Pipelines, Star-Schema-Warehouses, Power-BI-Dashboards und die Modelle darauf. Ausgebildet wurde ich am ISET Bizerte; mein Ingenieurstudium schließe ich derzeit dual an der ESPRIT ab.',
      'Daneben habe ich UltimateIT mitgegründet, ein Software-Studio für Web-, Mobile- und DevOps-Projekte mit Kunden in Deutschland. Wir liefern Bestell- und Lieferplattformen, über die echte Restaurants echtes Geld einnehmen — ein sehr direkter Weg zu lernen, was „Produktion" bedeutet.',
    ],
  },

  pipeline: {
    form: { short: 'Form', label: 'Formular', note: 'Drag-and-drop-Designer in Vue 3' },
    flow: { short: 'Flow', label: 'Workflow', note: 'Orchestrierung mit Elsa' },
    link: { short: 'Link', label: 'Konnektor', note: 'Robuste .NET-Integrationsschicht' },
    etl: { short: 'ETL', label: 'ETL', note: 'Pipelines mit SSIS und Pandas' },
    dwh: { short: 'DWH', label: 'Warehouse', note: 'Star-Schema auf SQL Server' },
    model: { short: 'Modell', label: 'Modell', note: 'Scikit-learn und XGBoost' },
    bi: { short: 'BI', label: 'Auswertung', note: 'Power-BI-Dashboards' },
  },

  metrics: {
    years: 'Jahre Engineering bei NeoLedge',
    records: 'Datensätze im Warehouse modelliert',
    models: 'ML-Modelle ausgeliefert',
    products: 'Produkte live bei UltimateIT',
  },

  now: {
    fast: {
      title: 'Elise-Konnektor — FAST',
      state: 'In Produktion',
      blurb:
        'Ausbau der FAST-Integration: Signaturläufe, Rückläufer-Aufgaben und Laufzettel, frisch auf .NET 10 migriert.',
    },
    neoform: {
      title: 'NeoForm Studio',
      state: 'In Auslieferung',
      blurb:
        'Die auslieferbare Seite von NeoForm: Konfiguration, Schema und Mapping externer Quellen so gebündelt, dass ein Mandant als ein einziges Artefakt bereitgestellt wird.',
    },
    ultimateit: {
      title: 'UltimateIT',
      state: 'Mitgründer',
      blurb:
        'Mitgründung eines Software-Studios: Bestell- und Lieferplattformen für Restaurants in Deutschland, dazu Web-, Mobile- und DevOps-Beratung.',
    },
    migration: {
      title: 'Migration von Altformularen',
      state: 'In Arbeit',
      blurb:
        'Werkzeuge, die Feldverzeichnisse und Rasterstrukturen aus dem alten Elise lesen und das NeoForm-Äquivalent erzeugen, damit Kunden migrieren, ohne jedes Formular neu anzulegen.',
    },
  },

  experience: {
    ultimateit: {
      company: 'UltimateIT',
      role: 'Mitgründer',
      team: null,
      contract: 'ultimateit.io',
      summary:
        'Mitgründung eines Software-Studios — „Ideen mit Technologie verbinden" — für Kunden in Deutschland.',
      highlights: [
        'Entwicklung und Auslieferung von Web-Anwendungen, mobilen Anwendungen und Websites für Kundenunternehmen.',
        'Auslieferung einer Bestell- und Bezahlplattform für Restaurants, heute live bei drei verschiedenen Betrieben.',
        'Entwicklung von Jibly Taw, einem Lieferdienst-Marktplatz, der Kunden, Restaurants und Zustellung verbindet.',
        'DevOps-Beratung und SEO ergänzend zur Projektarbeit.',
        'Aufgaben als Mitgründer über den Code hinaus: Zuschnitt der Kundenprojekte, technische Entscheidungen und Auslieferung.',
      ],
    },
    neoledge: {
      company: 'NeoLedge',
      role: 'Integrationsentwickler',
      team: 'MEA — Produktintegration',
      contract: 'Duales Studium',
      summary: 'Full-Stack-Entwicklung mit Vue.js und .NET im Team für Produktintegration.',
      highlights: [
        'Full-Stack-Entwicklung von NeoForm, einer mandantenfähigen SaaS-Plattform für intelligente Formulare und Workflow-Orchestrierung.',
        'Entwurf von Backend-Funktionen mit .NET, CQRS, Entity Framework Core, .NET Aspire und Docker.',
        'Umsetzung fortgeschrittener Oberflächen mit Vue 3, TypeScript und Drag-and-drop-Designern.',
        'Integration der Workflow-Engine Elsa.',
        'Automatische Formularerzeugung auf Basis von LLMs entwickelt.',
        'Hauptentwickler des FAST-Integrationskonnektors und Beiträge zur gemeinsamen Vue-3-Komponentenbibliothek.',
        'Arbeit in Agile Scrum mit Azure DevOps.',
      ],
    },
    station: {
      company: 'Station NeoLedge',
      role: 'Abschlusspraktikum Ingenieurstudium',
      team: null,
      contract: 'Abschlusspraktikum',
      summary:
        'Entwicklung eines mobilen Clients für die ECM-Plattform Elise samt der dahinterliegenden PDF-Rendering-Bibliothek.',
      highlights: [
        'Entwicklung einer mobilen Anwendung für Elise ECM.',
        'Erstellung von neo-pdf-viewer, einer wiederverwendbaren Viewer-Bibliothek auf Basis von PDF.js.',
        'Aufbau von CI/CD und Arbeit in einem agilen Team.',
      ],
    },
  },

  projects: {
    fast: {
      title: 'Elise-Konnektor — FAST',
      kind: 'Systemintegration · Hauptentwickler',
      description:
        'Ein Produktionskonnektor zwischen der Austauschplattform FAST und dem ECM Elise. Er legt Dokumente samt Anhängen in Elise ab, steuert Signaturläufe und hält beide Seiten synchron, wenn eine davon ausfällt. Ich bin dessen Hauptentwickler.',
      highlights: [
        'ASP.NET-Core-API plus Elise-CustomAction-Frontend, aufgeteilt in API-, Service-, Provider- und SOAP-Fassaden-Projekte, mit Autofac für Dependency Injection und Serilog für strukturiertes Logging.',
        'Durchgehend robustes HTTP: Polly-Retry-Policies um jeden ausgehenden Aufruf, mit protokollierten Versuchen, damit ein Fehler diagnostizierbar bleibt statt unbemerkt zu verschwinden.',
        'Zugangsdaten liegen nie im Klartext — ein Hosted Service verschlüsselt Secrets beim Start über ASP.NET Data Protection, mit passenden Entschlüsselungs-Helfern auf der Automate-Seite.',
        'Anhangsverarbeitung, die echte Kundendaten übersteht: Dokumente werden für den Transfer gezippt, Namenskonflikte und Duplikate aufgelöst statt überschrieben.',
        'Steuert Genehmigungsläufe von Anfang bis Ende — Signatur-Routing, Anlegen von Rückläufer-Aufgaben und Aktualisierung der Laufzettel — mit Application-Insights-Telemetrie darüber.',
        'Migration der gesamten Lösung von .NET 8 auf .NET 10 und Testabdeckung der Provider-Schicht mit NUnit und Moq.',
      ],
    },
    neoform: {
      title: 'NeoForm',
      kind: 'Mandantenfähige SaaS-Plattform',
      description:
        'Die Plattform, auf der die meiste meiner Zeit liegt: ein mandantenfähiges SaaS-Produkt für intelligente Formulare und die Orchestrierung der Workflows, die sie auslösen. Meine Arbeit umfasst das .NET-Backend und die Designer-Oberfläche in Vue 3.',
      highlights: [
        'Backend auf .NET mit CQRS, Entity Framework Core und .NET Aspire, containerisiert mit Docker.',
        'Drag-and-drop-Formulardesigner in Vue 3 und TypeScript, bei dem die Designaufgabe darin liegt, Komplexität zu verbergen statt sie auszustellen.',
        'Integrierte Workflow-Engine Elsa, damit ein abgeschicktes Formular einen echten Geschäftsprozess auslöst.',
        'Formularerzeugung per LLM: das gewünschte Formular beschreiben und einen funktionierenden Entwurf erhalten.',
        'NeoForm Studio bündelt Konfiguration, Datenbankschema und Mapping externer Quellen, sodass ein Mandant als einzelnes Artefakt ausgeliefert wird.',
      ],
    },
    ordering: {
      title: 'Bestellplattform für Restaurants',
      kind: 'UltimateIT · Produkt',
      description:
        'Eine White-Label-Plattform für Bestellung und Bezahlung in Restaurants: Gäste sehen die Karte, bestellen und zahlen sicher vom eigenen Telefon, ohne App-Installation. Einmal bei UltimateIT gebaut, läuft sie heute für drei verschiedene Restaurants in Deutschland.',
      highlights: [
        'Karte ansehen, bestellen und sicher mobil bezahlen als ein einziger Ablauf auf dem Telefon des Gastes.',
        'Pro Restaurant unter eigener Marke und eigener Domain ausgeliefert, damit jeder Betrieb seine Identität behält.',
        'Verarbeitet echte Bestellungen und echte Zahlungen für zahlende Betriebe.',
      ],
    },
    airline: {
      title: 'Data Warehouse & Analyseplattform für Fluggäste',
      kind: 'Data Engineering · Machine Learning',
      description:
        'Eine durchgängige Entscheidungsplattform, die Zufriedenheit und Loyalität von Fluggästen über rund 130.000 Datensätze analysiert — vom Rohextrakt bis zu Dashboards und Prognosemodellen.',
      highlights: [
        'ETL-Pipeline in SSIS und Python (Pandas), mit Bereinigung und Star-Schema-Warehouse auf SQL Server: 5 Dimensionen mit SCD Typ 2 und 2 Faktentabellen.',
        'Interaktive Power-BI-Dashboards für KPIs, Kundenzufriedenheit, Verspätungen und Fluggastsegmentierung.',
        'Über 10 Machine-Learning-Modelle: Zufriedenheitsprognose (logistische Regression, Random Forest, XGBoost), Abwanderungsprognose, CLV-Schätzung, RFM-/K-Means-Segmentierung und TF-IDF-Textanalyse.',
        'Web-Anwendung mit React und FastAPI, samt KI-Chatbot, DeepFace-Erkennung, OTP-Authentifizierung, bcrypt und MongoDB.',
      ],
    },
    jibly: {
      title: 'Jibly Taw',
      kind: 'UltimateIT · Marktplatz',
      description:
        'Ein Lieferdienst-Marktplatz, der Gäste mit Restaurants verbindet, die Bestellung aufnimmt und sie an die Tür bringt. Drei aufeinander abgestimmte Rollen in einer Plattform, mit live auf der Karte verfolgter Fahrerposition. Bei UltimateIT gebaut und betrieben.',
      highlights: [
        'Getrennte Oberflächen für Gast, Fahrer und Verwaltung, die miteinander im Takt bleiben.',
        'Bestellverfolgung in Echtzeit auf der Karte, damit Gäste sehen, wo ihr Essen wirklich ist.',
        'Als PWA ausgeliefert: Installation direkt aus dem Browser, ohne Umweg über einen App-Store.',
      ],
    },
    neolibrary: {
      title: 'NeoLibrary',
      kind: 'Design-System · Mitwirkender',
      description:
        'Die gemeinsame Vue-3-Komponentenbibliothek des Teams — eine Abstraktionsschicht über PrimeVue 4 mit 35 Enterprise-Komponenten, Tailwind-Styling, vollständiger Internationalisierung, einer visuellen Blockly-Skriptoberfläche und einem schemagesteuerten Formular-Renderer. Ich steuere Komponenten und Korrekturen bei; sie erscheint als eingeschränktes npm-Paket und ist in Storybook dokumentiert.',
      highlights: [],
    },
    migration: {
      title: 'Migrationswerkzeuge für Altformulare',
      kind: 'Interne Werkzeuge',
      description:
        'Ein Generator, der alte Feldverzeichnisse und Rasterstrukturen liest — XML-Definitionen samt CSV-Layout-Exporten — und die Tabelle erzeugt, die einen NeoForm-Aufbau steuert. So behält ein migrierender Kunde seinen Formularbestand, ohne ihn neu anzulegen. Ausschließlich mit der Standardbibliothek geschrieben und daher überall ohne Installation ausführbar.',
      highlights: [],
    },
    pdfviewer: {
      title: 'neo-pdf-viewer',
      kind: 'Bibliothek',
      description:
        'Eine wiederverwendbare PDF-Anzeigebibliothek auf Basis von PDF.js, entstanden im Abschlusspraktikum, um die Dokumentvorschau in der mobilen Elise-ECM-App zu betreiben.',
      highlights: [],
    },
  },

  skillGroups: {
    languages: 'Sprachen',
    backend: 'Backend',
    frontend: 'Frontend',
    integration: 'Integration',
    data: 'Daten & KI',
    databases: 'Datenbanken',
    delivery: 'Auslieferung',
  },

  education: {
    esprit: { school: 'ESPRIT', detail: 'Ingenieurstudium · dual' },
    iset: { school: 'ISET Bizerte', detail: null },
  },

  spokenLanguages: {
    arabic: { name: 'Arabisch', level: 'Muttersprache' },
    french: { name: 'Französisch', level: 'Fließend' },
    english: { name: 'Englisch', level: 'Mittelstufe' },
  },

  previews: {
    fast: 'Ein Dokument auf dem Weg von FAST nach Elise, mit Wiederholung bei Fehlern und einem sich vervollständigenden Signaturlauf',
    neoform: 'Formularfelder, die auf eine Designfläche fallen und anschließend einen Workflow auslösen',
    ordering: 'Ein Telefon, das eine Karte durchblättert, einen Warenkorb füllt und die Zahlung bestätigt',
    airline: 'Datensätze, die durch ETL in ein Star-Schema fließen und ein Dashboard speisen',
    jibly: 'Ein Fahrer, live auf der Route vom Restaurant zum Gast verfolgt',
    neolibrary: 'Ein Raster gemeinsamer Komponenten, das nacheinander aufleuchtet',
    migration: 'Alte XML- und CSV-Definitionen, Zeile für Zeile in eine Tabelle überführt',
    pdf: 'Seiten, die beim Scrollen fortschreitend dargestellt werden',
  },
}
