/**
 * LIBER 333 (El Libro de las Mentiras) - Motor Principal del Juego
 */

class LiberGame {
    constructor() {
        this.currentPortalIndex = 0;
        this.ego = 100; // Inicia con 100% de certeza dogmática
        this.gnosis = 0; // Inicia con 0% de gnosis mística
        this.currentRitualStep = 0;
        this.choronzonIndex = 0;
        this.choronzonScore = 0;

        this.initElements();
        this.initCanvas();
        this.initEventListeners();
        this.renderPortal();
        this.renderOracle();
        this.renderChoronzon();
    }

    initElements() {
        // Medidores
        this.egoFill = document.getElementById('meter-ego');
        this.gnosisFill = document.getElementById('meter-gnosis');
        this.egoValText = document.getElementById('val-ego');
        this.gnosisValText = document.getElementById('val-gnosis');

        // Contenedores de vistas
        this.navButtons = document.querySelectorAll('.nav-btn');
        this.views = {
            initiation: document.getElementById('view-initiation'),
            oracle: document.getElementById('view-oracle'),
            choronzon: document.getElementById('view-choronzon'),
            lore: document.getElementById('view-lore')
        };

        // Modal de cartas del oráculo
        this.cardModal = document.getElementById('card-modal');
        this.cardModalBody = document.getElementById('card-modal-body');
        this.cardModalClose = document.getElementById('card-modal-close');

        // Botones de audio
        this.btnToggleDrone = document.getElementById('btn-toggle-drone');
        this.btnToggleMute = document.getElementById('btn-toggle-mute');
    }

    // ==========================================
    // 1. CANVAS DE GEOMETRÍA SAGRADA ANIMADA
    // ==========================================
    initCanvas() {
        const canvas = document.getElementById('sacred-geometry-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        let angle = 0;
        const particles = [];
        for (let i = 0; i < 40; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.5 + 0.2,
                speedY: Math.random() * 0.4 + 0.1
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Partículas flotantes
            ctx.fillStyle = '#d4af37';
            particles.forEach(p => {
                p.y -= p.speedY;
                if (p.y < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Geometría Sagrada Central (Hexagrama Unicurial Thelémico y Círculos concéntricos)
            const cx = width / 2;
            const cy = height / 2;
            const radius = Math.min(width, height) * 0.32;

            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(angle);
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
            ctx.lineWidth = 1.2;
            ctx.globalAlpha = 0.4;

            // Círculos concéntricos
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(0, 0, radius * 0.618, 0, Math.PI * 2); // Proporción áurea
            ctx.stroke();

            // Dibujo de Hexagrama Unicurial
            const r = radius * 0.9;
            ctx.beginPath();
            // Puntos clave del hexagrama unicurial
            const p1 = { x: 0, y: -r };
            const p2 = { x: r * 0.866, y: r * 0.5 };
            const p3 = { x: -r * 0.5, y: -r * 0.25 };
            const p4 = { x: r * 0.5, y: -r * 0.25 };
            const p5 = { x: -r * 0.866, y: r * 0.5 };
            
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.lineTo(p4.x, p4.y);
            ctx.lineTo(p5.x, p5.y);
            ctx.closePath();
            ctx.stroke();

            ctx.restore();

            angle += 0.0015;
            requestAnimationFrame(render);
        };

        render();
    }

    // ==========================================
    // 2. NAVEGACIÓN Y EVENTOS
    // ==========================================
    initEventListeners() {
        // Pestañas de modo
        this.navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                ritualAudio.playRuneClick();
                const targetView = btn.dataset.view;
                this.switchView(targetView);
            });
        });

        // Controles de audio
        if (this.btnToggleDrone) {
            this.btnToggleDrone.addEventListener('click', () => {
                ritualAudio.ensureContext();
                if (ritualAudio.isPlayingDrone) {
                    ritualAudio.stopAmbientDrone();
                    this.btnToggleDrone.innerHTML = '📿 Iniciar Canto Ritual';
                } else {
                    ritualAudio.startAmbientDrone();
                    this.btnToggleDrone.innerHTML = '📿 Detener Canto Ritual';
                }
            });
        }

        if (this.btnToggleMute) {
            this.btnToggleMute.addEventListener('click', () => {
                const muted = ritualAudio.toggleMute();
                this.btnToggleMute.innerHTML = muted ? '🔇 Silenciado' : '🔊 Sonido';
            });
        }

        // Modal de Carta
        if (this.cardModalClose) {
            this.cardModalClose.addEventListener('click', () => {
                ritualAudio.playRuneClick();
                this.cardModal.classList.remove('open');
            });
        }
        if (this.cardModal) {
            this.cardModal.addEventListener('click', (e) => {
                if (e.target === this.cardModal) {
                    this.cardModal.classList.remove('open');
                }
            });
        }

        // Botones de Tirada del Oráculo
        const btnDrawOne = document.getElementById('btn-draw-one');
        const btnDrawThree = document.getElementById('btn-draw-three');
        const btnShowAll = document.getElementById('btn-show-all');

        if (btnDrawOne) {
            btnDrawOne.addEventListener('click', () => this.drawOracleCards(1));
        }
        if (btnDrawThree) {
            btnDrawThree.addEventListener('click', () => this.drawOracleCards(3));
        }
        if (btnShowAll) {
            btnShowAll.addEventListener('click', () => this.renderOracle());
        }
    }

