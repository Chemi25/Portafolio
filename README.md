# Portafolio — José Miguel Batista

Sitio web portafolio de una sola página, bilingüe (ES/EN), hecho con **HTML, CSS y JavaScript vanilla** — sin frameworks ni build step. Se despliega gratis en cualquier hosting estático.

## Estructura

```
portfolio/
├── index.html            # Toda la página (secciones ancla)
├── css/styles.css        # Estilos (variables de diseño al inicio)
├── js/i18n.js            # TEXTOS del sitio en ES y EN + motor de traducción
├── js/main.js            # Interacciones + ⚙️ CONFIGURACIÓN PERSONAL (WhatsApp, redes)
├── assets/
│   ├── favicon.svg       # Icono del sitio (iniciales JB)
│   ├── og-image.png      # Imagen al compartir en redes (1200×630)
│   ├── og-template.html  # Plantilla para regenerar og-image.png
│   └── img/              # Pon aquí tu foto y capturas de proyectos
├── robots.txt / sitemap.xml
└── README.md
```

## Ver el sitio en local

```bash
cd portfolio && python3 -m http.server 8000
```

Luego abre `http://localhost:8000`. (También puedes abrir `index.html` con doble clic, pero el botón "Copiar email" solo funciona con servidor.)

## ✏️ Qué personalizar

| Qué | Dónde | Cómo |
|---|---|---|
| **Número de WhatsApp** | `js/main.js` → `WHATSAPP_NUMBER` | Ya configurado (`18496074188`). Vacío = el enlace no aparece. |
| **GitHub y LinkedIn** | `js/main.js` → `GITHUB_URL`, `LINKEDIN_URL` | GitHub ya puesto (`https://github.com/Chemi25`), también en el `sameAs` del JSON-LD. Falta LinkedIn: pon la URL completa y añádela al `sameAs` de `index.html`. Vacía = ese enlace del pie no aparece. |
| **Tu foto** | `assets/img/foto.jpg` | Ya incluida (retrato 600×750, proporción 4:5). Para cambiarla, reemplaza el archivo respetando esa proporción; el texto alternativo está en `js/i18n.js` (`about.imgAlt`). |
| **Capturas de Planifesto** | `assets/img/planifesto.jpg`, `planifesto-curso.jpg`, `planifesto-club.jpg` | Capturas reales del sitio en vivo: la portada (1200×750) y las páginas del curso y del Club (1200×857). Para actualizarlas, reemplaza el archivo respetando su tamaño. |
| **Maqueta del hero** | `assets/img/planifesto.jpg` + `planifesto-movil.jpg` | El portátil y el móvil están dibujados con CSS (`.mockup`); lo único que se cambia son esas dos capturas: escritorio 1200×750 y móvil 440×952. |
| **Compromisos** | `js/i18n.js` → claves `promises.*` | Los seis compromisos de la sección "Trabajar conmigo". Ajústalos a lo que de verdad puedas sostener: son una promesa pública. |
| **Banda de cierre** | `js/i18n.js` → claves `ctaband.*` | El titular y el botón de la banda clara que va antes de Contacto. |
| **Piezas de Planifesto** | `js/i18n.js` → claves `projects.featured.pc1…pc4` | Las cuatro piezas del ecosistema (plataforma, curso, Club y app). Para añadir otra, duplica un `.piece` en `index.html` y crea sus claves en ambos idiomas. |
| **Cifras reales de Planifesto** | `js/i18n.js` → claves `projects.featured.p1` / `p2` | Cuando tengas cifras de ventas o tráfico, incorpóralas al texto: los datos concretos dan credibilidad. |
| **Añadir un proyecto** | `index.html` (filas con TODO "PROYECTO PLANTILLA") | Quita el atributo `hidden`, edita los textos en `js/i18n.js` (claves `projects.p2.*` / `p3.*`) y pon los enlaces reales. Duplica una fila si necesitas más. |
| **Activar testimonios** | `index.html` (sección `#testimonios`) | Quita `hidden` al `<section>`, rellena textos en `js/i18n.js` (claves `testimonials.*`) y descomenta el enlace del nav. |
| **Stack de apps móviles** | `index.html` (tercera fila de Qué hago) | Cambia la línea iOS · Android por tu stack real (React Native, Flutter, Swift…). |
| **Cualquier texto** | `js/i18n.js` | Todos los textos viven ahí, en español e inglés. Edita ambos idiomas. |
| **Colores y tipografía** | `css/styles.css` → variables `:root` al inicio | Fondo `--bg: #030f18`, acento `--accent: #43b7ff` y los resplandores (`--glow`). Titulares en Oswald y cuerpo en Source Sans 3 (Google Fonts). |
| **Animaciones** | `css/styles.css` (bloque 16) y `js/main.js` | Los bloques con el atributo `data-reveal` entran al hacer scroll, escalonados entre hermanos. Todo se desactiva con `prefers-reduced-motion` y hay una red de seguridad que los muestra igual si el observador no llega a ejecutarse. |
| **Dominio propio** | `index.html`, `robots.txt`, `sitemap.xml` | Busca `TU-DOMINIO.com` (canonical, og:url, og:image, JSON-LD, sitemap, robots) y reemplázalo. |

> Truco: busca `TODO` en todo el proyecto para ver los puntos pendientes de personalizar.

## 🚀 Desplegar gratis

El sitio ya tiene git iniciado y un commit. Elige una opción:

### Opción A — GitHub Pages

```bash
gh repo create portfolio --public --source=. --push
```

(o crea el repo en github.com y haz `git remote add origin … && git push -u origin main`)

Luego en GitHub: **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**.
Tu sitio quedará en `https://TU-USUARIO.github.io/portfolio/`.

### Opción B — Vercel

```bash
npx vercel
```

(o importa el repo en [vercel.com](https://vercel.com): framework "Other", sin build command). URL: `portfolio-xxx.vercel.app`.

### Opción C — Netlify (la más rápida, sin cuenta git)

Arrastra la carpeta `portfolio/` a [app.netlify.com/drop](https://app.netlify.com/drop).

### Dominio propio (recomendado para clientes)

1. Compra el dominio (Namecheap, Cloudflare, Porkbun…) — ej. `josemiguelbatista.dev`.
2. En tu hosting (Pages/Vercel/Netlify) añade el dominio y sigue sus instrucciones de DNS.
3. Reemplaza `TU-DOMINIO.com` en los archivos (ver tabla de arriba).

### Regenerar la imagen OG

Si cambias textos/colores de marca: abre `assets/og-template.html` en el navegador, haz una captura de exactamente 1200×630 y guárdala como `assets/og-image.png`.

## ✅ Checklist antes de publicar

- [x] Número de WhatsApp puesto (o decidido dejarlo fuera)
- [x] Foto personal y captura de Planifesto
- [ ] Enlaces GitHub/LinkedIn (GitHub listo; falta LinkedIn)
- [ ] Probado en móvil y escritorio
- [ ] Toggle ES/EN revisado en ambos idiomas
- [ ] `TU-DOMINIO.com` reemplazado (si ya hay dominio)
