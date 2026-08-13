/* ============================================================
   i18n — Textos del sitio en español e inglés
   ------------------------------------------------------------
   ✏️ PARA EDITAR TEXTOS: cambia los valores aquí (en ambos
   idiomas). Cada clave corresponde a un atributo data-i18n
   en index.html. No toques la lógica del final del archivo.
   ============================================================ */

const translations = {
  /* ---------------- ESPAÑOL ---------------- */
  es: {
    "meta.title": "José Miguel Batista · Desarrollador web y móvil freelance",
    "meta.description": "Desarrollador freelance full-stack. Webs, tiendas online y apps móviles. Creador de Planifesto. Disponible para proyectos.",

    "skip": "Saltar al contenido",

    "nav.services": "Qué hago",
    "nav.projects": "Trabajo",
    "nav.about": "Sobre mí",
    "nav.process": "Proceso",
    "nav.promises": "Compromisos",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "nav.menuLabel": "Abrir menú",
    "nav.cta": "Escríbeme",

    "hero.topper": "Código escrito a mano, sin plantillas",
    "hero.title": "Construyo webs, tiendas online y",
    "hero.titleAccent": "apps móviles",
    "hero.mockupAlt": "Planifesto, en pantalla de escritorio y en móvil",
    "hero.subtitle": "Soy José Miguel Batista, desarrollador freelance. Me ocupo del ciclo completo: diseño, desarrollo, SEO y automatización. Mi mejor carta de presentación es Planifesto, la plataforma que construí de cero y que hoy vende cursos, plantillas y una membresía en español.",
    "hero.cta.contact": "Escríbeme",
    "hero.cta.work": "Ver mi trabajo",
    "hero.availability": "Disponible para nuevos proyectos.",

    "services.topper": "Servicios",
    "services.lead": "Del primer boceto al servidor. Me ocupo del ciclo completo para que tú solo tengas que decidir.",
    "services.title": "Qué hago",
    "services.s1.title": "Desarrollo full-stack",
    "services.s1.desc": "Aplicaciones web completas, del frontend a la base de datos y el despliegue.",
    "services.s2.title": "Webs y tiendas online",
    "services.s2.desc": "Landing pages, webs corporativas y e-commerce, con la velocidad y el SEO como prioridad.",
    "services.s3.title": "Apps móviles",
    "services.s3.desc": "Aplicaciones para iOS y Android, del prototipo a la tienda.",

    "projects.topper": "Portafolio",
    "projects.lead": "No es una maqueta: es un producto en producción, con su tienda, su curso, su comunidad y su app en las dos tiendas.",
    "projects.title": "Trabajo seleccionado",
    "projects.featured.meta": "Producto propio · En producción",
    "projects.featured.p1": "Planifesto es una plataforma de educación financiera para jóvenes hispanohablantes: cursos, plantillas y herramientas digitales. La construí de principio a fin: el catálogo y los pagos, la entrega automatizada de cada compra con Google Apps Script, la analítica y el SEO que la posiciona en una veintena de países.",
    "projects.featured.p2": "La parte difícil no fue el código, fue montar un sistema que venda y entregue solo: cada pedido se procesa, se entrega y se registra sin intervención manual.",
    "projects.featured.visit": "Visitar planifestord.com",
    "projects.featured.imgAlt": "Captura de la página principal de Planifesto",
    "projects.featured.piecesLabel": "Cuatro piezas del mismo producto",
    "projects.featured.pc1.t": "La plataforma y la tienda",
    "projects.featured.pc1.d": "El sitio, el catálogo y el cobro corren sobre Astro y Supabase. Detrás hay un panel interno donde el equipo publica productos, artículos, talleres y webinars sin tocar código.",
    "projects.featured.pc2.t": "El curso",
    "projects.featured.pc2.d": "«Financieramente Responsable de 0 a 100» tiene su propia área de alumno: acceso con cuenta, módulos y lecciones en video, progreso guardado y cupones de descuento. Se paga con tarjeta o PayPal y el acceso es inmediato.",
    "projects.featured.pc2.link": "Ver el curso",
    "projects.featured.pc3.t": "Planifesto Club",
    "projects.featured.pc3.d": "La membresía: foro privado de la comunidad, clases en vivo cada semana con su calendario y su recordatorio, mini cursos a ritmo propio y un perfil con puntos y niveles.",
    "projects.featured.pc3.link": "Ver el Club",
    "projects.featured.pc4.t": "PlaniClub, la app",
    "projects.featured.pc4.d": "La app del Club para iOS y Android, hecha con Capacitor sobre la misma plataforma: abre el área de miembros con la sesión ya iniciada, con notificaciones push, arranque nativo y pantalla de sin conexión. Publicada en las dos tiendas.",
    "projects.featured.shotCurso": "La página del curso",
    "projects.featured.shotCursoAlt": "Captura de la página del curso Financieramente Responsable de 0 a 100",
    "projects.featured.shotClub": "La página del Club",
    "projects.featured.shotClubAlt": "Captura de la página de Planifesto Club",
    "projects.featured.shotAula": "El aula, por dentro",
    "projects.featured.shotAulaAlt": "Área de alumno del curso: lista de módulos, barra de progreso y lección en video",
    "projects.featured.shotMuro": "El Club, por dentro",
    "projects.featured.shotMuroAlt": "Muro de la comunidad del Club: editor de publicaciones, perfil con puntos y tabla de líderes",
    "projects.featured.appLabel": "La app por dentro",
    "projects.featured.app1": "Presupuesto del mes",
    "projects.featured.app1Alt": "Pantalla de planificación mensual de PlaniClub, con el presupuesto del mes",
    "projects.featured.app2": "Comunidad",
    "projects.featured.app2Alt": "Foro de la comunidad de PlaniClub, con publicaciones y filtros",
    "projects.featured.app3": "Clases en vivo",
    "projects.featured.app3Alt": "Pantalla de la próxima clase en vivo de PlaniClub, con cuenta atrás y confirmación de asistencia",
    "projects.p2.meta": "Proyecto de cliente · Año",
    "projects.p2.title": "Nombre del proyecto",
    "projects.p2.desc": "Qué hace el proyecto, para quién y qué resultado tuvo. Dos o tres frases concretas valen más que una lista de tecnologías.",
    "projects.p3.meta": "Proyecto de cliente · Año",
    "projects.p3.title": "Nombre del proyecto",
    "projects.p3.desc": "Qué hace el proyecto, para quién y qué resultado tuvo. Dos o tres frases concretas valen más que una lista de tecnologías.",
    "projects.tpl.demo": "Ver en vivo",
    "projects.tpl.code": "Código",
    "projects.more.text": "Ahora mismo tengo espacio para nuevos proyectos.",
    "projects.more.link": "Escríbeme",

    "about.topper": "Sobre mí",
    "about.title": "Trato cada proyecto como si fuera mío",
    "about.imgAlt": "Retrato de José Miguel Batista",
    "about.p1": "Soy desarrollador full-stack y me importa más el resultado que la herramienta: un sitio que carga rápido, se entiende a la primera y le hace ganar dinero a su dueño.",
    "about.p2": "Lanzar mi propio producto me cambió la forma de trabajar. Sé lo que cuesta conseguir cada visita y lo que vale cada venta, así que trato cada proyecto de cliente como si fuera mío.",
    "about.tech": "Trabajo con HTML y CSS, JavaScript, Node.js, Supabase, SQL, Git, Google Apps Script, SEO y Analytics.",

    "promises.topper": "Trabajar conmigo",
    "promises.title": "Lo que te llevas siempre",
    "promises.lead": "Esto es lo que puedes esperar de mí, esté escrito en el contrato o no.",
    "promises.p1.t": "Código escrito a mano",
    "promises.p1.d": "Sin plantillas ni constructores. Tu sitio se escribe línea por línea: pesa poco, carga rápido y no depende de plugins que se rompan solos.",
    "promises.p2.t": "Precio cerrado por escrito",
    "promises.p2.d": "Antes de empezar tienes el alcance, los plazos y el precio en un documento. Si algo cambia por el camino, lo hablamos antes; no aparece en la factura.",
    "promises.p3.t": "Hablas conmigo, no con una agencia",
    "promises.p3.d": "Quien te contesta el mensaje es el mismo que escribe el código. Sin intermediarios, sin gestores de cuenta y sin teléfonos que rebotan.",
    "promises.p4.t": "Respuesta en menos de 24 horas",
    "promises.p4.d": "Te contesto el mismo día o al siguiente. Durante el proyecto sabes en qué punto va sin tener que perseguirme.",
    "promises.p5.t": "Velocidad y SEO desde el primer día",
    "promises.p5.d": "No son un extra que se cobra aparte. El sitio nace ligero, con sus metadatos, su sitemap y sus imágenes optimizadas.",
    "promises.p6.t": "El código es tuyo",
    "promises.p6.d": "Al publicar te entrego todo: el repositorio, los accesos y cómo se actualiza. Me quedo para las mejoras porque quieras, no porque no puedas irte.",

    "ctaband.eyebrow": "Siguiente paso",
    "ctaband.title": "Si llegaste hasta aquí, es porque tienes algo en mente.",
    "ctaband.cta": "Cuéntame qué necesitas",

    "process.topper": "Proceso",
    "process.lead": "Cuatro pasos, sin sorpresas y con algo que ver en cada uno.",
    "process.title": "Cómo trabajo",
    "process.s1.title": "Descubrimiento",
    "process.s1.desc": "Hablamos de tu negocio, objetivos y presupuesto antes de proponer nada.",
    "process.s2.title": "Propuesta",
    "process.s2.desc": "Un plan por escrito: alcance, plazos y precio cerrado.",
    "process.s3.title": "Desarrollo",
    "process.s3.desc": "Iteraciones cortas, con avances que puedes ver y probar.",
    "process.s4.title": "Lanzamiento y soporte",
    "process.s4.desc": "Publicamos, medimos y quedo disponible para mejoras.",

    "testimonials.topper": "Testimonios",
    "testimonials.title": "Lo que dicen mis clientes",
    "testimonials.t1.quote": "«Escribe aquí el testimonio de tu cliente: qué problema tenía, cómo lo resolviste y qué resultado obtuvo.»",
    "testimonials.t1.name": "Nombre del cliente",
    "testimonials.t1.role": "cargo, empresa",
    "testimonials.t2.quote": "«Escribe aquí el testimonio de tu cliente: qué problema tenía, cómo lo resolviste y qué resultado obtuvo.»",
    "testimonials.t2.name": "Nombre del cliente",
    "testimonials.t2.role": "cargo, empresa",

    "contact.topper": "Contacto",
    "contact.title": "¿Tienes un proyecto en mente?",
    "contact.sub": "Escríbeme y te respondo en menos de 24 horas.",
    "contact.copy": "Copiar",
    "contact.copied": "Copiado",
    "contact.whatsapp": "También puedes escribirme por WhatsApp",

    "footer.handmade": "Hecho a mano con HTML, CSS y JavaScript."
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    "meta.title": "José Miguel Batista · Freelance web & mobile developer",
    "meta.description": "Freelance full-stack developer. Websites, online stores and mobile apps. Creator of Planifesto. Available for projects.",

    "skip": "Skip to content",

    "nav.services": "What I do",
    "nav.projects": "Work",
    "nav.about": "About",
    "nav.process": "Process",
    "nav.promises": "Promises",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.menuLabel": "Open menu",
    "nav.cta": "Write to me",

    "hero.topper": "Hand-written code, no templates",
    "hero.title": "I build websites, online stores and",
    "hero.titleAccent": "mobile apps",
    "hero.mockupAlt": "Planifesto, on desktop and on mobile",
    "hero.subtitle": "I'm José Miguel Batista, a freelance developer. I handle the full cycle: design, development, SEO and automation. My best calling card is Planifesto, the platform I built from scratch that today sells courses, templates and a membership in Spanish.",
    "hero.cta.contact": "Write to me",
    "hero.cta.work": "See my work",
    "hero.availability": "Available for new projects.",

    "services.topper": "Services",
    "services.lead": "From the first sketch to the server. I handle the whole cycle so all you have to do is decide.",
    "services.title": "What I do",
    "services.s1.title": "Full-stack development",
    "services.s1.desc": "Complete web applications, from the frontend to the database and deployment.",
    "services.s2.title": "Websites and online stores",
    "services.s2.desc": "Landing pages, business sites and e-commerce, with speed and SEO as the priority.",
    "services.s3.title": "Mobile apps",
    "services.s3.desc": "iOS and Android apps, from prototype to the store.",

    "projects.topper": "Portfolio",
    "projects.lead": "It's not a mockup: it's a product in production, with its store, its course, its community and its app on both stores.",
    "projects.title": "Selected work",
    "projects.featured.meta": "Own product · In production",
    "projects.featured.p1": "Planifesto is a financial education platform for young Spanish speakers: courses, templates and digital tools. I built it end to end: the catalog and checkout, automated delivery of every purchase with Google Apps Script, the analytics, and the SEO that ranks it across some twenty countries.",
    "projects.featured.p2": "The hard part wasn't the code. It was building a system that sells and delivers on its own: every order is processed, delivered and logged without manual work.",
    "projects.featured.visit": "Visit planifestord.com",
    "projects.featured.imgAlt": "Screenshot of the Planifesto homepage",
    "projects.featured.piecesLabel": "Four pieces of the same product",
    "projects.featured.pc1.t": "The platform and the store",
    "projects.featured.pc1.d": "The site, the catalogue and the checkout run on Astro and Supabase. Behind them there's an internal panel where the team publishes products, articles, workshops and webinars without touching code.",
    "projects.featured.pc2.t": "The course",
    "projects.featured.pc2.d": "“Financieramente Responsable de 0 a 100” has its own student area: account access, modules and video lessons, saved progress and discount coupons. Paid by card or PayPal, with access granted immediately.",
    "projects.featured.pc2.link": "See the course",
    "projects.featured.pc3.t": "Planifesto Club",
    "projects.featured.pc3.d": "The membership: a private community forum, live classes every week with their calendar and reminder, self-paced mini courses and a profile with points and levels.",
    "projects.featured.pc3.link": "See the Club",
    "projects.featured.pc4.t": "PlaniClub, the app",
    "projects.featured.pc4.d": "The Club's app for iOS and Android, built with Capacitor on top of the same platform: it opens the members' area already signed in, with push notifications, a native splash screen and an offline screen. Published on both stores.",
    "projects.featured.shotCurso": "The course page",
    "projects.featured.shotCursoAlt": "Screenshot of the Financieramente Responsable de 0 a 100 course page",
    "projects.featured.shotClub": "The Club page",
    "projects.featured.shotClubAlt": "Screenshot of the Planifesto Club page",
    "projects.featured.shotAula": "Inside the classroom",
    "projects.featured.shotAulaAlt": "Course student area: module list, progress bar and video lesson",
    "projects.featured.shotMuro": "Inside the Club",
    "projects.featured.shotMuroAlt": "Club community feed: post editor, profile with points and leaderboard",
    "projects.featured.appLabel": "Inside the app",
    "projects.featured.app1": "Monthly budget",
    "projects.featured.app1Alt": "PlaniClub monthly planning screen showing the month's budget",
    "projects.featured.app2": "Community",
    "projects.featured.app2Alt": "PlaniClub community feed with posts and filters",
    "projects.featured.app3": "Live classes",
    "projects.featured.app3Alt": "PlaniClub next live class screen with countdown and attendance confirmation",
    "projects.p2.meta": "Client project · Year",
    "projects.p2.title": "Project name",
    "projects.p2.desc": "What the project does, who it's for and what result it had. Two or three concrete sentences beat a list of technologies.",
    "projects.p3.meta": "Client project · Year",
    "projects.p3.title": "Project name",
    "projects.p3.desc": "What the project does, who it's for and what result it had. Two or three concrete sentences beat a list of technologies.",
    "projects.tpl.demo": "View live",
    "projects.tpl.code": "Code",
    "projects.more.text": "Right now I have room for new projects.",
    "projects.more.link": "Write to me",

    "about.topper": "About me",
    "about.title": "I treat every project as if it were mine",
    "about.imgAlt": "Portrait of José Miguel Batista",
    "about.p1": "I'm a full-stack developer and I care more about the result than the tool: a site that loads fast, makes sense at first glance and earns money for its owner.",
    "about.p2": "Launching my own product changed how I work. I know what it costs to earn a visit and what a sale is worth, so I treat every client project like my own.",
    "about.tech": "I work with HTML and CSS, JavaScript, Node.js, Supabase, SQL, Git, Google Apps Script, SEO and Analytics.",

    "promises.topper": "Working with me",
    "promises.title": "What you always get",
    "promises.lead": "This is what you can expect from me, whether it's in the contract or not.",
    "promises.p1.t": "Code written by hand",
    "promises.p1.d": "No templates, no page builders. Your site is written line by line: it weighs little, loads fast and doesn't depend on plugins that break on their own.",
    "promises.p2.t": "A fixed price, in writing",
    "promises.p2.d": "Before we start you have the scope, the timeline and the price in a document. If something changes along the way we talk about it first; it doesn't show up on the invoice.",
    "promises.p3.t": "You talk to me, not to an agency",
    "promises.p3.d": "Whoever answers your message is the same person writing the code. No middlemen, no account managers, no phone trees.",
    "promises.p4.t": "A reply within 24 hours",
    "promises.p4.d": "I answer the same day or the next one. During the project you know where it stands without having to chase me.",
    "promises.p5.t": "Speed and SEO from day one",
    "promises.p5.d": "They're not an add-on you pay for separately. The site is born light, with its metadata, its sitemap and its images optimised.",
    "promises.p6.t": "The code is yours",
    "promises.p6.d": "When we launch I hand over everything: the repository, the accounts and how to update it. I stay on for improvements because you want me to, not because you can't leave.",

    "ctaband.eyebrow": "Next step",
    "ctaband.title": "If you made it this far, it's because you have something in mind.",
    "ctaband.cta": "Tell me what you need",

    "process.topper": "Process",
    "process.lead": "Four steps, no surprises, with something to see at each one.",
    "process.title": "How I work",
    "process.s1.title": "Discovery",
    "process.s1.desc": "We talk about your business, goals and budget before I propose anything.",
    "process.s2.title": "Proposal",
    "process.s2.desc": "A written plan: scope, timeline and a fixed price.",
    "process.s3.title": "Development",
    "process.s3.desc": "Short iterations, with progress you can see and try.",
    "process.s4.title": "Launch and support",
    "process.s4.desc": "We ship, measure, and I stay available for improvements.",

    "testimonials.topper": "Testimonials",
    "testimonials.title": "What clients say",
    "testimonials.t1.quote": "\"Write your client's testimonial here: what problem they had, how you solved it and the result they got.\"",
    "testimonials.t1.name": "Client name",
    "testimonials.t1.role": "role, company",
    "testimonials.t2.quote": "\"Write your client's testimonial here: what problem they had, how you solved it and the result they got.\"",
    "testimonials.t2.name": "Client name",
    "testimonials.t2.role": "role, company",

    "contact.topper": "Contact",
    "contact.title": "Got a project in mind?",
    "contact.sub": "Write to me and I'll reply within 24 hours.",
    "contact.copy": "Copy",
    "contact.copied": "Copied",
    "contact.whatsapp": "You can also message me on WhatsApp",

    "footer.handmade": "Handmade with HTML, CSS and JavaScript."
  }
};

/* ============================================================
   Motor de traducción — no hace falta editar nada de aquí
   ============================================================ */
(function () {
  const STORAGE_KEY = "lang";
  const getLang = () => document.documentElement.lang || "es";

  function t(key, lang) {
    const l = lang || getLang();
    const val = (translations[l] && translations[l][key]) ?? translations.es[key];
    return val ?? "";
  }

  function apply(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = t(el.getAttribute("data-i18n"), lang);
      if (val) el.textContent = val;
    });
    // data-i18n-attr="atributo:clave" (admite varios pares separados por coma)
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(",").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        const val = t(key, lang);
        if (attr && val) el.setAttribute(attr, val);
      });
    });
  }

  function setLanguage(lang) {
    if (!translations[lang]) lang = "es";
    document.documentElement.lang = lang;
    apply(lang);
    document.title = t("meta.title", lang);
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.description", lang));
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* modo privado */ }
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  // API global para main.js
  window.I18N = { t, setLanguage, getLang };

  // Toggle de idioma del header
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // Idioma inicial: el guardado, o español por defecto.
  // El HTML ya está escrito en español, así que solo se traduce si hay EN guardado.
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* modo privado */ }
  if (saved && saved !== "es") setLanguage(saved);
})();
