/**
 * LIBER 333 - Motor de Audio Procedural con Web Audio API
 * Genera texturas sonoras rituales, cuencos tibetanos, gongs y drones
 * sin necesidad de archivos de audio externos.
 */

class RitualAudioEngine {
    constructor() {
        this.ctx = null;
        this.masterGain = null;
        this.isMuted = false;
        this.isPlayingDrone = false;
        this.droneNodes = [];
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        try {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioCtx();
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(0.6, this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);
            this.initialized = true;
        } catch (e) {
            console.warn("Web Audio API no soportado:", e);
        }
    }

    ensureContext() {
        if (!this.initialized) this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.masterGain) {
            const targetGain = this.isMuted ? 0 : 0.6;
            this.masterGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.05);
        }
        return this.isMuted;
    }

    // Iniciar drone ambiental armónico (Frecuencias místicas basadas en 108Hz / armónicos sagrados)
    startAmbientDrone() {
        this.ensureContext();
        if (!this.ctx || this.isPlayingDrone) return;

        const baseFreq = 108; // Número sagrado en tradiciones orientales y esotéricas
        const freqs = [baseFreq, baseFreq * 1.5, baseFreq * 2, baseFreq * 2.667];

        const droneMaster = this.ctx.createGain();
        droneMaster.gain.setValueAtTime(0.01, this.ctx.currentTime);
        droneMaster.gain.exponentialRampToValueAtTime(0.25, this.ctx.currentTime + 3);
        droneMaster.connect(this.masterGain);

        // Filtro pasobajo dinámico con sutil modulación
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, this.ctx.currentTime);
        filter.connect(droneMaster);

        // LFO para hacer "respirar" el filtro
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // respiración lenta de 8 segundos
        lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);
        lfo.connect(filter.frequency);
        lfo.start();

        const oscs = [];
        freqs.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            
            // Osciladores con sutil desafinación (chorus natural)
            osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(freq + (idx * 0.4 - 0.6), this.ctx.currentTime);
            
            gain.gain.setValueAtTime(0.18 / (idx + 1), this.ctx.currentTime);
            osc.connect(gain);
            gain.connect(filter);
            osc.start();
            oscs.push(osc);
        });

        this.droneNodes = { droneMaster, oscs, lfo };
        this.isPlayingDrone = true;
    }

    stopAmbientDrone() {
        if (!this.isPlayingDrone || !this.droneNodes) return;
        const { droneMaster, oscs, lfo } = this.droneNodes;
        if (droneMaster && this.ctx) {
            droneMaster.gain.setValueAtTime(droneMaster.gain.value, this.ctx.currentTime);
            droneMaster.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2);
            setTimeout(() => {
                oscs.forEach(o => { try { o.stop(); } catch(e){} });
                try { lfo.stop(); } catch(e){}
                this.isPlayingDrone = false;
            }, 2100);
        }
    }

    // Campana tibetana / Cuenco cantor para selecciones y revelaciones
    playTibetanBowl(pitch = 432) {
        this.ensureContext();
        if (!this.ctx || this.isMuted) return;

        const now = this.ctx.currentTime;
        const partials = [1, 2.76, 5.4, 8.9]; // Proporciones de parciales metálicos
        const weights = [0.45, 0.25, 0.12, 0.05];

        const bowlGain = this.ctx.createGain();
        bowlGain.gain.setValueAtTime(0.4, now);
        bowlGain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);
        bowlGain.connect(this.masterGain);

        partials.forEach((mult, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(pitch * mult, now);
            gain.gain.setValueAtTime(weights[i], now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + (3.5 / (i + 1)));
            osc.connect(gain);
            gain.connect(bowlGain);
            osc.start(now);
            osc.stop(now + 4);
        });
    }

    // Gran Gong Ceremonial para transiciones de Portales o victoria
    playCeremonialGong() {
        this.ensureContext();
        if (!this.ctx || this.isMuted) return;

        const now = this.ctx.currentTime;
        const gongGain = this.ctx.createGain();
        gongGain.gain.setValueAtTime(0.01, now);
        gongGain.gain.linearRampToValueAtTime(0.7, now + 0.08); // ataque rápido pero suave
        gongGain.gain.exponentialRampToValueAtTime(0.0001, now + 5.5);
        gongGain.connect(this.masterGain);

        // Frecuencia fundamental baja + sutil vibrato
        const fundamental = 86; // Frecuencia grave profunda
        const partials = [1, 1.34, 1.71, 2.12, 3.01, 4.25];

        partials.forEach((p, idx) => {
            const osc = this.ctx.createOscillator();
            const pGain = this.ctx.createGain();
            osc.type = idx === 0 ? 'sine' : 'triangle';
            osc.frequency.setValueAtTime(fundamental * p, now);
            // Sutil caída de tono típica de gongs de bronce
            osc.frequency.exponentialRampToValueAtTime(fundamental * p * 0.98, now + 5);

            pGain.gain.setValueAtTime(0.35 / (idx + 1), now);
            pGain.gain.exponentialRampToValueAtTime(0.0001, now + (5.5 - idx * 0.5));
            osc.connect(pGain);
            pGain.connect(gongGain);
            osc.start(now);
            osc.stop(now + 6);
        });
    }

    // Sonido de Disonancia / Risa de Choronzon ante respuestas dogmáticas
    playChoronzonDissonance() {
        this.ensureContext();
        if (!this.ctx || this.isMuted) return;

        const now = this.ctx.currentTime;
        const dissGain = this.ctx.createGain();
        dissGain.gain.setValueAtTime(0.3, now);
        dissGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
        dissGain.connect(this.masterGain);

        // Intervalo de tritono (Diabolus in Musica) + semitonos chocantes
        const cluster = [220, 233.08, 311.13, 329.63, 466.16];
        cluster.forEach(freq => {
            const osc = this.ctx.createOscillator();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, now);
            osc.frequency.linearRampToValueAtTime(freq * 0.85, now + 1.5);

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(freq * 1.5, now);
            filter.Q.setValueAtTime(5, now);

            osc.connect(filter);
            filter.connect(dissGain);
            osc.start(now);
            osc.stop(now + 2);
        });
    }

    // Sonido sutil de clic de pergamino / runa
    playRuneClick() {
        this.ensureContext();
        if (!this.ctx || this.isMuted) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.06);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now);
        osc.stop(now + 0.07);
    }
}

// Instancia global accesible
const ritualAudio = new RitualAudioEngine();
