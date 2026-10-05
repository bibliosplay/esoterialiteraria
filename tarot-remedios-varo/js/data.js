/* ============================================================
   Tarot Remedios Varo — datos generales
   ============================================================ */

const DECK = {
  title: "Tarot Remedios Varo",
  subtitle: "Un mazo surrealista de 78 cartas inspirado en la obra pictórica de Remedios Varo",
  artist: {
    name: "Remedios Varo Uranga",
    born: "16 de diciembre de 1908, Anglès (Girona), España",
    died: "8 de octubre de 1963, Ciudad de México, México",
    bio:
      "Pintora surrealista española exiliada en México tras la Guerra Civil y la Segunda Guerra Mundial. " +
      "Combinó la iconografía esotérica, la alquimia, la ciencia y el misticismo con una técnica meticulosa " +
      "y un humor subversivo. Sus personajes —femeninos, andróginos, laberínticos y precisos— pueblan " +
      "arquitecturas de pesadilla, laboratorios alquímicos, bosques mecánicos y bibliotecas que navegan. " +
      "Varo murió a los 54 años, en plena madurez creativa, dejando un legado de obras que estudiaban la " +
      "transformación de la materia, el tiempo, la memoria y la creación."
  },
  suits: {
    bastos: {
      name: "Bastos",
      element: "Fuego",
      principle: "Caminos, impulso, creación",
      color: "#c96f4a",
      intro:
        "En el universo de Varo los bastos son ejes mágicos: ramas vivas, varas de vidriero, péndulos, " +
        "instrumentos que miden el devenir. Representan la voluntad creadora, el empuje iniciático y la " +
        "energía que pone en movimiento los demás palos."
    },
    copas: {
      name: "Copas",
      element: "Agua",
      principle: "Aguas, emociones, memoria",
      color: "#6b7fd7",
      intro:
        "Copas son los cuencos, las fuentes, los ríos y las barcas de Varo: la emoción hecha paisaje. " +
        "En su obra el agua aparece como placenta del universo, espejo lunar y camino hacia la huida o el reencuentro."
    },
    espadas: {
      name: "Espadas",
      element: "Aire",
      principle: "Cortes, ideas, precisión",
      color: "#a7a3b8",
      intro:
        "Las espadas de Varo no hieren: separan. Son escalpelos del relojero, punzones del tejedor de destinos, " +
        "líneas de fuga que atraviesan la bruma. Rigen el pensamiento, la lucidez, la decisión y el desprendimiento."
    },
    oros: {
      name: "Oros",
      element: "Tierra",
      principle: "Cuerpo, materia, oficio",
      color: "#d8b264",
      intro:
        "Los oros remiten al oficio alquímico en su fase más densa: panes, piedras, telas bordadas, catedrales " +
        "vegetales y las esferas que sostienen los personajes de Varo. Es el reino de lo tangible, lo acumulado, lo construido."
    }
  },
  spreads: {
    one: {
      name: "Carta del día",
      description:
        "Una sola carta extraída del mazo para sintonizar la energía del día. Observa su escena, su símbolo y el consejo: es el microclima de tu jornada."
    },
    three: {
      name: "Pasado · Presente · Futuro",
      description:
        "Tres cartas: la primera teje el pasado como los hilos del destino; la segunda ilumina el presente en su laboratorio; la tercera esboza la corriente que viene hacia ti."
    },
    celtic: {
      name: "Cruz Celta",
      description:
        "Diez posiciones que recrean el andamiaje de un problema: corazón, cruce, fundamentos, pasado lejano, coronación, futuro cercano, actitud propia, entorno, esperanzas y resultado."
    }
  }
};

const CELTIC_SLOTS = [
  "Corazón de la cuestión",
  "Lo que cruza o se opone",
  "Fundamentos del asunto",
  "Pasado remoto",
  "Lo que corona la cuestión",
  "Futuro cercano",
  "Tu actitud interior",
  "El entorno exterior",
  "Esperanzas y miedos",
  "Resultado final"
];

const THREE_SLOTS = ["Pasado", "Presente", "Futuro"];

const MAJOR_SYMBOLS = ["✦", "☾", "☀", "♁", "⚗", "⌛", "⚱", "☍", "✷", "✹", "☍", "♁"];