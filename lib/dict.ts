// Diccionario multiidioma — ES (fuente) · EN · DE · JA

export const langs = ["es", "en", "de", "ja"] as const;
export type Lang = (typeof langs)[number];

export const langLabels: Record<Lang, string> = {
  es: "ES",
  en: "EN",
  de: "DE",
  ja: "JA",
};

export const langNames: Record<Lang, string> = {
  es: "Español",
  en: "English",
  de: "Deutsch",
  ja: "日本語",
};

type Project = {
  n: string;
  year: string;
  sector: string;
  title: string;
  detail: string;
  modules: string[];
  stack: string[];
  badge: string;
};

type Service = {
  numeral: string;
  cmd: string;
  name: string;
  sub: string;
  description: string;
  bullets: string[];
};

type Principle = { n: string; title: string; text: string };

export type DictShape = {
  meta: { title: string; description: string };
  statusBar: {
    brand: string;
    version: string;
    location: string;
    statusLong: string;
    statusShort: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    yearLabel: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statProjects: string;
    statYears: string;
    statCode: string;
    marquee: string[];
  };
  servicios: {
    numeral: string;
    label: string;
    subtitle: string;
    items: Service[];
    cta: string;
    modulesLabel?: string;
  };
  obra: {
    numeral: string;
    label: string;
    subtitle: string;
    cue: string;
    counter: string;
    scroll: string;
    moduleLabel: string;
    stackLabel: string;
    items: Project[];
    end: {
      number: string;
      title1: string;
      titleEm: string;
      text: string;
      cta: string;
    };
  };
  estudio: {
    numeral: string;
    label: string;
    subtitle: string;
    manifestoLabel: string;
    manifesto1: string;
    manifesto2: string;
    manifesto3: string;
    body: string;
    toolsLabel: string;
    principlesLabel: string;
    principles: Principle[];
    lore: {
      label: string;
      title: string;
      titleEm: string;
      text: string;
    };
    founder: {
      label: string;
      monogram: string;
      name: string;
      role: string;
      epithet: string;
      bio: string;
      facts: { k: string; v: string }[];
      quote: string;
    };
  };
  contacto: {
    numeral: string;
    label: string;
    subtitle: string;
    eyebrow: string;
    titleStart: string;
    titleEm: string;
    titleEnd1: string;
    titleEnd2: string;
    body: string;
    info: { k: string; v: string }[];
    emailLabel: string;
    emailCta: string;
    response: string;
    socials: { label: string; handle: string }[];
  };
  footer: {
    tagline: string;
    navLabel: string;
    nav: { servicios: string; obra: string; estudio: string; contacto: string };
    channelLabel: string;
    channel: { email: string; github: string; linkedin: string; telegram: string };
    location: string;
    motto: string;
    available: string;
    build: string;
    aboutCta: string;
    aboutClose: string;
    aboutTitle: string;
  };
};

