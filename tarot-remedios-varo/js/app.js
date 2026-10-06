/* ============================================================
   TAROT REMEDIOS VARO — MOTOR DE JUEGO, 3D, AUDIO Y SÍNTESIS
   Mazo Surrealista Completo (78 Cartas con Arte Pictórico)
   ============================================================ */
(function () {
  "use strict";

  // -------- Construcción del mazo completo --------
  const ALL_CARDS = MAJOR_CARDS.concat(MINOR_CARDS);

  const state = {
    selectedSpread: "three",
    spreadDesc: "",
    allowReversed: true,
    userQuestion: "",
    drawnCards: [], // [{ card, reversed, position, isRevealed, element }]
    currentView: "view-home",
    galleryFilter: "all",
    gallerySort: "default",
    searchQuery: "",
    journal: [],
    activeModalCardId: null
  };

  // -------- Utilidades --------
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const esc = (s) => String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

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

  const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X"];
  const RANK_LABEL = { as: "As", sota: "Sota", caballero: "Caballero", reina: "Reina", rey: "Rey" };

  function minorNumLabel(c) {
    if (c.rango && RANK_LABEL[c.rango]) return RANK_LABEL[c.rango];
    return ROMAN[Number(c.rango) - 1] || c.numero;
  }

  function majorNumLabel(c) {
    if (c.numero === 0) return "0";
    return ROMAN[Number(c.numero) - 1] || String(c.numero);
  }

  // ==========================================
  // RENDERIZADO DE CARTAS (FRENTE Y 3D FLIP)
  // ==========================================

  // Renderiza el frente de una carta con su arte pictórico
  function cardEl(c, opts) {
    opts = opts || {};
    const el = document.createElement("div");
    const suit = cardSuit(c);
    el.className = "card " + suit + (opts.lg ? " card-lg" : "");
    el.dataset.cardId = c.id;
    el.dataset.reversed = opts.reversed ? "1" : "0";
    if (opts.reversed) el.classList.add("card-reversed");

    const numLabel = c.type === "major" ? majorNumLabel(c) : minorNumLabel(c);
    const elementData = VaroArt.getElementTag(c.type, c.palo);

    el.innerHTML = `
      <div class="card-inner-frame">
        <div class="card-corner-ornament top-left"></div>
        <div class="card-corner-ornament top-right"></div>
        <div class="card-corner-ornament bottom-left"></div>
        <div class="card-corner-ornament bottom-right"></div>
        
        <div class="card-header-bar">
          <span class="card-num">${esc(numLabel)}</span>
          <span class="card-element-pill ${elementData.class}" title="${elementData.element}">${elementData.icon}</span>
        </div>

        <div class="card-art-box">
          ${VaroArt.renderCardArtHTML(c, opts)}
        </div>

        <div class="card-info-box">
          <h4 class="card-title">${esc(cardName(c))}</h4>
          <p class="card-paint-ref" title="Pintura de Remedios Varo">«${esc(c.pintura)}»</p>
          <span class="card-year-badge">${c.anio || 1955}</span>
        </div>

        <div class="card-footer-bar">
          <span>${esc(c.type === "major" ? "Arcano Mayor" : DECK.suits[c.palo].name)}</span>
          ${opts.reversed ? '<span class="card-reversed-tag">↺ Invertida</span>' : ''}
        </div>
      </div>
    `;

    bindTiltEffect(el);
    return el;
  }

  // Renderiza una carta interactiva 3D (para la mesa de tiradas)
  function create3DCardElement(cardItem, index) {
    const wrapper = document.createElement("div");
    wrapper.className = "card-3d-wrapper is-covered";
    wrapper.dataset.index = index;
    wrapper.dataset.cardId = cardItem.card.id;
    wrapper.dataset.reversed = cardItem.reversed ? "1" : "0";
    wrapper.tabIndex = 0;
    wrapper.setAttribute("role", "button");
    wrapper.setAttribute("aria-label", `Carta ${index + 1}: ${cardItem.position}. Haz clic para voltear.`);

    const flipper = document.createElement("div");
    flipper.className = "card-flipper";

    // Reverso con filigrana dorada y astrolabio
    const back = document.createElement("div");
    back.className = "card-face card-back";
    back.innerHTML = VaroArt.getCardBackSVG() + '<div class="card-back-hint">Toca para develar</div>';

    // Frente con la carta y su pintura
    const front = document.createElement("div");
    front.className = "card-face card-front";
    front.appendChild(cardEl(cardItem.card, { lg: true, reversed: cardItem.reversed }));

    flipper.appendChild(back);
    flipper.appendChild(front);
    wrapper.appendChild(flipper);

    // Evento de volteo individual
    wrapper.addEventListener("click", () => revealCard(index));
    wrapper.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        revealCard(index);
      }
    });

    return wrapper;
  }

  // Efecto de inclinación 3D holográfica suave que sigue el cursor
  function bindTiltEffect(element) {
    element.addEventListener("mousemove", (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      element.style.setProperty("--tilt-x", `${rotateX}deg`);
      element.style.setProperty("--tilt-y", `${rotateY}deg`);
      element.style.setProperty("--shine-x", `${(x / rect.width) * 100}%`);
      element.style.setProperty("--shine-y", `${(y / rect.height) * 100}%`);
    });

    element.addEventListener("mouseleave", () => {
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.style.setProperty("--shine-x", "50%");
      element.style.setProperty("--shine-y", "50%");
    });
  }

  // ==========================================
  // NAVEGACIÓN Y VISTAS
  // ==========================================

  function goView(viewId) {
    state.currentView = viewId;
    $$(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.view === viewId));
    $$(".view").forEach(v => v.classList.toggle("view-active", v.id === viewId));
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.varoAudio) {
      window.varoAudio.playClick();
    }
  }

  function bindNav() {
    $$(".nav-btn").forEach(b => b.addEventListener("click", () => goView(b.dataset.view)));
    $$("[data-go]").forEach(b => b.addEventListener("click", () => goView("view-" + b.dataset.go)));
  }

  // ==========================================
  // CONTROLES DE AUDIO
  // ==========================================

  function bindAudioControls() {
    const btnMusic = $("#btnMusicToggle");
    const btnMute = $("#btnMuteToggle");
    const moodSel = $("#moodSelector");
    const volSlider = $("#volumeSlider");

    if (btnMusic) {
      btnMusic.addEventListener("click", () => {
        const isPlaying = window.varoAudio.toggleMusic();
        btnMusic.classList.toggle("active", isPlaying);
        btnMusic.innerHTML = isPlaying ? "🎵 Pausar Música" : "🎵 Música Astral";
      });
    }

    if (btnMute) {
      btnMute.addEventListener("click", () => {
        const isMuted = window.varoAudio.toggleMute();
        btnMute.innerHTML = isMuted ? "🔇" : "🔊";
        btnMute.classList.toggle("active", isMuted);
      });
    }

    if (moodSel) {
      moodSel.addEventListener("change", (e) => {
        window.varoAudio.setMood(e.target.value);
      });
    }

    if (volSlider) {
      volSlider.addEventListener("input", (e) => {
        window.varoAudio.setVolume(parseFloat(e.target.value));
      });
    }
  }

  // ==========================================
  // LECTURAS Y TIRADAS SAGRADAS
  // ==========================================

  const SPREAD_CONFIGS = {
    one: {
      name: "Carta del Día",
      slots: ["Clima y Foco del Día"]
    },
    three: {
      name: "El Hilo del Destino (Pasado · Presente · Futuro)",
      slots: ["1. El Pasado (El Origen y la Raíz)", "2. El Presente (El Taller Vivo)", "3. El Futuro (La Corriente Potencial)"]
    },
    celtic: {
      name: "La Cruz Celta Alquímica",
      slots: CELTIC_SLOTS
    },
    alchemy: {
      name: "La Alquimia de los 4 Elementos",
      slots: [
        "1. Fuego (Voluntad e Impulso Creador)",
        "2. Agua (Mundo Emocional y Corrientes del Alma)",
        "3. Aire (Claridad Mental y Decisiones)",
        "4. Tierra (Manifestación Concreta y Anclaje)"
      ]
    }
  };

  function bindSpreadConfig() {
    // Botones de tipo de tirada
    $$(".spread-btn").forEach(b => b.addEventListener("click", () => {
      $$(".spread-btn").forEach(x => x.classList.toggle("selected", x === b));
      state.selectedSpread = b.dataset.spread;
      const conf = SPREAD_CONFIGS[state.selectedSpread] || DECK.spreads[state.selectedSpread];
      state.spreadDesc = DECK.spreads[state.selectedSpread]?.description || "";
      $("#spread-description").textContent = state.spreadDesc;
      $("#btn-draw").disabled = false;
      if (window.varoAudio) window.varoAudio.playClick();
    }));

    // Toggle cartas invertidas
    const toggleRev = $("#toggle-reversed");
    if (toggleRev) {
      toggleRev.addEventListener("change", (e) => {
        state.allowReversed = e.target.checked;
      });
    }

    // Input de pregunta
    const questionInput = $("#reading-question");
    if (questionInput) {
      questionInput.addEventListener("input", (e) => {
        state.userQuestion = e.target.value.trim();
      });
    }

    // Botón barajar y extraer
    $("#btn-draw").addEventListener("click", executeReading);
  }

  function executeReading() {
    const spreadKey = state.selectedSpread;
    const conf = SPREAD_CONFIGS[spreadKey];
    if (!conf) return;

    if (window.varoAudio) {
      window.varoAudio.playShuffle();
    }

    const deck = shuffle(ALL_CARDS);
    const count = conf.slots.length;
    const pickedCards = deck.slice(0, count);

    // Preparar estado de cartas extraídas
    state.drawnCards = pickedCards.map((c, idx) => ({
      card: c,
      reversed: state.allowReversed ? Math.random() < 0.38 : false,
      position: conf.slots[idx],
      isRevealed: false
    }));

    renderReadingTable(spreadKey, conf);
  }

  function renderReadingTable(spreadKey, conf) {
    const resultContainer = $("#reading-result");
    resultContainer.innerHTML = "";

    // Cabecera de la tirada
    const header = document.createElement("div");
    header.className = "reading-board-header";
    header.innerHTML = `
      <div class="reading-title-box">
        <span class="reading-badge">Consulta Oracular</span>
        <h3>${esc(conf.name)}</h3>
        ${state.userQuestion ? `<p class="reading-user-question">Pregunta formulada: <em>«${esc(state.userQuestion)}»</em></p>` : ''}
        <p class="reading-hint">Toca cada carta para voltearla y develar el misterio pictórico.</p>
      </div>
      <div class="reading-board-actions">
        <button id="btnRevealAll" class="btn btn-secondary">Revelar todas las cartas</button>
        <button id="btnResetSpread" class="btn btn-secondary">Nueva Tirada</button>
      </div>
    `;
    resultContainer.appendChild(header);

    // Tablero de tirada según estructura
    const tableMat = document.createElement("div");
    tableMat.className = "table-mat spread-" + spreadKey;

    if (spreadKey === "celtic") {
      tableMat.innerHTML = `
        <div class="celtic-cross-section">
          <div class="celtic-slot-cross-center" id="slot-celtic-0"></div>
          <div class="celtic-slot-cross-crossing" id="slot-celtic-1"></div>
          <div class="celtic-slot-cross-base" id="slot-celtic-2"></div>
          <div class="celtic-slot-cross-past" id="slot-celtic-3"></div>
          <div class="celtic-slot-cross-crown" id="slot-celtic-4"></div>
          <div class="celtic-slot-cross-future" id="slot-celtic-5"></div>
        </div>
        <div class="celtic-staff-section">
          <div class="celtic-slot-staff" id="slot-celtic-6"></div>
          <div class="celtic-slot-staff" id="slot-celtic-7"></div>
          <div class="celtic-slot-staff" id="slot-celtic-8"></div>
          <div class="celtic-slot-staff" id="slot-celtic-9"></div>
        </div>
      `;
      resultContainer.appendChild(tableMat);

      state.drawnCards.forEach((item, idx) => {
        const slotEl = $(`#slot-celtic-${idx}`);
        if (slotEl) {
          const slotWrapper = document.createElement("div");
          slotWrapper.className = "slot-unit";
          slotWrapper.innerHTML = `<span class="slot-position-label">${idx + 1}. ${esc(item.position)}</span>`;
          const card3D = create3DCardElement(item, idx);
          slotWrapper.appendChild(card3D);
          slotEl.appendChild(slotWrapper);
        }
      });

    } else {
      const slotsGrid = document.createElement("div");
      slotsGrid.className = "slots-linear-grid slots-count-" + state.drawnCards.length;

      state.drawnCards.forEach((item, idx) => {
        const slotWrapper = document.createElement("div");
        slotWrapper.className = "slot-unit";
        slotWrapper.innerHTML = `<span class="slot-position-label">${esc(item.position)}</span>`;
        const card3D = create3DCardElement(item, idx);
        slotWrapper.appendChild(card3D);
        slotsGrid.appendChild(slotWrapper);
      });

      tableMat.appendChild(slotsGrid);
      resultContainer.appendChild(tableMat);
    }

    // Contenedor para la síntesis de la lectura
    const synthesisBox = document.createElement("div");
    synthesisBox.id = "reading-synthesis-box";
    synthesisBox.className = "reading-synthesis-box is-hidden";
    resultContainer.appendChild(synthesisBox);

    // Botones de acción en mesa
    $("#btnRevealAll").addEventListener("click", revealAllCards);
    $("#btnResetSpread").addEventListener("click", () => {
      resultContainer.innerHTML = "";
      $("#reading-question").value = "";
      state.userQuestion = "";
      window.scrollTo({ top: $("#view-reading").offsetTop - 20, behavior: "smooth" });
    });

    resultContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Revela una carta individual
  function revealCard(index) {
    const item = state.drawnCards[index];
    if (!item || item.isRevealed) return;

    item.isRevealed = true;
    const cardElNode = $(`.card-3d-wrapper[data-index="${index}"]`);
    if (cardElNode) {
      cardElNode.classList.remove("is-covered");
      cardElNode.classList.add("is-flipped");
    }

    if (window.varoAudio) {
      window.varoAudio.playFlip();
    }

    const allDone = state.drawnCards.every(c => c.isRevealed);
    if (allDone) {
      renderReadingSynthesis();
    }
  }

  // Revela todas las cartas secuencialmente
  function revealAllCards() {
    state.drawnCards.forEach((item, idx) => {
      if (!item.isRevealed) {
        setTimeout(() => {
          revealCard(idx);
        }, idx * 160);
      }
    });
  }

  // ==========================================
  // MOTOR DE SÍNTESIS ORACULAR ALQUÍMICA
  // ==========================================

  function renderReadingSynthesis() {
    const box = $("#reading-synthesis-box");
    if (!box) return;

    if (window.varoAudio) {
      setTimeout(() => window.varoAudio.playChime(), 350);
    }

    // Análisis de elementos y polaridad
    let majorsCount = 0;
    let bastosCount = 0;
    let copasCount = 0;
    let espadasCount = 0;
    let orosCount = 0;
    let reversedCount = 0;

    state.drawnCards.forEach(item => {
      if (item.reversed) reversedCount++;
      if (item.card.type === "major") majorsCount++;
      else {
        if (item.card.palo === "bastos") bastosCount++;
        else if (item.card.palo === "copas") copasCount++;
        else if (item.card.palo === "espadas") espadasCount++;
        else if (item.card.palo === "oros") orosCount++;
      }
    });

    const elementTallies = [
      { name: "Fuego (Bastos)", count: bastosCount, desc: "impulso creativo, voluntad y transformación activa" },
      { name: "Agua (Copas)", count: copasCount, desc: "sensibilidad, corrientes emocionales y memoria subconsciente" },
      { name: "Aire (Espadas)", count: espadasCount, desc: "claridad mental, discernimiento y toma de decisiones precisas" },
      { name: "Tierra (Oros)", count: orosCount, desc: "materialización, oficios concretos y anclaje físico" }
    ];
    elementTallies.sort((a, b) => b.count - a.count);
    const dominantElement = elementTallies[0].count > 0 ? elementTallies[0] : null;

    let alchemyDiagnosis = "";
    if (majorsCount >= Math.ceil(state.drawnCards.length / 2)) {
      alchemyDiagnosis = "Predominan los <strong>Arcanos Mayores</strong>: tu consulta toca temas existenciales, kármicos y de profunda transformación del Ser. Estás ante un cambio de estación en tu viaje iniciático.";
    } else if (dominantElement) {
      alchemyDiagnosis = `El elemento rector en este laboratorio es el <strong>${dominantElement.name}</strong> (${dominantElement.desc}). La clave pasa por armonizar esta corriente específica con tu intención.`;
    } else {
      alchemyDiagnosis = "Las fuerzas elementales se reparten en un equilibrio armónico, permitiendo que cuerpo, mente, emoción y voluntad colaboren de manera fluida.";
    }

    let cardsSummaryHTML = state.drawnCards.map((item, idx) => {
      const c = item.card;
      const orientLabel = item.reversed ? "Invertida ↺" : "Derecha";
      const orientText = item.reversed ? c.invertido : c.vertical;
      const paintRef = c.pintura ? `«${c.pintura}» (${c.anio})` : "";

      return `
        <div class="synthesis-card-entry">
          <div class="synthesis-entry-header">
            <span class="synthesis-pos-badge">${idx + 1}. ${esc(item.position)}</span>
            <h4 class="synthesis-card-title">${esc(cardName(c))} <span class="orient-label ${item.reversed ? 'is-rev' : ''}">${orientLabel}</span></h4>
          </div>
          <div class="synthesis-paint-cite">Pintura: <em>${esc(paintRef)}</em></div>
          <p class="synthesis-text">${esc(orientText)}</p>
          <div class="synthesis-counsel">
            <strong>Consejo Alquímico:</strong> ${esc(c.consejo)}
          </div>
        </div>
      `;
    }).join("");

    box.innerHTML = `
      <div class="synthesis-inner">
        <div class="synthesis-header">
          <div class="synthesis-sigil">∴ 🜂 🜄 🜁 🜃 ∴</div>
          <h3>Síntesis Alquímica de la Consulta</h3>
          <p class="synthesis-lead">El laboratorio de Remedios Varo revela la siguiente constelación de energías:</p>
        </div>

        <div class="synthesis-climate-box">
          <div class="climate-icon">⚗</div>
          <div class="climate-text">
            <h4>Clima Elemental de la Tirada</h4>
            <p>${alchemyDiagnosis}</p>
            ${reversedCount > 0 ? `<p class="climate-reversed-note">Hay <strong>${reversedCount}</strong> ${reversedCount === 1 ? 'carta invertida' : 'cartas invertidas'}: indican procesos de introspección, reservas de energía o nudos que requieren ser desenredados desde adentro.</p>` : ''}
          </div>
        </div>

        <div class="synthesis-cards-flow">
          ${cardsSummaryHTML}
        </div>

        <div class="synthesis-actions">
          <button id="btnCopyReading" class="btn btn-primary">📋 Copiar Lectura</button>
          <button id="btnExportParchment" class="btn btn-secondary">📜 Pergamino Imprimible</button>
          <button id="btnSaveJournal" class="btn btn-secondary">📖 Guardar en mi Grimorio</button>
        </div>
      </div>
    `;

    box.classList.remove("is-hidden");
    box.scrollIntoView({ behavior: "smooth", block: "start" });

    $("#btnCopyReading").addEventListener("click", copyReadingToClipboard);
    $("#btnExportParchment").addEventListener("click", openParchmentModal);
    $("#btnSaveJournal").addEventListener("click", saveReadingToJournal);
  }

  function copyReadingToClipboard() {
    const lines = [
      "✨ Tarot Remedios Varo — Lectura Oracular ✨",
      `Tirada: ${SPREAD_CONFIGS[state.selectedSpread]?.name || state.selectedSpread}`,
      state.userQuestion ? `Pregunta: "${state.userQuestion}"` : "",
      "-------------------------------------------",
      ""
    ];

    state.drawnCards.forEach((item, idx) => {
      const c = item.card;
      lines.push(`${idx + 1}. ${item.position}: ${cardName(c)} (${item.reversed ? 'Invertida' : 'Derecha'})`);
      lines.push(`   Pintura: «${c.pintura}» (${c.anio})`);
      lines.push(`   Interpretación: ${item.reversed ? c.invertido : c.vertical}`);
      lines.push(`   Consejo: ${c.consejo}`);
      lines.push("");
    });

    lines.push("-------------------------------------------");
    lines.push("Biblioteca Splay · https://bibliosplay.github.io/esoterialiteraria/");

    const textToCopy = lines.filter(Boolean).join("\n");

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert("✨ La lectura completa ha sido copiada al portapapeles.");
      });
    } else if (navigator.share) {
      navigator.share({ title: "Lectura Tarot Remedios Varo", text: textToCopy });
    }
  }

  function saveReadingToJournal() {
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      spread: SPREAD_CONFIGS[state.selectedSpread]?.name || state.selectedSpread,
      question: state.userQuestion || "Meditación abierta",
      cards: state.drawnCards.map(item => ({
        name: cardName(item.card),
        position: item.position,
        reversed: item.reversed,
        painting: item.card.pintura
      }))
    };

    try {
      const saved = JSON.parse(localStorage.getItem("varo_tarot_journal") || "[]");
      saved.unshift(entry);
      if (saved.length > 25) saved.length = 25;
      localStorage.setItem("varo_tarot_journal", JSON.stringify(saved));
      renderJournalList();
      alert("📖 Lectura guardada exitosamente en tu Grimorio local.");
    } catch (e) {
      alert("No fue posible guardar en localStorage.");
    }
  }

  // ==========================================
  // PERGAMINO IMPRIMIBLE / EXPORTACIÓN
  // ==========================================

  function openParchmentModal() {
    const modal = $("#parchment-modal");
    const container = $("#parchment-content");
    if (!modal || !container) return;

    const conf = SPREAD_CONFIGS[state.selectedSpread] || { name: state.selectedSpread };
    const dateStr = new Date().toLocaleDateString("es-ES", {
      weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"
    });

    let cardsHTML = state.drawnCards.map((item, idx) => {
      const c = item.card;
      return `
        <div class="parchment-card-row">
          <div class="parchment-card-art">
            ${VaroArt.renderCardArtHTML(c, { plain: true })}
          </div>
          <div class="parchment-card-details">
            <span class="parchment-card-pos">${idx + 1}. ${esc(item.position)}</span>
            <h4 class="parchment-card-title">${esc(cardName(c))} ${item.reversed ? '<span class="rev-pill">↺ Invertida</span>' : ''}</h4>
            <p class="parchment-paint-ref">Pintura: <em>«${esc(c.pintura)}»</em> (${c.anio || 1955})</p>
            <p class="parchment-text">${esc(item.reversed ? c.invertido : c.vertical)}</p>
            <p class="parchment-counsel"><strong>Consejo Alquímico:</strong> ${esc(c.consejo)}</p>
          </div>
        </div>
      `;
    }).join("");

    container.innerHTML = `
      <div class="parchment-sheet">
        <div class="parchment-seal">⚗ ☾ 🜂 🜄 🜁 🜃 ☽ ⚗</div>
        <h2 class="parchment-main-title">Tarot Remedios Varo</h2>
        <p class="parchment-subtitle">Pergamino de Revelación y Consulta Oracular</p>
        
        <div class="parchment-meta-grid">
          <div><strong>Fecha:</strong> ${esc(dateStr)}</div>
          <div><strong>Tirada:</strong> ${esc(conf.name)}</div>
          ${state.userQuestion ? `<div class="parchment-full-col"><strong>Pregunta o Intención:</strong> <em>«${esc(state.userQuestion)}»</em></div>` : ''}
        </div>

        <hr class="parchment-divider">

        <div class="parchment-cards-stream">
          ${cardsHTML}
        </div>

        <div class="parchment-footer">
          <p>«El mazo es un laboratorio, la lectura un experimento del Ser.»</p>
          <small>Homenaje a Remedios Varo Uranga (1908–1963) · Esoteria Literaria</small>
        </div>
      </div>
    `;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeParchmentModal() {
    const modal = $("#parchment-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  // ==========================================
  // GRIMORIO / HISTORIAL DE LECTURAS
  // ==========================================

  function renderJournalList() {
    const container = $("#journal-list");
    if (!container) return;

    try {
      const saved = JSON.parse(localStorage.getItem("varo_tarot_journal") || "[]");
      if (saved.length === 0) {
        container.innerHTML = `<p class="journal-empty">Aún no has registrado lecturas en tu Grimorio. Realiza una tirada y presiona "Guardar en mi Grimorio".</p>`;
        return;
      }

      container.innerHTML = saved.map((item, i) => `
        <article class="journal-card">
          <div class="journal-header">
            <div>
              <span class="journal-date">${esc(item.date)}</span>
              <h4 class="journal-title">${esc(item.spread)}</h4>
            </div>
            <button class="journal-btn-delete" data-del="${i}" title="Eliminar entrada">×</button>
          </div>
          ${item.question ? `<p class="journal-question"><strong>Pregunta:</strong> «${esc(item.question)}»</p>` : ''}
          <div class="journal-cards-pills">
            ${item.cards.map(c => `
              <span class="journal-pill">
                ${esc(c.position)}: <strong>${esc(c.name)}</strong> ${c.reversed ? '↺' : ''}
              </span>
            `).join("")}
          </div>
        </article>
      `).join("");

      container.querySelectorAll("[data-del]").forEach(btn => {
        btn.addEventListener("click", () => {
          const idx = parseInt(btn.dataset.del, 10);
          saved.splice(idx, 1);
          localStorage.setItem("varo_tarot_journal", JSON.stringify(saved));
          renderJournalList();
        });
      });

    } catch (e) {
      container.innerHTML = `<p class="journal-empty">No se pudo cargar el historial.</p>`;
    }
  }

  // ==========================================
  // GALERÍA DEL MAZO CON BÚSQUEDA Y ORDENACIÓN
  // ==========================================

  function renderGallery() {
    const grid = $("#gallery-grid");
    const countBadge = $("#gallery-count-badge");
    if (!grid) return;

    grid.innerHTML = "";
    const query = state.searchQuery.toLowerCase().trim();

    let filtered = ALL_CARDS.filter(c => {
      let matchesCategory = true;
      if (state.galleryFilter === "major") matchesCategory = c.type === "major";
      else if (state.galleryFilter !== "all") matchesCategory = (c.type === "minor" && c.palo === state.galleryFilter);

      if (!matchesCategory) return false;
      if (!query) return true;

      const nameMatch = cardName(c).toLowerCase().includes(query);
      const paintMatch = (c.pintura || "").toLowerCase().includes(query);
      const keywordsMatch = (c.palabras || []).some(k => k.toLowerCase().includes(query));
      const yearMatch = String(c.anio || "").includes(query);

      return nameMatch || paintMatch || keywordsMatch || yearMatch;
    });

    // Ordenación
    if (state.gallerySort === "year-asc") {
      filtered.sort((a, b) => (a.anio || 1955) - (b.anio || 1955));
    } else if (state.gallerySort === "year-desc") {
      filtered.sort((a, b) => (b.anio || 1955) - (a.anio || 1955));
    } else if (state.gallerySort === "name") {
      filtered.sort((a, b) => cardName(a).localeCompare(cardName(b)));
    } else if (state.gallerySort === "paint") {
      filtered.sort((a, b) => (a.pintura || "").localeCompare(b.pintura || ""));
    }

    if (countBadge) {
      countBadge.textContent = `Mostrando ${filtered.length} de 78 cartas`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="gallery-empty-state">
          <div class="empty-icon">🔍</div>
          <p>No se encontraron cartas que coincidan con «${esc(query)}» en la categoría seleccionada.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(c => grid.appendChild(cardEl(c)));
  }

  function bindGallery() {
    // Filtros de categoría
    $$(".filter-btn").forEach(b => b.addEventListener("click", () => {
      state.galleryFilter = b.dataset.filter;
      $$(".filter-btn").forEach(x => x.classList.toggle("active", x === b));
      renderGallery();
      if (window.varoAudio) window.varoAudio.playClick();
    }));

    // Selector de ordenación
    const sortSel = $("#gallery-sort");
    if (sortSel) {
      sortSel.addEventListener("change", (e) => {
        state.gallerySort = e.target.value;
        renderGallery();
      });
    }

    // Búsqueda en vivo
    const searchInput = $("#gallery-search");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        renderGallery();
      });
    }
  }

  // ==========================================
  // MANUAL EXPLICATIVO
  // ==========================================

  function renderManual() {
    const index = $("#manual-index");
    const content = $("#manual-content");
    if (!index || !content) return;

    let idx = '<h3>Índice del Códice Alquímico</h3><nav>';
    idx += '<div class="idx-group">Arcanos Mayores (22)</div>';
    MAJOR_CARDS.forEach(c => { idx += '<a href="#manual-' + c.id + '">' + esc(c.nombre) + '</a>'; });

    ["bastos", "copas", "espadas", "oros"].forEach(palo => {
      idx += '<div class="idx-group">' + esc(DECK.suits[palo].name) + ' (' + esc(DECK.suits[palo].element) + ')</div>';
      MINOR_CARDS.filter(c => c.palo === palo).forEach(c => {
        idx += '<a href="#manual-' + c.id + '">' + esc(cardName(c)) + '</a>';
      });
    });
    idx += '</nav>';
    index.innerHTML = idx;

    let html = manualIntro();
    ALL_CARDS.forEach(c => { html += manualCard(c); });
    content.innerHTML = html;
  }

  function manualIntro() {
    return `
      <div class="manual-card manual-intro-card">
        <h3>El Universo Simbólico de Remedios Varo</h3>
        <p>${esc(DECK.artist.bio)}</p>
        <p>
          En este mazo, cada carta se vincula a una pintura de Remedios Varo. La pintura no es un mero adorno: 
          es un <em>espejo revelador</em>. El significado de la carta nace del diálogo entre el arquetipo universal 
          del tarot y el laboratorio imaginario de la artista.
        </p>
        <div class="manual-tips-grid">
          <div class="tip-card">
            <h4>1. Observa el mecanismo</h4>
            <p>Fíjate en las ruedas, hilos, poleas y brújulas: indican cómo se articula la energía en tu consulta.</p>
          </div>
          <div class="tip-card">
            <h4>2. La doble polaridad</h4>
            <p>La posición derecha muestra la luz y expansión; la invertida señala dónde el mecanismo está frenado o requiere mirada interior.</p>
          </div>
          <div class="tip-card">
            <h4>3. El consejo práctico</h4>
            <p>Al final de cada ficha encontrarás la clave de acción cotidiana para transmutar la situación.</p>
          </div>
        </div>
      </div>
    `;
  }

  function manualCard(c) {
    const suitClass = cardSuit(c);
    const s = DECK.suits[c.palo];
    const keywords = (c.palabras || []).map(k => '<span>' + esc(k) + '</span>').join("");
    const elementData = VaroArt.getElementTag(c.type, c.palo);

    const head = `
      <div class="manual-card-head">
        <div class="manual-mini">${cardEl(c, { plain: true }).outerHTML}</div>
        <div class="manual-card-meta">
          <div class="manual-card-tag-row">
            <span class="manual-element-tag ${elementData.class}">${elementData.icon} ${elementData.label}</span>
            <span class="manual-year-tag">${c.anio || 1955}</span>
          </div>
          <h3><span class="num">${esc(c.numero)}</span> ${esc(cardName(c))}</h3>
          <p class="paint-title">Pintura de referencia: «${esc(c.pintura)}»</p>
          ${keywords ? `<div class="keywords">${keywords}</div>` : ''}
        </div>
      </div>
    `;

    const visualBanner = `
      <div class="manual-visual-banner">
        <div class="manual-artwork-large">
          ${VaroArt.renderCardArtHTML(c, { lg: true })}
        </div>
        <div class="manual-artwork-meta">
          <strong>Obra pictórica:</strong> «${esc(c.pintura)}» (${c.anio || 1955}) · Remedios Varo
        </div>
      </div>
    `;

    const escena = `<div class="manual-block"><h4>Escena de la Pintura</h4><p>${esc(c.escena)}</p></div>`;
    const simb = `
      <div class="manual-block">
        <h4>Simbología y Correspondencias</h4>
        <ul>${(c.simbolos || []).map(x => '<li>' + esc(x) + '</li>').join("")}</ul>
      </div>
    `;
    const up = `<div class="manual-block manual-upright"><h4>Significado al Derecho (Luz / Expansión)</h4><p>${esc(c.vertical)}</p></div>`;
    const rev = `<div class="manual-block manual-reversed"><h4>Significado Invertida (Sombra / Interiorización)</h4><p>${esc(c.invertido)}</p></div>`;
    const counsel = `<div class="manual-block manual-counsel-box"><h4>Consejo Alquímico</h4><p>${esc(c.consejo)}</p></div>`;

    const elementInfo = c.type === "minor"
      ? `<p class="manual-cite">${esc(s.name)} · Elemento: ${esc(s.element)} · Principio: ${esc(s.principle)}</p>`
      : `<p class="manual-cite">Arcano Mayor · Estación del Viaje Heroico del Alma</p>`;

    return `<article class="manual-card" id="manual-${c.id}">${head}${visualBanner}${escena}${simb}${up}${rev}${counsel}${elementInfo}</article>`;
  }

  // ==========================================
  // MODAL DE INSPECCIÓN DE CARTA Y NAVEGACIÓN
  // ==========================================

  function openModal(c, reversed) {
    const modal = $("#card-modal");
    const body = $("#modal-body");
    const counter = $("#modal-card-counter");
    if (!modal || !body) return;

    state.activeModalCardId = c.id;
    const currentIndex = ALL_CARDS.findIndex(x => x.id === c.id);
    if (counter && currentIndex !== -1) {
      counter.textContent = `${currentIndex + 1} de ${ALL_CARDS.length}`;
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    body.innerHTML = manualCard(c);

    if (reversed) {
      const block = body.querySelector(".manual-upright");
      if (block) {
        const p = document.createElement("p");
        p.className = "reversed-modal-alert";
        p.innerHTML = '<em>⚡ Carta extraída en posición invertida: dale prioridad al significado de sombra o introspección.</em>';
        block.after(p);
      }
    }

    if (window.varoAudio) {
      window.varoAudio.playChime();
    }
  }

  function stepModalCard(delta) {
    if (state.activeModalCardId === null) return;
    const currentIndex = ALL_CARDS.findIndex(x => x.id === state.activeModalCardId);
    if (currentIndex === -1) return;
    let nextIndex = currentIndex + delta;
    if (nextIndex < 0) nextIndex = ALL_CARDS.length - 1;
    if (nextIndex >= ALL_CARDS.length) nextIndex = 0;
    openModal(ALL_CARDS[nextIndex], false);
  }

  function closeModal() {
    const modal = $("#card-modal");
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    state.activeModalCardId = null;
  }

  function bindModal() {
    $$("[data-close='modal']").forEach(el => el.addEventListener("click", closeModal));
    $$("[data-close='parchment']").forEach(el => el.addEventListener("click", closeParchmentModal));

    const prevBtn = $("#btnModalPrev");
    const nextBtn = $("#btnModalNext");
    if (prevBtn) prevBtn.addEventListener("click", () => stepModalCard(-1));
    if (nextBtn) nextBtn.addEventListener("click", () => stepModalCard(1));

    const printBtn = $("#btnPrintParchment");
    if (printBtn) printBtn.addEventListener("click", () => window.print());

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        closeModal();
        closeParchmentModal();
      } else if (state.activeModalCardId !== null && $("#card-modal")?.classList.contains("open")) {
        if (e.key === "ArrowLeft") stepModalCard(-1);
        else if (e.key === "ArrowRight") stepModalCard(1);
      }
    });
  }

  function bindCardDelegation() {
    document.addEventListener("click", function (ev) {
      const cardNode = ev.target.closest(".card");
      if (!cardNode) return;
      if (cardNode.closest(".card-3d-wrapper")) return; // Manejado por volteo 3D
      if (cardNode.closest(".modal")) return;

      ev.stopPropagation();
      const id = Number(cardNode.dataset.cardId);
      const reversed = cardNode.dataset.reversed === "1";
      const card = ALL_CARDS.find(c => c.id === id);
      if (card) openModal(card, reversed);
    });
  }

  // ==========================================
  // INICIALIZACIÓN
  // ==========================================

  document.addEventListener("DOMContentLoaded", () => {
    goView("view-home");
    bindNav();
    bindAudioControls();
    bindSpreadConfig();
    bindGallery();
    renderGallery();
    renderManual();
    renderJournalList();
    bindModal();
    bindCardDelegation();
  });

})();