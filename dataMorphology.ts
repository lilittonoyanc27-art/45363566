/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GrammarCategory, SentenceAnalysis, VerbPersonRow, WordAnalysis } from './types';

export const GRAMMAR_CATEGORIES: GrammarCategory[] = [
  {
    id: 'sustantivo',
    nameEs: 'Sustantivo',
    nameArm: 'Գոյական',
    whatToAnalyzeEs: 'Tipo (común/propio, concreto/abstracto, individual/colectivo, contable/incontable), género y número.',
    whatToAnalyzeArm: 'Տեսակը (հասարակ/հատուկ, կոնկրետ/վերացական, անհատական/հավաքական, հաշվելի/անհաշվելի), սեռը և թիվը։',
    detailsEs: [
      'Común / Propio (հասարակ / հատուկ)',
      'Concreto / Abstracto (կոնկրետ / վերացական)',
      'Individual / Colectivo (անհատական / հավաքական)',
      'Contable / Incontable (հաշվելի / անհաշվելի)',
      'Masculino / Femenino (արական / իգական սեռ)',
      'Singular / Plural (եզակի / հոգնակի թիվ)'
    ],
    detailsArm: [
      'Հասարակ (común) կամ Հատուկ (propio)',
      'Կոնկրետ (concreto) կամ Վերացական (abstracto)',
      'Անհատական (individual) կամ Հավաքական (colectivo)',
      'Հաշվելի (contable) կամ Անհաշվելի (incontable)',
      'Արական (masculino) կամ Իգական (femenino)',
      'Եզակի (singular) կամ Հոգնակի (plural)'
    ],
    exampleEs: 'niñas',
    exampleAnalysisEs: 'Sustantivo común, concreto, individual, contable, femenino, plural.',
    exampleArm: 'աղջիկներ',
    exampleAnalysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, իգական սեռ, հոգնակի թիվ։',
    tags: ['Գոյական', 'Սեռ', 'Թիվ']
  },
  {
    id: 'adjetivo',
    nameEs: 'Adjetivo',
    nameArm: 'Ածական',
    whatToAnalyzeEs: 'Tipo (calificativo, relacional), género, número y grado (positivo, comparativo, superlativo).',
    whatToAnalyzeArm: 'Տեսակը (որակական, հարաբերական), սեռը, թիվը և համեմատության աստիճանը (դրական, բաղդատական, գերադրական)։',
    detailsEs: [
      'Adjetivo calificativo (որակական ածական)',
      'Género: masculino / femenino / invariable (սեռ)',
      'Número: singular / plural (թիվ)',
      'Grado: positivo, comparativo, superlativo (աստիճան)'
    ],
    detailsArm: [
      'Որակական ածական (adjetivo calificativo)',
      'Սեռ՝ արական, իգական կամ անփոփոխ (invariable)',
      'Թիվ՝ եզակի կամ հոգնակի',
      'Աստիճան՝ դրական (positivo), բաղդատական (comparativo), գերադրական (superlativo)'
    ],
    exampleEs: 'bonitas',
    exampleAnalysisEs: 'Adjetivo calificativo, femenino, plural, grado positivo.',
    exampleArm: 'գեղեցիկներ',
    exampleAnalysisArm: 'Որակական ածական, իգական սեռ, հոգնակի թիվ, դրական աստիճան։',
    tags: ['Ածական', 'Որակական', 'Աստիճան']
  },
  {
    id: 'verbo',
    nameEs: 'Verbo',
    nameArm: 'Բայ',
    whatToAnalyzeEs: 'Infinitivo, conjugación (1.ª -ar, 2.ª -er, 3.ª -ir), persona, número, tiempo y modo.',
    whatToAnalyzeArm: 'Անորոշ ձևը (infinitivo), խոնարհումը (1-ին -ar, 2-րդ -er, 3-րդ -ir), դեմքը, թիվը, ժամանակը և եղանակը։',
    detailsEs: [
      'Infinitivo: cantar, comer, vivir (անորոշ ձև)',
      'Conjugación: 1.ª (-ar), 2.ª (-er), 3.ª (-ir) (խոնարհում)',
      'Persona: 1.ª, 2.ª, 3.ª (դեմք)',
      'Número: singular, plural (թիվ)',
      'Tiempo: presente, pretérito indefinido, imperfecto, futuro, condicional... (ժամանակ)',
      'Modo: indicativo, subjuntivo, imperativo (եղանակ)'
    ],
    detailsArm: [
      'Անորոշ ձև (infinitivo)՝ cantar, estudiar, comer, vivir',
      'Խոնարհում՝ 1-ին (-ar), 2-րդ (-er), 3-րդ (-ir)',
      'Դեմք՝ 1-ին (առաջին), 2-րդ (երկրորդ), 3-րդ (երրորդ)',
      'Թիվ՝ եզակի (singular), հոգնակի (plural)',
      'Ժամանակ՝ presente (ներկա), pretérito (անցյալ), futuro (ապառնի)...',
      'Եղանակ՝ indicativo (սահմանական), subjuntivo (ըղձական), imperativo (հրամայական)'
    ],
    exampleEs: 'estudiamos',
    exampleAnalysisEs: 'Verbo estudiar, primera conjugación (-ar), primera persona del plural, presente de indicativo.',
    exampleArm: 'սովորում ենք',
    exampleAnalysisArm: 'Estudiar բայ, առաջին խոնարհում (-ar), առաջին դեմք, հոգնակի թիվ, սահմանական եղանակ, ներկա ժամանակ։',
    tags: ['Բայ', 'Խոնարհում', 'Եղանակ', 'Ժամանակ']
  },
  {
    id: 'pronombre',
    nameEs: 'Pronombre',
    nameArm: 'Դերանուն',
    whatToAnalyzeEs: 'Tipo (personal, demostrativo, posesivo, etc.), persona, género y número cuando corresponda.',
    whatToAnalyzeArm: 'Տեսակը (անձնական, ցուցական, ստացական և այլն), դեմքը, սեռը և թիվը, երբ կիրառելի է։',
    detailsEs: [
      'Pronombre personal (yo, tú, él, ella, nosotros, vosotros, ellos, ellas, usted)',
      'Demostrativo (este, ese, aquel...)',
      'Posesivo (mío, tuyo, suyo...)',
      'Tiene persona gramatical (ունի քերականական դեմք)'
    ],
    detailsArm: [
      'Անձնական դերանուն (yo, tú, él, ella, nosotros...)',
      'Ցուցական դերանուն (este, aquel...)',
      'Ստացական դերանուն (el mío, el suyo...)',
      'Ունի քերականական դեմք (1-ին, 2-րդ, 3-րդ)'
    ],
    exampleEs: 'Nosotros',
    exampleAnalysisEs: 'Pronombre personal, 1.ª persona plural, masculino.',
    exampleArm: 'Մենք',
    exampleAnalysisArm: 'Անձնական դերանուն, 1-ին դեմք, հոգնակի թիվ, արական սեռ։',
    tags: ['Դերանուն', 'Անձնական']
  },
  {
    id: 'determinante',
    nameEs: 'Determinante',
    nameArm: 'Որոշիչ (Դետերմինատիվ)',
    whatToAnalyzeEs: 'Tipo (posesivo, demostrativo, numeral, indefinido, interrogativo/exclamativo), género y número.',
    whatToAnalyzeArm: 'Տեսակը (ստացական, ցուցական, թվական, անորոշ, հարցական/բացականչական), սեռը և թիվը։',
    detailsEs: [
      'Posesivo: mi, tu, su, nuestro (ստացական)',
      'Demostrativo: este, ese, aquel (ցուցական)',
      'Numeral: cardinal (uno, dos...), ordinal (primero...) (թվական)',
      'Indefinido: algún, varios, muchos (անորոշ)',
      'Va acompañando al sustantivo (ուղեկցում է գոյականին)'
    ],
    detailsArm: [
      'Ստացական որոշիչ՝ mi, mis, tu, tus, su, sus, nuestro',
      'Ցուցական որոշիչ՝ este, esta, aquellos, aquellas',
      'Թվական որոշիչ՝ dos, tres, primer...',
      'Անորոշ որոշիչ՝ varios, algunos, muchos...',
      'Միշտ ուղեկցում է գոյականին (ի տարբերություն դերանվան)'
    ],
    exampleEs: 'Mis',
    exampleAnalysisEs: 'Determinante posesivo, plural, poseedor de 1.ª persona singular.',
    exampleArm: 'Իմ (հոգնակի առարկաների համար)',
    exampleAnalysisArm: 'Ստացական որոշիչ, հոգնակի թիվ, 1-ին դեմքի պատկանելություն։',
    tags: ['Որոշիչ', 'Ստացական', 'Ցուցական']
  },
  {
    id: 'articulo',
    nameEs: 'Artículo',
    nameArm: 'Հոդ (Արտիկլ)',
    whatToAnalyzeEs: 'Determinado (el, la, los, las) o indeterminado (un, una, unos, unas), género y número.',
    whatToAnalyzeArm: 'Որոշյալ (el, la, los, las) կամ անորոշ (un, una, unos, unas), սեռը և թիվը։',
    detailsEs: [
      'Artículo determinado: el, la, los, las',
      'Artículo indeterminado: un, una, unos, unas',
      'Artículo neutro: lo',
      'Concuerda en género y número con el sustantivo'
    ],
    detailsArm: [
      'Որոշյալ հոդ՝ el (ար․ եզ․), la (իգ․ եզ․), los (ար․ հոգ․), las (իգ․ հոգ․)',
      'Անորոշ հոդ՝ un (ար․ եզ․), una (իգ․ եզ․), unos (ար․ հոգ․), unas (իգ․ հոգ․)',
      'Չեզոք հոդ՝ lo',
      'Համաձայնում է գոյականի սեռի և թվի հետ'
    ],
    exampleEs: 'La',
    exampleAnalysisEs: 'Artículo determinado, femenino, singular.',
    exampleArm: 'Այն / որոշյալ (իգական, եզակի)',
    exampleAnalysisArm: 'Որոշյալ հոդ, իգական սեռ, եզակի թիվ։',
    tags: ['Հոդ', 'Որոշյալ', 'Անորոշ']
  },
  {
    id: 'adverbio',
    nameEs: 'Adverbio',
    nameArm: 'Մակբայ',
    whatToAnalyzeEs: 'Tipo (tiempo, lugar, modo, cantidad, negación, afirmación, duda), categoría invariable.',
    whatToAnalyzeArm: 'Տեսակը (ժամանակի, տեղի, ձևի, քանակի, ժխտման, հաստատման, կասկածի), անփոփոխ խոսքի մաս է (invariable)։',
    detailsEs: [
      'Tiempo: ayer, hoy, mañana, tarde, después...',
      'Lugar: aquí, allí, cerca, lejos...',
      'Modo: bien, mal, rápidamente...',
      'Cantidad: mucho, muy, poco, bastante...',
      'Negación: no, jamás, nunca...',
      'Invariable: no tiene género ni número'
    ],
    detailsArm: [
      'Ժամանակի՝ ayer (երեկ), hoy (այսօր), mañana (վաղը), tarde (ուշ)...',
      'Տեղի՝ aquí (այստեղ), allí (այնտեղ), cerca (մոտ)...',
      'Քանակի կամ աստիճանի՝ mucho (շատ), muy (խիստ, շատ), poco (քիչ)...',
      'Ժխտման՝ no (ոչ), nunca (երբեք)...',
      'Անփոփոխ է (invariable)՝ չունի սեռ կամ թիվ'
    ],
    exampleEs: 'Mucho',
    exampleAnalysisEs: 'Adverbio de cantidad, invariable.',
    exampleArm: 'Շատ',
    exampleAnalysisArm: 'Քանակի մակբայ, անփոփոխ խոսքի մաս։',
    tags: ['Մակբայ', 'Անփոփոխ']
  },
  {
    id: 'preposicion',
    nameEs: 'Preposición',
    nameArm: 'Նախդիր (Կապ)',
    whatToAnalyzeEs: 'Preposición, invariable. Lista: a, ante, bajo, con, contra, de, desde, en, entre, hacia, hasta, para, por, según, sin, so, sobre, tras, durante, mediante.',
    whatToAnalyzeArm: 'Նախդիր, անփոփոխ խոսքի մաս։ Ցանկը՝ a, ante, bajo, con, contra, de, desde, en, entre, hacia, hasta, para, por, según, sin, sobre, tras, durante, mediante։',
    detailsEs: [
      'Invariable (no cambia)',
      'Relaciona palabras: a, ante, bajo, con, de, en, para, por...',
      'En: indica lugar, tiempo, modo'
    ],
    detailsArm: [
      'Անփոփոխ է (invariable)',
      'Բառերը կապում է իրար հետ՝ a, con, de, en, para, por...',
      'En՝ մեջ, վրա (նախդիր)'
    ],
    exampleEs: 'En',
    exampleAnalysisEs: 'Preposición, invariable.',
    exampleArm: 'Մեջ / Վրա',
    exampleAnalysisArm: 'Նախդիր, անփոփոխ խոսքի մաս։',
    tags: ['Նախդիր', 'Անփոփոխ']
  },
  {
    id: 'conjuncion',
    nameEs: 'Conjunción',
    nameArm: 'Շաղկապ',
    whatToAnalyzeEs: 'Tipo (copulativa: y/e/ni, disyuntiva: o/u, adversativa: pero/sino...), invariable.',
    whatToAnalyzeArm: 'Տեսակը (համադասական copulativa՝ y, e, ni; տրոհական disyuntiva՝ o, u; ներհակական adversativa՝ pero, sino...), անփոփոխ խոսքի մաս։',
    detailsEs: [
      'Copulativas: y, e, ni',
      'Disyuntivas: o, u',
      'Adversativas: pero, sino',
      'Invariable'
    ],
    detailsArm: [
      'Միավորող (copulativa)՝ y (և), e, ni (ոչ... ոչ)',
      'Զատող (disyuntiva)՝ o (կամ), u',
      'Հակադրող (adversativa)՝ pero (բայց), sino',
      'Անփոփոխ է'
    ],
    exampleEs: 'Y',
    exampleAnalysisEs: 'Conjunción copulativa, invariable.',
    exampleArm: 'Եվ',
    exampleAnalysisArm: 'Համադասական շաղկապ, անփոփոխ խոսքի մաս։',
    tags: ['Շաղկապ', 'Անփոփոխ']
  },
  {
    id: 'interjeccion',
    nameEs: 'Interjección',
    nameArm: 'Ձայնարկություն',
    whatToAnalyzeEs: 'Interjección propia o impropia, invariable. Expresa emociones, exclamaciones o llamadas de atención.',
    whatToAnalyzeArm: 'Բուն կամ ածանցյալ ձայնարկություն, անփոփոխ։ Արտահայտում է հույզեր, զգացմունքներ կամ կոչ։',
    detailsEs: [
      'Propias: ¡ay!, ¡oh!, ¡eh!, ¡uf!',
      'Impropias (vienen de otras palabras): ¡cielos!, ¡ojo!, ¡bravo!',
      'Invariable'
    ],
    detailsArm: [
      'Բուն ձայնարկություններ՝ ¡ay!, ¡oh!, ¡uf!',
      'Ածանցյալ՝ ¡cielos!, ¡vaya!',
      'Անփոփոխ է'
    ],
    exampleEs: '¡Ay!',
    exampleAnalysisEs: 'Interjección propia, invariable.',
    exampleArm: 'Վա՜յ / Ա՜խ',
    exampleAnalysisArm: 'Բուն ձայնարկություն, անփոփոխ խոսքի մաս։',
    tags: ['Ձայնարկություն', 'Անփոփոխ']
  }
];

