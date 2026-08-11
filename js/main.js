/* ============================================================
   main.js — interacciones del sitio
   ============================================================ */

/* ------------------------------------------------------------
   ⚙️ CONFIGURACIÓN PERSONAL — edita solo esta sección
   ------------------------------------------------------------ */

// TODO: pon tu número de WhatsApp con código de país, solo dígitos.
// Ejemplo República Dominicana: "18095551234". Si lo dejas vacío,
// el botón de WhatsApp no se muestra (no habrá enlaces rotos).
const WHATSAPP_NUMBER = "";

// TODO: pon las URLs completas de tus perfiles. Si las dejas vacías,
// los iconos del footer no se muestran.
// Ejemplo: "https://github.com/tu-usuario"
const GITHUB_URL = "";
// Ejemplo: "https://www.linkedin.com/in/tu-usuario"
const LINKEDIN_URL = "";

/* ------------------------------------------------------------
   Lógica del sitio — no hace falta editar nada de aquí
   ------------------------------------------------------------ */
(function () {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ----- Enlaces condicionales (WhatsApp y redes) ----- */
  if (WHATSAPP_NUMBER) {
    const btn = document.getElementById("whatsapp-btn");
    if (btn) {
      btn.href = "https://wa.me/" + WHATSAPP_NUMBER.replace(/\D/g, "");
      btn.hidden = false;
    }
  }
  [["github-link", GITHUB_URL], ["linkedin-link", LINKEDIN_URL]].forEach(([id, url]) => {
    if (!url) return;
    const link = document.getElementById(id);
    if (link) { link.href = url; link.hidden = false; }
  });

  /* ----- Año del footer ----- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ----- Header: fondo al hacer scroll + barra de progreso ----- */
  const header = document.querySelector(".site-header");
  const progress = document.querySelector(".scroll-progress");
  let ticking = false;

  function onScroll() {
    const doc = document.documentElement;
    if (header) header.classList.toggle("scrolled", doc.scrollTop > 8);
    if (progress) {
      const max = doc.scrollHeight - doc.clientHeight;
      progress.style.transform = "scaleX(" + (max > 0 ? doc.scrollTop / max : 0) + ")";
    }
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  /* ----- Menú móvil ----- */
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  function closeMenu() {
    if (!nav || !menuToggle) return;
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ----- Enlace activo del nav según la sección visible ----- */
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const hero = document.querySelector(".hero");
  const navSections = navLinks
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navSections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        if (entry.target === hero) {
          navLinks.forEach((l) => l.classList.remove("active"));
        } else {
          const id = "#" + entry.target.id;
          navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === id));
        }
      });
    }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });

    navSections.forEach((s) => navObserver.observe(s));
    if (hero) navObserver.observe(hero);
  }

  /* ----- Reveal on scroll ----- */
  const revealEls = document.querySelectorAll(".reveal");
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* ----- Efecto typing del hero ----- */
  const typedEl = document.getElementById("typed");
  let typingToken = 0; // invalida el bucle anterior al cambiar de idioma

  function startTyping() {
    if (!typedEl || !window.I18N) return;
    const token = ++typingToken;
    const strings = window.I18N.t("hero.typed");
    if (!Array.isArray(strings) || strings.length === 0) return;

    if (reducedMotion.matches) {
      typedEl.textContent = strings[0];
      return;
    }

    let index = 0;

    function type(text, pos) {
      if (token !== typingToken) return;
      typedEl.textContent = text.slice(0, pos);
      if (pos < text.length) {
        setTimeout(() => type(text, pos + 1), 65);
      } else {
        setTimeout(() => erase(text, text.length), 1800);
      }
    }

    function erase(text, pos) {
      if (token !== typingToken) return;
      typedEl.textContent = text.slice(0, pos);
      if (pos > 0) {
        setTimeout(() => erase(text, pos - 1), 30);
      } else {
        index = (index + 1) % strings.length;
        setTimeout(() => type(strings[index], 0), 350);
      }
    }

    type(strings[index], 0);
  }

  startTyping();
  document.addEventListener("langchange", startTyping);
  reducedMotion.addEventListener?.("change", startTyping);

  /* ----- Botón "Copiar email" ----- */
  const copyBtn = document.getElementById("copy-email");

  function copyTextFallback(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    ta.remove();
    return ok;
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email;
      let ok = false;
      try {
        await navigator.clipboard.writeText(email);
        ok = true;
      } catch (e) {
        ok = copyTextFallback(email);
      }
      if (!ok) return;
      copyBtn.textContent = window.I18N ? window.I18N.t("contact.copied") : "¡Copiado!";
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = window.I18N ? window.I18N.t("contact.copy") : "Copiar";
        copyBtn.classList.remove("copied");
      }, 2000);
    });
  }
})();
