# Tarot de las Criaturas de Hieronymus Bosch (El Bosco)

Una aplicación web interactiva completa, autónoma e inmersiva dedicada al universo pictórico, moral y alquímico de **Hieronymus Bosch** (*El Bosco*, c. 1450 - 1516).

---

## 🌟 Características Principales

### 🎴 1. Mazo Completo de 22 Arcanos Mayores
- **Bestiario Auténtico**: Cada carta está mapeada a una de las criaturas, monstruos o escenas emblemáticas de El Bosco extraídas de sus obras maestras: *El Jardín de las Delicias*, *Las Tentaciones de San Antonio*, *El Carro de Heno*, *El Prestidigitador*, *El Juicio Final* y *El Caminante*.
- **Iconografía Completa**:
  - Título en español, latín e inscripción tradicional.
  - Criatura protagonista y pintura de procedencia.
  - Significado al derecho (Luz / Consejo) y significado invertido (Sombra / Advertencia).
  - Citas alegóricas, palabras clave y explicación del simbolismo de la criatura.
  - Imágenes locales en alta calidad de cada detalle pictórico.

### 🔮 2. Tres Tipos de Tiradas Sagradas
1. **El Ojo de San Antonio (1 Carta)**: Consejo directo, claridad inmediata y foco de meditación diaria.
2. **El Tríptico de las Delicias (3 Cartas)**:
   - *Tabla Izquierda (El Edén)*: El Pasado, origen inconsciente y semilla primordial.
   - *Tabla Central (Las Delicias)*: El Presente, el deseo, los apegos y el conflicto moral vivo.
   - *Tabla Derecha (El Infierno Musical)*: El Futuro, advertencia kármica y lección trascendente.
3. **La Cruz Grotesca del Juicio (5 Cartas)**:
   - *Centro*: El Alma del consultante en la encrucijada.
   - *Flanco Izquierdo*: La Tentación seductora o distracción.
   - *Flanco Derecho*: El Juicio o la prueba exterior tangible.
   - *Raíz Inferior*: La Lechuza del subconsciente y sabiduría reprimida.
   - *Ápice Superior*: La Cúpula de Cristal y la resolución espiritual final.

### ✨ 3. Efectos Visuales 3D y Volteo de Cartas
- Cartas con perspectiva tridimensional interactiva (`transform-style: preserve-3d`).
- Efecto de volteo (*flip card*) hiperrealista al hacer clic en cada carta cubierta.
- Efecto de inclinación dinámica y paralaje holográfico al desplazar el cursor sobre las cartas reveladas.
- Reverso gótico ornamentado con el ojo místico y filigrana de oro.
- Selector para activar o desactivar cartas invertidas en las lecturas.

### 🎵 4. Música y Paisaje Sonoro Gótico (Web Audio API)
- **Sintetizador Procedural Integrado**: No depende de descargas de audio externas; la música se sintetiza directamente en el navegador con Web Audio API nativo.
- **3 Ambientes Sonoros**:
  - *Abadía en Penumbra*: Drones en Re menor medieval (acorde dorio de zanfona, coro y campanas de abadía lejanas).
  - *El Infierno Musical*: Tensión espectral bosquiana con tritono y atmósfera profunda de catacumbas.
  - *El Canto del Edén*: Tonalidad luminosa y armónicos celestiales.
- **Efectos Sonoros Táctiles (SFX)**:
  - Sonido de deslizamiento de cartas sobre terciopelo al barajar y repartir.
  - Chasquido suave de pergamino al voltear cada carta.
  - Campanilla mística con reverberación catedralicia al revelar cada arcano.
- Controles de encendido/apagado, selección de ambiente, regulador de volumen y silenciador.

### 🐉 5. Galería del Bestiario (Visor del Mazo)
- Visualización de las 22 cartas con motor de búsqueda en tiempo real (por nombre, criatura o palabra clave).
- Filtros por reinos espirituales: *Todos*, *El Edén*, *Las Delicias*, *El Infierno* y *Peregrinación*.
- Modal de inspección detallada con imagen ampliada, cita, etimología en latín, significados en ambas polaridades y análisis artístico.

### 📜 6. Códice de las Criaturas (Manual Explicativo)
- Libro interactivo integrado con 5 capítulos exhaustivos:
  1. *El Universo Simbólico de Hieronymus Bosch*: Contexto histórico y alquímico.
  2. *Las Tres Tiradas Sagradas*: Guía paso a paso de cada disposición.
  3. *Luz y Sombra*: El significado de las cartas al derecho e invertidas.
  4. *Los Cuatro Reinos de la Obra*: Geografía espiritual de sus lienzos.
  5. *Ritual de Consulta*: Protocolo de concentración, respeto y meditación.

---

## 🚀 Cómo Iniciar la Aplicación

### Opción 1: Con Python (Servidor Local)
Abre una terminal en esta carpeta y ejecuta:
```bash
python serve.py
```
El servidor se iniciará en `http://localhost:8087` y abrirá tu navegador predeterminado.

### Opción 2: En Windows (.bat)
Haz doble clic en el archivo **`Iniciar_Tarot.bat`**.

### Opción 3: Apertura Directa
Abre directamente el archivo `index.html` en Google Chrome, Microsoft Edge, Mozilla Firefox o tu navegador preferido.

---

## 📜 Licencia y Fuentes
- Obras pictóricas originales de Hieronymus Bosch (El Bosco, c. 1450–1516), de dominio público.
- Textos, adaptaciones alegóricas y diseño de la aplicación desarrollados para fines de arte interactivo, apreciación cultural y aprendizaje.