    switchView(viewName) {
        this.navButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === viewName);
        });
        Object.keys(this.views).forEach(key => {
            if (this.views[key]) {
                this.views[key].classList.toggle('active', key === viewName);
            }
        });
    }

    updateMeters(gnosisDelta, egoDelta) {
        this.gnosis = Math.max(0, Math.min(100, this.gnosis + gnosisDelta));
        this.ego = Math.max(0, Math.min(100, this.ego + egoDelta));

        if (this.gnosisFill) this.gnosisFill.style.width = `${this.gnosis}%`;
        if (this.egoFill) this.egoFill.style.width = `${this.ego}%`;
        if (this.gnosisValText) this.gnosisValText.innerText = `${this.gnosis}%`;
        if (this.egoValText) this.egoValText.innerText = `${this.ego}%`;
    }

    // ==========================================
    // 3. MODO INICIACIÓN: PORTALES DEL SENDERO
    // ==========================================
    renderPortal() {
        const container = document.getElementById('portal-container');
        if (!container) return;

        // ¿Completó todos los portales?
        if (this.currentPortalIndex >= LIBER_DATA.portals.length) {
            this.renderVictory(container);
            return;
        }

        const portal = LIBER_DATA.portals[this.currentPortalIndex];

        let challengeHtml = '';

        if (portal.isRitual) {
            // Portal IV: El Ritual del Rubí Estrella
            challengeHtml = `
                <div class="challenge-box">
                    <div class="challenge-question">
                        🔮 <strong>ORDALÍA RITUAL: El Destierro del Rubí Estrella</strong><br>
                        Para someter a Choronzon y cruzar el Abismo, proyecta los Sellos y Nombres de Poder.
                    </div>
                    <div id="ritual-container" class="ritual-stage"></div>
                    <div id="portal-feedback" class="feedback-box"></div>
                    <div id="portal-next-row" class="portal-action-row" style="display:none;">
                        <button class="next-portal-btn" id="btn-next-portal">Ascender al Siguiente Portal →</button>
                    </div>
                </div>
            `;
        } else {
            // Pregunta estándar o Enigma de Silencio
            challengeHtml = `
                <div class="challenge-box">
                    <div class="challenge-question">${portal.challenge.question}</div>
                    <div class="options-grid" id="portal-options-grid">
                        ${portal.challenge.options.map((opt, idx) => `
                            <button class="option-btn" data-opt-index="${idx}">
                                ${opt.text}
                            </button>
                        `).join('')}
                    </div>
                    <div id="portal-feedback" class="feedback-box"></div>
                    <div id="portal-next-row" class="portal-action-row" style="display:none;">
                        <button class="next-portal-btn" id="btn-next-portal">Avanzar en el Sendero →</button>
                    </div>
                </div>
            `;
        }

        container.innerHTML = `
            <div class="portal-card">
                <div class="portal-nav-bar">
                    <span class="portal-tag">PORTAL ${portal.id} DE 7</span>
                    <span class="portal-badge">${portal.sephira}</span>
                </div>
                <h2 class="portal-title">${portal.title}</h2>
                <div class="portal-epigraph">${portal.epigraph}</div>
                <div class="portal-text">${portal.text}</div>

                <div class="crowley-comment-box" id="crowley-comment-toggle">
                    <div class="crowley-comment-header">
                        <span>📖 Comentario de Frater Perdurabo (Liber 333)</span>
                        <span id="comment-arrow">▼ Ver Notas Secretas</span>
                    </div>
                    <div class="crowley-comment-content" id="crowley-comment-text">
                        ${portal.crowleyComment}
                    </div>
                </div>

                ${challengeHtml}
            </div>
        `;

        // Toggle comentarios de Crowley
        const commentBox = document.getElementById('crowley-comment-toggle');
        const commentText = document.getElementById('crowley-comment-text');
        const commentArrow = document.getElementById('comment-arrow');
        if (commentBox && commentText) {
            commentBox.addEventListener('click', () => {
                ritualAudio.playRuneClick();
                const isOpen = commentText.classList.toggle('open');
                commentArrow.innerText = isOpen ? '▲ Ocultar Notas Secretas' : '▼ Ver Notas Secretas';
            });
        }

        // Lógica de respuesta
        if (portal.isRitual) {
            this.currentRitualStep = 0;
            this.renderRitualStep(portal);
        } else {
            const optionBtns = container.querySelectorAll('.option-btn');
            optionBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const optIdx = parseInt(btn.dataset.optIndex);
                    this.handlePortalAnswer(portal, optIdx, optionBtns);
                });
            });
        }

        const nextBtn = document.getElementById('btn-next-portal');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                ritualAudio.playCeremonialGong();
                this.currentPortalIndex++;
                this.renderPortal();
            });
        }
    }

    handlePortalAnswer(portal, optIdx, allBtns) {
        const option = portal.challenge.options[optIdx];
        const feedbackBox = document.getElementById('portal-feedback');
        const nextRow = document.getElementById('portal-next-row');

        // Deshabilitar botones una vez seleccionado
        allBtns.forEach(b => b.disabled = true);

        // Actualizar medidores
        this.updateMeters(option.gnosisChange, option.egoChange);

        // Sonidos
        if (option.type === 'truth') {
            ritualAudio.playTibetanBowl(option.isSilence ? 528 : 432);
        } else {
            ritualAudio.playChoronzonDissonance();
        }

        // Mostrar feedback
        if (feedbackBox) {
            feedbackBox.className = `feedback-box show ${option.type}`;
            feedbackBox.innerHTML = `<strong>${option.type === 'truth' ? '✨ RUPTURA DEL VELO' : '🕸️ TRAMPA DOGMÁTICA'}:</strong> ${option.feedback}`;
        }

        // Mostrar botón de siguiente portal
        if (nextRow) {
            nextRow.style.display = 'flex';
        }
    }

    // Mini-juego del Rubí Estrella en Portal IV
    renderRitualStep(portal) {
        const stageContainer = document.getElementById('ritual-container');
        if (!stageContainer) return;

        const step = portal.ritualSteps[this.currentRitualStep];
        if (!step) {
            // Completó el ritual
            stageContainer.innerHTML = `
                <div style="color: var(--gold-light); font-size: 20px; padding: 15px;">
                    ✨ <strong>¡EL DESTIERRO ES PERFECTO!</strong><br>
                    Choronzon se disuelve en el éter ante los cuatro vientos sagrados: CHAOS, BABALON, HADIT, NUIT.
                </div>
            `;
            const feedbackBox = document.getElementById('portal-feedback');
            const nextRow = document.getElementById('portal-next-row');
            this.updateMeters(+35, -30);
            ritualAudio.playTibetanBowl(528);

            if (feedbackBox) {
                feedbackBox.className = 'feedback-box show truth';
                feedbackBox.innerHTML = 'Has abierto la puerta hacia la Tríada Suprema cruzando el Abismo sin ser devorado por la confusión del lenguaje.';
            }
            if (nextRow) nextRow.style.display = 'flex';
            return;
        }

        stageContainer.innerHTML = `
            <div class="ritual-step-name">${step.name} (${this.currentRitualStep + 1} de ${portal.ritualSteps.length})</div>
            <div class="ritual-prompt">${step.prompt}</div>
            <div class="ritual-choices">
                ${step.choices.map(choice => `
                    <button class="ritual-choice-btn" data-val="${choice}">${choice}</button>
                `).join('')}
            </div>
        `;

        const choiceBtns = stageContainer.querySelectorAll('.ritual-choice-btn');
        choiceBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const chosen = btn.dataset.val;
                if (chosen === step.expected) {
                    ritualAudio.playTibetanBowl(432 + this.currentRitualStep * 40);
                    this.currentRitualStep++;
                    this.renderRitualStep(portal);
                } else {
                    ritualAudio.playChoronzonDissonance();
                    this.updateMeters(-5, +10);
                    btn.style.borderColor = '#e53935';
                    btn.style.color = '#ffcdd2';
                    btn.innerText = '❌ Dispersión...';
                    setTimeout(() => this.renderRitualStep(portal), 700);
                }
            });
        });
    }

    renderVictory(container) {
        ritualAudio.playCeremonialGong();
        container.innerHTML = `
            <div class="victory-screen">
                <div class="victory-sigil">🜂 🜄 🜁 🜃 ☀️</div>
                <h2 class="victory-title">¡HAS ALCANZADO EL CERO DIVINO!</h2>
                <div class="sub-title">EL NIÑO DEL ABISMO (BABE OF THE ABYSS)</div>
                <p style="max-width: 700px; margin: 20px auto; font-size: 21px; line-height: 1.7; color: var(--gold-light);">
                    «El círculo de las 93 mentiras se ha cerrado sobre sí mismo. 
                    El ego ha sido devorado no por la muerte, sino por la risa sagrada de Pan.
                    Ya no buscas la verdad en dogmas ni fórmulas ajenas: reconoces que eres la Nada primordial 
                    jugando a ser Todo en Todo bajo la fórmula sublime de <strong>0 = 2</strong>.»
                </p>
                <div style="margin-top: 30px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                    <button class="oracle-btn" id="btn-restart-path">↺ Repetir el Sendero Iniciático</button>
                    <button class="oracle-btn" id="btn-goto-oracle">🔮 Consultar el Oráculo de las 93 Mentiras</button>
                </div>
            </div>
        `;

        document.getElementById('btn-restart-path')?.addEventListener('click', () => {
            this.currentPortalIndex = 0;
            this.ego = 100;
            this.gnosis = 0;
            this.updateMeters(0, 0);
            this.renderPortal();
        });

        document.getElementById('btn-goto-oracle')?.addEventListener('click', () => {
            this.switchView('oracle');
        });
    }

    // ==========================================
    // 4. MODO ORÁCULO DE LAS 93 MENTIRAS
    // ==========================================
    renderOracle(cardsToRender = null) {
        const container = document.getElementById('oracle-cards-container');
        if (!container) return;

        const cards = cardsToRender || LIBER_DATA.oracleCards;

        container.innerHTML = cards.map((card, idx) => `
            <div class="card-item" data-card-idx="${idx}">
                <div class="card-top">
                    <span class="card-number">CAPÍTULO ${card.num}</span>
                    <span class="card-symbol">${card.symbol}</span>
                </div>
                <h3 class="card-title">${card.title}</h3>
                <div class="card-theme">${card.theme}</div>
                <div class="card-quote">${card.quote}</div>
                <div class="card-paradox">⚖️ ${card.paradox}</div>
            </div>
        `).join('');

        // Clic en carta para abrir modal detallado
        container.querySelectorAll('.card-item').forEach(cardEl => {
            cardEl.addEventListener('click', () => {
                const idx = parseInt(cardEl.dataset.cardIdx);
                const card = cards[idx];
                this.openCardModal(card);
            });
        });
    }

    drawOracleCards(count) {
        ritualAudio.playTibetanBowl(440);
        // Barajar cartas
        const shuffled = [...LIBER_DATA.oracleCards].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count);
        this.renderOracle(selected);
    }

    openCardModal(card) {
        if (!this.cardModal || !this.cardModalBody) return;
        ritualAudio.playTibetanBowl(528);

        this.cardModalBody.innerHTML = `
            <div style="text-align:center; margin-bottom: 20px;">
                <div style="font-size: 40px; color: var(--gold-light);">${card.symbol}</div>
                <div class="sub-title">LIBER 333 • CAPÍTULO ${card.num}</div>
                <h2 style="font-family: var(--font-heading); color: var(--gold-light); font-size: 26px;">${card.title}</h2>
                <div style="color: var(--crimson-babalon); letter-spacing: 2px; text-transform: uppercase; font-size: 13px; font-weight: bold;">
                    Tema: ${card.theme}
                </div>
            </div>

            <div style="background: rgba(0,0,0,0.4); border-left: 3px solid var(--gold-primary); padding: 14px 18px; font-style: italic; font-size: 19px; margin-bottom: 20px;">
                ${card.quote}
            </div>

            <div style="margin-bottom: 20px;">
                <h4 style="font-family: var(--font-heading); color: var(--gold-primary); margin-bottom: 6px;">🔮 Lectura y Contemplación:</h4>
                <p style="font-size: 18px; line-height: 1.6; color: #f0e6d6;">${card.reading}</p>
            </div>

            <div style="background: rgba(158, 27, 37, 0.15); border: 1px dashed var(--crimson-babalon); padding: 12px 16px; border-radius: 4px; margin-bottom: 20px;">
                <strong style="color: #ff8a80;">⚖️ La Paradoja de Crowley:</strong><br>
                <span style="font-size: 17px; color: #fff;">${card.paradox}</span>
            </div>

            <div style="border-top: 1px solid rgba(212, 175, 55, 0.25); padding-top: 14px; color: #a99d8b; font-size: 16px; font-style: italic;">
                <strong>Nota del Comentario Original:</strong> ${card.crowleyNote}
            </div>
        `;

        this.cardModal.classList.add('open');
    }

    // ==========================================
    // 5. MODO CRIPTA DE CHORONZON (DUELO)
    // ==========================================
    renderChoronzon() {
        const container = document.getElementById('choronzon-arena-container');
        if (!container) return;

        const trial = LIBER_DATA.choronzonTrials[this.choronzonIndex];
        if (!trial) {
            // Terminaron los enigmas
            ritualAudio.playCeremonialGong();
            container.innerHTML = `
                <div class="choronzon-arena">
                    <div class="choronzon-sigil">✨ ☀️ ✨</div>
                    <h3 style="font-family: var(--font-heading); font-size: 26px; color: var(--gold-light); margin-bottom: 12px;">
                        ¡CHORONZON HA SIDO AMORDASADO POR LA RISA!
                    </h3>
                    <p style="font-size: 20px; color: #d4af37; margin-bottom: 20px;">
                        Has superado las ilusiones dialécticas con un puntaje de <strong>${this.choronzonScore} / ${LIBER_DATA.choronzonTrials.length}</strong>.
                    </p>
                    <button class="oracle-btn" id="btn-restart-choronzon">Desafiar de Nuevo a la Bestia de las Mentiras</button>
                </div>
            `;
            document.getElementById('btn-restart-choronzon')?.addEventListener('click', () => {
                this.choronzonIndex = 0;
                this.choronzonScore = 0;
                this.renderChoronzon();
            });
            return;
        }

        container.innerHTML = `
            <div class="choronzon-arena">
                <div class="choronzon-sigil">👁️ 333 👁️</div>
                <div class="choronzon-counter">ENIGMA ${this.choronzonIndex + 1} DE ${LIBER_DATA.choronzonTrials.length}</div>
                <div class="choronzon-riddle-text">${trial.riddle}</div>

                <div class="choronzon-options">
                    ${trial.options.map((opt, idx) => `
                        <button class="option-btn" data-idx="${idx}">
                            ${opt.text}
                        </button>
                    `).join('')}
                </div>

                <div id="choronzon-feedback" class="feedback-box"></div>
                <div id="choronzon-next" style="margin-top:20px; display:none;">
                    <button class="next-portal-btn" id="btn-next-choronzon">Siguiente Desafío →</button>
                </div>
            </div>
        `;

        const optionBtns = container.querySelectorAll('.option-btn');
        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.idx);
                const opt = trial.options[idx];
                optionBtns.forEach(b => b.disabled = true);

                const feedback = document.getElementById('choronzon-feedback');
                const nextBtn = document.getElementById('choronzon-next');

                if (opt.correct) {
                    this.choronzonScore++;
                    this.updateMeters(+15, -15);
                    ritualAudio.playTibetanBowl(500);
                    feedback.className = 'feedback-box show truth';
                    feedback.innerHTML = `<strong>✨ ¡TRIUNFO DE LA GNOSIS!:</strong> ${opt.comment}`;
                } else {
                    this.updateMeters(-10, +15);
                    ritualAudio.playChoronzonDissonance();
                    feedback.className = 'feedback-box show dogma';
                    feedback.innerHTML = `<strong>🕸️ ILUSIÓN DE CHORONZON:</strong> ${opt.comment}`;
                }

                if (nextBtn) nextBtn.style.display = 'block';
            });
        });

        document.getElementById('btn-next-choronzon')?.addEventListener('click', () => {
            this.choronzonIndex++;
            this.renderChoronzon();
        });
    }
}

// Inicialización cuando el DOM esté listo
window.addEventListener('DOMContentLoaded', () => {
    window.game = new LiberGame();
});
