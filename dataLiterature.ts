/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LiteratureQuestion, LiteraryDeviceSummary, OralTemplate } from './types';

export const ROMANCE_POEM = {
  title: 'La niña del camino',
  titleArm: 'Ճանապարհի աղջիկը',
  lines: [
    { num: 1, text: 'Por la senda va la niña,', arm: 'Կածանով գնում է աղջիկը,', syllables: 'Por (1) / la (2) / sen (3) / da (4) / va (5) / la (6) / ni (7) / ña (8)', syllableCount: 8, isPair: false },
    { num: 2, text: 'con su capa colorada.', arm: 'իր կարմիր թիկնոցով։', syllables: 'Con (1) / su (2) / ca (3) / pa (4) / co (5) / lo (6) / ra (7) / da (8)', syllableCount: 8, isPair: true, rhymeVowels: 'a-a', rhymeWord: 'colorada' },
    { num: 3, text: 'Las estrellas van brillando', arm: 'Աստղերը փայլում են,', syllables: 'Las (1) / es (2) / tre (3) / llas (4) / van (5) / bri (6) / llan (7) / do (8)', syllableCount: 8, isPair: false },
    { num: 4, text: 'cuando llega la mañana.', arm: 'երբ գալիս է առավոտը։', syllables: 'Cuan (1) / do (2) / lle (3) / ga (4) / la (5) / ma (6) / ña (7) / na (8)', syllableCount: 8, isPair: true, rhymeVowels: 'a-a', rhymeWord: 'mañana' },
    { num: 5, text: 'Un caballo corre libre,', arm: 'Ձին վազում է ազատ,', syllables: 'Un (1) / ca (2) / ba (3) / llo (4) / co (5) / rre (6) / li (7) / bre (8)', syllableCount: 8, isPair: false },
    { num: 6, text: 'va siguiendo las pisadas.', arm: 'հետևում է հետքերին։', syllables: 'Va (1) / si (2) / guien (3) / do (4) / las (5) / pi (6) / sa (7) / das (8)', syllableCount: 8, isPair: true, rhymeVowels: 'a-a', rhymeWord: 'pisadas' },
    { num: 7, text: 'Y la brisa canta suave', arm: 'Եվ զեփյուռը մեղմ երգում է,', syllables: 'Y (1) / la (2) / bri (3) / sa (4) / can (5) / ta (6) / sua (7) / ve (8)', syllableCount: 8, isPair: false },
    { num: 8, text: 'bajo luces de la plaza.', arm: 'հրապարակի լույսերի տակ։', syllables: 'Ba (1) / jo (2) / lu (3) / ces (4) / de (5) / la (6) / pla (7) / za (8)', syllableCount: 8, isPair: true, rhymeVowels: 'a-a', rhymeWord: 'plaza' }
  ]
};

export const PUENTE_TEXT = {
  title: 'El puente encantado',
  titleArm: 'Կախարդված կամուրջը',
  paragraphs: [
    {
      es: 'En un pequeño pueblo de España había un puente muy antiguo. Sus habitantes contaban que, durante las noches de luna llena, una mujer misteriosa caminaba por él.',
      arm: 'Իսպանական մի փոքրիկ գյուղում մի շատ հին կամուրջ կար։ Նրա բնակիչները պատմում էին, որ լիալուսնի գիշերներին մի խորհրդավոր կին էր քայլում դրա վրայով։'
    },
    {
      es: 'Nadie conocía al autor de aquella historia. Los abuelos se la contaban a sus nietos y, con los años, aparecieron diferentes versiones.',
      arm: 'Ոչ ոք չգիտեր այդ պատմության հեղինակին։ Տատիկ-պապիկները պատմում էին այն իրենց թոռներին, և տարիների ընթացքում ի հայտ եկան տարբեր տարբերակներ։'
    },
    {
      es: 'Una noche, Elena decidió visitar el puente. El viento susurraba entre los árboles. De pronto, escuchó un sonido: —¡Toc, toc!',
      arm: 'Մի գիշեր Ելենան որոշեց այցելել կամուրջը։ Քամին շշնջում էր ծառերի միջև։ Հանկարծ նա մի ձայն լսեց․ — Տո՛կ, տո՛կ։'
    },
    {
      es: 'Elena sintió miedo. Su corazón era un tambor. Quería regresar. Quería correr. Quería pedir ayuda. Pero decidió continuar.',
      arm: 'Ելենան վախ զգաց։ Նրա սիրտը թմբուկ էր։ Նա ուզում էր վերադառնալ։ Ուզում էր վազել։ Ուզում էր օգնություն կանչել։ Բայց որոշեց շարունակել։'
    },
    {
      es: 'En el puente encontró una pequeña caja con una llave dorada. —¡Lo he encontrado con mis propios ojos! —exclamó. Desde aquel día, Elena también comenzó a contar aquella historia a sus amigos.',
      arm: 'Կամրջի վրա նա գտավ մի փոքրիկ տուփ՝ ոսկեզօծ բանալիով։ — Ես սա գտա իմ սեփական աչքերով։ — բացականչեց նա։ Այդ օրվանից սկսած՝ Ելենան նույնպես սկսեց այդ պատմությունը պատմել իր ընկերներին։'
    }
  ]
};

