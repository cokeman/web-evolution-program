# Web Evolution Program

Landing page de alto rendimiento para el servicio de **mejora continua de sitios web** de Cocosolution. Disponible en **español** (por defecto) e **inglés**.

## Tech Stack

- **React 19** con Create React App
- **CSS custom** con variables, glass-morphism y animaciones (scroll reveal, partículas)
- **react-snap** para pre-renderizado estático (SSG)
- **i18n casero** basado en variable de entorno (`REACT_APP_LANG`)
- **GitHub Pages** como hosting

## Inicio rápido

```bash
cd web-evolution
npm install
npm start
```

Arranca en `http://localhost:3000` en español.

Para verlo en inglés:

```bash
REACT_APP_LANG=en npm start
```

## Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de producción (idioma único) |
| `npm run build:i18n` | Build bilingüe (genera `index.html` + `index-en.html`) |
| `npm test` | Tests con Jest + Testing Library |

## Estructura del proyecto

```
web-evolution/
├── src/
│   ├── components/       # Componentes React (Nav, Hero, Pricing, FAQ, etc.)
│   ├── hooks/            # useScrollReveal
│   ├── i18n/             # Traducciones (es.js, en.js) y hook useTranslations
│   ├── App.js            # Composición principal de secciones
│   ├── App.css           # Estilos globales y por componente
│   └── index.js          # Entry point con hidratación para react-snap
├── scripts/
│   └── build-i18n.sh     # Script de build bilingüe
├── public/
│   └── index.html        # Template con placeholders de idioma
└── build/                # Output de producción
```

## Secciones de la landing

Nav > Hero > Problem > Service > CaseStudy > Benefits > Pricing > Differentiators > FAQ > CtaFinal > Footer

## Internacionalización (i18n)

El sistema es ligero y sin dependencias externas:

1. Los textos viven en `src/i18n/es.js` y `src/i18n/en.js` como objetos JS
2. Los componentes acceden a ellos con `const t = useTranslations()`
3. El idioma se define con la variable `REACT_APP_LANG` en tiempo de build
4. `build-i18n.sh` genera dos builds estáticos pre-renderizados y los combina en un solo directorio `build/`

## Despliegue

El proyecto se despliega en **GitHub Pages** bajo la ruta `/web-evolution-program/`.

```bash
cd web-evolution
npm run build:i18n    # Genera build/ con ambos idiomas
```

Archivos generados:
- `build/index.html` — versión en español
- `build/index-en.html` — versión en inglés

## Design tokens

| Token | Valor |
|-------|-------|
| Primary | `#272B5F` |
| Accent pink | `#FF3B7C` |
| Accent teal | `#00E5C4` |
| Accent yellow | `#FFD447` |
| Border radius | `32px` / `100px` (pills) |
| Fuente body | Inter |
| Fuente headings | Space Grotesk |
