export const translations = {
  es: {
    meta: { domain: "brahiam.dev" },
    nav: {
      about: "/about",
      stack: "/stack",
      work: "/work",
      experience: "/experience",
      contact: "/contact",
    },
    hero: {
      name: "Brahiam Soto",
      headline: "Construyo el sistema detrás de la pantalla: APIs REST, autenticación y datos en tiempo real.",
      sub: "Backend developer autodidacta. Node.js, Express, PostgreSQL y Prisma como base.",
      ctaPrimary: "Ver despliegues",
      ctaSecondary: "Escribirme",
      status: [
        { label: "rol", value: "backend developer" },
        { label: "stack", value: "node · express · postgresql · prisma" },
        { label: "base", value: "colombia, remoto ok" },
        { label: "disponibilidad", value: "buscando primer empleo" },
      ],
    },
    about: {
      route: "/about",
      title: "Sobre mí",
      paragraphs: [
        "Tengo 21 años y aprendí a programar por mi cuenta antes de formalizarlo: soy Técnico en Programación de Software y cursé 2 semestres de Ingeniería de Sistemas en la Uceva.",
        "Me enfoco en la parte que no se ve: diseño de APIs, modelado de datos en PostgreSQL con Prisma, autenticación con JWT y comunicación en tiempo real con WebSockets.",
        "Tengo inglés certificado nivel B2, suficiente para trabajar con equipos internacionales sin fricción. Busco mi primer rol como backend developer, remoto o en Colombia.",
      ],
    },
    stack: {
      route: "/stack",
      title: "Stack",
      groups: [
        { label: "backend", items: ["Node.js", "Express", "REST APIs", "JWT / Auth", "Socket.IO", "WebSockets"] },
        { label: "datos", items: ["PostgreSQL", "Prisma ORM", "Modelado relacional"] },
        { label: "frontend", items: ["React", "Vite", "JavaScript", "HTML / CSS"] },
        { label: "herramientas", items: ["Git / GitHub", "Jest / Supertest", "Postman", "Vercel"] },
      ],
    },
    work: {
      route: "/work",
      title: "Proyectos",
      deploysTitle: "En producción",
      deploysSubtitle: "Proyectos para clientes reales, desplegados y accesibles ahora mismo.",
      openLive: "Abrir en vivo",
      repo: "Código",
      previewUnavailable: "Este sitio no permite vista previa embebida. Abrilo en vivo.",
      moreTitle: "Más en GitHub",
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
      more: [
        {
          name: "CANAL",
          description: "Chat por salas en tiempo real con WebSockets, JWT y historial persistente.",
          repoUrl: "https://github.com/BrahiamS7/chat-api",
          demoUrl: "https://chat-api-eosin.vercel.app",
        },
        {
          name: "La Brasa",
          description: "Backend y panel de administración para un restaurante: mesas, productos, pedidos y turnos.",
          repoUrl: "https://github.com/BrahiamS7/Restaurante",
          demoUrl: "https://restaurante-beryl-nine.vercel.app",
        },
        {
          name: "blog-api",
          description: "API REST para un blog: autenticación y CRUD de artículos.",
          repoUrl: "https://github.com/BrahiamS7/blog-api",
          demoUrl: "https://blog-api-jade-iota.vercel.app",
        },
        {
          name: "Reservas",
          description:
            "Sistema multi-tenant de reservas para canchas deportivas, con anti-solapamiento a nivel de base de datos y login por WhatsApp OTP.",
          repoUrl: "https://github.com/BrahiamS7/reservas-proyect",
          demoUrl: null,
        },
      ],
    },
    experience: {
      route: "/experience",
      title: "Experiencia y educación",
      currentLabel: "Ahora",
      currentTitle: "En transición hacia desarrollo de software",
      currentDescription:
        "Trabajo en el sector de servicio mientras me formo de manera autodidacta y construyo proyectos backend reales. El objetivo es claro: conseguir mi primer empleo como backend developer.",
      educationLabel: "Educación",
      education: [
        {
          title: "Técnico en Programación de Software",
          period: "",
          description: "Formación técnica enfocada en desarrollo de software.",
        },
        {
          title: "Ingeniería de Sistemas — Uceva",
          period: "2 semestres cursados",
          description: "Fundamentos de ciencias de la computación y desarrollo de software.",
        },
        {
          title: "Inglés — Certificación B2",
          period: "",
          description: "Comunicación fluida en inglés para trabajar con equipos internacionales.",
        },
      ],
    },
    contact: {
      route: "/contact",
      title: "Contacto",
      subtitle: "¿Tenés una oportunidad o querés charlar? Escribime.",
      fields: [
        { label: "email", value: "bfsoto16@gmail.com", href: "mailto:bfsoto16@gmail.com" },
        { label: "github", value: "github.com/BrahiamS7", href: "https://github.com/BrahiamS7" },
      ],
      cvLabel: "Descargar CV",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Hecho con React + Vite.",
    },
    langToggle: "EN",
  },
  en: {
    meta: { domain: "brahiam.dev" },
    nav: {
      about: "/about",
      stack: "/stack",
      work: "/work",
      experience: "/experience",
      contact: "/contact",
    },
    hero: {
      name: "Brahiam Soto",
      headline: "I build the system behind the screen: REST APIs, authentication, and real-time data.",
      sub: "Self-taught backend developer. Node.js, Express, PostgreSQL and Prisma as a base.",
      ctaPrimary: "View deployments",
      ctaSecondary: "Get in touch",
      status: [
        { label: "role", value: "backend developer" },
        { label: "stack", value: "node · express · postgresql · prisma" },
        { label: "based", value: "colombia, open to remote" },
        { label: "availability", value: "looking for first role" },
      ],
    },
    about: {
      route: "/about",
      title: "About",
      paragraphs: [
        "I'm 21 and learned to code on my own before formalizing it: I hold a Technical degree in Software Programming and completed 2 semesters of Systems Engineering at Uceva.",
        "I focus on the part you don't see: API design, relational data modeling with PostgreSQL and Prisma, JWT authentication, and real-time communication with WebSockets.",
        "I have a certified B2 English level, enough to work with international teams without friction. I'm looking for my first role as a backend developer, remote or in Colombia.",
      ],
    },
    stack: {
      route: "/stack",
      title: "Stack",
      groups: [
        { label: "backend", items: ["Node.js", "Express", "REST APIs", "JWT / Auth", "Socket.IO", "WebSockets"] },
        { label: "data", items: ["PostgreSQL", "Prisma ORM", "Relational modeling"] },
        { label: "frontend", items: ["React", "Vite", "JavaScript", "HTML / CSS"] },
        { label: "tools", items: ["Git / GitHub", "Jest / Supertest", "Postman", "Vercel"] },
      ],
    },
    work: {
      route: "/work",
      title: "Projects",
      deploysTitle: "In production",
      deploysSubtitle: "Projects for real clients, deployed and reachable right now.",
      openLive: "Open live",
      repo: "Code",
      previewUnavailable: "This site doesn't allow embedded previews. Open it live.",
      moreTitle: "More on GitHub",
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
      more: [
        {
          name: "CANAL",
          description: "Real-time chat rooms with WebSockets, JWT and persisted history.",
          repoUrl: "https://github.com/BrahiamS7/chat-api",
          demoUrl: "https://chat-api-eosin.vercel.app",
        },
        {
          name: "La Brasa",
          description: "Backend and admin panel for a restaurant: tables, products, orders and shifts.",
          repoUrl: "https://github.com/BrahiamS7/Restaurante",
          demoUrl: "https://restaurante-beryl-nine.vercel.app",
        },
        {
          name: "blog-api",
          description: "REST API for a blog: authentication and article CRUD.",
          repoUrl: "https://github.com/BrahiamS7/blog-api",
          demoUrl: "https://blog-api-jade-iota.vercel.app",
        },
        {
          name: "Reservas",
          description:
            "Multi-tenant booking system for sports courts, with database-level overlap prevention and WhatsApp OTP login.",
          repoUrl: "https://github.com/BrahiamS7/reservas-proyect",
          demoUrl: null,
        },
      ],
    },
    experience: {
      route: "/experience",
      title: "Experience & education",
      currentLabel: "Now",
      currentTitle: "Transitioning into software development",
      currentDescription:
        "I work in the service industry while training myself and building real backend projects. The goal is clear: land my first job as a backend developer.",
      educationLabel: "Education",
      education: [
        {
          title: "Technical Degree in Software Programming",
          period: "",
          description: "Technical training focused on software development.",
        },
        {
          title: "Systems Engineering — Uceva",
          period: "2 semesters completed",
          description: "Computer science fundamentals and software development.",
        },
        {
          title: "English — B2 Certification",
          period: "",
          description: "Fluent communication in English to work with international teams.",
        },
      ],
    },
    contact: {
      route: "/contact",
      title: "Contact",
      subtitle: "Have an opportunity or want to chat? Reach out.",
      fields: [
        { label: "email", value: "bfsoto16@gmail.com", href: "mailto:bfsoto16@gmail.com" },
        { label: "github", value: "github.com/BrahiamS7", href: "https://github.com/BrahiamS7" },
      ],
      cvLabel: "Download CV",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with React + Vite.",
    },
    langToggle: "ES",
  },
};
