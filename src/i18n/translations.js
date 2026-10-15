export const translations = {
  es: {
    meta: { domain: "brahiam.dev" },
    hero: {
      name: "Brahiam Soto",
      headline: "Desarrollo web UI/UX.",
    },
    work: {
      deploysTitle: "En producción",
      deploysSubtitle: "Proyectos para clientes reales, desplegados y accesibles ahora mismo.",
      openLive: "Abrir en vivo",
      repo: "Código",
      previewUnavailable: "Este sitio no permite vista previa embebida. Abrilo en vivo.",
      deployments: [
        {
          key: "jowerlifting",
          name: "Jowerlifting",
          tagline: "Web y gestión para entrenador personal",
          description:
            "Sitio público de un entrenador y, detrás, una app para gestionar clientes, rutinas y planes de alimentación.",
          stack: ["Express", "Prisma", "PostgreSQL", "React"],
          url: "https://pizarra-api.onrender.com",
          domain: "pizarra-api.onrender.com",
          preview: false,
        },
        {
          key: "abuela",
          name: "La Casa de la Abuela",
          tagline: "Carta digital con pedido por WhatsApp",
          description:
            "Carta de un restaurante vallecaucano: el menú del día se actualiza desde una hoja de cálculo y el pedido sale por WhatsApp.",
          stack: ["JavaScript", "Google Sheets", "Cloudflare Workers"],
          url: "https://la-casa-de-la-abuela.bs-web.workers.dev",
          domain: "la-casa-de-la-abuela.bs-web.workers.dev",
        },
        {
          key: "costiky",
          name: "Costiky",
          tagline: "Carta digital con pedido por WhatsApp",
          description:
            "Carta de un restaurante de mariscos con menú del día editable desde una hoja de cálculo y pedido por WhatsApp.",
          stack: ["JavaScript", "Google Sheets", "Vercel"],
          url: "https://costiky.vercel.app",
          domain: "costiky.vercel.app",
        },
      ],
    },
    langToggle: "EN",
  },
  en: {
    meta: { domain: "brahiam.dev" },
    hero: {
      name: "Brahiam Soto",
      headline: "Web development and UI/UX.",
    },
    work: {
      deploysTitle: "In production",
      deploysSubtitle: "Projects for real clients, deployed and reachable right now.",
      openLive: "Open live",
      repo: "Code",
      previewUnavailable: "This site doesn't allow embedded previews. Open it live.",
      deployments: [
        {
          key: "jowerlifting",
          name: "Jowerlifting",
          tagline: "Website and management for a personal trainer",
          description:
            "A trainer's public site and, behind it, an app to manage clients, routines and meal plans.",
          stack: ["Express", "Prisma", "PostgreSQL", "React"],
          url: "https://pizarra-api.onrender.com",
          domain: "pizarra-api.onrender.com",
          preview: false,
        },
        {
          key: "abuela",
          name: "La Casa de la Abuela",
          tagline: "Digital menu with WhatsApp ordering",
          description:
            "Menu for a Valle del Cauca restaurant: the daily menu updates from a spreadsheet and orders go out via WhatsApp.",
          stack: ["JavaScript", "Google Sheets", "Cloudflare Workers"],
          url: "https://la-casa-de-la-abuela.bs-web.workers.dev",
          domain: "la-casa-de-la-abuela.bs-web.workers.dev",
        },
        {
          key: "costiky",
          name: "Costiky",
          tagline: "Digital menu with WhatsApp ordering",
          description:
            "Menu for a seafood restaurant with a daily menu editable from a spreadsheet and ordering via WhatsApp.",
          stack: ["JavaScript", "Google Sheets", "Vercel"],
          url: "https://costiky.vercel.app",
          domain: "costiky.vercel.app",
        },
      ],
    },
    langToggle: "ES",
  },
};
