/* ============================================================
   Tarot Remedios Varo — lógica de juego y manual
   ============================================================ */
(function () {

  "use strict";

  // -------- Construcción del mazo --------
  const ALL_CARDS = MAJOR_CARDS.concat(MINOR_CARDS);

  const state = {
    selectedSpread: null,
    spreadDesc: ""
  };

  // -------- Utilidades --------
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function cardSuit(c) { return c.type === "major" ? "major" : c.palo; }

  function cardName(c) {
    if (c.type === "major") return c.nombre;
    return c.nombre + " de " + DECK.suits[c.palo].name;
  }

  function symbolFor(c) {
    return c.glifo || "✦";
  }

  // -------- Render de una carta (componente) --------
  const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];
  const RANK_LABEL = { as: "As", sota: "Sota", caballero: "Caballero", reina: "Reina", rey: "Rey" };

  function minorNumLabel(c) {
    if (c.rango === "as" || c.rango === "sota" || c.rango === "caballero" || c.rango === "reina" || c.rango === "rey") {
      return RANK_LABEL[c.rango];
    }
    return ROMAN[Number(c.rango) - 1] || c.numero;
  }

  function majorNumLabel(c) {
    if (c.numero === 0) return "0";
    return ROMAN[Number(c.numero) - 1] || String(c.numero);
  }

  function cardEl(c, opts) {
    opts = opts || {};
    const el = document.createElement("div");
    el.className = "card " + cardSuit(c) + (opts.lg ? " card-lg" : "");
    el.dataset.cardId = c.id;
    el.dataset.reversed = opts.reversed ? "1" : "0";
    if (opts.reversed) el.classList.add("card-reversed");

    const numLabel = c.type === "major" ? majorNumLabel(c) : minorNumLabel(c);

    el.innerHTML =
      '<div class="card-top">' + esc(numLabel) + '</div>' +
      '<div class="card-art">' + esc(symbolFor(c)) + '</div>' +
      '<div class="card-name">' + esc(cardName(c)) + '</div>' +
      '<div class="card-sub">' + esc(c.pintura) + '</div>' +
      '<div class="card-bottom">' + esc(c.type === "major" ? "Mayor" : DECK.suits[c.palo].name) + '</div>';

    return el;
  }

  // Delegación de clics para cualquier carta renderizada (incluida la insertada via innerHTML)
  function bindCardDelegation() {
    document.addEventListener("click", function (ev) {
      const cardNode = ev.target.closest(".card");
      if (!cardNode) return;
      ev.stopPropagation();
      if (cardNode.closest(".modal") && cardNode.closest(".manual-mini")) return;
      const id = Number(cardNode.dataset.cardId);
      const reversed = cardNode.dataset.reversed === "1";
      const card = ALL_CARDS.find(c => c.id === id);
      if (card) openModal(card, reversed);
    });
  }

  // -------- Navegación por vistas --------
  function goView(viewId) {
    $$(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.view === viewId));
    $$(".view").forEach(v => v.classList.toggle("view-active", v.id === viewId));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function bindNav() {
    $$(".nav-btn").forEach(b => b.addEventListener("click", () => goView(b.dataset.view)));
    $$("[data-go]").forEach(b => b.addEventListener("click", () => goView("view-" + b.dataset.go)));
  }

  // -------- Galería --------
  let galleryFilter = "all";

  function renderGallery() {
    const grid = $("#gallery-grid");
    grid.innerHTML = "";
    const filtered = ALL_CARDS.filter(c => {
      if (galleryFilter === "all") return true;
      if (galleryFilter === "major") return c.type === "major";
      return c.type === "minor" && c.palo === galleryFilter;
    });
    filtered.forEach(c => grid.appendChild(cardEl(c)));
  }

  function bindGallery() {
    $$(".filter-btn").forEach(b => b.addEventListener("click", () => {
      galleryFilter = b.dataset.filter;
      $$(".filter-btn").forEach(x => x.classList.toggle("active", x === b));
      renderGallery();
    }));
  }

  // -------- Manual --------
  function renderManual() {
    const index = $("#manual-index");
    const content = $("#manual-content");

    let idx = '<h3>Índice general</h3><nav>';
    idx += '<div class="idx-group">Arcanos Mayores</div>';
    MAJOR_CARDS.forEach(c => { idx += '<a href="#manual-' + c.id + '">' + esc(c.nombre) + '</a>'; });

    ["bastos", "copas", "espadas", "oros"].forEach(palo => {
      idx += '<div class="idx-group">' + esc(DECK.suits[palo].name) + '</div>';
      MINOR_CARDS.filter(c => c.palo === palo).forEach(c => {
        idx += '<a href="#manual-' + c.id + '">' + esc(cardName(c)) + '</a>';
      });
    });
    idx += '</nav>';
    index.innerHTML = idx;

    let html = "";
    html += manualIntro();
    ALL_CARDS.forEach(c => { html += manualCard(c); });
    content.innerHTML = html;
  }

  function manualIntro() {
    return (
      '<div class="manual-card">' +
        '<h3>Antes de leer este manual</h3>' +
        '<p>' + esc(DECK.artist.bio) + '</p>' +
        '<p>En este mazo, cada carta se vincula a una pintura de Varo. La pintura no es la carta: es su espejo. ' +
        'El significado nace del diálogo entre el arquetipo del tarot y el universo imaginario de la artista.</p>' +
        '<p><strong>¿Cómo interpretar una lectura?</strong> Revisa la posición (recta o invertida), deja que la pintura ' +
        'evoque imágenes propias y fíjate en los símbolos. El consejo final de cada carta es la llave práctica.</p>' +
      '</div>'
    );
  }

  function manualCard(c) {
    const suitClass = cardSuit(c);
    const s = DECK.suits[c.palo];
    const keywords = (c.palabras || []).map(k => '<span>' + esc(k) + '</span>').join("");

    const head =
      '<div class="manual-card-head">' +
        '<div class="manual-mini">' + cardEl(c, { plain: true }).outerHTML + '</div>' +
        '<div>' +
          '<h3><span class="num">' + esc(c.numero) + '</span>' + esc(cardName(c)) + '</h3>' +
          '<p class="paint-title">Pintura de referencia: «' + esc(c.pintura) + '» (' + c.anio + ')</p>' +
          (keywords ? '<div class="keywords">' + keywords + '</div>' : '') +
        '</div>' +
      '</div>';

    const escena =
      '<div class="manual-block"><h4>Escena de la pintura</h4><p>' + esc(c.escena) + '</p></div>';

    const simb =
      '<div class="manual-block"><h4>Simbología</h4><ul>' +
      (c.simbolos || []).map(x => '<li>' + esc(x) + '</li>').join("") +
      '</ul></div>';

    const up =
      '<div class="manual-block manual-upright"><h4>Significado en posición recta</h4><p>' + esc(c.vertical) + '</p></div>';

    const rev =
      '<div class="manual-block manual-reversed"><h4>Significado invertida</h4><p>' + esc(c.invertido) + '</p></div>';

    const counsel =
      '<div class="manual-block"><h4>Consejo</h4><p>' + esc(c.consejo) + '</p></div>';

    const elementInfo = c.type === "minor"
      ? '<p class="manual-cite">' + esc(s.name) + ' · ' + esc(s.element) + ' · ' + esc(s.principle) + '</p>'
      : '<p class="manual-cite">Arcano Mayor · El viaje del héroe interior</p>';

    return (
      '<article class="manual-card" id="manual-' + c.id + '">' +
        head + escena + simb + up + rev + counsel + elementInfo +
      '</article>'
    );
  }

  // -------- Lecturas --------
  function bindSpreadButtons() {
    $$(".spread-btn").forEach(b => b.addEventListener("click", () => {
      $$(".spread-btn").forEach(x => x.classList.toggle("selected", x === b));
      state.selectedSpread = b.dataset.spread;
      state.spreadDesc = DECK.spreads[b.dataset.spread].description;
      $("#spread-description").textContent = state.spreadDesc;
      $("#btn-draw").disabled = false;
    }));
  }

  function drawCards() {
    const result = $("#reading-result");
    const spread = state.selectedSpread;
    if (!spread) return;

    const deck = shuffle(ALL_CARDS);
    let picked = [];

    if (spread === "one") picked = [deck[0]];
    else if (spread === "three") picked = deck.slice(0, 3);
    else picked = deck.slice(0, 10);

    // Posición aleatoria recta/invertida con 50% de probabilidad
    const placed = picked.map(c => ({ card: c, reversed: Math.random() < 0.5 }));

    let head = '<div class="reading-head"><h3>' + esc(DECK.spreads[spread].name) + '</h3><p>' + esc(state.spreadDesc) + '</p></div>';
    let body = "";

    if (spread === "one") {
      const p = placed[0];
      body = '<div class="slot-row"><div class="slot">' + cardEl(p.card, { lg: true, reversed: p.reversed }).outerHTML +
        '<div class="slot-label">Hoy</div>' +
        (p.reversed ? '<p class="slot-summary"><em>Invertida · clima interno</em></p>' : '') +
        '</div></div>';
    } else if (spread === "three") {
      THREE_SLOTS.forEach((label, i) => {
        const p = placed[i];
        body += '<div class="slot"><span class="slot-label">' + label + '</span>' +
          cardEl(p.card, { lg: true, reversed: p.reversed }).outerHTML +
          '<p class="slot-summary"><em>' + esc(cardName(p.card)) + '</em></p>' +
          '<span class="slot-keyword">' + esc((p.card.palabras || []).join(" · ")) + '</span></div>';
      });
      body = '<div class="slot-pair">' + body + '</div>';

      body += '<div class="reading-head" style="margin-top:26px"><h3>Lectura resumida</h3></div>';
      THREE_SLOTS.forEach((label, i) => {
        const p = placed[i];
        body += '<div class="manual-block" style="max-width:720px"><h4>' + label + ': ' + esc(cardName(p.card)) + '</h4>' +
          '<p>' + esc(p.reversed ? p.card.invertido : p.card.vertical) + '</p></div>';
      });
    } else {
      body = '<div class="slot-pair">';
      CELTIC_SLOTS.forEach((label, i) => {
        const p = placed[i];
        body += '<div class="slot"><span class="slot-label">' + (i + 1) + ' · ' + label + '</span>' +
          cardEl(p.card, { lg: true, reversed: p.reversed }).outerHTML +
          '<p class="slot-summary"><em>' + esc(cardName(p.card)) + '</em></p></div>';
      });
      body += '</div>';
    }

    result.innerHTML = head + body;
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function bindDraw() {
    $("#btn-draw").addEventListener("click", drawCards);
  }

  // -------- Modal de carta --------
  function openModal(c, reversed) {
    const modal = $("#card-modal");
    const body = $("#modal-body");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    body.innerHTML = manualCard(c);
    if (reversed) {
      const block = body.querySelector(".manual-upright");
      if (block) {
        const p = document.createElement("p");
        p.innerHTML = '<em style="color:#c96f4a">Esta carta ha salido en posición invertida: presta atención al rango de significado invertido.</em>';
        block.after(p);
      }
    }
  }

  function closeModal() {
    const modal = $("#card-modal");
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  function bindModal() {
    $$("[data-close='modal']").forEach(el => el.addEventListener("click", closeModal));
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
  }

  // -------- Init --------
  document.addEventListener("DOMContentLoaded", () => {
    goView("view-home");
    bindNav();
    bindGallery();
    renderGallery();
    renderManual();
    bindSpreadButtons();
    bindDraw();
    bindModal();
    bindCardDelegation();
  });

})();