/* ============================================================
   main.js — interacciones del sitio
   Tema claro/oscuro, idioma ES/EN, dock activo, pestañas,
   actividad de GitHub y formulario de contacto.
   ============================================================ */

/* ------------------------------------------------------------
   ⚙️ CONFIGURACIÓN PERSONAL — edita solo esta sección
   ------------------------------------------------------------ */

// Usuario de GitHub del que se lee la actividad.
const GITHUB_USER = "Chemi25";

// Correo al que llega el formulario de contacto.
const CONTACT_EMAIL = "josemiguel20186@gmail.com";

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
    renderGhTotal();
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

  /* ============ GitHub: contribuciones y lenguajes ============ */
  const ghGraph = $("#gh-graph");
  const ghYears = $("#gh-years");
  const ghTotal = $("#gh-total");
  const ghFallback = $("#gh-fallback");
  const ghLangs = $("#gh-langs");
  const ghLangsList = $("#gh-langs-list");

  const cache = new Map();
  let currentYear = new Date().getFullYear();
  let currentTotal = null;

  function renderGhTotal() {
    if (ghTotal && currentTotal != null) {
      ghTotal.textContent = t("js.ghTotal")
        .replace("{n}", currentTotal.toLocaleString(lang === "en" ? "en-US" : "es-ES"))
        .replace("{y}", String(currentYear));
    }
  }

  function renderGraph(data) {
    if (!ghGraph) return;
    ghGraph.textContent = "";
    const frag = document.createDocumentFragment();
    // Alinea el primer día al día de la semana correcto (columna = semana)
    const first = data.contributions[0];
    if (first) {
      const pad = new Date(first.date + "T00:00:00").getDay();
      for (let i = 0; i < pad; i++) {
        const gap = document.createElement("span");
        gap.className = "gh-cell";
        gap.style.visibility = "hidden";
        frag.appendChild(gap);
      }
    }
    data.contributions.forEach((day) => {
      const cell = document.createElement("span");
      cell.className = "gh-cell" + (day.level ? " lv" + day.level : "");
      cell.title = day.date + " · " + day.count;
      frag.appendChild(cell);
    });
    ghGraph.appendChild(frag);
    currentTotal = data.total != null ? data.total : data.contributions.reduce((a, d) => a + d.count, 0);
    renderGhTotal();
  }

  function fetchTimeout(url, ms) {
    const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
    if (ctrl) setTimeout(() => ctrl.abort(), ms);
    return fetch(url, ctrl ? { signal: ctrl.signal } : undefined);
  }

  function loadYear(year) {
    currentYear = year;
    $$(".gh-tab", ghYears).forEach((b) => {
      const active = Number(b.dataset.year) === year;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });
    if (cache.has(year)) { renderGraph(cache.get(year)); return; }
    fetchTimeout("https://github-contributions-api.jogruber.de/v4/" + GITHUB_USER + "?y=" + year, 8000)
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then((json) => {
        const data = { contributions: json.contributions || [], total: (json.total && json.total[year]) || null };
        cache.set(year, data);
        renderGraph(data);
      })
      .catch(() => {
        if (ghFallback) ghFallback.hidden = false;
        if (ghGraph) ghGraph.parentElement.hidden = true;
        if (ghYears) ghYears.hidden = true;
      });
  }

  if (ghGraph && ghYears) {
    const thisYear = new Date().getFullYear();
    for (let y = thisYear; y > thisYear - 3; y--) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gh-tab";
      btn.dataset.year = String(y);
      btn.setAttribute("role", "tab");
      btn.textContent = String(y);
      btn.addEventListener("click", () => loadYear(y));
      ghYears.appendChild(btn);
    }
    loadYear(thisYear);

    // Lenguajes más usados, a partir de los repos públicos
    fetchTimeout("https://api.github.com/users/" + GITHUB_USER + "/repos?per_page=100&sort=pushed", 8000)
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then((repos) => {
        const counts = {};
        (repos || []).forEach((repo) => {
          if (repo && repo.language && !repo.fork) counts[repo.language] = (counts[repo.language] || 0) + 1;
        });
        const top = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 6);
        if (top.length && ghLangs && ghLangsList) {
          top.forEach(([name, n]) => {
            const chip = document.createElement("span");
            chip.className = "chip chip-soft";
            chip.textContent = name + " × " + n;
            ghLangsList.appendChild(chip);
          });
          ghLangs.hidden = false;
        }
      })
      .catch(() => { /* sin lenguajes no pasa nada */ });
  }
})();
