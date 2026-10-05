# El Libro de la Suerte: Buena o Mala Fortuna
### Videojuego Web Interactivo basado en la obra de Papus (Dr. Gérard Encausse)

> *«La suerte no es un azar ciego: es el resultado de la armonía entre la voluntad del hombre y las corrientes invisibles del Universo.»*
> — **Papus (Dr. Gérard Encausse)**

---

## 🌟 Descripción del Proyecto

Esta aplicación web es un videojuego interactivo de adivinación cabalística, astrología práctica, quiromancia y transmutación de la voluntad, directamente inspirado en la obra clásica ***El libro de la suerte: buena o mala fortuna*** del médico y ocultista francés **Gérard Encausse (Papus)**, fundador de la Orden Martinista y una de las figuras más influyentes del esoterismo finisecular de París.

En esta experiencia, el consultante descubre que la "fortuna" no es una casualidad ciega, sino una ciencia de correspondencias cósmicas, ritmos planetarios y educación de la voluntad.

---

## 🎮 Modos de Juego y Módulos Interactivos

### 1. 🔮 El Oráculo del Zodíaco Doble y las Tablas de Papus
- **5 Esferas de Consulta:**
  1. *Amor y Vínculos* (Afectos, reconciliaciones, lealtad y parejas).
  2. *Fortuna, Negocios y Azar* (Inversiones, especulación, deudas y juegos).
  3. *Destino, Vocación y Viajes* (Nuevos rumbos, mudanzas y misión de vida).
  4. *Salud, Vitalidad y Armonía* (Equilibrio biológico y medicina oculta).
  5. *Pruebas, Enemigos y Juicios* (Litigios, envidias y triunfo moral).
- **Rueda Zodiacal Interactiva en Canvas:** Gira con física realista y clics audibles al compás de los 12 signos solares.
- **Veredictos de Papus:** Clasificación entre *Signo de Suerte Mayor*, *Signo de Suerte Menor* o *Advertencia Astral*, indicando la hora planetaria favorable, talismán activo y el aforismo hermético de Papus.

### 2. 🔢 La Magia de los Números y Reducción Teosófica
- **Cálculo de Reducción Teosófica:** Descompone la fecha de nacimiento para extraer el Número del Destino ($1$ al $9$, más números maestros $11$ y $22$).
- **Guematría del Nombre:** Conversión del nombre completo según la tabla de valor numérico hermético.
- **Tríada de Números de la Suerte:** Números sagrados recomendados para juegos de azar y toma de decisiones.
- **Gráfico de Marea Astral (Canvas Biorritmo):** Muestra los picos cósmicos favorables y los días críticos de contracción a lo largo de un ciclo de 30 días, destacando el día actual.

### 3. 🖐️ La Mano del Destino: Quiromancia Esotérica Interactiva
- **Diagrama SVG Interactivo de la Palma:**
  - **7 Montes Planetarios:** Júpiter (ambición/mando), Saturno (ciencia/fatalidad), Apolo/Sol (gloria/riqueza), Mercurio (comercio/astucia), Marte (valor/resistencia), Luna (imaginación/viajes), Venus (vitalidad/amor).
  - **4 Líneas Maestras:** Línea del Destino/Saturno, Línea de la Vida, Línea de la Cabeza y Línea del Sol.
- **La Prueba Clave de Papus:** Comparador anatómico interactivo entre el dedo Índice (Júpiter) y el Anular (Apolo) para determinar si la fortuna proviene de la autoridad de mando o de la intuición para el azar.

### 4. 🕯️ El Rito de Transmutación: «Hacer Volver la Suerte Perdida»
- Minijuego ritual de 3 fases para invertir rachas desfavorables:
  - **Fase I: Purificación:** Identifica y disuelve las 4 fugas astrales (*Desaliento, Avaricia, Dispersión y Rencor*) con campanas de transmutación.
  - **Fase II: Elección del Sello:** Consagración del glifo planetario (Júpiter, Sol, Venus o Mercurio).
  - **Fase III: Impronta de la Voluntad:** Botón *Hold-to-charge* para cargar el talismán con osciladores Web Audio hasta el 100%.
  - **Generación y Descarga:** Opción de exportar una estampa gráfica talismánica en formato PNG de alta calidad.

### 5. 📜 Códice Hermético y Diario de Oráculos
- Síntesis biográfica de Gérard Encausse y las leyes martinistas de la fortuna.
- **Grimorio Personal:** Persistencia en `localStorage` de todas las tiradas, números cabalísticos y talismanes consagrados.

---

## 🎨 Características Técnicas & Audiovisuales

- **Estética Victoriana Martinista (1890):** Paleta en oro alquímico, terciopelo amatista, azul noche cabalístico y marcos grabados.
- **Canvas Cósmico:** Animación en tiempo real de estrellas doradas y geometría sagrada con hexagramas.
- **Motor Web Audio API Procedural:**
  - Campanas tibetanas con frecuencias de solfeo sagradas (432Hz y 528Hz).
  - Efectos mecánicos de giro y clics de la rueda zodiacal.
  - Drone de meditación en 108Hz con modulación LFO para relajación y concentración.
  - Cero dependencias externas; funciona 100% offline.

---

## 🚀 Cómo Ejecutar el Juego

### Opción 1: Con Python (Recomendado)
Abre una terminal en la carpeta del proyecto y ejecuta:
```bash
python serve.py
```
El servidor se iniciará en `http://localhost:8088` (o el siguiente puerto libre) y abrirá automáticamente tu navegador.

### Opción 2: Apertura Directa en el Navegador
Al ser una WebApp estática autónoma, puedes hacer doble clic en `index.html` o abrirlo en cualquier navegador moderno (Chrome, Edge, Firefox, Brave, Safari).

---

## 📜 Créditos y Fuentes
- Obra original: *El libro de la suerte: buena o mala fortuna* por el Dr. Gérard Encausse (Papus), París.
- Desarrollado en Antigravity para aprendizaje, arte interactivo y exploración cultural y esotérica.
