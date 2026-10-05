/**
 * MOTOR DE AUDIO Y AMBIENTE SONORO DEL BOSCO
 * Sintetizador procedural gótico medieval con Web Audio API.
 * Crea drones de abadía, acordes dorios de zanfona, campanas góticas y efectos táctiles.
 */

class BoschAudioEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.volume = 0.5;
        this.isMusicPlaying = false;
        
        // Nodos del sintetizador de ambiente
        this.masterGain = null;
        this.musicGain = null;
        this.sfxGain = null;
        this.reverbNode = null;
        
        // Osciladores activos del dron
        this.activeOscillators = [];
        this.ambientTimer = null;
        this.bellTimer = null;
        
        // Modo musical actual: 'abbey', 'hell', 'eden'
        this.currentMood = "abbey";
    }

    init() {
        if (this.ctx) return;
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();

        // Cadena de ganancia
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        this.musicGain.connect(this.masterGain);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
        this.sfxGain.connect(this.masterGain);

        // Crear reverberación sintética de catedral/cripta medieval
        this.createImpulseResponse();
    }

    createImpulseResponse() {
        if (!this.ctx) return;
        const rate = this.ctx.sampleRate;
        const length = rate * 2.8; // 2.8 segundos de reverberación
        const decay = 2.2;
        const impulse = this.ctx.createBuffer(2, length, rate);
        const left = impulse.getChannelData(0);
        const right = impulse.getChannelData(1);

        for (let i = 0; i < length; i++) {
            const t = i / length;
            const envelope = Math.exp(-t * decay);
            left[i] = (Math.random() * 2 - 1) * envelope;
            right[i] = (Math.random() * 2 - 1) * envelope;
        }

        this.reverbNode = this.ctx.createConvolver();
        this.reverbNode.buffer = impulse;
        this.reverbNode.connect(this.masterGain);
    }

    ensureContext() {
        if (!this.ctx) {
            this.init();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setVolume(value) {
        this.volume = Math.max(0, Math.min(1, value));
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setTargetAtTime(
                this.isMuted ? 0 : this.volume,
                this.ctx.currentTime,
                0.05
            );
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.masterGain && this.ctx) {
            this.masterGain.gain.setTargetAtTime(
                this.isMuted ? 0 : this.volume,
                this.ctx.currentTime,
                0.05
            );
        }
        return this.isMuted;
    }

    toggleMusic() {
        this.ensureContext();
        if (this.isMusicPlaying) {
            this.stopMusic();
            return false;
        } else {
            this.startMusic();
            return true;
        }
    }

    setMood(mood) {
        this.currentMood = mood;
        if (this.isMusicPlaying) {
            this.stopDroneOscillators();
            this.startDroneOscillators();
        }
    }

    startMusic() {
        this.ensureContext();
        this.isMusicPlaying = true;
        
        // Fade in de música
        this.musicGain.gain.setTargetAtTime(0.45, this.ctx.currentTime, 1.5);
        this.startDroneOscillators();
        this.startBellScheduler();
    }

    stopMusic() {
        if (!this.ctx) return;
        this.isMusicPlaying = false;
        this.musicGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 1.0);
        
        setTimeout(() => {
            if (!this.isMusicPlaying) {
                this.stopDroneOscillators();
                if (this.bellTimer) clearInterval(this.bellTimer);
            }
        }, 1200);
    }

    stopDroneOscillators() {
        this.activeOscillators.forEach(node => {
            try {
                node.stop();
                node.disconnect();
            } catch (e) {}
        });
        this.activeOscillators = [];
    }

    startDroneOscillators() {
        this.stopDroneOscillators();
        if (!this.ctx) return;

        // Frecuencias según modo ambiental
        let freqs = [];
        let waveType = "sawtooth";
        let filterFreq = 340;

        if (this.currentMood === "abbey") {
            // Re menor medieval / dorio (Re2, La2, Re3, Fa3)
            freqs = [73.42, 110.00, 146.83, 174.61];
            waveType = "sawtooth";
            filterFreq = 380;
        } else if (this.currentMood === "hell") {
            // Tensión espectral bosquiana (Tritono Re2 - Sol#2 con bajos profundos)
            freqs = [65.41, 73.42, 103.83, 138.59];
            waveType = "sawtooth";
            filterFreq = 260;
        } else {
            // Edén luminoso (Acorde abierto Re mayor / Lidio)
            freqs = [73.42, 110.00, 146.83, 220.00];
            waveType = "triangle";
            filterFreq = 520;
        }

        // Filtro pasa bajos con resonancia para calidez de madera medieval
        const filter = this.ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(filterFreq, this.ctx.currentTime);
        filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

        // LFO para oscilación lenta (vibrato de fuelle de órgano)
        const lfo = this.ctx.createOscillator();
        lfo.type = "sine";
        lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime);

        const lfoGain = this.ctx.createGain();
        lfoGain.gain.setValueAtTime(80, this.ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start();
        this.activeOscillators.push(lfo);

        filter.connect(this.musicGain);
        if (this.reverbNode) {
            filter.connect(this.reverbNode);
        }

        // Crear osciladores armónicos
        freqs.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = waveType;
            const detune = (Math.random() - 0.5) * 8;
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            osc.detune.setValueAtTime(detune, this.ctx.currentTime);

            const baseAmp = (idx === 0 ? 0.35 : 0.22 / (idx + 0.8));
            gain.gain.setValueAtTime(baseAmp, this.ctx.currentTime);

            osc.connect(gain);
            gain.connect(filter);

            osc.start();
            this.activeOscillators.push(osc);
        });

        // Susurro de aire de abadía (ruido rosa filtrado)
        this.startAmbientAir();
    }

    startAmbientAir() {
        if (!this.ctx) return;
        const bufferSize = 2 * this.ctx.sampleRate;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0;
        
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            output[i] = (b0 + b1 + b2) * 0.08;
        }

        const whiteNoise = this.ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const airFilter = this.ctx.createBiquadFilter();
        airFilter.type = "bandpass";
        airFilter.frequency.setValueAtTime(220, this.ctx.currentTime);
        airFilter.Q.setValueAtTime(1.2, this.ctx.currentTime);

        const airGain = this.ctx.createGain();
        airGain.gain.setValueAtTime(0.06, this.ctx.currentTime);

        whiteNoise.connect(airFilter);
        airFilter.connect(airGain);
        airGain.connect(this.musicGain);

        whiteNoise.start();
        this.activeOscillators.push(whiteNoise);
    }

    startBellScheduler() {
        if (this.bellTimer) clearInterval(this.bellTimer);
        const triggerNextBell = () => {
            if (!this.isMusicPlaying) return;
            this.playGothicBell();
            const delay = 12000 + Math.random() * 14000;
            this.bellTimer = setTimeout(triggerNextBell, delay);
        };
        this.bellTimer = setTimeout(triggerNextBell, 3500);
    }

    playGothicBell(pitch = 220) {
        if (!this.ctx || this.isMuted) return;
        const now = this.ctx.currentTime;
        
        const partials = [
            { f: pitch * 0.5, amp: 0.35, dur: 4.5 },
            { f: pitch * 1.0, amp: 0.5, dur: 3.5 },
            { f: pitch * 1.18, amp: 0.4, dur: 2.8 },
            { f: pitch * 1.52, amp: 0.3, dur: 2.0 },
            { f: pitch * 2.0, amp: 0.25, dur: 1.5 },
            { f: pitch * 2.74, amp: 0.15, dur: 1.0 },
            { f: pitch * 3.4, amp: 0.08, dur: 0.7 }
        ];

        const bellGain = this.ctx.createGain();
        bellGain.gain.setValueAtTime(0.4, now);
        bellGain.connect(this.masterGain);
        if (this.reverbNode) bellGain.connect(this.reverbNode);

        partials.forEach(p => {
            const osc = this.ctx.createOscillator();
            const pGain = this.ctx.createGain();
            
            osc.type = "sine";
            osc.frequency.setValueAtTime(p.f, now);
            
            pGain.gain.setValueAtTime(p.amp, now);
            pGain.gain.exponentialRampToValueAtTime(0.0001, now + p.dur);

            osc.connect(pGain);
            pGain.connect(bellGain);

            osc.start(now);
            osc.stop(now + p.dur);
        });
    }

    // EFECTOS DE SONIDO TÁCTILES PARA LAS CARTAS

    playCardFlip() {
        this.ensureContext();
        if (this.isMuted || !this.ctx) return;
        const now = this.ctx.currentTime;

        const bufferSize = Math.floor(this.ctx.sampleRate * 0.12);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(1400, now);
        filter.frequency.exponentialRampToValueAtTime(450, now + 0.12);
        filter.Q.setValueAtTime(1.8, now);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.45, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);

        noise.start(now);

        const thud = this.ctx.createOscillator();
        const thudGain = this.ctx.createGain();
        thud.type = "sine";
        thud.frequency.setValueAtTime(160, now);
        thud.frequency.exponentialRampToValueAtTime(50, now + 0.08);

        thudGain.gain.setValueAtTime(0.35, now);
        thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        thud.connect(thudGain);
        thudGain.connect(this.sfxGain);

        thud.start(now);
        thud.stop(now + 0.08);
    }

    playCardDeal() {
        this.ensureContext();
        if (this.isMuted || !this.ctx) return;
        const now = this.ctx.currentTime;

        const bufferSize = Math.floor(this.ctx.sampleRate * 0.18);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(900, now);
        filter.frequency.linearRampToValueAtTime(1600, now + 0.18);
        filter.Q.setValueAtTime(1.2, now);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(this.sfxGain);

        noise.start(now);
    }

    playShuffle() {
        this.ensureContext();
        if (this.isMuted || !this.ctx) return;

        const cardsCount = 7;
        for (let i = 0; i < cardsCount; i++) {
            setTimeout(() => {
                this.playCardDeal();
            }, i * 55);
        }
    }

    playMysticReveal() {
        this.ensureContext();
        if (this.isMuted || !this.ctx) return;
        const now = this.ctx.currentTime;

        const notes = [440, 659.25, 880, 1318.5];
        notes.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, now + idx * 0.04);

            gain.gain.setValueAtTime(0.18 / (idx + 1), now + idx * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8 + idx * 0.2);

            osc.connect(gain);
            gain.connect(this.sfxGain);
            if (this.reverbNode) gain.connect(this.reverbNode);

            osc.start(now + idx * 0.04);
            osc.stop(now + 2.2);
        });
    }
}

// Instancia global
const boschAudio = new BoschAudioEngine();
