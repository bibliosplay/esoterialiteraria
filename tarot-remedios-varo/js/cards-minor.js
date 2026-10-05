/* ============================================================
   Tarot Remedios Varo — 56 Arcanos Menores
   Bastos (Fuego) · Copas (Agua) · Espadas (Aire) · Oros (Tierra)
   Cada carta se vincula a una pintura de Remedios Varo.
   ============================================================ */

const MINOR_CARDS = [
  /* ============= BASTOS · FUEGO ============= */
  {
    id: 100, type: "minor", palo: "bastos", rango: "as", numero: "As", nombre: "As de Bastos",
    glifo: "🔥", pintura: "Creación con Rayos Astrales", anio: 1955,
    escena: "Una mano femenina atrapa rayos de la esfera celeste y los deja caer sobre una mesa de oficios: la chispa creadora que desciende y se transforma en materia.",
    simbolos: ["la esfera lumínica", "la mano que recibe", "los rayos", "la mesa de trabajo"],
    palabras: ["chispa", "iniciativa", "creación"],
    vertical: "Nace una idea, un proyecto, un deseo de crear. La inspiración desciende como rayo astral: aprovéchala antes de que se disipe. Es impulso puro, energía ascendente que pide acción inmediata.",
    invertido: "Falta de impulso o creatividad bloqueada; entusiasmo que se apaga antes de materializarse. Puede indicar miedo a empezar o fuego mal encaminado.",
    consejo: "Atrapa el rayo en el momento exacto: empieza hoy, con lo que tengas, antes de que la inspiración se vuelva nostalgia."
  },
  {
    id: 101, type: "minor", palo: "bastos", rango: "2", numero: "II", nombre: "Dos de Bastos",
    glifo: "🗺", pintura: "Caminos Tortuosos", anio: 1957,
    escena: "Un personaje observa los meandros del propio recorrido: el camino serpentea pero quien lo contempla está en un plano superior. La vigilia sobre el propio destino.",
    simbolos: ["los caminos que se ramifican", "la torre de observación", "el plan", "el horizonte lejano"],
    palabras: ["plan", "horizonte", "decisión de futuro"],
    vertical: "Tienes el mapa, aunque sea un mapa de caminos tortuosos: toca elegir dirección y confiar. La carta habla de planear a largo plazo, de asumir el control del propio rumbo y de prepararse para expandir horizontes.",
    invertido: "Miedo a decidir, planes que no salen del papel, o atrapamiento en el análisis que impide partir. Puede indicar objetivos poco realistas.",
    consejo: "Elige un camino aunque no sea el perfecto. Los caminos tortuosos no son errores: son el paisaje; el rumbo lo pones tú."
  },
  {
    id: 102, type: "minor", palo: "bastos", rango: "3", numero: "III", nombre: "Tres de Bastos",
    glifo: "⛷", pintura: "Esquiador (Viajero)", anio: 1960,
    escena: "Un esquiador desciende una pendiente imposible con sus esquís de madera y su mirada puesta en la cima ya superada: el territorio conquistado invita a mirar lo que viene.",
    simbolos: ["la pendiente", "los esquís", "el impulso", "la vista hacia adelante"],
    palabras: ["expansión", "anticipación", "logro en marcha"],
    vertical: "El esfuerzo inicial ya dio frutos: ahora se vislumbra el éxito en el horizonte. Miras hacia adelante con confianza, previendo asociaciones, viajes y oportunidades. Es la carta del que ya esquía y ve la próxima cumbre.",
    invertido: "Retrasos en la expansión, expectativas que no se cumplen en el plazo previsto o exceso de impaciencia. Puede indicar proyectos que crecen más lento de lo deseado.",
    consejo: "Mantén la vista en el horizonte sin negar la pendiente. Lo sembrado ya crece; solo falta tiempo y buen equilibrio."
  },
  {
    id: 103, type: "minor", palo: "bastos", rango: "4", numero: "IV", nombre: "Cuatro de Bastos",
    glifo: "🏡", pintura: "Paraíso de los Gatos", anio: 1955,
    escena: "Una habitación gobernada por gatos serenos, alfombras y plantas que esconden un laberinto de bienestar: el hogar como obra de arte compartida.",
    simbolos: ["los gatos", "el hogar", "las plantas", "la armonía doméstica"],
    palabras: ["celebración", "hogar", "armonía"],
    vertical: "Época de estabilidad y celebración: un hogar que se consolida, un proyecto que encuentra su forma y su lugar. Es descanso merecido y redes de afecto que sostienen. El paraíso se construye con detalles.",
    invertido: "Inestabilidad doméstica, celebraciones aplazadas o sensación de no pertenecer al lugar que habitas. Puede indicar que el descuido erosiona la armonía.",
    consejo: "Cuida los detalles del paraíso que habitas: el hogar no se da por hecho, se cultiva como un jardín de gatos y plantas."
  },
  {
    id: 104, type: "minor", palo: "bastos", rango: "5", numero: "V", nombre: "Cinco de Bastos",
    glifo: "🥊", pintura: "El Malabarista o el Juglar", anio: 1956,
    escena: "El malabarista lanza sus pelotas y sus fuegos artificiales y mantiene en vilo su destreza: destreza en competencia, juego que exige atención, conflicto que es entrenamiento.",
    simbolos: ["las esferas lanzadas", "el malabarista", "el desafío", "el juego"],
    palabras: ["competencia", "tensión", "entrenamiento"],
    vertical: "Chocas con rivales, opiniones o exigencias: la competencia despierta lo mejor de ti. Es el fragor del entrenamiento: las tensiones son combates de salón, no batallas perdidas. Participa, pero no te hieras en el juego.",
    invertido: "Conflictos que se vuelven estériles, rivalidad destructiva o energía gastada en peleas insignificantes. Puede indicar que el juego dejó de ser juego.",
    consejo: "Juega limpio y no le entregues tu paz al marcador. El malabarista no compite contra otros: compite contra su propia atención."
  },
  {
    id: 105, type: "minor", palo: "bastos", rango: "6", numero: "VI", nombre: "Seis de Bastos",
    glifo: "🏆", pintura: "El Flautista (del pueblo de Hamelín)", anio: 1955,
    escena: "El flautista guía a la multitud con su música: la melodía que arrastra, el triunfo que se celebra, el poder de la voz que convoca.",
    simbolos: ["la flauta", "la procesión", "la melodía", "la convocatoria"],
    palabras: ["victoria", "reconocimiento", "liderazgo"],
    vertical: "Llegas una etapa de triunfo: tu obra o tu esfuerzo es reconocido y otros te siguen. Es hora de recibir el halago, pero también de usarlo con medida: el flautista que se cree el fin acabó arrastrando ratas. Ten éxito sin envenenarte.",
    invertido: "Triunfo diluido, reconocimiento que no llega o liderazgo que se ejerce de forma egoísta. Puede indicar victorias pírricas que vacían.",
    consejo: "Acepta el reconocimiento sin dejar de ser quien toca la flauta. El logro se sella cuando se comparte la música, no el protagonismo."
  },
  {
    id: 106, type: "minor", palo: "bastos", rango: "7", numero: "VII", nombre: "Siete de Bastos",
    glifo: "🛡", pintura: "Caballero Encantado", anio: 1961,
    escena: "Un caballero de ensueño, atrapado en su propia armadura mágica, defiende su lugar: la posición ganada que hay que sostener contra quien intenta desplazarla.",
    simbolos: ["la armadura", "el caballero", "el encantamiento", "la defensa del lugar"],
    palabras: ["defensa", "perseverancia", "valentía"],
    vertical: "Mantienes tu posición frente a presiones, críticas o competencia. El terreno costó conseguirlo: no lo regales. Esta carta premia la noble perseverancia y recuerda que defender lo conquistado también es construir.",
    invertido: "Sensación de estar arrinconado, defensas que se agotan o sobre-protección del propio territorio por inseguridad. Puede indicar batalla elegida mal.",
    consejo: "Defiende lo que es tuyo con la serenidad del caballero encantado: no cada asedio exige lanzar la lanza; algunos se deshacen solo con no temblar."
  },
  {
    id: 107, type: "minor", palo: "bastos", rango: "8", numero: "VIII", nombre: "Ocho de Bastos",
    glifo: "💨", pintura: "Vuelo Mágico (Zanfonía)", anio: 1956,
    escena: "Una mujer viaja suspendida en una zanfonía voladora, abriéndose camino por los aires: movimiento puro, noticia que llega sola, avance sin fricción.",
    simbolos: ["la zanfonía voladora", "el impulso aéreo", "la noticia", "el viaje"],
    palabras: ["movimiento", "noticias", "velocidad"],
    vertical: "Todo acelera: noticias, viajes, mensajes, decisiones que venían despacio de pronto llegan. Es el vuelo mágico: aprovéchalo para avanzar mucho en poco tiempo, pero sin descuidar el equilibrio de los que quedan en tierra.",
    invertido: "Retrasos, comunicación enredada o prisa que desestabiliza. Puede indicar que fuerzas demasiado los tiempos o que las noticias se distorsionan al llegar.",
    consejo: "Súbete al vuelo, sí, pero revisa el mapa antes de despegar: la velocidad no sustituye a la dirección."
  },
  {
    id: 108, type: "minor", palo: "bastos", rango: "9", numero: "IX", nombre: "Nueve de Bastos",
    glifo: "👁", pintura: "Presencia Inquietante", anio: 1959,
    escena: "Un mueble se transforma en silueta que observa: la última batalla del día, la vigilia, la resistencia del que ya lleva mucha lucha encima.",
    simbolos: ["la silueta inquietante", "el mueble metamórfico", "la vigilia", "la resistencia"],
    palabras: ["resistencia", "alerta", "recuperación"],
    vertical: "Estás en el tramo final de una resistencia: la última línea de defensa. Has atravesado muchas batallas y te preguntas si vale la pena seguir. Sí. Esta carta valida la perseverancia, pero te recuerda cuidar las heridas.",
    invertido: "Agotamiento real, defensa desmedida o paranoia que ve enemigos donde solo hay sombras. Puede indicar que conviene retirarse a tiempo y cerrar heridas.",
    consejo: "Resiste la penúltima batalla, pero atiende tus heridas: el guerrero que ignora su cansancio es presa fácil la semana siguiente."
  },
  {
    id: 109, type: "minor", palo: "bastos", rango: "10", numero: "X", nombre: "Diez de Bastos",
    glifo: "🎒", pintura: "Emigrantes", anio: 1962,
    escena: "Una procesión de seres cargados con sus enseres se mueve hacia adelante: la carga que se asume para alcanzar una vida nueva, el peso del propio destino.",
    simbolos: ["las cargas", "la procesión", "el viaje migrante", "el peso asumido"],
    palabras: ["carga", "responsabilidad", "esfuerzo último"],
    vertical: "Llevas demasiado peso sobre los hombros: responsabilidades multiplicadas que apenas dejan respirar. Es el último esfuerzo, próximo a su fin, pero hay que decidir qué soltar para no llegar roto al destino.",
    invertido: "Carga injusta, responsabilidades que no son tuyas o agotamiento por exigirte más de la cuenta. Puede indicar que tu generosidad te está pidiendo un precio excesivo.",
    consejo: "Revisa el equipaje: la emigración no requiere cargar la casa entera, requiere elegir lo esencial. Suelta lo que puedas; llegar ligero también es llegar."
  },
  {
    id: 110, type: "minor", palo: "bastos", rango: "sota", numero: "Pr.", nombre: "Sota de Bastos",
    glifo: "🕊", pintura: "Aprendiz de Ícaro", anio: 1959,
    escena: "El aprendiz provoca su primer vuelo: alas de madera y plumas que el viento aprueba. La inocencia del que aún no sabe que volar es peligroso, y por eso vuela.",
    simbolos: ["las alas", "el aprendiz", "el vuelo inicial", "la osadía"],
    palabras: ["entusiasmo", "aprendizaje", "comienzo osado"],
    vertical: "Un inicio luminoso: aprendizaje, curiosidad, primer mensaje de una nueva energía. La sota de bastos llega con buenas noticias o ganas de aventura. Es el héroe de los comienzos: todo es posible porque aún no sabe lo imposible.",
    invertido: "Arranques que no se sostienen, entusiasmo que se desinfla, o avisos de que hay que templar la osadía antes de las alas se derritan. Puede indicar inmadurez o prisa.",
    consejo: "Vuela alto, pero cálida las alas antes: la osadía del aprendiz se vuelve maestría cuando aprendes dónde está el sol sin negarte la altura."
  },
  {
    id: 111, type: "minor", palo: "bastos", rango: "caballero", numero: "Cn.", nombre: "Caballero de Bastos",
    glifo: "🎪", pintura: "Caballero en Monociclo", anio: 1959,
    escena: "Un caballero pedalea en monociclo desafiando el equilibrio con elegancia: aventura pura, impulso que no se detiene ni en la cuerda floja.",
    simbolos: ["el monociclo", "el equilibrio imposible", "el movimiento", "la caballería ligera"],
    palabras: ["aventura", "impulso", "transformación"],
    vertical: "Energía aventurera que llega como vendaval: cambios, mudanzas, corazones que arden. El caballero de bastos nos invita a salir de lo rutinario sin plan perfecto. Su lección es no quedarse a mitad de puente.",
    invertido: "Impulso que genera caos, proyectos que se encienden y se apagan, o alguien que promete fuego y entrega humo. Puede indicar impaciencia que sabotea la propia obra.",
    consejo: "Pedalea con equilibrio: el caballero en monociclo no llegó rápido, llegó constante. Que tu aventura tenga ritmo, no solo chispa."
  },
  {
    id: 112, type: "minor", palo: "bastos", rango: "reina", numero: "Ra.", nombre: "Reina de Bastos",
    glifo: "🌈", pintura: "Armonía (Autorretrato Sugerente)", anio: 1956,
    escena: "Un autorretrato sugerente donde la propia artista se funde con el mástil y la vela de una embarcación: confianza serena, carisma que navega, la creación como identidad.",
    simbolos: ["la vela", "el autorretrato", "la fusión con la embarcación", "la confianza serena"],
    palabras: ["confianza", "carisma", "calidez visible"],
    vertical: "Radiación positiva, seguridad que inspira a otros: la reina de bastos brilla sin pedir permiso. En Varo, la creadora se reconoce en su propia embarcación: tienes el derecho de ser el centro de tu obra.",
    invertido: "Carisma oculto o manipulado, celos que apagan su fuego o inseguridad disimulada. Puede indicar que te cuesta asumir tu propio brillo.",
    consejo: "Acéptate como centro de tu propia obra: no eres la decoración del viaje, eres la vela y la capitana."
  },
  {
    id: 113, type: "minor", palo: "bastos", rango: "rey", numero: "Ry.", nombre: "Rey de Bastos",
    glifo: "🎻", pintura: "El Rapsoda (Trovador)", anio: 1957,
    escena: "El rapsoda declama con la lira en alto rodeado de espectadores que se detienen a escuchar: el artista que inspira, el visionario que organiza el fuego en forma de palabra.",
    simbolos: ["la lira", "el rapsoda", "los oyentes", "la palabra inspiradora"],
    palabras: ["visión", "liderazgo", "inspiración"],
    vertical: "Madurez creadora y liderazgo generoso: sabes encender el entusiasmo ajeno sin apagar el propio. El rey de bastos ve el horizonte largo y enseña a otros a mirarlo. Es momento de guiar con ejemplo, no con gritos.",
    invertido: "Autoridad que apaga, visión que se vuelve dogma o impulsividad que contamina a quienes te siguen. Puede indicar jefazos internos que nunca duermen.",
    consejo: "Inspira como el rapsoda: convoca con la palabra, no con la vara. Tu fuego solo ilumina si no consume a quien se acerca."
  },

  /* ============= COPAS · AGUA ============= */
  {
    id: 200, type: "minor", palo: "copas", rango: "as", numero: "As", nombre: "As de Copas",
    glifo: "💧", pintura: "Expedición del Aqua Áurea", anio: 1962,
    escena: "Un grupo navega por un canal de agua dorada: la fuente de las emociones descubierta, el origen de todo sentir. El agua como tesoro compartido.",
    simbolos: ["el agua dorada", "la expedición", "la fuente", "el asombro"],
    palabras: ["apertura", "amor", "plenitud emocional"],
    vertical: "Se abre una fuente de sentimiento: un amor nuevo, un corazón que se ablanda, la oportunidad de sentir de manera plena. Es un manantial de compasión, creatividad y conexión. Bebe sin miedo.",
    invertido: "Emociones bloqueadas, sequedad afectiva o negarse a la vulnerabilidad. Puede indicar que el miedo ha tapado la fuente con piedras.",
    consejo: "Déjate conmover: la expedición no es del agua al tesoro, es del corazón a su propia fuente. Abre la llave aunque el agua llegue tibia."
  },
  {
    id: 201, type: "minor", palo: "copas", rango: "2", numero: "II", nombre: "Dos de Copas",
    glifo: "🤝", pintura: "Encuentro (La Cita)", anio: 1959,
    escena: "Dos figuras se encuentran en un jardín envolvente y mecánico: los rostros se miran, las manos se buscan, los fondos se funden. La cita que reorganiza la vida.",
    simbolos: ["el jardín", "las manos", "la mirada", "el encuentro"],
    palabras: ["unión", "atracción", "acuerdo"],
    vertical: "Encuentros poderosos: un amor que se consolida, una alianza, una conversación que cambia el rumbo. El dos de copas es magnetismo mutuo y equilibrio: dos fuentes que se reconocen sin dejar de ser distintas.",
    invertido: "Desencuentro, miradas que se esquivan o acuerdos rotos. Puede indicar relación desigual o expectativas que pesan demasiado sobre el otro.",
    consejo: "Preséntate entera al encuentro: la cita solo florece cuando ambos llevan su propio jardín y no esperan que el otro sea el paisaje completo."
  },
  {
    id: 202, type: "minor", palo: "copas", rango: "3", numero: "III", nombre: "Tres de Copas",
    glifo: "🎉", pintura: "Tres Destinos", anio: 1956,
    escena: "Tres mujeres en una arquitectura cenital se rozan las frentes en un gesto de unión: amistad, celebración, la alegría que se multiplica al compartirse.",
    simbolos: ["las tres figuras", "las frentes unidas", "el triángulo", "la fiesta"],
    palabras: ["amistad", "celebración", "comunidad"],
    vertical: "El brindis justo: amistades que sostienen, celebraciones compartidas, proyectos que crecen en grupo. Es tiempo de festejar lo logrado sin culpa y de honrar a quienes lo celebraron contigo.",
    invertido: "Celebraciones vacías, amistades que se dispersan o exceso que convierte la fiesta en huida. Puede indicar que buscas compañía para no estar contigo.",
    consejo: "Festeja en comunidad y deja que la alegría te toque: no todo es esfuerzo y superación, algunas cosas son regalo y ya están."
  },
  {
    id: 203, type: "minor", palo: "copas", rango: "4", numero: "IV", nombre: "Cuatro de Copas",
    glifo: "🥀", pintura: "Coincidencia", anio: 1959,
    escena: "Un personaje inmóvil contempla el encuentro de dos rutas luminosas que se cruzan ante él: estancamiento, oferta en puerta que aún no se ve, la apatía que no sabe mirar.",
    simbolos: ["la figura quieta", "las dos rutas que se cruzan", "la luz", "la mirada distraída"],
    palabras: ["apatía", "insatisfacción", "oferta ignorada"],
    vertical: "Te sientes estancado y miras todo con distancia: la emoción esta mansa, la rutina pesa. Pero la coincidencia ya está cruzando tu camino: una oportunidad, una puerta, alguien que se acerca. Abre los ojos antes de que la luz pase de largo.",
    invertido: "Salida del estancamiento: la apatía remite, se divisa una nueva emoción. Puede indicar que el hastío ha sido la señal para cambiar y no para quedarse.",
    consejo: "Levanta la mirada de la copa que ya no bebes: la coincidencia no llama, cruza. Estar quieto solo tiene sentido si observas el cruce."
  },
  {
    id: 204, type: "minor", palo: "copas", rango: "5", numero: "V", nombre: "Cinco de Copas",
    glifo: "🌧", pintura: "La Despedida", anio: 1958,
    escena: "Dos figuras se separan sobre la cima de un risco, gélidas y serenas: una marcha, una pérdida, el viento que arrastra lo que fue. El duelo sostenido con dignidad.",
    simbolos: ["el risco", "la separación", "el frío", "la despedida"],
    palabras: ["pérdida", "duelo", "desencanto"],
    vertical: "Algo se rompe o se va: un final, una desilusión, una ausencia que pesa. Es válido llorar lo perdido: el duelo es un rito. Pero recuerda que también hay copas en pie; Varo pinta la despedida sin dramatismo porque el movimiento sigue.",
    invertido: "El duelo empieza a cicatrizar: aceptación, regreso del consuelo, la despedida que se convierte en capítulo cerrado. Puede indicar pena que ya no necesita drenaje.",
    consejo: "Honra la despedida con rito y no con rutina: deja que el frío pase. Hay caminos que se separan en la cima para encontrarse en otra altitud."
  },
  {
    id: 205, type: "minor", palo: "copas", rango: "6", numero: "VI", nombre: "Seis de Copas",
    glifo: "🪞", pintura: "Visita al Pasado", anio: 1957,
    escena: "Una puerta se abre hacia otro tiempo: el pasado se visita como se visita un país. La nostalgia que se explora para entender el presente.",
    simbolos: ["la puerta temporal", "la visita", "el pasado", "el umbral"],
    palabras: ["nostalgia", "recuerdos", "reencuentro"],
    vertical: "El pasado vuelve a ser visitado: recuerdos que confortan, viejas relaciones que reaparecen, la infancia que pide reconciliación. Es un reencuentro fecundo si no te quedas atrapada: viaja al pasado para volver más liviano al presente.",
    invertido: "Melancolía que ancla, vivir en la memoria, o pasado idealizado que impide el presente. Puede indicar que visitas tanto el ayer que olvidas hacer las maletas de hoy.",
    consejo: "Visita el pasado como turista, no como reclusa: mira lo que fue, aprende su lección y vuelve a tu propia puerta con la mano abierta."
  },
  {
    id: 206, type: "minor", palo: "copas", rango: "7", numero: "VII", nombre: "Siete de Copas",
    glifo: "🫧", pintura: "Premonición", anio: 1953,
    escena: "Un rostro observa cómo se despliegan esferas de visiones ilusorias: los muchos futuros, los deseos proyectados, la tentación de creerse todas las burbujas.",
    simbolos: ["las esferas", "la visión", "la elección", "el espejismo"],
    palabras: ["ilusión", "elección", "fantasía"],
    vertical: "Demasiadas opciones, demasiados mundos posibles y la dificultad de elegir. El riesgo es quedarse contemplando las burbujas en lugar de apresar una. Imagina, sí, pero también filtra: no todo lo que brilla es camino.",
    invertido: "Comienzas a distinguir la ilusión de lo real: las burbujas se desinflan y queda la dirección cierta. Puede indicar también evitación de fantasías que divertían demasiado.",
    consejo: "Elige una burbuja y sostenla un instante: la visión solo se vuelve real cuando dejas de contemplarla y la nombras como decisión."
  },
  {
    id: 207, type: "minor", palo: "copas", rango: "8", numero: "VIII", nombre: "Ocho de Copas",
    glifo: "🛶", pintura: "La Huida", anio: 1961,
    escena: "Una mujer cruza en un puente inestable, escapando de la torre que la retenía: abandonar lo conocido para buscar el amor propio. La huida que es un encuentro.",
    simbolos: ["la torre", "el puente", "la mujer que huye", "el horizonte"],
    palabras: ["renuncia", "búsqueda", "adiós necesario"],
    vertical: "Abandonas aquello que ya no nutre: un espacio, una relación, una versión de ti. El ocho de copas no es fracaso: es fuga hacia una profundidad mayor. Dejar atrás pesa, pero quedarse pesa más.",
    invertido: "Huida circular: sabes que debes irte pero regresas una y otra vez. Puede indicar que abandonas las cosas en el momento equivocado o por miedo, no por sabiduría.",
    consejo: "Cruza el puente aunque tiembla. La huida que te salva suele parecer deserción vista desde la torre que ya no era tu casa."
  },
  {
    id: 208, type: "minor", palo: "copas", rango: "9", numero: "IX", nombre: "Nueve de Copas",
    glifo: "😌", pintura: "Serenidad", anio: 1963,
    escena: "Un rostro inmóvil, profundamente tranquilo, enmarcado por un velo de quietud: el deseo que se ha cumplido y no necesita gritarlo.",
    simbolos: ["el rostro sereno", "el velo", "la quietud", "la completud"],
    palabras: ["satisfacción", "deseos cumplidos", "contento"],
    vertical: "El deseo se cumple: el deseo emocional, los anhelos silenciosos. Esta carta es satisfacción plena, la nostalgia de querer más que se aquieta. Disfruta sin culpa y sin necesidad de acumular logros que validen lo que ya eres.",
    invertido: "Insatisfacción a pesar del cumplimiento, apetito insaciable o miedo a que se termine la alegría y por eso no se disfruta. Puede indicar envidia de lo que brilla en casa ajena.",
    consejo: "Permítete estar satisfecha: la serenidad no es apatía, es que ese rincón del alma dejó de pedir. Firma la paz contigo misma."
  },
  {
    id: 209, type: "minor", palo: "copas", rango: "10", numero: "X", nombre: "Diez de Copas",
    glifo: "🌕", pintura: "Bordando el Manto Lunar", anio: 1956,
    escena: "Un personaje borda sobre el manto de la luna, tejiendo su propia luz: plenitud emocional, familia del alma, la armonía universal que se trabaja con hilo fino.",
    simbolos: ["la luna", "el manto bordado", "el hilo", "la plenitud"],
    palabras: ["plenitud", "familia del alma", "armonía"],
    vertical: "La plenitud que corona los afectos: relación que madura, familia elegida, armonía interior que irradia. Es la meta emocional del palo: sentir que el corazón tiene su propia luz y que la comparte.",
    invertido: "Armonía que se ha vuelto apariencia, desavenencias en el clan o el ideal de felicidad impuesto que oprime. Puede indicar que se cuida más la fachada que el tejido real.",
    consejo: "No bordes el manto solo por dentro: la luz se comparte. La armonía plena se cultiva en el tejido afectivo, con hilo real y no con promesas bordadas."
  },
  {
    id: 210, type: "minor", palo: "copas", rango: "sota", numero: "Pn.", nombre: "Sota de Copas",
    glifo: "🦋", pintura: "Niño y Mariposa (Niño Triste)", anio: 1961,
    escena: "Un niño contempla una mariposa que se posa en su mano: sensibilidad primera, mensaje del corazón, la ternura que se atreve a abrir la palma.",
    simbolos: ["el niño", "la mariposa", "la mano abierta", "la vulnerabilidad"],
    palabras: ["sensibilidad", "mensaje del alma", "inocencia"],
    vertical: "Un mensaje de parte del corazón: una invitación afectiva, una revelación tierna, la puerta de los sueños que se entreabre. La sota de copas pide recibir con palma abierta y no con puño cerrado.",
    invertido: "Sensibilidad herida, emociones infantiles mal contenidas o mensajes que se reciben con desconfianza. Puede indicar que la ternura se disfraza de cinismo para no sufrir.",
    consejo: "Abre la mano aunque la mariposa vuele: la sensibilidad no es debilidad, es el órgano que siente el mundo antes de que la cabeza lo entienda."
  },
  {
    id: 211, type: "minor", palo: "copas", rango: "caballero", numero: "Cn.", nombre: "Caballero de Copas",
    glifo: "🚣", pintura: "Taxi Acuático (Locomoción Acuática)", anio: 1962,
    escena: "Una embarcación navega como taxi del agua, llevando a sus pasajeros entre destinos flotantes: el mensajero romántico, el viajero del corazón.",
    simbolos: ["la embarcación", "el agua", "el viaje", "el destino"],
    palabras: ["romance", "invitación", "viaje del corazón"],
    vertical: "Una invitación llega: amorosos, artísticas, de cambio de escenario. El caballero de copas trae las emociones en barca y las acerca a tu orilla. Acepta el viaje, pero averigua hacia dónde navega.",
    invertido: "Promesas que no atracan, romántico que esquiva la orilla o manipulación emocional disfrazada de dulzura. Puede indicar que te enamoras del mensajero y no del mensaje.",
    consejo: "Distingue la invitación del compromiso: navega, sí, pero no entregues la orilla de tu casa a quien solo promete un trayecto."
  },
  {
    id: 212, type: "minor", palo: "copas", rango: "reina", numero: "Ra.", nombre: "Reina de Copas",
    glifo: "🔮", pintura: "Mujer con Esfera", anio: 1957,
    escena: "Una mujer sostiene una esfera que parece un universo contenido: la intuición hecha cuerpo, la emoción que ve más allá de la superficie.",
    simbolos: ["la esfera", "la mujer que sostiene", "el universo contenido", "la intuición"],
    palabras: ["intuición", "compasión", "visión interna"],
    vertical: "La emoción madura y sabia: sabes leer los climas ajenos y el propio. La reina de copas sostiene su mundo sin romperlo: cuida, intuye y sostiene desde el corazón, sin ahogar. Teje afecto con clarividencia.",
    invertido: "Emoción desbordada o reprimida en exceso, intuición nublada por la ansiedad o dar para recibir reconocimiento. Puede indicar sensibilidad que se vuelve sumisión.",
    consejo: "Sostén tu esfera sin apretarla: la intuición florece en la calma, no en la angustia. Escucha el agua profunda antes de hablar."
  },
  {
    id: 213, type: "minor", palo: "copas", rango: "rey", numero: "Ry.", nombre: "Rey de Copas",
    glifo: "🐚", pintura: "Hacia Acuario", anio: 1961,
    escena: "Una figura avanza entre peces y estanques, dominando el reino acuático: el corazón que se gobierna con serenidad y compasión de príncipe de aguas.",
    simbolos: ["el reino acuático", "los peces", "el estanque", "el dominio sereno"],
    palabras: ["equilibrio emocional", "compasión", "dominio"],
    vertical: "Madurez afectiva: gobiernas tus emociones sin reprimirlas. El rey de copas no oculta el agua: la canaliza. Es buen momento para mediar, aconsejar, amar con templanza y no dejarse llevar por mareas ajenas.",
    invertido: "Emociones dominadas por el resentimiento, chantaje afectivo o hipocresía sentimental. Puede indicar un corazón que se ha secado de tanto copar sus propias olas.",
    consejo: "Sé soberano de tu océano interior: que las olas pasen pero no te desborden. La compasión verdadera no es ahogarse con el otro, es llevarlo a la orilla."
  },

  /* ============= ESPADAS · AIRE ============= */
  {
    id: 300, type: "minor", palo: "espadas", rango: "as", numero: "As", nombre: "As de Espadas",
    glifo: "🗡", pintura: "Revelación o el Relojero", anio: 1955,
    escena: "Un relojero contempla engranajes que destilan luz: la revelación cortante, la verdad que se descubre tras el mecanismo. La mente que separa para comprender.",
    simbolos: ["el relojero", "los engranajes", "la revelación", "la claridad"],
    palabras: ["claridad", "verdad", "corte preciso"],
    vertical: "Un estallido de claridad: la verdad que por fin se ve, la decisión que se toma con la mente limpia. El as de espadas es el escalpelo del alma: corta lo falso para que lo cierto respire. Usa tu inteligencia sin utilizarla como arma.",
    invertido: "Pensamiento confuso, verdades que asustan o la conversación que se vuelve espada al hablar. Puede indicar negligencia mental o decisiones tomadas con la brújula rota.",
    consejo: "Pide claridad aunque duela: la verdad revelada siempre ordena el mecanismo. Un corte honesto evita cincuenta infecciones."
  },
  {
    id: 301, type: "minor", palo: "espadas", rango: "2", numero: "II", nombre: "Dos de Espadas",
    glifo: "🙈", pintura: "Mimetismo (Mimesis)", anio: 1960,
    escena: "Una figura se confunde voluntariamente con el paisaje: la estrategia de ocultarse, la indecisión que se camufla, el equilibrio tenso de no querer ver.",
    simbolos: ["el camuflaje", "la figura que se funde", "la indecisión", "la tensión contenida"],
    palabras: ["indecisión", "bloqueo", "armisticio"],
    vertical: "Evitas mirar algo de frente: una decisión que pesa, un conflicto que prefiere la tregua. El dos de espadas es el puente sobre el río que no cruzas. La inacción también elige, y suele elegir quedarte en el patrón.",
    invertido: "La niebla se levanta: por fin decides mirar, hablar, romper el silencio. Puede indicar que la evitación ya es insostenible y que el camuflaje ha cumplido su función.",
    consejo: "Quita el vendaje y nombra la situación. Diez minutos de valentía valen más que meses de camuflaje elegante."
  },
  {
    id: 302, type: "minor", palo: "espadas", rango: "3", numero: "III", nombre: "Tres de Espadas",
    glifo: "💔", pintura: "Ruptura", anio: 1955,
    escena: "Dos figuras separadas por una grieta luminosa contemplan el corte: el dolor se dibuja como una herida de luz entre realidades.",
    simbolos: ["la grieta", "las dos figuras", "el corte", "la herida luminosa"],
    palabras: ["dolor", "desilusión", "verdad triste"],
    vertical: "El corazón se atraviesa por una verdad: desengaño, distancia, la carta que preferirías no haber leído. El tres de espadas duele porque importaba. No lo niegues: el duelo por lo que se rompe también es un acto de amor propio.",
    invertido: "El dolor empieza a integrarse: cicatrización, perdón posible, aprendizaje tras la herida. Puede indicar también que te aferras a la pena como identidad y cuesta soltarla.",
    consejo: "Deja que la herida sea luz y no espina: el dolor contado a tiempo se vuelve paisaje. No guardes las palabras que necesitas decir."
  },
  {
    id: 303, type: "minor", palo: "espadas", rango: "4", numero: "IV", nombre: "Cuatro de Espadas",
    glifo: "🛌", pintura: "Trasmundo", anio: 1955,
    escena: "Un interior-vórtex donde lo onírico se vuelve arquitectura: el reposo como estado de otro mundo, la mente que se retira para recomponerse.",
    simbolos: ["el vórtex", "el interior onírico", "el retiro", "el descanso"],
    palabras: ["retiro", "pausa", "recomposición"],
    vertical: "El descanso no es derrota: es estrategia. La mente pide tregua después del combate de ideas. Retírate del ruido, del debate, de la sobreexigencia. Este descanso es productivo: las piezas que no encajan se ensamblan solas en el sueño.",
    invertido: "Agotamiento negado: sigues de pie cuando tu cuerpo pide retirada. Puede indicar que el descanso se convierte en evasión o que te permites pausa pero no la aprovechas.",
    consejo: "Retírate antes de que te retiren: diez minutos de trasmundo al día evitan que la mente se vuelva trinchera permanente."
  },
  {
    id: 304, type: "minor", palo: "espadas", rango: "5", numero: "V", nombre: "Cinco de Espadas",
    glifo: "⚔️", pintura: "Los Reinos Combatientes I", anio: 1961,
    escena: "Dos castillos enfrentados en un paisaje frío militan con sus formas: la contienda de ganar y perder, la lógica del vencedor que no mira el paisaje que ha pisado.",
    simbolos: ["los castillos", "el enfrentamiento", "el frío", "la lucha de poder"],
    palabras: ["conflicto", "victoria amarga", "orgullo"],
    vertical: "Ganas la discusión, pero a qué precio: la victoria humillante, el argumento que destruye el puente del otro. Pregúntate si prefieres tener razón o tener paz. Esta carta avisa de que el triunfo puede ser también un territorio devastado.",
    invertido: "Cansancio de la guerra: decadencia del conflicto, deseo de tregua, retirada honrosa. Puede indicar que reconoces haber ganado de más y ahora toca repoblar.",
    consejo: "Antes de esgrimir el último argumento, mira el campo: ¿qué vas a cosechar en el territorio que tu razón ha pisado? A veces es más digno perder el debate y ganar el vínculo."
  },
  {
    id: 305, type: "minor", palo: "espadas", rango: "6", numero: "VI", nombre: "Seis de Espadas",
    glifo: "🌊", pintura: "Cambio de Tiempo", anio: 1948,
    escena: "Un personaje con un abrigo al viento doma los cambios atmosféricos con instrumentos: la transición que se administra, el movimiento hacia aguas menos turbias.",
    simbolos: ["el cambio climático interior", "los instrumentos", "la marcha", "la transición"],
    palabras: ["transición", "mudanza", "mejora gradual"],
    vertical: "Atraviesas un cambio que te lleva de aguas turbias a aguas más serenas: mudanza, nuevas coordenadas, o un cambio de rumbo mental. El seis de espadas no promete milagro pero sí dirección: cada remada te aleja del dolor y acerca a la claridad.",
    invertido: "Transición que se atasca, volver atrás o no poder zarpar por culpa o apego. Puede indicar que el clima externo cambió y aún no adaptas tus velas.",
    consejo: "Remas aunque el agua esté gris: la transición no necesita un destino deslumbrador para ser correcta. Disipa la niebla y avanza una milla."
  },
  {
    id: 306, type: "minor", palo: "espadas", rango: "7", numero: "VII", nombre: "Siete de Espadas",
    glifo: "🥷", pintura: "Locomoción Capilar (Detectives)", anio: 1959,
    escena: "Cohetes de cabellera traspasan el espacio como caballos en una carrera de engaños: la astucia, el movimiento que esquiva, la estrategia que no se juega a cara descubierta.",
    simbolos: ["los cohetes capilares", "la carrera", "la astucia", "el escurridizo"],
    palabras: ["astucia", "engaño", "estrategia oculta"],
    vertical: "Hay juego sucio en el aire: o lo estás realizando o lo estás sufriendo. El siete de espadas es la zona gris: el ardid que parece necesario. Pregúntate si la puerta trasera es un plan o una fuga que no te deja en paz.",
    invertido: "Se descubre el engaño: consejos secretos que salen a la luz, traición evidenciada, tu propia astucia que empieza a pesarte. Puede indicar el alivio de dejar el doble juego.",
    consejo: "Elige el camino que puedas sostener frente a la luz: la astucia funciona una vez, la integridad, todas."
  },
  {
    id: 307, type: "minor", palo: "espadas", rango: "8", numero: "VIII", nombre: "Ocho de Espadas",
    glifo: "🕸", pintura: "Visita al Cirujano Plástico", anio: 1960,
    escena: "Una paciente contempla su propio rostro reformado en el espejo del cirujano: los vendajes mentales, la identidad atrapada en lo que cree que ve. Las cadenas son de pensamiento.",
    simbolos: ["el espejo", "el cirujano", "los vendajes", "la imagen propia"],
    palabras: ["atrapamiento", "autolimitación", "miedo mental"],
    vertical: "Te sientes atrapado, pero revisa las cadenas: muchas son solo opiniones tuyas sobre ti. El ocho de espadas es la jaula mental: crees que no puedes, y en eso consiste la trampa. No hay barrotes: hay convicciones.",
    invertido: "Empiezas a estar libre: la crítica se silencia, la prisión abre su puerta. Puede indicar que la autoimagen se libera de la opinión ajena.",
    consejo: "Cuestiona el vendaje: ¿de quién es la voz que te dice que no puedes? La jaula estaba abierta y tú sigues en ella por costumbre. Da un paso fuera."
  },
  {
    id: 308, type: "minor", palo: "espadas", rango: "9", numero: "IX", nombre: "Nueve de Espadas",
    glifo: "🌘", pintura: "Insomnio", anio: 1947,
    escena: "Una figura de rostro angustiado se envuelve entre mantas y ondas nocturnas: el cuarto de las horas en vela, la mente que da vueltas, la preocupación que se vuelve paisaje.",
    simbolos: ["el insomnio", "las mantas", "la noche", "la angustia que envuelve"],
    palabras: ["angustia", "rumiación", "miedo nocturno"],
    vertical: "La mente no duerme: preocupaciones, culpas, catastrofes imaginadas. El nueve de espadas multiplica el tamaño de los fantasmas. Es hora de nombrar la angustia y pedir auxilio: la noche siempre parece más larga que el problema.",
    invertido: "La ansiedad empieza a ceder: el día devuelve las medidas, la pesadilla se desmonta. Puede indicar que aprendes a dormir con los propios pensamientos sin que ellos manden.",
    consejo: "No negocies con el insomnio: levántate, escribe la preocupación, ponle tamaño. Los fantasmas que se escriben pierden el poder de atizar la noche."
  },
  {
    id: 309, type: "minor", palo: "espadas", rango: "10", numero: "X", nombre: "Diez de Espadas",
    glifo: "🌅", pintura: "Caza Nocturna", anio: 1958,
    escena: "Una red de luz nocturna atrapa y ordena lo oscuro: el punto de mayor presión, el final del circuito doloroso, el momento en que la noche ha dado todo lo que tenía.",
    simbolos: ["la red", "la noche", "la luz que ordena", "el límite"],
    palabras: ["final duro", "toque de fondo", "cierre"],
    vertical: "Un ciclo doloroso ha tocado fondo: derrota, pérdida extrema, la sensación de no poder más. Es el final que ya no puede extenderse porque la carne de la situación se ha agotado desde dentro. Paradójicamente, ahí empieza la salida: lo que terminó ya no puede hacerte daño.",
    invertido: "El fondo se ha pasado: te levantas, lo peor queda atrás, la red se alza. Puede indicar también que evitaste el final necesario y el sufrimiento se prolonga por omisión.",
    consejo: "Permítete tocar fondo una sola vez: el fondo es piso, no abismo. Cuando no queda nada que perder, queda todo el coraje por ganar."
  },
  {
    id: 310, type: "minor", palo: "espadas", rango: "sota", numero: "Pn.", nombre: "Sota de Espadas",
    glifo: "👩‍🚀", pintura: "Personaje Astral (Astronauta)", anio: 1961,
    escena: "Un astronauta atraviesa el espacio con su traje: la curiosidad intelectual que no teme a los vacíos, la mente que sale a explorar más allá de lo hablado.",
    simbolos: ["el traje astral", "el espacio", "la exploración", "la mirada alerta"],
    palabras: ["curiosidad", "vigilancia", "idea nueva"],
    vertical: "Alerta mental: una idea nueva, una pregunta afilada, noticias que obligan a pensar. La sota de espadas es la mente joven que vigila desde lo alto sin perder detalle. Escribe, investiga, cuestiona: la curiosidad es tu brújula.",
    invertido: "Vigilancia mal usada: sarcasmo, crítica que hiere o curiosidad que se dispersa en mil cosas. Puede indicar que usas la palabra como espada cuando era mejor como lámpara.",
    consejo: "Usa la mirada aguda para iluminar, no para herir: la inteligencia es astronauta cuando explora y prisión cuando juzga."
  },
  {
    id: 311, type: "minor", palo: "espadas", rango: "caballero", numero: "Cn.", nombre: "Caballero de Espadas",
    glifo: "⚡", pintura: "Explorador Piloto", anio: 1960,
    escena: "Un piloto explora territorios celestes con sus instrumentos de navegación: el pensamiento veloz que avanza sin miedo, la palabra que corta la niebla.",
    simbolos: ["el piloto", "los instrumentos", "el vuelo", "la audacia mental"],
    palabras: ["determinación", "velocidad mental", "discurso"],
    vertical: "Avance intelectual decidido: debates, argumentos, decisiones que se toman con rapidez y claridad. El caballero de espadas no se detiene a pedir permiso. Eficiencia y estrategia: usa la palabra para abrir camino, no para abrir heridas.",
    invertido: "Pensamiento que atropella, prisa que genera errores o comunicación agresiva. Puede indicar dogmas que se esgrimen como espadas y discursos que no escuchan.",
    consejo: "Vuela alto, pero controla los mandos: tu velocidad mental es un don cuando se usa para explorar, y un peligro cuando se usa para atropellar."
  },
  {
    id: 312, type: "minor", palo: "espadas", rango: "reina", numero: "Ra.", nombre: "Reina de Espadas",
    glifo: "🩺", pintura: "Mujer Saliendo del Psicoanalista", anio: 1960,
    escena: "Una mujer abandona el diván abriéndose paso entre un muro velado y la antigua sombra que deja atrás: la lucidez conquistada, el análisis que se vuelve liberación.",
    simbolos: ["el diván", "la mujer que sale", "la sombra antigua", "la lucidez"],
    palabras: ["lucidez", "claridad afectiva", "autonomía mental"],
    vertical: "La mente analítica al servicio de la vida: ves claro, nombras lo que callabas y no te dejas engañar. La reina de espadas es honestidad radical, incluso (sobre todo) contigo misma. La claridad que nace de conocerse duele y cura a la vez.",
    invertido: "Crítica que descalifica, mente que castiga o exceso de análisis que congela los sentimientos. Puede indicar frío disfrazado de objetividad.",
    consejo: "Sé tu propia analista: no para buscar culpables, sino para salir del diván cuando la hora lo pide. La lucidez madura se vuelve compasión, no tribunal."
  },
  {
    id: 313, type: "minor", palo: "espadas", rango: "rey", numero: "Ry.", nombre: "Rey de Espadas",
    glifo: "📐", pintura: "Microcosmos o Determinismo", anio: 1959,
    escena: "Un personaje ordena los fragmentos del universo en pequeñas esferas: el intelecto que clasifica y gobierna, la ley mental que organiza el caos.",
    simbolos: ["las esferas", "el orden", "el microcosmos", "la ley"],
    palabras: ["método", "objetividad", "autoridad intelectual"],
    vertical: "Gobierna la razón con firmeza serena: estructura, método, leyes claras y decisiones tomadas desde los hechos. El rey de espadas es el juez sabio: no se deja llevar ni por la ira ni por la lágrima. Ordena su mundo porque primero ordenó sus ideas.",
    invertido: "Rigor que se vuelve rigidez, pensamiento que tiraniza o poder intelectual usado para dominar. Puede indicar dogmatismo o la ley que se cita para no mirar el caso concreto.",
    consejo: "Manda con medida: el rey de espadas no gobierna por la fuerza de la espada, sino por la claridad de la ley. Que tu razón ilumine, no que defina."
  },

  /* ============= OROS · TIERRA ============= */
  {
    id: 400, type: "minor", palo: "oros", rango: "as", numero: "As", nombre: "As de Oros",
    glifo: "💰", pintura: "Hallazgo", anio: 1956,
    escena: "Un personaje encuentra una esfera brillante tras un bosque de columnas: la oportunidad material que aparece donde menos se esperaba, el tesoro que se halla buscando otra cosa.",
    simbolos: ["la esfera dorada", "el hallazgo", "el bosque de columnas", "el destello"],
    palabras: ["oportunidad", "prosperidad", "anclaje"],
    vertical: "Una oportunidad concreta y tangible: trabajo, dinero, salud, un recurso que llega. El as de oros es la semilla de la prosperidad: si se siembra con cuidado, rinde. Apréciala y dale tiempo: el oro necesita tierra, no solo brillo.",
    invertido: "Oportunidad desperdiciada, recursos mal administrados o el dinero que se escapa entre los dedos. Puede indicar superficialidad: buscar el brillo sin preparar la tierra.",
    consejo: "Recoge el hallazgo y siémbralo: la oportunidad se vuelve fortuna solo cuando se le da raíz y paciencia."
  },
  {
    id: 401, type: "minor", palo: "oros", rango: "2", numero: "II", nombre: "Dos de Oros",
    glifo: "🎯", pintura: "La Tarea", anio: 1955,
    escena: "Un personaje ejecuta con precisión el trabajo que el mundo le encarga: el equilibrio entre obligaciones, la destreza de mantener todos los platos girando.",
    simbolos: ["la tarea", "el equilibrista", "los platos giratorios", "la práctica"],
    palabras: ["equilibrio", "malabarismos", "adaptación"],
    vertical: "Malabares con el tiempo, el dinero o las tareas: aprendes a equilibrar responsabilidades que tiran de ti. El dos de oros es flexibilidad: cambias el enfoque, ajustas el ritmo y mantienes el equilibrio sin dejar caer nada esencial.",
    invertido: "Se cae un plato: desborde, desorden financiero o promesas que no cupieron en la agenda. Puede indicar que pretendes sostener más de lo humanamente posible.",
    consejo: "Suelta un plato para sostener los otros: el malabarista sabio no los sostiene todos, sostiene los que importan con limpieza."
  },
  {
    id: 402, type: "minor", palo: "oros", rango: "3", numero: "III", nombre: "Tres de Oros",
    glifo: "🧑‍🎨", pintura: "Constructores de Instrumentos Musicales", anio: 1961,
    escena: "Artesanos construyen órganos y liras en una arquitectura híbrida: el trabajo de equipo donde cada mano aporta su nota para que el mundo suene afinado.",
    simbolos: ["los constructores", "los instrumentos", "el taller", "la colaboración"],
    palabras: ["trabajo en equipo", "maestría", "reconocimiento del oficio"],
    vertical: "El talento y el trabajo colaborativo: tu esfuerzo es valorado por quienes saben mirarlo. El tres de oros premia la competencia y la cooperación: encajas tu pieza en un conjunto mayor y el conjunto lo nota.",
    invertido: "Trabajo desvalorizado, trabajo en equipo que chirría o mediocridad escondida detrás del oficio. Puede indicar que el esfuerzo no se traduce en reconocimiento.",
    consejo: "Sigue afinando: el mundo suena mejor cuando pones tu instrumento en el conjunto. Que la maestría venga del oficio, no del aplauso."
  },
  {
    id: 403, type: "minor", palo: "oros", rango: "4", numero: "IV", nombre: "Cuatro de Oros",
    glifo: "🔒", pintura: "El Rico", anio: 1958,
    escena: "El rico contempla sus riquezas en un cofre custodiado: la posesión que tranquiliza, el control sobre el recurso, la seguridad que se agarra demasiado fuerte.",
    simbolos: ["las riquezas", "el cofre", "la custodia", "el control"],
    palabras: ["seguridad", "posesión", "control"],
    vertical: "Seguridad material que has construido: disfruta la estabilidad, pero observa tu puño. El cuatro de oros puede ser un abrazo protector o una garra. Proteger lo ganado es sano; guardarlo hasta que asfixie, no tanto.",
    invertido: "Avaricia o miedo a la escasez que se vuelve prisión; también generosidad forzada o pérdida de control sobre los recursos. Puede indicar que el dinero te posee a ti.",
    consejo: "Abre el puño una vez al día: la riqueza que no circula se pudre. Seguridad no es enterrar el tesoro, es saber que puedes compartirlo sin quedarte vacía."
  },
  {
    id: 404, type: "minor", palo: "oros", rango: "5", numero: "V", nombre: "Cinco de Oros",
    glifo: "🥶", pintura: "El Pobre", anio: 1958,
    escena: "La figura austera del pobre en el frío de un interior: carencia material, fragilidad, la sensación de quedarse fuera cuando el mundo celebra.",
    simbolos: ["el pobre", "el frío", "la carencia", "la mesa escasa"],
    palabras: ["carencia", "dificultad", "fragilidad"],
    vertical: "Dificultad material o sensación de estar fuera de la corriente: menos recursos, deudas, enfermedad o exclusión. El cinco de oros es duro, pero no es eterno: la escarcha pasa y las manos que se tienden existen incluso en el crudo invierno.",
    invertido: "Comienza la recuperación: la ayuda llega, el duro invierno cede, te atreves a pedir y a recibir. Puede indicar que la carencia ha sido maestra y la humildad su diploma.",
    consejo: "No te avergüences del frío: pide el abrigo. La pobreza real no es la falta de oro, es la falta de red; y tu red existe aunque tardes en verla."
  },
  {
    id: 405, type: "minor", palo: "oros", rango: "6", numero: "VI", nombre: "Seis de Oros",
    glifo: "🎁", pintura: "Los Hilos del Destino", anio: 1956,
    escena: "Un personaje reparte hilos luminosos que conectan destinos: el dar y el recibir como tejido cósmico, la generosidad que reparte lo que a todos toca.",
    simbolos: ["los hilos", "el reparto", "las conexiones", "el destino"],
    palabras: ["generosidad", "equilibrio", "reciprocidad"],
    vertical: "El dar y recibir en equilibrio: ayuda que llega o que ofreces, recursos que circulan con justicia. El seis de oros enseña que la generosidad no empobrece: teje. Da sin humillar y recibe sin deuda.",
    invertido: "Desequilibrio: dar de más (y a personas que no lo merecen), recibir con avidez, o usar la ayuda como moneda de control. Puede indicar caridad con factura.",
    consejo: "Reparte los hilos con la medida del tejedor: da lo que puedas sin hipotecar tu trama y recibe lo que el destino te tiende sin convertir la ayuda en deuda."
  },
  {
    id: 406, type: "minor", palo: "oros", rango: "7", numero: "VII", nombre: "Siete de Oros",
    glifo: "🌱", pintura: "El Labrador", anio: 1958,
    escena: "El labrador aguarda junto a su campo ya trabajado: la paciencia de quien sembró y espera la cosecha, la fe que se sostiene a base de cuidados diarios.",
    simbolos: ["el labrador", "el campo", "la espera", "la cosecha posible"],
    palabras: ["paciencia", "inversión", "evaluación"],
    vertical: "Sembraste y ahora toca esperar con método: revisar la cosecha, valorar qué ha dado fruto y qué hay que podar. El siete de oros no premia la prisa: premia la constancia y la mirada honesta sobre lo invertido.",
    invertido: "Frustración por resultados lentos, cosecha magra o rendirse justo antes del fruto. Puede indicar que la inversión (de tiempo, dinero, energía) necesita otro cuidado.",
    consejo: "No arranques la planta para ver si crece: riégala, obsérvala y ajusta. La cosecha se mide en ciclos, no en prisas."
  },
  {
    id: 407, type: "minor", palo: "oros", rango: "8", numero: "VIII", nombre: "Ocho de Oros",
    glifo: "🧵", pintura: "La Tejedora (Mujer Roja)", anio: 1956,
    escena: "Una tejedora dedica su cuerpo entero al hilo y al telar, concentrada en el oficio: la maestría que exige repetición, el orgullo del trabajo bien hecho.",
    simbolos: ["el telar", "la tejedora", "el hilo", "la dedicación al oficio"],
    palabras: ["dedicación", "artesanía", "mejora"],
    vertical: "La carta de la maestría: te concentras en el detalle, afinas tu técnica, consagras tiempo al oficio. El ocho de oros es el trabajo que no solo paga: forma. Cada puntada mejora al tejedor tanto como a la tela.",
    invertido: "Perfeccionismo paralizante, oficio descuidado o rutina que ha dejado de enseñar. Puede indicar que trabajas mucho pero repites errores en lugar de corregirlos.",
    consejo: "Dedícate a tu oficio con el cuerpo entero: la maestría es puntada tras puntada. Perfecciona el proceso, no solo el producto."
  },
  {
    id: 408, type: "minor", palo: "oros", rango: "9", numero: "IX", nombre: "Nueve de Oros",
    glifo: "🌸", pintura: "Ramo Floral con Pájaros", anio: 1960,
    escena: "Un ramo de flores y pájaros compone una naturaleza cultivada: el fruto que ya se disfruta, la abundancia que se contempla con serenidad.",
    simbolos: ["el ramo", "los pájaros", "la abundancia", "la contemplación"],
    palabras: ["prosperidad", "autosuficiencia", "disfrute"],
    vertical: "Disfrutas el fruto del propio esfuerzo: prosperidad, independencia, el hogar y la obra que por fin se pueden mirar con satisfacción. El nueve de oros premia la autonomía: lo que tienes es tuyo porque lo has sembrado.",
    invertido: "Prosperidad que no se disfruta, dependencia económica que pesa, o la sensación de que la abundancia ajena te empequeñece. Puede indicar miedo a perder lo ganado.",
    consejo: "Contempla tu ramo: la abundancia es también la capacidad de detenerse a olerla. No midas tu campo con el regla que usa el vecino."
  },
  {
    id: 409, type: "minor", palo: "oros", rango: "10", numero: "X", nombre: "Diez de Oros",
    glifo: "🏺", pintura: "Banqueros en Acción", anio: 1962,
    escena: "Banqueros que transportan cajas de valores por una ciudad de calles imposibles: el patrimonio, la herencia, la riqueza que atraviesa generaciones con su terna de responsabilidades.",
    simbolos: ["las cajas de valores", "los banqueros", "la ciudad", "el patrimonio"],
    palabras: ["legado", "estabilidad", "participación"],
    vertical: "Estabilidad material y herencia: la riqueza que se acumula, el legado familiar, la participación a largo plazo. El diez de oros habla de raíces: lo que construyes hoy sostiene a los que vienen y te sostiene a ti en la vejez.",
    invertido: "Pesadumbre del patrimonio: disputas por herencias, dependencia de la familia o riqueza que oprime en vez de liberar. Puede indicar que la tradición material ahoga el presente.",
    consejo: "Construye patrimonio, pero no a costa del alma: la herencia verdadera incluye el valor aprendido, no solo el número de cajas."
  },
  {
    id: 410, type: "minor", palo: "oros", rango: "sota", numero: "Pn.", nombre: "Sota de Oros",
    glifo: "🔬", pintura: "Descubrimiento de un Geólogo Mutante", anio: 1961,
    escena: "Un personaje explora el encuentro de mundos geológicos y botánicos mutantes: la curiosidad que se toma la tierra con las manos, el aprendizaje paciente de lo visible.",
    simbolos: ["el descubrimiento", "el geólogo", "la tierra mutante", "el estudio"],
    palabras: ["estudio", "práctica", "nuevo inicio"],
    vertical: "Comienzo con los pies en la tierra: nuevas maneras de construir o aprender con método. La sota de oros es la oportunidad de formarse, de abrazar la práctica con paciencia y de aceptar que los grandes frutos nacen de un estudio minucioso.",
    invertido: "Estudio abandonado, metas materiales pospuestas o aprender sin querer aplicar. Puede indicar que la idea florece pero las manos no la acompañan.",
    consejo: "Empieza por la tierra y el cincel: el descubrimiento se revela a quien tiene la paciencia del geólogo. Estudia con las manos, no solo con la frente."
  },
  {
    id: 411, type: "minor", palo: "oros", rango: "caballero", numero: "Cn.", nombre: "Caballero de Oros",
    glifo: "🐝", pintura: "La Abeja Adolorida", anio: 1957,
    escena: "Una abeja de oro adolorida conserva su laboriosidad en el frío: el trabajo constante, paso a paso, la fiabilidad que no se rinde aunque el cielo trabe.",
    simbolos: ["la abeja", "el dorado", "la constancia", "el trabajo"],
    palabras: ["constancia", "responsabilidad", "ritmo lento"],
    vertical: "El trabajo metódico que avanza aunque no se vea: responsabilidad férrea, compromisos que se cumplen, el ritmo del artesano más que del héroe. El caballero de oros no promete milagros: promete llegar, y llega.",
    invertido: "Estancamiento productivo: rutina que aburre, trabajo que no avanza o prometerlo todo y cumplir poco. Puede indicar pereza disfrazada de prudencia.",
    consejo: "Sé la abeja valiente del oficio: el néctar no se recoge con prisas ni con dudas, se recoge con tres mil viajes pequeños."
  },
  {
    id: 412, type: "minor", palo: "oros", rango: "reina", numero: "Ra.", nombre: "Reina de Oros",
    glifo: "🌾", pintura: "Lady Godiva", anio: 1959,
    escena: "La dama cruza la ciudad con la serenidad de quien otorga su propio empeño: la abundancia que se ofrece con dignidad, el cuidado práctico y la generosidad que no se arrepiente.",
    simbolos: ["la dama", "la ciudad", "la entrega generosa", "el cuidado"],
    palabras: ["cuidado", "abundancia práctica", "seguridad"],
    vertical: "La seguridad hecha persona: sabes crear bienestar, administrar lo abundante y cuidar de lo tangible. La reina de oros es hospitalidad, límites firmes y amor práctico. Abundancia que se siente y se comparte en detalles.",
    invertido: "Descuido de lo práctico: finanzas desordenadas, bienestar descuidado o posesividad con lo material. Puede indicar que la seguridad se confunde con el control.",
    consejo: "Cuida el mundo real con manos hábiles: la abundancia se cultiva en la tierra, la cocina y la agenda, no en las promesas."
  },
  {
    id: 413, type: "minor", palo: "oros", rango: "rey", numero: "Ry.", nombre: "Rey de Oros",
    glifo: "👑", pintura: "El Rey", anio: 1958,
    escena: "Un rey rodeado de presencias benévolas sostiene la estabilidad de su reino material: la maestría de la tierra, la prosperidad gobernada con sabiduría.",
    simbolos: ["el rey", "el reino", "el tesoro", "el orden material"],
    palabras: ["maestría material", "prosperidad gobernada", "estabilidad"],
    vertical: "Dominio de lo material: finanzas ordenadas, negocios prósperos, un patrimonio que se administra con visión de largo plazo. El rey de oros es el maestro del mundo denso: convierte recursos en raíces y raíces en frutos.",
    invertido: "Rigidez material, avaricia o crisis de administración: el reino se resiente cuando el rey no ordena su tesoro. Puede indicar confundir el valor propio con el valor del patrimonio.",
    consejo: "Gobierna tu tierra con visión de rey: el tesoro no es para acumularlo, es para dar raíces al mundo que quieres sostener."
  }
];