export const VERB_PERSONS_TABLE: VerbPersonRow[] = [
  {
    personaEs: '1.ª persona',
    personaArm: '1-ին դեմք (առաջին)',
    singularEs: 'yo',
    singularArm: 'ես',
    pluralEs: 'nosotros / nosotras',
    pluralArm: 'մենք'
  },
  {
    personaEs: '2.ª persona',
    personaArm: '2-րդ դեմք (երկրորդ)',
    singularEs: 'tú',
    singularArm: 'դու',
    pluralEs: 'vosotros / vosotras',
    pluralArm: 'դուք'
  },
  {
    personaEs: '3.ª persona',
    personaArm: '3-րդ դեմք (երրորդ)',
    singularEs: 'él / ella',
    singularArm: 'նա (ար․ / իգ․)',
    pluralEs: 'ellos / ellas',
    pluralArm: 'նրանք (ար․ / իգ․)'
  }
];

export const SAMPLE_ORACION: SentenceAnalysis = {
  id: 'oracion-ejemplo',
  sentenceEs: 'Mis dos hermanas pequeñas estudian mucho en la biblioteca.',
  sentenceArm: 'Իմ երկու փոքր քույրերը շատ են սովորում գրադարանում։',
  explanationArm: 'Այս նախադասության յուրաքանչյուր բառ ունի իր ձևաբանական հատկանիշները։ Սեղմիր ցանկացած բառի վրա՝ հայերեն թարգմանությունն ու վերլուծությունը բացելու համար։',
  words: [
    {
      word: 'Mis',
      translationArm: 'Իմ (հոգնակի)',
      analysisEs: 'Determinante posesivo, plural, poseedor de 1.ª persona singular.',
      analysisArm: 'Ստացական որոշիչ, հոգնակի, 1-ին դեմքի պատկանող (yo-ի համար)։',
      category: 'Determinante'
    },
    {
      word: 'Dos',
      translationArm: 'Երկու',
      analysisEs: 'Determinante numeral cardinal, invariable en género.',
      analysisArm: 'Քանակական թվական որոշիչ, սեռով անփոփոխ։',
      category: 'Determinante'
    },
    {
      word: 'Hermanas',
      translationArm: 'Քույրեր',
      analysisEs: 'Sustantivo común, concreto, individual, contable, femenino, plural.',
      analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, իգական սեռ, հոգնակի թիվ։',
      category: 'Sustantivo'
    },
    {
      word: 'Pequeñas',
      translationArm: 'Փոքր',
      analysisEs: 'Adjetivo calificativo, femenino, plural, grado positivo.',
      analysisArm: 'Որակական ածական, իգական սեռ, հոգնակի թիվ, դրական աստիճան։',
      category: 'Adjetivo'
    },
    {
      word: 'Estudian',
      translationArm: 'Սովորում են',
      analysisEs: 'Verbo estudiar, 1.ª conjugación, 3.ª persona plural, presente de indicativo.',
      analysisArm: 'Estudiar բայ, 1-ին խոնարհում (-ar), 3-րդ դեմք, հոգնակի թիվ, սահմանական եղանակ, ներկա ժամանակ։',
      category: 'Verbo'
    },
    {
      word: 'Mucho',
      translationArm: 'Շատ',
      analysisEs: 'Adverbio de cantidad, invariable.',
      analysisArm: 'Քանակի մակբայ, անփոփոխ։',
      category: 'Adverbio'
    },
    {
      word: 'En',
      translationArm: 'Մեջ',
      analysisEs: 'Preposición, invariable.',
      analysisArm: 'Նախդիր, անփոփոխ։',
      category: 'Preposición'
    },
    {
      word: 'La',
      translationArm: 'Այն (որոշյալ հոդ)',
      analysisEs: 'Artículo determinado, femenino, singular.',
      analysisArm: 'Որոշյալ հոդ, իգական սեռ, եզակի թիվ։',
      category: 'Artículo'
    },
    {
      word: 'Biblioteca',
      translationArm: 'Գրադարան',
      analysisEs: 'Sustantivo común, concreto, individual, contable, femenino, singular.',
      analysisArm: 'Հասարակ գոյական, կոնկրետ, անհատական, հաշվելի, իգական սեռ, եզակի թիվ։',
      category: 'Sustantivo'
    }
  ]
};

