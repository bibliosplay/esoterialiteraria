# 📜 Esoteria Literaria

> **Colección interactiva de arte hermético, tarots renacentistas y surrealistas, cábala y psicología arquetípica.**

Una suite de aplicaciones web autónomas dedicadas a la exploración estética, filosófica y oracular de grandes tradiciones y creadores: **Hieronymus Bosch**, **Remedios Varo**, **Carl Gustav Jung**, **Aleister Crowley**, **Papus (Dr. Gérard Encausse)** y la **Cábala Hermética**.

---

## 🏛️ Catálogo de Aplicaciones

| # | Aplicación | Directorio | Tradición / Inspiración | Características Principales |
|---|---|---|---|---|
| **1** | [**Tarot de El Bosco**](tarot-el-bosco/) | `tarot-el-bosco/` | Hieronymus Bosch (*El Bosco*, 1450–1516) | 22 Arcanos Mayores con arte original, 3D flip card, 3 tiradas, paisaje sonoro gótico procedural. |
| **2** | [**Tarot Remedios Varo**](tarot-remedios-varo/) | `tarot-remedios-varo/` | Remedios Varo Uranga (1908–1963) | 78 Cartas completas (Mayores y Menores en 4 palos alquímicos), galería con filtros, manual completo y 3 tiradas. |
| **3** | [**El Espejo del Alma**](espejo-del-alma/) | `espejo-del-alma/` | C. G. Jung & Sallie Nichols | Tarot junguiano reflexivo, 22 Arcanos Mayores, síntesis local y soporte opcional para IA vía Anthropic Claude en Vercel. |
| **4** | [**El Árbol Sefirótico**](arbol-sefirotico/) | `arbol-sefirotico/` | Cábala Hermética & Guematría | Cálculo del mapa personal (10 sefirot, 22 senderos), algoritmo de camino óptimo (BFS), SVG interactivo y tema claro/oscuro. |
| **5** | [**El Libro de la Suerte**](el-libro-de-la-suerte-papus/) | `el-libro-de-la-suerte-papus/` | Dr. Gérard Encausse (*Papus*, 1890) | Rueda zodiacal con física, mapa quiromántico SVG, biorritmo cósmico, rito de transmutación y síntesis Web Audio. |
| **6** | [**El Libro de las Mentiras**](el-libro-de-las-mentiras/) | `el-libro-de-las-mentiras/` | Aleister Crowley (*Liber 333*, 1913) | Los 7 Portales iniciáticos del Abismo, Cripta de acertijos de Choronzon, Oráculo de las 93 paradojas y drone ritual de 108Hz. |

---

## 🌟 Principios de Diseño y Calidad

- **100% Estándares Web Abiertos**: Desarrolladas exclusivamente con HTML5 semántico, CSS3 moderno y JavaScript Vanilla ES6+.
- **Zero Runtime Dependencies**: No requieren `npm install`, frameworks pesados ni compiladores para su funcionamiento oracular.
- **Audio Procedural Nativo**: Los paisajes sonoros y efectos utilizan la **Web Audio API** del navegador; no requieren descargas de archivos `.mp3` externos y funcionan offline.
- **Navegación Unificada**: El archivo `index.html` en la raíz funciona como **Portal Maestro** para explorar y ejecutar cualquiera de los módulos.
- **Doble Modo de Despliegue**: Pueden publicarse juntas en un monorepo (por ejemplo, en GitHub Pages) o aislarse como repositorios independientes, ya que cada carpeta contiene su propia documentación, configuración y archivos estáticos.

---

## 🚀 Inicio Rápido en Local

### Opción A: Con Python (Recomendado)
Abre una terminal en esta carpeta y ejecuta:
```bash
python serve.py
```
Se iniciará un servidor web local en `http://localhost:8080` y abrirá automáticamente el **Portal Maestro** en tu navegador por defecto.

### Opción B: En Windows con Doble Clic (.bat)
Haz doble clic en **`Iniciar_Todo.bat`** en la raíz del proyecto.
- Si tienes Python instalado, iniciará el servidor local sin restricciones CORS.
- Si no, abrirá el portal directamente en tu navegador.

### Opción C: Ejecutar un Proyecto Específico
Cada carpeta de proyecto cuenta con sus propios lanzadores independientes:
```bash
# Ejemplo: ejecutar solo el Tarot de El Bosco
cd tarot-el-bosco
python serve.py          # O doble clic en Iniciar_Tarot.bat
```

