/* ============================================================
   Tarot Remedios Varo — 22 Arcanos Mayores
   Cada carta se vincula a una pintura de Remedios Varo.
   ============================================================ */

const MAJOR_CARDS = [
  {
    id: 0,
    type: "major",
    numero: 0,
    nombre: "El Loco",
    glifo: "🐾",
    pintura: "El Vagabundo",
    anio: 1957,
    escena:
      "Un caminante singular, con las alforjas al hombro y una vara luminosa, atraviesa un paisaje levemente " +
      "hostil guiado por la intuición. Varo lo pinta con la despreocupación de quien hace del camino su casa.",
    simbolos: ["la vara de caminante", "el paso hacia lo desconocido", "la compañía invisible", "el horizonte abierto"],
    palabras: ["libertad", "impulso", "nuevo comienzo"],
    vertical:
      "El Loco abre el mazo y lo cierra: es la chispa del comienzo, el paso al vacío que en el mundo de Varo no " +
      "es caída sino vuelo. Indica un salto de fe, la decisión de emprender un camino sin mapa, fiándote del instinto. " +
      "En su obra el vagabundo no mendiga: explora. Aquí, la pintura recuerda que lo esencial es avanzar ligero de equipaje.",
    invertido:
      "Invertido señala imprudencia o temor a dar el salto: el vagabundo se ha quedado mirando el mismo paisaje sin " +
      "atreverse a mover el pie. Puede indicar dispersión, capricho o negarse a madurar. Pregunta: ¿qué miedo te mantiene anclado?",
    consejo:
      "Da el paso. El riesgo que te asusta es, probablemente, el único camino que aún no has explorado. Carga poco y confía en la vara."
  },
  {
    id: 1,
    type: "major",
    numero: 1,
    nombre: "El Mago",
    glifo: "⚗",
    pintura: "La Ciencia Inútil o El Alquimista (Laberinto Mecánico)",
    anio: 1955,
    escena:
      "Un hombre aferrado a una ballesta blanca contempla aparatos y engranajes que giran en torno suyo. La escena " +
      "mezcla el laboratorio y la torre de observación: el alquimista como centro de un mecanismo que él mismo ha inventado.",
    simbolos: ["el aparato circular", "la ballesta blanca", "los engranajes", "la torre interior"],
    palabras: ["voluntad", "destreza", "acción consciente"],
    vertical:
      "El Mago domina el plano del ser: concentra el deseo, la palabra y la herramienta. En Varo el alquimista no " +
      "busca oro falso sino la transformación de sí mismo: todo aparato externo no es más que un espejo de la voluntad. " +
      "Esta carta señala que tienes a tu disposición los instrumentos justos: úsalos con técnica y propósito.",
    invertido:
      "Invertido avisa de manipulación, herramienta mal usada o talento desaprovechado. El mecanismo gira pero nadie lo " +
      "orienta. Puede hablar de trucos, soberbia o de poder hacer las cosas y elegir no hacerlas.",
    consejo:
      "Tienes las piezas. Concéntrate en una sola obra, afina tu técnica y deja que el engranaje trabaje para ti, no al revés."
  },
  {
    id: 2,
    type: "major",
    numero: 2,
    nombre: "La Sacerdotisa",
    glifo: "☾",
    pintura: "La Sorceresse (La Hechicera)",
    anio: 1952,
    escena:
      "La figura oreada entre lo vegetal y lo astral sostiene un cuerno del que manan sustancias. Varo la pinta como " +
      "intérprete de fuerzas invisibles que participan de la naturaleza: cuerpo, hechizo y ciencia fundidos.",
    simbolos: ["el cuerno de la abundancia interior", "la luz que mana", "la fusión con lo vegetal", "el saber oculto"],
    palabras: ["intuición", "misterio", "saber silencioso"],
    vertical:
      "La Sacerdotisa gobierna el mundo oculto, el conocimiento que no se demuestra sino se vivencia. En Varo la hechicera " +
      "no conjura contra nada: mana. La carta invita a escuchar la voz interna, a trabajar con los sueños y los símbolos, " +
      "y a custodiar un conocimiento que aún no necesitas explicar.",
    invertido:
      "Invertida habla de intuición bloqueada, ruido exterior que apaga la voz interior, o de secretos que pesan. " +
      "También de confundir fantasía con realidad o de escuchar demasiadas voces ajenas.",
    consejo:
      "Retírate en silencio. Deja que el saber florezca sin forzarlo y aprende a leer los signos que ya están frente a ti."
  },
  {
    id: 3,
    type: "major",
    numero: 3,
    nombre: "La Emperatriz",
    glifo: "🌿",
    pintura: "Bordando el Manto Terrestre",
    anio: 1961,
    escena:
      "Varias mujeres confinadas en una torre bordan sobre una tela que fluye al exterior y se convierte en montañas, " +
      "ríos y vegetación. Lo que tejen es el mundo mismo: la creación como ofrenda, la materia que nace del hilo.",
    simbolos: ["el telar", "el hilo que se vuelve paisaje", "la torre", "el nacimiento de lo orgánico"],
    palabras: ["creación", "abundancia", "maternidad"],
    vertical:
      "La Emperatriz es la potencia creadora: todo lo que toca se convierte en vida. En el tríptico de Varo, las tejedoras " +
      "producen el mundo ladrillo a ladrillo, rama a rama. La carta anuncia fertilidad, proyectos que germinan, arte, " +
      "cuidado y satisfacción por lo que se construye con las propias manos.",
    invertido:
      "Invertida señala creatividad bloqueada, descuido de lo que se está gestando, exceso de control o poca confianza en " +
      "la propia obra. A veces, una creatividad que se ha vuelto rutina sin asombro.",
    consejo:
      "Tus manos son capaces de tejer mundos. Rodea de cuidado aquello que estás creando y no abandones el telar en el momento clave."
  },
  {
    id: 4,
    type: "major",
    numero: 4,
    nombre: "El Emperador",
    glifo: "🏛",
    pintura: "Arquitectura Vegetal",
    anio: 1962,
    escena:
      "Una estructura semejante a una catedral vegetal se alza desde semillas y raíces: la arquitectura como prolongación " +
      "del cuerpo orgánico. Firmeza que brota y se sostiene a sí misma.",
    simbolos: ["la estructura que emerge", "las raíces", "el orden vertical", "la solidez orgánica"],
    palabras: ["autoridad", "estructura", "fundamento"],
    vertical:
      "El Emperador es el principio que ordena lo caótico y da forma a lo informe. En Varo, la arquitectura vegetal no se " +
      "impone sobre la naturaleza: la continúa. La carta habla de disciplina, de límites sanos, de asumir el mando de un " +
      "proyecto con la firmeza de quien construye sobre bases propias.",
    invertido:
      "Invertido advierte de rigidez, autoritarismo o de estructuras vacías que se mantienen solo por inercia. También de " +
      "abandonar el mando justo cuando era necesario ejércelo.",
    consejo:
      "Define las bases. Una estructura firme no domestica la vida si está hecha de la misma materia que la sostiene."
  },
  {
    id: 5,
    type: "major",
    numero: 5,
    nombre: "El Hierofante",
    glifo: "🏯",
    pintura: "Catedral Vegetal",
    anio: 1957,
    escena:
      "Un templo que crece como un bosque: la catedral y la selva entrelazadas, con figuras que se funden en la arquitectura. " +
      "Lo sagrado que no rechaza lo natural sino que lo integra en su estructura.",
    simbolos: ["la catedral viva", "las figuras que se integran", "la bóveda vegetal", "el conocimiento transmitido"],
    palabras: ["tradición", "maestro", "enseñanza"],
    vertical:
      "El Hierofante representa la transmisión del saber: el maestro, la tradición, el rito que conecta con lo más hondo. " +
      "En Varo, la catedral no separa el exterior del interior: todo es el mismo tejido. La carta invita a buscar una " +
      "guía, a honrar las enseñanzas heredadas y a ver qué osmosis convierte lo aprendido en algo propio.",
    invertido:
      "Invertida cuestiona dogmas, instituciones que han perdido su raíz o maestros que enseñan sin creer. Puede ser el " +
      "momento de romper con la tradición para encontrar el propio rito.",
    consejo:
      "Busca el maestro que te recuerde que el templo crece desde dentro. Lo sagrado no está en la bóveda, sino en las raíces."
  },
  {
    id: 6,
    type: "major",
    numero: 6,
    nombre: "Los Enamorados",
    glifo: "♥",
    pintura: "Los Amantes (Otros Amantes)",
    anio: 1963,
    escena:
      "Una pareja cuyas siluetas se funden en un velo de luz, cara contra cara, casi como un único cuerpo con dos cabezas. " +
      "El amor como transfiguración: dos que se vuelven uno sin dejar de ser dos.",
    simbolos: ["la fusión de las siluetas", "el velo de luz", "el encuentro de miradas", "la transfiguración"],
    palabras: ["amor", "unión", "elección"],
    vertical:
      "Los Enamorados hablan del encuentro que transforma: el amor, sí, pero también la elección ética y vocacional. " +
      "En Varo, el amante no se pierde en el otro: se ilumina con él. La carta llama a elegir desde el corazón entero, " +
      "a reconocer el vínculo que está tejiéndose y a asumir las consecuencias del sí.",
    invertido:
      "Invertida señala desarmonía, indecisión frente a una elección, o vínculo que se sostiene por costumbre más que por " +
      "amor. Puede indicar también amores que piden demasiada renuncia a lo propio.",
    consejo:
      "Elige con todo el ser. Si dudas si el amor te libera o te encoge, escucha: qué arena llevas a su luz y qué te pide esa luz que dejes atrás."
  },
  {
    id: 7,
    type: "major",
    numero: 7,
    nombre: "El Carro",
    glifo: "⚙",
    pintura: "Homo Rodans",
    anio: 1959,
    escena:
      "Una gran rueda mecánica tripulada por un auriga que avanza por impulso propio: la máquina no lo transporta, " +
      "lo amplifica. El ser humano como vehículo de su propia voluntad.",
    simbolos: ["la gran rueda", "el conductor", "el impulso humano", "el horizonte en movimiento"],
    palabras: ["dirección", "avance", "voluntad"],
    vertical:
      "El Carro es el control del rumbo: la voluntad disciplinada que conduce a la meta. En Homo Rodans, nadie empuja: " +
      "el conductor es motor y timón. La carta anuncia movimiento decisivo, superación de obstáculos y la necesidad de " +
      "tomar las riendas con energía, sin delegar el viaje en la máquina.",
    invertido:
      "Invertido habla de rumbo perdido, impulsos contradictorios, o de dejarse llevar por la inercia. Puede señalar " +
      "agotamiento de la voluntad o un avance que fuerza más de lo que edifica.",
    consejo:
      "Tú eres el conductor y la fuerza. Marca un destino claro y no pares: la rueda avanza mientras las manos la sostienen."
  },
  {
    id: 8,
    type: "major",
    numero: 8,
    nombre: "La Fuerza",
    glifo: "🐱",
    pintura: "Simpatía (La Rabia del Gato)",
    anio: 1955,
    escena:
      "Una mujer de rasgos gatunos sostiene un gato en sus brazos con ternura exacta: la fiereza domada no por sumisión " +
      "sino por simpatía, por vibración compartida. La fuerza que nace del acuerdo, no de la imposición.",
    simbolos: ["el gato", "la ternura", "la mirada felina", "la simpatía entre especies"],
    palabras: ["coraje", "ternura", "dominio de instintos"],
    vertical:
      "La Fuerza no somete: magnética. En Varo el poder está en la sintonía: quien ama al gato lo convierte en aliado sin " +
      "cosificarlo. La carta habla de coraje sereno, de paciencia ante el propio animal interior y de la capacidad de " +
      "contener la propia energía sin aplastarla. La verdadera fuerza es suave y persistente.",
    invertido:
      "Invertida muestra represión de los instintos, ira contenida que se vuelve veneno, o fuerza mal usada: volverse duro " +
      "justo cuando era preciso ser tierno. A veces, miedo a la propia furia que acaba gobernando.",
    consejo:
      "No dome tu lobo, simpatiza con él. Tu instinto no es enemigo: dale espacio, mirada y un fin noble y tendrás una fuerza incansable."
  },
  {
    id: 9,
    type: "major",
    numero: 9,
    nombre: "El Ermitaño",
    glifo: "🕯",
    pintura: "Ermitaño Meditando",
    anio: 1955,
    escena:
      "La luz que se vuelve escultura: el ermitaño confiere cuerpo a una luminosidad interior que se organiza en estratos. " +
      "La meditación como arquitectura de la luz.",
    simbolos: ["la luz modelada", "la soledad fecunda", "la contemplación", "los estratos del interior"],
    palabras: ["introspección", "soledad", "luz propia"],
    vertical:
      "El Ermitaño invita a la busca, no del mundo, sino de la propia luz: retirarse para ver con más nitidez. Varo lo pinta " +
      "modelando luz, porque el silencio no es vacío sino materia. La carta anuncia un tiempo de recogimiento que precede " +
      "al hallazgo: guía interior, sabiduría forjada en soledad y la lámpara que se enciende solo cuando dejas de buscar afuera.",
    invertido:
      "Invertido habla de aislamiento estéril, de esconderse del mundo en lugar de verlo, o de una luz que se apagó por " +
      "falta de práctica. Puede señalar también rigidez, nostalgia excesiva o desconfianza que aísla.",
    consejo:
      "Retírate a tiempo. Enciende tu lámpara en la soledad y, cuando la luz sea tuya, sal a compartirla: el ermitaño regresa para enseñar."
  },
  {
    id: 10,
    type: "major",
    numero: 10,
    nombre: "La Rueda de la Fortuna",
    glifo: "☉",
    pintura: "Astro Errante",
    anio: 1961,
    escena:
      "Un astro solitario navega en la oscuridad, sin órbita fija, girando en su propio centro. La fortuna como errancia: " +
      "lo que sube y baja no por fatalidad sino por rotación.",
    simbolos: ["el astro", "la órbita errante", "el giro", "el movimiento cíclico"],
    palabras: ["ciclos", "cambio", "destino"],
    vertical:
      "La Rueda recuerda que todo gira: los éxitos y los vales, las ascensiones y las caídas. En Varo el astro errante no es " +
      "víctima de la fortuna sino danzante del ciclo. La carta marca un punto de inflexión, un giro de la rueda que trae " +
      "oportunidades, siempre que aprendas a girar con ella y no a resistir el movimiento.",
    invertido:
      "Invertido indica resistencia al cambio, sensación de estar a merced de un destino que no se comprende, o un ciclo " +
      "que se repite porque no se aprende su lección. A veces, suerte retenida por inercia.",
    consejo:
      "La rueda gira igual estés arriba o abajo: lo único que decides es cómo danzas. Convierte el giro en aprendizaje y no en vértigo."
  },
  {
    id: 11,
    type: "major",
    numero: 11,
    nombre: "La Justicia",
    glifo: "⚖",
    pintura: "La Tejedora de Verona",
    anio: 1956,
    escena:
      "Dos tejedoras contemplan el hilo que brota desde una esfera: la trama del destino construida con exactitud de relojero. " +
      "La justicia como establecimiento del orden justo, hilo por hilo, causa y efecto.",
    simbolos: ["la esfera que destila hilo", "el telar", "las tejedoras", "la trama del destino"],
    palabras: ["equilibrio", "verdad", "consecuencia"],
    vertical:
      "La Justicia pesa los hechos con la precisión de quien teje: toda causa produce su efecto, toda elección su textura. " +
      "Varo muestra a las tejedoras como arquitectas del karma: no castigan, ordenan. La carta pide honestidad, claridad " +
      "frente a un juicio (legal o interno), asumir responsabilidades y restablecer el equilibrio que se ha roto.",
    invertido:
      "Invertida señala injusticia, desequilibrio, evasión de la responsabilidad o juicios precipitados. Puede indicar que " +
      "el hilo se ha enredado por negarse a mirar la propia parte en la trama.",
    consejo:
      "Sé exacto contigo. No levantes la voz sobre el telar: trabaja la trama, mira tu causa y tu efecto, y restaura el orden sin culpas."
  },
  {
    id: 12,
    type: "major",
    numero: 12,
    nombre: "El Colgado",
    glifo: "☋",
    pintura: "Fenómeno de Ingravidez",
    anio: 1963,
    escena:
      "Cuerpos y objetos levitan en una habitación invertida: la mesa desafía su propio peso y los muebles emprenden vuelo. " +
      "La suspensión como estado perceptivo, entre el vértigo y la revelación.",
    simbolos: ["la levitación", "la habitación invertida", "el peso suspendido", "el cambio de perspectiva"],
    palabras: ["entrega", "nueva mirada", "suspensión"],
    vertical:
      "El Colgado no está castigado: está viendo el mundo al revés para poder verlo de verdad. La ingravidez de Varo libera " +
      "los objetos de su peso simbólico. La carta invita a soltar el control, a cambiar de ángulo, a aceptar una pausa que " +
      "no es derrota sino condición para comprender. Lo que parece estancado es, en realidad, un estado de espera activa.",
    invertido:
      "Invertido indica resistencia a soltar, seguir empujando un peso que ya no hace falta, o sacrificio inútil. A veces, " +
      "miedo a dejar de caer o a que la contradicción se resuelva. También: control fanático que impide la nueva mirada.",
    consejo:
      "Suelta el peso, aunque sea por un momento. Si el mundo te resulta insoportable, cambia el ángulo: la misma habitación " +
      "puede ser tu prisión o tu órbita."
  },
  {
    id: 13,
    type: "major",
    numero: 13,
    nombre: "La Muerte",
    glifo: "🦋",
    pintura: "Naturaleza Muerta Resucitando",
    anio: 1963,
    escena:
      "Una mesa de cocina se anima: jarras y plantas despiertan, despliegan alas y se elevan de su quietud. Lo que parecía " +
      "muerto comienza a respirar. La transformación como resurrección de lo cotidiano.",
    simbolos: ["la mesa", "los objetos que cobran vida", "las alas", "la resurrección de lo estático"],
    palabras: ["transformación", "fin de un ciclo", "renacimiento"],
    vertical:
      "La Muerte rara vez habla de muerte física: habla de metamorfosis. En la pintura de Varo lo inerte despierta: todo " +
      "final es una naturaleza muerta que está resucitando. La carta indica el fin de una etapa —de un trabajo, un vínculo, " +
      "una idea— para que nazca otra. No se trata de resistir, sino de despedir con gracia lo que ha cumplido su función.",
    invertido:
      "Invertida habla de resistencia a los cambios necesarios, de ciclos que no terminan, o de miedo paralizante a la " +
      "pérdida. Puede indicar que te niegas a soltar un capítulo que el libro ya cerró.",
    consejo:
      "Deja morir con reverencia lo que ya fue. Cada final es una naturaleza muerta que ansía resucitar: cómplice de la " +
      "transformación en lugar de su víctima."
  },
  {
    id: 14,
    type: "major",
    numero: 14,
    nombre: "La Templanza",
    glifo: "⚕",
    pintura: "Exploración de las Fuentes del Río Orinoco",
    anio: 1959,
    escena:
      "Exploradores armados de brújulas y plomadas cartografían el manantial del gran río: la búsqueda del origen como " +
      "laboratorio de equilibrio. El agua que se mide, se comprende y se venera.",
    simbolos: ["la fuente", "la brújula", "la medición", "el regreso al origen"],
    palabras: ["equilibrio", "alquimia", "paciencia"],
    vertical:
      "La Templanza destila: mezcla lo disperso hasta encontrar la medida justa. En Varo, explorar las fuentes del Orinoco " +
      "es meterse en el origen para entender el río entero. La carta anuncia armonía, curación, unión de opuestos y un " +
      "proceso que exige método: no se fuerza la mezcla, se la deja decantar. Es tiempo de moderar, integrar y confiar en el proceso.",
    invertido:
      "Invertida muestra desequilibrio, mezclas forzadas, impaciencia que rompe el proceso o extremos que se pelean. " +
      "Puede indicar salud descuidada o discordia interna que desorganiza la cocina alquímica.",
    consejo:
      "Avanza en la medida justa. No agregues más ingredientes al caldero: déjalo reposar y confía en la proporción que ya elegiste."
  },
  {
    id: 15,
    type: "major",
    numero: 15,
    nombre: "El Diablo",
    glifo: "🔱",
    pintura: "El Minotauro",
    anio: 1959,
    escena:
      "Media bestia, media humano, el minotauro habita un laberinto de formas orgánicas: la sombra instintiva que pide " +
      "ser mirada de frente. La monstruosidad como parte no integrada del ser.",
    simbolos: ["el laberinto", "la mitad animal", "el deseo", "la sombra"],
    palabras: ["tentación", "sombra", "apego"],
    vertical:
      "El Diablo representa los lazos que creemos oro y son hierro: adicciones, poder, miedos disfrazados de deseos. " +
      "Varo no demoniza al minotauro: lo instala en el laberinto y lo nombra. La carta invita a reconocer qué te encadena, " +
      "qué repetición te domina, qué placer se volvió necesidad. Solo se sale del laberinto empezando por mirar a la bestia.",
    invertido:
      "Invertida anuncia la ruptura de las cadenas: una atadura que está aflojándose, poder que vuelve a ti, o el momento " +
      "en que la sombra, al ser nombrada, deja de gobernar. Puede ser también un falso desapego: decirse libre sin haber andado el camino.",
    consejo:
      "Nombra la cadena. Lo que se ve deja de hipnotizar: entra en el laberinto con la lámpara encendida y negocia con la " +
      "bestia, porque no se mata la sombra: se integra."
  },
  {
    id: 16,
    type: "major",
    numero: 16,
    nombre: "La Torre",
    glifo: "🗼",
    pintura: "Hacia la Torre",
    anio: 1960,
    escena:
      "Una comunidad de mujeres en bicicleta se encamina hacia una torre que aguarda en el cielo: la torre como destino, " +
      "confinamiento y lugar de paso. La construcción que hay que atravesar, no habitar para siempre.",
    simbolos: ["la torre", "las bicicletas", "la procesión", "el camino de ida"],
    palabras: ["revelación", "colapso", "liberación"],
    vertical:
      "La Torre se alza y luego se derrumba: lo que se cimienta sobre la falsedad cae para que nazca lo verdadero. En Varo, " +
      "las mujeres suben a la torre pero es precisamente en ella donde bordarán el mundo o desde donde huirán. La carta " +
      "anuncia rupturas iluminadoras: estructuras que se quiebran, verdades que irrumpen, golpes que en realidad son " +
      "desbroces. Puede doler; siempre limpia.",
    invertido:
      "Invertida señala una crisis evitada por miedo, la cima de una torre que sigues habitando sabiendo que está hueca. " +
      "Puede indicar también miedo al cambio aunque el colapso abra espacio, o retraso de lo inevitable.",
    consejo:
      "Si la torre tiembla, sal antes de que te lo diga el derrumbe. Prefiere la caída honrada a la ruina habitada por miedo."
  },
  {
    id: 17,
    type: "major",
    numero: 17,
    nombre: "La Estrella",
    glifo: "✷",
    pintura: "Cazadora de Astros (La Luna Aprisionada)",
    anio: 1956,
    escena:
      "Una figura alada con una red alarga la mano para capturar la luna y las estrellas del cielo nocturno: no para poseerlas, " +
      "sino para traerlas a la tierra. La esperanza que se fabrica con las propias manos.",
    simbolos: ["la red estelar", "la luna deseada", "las alas", "la mano tendida"],
    palabras: ["esperanza", "inspiración", "curación"],
    vertical:
      "La Estrella es la quietud que sigue a la tormenta: la herida que empieza a cerrarse, el deseo que recupera nitidez. " +
      "En la pintura de Varo, la astucidad no es pasiva: la esperanza se caza con red. La carta anuncia sanación, fe renovada, " +
      "inspiración celestial y la certeza de que lo que parecía inalcanzable puede bajarse a la tierra con método y magia.",
    invertido:
      "Invertida muestra desesperanza, fe agotada, o aspiraciones enfocadas tan alto que olvidan la tierra. Puede indicar " +
      "un idealismo que impide la acción, o la sensación de que la red no alcanza.",
    consejo:
      "No esperes el milagro sentada: construye tu red. La esperanza no es un estado pasivo en Varo, es una cacería dulce."
  },
  {
    id: 18,
    type: "major",
    numero: 18,
    nombre: "La Luna",
    glifo: "🌙",
    pintura: "Reflejo Lunar",
    anio: 1957,
    escena:
      "La luz de la luna se descompone y se expande en destellos: un mundo intermedio donde las siluetas vacilan y lo " +
      "sólido se vuelve líquido. El territorio de los sueños, la duda y la metamorfosis.",
    simbolos: ["la luna", "el reflejo", "las aguas", "el crepúsculo"],
    palabras: ["sueño", "ilusión", "incertidumbre"],
    vertical:
      "La Luna alumbra lo que el sol no descubre: emociones subterráneas, sueños que guían, intuiciones a medio decir. " +
      "Varo la convierte en principio que refracta la realidad: nada es lo que parece del todo. La carta avisa de que no " +
      "hay claridad total: muévete despacio, atiende los símbolos, confía en la brújula del corazón a la vez que dudas " +
      "de lo que ves. Es noche fértil, no necesariamente oscura.",
    invertido:
      "Invertida anuncia que la niebla empieza a disiparse: confusión que cede, fantasmas que se desnudan, un secreto que " +
      "sale a la luz. Puede indicar también paranoia o haberse dormido en el mundo de las proyecciones.",
    consejo:
      "Camina en penumbra con pasos pequeños. No decidas a plena certeza ni abandones a plena duda: la luna te muestra " +
      "el barro bajo el agua y también la joya que lo ilumina."
  },
  {
    id: 19,
    type: "major",
    numero: 19,
    nombre: "El Sol",
    glifo: "☀",
    pintura: "Música Solar (Música de la Luz)",
    anio: 1955,
    escena:
      "Un rayo de luz se transforma en pequeñas esferas vibrantes y notas que tocan un instrumento musical: el sol que " +
      "compone, la luz que se hace sonido. La alegría como resonancia del origen.",
    simbolos: ["el rayo convertido en notas", "el instrumento", "las esferas de luz", "la música celeste"],
    palabras: ["alegría", "éxito", "claridad"],
    vertical:
      "El Sol es la vida en plenitud: claridad, éxito reconocido, vitalidad sin apenas sombra. En Varo, la luz se vuelve " +
      "música y suena en el instrumento de la realidad: lo positivo no se anuncia, resuena. La carta anuncia un periodo " +
      "luminoso, relaciones cálidas, proyectos que alcanzan día y la capacidad de estar simplemente y agradecidamente vivo.",
    invertido:
      "Invertida muestra alegría ensombrecida o éxito que no se disfruta: brillas pero no lo ves, o temes que el sol se " +
      "apague y dejas de saborearlo. Puede indicar un ego inflado por la luz ajena o un optimismo que niega las nubes.",
    consejo:
      "Baila bajo tu propia luz. El sol no se pregunta si merece salir: sale. Disfruta el día como quien escucha una música que ya lleva dentro."
  },
  {
    id: 20,
    type: "major",
    numero: 20,
    nombre: "El Juicio",
    glifo: "🎺",
    pintura: "La Llamada",
    anio: 1961,
    escena:
      "Una figura emerge de una fuente, sosteniendo un bastón con dos conchas entrelazadas, como si la tocara con su voz " +
      "de caracol: la llamada que despierta y convoca. El instante en que se escucha el nombre propio.",
    simbolos: ["el caracol", "la llamada", "la resurgencia", "la fuente"],
    palabras: ["renacimiento", "llamado", "despertar"],
    vertical:
      "El Juicio es el despertar: un llamado interior que resuena y reorganiza la vida entera. Varo pinta a una mujer que " +
      "emerge y toca el caracol: el sonido del origen que invita a la próxima etapa. La carta habla de un despertar " +
      "espiritual o vocacional, de perdonar y perdonarse, de responder a la llamada aunque el camino no esté trazado.",
    invertido:
      "Invertida muestra resistencia a despertar, miedo al llamado o remordimiento que mantiene la cabeza bajo el agua. " +
      "Puede indicar también un falso despertar: cambiar de piel sin haber cambiado de alma.",
    consejo:
      "Abre los ojos al sonido que te nombra. La llamada no exige certeza, exige respuesta: sal del agua y responde."
  },
  {
    id: 21,
    type: "major",
    numero: 21,
    nombre: "El Mundo",
    glifo: "🌍",
    pintura: "El Mundo",
    anio: 1958,
    escena:
      "Un ser femenino corona la esfera celeste, rodeada de los signos del cosmos: la tierra y el cielo celebrados a la vez, " +
      "la culminación del viaje como danza en el centro.",
    simbolos: ["la esfera", "los signos astrales", "el ser danzante", "la totalidad"],
    palabras: ["culminación", "integración", "éxito completo"],
    vertical:
      "El Mundo cierra el ciclo: la meta alcanzada, la visión integrada, el ser en su centro y el centro en el ser. En Varo, " +
      "el mundo está coronado por una figura que lo habita sin aplastarlo. La carta anuncia logros, viajes, reconocimiento " +
      "y una armonía que es terminus y comienzo: se completa una obra y el mazo vuelve a empezar con el Loco, ya maduro.",
    invertido:
      "Invertida muestra un ciclo inconcluso o la imposibilidad de disfrutar la meta alcanzada por apresurarse a la " +
      "siguiente. Puede indicar dispersión, temor a integrar lo aprendido o la sensación de estar fuera de lugar en el propio mundo.",
    consejo:
      "Regístralo: llegaste. Antes de emprender el próximo viaje, danza en el mundo que has construido y deja que termine el ciclo con dignidad."
  }
];