# ☉ El Espejo del Alma: Tarot Junguiano

Un tarot de los arquetipos inspirado en la lectura analítica de los Arcanos Mayores según la psicología de **Carl Gustav Jung**.

**El Espejo del Alma** interpreta los 22 Arcanos Mayores a través de la psicología analítica junguiana (Persona, Sombra, Anima/Animus, Self), en la línea que propone Sallie Nichols en su obra fundamental *Jung y el Tarot: un viaje arquetípico*. No es un oráculo adivinatorio determinista: es una herramienta reflexiva para dialogar con los propios arquetipos interiores y mapear el proceso de individuación.

---

## ✨ Características Principales

- **22 Arcanos Mayores**: Significados en posición derecha e invertida, arquetipo junguiano rector y palabras clave.
- **3 Modos de Tirada Sagrada**:
  1. *El Espejo del Instante (1 carta)*: Foco de atención, meditación diaria y presencia.
  2. *El Umbral (3 cartas)*: Lo visible / consciente, la tensión inconsciente y la síntesis integradora.
  3. *Camino de Individuación (5 cartas)*: El Viaje del Loco a través de las 5 estaciones del Self (Origen, Desafío, Inconsciente, Fuerza de Integración y Desenlace del Alma).
- **Síntesis Local Automática**: Algoritmo offline que relaciona las cartas extraídas con la pregunta formulada por el consultante.
- **Interpretación Ampliada con IA (Opcional)**: Función serverless (`api/interpret.js`) lista para desplegar en Vercel con la API de Anthropic Claude.
- **Historial Local**: Persistencia de las últimas tiradas en `localStorage`.
- **Compartir Tirada**: Copiado automático al portapapeles o menú nativo de compartir (`Web Share API`).
- **Diseño Hermético Nocturno**: Estética mística con tipografías *Cormorant Garamond*, *EB Garamond* y *Cinzel*.

---

## 🗂️ Estructura del Proyecto

```
espejo-del-alma/
├── index.html          # Interfaz principal
├── style.css           # Estilos visuales temáticos
├── script.js           # Lógica de barajado, tiradas y síntesis
├── data.json           # Arcanos mayores, significados y tiradas
├── biblio-nav.js       # Barra de navegación entre mazos
├── biblio-nav.css      # Estilos de la barra de navegación
├── package.json        # Metadatos del proyecto y scripts
├── vercel.json         # Configuración de despliegue en Vercel
├── serve.py            # Servidor local en Python
├── Iniciar_Espejo.bat  # Acceso directo para Windows
└── api/
    └── interpret.js    # Función serverless para interpretación con IA
```

---

## 🚀 Cómo Ejecutar la Aplicación

### Opción 1: Con el Servidor Local de Python (Recomendado)
Abre una terminal en la carpeta y ejecuta:
```bash
python serve.py
```
Se iniciará en `http://localhost:8089` y abrirá automáticamente tu navegador.

### Opción 2: En Windows (.bat)
Haz doble clic en **`Iniciar_Espejo.bat`**.

### Opción 3: Despliegue en Vercel (Con Soporte para IA)
Para habilitar el botón opcional *"Pedir una interpretación más profunda"*:
1. Instala el CLI de Vercel (`npm i -g vercel`) o conecta el repositorio a tu panel de Vercel.
2. Agrega la variable de entorno `ANTHROPIC_API_KEY` con tu clave de Anthropic.
3. Despliega con `vercel --prod`.

### Opción 4: GitHub Pages
Puedes publicarlo directamente como sitio estático activando GitHub Pages en tu repositorio. La aplicación funcionará al 100% de manera autónoma con su síntesis local integrada (el botón de IA mostrará una indicación de que requiere backend).

---

## 🛠️ Tecnologías

- HTML5 semántico, CSS3 modular y JavaScript ES6+ vanilla (sin frameworks pesados).
- Tipografías: Google Fonts (*Cinzel*, *EB Garamond*, *Cormorant Garamond*).
- Serverless API en Node.js para Vercel.

---

## 📄 Licencia y Créditos
Inspirado en la obra de Carl Gustav Jung y Sallie Nichols (*Jung y el Tarot*). Proyecto de uso reflexivo, educativo y personal.
