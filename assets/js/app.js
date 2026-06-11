/* =========================================================================
   BTS MEC · app.js — routeur hash + vues + progression (localStorage)
   ========================================================================= */
(() => {
  "use strict";

  const M = window.MANIFEST;
  const D = window.DATA;
  const main = document.getElementById("main");
  const EXAM = new Date("2026-06-23T08:00:00");

  /* ----------------------------- Stockage ---------------------------- */
  const KEY = "btsmec.progress.v1";
  const store = {
    read() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } },
    write(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch {} },
    ficheDone(id) { return !!(this.read().fiches || {})[id]; },
    toggleFiche(id) {
      const o = this.read(); o.fiches = o.fiches || {};
      o.fiches[id] = !o.fiches[id]; this.write(o); return o.fiches[id];
    },
    saveScore(matiere, score, total) {
      const o = this.read(); o.scores = o.scores || {};
      o.scores[matiere] = { score, total, date: Date.now() }; this.write(o);
    },
    lastScore(matiere) { return (this.read().scores || {})[matiere]; },
  };

  /* ----------------------------- Utilitaires ------------------------- */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function typeset(el) {
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(el, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
          ],
          throwOnError: false,
        });
      } catch {}
    }
  }

  // Markdown + maths : on isole les formules pour que marked ne casse pas
  // les indices (u_n) ni les * avant de laisser KaTeX faire le rendu.
  function renderMarkdownWithMath(md) {
    const blocks = [];
    let s = md.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => {
      blocks.push("$$" + m + "$$"); return `@@MATH${blocks.length - 1}@@`;
    });
    s = s.replace(/\$([^\n$]+?)\$/g, (_, m) => {
      blocks.push("$" + m + "$"); return `@@MATH${blocks.length - 1}@@`;
    });
    let html = window.marked ? window.marked.parse(s) : esc(s);
    html = html.replace(/@@MATH(\d+)@@/g, (_, i) => blocks[+i]);
    return html;
  }

  function fichesOf(m) { return M.fiches.filter((f) => f.matiere === m); }

  function progressOf(m) {
    const list = fichesOf(m);
    const done = list.filter((f) => store.ficheDone(f.id)).length;
    return { done, total: list.length, pct: list.length ? Math.round((done / list.length) * 100) : 0 };
  }

  function setTab(name) {
    document.querySelectorAll(".tabbar a").forEach((a) =>
      a.classList.toggle("is-active", a.dataset.tab === name));
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ----------------------------- Countdown --------------------------- */
  function refreshCountdown() {
    const cd = document.getElementById("countdown");
    if (!cd) return;
    const now = new Date();
    const days = Math.ceil((EXAM - now) / 86400000);
    cd.textContent = days > 0 ? `J–${days}` : days === 0 ? "Jour J" : "Terminé";
  }

  /* =============================== VUES ============================== */

  function viewHome() {
    setTab("home");
    const tiles = ["u31", "u32"].map((m) => {
      const info = M.matieres[m];
      const p = progressOf(m);
      return `
        <a class="subject-tile subject-tile--${m}" href="#/fiches/${m}">
          <span class="subject-tile__count">${info.code.replace("U3.", "")}</span>
          <span class="subject-tile__code">${esc(info.code)} · coef. ${info.coef}</span>
          <div class="subject-tile__name">${esc(info.nom)}</div>
          <div class="subject-tile__meta">${esc(info.epreuve)}</div>
          <div class="subject-tile__bar"><span style="width:${p.pct}%"></span></div>
          <span class="subject-tile__pct">${p.done}/${p.total} fiches révisées · ${p.pct}%</span>
        </a>`;
    }).join("");

    main.innerHTML = `
      <div class="page-head">
        <h1>Plan de révision</h1>
        <p>Épreuves écrites des 23 et 24 juin 2026. Choisis une matière ou un outil.</p>
      </div>
      <div class="subjects">${tiles}</div>

      <div class="section-label">Outils</div>
      <div class="quick-grid">
        <a class="quick" href="#/fiches"><span class="quick__ico">▤</span><span class="quick__t">Fiches</span><span class="quick__d">Cours & formulaire</span></a>
        <a class="quick" href="#/qcm"><span class="quick__ico">◉</span><span class="quick__t">QCM</span><span class="quick__d">Tester ses réflexes</span></a>
        <a class="quick" href="#/flash"><span class="quick__ico">◫</span><span class="quick__t">Flashcards</span><span class="quick__d">Mémoriser les formules</span></a>
        <a class="quick" href="#/planning"><span class="quick__ico">▦</span><span class="quick__t">Planning</span><span class="quick__d">J-12 → Jour J</span></a>
      </div>`;
  }

  function viewFichesIndex() {
    setTab("fiches");
    const blocks = ["u31", "u32"].map((m) => renderModuleList(m)).join("");
    main.innerHTML = `
      <div class="page-head">
        <a class="crumb" href="#/">← Accueil</a>
        <h1>Fiches de révision</h1>
        <p>16 fiches synthétiques. Marque-les comme « revue » au fur et à mesure.</p>
      </div>${blocks}`;
  }

  function viewFichesMatiere(m) {
    setTab("fiches");
    const info = M.matieres[m];
    if (!info) return viewFichesIndex();
    main.innerHTML = `
      <div class="page-head">
        <a class="crumb" href="#/">← Accueil</a>
        <h1><span class="tag tag--${m}">${esc(info.code)}</span> ${esc(info.nom)}</h1>
        <p>${esc(info.epreuve)} · Salle ${esc(info.salle)}</p>
      </div>
      ${renderModuleList(m, false)}
      <div style="margin-top:16px;display:grid;gap:9px;grid-template-columns:1fr 1fr">
        <a class="btn btn--ghost" href="#/qcm/${m}">Lancer le QCM</a>
        <a class="btn btn--ghost" href="#/flash/${m}">Flashcards</a>
      </div>`;
  }

  function renderModuleList(m, withHeader = true) {
    const info = M.matieres[m];
    const items = fichesOf(m).map((f) => `
      <a class="module module--${m} ${store.ficheDone(f.id) ? "is-done" : ""}" href="#/fiche/${f.id}">
        <span class="module__num">${esc(f.num)}</span>
        <span class="module__body">
          <span class="module__title">${esc(f.title)}</span>
          <span class="module__sub">${esc(f.sub)}</span>
        </span>
        <span class="module__chev">›</span>
      </a>`).join("");
    const head = withHeader
      ? `<div class="section-label"><span class="tag tag--${m}">${esc(info.code)}</span> ${esc(info.nom)}</div>`
      : "";
    return `${head}<div class="module-list">${items}</div>`;
  }

  async function viewFiche(id) {
    setTab("fiches");
    const f = M.fiches.find((x) => x.id === id);
    if (!f) return notFound();
    const info = M.matieres[f.matiere];
    main.innerHTML = `
      <div class="page-head">
        <a class="crumb" href="#/fiches/${f.matiere}">← ${esc(info.nom)}</a>
      </div>
      <article class="fiche">
        <div class="fiche-meta">
          <span class="tag tag--${f.matiere}">${esc(info.code)}</span>
          <span class="module__num">${esc(f.num)}</span>
        </div>
        <div class="markdown" id="md"><p class="empty">Chargement…</p></div>
      </article>`;
    const mount = document.getElementById("md");
    try {
      const res = await fetch(f.file);
      if (!res.ok) throw new Error(res.status);
      const md = await res.text();
      mount.innerHTML = window.marked ? renderMarkdownWithMath(md) : `<pre>${esc(md)}</pre>`;
      typeset(mount);
    } catch {
      mount.innerHTML = `<div class="empty"><div class="empty__ico">⚠</div>
        <p>Fiche introuvable hors-ligne pour l'instant.<br>Ouvre-la une fois en ligne pour la mettre en cache.</p></div>`;
    }
    const done = store.ficheDone(id);
    const bar = document.createElement("div");
    bar.className = "fiche-done";
    bar.innerHTML = `<span style="flex:1;font-size:14px;color:var(--ink-soft)">Marquer cette fiche comme revue</span>
      <button class="${done ? "is-done" : ""}">${done ? "✓ Revue" : "Marquer revue"}</button>`;
    document.querySelector(".fiche").appendChild(bar);
    bar.querySelector("button").addEventListener("click", (e) => {
      const now = store.toggleFiche(id);
      e.target.classList.toggle("is-done", now);
      e.target.textContent = now ? "✓ Revue" : "Marquer revue";
    });
  }

  /* ------------------------------- QCM ------------------------------- */
  function viewQcmPick() {
    setTab("qcm");
    const cards = ["u31", "u32"].map((m) => {
      const info = M.matieres[m];
      const n = (D.qcm[m] || []).length;
      const ls = store.lastScore(m);
      return `<a class="subject-tile subject-tile--${m}" href="#/qcm/${m}">
        <span class="subject-tile__code">${esc(info.code)}</span>
        <div class="subject-tile__name">QCM ${esc(info.nom)}</div>
        <div class="subject-tile__meta">${n} questions${ls ? ` · dernier score ${ls.score}/${ls.total}` : ""}</div>
      </a>`;
    }).join("");
    main.innerHTML = `
      <div class="page-head">
        <a class="crumb" href="#/">← Accueil</a>
        <h1>QCM</h1><p>Une question à la fois, correction immédiate.</p>
      </div>
      <div class="quiz-pick">${cards}</div>`;
  }

  function viewQcm(m) {
    setTab("qcm");
    const info = M.matieres[m];
    const bank = D.qcm[m];
    if (!info || !bank) return viewQcmPick();
    const questions = shuffle(bank);
    let i = 0, score = 0, answered = false;

    function render() {
      if (i >= questions.length) return renderScore();
      const q = questions[i];
      main.innerHTML = `
        <div class="page-head">
          <a class="crumb" href="#/qcm">← QCM</a>
          <h1><span class="tag tag--${m}">${esc(info.code)}</span> ${esc(info.nom)}</h1>
        </div>
        <div class="quiz">
          <div class="quiz-progress"><span>Question ${i + 1} / ${questions.length}</span><span>Score ${score}</span></div>
          <div class="quiz-bar"><span style="width:${(i / questions.length) * 100}%"></span></div>
          <div class="q-card">
            <div class="q-stem">${q.stem}</div>
            <div class="q-opts">
              ${q.opts.map((o, k) => `<button class="q-opt" data-k="${k}">
                <span class="q-opt__key">${"ABCD"[k]}</span><span>${o}</span></button>`).join("")}
            </div>
            <div id="explain"></div>
          </div>
          <button class="btn" id="next" disabled>Valider une réponse</button>
        </div>`;
      typeset(main);
      answered = false;
      const opts = [...main.querySelectorAll(".q-opt")];
      const next = main.querySelector("#next");
      opts.forEach((btn) => btn.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        const k = +btn.dataset.k;
        const correct = q.answer;
        opts.forEach((b) => { b.disabled = true; });
        opts[correct].classList.add("is-correct");
        if (k !== correct) btn.classList.add("is-wrong"); else score++;
        const ex = main.querySelector("#explain");
        ex.className = "q-explain";
        ex.innerHTML = `<b>${k === correct ? "✓ Exact." : "✗ Réponse : " + "ABCD"[correct] + "."}</b> ${q.explain}`;
        typeset(ex);
        next.disabled = false;
        next.textContent = i + 1 < questions.length ? "Question suivante →" : "Voir le résultat →";
      }));
      next.addEventListener("click", () => { i++; render(); });
    }

    function renderScore() {
      store.saveScore(m, score, questions.length);
      const pct = Math.round((score / questions.length) * 100);
      const msg = pct >= 80 ? "Solide. Tu es prêt sur ce module."
        : pct >= 50 ? "Bonne base. Revois les fiches sur les erreurs."
        : "À retravailler — reprends les fiches puis recommence.";
      main.innerHTML = `
        <div class="page-head"><a class="crumb" href="#/qcm">← QCM</a></div>
        <div class="score">
          <div class="score__big">${score}<span style="font-size:24px;color:var(--ink-faint)">/${questions.length}</span></div>
          <div class="score__lbl">${esc(info.code)} · ${esc(info.nom)}</div>
          <p class="score__msg">${msg}</p>
          <div style="display:grid;gap:9px">
            <button class="btn" onclick="location.hash='#/qcm/${m}'">Recommencer</button>
            <a class="btn btn--ghost" href="#/fiches/${m}">Revoir les fiches</a>
          </div>
        </div>`;
    }
    render();
  }

  /* --------------------------- Flashcards ---------------------------- */
  function viewFlashPick() {
    setTab("flash");
    const cards = ["u31", "u32"].map((m) => {
      const info = M.matieres[m];
      const n = (D.flash[m] || []).length;
      return `<a class="subject-tile subject-tile--${m}" href="#/flash/${m}">
        <span class="subject-tile__code">${esc(info.code)}</span>
        <div class="subject-tile__name">Cartes ${esc(info.nom)}</div>
        <div class="subject-tile__meta">${n} formules à mémoriser</div>
      </a>`;
    }).join("");
    main.innerHTML = `
      <div class="page-head"><a class="crumb" href="#/">← Accueil</a>
        <h1>Flashcards</h1><p>Touche la carte pour révéler la réponse.</p></div>
      <div class="quiz-pick">${cards}</div>`;
  }

  function viewFlash(m) {
    setTab("flash");
    const info = M.matieres[m];
    const bank = D.flash[m];
    if (!info || !bank) return viewFlashPick();
    const cards = shuffle(bank);
    let i = 0;

    function render() {
      const c = cards[i];
      main.innerHTML = `
        <div class="page-head"><a class="crumb" href="#/flash">← Flashcards</a>
          <h1><span class="tag tag--${m}">${esc(info.code)}</span> ${esc(info.nom)}</h1></div>
        <div class="flash-wrap">
          <div class="flashcard flashcard--${m}" id="card">
            <div class="flashcard__inner">
              <div class="flashcard__face flashcard__face--front">
                <span class="flashcard__tagline">Question</span>
                <div class="flashcard__q">${c.q}</div>
                <span class="flashcard__hint">toucher pour retourner</span>
              </div>
              <div class="flashcard__face flashcard__face--back">
                <span class="flashcard__tagline">Réponse</span>
                <div class="flashcard__a">${c.a}</div>
              </div>
            </div>
          </div>
          <div class="flash-nav">
            <button class="btn btn--ghost" id="prev">← Préc.</button>
            <span class="flash-count">${i + 1} / ${cards.length}</span>
            <button class="btn" id="nxt">Suiv. →</button>
          </div>
        </div>`;
      typeset(main);
      const card = main.querySelector("#card");
      card.addEventListener("click", () => card.classList.toggle("is-flipped"));
      main.querySelector("#prev").addEventListener("click", () => { i = (i - 1 + cards.length) % cards.length; render(); });
      main.querySelector("#nxt").addEventListener("click", () => { i = (i + 1) % cards.length; render(); });
    }
    render();
  }

  /* ---------------------------- Planning ----------------------------- */
  function viewPlanning() {
    setTab("planning");
    const plan = [
      { d: "J–12 → J–8", t: "Balayage U31", x: false, desc: "Suites, fonctions, calcul intégral, équations différentielles. 1 fiche + son QCM par jour." },
      { d: "J–8 → J–5", t: "Probabilités & statistique", x: false, desc: "Proba 1 & 2, statistique descriptive et inférentielle. Refaire les calculs à la calculatrice mode examen." },
      { d: "J–5 → J–3", t: "Bloc U32 thermique & méca", x: false, desc: "Thermique du bâtiment, acoustique, mécanique/statique. Relier aux notions chantier (R, U, déperditions)." },
      { d: "J–3 → J–1", t: "U32 chimie & énergie + révision croisée", x: false, desc: "Chimie des matériaux, électricité, DPE. Flashcards en boucle, QCM blanc complet des deux matières." },
      { d: "Mar. 23 juin · 08:00", t: "U3.2 Physique-Chimie — salle A116 (à confirmer)", x: true, desc: "Jury 1. Se présenter 15 min avant. Calculatrice en mode examen, pièce d'identité, convocation." },
      { d: "Mar. 23 / Mer. 24 juin", t: "U3.1 Mathématiques — salle L027", x: true, desc: "Jury 1. Vérifier l'horaire exact de passage sur la convocation." },
    ];
    const items = plan.map((p) => `
      <div class="tl-item ${p.x ? "is-exam" : ""}">
        <div class="tl-date">${esc(p.d)}</div>
        <div class="tl-title">${esc(p.t)}</div>
        <div class="tl-desc">${esc(p.desc)}</div>
      </div>`).join("");
    main.innerHTML = `
      <div class="page-head"><a class="crumb" href="#/">← Accueil</a>
        <h1>Planning J–12 → Jour J</h1>
        <p>Repère indicatif. Les fiches non revues restent à l'accueil.</p></div>
      <div class="timeline">${items}</div>
      <div class="section-label">À ne pas oublier le jour J</div>
      <div class="fiche" style="padding:14px 16px">
        <ul class="markdown" style="margin:0;padding-left:20px">
          <li>Convocation + pièce d'identité</li>
          <li>Calculatrice <strong>en mode examen activé</strong> + calculatrice de secours sans mémoire</li>
          <li>Stylos, règle, équerre, rapporteur, crayon, gomme</li>
          <li>Arriver 15 min avant le passage · fléchage vers les salles</li>
        </ul>
      </div>`;
  }

  function notFound() {
    main.innerHTML = `<div class="empty"><div class="empty__ico">∅</div>
      <p>Page introuvable.</p><a class="crumb" href="#/">← Retour à l'accueil</a></div>`;
  }

  /* ----------------------------- Routeur ----------------------------- */
  function router() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const seg = hash.split("/").filter(Boolean); // ["fiche","u31-01"]
    window.scrollTo(0, 0);
    refreshCountdown();

    switch (seg[0]) {
      case undefined: return viewHome();
      case "fiches":  return seg[1] ? viewFichesMatiere(seg[1]) : viewFichesIndex();
      case "fiche":   return viewFiche(seg[1]);
      case "qcm":     return seg[1] ? viewQcm(seg[1]) : viewQcmPick();
      case "flash":   return seg[1] ? viewFlash(seg[1]) : viewFlashPick();
      case "planning":return viewPlanning();
      default:        return notFound();
    }
  }

  window.addEventListener("hashchange", router);
  window.addEventListener("DOMContentLoaded", () => { refreshCountdown(); router(); });
  // si le DOM est déjà prêt (scripts en fin de body)
  if (document.readyState !== "loading") { refreshCountdown(); router(); }

  // Badge hors-ligne
  const badge = document.getElementById("offline-badge");
  const setOnline = () => { if (badge) badge.hidden = navigator.onLine; };
  window.addEventListener("online", setOnline);
  window.addEventListener("offline", setOnline);
  setOnline();
})();