export const ALL_100_QUESTIONS: LiteratureQuestion[] = [
  // EJERCICIO 1. Literatura popular y culta (1-8)
  {
    id: 1,
    exerciseTitleEs: 'EJERCICIO 1. Literatura popular y culta',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 1. Ժողովրդական և հեղինակային գրականություն',
    exerciseType: 'mcq',
    questionEs: '¿Por qué se considera anónima gran parte de la literatura popular?',
    questionArm: 'Ինչո՞ւ է ժողովրդական գրականության մեծ մասն անանուն համարվում։',
    options: [
      { key: 'A', textEs: 'Porque no tiene personajes.', textArm: 'Որովհետև կերպարներ չունի։' },
      { key: 'B', textEs: 'Porque se desconoce al autor.', textArm: 'Որովհետև հեղինակը հայտնի չէ։' },
      { key: 'C', textEs: 'Porque está escrita en verso.', textArm: 'Որովհետև չափածո է գրված։' }
    ],
    correctAnswer: 'B',
    explanationEs: 'B — Se desconoce al autor. Se transmite de generación en generación a lo largo del tiempo.',
    explanationArm: 'Ստեղծագործության հեղինակը հայտնի չէ, որովհետև այն երկար ժամանակ փոխանցվել է սերնդեսերունդ։'
  },
  {
    id: 2,
    exerciseTitleEs: 'EJERCICIO 1. Literatura popular y culta',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 1. Ժողովրդական և հեղինակային գրականություն',
    exerciseType: 'mcq',
    questionEs: '¿Qué puede ocurrir cuando una obra se transmite oralmente?',
    questionArm: 'Ի՞նչ կարող է տեղի ունենալ, երբ ստեղծագործությունը փոխանցվում է բանավոր։',
    options: [
      { key: 'A', textEs: 'Puede sufrir modificaciones.', textArm: 'Կարող է փոփոխությունների ենթարկվել։' },
      { key: 'B', textEs: 'Su autor siempre se hace famoso.', textArm: 'Նրա հեղինակը միշտ հայտնի է դառնում։' },
      { key: 'C', textEs: 'Nunca cambia.', textArm: 'Երբեք չի փոխվում։' }
    ],
    correctAnswer: 'A',
    explanationEs: 'A — Puede sufrir modificaciones. Al narrarse de boca en boca, surgen variantes y versiones.',
    explanationArm: 'Բանավոր պատմելիս մարդիկ կարող են փոխել որոշ բառեր, մանրամասներ կամ իրադարձություններ։'
  },
  {
    id: 3,
    exerciseTitleEs: 'EJERCICIO 1. Literatura popular y culta',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 1. Ժողովրդական և հեղինակային գրականություն',
    exerciseType: 'mcq',
    questionEs: '¿Qué característica corresponde a la literatura culta?',
    questionArm: 'Ո՞ր հատկանիշն է բնորոշ հեղինակային գրականությանը։',
    options: [
      { key: 'A', textEs: 'Siempre es anónima.', textArm: 'Միշտ անանուն է։' },
      { key: 'B', textEs: 'Solo se transmite oralmente.', textArm: 'Միայն բանավոր է փոխանցվում։' },
      { key: 'C', textEs: 'Suele tener un autor conocido.', textArm: 'Սովորաբար ունի հայտնի հեղինակ։' }
    ],
    correctAnswer: 'C',
    explanationEs: 'C — Autor conocido. La literatura culta tiene un creador individual identificado y forma escrita fija.',
    explanationArm: 'Հեղինակային գրականությունը սովորաբար ունի հայտնի հեղինակ և գրավոր ամրագրված տեքստ։'
  },
  {
    id: 4,
    exerciseTitleEs: 'EJERCICIO 1. Literatura popular y culta',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 1. Ժողովրդական և հեղինակային գրականություն',
    exerciseType: 'mcq',
    questionEs: 'Una canción tradicional que cantan los abuelos a sus nietos pertenece generalmente a…',
    questionArm: 'Պապիկներից ու տատիկներից թոռներին փոխանցվող ավանդական երգը սովորաբար պատկանում է՝',
    options: [
      { key: 'A', textEs: 'la literatura popular.', textArm: 'ժողովրդական գրականությանը։' },
      { key: 'B', textEs: 'la literatura científica.', textArm: 'գիտական գրականությանը։' },
      { key: 'C', textEs: 'la literatura periodística.', textArm: 'լրագրողական գրականությանը։' }
    ],
    correctAnswer: 'A',
    explanationEs: 'A — Literatura popular. Las canciones tradicionales transmitidas en la familia son parte del folclore popular.',
    explanationArm: 'Ավանդական երգերը հաճախ փոխանցվում են բանավոր և ժողովրդական ստեղծագործության մաս են։'
  },
  {
    id: 5,
    exerciseTitleEs: 'EJERCICIO 1. Literatura popular y culta',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 1. Ժողովրդական և հեղինակային գրականություն',
    exerciseType: 'mcq',
    questionEs: '¿Qué obras pueden pertenecer a la literatura popular?',
    questionArm: 'Ո՞ր ստեղծագործությունները կարող են պատկանել ժողովրդական գրականությանը։',
    options: [
      { key: 'A', textEs: 'Nanas, romances y villancicos.', textArm: 'Օրորոցայիններ (nanas), ռոմանսներ և տոնական երգեր (villancicos)։' },
      { key: 'B', textEs: 'Artículos científicos.', textArm: 'Գիտական հոդվածներ։' },
      { key: 'C', textEs: 'Manuales técnicos.', textArm: 'Տեխնիկական ձեռնարկներ։' }
    ],
    correctAnswer: 'A',
    explanationEs: 'A — Nanas, romances y villancicos. Son formas líricas y narrativas tradicionales del pueblo.',
    explanationArm: 'Օրորոցայինները, ռոմանսներն ու վիլյանսիկոները ժողովրդական գրականության բնորոշ օրինակներ են։'
  },
  {
    id: 6,
    exerciseTitleEs: 'EJERCICIO 1. Literatura popular y culta',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 1. Ժողովրդական և հեղինակային գրականություն',
    exerciseType: 'mcq',
    questionEs: '¿Cómo se difundía tradicionalmente la literatura culta?',
    questionArm: 'Ինչպե՞ս էր ավանդաբար տարածվում հեղինակային գրականությունը։',
    options: [
      { key: 'A', textEs: 'Solo mediante canciones.', textArm: 'Միայն երգերի միջոցով։' },
      { key: 'B', textEs: 'Mediante copias manuscritas y, después, impresas.', textArm: 'Ձեռագիր, իսկ հետո տպագիր օրինակներով։' },
      { key: 'C', textEs: 'Únicamente de memoria.', textArm: 'Բացառապես անգիր հիշողությամբ։' }
    ],
    correctAnswer: 'B',
    explanationEs: 'B — Copias manuscritas e impresas. Se fija por escrito para asegurar la autoría y fidelidad.',
    explanationArm: 'Հեղինակային ստեղծագործությունները տարածվել են գրավոր տարբերակներով (ձեռագրեր և տպագիր գրքեր)։'
  },
  {
    id: 7,
    exerciseTitleEs: 'EJERCICIO 1. Literatura popular y culta',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 1. Ժողովրդական և հեղինակային գրականություն',
    exerciseType: 'mcq',
    questionEs: '¿Puede la literatura popular estar escrita en prosa?',
    questionArm: 'Կարո՞ղ է ժողովրդական գրականությունը արձակ լինել։',
    options: [
      { key: 'A', textEs: 'Sí (cuentos populares, leyendas, fábulas).', textArm: 'Այո (ժողովրդական հեքիաթներ, ավանդազրույցներ)։' },
      { key: 'B', textEs: 'No.', textArm: 'Ոչ։' },
      { key: 'C', textEs: 'Solo si tiene rima.', textArm: 'Միայն եթե հանգ ունի։' }
    ],
    correctAnswer: 'A',
    explanationEs: 'A — Sí. Los cuentos populares, mitos y leyendas suelen ser narraciones en prosa.',
    explanationArm: 'Ժողովրդական հեքիաթներն ու ավանդազրույցները կարող են արձակ (prosa) լինել։'
  },
  {
    id: 8,
    exerciseTitleEs: 'EJERCICIO 1. Literatura popular y culta',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 1. Ժողովրդական և հեղինակային գրականություն',
    exerciseType: 'mcq',
    questionEs: '¿Qué diferencia principal existe entre la literatura popular y la culta?',
    questionArm: 'Ո՞րն է ժողովրդական և հեղինակային գրականության հիմնական տարբերությունը։',
    options: [
      { key: 'A', textEs: 'La literatura popular siempre es más larga.', textArm: 'Ժողովրդականը միշտ ավելի երկար է։' },
      { key: 'B', textEs: 'La popular suele transmitirse oralmente y ser anónima; la culta suele tener autor conocido.', textArm: 'Ժողովրդականը բանավոր է ու անանուն, իսկ հեղինակայինն ունի հայտնի հեղինակ։' },
      { key: 'C', textEs: 'La literatura culta no utiliza figuras literarias.', textArm: 'Հեղինակային գրականությունը պատկերավորման միջոցներ չի օգտագործում։' }
    ],
    correctAnswer: 'B',
    explanationEs: 'B. La literatura popular se crea y difunde por el pueblo de forma anónima y oral, la culta es obra escrita de un autor con nombre.',
    explanationArm: 'Հիմնական տարբերությունները հեղինակության ճանաչելիությունն ու փոխանցման եղանակն են։'
  },

  // EJERCICIO 2. Romance, leyenda, mito o cuento (9-16)
  {
    id: 9,
    exerciseTitleEs: 'EJERCICIO 2. Romance, leyenda, mito o cuento',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 2. Որոշիր գրական ժանրը (ռոմանս, լեգենդ, առասպել, հեքիաթ)',
    exerciseType: 'genre',
    questionEs: 'Una historia cuenta cómo un dios creó el Sol y la Luna.',
    questionArm: 'Պատմությունը նկարագրում է, թե ինչպես աստվածը ստեղծեց Արեգակն ու Լուսինը։',
    options: [
      { key: 'Mito', textEs: 'Mito (Առասպել)' },
      { key: 'Leyenda', textEs: 'Leyenda (Ավանդազրույց / Լեգենդ)' },
      { key: 'Romance', textEs: 'Romance (Ռոմանս)' },
      { key: 'Cuento', textEs: 'Cuento (Հեքիաթ / Պատմվածք)' }
    ],
    correctAnswer: 'Mito',
    explanationEs: 'Mito: Una narración sagrada protagonizada por dioses que explica el origen del mundo o de fenómenos celestes.',
    explanationArm: 'Աստվածը բացատրում է երկնային մարմինների ծագումը։ Սա առասպել է (Mito)։'
  },
  {
    id: 10,
    exerciseTitleEs: 'EJERCICIO 2. Romance, leyenda, mito o cuento',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 2. Որոշիր գրական ժանրը',
    exerciseType: 'genre',
    questionEs: 'Un poema tradicional tiene versos de ocho sílabas y rima asonante en los versos pares.',
    questionArm: 'Ավանդական բանաստեղծությունն ունի ութվանկանի տողեր և զույգ տողերի ձայնավորային հանգ։',
    options: [
      { key: 'Romance', textEs: 'Romance (Ռոմանս)' },
      { key: 'Mito', textEs: 'Mito (Առասպել)' },
      { key: 'Leyenda', textEs: 'Leyenda (Լեգենդ)' },
      { key: 'Cuento', textEs: 'Cuento (Պատմվածք)' }
    ],
    correctAnswer: 'Romance',
    explanationEs: 'Romance: Composición poética típica española con versos octosílabos y rima asonante en los pares.',
    explanationArm: 'Ունի ութվանկանի տողեր և զույգ տողերի ձայնավորային հանգ։ Սա ռոմանս է (Romance)։'
  },
  {
    id: 11,
    exerciseTitleEs: 'EJERCICIO 2. Romance, leyenda, mito o cuento',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 2. Որոշիր գրական ժանրը',
    exerciseType: 'genre',
    questionEs: 'En un pueblo antiguo se cuenta que un fantasma aparece cada noche junto a una torre.',
    questionArm: 'Հին գյուղում պատմում են, որ ամեն գիշեր աշտարակի մոտ ուրվական է հայտնվում։',
    options: [
      { key: 'Leyenda', textEs: 'Leyenda (Լեգենդ / Ավանդազրույց)' },
      { key: 'Mito', textEs: 'Mito (Առասպել)' },
      { key: 'Romance', textEs: 'Romance (Ռոմանս)' },
      { key: 'Cuento', textEs: 'Cuento (Հեքիաթ)' }
    ],
    correctAnswer: 'Leyenda',
    explanationEs: 'Leyenda: Relato ligado a un lugar geográfico real y concreto que incorpora elementos misteriosos o sobrenaturales.',
    explanationArm: 'Իրական վայրին միանում է երևակայական տարր՝ ուրվականը։ Սա լեգենդ է (Leyenda)։'
  },
  {
    id: 12,
    exerciseTitleEs: 'EJERCICIO 2. Romance, leyenda, mito o cuento',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 2. Որոշիր գրական ժանրը',
    exerciseType: 'genre',
    questionEs: 'Una niña pierde su mochila, la busca y finalmente la encuentra. Es una narración breve con pocos personajes.',
    questionArm: 'Աղջիկը կորցնում է պայուսակը, փնտրում և վերջում գտնում է այն։ Պատմությունը կարճ է և ունի քիչ հերոսներ։',
    options: [
      { key: 'Cuento', textEs: 'Cuento (Կարճ պատմվածք / Հեքիաթ)' },
      { key: 'Mito', textEs: 'Mito (Առասպել)' },
      { key: 'Leyenda', textEs: 'Leyenda (Լեգենդ)' },
      { key: 'Romance', textEs: 'Romance (Ռոմանս)' }
    ],
    correctAnswer: 'Cuento',
    explanationEs: 'Cuento: Narración breve de ficción o hechos cotidianos, con trama sencilla y pocos personajes.',
    explanationArm: 'Կարճ պատմություն՝ քիչ հերոսներով և պարզ գործողություններով։ Սա պատմվածք/հեքիաթ է (Cuento)։'
  },
  {
    id: 13,
    exerciseTitleEs: 'EJERCICIO 2. Romance, leyenda, mito o cuento',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 2. Որոշիր գրական ժանրը',
    exerciseType: 'genre',
    questionEs: 'Una diosa convierte sus lágrimas en ríos y así explica su origen.',
    questionArm: 'Աստվածուհու արցունքները վերածվում են գետերի՝ բացատրելով դրանց առաջացումը։',
    options: [
      { key: 'Mito', textEs: 'Mito (Առասպել)' },
      { key: 'Leyenda', textEs: 'Leyenda (Լեգենդ)' },
      { key: 'Cuento', textEs: 'Cuento (Հեքիաթ)' },
      { key: 'Romance', textEs: 'Romance (Ռոմանս)' }
    ],
    correctAnswer: 'Mito',
    explanationEs: 'Mito: Relato que recurre a dioses o fuerzas divinas para explicar el origen de elementos naturales.',
    explanationArm: 'Գերբնական էակի (աստվածուհու) միջոցով բացատրվում է բնական երևույթի ծագումը։ Սա առասպել է (Mito)։'
  },
  {
    id: 14,
    exerciseTitleEs: 'EJERCICIO 2. Romance, leyenda, mito o cuento',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 2. Որոշիր գրական ժանրը',
    exerciseType: 'genre',
    questionEs: 'Una composición tradicional relata las aventuras de un caballero en versos octosílabos.',
    questionArm: 'Ավանդական չափածո ստեղծագործությունը պատմում է ասպետի արկածները ութվանկանի տողերով։',
    options: [
      { key: 'Romance', textEs: 'Romance (Ռոմանս)' },
      { key: 'Cuento', textEs: 'Cuento (Հեքիաթ)' },
      { key: 'Mito', textEs: 'Mito (Առասպել)' },
      { key: 'Leyenda', textEs: 'Leyenda (Լեգենդ)' }
    ],
    correctAnswer: 'Romance',
    explanationEs: 'Romance: Narración en verso de temas épicos, caballerescos o líricos con métrica octosílaba.',
    explanationArm: 'Ավանդական պատմողական չափածո ստեղծագործություն է ութվանկանի տողերով։ Սա ռոմանս է (Romance)։'
  },
  {
    id: 15,
    exerciseTitleEs: 'EJERCICIO 2. Romance, leyenda, mito o cuento',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 2. Որոշիր գրական ժանրը',
    exerciseType: 'genre',
    questionEs: 'Los habitantes de una ciudad cuentan que una campana encantada suena sola a medianoche.',
    questionArm: 'Քաղաքի բնակիչները պատմում են, որ կախարդական զանգը կեսգիշերին ինքնուրույն հնչում է։',
    options: [
      { key: 'Leyenda', textEs: 'Leyenda (Ավանդազրույց / Լեգենդ)' },
      { key: 'Mito', textEs: 'Mito (Առասպել)' },
      { key: 'Romance', textEs: 'Romance (Ռոմանս)' },
      { key: 'Cuento', textEs: 'Cuento (Հեքիաթ)' }
    ],
    correctAnswer: 'Leyenda',
    explanationEs: 'Leyenda: Tradición oral anclada en una localidad con hechos insólitos o encantados.',
    explanationArm: 'Տեղական պատմություն է՝ գերբնական իրադարձությամբ (կախարդված զանգ)։ Սա լեգենդ է (Leyenda)։'
  },
  {
    id: 16,
    exerciseTitleEs: 'EJERCICIO 2. Romance, leyenda, mito o cuento',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 2. Որոշիր գրական ժանրը',
    exerciseType: 'genre',
    questionEs: 'Un niño descubre un secreto, supera un problema y regresa a su casa. La historia es corta y tiene un argumento sencillo.',
    questionArm: 'Տղան գաղտնիք է բացահայտում, հաղթահարում դժվարությունը և վերադառնում տուն։ Պատմությունը կարճ է և պարզ սյուժե ունի։',
    options: [
      { key: 'Cuento', textEs: 'Cuento (Պատմվածք / Հեքիաթ)' },
      { key: 'Mito', textEs: 'Mito (Առասպել)' },
      { key: 'Leyenda', textEs: 'Leyenda (Լեգենդ)' },
      { key: 'Romance', textEs: 'Romance (Ռոմանս)' }
    ],
    correctAnswer: 'Cuento',
    explanationEs: 'Cuento: Breve relato ficticio con planteamiento, nudo y desenlace claro.',
    explanationArm: 'Կարճ պատմողական ստեղծագործություն է՝ պարզ սյուժեով և լուծմամբ։ Սա պատմվածք է (Cuento)։'
  },

  // EJERCICIO 3. Verdadero o falso (17-24)
  {
    id: 17,
    exerciseTitleEs: 'EJERCICIO 3. Verdadero o falso',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 3. Ճի՞շտ, թե՞ սխալ',
    exerciseType: 'true_false',
    questionEs: 'La literatura popular suele transmitirse de generación en generación.',
    questionArm: 'Ժողովրդական գրականությունը սովորաբար փոխանցվում է սերնդեսերունդ։',
    options: [
      { key: 'Verdadero', textEs: 'Verdadero (Ճիշտ է)' },
      { key: 'Falso', textEs: 'Falso (Սխալ է)' }
    ],
    correctAnswer: 'Verdadero',
    explanationEs: 'Verdadero. La transmisión de padres a hijos u orales es una seña de identidad popular.',
    explanationArm: 'Ճիշտ է։ Ժողովրդական ստեղծագործությունները փոխանցվում են սերնդեսերունդ։'
  },
  {
    id: 18,
    exerciseTitleEs: 'EJERCICIO 3. Verdadero o falso',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 3. Ճի՞շտ, թե՞ սխալ',
    exerciseType: 'true_false',
    questionEs: 'La literatura culta siempre es anónima.',
    questionArm: 'Հեղինակային գրականությունը միշտ անանուն է։',
    options: [
      { key: 'Verdadero', textEs: 'Verdadero (Ճիշտ է)' },
      { key: 'Falso', textEs: 'Falso (Սխալ է)' }
    ],
    correctAnswer: 'Falso',
    explanationEs: 'Falso. Corrección: La literatura culta suele tener un autor conocido y firma individual.',
    explanationArm: 'Սխալ է։ Հեղինակային գրականությունը (literatura culta) սովորաբար ունի հայտնի հեղինակ, ոչ թե անանուն է։'
  },
  {
    id: 19,
    exerciseTitleEs: 'EJERCICIO 3. Verdadero o falso',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 3. Ճի՞շտ, թե՞ սխալ',
    exerciseType: 'true_false',
    questionEs: 'Los romances tienen normalmente versos octosílabos.',
    questionArm: 'Ռոմանսները սովորաբար ունեն ութվանկանի տողեր։',
    options: [
      { key: 'Verdadero', textEs: 'Verdadero (Ճիշտ է)' },
      { key: 'Falso', textEs: 'Falso (Սխալ է)' }
    ],
    correctAnswer: 'Verdadero',
    explanationEs: 'Verdadero. Los versos de arte menor de 8 sílabas métricas son la norma del romance.',
    explanationArm: 'Ճիշտ է։ Ռոմանսի տողերը սովորաբար ութվանկանի են (octosílabos)։'
  },
  {
    id: 20,
    exerciseTitleEs: 'EJERCICIO 3. Verdadero o falso',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 3. Ճի՞շտ, թե՞ սխալ',
    exerciseType: 'true_false',
    questionEs: 'Una leyenda puede mezclar hechos reales con elementos fantásticos.',
    questionArm: 'Ավանդազրույցը (լեգենդը) կարող է իրական փաստերը միախառնել երևակայական տարրերի հետ։',
    options: [
      { key: 'Verdadero', textEs: 'Verdadero (Ճիշտ է)' },
      { key: 'Falso', textEs: 'Falso (Սխալ է)' }
    ],
    correctAnswer: 'Verdadero',
    explanationEs: 'Verdadero. Parte de una base real (un lugar, un personaje histórico) y añade fantasía.',
    explanationArm: 'Ճիշտ է։ Ավանդազրույցը կարող է իրականն ու երևակայականը միավորել։'
  },
  {
    id: 21,
    exerciseTitleEs: 'EJERCICIO 3. Verdadero o falso',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 3. Ճի՞շտ, թե՞ սխալ',
    exerciseType: 'true_false',
    questionEs: 'Un mito nunca tiene personajes sobrenaturales.',
    questionArm: 'Առասպելը երբեք չի ունենում գերբնական կերպարներ։',
    options: [
      { key: 'Verdadero', textEs: 'Verdadero (Ճիշտ է)' },
      { key: 'Falso', textEs: 'Falso (Սխալ է)' }
    ],
    correctAnswer: 'Falso',
    explanationEs: 'Falso. Corrección: Los mitos están protagonizados precisamente por dioses, semidioses y seres sobrenaturales.',
    explanationArm: 'Սխալ է։ Առասպելներում հաճախ հանդիպում են աստվածներ և գերբնական էակներ։'
  },
  {
    id: 22,
    exerciseTitleEs: 'EJERCICIO 3. Verdadero o falso',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 3. Ճի՞շտ, թե՞ սխալ',
    exerciseType: 'true_false',
    questionEs: 'Un cuento suele tener un argumento sencillo y un número reducido de personajes.',
    questionArm: 'Պատմվածքը սովորաբար ունի պարզ սյուժե և քիչ թվով կերպարներ։',
    options: [
      { key: 'Verdadero', textEs: 'Verdadero (Ճիշտ է)' },
      { key: 'Falso', textEs: 'Falso (Սխալ է)' }
    ],
    correctAnswer: 'Verdadero',
    explanationEs: 'Verdadero. Su concisión narrativa exige una trama directa y elenco acotado.',
    explanationArm: 'Ճիշտ է։ Պատմվածքը սովորաբար կարճ է, քիչ հերոսներով։'
  },
  {
    id: 23,
    exerciseTitleEs: 'EJERCICIO 3. Verdadero o falso',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 3. Ճի՞շտ, թե՞ սխալ',
    exerciseType: 'true_false',
    questionEs: 'La literatura popular solo puede escribirse en verso.',
    questionArm: 'Ժողովրդական գրականությունը կարող է գրվել միայն չափածո։',
    options: [
      { key: 'Verdadero', textEs: 'Verdadero (Ճիշտ է)' },
      { key: 'Falso', textEs: 'Falso (Սխալ է)' }
    ],
    correctAnswer: 'Falso',
    explanationEs: 'Falso. Corrección: La literatura popular puede presentarse tanto en verso como en prosa (cuentos, leyendas).',
    explanationArm: 'Սխալ է։ Ժողովրդական գրականությունը կարող է լինել և՛ արձակ (պատմվածքներ, առակներ), և՛ չափածո (ռոմանսներ, երգեր)։'
  },
  {
    id: 24,
    exerciseTitleEs: 'EJERCICIO 3. Verdadero o falso',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 3. Ճի՞շտ, թե՞ սխալ',
    exerciseType: 'true_false',
    questionEs: 'La transmisión oral puede producir diferentes versiones de una misma obra.',
    questionArm: 'Բանավոր փոխանցումը կարող է նույն ստեղծագործության տարբեր տարբերակներ առաջացնել։',
    options: [
      { key: 'Verdadero', textEs: 'Verdadero (Ճիշտ է)' },
      { key: 'Falso', textEs: 'Falso (Սխալ է)' }
    ],
    correctAnswer: 'Verdadero',
    explanationEs: 'Verdadero. Cada narrador o región adapta y transforma la obra oral a lo largo del tiempo.',
    explanationArm: 'Ճիշտ է։ Բանավոր փոխանցման ժամանակ ստեղծագործությունը կարող է փոփոխվել և ունենալ բազմաթիվ տարբերակներ։'
  },

  // EJERCICIO 4. Lenguaje literario, verso y prosa (25-30)
  {
    id: 25,
    exerciseTitleEs: 'EJERCICIO 4. Lenguaje literario, verso y prosa',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 4. Գեղարվեստական լեզու, չափածո և արձակ',
    exerciseType: 'mcq',
    questionEs: '¿Cuál de estas expresiones utiliza lenguaje literario?',
    questionArm: 'Ո՞ր արտահայտությունն է գեղարվեստական։',
    options: [
      { key: 'A', textEs: 'Está lloviendo.', textArm: 'Անձրև է գալիս։' },
      { key: 'B', textEs: 'Las nubes lloran sobre la ciudad.', textArm: 'Ամպերը լալիս են քաղաքի վրա։' },
      { key: 'C', textEs: 'Hoy es martes.', textArm: 'Այսօր երեքշաբթի է։' }
    ],
    correctAnswer: 'B',
    explanationEs: 'B. «Las nubes lloran sobre la ciudad» atribuye una acción humana (llorar) a las nubes (personificación estética).',
    explanationArm: 'Ամպերին վերագրվում է լաց լինելու գործողությունը։ Սա personificación (անձնավորում) է։'
  },
  {
    id: 26,
    exerciseTitleEs: 'EJERCICIO 4. Lenguaje literario, verso y prosa',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 4. Գեղարվեստական լեզու, չափածո և արձակ',
    exerciseType: 'mcq',
    questionEs: '¿Qué forma de expresión suele organizarse en párrafos sin una métrica regular?',
    questionArm: 'Ո՞ր խոսքի ձևն է սովորաբար կազմված պարբերություններից և չունի կանոնավոր չափ։',
    options: [
      { key: 'A', textEs: 'Prosa', textArm: 'Արձակ (Prosa)' },
      { key: 'B', textEs: 'Romance', textArm: 'Ռոմանս' },
      { key: 'C', textEs: 'Verso', textArm: 'Չափածո (Verso)' }
    ],
    correctAnswer: 'A',
    explanationEs: 'A — Prosa. La prosa fluye en renglones completos y párrafos sin sujeción a métrica ni rima fija.',
    explanationArm: 'Արձակը կազմված է նախադասություններից և պարբերություններից, առանց չափական կանոնավորության։'
  },
  {
    id: 27,
    exerciseTitleEs: 'EJERCICIO 4. Lenguaje literario, verso y prosa',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 4. Գեղարվեստական լեզու, չափածո և արձակ',
    exerciseType: 'mcq',
    questionEs: '¿Qué recursos pueden aparecer en el verso?',
    questionArm: 'Ի՞նչ միջոցներ կարող են հանդիպել չափածոյում։',
    options: [
      { key: 'A', textEs: 'Métrica, ritmo y rima.', textArm: 'Չափ (վանկեր), ռիթմ և հանգ։' },
      { key: 'B', textEs: 'Solo nombres propios.', textArm: 'Միայն հատուկ անուններ։' },
      { key: 'C', textEs: 'Únicamente diálogos.', textArm: 'Բացառապես երկխոսություններ։' }
    ],
    correctAnswer: 'A',
    explanationEs: 'A. El verso se define fundamentalmente por su ritmo musical, cómputo métrico y rima.',
    explanationArm: 'Չափածոն կարող է ունենալ չափ (métrica), ռիթմ (ritmo) և հանգ (rima)։'
  },
  {
    id: 28,
    exerciseTitleEs: 'EJERCICIO 4. Lenguaje literario, verso y prosa',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 4. Գեղարվեստական լեզու, չափածո և արձակ',
    exerciseType: 'mcq',
    questionEs: '¿Cuál de estas expresiones contiene una metáfora?',
    questionArm: 'Ո՞ր արտահայտության մեջ կա փոխաբերություն։',
    options: [
      { key: 'A', textEs: 'El cielo está gris.', textArm: 'Երկինքը մոխրագույն է։' },
      { key: 'B', textEs: 'El cielo es una manta de ceniza.', textArm: 'Երկինքը մոխրի ծածկոց է։' },
      { key: 'C', textEs: 'Hoy hay muchas nubes.', textArm: 'Այսօր շատ ամպեր կան։' }
    ],
    correctAnswer: 'B',
    explanationEs: 'B. El término real (cielo) se identifica con el término imaginario (manta de ceniza) con la estructura A es B.',
    explanationArm: 'Երկինքը նույնացվում է մոխրագույն ծածկոցի հետ։ Սա փոխաբերություն է (metáfora)։'
  },
  {
    id: 29,
    exerciseTitleEs: 'EJERCICIO 4. Lenguaje literario, verso y prosa',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 4. Գեղարվեստական լեզու, չափածո և արձակ',
    exerciseType: 'mcq',
    questionEs: '¿La prosa puede utilizar recursos literarios?',
    questionArm: 'Կարո՞ղ է արձակը գեղարվեստական արտահայտչամիջոցներ օգտագործել։',
    options: [
      { key: 'A', textEs: 'Sí.', textArm: 'Այո։' },
      { key: 'B', textEs: 'No.', textArm: 'Ոչ։' },
      { key: 'C', textEs: 'Solo si tiene ocho sílabas.', textArm: 'Միայն եթե ութ վանկ ունի։' }
    ],
    correctAnswer: 'A',
    explanationEs: 'A — Sí. Las novelas, cuentos y ensayos líricos están repletos de metáforas, personificaciones y anáforas.',
    explanationArm: 'Այո։ Արձակում նույնպես կարող են լինել փոխաբերություններ, անձնավորումներ և այլ միջոցներ։'
  },
  {
    id: 30,
    exerciseTitleEs: 'EJERCICIO 4. Lenguaje literario, verso y prosa',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 4. Գեղարվեստական լեզու, չափածո և արձակ',
    exerciseType: 'mcq',
    questionEs: '¿Cuál de estas características corresponde al lenguaje literario?',
    questionArm: 'Ո՞ր հատկանիշն է բնորոշ գեղարվեստական լեզվին։',
    options: [
      { key: 'A', textEs: 'Da importancia a la forma de expresar el mensaje.', textArm: 'Կարևորում է հաղորդագրությունն արտահայտելու ձևը։' },
      { key: 'B', textEs: 'Evita las emociones.', textArm: 'Խուսափում է զգացմունքներից։' },
      { key: 'C', textEs: 'No utiliza metáforas.', textArm: 'Չի օգտագործում փոխաբերություններ։' }
    ],
    correctAnswer: 'A',
    explanationEs: 'A. La función poética atrae la atención sobre el propio mensaje estético y su belleza formal.',
    explanationArm: 'Գեղարվեստական լեզվում կարևոր է ոչ միայն միտքը, այլև այն գեղեցիկ ու արտահայտիչ մատուցելու ձևը։'
  },

  // EJERCICIO 5. Nivel fónico (31-40)
  {
    id: 31,
    exerciseTitleEs: 'EJERCICIO 5. Nivel fónico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 5. Հնչյունային մակարդակ (Aliteración, Onomatopeya, Paronomasia, Epanadiplosis)',
    exerciseType: 'device',
    questionEs: 'Tres tristes tigres tragan trigo.',
    questionArm: '«Tres tristes tigres tragan trigo» (Երեք տխուր վագր ցորեն են կուլ տալիս)։',
    options: [
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Paronomasia', textEs: 'Paronomasia (Պարոնոմազիա)' },
      { key: 'Epanadiplosis', textEs: 'Epanadiplosis (Էպանադիպլոզիս)' }
    ],
    correctAnswer: 'Aliteración',
    explanationEs: 'Aliteración: Se repiten intencionadamente los sonidos consonánticos /t/ y /r/.',
    explanationArm: 'Ալիտերացիա. Կրկնվում են նման /t/ և /r/ հնչյունները։',
    extraInfo: { soundRepeated: '/t/, /r/' }
  },
  {
    id: 32,
    exerciseTitleEs: 'EJERCICIO 5. Nivel fónico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 5. Հնչյունային մակարդակ',
    exerciseType: 'device',
    questionEs: '¡Pum! La puerta se cerró.',
    questionArm: '«¡Pum! La puerta se cerró» (Դո՛ւմպ, դուռը փակվեց)։',
    options: [
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Paronomasia', textEs: 'Paronomasia (Պարոնոմազիա)' },
      { key: 'Epanadiplosis', textEs: 'Epanadiplosis (Էպանադիպլոզիս)' }
    ],
    correctAnswer: 'Onomatopeya',
    explanationEs: 'Onomatopeya: «Pum» imita lingüísticamente el ruido acústico de un golpe violento.',
    explanationArm: 'Բնաձայնություն. «Pum» բառը նմանակում է հարվածի կամ դռան շրխկոցի ձայնը։'
  },
  {
    id: 33,
    exerciseTitleEs: 'EJERCICIO 5. Nivel fónico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 5. Հնչյունային մակարդակ',
    exerciseType: 'device',
    questionEs: 'El hombre tiene hambre.',
    questionArm: '«El hombre tiene hambre» (Մարդը սոված է)։',
    options: [
      { key: 'Paronomasia', textEs: 'Paronomasia (Պարոնոմազիա)' },
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Epanadiplosis', textEs: 'Epanadiplosis (Էպանադիպլոզիս)' }
    ],
    correctAnswer: 'Paronomasia',
    explanationEs: 'Paronomasia: «Hombre» y «hambre» son vocablos fonéticamente muy parecidos pero de significado diferente.',
    explanationArm: 'Պարոնոմազիա. «Hombre» (մարդ) և «hambre» (քաղց) նմանահունչ բառեր են՝ տարբեր իմաստներով։'
  },
  {
    id: 34,
    exerciseTitleEs: 'EJERCICIO 5. Nivel fónico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 5. Հնչյունային մակարդակ',
    exerciseType: 'device',
    questionEs: 'Verde, todo parece verde.',
    questionArm: '«Verde, todo parece verde» (Կանաչ, ամեն ինչ կանաչ է թվում)։',
    options: [
      { key: 'Epanadiplosis', textEs: 'Epanadiplosis (Էպանադիպլոզիս)' },
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Paronomasia', textEs: 'Paronomasia (Պարոնոմազիա)' }
    ],
    correctAnswer: 'Epanadiplosis',
    explanationEs: 'Epanadiplosis: La palabra «verde» abre y cierra el mismo enunciado.',
    explanationArm: 'Էպանադիպլոզիս. «Verde» բառը հայտնվում է նախադասության և՛ սկզբում, և՛ վերջում։'
  },
  {
    id: 35,
    exerciseTitleEs: 'EJERCICIO 5. Nivel fónico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 5. Հնչյունային մակարդակ',
    exerciseType: 'device',
    questionEs: 'Su suave susurro sonaba sin parar.',
    questionArm: '«Su suave susurro sonaba sin parar» (Նրա մեղմ շշուկը հնչում էր անդադար)։',
    options: [
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Paronomasia', textEs: 'Paronomasia (Պարոնոմազիա)' },
      { key: 'Epanadiplosis', textEs: 'Epanadiplosis (Էպանադիպլոզիս)' }
    ],
    correctAnswer: 'Aliteración',
    explanationEs: 'Aliteración: Repetición del fonema sibilante /s/.',
    explanationArm: 'Ալիտերացիա. Կրկնվում է /s/ հնչյունը (su, suave, susurro, sonaba, sin)։'
  },
  {
    id: 36,
    exerciseTitleEs: 'EJERCICIO 5. Nivel fónico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 5. Հնչյունային մակարդակ',
    exerciseType: 'device',
    questionEs: 'La casa no es la cosa.',
    questionArm: '«La casa no es la cosa» (Տունը նույն բանը չէ)։',
    options: [
      { key: 'Paronomasia', textEs: 'Paronomasia (Պարոնոմազիա)' },
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Epanadiplosis', textEs: 'Epanadiplosis (Էպանադիպլոզիս)' }
    ],
    correctAnswer: 'Paronomasia',
    explanationEs: 'Paronomasia: Juego acústico entre las palabras parónimas «casa» y «cosa».',
    explanationArm: 'Պարոնոմազիա. Casa / cosa բառերը նման են հնչողությամբ, բայց տարբեր իմաստ ունեն։'
  },
  {
    id: 37,
    exerciseTitleEs: 'EJERCICIO 5. Nivel fónico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 5. Հնչյունային մակարդակ',
    exerciseType: 'device',
    questionEs: '¡Guau, guau!, ladró el perro.',
    questionArm: '«¡Guau, guau!, ladró el perro» (Հա՛ֆ, հա՛ֆ, հաչեց շունը)։',
    options: [
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Paronomasia', textEs: 'Paronomasia (Պարոնոմազիա)' },
      { key: 'Epanadiplosis', textEs: 'Epanadiplosis (Էպանադիպլոզիս)' }
    ],
    correctAnswer: 'Onomatopeya',
    explanationEs: 'Onomatopeya: «Guau» imita el ladrido canino.',
    explanationArm: 'Բնաձայնություն. «Guau» բառը նմանակում է շան հաչոցի ձայնը։'
  },
  {
    id: 38,
    exerciseTitleEs: 'EJERCICIO 5. Nivel fónico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 5. Հնչյունային մակարդակ',
    exerciseType: 'device',
    questionEs: 'Sueño, mi vida es un sueño.',
    questionArm: '«Sueño, mi vida es un sueño» (Երազ, իմ կյանքը մի երազ է)։',
    options: [
      { key: 'Epanadiplosis', textEs: 'Epanadiplosis (Էպանադիպլոզիս)' },
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Paronomasia', textEs: 'Paronomasia (Պարոնոմազիա)' }
    ],
    correctAnswer: 'Epanadiplosis',
    explanationEs: 'Epanadiplosis: «Sueño» encabeza el verso y concluye el enunciado.',
    explanationArm: 'Էպանադիպլոզիս. «Sueño» բառը գտնվում է նախադասության սկզբում և վերջում։'
  },
  {
    id: 39,
    exerciseTitleEs: 'EJERCICIO 5. Nivel fónico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 5. Հնչյունային մակարդակ',
    exerciseType: 'device',
    questionEs: 'Rápido rueda el río.',
    questionArm: '«Rápido rueda el río» (Արագ գլորվում է գետը)։',
    options: [
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Paronomasia', textEs: 'Paronomasia (Պարոնոմազիա)' },
      { key: 'Epanadiplosis', textEs: 'Epanadiplosis (Էպանադիպլոզիս)' }
    ],
    correctAnswer: 'Aliteración',
    explanationEs: 'Aliteración: Se repite reiteradamente el sonido vibrante múltiple /r/.',
    explanationArm: 'Ալիտերացիա. Կրկնվում է /r/ հնչյունը (rápido, rueda, río)։'
  },
  {
    id: 40,
    exerciseTitleEs: 'EJERCICIO 5. Nivel fónico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 5. Հնչյունային մակարդակ',
    exerciseType: 'device',
    questionEs: 'El preso perdió peso.',
    questionArm: '«El preso perdió peso» (Բանտարկյալը քաշ կորցրեց)։',
    options: [
      { key: 'Paronomasia', textEs: 'Paronomasia (Պարոնոմազիա)' },
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Epanadiplosis', textEs: 'Epanadiplosis (Էպանադիպլոզիս)' }
    ],
    correctAnswer: 'Paronomasia',
    explanationEs: 'Paronomasia: Confrontación fonética entre las palabras «preso» y «peso».',
    explanationArm: 'Պարոնոմազիա. Preso / peso նմանահունչ, բայց տարբեր իմաստ ունեցող բառեր են։'
  },

  // EJERCICIO 6. Nivel morfosintáctico (41-52)
  {
    id: 41,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Quiero viajar. Quiero estudiar. Quiero aprender.',
    questionArm: '«Quiero viajar. Quiero estudiar. Quiero aprender» (Ուզում եմ ճամփորդել։ Ուզում եմ սովորել։ Ուզում եմ յուրացնել)։',
    options: [
      { key: 'Anáfora', textEs: 'Anáfora (Անաֆորա)' },
      { key: 'Polisíndeton', textEs: 'Polisíndeton (Պոլիսինդետոն)' },
      { key: 'Asíndeton', textEs: 'Asíndeton (Ասինդետոն)' },
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' }
    ],
    correctAnswer: 'Anáfora',
    explanationEs: 'Anáfora: Se repite «Quiero» al principio de los tres enunciados sucesivos.',
    explanationArm: 'Անաֆորա. «Quiero» բառը կրկնվում է երեք արտահայտությունների սկզբում։'
  },
  {
    id: 42,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Y canta y baila y ríe y juega.',
    questionArm: '«Y canta y baila y ríe y juega» (Եվ երգում է, և պարում, և ծիծաղում, և խաղում)։',
    options: [
      { key: 'Polisíndeton', textEs: 'Polisíndeton (Բազմաշաղկապություն)' },
      { key: 'Asíndeton', textEs: 'Asíndeton (Անշաղկապություն)' },
      { key: 'Anáfora', textEs: 'Anáfora (Անաֆորա)' },
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' }
    ],
    correctAnswer: 'Polisíndeton',
    explanationEs: 'Polisíndeton: Se repite insistentemente la conjunción copulativa «y».',
    explanationArm: 'Պոլիսինդետոն. «Y» շաղկապը մի քանի անգամ անընդմեջ կրկնվում է։'
  },
  {
    id: 43,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Corre, salta, grita, sonríe.',
    questionArm: '«Corre, salta, grita, sonríe» (Վազում է, ցատկում, գոռում, ժպտում)։',
    options: [
      { key: 'Asíndeton', textEs: 'Asíndeton y enumeración (Ասինդետոն և թվարկում)' },
      { key: 'Polisíndeton', textEs: 'Polisíndeton (Պոլիսինդետոն)' },
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' },
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' }
    ],
    correctAnswer: 'Asíndeton',
    explanationEs: 'Asíndeton y enumeración: Se encadenan verbos de acción suprimiendo las conjunciones.',
    explanationArm: 'Ասինդետոն և թվարկում. Գործողությունները թվարկված են առանց շաղկապների (ստորակետներով)։'
  },
  {
    id: 44,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Con mis propios ojos lo vi.',
    questionArm: '«Con mis propios ojos lo vi» (Իմ սեփական աչքերով այն տեսա)։',
    options: [
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ / Շեշտադրող ավելորդաբանություն)' },
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' },
      { key: 'Anáfora', textEs: 'Anáfora (Անաֆորա)' },
      { key: 'Asíndeton', textEs: 'Asíndeton (Ասինդետոն)' }
    ],
    correctAnswer: 'Pleonasmo',
    explanationEs: 'Pleonasmo: «Con mis propios ojos» añade redundancia enfática para reafirmar la acción de ver.',
    explanationArm: 'Պլեոնազմ. Իմաստով ավելորդ բառերն ընդգծում և ուժեղացնում են ասվածը։'
  },
  {
    id: 45,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Del cielo caían las blancas estrellas.',
    questionArm: '«Del cielo caían las blancas estrellas» (Երկնքից ընկնում էին սպիտակ աստղերը)։',
    options: [
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն / Շրջուն շարադասություն)' },
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' },
      { key: 'Polisíndeton', textEs: 'Polisíndeton (Պոլիսինդետոն)' },
      { key: 'Anáfora', textEs: 'Anáfora (Անաֆորա)' }
    ],
    correctAnswer: 'Hipérbaton',
    explanationEs: 'Hipérbaton: Se altera el orden habitual (Sujeto + Verbo + Complementos). Orden natural: «Las blancas estrellas caían del cielo».',
    explanationArm: 'Հիպերբատոն. Փոխված է բառերի սովորական շարադասությունը։ Սովորական շարադասություն՝ «Las blancas estrellas caían del cielo»։',
    extraInfo: { normalOrder: 'Las blancas estrellas caían del cielo.' }
  },
  {
    id: 46,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Compré pan, queso, leche y fruta.',
    questionArm: '«Compré pan, queso, leche y fruta» (Գնեցի հաց, պանիր, կաթ և միրգ)։',
    options: [
      { key: 'Enumeración', textEs: 'Enumeración (Թվարկում)' },
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' },
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' },
      { key: 'Anáfora', textEs: 'Anáfora (Անաֆորա)' }
    ],
    correctAnswer: 'Enumeración',
    explanationEs: 'Enumeración: Acumulación coordinada de una serie de elementos del mismo campo semántico.',
    explanationArm: 'Թվարկում (Enumeración). Թվարկված են մի քանի սննդամթերքներ։'
  },
  {
    id: 47,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Nunca me rindo. Nunca me detengo. Nunca abandono.',
    questionArm: '«Nunca me rindo. Nunca me detengo. Nunca abandono» (Երբեք չեմ հանձնվում։ Երբեք կանգ չեմ առնում։ Երբեք չեմ լքում)։',
    options: [
      { key: 'Anáfora', textEs: 'Anáfora (Անաֆորա)' },
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' },
      { key: 'Asíndeton', textEs: 'Asíndeton (Ասինդետոն)' },
      { key: 'Polisíndeton', textEs: 'Polisíndeton (Պոլիսինդետոն)' }
    ],
    correctAnswer: 'Anáfora',
    explanationEs: 'Anáfora: Repetición de la palabra «Nunca» al comienzo de cada frase.',
    explanationArm: 'Անաֆորա. «Nunca» բառը կրկնվում է յուրաքանչյուր արտահայտության սկզբում։'
  },
  {
    id: 48,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Ni habla ni mira ni escucha.',
    questionArm: '«Ni habla ni mira ni escucha» (Ո՛չ խոսում է, ո՛չ նայում, ո՛չ լսում)։',
    options: [
      { key: 'Polisíndeton', textEs: 'Polisíndeton (Պոլիսինդետոն)' },
      { key: 'Asíndeton', textEs: 'Asíndeton (Ասինդետոն)' },
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' },
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' }
    ],
    correctAnswer: 'Polisíndeton',
    explanationEs: 'Polisíndeton: Reiteración de la conjunción negativa «ni».',
    explanationArm: 'Պոլիսինդետոն. Կրկնվում է «ni» շաղկապը։'
  },
  {
    id: 49,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Subió arriba para buscar su mochila.',
    questionArm: '«Subió arriba para buscar su mochila» (Նա վեր բարձրացավ իր պայուսակը գտնելու համար)։',
    options: [
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' },
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' },
      { key: 'Anáfora', textEs: 'Anáfora (Անաֆորա)' },
      { key: 'Polisíndeton', textEs: 'Polisíndeton (Պոլիսինդետոն)' }
    ],
    correctAnswer: 'Pleonasmo',
    explanationEs: 'Pleonasmo: «Subió arriba» reduplica de forma redundante la dirección ya implícita en «subir».',
    explanationArm: 'Պլեոնազմ. «Arriba» (վերև) բառը կրկնում է «subir» (բարձրանալ) բայի արտահայտած ուղղությունը։'
  },
  {
    id: 50,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Hermoso era el paisaje de aquella montaña.',
    questionArm: '«Hermoso era el paisaje de aquella montaña» (Գեղեցիկ էր այն լեռան բնապատկերը)։',
    options: [
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' },
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' },
      { key: 'Enumeración', textEs: 'Enumeración (Թվարկում)' },
      { key: 'Asíndeton', textEs: 'Asíndeton (Ասինդետոն)' }
    ],
    correctAnswer: 'Hipérbaton',
    explanationEs: 'Hipérbaton: El adjetivo predicativo «Hermoso» se antepone. Orden habitual: «El paisaje de aquella montaña era hermoso».',
    explanationArm: 'Հիպերբատոն. Փոփոխված է բառերի շարադասությունը։ Սովորական կարգ՝ «El paisaje de aquella montaña era hermoso»։',
    extraInfo: { normalOrder: 'El paisaje de aquella montaña era hermoso.' }
  },
  {
    id: 51,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Trajo libros, lápices, cuadernos, reglas.',
    questionArm: '«Trajo libros, lápices, cuadernos, reglas» (Բերեց գրքեր, մատիտներ, տետրեր, քանոններ)։',
    options: [
      { key: 'Asíndeton', textEs: 'Asíndeton y enumeración (Ասինդետոն և թվարկում)' },
      { key: 'Polisíndeton', textEs: 'Polisíndeton (Պոլիսինդետոն)' },
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' },
      { key: 'Anáfora', textEs: 'Anáfora (Անաֆորա)' }
    ],
    correctAnswer: 'Asíndeton',
    explanationEs: 'Asíndeton y enumeración: Los sustantivos se suceden sin enlaces coordinantes.',
    explanationArm: 'Ասինդետոն և թվարկում. Թվարկումը կատարվում է առանց շաղկապների։'
  },
  {
    id: 52,
    exerciseTitleEs: 'EJERCICIO 6. Nivel morfosintáctico',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 6. Ձևաբանական և շարահյուսական մակարդակ',
    exerciseType: 'device',
    questionEs: 'Y el viento sopla y la lluvia cae y el río crece.',
    questionArm: '«Y el viento sopla y la lluvia cae y el río crece» (Եվ քամին փչում է, և անձրևը գալիս է, և գետը վարարում)։',
    options: [
      { key: 'Polisíndeton', textEs: 'Polisíndeton (Պոլիսինդետոն)' },
      { key: 'Asíndeton', textEs: 'Asíndeton (Ասինդետոն)' },
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' },
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' }
    ],
    correctAnswer: 'Polisíndeton',
    explanationEs: 'Polisíndeton: La repetición recurrente de «y» enlaza y acelera la intensidad expresiva.',
    explanationArm: 'Պոլիսինդետոն. «Y» շաղկապի բազմակի կրկնությունը ուժեղացնում է արտահայտչականությունը։'
  },

  // EJERCICIO 7. Metáforas — A y B (53-64)
  {
    id: 53,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'Tus ojos son dos estrellas.',
    questionArm: '«Tus ojos son dos estrellas» (Քո աչքերը երկու աստղ են)։',
    options: [
      { key: 'A es B', textEs: 'A es B (Իրական տարրը նույնացվում է փոխաբերականին)' },
      { key: 'B de A', textEs: 'B de A (Փոխաբերական տարրը նախորդում է իրականին)' },
      { key: 'A de B', textEs: 'A de B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'A es B',
    explanationEs: 'A = ojos, B = estrellas. Estructura: A es B.',
    explanationArm: 'A (իրական) = ojos (աչքեր), B (փոխաբերական) = estrellas (աստղեր)։ Կառուցվածքը՝ A es B։',
    extraInfo: { termA: 'Ojos', termB: 'Estrellas', structure: 'A es B' }
  },
  {
    id: 54,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'Las estrellas de tus ojos.',
    questionArm: '«Las estrellas de tus ojos» (Քո աչքերի աստղերը)։',
    options: [
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A es B', textEs: 'A es B' },
      { key: 'A de B', textEs: 'A de B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'B de A',
    explanationEs: 'A = ojos, B = estrellas. Estructura: B de A.',
    explanationArm: 'A = ojos, B = estrellas։ Կառուցվածքը՝ B de A (աստղերը նախորդում են աչքերին)։',
    extraInfo: { termA: 'Ojos', termB: 'Estrellas', structure: 'B de A' }
  },
  {
    id: 55,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'Su voz es música.',
    questionArm: '«Su voz es música» (Նրա ձայնը երաժշտություն է)։',
    options: [
      { key: 'A es B', textEs: 'A es B' },
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A de B', textEs: 'A de B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'A es B',
    explanationEs: 'A = voz, B = música. Estructura: A es B.',
    explanationArm: 'A (իրական) = voz (ձայն), B (փոխաբերական) = música (երաժշտություն)։ Կառուցվածքը՝ A es B։',
    extraInfo: { termA: 'Voz', termB: 'Música', structure: 'A es B' }
  },
  {
    id: 56,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'La música de su voz.',
    questionArm: '«La música de su voz» (Նրա ձայնի երաժշտությունը)։',
    options: [
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A es B', textEs: 'A es B' },
      { key: 'A de B', textEs: 'A de B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'B de A',
    explanationEs: 'A = voz, B = música. Estructura: B de A.',
    explanationArm: 'A = voz, B = música։ Կառուցվածքը՝ B de A։',
    extraInfo: { termA: 'Voz', termB: 'Música', structure: 'B de A' }
  },
  {
    id: 57,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'Sus manos son hielo.',
    questionArm: '«Sus manos son hielo» (Նրա ձեռքերը սառույց են)։',
    options: [
      { key: 'A es B', textEs: 'A es B' },
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A de B', textEs: 'A de B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'A es B',
    explanationEs: 'A = manos, B = hielo. Estructura: A es B.',
    explanationArm: 'A = manos (ձեռքեր), B = hielo (սառույց)։ Կառուցվածքը՝ A es B։',
    extraInfo: { termA: 'Manos', termB: 'Hielo', structure: 'A es B' }
  },
  {
    id: 58,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'Sus manos de hielo.',
    questionArm: '«Sus manos de hielo» (Նրա սառցե ձեռքերը)։',
    options: [
      { key: 'A de B', textEs: 'A de B' },
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A es B', textEs: 'A es B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'A de B',
    explanationEs: 'A = manos, B = hielo. Estructura: A de B (el término real A precede a de + término imaginario B).',
    explanationArm: 'A = manos, B = hielo։ Կառուցվածքը՝ A de B (իրական տարրը գալիս է փոխաբերականից առաջ)։',
    extraInfo: { termA: 'Manos', termB: 'Hielo', structure: 'A de B' }
  },
  {
    id: 59,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'El fuego de tus ojos.',
    questionArm: '«El fuego de tus ojos» (Քո աչքերի կրակը)։',
    options: [
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A de B', textEs: 'A de B' },
      { key: 'A es B', textEs: 'A es B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'B de A',
    explanationEs: 'A = ojos, B = fuego. Estructura: B de A.',
    explanationArm: 'A = ojos (աչքեր), B = fuego (կրակ)։ Կառուցվածքը՝ B de A։',
    extraInfo: { termA: 'Ojos', termB: 'Fuego', structure: 'B de A' }
  },
  {
    id: 60,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'Tu sonrisa es un sol.',
    questionArm: '«Tu sonrisa es un sol» (Քո ժպիտը մի արև է)։',
    options: [
      { key: 'A es B', textEs: 'A es B' },
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A de B', textEs: 'A de B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'A es B',
    explanationEs: 'A = sonrisa, B = sol. Estructura: A es B.',
    explanationArm: 'A = sonrisa (ժպիտ), B = sol (արև)։ Կառուցվածքը՝ A es B։',
    extraInfo: { termA: 'Sonrisa', termB: 'Sol', structure: 'A es B' }
  },
  {
    id: 61,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'El sol de tu sonrisa.',
    questionArm: '«El sol de tu sonrisa» (Քո ժպիտի արևը)։',
    options: [
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A es B', textEs: 'A es B' },
      { key: 'A de B', textEs: 'A de B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'B de A',
    explanationEs: 'A = sonrisa, B = sol. Estructura: B de A.',
    explanationArm: 'A = sonrisa, B = sol։ Կառուցվածքը՝ B de A։',
    extraInfo: { termA: 'Sonrisa', termB: 'Sol', structure: 'B de A' }
  },
  {
    id: 62,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'Dos luceros me miraban desde su rostro.',
    questionArm: '«Dos luceros me miraban desde su rostro» (Երկու լուսատուներ նայում էին ինձ նրա դեմքից)։',
    options: [
      { key: 'Solo B', textEs: 'Solo B (Միայն փոխաբերական տարրն է նշված, իրականը ենթադրվում է)' },
      { key: 'A es B', textEs: 'A es B' },
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A de B', textEs: 'A de B' }
    ],
    correctAnswer: 'Solo B',
    explanationEs: 'A = ojos (implícito), B = luceros. Estructura: Solo B (metáfora pura). Los ojos no se nombran expresamente.',
    explanationArm: 'A = ojos (աչքեր, ենթադրյալ), B = luceros (լուսատուներ)։ Կառուցվածքը՝ Solo B (մաքուր փոխաբերություն)։ Աչքերն անմիջապես չեն նշվում, այլ փոխարինված են luceros բառով։',
    extraInfo: { termA: 'Ojos (implícito)', termB: 'Luceros', structure: 'Solo B' }
  },
  {
    id: 63,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'Su cabello era oro.',
    questionArm: '«Su cabello era oro» (Նրա մազերը ոսկի էին)։',
    options: [
      { key: 'A es B', textEs: 'A es B' },
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A de B', textEs: 'A de B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'A es B',
    explanationEs: 'A = cabello, B = oro. Estructura: A es B.',
    explanationArm: 'A = cabello (մազեր), B = oro (ոսկի)։ Կառուցվածքը՝ A es B։',
    extraInfo: { termA: 'Cabello', termB: 'Oro', structure: 'A es B' }
  },
  {
    id: 64,
    exerciseTitleEs: 'EJERCICIO 7. Metáforas — A y B',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 7. Փոխաբերության կառուցվածքների վերլուծություն',
    exerciseType: 'metaphor',
    questionEs: 'El oro de su cabello.',
    questionArm: '«El oro de su cabello» (Նրա մազերի ոսկին)։',
    options: [
      { key: 'B de A', textEs: 'B de A' },
      { key: 'A es B', textEs: 'A es B' },
      { key: 'A de B', textEs: 'A de B' },
      { key: 'Solo B', textEs: 'Solo B' }
    ],
    correctAnswer: 'B de A',
    explanationEs: 'A = cabello, B = oro. Estructura: B de A.',
    explanationArm: 'A = cabello, B = oro։ Կառուցվածքը՝ B de A։',
    extraInfo: { termA: 'Cabello', termB: 'Oro', structure: 'B de A' }
  },

  // EJERCICIO 8. Metáfora o personificación (65-72)
  {
    id: 65,
    exerciseTitleEs: 'EJERCICIO 8. Metáfora o personificación',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 8. Փոխաբերությո՞ւն, թե՞ անձնավորում',
    exerciseType: 'device',
    questionEs: 'La luna sonríe a los niños.',
    questionArm: '«La luna sonríe a los niños» (Լուսինը ժպտում է երեխաներին)։',
    options: [
      { key: 'Personificación', textEs: 'Personificación (Անձնավորում)' },
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' }
    ],
    correctAnswer: 'Personificación',
    explanationEs: 'Personificación: Atribuye a la luna un rasgo estrictamente humano: sonreír.',
    explanationArm: 'Անձնավորում (Personificación). Լուսինը ներկայացված է որպես ժպտացող էակ։'
  },
  {
    id: 66,
    exerciseTitleEs: 'EJERCICIO 8. Metáfora o personificación',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 8. Փոխաբերությո՞ւն, թե՞ անձնավորում',
    exerciseType: 'device',
    questionEs: 'Su sonrisa es una estrella.',
    questionArm: '«Su sonrisa es una estrella» (Նրա ժպիտը մի աստղ է)։',
    options: [
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' },
      { key: 'Personificación', textEs: 'Personificación (Անձնավորում)' }
    ],
    correctAnswer: 'Metáfora',
    explanationEs: 'Metáfora: Identifica directamente la cualidad luminosa de la sonrisa con una estrella (A es B).',
    explanationArm: 'Փոխաբերություն (Metáfora). Ժպիտը նույնացվում է աստղի հետ։'
  },
  {
    id: 67,
    exerciseTitleEs: 'EJERCICIO 8. Metáfora o personificación',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 8. Փոխաբերությո՞ւն, թե՞ անձնավորում',
    exerciseType: 'device',
    questionEs: 'Las flores bailan con el viento.',
    questionArm: '«Las flores bailan con el viento» (Ծաղիկները պարում են քամու հետ)։',
    options: [
      { key: 'Personificación', textEs: 'Personificación (Անձնավորում)' },
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' }
    ],
    correctAnswer: 'Personificación',
    explanationEs: 'Personificación: Las flores realizan la acción humana de bailar.',
    explanationArm: 'Անձնավորում. Ծաղիկներին վերագրվում է պարելու գործողությունը։'
  },
  {
    id: 68,
    exerciseTitleEs: 'EJERCICIO 8. Metáfora o personificación',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 8. Փոխաբերությո՞ւն, թե՞ անձնավորում',
    exerciseType: 'device',
    questionEs: 'Su corazón es una piedra.',
    questionArm: '«Su corazón es una piedra» (Նրա սիրտը մի քար է)։',
    options: [
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' },
      { key: 'Personificación', textEs: 'Personificación (Անձնավորում)' }
    ],
    correctAnswer: 'Metáfora',
    explanationEs: 'Metáfora: Identifica el corazón insensible con la dureza de la piedra (A es B).',
    explanationArm: 'Փոխաբերություն. Սիրտը նույնացվում է քարի հետ։'
  },
  {
    id: 69,
    exerciseTitleEs: 'EJERCICIO 8. Metáfora o personificación',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 8. Փոխաբերությո՞ւն, թե՞ անձնավորում',
    exerciseType: 'device',
    questionEs: 'El reloj me grita que llego tarde.',
    questionArm: '«El reloj me grita que llego tarde» (Ժամացույցը գոռում է ինձ վրա, որ ուշանում եմ)։',
    options: [
      { key: 'Personificación', textEs: 'Personificación (Անձնավորում)' },
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' }
    ],
    correctAnswer: 'Personificación',
    explanationEs: 'Personificación: Se le asigna al objeto inanimado (reloj) el acto humano de gritar.',
    explanationArm: 'Անձնավորում. Ժամացույցին վերագրվում է գոռալու գործողությունը։'
  },
  {
    id: 70,
    exerciseTitleEs: 'EJERCICIO 8. Metáfora o personificación',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 8. Փոխաբերությո՞ւն, թե՞ անձնավորում',
    exerciseType: 'device',
    questionEs: 'Tus palabras son cuchillos.',
    questionArm: '«Tus palabras son cuchillos» (Քո խոսքերը դանակներ են)։',
    options: [
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' },
      { key: 'Personificación', textEs: 'Personificación (Անձնավորում)' }
    ],
    correctAnswer: 'Metáfora',
    explanationEs: 'Metáfora: Las palabras hirientes se identifican con cuchillos afilados (A es B).',
    explanationArm: 'Փոխաբերություն. Խոսքերը նույնացվում են դանակների հետ։'
  },
  {
    id: 71,
    exerciseTitleEs: 'EJERCICIO 8. Metáfora o personificación',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 8. Փոխաբերությո՞ւն, թե՞ անձնավորում',
    exerciseType: 'device',
    questionEs: 'La tristeza llamó a mi puerta.',
    questionArm: '«La tristeza llamó a mi puerta» (Տխրությունը թակեց իմ դուռը)։',
    options: [
      { key: 'Personificación', textEs: 'Personificación (Անձնավորում)' },
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' }
    ],
    correctAnswer: 'Personificación',
    explanationEs: 'Personificación: La emoción abstracta (tristeza) actúa como una visita corpórea que llama a la puerta.',
    explanationArm: 'Անձնավորում. Տխրությունը ներկայացված է որպես դուռը թակող մարդ/էակ։'
  },
  {
    id: 72,
    exerciseTitleEs: 'EJERCICIO 8. Metáfora o personificación',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 8. Փոխաբերությո՞ւն, թե՞ անձնավորում',
    exerciseType: 'device',
    questionEs: 'La vida es un viaje.',
    questionArm: '«La vida es un viaje» (Կյանքը ճանապարհորդություն է)։',
    options: [
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' },
      { key: 'Personificación', textEs: 'Personificación (Անձնավորում)' }
    ],
    correctAnswer: 'Metáfora',
    explanationEs: 'Metáfora: Se identifica la existencia humana (A) con una travesía (B).',
    explanationArm: 'Փոխաբերություն. Կյանքը նույնացվում է ճանապարհորդության հետ։'
  },

  // EJERCICIO 9. Analiza un romance (73-80)
  {
    id: 73,
    exerciseTitleEs: 'EJERCICIO 9. Analiza un romance («La niña del camino»)',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 9. Ռոմանսի վերլուծություն («Ճանապարհի աղջիկը»)',
    exerciseType: 'poem',
    questionEs: '¿Cuántos versos tiene el poema?',
    questionArm: 'Քանի՞ տող (versos) ունի բանաստեղծությունը։',
    options: [
      { key: '8', textEs: 'Ocho versos (8 տող)' },
      { key: '4', textEs: 'Cuatro versos (4 տող)' },
      { key: '10', textEs: 'Diez versos (10 տող)' }
    ],
    correctAnswer: '8',
    explanationEs: 'Ocho versos. Consta de 8 líneas métricas.',
    explanationArm: 'Բանաստեղծությունն ունի ութ տող (ocho versos)։'
  },
  {
    id: 74,
    exerciseTitleEs: 'EJERCICIO 9. Analiza un romance',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 9. Ռոմանսի վերլուծություն',
    exerciseType: 'poem',
    questionEs: '¿Cuántas sílabas métricas tiene «Por la senda va la niña»?',
    questionArm: 'Քանի՞ չափական վանկ ունի «Por la senda va la niña» տողը։',
    options: [
      { key: '8', textEs: '8 sílabas (octosílabo)' },
      { key: '7', textEs: '7 sílabas' },
      { key: '9', textEs: '9 sílabas' }
    ],
    correctAnswer: '8',
    explanationEs: 'Ocho sílabas métricas: Por (1) / la (2) / sen (3) / da (4) / va (5) / la (6) / ni (7) / ña (8).',
    explanationArm: 'Ութ վանկ՝ Por (1) / la (2) / sen (3) / da (4) / va (5) / la (6) / ni (7) / ña (8)։'
  },
  {
    id: 75,
    exerciseTitleEs: 'EJERCICIO 9. Analiza un romance',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 9. Ռոմանսի վերլուծություն',
    exerciseType: 'poem',
    questionEs: '¿Cuántas sílabas métricas tiene «Con su capa colorada»?',
    questionArm: 'Քանի՞ չափական վանկ ունի «Con su capa colorada» տողը։',
    options: [
      { key: '8', textEs: '8 sílabas (octosílabo)' },
      { key: '7', textEs: '7 sílabas' },
      { key: '10', textEs: '10 sílabas' }
    ],
    correctAnswer: '8',
    explanationEs: 'Ocho sílabas métricas: Con (1) / su (2) / ca (3) / pa (4) / co (5) / lo (6) / ra (7) / da (8).',
    explanationArm: 'Ութ վանկ՝ Con (1) / su (2) / ca (3) / pa (4) / co (5) / lo (6) / ra (7) / da (8)։'
  },
  {
    id: 76,
    exerciseTitleEs: 'EJERCICIO 9. Analiza un romance',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 9. Ռոմանսի վերլուծություն',
    exerciseType: 'poem',
    questionEs: '¿Qué versos presentan la rima característica del romance?',
    questionArm: 'Ո՞ր տողերն ունեն ռոմանսին բնորոշ հանգը։',
    options: [
      { key: 'pares', textEs: 'Los versos pares (2, 4, 6 y 8)' },
      { key: 'impares', textEs: 'Los versos impares (1, 3, 5 y 7)' },
      { key: 'todos', textEs: 'Todos los versos' }
    ],
    correctAnswer: 'pares',
    explanationEs: 'Los versos pares (2, 4, 6 y 8) riman en asonante, mientras que los versos impares quedan sueltos (libres).',
    explanationArm: 'Զույգ տողերը (2, 4, 6 և 8). Ռոմանսում հանգավորվում են զույգ տողերը, իսկ կենտերը մնում են ազատ։'
  },
  {
    id: 77,
    exerciseTitleEs: 'EJERCICIO 9. Analiza un romance',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 9. Ռոմանսի վերլուծություն',
    exerciseType: 'poem',
    questionEs: '¿Qué palabras forman la rima de los versos pares?',
    questionArm: 'Ո՞ր բառերն են կազմում զույգ տողերի հանգը։',
    options: [
      { key: 'correct', textEs: 'Colorada, mañana, pisadas, plaza' },
      { key: 'incorrect', textEs: 'Niña, brillando, libre, suave' }
    ],
    correctAnswer: 'correct',
    explanationEs: 'Colorada (verso 2), mañana (verso 4), pisadas (verso 6), plaza (verso 8).',
    explanationArm: 'Colorada, mañana, pisadas, plaza. Այս բառերը գտնվում են զույգ տողերի վերջում։'
  },
  {
    id: 78,
    exerciseTitleEs: 'EJERCICIO 9. Analiza un romance',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 9. Ռոմանսի վերլուծություն',
    exerciseType: 'poem',
    questionEs: '¿Qué vocales coinciden en la rima?',
    questionArm: 'Ո՞ր ձայնավորներն են համընկնում հանգում։',
    options: [
      { key: 'a-a', textEs: 'a-a (rima asonante)' },
      { key: 'e-a', textEs: 'e-a' },
      { key: 'o-a', textEs: 'o-a' }
    ],
    correctAnswer: 'a-a',
    explanationEs: 'a-a. Desde la última vocal acentuada (tónica), solo coinciden los fonemas vocálicos: color-A-d-A, mañ-A-n-A, pis-A-d-As, pl-A-z-A (rima asonante).',
    explanationArm: 'a-a. Շեշտված ձայնավորից սկսած համընկնում են a-a ձայնավորները։ Սա ձայնավորային հանգ է (rima asonante)։'
  },
  {
    id: 79,
    exerciseTitleEs: 'EJERCICIO 9. Analiza un romance',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 9. Ռոմանսի վերլուծություն',
    exerciseType: 'poem',
    questionEs: '¿Qué figura literaria aparece en «Y la brisa canta suave»?',
    questionArm: 'Ի՞նչ արտահայտչամիջոց կա «Y la brisa canta suave» տողում։',
    options: [
      { key: 'Personificación', textEs: 'Personificación (Անձնավորում)' },
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' },
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' }
    ],
    correctAnswer: 'Personificación',
    explanationEs: 'Personificación: Atribuye a la brisa la facultad humana de cantar dulcemente.',
    explanationArm: 'Անձնավորում (Personificación). Զեփյուռին վերագրվում է երգելու մարդկային գործողությունը։'
  },
  {
    id: 80,
    exerciseTitleEs: 'EJERCICIO 9. Analiza un romance',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 9. Ռոմանսի վերլուծություն',
    exerciseType: 'poem',
    questionEs: '¿Por qué podemos identificar el poema como un romance?',
    questionArm: 'Ինչո՞ւ կարող ենք այս բանաստեղծությունը ռոմանս անվանել։',
    options: [
      { key: 'romance_features', textEs: 'Porque tiene versos octosílabos y rima asonante en los pares, con impares sueltos.' },
      { key: 'wrong_features', textEs: 'Porque tiene rima consonante en todos los versos de diez sílabas.' }
    ],
    correctAnswer: 'romance_features',
    explanationEs: 'Porque tiene versos octosílabos y rima asonante en los pares, mientras que los impares quedan sueltos.',
    explanationArm: 'Ութվանկանի տողերով (octosílabos) և զույգ տողերի ձայնավորային հանգով (rima asonante) ստեղծագործություն է, որտեղ կենտ տողերը ազատ են։'
  },

  // EJERCICIO 10. Comprensión y análisis literario («El puente encantado») (81-90)
  {
    id: 81,
    exerciseTitleEs: 'EJERCICIO 10. Comprensión y análisis literario',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Տեքստի ըմբռնում և գրական վերլուծություն («Կախարդված կամուրջը»)',
    exerciseType: 'text',
    questionEs: '¿Dónde ocurre la historia?',
    questionArm: 'Որտե՞ղ է տեղի ունենում պատմությունը։',
    options: [
      { key: 'A', textEs: 'En un puente muy antiguo de un pequeño pueblo de España.' },
      { key: 'B', textEs: 'En un museo de Madrid.' },
      { key: 'C', textEs: 'En una biblioteca de la ciudad.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'En un puente antiguo de un pueblo español.',
    explanationArm: 'Հին կամրջի մոտ՝ իսպանական փոքրիկ գյուղում։'
  },
  {
    id: 82,
    exerciseTitleEs: 'EJERCICIO 10. Comprensión y análisis literario',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Տեքստի ըմբռնում և գրական վերլուծություն',
    exerciseType: 'text',
    questionEs: '¿Qué características de la literatura popular aparecen en el texto?',
    questionArm: 'Ժողովրդական գրականության ի՞նչ հատկանիշներ կան տեքստում։',
    options: [
      { key: 'A', textEs: 'Autor desconocido (anónimo), transmisión oral (abuelos a nietos) y diferentes versiones.' },
      { key: 'B', textEs: 'Autor famoso con libro impreso con derechos reservados.' },
      { key: 'C', textEs: 'Métrica rígida y vocabulario científico.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Autor desconocido, transmisión oral y diferentes versiones a lo largo de los años.',
    explanationArm: 'Անհայտ հեղինակ (անանունություն), բանավոր փոխանցում (տատիկ-պապիկներից թոռներին) և տարբեր տարբերակների առկայություն։'
  },
  {
    id: 83,
    exerciseTitleEs: 'EJERCICIO 10. Comprensión y análisis literario',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Տեքստի ըմբռնում և գրական վերլուծություն',
    exerciseType: 'text',
    questionEs: '¿Qué género literario representa mejor la historia tradicional del puente?',
    questionArm: 'Ո՞ր գրական ժանրին է առավել նման ավանդական պատմությունը։',
    options: [
      { key: 'Leyenda', textEs: 'Leyenda (Ավանդազրույց / Լեգենդ)' },
      { key: 'Mito', textEs: 'Mito (Առասպել)' },
      { key: 'Romance', textEs: 'Romance (Ռոմանս)' }
    ],
    correctAnswer: 'Leyenda',
    explanationEs: 'Leyenda. Está ambientada en un lugar real conocido y contiene elementos misteriosos y sobrenaturales.',
    explanationArm: 'Լեգենդ / Ավանդազրույց (Leyenda). Պատմությունը կապված է իրական վայրի հետ և պարունակում է խորհրդավոր ու երևակայական տարրեր։'
  },
  {
    id: 84,
    exerciseTitleEs: 'EJERCICIO 10. Comprensión y análisis literario',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Տեքստի ըմբռնում և գրական վերլուծություն',
    exerciseType: 'text',
    questionEs: '¿Qué figura aparece en «El viento susurraba entre los árboles»?',
    questionArm: 'Ո՞ր արտահայտչամիջոցն է «El viento susurraba entre los árboles» արտահայտության մեջ։',
    options: [
      { key: 'Personificación', textEs: 'Personificación (Անձնավորում)' },
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' },
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' }
    ],
    correctAnswer: 'Personificación',
    explanationEs: 'Personificación. Se atribuye al viento la acción de susurrar (murmurar palabras suavemente).',
    explanationArm: 'Անձնավորում (Personificación). Քամուն վերագրվում է մարդկային շշնջալու գործողությունը։'
  },
  {
    id: 85,
    exerciseTitleEs: 'EJERCICIO 10. Comprensión y análisis literario',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Տեքստի ըմբռնում և գրական վերլուծություն',
    exerciseType: 'text',
    questionEs: '¿Qué figura aparece en «¡Toc, toc!»?',
    questionArm: 'Ո՞ր արտահայտչամիջոցն է «¡Toc, toc!»-ը։',
    options: [
      { key: 'Onomatopeya', textEs: 'Onomatopeya (Բնաձայնություն)' },
      { key: 'Aliteración', textEs: 'Aliteración (Ալիտերացիա)' },
      { key: 'Anáfora', textEs: 'Anáfora (Անաֆորա)' }
    ],
    correctAnswer: 'Onomatopeya',
    explanationEs: 'Onomatopeya. «Toc, toc» imita el sonido sordo de un golpe.',
    explanationArm: 'Բնաձայնություն (Onomatopeya). «Toc, toc»-ը նմանակում է թակոցի ձայնը։'
  },
  {
    id: 86,
    exerciseTitleEs: 'EJERCICIO 10. Comprensión y análisis literario',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Տեքստի ըմբռնում և գրական վերլուծություն',
    exerciseType: 'text',
    questionEs: '¿Qué figura aparece en «Su corazón era un tambor»? Identifica A y B.',
    questionArm: 'Գտիր փոխաբերությունը և նրա իրական ու փոխաբերական տարրերը «Su corazón era un tambor» նախադասության մեջ։',
    options: [
      { key: 'A', textEs: 'Metáfora: A = corazón (real), B = tambor (imaginario); estructura A es B.' },
      { key: 'B', textEs: 'Personificación del tambor.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Metáfora: A = corazón, B = tambor; Estructura A es B.',
    explanationArm: 'Փոխաբերություն (Metáfora). Իրական տարր (A) = corazón (սիրտ), Փոխաբերական տարր (B) = tambor (թմբուկ)։ Սիրտը նույնացվում է թմբուկի հետ (A es B)։'
  },
  {
    id: 87,
    exerciseTitleEs: 'EJERCICIO 10. Comprensión y análisis literario',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Տեքստի ըմբռնում և գրական վերլուծություն',
    exerciseType: 'text',
    questionEs: '¿Qué figura aparece en «Quería regresar. Quería correr. Quería pedir ayuda»?',
    questionArm: 'Ո՞ր արտահայտչամիջոցն է այս տողերում։',
    options: [
      { key: 'Anáfora', textEs: 'Anáfora (Անաֆորա)' },
      { key: 'Polisíndeton', textEs: 'Polisíndeton (Պոլիսինդետոն)' },
      { key: 'Hipérbaton', textEs: 'Hipérbaton (Հիպերբատոն)' }
    ],
    correctAnswer: 'Anáfora',
    explanationEs: 'Anáfora. Se repite la palabra «Quería» al comienzo de tres oraciones consecutivas.',
    explanationArm: 'Անաֆորա. «Quería» բառը կրկնվում է երեք արտահայտությունների սկզբում։'
  },
  {
    id: 88,
    exerciseTitleEs: 'EJERCICIO 10. Comprensión y análisis literario',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Տեքստի ըմբռնում և գրական վերլուծություն',
    exerciseType: 'text',
    questionEs: '¿Qué figura aparece en «Con mis propios ojos»?',
    questionArm: 'Ո՞ր արտահայտչամիջոցն է «Con mis propios ojos» (Իմ սեփական աչքերով) արտահայտության մեջ։',
    options: [
      { key: 'Pleonasmo', textEs: 'Pleonasmo (Պլեոնազմ)' },
      { key: 'Metáfora', textEs: 'Metáfora (Փոխաբերություն)' },
      { key: 'Asíndeton', textEs: 'Asíndeton (Ասինդետոն)' }
    ],
    correctAnswer: 'Pleonasmo',
    explanationEs: 'Pleonasmo. Expresión redundante pero de gran fuerza expresiva para corroborar lo visto.',
    explanationArm: 'Պլեոնազմ (Pleonasmo). Ավելորդ, բայց շեշտադրող բառերի միջոցով ուժեղացվում է արտահայտությունը։'
  },
  {
    id: 89,
    exerciseTitleEs: 'EJERCICIO 10. Comprensión y análisis literario',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Տեքստի ըմբռնում և գրական վերլուծություն',
    exerciseType: 'text',
    questionEs: '¿El texto está escrito en verso o en prosa?',
    questionArm: 'Տեքստը արձա՞կ (prosa) է, թե՞ չափածո (verso)։',
    options: [
      { key: 'Prosa', textEs: 'En prosa (Արձակ)' },
      { key: 'Verso', textEs: 'En verso (Չափածո)' }
    ],
    correctAnswer: 'Prosa',
    explanationEs: 'Prosa. Se organiza en oraciones continuas y párrafos sin versificación métrica.',
    explanationArm: 'Արձակ (Prosa). Տեքստը կազմված է նախադասություններից և պարբերություններից, առանց չափական տողերի։'
  },
  {
    id: 90,
    exerciseTitleEs: 'EJERCICIO 10. Comprensión y análisis literario',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 10. Տեքստի ըմբռնում և գրական վերլուծություն',
    exerciseType: 'text',
    questionEs: '¿Quién es la protagonista? ¿Qué encontró?',
    questionArm: 'Ո՞վ է գլխավոր հերոսը և ի՞նչ գտավ։',
    options: [
      { key: 'A', textEs: 'Elena; encontró una pequeña caja con una llave dorada.' },
      { key: 'B', textEs: 'Una mujer misteriosa; encontró un libro de cuentos.' },
      { key: 'C', textEs: 'Un caballero; encontró un caballo.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Elena; encontró una caja con una llave dorada en el puente.',
    explanationArm: 'Ելենան. Նա կամրջի վրա գտավ ոսկեգույն բանալիով փոքրիկ տուփ։'
  },

  // EJERCICIO 11. Corrige los errores (91-95)
  {
    id: 91,
    exerciseTitleEs: 'EJERCICIO 11. Corrige los errores',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 11. Ուղղիր սխալները',
    exerciseType: 'correction',
    questionEs: 'Error: «Las estrellas sonríen» es una metáfora porque compara dos objetos.',
    questionArm: 'Սխալ պնդում. «Las estrellas sonríen»-ը փոխաբերություն է, քանի որ համեմատում է երկու առարկա։ Ինչպե՞ս է ճիշտ։',
    options: [
      { key: 'A', textEs: 'Es una personificación porque atribuye a las estrellas una acción humana: sonreír.' },
      { key: 'B', textEs: 'Es un hipérbaton porque altera el orden de las estrellas.' },
      { key: 'C', textEs: 'Es una onomatopeya.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Es una personificación porque atribuye a las estrellas una acción humana: sonreír.',
    explanationArm: 'Ճիշտ է՝ սա անձնավորում է (personificación), որովհետև աստղերին վերագրվում է մարդու գործողություն՝ ժպտալը։'
  },
  {
    id: 92,
    exerciseTitleEs: 'EJERCICIO 11. Corrige los errores',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 11. Ուղղիր սխալները',
    exerciseType: 'correction',
    questionEs: 'Error: «Corre, salta, ríe» es un polisíndeton porque repite muchas conjunciones.',
    questionArm: 'Սխալ պնդում. «Corre, salta, ríe»-ն պոլիսինդետոն է, քանի որ շատ շաղկապներ է կրկնում։ Ինչպե՞ս է ճիշտ։',
    options: [
      { key: 'A', textEs: 'Es un asíndeton porque se omiten las conjunciones (también hay enumeración).' },
      { key: 'B', textEs: 'Es una anáfora.' },
      { key: 'C', textEs: 'Es una aliteración.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Es un asíndeton porque se omiten las conjunciones. También hay enumeración.',
    explanationArm: 'Ճիշտ է՝ սա ասինդետոն է (asíndeton), որովհետև շաղկապները բաց են թողնված, ինչպես նաև կա թվարկում։'
  },
  {
    id: 93,
    exerciseTitleEs: 'EJERCICIO 11. Corrige los errores',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 11. Ուղղիր սխալները',
    exerciseType: 'correction',
    questionEs: 'Error: «Tus ojos son estrellas» tiene la estructura B de A.',
    questionArm: 'Սխալ պնդում. «Tus ojos son estrellas» ունի B de A կառուցվածքը։ Ինչպե՞ս է ճիշտ։',
    options: [
      { key: 'A', textEs: 'Tiene la estructura A es B (A = ojos, B = estrellas).' },
      { key: 'B', textEs: 'Tiene la estructura Solo B.' },
      { key: 'C', textEs: 'Tiene la estructura A de B.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Tiene la estructura A es B. A = ojos (real), B = estrellas (imaginario).',
    explanationArm: 'Ճիշտ է՝ ունի A es B կառուցվածքը։ A = ojos (աչքեր), B = estrellas (աստղեր)։ Իրական տարրը գալիս է փոխաբերականից առաջ և նույնացվում է դրա հետ։'
  },
  {
    id: 94,
    exerciseTitleEs: 'EJERCICIO 11. Corrige los errores',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 11. Ուղղիր սխալները',
    exerciseType: 'correction',
    questionEs: 'Error: «El viento canta y baila» es una onomatopeya porque imita un sonido.',
    questionArm: 'Սխալ պնդում. «El viento canta y baila»-ն բնաձայնություն է, որովհետև ձայն է նմանակում։ Ինչպե՞ս է ճիշտ։',
    options: [
      { key: 'A', textEs: 'Es una personificación porque atribuye al viento acciones humanas (cantar y bailar).' },
      { key: 'B', textEs: 'Es una paronomasia.' },
      { key: 'C', textEs: 'Es un pleonasmo.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Es una personificación porque atribuye al viento acciones humanas.',
    explanationArm: 'Ճիշտ է՝ սա անձնավորում է (personificación), որովհետև քամուն վերագրվում են մարդկային գործողություններ (երգել և պարել)։'
  },
  {
    id: 95,
    exerciseTitleEs: 'EJERCICIO 11. Corrige los errores',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 11. Ուղղիր սխալները',
    exerciseType: 'correction',
    questionEs: 'Error: «¡Pum!» es una anáfora porque repite una palabra al principio de varios versos.',
    questionArm: 'Սխալ պնդում. «¡Pum!»-ը անաֆորա է, որովհետև բառ է կրկնում տողերի սկզբում։ Ինչպե՞ս է ճիշտ։',
    options: [
      { key: 'A', textEs: 'Es una onomatopeya porque imita el sonido acústico de un golpe.' },
      { key: 'B', textEs: 'Es un polisíndeton.' },
      { key: 'C', textEs: 'Es un adjetivo.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Es una onomatopeya porque imita el sonido de un golpe.',
    explanationArm: 'Ճիշտ է՝ սա բնաձայնություն է (onomatopeya), քանի որ նմանակում է հարվածի կամ պայթյունի ձայնը։'
  },

  // EJERCICIO 12. Producción escrita (96-100)
  {
    id: 96,
    exerciseTitleEs: 'EJERCICIO 12. Producción escrita',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 12. Ինքնուրույն նախադասություններ կազմելու առաջադրանք',
    exerciseType: 'production',
    questionEs: 'Escribe una frase con aliteración.',
    questionArm: 'Կազմիր մեկ նախադասություն՝ օգտագործելով հնչյունների կրկնություն (ալիտերացիա)։',
    options: [
      { key: 'A', textEs: 'Sara susurra suavemente sobre la seda.' },
      { key: 'B', textEs: 'El perro corre rápido.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Ejemplo modelo: «Sara susurra suavemente sobre la seda». Se reitera el fonema /s/ creando musicalidad.',
    explanationArm: 'Օրինակելի պատասխան՝ «Sara susurra suavemente sobre la seda»։ Կրկնվում է /s/ հնչյունը՝ ստեղծելով հնչյունային ազդեցություն։'
  },
  {
    id: 97,
    exerciseTitleEs: 'EJERCICIO 12. Producción escrita',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 12. Ինքնուրույն նախադասություններ կազմելու առաջադրանք',
    exerciseType: 'production',
    questionEs: 'Escribe una frase con polisíndeton.',
    questionArm: 'Կազմիր նախադասություն՝ միևնույն շաղկապը բազմիցս կրկնելով (պոլիսինդետոն)։',
    options: [
      { key: 'A', textEs: 'Y canta y ríe y baila y sueña.' },
      { key: 'B', textEs: 'Canta, ríe, baila, sueña.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Ejemplo modelo: «Y canta y ríe y baila y sueña». La conjunción «y» se repite ante cada verbo.',
    explanationArm: 'Օրինակելի պատասխան՝ «Y canta y ríe y baila y sueña»։ «Y» շաղկապը մի քանի անգամ կրկնվում է։'
  },
  {
    id: 98,
    exerciseTitleEs: 'EJERCICIO 12. Producción escrita',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 12. Ինքնուրույն նախադասություններ կազմելու առաջադրանք',
    exerciseType: 'production',
    questionEs: 'Escribe una frase con anáfora.',
    questionArm: 'Գրիր երեք կարճ արտահայտություն, որոնք սկսվում են նույն բառով (անաֆորա)։',
    options: [
      { key: 'A', textEs: 'Quiero vivir. / Quiero aprender. / Quiero viajar.' },
      { key: 'B', textEs: 'Vivo, aprendo, viajo.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Ejemplo modelo: «Quiero vivir. / Quiero aprender. / Quiero viajar». «Quiero» se repite al inicio.',
    explanationArm: 'Օրինակելի պատասխան՝ «Quiero vivir. Quiero aprender. Quiero viajar»։ «Quiero» բառը կրկնվում է երեք տողերի սկզբում։'
  },
  {
    id: 99,
    exerciseTitleEs: 'EJERCICIO 12. Producción escrita',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 12. Ինքնուրույն նախադասություններ կազմելու առաջադրանք',
    exerciseType: 'production',
    questionEs: 'Escribe una metáfora con la estructura B de A.',
    questionArm: 'Կազմիր փոխաբերություն՝ B de A կառուցվածքով (երբ փոխաբերականն առաջ է գալիս իրականից)։',
    options: [
      { key: 'A', textEs: 'El oro de su cabello.' },
      { key: 'B', textEs: 'Su cabello es oro.' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Ejemplo modelo: «El oro de su cabello». A = cabello, B = oro. El término imaginario «oro» precede a «cabello».',
    explanationArm: 'Օրինակելի պատասխան՝ «El oro de su cabello»։ A = cabello, B = oro։ Փոխաբերական տարրը՝ oro, նախորդում է իրական տարրին՝ cabello (B de A)։'
  },
  {
    id: 100,
    exerciseTitleEs: 'EJERCICIO 12. Producción escrita',
    exerciseTitleArm: 'ՎԱՐԺՈՒԹՅՈՒՆ 12. Ինքնուրույն նախադասություններ կազմելու առաջադրանք',
    exerciseType: 'production',
    questionEs: 'Escribe una frase con hipérbaton y después ordénala de forma habitual.',
    questionArm: 'Գրիր շրջուն շարադասությամբ նախադասություն (հիպերբատոն), ապա վերադասավորիր բառերը սովորական հերթականությամբ։',
    options: [
      { key: 'A', textEs: 'Hipérbaton: «De estrellas estaba lleno el cielo». Orden habitual: «El cielo estaba lleno de estrellas».' },
      { key: 'B', textEs: '«El cielo estaba azul».' }
    ],
    correctAnswer: 'A',
    explanationEs: 'Ejemplo modelo: «De estrellas estaba lleno el cielo». Orden sintáctico habitual: «El cielo estaba lleno de estrellas».',
    explanationArm: 'Օրինակելի պատասխան՝ «De estrellas estaba lleno el cielo»։ Սովորական կարգ՝ «El cielo estaba lleno de estrellas»։ Բառերի սովորական շարադասությունը փոխված է։'
  }
];

export const LITERARY_REPASO_TABLE: LiteraryDeviceSummary[] = [
  { conceptEs: 'Literatura popular', howToRecognizeEs: 'Anónima, oral, variable', howToRecognizeArm: 'անանուն, բանավոր, փոփոխվող', exampleEs: 'Canciones populares, nanas, cuentos', exampleArm: 'Ժողովրդական երգեր, օրորոցայիններ' },
  { conceptEs: 'Literatura culta', howToRecognizeEs: 'Autor conocido, escrita', howToRecognizeArm: 'հայտնի հեղինակ, գրավոր', exampleEs: 'Obras de Cervantes, García Lorca', exampleArm: 'Հեղինակային գրավոր երկեր' },
  { conceptEs: 'Romance', howToRecognizeEs: 'Octosílabos, rima asonante en pares', howToRecognizeArm: 'ութվանկանի, զույգ տողերի ձայնավորային հանգ', exampleEs: '«Por la senda va la niña...»', exampleArm: 'Ավանդական ութվանկանի չափածո' },
  { conceptEs: 'Leyenda', howToRecognizeEs: 'Realidad y fantasía, lugar real', howToRecognizeArm: 'իրական և երևակայական տարրեր, իրական վայր', exampleEs: 'El puente encantado', exampleArm: 'Կախարդված կամուրջը' },
  { conceptEs: 'Mito', howToRecognizeEs: 'Dioses, orígenes del mundo', howToRecognizeArm: 'աստվածներ և ծագման բացատրություն', exampleEs: 'Creación del Sol y la Luna', exampleArm: 'Արեգակի և Լուսնի արարումը' },
  { conceptEs: 'Cuento', howToRecognizeEs: 'Narración breve, argumento sencillo', howToRecognizeArm: 'կարճ պատմություն, պարզ սյուժե', exampleEs: 'La niña que perdió su mochila', exampleArm: 'Կարճ պատմվածք' },
  { conceptEs: 'Aliteración', howToRecognizeEs: 'Repetición intencionada de sonidos', howToRecognizeArm: 'հնչյունների կրկնություն', exampleEs: 'Tres tristes tigres tragan trigo', exampleArm: '/t/ և /r/ կրկնություն' },
  { conceptEs: 'Onomatopeya', howToRecognizeEs: 'Imitación de sonidos reales', howToRecognizeArm: 'ձայների նմանակում', exampleEs: '¡Pum! / ¡Toc, toc! / ¡Guau!', exampleArm: 'Հարվածի, թակոցի, հաչոցի ձայն' },
  { conceptEs: 'Paronomasia', howToRecognizeEs: 'Palabras parecidas en sonido pero distinto significado', howToRecognizeArm: 'նմանահունչ բառեր՝ տարբեր իմաստներով', exampleEs: 'Hombre / hambre; casa / cosa', exampleArm: 'Նման հնչյուններով զույգեր' },
  { conceptEs: 'Epanadiplosis', howToRecognizeEs: 'Inicio y final del verso/frase iguales', howToRecognizeArm: 'նույն բառը սկզբում և վերջում', exampleEs: 'Verde, todo parece verde', exampleArm: 'Նույն բառը բացում և փակում է միտքը' },
  { conceptEs: 'Anáfora', howToRecognizeEs: 'Repetición de palabra al comienzo', howToRecognizeArm: 'բառի կրկնություն տողերի սկզբում', exampleEs: 'Quiero viajar. Quiero estudiar.', exampleArm: 'Նույն բառը տողերի սկզբում' },
  { conceptEs: 'Hipérbaton', howToRecognizeEs: 'Orden sintáctico habitual alterado', howToRecognizeArm: 'շրջուն շարադասություն', exampleEs: 'Del cielo caían las blancas estrellas', exampleArm: 'Փոխված բառակարգ' },
  { conceptEs: 'Asíndeton', howToRecognizeEs: 'Sin conjunciones entre elementos', howToRecognizeArm: 'առանց շաղկապների', exampleEs: 'Corre, salta, grita, sonríe', exampleArm: 'Ստորակետներով շարք' },
  { conceptEs: 'Polisíndeton', howToRecognizeEs: 'Conjunciones repetidas insistentemente', howToRecognizeArm: 'շաղկապների բազմակի կրկնություն', exampleEs: 'Y canta y baila y ríe y juega', exampleArm: '«Y» կամ «ni» կրկնությունը' },
  { conceptEs: 'Enumeración', howToRecognizeEs: 'Serie o acumulación de elementos', howToRecognizeArm: 'թվարկում', exampleEs: 'Pan, queso, leche y fruta', exampleArm: 'Առարկաների շարք' },
  { conceptEs: 'Pleonasmo', howToRecognizeEs: 'Redundancia enfática / palabras innecesarias pero expresivas', howToRecognizeArm: 'շեշտադրող ավելորդ բառեր', exampleEs: 'Con mis propios ojos lo vi / Subió arriba', exampleArm: 'Իմ սեփական աչքերով տեսա' },
  { conceptEs: 'Metáfora', howToRecognizeEs: 'Identificación entre término real (A) e imaginario (B)', howToRecognizeArm: 'իրական և փոխաբերական տարրերի նույնացում', exampleEs: 'Tus ojos son dos estrellas (A es B)', exampleArm: 'Աչքերը աստղեր են' },
  { conceptEs: 'Personificación', howToRecognizeEs: 'Atribución de cualidades humanas a seres u objetos', howToRecognizeArm: 'մարդկային հատկությունների վերագրում', exampleEs: 'La luna sonríe / El viento susurraba', exampleArm: 'Լուսինը ժպտում է, քամին շշնջում է' }
];

export const ORAL_EXAM_FORMULAS: OralTemplate[] = [
  {
    formulaEs: 'Es una metáfora porque el elemento real se identifica con otro imaginario.',
    formulaArm: 'Սա փոխաբերություն է, որովհետև իրական տարրը նույնացվում է փոխաբերականի հետ։',
    exampleEs: '«Su voz es música» -> Es una metáfora porque la voz (A) se identifica con la música (B).'
  },
  {
    formulaEs: 'Es una anáfora porque se repite la misma palabra al principio de varios enunciados.',
    formulaArm: 'Սա անաֆորա է, որովհետև նույն բառը կրկնվում է մի քանի արտահայտությունների սկզբում։',
    exampleEs: '«Quiero vivir. Quiero aprender» -> Es una anáfora porque repite «Quiero» al inicio.'
  },
  {
    formulaEs: 'Es un polisíndeton porque se repite una conjunción insistentemente.',
    formulaArm: 'Սա պոլիսինդետոն է, որովհետև շաղկապը համառորեն կրկնվում է։',
    exampleEs: '«Y ríe y canta y sueña» -> Es un polisíndeton por la repetición de la conjunción «y».'
  },
  {
    formulaEs: 'Es un hipérbaton porque se altera el orden habitual de las palabras.',
    formulaArm: 'Սա հիպերբատոն է, որովհետև փոփոխված է բառերի սովորական շարադասությունը։',
    exampleEs: '«Del cielo caían las estrellas» -> En lugar de «Las estrellas caían del cielo».'
  },
  {
    formulaEs: 'Es una personificación porque se atribuyen cualidades humanas a un elemento no humano.',
    formulaArm: 'Սա անձնավորում է, որովհետև ոչ մարդկային տարրին վերագրվում են մարդկային հատկանիշներ։',
    exampleEs: '«Las nubes lloran» -> Atribuye la acción humana de llorar a las nubes.'
  }
];
