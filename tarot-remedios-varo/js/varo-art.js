/**
 * ARTE VECTORIAL Y EMBLEMAS ALQUÍMICOS - TAROT REMEDIOS VARO
 * Genera el reverso sagrado, las filigranas doradas, los sellos
 * elementales y las ilustraciones pictóricas surrealistas para las 78 cartas
 * inspiradas en los lienzos y la iconografía alquímica de Remedios Varo.
 */

const VaroArt = {
  // Lista de cartas con imágenes generadas en alta resolución disponibles localmente
  knownLocalImages: {
    0: 'images/cards/0.jpg',   // El Vagabundo (1957)
    1: 'images/cards/1.jpg',   // La Ciencia Inútil o El Alquimista (1955)
    3: 'images/cards/3.jpg',   // Bordando el Manto Terrestre (1961)
    8: 'images/cards/8.jpg',   // Simpatía (La Rabia del Gato, 1955)
    17: 'images/cards/17.jpg', // Cazadora de Astros (1956)
    19: 'images/cards/19.jpg'  // Música Solar (1955)
  },

  // Reverso ornamental de la carta con astrolabio, engranajes y fases lunares
  getCardBackSVG() {
    return `
      <svg class="card-back-svg" viewBox="0 0 200 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0a0c16"/>
            <stop offset="50%" stop-color="#14192b"/>
            <stop offset="100%" stop-color="#090a12"/>
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f0cf7e"/>
            <stop offset="50%" stop-color="#d8b264"/>
            <stop offset="100%" stop-color="#9a7a37"/>
          </linearGradient>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#f0cf7e" stop-opacity="0.35"/>
            <stop offset="70%" stop-color="#4e9e8a" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="transparent"/>
          </radialGradient>
        </defs>

        <!-- Fondo -->
        <rect width="200" height="320" rx="8" fill="url(#bgGrad)"/>
        <rect width="200" height="320" rx="8" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" opacity="0.85"/>

        <!-- Marco interior doble -->
        <rect x="8" y="8" width="184" height="304" rx="6" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.5"/>
        <rect x="14" y="14" width="172" height="292" rx="4" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" stroke-dasharray="6 3" opacity="0.65"/>

        <!-- Esquinas ornamentales con compás de 45 grados -->
        <path d="M 18,28 L 28,18 M 18,34 L 34,18 M 20,20 L 30,20 L 20,30 Z" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.7"/>
        <path d="M 182,28 L 172,18 M 182,34 L 166,18 M 180,20 L 170,20 L 180,30 Z" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.7"/>
        <path d="M 18,292 L 28,302 M 18,286 L 34,302 M 20,300 L 30,300 L 20,290 Z" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.7"/>
        <path d="M 182,292 L 172,302 M 182,286 L 166,302 M 180,300 L 170,300 L 180,290 Z" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.7"/>

        <!-- Resplandor central -->
        <circle cx="100" cy="160" r="65" fill="url(#centerGlow)"/>

        <!-- Engranaje alquímico exterior (rueda del destino) -->
        <circle cx="100" cy="160" r="58" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" stroke-dasharray="10 4" opacity="0.6"/>
        <circle cx="100" cy="160" r="50" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.45"/>
        <circle cx="100" cy="160" r="42" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.7"/>

        <!-- Rayos astronómicos (12 direcciones zodiacales) -->
        <g stroke="url(#goldGrad)" stroke-width="0.8" opacity="0.4">
          <line x1="100" y1="104" x2="100" y2="216"/>
          <line x1="44" y1="160" x2="156" y2="160"/>
          <line x1="60" y1="120" x2="140" y2="200"/>
          <line x1="60" y1="200" x2="140" y2="120"/>
        </g>

        <!-- Estrella octogonal de Thelema / Cábala -->
        <polygon points="100,122 108,152 138,160 108,168 100,198 92,168 62,160 92,152" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" opacity="0.8"/>
        <polygon points="100,132 106,154 128,160 106,166 100,188 94,166 72,160 94,154" fill="url(#goldGrad)" opacity="0.25"/>

        <!-- Media Luna mística central -->
        <path d="M 96,146 A 15,15 0 0,0 96,174 A 18,18 0 0,1 96,146 Z" fill="url(#goldGrad)" opacity="0.9"/>
        <circle cx="106" cy="160" r="3" fill="url(#goldGrad)"/>

        <!-- Sello superior e inferior: compás y péndulo -->
        <g stroke="url(#goldGrad)" stroke-width="1" fill="none" opacity="0.75">
          <!-- Compás superior -->
          <circle cx="100" cy="50" r="16" stroke-dasharray="3 2"/>
          <path d="M 92,60 L 100,42 L 108,60"/>
          <circle cx="100" cy="42" r="2.5" fill="url(#goldGrad)"/>

          <!-- Péndulo inferior -->
          <circle cx="100" cy="270" r="16" stroke-dasharray="3 2"/>
          <line x1="100" y1="254" x2="100" y2="276"/>
          <polygon points="100,282 96,274 104,274" fill="url(#goldGrad)"/>
        </g>
      </svg>
    `;
  },

  // Insignias ilustradas por palo o tipo
  getSuitSymbol(palo) {
    switch (palo) {
      case 'bastos':
        return '🪄';
      case 'copas':
        return '🍷';
      case 'espadas':
        return '🗡️';
      case 'oros':
        return '🪙';
      default:
        return '✦';
    }
  },

  // Sello elemental detallado
  getElementTag(type, palo) {
    if (type === 'major') {
      return { label: 'Arcano Mayor', element: 'Éter / Alquimia', icon: '✦', class: 'element-major' };
    }
    const map = {
      bastos: { label: 'Bastos', element: 'Fuego · Creación', icon: '🜂', class: 'element-fire' },
      copas: { label: 'Copas', element: 'Agua · Emoción', icon: '🜄', class: 'element-water' },
      espadas: { label: 'Espadas', element: 'Aire · Lucidez', icon: '🜁', class: 'element-air' },
      oros: { label: 'Oros', element: 'Tierra · Materia', icon: '🜃', class: 'element-earth' }
    };
    return map[palo] || { label: palo, element: 'Misterio', icon: '✦', class: '' };
  },

  // Renderiza el componente visual de la carta con soporte híbrido:
  // Imagen de alta resolución si está disponible + Arte Vectorial Alquímico SVG
  renderCardArtHTML(c, opts = {}) {
    const localImg = this.knownLocalImages[c.id] || (c.imagen ? c.imagen : null);
    const suit = c.type === 'major' ? 'major' : (c.palo || 'major');
    const svgIllustration = this.getCardIllustrationSVG(c);

    if (localImg) {
      return `
        <div class="card-visual-media has-image" data-suit="${suit}">
          <img src="${localImg}" alt="${c.pintura || c.nombre}" class="card-painting-img" loading="lazy" onerror="this.parentElement.classList.remove('has-image'); this.style.display='none';">
          <div class="card-art-svg-layer">${svgIllustration}</div>
          <div class="card-art-frame-overlay"></div>
        </div>
      `;
    }

    return `
      <div class="card-visual-media" data-suit="${suit}">
        <div class="card-art-svg-layer">${svgIllustration}</div>
        <div class="card-art-frame-overlay"></div>
      </div>
    `;
  },

  // Generador de Ilustración Alquímica Surrealista SVG para cada una de las 78 cartas
  getCardIllustrationSVG(c) {
    const id = c.id;
    const type = c.type;
    const palo = c.palo;
    const name = c.nombre;
    const paint = c.pintura || '';

    // Paletas por elemento / tipo
    let bgGrad = 'gradMajor';
    let accent = '#f0cf7e';
    let glow = '#4e9e8a';

    if (palo === 'bastos') {
      bgGrad = 'gradBastos';
      accent = '#f39c6b';
      glow = '#d45d35';
    } else if (palo === 'copas') {
      bgGrad = 'gradCopas';
      accent = '#8fa6ff';
      glow = '#4a67d6';
    } else if (palo === 'espadas') {
      bgGrad = 'gradEspadas';
      accent = '#b4e1d2';
      glow = '#4e9e8a';
    } else if (palo === 'oros') {
      bgGrad = 'gradOros';
      accent = '#ffd778';
      glow = '#c29737';
    }

    // Contenido vectorial temático específico según la pintura y escena de Remedios Varo
    let sceneSVG = '';

    // ========================================================
    // 1. ARCANOS MAYORES (0 a 21)
    // ========================================================
    if (type === 'major') {
      switch (id) {
        case 0: // El Vagabundo (1957)
          sceneSVG = `
            <!-- Paisaje de empedrado y neblina -->
            <path d="M 0,190 Q 60,180 120,200 T 240,190 L 240,280 L 0,280 Z" fill="#181c24" opacity="0.8"/>
            <path d="M 30,240 Q 90,225 150,240 T 240,235" stroke="${accent}" stroke-width="0.8" stroke-dasharray="4 4" fill="none" opacity="0.4"/>
            <!-- Silueta del Caminante con traje con ruedas y engranajes -->
            <g transform="translate(105, 120)">
              <circle cx="0" cy="-25" r="9" fill="${accent}" opacity="0.9"/> <!-- Rostro -->
              <path d="M -6,-30 L 0,-45 L 8,-32 Z" fill="#2d3848"/> <!-- Capucha cónica -->
              <path d="M -16,-15 Q -22,15 -14,48 L 14,48 Q 22,15 16,-15 Z" fill="#323f4b" stroke="${accent}" stroke-width="1.2"/> <!-- Traje compartments -->
              <!-- Engranajes y compartimentos en la vestidura -->
              <circle cx="-6" cy="10" r="5" fill="none" stroke="${accent}" stroke-width="1"/>
              <circle cx="6" cy="22" r="6" fill="none" stroke="${accent}" stroke-width="1"/>
              <rect x="-10" y="32" width="8" height="6" fill="none" stroke="${accent}" stroke-width="0.8"/>
              <!-- Ruedecillas en los zapatos -->
              <circle cx="-10" cy="56" r="4" fill="none" stroke="${accent}" stroke-width="1.2"/>
              <circle cx="12" cy="56" r="4" fill="none" stroke="${accent}" stroke-width="1.2"/>
              <!-- Vara luminosa -->
              <line x1="-28" y1="-30" x2="-18" y2="58" stroke="${accent}" stroke-width="2"/>
              <circle cx="-28" cy="-30" r="7" fill="${accent}" opacity="0.85"/>
              <circle cx="-28" cy="-30" r="14" fill="${accent}" opacity="0.25"/>
            </g>
            <!-- Lunas y estrellas en la niebla -->
            <path d="M 175,40 A 12,12 0 0,0 175,64 A 15,15 0 0,1 175,40 Z" fill="${accent}" opacity="0.85"/>
            <circle cx="65" cy="55" r="2.5" fill="${accent}" opacity="0.7"/>
            <circle cx="90" cy="35" r="1.5" fill="#fff" opacity="0.8"/>
            <circle cx="195" cy="85" r="2" fill="${accent}" opacity="0.6"/>
          `;
          break;

        case 1: // El Alquimista / La Ciencia Inútil (1955)
          sceneSVG = `
            <!-- Torre gótica y arco interior -->
            <path d="M 35,40 L 35,260 M 205,40 L 205,260" stroke="#374151" stroke-width="2"/>
            <path d="M 35,60 Q 120,10 205,60" stroke="${accent}" stroke-width="1.5" fill="none" opacity="0.6"/>
            <!-- Rueda mecánica y poleas gigantes -->
            <g transform="translate(120, 140)">
              <circle cx="0" cy="0" r="54" fill="none" stroke="${accent}" stroke-width="1.5" stroke-dasharray="6 3"/>
              <circle cx="0" cy="0" r="42" fill="none" stroke="${accent}" stroke-width="1"/>
              <circle cx="0" cy="0" r="12" fill="${accent}" opacity="0.7"/>
              <line x1="-54" y1="0" x2="54" y2="0" stroke="${accent}" stroke-width="1" opacity="0.5"/>
              <line x1="0" y1="-54" x2="0" y2="54" stroke="${accent}" stroke-width="1" opacity="0.5"/>
              <!-- Manivela y engranaje lateral -->
              <circle cx="58" cy="18" r="14" fill="none" stroke="${accent}" stroke-width="1.2" stroke-dasharray="3 2"/>
            </g>
            <!-- Alambique de vidrio y destilación de astros -->
            <path d="M 65,220 Q 60,180 85,175 L 85,150 L 95,150 L 95,175 Q 120,180 115,220 Z" fill="#1b2434" stroke="${accent}" stroke-width="1.2" opacity="0.85"/>
            <circle cx="90" cy="200" r="10" fill="${accent}" opacity="0.6"/>
            <!-- Vapor luminoso ascendente -->
            <path d="M 90,145 Q 110,120 95,95 T 120,50" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="4 2" opacity="0.75"/>
          `;
          break;

        case 2: // La Sacerdotisa / La Sorceresse (1952)
          sceneSVG = `
            <!-- Bosque vegetal bioluminiscente -->
            <path d="M 20,260 Q 30,120 70,60 M 220,260 Q 210,120 170,60" stroke="#234639" stroke-width="3" fill="none"/>
            <!-- Hechicera andrógina -->
            <g transform="translate(120, 140)">
              <circle cx="0" cy="-40" r="11" fill="${accent}" opacity="0.9"/>
              <path d="M -12,-26 Q -22,25 0,65 Q 22,25 12,-26 Z" fill="#19332a" stroke="${accent}" stroke-width="1"/>
              <!-- Cuerno de abundancia interior manando luz -->
              <path d="M -8,-5 Q 35,-15 48,15 Q 35,40 10,20 Z" fill="none" stroke="${accent}" stroke-width="1.5"/>
              <path d="M 46,16 Q 60,40 55,70 Q 40,80 15,65" stroke="#f0cf7e" stroke-width="1.2" stroke-dasharray="3 2" fill="none" opacity="0.8"/>
              <!-- Haces luminosos -->
              <circle cx="48" cy="18" r="8" fill="${accent}" opacity="0.5"/>
            </g>
            <circle cx="120" cy="45" r="22" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
            <path d="M 115,35 A 12,12 0 0,0 115,55 A 15,15 0 0,1 115,35 Z" fill="${accent}" opacity="0.8"/>
          `;
          break;

        case 3: // La Emperatriz / Bordando el Manto Terrestre (1961)
          sceneSVG = `
            <!-- Torre octogonal -->
            <path d="M 60,20 L 180,20 L 205,260 L 35,260 Z" fill="#1a1e28" stroke="${accent}" stroke-width="1.2" opacity="0.6"/>
            <!-- Ventana alta de la torre -->
            <path d="M 95,80 Q 120,50 145,80 L 145,130 L 95,130 Z" fill="#0c0e15" stroke="${accent}" stroke-width="1"/>
            <!-- Telar de madera interior -->
            <rect x="105" y="90" width="30" height="35" fill="none" stroke="${accent}" stroke-width="1"/>
            <line x1="112" y1="90" x2="112" y2="125" stroke="${accent}" stroke-width="0.8"/>
            <line x1="120" y1="90" x2="120" y2="125" stroke="${accent}" stroke-width="0.8"/>
            <line x1="128" y1="90" x2="128" y2="125" stroke="${accent}" stroke-width="0.8"/>
            <!-- El Manto Terrestre fluyendo desde la torre hacia el mundo -->
            <path d="M 120,125 Q 90,160 140,195 Q 60,230 120,265" fill="none" stroke="#68b6a3" stroke-width="6" opacity="0.85"/>
            <path d="M 120,125 Q 90,160 140,195 Q 60,230 120,265" fill="none" stroke="${accent}" stroke-width="1.5"/>
            <!-- Árboles y ríos bordados -->
            <circle cx="85" cy="225" r="7" fill="#3b7a66" opacity="0.7"/>
            <circle cx="160" cy="235" r="9" fill="#3b7a66" opacity="0.7"/>
            <path d="M 0,260 Q 120,240 240,260 L 240,280 L 0,280 Z" fill="#203328"/>
          `;
          break;

        case 4: // El Emperador / Arquitectura Vegetal (1962)
          sceneSVG = `
            <!-- Catedral de raíces y columnas vivas -->
            <g stroke="${accent}" stroke-width="1.2" fill="none">
              <!-- Columnas de troncos góticos -->
              <path d="M 50,260 Q 55,140 70,80 Q 90,40 120,30 Q 150,40 170,80 Q 185,140 190,260"/>
              <path d="M 85,260 Q 90,160 100,100 Q 110,60 120,50 Q 130,60 140,100 Q 150,160 155,260"/>
              <!-- Nervaduras ojivales -->
              <path d="M 70,80 Q 120,110 170,80"/>
              <path d="M 50,160 Q 120,180 190,160"/>
            </g>
            <!-- Semilla raíz y base geométrica -->
            <circle cx="120" cy="180" r="14" fill="#2a4537" stroke="${accent}" stroke-width="1.5"/>
            <polygon points="120,170 128,185 112,185" fill="${accent}" opacity="0.8"/>
            <line x1="120" y1="194" x2="120" y2="255" stroke="${accent}" stroke-width="2"/>
          `;
          break;

        case 5: // El Hierofante / Catedral Vegetal (1957)
          sceneSVG = `
            <!-- Arquería vegetal concéntrica -->
            <path d="M 30,260 Q 30,80 120,35 Q 210,80 210,260" fill="none" stroke="${accent}" stroke-width="1.5"/>
            <path d="M 55,260 Q 55,110 120,65 Q 185,110 185,260" fill="none" stroke="#4e9e8a" stroke-width="1"/>
            <path d="M 80,260 Q 80,140 120,95 Q 160,140 160,260" fill="none" stroke="${accent}" stroke-width="0.8"/>
            <!-- Rosetón alquímico superior -->
            <circle cx="120" cy="70" r="18" fill="#14211a" stroke="${accent}" stroke-width="1.2"/>
            <circle cx="120" cy="70" r="6" fill="${accent}" opacity="0.8"/>
            <!-- Guardián o maestro vegetal en el altar -->
            <polygon points="120,145 105,210 135,210" fill="#1b3226" stroke="${accent}" stroke-width="1"/>
            <circle cx="120" cy="138" r="7" fill="${accent}"/>
          `;
          break;

        case 6: // Los Enamorados / Los Amantes (1963)
          sceneSVG = `
            <!-- Velo de luz elíptico envolvente -->
            <ellipse cx="120" cy="140" rx="60" ry="85" fill="#202a3f" stroke="${accent}" stroke-width="1.5" opacity="0.8"/>
            <ellipse cx="120" cy="140" rx="48" ry="70" fill="none" stroke="${accent}" stroke-width="0.8" stroke-dasharray="4 3" opacity="0.6"/>
            <!-- Dos rostros frente a frente casi fundidos -->
            <g transform="translate(100, 125)">
              <circle cx="0" cy="0" r="14" fill="${accent}" opacity="0.85"/>
              <path d="M 0,-14 Q 15,0 0,14" fill="#303f5a"/>
            </g>
            <g transform="translate(140, 125)">
              <circle cx="0" cy="0" r="14" fill="${accent}" opacity="0.85"/>
              <path d="M 0,-14 Q -15,0 0,14" fill="#303f5a"/>
            </g>
            <!-- Hilo de luz central uniendo las almas -->
            <line x1="100" y1="125" x2="140" y2="125" stroke="#fff" stroke-width="2"/>
            <circle cx="120" cy="125" r="4" fill="#fff"/>
            <path d="M 85,160 Q 120,210 155,160" fill="none" stroke="${accent}" stroke-width="1.5"/>
          `;
          break;

        case 7: // El Carro / Homo Rodans (1959)
          sceneSVG = `
            <!-- Gran rueda articulada / Mecanismo autopropulsado -->
            <g transform="translate(120, 150)">
              <!-- Rueda gigante con alas y engranaje -->
              <circle cx="0" cy="15" r="52" fill="none" stroke="${accent}" stroke-width="2"/>
              <circle cx="0" cy="15" r="36" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="5 3"/>
              <circle cx="0" cy="15" r="10" fill="${accent}" opacity="0.8"/>
              <!-- Rayos de la rueda -->
              <line x1="-52" y1="15" x2="52" y2="15" stroke="${accent}" stroke-width="1"/>
              <line x1="0" y1="-37" x2="0" y2="67" stroke="${accent}" stroke-width="1"/>
              <!-- Auriga / Conductor alado -->
              <circle cx="0" cy="-22" r="10" fill="${accent}"/>
              <path d="M -8,-12 L 8,-12 L 14,18 L -14,18 Z" fill="#2c3b52" stroke="${accent}" stroke-width="1"/>
              <!-- Alas de libélula / barco -->
              <path d="M -14,-5 Q -55,-35 -40,10 Q -25,20 -14,5" fill="#4e9e8a" opacity="0.6" stroke="${accent}" stroke-width="0.8"/>
              <path d="M 14,-5 Q 55,-35 40,10 Q 25,20 14,5" fill="#4e9e8a" opacity="0.6" stroke="${accent}" stroke-width="0.8"/>
            </g>
            <line x1="20" y1="220" x2="220" y2="220" stroke="${accent}" stroke-width="1" opacity="0.5"/>
          `;
          break;

        case 8: // La Fuerza / Simpatía (La Rabia del Gato, 1955)
          sceneSVG = `
            <!-- Habitación mística con resonancia armónica -->
            <ellipse cx="120" cy="150" rx="80" ry="90" fill="#1b2230" opacity="0.7"/>
            <!-- Ondas concéntricas de simpatía felina -->
            <circle cx="120" cy="165" r="30" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.4"/>
            <circle cx="120" cy="165" r="50" fill="none" stroke="${accent}" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.3"/>
            <!-- Figura femenina de ojos almendrados -->
            <g transform="translate(120, 130)">
              <circle cx="0" cy="-25" r="12" fill="${accent}" opacity="0.9"/>
              <polygon points="-8,-34 -3,-44 -1,-34" fill="${accent}"/> <!-- Rasgo felino -->
              <polygon points="8,-34 3,-44 1,-34" fill="${accent}"/>
              <!-- Brazos que acunan -->
              <path d="M -18,10 Q 0,40 18,10" fill="none" stroke="${accent}" stroke-width="2"/>
              <!-- Gato sereno en brazos -->
              <ellipse cx="0" cy="18" rx="14" ry="10" fill="#d8b264"/>
              <circle cx="10" cy="12" r="6" fill="#f0cf7e"/>
              <polygon points="8,7 11,2 13,8" fill="#d8b264"/>
              <polygon points="12,7 15,2 16,8" fill="#d8b264"/>
              <path d="M -14,20 Q -24,15 -22,5" stroke="${accent}" stroke-width="1.5" fill="none"/> <!-- Cola -->
            </g>
          `;
          break;

        case 9: // El Ermitaño / Ermitaño Meditando (1955)
          sceneSVG = `
            <!-- Cueva y estratos de luz modelada -->
            <path d="M 25,250 Q 30,50 120,40 Q 210,50 215,250 Z" fill="#111622" stroke="#2a3547" stroke-width="2"/>
            <!-- Estructura estratificada de luz pura que el ermitaño sostiene -->
            <g transform="translate(120, 135)">
              <rect x="-24" y="-30" width="48" height="60" fill="#2d2a1b" stroke="${accent}" stroke-width="1.2"/>
              <!-- Estratos horizontales luminosos -->
              <line x1="-24" y1="-15" x2="24" y2="-15" stroke="${accent}" stroke-width="1"/>
              <line x1="-24" y1="0" x2="24" y2="0" stroke="${accent}" stroke-width="1.5"/>
              <line x1="-24" y1="15" x2="24" y2="15" stroke="${accent}" stroke-width="1"/>
              <circle cx="0" cy="0" r="8" fill="${accent}" opacity="0.9"/>
            </g>
            <!-- Silueta en meditación -->
            <path d="M 120,70 L 105,100 L 135,100 Z" fill="${accent}" opacity="0.8"/>
            <circle cx="120" cy="65" r="7" fill="${accent}"/>
          `;
          break;

        case 10: // La Rueda de la Fortuna / Astro Errante (1961)
          sceneSVG = `
            <!-- Giro orbital giroscópico del astro errante -->
            <g transform="translate(120, 140)">
              <!-- Órbitas elípticas cruzadas -->
              <ellipse cx="0" cy="0" rx="65" ry="24" fill="none" stroke="${accent}" stroke-width="1.5" transform="rotate(-30)"/>
              <ellipse cx="0" cy="0" rx="65" ry="24" fill="none" stroke="${accent}" stroke-width="1.5" transform="rotate(40)"/>
              <ellipse cx="0" cy="0" rx="65" ry="24" fill="none" stroke="#4e9e8a" stroke-width="1" transform="rotate(105)"/>
              <!-- Astro central brillante -->
              <circle cx="0" cy="0" r="18" fill="url(#goldGrad)"/>
              <circle cx="0" cy="0" r="28" fill="${accent}" opacity="0.25"/>
              <!-- Pequeñas lunas satélite en los ejes -->
              <circle cx="48" cy="-28" r="4" fill="${accent}"/>
              <circle cx="-42" cy="35" r="3.5" fill="${accent}"/>
            </g>
          `;
          break;

        case 11: // La Justicia / La Tejedora de Verona (1956)
          sceneSVG = `
            <!-- Esfera central de la que mana el hilo cósmico -->
            <circle cx="120" cy="110" r="24" fill="#202c3b" stroke="${accent}" stroke-width="1.5"/>
            <circle cx="120" cy="110" r="14" fill="${accent}" opacity="0.6"/>
            <!-- Dos tejedoras enfrentadas midiendo el hilo -->
            <g transform="translate(65, 140)">
              <circle cx="0" cy="-20" r="9" fill="${accent}"/>
              <path d="M -8,-8 L 8,-8 L 12,35 L -12,35 Z" fill="#1b2533" stroke="${accent}" stroke-width="1"/>
              <line x1="8" y1="5" x2="35" y2="-15" stroke="${accent}" stroke-width="1.2"/>
            </g>
            <g transform="translate(175, 140)">
              <circle cx="0" cy="-20" r="9" fill="${accent}"/>
              <path d="M -8,-8 L 8,-8 L 12,35 L -12,35 Z" fill="#1b2533" stroke="${accent}" stroke-width="1"/>
              <line x1="-8" y1="5" x2="-35" y2="-15" stroke="${accent}" stroke-width="1.2"/>
            </g>
            <!-- Telar equilibrado en la base -->
            <line x1="45" y1="210" x2="195" y2="210" stroke="${accent}" stroke-width="1.5"/>
            <polygon points="120,200 115,225 125,225" fill="${accent}"/>
          `;
          break;

        case 12: // El Colgado / Fenómeno de Ingravidez (1963)
          sceneSVG = `
            <!-- Habitación invertida desafiando la gravedad -->
            <rect x="35" y="40" width="170" height="190" fill="#141a24" stroke="#2e3848" stroke-width="1.5"/>
            <!-- Mesa flotando al revés en la parte superior -->
            <g transform="translate(120, 85)">
              <rect x="-40" y="-8" width="80" height="8" fill="#523924" stroke="${accent}" stroke-width="1"/>
              <line x1="-32" y1="-8" x2="-32" y2="-32" stroke="${accent}" stroke-width="1.5"/>
              <line x1="32" y1="-8" x2="32" y2="-32" stroke="${accent}" stroke-width="1.5"/>
              <!-- Candelabro y objetos levitando -->
              <circle cx="0" cy="18" r="6" fill="${accent}" opacity="0.8"/>
              <line x1="0" y1="18" x2="0" y2="28" stroke="${accent}" stroke-width="1"/>
            </g>
            <!-- Figura suspendida en el aire con mirada pacífica -->
            <g transform="translate(120, 160)">
              <circle cx="0" cy="22" r="10" fill="${accent}"/> <!-- Cabeza abajo -->
              <line x1="0" y1="12" x2="0" y2="-18" stroke="${accent}" stroke-width="2"/>
              <line x1="0" y1="-18" x2="-16" y2="-32" stroke="${accent}" stroke-width="1.5"/>
              <line x1="0" y1="-18" x2="16" y2="-2" stroke="${accent}" stroke-width="1.5"/>
            </g>
          `;
          break;

        case 13: // La Muerte / Naturaleza Muerta Resucitando (1963)
          sceneSVG = `
            <!-- Mesa circular en espiral cósmica -->
            <ellipse cx="120" cy="170" rx="70" ry="30" fill="#251f2b" stroke="${accent}" stroke-width="1.5"/>
            <!-- Objetos y platos cobrando alas y levantando vuelo -->
            <g transform="translate(85, 120)">
              <ellipse cx="0" cy="0" rx="10" ry="6" fill="${accent}"/>
              <!-- Alas de ave emergiendo -->
              <path d="M -8,0 Q -24,-20 -15,-5" fill="#f0cf7e" stroke="#fff" stroke-width="0.8"/>
              <path d="M 8,0 Q 24,-20 15,-5" fill="#f0cf7e" stroke="#fff" stroke-width="0.8"/>
            </g>
            <g transform="translate(155, 95)">
              <circle cx="0" cy="0" r="7" fill="${accent}"/>
              <path d="M -6,0 Q -20,-16 -10,-4" fill="#68b6a3" stroke="#fff" stroke-width="0.8"/>
              <path d="M 6,0 Q 20,-16 10,-4" fill="#68b6a3" stroke="#fff" stroke-width="0.8"/>
            </g>
            <!-- Espiral de resurrección -->
            <path d="M 120,165 Q 160,140 130,100 Q 100,70 120,40" fill="none" stroke="${accent}" stroke-width="1.2" stroke-dasharray="3 3"/>
            <polygon points="120,35 116,44 124,44" fill="${accent}"/>
          `;
          break;

        case 14: // La Templanza / Exploración de las Fuentes del Río Orinoco (1959)
          sceneSVG = `
            <!-- Embarcación alada en forma de cáliz navegando el agua -->
            <path d="M 60,180 Q 120,205 180,180 L 165,150 Q 120,160 75,150 Z" fill="#20333b" stroke="${accent}" stroke-width="1.5"/>
            <path d="M 120,155 L 120,80" stroke="${accent}" stroke-width="1.5"/>
            <!-- Alas de la nave -->
            <path d="M 120,100 Q 60,65 50,110 Q 80,120 120,115" fill="#4e9e8a" opacity="0.6" stroke="${accent}" stroke-width="0.8"/>
            <!-- Plomada y brújula midiendo el manantial -->
            <line x1="120" y1="185" x2="120" y2="235" stroke="${accent}" stroke-width="1" stroke-dasharray="4 2"/>
            <circle cx="120" cy="240" r="5" fill="${accent}"/>
            <!-- Agua dorada en la gruta -->
            <path d="M 20,230 Q 120,210 220,230 L 220,270 L 20,270 Z" fill="#142830" opacity="0.9"/>
          `;
          break;

        case 15: // El Diablo / El Minotauro (1959)
          sceneSVG = `
            <!-- Laberinto concéntrico de formas óseas -->
            <g stroke="${accent}" stroke-width="1" fill="none" opacity="0.5">
              <rect x="40" y="50" width="160" height="170" rx="8"/>
              <rect x="60" y="70" width="120" height="130" rx="6"/>
              <rect x="80" y="90" width="80" height="90" rx="4"/>
            </g>
            <!-- Minotauro central: figura andrógina con cornamenta de luna -->
            <g transform="translate(120, 140)">
              <circle cx="0" cy="-10" r="14" fill="${accent}"/>
              <!-- Cuernos curvados lunares -->
              <path d="M -10,-18 Q -30,-40 -12,-48 Q -16,-32 -4,-22" fill="#d8b264"/>
              <path d="M 10,-18 Q 30,-40 12,-48 Q 16,-32 4,-22" fill="#d8b264"/>
              <!-- Corazón de luz en el pecho -->
              <polygon points="0,5 -10,18 10,18" fill="#c96f4a"/>
              <path d="M -12,8 L 12,8 L 16,45 L -16,45 Z" fill="#2a1f28" stroke="${accent}" stroke-width="1"/>
            </g>
          `;
          break;

        case 16: // La Torre / Hacia la Torre (1960)
          sceneSVG = `
            <!-- Torre gótica suspendida en las alturas -->
            <polygon points="120,25 90,90 150,90" fill="#2d3448" stroke="${accent}" stroke-width="1.2"/>
            <rect x="100" y="90" width="40" height="40" fill="#1a1e2b" stroke="${accent}" stroke-width="1"/>
            <!-- Camino espiral ascendente -->
            <path d="M 30,250 Q 80,210 140,215 Q 200,220 180,170 Q 150,135 120,130" fill="none" stroke="${accent}" stroke-width="1.2" stroke-dasharray="4 3"/>
            <!-- Ciclistas en procesión rumbo a la torre -->
            <g transform="translate(70, 225)">
              <circle cx="-10" cy="5" r="7" fill="none" stroke="${accent}" stroke-width="1"/>
              <circle cx="10" cy="5" r="7" fill="none" stroke="${accent}" stroke-width="1"/>
              <line x1="-10" y1="5" x2="10" y2="5" stroke="${accent}" stroke-width="1"/>
              <circle cx="0" cy="-10" r="4" fill="${accent}"/>
            </g>
            <g transform="translate(160, 185) scale(0.8)">
              <circle cx="-10" cy="5" r="7" fill="none" stroke="${accent}" stroke-width="1"/>
              <circle cx="10" cy="5" r="7" fill="none" stroke="${accent}" stroke-width="1"/>
              <circle cx="0" cy="-10" r="4" fill="${accent}"/>
            </g>
          `;
          break;

        case 17: // La Estrella / Cazadora de Astros (1956)
          sceneSVG = `
            <!-- Cazadora con alas y red capturando la Luna -->
            <g transform="translate(100, 130)">
              <!-- Alas de libélula / encaje -->
              <path d="M -12,-15 Q -60,-55 -40,5 Q -25,15 -12,0" fill="#4e9e8a" opacity="0.6" stroke="${accent}" stroke-width="0.8"/>
              <!-- Silueta encapuchada -->
              <circle cx="0" cy="-22" r="10" fill="${accent}"/>
              <path d="M -4,-28 L 0,-42 L 8,-28 Z" fill="#2d3b4e"/>
              <path d="M -14,-10 L 14,-10 L 20,40 L -20,40 Z" fill="#3a4b60" stroke="${accent}" stroke-width="1"/>
              <!-- Red de hilo luminoso -->
              <line x1="14" y1="0" x2="52" y2="-20" stroke="#fff" stroke-width="1.5"/>
              <polygon points="52,-20 85,-40 95,-10 65,10" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="3 2"/>
              <!-- Luna atrapada en la red -->
              <path d="M 72,-24 A 10,10 0 0,0 72,-4 A 12,12 0 0,1 72,-24 Z" fill="#f0cf7e"/>
            </g>
            <!-- Jaulas mecánicas astronómicas abajo -->
            <rect x="150" y="190" width="30" height="40" rx="15" fill="none" stroke="${accent}" stroke-width="1.2"/>
            <line x1="165" y1="190" x2="165" y2="230" stroke="${accent}" stroke-width="0.8"/>
            <circle cx="165" cy="210" r="4" fill="${accent}" opacity="0.8"/>
          `;
          break;

        case 18: // La Luna / Reflejo Lunar (1957)
          sceneSVG = `
            <!-- Luna superior en cuarto creciente -->
            <path d="M 120,40 A 25,25 0 0,0 120,90 A 30,30 0 0,1 120,40 Z" fill="${accent}" opacity="0.9"/>
            <circle cx="132" cy="65" r="3" fill="#fff"/>
            <!-- Haces luminosos que bajan al estanque -->
            <g stroke="${accent}" stroke-width="0.8" opacity="0.5">
              <line x1="110" y1="95" x2="60" y2="180"/>
              <line x1="120" y1="95" x2="120" y2="180"/>
              <line x1="130" y1="95" x2="180" y2="180"/>
            </g>
            <!-- Estanque líquido con reflejos prismáticos -->
            <ellipse cx="120" cy="205" rx="85" ry="35" fill="#132433" stroke="${accent}" stroke-width="1.5"/>
            <path d="M 60,205 Q 120,195 180,205" stroke="#68b6a3" stroke-width="2" fill="none"/>
            <path d="M 80,215 Q 120,208 160,215" stroke="${accent}" stroke-width="1.2" fill="none"/>
          `;
          break;

        case 19: // El Sol / Música Solar (1955)
          sceneSVG = `
            <!-- Rayo solar penetrando el espacio -->
            <polygon points="120,15 105,150 135,150" fill="${accent}" opacity="0.3"/>
            <circle cx="120" cy="35" r="16" fill="url(#goldGrad)"/>
            <!-- Instrumento de cuerdas sonoras / violonchelo cósmico -->
            <g transform="translate(120, 160)">
              <ellipse cx="0" cy="15" rx="22" ry="32" fill="#4d321d" stroke="${accent}" stroke-width="1.5"/>
              <circle cx="0" cy="0" r="6" fill="#111"/>
              <line x1="0" y1="-45" x2="0" y2="55" stroke="${accent}" stroke-width="1.5"/>
              <!-- Cuerdas vibrando en notas de esferas -->
              <circle cx="-16" cy="-10" r="5" fill="${accent}" opacity="0.9"/>
              <circle cx="18" cy="5" r="6" fill="${accent}" opacity="0.9"/>
              <circle cx="-12" cy="28" r="4" fill="${accent}" opacity="0.9"/>
            </g>
          `;
          break;

        case 20: // El Juicio / La Llamada (1961)
          sceneSVG = `
            <!-- Manantial sagrado del que emerge la figura -->
            <ellipse cx="120" cy="220" rx="70" ry="25" fill="#182c33" stroke="${accent}" stroke-width="1.5"/>
            <!-- Figura con caracola / llamada cósmica -->
            <g transform="translate(120, 135)">
              <circle cx="0" cy="-28" r="12" fill="${accent}"/>
              <path d="M -12,-15 L 12,-15 L 18,50 L -18,50 Z" fill="#243d42" stroke="${accent}" stroke-width="1.2"/>
              <!-- Caracol marino / trompeta de despertar -->
              <path d="M 10,-24 Q 28,-36 34,-20 Q 28,-8 14,-14" fill="#d8b264" stroke="#fff" stroke-width="1"/>
              <!-- Ondas de sonido concéntricas -->
              <path d="M 36,-26 Q 52,-20 36,-6" stroke="${accent}" stroke-width="1.5" fill="none"/>
              <path d="M 44,-34 Q 66,-20 44,2" stroke="${accent}" stroke-width="1" stroke-dasharray="3 2" fill="none"/>
            </g>
          `;
          break;

        case 21: // El Mundo / El Mundo (1958)
          sceneSVG = `
            <!-- Corona de constelaciones y esfera cósmica -->
            <g transform="translate(120, 140)">
              <!-- Gran esfera terrestre-celeste -->
              <circle cx="0" cy="20" r="48" fill="#1b253a" stroke="${accent}" stroke-width="1.5"/>
              <path d="M -48,20 Q 0,-5 48,20" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="4 3"/>
              <!-- Figura coronada danzando en el centro -->
              <circle cx="0" cy="-25" r="11" fill="${accent}"/>
              <!-- Corona astral -->
              <polygon points="-8,-35 0,-45 8,-35 -3,-38 3,-38" fill="${accent}"/>
              <path d="M -12,-14 L 12,-14 L 16,20 L -16,20 Z" fill="#3a4b6b" stroke="${accent}" stroke-width="1"/>
              <line x1="-12" y1="-8" x2="-28" y2="-22" stroke="${accent}" stroke-width="1.5"/>
              <line x1="12" y1="-8" x2="28" y2="-22" stroke="${accent}" stroke-width="1.5"/>
              <!-- Elipse zodiacal envolvente -->
              <ellipse cx="0" cy="5" rx="72" ry="60" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="6 4" opacity="0.6"/>
            </g>
          `;
          break;
      }
    }

    // ========================================================
    // 2. ARCANOS MENORES: BASTOS (Fuego · Creación · Ejes)
    // ========================================================
    else if (palo === 'bastos') {
      const num = c.rango || c.numero;
      sceneSVG = `
        <!-- Ejes, chispas y aparatos de fuego creador -->
        <g stroke="${accent}" stroke-width="1.2" fill="none">
          <!-- Fondo arquitectónico gótico de taller -->
          <line x1="30" y1="260" x2="30" y2="40" opacity="0.4"/>
          <line x1="210" y1="260" x2="210" y2="40" opacity="0.4"/>
          <path d="M 30,70 Q 120,20 210,70" opacity="0.5"/>
        </g>
      `;

      // Composiciones específicas por carta de Bastos
      if (id === 100) { // As de Bastos: Creación con Rayos Astrales
        sceneSVG += `
          <circle cx="120" cy="70" r="32" fill="#4a2518" stroke="${accent}" stroke-width="2"/>
          <circle cx="120" cy="70" r="14" fill="${accent}" opacity="0.85"/>
          <!-- Rayos bajando hacia la mesa de trabajo -->
          <line x1="120" y1="102" x2="120" y2="190" stroke="#fff" stroke-width="2"/>
          <line x1="105" y1="98" x2="80" y2="185" stroke="${accent}" stroke-width="1.5"/>
          <line x1="135" y1="98" x2="160" y2="185" stroke="${accent}" stroke-width="1.5"/>
          <rect x="60" y="190" width="120" height="24" fill="#2d1c15" stroke="${accent}" stroke-width="1.2"/>
        `;
      } else if (id === 101) { // 2 de Bastos: Caminos Tortuosos
        sceneSVG += `
          <path d="M 120,50 L 120,100" stroke="${accent}" stroke-width="2"/>
          <circle cx="120" cy="45" r="9" fill="${accent}"/>
          <!-- Torre y meandros de caminos -->
          <path d="M 40,240 Q 80,180 120,200 T 200,160 Q 160,130 120,110" fill="none" stroke="${accent}" stroke-width="2"/>
          <path d="M 50,250 Q 140,220 180,240" fill="none" stroke="#d45d35" stroke-width="1.5" stroke-dasharray="4 3"/>
        `;
      } else if (id === 103) { // 4 de Bastos: Paraíso de los Gatos
        sceneSVG += `
          <!-- Cuatro columnas / arcos de paz doméstica -->
          <rect x="45" y="60" width="150" height="150" fill="#241b18" stroke="${accent}" stroke-width="1"/>
          <!-- Gatos descansando -->
          <ellipse cx="85" cy="180" rx="16" ry="10" fill="${accent}"/>
          <circle cx="98" cy="174" r="6" fill="${accent}"/>
          <ellipse cx="155" cy="180" rx="16" ry="10" fill="#f39c6b"/>
          <circle cx="142" cy="174" r="6" fill="#f39c6b"/>
          <polygon points="120,75 110,95 130,95" fill="${accent}"/>
        `;
      } else if (id === 107) { // 8 de Bastos: Vuelo Mágico (Zanfonía)
        sceneSVG += `
          <!-- Zanfonía voladora suspendida en el aire -->
          <g transform="translate(120, 130) rotate(-15)">
            <rect x="-35" y="-12" width="70" height="24" rx="10" fill="#3d2319" stroke="${accent}" stroke-width="1.5"/>
            <circle cx="-15" cy="0" r="7" fill="${accent}"/>
            <line x1="-35" y1="0" x2="35" y2="0" stroke="${accent}" stroke-width="1"/>
            <!-- Alas aerodinámicas -->
            <path d="M 0,-12 Q 10,-45 45,-30 Q 25,-12 5,-12" fill="#f39c6b" opacity="0.7"/>
          </g>
        `;
      } else if (id === 111) { // Caballero de Bastos: Monociclo
        sceneSVG += `
          <!-- Acróbata en monociclo -->
          <circle cx="120" cy="190" r="26" fill="none" stroke="${accent}" stroke-width="2"/>
          <line x1="120" y1="190" x2="120" y2="135" stroke="${accent}" stroke-width="2"/>
          <circle cx="120" cy="115" r="9" fill="${accent}"/>
          <line x1="30" y1="216" x2="210" y2="216" stroke="${accent}" stroke-width="1"/>
        `;
      } else { // Patrón simbólico para el resto de bastos
        sceneSVG += `
          <g transform="translate(120, 140)">
            <line x1="0" y1="-80" x2="0" y2="80" stroke="${accent}" stroke-width="3"/>
            <circle cx="0" cy="-80" r="10" fill="${accent}"/>
            <circle cx="0" cy="80" r="7" fill="${accent}"/>
            <!-- Ejes cruzados según rango -->
            <circle cx="0" cy="0" r="38" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="6 3"/>
            <polygon points="0,-25 15,0 0,25 -15,0" fill="${accent}" opacity="0.6"/>
          </g>
        `;
      }
    }

    // ========================================================
    // 3. ARCANOS MENORES: COPAS (Agua · Emoción · Barcas)
    // ========================================================
    else if (palo === 'copas') {
      sceneSVG = `
        <!-- Ondas de agua, cuencos y atmósfera nocturna marina -->
        <g stroke="${accent}" stroke-width="1.2" fill="none">
          <path d="M 20,230 Q 70,215 120,230 T 220,230 L 220,270 L 20,270 Z" fill="#141d34"/>
          <path d="M 20,245 Q 70,235 120,245 T 220,245" opacity="0.6"/>
        </g>
      `;

      if (id === 200) { // As de Copas: Aqua Áurea
        sceneSVG += `
          <!-- Barcaza navegando canal de oro líquido -->
          <ellipse cx="120" cy="120" rx="35" ry="45" fill="#192847" stroke="${accent}" stroke-width="1.8"/>
          <path d="M 85,120 Q 120,165 155,120 Z" fill="${accent}" opacity="0.8"/>
          <!-- Manantial manando hacia abajo -->
          <path d="M 120,145 L 120,235" stroke="#f0cf7e" stroke-width="3"/>
          <circle cx="120" cy="85" r="12" fill="${accent}" opacity="0.9"/>
        `;
      } else if (id === 201) { // 2 de Copas: Encuentro
        sceneSVG += `
          <!-- Dos figuras bajo un emparrado mecánico -->
          <g transform="translate(85, 140)">
            <circle cx="0" cy="-20" r="9" fill="${accent}"/>
            <path d="M -8,-8 L 8,-8 L 12,35 L -12,35 Z" fill="#1c263d" stroke="${accent}" stroke-width="1"/>
          </g>
          <g transform="translate(155, 140)">
            <circle cx="0" cy="-20" r="9" fill="${accent}"/>
            <path d="M -8,-8 L 8,-8 L 12,35 L -12,35 Z" fill="#1c263d" stroke="${accent}" stroke-width="1"/>
          </g>
          <path d="M 85,135 Q 120,110 155,135" stroke="#fff" stroke-width="1.5" fill="none"/>
        `;
      } else if (id === 207) { // 8 de Copas: La Huida
        sceneSVG += `
          <!-- Torre abandonada y puente colgante -->
          <rect x="40" y="60" width="35" height="120" fill="#182033" stroke="${accent}" stroke-width="1"/>
          <path d="M 75,120 Q 140,160 205,110" fill="none" stroke="${accent}" stroke-width="1.8"/>
          <circle cx="140" cy="138" r="6" fill="${accent}"/> <!-- Viajera cruzando -->
        `;
      } else if (id === 212) { // Reina de Copas: Mujer con Esfera
        sceneSVG += `
          <!-- Mujer sosteniendo universo en esfera de cristal -->
          <g transform="translate(120, 140)">
            <circle cx="0" cy="-30" r="11" fill="${accent}"/>
            <path d="M -14,-15 L 14,-15 L 18,45 L -18,45 Z" fill="#1d2a45" stroke="${accent}" stroke-width="1"/>
            <circle cx="0" cy="5" r="22" fill="#2b3e66" stroke="#fff" stroke-width="1.5"/>
            <circle cx="0" cy="5" r="10" fill="${accent}" opacity="0.6"/>
          </g>
        `;
      } else { // Cuenco / Cáliz representativo
        sceneSVG += `
          <g transform="translate(120, 140)">
            <path d="M -30,-25 Q 0,-35 30,-25 L 24,10 Q 0,38 -24,10 Z" fill="#202c47" stroke="${accent}" stroke-width="1.8"/>
            <line x1="0" y1="28" x2="0" y2="55" stroke="${accent}" stroke-width="2"/>
            <line x1="-20" y1="55" x2="20" y2="55" stroke="${accent}" stroke-width="2"/>
            <circle cx="0" cy="-5" r="8" fill="${accent}" opacity="0.8"/>
          </g>
        `;
      }
    }

    // ========================================================
    // 4. ARCANOS MENORES: ESPADAS (Aire · Lucidez · Precisión)
    // ========================================================
    else if (palo === 'espadas') {
      sceneSVG = `
        <!-- Líneas geométricas de corte, escalpelos y bruma -->
        <g stroke="${accent}" stroke-width="1" fill="none" opacity="0.4">
          <line x1="20" y1="50" x2="220" y2="250"/>
          <line x1="220" y1="50" x2="20" y2="250"/>
        </g>
      `;

      if (id === 300) { // As de Espadas: Revelación o El Relojero
        sceneSVG += `
          <!-- Relojero y engranaje que destila luz -->
          <g transform="translate(120, 130)">
            <circle cx="0" cy="0" r="45" fill="none" stroke="${accent}" stroke-width="1.5" stroke-dasharray="8 4"/>
            <line x1="0" y1="-70" x2="0" y2="60" stroke="#fff" stroke-width="2.5"/> <!-- Espada / Manecilla -->
            <polygon points="0,-82 -8,-68 8,-68" fill="#fff"/>
            <circle cx="0" cy="0" r="12" fill="${accent}"/>
          </g>
        `;
      } else if (id === 302) { // 3 de Espadas: Ruptura
        sceneSVG += `
          <!-- Grieta luminosa separando dos figuras -->
          <path d="M 120,30 L 115,80 L 128,130 L 110,180 L 122,250" stroke="#fff" stroke-width="2" fill="none"/>
          <g transform="translate(65, 140)">
            <circle cx="0" cy="-15" r="8" fill="${accent}"/>
            <path d="M -8,-5 L 8,-5 L 10,35 L -10,35 Z" fill="#202c30" stroke="${accent}" stroke-width="1"/>
          </g>
          <g transform="translate(175, 140)">
            <circle cx="0" cy="-15" r="8" fill="${accent}"/>
            <path d="M -8,-5 L 8,-5 L 10,35 L -10,35 Z" fill="#202c30" stroke="${accent}" stroke-width="1"/>
          </g>
        `;
      } else if (id === 312) { // Reina de Espadas: Psicoanalista
        sceneSVG += `
          <!-- Mujer saliendo del umbral con lucidez -->
          <rect x="50" y="50" width="60" height="150" fill="#182422" stroke="${accent}" stroke-width="1.2"/>
          <g transform="translate(145, 135)">
            <circle cx="0" cy="-25" r="10" fill="${accent}"/>
            <path d="M -10,-12 L 10,-12 L 14,45 L -14,45 Z" fill="#263b36" stroke="${accent}" stroke-width="1.2"/>
          </g>
        `;
      } else { // Espada de corte alquímico
        sceneSVG += `
          <g transform="translate(120, 140)">
            <line x1="0" y1="-75" x2="0" y2="45" stroke="#fff" stroke-width="2"/>
            <polygon points="0,-88 -6,-72 6,-72" fill="#fff"/>
            <line x1="-22" y1="35" x2="22" y2="35" stroke="${accent}" stroke-width="2"/>
            <circle cx="0" cy="55" r="5" fill="${accent}"/>
            <circle cx="0" cy="-10" r="28" fill="none" stroke="${accent}" stroke-width="0.8" stroke-dasharray="4 4"/>
          </g>
        `;
      }
    }

    // ========================================================
    // 5. ARCANOS MENORES: OROS (Tierra · Materia · Oficio)
    // ========================================================
    else if (palo === 'oros') {
      sceneSVG = `
        <!-- Esferas doradas, hilos y materia alquímica -->
        <g stroke="${accent}" stroke-width="1" fill="none" opacity="0.4">
          <circle cx="120" cy="140" r="70" stroke-dasharray="5 3"/>
        </g>
      `;

      if (id === 400) { // As de Oros: Hallazgo
        sceneSVG += `
          <!-- Mano hallando esfera dorada tras columnas -->
          <rect x="40" y="50" width="18" height="170" fill="#252119" stroke="${accent}" stroke-width="1"/>
          <rect x="182" y="50" width="18" height="170" fill="#252119" stroke="${accent}" stroke-width="1"/>
          <!-- Esfera de oro resplandeciente -->
          <circle cx="120" cy="135" r="32" fill="url(#goldGrad)" stroke="#fff" stroke-width="1.5"/>
          <circle cx="120" cy="135" r="14" fill="#f0cf7e" opacity="0.6"/>
        `;
      } else if (id === 405) { // 6 de Oros: Los Hilos del Destino
        sceneSVG += `
          <!-- Reparto de hilos luminosos que conectan destinos -->
          <circle cx="120" cy="90" r="15" fill="${accent}"/>
          <line x1="120" y1="105" x2="65" y2="200" stroke="${accent}" stroke-width="1.5"/>
          <line x1="120" y1="105" x2="120" y2="200" stroke="${accent}" stroke-width="1.5"/>
          <line x1="120" y1="105" x2="175" y2="200" stroke="${accent}" stroke-width="1.5"/>
          <circle cx="65" cy="200" r="7" fill="${accent}"/>
          <circle cx="120" cy="200" r="7" fill="${accent}"/>
          <circle cx="175" cy="200" r="7" fill="${accent}"/>
        `;
      } else if (id === 407) { // 8 de Oros: La Tejedora (Mujer Roja)
        sceneSVG += `
          <!-- Tejedora concentrada en el telar -->
          <rect x="55" y="70" width="130" height="110" fill="#231b14" stroke="${accent}" stroke-width="1.2"/>
          <line x1="75" y1="70" x2="75" y2="180" stroke="${accent}" stroke-width="0.8"/>
          <line x1="95" y1="70" x2="95" y2="180" stroke="${accent}" stroke-width="0.8"/>
          <line x1="115" y1="70" x2="115" y2="180" stroke="${accent}" stroke-width="0.8"/>
          <line x1="135" y1="70" x2="135" y2="180" stroke="${accent}" stroke-width="0.8"/>
          <circle cx="120" cy="195" r="9" fill="#c96f4a"/>
        `;
      } else { // Moneda / Sello de oro alquímico
        sceneSVG += `
          <g transform="translate(120, 140)">
            <circle cx="0" cy="0" r="42" fill="#2d2516" stroke="${accent}" stroke-width="2"/>
            <circle cx="0" cy="0" r="32" fill="none" stroke="${accent}" stroke-width="1" stroke-dasharray="4 2"/>
            <polygon points="0,-22 18,0 0,22 -18,0" fill="${accent}" opacity="0.85"/>
            <circle cx="0" cy="0" r="6" fill="#fff"/>
          </g>
        `;
      }
    }

    return `
      <svg class="card-art-illustration-svg" viewBox="0 0 240 290" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradMajor" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0c0e18"/>
            <stop offset="50%" stop-color="#182033"/>
            <stop offset="100%" stop-color="#0a0c14"/>
          </linearGradient>
          <linearGradient id="gradBastos" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#190e0b"/>
            <stop offset="50%" stop-color="#301912"/>
            <stop offset="100%" stop-color="#140b08"/>
          </linearGradient>
          <linearGradient id="gradCopas" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#091124"/>
            <stop offset="50%" stop-color="#152042"/>
            <stop offset="100%" stop-color="#080c18"/>
          </linearGradient>
          <linearGradient id="gradEspadas" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0c1719"/>
            <stop offset="50%" stop-color="#192c2b"/>
            <stop offset="100%" stop-color="#0a1214"/>
          </linearGradient>
          <linearGradient id="gradOros" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#181308"/>
            <stop offset="50%" stop-color="#312711"/>
            <stop offset="100%" stop-color="#120e06"/>
          </linearGradient>
        </defs>

        <!-- Fondo del lienzo -->
        <rect width="240" height="290" fill="url(#${bgGrad})"/>

        <!-- Marco interior alquímico con filigrana -->
        <rect x="6" y="6" width="228" height="278" rx="4" fill="none" stroke="${accent}" stroke-width="1" opacity="0.6"/>
        <rect x="10" y="10" width="220" height="270" rx="3" fill="none" stroke="${accent}" stroke-width="0.8" stroke-dasharray="4 2" opacity="0.4"/>

        <!-- Escena temática específica de Remedios Varo -->
        ${sceneSVG}

        <!-- Viñeta pictórica inferior con nombre del cuadro -->
        <rect x="12" y="258" width="216" height="22" fill="#080a10" opacity="0.88"/>
        <text x="120" y="273" text-anchor="middle" font-family="'Cormorant Garamond', Georgia, serif" font-size="11.5" fill="${accent}" font-style="italic" letter-spacing="0.5">
          ${this.escapeXML(paint)}
        </text>
      </svg>
    `;
  },

  escapeXML(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
};
