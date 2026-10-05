/**
 * ARTE VECTORIAL Y EMBLEMAS ALQUÍMICOS - TAROT REMEDIOS VARO
 * Genera el reverso sagrado, las filigranas doradas y los sellos
 * elementales inspirados en los aparatos y lienzos de Remedios Varo.
 */

const VaroArt = {
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
        return '🪄'; // Varas de fuego alquímico
      case 'copas':
        return '🍷'; // Cuencos y fuentes lunares
      case 'espadas':
        return '🗡️'; // Escalpelos y líneas de corte
      case 'oros':
        return '🪙'; // Esferas y tejidos cósmicos
      default:
        return '✦';
    }
  },

  // Sello elemental detallado
  getElementTag(type, palo) {
    if (type === 'major') {
      return { label: 'Arcano Mayor', element: 'Éter / Alma', icon: '✦', class: 'element-major' };
    }
    const map = {
      bastos: { label: 'Bastos', element: 'Fuego · Creación', icon: '🜂', class: 'element-fire' },
      copas: { label: 'Copas', element: 'Agua · Emoción', icon: '🜄', class: 'element-water' },
      espadas: { label: 'Espadas', element: 'Aire · Lucidez', icon: '🜁', class: 'element-air' },
      oros: { label: 'Oros', element: 'Tierra · Materia', icon: '🜃', class: 'element-earth' }
    };
    return map[palo] || { label: palo, element: 'Misterio', icon: '✦', class: '' };
  }
};
