/* ============================================================
   main.js — interacciones del sitio
   Tema claro/oscuro, idioma ES/EN, dock activo, pestañas
   y formulario de contacto.
   ============================================================ */

/* ------------------------------------------------------------
   ⚙️ CONFIGURACIÓN PERSONAL — edita solo esta sección
   ------------------------------------------------------------ */

// Correo al que llega el formulario de contacto.
const CONTACT_EMAIL = "josebatistasolutions@gmail.com";

/* ------------------------------------------------------------
   Lógica del sitio — no hace falta editar nada de aquí
   ------------------------------------------------------------ */
(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ============ Tema claro / oscuro ============ */
  const themeBtn = $("#theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const dark = document.documentElement.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
    });
  }

  /* ============ Idioma ES / EN ============ */
  // El HTML es la fuente del español: antes de traducir se guarda
  // cada texto original, para poder volver a él sin recargar.
  const ES = { text: new Map(), attr: new Map() };

  $$("[data-i18n]").forEach((el) => ES.text.set(el, el.textContent));
  $$("[data-i18n-attr]").forEach((el) => {
    const saved = {};
    el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
      const attr = pair.split(":")[0].trim();
      if (attr) saved[attr] = el.getAttribute(attr);
    });
    ES.attr.set(el, saved);
  });

  let lang = "es";
  try { lang = localStorage.getItem("lang") || "es"; } catch (e) {}

  function t(key) {
    const dict = lang === "en" ? window.I18N_EN : window.I18N_ES_JS;
    return (dict && dict[key]) || (window.I18N_ES_JS && window.I18N_ES_JS[key]) || key;
  }

  function applyLang(next) {
    lang = next === "en" ? "en" : "es";
    const EN = window.I18N_EN || {};

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "en") {
        if (EN[key] != null) el.textContent = EN[key];
      } else if (ES.text.has(el)) {
        el.textContent = ES.text.get(el);
      }
    });

    $$("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const i = pair.indexOf(":");
        if (i < 0) return;
        const attr = pair.slice(0, i).trim();
        const key = pair.slice(i + 1).trim();
        if (lang === "en") {
          if (EN[key] != null) el.setAttribute(attr, EN[key]);
        } else {
          const saved = ES.attr.get(el);
          if (saved && saved[attr] != null) el.setAttribute(attr, saved[attr]);
        }
      });
    });

    document.documentElement.lang = lang;
    document.title = t("js.docTitle");
    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("js.docDesc"));

    $$(".lang-btn").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });

    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  $$(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang !== lang) applyLang(btn.dataset.lang);
    });
  });

  if (lang !== "es") applyLang(lang);

  /* ============ Año del pie ============ */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ============ Red de seguridad de las animaciones ============ */
  // Las animaciones ligadas al scroll (html.sda) arrancan con el contenido
  // oculto. Si el navegador dice soportarlas pero no las hace progresar,
  // un elemento bien metido en pantalla seguiría invisible: si eso pasa
  // dos veces seguidas, se quita la clase y todo queda visible.
  (function () {
    const root = document.documentElement;
    if (!root.classList.contains("sda")) return;
    let strikes = 0, checksLeft = 12, running = false;

    function stuckElement() {
      const mid = window.innerHeight * 0.5;
      return $$(".scroll-blur-in, .scroll-blur-label, .scroll-stagger > *").some((el) => {
        const r = el.getBoundingClientRect();
        if (!(r.height > 0 && r.top < mid && r.bottom > 0)) return false;
        return parseFloat(getComputedStyle(el).opacity) < 0.1;
      });
    }

    function loop() {
      if (!root.classList.contains("sda")) { running = false; return; }
      strikes = stuckElement() ? strikes + 1 : 0;
      if (strikes >= 2) { root.classList.remove("sda"); running = false; return; }
      if (checksLeft-- > 0) { setTimeout(loop, 700); } else { running = false; }
    }

    function start() {
      if (running || !root.classList.contains("sda")) return;
      running = true;
      setTimeout(loop, 900);
    }

    start();
    window.addEventListener("scroll", () => { checksLeft = Math.max(checksLeft, 4); start(); }, { passive: true });
  })();

  /* ============ Dock: sección activa ============ */
  const dockItems = $$(".dock-item");
  const dockTargets = [
    { id: "top", el: $(".hero") },
    { id: "proyectos", el: $("#proyectos") },
    { id: "sobre-mi", el: $("#sobre-mi") },
    { id: "contacto", el: $("#contacto") }
  ].filter((x) => x.el);

  function setDockActive(id) {
    dockItems.forEach((item) => {
      item.classList.toggle("is-active", item.dataset.section === id);
    });
  }

  if ("IntersectionObserver" in window && dockTargets.length) {
    const visible = new Map();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => visible.set(e.target, e.isIntersecting ? e.intersectionRatio : 0));
      let best = null, bestRatio = 0;
      dockTargets.forEach(({ id, el }) => {
        const r = visible.get(el) || 0;
        if (r > bestRatio) { bestRatio = r; best = id; }
      });
      if (best) setDockActive(best);
    }, { rootMargin: "-15% 0px -25% 0px", threshold: [0, .12, .3, .6] });
    dockTargets.forEach(({ el }) => io.observe(el));
  }
  setDockActive("top");

  /* ============ Pestañas de proyectos ============ */
  const tabs = $$(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((other) => {
        const active = other === tab;
        other.classList.toggle("is-active", active);
        other.setAttribute("aria-selected", active ? "true" : "false");
        const panel = document.getElementById(other.getAttribute("aria-controls"));
        if (panel) panel.hidden = !active;
      });
    });
  });

  /* ============ Formulario de contacto (abre el correo) ============ */
  const form = $("#contact-form");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const name = ($("#cf-name") || {}).value || "";
      const email = ($("#cf-email") || {}).value || "";
      const message = ($("#cf-message") || {}).value || "";
      const subject = t("js.mailSubject").replace("{name}", name.trim() || "—");
      const body = message + "\n\n— " + name.trim() + (email.trim() ? " · " + email.trim() : "");
      window.location.href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

})();
