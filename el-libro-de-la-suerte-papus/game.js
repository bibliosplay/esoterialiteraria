/**
 * EL LIBRO DE LA SUERTE - PAPUS (Dr. Gérard Encausse)
 * Lógica Central del Videojuego WebApp
 */

document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de subsistemas
  initCosmicCanvas();
  initAudioControls();
  initNavigationTabs();
  initOracleModule();
  initNumerologyModule();
  initPalmistryModule();
  initTransmutationModule();
  initCodexAndJournal();
});

/* ==========================================================================
   0. AUDIO CONTROLS & USER GESTURE UNLOCK
   ========================================================================== */
function initAudioControls() {
  const muteBtn = document.getElementById('mute-btn');
  const droneBtn = document.getElementById('drone-btn');
  const volumeSlider = document.getElementById('volume-slider');

  // Desbloqueo de audio en el primer clic
  document.addEventListener('click', () => {
    papusAudio.initContext();
  }, { once: true });

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      const isMuted = papusAudio.setMute(!papusAudio.isMuted);
      muteBtn.innerHTML = isMuted ? '🔇 <span class="audio-label">Mudo</span>' : '🔔 <span class="audio-label">Sonido</span>';
      muteBtn.classList.toggle('active', !isMuted);
    });
  }

  if (droneBtn) {
    droneBtn.addEventListener('click', () => {
      const active = papusAudio.toggleDrone();
      droneBtn.classList.toggle('active', active);
      droneBtn.innerHTML = active ? '🌀 <span class="audio-label">Meditación ON</span>' : '🌀 <span class="audio-label">Música Astral</span>';
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener('input', (e) => {
      papusAudio.setVolume(parseFloat(e.target.value));
    });
  }
}

/* ==========================================================================
   1. CANVAS CÓSMICO (Partículas y Geometría Sagrada de Fondo)
   ========================================================================== */
function initCosmicCanvas() {
  const canvas = document.getElementById('cosmic-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const starCount = 65;

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.3 + 0.1,
      angle: Math.random() * Math.PI * 2
    });
  }

  let rotation = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Dibujar estrellas doradas
    ctx.fillStyle = '#f9e29a';
    stars.forEach(star => {
      star.y -= star.speed;
      if (star.y < 0) {
        star.y = height;
        star.x = Math.random() * width;
      }
      ctx.globalAlpha = star.alpha * (0.6 + 0.4 * Math.sin(Date.now() * 0.002 + star.x));
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    });

    // Geometría Sagrada sutil en el centro
    ctx.save();
    ctx.translate(width / 2, height / 2);
    rotation += 0.0008;
    ctx.rotate(rotation);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.03)';
    ctx.lineWidth = 1.5;

    const r = Math.min(width, height) * 0.38;
    // Círculos concéntricos
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, r * 0.7, 0, Math.PI * 2);
    ctx.stroke();

    // Hexagrama místico
    for (let t = 0; t < 2; t++) {
      ctx.beginPath();
      const offset = (t * Math.PI) / 3;
      for (let i = 0; i < 3; i++) {
        const theta = offset + (i * 2 * Math.PI) / 3;
        const x = r * Math.cos(theta);
        const y = r * Math.sin(theta);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }
    ctx.restore();

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. PESTAÑAS DE NAVEGACIÓN
   ========================================================================== */
function initNavigationTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      papusAudio.playBell(587.33, 0.8); // Re sutil de transición
      const targetId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. MÓDULO 1: EL ORÁCULO DEL ZODÍACO DOBLE
   ========================================================================== */
function initOracleModule() {
  const wheelCanvas = document.getElementById('zodiac-wheel-canvas');
  const spinBtn = document.getElementById('spin-oracle-btn');
  const catBtnsContainer = document.getElementById('category-selectors');
  const questionsContainer = document.getElementById('oracle-questions-list');
  const verdictBox = document.getElementById('oracle-verdict-box');

  if (!wheelCanvas || !spinBtn) return;
  const ctx = wheelCanvas.getContext('2d');
  const size = wheelCanvas.width = 340;
  wheelCanvas.height = 340;

  let currentCategory = PAPUS_DATA.oracleCategories[1]; // Por defecto Fortuna
  let selectedQuestion = currentCategory.questions[0];
  let currentWheelAngle = 0;
  let isSpinning = false;

  const zodiacSigns = [
    { symbol: '♈', name: 'Aries' },
    { symbol: '♉', name: 'Tauro' },
    { symbol: '♊', name: 'Géminis' },
    { symbol: '♋', name: 'Cáncer' },
    { symbol: '♌', name: 'Leo' },
    { symbol: '♍', name: 'Virgo' },
    { symbol: '♎', name: 'Libra' },
    { symbol: '♏', name: 'Escorpio' },
    { symbol: '♐', name: 'Sagitario' },
    { symbol: '♑', name: 'Capricornio' },
    { symbol: '♒', name: 'Acuario' },
    { symbol: '♓', name: 'Piscis' }
  ];

  // Dibujar Rueda Zodiacal de Papus
  function drawWheel(angle) {
    ctx.clearRect(0, 0, size, size);
    const center = size / 2;
    const radius = size / 2 - 12;

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(angle);

    // Fondo de la rueda
    const bgGrad = ctx.createRadialGradient(0, 0, 40, 0, 0, radius);
    bgGrad.addColorStop(0, '#2c1547');
    bgGrad.addColorStop(0.7, '#16092b');
    bgGrad.addColorStop(1, '#0c0517');
    ctx.fillStyle = bgGrad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();

    // Borde exterior dorado
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Sectores de los 12 signos del Doble Zodíaco
    const arcStep = (Math.PI * 2) / 12;
    for (let i = 0; i < 12; i++) {
      const sliceAngle = i * arcStep;

      // Línea divisoria
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(radius * Math.cos(sliceAngle), radius * Math.sin(sliceAngle));
      ctx.stroke();

      // Símbolo zodiacal
      ctx.save();
      ctx.rotate(sliceAngle + arcStep / 2);
      ctx.fillStyle = (i % 2 === 0) ? '#f9e29a' : '#d4af37';
      ctx.font = '22px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(zodiacSigns[i].symbol, radius * 0.78, 0);

      // Número romano interior
      ctx.font = '11px "Cinzel", serif';
      ctx.fillStyle = 'rgba(245, 238, 219, 0.6)';
      const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
      ctx.fillText(romans[i], radius * 0.52, 0);
      ctx.restore();
    }

    // Círculos concéntricos de adivinación
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.65, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.38, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  }

  drawWheel(0);

  // Renderizar selectores de categorías
  if (catBtnsContainer) {
    catBtnsContainer.innerHTML = '';
    PAPUS_DATA.oracleCategories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `cat-btn ${cat.id === currentCategory.id ? 'selected' : ''}`;
      btn.innerHTML = `<span class="cat-icon">${cat.icon}</span><span>${cat.name}</span>`;
      btn.addEventListener('click', () => {
        papusAudio.playBell(432, 0.7);
        currentCategory = cat;
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        renderQuestions();
        if (verdictBox) verdictBox.classList.remove('visible');
      });
      catBtnsContainer.appendChild(btn);
    });
  }

  // Renderizar preguntas
  function renderQuestions() {
    if (!questionsContainer) return;
    questionsContainer.innerHTML = '';
    currentCategory.questions.forEach((q, idx) => {
      const item = document.createElement('div');
      item.className = `question-item ${idx === 0 ? 'selected' : ''}`;
      item.textContent = q;
      if (idx === 0) selectedQuestion = q;

      item.addEventListener('click', () => {
        papusAudio.playWheelClick(350);
        document.querySelectorAll('.question-item').forEach(qi => qi.classList.remove('selected'));
        item.classList.add('selected');
        selectedQuestion = q;
        if (verdictBox) verdictBox.classList.remove('visible');
      });
      questionsContainer.appendChild(item);
    });
  }

  renderQuestions();

  // Giro de la Rueda
  spinBtn.addEventListener('click', () => {
    if (isSpinning) return;
    isSpinning = true;
    spinBtn.disabled = true;
    if (verdictBox) verdictBox.classList.remove('visible');

    papusAudio.playBell(432, 2.5);

    const spinRotations = 5 + Math.random() * 4; // 5 a 9 vueltas
    const targetAngle = currentWheelAngle + spinRotations * Math.PI * 2 + Math.random() * Math.PI * 2;
    const duration = 4000; // 4 segundos
    const startTime = performance.now();
    const initialAngle = currentWheelAngle;
    let lastClickAngle = initialAngle;

    function animateSpin(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing cúbico suave hacia el final
      const easeOut = 1 - Math.pow(1 - progress, 3);
      currentWheelAngle = initialAngle + (targetAngle - initialAngle) * easeOut;

      // Sonido de clic en cada división
      if (Math.abs(currentWheelAngle - lastClickAngle) > (Math.PI / 6)) {
        papusAudio.playWheelClick(240 + Math.random() * 80);
        lastClickAngle = currentWheelAngle;
      }

      drawWheel(currentWheelAngle);

      if (progress < 1) {
        requestAnimationFrame(animateSpin);
      } else {
        isSpinning = false;
        spinBtn.disabled = false;
        revealVerdict();
      }
    }

    requestAnimationFrame(animateSpin);
  });

  // Revelación del Veredicto de Papus
  function revealVerdict() {
    // Selección ponderada del veredicto según tablas de Papus
    const verdicts = currentCategory.verdicts;
    // Ponderación: 45% Suerte Mayor, 35% Suerte Menor, 20% Advertencia
    const rand = Math.random();
    let verdict;
    if (rand < 0.45) {
      verdict = verdicts[Math.floor(Math.random() * 2)]; // Los dos primeros son mayores
    } else if (rand < 0.80) {
      verdict = verdicts[2 + Math.floor(Math.random() * 2)]; // Menores
    } else {
      verdict = verdicts[4] || verdicts[verdicts.length - 1]; // Advertencia
    }

    const isMayor = verdict.type === 'mayor';
    papusAudio.playRevealChord(isMayor);
    if (isMayor) setTimeout(() => papusAudio.playBell(528, 3.5), 300);

    // Inyectar en el DOM
    if (verdictBox) {
      const badgeClass = verdict.type === 'mayor' ? 'badge-mayor' : (verdict.type === 'menor' ? 'badge-menor' : 'badge-advertencia');
      verdictBox.innerHTML = `
        <div class="verdict-header">
          <span class="verdict-badge ${badgeClass}">${verdict.symbol} ${verdict.badge}</span>
          <span class="verdict-hour">⏳ ${verdict.hour}</span>
        </div>
        <h4 class="verdict-title">${verdict.title}</h4>
        <p class="verdict-text">${verdict.text}</p>
        <div class="verdict-details">
          <div class="verdict-detail-item">
            <strong>Influencia Cósmica:</strong>
            <span>${verdict.planetaryRuler}</span>
          </div>
          <div class="verdict-detail-item">
            <strong>Talismán Activo de Papus:</strong>
            <span>${verdict.talisman}</span>
          </div>
        </div>
        <blockquote class="verdict-quote">${verdict.papusQuote}</blockquote>
      `;
      verdictBox.classList.add('visible');
    }

    // Guardar en el Diario
    saveToJournal({
      type: 'Oráculo del Destino',
      category: currentCategory.name,
      question: selectedQuestion,
      verdictTitle: verdict.title,
      badge: verdict.badge,
      symbol: verdict.symbol,
      date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    });
  }
}