// Ejercicio 1: Sustantivos (1-10)
export const EXERCISE_SUSTANTIVOS = [
  { id: 1, word: 'Perros', translationArm: 'Շներ', analysisEs: 'Sustantivo común, concreto, individual, contable, masculino, plural.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, արական սեռ, հոգնակի թիվ։' },
  { id: 2, word: 'Madrid', translationArm: 'Մադրիդ', analysisEs: 'Sustantivo propio, singular.', analysisArm: 'Հատուկ գոյական (տեղանուն), եզակի թիվ։' },
  { id: 3, word: 'Alegría', translationArm: 'Ուրախություն', analysisEs: 'Sustantivo común, abstracto, incontable, femenino, singular.', analysisArm: 'Հասարակ, վերացական, անհաշվելի գոյական, իգական սեռ, եզակի թիվ։' },
  { id: 4, word: 'Mesas', translationArm: 'Սեղաններ', analysisEs: 'Sustantivo común, concreto, individual, contable, femenino, plural.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, իգական սեռ, հոգնակի թիվ։' },
  { id: 5, word: 'Agua', translationArm: 'Ջուր', analysisEs: 'Sustantivo común, concreto, incontable, femenino (lleva el artículo «el» en singular por eufonía: el agua), singular.', analysisArm: 'Հասարակ, կոնկրետ, անհաշվելի գոյական, իգական սեռ (եզակիում առոգանության համար ստանում է «el» հոդը՝ el agua), եզակի թիվ։' },
  { id: 6, word: 'Ejército', translationArm: 'Բանակ', analysisEs: 'Sustantivo común, concreto, colectivo, contable, masculino, singular.', analysisArm: 'Հասարակ, կոնկրետ, հավաքական, հաշվելի գոյական, արական սեռ, եզակի թիվ։' },
  { id: 7, word: 'Profesora', translationArm: 'Ուսուցչուհի', analysisEs: 'Sustantivo común, concreto, individual, contable, femenino, singular.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, իգական սեռ, եզակի թիվ։' },
  { id: 8, word: 'Libros', translationArm: 'Գրքեր', analysisEs: 'Sustantivo común, concreto, individual, contable, masculino, plural.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, արական սեռ, հոգնակի թիվ։' },
  { id: 9, word: 'Amistad', translationArm: 'Ընկերություն', analysisEs: 'Sustantivo común, abstracto, incontable, femenino, singular.', analysisArm: 'Հասարակ, վերացական, անհաշվելի գոյական, իգական սեռ, եզակի թիվ։' },
  { id: 10, word: 'Rebaño', translationArm: 'Հոտ / Հոտ (ոչխարների)', analysisEs: 'Sustantivo común, concreto, colectivo, contable, masculino, singular.', analysisArm: 'Հասարակ, կոնկրետ, հավաքական, հաշվելի գոյական, արական սեռ, եզակի թիվ։' }
];

