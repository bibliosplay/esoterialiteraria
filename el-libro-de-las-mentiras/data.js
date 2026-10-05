/**
 * LIBER CCCXXXIII (El libro de las mentiras) - Base de datos esotérica
 * Autor original: Frater Perdurabo (Aleister Crowley, 1913)
 * Adaptación interactiva en español para la WebApp
 */

const LIBER_DATA = {
    title: "El Libro de las Mentiras",
    subheading: "El cual es falsamente llamado RUPTURAS. Los divagues o falsificaciones del Pensamiento Oficial de Frater Perdurabo, el cual es en sí mismo Falsedad.",
    quote: "«Una mentira que dice la verdad; una verdad que oculta una mentira. Aquel que tenga oídos para oír, que ría.»",
    
    // Los 7 Portales de la Iniciación del Sendero
    portals: [
        {
            id: 1,
            title: "Portal I: Malkuth - La Jaula de los Monos",
            sephira: "Malkuth (El Reino)",
            chapterNum: 52,
            chapterTitle: "Monos sin Cola",
            epigraph: "«El hombre es un animal que construye jaulas y luego se enorgullece de ser el único carcelero que sabe llorar en latín.»",
            text: `En el bosque sagrado, los monos con cola saltaban libres de rama en rama sin preocuparse por la gravedad ni por el pecado. 
Pero apareció un mono que perdió la cola en una trampa; sintiendo vergüenza de su desnudez, proclamó:
«¡Hermanos, cortaos las colas, pues la cola es el lazo de Satanás y la moral exige un trasero austero!»
Y aquellos que no lo hicieron fueron lapidados con nueces consagradas.
Así nació la Filosofía, la Ética y la Santa Inquisición en el corral de los bípedos.`,
            crowleyComment: "Crowley anota: «El hombre se inventa deberes para disfrazar sus mutilaciones. Toda moral establecida es una justificación patética de la impotencia. Quien busque la Verdad debe primero reírse de su propia decencia.»",
            challenge: {
                question: "El Guardián de Malkuth te interroga con voz severa: «¿Cuál es el fundamento inmutable de la Virtud moral humana?»",
                options: [
                    {
                        text: "El orden divino grabado en las leyes y la razón de los sabios.",
                        type: "dogma",
                        gnosisChange: -15,
                        egoChange: +20,
                        feedback: "¡Cae en la trampa del ego! Confundes la convención de los monos con la Voluntad Cósmica. Tu certeza dogmática se infla."
                    },
                    {
                        text: "El libre albedrío guiado por la empatía y la compasión universal.",
                        type: "dogma",
                        gnosisChange: -10,
                        egoChange: +15,
                        feedback: "Palabras dulces pero engañosas. La compasión que no brota de la disolución del ego es solo narcisismo espiritual."
                    },
                    {
                        text: "Una máscara cómica tejida por el miedo para justificar la propia debilidad.",
                        type: "truth",
                        gnosisChange: +25,
                        egoChange: -20,
                        feedback: "¡Penetraste el velo! Ríes con Pan. La moral humana cae como una hoja seca y se abre el sendero hacia Yesod."
                    }
                ]
            }
        },
        {
            id: 2,
            title: "Portal II: Yesod - El Espejo de la Luciérnaga",
            sephira: "Yesod (El Fundamento / La Ilusión Lunar)",
            chapterNum: 11,
            chapterTitle: "La Luciérnaga",
            epigraph: "«La mente que contempla su propia fosforescencia declara que ha eclipsado al Sol.»",
            text: `En la ciénaga más oscura de medianoche, una pequeña luciérnaga encendió su cola verdosa.
Mirando a su alrededor, exclamó con orgullo reverente:
«¡Mirad! ¡He desterrado la Noche eterna! Yo soy la Luz del Mundo, el Logos encarnado en barro.»
Pero un sapo que pasaba por allí, atraído por el resplandor, abrió la boca y se la tragó en silencio.
Y la ciénaga continuó siendo la Noche eterna, más sabia y tranquila que antes.`,
            crowleyComment: "Crowley anota: «El intelecto humano es apenas una secreción fosforescente. Quien confunde su propio pensamiento con la Luz Infinita acaba siendo devorado por el primer sapo de la realidad cruda. El silencio es más vasto que tu chispa.»",
            challenge: {
                question: "El Guardián Lunar proyecta tu propio reflejo intelectual: «¿Cómo alcanzará la mente humana el conocimiento del Todo?»",
                options: [
                    {
                        text: "Mediante el raciocinio riguroso, la lógica inductiva y el estudio de los textos sagrados.",
                        type: "dogma",
                        gnosisChange: -20,
                        egoChange: +25,
                        feedback: "¡Te inflas como la luciérnaga! El sapo de la muerte acecha tus silogismos. El intelecto que busca atrapar el Infinito es un mono midiendo el cielo con un metro de madera."
                    },
                    {
                        text: "Reconociendo que la mente es una linterna diminuta que debe apagarse para que el Universo se revele.",
                        type: "truth",
                        gnosisChange: +25,
                        egoChange: -20,
                        feedback: "¡Has apagado la linterna! En la oscuridad perfecta no hay separación entre el observador y lo observado. El sendero asciende."
                    },
                    {
                        text: "A través de visiones extáticas donde el alma se siente superior al resto de los hombres.",
                        type: "dogma",
                        gnosisChange: -15,
                        egoChange: +20,
                        feedback: "Místico engreído: el peor de los ciegos es el que cree que su alucinación es un decreto celestial."
                    }
                ]
            }
        },
        {
            id: 3,
            title: "Portal III: Tiphereth - La Misa del Fénix",
            sephira: "Tiphereth (La Belleza / El Corazón Solar)",
            chapterNum: 44,
            chapterTitle: "La Misa del Fénix",
            epigraph: "«El Mago hiere su propio pecho; el Fénix consume su propio nido de especias y resurge en llama inextinguible.»",
            text: `Hacia el Ocaso se vuelve el Sacerdote. Sobre el altar descansan los Pasteles de Luz.
No hay ofrenda externa digna del Señor del Sol: ni toros degollados, ni incienso comprado a mercaderes.
El Sacerdote toma el cuchillo y marca sobre su pecho la señal del Sol.
«Este es mi cuerpo que ofrezco al fuego; esta es mi sangre que nutre a las estrellas.
Yo soy el sacerdote y yo soy la víctima; yo soy el fuego y yo soy la ceniza.»
El pan empapado en el sacrificio es consumido, y el Fénix alza el vuelo desde el vacío de la carne.`,
            crowleyComment: "Crowley anota: «El 44 es el número de la sangre y del sacrificio de la ilusión. No puedes conservar tu pequeña y mezquina personalidad y al mismo tiempo proclamar que eres Dios. Uno de los dos debe arder hasta las cenizas.»",
            challenge: {
                question: "El Fénix te mira con ojos de fuego solar: «¿Qué ofrenda traes ante el Altar de Tiphereth para que la Llama no te destruya?»",
                options: [
                    {
                        text: "Traigo mis buenas obras, mi erudición teosófica y mis méritos espirituales acumulados.",
                        type: "dogma",
                        gnosisChange: -25,
                        egoChange: +30,
                        feedback: "¡Tus méritos son leña seca de vanidad! El Fénix ríe y te abrasa en vergüenza. En el Altar Sagrado, los trofeos del ego son estiércol."
                    },
                    {
                        text: "No traigo ofrendas externas: ofrezco la renuncia voluntaria a mi propia identidad separada.",
                        type: "truth",
                        gnosisChange: +30,
                        egoChange: -25,
                        feedback: "¡Las cenizas cantan! Quien pierde su pequeña vida la encuentra multiplicada en los fuegos eternos de las estrellas. Te acercas al borde del Abismo."
                    },
                    {
                        text: "Exijo el despertar divino porque mi linaje astrológico es excelso.",
                        type: "dogma",
                        gnosisChange: -30,
                        egoChange: +35,
                        feedback: "La arrogancia del horóscopo es la locura más risible para los Dioses. Tu ego arde sin dar luz."
                    }
                ]
            }
        },
        {
            id: 4,
            title: "Portal IV: El Abismo - El Rubí Estrella (Liber 333: Cap. 25)",
            sephira: "El Abismo de Choronzon (El Demonio 333 de la Dispersión)",
            chapterNum: 25,
            chapterTitle: "El Rubí Estrella",
            isRitual: true,
            epigraph: "«¡APO PANTOS KAKODAIMONOS! ¡Lejos, todo espíritu inmundo! Por los cuatro vientos rugen los Nombres Secretos.»",
            text: `Has llegado al Velo del Abismo. Aquí reina Choronzon, el monstruo de las 333 contradicciones que devora a los adeptos sembrando confusión de palabras y pedantería intelectual.
Para cruzar el Abismo no bastan argumentos: debes ejecutar el Ritual del Rubí Estrella invocando los Cuatro Sellos de Poder en el orden sagrado thelémico:
Al Este: CHAOS (La Fuerza Primordial no engendrada).
Al Norte: BABALON (La Madre Sagrada que cabalga a la Bestia).
Al Oeste: HADIT (El punto inextenso e infinito en el corazón de todo ser).
Al Sur: NUIT (La Señora del Espacio Estrellado e Infinito).`,
            crowleyComment: "Crowley anota: «El 25 es el cuadrado de 5, el Pentagrama invertido hacia adentro. En el Abismo, el lenguaje ordinario es veneno. Solo las vibraciones que desarticulan el pensamiento del dualismo pueden silenciar el aullido de Choronzon.»",
            ritualSteps: [
                { name: "Signo de Entrada", prompt: "Vibra el grito de destierro:", expected: "APO PANTOS KAKODAIMONOS", choices: ["KYRIE ELEISON", "APO PANTOS KAKODAIMONOS", "ABRACADABRA TAV"] },
                { name: "Cuadrante Oriental", prompt: "Hacia el Este proyecta el Verbo de la Creación:", expected: "CHAOS", choices: ["ZEUS", "CHAOS", "LOGOS"] },
                { name: "Cuadrante Septentrional", prompt: "Hacia el Norte proyecta a la Señora de la Copa:", expected: "BABALON", choices: ["ISIS", "BABALON", "HECATE"] },
                { name: "Cuadrante Occidental", prompt: "Hacia el Oeste proyecta la Llama Secreta Central:", expected: "HADIT", choices: ["HADIT", "OSIRIS", "HERMES"] },
                { name: "Cuadrante Meridional", prompt: "Hacia el Sur proyecta a la Bóveda Celeste Infinita:", expected: "NUIT", choices: ["NUIT", "VENUS", "DIANA"] }
            ]
        },
        {
            id: 5,
            title: "Portal V: Binah - La Ostra y la Perla Secreta",
            sephira: "Binah (El Entendimiento / El Mar Amargo)",
            chapterNum: 3,
            chapterTitle: "La Ostra",
            epigraph: "«El dolor del mundo es una perla en el vientre de la noche.»",
            text: `Hermanos de la A.·.A.·., ¿por qué os lamentáis del sufrimiento y de la soledad?
La ostra vive en el fondo del lecho marino, aplastada por toneladas de agua helada y oscuridad.
Un grano de arena áspero, hostil y doloroso penetra su carne blanda.
¿Llora la ostra? ¿Escribe tratados de teodicea culpando a Dios del grano de arena?
No. Envuelve la herida capa tras capa con su propio nácar luminoso.
Cuando el buceador desciende al abismo, no encuentra quejas: encuentra la Perla de Precio Incalculable.`,
            crowleyComment: "Crowley anota: «El número 3 es Binah, la Gran Madre y el Mar del Entendimiento. Toda herida en la existencia es la semilla de una gloria inconcebible para el hombre vulgar. Quien huye del dolor huye de su propia perla.»",
            challenge: {
                question: "La Madre del Abismo sostiene una copa negra: «¿Qué significa el grano de arena que desgarra tu pecho?»",
                options: [
                    {
                        text: "Un castigo kármico por mis vidas pasadas que debo purgar con culpa y cilicios.",
                        type: "dogma",
                        gnosisChange: -20,
                        egoChange: +20,
                        feedback: "¡La culpa es un veneno de esclavos! Binah escupe tu autoflagelación. Crowley aborrecía a los mendigos espirituales."
                    },
                    {
                        text: "La ocasión sagrada donde el dolor se transmuta en la Perla inmortal del Entendimiento.",
                        type: "truth",
                        gnosisChange: +30,
                        egoChange: -25,
                        feedback: "¡El nácar cubre la herida! Comprendes el Misterio de Babalon: el cáliz amargo es la fuente de la bienaventuranza suprema."
                    },
                    {
                        text: "Una injusticia del cosmos contra la cual protestaré amargamente hasta morir.",
                        type: "dogma",
                        gnosisChange: -25,
                        egoChange: +25,
                        feedback: "Gritas como un niño en la noche. El mar amargo te traga en su indiferencia."
                    }
                ]
            }
        },
        {
            id: 6,
            title: "Portal VI: Chokmah - El Enigma de Harpócrates",
            sephira: "Chokmah (La Sabiduría / El Verbo Creador)",
            chapterNum: 69,
            chapterTitle: "La Manera de Triunfar... ¡y la Manera de Chupar Huevos!",
            isSilenceMystery: true,
            epigraph: "«Todo pronunciamiento es una blasfemia contra el Silencio. El Sabio calla; el Necio parlotea en los templos.»",
            text: `Has alcanzado la Esfera de Chokmah, donde reside el Niño coronado: Harpócrates, el Señor del Silencio, con el dedo índice sellando sus labios sagrados.
Sobre el pedestal de oro hay una pregunta grabada con relámpagos:
«¿Cuál es la Suprema Fórmula Mágica de la Verdad Absoluta que resuelve todas las contradicciones del Universo?»
Tres oradores te ofrecen sus libros y pergaminos llenos de fórmulas complejas.
Pero en un rincón del altar parpadea el Glifo del Silencio.`,
            crowleyComment: "Crowley anota: «El capítulo 69 es el arquetipo de la dualidad que se disuelve en el éxtasis. Pero ante la Verdad Absoluta, cualquier frase que formules es una MENTIRA. Solo el Gesto de Harpócrates (el Silencio voluntario) preserva la Gnosis.»",
            challenge: {
                question: "El Niño Divino te mira fijamente esperando tu decreto supremo. ¿Qué respondes?",
                options: [
                    {
                        text: "«La fórmula es 0 = 2, la unión de opuestos en el infinito cósmico.»",
                        type: "dogma",
                        gnosisChange: -15,
                        egoChange: +15,
                        feedback: "Incluso la fórmula cabalística más perfecta se convierte en un dogma muerto cuando la pronuncias con la boca. ¡Harpócrates sacude la cabeza!"
                    },
                    {
                        text: "«La Verdad es el Amor bajo Voluntad y la Ley de Thelema.»",
                        type: "dogma",
                        gnosisChange: -15,
                        egoChange: +15,
                        feedback: "Citas la ley sagrada como un loro en un catecismo. ¡La Verdad no se recita, se encarna!"
                    },
                    {
                        text: "[ GUARDAR SILENCIO ABSOLUTO Y PONER EL DEDO EN LOS LABIOS ]",
                        type: "truth",
                        isSilence: true,
                        gnosisChange: +35,
                        egoChange: -30,
                        feedback: "¡SILENCIO SAGRADO! Has ejecutado el Gesto de Harpócrates. No has caído en la trampa del Verbo mentiroso. Los cielos se abren ante la Corona de Kether."
                    }
                ]
            }
        },
        {
            id: 7,
            title: "Portal VII: Kether / Ain Soph - El Cero Divino",
            sephira: "Kether (La Corona) / Ain Soph (La Nada Infinita)",
            chapterNum: 0,
            chapterTitle: "El Ante Primum Mobile",
            epigraph: "«¡O! ¡El Abismo de las Alucinaciones! ¡No hay ningún Dios en ningún lugar! Y he aquí, ¡Él es Todo en Todo!»",
            text: `¡Bienvenido al Fin de las Mentiras, donde el Círculo se cierra en la Nada!
Aquí, el libro entero de Crowley se resume en la ecuación suprema:
0 = 2.
El Cero no es la ausencia de ser, sino la plenitud indiferenciada.
Para experimentar el éxtasis del Amor, el Cero se divide en +1 y -1 (El Observador y lo Observado, la Nada y el Espacio).
Y cuando el +1 abraza al -1 en el orgasmo místico de la existencia, ambos se aniquilan volviendo al Cero primordial.
Toda vida es una mentira divina creada para que Dios pueda jugar al escondite consigo mismo.`,
            crowleyComment: "Crowley anota: «El capítulo 0 es el Cero. Si crees que este libro te ha enseñado algo, eres un idiota. Si has descubierto que todo lo que creías saber era una mentira maravillosa, estás listo para vivir con Voluntad Pura.»",
            challenge: {
                question: "En el trono de luz blanca donde no queda nadie para escuchar: «Aspirante, ¿qué es este 'Libro de las Mentiras'?»",
                options: [
                    {
                        text: "Un compendio de herejías absurdas escritas por un loco drogadicto en 1913.",
                        type: "dogma",
                        gnosisChange: -30,
                        egoChange: +30,
                        feedback: "La mirada del burgués temeroso. Vuelves al fango de Malkuth a discutir con los monos."
                    },
                    {
                        text: "La verdad revelada literal e infalible que debo adorar como una nueva religión.",
                        type: "dogma",
                        gnosisChange: -30,
                        egoChange: +30,
                        feedback: "¡Horror! Has convertido a Crowley en un Papa. Frater Perdurabo se revuelve en su tumba riendo a carcajadas de tu estupidez."
                    },
                    {
                        text: "El espejo de mis propias ilusiones: una mentira que al desintegrarse me devuelve a la Libertad Absoluta.",
                        type: "truth",
                        gnosisChange: +40,
                        egoChange: -40,
                        feedback: "¡CONSUMATUM EST! Has disuelto el último remanente del ego. Eres el Niño del Abismo. Has conquistado Liber CCCXXXIII."
                    }
                ]
            }
        }
    ],

    // Mazo de las 93 Mentiras (Oráculo y Códice para contemplación y adivinación)
    oracleCards: [
        {
            num: 1,
            title: "El Sábado del Chivo",
            theme: "Unidad y Éxtasis",
            symbol: "♑",
            quote: "«O! ¡El corazón de N.O.X.! La noche de Pan, donde dos se vuelven ninguno en el abrazo salvaje.»",
            reading: "Deja de intentar arreglar la vida con la mente calculadora. Hay momentos donde el único acto sagrado es el salto al vacío del gozo irracional.",
            paradox: "Solo cuando renuncias a tu control encuentras tu verdadera dirección.",
            crowleyNote: "Capítulo 1: El Chivo es Pan, el Todo. La creación no es un deber, sino una fiesta desenfrenada del Cero."
        },
        {
            num: 3,
            title: "La Ostra",
            theme: "Transmutación del Sufrimiento",
            symbol: "🦪",
            quote: "«En el fango y la presión abisal, la carne secreta destila su perla.»",
            reading: "Esa herida o contrariedad que hoy te obsesiona es exactamente el grano de arena que necesita tu alma para tallar belleza imperecedera.",
            paradox: "La herida no es un obstáculo para la luz; es por donde entra la luz.",
            crowleyNote: "Capítulo 3: La ostra no debate con la arena; la abraza y la transmuta en gloria."
        },
        {
            num: 11,
            title: "La Luciérnaga",
            theme: "Orgullo Intelectual",
            symbol: "✨",
            quote: "«Brillaba como un sol pequeño en la noche, hasta que el sapo almorzó filosofía.»",
            reading: "Cuidado con creerte más lúcido o despierto que los demás. Tu teoría favorita puede ser simplemente el cebo con el que la realidad te devorará.",
            paradox: "Quien proclama que sabe la verdad es el único que todavía duerme profundamente.",
            crowleyNote: "Capítulo 11: Nada es más cómico para los Maestros del Templo que un intelectual convencido de su genialidad."
        },
        {
            num: 15,
            title: "El Cañón del Fusil",
            theme: "Dirección y Voluntad",
            symbol: "🎯",
            quote: "«El cañón que apunta a mil blancos no dispara a ninguno. Apunta a la Nada y atravesarás el Todo.»",
            reading: "Dispersas tu energía en decenas de pequeñas ansiedades. Elige un solo punto cardinal y consagra toda tu fuerza a él.",
            paradox: "Para alcanzar el blanco supremo, debes dejar de desear el resultado.",
            crowleyNote: "Capítulo 15: Voluntad Pura, no mitigada por el propósito, libre del ansia de resultado, es en todo sentido perfecta."
        },
        {
            num: 21,
            title: "La Telaraña Ciega",
            theme: "Maya / La Ilusión",
            symbol: "🕸️",
            quote: "«La araña teje el mundo con su saliva; el sabio contempla el hilo y admira la nada entre los nudos.»",
            reading: "Los problemas que te quitan el sueño son telarañas mentales construidas por tu propia saliva verbal. Basta un soplo de silencio para disolverlos.",
            paradox: "La trampa no la puso el mundo; te encerraste tú mismo en tu propia descripción del mundo.",
            crowleyNote: "Capítulo 21: El cosmos entero es una alucinación compartida. El mago aprende a reescribir el guion."
        },
        {
            num: 25,
            title: "El Rubí Estrella",
            theme: "Destierro y Purificación",
            symbol: "⭐",
            quote: "«¡APO PANTOS KAKODAIMONOS! Que caigan las máscaras de los demonios pedantes.»",
            reading: "Hora de hacer limpieza implacable. Despide a las personas que te vampirizan, rompe con las ideas rancias y declara tu santuario sagrado.",
            paradox: "Para recibir lo divino, primero debes desterrar con ferocidad todo lo mediocre.",
            crowleyNote: "Capítulo 25: El destierro no es un pedido amable; es una orden cósmica respaldada por la espada flamígera."
        },
        {
            num: 36,
            title: "El Zafiro Estrella",
            theme: "Unión de Opuestos",
            symbol: "💎",
            quote: "«El Santo Grial y la Lanza; cuando se besan, la muerte se convierte en néctar.»",
            reading: "Deja de pelear contra tu lado oscuro. Tu sombra posee la energía que a tu luz le falta para manifestarse.",
            paradox: "La reconciliación de tus contradicciones internas es la clave del poder real.",
            crowleyNote: "Capítulo 36: El Hexagrama es el matrimonio del fuego y el agua. Sin ese pacto, el mago es un inválido."
        },
        {
            num: 44,
            title: "La Misa del Fénix",
            theme: "Renacimiento Radical",
            symbol: "🔥",
            quote: "«El sacerdote que no está dispuesto a ser sacrificado es un bufón disfrazado de oro.»",
            reading: "Algo en tu vida debe morir hoy mismo para que nazca lo que verdaderamente eres. No intentes parchar lo caduco; enciende la pira.",
            paradox: "La verdadera inmortalidad se conquista muriendo voluntariamente cada día.",
            crowleyNote: "Capítulo 44: Solo desde las cenizas de la vieja identidad se despliegan las alas del Fénix."
        },
        {
            num: 52,
            title: "Monos sin Cola",
            theme: "Humor y Sátira Social",
            symbol: "🐒",
            quote: "«Cortaron sus colas y llamaron 'Decencia' a su mutilación.»",
            reading: "No busques la aprobación del rebaño. Lo que la sociedad llama 'madurez' suele ser la renuncia cobarde a la chispa divina de la locura sagrada.",
            paradox: "Ser considerado 'anormal' por un mundo enfermo es síntoma de excelente salud espiritual.",
            crowleyNote: "Capítulo 52: La risa es el disolvente universal de todas las tiranías clericales y morales."
        },
        {
            num: 64,
            title: "El Carro",
            theme: "El Guardián Secreto",
            symbol: "🛡️",
            quote: "«A través del desierto árido, el Auriga sostiene las riendas sin tocar a los corceles.»",
            reading: "Confía en la guía invisible de tu Ángel Guardián. Cuando dejas de forzar las circunstancias, los acontecimientos se alinean por sí solos.",
            paradox: "La mayor maestría consiste en dejar que lo Superior actúe a través de tu silencio.",
            crowleyNote: "Capítulo 64: El Carro cruza el abismo solo cuando el conductor entrega el mando a la Fuente."
        },
        {
            num: 69,
            title: "El Éxtasis de la Paradoja",
            theme: "Amor bajo Voluntad",
            symbol: "☯️",
            quote: "«El que sube baja, el que da recibe, y el que guarda silencio lo ha dicho todo.»",
            reading: "No te tomes las cosas tan en serio. La vida espiritual es una danza erótica entre opuestos, no un examen de matemáticas puritanas.",
            paradox: "El secreto de triunfar es saber reírse del triunfo y del fracaso con idéntica devoción.",
            crowleyNote: "Capítulo 69: El doble sentido es el lenguaje de los iniciados para eludir la censura de los estúpidos."
        },
        {
            num: 77,
            title: "Laylah",
            theme: "La Noche de Dios",
            symbol: "🌙",
            quote: "«En sus ojos negros como el carbón duermen todas las constelaciones jamás nacidas.»",
            reading: "Acepta el período de descanso, de sombra o de incertidumbre. En la oscuridad fértil germina todo lo sagrado.",
            paradox: "La noche no es la ausencia de luz; es la luz demasiado inmensa para tus ojos mortales.",
            crowleyNote: "Capítulo 77: Laylah significa Noche en árabe, y fue el nombre de la mujer escarlata amada por Perdurabo."
        },
        {
            num: 82,
            title: "Bortsch",
            theme: "La Sopa Cósmica",
            symbol: "🍲",
            quote: "«Echa en la olla todas las contradicciones, remueve con el bastón de un loco y sírvelo caliente a los dioses hambrientos.»",
            reading: "Deja de clasificar todo en 'bueno' o 'malo', 'puro' o 'impuro'. El universo se nutre de la mezcla salvaje de todos los ingredientes.",
            paradox: "La perfección no es la esterilidad sin manchas; es la exuberancia caótica armonizada por la risa.",
            crowleyNote: "Capítulo 82: La seriedad es una enfermedad del bazo. Los ángeles vuelan porque se toman a sí mismos con ligereza."
        },
        {
            num: 91,
            title: "El Heptagrama",
            theme: "El Sello de Babalon",
            symbol: "✡️",
            quote: "«Siete son las estrellas, siete los sellos, y siete los misterios que no pueden pronunciarse.»",
            reading: "Estás ante un umbral de culminación. Todo lo que has vivido hasta hoy cobra sentido cuando contemplas el cuadro completo.",
            paradox: "El final del viaje es descubrir que nunca te habías movido del punto de partida.",
            crowleyNote: "Capítulo 91: La estrella de siete puntas es la firma de la Madre de las Abominaciones, que transmuta lo profano en santidad."
        },
        {
            num: 93,
            title: "El Fin de las Mentiras",
            theme: "Thelema y Agape",
            symbol: "☀️",
            quote: "«93: Haz tu voluntad será toda la Ley. Amor es la ley, amor bajo voluntad.»",
            reading: "Conoce tu verdadera voluntad y síguela sin vacilar. El universo entero conspirará para abrirte camino porque tú y el universo sois uno.",
            paradox: "Tu única obligación en esta tierra es ser plenamente quien ya eres en la eternidad.",
            crowleyNote: "Capítulo 93: 93 es el valor numérico en gematría griega de Thelema (Voluntad) y Agape (Amor). Aquí concluye el libro de las mentiras."
        }
    ],

    // Desafíos de agilidad paradójica para la Cripta de Choronzon
    choronzonTrials: [
        {
            riddle: "Choronzon aúlla desde la niebla: «Si te digo que 'TODO LO QUE DIGO ES UNA MENTIRA', ¿estoy diciendo la verdad o estoy mintiendo?»",
            options: [
                { text: "Estás diciendo la verdad, por ende no mientes.", correct: false, comment: "¡Paradoja elemental! Si dices la verdad, tu afirmación de que todo es mentira es falsa." },
                { text: "Estás mintiendo, por ende todo lo que dices es verdad.", correct: false, comment: "¡Trampa de nuevo! Si mientes, la frase no se sostiene lógicamente." },
                { text: "Ambas y ninguna: es el nudo del intelecto que solo se desata con una carcajada.", correct: true, comment: "¡Exacto! Choronzon retrocede indignado ante quien no muerde el anzuelo de la lógica dualista." }
            ]
        },
        {
            riddle: "«¿Qué pesa más sobre el alma del adepto: un pecado terrible o una virtud solemne?»",
            options: [
                { text: "El pecado terrible, porque mancha la pureza del espíritu.", correct: false, comment: "Moralina barata. El pecador al menos sabe que sufre; el santurrón se cree salvado." },
                { text: "La virtud solemne, porque infla el orgullo del ego con oro falso.", correct: true, comment: "¡Bien visto! Crowley advertía que la soberbia moral es la prisión más difícil de romper en el Abismo." },
                { text: "Ambos pesan exactamente lo mismo en la balanza de Maat.", correct: false, comment: "Respuesta tibia. No has captado la perversidad del orgullo piadoso." }
            ]
        },
        {
            riddle: "«¿Cuál es el valor cabalístico supremo de la Nada según el Libro de las Mentiras?»",
            options: [
                { text: "0 = 2 (La nada equivale a la tensión armónica de los dos opuestos).", correct: true, comment: "¡Clave de bóveda! El Cero de Nuit se manifiesta en la dualidad para experimentar el amor." },
                { text: "Cero absoluto: el vacío estéril donde nada existe ni tiene sentido.", correct: false, comment: "Visión nihilista vulgar. Para Crowley, la Nada es la plenitud embarazada de mundos." },
                { text: "El infinito positivo sumado a la eternidad cósmica.", correct: false, comment: "Mística new age sin rigor hermético." }
            ]
        },
        {
            riddle: "«¿Por qué Frater Perdurabo tituló este tratado sagrado como 'EL LIBRO DE LAS MENTIRAS'?»",
            options: [
                { text: "Porque quería burlarse de sus lectores y vender ejemplares con escándalo.", correct: false, comment: "Choronzon aplaude tu cinismo vulgar, pero no has entendido nada del misticismo thelémico." },
                { text: "Porque en cuanto la Verdad Inefable se encierra en palabras humanas, se convierte inevitablemente en una mentira.", correct: true, comment: "¡Verdad incontestable! 'El Tao que puede ser nombrado no es el Tao eterno'. El lenguaje es una máscara." },
                { text: "Porque contiene hechizos demoníacos para engañar a los incautos.", correct: false, comment: "Propaganda de taberneros asustados. Crowley te mira con desprecio divertido." }
            ]
        },
        {
            riddle: "«El aspirante pregunta: '¿Cómo encuentro a mi Santo Ángel Guardián?' ¿Cuál es la respuesta de Liber 333?»",
            options: [
                { text: "Ayuna en el desierto durante 40 días leyendo tratados medievales.", correct: false, comment: "Masoquismo estéril. Los libros viejos no te darán alas." },
                { text: "Deja de buscarlo como a un extraño afuera; disuelve el 'yo' que finge estar separado de Él.", correct: true, comment: "¡Eureka! El Ángel no está lejos: es tu propia naturaleza primordial esperando el silencio del ego." },
                { text: "Paga las cuotas de una orden secreta y compra sus amuletos consagrados.", correct: false, comment: "El timo de los charlatanes. Crowley denunciaba a los mercaderes del ocultismo." }
            ]
        }
    ]
};