/* ==========================================================================
   4. MÓDULO 2: NUMEROLOGÍA Y REDUCCIÓN TEOSÓFICA
   ========================================================================== */
function initNumerologyModule() {
  const calcBtn = document.getElementById('calc-theosophic-btn');
  const nameInput = document.getElementById('theo-name');
  const birthInput = document.getElementById('theo-birthdate');
  const resultsContainer = document.getElementById('numerology-results');
  const biorhythmCanvas = document.getElementById('biorhythm-canvas');

  if (!calcBtn || !resultsContainer) return;

  calcBtn.addEventListener('click', () => {
    const name = (nameInput?.value || 'Buscador').trim();
    const birthDate = birthInput?.value;

    if (!birthDate) {
      alert('Por favor, selecciona tu fecha de nacimiento para el cálculo de Papus.');
      return;
    }

    papusAudio.playBell(432, 2.5);
    calculateTheosophy(name, birthDate);
  });

  function calculateTheosophy(name, birthDate) {
    // 1. Reducción Teosófica de la Fecha de Nacimiento
    const parts = birthDate.split('-'); // YYYY, MM, DD
    const digitsStr = parts.join('');
    let sum = 0;
    for (let char of digitsStr) {
      sum += parseInt(char, 10);
    }

    let destinyNumber = reduceToSingleDigit(sum);

    // 2. Guematría del Nombre según Papus
    let nameSum = 0;
    const cleanName = name.toUpperCase().replace(/[^A-ZÑ]/g, '');
    for (let char of cleanName) {
      nameSum += PAPUS_DATA.gematriaTable[char] || 1;
    }
    let nameNumber = reduceToSingleDigit(nameSum);

    // Obtener arquetipo y correspondencias
    const data = PAPUS_DATA.theosophicalNumbers[destinyNumber] || PAPUS_DATA.theosophicalNumbers[1];

    // Renderizar Resultados
    resultsContainer.innerHTML = `
      <div class="panel-card" style="margin-top: 20px; animation: fadeIn 0.6s ease;">
        <h3>👑 Resultados de la Reducción Cabalística de Papus</h3>
        <p style="margin-bottom: 14px; color: var(--text-muted);">
          Consultante: <strong style="color: var(--gold-light);">${name}</strong> | Fecha: <strong style="color: var(--gold-light);">${birthDate}</strong>
        </p>

        <div class="number-cards-grid">
          <div class="number-card">
            <span class="num-label">Número del Destino</span>
            <div class="num-value">${destinyNumber}</div>
            <span style="font-size: 13px; color: var(--gold-light);">${data.planet}</span>
          </div>
          <div class="number-card">
            <span class="num-label">Guematría del Nombre</span>
            <div class="num-value">${nameNumber}</div>
            <span style="font-size: 13px; color: var(--gold-light);">Vibración Vocal</span>
          </div>
          <div class="number-card">
            <span class="num-label">Día de Mayor Suerte</span>
            <div class="num-value" style="font-size: 26px; margin-top: 12px;">${data.day}</div>
            <span style="font-size: 13px; color: var(--gold-light);">${data.element}</span>
          </div>
          <div class="number-card">
            <span class="num-label">Metal Talismánico</span>
            <div class="num-value" style="font-size: 24px; margin-top: 14px;">${data.metal}</div>
            <span style="font-size: 13px; color: var(--gold-light);">Elemento Físico</span>
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border-radius: 10px; padding: 18px; margin: 18px 0;">
          <h4 style="font-family: var(--font-display); color: var(--gold-light); font-size: 20px; margin-bottom: 8px;">
            ${data.archetype}
          </h4>
          <p style="font-size: 17px; margin-bottom: 10px;"><strong>Naturaleza de la Suerte:</strong> ${data.fortuneNature}</p>
          <blockquote class="verdict-quote">${data.advice}</blockquote>
        </div>

        <div style="text-align: center; margin-top: 20px;">
          <h4 style="font-family: var(--font-heading); font-size: 15px; color: var(--gold-light); letter-spacing: 2px; text-transform: uppercase;">
            Tus Números Sagrados de la Suerte (Para Juegos y Decisiones)
          </h4>
          <div class="lucky-numbers-row">
            ${data.luckyNumbers.map(n => `<div class="lucky-pill">${n}</div>`).join('')}
          </div>
        </div>
      </div>
    `;

    // Renderizar gráfico de Marea Astral de la Fortuna
    drawLuckBiorhythm(biorhythmCanvas, destinyNumber);

    // Guardar en el Diario
    saveToJournal({
      type: 'Reducción Teosófica',
      name: name,
      destinyNumber: destinyNumber,
      archetype: data.archetype,
      luckyNumbers: data.luckyNumbers.join(', '),
      date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    });
  }

  function reduceToSingleDigit(num) {
    if (num === 11 || num === 22) return num; // Números Maestros
    while (num > 9) {
      let temp = 0;
      let s = num.toString();
      for (let c of s) temp += parseInt(c, 10);
      num = temp;
      if (num === 11 || num === 22) return num;
    }
    return num;
  }

  // Gráfico de las Mareas Astrales del Mes
  function drawLuckBiorhythm(canvas, seed) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = canvas.parentElement.clientWidth || 500;
    const h = canvas.height = 180;

    ctx.clearRect(0, 0, w, h);

    // Línea base neutral
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    // Dibujar Curva Sinusoidal de la Marea Cósmica
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2.5;
    ctx.shadowColor = 'rgba(212, 175, 55, 0.5)';
    ctx.shadowBlur = 10;
    ctx.beginPath();

    const days = 30;
    const today = new Date().getDate();

    for (let day = 1; day <= days; day++) {
      const x = (day / days) * w;
      // Ondas combinadas de ciclo jupiteriano (28 días) y solar
      const y = h / 2 - Math.sin((day + seed * 3) * (Math.PI / 7)) * 48 - Math.cos((day + seed) * (Math.PI / 14)) * 24;
      if (day === 1) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Resaltar el día de HOY
    const todayX = (today / days) * w;
    const todayY = h / 2 - Math.sin((today + seed * 3) * (Math.PI / 7)) * 48 - Math.cos((today + seed) * (Math.PI / 14)) * 24;

    ctx.fillStyle = '#2ecc71';
    ctx.beginPath();
    ctx.arc(todayX, todayY, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f9e29a';
    ctx.font = '12px "Cinzel", serif';
    ctx.fillText(`HOY (Día ${today})`, todayX - 25, todayY - 12);
  }
}

/* ==========================================================================
   5. MÓDULO 3: QUIROMANCIA ESOTÉRICA INTERACTIVA (MANO DEL DESTINO)
   ========================================================================== */
function initPalmistryModule() {
  const mountHotspots = document.querySelectorAll('.mount-hotspot');
  const linePaths = document.querySelectorAll('.palm-line-path');
  const diagnosisBox = document.getElementById('palm-diagnosis-content');
  const fingerOptions = document.querySelectorAll('.finger-test-option');
  const fingerResultBox = document.getElementById('finger-prognosis-result');

  // Clic en los Montes Planetarios
  mountHotspots.forEach(hotspot => {
    hotspot.addEventListener('click', () => {
      const mountId = hotspot.getAttribute('data-mount');
      const mount = PAPUS_DATA.palmistry.mounts.find(m => m.id === mountId);
      if (!mount) return;

      mountHotspots.forEach(h => h.classList.remove('active'));
      linePaths.forEach(l => l.classList.remove('active'));
      hotspot.classList.add('active');

      papusAudio.playBell(528, 1.2);
      renderMountDiagnosis(mount);
    });
  });

  // Clic en las Líneas Principales
  linePaths.forEach(line => {
    line.addEventListener('click', () => {
      const lineId = line.getAttribute('data-line');
      const palmLine = PAPUS_DATA.palmistry.lines.find(l => l.id === lineId);
      if (!palmLine) return;

      mountHotspots.forEach(h => h.classList.remove('active'));
      linePaths.forEach(l => l.classList.remove('active'));
      line.classList.add('active');

      papusAudio.playBell(432, 1.2);
      renderLineDiagnosis(palmLine);
    });
  });

  function renderMountDiagnosis(mount) {
    if (!diagnosisBox) return;
    diagnosisBox.innerHTML = `
      <div style="animation: fadeIn 0.4s ease;">
        <span class="verdict-badge badge-menor">Planeta: ${mount.planet}</span>
        <h4 style="font-family: var(--font-display); color: var(--gold-light); font-size: 22px; margin: 10px 0 4px;">
          ${mount.name}
        </h4>
        <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 14px;">Ubicación: ${mount.location}</p>

        <h5 style="font-family: var(--font-heading); color: var(--gold-light); font-size: 15px; margin-bottom: 8px;">
          Diagnóstico según su desarrollo:
        </h5>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${mount.traits.map(t => `
            <div style="background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 8px; border-left: 3px solid var(--gold-primary);">
              <strong style="text-transform: capitalize; color: var(--gold-light);">${t.status}:</strong> ${t.desc}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderLineDiagnosis(line) {
    if (!diagnosisBox) return;
    diagnosisBox.innerHTML = `
      <div style="animation: fadeIn 0.4s ease;">
        <span class="verdict-badge badge-mayor">Línea Mayor</span>
        <h4 style="font-family: var(--font-display); color: var(--gold-light); font-size: 22px; margin: 10px 0 4px;">
          ${line.name}
        </h4>
        <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 14px;">${line.description}</p>

        <h5 style="font-family: var(--font-heading); color: var(--gold-light); font-size: 15px; margin-bottom: 8px;">
          Configuraciones de la Suerte:
        </h5>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${line.states.map(s => `
            <div style="background: rgba(0,0,0,0.3); padding: 10px 14px; border-radius: 8px; border-left: 3px solid #e74c3c;">
              <strong style="color: var(--gold-light);">${s.title}:</strong> ${s.verdict}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Prueba Clave de Dedos (Índice vs Anular)
  fingerOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const optId = opt.getAttribute('data-finger');
      const data = PAPUS_DATA.palmistry.fingerTest.options.find(o => o.id === optId);
      if (!data) return;

      fingerOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      papusAudio.playRevealChord(optId === 'anular_mas_largo');

      if (fingerResultBox) {
        fingerResultBox.innerHTML = `
          <div style="background: rgba(45, 24, 71, 0.7); border: 1px solid var(--gold-primary); border-radius: 10px; padding: 16px; margin-top: 15px; animation: fadeIn 0.5s ease;">
            <h5 style="font-family: var(--font-heading); color: var(--gold-light); font-size: 17px; margin-bottom: 6px;">
              ${data.label}
            </h5>
            <p style="font-size: 17px; line-height: 1.6;">${data.prognosis}</p>
          </div>
        `;
      }
    });
  });
}

