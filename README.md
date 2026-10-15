<div align="center">

# brahiam.dev

**Portfolio de Brahiam Soto — desarrollo web UI/UX**

Una presentación y una sección de proyectos que embebe en vivo los sitios reales desplegados. Bilingüe (ES/EN).

[![React](https://img.shields.io/badge/React-19-f4f4f2?style=flat-square&logo=react&logoColor=0a0a0a)](#)
[![Vite](https://img.shields.io/badge/Vite-8-f4f4f2?style=flat-square&logo=vite&logoColor=0a0a0a)](#)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-f4f4f2?style=flat-square&logo=vercel&logoColor=0a0a0a)](#)

</div>

<br>

## Qué incluye

- **Presentación**: nombre y especialidad.
- **En producción**: tarjetas con un `<iframe>` real de cada proyecto desplegado, renderizado a tamaño de celular y escalado con `ResizeObserver`. Si un sitio bloquea iframes (`X-Frame-Options`), la tarjeta usa `preview: false` y muestra un aviso.
- **ES/EN** con switch persistente (`localStorage`), sin librería de i18n.
- Paleta monocromática, `:focus-visible` y `prefers-reduced-motion` respetado.

## Editar contenido

Todo el texto y los proyectos viven en [`src/i18n/translations.js`](src/i18n/translations.js), en dos objetos (`es` / `en`) con la misma forma. Para agregar un proyecto, se añade un objeto a `work.deployments` en ambos idiomas (`repoUrl` es opcional).

## Estructura

```
src/
├── components/   # Navbar, Hero, Work
├── i18n/         # translations.js + LanguageContext.jsx
├── App.jsx
├── App.css
└── index.css     # tokens (color, tipografía) y reset
```

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción a dist/
```

Se despliega en Vercel desde `main`: cada push genera un nuevo deploy.