const es: DictShape = {
  meta: {
    title: "Azazel Dev Studio · Sistemas a medida",
    description:
      "Estudio de software. ERPs, plataformas web y sistemas personalizados — forjados para individuos y empresas.",
  },
  statusBar: {
    brand: "azazel.dev",
    version: "v.2026",
    location: "19.43°N · 99.13°O",
    statusLong: "disponible para proyectos",
    statusShort: "disponible",
    langLabel: "idioma",
  },
  hero: {
    eyebrow: "Estudio de software",
    yearLabel: "2026",
    h1: "Sistemas",
    h2: "a medida.",
    h3: "Forjados",
    h4: "con propósito.",
    subtitle:
      "ERPs, plataformas web y software personalizado para individuos y empresas. Trabajo claro: alcance definido, ejecución rigurosa, resultado preciso.",
    ctaPrimary: "iniciar proyecto",
    ctaSecondary: "ver trabajos →",
    statProjects: "proyectos entregados",
    statYears: "años de experiencia",
    statCode: "líneas de código",
    marquee: [
      "código limpio · arquitectura sólida · diseño cuidado",
      "ERPs · plataformas web · software a medida",
      "disponible para nuevos proyectos · 2026",
      "next.js · postgresql · typescript · python · go",
      "estudio · sistemas · herramientas · automatización",
    ],
  },
  servicios: {
    numeral: "ii.",
    label: "Servicios",
    subtitle: "// lo que hacemos",
    cta: "solicitar cotización",
    items: [
      {
        numeral: "I.",
        cmd: "$ erp",
        name: "Sistemas ERP",
        sub: "Gestión empresarial a medida",
        description:
          "Sistemas de gestión integral construidos desde cero. Inventario, ventas, producción, finanzas — todo conectado, todo a tu medida. Sin SaaS rígidos, sin licencias eternas.",
        bullets: [
          "Gestión integral",
          "Multi-sucursal",
          "Reportes a medida",
          "Integración fiscal",
        ],
      },
      {
        numeral: "II.",
        cmd: "$ web",
        name: "Plataformas Web",
        sub: "Sitios y aplicaciones",
        description:
          "Sitios y aplicaciones web modernas. Tiendas, portales, dashboards y plataformas a medida — rápidas, escalables, con la estética que tu marca merece.",
        bullets: ["Next.js · React", "E-commerce", "Portales B2B", "SEO técnico"],
      },
      {
        numeral: "III.",
        cmd: "$ custom",
        name: "Software a Medida",
        sub: "Automatización & herramientas",
        description:
          "Automatizaciones, integraciones, herramientas internas. Lo que tu negocio necesita y no existe en el mercado, materializado en código.",
        bullets: [
          "Automatización",
          "Integraciones API",
          "Bots & scrapers",
          "Herramientas internas",
        ],
      },
    ],
  },
  obra: {
    numeral: "iii.",
    label: "Obra",
    subtitle: "// proyectos seleccionados",
    cue: "desplaza para navegar",
    counter: "obra · 05 proyectos",
    scroll: "scroll →",
    moduleLabel: "// módulos",
    stackLabel: "// stack",
    items: [
      {
        n: "01",
        year: "2024 — 2025",
        sector: "Distribución · Perecederos",
        title: "ERP integral de distribución y venta de perecederos",
        detail:
          "Sistema end-to-end para empresa de distribución y venta de productos perecederos. Desde el ingreso de producción hasta la cobranza — pasando por pedidos, reparto, zonas, crédito y manejo de merma.",
        modules: [
          "Sistema de pedidos",
          "Reparto y trazabilidad",
          "Zonas de reparto",
          "Crédito y cobranza",
          "Saldo de cliente",
          "Catálogo de productos",
          "Producción · ingreso",
          "Productos merma",
          "Reportes PDF",
          "Autorización de precios remota",
        ],
        stack: ["Next.js", "PostgreSQL", "TypeScript"],
        badge: "obra mayor",
      },
      {
        n: "02",
        year: "2024",
        sector: "Retail · Punto de venta",
        title: "POS custom + generador de barcodes",
        detail:
          "Sistema de punto de venta a medida con panel administrativo y herramienta propia de generación de códigos de barras. Integración con inventario y cortes de caja.",
        modules: [
          "POS de caja",
          "Panel administrativo",
          "Generador de barcodes",
          "Inventario",
          "Cortes de caja",
        ],
        stack: ["Web", "Print API"],
        badge: "entregado",
      },
      {
        n: "03",
        year: "2025",
        sector: "Automatización · Ventas",
        title: "Bot de WhatsApp con n8n",
        detail:
          "Agente conversacional sobre WhatsApp para captura automática de pedidos. Flujos en n8n con sincronización en tiempo real al ERP y validación de catálogo.",
        modules: [
          "Agente WhatsApp",
          "Flujos n8n",
          "Captura de pedidos",
          "Sincronización ERP",
          "Notificaciones",
        ],
        stack: ["n8n", "WhatsApp API", "REST"],
        badge: "entregado",
      },
      {
        n: "04",
        year: "2025",
        sector: "Mobile · Android",
        title: "App Android para reparto y ventas",
        detail:
          "Aplicación Android complementaria al ERP para personal de campo: consulta de rutas, captura de pedidos, comprobantes de entrega y cobros — funciona offline y sincroniza al volver señal.",
        modules: [
          "App Android nativa",
          "Modo offline",
          "Sync con ERP",
          "Comprobantes en sitio",
          "Geolocalización",
        ],
        stack: ["Android", "Kotlin", "REST API"],
        badge: "entregado",
      },
      {
        n: "05",
        year: "2025",
        sector: "Web · Corporativo",
        title: "Sitio web institucional",
        detail:
          "Sitio corporativo rápido y editable para la empresa, con catálogo público, formularios de contacto y SEO técnico. Panel de contenido para autogestión.",
        modules: ["Web institucional", "Catálogo público", "CMS", "SEO técnico"],
        stack: ["Next.js", "Vercel"],
        badge: "entregado",
      },
    ],
    end: {
      number: "proyecto № 006",
      title1: "El siguiente",
      titleEm: "puede ser el tuyo.",
      text:
        "Si tienes una idea o una necesidad técnica, conversémosla. La primera charla siempre es sin compromiso.",
      cta: "iniciar proyecto",
    },
  },
  estudio: {
    numeral: "iv.",
    label: "El Estudio",
    subtitle: "// quiénes somos",
    manifestoLabel: "// manifiesto",
    manifesto1: "Azazel Dev Studio nace de una premisa simple:",
    manifesto2: "el software a medida supera al estándar",
    manifesto3: "cuando el problema lo es.",
    body:
      "Somos un estudio pequeño, deliberadamente. Trabajamos pocos proyectos a la vez para entregar artesanía. No empaquetamos soluciones genéricas: estudiamos el sistema, diseñamos la arquitectura, escribimos el código.",
    toolsLabel: "// herramientas predilectas",
    principlesLabel: "// tres principios",
    principles: [
      {
        n: "I.",
        title: "Cada problema merece su solución",
        text:
          "Estudiamos el dominio, diseñamos la arquitectura, escribimos el código. Sin templates, sin atajos.",
      },
      {
        n: "II.",
        title: "El código limpio sobrevive",
        text:
          "La lógica clara es lógica que dura. Mantenible, documentada, testeada — y entregada.",
      },
      {
        n: "III.",
        title: "El pacto es claro",
        text:
          "Alcance, plazo, entrega. Hablamos directo. Sin sorpresas en la factura, sin scope creep.",
      },
    ],
    lore: {
      label: "// el nombre",
      title: "Hay nombres",
      titleEm: "que cargan historia.",
      text:
        "El nuestro pertenece a una figura antigua ligada al conocimiento, al fuego y al oficio de transformar la materia en algo nuevo. Somos un estudio de software que trabaja fuera del camino trillado: nos interesa lo que se hace con intención — código limpio, decisiones honestas y productos que no se parecen a todos los demás. Pensamos como artesanos, no como fábrica, y construimos cosas hechas para perdurar.",
    },
    founder: {
      label: "// detrás del estudio",
      monogram: "T·C",
      name: "J. Pablo Mtz.",
      role: "Fundador · Desarrollador principal",
      epithet: "Alquimista del código",
      bio:
        "Ingeniero en sistemas y artesano digital. Convencido de que el software bueno se piensa más de lo que se escribe, y se mantiene más de lo que se entrega. Le interesa el oficio antes que la moda y la claridad antes que la novedad.",
      facts: [
        { k: "formación", v: "Ingeniero en sistemas computacionales" },
        { k: "experiencia", v: "2+ años · ERPs y plataformas web" },
        { k: "enfoque", v: "Arquitectura full-stack · sistemas distribuidos" },
        { k: "stack", v: "TypeScript · PostgreSQL · Next.js · Python · Go" },
        { k: "intereses", v: "Linux · automatización · código que dura" },
        { k: "base", v: "México · disponible remoto" },
      ],
      quote: "Cada problema merece su propia solución.",
    },
  },
  contacto: {
    numeral: "v.",
    label: "Contacto",
    subtitle: "// hablemos",
    eyebrow: "¿listo para iniciar un proyecto?",
    titleStart: "Cuéntanos",
    titleEm: "qué",
    titleEnd1: "necesitas",
    titleEnd2: "construir.",
    body:
      "Atendemos pocos proyectos a la vez. Si tu necesidad es clara o si aún estás dándole forma — escríbenos. La primera conversación es siempre sin compromiso.",
    info: [
      { k: "ubicación", v: "México · remoto" },
      { k: "zona horaria", v: "GMT−6" },
      { k: "respuesta", v: "< 48h hábiles" },
      { k: "cupo abierto", v: "2 / 3" },
    ],
    emailLabel: "correo",
    emailCta: "enviar mensaje",
    response: "respondemos en menos de 48h hábiles",
    socials: [{ label: "GitHub", handle: "@Tiberius-dev66" }],
  },
  footer: {
    tagline:
      "Estudio de software. ERPs, plataformas y sistemas a medida — para individuos y empresas que no se conforman con lo común.",
    navLabel: "/ navegar",
    nav: {
      servicios: "servicios",
      obra: "obra",
      estudio: "estudio",
      contacto: "contacto",
    },
    channelLabel: "/ canal",
    channel: {
      email: "correo",
      github: "github",
      linkedin: "linkedin",
      telegram: "telegram",
    },
    location: "// hecho en méxico · 2026",
    motto: "código con propósito",
    available: "disponible para nuevos proyectos",
    build: "v.2026 · build 0.1.0",
    aboutCta: "sobre nosotros",
    aboutClose: "cerrar",
    aboutTitle: "Sobre el estudio",
  },
};

