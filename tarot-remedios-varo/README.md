# 🎨 Tarot Remedios Varo: Juego Digital, Oráculo y Manual

Un mazo surrealista interactivo completo de **78 cartas** inspirado en la iconografía, el misticismo alquímico y el universo pictórico de **Remedios Varo Uranga (1908–1963)**.

---

## 🌟 Descripción del Proyecto

Este tarot rinde homenaje a la genial pintora surrealista hispanomexicana **Remedios Varo**, cuyo arte conjuga la ciencia medieval, los aparatos astronómicos, las tejedoras cósmicas, la alquimia y el viaje iniciático del alma.

Cada una de las **78 cartas** se encuentra asociada a una pintura, arquetipo o concepto plástico de la artista:
- **22 Arcanos Mayores**: Los grandes hitos del viaje psíquico y espiritual (*La Creación de las Aves*, *Hacia la Torre*, *Nacer de Nuevo*, *La Cazadora de Astros*, *Trasmundo*, entre otros).
- **56 Arcanos Menores**: Cuatro palos transmutados en los oficios alquímicos de Varo:
  - 🪄 **Bastos (Fuego)**: Impulso creador, visión y transmutación energética.
  - 🍷 **Copas (Agua)**: Emociones sutiles, corrientes subterráneas y resonancia del alma.
  - 🗡️ **Espadas (Aire)**: Agudeza intelectual, corte de la ilusión y precisión geométrica.
  - 🪙 **Oros / Pentáculos (Tierra)**: Telas cósmicas, materia transmutada, arquitectura orgánica y anclaje físico.

---

## ✨ Características de Máximo Nivel

### 🎵 1. Motor de Audio Procedural Alquímico (Web Audio API)
- **Cero archivos MP3 externos**: La música y los efectos son sintetizados en tiempo real dentro del navegador.
- **3 Ambientes Sonoros**:
  - *El Taller Alquímico*: Drones armónicos cálidos de cuerda cósmica y notas de cristal suspendidas.
  - *La Cazadora de Astros*: Atmósfera en frecuencia de solfeo sagrada a 432 Hz con campanas astrales.
  - *Mecanismos del Destino*: Pulsos mecánicos y tic-tac hipnótico de relojes astronómicos.
- **Efectos Táctiles (SFX)**: Barajado realista sobre fieltro, chasquido de volteo, campanilla de revelación y clics táctiles.

### 🎴 2. Experiencia de Volteo 3D e Inclinación Holográfica
- Cartas con perspectiva tridimensional interactiva (`transform-style: preserve-3d`).
- Se reparten boca abajo con el reverso sagrado del astrolabio y engranajes alquímicos.
- Volteo interactivo individual carta por carta con sonido de revelación o botón de "Revelar todas".
- Efecto de inclinación dinámica y brillo especular que sigue la posición del cursor sobre las cartas descubiertas.
- Selector para activar o desactivar cartas invertidas en las consultas.

### 🔮 3. Cuatro Modos de Tirada Sagrada
1. **Carta del Día (1 Carta)**: Destello oracular y foco de contemplación para la jornada.
2. **El Hilo del Destino (3 Cartas)**: El Pasado (raíz), el Presente (laboratorio vivo) y el Futuro (corriente potencial).
3. **Alquimia de los 4 Elementos (4 Cartas)**: Radiografía de tu Fuego (voluntad), Agua (emoción), Aire (mente) y Tierra (materia).
4. **La Cruz Celta Sagrada (10 Cartas)**: Disposición geométrica auténtica en dos secciones:
   - *La Cruz Central*: Centro (1), Cruce (2), Base (3), Pasado reciente (4), Corona (5) y Futuro cercano (6).
   - *El Báculo Lateral*: Actitud interior (7), Entorno (8), Esperanzas/Miedos (9) y Resultado final (10).

### ⚗️ 4. Motor de Síntesis Oracular Alquímica
- Cálculo automático del equilibrio elemental (predominio de Arcanos Mayores, Fuego, Agua, Aire o Tierra).
- Diagnóstico integrado conectando la pregunta del consultante con las cartas extraídas.
- Botón **"Copiar Lectura Completa"** para compartir la consulta con formato enriquecido.
- Botón **"Guardar en mi Grimorio"** con persistencia en `localStorage`.

### 🔍 5. Galería del Mazo con Búsqueda en Tiempo Real
- Buscador interactivo por nombre de carta, pintura de referencia, año o palabra clave.
- Filtros rápidos por palos y categorías.
- Contador dinámico de cartas filtradas.

### 📖 6. Grimorio Personal (Historial de Consultas)
- Pestaña dedicada con el registro cronológico de todas tus lecturas pasadas.
- Permite revisar las cartas obtenidas, fecha, pregunta y gestionar el historial.

---

## 🚀 Cómo Iniciar la Aplicación

### Opción 1: Con Python (Servidor Local)
Abre una terminal en esta carpeta y ejecuta:
```bash
python serve.py
```
El servidor se iniciará en `http://localhost:8085` y abrirá tu navegador web automáticamente.

### Opción 2: En Windows (.bat)
Haz doble clic en el archivo **`Iniciar_Tarot_Varo.bat`**.

### Opción 3: Apertura Directa
Abre directamente `index.html` en cualquier navegador moderno (Chrome, Edge, Firefox, Brave, Safari).

---

## 🛠️ Estructura del Proyecto

```text
tarot-remedios-varo/
├── index.html                   # Interfaz principal completa y responsiva
├── css/
│   └── styles.css               # Estilos editoriales, componentes 3D y Cruz Celta
├── js/
│   ├── varo-art.js              # Generador vectorial SVG (reverso y sellos)
│   ├── audio-engine.js          # Motor Web Audio API procedural y SFX
│   ├── data.js                  # Metadatos del mazo, palos y tiradas
│   ├── cards-major.js           # Los 22 Arcanos Mayores y análisis de lienzos
│   ├── cards-minor.js           # Los 56 Arcanos Menores organizados por palos
│   └── app.js                   # Lógica oracular, volteo 3D, síntesis y grimorio
├── biblio-nav.js, biblio-nav.css# Barra de navegación entre mazos
├── serve.py                     # Servidor local en Python
├── Iniciar_Tarot_Varo.bat       # Acceso directo para Windows
└── README.md                    # Esta documentación
```

---

## ⚖️ Declaración Legal y Derechos de Autor
Las pinturas de Remedios Varo (1908–1963) pertenecen a sus respectivos herederos, fundaciones y colecciones públicas/privadas (como el Museo de Arte Moderno de México). Este proyecto es un homenaje artístico y pedagógico que referencia los títulos y conceptos poéticos de las obras ofreciendo interpretaciones simbólicas y textos originales sin reproducir comercialmente las telas.