// Ejercicio 2: Verbos (11-20)
export const EXERCISE_VERBOS = [
  { id: 11, sentenceEs: 'Yo estudio español.', targetWord: 'estudio', translationArm: 'Ես ուսանում եմ իսպաներեն։', analysisEs: 'Verbo estudiar, 1.ª conjugación (-ar), 1.ª persona singular, presente de indicativo.', analysisArm: 'Estudiar բայ, 1-ին խոնարհում (-ar), 1-ին դեմք, եզակի թիվ, սահմանական եղանակ, ներկա ժամանակ։' },
  { id: 12, sentenceEs: 'Ellos jugaron ayer.', targetWord: 'jugaron', translationArm: 'Նրանք երեկ խաղացին։', analysisEs: 'Verbo jugar, 1.ª conjugación (-ar), 3.ª persona plural, pretérito indefinido (perfecto simple) de indicativo.', analysisArm: 'Jugar բայ, 1-ին խոնարհում (-ar), 3-րդ դեմք, հոգնակի թիվ, անցյալ կատարյալ ժամանակ (pretérito indefinido), սահմանական եղանակ։' },
  { id: 13, sentenceEs: 'Nosotros comeremos mañana.', targetWord: 'comeremos', translationArm: 'Մենք վաղը կճաշենք։', analysisEs: 'Verbo comer, 2.ª conjugación (-er), 1.ª persona plural, futuro simple de indicativo.', analysisArm: 'Comer բայ, 2-րդ խոնարհում (-er), 1-ին դեմք, հոգնակի թիվ, պարզ ապառնի ժամանակ (futuro simple), սահմանական եղանակ։' },
  { id: 14, sentenceEs: 'Tú escribías una carta.', targetWord: 'escribías', translationArm: 'Դու նամակ էիր գրում։', analysisEs: 'Verbo escribir, 3.ª conjugación (-ir), 2.ª persona singular, pretérito imperfecto de indicativo.', analysisArm: 'Escribir բայ, 3-րդ խոնարհում (-ir), 2-րդ դեմք, եզակի թիվ, անցյալ անկատար ժամանակ (pretérito imperfecto), սահմանական եղանակ։' },
  { id: 15, sentenceEs: 'Ella ha terminado sus deberes.', targetWord: 'ha terminado', translationArm: 'Նա ավարտել է իր տնայինները։', analysisEs: 'Verbo terminar, 1.ª conjugación (-ar), 3.ª persona singular, pretérito perfecto compuesto de indicativo.', analysisArm: 'Terminar բայ, 1-ին խոնարհում (-ar), 3-րդ դեմք, եզակի թիվ, բաղադրյալ անցյալ կատարյալ (pretérito perfecto compuesto), սահմանական եղանակ։' },
  { id: 16, sentenceEs: 'Vosotros vivís en Madrid.', targetWord: 'vivís', translationArm: 'Դուք ապրում եք Մադրիդում։', analysisEs: 'Verbo vivir, 3.ª conjugación (-ir), 2.ª persona plural, presente de indicativo.', analysisArm: 'Vivir բայ, 3-րդ խոնարհում (-ir), 2-րդ դեմք, հոգնակի թիվ, սահմանական եղանակ, ներկա ժամանակ։' },
  { id: 17, sentenceEs: 'Yo cantaría contigo.', targetWord: 'cantaría', translationArm: 'Ես քեզ հետ կերգեի։', analysisEs: 'Verbo cantar, 1.ª conjugación (-ar), 1.ª persona singular, condicional simple de indicativo.', analysisArm: 'Cantar բայ, 1-ին խոնարհում (-ar), 1-ին դեմք, եզակի թիվ, պարզ պայմանական եղանակ (condicional simple)։' },
  { id: 18, sentenceEs: 'Ellas habían salido.', targetWord: 'habían salido', translationArm: 'Նրանք դուրս էին եկել։', analysisEs: 'Verbo salir, 3.ª conjugación (-ir), 3.ª persona plural, pretérito pluscuamperfecto de indicativo.', analysisArm: 'Salir բայ, 3-րդ խոնարհում (-ir), 3-րդ դեմք, հոգնակի թիվ, վաղակատար անցյալ (pretérito pluscuamperfecto), սահմանական եղանակ։' },
  { id: 19, sentenceEs: 'Nosotros aprendimos mucho.', targetWord: 'aprendimos', translationArm: 'Մենք շատ բան սովորեցինք։', analysisEs: 'Verbo aprender, 2.ª conjugación (-er), 1.ª persona plural, pretérito indefinido de indicativo.', analysisArm: 'Aprender բայ, 2-րդ խոնարհում (-er), 1-ին դեմք, հոգնակի թիվ, անցյալ կատարյալ (pretérito indefinido), սահմանական եղանակ։' },
  { id: 20, sentenceEs: 'Ojalá tú apruebes el examen.', targetWord: 'apruebes', translationArm: 'Երանի դու հանձնես քննությունը։', analysisEs: 'Verbo aprobar, 1.ª conjugación (-ar), 2.ª persona singular, presente de subjuntivo.', analysisArm: 'Aprobar բայ, 1-ին խոնարհում (-ar), 2-րդ դեմք, եզակի թիվ, ըղձական եղանակի ներկա ժամանակ (presente de subjuntivo)։' }
];