const en: DictShape = {
  meta: {
    title: "Azazel Dev Studio · Custom Software",
    description:
      "Software studio. ERPs, web platforms and tailored systems — crafted for individuals and businesses.",
  },
  statusBar: {
    brand: "azazel.dev",
    version: "v.2026",
    location: "19.43°N · 99.13°W",
    statusLong: "available for projects",
    statusShort: "available",
    langLabel: "language",
  },
  hero: {
    eyebrow: "Software studio",
    yearLabel: "2026",
    h1: "Bespoke",
    h2: "systems.",
    h3: "Crafted",
    h4: "with intent.",
    subtitle:
      "ERPs, web platforms and custom software for individuals and businesses. Clear work: defined scope, rigorous execution, precise result.",
    ctaPrimary: "start project",
    ctaSecondary: "see work →",
    statProjects: "projects delivered",
    statYears: "years experience",
    statCode: "lines of code",
    marquee: [
      "clean code · solid architecture · careful design",
      "ERPs · web platforms · custom software",
      "available for new projects · 2026",
      "next.js · postgresql · typescript · python · go",
      "studio · systems · tools · automation",
    ],
  },
  servicios: {
    numeral: "ii.",
    label: "Services",
    subtitle: "// what we do",
    cta: "request quote",
    items: [
      {
        numeral: "I.",
        cmd: "$ erp",
        name: "ERP Systems",
        sub: "Custom business management",
        description:
          "Integrated management systems built from scratch. Inventory, sales, production, finance — all connected, all tailored. No rigid SaaS, no perpetual licenses.",
        bullets: [
          "Full management",
          "Multi-branch",
          "Custom reports",
          "Tax integration",
        ],
      },
      {
        numeral: "II.",
        cmd: "$ web",
        name: "Web Platforms",
        sub: "Sites & applications",
        description:
          "Modern web sites and applications. Stores, portals, dashboards and tailored platforms — fast, scalable, with the aesthetics your brand deserves.",
        bullets: ["Next.js · React", "E-commerce", "B2B portals", "Technical SEO"],
      },
      {
        numeral: "III.",
        cmd: "$ custom",
        name: "Custom Software",
        sub: "Automation & tools",
        description:
          "Automations, integrations, internal tools. What your business needs and doesn't exist on the market, materialized into code.",
        bullets: [
          "Automation",
          "API integrations",
          "Bots & scrapers",
          "Internal tools",
        ],
      },
    ],
  },
  obra: {
    numeral: "iii.",
    label: "Work",
    subtitle: "// selected projects",
    cue: "scroll to navigate",
    counter: "work · 05 projects",
    scroll: "scroll →",
    moduleLabel: "// modules",
    stackLabel: "// stack",
    items: [
      {
        n: "01",
        year: "2024 — 2025",
        sector: "Distribution · Perishables",
        title: "Integrated ERP for perishables distribution & sales",
        detail:
          "End-to-end system for a perishables distribution and sales company. From production intake to collection — through orders, deliveries, zones, credit and waste management.",
        modules: [
          "Order system",
          "Delivery & tracking",
          "Delivery zones",
          "Credit & collections",
          "Customer balance",
          "Product catalog",
          "Production · intake",
          "Waste tracking",
          "PDF reports",
          "Remote price approval",
        ],
        stack: ["Next.js", "PostgreSQL", "TypeScript"],
        badge: "flagship",
      },
      {
        n: "02",
        year: "2024",
        sector: "Retail · Point of Sale",
        title: "Custom POS + barcode generator",
        detail:
          "Tailored point of sale system with admin panel and a proprietary barcode generation tool. Inventory integration and cash closeouts.",
        modules: [
          "POS register",
          "Admin panel",
          "Barcode generator",
          "Inventory",
          "Cash closeouts",
        ],
        stack: ["Web", "Print API"],
        badge: "delivered",
      },
      {
        n: "03",
        year: "2025",
        sector: "Automation · Sales",
        title: "WhatsApp bot with n8n",
        detail:
          "Conversational agent on WhatsApp for automatic order capture. n8n flows with real-time ERP sync and catalog validation.",
        modules: [
          "WhatsApp agent",
          "n8n flows",
          "Order capture",
          "ERP sync",
          "Notifications",
        ],
        stack: ["n8n", "WhatsApp API", "REST"],
        badge: "delivered",
      },
      {
        n: "04",
        year: "2025",
        sector: "Mobile · Android",
        title: "Android app for delivery & sales",
        detail:
          "Android companion app to the ERP for field staff: route lookup, order capture, delivery receipts and payments — works offline and syncs when signal returns.",
        modules: [
          "Native Android app",
          "Offline mode",
          "ERP sync",
          "On-site receipts",
          "Geolocation",
        ],
        stack: ["Android", "Kotlin", "REST API"],
        badge: "delivered",
      },
      {
        n: "05",
        year: "2025",
        sector: "Web · Corporate",
        title: "Corporate website",
        detail:
          "Fast, editable corporate site for the company, with public catalog, contact forms and technical SEO. Self-service content panel.",
        modules: ["Corporate site", "Public catalog", "CMS", "Technical SEO"],
        stack: ["Next.js", "Vercel"],
        badge: "delivered",
      },
    ],
    end: {
      number: "project № 006",
      title1: "The next one",
      titleEm: "could be yours.",
      text:
        "If you have an idea or a technical need, let's talk. The first conversation is always without commitment.",
      cta: "start project",
    },
  },
  estudio: {
    numeral: "iv.",
    label: "The Studio",
    subtitle: "// who we are",
    manifestoLabel: "// manifesto",
    manifesto1: "Azazel Dev Studio is born from a simple premise:",
    manifesto2: "custom software outperforms off-the-shelf",
    manifesto3: "when the problem is custom too.",
    body:
      "We're a small studio, deliberately. We take on few projects at a time to deliver craftsmanship. We don't package generic solutions: we study the system, design the architecture, write the code.",
    toolsLabel: "// preferred tools",
    principlesLabel: "// three principles",
    principles: [
      {
        n: "I.",
        title: "Each problem deserves its own solution",
        text:
          "We study the domain, design the architecture, write the code. No templates, no shortcuts.",
      },
      {
        n: "II.",
        title: "Clean code survives",
        text:
          "Clear logic is lasting logic. Maintainable, documented, tested — and delivered.",
      },
      {
        n: "III.",
        title: "The agreement is clear",
        text:
          "Scope, timeline, delivery. We speak directly. No invoice surprises, no scope creep.",
      },
    ],
    lore: {
      label: "// the name",
      title: "Some names",
      titleEm: "carry history.",
      text:
        "Ours belongs to an ancient figure tied to knowledge, fire, and the craft of transforming matter into something new. We are a software studio that works off the beaten path: we care about what's made with intent — clean code, honest decisions, products that don't look like everyone else's. We think like craftsmen, not like a factory, and we build things made to last.",
    },
    founder: {
      label: "// behind the studio",
      monogram: "T·C",
      name: "J. Pablo Mtz.",
      role: "Founder · Lead developer",
      epithet: "Code alchemist",
      bio:
        "Systems engineer and digital craftsman. Convinced that good software is thought through more than it's written, and maintained more than it's delivered. He values craft over fashion and clarity over novelty.",
      facts: [
        { k: "education", v: "B.Sc. Computer Systems Engineering" },
        { k: "experience", v: "2+ years · ERPs & web platforms" },
        { k: "focus", v: "Full-stack architecture · distributed systems" },
        { k: "stack", v: "TypeScript · PostgreSQL · Next.js · Python · Go" },
        { k: "interests", v: "Linux · automation · code that lasts" },
        { k: "base", v: "Mexico · remote available" },
      ],
      quote: "Every problem deserves its own solution.",
    },
  },
  contacto: {
    numeral: "v.",
    label: "Contact",
    subtitle: "// let's talk",
    eyebrow: "ready to start a project?",
    titleStart: "Tell us",
    titleEm: "what",
    titleEnd1: "you need",
    titleEnd2: "to build.",
    body:
      "We take on few projects at a time. Whether your need is clear or still taking shape — write to us. The first conversation is always without commitment.",
    info: [
      { k: "location", v: "Mexico · remote" },
      { k: "timezone", v: "GMT−6" },
      { k: "response", v: "< 48 business hours" },
      { k: "open slots", v: "2 / 3" },
    ],
    emailLabel: "email",
    emailCta: "send message",
    response: "we reply in under 48 business hours",
    socials: [{ label: "GitHub", handle: "@Tiberius-dev66" }],
  },
  footer: {
    tagline:
      "Software studio. ERPs, platforms and tailored systems — for individuals and businesses that aren't satisfied with the ordinary.",
    navLabel: "/ navigate",
    nav: {
      servicios: "services",
      obra: "work",
      estudio: "studio",
      contacto: "contact",
    },
    channelLabel: "/ channel",
    channel: {
      email: "email",
      github: "github",
      linkedin: "linkedin",
      telegram: "telegram",
    },
    location: "// made in mexico · 2026",
    motto: "code with intent",
    available: "available for new projects",
    build: "v.2026 · build 0.1.0",
    aboutCta: "about us",
    aboutClose: "close",
    aboutTitle: "About the studio",
  },
};

