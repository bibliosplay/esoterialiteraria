let DATA = null;
let tiradaSeleccionada = null;
let ultimaLectura = null;

const el = (id) => document.getElementById(id);

/* ───────── Carga de datos ───────── */

async function cargarDatos() {
  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error('No se pudo cargar data.json');
    DATA = await res.json();
    pintarCabecera();
    pintarTiradas();
    el('btn-tirar').disabled = false;
  } catch (err) {
    if (location.protocol === 'file:') {
      el('subtitulo').textContent = 'Para cargar los datos se requiere un servidor local (bloqueo CORS del navegador). Ejecuta "python serve.py" o abre "Iniciar_Espejo.bat".';
    } else {
      el('subtitulo').textContent = 'No se pudieron cargar las cartas. Recarga la página e inténtalo de nuevo.';
    }
    el('btn-tirar').disabled = true;
  }
}

function pintarCabecera() {
  el('titulo').textContent = DATA.meta.titulo;
  el('subtitulo').textContent = DATA.meta.subtitulo;
}

/* ───────── Tiradas ───────── */

function pintarTiradas() {
  const cont = el('lista-tiradas');
  cont.innerHTML = '';
  DATA.spreads.forEach((s, i) => {
    const label = document.createElement('label');
    label.className = 'tirada-opcion' + (i === 0 ? ' activa' : '');
    label.innerHTML = `
      <input type="radio" name="tirada" value="${s.id}" ${i === 0 ? 'checked' : ''}>
      <div class="tirada-nombre">${s.nombre}</div>
      <div class="tirada-desc">${s.descripcion}</div>
    `;
    label.addEventListener('click', () => {
      document.querySelectorAll('.tirada-opcion').forEach(o => o.classList.remove('activa'));
      label.classList.add('activa');
      tiradaSeleccionada = s.id;
    });
    cont.appendChild(label);
  });
  tiradaSeleccionada = DATA.spreads[0].id;
}

/* ───────── Barajar y tirar ───────── */

function barajarYSacar(cantidad) {
  const mazo = [...DATA.arcanos];
  for (let i = mazo.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
  }
  return mazo.slice(0, cantidad).map(arcano => ({
    arcano,
    invertida: Math.random() < 0.35
  }));
}