// Ejercicio 3: Determinante, pronombre o artículo (21-30)
export const EXERCISE_DETERMINANTES = [
  { id: 21, sentenceEs: 'Mi hermano juega al fútbol.', word: 'Mi', translationArm: 'Իմ եղբայրը ֆուտբոլ է խաղում։', analysisEs: 'Determinante posesivo, masculino/femenino (forma apocopada de 1.ª persona singular), singular.', analysisArm: 'Ստացական որոշիչ (determinante posesivo), եզակի թիվ։ Գտնվում է գոյականից առաջ։' },
  { id: 22, sentenceEs: 'Ella estudia mucho.', word: 'Ella', translationArm: 'Նա շատ է սովորում։', analysisEs: 'Pronombre personal, 3.ª persona, femenino, singular.', analysisArm: 'Անձնական դերանուն (pronombre personal), 3-րդ դեմք, իգական սեռ, եզակի թիվ։ Փոխարինում է գոյականին։' },
  { id: 23, sentenceEs: 'Aquellas chicas cantan.', word: 'Aquellas', translationArm: 'Այն աղջիկները երգում են։', analysisEs: 'Determinante demostrativo (indica lejanía), femenino, plural.', analysisArm: 'Ցուցական որոշիչ (determinante demostrativo), իգական սեռ, հոգնակի թիվ։' },
  { id: 24, sentenceEs: 'Los niños están contentos.', word: 'Los', translationArm: 'Տղաները գոհ են։', analysisEs: 'Artículo determinado, masculino, plural.', analysisArm: 'Որոշյալ հոդ (artículo determinado), արական սեռ, հոգնակի թիվ։' },
  { id: 25, sentenceEs: 'Tres alumnos han llegado.', word: 'Tres', translationArm: 'Երեք աշակերտ ժամանել են։', analysisEs: 'Determinante numeral cardinal, invariable en género, plural.', analysisArm: 'Քանակական թվական որոշիչ (determinante numeral cardinal), հոգնակի։' },
  { id: 26, sentenceEs: 'Algunos estudiantes faltan.', word: 'Algunos', translationArm: 'Որոշ ուսանողներ բացակայում են։', analysisEs: 'Determinante indefinido, masculino, plural.', analysisArm: 'Անորոշ որոշիչ (determinante indefinido), արական սեռ, հոգնակի թիվ։' },
  { id: 27, sentenceEs: 'Nosotros vivimos aquí.', word: 'Nosotros', translationArm: 'Մենք ապրում ենք այստեղ։', analysisEs: 'Pronombre personal, 1.ª persona plural, masculino.', analysisArm: 'Անձնական դերանուն (pronombre personal), 1-ին դեմք, արական սեռ, հոգնակի թիվ։' },
  { id: 28, sentenceEs: 'Esta mochila es nueva.', word: 'Esta', translationArm: 'Այս պայուսակը նոր է։', analysisEs: 'Determinante demostrativo (cercanía), femenino, singular.', analysisArm: 'Ցուցական որոշիչ (determinante demostrativo), իգական սեռ, եզակի թիվ։' },
  { id: 29, sentenceEs: '¿Qué libro prefieres?', word: 'Qué', translationArm: 'Ո՞ր գիրքն ես նախընտրում։', analysisEs: 'Determinante interrogativo, invariable.', analysisArm: 'Հարցական որոշիչ (determinante interrogativo), անփոփոխ։' },
  { id: 30, sentenceEs: 'Un perro corre por el jardín.', word: 'Un', translationArm: 'Մի շուն վազում է պարտեզով։', analysisEs: 'Artículo indeterminado, masculino, singular.', analysisArm: 'Անորոշ հոդ (artículo indeterminado), արական սեռ, եզակի թիվ։' }
];

