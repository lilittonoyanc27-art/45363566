/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ALL_100_QUESTIONS,
  ROMANCE_POEM,
  PUENTE_TEXT,
  LITERARY_REPASO_TABLE,
  ORAL_EXAM_FORMULAS
} from './dataLiterature';
import { Volume2, CheckCircle2, XCircle, Sparkles, BookOpen, MessageSquareQuote, Filter, RotateCcw } from 'lucide-react';
import { speakSpanish } from './speechUtil';

interface LiteratureSectionProps {
  alwaysShowTranslation: boolean;
}

export const LiteratureSection: React.FC<LiteratureSectionProps> = ({ alwaysShowTranslation }) => {
  const [selectedExerciseFilter, setSelectedExerciseFilter] = useState<number | 'all' | 'repaso' | 'oral'>('all');
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [revealedExplanations, setRevealedExplanations] = useState<Record<number, boolean>>({});

  const handleSelectAnswer = (questionId: number, answerKey: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: answerKey }));
    // Auto-reveal explanation upon choosing
    setRevealedExplanations(prev => ({ ...prev, [questionId]: true }));
  };

  const handleToggleExplanation = (questionId: number) => {
    setRevealedExplanations(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const resetAllAnswers = () => {
    setUserAnswers({});
    setRevealedExplanations({});
  };

  const filteredQuestions = selectedExerciseFilter === 'all'
    ? ALL_100_QUESTIONS
    : typeof selectedExerciseFilter === 'number'
      ? ALL_100_QUESTIONS.filter(q => {
          if (selectedExerciseFilter === 1) return q.id >= 1 && q.id <= 8;
          if (selectedExerciseFilter === 2) return q.id >= 9 && q.id <= 16;
          if (selectedExerciseFilter === 3) return q.id >= 17 && q.id <= 24;
          if (selectedExerciseFilter === 4) return q.id >= 25 && q.id <= 30;
          if (selectedExerciseFilter === 5) return q.id >= 31 && q.id <= 40;
          if (selectedExerciseFilter === 6) return q.id >= 41 && q.id <= 52;
          if (selectedExerciseFilter === 7) return q.id >= 53 && q.id <= 64;
          if (selectedExerciseFilter === 8) return q.id >= 65 && q.id <= 72;
          if (selectedExerciseFilter === 9) return q.id >= 73 && q.id <= 80;
          if (selectedExerciseFilter === 10) return q.id >= 81 && q.id <= 90;
          if (selectedExerciseFilter === 11) return q.id >= 91 && q.id <= 95;
          if (selectedExerciseFilter === 12) return q.id >= 96 && q.id <= 100;
          return true;
        })
      : [];

  // Calculate score for answered questions
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(([id, ans]) => {
    const q = ALL_100_QUESTIONS.find(item => item.id === Number(id));
    return q && q.correctAnswer === ans;
  }).length;

  return (
    <div className="space-y-8">
      {/* Exercise Filter Navigation */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              100 Քննական Հարցեր & Վարժություններ (Ընտրիր բաժինը)
            </span>
          </div>
          {answeredCount > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-700 font-mono">
                Արդյունք՝ {correctCount} / {answeredCount} ({Math.round((correctCount / answeredCount) * 100)}%)
              </span>
              <button
                type="button"
                onClick={resetAllAnswers}
                className="text-xs text-slate-500 hover:text-rose-600 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Մաքրել
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            type="button"
            onClick={() => setSelectedExerciseFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedExerciseFilter === 'all'
                ? 'bg-slate-900 text-white font-semibold'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Բոլորը (1–100)
          </button>
          {[
            { id: 1, label: '1. Popular y culta (1–8)' },
            { id: 2, label: '2. Romance / Leyenda / Mito / Cuento (9–16)' },
            { id: 3, label: '3. Verdadero o falso (17–24)' },
            { id: 4, label: '4. Verso y prosa (25–30)' },
            { id: 5, label: '5. Nivel fónico (31–40)' },
            { id: 6, label: '6. Nivel morfosintáctico (41–52)' },
            { id: 7, label: '7. Metáforas A y B (53–64)' },
            { id: 8, label: '8. Metáfora / Personificación (65–72)' },
            { id: 9, label: '9. Analiza un romance (73–80)' },
            { id: 10, label: '10. El puente encantado (81–90)' },
            { id: 11, label: '11. Corrige errores (91–95)' },
            { id: 12, label: '12. Producción (96–100)' },
          ].map(ex => (
            <button
              key={ex.id}
              type="button"
              onClick={() => setSelectedExerciseFilter(ex.id)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedExerciseFilter === ex.id
                  ? 'bg-amber-600 text-white font-semibold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {ex.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelectedExerciseFilter('repaso')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              selectedExerciseFilter === 'repaso'
                ? 'bg-emerald-700 text-white'
                : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200'
            }`}
          >
            ★ Ամփոփիչ աղյուսակ (Repaso)
          </button>
          <button
            type="button"
            onClick={() => setSelectedExerciseFilter('oral')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              selectedExerciseFilter === 'oral'
                ? 'bg-indigo-700 text-white'
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200'
            }`}
          >
            ★ Բանավոր քննության կաղապարներ (Oral)
          </button>
        </div>
      </div>

      {/* SPECIAL VIEW: REPASO FINAL TABLE */}
      {selectedExerciseFilter === 'repaso' && (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm space-y-4 p-5">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              REPASO FINAL — ԻՆՉ ՊԵՏՔ Է ՀԻՇԵԼ ՔՆՆՈՒԹՅԱՆ ՀԱՄԱՐ
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-display mt-1">
              Գրական հասկացությունների և արտահայտչամիջոցների ճանաչման ամփոփիչ ուղեցույց
            </h3>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3 w-40">Concepto (Հասկացություն)</th>
                  <th className="p-3">Cómo reconocerlo (Ինչպե՞ս ճանաչել)</th>
                  <th className="p-3">Օրինակ (Ejemplo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {LITERARY_REPASO_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-semibold text-slate-900">
                      <div className="flex items-center gap-1.5">
                        <span>{row.conceptEs}</span>
                        <button
                          type="button"
                          onClick={() => speakSpanish(row.conceptEs)}
                          className="text-slate-400 hover:text-amber-600 p-0.5 rounded cursor-pointer"
                          title="Լսել"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="font-medium text-slate-900 block">{row.howToRecognizeEs}</span>
                      <span className="text-xs text-slate-500">{row.howToRecognizeArm}</span>
                    </td>
                    <td className="p-3 text-xs">
                      {row.exampleEs && (
                        <div className="font-mono text-slate-700">{row.exampleEs}</div>
                      )}
                      {row.exampleArm && (
                        <div className="text-slate-500 mt-0.5">{row.exampleArm}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SPECIAL VIEW: ORAL EXAM PREPARATION */}
      {selectedExerciseFilter === 'oral' && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
          <div>
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block">
              Preparación oral — Բանավոր պատրաստություն
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-display mt-1">
              Ինչպե՞ս բանավոր իսպաներեն բացատրել արտահայտչամիջոցները
            </h3>
            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
              Քննության ընթացքում շատ կարևոր է, որ աշակերտը կարողանա իսպաներեն ոչ միայն անվանել արտահայտչամիջոցը, այլ նաև ճիշտ բացատրել՝ օգտագործելով այս հաստատուն ձևակերպումները։ Սեղմիր բարձրախոսի վրա՝ ճիշտ առոգանությունը լսելու համար։
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ORAL_EXAM_FORMULAS.map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-indigo-700 uppercase">
                    Կաղապար #{idx + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => speakSpanish(item.formulaEs)}
                    className="text-slate-500 hover:text-indigo-600 p-1 rounded hover:bg-white transition-colors cursor-pointer"
                    title="Լսել իսպաներեն բանաձևը"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-900 font-semibold text-sm leading-relaxed">
                  «{item.formulaEs}»
                </div>

                <div className="text-xs text-slate-700 bg-indigo-50/70 p-2.5 rounded border border-indigo-100">
                  <span className="font-semibold text-indigo-900 block mb-0.5">Հայերեն իմաստը՝</span>
                  {item.formulaArm}
                </div>

                <div className="text-xs text-slate-500 pt-1">
                  <span className="font-semibold text-slate-600 block">Կիրառություն՝</span>
                  <span className="font-mono text-slate-700">{item.exampleEs}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SPECIAL CONTEXT BANNER FOR EXERCISE 9 (ROMANCE POEM) */}
      {(selectedExerciseFilter === 9 || (selectedExerciseFilter === 'all' && filteredQuestions.some(q => q.id >= 73 && q.id <= 80))) && (
        <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-amber-200/60 pb-2">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">
                Poema de estudio — Վերլուծության բանաստեղծություն
              </span>
              <h4 className="text-lg font-bold text-slate-900 font-display">
                «{ROMANCE_POEM.title}» — {ROMANCE_POEM.titleArm}
              </h4>
            </div>
            <button
              type="button"
              onClick={() => speakSpanish(ROMANCE_POEM.lines.map(l => l.text).join(' '))}
              className="text-amber-800 hover:text-amber-950 p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              title="Լսել բանաստեղծությունը"
            >
              <Volume2 className="w-4 h-4" /> Լսել ռոմանսը
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-amber-200/80 space-y-1.5 font-display text-sm">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block mb-1">
                Տեքստ և տողեր (8 versos)
              </span>
              {ROMANCE_POEM.lines.map(line => (
                <div
                  key={line.num}
                  className={`flex items-baseline justify-between py-1 px-2 rounded ${
                    line.isPair ? 'bg-amber-50/80 font-semibold text-amber-950 border-l-2 border-amber-500' : 'text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 w-4">{line.num}.</span>
                    <span>{line.text}</span>
                  </div>
                  {line.isPair && (
                    <span className="text-[11px] font-mono text-amber-700 bg-white px-1.5 py-0.5 rounded border border-amber-200">
                      զույգ / rima {line.rhymeVowels} ({line.rhymeWord})
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200/80 space-y-1.5 text-xs">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block mb-1">
                Հայերեն թարգմանություն & Վանկատում (Cómputo métrico)
              </span>
              {ROMANCE_POEM.lines.map(line => (
                <div key={line.num} className="py-1 border-b border-slate-100 last:border-0">
                  <div className="text-slate-800 font-medium">
                    {line.num}. «{line.arm}»
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                    {line.syllables} = <strong className="text-slate-700">{line.syllableCount} sílabas</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SPECIAL CONTEXT BANNER FOR EXERCISE 10 (EL PUENTE ENCANTADO) */}
      {(selectedExerciseFilter === 10 || (selectedExerciseFilter === 'all' && filteredQuestions.some(q => q.id >= 81 && q.id <= 90))) && (
        <div className="bg-slate-900 text-white rounded-xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                TEXTO DE ANÁLISIS — Տեքստի ըմբռնում (Հարցեր 81–90)
              </span>
              <h4 className="text-xl font-bold font-display text-white mt-1">
                «{PUENTE_TEXT.title}» — {PUENTE_TEXT.titleArm}
              </h4>
            </div>
            <button
              type="button"
              onClick={() => speakSpanish(PUENTE_TEXT.paragraphs.map(p => p.es).join(' '))}
              className="text-amber-300 hover:text-white p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              title="Լսել պատմվածքը"
            >
              <Volume2 className="w-4 h-4" /> Լսել տեքստը
            </button>
          </div>

          <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
            {PUENTE_TEXT.paragraphs.map((p, idx) => (
              <div key={idx} className="bg-slate-800/70 p-3.5 rounded-lg border border-slate-700 space-y-1">
                <p className="text-slate-100 font-display text-sm sm:text-base">
                  {p.es}
                </p>
                <p className="text-slate-400 text-xs">
                  {p.arm}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* QUESTIONS LIST */}
      {selectedExerciseFilter !== 'repaso' && selectedExerciseFilter !== 'oral' && (
        <div className="space-y-4">
          {filteredQuestions.map(q => {
            const userAnswer = userAnswers[q.id];
            const isRevealed = !!revealedExplanations[q.id];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = isAnswered && userAnswer === q.correctAnswer;

            return (
              <div
                key={q.id}
                className={`bg-white border rounded-xl p-5 shadow-sm transition-all ${
                  isAnswered
                    ? isCorrect
                      ? 'border-emerald-300 ring-1 ring-emerald-100'
                      : 'border-rose-300 ring-1 ring-rose-100'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      #{q.id}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {q.exerciseTitleEs}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => speakSpanish(q.questionEs)}
                      className="text-slate-400 hover:text-amber-600 p-1 rounded hover:bg-slate-100 transition-colors cursor-pointer"
                      title="Լսել հարցը"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    {isAnswered && (
                      <span className={`text-xs font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-4 h-4" /> Ճիշտ է
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4" /> Սխալ է
                          </>
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <div className="space-y-1 mb-4">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {q.questionEs}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {q.questionArm}
                  </p>
                </div>

                {/* Options if provided */}
                {q.options && q.options.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {q.options.map(opt => {
                      const isOptionSelected = userAnswer === opt.key;
                      const isThisCorrect = opt.key === q.correctAnswer;
                      let optionStyle = 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200';

                      if (isAnswered) {
                        if (isThisCorrect) {
                          optionStyle = 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold ring-1 ring-emerald-300';
                        } else if (isOptionSelected && !isThisCorrect) {
                          optionStyle = 'bg-rose-50 border-rose-300 text-rose-950 line-through ring-1 ring-rose-200';
                        } else {
                          optionStyle = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => handleSelectAnswer(q.id, opt.key)}
                          className={`p-3 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer flex flex-col justify-between ${optionStyle}`}
                        >
                          <span className="font-medium">
                            <strong className="mr-1.5">{opt.key})</strong> {opt.textEs}
                          </span>
                          {opt.textArm && (
                            <span className="text-[11px] opacity-75 mt-1 block">
                              {opt.textArm}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Toggle explanation button & content */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleToggleExplanation(q.id)}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors cursor-pointer"
                  >
                    {isRevealed ? 'Թաքցնել բացատրությունը' : 'Տեսնել ճիշտ պատասխանն ու բացատրությունը'}
                  </button>
                  {q.extraInfo?.structure && (
                    <span className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      Կառուցվածք՝ {q.extraInfo.structure}
                    </span>
                  )}
                </div>

                {isRevealed && (
                  <div className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs sm:text-sm animate-in fade-in duration-150">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-slate-900">Ճիշտ պատասխան՝</span>
                      <span className="font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {q.correctAnswer}
                      </span>
                    </div>

                    <div className="text-slate-800">
                      <span className="font-semibold text-slate-600 block text-[11px] uppercase tracking-wide">
                        Explicación (Español):
                      </span>
                      <p className="mt-0.5">{q.explanationEs}</p>
                    </div>

                    <div className="text-amber-950 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/70">
                      <span className="font-semibold text-amber-900 block text-[11px] uppercase tracking-wide mb-0.5">
                        Բացատրություն (Հայերեն)՝
                      </span>
                      <p>{q.explanationArm}</p>
                    </div>

                    {q.extraInfo && (
                      <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 flex flex-wrap gap-3">
                        {q.extraInfo.termA && <div><strong>A (իրական)՝</strong> {q.extraInfo.termA}</div>}
                        {q.extraInfo.termB && <div><strong>B (փոխաբերական)՝</strong> {q.extraInfo.termB}</div>}
                        {q.extraInfo.normalOrder && <div><strong>Սովորական շարադասություն՝</strong> «{q.extraInfo.normalOrder}»</div>}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
