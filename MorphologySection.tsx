/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  GRAMMAR_CATEGORIES,
  VERB_PERSONS_TABLE,
  SAMPLE_ORACION,
  EXERCISE_SUSTANTIVOS,
  EXERCISE_VERBOS,
  EXERCISE_DETERMINANTES,
  EXERCISE_ORACIONES_COMPLETAS,
  FINAL_EXAM_MORPHOLOGY
} from './dataMorphology';
import { InteractiveWord, SentenceAnalyzerCard } from './InteractiveWord';
import { Volume2, BookOpen, CheckCircle, ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';
import { speakSpanish } from './speechUtil';

interface MorphologySectionProps {
  alwaysShowTranslation: boolean;
}

export const MorphologySection: React.FC<MorphologySectionProps> = ({ alwaysShowTranslation }) => {
  const [activeTab, setActiveTab] = useState<'teoria' | 'oracion_ejemplo' | 'ejercicios_1_3' | 'oraciones_31_35' | 'examen_final'>('teoria');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('sustantivo');

  // Exercise toggle states
  const [revealedSustantivos, setRevealedSustantivos] = useState<Record<number, boolean>>({});
  const [revealedVerbos, setRevealedVerbos] = useState<Record<number, boolean>>({});
  const [revealedDeterminantes, setRevealedDeterminantes] = useState<Record<number, boolean>>({});
  const [revealedFinalQuestions, setRevealedFinalQuestions] = useState<Record<number, boolean>>({});

  const toggleAllSustantivos = (show: boolean) => {
    const next: Record<number, boolean> = {};
    EXERCISE_SUSTANTIVOS.forEach(s => { next[s.id] = show; });
    setRevealedSustantivos(next);
  };

  const toggleAllVerbos = (show: boolean) => {
    const next: Record<number, boolean> = {};
    EXERCISE_VERBOS.forEach(v => { next[v.id] = show; });
    setRevealedVerbos(next);
  };

  const toggleAllDeterminantes = (show: boolean) => {
    const next: Record<number, boolean> = {};
    EXERCISE_DETERMINANTES.forEach(d => { next[d.id] = show; });
    setRevealedDeterminantes(next);
  };

  const toggleAllFinal = (show: boolean) => {
    const next: Record<number, boolean> = {};
    FINAL_EXAM_MORPHOLOGY.questions.forEach(q => { next[q.id] = show; });
    setRevealedFinalQuestions(next);
  };

  const selectedCategory = GRAMMAR_CATEGORIES.find(c => c.id === selectedCategoryId) || GRAMMAR_CATEGORIES[0];

  return (
    <div className="space-y-8">
      {/* Navigation tabs inside morphology */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl border border-slate-200">
        <button
          type="button"
          onClick={() => setActiveTab('teoria')}
          className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
            activeTab === 'teoria'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          1. Տեսություն & Խոսքի մասեր
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('oracion_ejemplo')}
          className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
            activeTab === 'oracion_ejemplo'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          2. Ամբողջական օրինակ
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('ejercicios_1_3')}
          className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
            activeTab === 'ejercicios_1_3'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          3. Վարժություններ 1–3 (Բառերի վերլուծություն)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('oraciones_31_35')}
          className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
            activeTab === 'oraciones_31_35'
              ? 'bg-white text-slate-900 shadow-sm font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          4. Նախադասություններ 31–35
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('examen_final')}
          className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
            activeTab === 'examen_final'
              ? 'bg-amber-600 text-white shadow-sm font-semibold'
              : 'text-amber-800 hover:text-amber-950 hover:bg-amber-50'
          }`}
        >
          5. Examen Final (18 հարց)
        </button>
      </div>

      {/* TAB 1: TEORÍA */}
      {activeTab === 'teoria' && (
        <div className="space-y-6">
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5">
            <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-700" />
              1. ¿Cómo analizar cada categoría? — Ինչպե՞ս վերլուծել խոսքի մասերը
            </h3>
            <p className="text-sm text-slate-700 mt-2 leading-relaxed">
              Այս թեմայում պետք է ոչ միայն ասել՝ բառը sustantivo, verbo, adjetivo է, այլ նաև կատարել <strong className="text-slate-900">análisis morfológico completo</strong>՝ նշել սեռը, թիվը, դեմքը, ժամանակը և տեսակը։ Սեղմիր ցանկացած իսպաներեն բառի վրա՝ նրա հայերեն թարգմանությունն ու բացատրությունը բացելու համար։
            </p>
          </div>

          {/* Category Selector Chips */}
          <div className="flex flex-wrap gap-2">
            {GRAMMAR_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCategoryId === cat.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span>{cat.nameEs}</span>
                <span className="opacity-70 text-[11px]">({cat.nameArm})</span>
              </button>
            ))}
          </div>

          {/* Active Category Detail Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                  Խոսքի մասի վերլուծության ուղեցույց
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    {selectedCategory.nameEs} — {selectedCategory.nameArm}
                  </h3>
                  <button
                    type="button"
                    onClick={() => speakSpanish(selectedCategory.nameEs)}
                    className="text-slate-400 hover:text-amber-600 p-1 rounded hover:bg-slate-50 cursor-pointer"
                    title="Լսել արտասանությունը"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide block mb-1">
                  Qué analizar (Իսպաներենով)
                </span>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {selectedCategory.whatToAnalyzeEs}
                </p>
              </div>
              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/70">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wide block mb-1">
                  Ի՞նչ նշել քննությանը (Հայերենով)
                </span>
                <p className="text-sm text-amber-950 leading-relaxed font-medium">
                  {selectedCategory.whatToAnalyzeArm}
                </p>
              </div>
            </div>

            {/* Checklist of subcategories */}
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                Տեսակներ և քերականական հատկանիշներ
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCategory.detailsEs.map((d, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg border border-slate-200/60 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Example */}
            <div className="bg-slate-900 text-white p-5 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Օրինակ և վերլուծություն (Ejemplo y análisis)
                </span>
                <button
                  type="button"
                  onClick={() => speakSpanish(selectedCategory.exampleEs)}
                  className="text-amber-200 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Լսել օրինակը"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold font-display text-white">
                  «{selectedCategory.exampleEs}»
                </span>
                <span className="text-sm text-slate-300">
                  — {selectedCategory.exampleArm}
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm pt-2 border-t border-slate-800">
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wide">Análisis morfológico:</span>
                  <p className="text-amber-200 font-mono mt-0.5">{selectedCategory.exampleAnalysisEs}</p>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] uppercase tracking-wide">Հայերեն վերլուծություն՝</span>
                  <p className="text-slate-100 mt-0.5">{selectedCategory.exampleAnalysisArm}</p>
                </div>
              </div>
            </div>

            {/* Verb Persons Table if Verbo is selected */}
            {selectedCategory.id === 'verbo' && (
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-base font-display">
                  Personas gramaticales — Քերականական դեմքեր
                </h4>
                <div className="overflow-x-auto border border-slate-200 rounded-xl">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                      <tr>
                        <th className="p-3">Persona (Դեմք)</th>
                        <th className="p-3">Singular (Եզակի)</th>
                        <th className="p-3">Plural (Հոգնակի)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {VERB_PERSONS_TABLE.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-medium">
                            <span className="block text-slate-900 font-semibold">{row.personaEs}</span>
                            <span className="text-xs text-slate-500">{row.personaArm}</span>
                          </td>
                          <td className="p-3">
                            <InteractiveWord
                              spanish={row.singularEs}
                              armenian={row.singularArm}
                              category="Pronombre personal"
                              alwaysShow={alwaysShowTranslation}
                            />
                          </td>
                          <td className="p-3">
                            <InteractiveWord
                              spanish={row.pluralEs}
                              armenian={row.pluralArm}
                              category="Pronombre personal"
                              alwaysShow={alwaysShowTranslation}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/70 text-xs text-amber-950">
                  <strong>Ուշադրություն.</strong> «Usted» և «ustedes» դիմելաձևերը (Դուք) գործածվում են <strong>երրորդ դեմքի</strong> բայական ձևերով (3.ª persona)։
                </div>
              </div>
            )}

            {/* Note on Sustantivo / Persona */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
              <strong className="text-slate-900 block mb-1">Importante — Կարևոր է քննության համար.</strong>
              Los sustantivos no tienen persona gramatical. La primera, segunda y tercera persona se analizan en los verbos y pronombres personales.
              <span className="block mt-1 text-slate-600 font-medium">
                Գոյականը դեմք չունի․ դեմք որոշում ենք միայն բայի և անձնական դերանվան համար։
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ORACIÓN EJEMPLO */}
      {activeTab === 'oracion_ejemplo' && (
        <div className="space-y-6">
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5">
            <h3 className="text-lg font-bold text-slate-900 font-display">
              2. ANÁLISIS COMPLETO — ԱՄԲՈՂՋԱԿԱՆ ՎԵՐԼՈՒԾՈՒԹՅՈՒՆ
            </h3>
            <p className="text-sm text-slate-700 mt-1">
              Քննության ժամանակ ամբողջական նախադասության վերլուծության դասական օրինակ։ Սեղմիր ցանկացած բառի վրա կամ դիտիր աղյուսակը։
            </p>
          </div>

          <SentenceAnalyzerCard
            title="Modelo de examen"
            sentenceEs={SAMPLE_ORACION.sentenceEs}
            sentenceArm={SAMPLE_ORACION.sentenceArm}
            explanationArm={SAMPLE_ORACION.explanationArm}
            words={SAMPLE_ORACION.words}
            alwaysShowTranslation={alwaysShowTranslation}
          />

          {/* Full Table Breakdown */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base font-display">
                Ամբողջական վերլուծության աղյուսակ (Tabla de análisis morfológico)
              </h4>
              <span className="text-xs text-slate-500">9 բառ</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3 w-32">Palabra (Բառ)</th>
                    <th className="p-3">Análisis morfológico (Español)</th>
                    <th className="p-3">Քերականական վերլուծություն (Հայերեն)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {SAMPLE_ORACION.words.map((w, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3 font-semibold text-slate-900">
                        <div className="flex items-center gap-1.5">
                          <span>{w.word}</span>
                          <button
                            type="button"
                            onClick={() => speakSpanish(w.word)}
                            className="text-slate-400 hover:text-amber-600 p-0.5 rounded cursor-pointer"
                            title="Լսել"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-amber-800 font-normal block mt-0.5">
                          {w.translationArm}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-xs text-slate-700 leading-relaxed">
                        {w.analysisEs}
                      </td>
                      <td className="p-3 text-slate-800 leading-relaxed">
                        {w.analysisArm}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: EJERCICIOS 1-3 */}
      {activeTab === 'ejercicios_1_3' && (
        <div className="space-y-8">
          {/* Ejercicio 1: Sustantivos */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                  Ejercicio 1 (1–10)
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Analiza los sustantivos — Վերլուծիր գոյականները
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Para cada sustantivo indica: común/propio, concreto/abstracto, individual/colectivo, contable/incontable, género y número.
                </p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => toggleAllSustantivos(true)}
                  className="px-2.5 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors font-medium flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" /> Ցույց տալ բոլորը
                </button>
                <button
                  type="button"
                  onClick={() => toggleAllSustantivos(false)}
                  className="px-2.5 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors font-medium flex items-center gap-1 cursor-pointer"
                >
                  <EyeOff className="w-3.5 h-3.5" /> Թաքցնել
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {EXERCISE_SUSTANTIVOS.map(item => {
                const isRevealed = !!revealedSustantivos[item.id];
                return (
                  <div
                    key={item.id}
                    className="border border-slate-200 rounded-xl p-4 hover:border-amber-300 transition-colors bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold font-mono text-slate-400">
                            #{item.id}
                          </span>
                          <span className="text-lg font-bold text-slate-900 font-display">
                            {item.word}
                          </span>
                          <button
                            type="button"
                            onClick={() => speakSpanish(item.word)}
                            className="text-slate-400 hover:text-amber-600 p-0.5 rounded cursor-pointer"
                            title="Լսել"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-xs text-amber-800 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                          {item.translationArm}
                        </span>
                      </div>

                      {isRevealed && (
                        <div className="mt-3 pt-3 border-t border-slate-100 space-y-2 text-xs animate-in fade-in duration-150">
                          <div>
                            <span className="text-[11px] font-semibold text-slate-500 uppercase block">Análisis:</span>
                            <p className="font-mono text-slate-800 mt-0.5">{item.analysisEs}</p>
                          </div>
                          <div>
                            <span className="text-[11px] font-semibold text-amber-800 uppercase block">Հայերեն վերլուծություն՝</span>
                            <p className="text-slate-700 mt-0.5">{item.analysisArm}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setRevealedSustantivos(prev => ({ ...prev, [item.id]: !isRevealed }))}
                      className="mt-3 text-xs font-medium text-amber-700 hover:text-amber-900 flex items-center gap-1 self-start cursor-pointer"
                    >
                      {isRevealed ? (
                        <>
                          <ChevronUp className="w-3.5 h-3.5" /> Թաքցնել պատասխանը
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3.5 h-3.5" /> Տեսնել վերլուծությունը
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ejercicio 2: Verbos */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                  Ejercicio 2 (11–20)
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Analiza los verbos — Վերլուծիր բայերը
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Գտիր բայի անորոշ ձևը (infinitivo), խոնարհումը, դեմքը, թիվը, ժամանակը և եղանակը։
                </p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => toggleAllVerbos(true)}
                  className="px-2.5 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors font-medium flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" /> Ցույց տալ բոլորը
                </button>
                <button
                  type="button"
                  onClick={() => toggleAllVerbos(false)}
                  className="px-2.5 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors font-medium flex items-center gap-1 cursor-pointer"
                >
                  <EyeOff className="w-3.5 h-3.5" /> Թաքցնել
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {EXERCISE_VERBOS.map(item => {
                const isRevealed = !!revealedVerbos[item.id];
                return (
                  <div
                    key={item.id}
                    className="border border-slate-200 rounded-xl p-4 hover:border-amber-300 transition-colors bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-baseline justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold font-mono text-slate-400">
                            #{item.id}
                          </span>
                          <span className="text-base font-bold text-slate-900 font-display">
                            {item.sentenceEs}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => speakSpanish(item.sentenceEs)}
                          className="text-slate-400 hover:text-amber-600 p-0.5 rounded cursor-pointer"
                          title="Լսել"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-xs text-slate-500 mb-2">
                        Բայ՝ <strong className="text-amber-800 font-semibold">{item.targetWord}</strong> — {item.translationArm}
                      </div>

                      {isRevealed && (
                        <div className="mt-3 pt-3 border-t border-slate-100 space-y-2 text-xs animate-in fade-in duration-150">
                          <div>
                            <span className="text-[11px] font-semibold text-slate-500 uppercase block">Análisis morfológico:</span>
                            <p className="font-mono text-slate-800 mt-0.5">{item.analysisEs}</p>
                          </div>
                          <div>
                            <span className="text-[11px] font-semibold text-amber-800 uppercase block">Հայերեն վերլուծություն՝</span>
                            <p className="text-slate-700 mt-0.5">{item.analysisArm}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setRevealedVerbos(prev => ({ ...prev, [item.id]: !isRevealed }))}
                      className="mt-3 text-xs font-medium text-amber-700 hover:text-amber-900 flex items-center gap-1 self-start cursor-pointer"
                    >
                      {isRevealed ? (
                        <>
                          <ChevronUp className="w-3.5 h-3.5" /> Թաքցնել
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3.5 h-3.5" /> Տեսնել վերլուծությունը
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ejercicio 3: Determinante, pronombre o artículo */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                  Ejercicio 3 (21–30)
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Determinante, pronombre o artículo — Որոշիչ, դերանուն, թե՞ հոդ
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Որոշիր՝ ընդգծված բառը որոշի՞չ է, դերանո՞ւն, թե՞ հոդ։ Նշիր նաև տեսակը, սեռը և թիվը։
                </p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => toggleAllDeterminantes(true)}
                  className="px-2.5 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors font-medium flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" /> Ցույց տալ բոլորը
                </button>
                <button
                  type="button"
                  onClick={() => toggleAllDeterminantes(false)}
                  className="px-2.5 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors font-medium flex items-center gap-1 cursor-pointer"
                >
                  <EyeOff className="w-3.5 h-3.5" /> Թաքցնել
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {EXERCISE_DETERMINANTES.map(item => {
                const isRevealed = !!revealedDeterminantes[item.id];
                return (
                  <div
                    key={item.id}
                    className="border border-slate-200 rounded-xl p-4 hover:border-amber-300 transition-colors bg-white flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold font-mono text-slate-400">
                            #{item.id}
                          </span>
                          <span className="text-base font-bold text-slate-900 font-display">
                            {item.sentenceEs}
                          </span>
                          <button
                            type="button"
                            onClick={() => speakSpanish(item.sentenceEs)}
                            className="text-slate-400 hover:text-amber-600 p-0.5 rounded cursor-pointer"
                            title="Լսել"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="text-xs text-slate-600 mb-2">
                        Վերլուծվող բառ՝ <span className="font-bold text-amber-700">{item.word}</span>
                        <span className="block text-slate-500 mt-0.5">«{item.translationArm}»</span>
                      </div>

                      {isRevealed && (
                        <div className="mt-3 pt-3 border-t border-slate-100 space-y-2 text-xs animate-in fade-in duration-150">
                          <div>
                            <span className="text-[11px] font-semibold text-slate-500 uppercase block">Análisis:</span>
                            <p className="font-mono text-slate-800 mt-0.5">{item.analysisEs}</p>
                          </div>
                          <div>
                            <span className="text-[11px] font-semibold text-amber-800 uppercase block">Հայերեն վերլուծություն՝</span>
                            <p className="text-slate-700 mt-0.5">{item.analysisArm}</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setRevealedDeterminantes(prev => ({ ...prev, [item.id]: !isRevealed }))}
                      className="mt-3 text-xs font-medium text-amber-700 hover:text-amber-900 flex items-center gap-1 self-start cursor-pointer"
                    >
                      {isRevealed ? (
                        <>
                          <ChevronUp className="w-3.5 h-3.5" /> Թաքցնել
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3.5 h-3.5" /> Տեսնել վերլուծությունը
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: ORACIONES 31-35 */}
      {activeTab === 'oraciones_31_35' && (
        <div className="space-y-6">
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5">
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Ejercicio 4. Análisis de oraciones completas (31–35)
            </h3>
            <p className="text-sm text-slate-700 mt-1">
              Վերլուծիր յուրաքանչյուր բառը՝ ինչպես քննության ժամանակ։ Յուրաքանչյուր նախադասության մեջ կարող ես սեղմել ցանկացած բառի վրա՝ նրա մանրամասն վերլուծությունը տեսնելու համար։
            </p>
          </div>

          <div className="space-y-6">
            {EXERCISE_ORACIONES_COMPLETAS.map((sentence, idx) => (
              <SentenceAnalyzerCard
                key={sentence.id}
                title={`3${idx + 1}. Նախադասության վերլուծություն`}
                sentenceEs={sentence.sentenceEs}
                sentenceArm={sentence.sentenceArm}
                explanationArm={sentence.explanationArm}
                words={sentence.words}
                alwaysShowTranslation={alwaysShowTranslation}
              />
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: EXAMEN FINAL */}
      {activeTab === 'examen_final' && (
        <div className="space-y-6">
          <div className="bg-slate-900 text-white rounded-xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  EXAMEN FINAL — Analiza tú mismo
                </span>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  Աշակերտի ամփոփիչ քննական տեքստ (18 հարց)
                </h3>
              </div>
              <button
                type="button"
                onClick={() => speakSpanish(FINAL_EXAM_MORPHOLOGY.textEs)}
                className="text-amber-300 hover:text-white p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs cursor-pointer"
                title="Լսել ամբողջ տեքստը"
              >
                <Volume2 className="w-4 h-4" /> Լսել տեքստը
              </button>
            </div>

            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Texto de examen (Իսպաներեն)՝
              </span>
              <p className="text-lg text-slate-100 font-display leading-relaxed">
                «{FINAL_EXAM_MORPHOLOGY.textEs}»
              </p>
            </div>

            <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/60 text-sm text-slate-300">
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block mb-1">
                Հայերեն թարգմանություն՝
              </span>
              <p className="leading-relaxed">
                «{FINAL_EXAM_MORPHOLOGY.textArm}»
              </p>
            </div>

            <div className="p-3 bg-amber-950/40 rounded-lg border border-amber-500/30 text-xs text-amber-200">
              <strong>Քննության հուշում՝</strong> {FINAL_EXAM_MORPHOLOGY.tipsArm}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900 font-display text-base">
              Վերլուծության հարցեր (18 preguntas)
            </h4>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleAllFinal(true)}
                className="px-2.5 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors font-medium flex items-center gap-1 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" /> Բոլոր պատասխանները
              </button>
              <button
                type="button"
                onClick={() => toggleAllFinal(false)}
                className="px-2.5 py-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md transition-colors font-medium flex items-center gap-1 cursor-pointer"
              >
                <EyeOff className="w-3.5 h-3.5" /> Թաքցնել
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {FINAL_EXAM_MORPHOLOGY.questions.map(q => {
              const isRevealed = !!revealedFinalQuestions[q.id];
              return (
                <div
                  key={q.id}
                  className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-400">
                          #{q.id}
                        </span>
                        <span className="font-semibold text-slate-900 text-sm">
                          Analiza morfológicamente <strong className="text-amber-800">«{q.word}»</strong>
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => speakSpanish(q.word)}
                        className="text-slate-400 hover:text-amber-600 p-1 rounded cursor-pointer"
                        title="Լսել"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-xs text-slate-500 mb-2">
                      {q.questionArm}
                    </div>

                    {isRevealed && (
                      <div className="mt-3 pt-3 border-t border-slate-100 space-y-2 text-xs animate-in fade-in duration-150">
                        <div className="bg-slate-50 p-2.5 rounded border border-slate-200">
                          <span className="text-[11px] font-semibold text-slate-600 uppercase block">
                            Respuesta (Español):
                          </span>
                          <p className="font-mono text-slate-900 mt-0.5">{q.analysisEs}</p>
                        </div>
                        <div className="bg-amber-50/70 p-2.5 rounded border border-amber-200">
                          <span className="text-[11px] font-semibold text-amber-900 uppercase block">
                            Հայերեն վերլուծություն՝
                          </span>
                          <p className="text-amber-950 mt-0.5 font-medium">{q.analysisArm}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setRevealedFinalQuestions(prev => ({ ...prev, [q.id]: !isRevealed }))}
                    className="mt-3 text-xs font-medium text-amber-700 hover:text-amber-900 flex items-center gap-1 self-start cursor-pointer"
                  >
                    {isRevealed ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5" /> Թաքցնել լուծումը
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5" /> Տեսնել լուծումը
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