// Ejercicio 4: Análisis completo con respuestas (31-35)
export const EXERCISE_ORACIONES_COMPLETAS: SentenceAnalysis[] = [
  {
    id: 'oracion-31',
    sentenceEs: 'La niña inteligente lee un libro interesante.',
    sentenceArm: 'Խելացի աղջիկը հետաքրքիր գիրք է կարդում։',
    explanationArm: 'Քննության տիպիկ ամբողջական վերլուծություն։ Սեղմիր յուրաքանչյուր բառի վրա՝ նրա քերականական վերլուծությունն ու հայերեն թարգմանությունը տեսնելու համար։',
    words: [
      { word: 'La', translationArm: 'Այն (որոշյալ հոդ)', analysisEs: 'Artículo determinado, femenino, singular.', analysisArm: 'Որոշյալ հոդ, իգական սեռ, եզակի թիվ։', category: 'Artículo' },
      { word: 'Niña', translationArm: 'Աղջիկ', analysisEs: 'Sustantivo común, concreto, individual, contable, femenino, singular.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, իգական սեռ, եզակի թիվ։', category: 'Sustantivo' },
      { word: 'Inteligente', translationArm: 'Խելացի', analysisEs: 'Adjetivo calificativo, singular, género común (concuerda aquí con un nombre femenino), grado positivo.', analysisArm: 'Որակական ածական, եզակի թիվ, ընդհանուր սեռ (համաձայնեցված է իգական գոյականի հետ), դրական աստիճան։', category: 'Adjetivo' },
      { word: 'Lee', translationArm: 'Կարդում է', analysisEs: 'Verbo leer, 2.ª conjugación (-er), 3.ª persona singular, presente de indicativo.', analysisArm: 'Leer բայ, 2-րդ խոնարհում (-er), 3-րդ դեմք, եզակի թիվ, սահմանական եղանակ, ներկա ժամանակ։', category: 'Verbo' },
      { word: 'Un', translationArm: 'Մի (անորոշ հոդ)', analysisEs: 'Artículo indeterminado, masculino, singular.', analysisArm: 'Անորոշ հոդ, արական սեռ, եզակի թիվ։', category: 'Artículo' },
      { word: 'Libro', translationArm: 'Գիրք', analysisEs: 'Sustantivo común, concreto, individual, contable, masculino, singular.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, արական սեռ, եզակի թիվ։', category: 'Sustantivo' },
      { word: 'Interesante', translationArm: 'Հետաքրքիր', analysisEs: 'Adjetivo calificativo, singular, género común (aquí masculino), grado positivo.', analysisArm: 'Որակական ածական, եզակի թիվ, ընդհանուր սեռ (այստեղ՝ արական), դրական աստիճան։', category: 'Adjetivo' }
    ]
  },
  {
    id: 'oracion-32',
    sentenceEs: 'Nosotros jugamos ayer en el parque.',
    sentenceArm: 'Մենք երեկ խաղացինք այգում։',
    explanationArm: 'Ուշադրություն. «Jugamos» բայն ունի նույն ձևը ներկա և pretérito indefinido ժամանակներում։ Այստեղ «ayer» բառի շնորհիվ հասկանում ենք, որ խոսքը անցյալի մասին է։',
    words: [
      { word: 'Nosotros', translationArm: 'Մենք', analysisEs: 'Pronombre personal, 1.ª persona plural, masculino.', analysisArm: 'Անձնական դերանուն, 1-ին դեմք, հոգնակի թիվ, արական սեռ։', category: 'Pronombre' },
      { word: 'Jugamos', translationArm: 'Խաղացինք', analysisEs: 'Verbo jugar, 1.ª conjugación, 1.ª persona plural, pretérito indefinido de indicativo (por contexto de ayer).', analysisArm: 'Jugar բայ, 1-ին խոնարհում, 1-ին դեմք, հոգնակի թիվ, անցյալ կատարյալ ժամանակ (pretérito indefinido), սահմանական եղանակ (հաստատված է ayer բառով)։', category: 'Verbo' },
      { word: 'Ayer', translationArm: 'Երեկ', analysisEs: 'Adverbio de tiempo, invariable.', analysisArm: 'Ժամանակի մակբայ, անփոփոխ։', category: 'Adverbio' },
      { word: 'En', translationArm: 'Մեջ', analysisEs: 'Preposición, invariable.', analysisArm: 'Նախդիր, անփոփոխ։', category: 'Preposición' },
      { word: 'El', translationArm: 'Այն (որոշյալ հոդ)', analysisEs: 'Artículo determinado, masculino, singular.', analysisArm: 'Որոշյալ հոդ, արական սեռ, եզակի թիվ։', category: 'Artículo' },
      { word: 'Parque', translationArm: 'Այգի / Պուրակ', analysisEs: 'Sustantivo común, concreto, individual, contable, masculino, singular.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, արական սեռ, եզակի թիվ։', category: 'Sustantivo' }
    ]
  },
  {
    id: 'oracion-33',
    sentenceEs: 'Aquellos tres chicos llegaron muy tarde.',
    sentenceArm: 'Այն երեք տղաները շատ ուշ ժամանեցին։',
    explanationArm: 'Ցուցական որոշիչի, քանակական թվականի, մակբայների և բայի ամբողջական վերլուծություն։',
    words: [
      { word: 'Aquellos', translationArm: 'Այն (հեռու)', analysisEs: 'Determinante demostrativo (lejanía), masculino, plural.', analysisArm: 'Ցուցական որոշիչ (հեռավորություն ցույց տվող), արական սեռ, հոգնակի թիվ։', category: 'Determinante' },
      { word: 'Tres', translationArm: 'Երեք', analysisEs: 'Determinante numeral cardinal.', analysisArm: 'Քանակական թվական որոշիչ, անփոփոխ սեռով։', category: 'Determinante' },
      { word: 'Chicos', translationArm: 'Տղաներ / Տղաներ', analysisEs: 'Sustantivo común, concreto, individual, contable, masculino, plural.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, արական սեռ, հոգնակի թիվ։', category: 'Sustantivo' },
      { word: 'Llegaron', translationArm: 'Ժամանեցին', analysisEs: 'Verbo llegar, 1.ª conjugación, 3.ª persona plural, pretérito indefinido de indicativo.', analysisArm: 'Llegar բայ, 1-ին խոնարհում, 3-րդ դեմք, հոգնակի թիվ, անցյալ կատարյալ ժամանակ, սահմանական եղանակ։', category: 'Verbo' },
      { word: 'Muy', translationArm: 'Շատ / Խիստ', analysisEs: 'Adverbio de cantidad o grado, invariable.', analysisArm: 'Քանակի կամ աստիճանի մակբայ, անփոփոխ։', category: 'Adverbio' },
      { word: 'Tarde', translationArm: 'Ուշ', analysisEs: 'Adverbio de tiempo, invariable.', analysisArm: 'Ժամանակի մակբայ, անփոփոխ։', category: 'Adverbio' }
    ]
  },
  {
    id: 'oracion-34',
    sentenceEs: 'Mi hermana y yo estudiaremos mañana.',
    sentenceArm: 'Իմ քույրը և ես վաղը կսովորենք։',
    explanationArm: 'Տարբերակեք mi (ստացական որոշիչ) և yo (անձնական դերանուն) բառերը։',
    words: [
      { word: 'Mi', translationArm: 'Իմ', analysisEs: 'Determinante posesivo, singular.', analysisArm: 'Ստացական որոշիչ, եզակի թիվ։ Գտնվում է hermana գոյականից առաջ։', category: 'Determinante' },
      { word: 'Hermana', translationArm: 'Քույր', analysisEs: 'Sustantivo común, concreto, individual, contable, femenino, singular.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, իգական սեռ, եզակի թիվ։', category: 'Sustantivo' },
      { word: 'Y', translationArm: 'Եվ', analysisEs: 'Conjunción copulativa, invariable.', analysisArm: 'Համադասական շաղկապ, անփոփոխ։', category: 'Conjunción' },
      { word: 'Yo', translationArm: 'Ես', analysisEs: 'Pronombre personal, 1.ª persona singular.', analysisArm: 'Անձնական դերանուն, 1-ին դեմք, եզակի թիվ։', category: 'Pronombre' },
      { word: 'Estudiaremos', translationArm: 'Կսովորենք', analysisEs: 'Verbo estudiar, 1.ª conjugación, 1.ª persona plural, futuro simple de indicativo.', analysisArm: 'Estudiar բայ, 1-ին խոնարհում, 1-ին դեմք, հոգնակի թիվ, պարզ ապառնի ժամանակ, սահմանական եղանակ։', category: 'Verbo' },
      { word: 'Mañana', translationArm: 'Վաղը', analysisEs: 'Adverbio de tiempo, invariable.', analysisArm: 'Ժամանակի մակբայ, անփոփոխ։', category: 'Adverbio' }
    ]
  },
  {
    id: 'oracion-35',
    sentenceEs: '¡Ay! Ella no encuentra sus dos cuadernos.',
    sentenceArm: 'Վա՜յ, նա չի գտնում իր երկու տետրերը։',
    explanationArm: 'Ձայնարկության, ժխտական մակբայի, ստացական որոշիչի և թվականի ամբողջական վերլուծություն։',
    words: [
      { word: '¡Ay!', translationArm: 'Վա՜յ', analysisEs: 'Interjección propia, invariable.', analysisArm: 'Բուն ձայնարկություն, անփոփոխ։', category: 'Interjección' },
      { word: 'Ella', translationArm: 'Նա (իգական)', analysisEs: 'Pronombre personal, 3.ª persona, femenino, singular.', analysisArm: 'Անձնական դերանուն, 3-րդ դեմք, իգական սեռ, եզակի թիվ։', category: 'Pronombre' },
      { word: 'No', translationArm: 'Չ / Ոչ', analysisEs: 'Adverbio de negación, invariable.', analysisArm: 'Ժխտման մակբայ, անփոփոխ։', category: 'Adverbio' },
      { word: 'Encuentra', translationArm: 'Գտնում է', analysisEs: 'Verbo encontrar, 1.ª conjugación, 3.ª persona singular, presente de indicativo.', analysisArm: 'Encontrar բայ, 1-ին խոնարհում, 3-րդ դեմք, եզակի թիվ, սահմանական եղանակ, ներկա ժամանակ։', category: 'Verbo' },
      { word: 'Sus', translationArm: 'Իր / Նրա (հոգնակի)', analysisEs: 'Determinante posesivo, plural.', analysisArm: 'Ստացական որոշիչ, հոգնակի թիվ։', category: 'Determinante' },
      { word: 'Dos', translationArm: 'Երկու', analysisEs: 'Determinante numeral cardinal.', analysisArm: 'Քանակական թվական որոշիչ։', category: 'Determinante' },
      { word: 'Cuadernos', translationArm: 'Տետրեր', analysisEs: 'Sustantivo común, concreto, individual, contable, masculino, plural.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, արական սեռ, հոգնակի թիվ։', category: 'Sustantivo' }
    ]
  }
];