const de: DictShape = {
  meta: {
    title: "Azazel Dev Studio · Maßgeschneiderte Software",
    description:
      "Software-Studio. ERPs, Webplattformen und maßgeschneiderte Systeme — für Einzelpersonen und Unternehmen.",
  },
  statusBar: {
    brand: "azazel.dev",
    version: "v.2026",
    location: "19.43°N · 99.13°W",
    statusLong: "verfügbar für Projekte",
    statusShort: "verfügbar",
    langLabel: "Sprache",
  },
  hero: {
    eyebrow: "Software-Studio",
    yearLabel: "2026",
    h1: "Systeme",
    h2: "nach Maß.",
    h3: "Geschmiedet",
    h4: "mit Absicht.",
    subtitle:
      "ERPs, Webplattformen und maßgeschneiderte Software für Einzelpersonen und Unternehmen. Klare Arbeit: definierter Umfang, rigorose Umsetzung, präzises Ergebnis.",
    ctaPrimary: "Projekt starten",
    ctaSecondary: "Arbeiten ansehen →",
    statProjects: "abgeschlossene Projekte",
    statYears: "Jahre Erfahrung",
    statCode: "Codezeilen",
    marquee: [
      "sauberer Code · solide Architektur · sorgfältiges Design",
      "ERPs · Webplattformen · maßgeschneiderte Software",
      "verfügbar für neue Projekte · 2026",
      "next.js · postgresql · typescript · python · go",
      "Studio · Systeme · Werkzeuge · Automatisierung",
    ],
  },
  servicios: {
    numeral: "ii.",
    label: "Leistungen",
    subtitle: "// was wir tun",
    cta: "Angebot anfragen",
    items: [
      {
        numeral: "I.",
        cmd: "$ erp",
        name: "ERP-Systeme",
        sub: "Maßgeschneiderte Unternehmensführung",
        description:
          "Integrierte Managementsysteme von Grund auf entwickelt. Inventar, Vertrieb, Produktion, Finanzen — alles verbunden, alles maßgeschneidert. Kein starres SaaS, keine ewigen Lizenzen.",
        bullets: [
          "Komplettverwaltung",
          "Mehrere Filialen",
          "Maßgeschneiderte Berichte",
          "Steuerintegration",
        ],
      },
      {
        numeral: "II.",
        cmd: "$ web",
        name: "Webplattformen",
        sub: "Seiten & Anwendungen",
        description:
          "Moderne Webseiten und Anwendungen. Shops, Portale, Dashboards und maßgeschneiderte Plattformen — schnell, skalierbar, mit der Ästhetik, die Ihre Marke verdient.",
        bullets: ["Next.js · React", "E-Commerce", "B2B-Portale", "Technisches SEO"],
      },
      {
        numeral: "III.",
        cmd: "$ custom",
        name: "Maßgeschneiderte Software",
        sub: "Automatisierung & Werkzeuge",
        description:
          "Automatisierungen, Integrationen, interne Werkzeuge. Was Ihr Unternehmen braucht und auf dem Markt nicht existiert, in Code verwirklicht.",
        bullets: [
          "Automatisierung",
          "API-Integrationen",
          "Bots & Scraper",
          "Interne Werkzeuge",
        ],
      },
    ],
  },
  obra: {
    numeral: "iii.",
    label: "Werk",
    subtitle: "// ausgewählte Projekte",
    cue: "scrollen zum Navigieren",
    counter: "Werk · 05 Projekte",
    scroll: "scroll →",
    moduleLabel: "// Module",
    stackLabel: "// Stack",
    items: [
      {
        n: "01",
        year: "2024 — 2025",
        sector: "Vertrieb · Verderbliche Waren",
        title: "Integriertes ERP für Vertrieb & Verkauf verderblicher Waren",
        detail:
          "End-to-End-System für ein Vertriebs- und Verkaufsunternehmen verderblicher Waren. Vom Produktionseingang bis zum Inkasso — über Bestellungen, Lieferungen, Zonen, Kredit und Schwundmanagement.",
        modules: [
          "Bestellsystem",
          "Lieferung & Tracking",
          "Lieferzonen",
          "Kredit & Inkasso",
          "Kundenkonto",
          "Produktkatalog",
          "Produktion · Eingang",
          "Schwund-Tracking",
          "PDF-Berichte",
          "Remote-Preisfreigabe",
        ],
        stack: ["Next.js", "PostgreSQL", "TypeScript"],
        badge: "Hauptwerk",
      },
      {
        n: "02",
        year: "2024",
        sector: "Einzelhandel · Kasse",
        title: "Custom POS + Barcode-Generator",
        detail:
          "Maßgeschneidertes Kassensystem mit Admin-Panel und proprietärem Barcode-Generator. Inventarintegration und Kassenabschlüsse.",
        modules: [
          "Kassen-POS",
          "Admin-Panel",
          "Barcode-Generator",
          "Inventar",
          "Kassenabschlüsse",
        ],
        stack: ["Web", "Print API"],
        badge: "geliefert",
      },
      {
        n: "03",
        year: "2025",
        sector: "Automatisierung · Vertrieb",
        title: "WhatsApp-Bot mit n8n",
        detail:
          "Konversationeller Agent auf WhatsApp zur automatischen Bestellerfassung. n8n-Flows mit Echtzeit-ERP-Sync und Katalogvalidierung.",
        modules: [
          "WhatsApp-Agent",
          "n8n-Flows",
          "Bestellerfassung",
          "ERP-Sync",
          "Benachrichtigungen",
        ],
        stack: ["n8n", "WhatsApp API", "REST"],
        badge: "geliefert",
      },
      {
        n: "04",
        year: "2025",
        sector: "Mobil · Android",
        title: "Android-App für Lieferung & Vertrieb",
        detail:
          "Android-Begleit-App zum ERP für Außendienstmitarbeiter: Routenabfrage, Bestellerfassung, Lieferbelege und Zahlungen — funktioniert offline und synchronisiert bei wiederhergestellter Verbindung.",
        modules: [
          "Native Android-App",
          "Offline-Modus",
          "ERP-Sync",
          "Vor-Ort-Belege",
          "Geolokalisierung",
        ],
        stack: ["Android", "Kotlin", "REST API"],
        badge: "geliefert",
      },
      {
        n: "05",
        year: "2025",
        sector: "Web · Unternehmen",
        title: "Unternehmenswebsite",
        detail:
          "Schnelle, editierbare Unternehmenswebsite mit öffentlichem Katalog, Kontaktformularen und technischem SEO. Self-Service-Content-Panel.",
        modules: ["Unternehmensseite", "Öffentlicher Katalog", "CMS", "Technisches SEO"],
        stack: ["Next.js", "Vercel"],
        badge: "geliefert",
      },
    ],
    end: {
      number: "Projekt № 006",
      title1: "Das nächste",
      titleEm: "könnte Ihres sein.",
      text:
        "Wenn Sie eine Idee oder einen technischen Bedarf haben, lassen Sie uns reden. Das erste Gespräch ist immer unverbindlich.",
      cta: "Projekt starten",
    },
  },
  estudio: {
    numeral: "iv.",
    label: "Das Studio",
    subtitle: "// wer wir sind",
    manifestoLabel: "// Manifest",
    manifesto1: "Azazel Dev Studio entsteht aus einer einfachen Prämisse:",
    manifesto2: "maßgeschneiderte Software übertrifft Standardlösungen",
    manifesto3: "wenn das Problem ebenfalls maßgeschneidert ist.",
    body:
      "Wir sind ein kleines Studio — bewusst. Wir nehmen wenige Projekte gleichzeitig an, um Handwerk zu liefern. Wir verpacken keine generischen Lösungen: Wir studieren das System, entwerfen die Architektur, schreiben den Code.",
    toolsLabel: "// bevorzugte Werkzeuge",
    principlesLabel: "// drei Prinzipien",
    principles: [
      {
        n: "I.",
        title: "Jedes Problem verdient seine eigene Lösung",
        text:
          "Wir studieren die Domäne, entwerfen die Architektur, schreiben den Code. Keine Templates, keine Abkürzungen.",
      },
      {
        n: "II.",
        title: "Sauberer Code überlebt",
        text:
          "Klare Logik ist dauerhafte Logik. Wartbar, dokumentiert, getestet — und geliefert.",
      },
      {
        n: "III.",
        title: "Die Vereinbarung ist klar",
        text:
          "Umfang, Zeitplan, Lieferung. Wir sprechen direkt. Keine Rechnungs-Überraschungen, kein Scope Creep.",
      },
    ],
    lore: {
      label: "// der Name",
      title: "Manche Namen",
      titleEm: "tragen Geschichte.",
      text:
        "Unserer gehört einer alten Figur, verbunden mit Wissen, Feuer und der Kunst, Materie in etwas Neues zu verwandeln. Wir sind ein Software-Studio, das abseits ausgetretener Pfade arbeitet: Uns interessiert, was mit Absicht entsteht — sauberer Code, ehrliche Entscheidungen, Produkte, die nicht aussehen wie alle anderen. Wir denken wie Handwerker, nicht wie eine Fabrik, und wir bauen Dinge, die Bestand haben.",
    },
    founder: {
      label: "// hinter dem Studio",
      monogram: "T·C",
      name: "J. Pablo Mtz.",
      role: "Gründer · Leitender Entwickler",
      epithet: "Code-Alchemist",
      bio:
        "Systeminformatiker und digitaler Handwerker. Überzeugt davon, dass gute Software mehr durchdacht als geschrieben, und mehr gewartet als ausgeliefert wird. Er bevorzugt Handwerk vor Mode und Klarheit vor Neuheit.",
      facts: [
        { k: "Ausbildung", v: "Diplom Systeminformatik" },
        { k: "Erfahrung", v: "2+ Jahre · ERPs & Webplattformen" },
        { k: "Schwerpunkt", v: "Full-Stack-Architektur · verteilte Systeme" },
        { k: "Stack", v: "TypeScript · PostgreSQL · Next.js · Python · Go" },
        { k: "Interessen", v: "Linux · Automatisierung · Code, der bleibt" },
        { k: "Standort", v: "Mexiko · remote verfügbar" },
      ],
      quote: "Jedes Problem verdient seine eigene Lösung.",
    },
  },
  contacto: {
    numeral: "v.",
    label: "Kontakt",
    subtitle: "// reden wir",
    eyebrow: "bereit, ein Projekt zu starten?",
    titleStart: "Erzähl uns,",
    titleEm: "was",
    titleEnd1: "du",
    titleEnd2: "bauen musst.",
    body:
      "Wir nehmen wenige Projekte gleichzeitig an. Ob Ihr Bedarf klar ist oder noch Form annimmt — schreiben Sie uns. Das erste Gespräch ist immer unverbindlich.",
    info: [
      { k: "Standort", v: "Mexiko · remote" },
      { k: "Zeitzone", v: "GMT−6" },
      { k: "Antwort", v: "< 48 Geschäftsstunden" },
      { k: "freie Plätze", v: "2 / 3" },
    ],
    emailLabel: "E-Mail",
    emailCta: "Nachricht senden",
    response: "wir antworten in unter 48 Geschäftsstunden",
    socials: [{ label: "GitHub", handle: "@Tiberius-dev66" }],
  },
  footer: {
    tagline:
      "Software-Studio. ERPs, Plattformen und maßgeschneiderte Systeme — für Einzelpersonen und Unternehmen, die sich nicht mit Gewöhnlichem zufriedengeben.",
    navLabel: "/ navigieren",
    nav: {
      servicios: "Leistungen",
      obra: "Werk",
      estudio: "Studio",
      contacto: "Kontakt",
    },
    channelLabel: "/ Kanal",
    channel: {
      email: "E-Mail",
      github: "github",
      linkedin: "linkedin",
      telegram: "telegram",
    },
    location: "// hergestellt in Mexiko · 2026",
    motto: "Code mit Absicht",
    available: "verfügbar für neue Projekte",
    build: "v.2026 · build 0.1.0",
    aboutCta: "über uns",
    aboutClose: "schließen",
    aboutTitle: "Über das Studio",
  },
};

