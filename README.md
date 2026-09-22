<div align="center">

# brahiam.dev

**Portfolio de Brahiam Soto — backend developer**

Sitio de una sola página, bilingüe (ES/EN), con una sección de proyectos que embebe en vivo los despliegues reales en Vercel.

[![React](https://img.shields.io/badge/React-19-f4f4f2?style=flat-square&logo=react&logoColor=0a0a0a)](#)
[![Vite](https://img.shields.io/badge/Vite-8-f4f4f2?style=flat-square&logo=vite&logoColor=0a0a0a)](#)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-f4f4f2?style=flat-square&logo=vercel&logoColor=0a0a0a)](#)

</div>

<br>

## Concepto

El sitio está pensado como si fuera la documentación de una API: la navegación usa rutas (`/about /stack /work /experience /contact`), el hero muestra un "status card" con pares clave/valor que se resuelven en secuencia al cargar, y el stack se lista como un manifiesto de dependencias. Paleta estrictamente monocromática (blanco / negro / gris) — el único color en toda la página lo aportan las capturas en vivo de los proyectos reales en la sección `/work`.

## Funcionalidades

- **Bilingüe ES/EN** con switch persistente (`localStorage`), sin librería de i18n — contexto propio en [`src/i18n`](src/i18n).
- **Despliegues en vivo**: dos proyectos destacados se muestran con un `<iframe>` real del sitio en producción (no una captura estática), escalado de forma responsiva con CSS container queries, dentro de un frame estilo navegador que muestra el dominio real.
- **Más en GitHub**: listado liviano de otros repositorios, con link a demo (si existe) y al código.
- Responsive, navegación por teclado visible (`:focus-visible`), respeta `prefers-reduced-motion`.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | React 19 + Vite 8 |
| Estilos | CSS plano con variables de diseño (sin framework) |
| Tipografía | Space Grotesk (títulos) · IBM Plex Sans (cuerpo) · IBM Plex Mono (datos técnicos) |
| i18n | Contexto propio en React (`LanguageContext`) |
| Deploy | Vercel |

## Estructura

```
src/
├── components/       # Navbar, Hero, About, Stack, Work, Experience, Contact, Footer
├── i18n/
│   ├── translations.js       # Todo el copy ES/EN y los datos de proyectos
│   └── LanguageContext.jsx   # Contexto + hook useLanguage()
├── App.jsx            # Composición de secciones
├── App.css            # Sistema visual completo
└── index.css           # Tokens (color, tipografía) y reset
```

## Editar contenido

Todo el texto del sitio —nombre, bio, stack, proyectos destacados, experiencia, contacto— vive en [`src/i18n/translations.js`](src/i18n/translations.js), separado en dos objetos (`es` / `en`) con la misma forma. Para agregar o actualizar un proyecto destacado en `/work`, se edita el array `work.deployments` (o `work.more` para el listado simple) en ambos idiomas.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción a dist/
npm run preview  # sirve el build de producción localmente
```

## Deploy

Desplegado en Vercel directamente desde este repositorio (framework autodetectado: Vite). Cualquier push a `main` genera un nuevo deploy.