// Examen Final (18 preguntas) sobre el texto:
// «Ayer, mis dos amigos españoles visitaron un museo muy famoso. Ellos observaron varios cuadros antiguos y después compraron tres libros interesantes. ¡Qué día tan maravilloso!»
export const FINAL_EXAM_MORPHOLOGY = {
  textEs: 'Ayer, mis dos amigos españoles visitaron un museo muy famoso. Ellos observaron varios cuadros antiguos y después compraron tres libros interesantes. ¡Qué día tan maravilloso!',
  textArm: 'Երեկ իմ երկու իսպանացի ընկերներն այցելեցին մի շատ հայտնի թանգարան։ Նրանք դիտեցին մի քանի հին կտավներ և հետո գնեցին երեք հետաքրքիր գրքեր։ Ի՜նչ հրաշալի օր։',
  questions: [
    { id: 1, word: 'amigos', questionArm: 'Վերլուծիր amigos բառը', analysisEs: 'Sustantivo común, concreto, individual, contable, masculino, plural.', analysisArm: 'Հասարակ, կոնկրետ, անհատական, հաշվելի գոյական, արական սեռ, հոգնակի թիվ։' },
    { id: 2, word: 'españoles', questionArm: 'Վերլուծիր españoles բառը', analysisEs: 'Adjetivo calificativo (gentilicio), masculino, plural, grado positivo.', analysisArm: 'Որակական ածական (ծագման ածական / gentilicio), արական սեռ, հոգնակի թիվ, դրական աստիճան։' },
    { id: 3, word: 'visitaron', questionArm: 'Վերլուծիր visitaron բառը', analysisEs: 'Verbo visitar, 1.ª conjugación (-ar), 3.ª persona plural, pretérito indefinido (perfecto simple) de indicativo.', analysisArm: 'Visitar բայ, 1-ին խոնարհում, 3-րդ դեմք, հոգնակի թիվ, անցյալ կատարյալ ժամանակ, սահմանական եղանակ։' },
    { id: 4, word: 'mis', questionArm: 'Վերլուծիր mis բառը', analysisEs: 'Determinante posesivo, plural (poseedor de 1.ª persona singular).', analysisArm: 'Ստացական որոշիչ, հոգնակի թիվ, 1-ին դեմքի պատկանող (yo-ի)։' },
    { id: 5, word: 'dos', questionArm: 'Վերլուծիր dos բառը', analysisEs: 'Determinante numeral cardinal, invariable en género.', analysisArm: 'Քանակական թվական որոշիչ, սեռով անփոփոխ։' },
    { id: 6, word: 'un', questionArm: 'Վերլուծիր un բառը', analysisEs: 'Artículo indeterminado, masculino, singular.', analysisArm: 'Անորոշ հոդ, արական սեռ, եզակի թիվ։' },
    { id: 7, word: 'muy', questionArm: 'Վերլուծիր muy բառը', analysisEs: 'Adverbio de cantidad o grado, invariable.', analysisArm: 'Քանակի կամ աստիճանի մակբայ, անփոփոխ։' },
    { id: 8, word: 'famoso', questionArm: 'Վերլուծիր famoso բառը', analysisEs: 'Adjetivo calificativo, masculino, singular, grado positivo.', analysisArm: 'Որակական ածական, արական սեռ, եզակի թիվ, դրական աստիճան։' },
    { id: 9, word: 'ellos', questionArm: 'Վերլուծիր ellos բառը', analysisEs: 'Pronombre personal tónico, 3.ª persona plural, masculino.', analysisArm: 'Անձնական շեշտված դերանուն, 3-րդ դեմք, հոգնակի թիվ, արական սեռ։' },
    { id: 10, word: 'observaron', questionArm: 'Վերլուծիր observaron բառը', analysisEs: 'Verbo observar, 1.ª conjugación, 3.ª persona plural, pretérito indefinido de indicativo.', analysisArm: 'Observar բայ, 1-ին խոնարհում, 3-րդ դեմք, հոգնակի թիվ, անցյալ կատարյալ ժամանակ, սահմանական եղանակ։' },
    { id: 11, word: 'varios', questionArm: 'Վերլուծիր varios բառը', analysisEs: 'Determinante indefinido, masculino, plural.', analysisArm: 'Անորոշ որոշիչ, արական սեռ, հոգնակի թիվ։' },
    { id: 12, word: 'antiguos', questionArm: 'Վերլուծիր antiguos բառը', analysisEs: 'Adjetivo calificativo, masculino, plural, grado positivo.', analysisArm: 'Որակական ածական, արական սեռ, հոգնակի թիվ, դրական աստիճան։' },
    { id: 13, word: 'después', questionArm: 'Վերլուծիր después բառը', analysisEs: 'Adverbio de tiempo, invariable.', analysisArm: 'Ժամանակի մակբայ, անփոփոխ։' },
    { id: 14, word: 'y', questionArm: 'Վերլուծիր y բառը', analysisEs: 'Conjunción copulativa, invariable.', analysisArm: 'Համադասական շաղկապ, անփոփոխ։' },
    { id: 15, word: 'interesantes', questionArm: 'Վերլուծիր interesantes բառը', analysisEs: 'Adjetivo calificativo, género común, plural, grado positivo.', analysisArm: 'Որակական ածական, ընդհանուր սեռ, հոգնակի թիվ, դրական աստիճան։' },
    { id: 16, word: 'qué', questionArm: 'Վերլուծիր qué բառը («¡Qué día!»)', analysisEs: 'Determinante exclamativo, invariable.', analysisArm: 'Բացականչական որոշիչ (determinante exclamativo), անփոփոխ։' },
    { id: 17, word: 'tan', questionArm: 'Վերլուծիր tan բառը', analysisEs: 'Adverbio de cantidad o grado (apócope de tanto), invariable.', analysisArm: 'Քանակի կամ աստիճանի մակբայ (tanto-ի կրճատ ձև), անփոփոխ։' },
    { id: 18, word: 'maravilloso', questionArm: 'Վերլուծիր maravilloso բառը', analysisEs: 'Adjetivo calificativo, masculino, singular, grado positivo.', analysisArm: 'Որակական ածական, արական սեռ, եզակի թիվ, դրական աստիճան։' }
  ],
  tipsArm: 'Շատ կարևոր է քննության համար կարողանալ տարբերել «mi» և «yo» (որոշիչ և դերանուն), «mucho» որպես մակբայ կամ որոշիչ, ինչպես նաև բայի persona, número, tiempo y modo։ Սրանք այն կետերն են, որոնցում բառի միայն անվանումը գրելը բավարար չէ։'
};
