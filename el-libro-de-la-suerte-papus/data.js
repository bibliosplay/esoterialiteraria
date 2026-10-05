/**
 * EL LIBRO DE LA SUERTE - PAPUS (Dr. Gérard Encausse, 1865-1916)
 * Base de Datos Esotérica, Correspondencias Astrológicas, Tablas de la Suerte y Quiromancia
 */

const PAPUS_DATA = {
  // Biografía y Principios Herméticos de Papus
  author: {
    name: "Dr. Gérard Encausse (Papus)",
    dates: "1865 - 1916",
    title: "Gran Maestro de la Orden Martinista y Doctor en Medicina",
    motto: "«La suerte no es un azar ciego: es el resultado de la armonía entre la voluntad del hombre y las corrientes invisibles del Universo.»",
    principles: [
      {
        title: "La Ley del Triple Plano",
        desc: "El ser humano vive simultáneamente en el Plano Físico (fatalidad corporal), Plano Astral (pasiones y corrientes de atracción) y Plano Divino (voluntad pura y providencia). La suerte opera en el plano astral cuando la voluntad física se alinea con la ley cósmica."
      },
      {
        title: "La Reducción Teosófica",
        desc: "Todo número complejo, fecha o nombre contiene una esencia única revelable sumando sus cifras hasta llegar a un número simple del 1 al 9, o a los números maestros 11 y 22."
      },
      {
        title: "El Ritmo de las Mareas Astrales",
        desc: "Así como la Luna rige las mareas del océano, las conjunciones planetarias abren compuertas de abundancia o contracción. Quien actúa a contratiempo cree tener 'mala suerte'; quien comprende el ritmo navega con viento favorable."
      },
      {
        title: "La Transmutación de la Voluntad",
        desc: "La mala suerte no es un castigo, sino una disonancia mental o moral. Al cambiar la actitud interna y consagrar un talismán de intención positiva, la polaridad astral se invierte inmediatamente."
      }
    ]
  },

  // 1. EL ORÁCULO DEL DESTINO: 5 Esferas de Consulta con Tablas de Papus
  oracleCategories: [
    {
      id: "amor",
      name: "Amor y Vínculos",
      icon: "❤️",
      planet: "Venus",
      element: "Agua",
      description: "Afectos, lealtad de amistades, armonía conyugal, uniones y reconciliaciones.",
      questions: [
        "¿Es sincero el afecto de la persona en quien pienso?",
        "¿Se disiparán pronto los celos o desacuerdos presentes?",
        "¿Llegará una nueva unión duradera en este ciclo cósmico?",
        "¿Debo dar el primer paso o aguardar en silencio?",
        "¿Existe un lazo kármico profundo en esta relación?"
      ],
      verdicts: [
        {
          type: "mayor",
          badge: "Signo de Suerte Mayor",
          symbol: "🌟",
          planetaryRuler: "Venus en Trígono con Júpiter",
          hour: "Hora de Venus (Viernes al amanecer)",
          title: "El Triunfo del Corazón Sagrado",
          text: "Las corrientes astrales están plenamente armonizadas. El afecto es auténtico y perdurable. Toda duda actual se desvanecerá antes del próximo ciclo lunar. Una palabra dulce o un acto desinteresado desatará la bendición esperada.",
          talisman: "Sello de Anael (Ángel del Amor Puro)",
          papusQuote: "«El amor que busca elevar al otro nunca es vencido por la distancia ni por el tiempo.»"
        },
        {
          type: "mayor",
          badge: "Signo de Suerte Mayor",
          symbol: "✨",
          planetaryRuler: "Sol en la Casa VII",
          hour: "Hora del Sol (Domingo al mediodía)",
          title: "La Alianza Iluminada",
          text: "Se forjará o consolidará un pacto de mutua lealtad. Las murmuraciones externas pierden toda fuerza ante la claridad de vuestra afinidad espiritual. Momento ideal para declaraciones solemnes o compromisos formales.",
          talisman: "Pentagrama del Sol y la Rosa",
          papusQuote: "«Cuando dos voluntades puras se unen, forman un centro de luz que ningún pesar oscurece.»"
        },
        {
          type: "menor",
          badge: "Signo de Suerte Menor",
          symbol: "🌓",
          planetaryRuler: "Luna Creciente en Cáncer",
          hour: "Hora de la Luna (Lunes por la noche)",
          title: "El Velo de la Paciencia",
          text: "La fortuna amorosa es favorable, pero se encuentra en germinación. Hay sentimientos sinceros pero velados por temores o malentendidos pasados. No precipites exigencias; la suavidad vencerá cualquier barrera.",
          talisman: "Amatista de la Serenidad",
          papusQuote: "«No sacudas el árbol antes de tiempo: la fruta madura caerá sola en tus manos.»"
        },
        {
          type: "menor",
          badge: "Signo de Suerte Menor",
          symbol: "⚖️",
          planetaryRuler: "Mercurio en Libra",
          hour: "Hora de Mercurio (Miércoles al atardecer)",
          title: "La Necesidad del Diálogo Franco",
          text: "El éxito del vínculo depende de una conversación clara y sin dobleces. Hay afecto, pero la imaginación ha creado fantasmas innecesarios. Habla desde la verdad serena.",
          talisman: "Caduceo de la Concordancia",
          papusQuote: "«El silencio prolongado engendra monstruos; la palabra sincera devuelve la luz.»"
        },
        {
          type: "advertencia",
          badge: "Advertencia Astral",
          symbol: "⚠️",
          planetaryRuler: "Marte en Oposición a Venus",
          hour: "Vigilia de Protección (Martes)",
          title: "Disonancia Pasional y Orgullo",
          text: "Corrientes de susceptibilidad y orgullo amenazan la paz. Uno de los dos busca imponer su voluntad en lugar de comprender. Papus aconseja retirarse del conflicto inmediato, evitar reproches y esperar tres días antes de decidir.",
          talisman: "Cuarzo Blanco de Transmutación",
          papusQuote: "«El orgullo es el gran destructor de la dicha; quien sabe ceder con dignidad se corona vencedor del destino.»"
        }
      ]
    },
    {
      id: "fortuna",
      name: "Fortuna, Negocios y Azar",
      icon: "🪙",
      planet: "Júpiter",
      element: "Tierra",
      description: "Finanzas, juegos de azar, inversiones, contratos, ganancias imprevistas y prosperidad.",
      questions: [
        "¿Es propicio arriesgar capital o participar en el azar en estos días?",
        "¿Prosperará la empresa, negocio o proyecto que tengo entre manos?",
        "¿Recuperaré lo que consideraba perdido o adeudado?",
        "¿Debo asociarme o proceder con total independencia económica?",
        "¿Hacia qué sector fluyen mis números de prosperidad?"
      ],
      verdicts: [
        {
          type: "mayor",
          badge: "Signo de Suerte Mayor",
          symbol: "👑",
          planetaryRuler: "Júpiter en Trígono con el Sol",
          hour: "Hora de Júpiter (Jueves al mediodía)",
          title: "El Cuerno de la Abundancia Hermética",
          text: "La corriente de oro astral fluye hacia tus proyectos. Todo acto de iniciativa audaz y honesta encontrará eco multiplicador. Si juegas al azar, hazlo guiado por tus números personales calculados en la Reducción Teosófica.",
          talisman: "Talismán de Júpiter en Estaño o Latón Dorado",
          papusQuote: "«El dinero es una fuerza condensada; cuando se mueve al servicio de una idea noble, el universo multiplica sus fuentes.»"
        },
        {
          type: "mayor",
          badge: "Signo de Suerte Mayor",
          symbol: "💎",
          planetaryRuler: "Mercurio Directo en Tauro",
          hour: "Hora de Mercurio (Miércoles al mediodía)",
          title: "El Golpe Maestro de la Fortuna",
          text: "Una propuesta inesperada o una intuición repentina abrirá una fuente imprevista de ingresos. Confía en tu primer impulso intelectual. Los números pares y los múltiplos de tu Número de Destino están cargados de bendición.",
          talisman: "Moneda de Plata con el Sello de Salomón",
          papusQuote: "«La fortuna no premia a los perezosos, sino a quienes tienen el ojo atento y la mano pronta.»"
        },
        {
          type: "menor",
          badge: "Signo de Suerte Menor",
          symbol: "📈",
          planetaryRuler: "Saturno en Armonía con Mercurio",
          hour: "Hora de Saturno (Sábado al alba)",
          title: "La Prosperidad por el Orden y el Ahorro",
          text: "La ganancia llegará de forma segura pero gradual. No es el momento de apuestas impulsivas o especulaciones ciegas; la fortuna exige cimientos sólidos. Consolida deudas y verás florecer la estabilidad en 40 días.",
          talisman: "Piedra Imanada con Granos de Trigo",
          papusQuote: "«El grano sembrado en tierra firme rinde cien por uno; el lanzado al viento se pierde en la nada.»"
        },
        {
          type: "menor",
          badge: "Signo de Suerte Menor",
          symbol: "⚖️",
          planetaryRuler: "Venus en Trígono con Urano",
          hour: "Hora de Venus (Viernes por la tarde)",
          title: "La Ocasión Favorable Oculta",
          text: "Habrá una pequeña ganancia o alivio financiero a través de una persona conocida o un trabajo secundario. Mantén discreción absoluta sobre tus proyectos económicos.",
          talisman: "Bolsa de Seda Verde con Laurel y Canela",
          papusQuote: "«Quien proclama su buena suerte antes de verla realizada, invita a los envidiosos a dispersarla.»"
        },
        {
          type: "advertencia",
          badge: "Advertencia Astral",
          symbol: "🛑",
          planetaryRuler: "Saturno Retrógrado en Escorpio",
          hour: "Hora de Saturno (Evitar apuestas los Sábados)",
          title: "Veda de Riesgos y Trampa de Ilusión",
          text: "Flujo astral de contracción. Papus advierte terminantemente abstenerse de juegos de azar, firmas de pagarés o préstamos en esta fase lunar. Hay riesgo de engaño por promesas exageradas. Conserva tus recursos.",
          talisman: "Sello de Miguel Arcángel de Preservación",
          papusQuote: "«El hombre prudente guarda su trigo cuando ruge la tormenta y solo siembra cuando el cielo sonríe.»"
        }
      ]
    },
    {
      id: "destino",
      name: "Destino, Vocación y Viajes",
      icon: "🧭",
      planet: "Mercurio",
      element: "Aire",
      description: "Cambios de rumbo, viajes por mar o tierra, descubrimientos personales y misión vital.",
      questions: [
        "¿Es este el momento propicio para emprender un viaje o cambio de residencia?",
        "¿Hacia qué camino me convoca mi verdadera vocación según mis números?",
        "¿Se abrirá la puerta que actualmente parece cerrada con llave?",
        "¿Debo romper con lo conocido y arriesgarme a lo nuevo?",
        "¿Me favorecerán las personas lejanas o del extranjero?"
      ],
      verdicts: [
        {
          type: "mayor",
          badge: "Signo de Suerte Mayor",
          symbol: "⛵",
          planetaryRuler: "Mercurio en Conjunción con Urano",
          hour: "Hora de Mercurio (Miércoles al alba)",
          title: "Viento en Popa: El Gran Horizonte",
          text: "Los caminos se despejan. Si tienes planificado un viaje o mudanza, este traerá expansión de conciencia y contactos altamente provechosos. Tu destino te llama a salir de la rutina; atrévete a cruzar el umbral.",
          talisman: "La Rueda de Ezequiel / La Brújula Dorada",
          papusQuote: "«El alma que teme al movimiento se estanca; el universo entero es una sinfonía de eterno viaje hacia la luz.»"
        },
        {
          type: "mayor",
          badge: "Signo de Suerte Mayor",
          symbol: "🦅",
          planetaryRuler: "Júpiter en la Casa IX",
          hour: "Hora de Júpiter (Jueves por la mañana)",
          title: "La Revelación de la Misión Oculta",
          text: "Un encuentro imprevisto con un mentor, libro o maestro cambiará el rumbo de tus aspiraciones. La Providencia te sitúa en el lugar justo para que tus talentos brillen con esplendor público.",
          talisman: "El Ojo de Horus en Lapislázuli",
          papusQuote: "«Cuando el discípulo está preparado, los velos del destino se apartan sin esfuerzo alguno.»"
        },
        {
          type: "menor",
          badge: "Signo de Suerte Menor",
          symbol: "🚶",
          planetaryRuler: "Luna en Sagitario",
          hour: "Hora de la Luna (Lunes al mediodía)",
          title: "El Viaje Preparatorio",
          text: "El cambio de rumbo es favorable, pero requiere una etapa previa de aprendizaje o preparación logística. No partas con prisas; cada detalle organizado será un escudo en el camino.",
          talisman: "Citrino del Caminante Sabio",
          papusQuote: "«El paso firme del sabio llega más lejos que la carrera desenfrenada del imprudente.»"
        },
        {
          type: "menor",
          badge: "Signo de Suerte Menor",
          symbol: "🕯️",
          planetaryRuler: "Sol en la Casa IV",
          hour: "Hora del Sol (Domingo al atardecer)",
          title: "La Raíz Antes de la Rama",
          text: "Antes de expandirte hacia tierras lejanas, ordena tus asuntos domésticos y familiares. La fuerza para conquistar el exterior proviene de la paz de tu propio templo interior.",
          talisman: "Hoja de Roble Seca con el Sello del Sol",
          papusQuote: "«Quien no tiene paz bajo su propio techo, difícilmente la hallará al otro lado del océano.»"
        },
        {
          type: "advertencia",
          badge: "Advertencia Astral",
          symbol: "🌫️",
          planetaryRuler: "Neptuno en Cuadratura con Mercurio",
          hour: "Hora de Mercurio (Pospón decisiones los Miércoles nublados)",
          title: "Bruma en el Sendero: Espejismos",
          text: "Las apariencias engañan. Una propuesta de traslado o viaje de negocios contiene cláusulas oscuras o intenciones ocultas. Papus recomienda aplazar firmas importantes hasta la próxima luna llena.",
          talisman: "Turmalina Negra de Discernimiento",
          papusQuote: "«No sigas la linterna del fuego fatuo: te conducirá a las ciénagas. Espera la luz limpia de la aurora.»"
        }
      ]
    },
    {
      id: "salud",
      name: "Salud, Vitalidad y Armonía",
      icon: "🌿",
      planet: "Sol",
      element: "Fuego",
      description: "Equilibrio psicofísico, energía vital, superación de dolencias y purificación áurica.",
      questions: [
        "¿Recuperaré la fuerza y vitalidad que siento menguada?",
        "¿Qué elemento natural restaura mi equilibrio astral?",
        "¿Cuál es el mejor momento para iniciar un régimen o tratamiento?",
        "¿Afecta la negatividad de terceros a mi estado físico?",
        "¿Cómo armonizar mi cuerpo según la medicina oculta de Papus?"
      ],
      verdicts: [
        {
          type: "mayor",
          badge: "Signo de Suerte Mayor",
          symbol: "☀️",
          planetaryRuler: "Sol en Trígono con Marte",
          hour: "Hora del Sol (Al salir el astro rey)",
          title: "El Fuego Vital Regenerador",
          text: "La fuerza curativa de la Naturaleza (el Arcano Solar) inunda tus células. Se disipan la pesadez y el agotamiento. Respira hondo al aire libre mirando hacia el este: tu cuerpo se recarga como un acumulador eléctrico.",
          talisman: "Heliotropo / Jaspe Rojo Solar",
          papusQuote: "«El cuerpo es el laboratorio donde el espíritu transmuta las sales de la vida. Confía en el médico invisible que habita en ti.»"
        },
        {
          type: "mayor",
          badge: "Signo de Suerte Mayor",
          symbol: "🌱",
          planetaryRuler: "Júpiter en Cáncer",
          hour: "Hora de Júpiter (Jueves por la mañana)",
          title: "La Fuente Nutricia",
          text: "Excelente pronóstico de recuperación. Un remedio vegetal, cambio de alimentación o descanso en contacto con agua pura devolverá la armonía perdida. La mente serena sana al cuerpo físico.",
          talisman: "Jaspe Verde con Signo de Esculapio",
          papusQuote: "«La serenidad del alma es el mejor bálsamo que la medicina humana pueda jamás recetar.»"
        },
        {
          type: "menor",
          badge: "Signo de Suerte Menor",
          symbol: "💧",
          planetaryRuler: "Luna en Piscis",
          hour: "Hora de la Luna (Baño lustral nocturno)",
          title: "Purificación de Toxinas Astrales",
          text: "Tu fatiga actual no es puramente física, sino por sobrecarga psíquica o ambientes cargados de quejas ajenas. Papus recomienda un baño con sales de mar, ruda o romero para limpiar el aura.",
          talisman: "Sal Marina Consagrada y Cuarzo Transparente",
          papusQuote: "«Limpia la atmósfera de tu aposento como limpias el vaso antes de beber agua pura.»"
        },
        {
          type: "menor",
          badge: "Signo de Suerte Menor",
          symbol: "⚖️",
          planetaryRuler: "Saturno en Virgo",
          hour: "Hora de Saturno (Sábado)",
          title: "La Disciplina del Ritmo Biológico",
          text: "El cuerpo exige regularidad: horas fijas de sueño y nutrición sobria. La salud volverá en la medida en que reduzcas los excesos nerviosos y la prisa artificial del mundo moderno.",
          talisman: "Ágata de Musgo",
          papusQuote: "«La templanza es la llave de oro que cierra las puertas a la enfermedad y abre las de la longevidad.»"
        },
        {
          type: "advertencia",
          badge: "Advertencia Astral",
          symbol: "⚡",
          planetaryRuler: "Marte en Cuadratura con Saturno",
          hour: "Hora de Marte (Modera esfuerzos los Martes)",
          title: "Agotamiento Nervioso e Inflamación",
          text: "Advertencia de sobreexigencia. Querer forzar la máquina física conducirá a un colapso transitorio o accidentes por distracción. Detén la marcha hoy mismo y descansa sin culpa.",
          talisman: "Ojo de Tigre Protector",
          papusQuote: "«Quien combate sin tregua contra su propio cuerpo termina derrotado por su propia sombra.»"
        }
      ]
    },
    {
      id: "pruebas",
      name: "Pruebas, Enemigos y Juicios",
      icon: "⚔️",
      planet: "Marte",
      element: "Fuego",
      description: "Conflictos legales, desacuerdos, envidias veladas, superación de obstáculos y victoria.",
      questions: [
        "¿Saldré victorioso en el litigio, prueba o examen que enfrento?",
        "¿Quién me perjudica a espaldas mías y cómo neutralizarlo?",
        "¿Se hará justicia ante la falsedad cometida contra mí?",
        "¿Debo acudir a la confrontación directa o a la ley?",
        "¿Qué escudo astral corta la malevolencia ajena?"
      ],
      verdicts: [
        {
          type: "mayor",
          badge: "Signo de Suerte Mayor",
          symbol: "🛡️",
          planetaryRuler: "Marte en Trígono con Júpiter",
          hour: "Hora de Marte (Martes al amanecer)",
          title: "La Espada de la Verdad Triunfante",
          text: "Victoria total sobre la iniquidad. La verdad saldrá a la luz con tal contundencia que los enemigos quedarán confundidos por sus propias estratagemas. La ley y la justicia moral se inclinan a tu favor.",
          talisman: "Espada de San Miguel con el Pentagrama Flamígero",
          papusQuote: "«La flecha envenenada que el malvado dispara contra el justo es devuelta por el viento astral al pecho de quien la arrojó.»"
        },
        {
          type: "mayor",
          badge: "Signo de Suerte Mayor",
          symbol: "⚖️",
          planetaryRuler: "Júpiter en Libra",
          hour: "Hora de Júpiter (Jueves al mediodía)",
          title: "El Juicio de Salomón",
          text: "Un árbitro ecuánime o una resolución legal impecable desbaratará las pretensiones de tus contrarios. Recibirás reparación moral y material. Mantén la calma y la sobriedad.",
          talisman: "La Balanza de Bronce y Sello de Justicia",
          papusQuote: "«La verdadera justicia no busca la venganza, sino el restablecimiento del equilibrio cósmico.»"
        },
        {
          type: "menor",
          badge: "Signo de Suerte Menor",
          symbol: "🤫",
          planetaryRuler: "Mercurio Retrógrado en Escorpio",
          hour: "Hora de Mercurio (Miércoles nocturno)",
          title: "La Estrategia del Silencio",
          text: "No es momento de gritos ni de confrontación abierta. El adversario cometerá un error fatal si tú guardas silencio absoluto. Deja que hable y se desenmascare por sí mismo.",
          talisman: "Rosa de Harpócrates (Dedos en los labios)",
          papusQuote: "«El silencio es la mayor muralla contra la que se estrella la ira del insensato.»"
        },
        {
          type: "menor",
          badge: "Signo de Suerte Menor",
          symbol: "🛡️",
          planetaryRuler: "Saturno en Trígono con el Sol",
          hour: "Hora de Saturno (Sábado al mediodía)",
          title: "La Paciencia Implacable",
          text: "La prueba tomará más tiempo del deseado, pero cada día transcurrido debilita la posición de tus detractores. Persevera sin desmayo; el tiempo es tu más leal aliado.",
          talisman: "Ónice Negro con Cruz Tau Martinista",
          papusQuote: "«El tiempo tritura las intrigas como la rueda del molino tritura el grano.»"
        },
        {
          type: "advertencia",
          badge: "Advertencia Astral",
          symbol: "🐍",
          planetaryRuler: "Marte en Conjunción con la Luna Negra (Lilith)",
          hour: "Vigilia de Purificación",
          title: "Asechanza de Traición y Malquerencia",
          text: "Existe una persona cercana que oculta su animadversión bajo una máscara de adulación o lisonja. No reveles tus planes ni secretos a nadie en este período. Activa de inmediato el Rito de Protección de Papus.",
          talisman: "Medalla de San Benito con Aceite de Cedro",
          papusQuote: "«Cuídate más de la sonrisa del traidor que del puñal desnudo del enemigo declarado.»"
        }
      ]
    }
  ],

  // 2. REDUCCIÓN TEOSÓFICA Y GUEMATRÍA DE PAPUS
  gematriaTable: {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
    J: 1, K: 2, L: 3, M: 4, N: 5, Ñ: 5, O: 6, P: 7, Q: 8, R: 9,
    S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
  },

  theosophicalNumbers: {
    1: {
      archetype: "El Mago / El Principio Generador",
      planet: "Sol",
      element: "Fuego",
      day: "Domingo",
      metal: "Oro",
      fortuneNature: "Iniciativa, liderazgo, independencia absoluta y genialidad.",
      luckyNumbers: [1, 10, 19, 28, 55],
      advice: "Tu suerte depende de tu propia audacia; no esperes que otros tomen las riendas por ti."
    },
    2: {
      archetype: "La Gran Sacerdotisa / La Puerta del Misterio",
      planet: "Luna",
      element: "Agua",
      day: "Lunes",
      metal: "Plata",
      fortuneNature: "Intuición profunda, diplomacia, clarividencia y alianzas silenciosas.",
      luckyNumbers: [2, 11, 20, 29, 38],
      advice: "Escucha el susurro de tu voz interior; tus sueños y corazonadas son más certeros que las estadísticas frías."
    },
    3: {
      archetype: "La Emperatriz / La Fecundidad Cósmica",
      planet: "Júpiter",
      element: "Aire",
      day: "Jueves",
      metal: "Estaño",
      fortuneNature: "Expansión, elocuencia, encanto social, prosperidad material y creatividad.",
      luckyNumbers: [3, 12, 21, 30, 66],
      advice: "Comparte tu alegría y proyecta generosidad; la fortuna jupiteriana se multiplica cuando circula libremente."
    },
    4: {
      archetype: "El Emperador / La Piedra Cúbica",
      planet: "Urano / Saturno",
      element: "Tierra",
      day: "Sábado",
      metal: "Plomo / Hierro",
      fortuneNature: "Construcción sólida, disciplina inquebrantable, finanzas seguras y ley.",
      luckyNumbers: [4, 13, 22, 31, 40],
      advice: "Tu buena estrella está cimentada en el método y la perseverancia; rehúye todo enriquecimiento fácil que no tenga raíz."
    },
    5: {
      archetype: "El Hierofante / El Pentagrama Sagrado",
      planet: "Mercurio",
      element: "Éter / Aire",
      day: "Miércoles",
      metal: "Azogue / Mercurio",
      fortuneNature: "Magia práctica, libertad, viajes, elocuencia, adaptabilidad y cambios providenciales.",
      luckyNumbers: [5, 14, 23, 32, 50],
      advice: "Abraza el cambio sin miedo. Tu suerte florece en el movimiento y en la innovación constante."
    },
    6: {
      archetype: "Los Dos Caminos / El Amor Hermético",
      planet: "Venus",
      element: "Tierra / Agua",
      day: "Viernes",
      metal: "Cobre",
      fortuneNature: "Armonía, belleza, fortuna conyugal, hogar próspero y elecciones afortunadas.",
      luckyNumbers: [6, 15, 24, 33, 42],
      advice: "Elige siempre por el camino del corazón generoso; las dudas se disipan cuando actúas con lealtad."
    },
    7: {
      archetype: "El Carro de Hermes / El Vencedor Astral",
      planet: "Neptuno / Luna",
      element: "Agua",
      day: "Lunes",
      metal: "Platino",
      fortuneNature: "Triunfo sobre los obstáculos materiales, videncia espiritual, suerte en tierras lejanas.",
      luckyNumbers: [7, 16, 25, 34, 77],
      advice: "Eres el auriga de tu propio carro; domina tus pasiones contrarias y ninguna fuerza humana podrá detenerte."
    },
    8: {
      archetype: "La Balanza de la Justicia / El Lemniscato",
      planet: "Saturno",
      element: "Tierra",
      day: "Sábado",
      metal: "Bronce",
      fortuneNature: "Karma justo, restitución divina, equilibrio de finanzas, poder ejecutivo y legado.",
      luckyNumbers: [8, 17, 26, 35, 88],
      advice: "Siembra justicia y cosecharás oro. El 8 devuelve exactamente lo que das, multiplicado por diez."
    },
    9: {
      archetype: "El Ermitaño / La Lámpara del Sabio",
      planet: "Marte / Sol Oculto",
      element: "Fuego Secreto",
      day: "Martes",
      metal: "Hierro Forjado",
      fortuneNature: "Sabiduría trascendental, protección providencial invisible, cierre triunfal de ciclos.",
      luckyNumbers: [9, 18, 27, 36, 99],
      advice: "No temas a la soledad fecunda. Tu mayor riqueza brota de tu retiro interior y de tu luz propia."
    },
    11: {
      archetype: "La Fuerza Alquímica (Número Maestro)",
      planet: "Sol Espiritual",
      element: "Fuego Divino",
      day: "Domingo",
      metal: "Electro (Oro y Plata)",
      fortuneNature: "Carisma sobrehumano, magnetismo personal, transmutación de dificultades en gloria.",
      luckyNumbers: [11, 22, 33, 44, 77],
      advice: "Posees una fuerza magnética superior; úsala solo para sanar y elevar, jamás para someter egoístamente."
    },
    22: {
      archetype: "El Gran Arquitecto / El Loco Sabio (Número Maestro)",
      planet: "Plutón / Cosmos",
      element: "Todos",
      day: "Jueves",
      metal: "Meteorito / Oro Puro",
      fortuneNature: "Realización de utopías, poder para manifestar imperios materiales y espirituales.",
      luckyNumbers: [22, 4, 8, 44, 88],
      advice: "Tus ideas trascienden tu época; construye con paciencia cósmica, el mundo entero te seguirá."
    }
  },

  // 3. QUIROMANCIA DE PAPUS: Montes Planetarios y Líneas del Destino
  palmistry: {
    mounts: [
      {
        id: "jupiter",
        name: "Monte de Júpiter",
        location: "En la base del dedo Índice",
        planet: "Júpiter",
        traits: [
          { status: "prominente", desc: "Ambición noble, autoridad natural, inclinación al mando, fortuna en la madurez y protección providencial en pleitos." },
          { status: "normal", desc: "Sentido del honor, respeto a las leyes, sociabilidad sana y estabilidad." },
          { status: "deprimido", desc: "Timidez, falta de confianza en el propio destino; requiere educar la voluntad." }
        ]
      },
      {
        id: "saturno",
        name: "Monte de Saturno",
        location: "En la base del dedo Medio (Cordial)",
        planet: "Saturno",
        traits: [
          { status: "prominente", desc: "Gusto por la ciencia profunda y el ocultismo, espíritu reflexivo, riqueza lenta pero inamovible." },
          { status: "normal", desc: "Prudencia, sentido del deber, lealtad a los compromisos de largo plazo." },
          { status: "deprimido", desc: "Atracción por la fatalidad o ligereza; peligro de desaliento transitorio." }
        ]
      },
      {
        id: "apolo",
        name: "Monte de Apolo (El Sol)",
        location: "En la base del dedo Anular",
        planet: "Sol",
        traits: [
          { status: "prominente", desc: "El gran signo de la suerte de Papus: gloria, belleza, talento artístico, ganancias por fama o invenciones brillantes." },
          { status: "normal", desc: "Buen gusto, refinamiento, suerte moderada en compras e intercambios." },
          { status: "deprimido", desc: "Espíritu prosaico, ceguera hacia las oportunidades artísticas o intuitivas." }
        ]
      },
      {
        id: "mercurio",
        name: "Monte de Mercurio",
        location: "En la base del dedo Meñique (Auricular)",
        planet: "Mercurio",
        traits: [
          { status: "prominente", desc: "Astucia comercial genial, persuasión oratoria, éxito fulgurante en negocios y especulaciones rápidas." },
          { status: "normal", desc: "Aptitud para las ciencias prácticas y el trato con personas." },
          { status: "deprimido", desc: "Ingenuidad en asuntos de contratos y dinero; requiere verificar dos veces toda firma." }
        ]
      },
      {
        id: "marte",
        name: "Monte de Marte",
        location: "Bajo Mercurio y en el ángulo del Pulgar",
        planet: "Marte",
        traits: [
          { status: "prominente", desc: "Valentía a toda prueba, capacidad para resurgir de las cenizas financieras tras cualquier crisis." },
          { status: "normal", desc: "Firmeza de carácter y paciencia en la adversidad." },
          { status: "deprimido", desc: "Cansancio ante las batallas de la vida; necesidad de tonificar la voluntad con ejercicios de respiración." }
        ]
      },
      {
        id: "luna",
        name: "Monte de la Luna",
        location: "En la base exterior de la palma opuesta al pulgar",
        planet: "Luna",
        traits: [
          { status: "prominente", desc: "Poder de imaginación fecundísima, viajes por mar, videncia onírica y suerte en tierras lejanas." },
          { status: "normal", desc: "Sensibilidad poética y empatía hacia los demás." },
          { status: "deprimido", desc: "Falta de imaginación o mente demasiado hipercrítica que bloquea la intuición." }
        ]
      },
      {
        id: "venus",
        name: "Monte de Venus",
        location: "En la raíz prominente del Pulgar",
        planet: "Venus",
        traits: [
          { status: "prominente", desc: "Vitalidad física rebosante, simpatía arrolladora, encanto con el sexo opuesto y generosidad de rey." },
          { status: "normal", desc: "Buen corazón, afectos sinceros y alegría de vivir." },
          { status: "deprimido", desc: "Frialdad afectiva, aislamiento voluntario o egoísmo estéril." }
        ]
      }
    ],

    fingerTest: {
      title: "La Prueba Clave de Papus: El Índice (Júpiter) vs. El Anular (Apolo)",
      description: "Extiende tu mano plana y compara la longitud del dedo Índice con el Anular:",
      options: [
        {
          id: "anular_mas_largo",
          label: "El Anular (Apolo) es más largo que el Índice",
          prognosis: "Signo Mayor de la Suerte y el Azar. Papus afirma que quien posee el Anular más largo está dotado de 'tacto providencial': tiene intuición para el juego, sentido estético refinado y una estrella protectora en las inversiones."
        },
        {
          id: "indice_mas_largo",
          label: "El Índice (Júpiter) es más largo que el Anular",
          prognosis: "Signo de la Voluntad y el Mando. Tu fortuna proviene de tu capacidad de organización y gobierno sobre otros. No confíes tu dinero al azar ciego: haz fortuna mediante empresas dirigidas por tu propia autoridad."
        },
        {
          id: "iguales",
          label: "El Índice y el Anular tienen exactamente la misma longitud",
          prognosis: "El Equilibrio Hermético. Rara condición de balance perfecto entre la ambición práctica y la intuición divina. Capacidad para convertir cualquier idea abstracta en realidad rentable."
        }
      ]
    },

    lines: [
      {
        id: "destino",
        name: "Línea del Destino o de Saturno",
        description: "Cruza la palma verticalmente hacia el dedo Medio.",
        states: [
          {
            id: "recta_fuerte",
            title: "Recta, continua y nítida",
            verdict: "Suerte Inquebrantable. Carrera ascendente sin sobresaltos. Cada esfuerzo da frutos duraderos."
          },
          {
            id: "nace_luna",
            title: "Nace en el Monte de la Luna",
            verdict: "Fortuna por Favor Público o Pareja. Tu éxito depende del aprecio colectivo o de un matrimonio venturoso."
          },
          {
            id: "ondulada_cortada",
            title: "Quebrada u ondulada",
            verdict: "Fortuna en Olas. Períodos de auge seguidos de reinvenciones necesarias. El autodominio salva de las caídas."
          }
        ]
      },
      {
        id: "vida",
        name: "Línea de la Vida (Monte de Venus)",
        description: "Rodea la base del pulgar trazando un semicírculo.",
        states: [
          {
            id: "larga_rosada",
            title: "Larga, limpia y coloreada",
            verdict: "Vitalidad Fértil. Longevidad y resistencia biológica excelente contra dolencias y fatigas."
          },
          {
            id: "bifurcada_final",
            title: "Bifurcada en el extremo inferior",
            verdict: "Doble Residencia y Viajes. Vejez próspera en un lugar distante de donde naciste."
          },
          {
            id: "corta_fuerte",
            title: "Corta pero bien grabada",
            verdict: "Fuerza Concentrada. Calidad de vida intensa; la voluntad compensa cualquier fragilidad transitoria."
          }
        ]
      },
      {
        id: "cabeza",
        name: "Línea de la Cabeza (Mercuriana)",
        description: "Cruza transversalmente el centro de la palma.",
        states: [
          {
            id: "recta_marte",
            title: "Recta hacia el Monte de Marte",
            verdict: "Mente Analítica y Práctica. Genio para las matemáticas, contratos, ingeniería y finanzas frías."
          },
          {
            id: "desciende_luna",
            title: "Se inclina suavemente hacia el Monte de la Luna",
            verdict: "Imaginación Creativa y Videncia. Talento literario, artístico o esotérico con capacidad de monetización."
          }
        ]
      },
      {
        id: "sol_apolo",
        name: "Línea de Apolo o del Sol (Línea de la Fama)",
        description: "Sube verticalmente hacia el dedo Anular.",
        states: [
          {
            id: "presente_marcada",
            title: "Claramente visible y brillante",
            verdict: "El Don del Favorito del Sol. Protección contra la pobreza extrema; reconocimiento público y honores."
          },
          {
            id: "ausente_difusa",
            title: "Apenas insinuada o ausente",
            verdict: "Constructor Silencioso. Tus triunfos serán íntimos y materiales más que de aplauso público."
          }
        ]
      }
    ]
  },

  // 4. EL RITO DE TRANSMUTACIÓN DE PAPUS ("Para Hacer Volver la Suerte Perdida")
  transmutationRitual: {
    energyLeaks: [
      {
        id: "desaliento",
        title: "El Fantasma del Desaliento",
        symptom: "Sensación de que 'todo sale mal' y que la lucha es inútil.",
        purgeAffirmation: "«Disuelvo la parálisis mental. La chispa divina en mi interior es inextinguible.»",
        color: "#6c5ce7"
      },
      {
        id: "avaricia",
        title: "La Trampa de la Avaricia y el Miedo a la Carencia",
        symptom: "Retener con pánico los recursos, bloqueando el flujo natural de dar y recibir.",
        purgeAffirmation: "«El Universo es océano inagotable. Al abrir mi mano para bendecir, la abro para recibir.»",
        color: "#fdcb6e"
      },
      {
        id: "dispersion",
        title: "El Torbellino de la Dispersión",
        symptom: "Comenzar diez empresas a la vez y abandonar cada una al primer obstáculo.",
        purgeAffirmation: "«Concentro mi voluntad como el rayo de sol bajo la lente: un solo punto, una sola victoria.»",
        color: "#00cec9"
      },
      {
        id: "rencor",
        title: "El Veneno del Rencor y la Envidia",
        symptom: "Compararse amargamente con la suerte ajena y rumiar agravios pasados.",
        purgeAffirmation: "«Corto todo cordón de amargura. Bendigo el éxito de mi prójimo para invocar el mío propio.»",
        color: "#d63031"
      }
    ],

    planetarySigils: [
      {
        planet: "Júpiter",
        name: "Sello de la Expansión y la Opulencia",
        metal: "Estaño / Oro",
        angel: "Zadkiel",
        formula: "ELOHIM GIBOR - FORTUNA VENI",
        bestFor: "Dinero estancado, litigios, suerte en juegos y expansión comercial.",
        glyph: "♃",
        symbolName: "Júpiter Imperial"
      },
      {
        planet: "Sol",
        name: "Sello de la Luz y la Resurrección de la Fama",
        metal: "Oro Puro",
        angel: "Miguel",
        formula: "TETRAGRAMMATON - SURGE ET ILLUMINARE",
        bestFor: "Salud quebrantada, abatimiento moral, superación de enemigos y honor.",
        glyph: "☉",
        symbolName: "Sol Invictus"
      },
      {
        planet: "Venus",
        name: "Sello de la Armonía y la Imantación Afectiva",
        metal: "Cobre",
        angel: "Anael",
        formula: "AMOR VINCIT OMNIA - PAX IN TENEBRIS",
        bestFor: "Soledad, discordias en el hogar, reconciliaciones y magnetismo social.",
        glyph: "♀",
        symbolName: "Venus Generatriz"
      },
      {
        planet: "Mercurio",
        name: "Sello de los Negocios Rápidos y la Elocuencia",
        metal: "Plata Viva",
        angel: "Rafael",
        formula: "HERMES TRISMEGISTO - AGIEL MERKURIUS",
        bestFor: "Exámenes, viajes demorados, contratos trabados y acuerdos ágiles.",
        glyph: "☿",
        symbolName: "Caduceo de Hermes"
      }
    ]
  },

  // 5. LOS 22 ARCANOS TALISMÁNICOS DE PAPUS
  talismans22: [
    { number: 1, name: "El Mago", title: "El Principio de la Voluntad", element: "Fuego", key: "Iniciativa Total", aphorism: "«El Mago sabe que el universo obedece a la voluntad firme y pura.»" },
    { number: 2, name: "La Papisa", title: "El Santuario Oculto", element: "Agua", key: "Intuición Silenciosa", aphorism: "«Lo que no se ve con los ojos del cuerpo es más real que lo visible.»" },
    { number: 3, name: "La Emperatriz", title: "La Fecundidad Astral", element: "Tierra Fértil", key: "Abundancia Activa", aphorism: "«Donde hay amor generoso, brota el oro de la tierra.»" },
    { number: 4, name: "El Emperador", title: "La Realización Estable", element: "Tierra Firme", key: "Orden y Poder", aphorism: "«El orden material es el reflejo del orden cósmico.»" },
    { number: 5, name: "El Papa", title: "La Iniciación Superior", element: "Éter", key: "Consejo Sabio", aphorism: "«El puente entre el hombre y el cielo se construye con la rectitud moral.»" },
    { number: 6, name: "El Enamorado", title: "La Prueba de la Elección", element: "Aire", key: "Discernimiento del Alma", aphorism: "«La bifurcación del camino exige pureza de intención.»" },
    { number: 7, name: "El Carro", title: "El Triunfo del Adepto", element: "Fuego Conquistador", key: "Victoria Inminente", aphorism: "«Guía tus impulsos con mano de hierro y conquistarás el mundo.»" },
    { number: 8, name: "La Justicia", title: "El Equilibrio Universal", element: "Aire / Ley", key: "Causa y Efecto", aphorism: "«A cada acto corresponde un fruto matemático en el telar del tiempo.»" },
    { number: 9, name: "El Ermitaño", title: "La Lámpara Velada", element: "Tierra Secreta", key: "Prudencia Sabia", aphorism: "«El manto de la soledad protege el fuego sagrado de las tempestades.»" },
    { number: 10, name: "La Rueda de la Fortuna", title: "El Enigma de la Esfinge", element: "Todos los Elementos", key: "Giro Providencial", aphorism: "«La rueda desciende para volver a subir: quien lo sabe nunca desespera.»" },
    { number: 11, name: "La Fuerza", title: "El Dominio del León", element: "Fuego Domado", key: "Poder Moral", aphorism: "«La dulzura espiritual doblega la furia de la materia más densa.»" },
    { number: 12, name: "El Colgado", title: "La Inversión Espiritual", element: "Agua Sagrada", key: "Sacrificio Fértil", aphorism: "«Renuncia a lo ilusorio para abrazar lo que verdaderamente perdura.»" },
    { number: 13, name: "La Muerte (La Siega)", title: "La Transmutación Radical", element: "Fuego Renovador", key: "Renacimiento", aphorism: "«Lo viejo debe marchitarse para que brote la espiga de oro nuevo.»" },
    { number: 14, name: "La Templanza", title: "La Alquimia del Alma", element: "Agua y Fuego", key: "Regeneración Vital", aphorism: "«Mezcla con paciencia los fluidos opuestos y hallarás el elixir.»" },
    { number: 15, name: "El Diablo (Tifón)", title: "La Fuerza Ciega Encadenada", element: "Tierra Subterránea", key: "Transmutación de Pasiones", aphorism: "«El fuego que quema la casa del necio calienta el hogar del sabio.»" },
    { number: 16, name: "La Torre Destruida", title: "La Caída del Orgullo", element: "Rayo Astral", key: "Ruptura Liberadora", aphorism: "«La torre falsa se derrumba para que la mirada contemple las estrellas libres.»" },
    { number: 17, name: "La Estrella", title: "La Esperanza Inmortal", element: "Agua Celeste", key: "Inspiración Divina", aphorism: "«La noche más oscura precede siempre a la alborada del sol de oro.»" },
    { number: 18, name: "La Luna", title: "El Crepúsculo del Espejismo", element: "Agua Nocturna", key: "Superación de Quimeras", aphorism: "«Atraviesa la niebla del temor: el perro y el lobo guardan la entrada a la verdad.»" },
    { number: 19, name: "El Sol", title: "La Gran Iluminación", element: "Fuego Solar", key: "Felicidad Pura", aphorism: "«Bajo la luz del Sol, la verdad, el amor y la riqueza florecen en unidad.»" },
    { number: 20, name: "El Juicio", title: "El Despertar de la Tumba", element: "Fuego y Sonido", key: "Renovación Total", aphorism: "«La trompeta de la conciencia despierta lo que parecía muerto en tu vida.»" },
    { number: 21, name: "El Mundo", title: "La Corona de los Magos", element: "El Quinto Elemento", key: "Plenitud Cósmica", aphorism: "«El círculo se ha cerrado: eres amo de tu suerte y dueño de tu destino.»" },
    { number: 22, name: "El Loco", title: "El Peregrino del Infinito", element: "El Cero Sagrado", key: "Libertad Absoluta", aphorism: "«Camina sin miedo con tu atado al hombro: los ángeles sostienen tus pasos al borde del abismo.»" }
  ]
};

// Si se ejecuta en Node.js o módulo ES6
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PAPUS_DATA };
}
