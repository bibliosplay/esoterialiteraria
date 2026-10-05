/**
 * TAROT DE LAS CRIATURAS DE HIERONYMUS BOSCH (EL BOSCO)
 * Lógica de la aplicación: tiradas interactivas, volteo 3D, galería,
 * manual explicativo y síntesis de lecturas oraculares.
 */

document.addEventListener("DOMContentLoaded", () => {
    // ESTADO DE LA APLICACIÓN
    const state = {
        activeSpreadId: "triptych",
        allowReversed: true,
        drawnCards: [], // [{ cardData, isReversed, position, isRevealed, element }]
        currentView: "table", // 'table' | 'gallery'
        selectedGalleryFilter: "all",
        searchQuery: ""
    };

    // ELEMENTOS DEL DOM
    const dom = {
        // Vistas
        tableSection: document.getElementById("tableSection"),
        gallerySection: document.getElementById("gallerySection"),
        readingPanel: document.getElementById("readingPanel"),
        
        // Botones de navegación
        btnNavTable: document.getElementById("btnNavTable"),
        btnNavGallery: document.getElementById("btnNavGallery"),
        btnNavCodex: document.getElementById("btnNavCodex"),
        
        // Controles de tirada
        spreadButtons: document.querySelectorAll(".btn-spread"),
        spreadTitle: document.getElementById("spreadTitle"),
        spreadSubtitle: document.getElementById("spreadSubtitle"),
        spreadMat: document.getElementById("spreadMat"),
        toggleReversed: document.getElementById("toggleReversed"),
        
        // Acciones
        btnShuffleDeal: document.getElementById("btnShuffleDeal"),
        btnRevealAll: document.getElementById("btnRevealAll"),
        btnReset: document.getElementById("btnReset"),
        
        // Panel de lectura
        readingGrid: document.getElementById("readingGrid"),
        readingSynthesis: document.getElementById("readingSynthesis"),
        
        // Galería
        galleryGrid: document.getElementById("galleryGrid"),
        gallerySearch: document.getElementById("gallerySearch"),
        filterButtons: document.querySelectorAll(".btn-filter"),
        
        // Modales
        cardModal: document.getElementById("cardModal"),
        cardModalClose: document.getElementById("cardModalClose"),
        cardModalContent: document.getElementById("cardModalContent"),
        
        codexModal: document.getElementById("codexModal"),
        codexModalClose: document.getElementById("codexModalClose"),
        codexNavItems: document.querySelectorAll(".codex-nav-item"),
        codexArticles: document.querySelectorAll(".codex-article-content"),
        
        // Audio UI
        btnMusicToggle: document.getElementById("btnMusicToggle"),
        btnMuteToggle: document.getElementById("btnMuteToggle"),
        moodSelector: document.getElementById("moodSelector"),
        volumeSlider: document.getElementById("volumeSlider")
    };

    // INICIALIZACIÓN
    initApp();

    function initApp() {
        setupEventListeners();
        renderSpread(state.activeSpreadId);
        renderGallery();
        dealCards();
    }

    // CONFIGURACIÓN DE EVENT LISTENERS
    function setupEventListeners() {
        // Navegación de vistas
        dom.btnNavTable.addEventListener("click", () => switchView("table"));
        dom.btnNavGallery.addEventListener("click", () => switchView("gallery"));
        dom.btnNavCodex.addEventListener("click", () => openCodexModal());

        // Selector de tiradas
        dom.spreadButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const spreadId = btn.getAttribute("data-spread");
                if (spreadId && spreadId !== state.activeSpreadId) {
                    state.activeSpreadId = spreadId;
                    dom.spreadButtons.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    renderSpread(spreadId);
                    dealCards();
                }
            });
        });

        // Interruptor de cartas invertidas
        if (dom.toggleReversed) {
            dom.toggleReversed.checked = state.allowReversed;
            dom.toggleReversed.addEventListener("change", (e) => {
                state.allowReversed = e.target.checked;
            });
        }

        // Acciones de tirada
        dom.btnShuffleDeal.addEventListener("click", () => {
            boschAudio.playShuffle();
            dealCards();
        });

        dom.btnRevealAll.addEventListener("click", () => {
            revealAllCards();
        });

        dom.btnReset.addEventListener("click", () => {
            dealCards();
        });

        // Controles de Audio
        dom.btnMusicToggle.addEventListener("click", () => {
            const isPlaying = boschAudio.toggleMusic();
            dom.btnMusicToggle.classList.toggle("playing", isPlaying);
            dom.btnMusicToggle.innerHTML = isPlaying ? "⏸️" : "🎵";
            dom.btnMusicToggle.title = isPlaying ? "Pausar Música Ambiente" : "Iniciar Música Ambiente";
        });

        dom.btnMuteToggle.addEventListener("click", () => {
            const isMuted = boschAudio.toggleMute();
            dom.btnMuteToggle.innerHTML = isMuted ? "🔇" : "🔊";
            dom.btnMuteToggle.title = isMuted ? "Activar Sonido" : "Silenciar";
        });

        dom.moodSelector.addEventListener("change", (e) => {
            boschAudio.setMood(e.target.value);
        });

        dom.volumeSlider.addEventListener("input", (e) => {
            boschAudio.setVolume(parseFloat(e.target.value));
        });

        // Galería: buscador y filtros
        if (dom.gallerySearch) {
            dom.gallerySearch.addEventListener("input", (e) => {
                state.searchQuery = e.target.value.toLowerCase().trim();
                filterGallery();
            });
        }

        dom.filterButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                dom.filterButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                state.selectedGalleryFilter = btn.getAttribute("data-filter");
                filterGallery();
            });
        });

        // Modales
        dom.cardModalClose.addEventListener("click", () => closeCardModal());
        dom.cardModal.addEventListener("click", (e) => {
            if (e.target === dom.cardModal) closeCardModal();
        });

        dom.codexModalClose.addEventListener("click", () => closeCodexModal());
        dom.codexModal.addEventListener("click", (e) => {
            if (e.target === dom.codexModal) closeCodexModal();
        });

        // Navegación en el Códice / Manual
        dom.codexNavItems.forEach(item => {
            item.addEventListener("click", () => {
                const targetChapter = item.getAttribute("data-chapter");
                dom.codexNavItems.forEach(i => i.classList.remove("active"));
                item.classList.add("active");

                dom.codexArticles.forEach(article => {
                    if (article.id === `codex-${targetChapter}`) {
                        article.style.display = "block";
                    } else {
                        article.style.display = "none";
                    }
                });
            });
        });

        // Escuchar escape para cerrar modales
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeCardModal();
                closeCodexModal();
            }
        });
    }

    // CAMBIO DE VISTAS (TAPETE / GALERÍA)
    function switchView(view) {
        state.currentView = view;
        if (view === "table") {
            dom.tableSection.style.display = "flex";
            if (state.drawnCards.some(c => c.isRevealed)) {
                dom.readingPanel.style.display = "block";
            }
            dom.gallerySection.classList.remove("active");
            dom.btnNavTable.classList.add("active");
            dom.btnNavGallery.classList.remove("active");
        } else if (view === "gallery") {
            dom.tableSection.style.display = "none";
            dom.readingPanel.style.display = "none";
            dom.gallerySection.classList.add("active");
            dom.btnNavTable.classList.remove("active");
            dom.btnNavGallery.classList.add("active");
        }
    }

    // RENDERIZADO DEL TAPETE DE TIRADA
    function renderSpread(spreadId) {
        const spreadConfig = BOSCH_SPREADS.find(s => s.id === spreadId) || BOSCH_SPREADS[1];
        dom.spreadTitle.textContent = spreadConfig.name;
        dom.spreadSubtitle.textContent = spreadConfig.description;

        dom.spreadMat.innerHTML = "";
        dom.spreadMat.className = `spread-mat spread-${spreadConfig.id}`;

        spreadConfig.positions.forEach(pos => {
            const slot = document.createElement("div");
            slot.className = `card-slot pos-${spreadConfig.id}-${pos.index}`;
            
            // Añadir clase de posición para la cruz
            if (spreadConfig.id === "cross") {
                const classMap = ["center", "left", "right", "bottom", "top"];
                slot.classList.add(`pos-cross-${classMap[pos.index]}`);
            }

            slot.setAttribute("data-slot-index", pos.index);
            slot.innerHTML = `
                <div class="slot-card-container" id="slotCard_${pos.index}"></div>
                <div class="slot-label">
                    <div class="slot-name">${pos.name}</div>
                    <div class="slot-meaning">${pos.meaning}</div>
                </div>
            `;
            dom.spreadMat.appendChild(slot);
        });

        // Ocultar panel de lectura hasta que se revelen cartas
        dom.readingPanel.style.display = "none";
    }

    // BARAJAR Y REPARTIR CARTAS
    function dealCards() {
        const spreadConfig = BOSCH_SPREADS.find(s => s.id === state.activeSpreadId) || BOSCH_SPREADS[1];
        
        // Barajado aleatorio de Fisher-Yates sobre el mazo
        const shuffledDeck = [...BOSCH_DECK].sort(() => Math.random() - 0.5);
        state.drawnCards = [];

        spreadConfig.positions.forEach((pos, idx) => {
            const cardData = shuffledDeck[idx];
            // Inversión aleatoria si está activada
            const isReversed = state.allowReversed ? Math.random() < 0.35 : false;
            
            const cardObj = {
                cardData,
                isReversed,
                position: pos,
                isRevealed: false,
                element: null
            };
            state.drawnCards.push(cardObj);

            const container = document.getElementById(`slotCard_${idx}`);
            if (container) {
                container.innerHTML = "";
                const cardEl = createCardElement(cardObj, idx);
                cardObj.element = cardEl;
                container.appendChild(cardEl);
                
                // Efecto de sonido y animación de reparto con retardo progresivo
                setTimeout(() => {
                    boschAudio.playCardDeal();
                    cardEl.style.opacity = "1";
                    cardEl.style.transform = "translateY(0)";
                }, idx * 120);
            }
        });

        dom.readingPanel.style.display = "none";
    }

    // CREACIÓN DEL ELEMENTO NAIPE 3D
    function createCardElement(cardObj, index) {
        const wrap = document.createElement("div");
        wrap.className = "card-3d-wrap";
        wrap.style.opacity = "0";
        wrap.style.transform = "translateY(-20px)";
        wrap.style.transition = "all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1.2)";

        const { cardData, isReversed } = cardObj;

        wrap.innerHTML = `
            <div class="card-inner">
                <!-- REVERSO GÓTICO -->
                <div class="card-face card-back">
                    <div class="back-corner"><span>✦</span><span>${cardData.roman}</span><span>✦</span></div>
                    <div class="back-emblem">
                        <div class="back-emblem-icon">👁️</div>
                        <div class="back-emblem-text">EL BOSCO</div>
                    </div>
                    <div class="back-corner"><span>✦</span><span>${cardData.roman}</span><span>✦</span></div>
                </div>

                <!-- ANVERSO DEL ARCANO -->
                <div class="card-face card-front">
                    ${isReversed ? '<div class="reversed-badge">INVERTIDA</div>' : ''}
                    <div class="card-header-bar">
                        <span class="card-roman">${cardData.roman}</span>
                        <span class="card-element-badge">${getElementSymbol(cardData.element)} ${cardData.element}</span>
                    </div>
                    <div class="card-img-wrap">
                        <img class="card-img" src="${cardData.image}" alt="${cardData.name}" loading="lazy" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="card-fallback">${cardData.fallbackIcon || '🎴'}</div>
                    </div>
                    <div class="card-footer-bar">
                        <div class="card-name-title">${cardData.name}</div>
                        <div class="card-creature-sub">${cardData.title}</div>
                    </div>
                </div>
            </div>
        `;

        if (isReversed) {
            wrap.classList.add("is-reversed");
        }

        // Efecto hover 3D con paralaje del cursor
        wrap.addEventListener("mousemove", (e) => {
            if (wrap.classList.contains("flipped")) {
                const rect = wrap.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const rotX = -(y / rect.height) * 14;
                const rotY = (x / rect.width) * 14;
                wrap.style.transform = `translateY(-8px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
            }
        });

        wrap.addEventListener("mouseleave", () => {
            wrap.style.transform = "";
        });

        // Click para voltear carta
        wrap.addEventListener("click", () => {
            if (!cardObj.isRevealed) {
                flipCard(cardObj);
            } else {
                // Si ya está revelada, abrir modal con su sabiduría completa
                openCardModal(cardData, isReversed, cardObj.position);
            }
        });

        return wrap;
    }

    // ACCIÓN DE VOLTEO 3D DE UNA CARTA
    function flipCard(cardObj) {
        if (cardObj.isRevealed) return;
        cardObj.isRevealed = true;
        
        const el = cardObj.element;
        el.classList.add("flipped", "revealing");
        
        // Sonidos táctiles
        boschAudio.playCardFlip();
        setTimeout(() => {
            boschAudio.playMysticReveal();
        }, 220);

        setTimeout(() => {
            el.classList.remove("revealing");
        }, 1200);

        // Actualizar panel de lectura
        updateReadingPanel();
    }

    // REVELAR TODAS LAS CARTAS EN SECUENCIA
    function revealAllCards() {
        state.drawnCards.forEach((cardObj, idx) => {
            if (!cardObj.isRevealed) {
                setTimeout(() => {
                    flipCard(cardObj);
                }, idx * 280);
            }
        });
    }

    // ACTUALIZAR EL PANEL DE INTERPRETACIÓN
    function updateReadingPanel() {
        const revealed = state.drawnCards.filter(c => c.isRevealed);
        if (revealed.length === 0) {
            dom.readingPanel.style.display = "none";
            return;
        }

        dom.readingPanel.style.display = "block";
        dom.readingGrid.innerHTML = "";

        revealed.forEach(c => {
            const { cardData, isReversed, position } = c;
            const item = document.createElement("div");
            item.className = "reading-card-item";
            
            const meaningText = isReversed ? cardData.reversed : cardData.upright;
            const stateLabel = isReversed ? "Invertida (Sombra / Advertencia)" : "Al Derecho (Luz / Consejo)";
            const stateClass = isReversed ? "reversed" : "upright";

            item.innerHTML = `
                <span class="item-position-tag">${position.name}</span>
                <div class="item-card-title">${cardData.roman}. ${cardData.name}</div>
                <div class="item-card-state ${stateClass}">${stateLabel}</div>
                <div class="item-card-desc">${meaningText}</div>
                <div class="item-keywords">
                    ${cardData.keywords.map(k => `<span class="item-keyword">${k}</span>`).join("")}
                </div>
                <div class="item-quote">${cardData.quote}</div>
            `;

            item.addEventListener("click", () => {
                openCardModal(cardData, isReversed, position);
            });

            dom.readingGrid.appendChild(item);
        });

        // Si todas las cartas están reveladas, generar síntesis del oráculo
        if (revealed.length === state.drawnCards.length) {
            generateOracleSynthesis();
            dom.readingSynthesis.style.display = "block";
        } else {
            dom.readingSynthesis.style.display = "none";
        }
    }

    // GENERADOR DE SÍNTESIS ORACULAR PERSONALIZADA
    function generateOracleSynthesis() {
        const spreadConfig = BOSCH_SPREADS.find(s => s.id === state.activeSpreadId);
        let synthesis = "";

        if (state.activeSpreadId === "single") {
            const card = state.drawnCards[0];
            synthesis = `Bajo el ojo vigilante de San Antonio, <strong>${card.cardData.name}</strong> (${card.isReversed ? 'en su aspecto invertido' : 'en plenitud'}) te exhorta a: ${card.isReversed ? card.cardData.reversed : card.cardData.upright} Recuerda la advertencia del maestro flamenco: <em>${card.cardData.quote}</em>`;
        } else if (state.activeSpreadId === "triptych") {
            const past = state.drawnCards[0];
            const pres = state.drawnCards[1];
            const fut = state.drawnCards[2];
            synthesis = `Tu viaje comenzó en el Edén de <strong>${past.cardData.name}</strong>, donde se forjó la raíz de tu búsqueda. En el presente, las delicias y encrucijadas de <strong>${pres.cardData.name}</strong> ponen a prueba tu templanza moral. El porvenir en el Infierno Musical de <strong>${fut.cardData.name}</strong> advierte que el desenlace dependerá de tu capacidad para transmutar el deseo efímero en sabiduría duradera.`;
        } else if (state.activeSpreadId === "cross") {
            const center = state.drawnCards[0];
            const lure = state.drawnCards[1];
            const test = state.drawnCards[2];
            const root = state.drawnCards[3];
            const apex = state.drawnCards[4];
            synthesis = `Tu alma se halla representada en el eje por <strong>${center.cardData.name}</strong>. Mientras la tentación lateral de <strong>${lure.cardData.name}</strong> intenta apartarte del sendero, el juicio implacable de <strong>${test.cardData.name}</strong> exige tu firmeza moral. Apóyate en la sabiduría subterránea de <strong>${root.cardData.name}</strong> para alcanzar la culminación prometida por <strong>${apex.cardData.name}</strong>.`;
        }

        dom.readingSynthesis.innerHTML = `
            <h4>🔮 Síntesis Hermética de la Tirada</h4>
            <p>${synthesis}</p>
        `;
    }

    // RENDERIZADO DE LA GALERÍA DEL BESTIARIO
    function renderGallery() {
        if (!dom.galleryGrid) return;
        dom.galleryGrid.innerHTML = "";

        BOSCH_DECK.forEach(card => {
            const item = document.createElement("div");
            item.className = "gallery-card-item";
            item.setAttribute("data-realm", card.realm);
            item.setAttribute("data-keywords", card.keywords.join(" ").toLowerCase());
            item.setAttribute("data-name", `${card.name} ${card.title}`.toLowerCase());

            item.innerHTML = `
                <div class="gallery-card-thumb">
                    <img src="${card.image}" alt="${card.name}" loading="lazy"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    <div class="card-fallback" style="display:none; text-align:center; padding-top:40px;">${card.fallbackIcon || '🎴'}</div>
                </div>
                <div class="gallery-card-meta">
                    <div class="gallery-card-number">${card.roman} · ${card.element}</div>
                    <div class="gallery-card-name">${card.name}</div>
                    <div class="gallery-card-creature">${card.title}</div>
                </div>
            `;

            item.addEventListener("click", () => {
                openCardModal(card, false, null);
            });

            dom.galleryGrid.appendChild(item);
        });
    }

    // FILTRADO DINÁMICO DE LA GALERÍA
    function filterGallery() {
        const cards = dom.galleryGrid.querySelectorAll(".gallery-card-item");
        cards.forEach(card => {
            const realm = card.getAttribute("data-realm");
            const name = card.getAttribute("data-name");
            const keywords = card.getAttribute("data-keywords");

            const matchesFilter = (state.selectedGalleryFilter === "all" || realm === state.selectedGalleryFilter);
            const matchesSearch = (!state.searchQuery || name.includes(state.searchQuery) || keywords.includes(state.searchQuery));

            if (matchesFilter && matchesSearch) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    }

    // MODAL DE DETALLE DE CARTA
    function openCardModal(card, isReversed = false, position = null) {
        dom.cardModalContent.innerHTML = `
            <div class="modal-card-detail">
                <div class="modal-artwork">
                    <img class="modal-artwork-img" src="${card.image}" alt="${card.name}"
                         onerror="this.src='assets/cards/card_back.jpg';">
                    <div class="modal-painting-src">🎨 ${card.painting}</div>
                </div>
                <div class="modal-body">
                    <h2>${card.roman}. ${card.name}</h2>
                    <div class="modal-subtitle">${card.title}</div>
                    <div class="modal-latin">✦ ${card.latin} ✦</div>

                    ${position ? `<div class="modal-quote"><strong>Posición en la tirada:</strong> ${position.name}<br><em>${position.meaning}</em></div>` : ''}

                    <div class="modal-quote">${card.quote}</div>

                    <div class="modal-section-title">🗝️ Palabras Clave</div>
                    <div class="modal-keywords">
                        ${card.keywords.map(k => `<span class="item-keyword">${k}</span>`).join("")}
                    </div>

                    <div class="modal-meaning-box upright">
                        <div class="meaning-label upright">Significado al Derecho (Luz)</div>
                        <p>${card.upright}</p>
                    </div>

                    <div class="modal-meaning-box reversed">
                        <div class="meaning-label reversed">Significado Invertido (Sombra)</div>
                        <p>${card.reversed}</p>
                    </div>

                    <div class="modal-section-title">🐉 Simbolismo de la Criatura en El Bosco</div>
                    <p style="font-size:0.95rem; color:#ded6ca; line-height:1.5;">${card.creature_lore}</p>
                </div>
            </div>
        `;
        dom.cardModal.classList.add("active");
    }

    function closeCardModal() {
        dom.cardModal.classList.remove("active");
    }

    // MODAL DEL CÓDICE / MANUAL
    function openCodexModal() {
        dom.codexModal.classList.add("active");
    }

    function closeCodexModal() {
        dom.codexModal.classList.remove("active");
    }

    // AUXILIARES
    function getElementSymbol(elem) {
        switch(elem) {
            case "Fuego": return "🔥";
            case "Agua": return "💧";
            case "Aire": return "💨";
            case "Tierra": return "🌱";
            case "Éter": return "✨";
            default: return "✦";
        }
    }
});