const ja: DictShape = {
  meta: {
    title: "Azazel Dev Studio · オーダーメイドシステム",
    description:
      "ソフトウェアスタジオ。個人と企業のためのERP、ウェブプラットフォーム、カスタムシステム。",
  },
  statusBar: {
    brand: "azazel.dev",
    version: "v.2026",
    location: "北緯19.43° · 西経99.13°",
    statusLong: "プロジェクト受付中",
    statusShort: "受付中",
    langLabel: "言語",
  },
  hero: {
    eyebrow: "ソフトウェアスタジオ",
    yearLabel: "2026",
    h1: "オーダーメイド",
    h2: "システム。",
    h3: "意図を持って",
    h4: "鍛え上げる。",
    subtitle:
      "個人・企業向けのERP、ウェブプラットフォーム、カスタムソフトウェア。明確な仕事：定義された範囲、厳密な実行、正確な結果。",
    ctaPrimary: "プロジェクトを開始",
    ctaSecondary: "実績を見る →",
    statProjects: "完了プロジェクト",
    statYears: "経験年数",
    statCode: "コード行数",
    marquee: [
      "クリーンなコード · 堅牢なアーキテクチャ · 緻密なデザイン",
      "ERP · ウェブプラットフォーム · カスタムソフトウェア",
      "新規プロジェクト受付中 · 2026",
      "next.js · postgresql · typescript · python · go",
      "スタジオ · システム · ツール · 自動化",
    ],
  },
  servicios: {
    numeral: "ii.",
    label: "サービス",
    subtitle: "// 提供内容",
    cta: "見積依頼",
    items: [
      {
        numeral: "I.",
        cmd: "$ erp",
        name: "ERPシステム",
        sub: "オーダーメイドの経営管理",
        description:
          "ゼロから構築する統合管理システム。在庫、販売、生産、財務 — すべて連携し、すべてあなた専用。固定的なSaaSなし、永続ライセンスなし。",
        bullets: ["統合管理", "複数拠点", "カスタムレポート", "税務統合"],
      },
      {
        numeral: "II.",
        cmd: "$ web",
        name: "ウェブプラットフォーム",
        sub: "サイトとアプリケーション",
        description:
          "モダンなウェブサイトとアプリケーション。ストア、ポータル、ダッシュボード、オーダーメイドのプラットフォーム — 速く、拡張性があり、ブランドにふさわしい美しさで。",
        bullets: ["Next.js · React", "Eコマース", "B2Bポータル", "テクニカルSEO"],
      },
      {
        numeral: "III.",
        cmd: "$ custom",
        name: "カスタムソフトウェア",
        sub: "自動化とツール",
        description:
          "自動化、統合、社内ツール。市場に存在しない、あなたのビジネスが必要とするものをコードで具現化。",
        bullets: ["自動化", "API統合", "ボット・スクレイパー", "社内ツール"],
      },
    ],
  },
  obra: {
    numeral: "iii.",
    label: "実績",
    subtitle: "// 厳選プロジェクト",
    cue: "スクロールで進む",
    counter: "実績 · 5プロジェクト",
    scroll: "scroll →",
    moduleLabel: "// モジュール",
    stackLabel: "// スタック",
    items: [
      {
        n: "01",
        year: "2024 — 2025",
        sector: "流通 · 生鮮品",
        title: "生鮮品の流通・販売向け統合ERP",
        detail:
          "生鮮品の流通・販売企業向けエンドツーエンドシステム。生産入荷から集金まで — 受注、配送、エリア、与信、廃棄管理を含む。",
        modules: [
          "受注システム",
          "配送・追跡",
          "配送エリア",
          "与信・集金",
          "顧客残高",
          "商品カタログ",
          "生産 · 入荷",
          "廃棄管理",
          "PDFレポート",
          "リモート価格承認",
        ],
        stack: ["Next.js", "PostgreSQL", "TypeScript"],
        badge: "主要実績",
      },
      {
        n: "02",
        year: "2024",
        sector: "小売 · POS",
        title: "カスタムPOS + バーコードジェネレーター",
        detail:
          "管理パネルと独自バーコード生成ツールを備えたオーダーメイドPOSシステム。在庫連携と日次精算機能。",
        modules: [
          "POSレジ",
          "管理パネル",
          "バーコードジェネレーター",
          "在庫",
          "日次精算",
        ],
        stack: ["Web", "Print API"],
        badge: "納品済",
      },
      {
        n: "03",
        year: "2025",
        sector: "自動化 · 販売",
        title: "n8nを用いたWhatsAppボット",
        detail:
          "WhatsApp上で自動的に注文を取得する会話エージェント。n8nフローでERPとリアルタイム同期、カタログ検証も実装。",
        modules: [
          "WhatsAppエージェント",
          "n8nフロー",
          "注文取得",
          "ERP同期",
          "通知",
        ],
        stack: ["n8n", "WhatsApp API", "REST"],
        badge: "納品済",
      },
      {
        n: "04",
        year: "2025",
        sector: "モバイル · Android",
        title: "配送・販売向けAndroidアプリ",
        detail:
          "現場スタッフ向けERP連携Androidアプリ：ルート確認、受注、配送伝票、集金 — オフライン動作、復帰時に自動同期。",
        modules: [
          "Androidネイティブアプリ",
          "オフラインモード",
          "ERP同期",
          "現場伝票",
          "位置情報",
        ],
        stack: ["Android", "Kotlin", "REST API"],
        badge: "納品済",
      },
      {
        n: "05",
        year: "2025",
        sector: "ウェブ · コーポレート",
        title: "企業ウェブサイト",
        detail:
          "企業向け高速・編集可能サイト。公開カタログ、問い合わせフォーム、テクニカルSEO搭載。コンテンツ自主管理パネル付き。",
        modules: ["コーポレートサイト", "公開カタログ", "CMS", "テクニカルSEO"],
        stack: ["Next.js", "Vercel"],
        badge: "納品済",
      },
    ],
    end: {
      number: "プロジェクト № 006",
      title1: "次は、",
      titleEm: "あなたの番。",
      text:
        "アイデアや技術的なニーズがあれば、お話しましょう。最初のご相談はいつでも無料です。",
      cta: "プロジェクトを開始",
    },
  },
  estudio: {
    numeral: "iv.",
    label: "スタジオ",
    subtitle: "// 私たちについて",
    manifestoLabel: "// マニフェスト",
    manifesto1: "Azazel Dev Studioは、シンプルな前提から生まれました：",
    manifesto2: "カスタムソフトウェアは既製品を凌駕する",
    manifesto3: "問題自体がカスタムである時には。",
    body:
      "私たちは意図的に小さなスタジオです。クラフトマンシップを届けるため、同時に手がけるプロジェクトは少数。汎用ソリューションをパッケージ化するのではなく、システムを研究し、アーキテクチャを設計し、コードを書きます。",
    toolsLabel: "// 主要ツール",
    principlesLabel: "// 三つの原則",
    principles: [
      {
        n: "I.",
        title: "各問題には独自の解決策がふさわしい",
        text:
          "ドメインを研究し、アーキテクチャを設計し、コードを書く。テンプレートなし、近道なし。",
      },
      {
        n: "II.",
        title: "クリーンなコードは生き残る",
        text:
          "明快なロジックは持続するロジック。保守可能、文書化済み、テスト済み — そして納品。",
      },
      {
        n: "III.",
        title: "契約は明確に",
        text:
          "範囲、納期、納品。率直に話します。請求の驚きなし、スコープクリープなし。",
      },
    ],
    lore: {
      label: "// 名前について",
      title: "名前には",
      titleEm: "歴史が宿る。",
      text:
        "我々の名は、知と火、そして物質を新しいものへと変容させる技にまつわる古き存在に属する。我々は、定石から外れた道を歩むソフトウェアスタジオだ。意図を持って作られたものにこそ価値を見出す — 清潔なコード、誠実な判断、どこにでもある製品とは似つかない仕事。工房の職人として考え、工場としては考えない。長く使えるものを作る。",
    },
    founder: {
      label: "// スタジオの背後に",
      monogram: "T·C",
      name: "J. Pablo Mtz.",
      role: "創業者 · 主任開発者",
      epithet: "コードの錬金術師",
      bio:
        "情報システム技術者にして、デジタル時代の職人。良いソフトウェアは書かれる以上に考えられ、納品される以上に保守されると信じている。流行よりも仕事の質を、新奇さよりも明快さを大切にする。",
      facts: [
        { k: "学歴", v: "情報システム工学士" },
        { k: "経験", v: "2年以上 · ERPとウェブプラットフォーム" },
        { k: "専門", v: "フルスタックアーキテクチャ · 分散システム" },
        { k: "スタック", v: "TypeScript · PostgreSQL · Next.js · Python · Go" },
        { k: "関心", v: "Linux · 自動化 · 持続するコード" },
        { k: "拠点", v: "メキシコ · リモート対応" },
      ],
      quote: "問題ごとに、それにふさわしい解がある。",
    },
  },
  contacto: {
    numeral: "v.",
    label: "お問い合わせ",
    subtitle: "// 話しましょう",
    eyebrow: "プロジェクトを始める準備はできていますか？",
    titleStart: "教えてください、",
    titleEm: "何を",
    titleEnd1: "作りたい",
    titleEnd2: "のかを。",
    body:
      "同時に手がけるプロジェクトは少数です。ニーズが明確でも、まだ形になっていなくても — ご連絡ください。最初のお話はいつでも無料です。",
    info: [
      { k: "所在地", v: "メキシコ · リモート" },
      { k: "タイムゾーン", v: "GMT−6" },
      { k: "返信", v: "< 48営業時間" },
      { k: "受付枠", v: "2 / 3" },
    ],
    emailLabel: "メール",
    emailCta: "メッセージを送る",
    response: "48営業時間以内に返信します",
    socials: [{ label: "GitHub", handle: "@Tiberius-dev66" }],
  },
  footer: {
    tagline:
      "ソフトウェアスタジオ。ERP、プラットフォーム、オーダーメイドシステム — ありふれたものに満足しない個人・企業のために。",
    navLabel: "/ ナビゲート",
    nav: {
      servicios: "サービス",
      obra: "実績",
      estudio: "スタジオ",
      contacto: "お問い合わせ",
    },
    channelLabel: "/ チャネル",
    channel: {
      email: "メール",
      github: "github",
      linkedin: "linkedin",
      telegram: "telegram",
    },
    location: "// メキシコ製 · 2026",
    motto: "意図あるコード",
    available: "新規プロジェクト受付中",
    build: "v.2026 · build 0.1.0",
    aboutCta: "当スタジオについて",
    aboutClose: "閉じる",
    aboutTitle: "スタジオについて",
  },
};

export const dict: Record<Lang, DictShape> = { es, en, de, ja };