/* ==========================================================================
   6. MÓDULO 4: RITO DE TRANSMUTACIÓN (HACER VOLVER LA SUERTE PERDIDA)
   ========================================================================== */
function initTransmutationModule() {
  const leaksContainer = document.getElementById('energy-leaks-container');
  const sigilsContainer = document.getElementById('sigils-container');
  const stepNodes = document.querySelectorAll('.step-node');
  const phases = document.querySelectorAll('.ritual-phase');
  const chargeBtn = document.getElementById('hold-charge-btn');
  const progressFill = document.getElementById('charge-progress-fill');
  const talismanResultBox = document.getElementById('consecrated-talisman-box');

  let purgedCount = 0;
  let selectedSigil = PAPUS_DATA.transmutationRitual.planetarySigils[0];
  let chargeInterval = null;
  let chargeProgress = 0;

  // Renderizar Fugas Astrales (Fase 1)
  if (leaksContainer) {
    leaksContainer.innerHTML = '';
    PAPUS_DATA.transmutationRitual.energyLeaks.forEach(leak => {
      const card = document.createElement('div');
      card.className = 'leak-card';
      card.innerHTML = `
        <h4 style="font-family: var(--font-heading); color: ${leak.color}; font-size: 18px; margin-bottom: 8px;">
          ${leak.title}
        </h4>
        <p style="font-size: 16px; color: var(--text-muted); margin-bottom: 12px;">${leak.symptom}</p>
        <button class="purge-trigger-btn ritual-action-btn" style="padding: 6px 16px; font-size: 12px;">
          Disolver Fuga
        </button>
      `;

      const btn = card.querySelector('.purge-trigger-btn');
      btn.addEventListener('click', () => {
        if (card.classList.contains('purged')) return;
        card.classList.add('purged');
        btn.remove();
        purgedCount++;

        papusAudio.playPurgeEnergy();

        const aff = document.createElement('div');
        aff.style.fontSize = '14px';
        aff.style.fontStyle = 'italic';
        aff.style.color = 'var(--gold-light)';
        aff.style.marginTop = '10px';
        aff.textContent = leak.purgeAffirmation;
        card.appendChild(aff);

        // Si se purgan las 4, pasar a Fase 2
        if (purgedCount >= 4) {
          setTimeout(() => goToPhase(2), 1200);
        }
      });

      leaksContainer.appendChild(card);
    });
  }

  // Renderizar Sellos Planetarios (Fase 2)
  if (sigilsContainer) {
    sigilsContainer.innerHTML = '';
    PAPUS_DATA.transmutationRitual.planetarySigils.forEach((sigil, idx) => {
      const card = document.createElement('div');
      card.className = `sigil-card ${idx === 0 ? 'selected' : ''}`;
      card.innerHTML = `
        <div class="sigil-glyph">${sigil.glyph}</div>
        <h4 style="font-family: var(--font-heading); font-size: 16px; color: var(--gold-light); margin-bottom: 6px;">
          ${sigil.name}
        </h4>
        <p style="font-size: 14px; color: var(--text-muted); margin-bottom: 8px;"><strong>Propósito:</strong> ${sigil.bestFor}</p>
        <span style="font-size: 12px; color: var(--gold-primary); font-family: var(--font-heading);">Metal: ${sigil.metal}</span>
      `;

      card.addEventListener('click', () => {
        papusAudio.playBell(528, 1.2);
        document.querySelectorAll('.sigil-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedSigil = sigil;
      });

      sigilsContainer.appendChild(card);
    });

    const confirmSigilBtn = document.getElementById('confirm-sigil-btn');
    if (confirmSigilBtn) {
      confirmSigilBtn.addEventListener('click', () => {
        papusAudio.playBell(432, 2.0);
        goToPhase(3);
      });
    }
  }

  // Cambio de Fase
  function goToPhase(phaseNum) {
    phases.forEach(p => p.classList.remove('active'));
    stepNodes.forEach((n, idx) => {
      n.classList.remove('active');
      if (idx < phaseNum - 1) n.classList.add('completed');
      if (idx === phaseNum - 1) n.classList.add('active');
    });

    const nextPhase = document.getElementById(`ritual-phase-${phaseNum}`);
    if (nextPhase) nextPhase.classList.add('active');
  }

  // Fase 3: Botón Mantener para Cargar
  if (chargeBtn && progressFill) {
    function startCharging() {
      if (chargeProgress >= 100) return;
      chargeBtn.classList.add('pulsing');

      chargeInterval = setInterval(() => {
        chargeProgress += 2.5;
        progressFill.style.width = `${Math.min(chargeProgress, 100)}%`;
        papusAudio.playTalismanCharge(chargeProgress / 100);

        if (chargeProgress >= 100) {
          clearInterval(chargeInterval);
          chargeBtn.classList.remove('pulsing');
          consecrateTalisman();
        }
      }, 70);
    }

    function stopCharging() {
      clearInterval(chargeInterval);
      chargeBtn.classList.remove('pulsing');
    }

    chargeBtn.addEventListener('mousedown', startCharging);
    chargeBtn.addEventListener('mouseup', stopCharging);
    chargeBtn.addEventListener('mouseleave', stopCharging);
    chargeBtn.addEventListener('touchstart', (e) => { e.preventDefault(); startCharging(); });
    chargeBtn.addEventListener('touchend', stopCharging);
  }

  // Consagración Final del Talismán
  function consecrateTalisman() {
    papusAudio.playRevealChord(true);
    setTimeout(() => papusAudio.playBell(528, 4.0), 300);

    if (talismanResultBox) {
      talismanResultBox.style.display = 'block';
      talismanResultBox.innerHTML = `
        <div style="font-size: 64px; color: var(--gold-light); text-shadow: 0 0 25px var(--gold-primary); margin-bottom: 10px;">
          ${selectedSigil.glyph}
        </div>
        <span class="verdict-badge badge-mayor">TALISMÁN CONSAGRADO</span>
        <h3 style="font-family: var(--font-display); color: #fff; font-size: 26px; margin: 12px 0 6px;">
          ${selectedSigil.name}
        </h3>
        <p style="font-size: 18px; color: var(--text-main); margin-bottom: 14px;">
          Fórmula Sagrada de Papus: <strong style="color: var(--gold-light);">${selectedSigil.formula}</strong>
        </p>
        <p style="font-size: 16px; color: var(--text-muted); max-width: 600px; margin: 0 auto 20px;">
          Las cuatro fugas astrales han sido selladas. Tu voluntad ha magnetizado este talismán en el plano astral. Llévalo mentalmente contigo o consérvalo en tu altar.
        </p>
        <button id="download-talisman-btn" class="ritual-action-btn">
          ✨ Descargar Estampa Talismánica
        </button>
      `;

      const downloadBtn = document.getElementById('download-talisman-btn');
      if (downloadBtn) {
        downloadBtn.addEventListener('click', () => exportTalismanCard(selectedSigil));
      }
    }

    // Guardar en el Diario
    saveToJournal({
      type: 'Ritual de Transmutación',
      sigilName: selectedSigil.name,
      planet: selectedSigil.planet,
      formula: selectedSigil.formula,
      date: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    });
  }

  // Generador Gráfico de Carta Talismánica Descargable
  function exportTalismanCard(sigil) {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 850;
    const ctx = canvas.getContext('2d');

    // Fondo místico oscuro
    const grad = ctx.createRadialGradient(300, 425, 50, 300, 425, 450);
    grad.addColorStop(0, '#2d144d');
    grad.addColorStop(0.7, '#130824');
    grad.addColorStop(1, '#080310');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 850);

    // Marco ornamental dorado
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 6;
    ctx.strokeRect(20, 20, 560, 810);

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(32, 32, 536, 786);

    // Título de la obra
    ctx.fillStyle = '#f9e29a';
    ctx.font = 'bold 22px "Cinzel", serif';
    ctx.textAlign = 'center';
    ctx.fillText('EL LIBRO DE LA SUERTE', 300, 80);

    ctx.font = '14px "Cinzel", serif';
    ctx.fillStyle = 'rgba(245, 238, 219, 0.7)';
    ctx.fillText('DR. GÉRARD ENCAUSSE (PAPUS) - 1890', 300, 110);

    // Glifo Central y Círculos
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(300, 340, 130, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#f9e29a';
    ctx.font = '100px serif';
    ctx.fillText(sigil.glyph, 300, 375);

    // Nombre del Sello
    ctx.font = 'bold 26px "Cinzel Decorative", serif';
    ctx.fillText(sigil.name, 300, 540);

    ctx.font = 'italic 18px "Cormorant Garamond", Georgia, serif';
    ctx.fillStyle = '#fff';
    ctx.fillText(`«${sigil.formula}»`, 300, 580);

    ctx.font = '16px "Cormorant Garamond", serif';
    ctx.fillStyle = '#bdae93';
    ctx.fillText(`Consagrado bajo la influencia de ${sigil.planet}`, 300, 630);
    ctx.fillText(`Virtud: ${sigil.bestFor}`, 300, 660);

    // Firma de Papus
    ctx.font = 'italic 15px Georgia, serif';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('Consagrado en el Templo Astral de la Voluntad', 300, 750);

    // Descarga automática
    const link = document.createElement('a');
    link.download = `talisman-papus-${sigil.planet.toLowerCase()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
}

/* ==========================================================================
   7. MÓDULO 5: CÓDICE HERMÉTICO & DIARIO DE ORÁCULOS
   ========================================================================== */
function initCodexAndJournal() {
  const journalList = document.getElementById('journal-entries-list');
  const clearJournalBtn = document.getElementById('clear-journal-btn');

  renderJournal();

  if (clearJournalBtn) {
    clearJournalBtn.addEventListener('click', () => {
      if (confirm('¿Deseas purgar y vaciar tu diario de consultas oraculares?')) {
        localStorage.removeItem('papus_journal');
        renderJournal();
        papusAudio.playBell(300, 1.0);
      }
    });
  }

  function renderJournal() {
    if (!journalList) return;
    const entries = JSON.parse(localStorage.getItem('papus_journal') || '[]');

    if (entries.length === 0) {
      journalList.innerHTML = `
        <div style="text-align: center; color: var(--text-dim); padding: 30px 10px;">
          <p style="font-size: 18px;">Tu grimorio oracular se encuentra en blanco.</p>
          <p style="font-size: 15px;">Realiza consultas en el Oráculo, la Reducción Teosófica o el Rito de Transmutación para registrar tus signos.</p>
        </div>
      `;
      return;
    }

    journalList.innerHTML = entries.map(e => {
      if (e.type === 'Oráculo del Destino') {
        return `
          <div class="journal-entry">
            <div>
              <span class="entry-date">${e.date}</span>
              <h5 style="font-family: var(--font-heading); color: var(--gold-light); font-size: 16px;">
                ${e.symbol || '🔮'} ${e.verdictTitle} (${e.category})
              </h5>
              <p style="font-size: 14px; color: var(--text-muted); font-style: italic;">«${e.question}»</p>
            </div>
            <span class="verdict-badge ${e.badge?.includes('Mayor') ? 'badge-mayor' : (e.badge?.includes('Menor') ? 'badge-menor' : 'badge-advertencia')}">
              ${e.badge}
            </span>
          </div>
        `;
      } else if (e.type === 'Reducción Teosófica') {
        return `
          <div class="journal-entry">
            <div>
              <span class="entry-date">${e.date}</span>
              <h5 style="font-family: var(--font-heading); color: var(--gold-light); font-size: 16px;">
                🔢 Destino: ${e.destinyNumber} — ${e.archetype}
              </h5>
              <p style="font-size: 14px; color: var(--text-muted);">Consultante: ${e.name} | Números: ${e.luckyNumbers}</p>
            </div>
            <span class="verdict-badge badge-mayor">Cábala</span>
          </div>
        `;
      } else {
        return `
          <div class="journal-entry">
            <div>
              <span class="entry-date">${e.date}</span>
              <h5 style="font-family: var(--font-heading); color: var(--gold-light); font-size: 16px;">
                🕯️ Consagración: ${e.sigilName}
              </h5>
              <p style="font-size: 14px; color: var(--text-muted);">Planeta: ${e.planet} | Fórmula: ${e.formula}</p>
            </div>
            <span class="verdict-badge badge-mayor">Talismán</span>
          </div>
        `;
      }
    }).join('');
  }
}

// Función global auxiliar de persistencia
function saveToJournal(entry) {
  try {
    const existing = JSON.parse(localStorage.getItem('papus_journal') || '[]');
    existing.unshift(entry);
    // Limitar a los últimos 35 registros
    if (existing.length > 35) existing.pop();
    localStorage.setItem('papus_journal', JSON.stringify(existing));

    const list = document.getElementById('journal-entries-list');
    if (list) {
      const clearBtn = document.getElementById('clear-journal-btn');
      // Actualizar vista si el usuario está en la pestaña
      const event = new Event('journalUpdated');
      document.dispatchEvent(event);
    }
  } catch (e) {
    console.warn('No se pudo guardar en localStorage', e);
  }
}
