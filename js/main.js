/* ============================================================
   main.js — interacciones del sitio
   ============================================================ */

/* ------------------------------------------------------------
   ⚙️ CONFIGURACIÓN PERSONAL — edita solo esta sección
   ------------------------------------------------------------ */

// Número de WhatsApp con código de país, solo dígitos.
// Si lo dejas vacío, el enlace de WhatsApp no se muestra.
const WHATSAPP_NUMBER = "18496074188";

// TODO: pon las URLs completas de tus perfiles. Si las dejas vacías,
// los enlaces del pie de página no se muestran.
// Ejemplo: "https://github.com/tu-usuario"
const GITHUB_URL = "";
// Ejemplo: "https://www.linkedin.com/in/tu-usuario"
const LINKEDIN_URL = "";

/* ------------------------------------------------------------
   Lógica del sitio — no hace falta editar nada de aquí
   ------------------------------------------------------------ */
(function () {
  "use strict";

  /* ----- Enlaces condicionales (WhatsApp y redes) ----- */
  if (WHATSAPP_NUMBER) {
    const line = document.getElementById("whatsapp-line");
    const btn = document.getElementById("whatsapp-btn");
    if (line && btn) {
      btn.href = "https://wa.me/" + WHATSAPP_NUMBER.replace(/\D/g, "");
      line.hidden = false;
    }
  }
  [["github-link", GITHUB_URL], ["linkedin-link", LINKEDIN_URL]].forEach(([id, url]) => {
    if (!url) return;
    const link = document.getElementById(id);
    if (link) { link.href = url; link.hidden = false; }
  });

  /* ----- Año del pie de página ----- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ----- Header: borde inferior al hacer scroll ----- */
  const header = document.querySelector(".site-header");
  let ticking = false;

  function onScroll() {
    if (header) header.classList.toggle("scrolled", document.documentElement.scrollTop > 8);
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

  /* ----- Aparición al hacer scroll (títulos y filas) ----- */
  const revealEls = document.querySelectorAll(".section-title, .row, .section-note");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    // Escalonado suave dentro de cada grupo de filas
    document.querySelectorAll(".rows").forEach((group) => {
      Array.from(group.children).forEach((el, i) => {
        el.style.setProperty("--d", Math.min(i * 70, 280) + "ms");
      });
    });
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });
    revealEls.forEach((el) => revealObserver.observe(el));
  }

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
      copyBtn.textContent = window.I18N ? window.I18N.t("contact.copied") : "Copiado";
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = window.I18N ? window.I18N.t("contact.copy") : "Copiar";
        copyBtn.classList.remove("copied");
      }, 2000);
    });
  }
})();
