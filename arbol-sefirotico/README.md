# 🌳 El Árbol Sefirótico: Tu Mapa Personal

Una aplicación web interactiva que calcula tu mapa energético sobre el **Árbol de la Vida de la Cábala** (Etz Jaím) a partir de tu nombre y fecha de nacimiento.

---

## 🌟 Descripción y Fundamentos

El **Árbol Sefirótico** es uno de los símbolos centrales del misticismo hermético y la Cábala hebrea. Representa los diez aspectos o emanaciones a través de los cuales la Conciencia Primordial se manifiesta en el cosmos y en la psique humana:

1. **Kéter (Corona)**: Voluntad, propósito original y unidad.
2. **Jojmá (Sabiduría)**: Chispa creativa, intuición y visión.
3. **Biná (Entendimiento)**: Estructura, forma, límites y discernimiento.
4. **Jésed (Misericordia)**: Amor incondicional, generosidad y expansión.
5. **Guevurá (Fuerza)**: Rigor, disciplina, límites justos y coraje.
6. **Tiféret (Belleza)**: Armonía, equilibrio del corazón y centro integrador.
7. **Nétsaj (Victoria)**: Perseverancia, emoción, deseo creador y resistencia.
8. **Hod (Gloria/Humildad)**: Intelecto, palabra, comunicación y adaptabilidad.
9. **Yesod (Fundamento)**: El inconsciente, los sueños, la memoria y los lazos emocionales.
10. **Malkut (El Reino)**: El cuerpo físico, la tierra, la manifestación y los actos concretos.

### Los Tres Pilares
- **Pilar de la Misericordia (Derecho)**: Jojmá, Jésed, Nétsaj (expansión, fuerza activa).
- **Pilar del Rigor (Izquierdo)**: Biná, Guevurá, Hod (contención, orden, estructura).
- **Pilar del Equilibrio (Central)**: Kéter, Tiféret, Yesod, Malkut (conciencia, integración).

---

## ⚙️ Cómo Funciona el Cálculo

1. **Reducción Teosófica**: Se suman los dígitos de la fecha de nacimiento y los valores numéricos (Guematría) de las vocales (Alma), consonantes (Personalidad) y nombre completo.
2. **Distribución Energética Ponderada**: Cada fuente aporta un peso proporcional a las sefirot correspondientes.
3. **Flujo por los 22 Senderos**: Cada sefirá transfiere un 20% de su energía a sus vecinas conectadas mediante las 22 letras del alfabeto hebreo.
4. **Algoritmo de Camino de Transformación (BFS)**: Mediante búsqueda en anchura sobre la matriz de adyacencia de los 22 caminos, la app traza la ruta evolutiva óptima desde tu **punto de mayor fortaleza** (sefirá dominante) hasta tu **área de crecimiento** (sefirá con mayor potencial de aprendizaje).

---

## 🚀 Características Técnicas

- **Cero Dependencias**: JavaScript moderno vanilla, CSS nativo y SVG reactivo.
- **Gráficos SVG Interactivos**: Muestra el Árbol interactivo donde cada sefirá y camino responde al clic con sus correspondencias y prácticas recomendadas.
- **Historial de Perfiles**: Almacenamiento local mediante `localStorage` para guardar y alternar entre distintos perfiles.
- **Modo Claro / Oscuro**: Selector de tema integrado con persistencia visual y respeto por `prefers-color-scheme`.
- **Accesibilidad**: Navegación por teclado (`tabindex`, `Enter`, `Space`) y soporte para lectores de pantalla.

---

## 💻 Cómo Ejecutar la Aplicación

### Opción 1: Con Python
```bash
python serve.py
```
Abre automáticamente tu navegador en `http://localhost:8086`.

### Opción 2: En Windows (.bat)
Haz doble clic en **`Iniciar_Arbol.bat`**.

### Opción 3: Apertura Directa
Abre el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Edge, Firefox, Safari).

---

## 📜 Licencia y Uso
Herramienta de reflexión simbólica y psicológica. Código libre para fines educativos y personales.
