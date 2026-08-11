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
    "meta.title": "José Miguel Batista — Desarrollador Web y Móvil Freelance",
    "meta.description": "Desarrollador full-stack freelance. Construyo sitios web, e-commerce y apps móviles que convierten. Creador de Planifesto. Disponible para proyectos.",

    "skip": "Saltar al contenido",

    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.process": "Proceso",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",
    "nav.cta": "Hablemos",
    "nav.menuLabel": "Abrir menú",

    "hero.title.pre": "Construyo ",
    "hero.title.highlight": "productos digitales",
    "hero.title.post": " que hacen crecer negocios.",
    "hero.typed": [
      "desarrollo web full-stack",
      "diseño web y frontend",
      "apps móviles iOS y Android",
      "e-commerce que vende"
    ],
    "hero.typedFallback": "Desarrollo web full-stack, frontend y apps móviles.",
    "hero.subtitle": "Soy José Miguel Batista, desarrollador freelance. Te acompaño de la idea al lanzamiento: webs rápidas, tiendas online y apps que convierten visitantes en clientes.",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.talk": "Hablemos",
    "hero.badge.available": "Disponible para proyectos",
    "hero.badge.creator": "Creador de Planifesto",
    "hero.term.out1": "José Miguel Batista — desarrollador full-stack",
    "hero.term.out2": "web/  e-commerce/  apps-moviles/",
    "hero.term.out3": "✓ disponible para nuevos proyectos",

    "services.eyebrow": "// servicios",
    "services.title": "Lo que puedo construir para ti",
    "services.sub": "Del concepto al producto en producción, con foco en resultados de negocio.",
    "services.s1.title": "Desarrollo Full-Stack",
    "services.s1.desc": "Aplicaciones web completas: frontend, backend, base de datos y despliegue. De cero a producción.",
    "services.s2.title": "Frontend y Diseño Web",
    "services.s2.desc": "Sitios rápidos, responsivos y con un diseño que convierte: landing pages, webs corporativas y tiendas online.",
    "services.s3.title": "Apps Móviles",
    "services.s3.desc": "Aplicaciones para iOS y Android orientadas a resultados, del prototipo a la tienda de apps.",

    "projects.eyebrow": "// proyectos",
    "projects.title": "Proyectos",
    "projects.sub": "Trabajo real, en producción, con resultados.",
    "projects.featured.label": "Proyecto destacado — En producción",
    "projects.featured.tagline": "Plataforma de educación financiera para jóvenes hispanohablantes: cursos, plantillas y herramientas digitales.",
    "projects.featured.previewAlt": "Vista previa de Planifesto, plataforma de educación financiera",
    "projects.featured.problemTitle": "El problema",
    "projects.featured.problemBody": "La educación financiera práctica en español es escasa y está dispersa. Hacía falta una plataforma propia para crear, vender y entregar cursos y plantillas a toda Hispanoamérica sin depender de terceros.",
    "projects.featured.solutionTitle": "La solución",
    "projects.featured.solutionBody": "Diseñé, desarrollé y lancé un e-commerce completo: catálogo de cursos y plantillas digitales, newsletter, testimonios, integración con WhatsApp y entrega automatizada de productos.",
    "projects.featured.stat1": "entrega de productos automatizada",
    "projects.featured.stat2": "países alcanzados con SEO internacional",
    "projects.featured.stat3": "de idea a producto en producción",
    "projects.featured.visit": "Ver sitio en vivo",
    "projects.cta.title": "¿Tu proyecto aquí?",
    "projects.cta.body": "Este espacio está reservado para tu idea. Cuéntame qué necesitas y lo construimos juntos.",
    "projects.cta.link": "Empezar un proyecto",
    "projects.p2.type": "Aplicación web",
    "projects.p2.title": "Nombre del proyecto",
    "projects.p2.desc": "Describe en 1–2 líneas qué hace el proyecto y qué problema resuelve para el cliente.",
    "projects.p3.type": "App móvil",
    "projects.p3.title": "Nombre del proyecto",
    "projects.p3.desc": "Describe en 1–2 líneas qué hace el proyecto y qué problema resuelve para el cliente.",
    "projects.tpl.demo": "Demo",
    "projects.tpl.code": "Código",

    "about.eyebrow": "// sobre mí",
    "about.title": "Sobre mí",
    "about.p1": "Soy desarrollador full-stack con un enfoque claro: la tecnología es un medio, el objetivo es que tu negocio crezca. Por eso hablo de conversión, velocidad y resultados antes que de frameworks.",
    "about.p2": "No solo escribo código: he construido y lanzado mi propio producto. Planifesto pasó de idea a plataforma en producción — diseño, desarrollo, SEO internacional, automatización y ventas. Esa experiencia end-to-end es la que aplico en cada proyecto de mis clientes.",
    "about.techTitle": "$ tecnologías --list",

    "process.eyebrow": "// proceso",
    "process.title": "Cómo trabajo",
    "process.sub": "Un proceso claro, sin sorpresas.",
    "process.s1.title": "Descubrimiento",
    "process.s1.desc": "Hablamos de tus objetivos, alcance y presupuesto. Entiendo tu negocio antes de proponer nada.",
    "process.s2.title": "Propuesta",
    "process.s2.desc": "Recibes un plan concreto: qué se construye, en cuánto tiempo y a qué precio. Cerrado, sin letra pequeña.",
    "process.s3.title": "Desarrollo",
    "process.s3.desc": "Construyo en iteraciones cortas con avances visibles. Siempre sabes en qué punto está tu proyecto.",
    "process.s4.title": "Lanzamiento y soporte",
    "process.s4.desc": "Desplegamos, medimos y ajustamos. Y no desaparezco: quedo disponible para soporte y mejoras.",

    "testimonials.eyebrow": "// testimonios",
    "testimonials.title": "Lo que dicen mis clientes",
    "testimonials.t1.quote": "«Escribe aquí el testimonio de tu cliente: qué problema tenía, cómo lo resolviste y qué resultado obtuvo.»",
    "testimonials.t1.name": "Nombre del cliente",
    "testimonials.t1.role": "Cargo, Empresa",
    "testimonials.t2.quote": "«Escribe aquí el testimonio de tu cliente: qué problema tenía, cómo lo resolviste y qué resultado obtuvo.»",
    "testimonials.t2.name": "Nombre del cliente",
    "testimonials.t2.role": "Cargo, Empresa",

    "contact.eyebrow": "// contacto",
    "contact.title": "¿Tienes un proyecto en mente?",
    "contact.sub": "Cuéntame qué necesitas y te respondo en menos de 24 horas.",
    "contact.email": "Escríbeme un email",
    "contact.whatsapp": "Escríbeme por WhatsApp",
    "contact.copy": "Copiar",
    "contact.copied": "¡Copiado!",

    "footer.tagline": "Desarrollador web y móvil freelance.",
    "footer.handmade": "Hecho a mano con HTML, CSS y JS — sin frameworks."
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    "meta.title": "José Miguel Batista — Freelance Web & Mobile Developer",
    "meta.description": "Freelance full-stack developer. I build websites, e-commerce and mobile apps that convert. Creator of Planifesto. Available for projects.",

    "skip": "Skip to content",

    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.process": "Process",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.cta": "Let's talk",
    "nav.menuLabel": "Open menu",

    "hero.title.pre": "I build ",
    "hero.title.highlight": "digital products",
    "hero.title.post": " that grow businesses.",
    "hero.typed": [
      "full-stack web development",
      "frontend & web design",
      "iOS & Android mobile apps",
      "e-commerce that sells"
    ],
    "hero.typedFallback": "Full-stack web development, frontend and mobile apps.",
    "hero.subtitle": "I'm José Miguel Batista, a freelance developer. From idea to launch: fast websites, online stores and apps that turn visitors into clients.",
    "hero.cta.projects": "See my work",
    "hero.cta.talk": "Let's talk",
    "hero.badge.available": "Available for projects",
    "hero.badge.creator": "Creator of Planifesto",
    "hero.term.out1": "José Miguel Batista — full-stack developer",
    "hero.term.out2": "web/  e-commerce/  mobile-apps/",
    "hero.term.out3": "✓ available for new projects",

    "services.eyebrow": "// services",
    "services.title": "What I can build for you",
    "services.sub": "From concept to live product, focused on business results.",
    "services.s1.title": "Full-Stack Development",
    "services.s1.desc": "Complete web applications: frontend, backend, database and deployment. From zero to production.",
    "services.s2.title": "Frontend & Web Design",
    "services.s2.desc": "Fast, responsive sites with design that converts: landing pages, business websites and online stores.",
    "services.s3.title": "Mobile Apps",
    "services.s3.desc": "iOS and Android apps built for results, from prototype to the app store.",

    "projects.eyebrow": "// projects",
    "projects.title": "Projects",
    "projects.sub": "Real work, live in production, with results.",
    "projects.featured.label": "Featured project — Live",
    "projects.featured.tagline": "Financial education platform for young Spanish speakers: courses, templates and digital tools.",
    "projects.featured.previewAlt": "Preview of Planifesto, a financial education platform",
    "projects.featured.problemTitle": "The problem",
    "projects.featured.problemBody": "Practical financial education in Spanish is scarce and scattered. A dedicated platform was needed to create, sell and deliver courses and templates across Latin America without depending on third parties.",
    "projects.featured.solutionTitle": "The solution",
    "projects.featured.solutionBody": "I designed, built and launched a complete e-commerce platform: catalog of courses and digital templates, newsletter, testimonials, WhatsApp integration and automated product delivery.",
    "projects.featured.stat1": "automated product delivery",
    "projects.featured.stat2": "countries reached with international SEO",
    "projects.featured.stat3": "from idea to live product",
    "projects.featured.visit": "View live site",
    "projects.cta.title": "Your project here?",
    "projects.cta.body": "This spot is reserved for your idea. Tell me what you need and let's build it together.",
    "projects.cta.link": "Start a project",
    "projects.p2.type": "Web application",
    "projects.p2.title": "Project name",
    "projects.p2.desc": "Describe in 1–2 lines what the project does and what problem it solves for the client.",
    "projects.p3.type": "Mobile app",
    "projects.p3.title": "Project name",
    "projects.p3.desc": "Describe in 1–2 lines what the project does and what problem it solves for the client.",
    "projects.tpl.demo": "Demo",
    "projects.tpl.code": "Code",

    "about.eyebrow": "// about me",
    "about.title": "About me",
    "about.p1": "I'm a full-stack developer with a clear focus: technology is a means — the goal is growing your business. That's why I talk about conversion, speed and results before frameworks.",
    "about.p2": "I don't just write code: I've built and launched my own product. Planifesto went from idea to a live platform — design, development, international SEO, automation and sales. That end-to-end experience is what I bring to every client project.",
    "about.techTitle": "$ technologies --list",

    "process.eyebrow": "// process",
    "process.title": "How I work",
    "process.sub": "A clear process, no surprises.",
    "process.s1.title": "Discovery",
    "process.s1.desc": "We talk about your goals, scope and budget. I understand your business before proposing anything.",
    "process.s2.title": "Proposal",
    "process.s2.desc": "You get a concrete plan: what gets built, how long it takes and a fixed price. No fine print.",
    "process.s3.title": "Development",
    "process.s3.desc": "I build in short iterations with visible progress. You always know where your project stands.",
    "process.s4.title": "Launch & support",
    "process.s4.desc": "We deploy, measure and adjust. And I don't disappear: I stay available for support and improvements.",

    "testimonials.eyebrow": "// testimonials",
    "testimonials.title": "What clients say",
    "testimonials.t1.quote": "\"Write your client's testimonial here: what problem they had, how you solved it and the result they got.\"",
    "testimonials.t1.name": "Client name",
    "testimonials.t1.role": "Role, Company",
    "testimonials.t2.quote": "\"Write your client's testimonial here: what problem they had, how you solved it and the result they got.\"",
    "testimonials.t2.name": "Client name",
    "testimonials.t2.role": "Role, Company",

    "contact.eyebrow": "// contact",
    "contact.title": "Got a project in mind?",
    "contact.sub": "Tell me what you need and I'll get back to you within 24 hours.",
    "contact.email": "Email me",
    "contact.whatsapp": "Message me on WhatsApp",
    "contact.copy": "Copy",
    "contact.copied": "Copied!",

    "footer.tagline": "Freelance web & mobile developer.",
    "footer.handmade": "Handcrafted with HTML, CSS and JS — no frameworks."
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