function realizarTirada() {
  const pregunta = el('pregunta').value.trim();
  const spread = DATA.spreads.find(s => s.id === tiradaSeleccionada);
  const cartas = barajarYSacar(spread.posiciones.length);

  ultimaLectura = {
    pregunta,
    spread,
    cartas: spread.posiciones.map((pos, i) => ({
      posicion: pos,
      arcano: cartas[i].arcano,
      invertida: cartas[i].invertida
    }))
  };

  pintarMesa(ultimaLectura);
  pintarSintesisLocal(ultimaLectura);
  el('resultado').classList.remove('oculto');
  el('bloque-sintesis').classList.remove('oculto');

  setTimeout(() => {
    el('resultado').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);

  el('estado-ia').textContent = '';
  guardarHistorial(ultimaLectura);
}

/* ───────── Pintar mesa ───────── */

function pintarMesa(lectura) {
  const mesa = el('mesa');
  mesa.innerHTML = '';
  lectura.cartas.forEach((c, idx) => {
    const lado = c.invertida ? c.arcano.rev : c.arcano.up;
    const slot = document.createElement('div');
    slot.className = 'carta-slot';
    slot.style.animationDelay = `${idx * 0.12}s`;
    slot.innerHTML = `
      <div class="carta-visual ${c.invertida ? 'invertida' : ''}">
        <div class="carta-numero">${c.arcano.simbolo}</div>
        <div class="carta-icono">✦</div>
      </div>
      <div class="carta-info">
        <div class="posicion">${c.posicion.nombre}</div>
        <div class="posicion-sentido">${c.posicion.sentido}</div>
        <h3>${c.arcano.nombre} <span class="orientacion">${c.invertida ? '(invertida)' : '(derecha)'}</span></h3>
        <div class="arquetipo">Arquetipo: ${c.arcano.arquetipo}</div>
        <div class="palabras-clave">
          ${lado.palabras.map(p => `<span class="palabra">${p}</span>`).join('')}
        </div>
        <div class="significado">${lado.significado}</div>
      </div>
    `;
    mesa.appendChild(slot);
  });
}

/* ───────── Síntesis local ───────── */

function pintarSintesisLocal(lectura) {
  const parrafos = [];

  if (lectura.pregunta) {
    parrafos.push(`Sobre la pregunta «${escaparTexto(lectura.pregunta)}», la psique responde no con datos sino con imágenes: los arquetipos que aparecen a continuación son las voces internas que hoy tienen algo que decir al respecto.`);
  } else {
    parrafos.push('Esta tirada refleja las corrientes arquetípicas activas en este momento, más allá de una pregunta formulada en palabras.');
  }

  lectura.cartas.forEach(c => {
    const lado = c.invertida ? c.arcano.rev : c.arcano.up;
    parrafos.push(`En la posición «${c.posicion.nombre}», ${c.arcano.nombre.toLowerCase()} ${c.invertida ? '(invertida)' : ''} trae el arquetipo de ${c.arcano.arquetipo.toLowerCase()}: ${lado.significado}`);
  });

  if (lectura.cartas.length > 1) {
    const nombres = lectura.cartas.map(c => c.arcano.nombre).join(', ');
    parrafos.push(`Leídas en conjunto (${nombres}), estas cartas no dan una respuesta cerrada, sino un mapa provisional del territorio interior que la pregunta remueve. El siguiente paso del proceso de individuación no es obedecer a la carta, sino dialogar con lo que en ti reconoce —o resiste— esa imagen.`);
  }

  el('sintesis').innerHTML = parrafos.map(p => `<p>${p}</p>`).join('');
}

function escaparTexto(t) {
  const d = document.createElement('div');
  d.textContent = t;
  return d.innerHTML;
}

/* ───────── Interpretación con IA ───────── */

async function generarInterpretacionIA() {
  if (!ultimaLectura) return;
  const boton = el('btn-ia');
  const estado = el('estado-ia');

  boton.disabled = true;
  estado.textContent = 'Consultando al oráculo…';

  const descripcionCartas = ultimaLectura.cartas.map(c => {
    const lado = c.invertida ? c.arcano.rev : c.arcano.up;
    return `- Posición "${c.posicion.nombre}" (${c.posicion.sentido}): ${c.arcano.nombre} ${c.invertida ? 'invertida' : 'derecha'}. Arquetipo junguiano: ${c.arcano.arquetipo}. Palabras clave: ${lado.palabras.join(', ')}.`;
  }).join('\n');

  const prompt = `Eres un intérprete de tarot que trabaja desde la psicología analítica de C. G. Jung, en el espíritu del libro "Jung y el Tarot" de Sallie Nichols: lees los Arcanos Mayores como el "Viaje del Loco", un mapa simbólico del proceso de individuación (relación entre Ego, Persona, Sombra, Anima/Animus y el Self).

No cites ni reproduzcas texto de ningún libro; escribe una interpretación original, cálida y reflexiva, en español, de unas 180-260 palabras, en 2-3 párrafos, dirigida directamente a quien consulta.

Pregunta de quien consulta: "${ultimaLectura.pregunta || '(no especificó una pregunta; busca una reflexión general)'}"

Tirada: ${ultimaLectura.spread.nombre}

Cartas obtenidas:
${descripcionCartas}

Da una interpretación integradora que conecte las cartas entre sí y con la pregunta, evitando predicciones deterministas: habla en términos de tendencias psíquicas, invitaciones a la reflexión y preguntas abiertas, tal como lo haría un enfoque junguiano del tarot como espejo, no como oráculo predictivo.`;

  try {
    const response = await fetch('/api/interpret', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Error del servidor');
    }

    const texto = data.text;

    if (texto) {
      const parrafos = texto.split(/\n+/).filter(Boolean).map(p => `<p>${escaparTexto(p)}</p>`).join('');
      const rotuloOraculo = document.createElement('div');
      rotuloOraculo.className = 'rotulo rotulo-oraculo';
      rotuloOraculo.textContent = 'Voz del oráculo';
      el('sintesis').appendChild(rotuloOraculo);
      el('sintesis').insertAdjacentHTML('beforeend', `<div class="respuesta-ia">${parrafos}</div>`);
      estado.textContent = '';
      boton.remove();
    } else {
      estado.textContent = 'No se obtuvo respuesta del oráculo. Intenta de nuevo.';
    }
  } catch (err) {
    estado.textContent = 'No fue posible consultar al oráculo. Verifica que ANTHROPIC_API_KEY esté configurada en Vercel.';
  } finally {
    boton.disabled = false;
  }
}

function restaurarBotonIA() {
  if (el('btn-ia')) return;
  const boton = document.createElement('button');
  boton.className = 'boton secundario boton-ia';
  boton.id = 'btn-ia';
  boton.textContent = 'Pedir una interpretación más profunda';
  boton.addEventListener('click', generarInterpretacionIA);
  el('bloque-sintesis').insertBefore(boton, el('estado-ia'));
}

/* ───────── Compartir tirada ───────── */

function compartirTirada() {
  if (!ultimaLectura) return;

  const lineas = [
    `☉ El Espejo del Alma — ${ultimaLectura.spread.nombre}`,
    ''
  ];

  if (ultimaLectura.pregunta) {
    lineas.push(`Pregunta: "${ultimaLectura.pregunta}"`, '');
  }

  ultimaLectura.cartas.forEach(c => {
    const orientacion = c.invertida ? ' ↺' : '';
    lineas.push(`• ${c.posicion.nombre}: ${c.arcano.nombre}${orientacion} — ${c.arcano.arquetipo}`);
  });

  lineas.push('', 'https://espejo.bibliosplay.com');

  const texto = lineas.join('\n');

  if (navigator.share) {
    navigator.share({ title: 'El Espejo del Alma', text: texto }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(texto).then(() => {
      el('estado-ia').textContent = 'Tirada copiada al portapapeles.';
    });
  }
}

/* ───────── Historial localStorage ───────── */

function guardarHistorial(lectura) {
  try {
    const historial = JSON.parse(localStorage.getItem('espejo-historial') || '[]');
    historial.unshift({
      fecha: new Date().toISOString(),
      pregunta: lectura.pregunta,
      spread: lectura.spread.nombre,
      cartas: lectura.cartas.map(c => ({
        nombre: c.arcano.nombre,
        invertida: c.invertida,
        posicion: c.posicion.nombre
      }))
    });
    if (historial.length > 20) historial.length = 20;
    localStorage.setItem('espejo-historial', JSON.stringify(historial));
  } catch (e) {}
}

function cargarHistorial() {
  try {
    return JSON.parse(localStorage.getItem('espejo-historial') || '[]');
  } catch (e) {
    return [];
  }
}

function pintarHistorial() {
  const historial = cargarHistorial();
  const contenedor = el('historial');
  if (!contenedor || historial.length === 0) return;

  contenedor.innerHTML = historial.slice(0, 5).map(h => {
    const fecha = new Date(h.fecha).toLocaleDateString('es-CL', { day: 'numeric', month: 'short' });
    const cartas = h.cartas.map(c => `${c.nombre}${c.invertida ? '↺' : ''}`).join(', ');
    return `<div class="historial-item">
      <span class="historial-fecha">${fecha}</span>
      <span class="historial-cartas">${cartas}</span>
    </div>`;
  }).join('');
}

/* ───────── Inicio ───────── */

function iniciar() {
  cargarDatos();
  pintarHistorial();
  el('btn-tirar').addEventListener('click', realizarTirada);
  el('btn-ia').addEventListener('click', generarInterpretacionIA);
  el('btn-nueva').addEventListener('click', () => {
    el('resultado').classList.add('oculto');
    el('bloque-sintesis').classList.add('oculto');
    el('pregunta').value = '';
    el('estado-ia').textContent = '';
    ultimaLectura = null;
    restaurarBotonIA();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  el('btn-compartir').addEventListener('click', compartirTirada);
}

document.addEventListener('DOMContentLoaded', iniciar);
