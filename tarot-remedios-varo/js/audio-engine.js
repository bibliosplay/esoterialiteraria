/**
 * MOTOR DE AUDIO PROCEDURAL ALQUÍMICO - TAROT REMEDIOS VARO
 * Genera atmósferas musicales surrealistas y efectos de sonido táctiles
 * usando Web Audio API nativo (100% autónomo, sin archivos de audio externos).
 */

class VaroAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.volume = 0.5;
    this.isMusicPlaying = false;

    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.reverbNode = null;

    this.activeOscillators = [];
    this.ambientTimer = null;
    this.clockTimer = null;

    // Modos de ambiente: 'atelier', 'celestial', 'clockwork'
    this.currentMood = 'atelier';
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.ctx = new AudioContext();

    // Cadena de ganancia principal
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Ganancia para música ambiente
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.musicGain.connect(this.masterGain);

    // Ganancia para efectos sonoros
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
    this.sfxGain.connect(this.masterGain);

    // Reverberación convolucional sintética (Catedral / Laboratorio Alquímico)
    this.createImpulseResponse();
  }

  createImpulseResponse() {
    if (!this.ctx) return;
    const rate = this.ctx.sampleRate;
    const length = rate * 2.5; // 2.5 segundos de cola de reverberación
    const impulse = this.ctx.createBuffer(2, length, rate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const decay = Math.exp(-i / (rate * 0.9));
      left[i] = (Math.random() * 2 - 1) * decay;
      right[i] = (Math.random() * 2 - 1) * decay;
    }

    this.reverbNode = this.ctx.createConvolver();
    this.reverbNode.buffer = impulse;
    this.reverbNode.connect(this.masterGain);
  }

  resumeContext() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime, 0.05);
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime, 0.05);
    }
    return this.isMuted;
  }

  setMood(mood) {
    if (['atelier', 'celestial', 'clockwork'].includes(mood)) {
      this.currentMood = mood;
      if (this.isMusicPlaying) {
        this.stopMusic();
        this.startMusic();
      }
    }
  }

  // ==========================================
  // AMBIENTES MUSICALES PROCEDURALES
  // ==========================================

  toggleMusic() {
    this.init();
    this.resumeContext();
    if (this.isMusicPlaying) {
      this.stopMusic();
      return false;
    } else {
      this.startMusic();
      return true;
    }
  }

  startMusic() {
    if (!this.ctx) this.init();
    this.resumeContext();
    this.isMusicPlaying = true;

    // Fade in suave
    this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.musicGain.gain.setValueAtTime(this.musicGain.gain.value, this.ctx.currentTime);
    this.musicGain.gain.linearRampToValueAtTime(0.42, this.ctx.currentTime + 3);

    if (this.currentMood === 'atelier') {
      this.playAtelierMood();
    } else if (this.currentMood === 'celestial') {
      this.playCelestialMood();
    } else if (this.currentMood === 'clockwork') {
      this.playClockworkMood();
    }
  }

  stopMusic() {
    if (!this.ctx || !this.isMusicPlaying) return;
    this.isMusicPlaying = false;

    if (this.ambientTimer) clearTimeout(this.ambientTimer);
    if (this.clockTimer) clearInterval(this.clockTimer);

    // Fade out suave
    this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.musicGain.gain.setValueAtTime(this.musicGain.gain.value, this.ctx.currentTime);
    this.musicGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1.8);

    setTimeout(() => {
      this.activeOscillators.forEach(osc => {
        try { osc.stop(); osc.disconnect(); } catch (e) {}
      });
      this.activeOscillators = [];
    }, 2000);
  }

  // 1. El Taller Alquímico (Atelier de Remedios Varo)
  // Armónicos dorados de cuerda cósmica y drones suspendidos
  playAtelierMood() {
    if (!this.isMusicPlaying) return;

    // Frecuencias base en Re Alquímico: D3 (146.83Hz), A3 (220Hz), F#3 (185Hz)
    const baseFreqs = [146.83, 220.00, 293.66, 369.99];

    baseFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Micro-desafinación para efecto de cuerdas vivas
      osc.detune.setValueAtTime((Math.random() - 0.5) * 8, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, this.ctx.currentTime);

      // LFO para movimiento orgánico de respiración
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.12 + idx * 0.05, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      lfo.connect(gain.gain);
      lfo.start();

      gain.gain.setValueAtTime(0.08 / (idx + 1), this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.musicGain);
      if (this.reverbNode) gain.connect(this.reverbNode);

      osc.start();
      this.activeOscillators.push(osc, lfo);
    });

    // Melodía aleatoria de campana de cristal suave cada 6-12 segundos
    const triggerChime = () => {
      if (!this.isMusicPlaying || this.currentMood !== 'atelier') return;
      const notes = [587.33, 659.25, 739.99, 880.00, 987.77, 1174.66]; // D5, E5, F#5, A5, B5, D6
      const note = notes[Math.floor(Math.random() * notes.length)];
      this.playChimeTone(note, 0.12, 3.5);
      this.ambientTimer = setTimeout(triggerChime, 5000 + Math.random() * 6000);
    };
    this.ambientTimer = setTimeout(triggerChime, 3000);
  }

  // 2. La Cazadora de Astros (Paisaje Celestial a 432 Hz)
  playCelestialMood() {
    if (!this.isMusicPlaying) return;

    // Frecuencias áureas y solfeo (432Hz como raíz armónica)
    const freqs = [108.0, 216.0, 324.0, 432.0];

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.09 / (idx + 1), this.ctx.currentTime);

      if (panner) {
        panner.pan.setValueAtTime(idx % 2 === 0 ? -0.4 : 0.4, this.ctx.currentTime);
        osc.connect(gain);
        gain.connect(panner);
        panner.connect(this.musicGain);
      } else {
        osc.connect(gain);
        gain.connect(this.musicGain);
      }

      if (this.reverbNode) gain.connect(this.reverbNode);
      osc.start();
      this.activeOscillators.push(osc);
    });

    // Gotas astrales periódicas
    const triggerStarDrop = () => {
      if (!this.isMusicPlaying || this.currentMood !== 'celestial') return;
      const starNotes = [864, 1080, 1296, 1728];
      const f = starNotes[Math.floor(Math.random() * starNotes.length)];
      this.playChimeTone(f, 0.08, 4.0);
      this.ambientTimer = setTimeout(triggerStarDrop, 4500 + Math.random() * 5000);
    };
    this.ambientTimer = setTimeout(triggerStarDrop, 2500);
  }

  // 3. Mecanismos del Destino (Relojería surrealista)
  playClockworkMood() {
    if (!this.isMusicPlaying) return;

    // Drone sutil en Fa sostenido
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(185.00, this.ctx.currentTime); // F#3
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    osc.connect(gain);
    gain.connect(this.musicGain);
    osc.start();
    this.activeOscillators.push(osc);

    // Tic-tac suave de péndulo mecánico en 60 BPM
    this.clockTimer = setInterval(() => {
      if (!this.isMusicPlaying || this.currentMood !== 'clockwork') return;
      this.playClockTick();
    }, 1000);
  }

  playClockTick() {
    if (!this.ctx || this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.03);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(900, this.ctx.currentTime);
    filter.Q.setValueAtTime(4, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.035);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.04);
  }

  playChimeTone(freq, volume, duration) {
    if (!this.ctx || this.isMuted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(volume, this.ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.musicGain);
    if (this.reverbNode) gain.connect(this.reverbNode);

    osc.start();
    osc.stop(this.ctx.currentTime + duration + 0.1);
  }

  // ==========================================
  // EFECTOS DE SONIDO TÁCTILES (SFX)
  // ==========================================

  // Sonido de barajar cartas (ruido blanco filtrado que simula el roce sobre fieltro)
  playShuffle() {
    this.init();
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;

    const bufferSize = this.ctx.sampleRate * 0.45;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, this.ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(1400, this.ctx.currentTime + 0.22);
    filter.frequency.linearRampToValueAtTime(600, this.ctx.currentTime + 0.45);
    filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.45);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    noise.start();
    noise.stop(this.ctx.currentTime + 0.46);
  }

  // Sonido al repartir una carta
  playDeal() {
    this.init();
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.08);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }

  // Sonido al voltear una carta con arpa alquímica
  playFlip() {
    this.init();
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;

    // 1. Chasquido de pergamino suave
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(420, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(210, this.ctx.currentTime + 0.06);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);

    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);

    // 2. Destello armónico místico
    const harp = this.ctx.createOscillator();
    const harpGain = this.ctx.createGain();
    harp.type = 'triangle';
    harp.frequency.setValueAtTime(880, this.ctx.currentTime);
    harp.frequency.exponentialRampToValueAtTime(1318.51, this.ctx.currentTime + 0.18); // A5 -> E6

    harpGain.gain.setValueAtTime(0.09, this.ctx.currentTime + 0.02);
    harpGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.7);

    harp.connect(harpGain);
    harpGain.connect(this.sfxGain);
    if (this.reverbNode) harpGain.connect(this.reverbNode);

    harp.start(this.ctx.currentTime + 0.02);
    harp.stop(this.ctx.currentTime + 0.72);
  }

  // Campanilla de cristal para apertura de modal o revelación de síntesis
  playChime() {
    this.init();
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;

    const chords = [587.33, 880.00, 1174.66]; // D5, A5, D6
    chords.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.04);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime + i * 0.04);
      gain.gain.linearRampToValueAtTime(0.14, this.ctx.currentTime + i * 0.04 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + i * 0.04 + 1.8);

      osc.connect(gain);
      gain.connect(this.sfxGain);
      if (this.reverbNode) gain.connect(this.reverbNode);

      osc.start(this.ctx.currentTime + i * 0.04);
      osc.stop(this.ctx.currentTime + i * 0.04 + 1.9);
    });
  }

  // Clic suave para botones
  playClick() {
    this.init();
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(950, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + 0.02);

    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.025);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.03);
  }
}

// Instancia global
window.varoAudio = new VaroAudioEngine();