---

## 🗂️ Estructura del Repositorio

```text
EsoteriaLiteraria/
├── index.html                   # Portal Maestro (Hub de navegación)
├── serve.py                     # Servidor local multi-proyecto
├── Iniciar_Todo.bat             # Lanzador directo para Windows
├── .gitignore                   # Exclusiones estandarizadas de Git
├── .gitattributes               # Normalización de fines de línea y UTF-8
├── README.md                    # Esta documentación
│
├── tarot-el-bosco/              # Tarot Hieronymus Bosch
│   ├── index.html, README.md, serve.py, Iniciar_Tarot.bat, .gitignore
│   ├── css/style.css
│   ├── js/ (audio-engine.js, deck-data.js, tarot-app.js)
│   └── assets/cards/ (22 cartas + reverso)
│
├── tarot-remedios-varo/         # Tarot Surrealista de 78 cartas
│   ├── index.html, README.md, serve.py, Iniciar_Tarot_Varo.bat, .gitignore
│   ├── biblio-nav.css, biblio-nav.js
│   ├── css/styles.css
│   └── js/ (app.js, cards-major.js, cards-minor.js, data.js)
│
├── espejo-del-alma/             # Tarot Junguiano de Arquetipos
│   ├── index.html, README.md, serve.py, Iniciar_Espejo.bat, .gitignore
│   ├── style.css, script.js, data.json, package.json, vercel.json
│   ├── biblio-nav.css, biblio-nav.js
│   └── api/interpret.js
│
├── arbol-sefirotico/            # Mapa Cabalístico Personal
│   ├── index.html, README.md, serve.py, Iniciar_Arbol.bat, .gitignore
│   ├── styles.css, app.js
│
├── el-libro-de-la-suerte-papus/ # Astrología, Quiromancia y Rituales
│   ├── index.html, README.md, serve.py, Iniciar_Papus.bat, .gitignore
│   ├── styles.css, audio.js, data.js, game.js
│
└── el-libro-de-las-mentiras/    # Filosofía Thelémica de Aleister Crowley
    ├── index.html, README.md, serve.py, Iniciar_Crowley.bat, .gitignore
    ├── styles.css, audio.js, data.js, game.js
```

---

## 🌐 Guía de Despliegue en la Web

### 1. GitHub Pages (Monorepo Completo)
1. Sube este repositorio a GitHub.
2. En GitHub, ve a **Settings > Pages**.
3. En **Branch**, selecciona `main` y carpeta `/ (root)`.
4. En pocos segundos tendrás tu portal público en: **`https://bibliosplay.github.io/esoterialiteraria/`**.
   - Todas las rutas relativas (`tarot-el-bosco/`, `tarot-remedios-varo/`, `espejo-del-alma/`, etc.) funcionarán automáticamente.

### 2. Vercel / Netlify
Para `espejo-del-alma`, si deseas aprovechar la función de interpretación con IA:
1. Conecta la carpeta `espejo-del-alma/` en Vercel (Root Directory: `espejo-del-alma`).
2. Configura en las variables de entorno: `ANTHROPIC_API_KEY=tu_api_key`.
3. Vercel compilará la función serverless `api/interpret.js` automáticamente.

---

## 📦 Instrucciones para Subir los Cambios a GitHub

El repositorio local ya está inicializado y vinculado a `https://github.com/bibliosplay/esoterialiteraria`. Para enviar el proyecto completo al remoto:

```bash
git push -u origin main
```

---

## ⚖️ Licencia y Créditos
- **Hieronymus Bosch (El Bosco)**: Obras originales de dominio público.
- **Remedios Varo**: Proyecto con fines educativos y de apreciación estética; referencia a obras protegidas por derechos de autor de sus herederos sin reproducción comercial directa.
- **Carl G. Jung & Sallie Nichols**: Enfoque inspirado en *Jung y el Tarot* (Ed. Kairós).
- **Dr. Gérard Encausse (Papus)**: Basado en *El libro de la suerte* (París).
- **Aleister Crowley**: Basado en *The Book of Lies* (*Liber CCCXXXIII*, 1913, dominio público).

El código fuente de esta suite se distribuye con fines de preservación cultural, educación y exploración artística interactiva.
