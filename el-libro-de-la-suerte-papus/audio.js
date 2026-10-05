/**
 * MOTOR DE AUDIO PROCEDURAL HERMÉTICO - WEB AUDIO API
 * Generador de sonidos ceremoniales, frecuencias sagradas de Solfeo (432Hz, 528Hz),
 * zumbido de fondo (drone), rito de campanas y rueda astrológica.
 * No requiere archivos MP3 externos.
 */

class PapusAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.volume = 0.45;
    this.droneGain = null;
    this.masterGain = null;
    this.isDroneActive = false;
    this.droneNodes = [];
  }

  // Inicializa el contexto de audio en respuesta al primer gesto de interacción
  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    } else if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMute(mute) {
    this.isMuted = mute;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
    }
    return this.isMuted;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  // Campanada de Solfeo Sagrado (432Hz o 528Hz con armónicos áureos)
  playBell(freq = 432, duration = 3.5) {
    this.initContext();
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const osc3 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Fundamental y armónicos naturales de cuenco tibetano
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2.76, now); // Armónico inarmónico típico de campana

    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(freq * 5.4, now);

    // Envolvente de campana: ataque percusivo casi instantáneo, decaimiento largo y etéreo
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.6, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(gain);
    osc2.connect(gain);
    osc3.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);

    osc1.stop(now + duration);
    osc2.stop(now + duration);
    osc3.stop(now + duration);
  }

  // Clic de rueda astronómica mecánica
  playWheelClick(pitch = 300) {
    this.initContext();
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(pitch, now);
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.04);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.04);
  }

  // Arpegio místico de revelación celestial (acorde de suerte mayor)
  playRevealChord(isTriumph = true) {
    this.initContext();
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;
    const notes = isTriumph 
      ? [261.63, 329.63, 392.00, 523.25, 659.25] // Do Mayor resplandeciente
      : [220.00, 261.63, 329.63, 440.00, 523.25]; // La Menor contemplativo

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = now + idx * 0.08;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.0001, startTime);
      gain.gain.exponentialRampToValueAtTime(0.2, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.5);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(startTime);
      osc.stop(startTime + 2.5);
    });
  }

  // Purificación de fuga astral (sonido de ráfaga energética y liberación)
  playPurgeEnergy() {
    this.initContext();
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;
    // Tono ascendente
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.4);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.6);

    // Complemento con campana de consagración aguda
    setTimeout(() => this.playBell(528, 2.0), 200);
  }

  // Carga e Impronta del Talismán (Pulsación energética envolvente)
  playTalismanCharge(progress = 0.5) {
    this.initContext();
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    const baseFreq = 200 + progress * 400;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.2);
  }

  // Drone de meditación esotérica de fondo (108Hz, afinación áurea con LFO)
  toggleDrone() {
    this.initContext();
    if (!this.ctx) return false;

    if (this.isDroneActive) {
      this.stopDrone();
      return false;
    } else {
      this.startDrone();
      return true;
    }
  }

  startDrone() {
    if (this.isDroneActive || !this.ctx) return;

    const now = this.ctx.currentTime;
    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.001, now);
    this.droneGain.linearRampToValueAtTime(0.18, now + 3.0); // Entrada suave en 3 segundos

    // Filtro pasa bajos para mantener el calor analógico
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, now);

    // Osciladores de 108Hz (Sagrado hindú/pitagórico) y 216Hz
    const freqs = [108, 162, 216];
    this.droneNodes = [];

    freqs.forEach(f => {
      const osc = this.ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, now);

      // Sutil desafinación para sensación de respiración
      osc.detune.setValueAtTime((Math.random() - 0.5) * 6, now);

      osc.connect(filter);
      osc.start(now);
      this.droneNodes.push(osc);
    });

    // LFO para modular lentamente el filtro
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.15, now); // Pulsación cada ~6.6 segundos
    lfoGain.gain.setValueAtTime(80, now);

    lfo.connect(filter.frequency);
    lfo.start(now);
    this.droneNodes.push(lfo);

    filter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);

    this.isDroneActive = true;
  }

  stopDrone() {
    if (!this.isDroneActive || !this.droneGain || !this.ctx) return;

    const now = this.ctx.currentTime;
    this.droneGain.gain.linearRampToValueAtTime(0.0001, now + 1.5);

    setTimeout(() => {
      this.droneNodes.forEach(node => {
        try { node.stop(); node.disconnect(); } catch (e) {}
      });
      this.droneNodes = [];
      this.isDroneActive = false;
    }, 1600);
  }
}

// Instancia global
const papusAudio = new PapusAudioEngine();
