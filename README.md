# Portafolio — José Miguel Batista

Sitio web portafolio de una sola página, bilingüe (ES/EN), con tema claro/oscuro, hecho con **HTML, CSS y JavaScript vanilla** — sin frameworks ni build step. Se despliega gratis en cualquier hosting estático.

**Diseño**: columna estrecha con marco lateral, tipografía serif (Source Serif 4) para el texto, monoespaciada (JetBrains Mono) para etiquetas y chips, acento ámbar, dock de navegación flotante y animaciones ligadas al scroll.

## Estructura

```
portfolio/
├── index.html            # Toda la página (fuente del texto en español)
├── css/styles.css        # Sistema de diseño (tokens claro/oscuro al inicio)
├── js/i18n.js            # Diccionario en inglés + textos que usa main.js
├── js/main.js            # Tema, idioma, dock, pestañas y formulario
├── assets/
│   ├── favicon.svg       # Icono del sitio (marca «jm» con punto ámbar)
│   ├── og-image.png      # Imagen al compartir en redes (1200×630)
│   ├── og-template.html  # Plantilla para regenerar og-image.png
│   └── img/              # Foto y capturas de proyectos
├── robots.txt / sitemap.xml
└── README.md
```

## Ver el sitio en local

```bash
python3 -m http.server 8000
```

Luego abre `http://localhost:8000`. (Las fuentes necesitan conexión.)

## ✏️ Qué personalizar

| Qué | Dónde | Cómo |
|---|---|---|
| **Email de contacto** | `js/main.js` → `CONTACT_EMAIL` | Adonde llega el formulario (se abre el correo del visitante ya redactado). |
| **Textos en español** | `index.html` | El HTML es la fuente del español: edita ahí el texto. |
| **Textos en inglés** | `js/i18n.js` → `I18N_EN` | Cada clave corresponde a un `data-i18n` del HTML. |
| **Tu foto** | `assets/img/foto.jpg` | Retrato 600×750 (4:5). Se muestra recortada en círculo en «Sobre mí» y en miniatura en el pie. |
| **Capturas de proyectos** | `assets/img/*.jpg` | La tienda (1200×750), el aula (1400×807), el muro del Club (1400×805) y las tres pantallas de la app (540×1174). |
| **Experiencia y proyectos** | `index.html` (secciones `#experiencia` y `#proyectos`) | Duplica un `tl-item` o una `card` y crea sus claves en `js/i18n.js`. |
| **Ubicación** | `index.html` (clave `hero.location`) y `js/i18n.js` | La línea «Con base en» del hero. |
| **Colores y tipografía** | `css/styles.css` → tokens en `:root` y `html.dark` | Claro: fondo `#fcfaf7`, marca `#915c00`. Oscuro: fondo `#141414`, marca `#e0a458`. |

## 🚀 Publicación

El sitio está en GitHub Pages con dominio propio (`CNAME` → `josemiguelbatista.site`). Cada push a `main` publica automáticamente.

### Regenerar la imagen OG

Si cambias textos o colores de marca: abre `assets/og-template.html` en el navegador, captura el recuadro a exactamente 1200×630 y guárdalo como `assets/og-image.png`.

## ✅ Checklist antes de publicar

- [x] Dominio configurado (`josemiguelbatista.site` en CNAME, canonical, OG, sitemap y robots)
- [x] Foto personal y capturas de Planifesto
- [x] WhatsApp enlazado
- [x] Toggle ES/EN y tema claro/oscuro probados
- [x] Probado en móvil y escritorio
- [ ] LinkedIn (añadir a «Encuéntrame en» y al `sameAs` del JSON-LD cuando exista)
