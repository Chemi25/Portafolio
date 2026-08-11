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
| **Número de WhatsApp** | `js/main.js` → `WHATSAPP_NUMBER` | Solo dígitos con código de país, ej. `"18095551234"`. Vacío = el botón no aparece. |
| **GitHub y LinkedIn** | `js/main.js` → `GITHUB_URL`, `LINKEDIN_URL` | URLs completas. Vacías = los iconos del footer no aparecen. También añádelas al `sameAs` del JSON-LD en `index.html`. |
| **Tu foto** | `index.html` (sección Sobre mí) | Guarda `assets/img/foto.jpg` y descomenta la `<figure>` marcada con TODO. |
| **Captura de Planifesto** | `assets/img/planifesto.jpg` | Ya incluida (captura real del sitio en vivo). Para actualizarla, reemplaza el archivo (1200×750). |
| **Cifras reales de Planifesto** | `js/i18n.js` → claves `projects.featured.p1` / `p2` | Cuando tengas cifras de ventas o tráfico, incorpóralas al texto: los datos concretos dan credibilidad. |
| **Añadir un proyecto** | `index.html` (filas con TODO "PROYECTO PLANTILLA") | Quita el atributo `hidden`, edita los textos en `js/i18n.js` (claves `projects.p2.*` / `p3.*`) y pon los enlaces reales. Duplica una fila si necesitas más. |
| **Activar testimonios** | `index.html` (sección `#testimonios`) | Quita `hidden` al `<section>`, rellena textos en `js/i18n.js` (claves `testimonials.*`) y descomenta el enlace del nav. |
| **Stack de apps móviles** | `index.html` (tercera fila de Qué hago) | Cambia la línea iOS · Android por tu stack real (React Native, Flutter, Swift…). |
| **Cualquier texto** | `js/i18n.js` | Todos los textos viven ahí, en español e inglés. Edita ambos idiomas. |
| **Colores y tipografía** | `css/styles.css` → variables `:root` al inicio | `--accent` cambia el color de acento; los titulares usan la fuente Fraunces (Google Fonts). |
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

- [ ] Número de WhatsApp puesto (o decidido dejarlo fuera)
- [ ] Foto personal y captura de Planifesto
- [ ] Enlaces GitHub/LinkedIn
- [ ] Probado en móvil y escritorio
- [ ] Toggle ES/EN revisado en ambos idiomas
- [ ] `TU-DOMINIO.com` reemplazado (si ya hay dominio)
