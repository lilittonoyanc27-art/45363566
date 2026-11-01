/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ALL_100_QUESTIONS } from './dataLiterature';
import { Volume2, Award, CheckCircle, XCircle, ArrowRight, ArrowLeft, RotateCcw, Sparkles } from 'lucide-react';
import { speakSpanish } from './speechUtil';

interface ExamModeProps {
  alwaysShowTranslation: boolean;
}

export const ExamMode: React.FC<ExamModeProps> = ({ alwaysShowTranslation }) => {
  const [selectedPool, setSelectedPool] = useState<'all' | 'popular' | 'genres' | 'figures' | 'metaphors'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Filter pool
  const poolQuestions = ALL_100_QUESTIONS.filter(q => {
    if (selectedPool === 'popular') return q.id >= 1 && q.id <= 8;
    if (selectedPool === 'genres') return q.id >= 9 && q.id <= 24;
    if (selectedPool === 'figures') return (q.id >= 31 && q.id <= 52) || (q.id >= 65 && q.id <= 72);
    if (selectedPool === 'metaphors') return q.id >= 53 && q.id <= 64;
    return true;
  });

  const currentQ = poolQuestions[currentIndex] || poolQuestions[0];
  const totalQuestions = poolQuestions.length;

  const handleSelectOption = (key: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: key }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsSubmitted(false);
  };

  // Calculate stats
  const answeredTotal = Object.keys(selectedAnswers).length;
  const correctTotal = poolQuestions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length;
  const percentScore = Math.round((correctTotal / totalQuestions) * 100);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Quiz Header & Mode Selector */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
              Սիմուլյատոր / Modo Examen Interactivo
            </span>
            <h3 className="text-xl font-bold text-slate-900 font-display mt-0.5">
              Քննության ինտերակտիվ թեստային համակարգ
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors font-medium flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Սկսել նորից
            </button>
            {!isSubmitted && (
              <button
                type="button"
                onClick={() => setIsSubmitted(true)}
                disabled={answeredTotal === 0}
                className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-40 rounded-lg transition-colors cursor-pointer"
              >
                Ավարտել քննությունը
              </button>
            )}
          </div>
        </div>

        {/* Categories selector */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          {[
            { id: 'all', label: 'Բոլոր հարցերը (100)' },
            { id: 'popular', label: 'Ժողովրդական և հեղինակային (1–8)' },
            { id: 'genres', label: 'Ժանրեր & Ճիշտ/Սխալ (9–24)' },
            { id: 'figures', label: 'Արտահայտչամիջոցներ (Fónico & Sintáctico)' },
            { id: 'metaphors', label: 'Փոխաբերություններ A և B (53–64)' }
          ].map(p => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setSelectedPool(p.id as any);
                setCurrentIndex(0);
                setIsSubmitted(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedPool === p.id
                  ? 'bg-amber-600 text-white font-semibold'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5 font-mono">
            <span>Հարց {currentIndex + 1} / {totalQuestions}</span>
            <span>Պատասխանված՝ {answeredTotal} / {totalQuestions}</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber-500 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Score Summary Banner if submitted */}
      {isSubmitted && (
        <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg border border-slate-800 space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Քննության արդյունքներ (Calificación)
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                {correctTotal} ճիշտ պատասխան {totalQuestions}-ից ({percentScore}%)
              </h3>
            </div>
          </div>
          <p className="text-sm text-slate-300">
            {percentScore >= 85
              ? 'Գերազանց արդյունք։ Դուք հիանալի պատրաստված եք 7-րդ դասարանի քննությանը։'
              : percentScore >= 60
                ? 'Լավ արդյունք։ Խորհուրդ է տրվում կրկնել այն հարցերը, որտեղ սխալվել եք։'
                : 'Շարունակեք մարզվել և օգտվել տեսության բաժնից ու հայերեն բացատրություններից։'}
          </p>
        </div>
      )}

      {/* Active Question Card */}
      {currentQ && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                #{currentQ.id}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {currentQ.exerciseTitleEs}
              </span>
            </div>
            <button
              type="button"
              onClick={() => speakSpanish(currentQ.questionEs)}
              className="text-slate-400 hover:text-amber-600 p-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              title="Լսել հարցը"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-bold text-slate-900 font-display">
              {currentQ.questionEs}
            </h4>
            <p className="text-sm text-slate-600">
              {currentQ.questionArm}
            </p>
          </div>

          {/* Options */}
          {currentQ.options && (
            <div className="space-y-2.5">
              {currentQ.options.map(opt => {
                const isSelected = selectedAnswers[currentQ.id] === opt.key;
                const isCorrect = opt.key === currentQ.correctAnswer;
                let btnStyle = 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200';

                if (isSelected && !isSubmitted) {
                  btnStyle = 'bg-amber-50 border-amber-400 text-amber-950 font-semibold ring-2 ring-amber-300';
                }

                if (isSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-300';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 line-through ring-2 ring-rose-200';
                  } else {
                    btnStyle = 'bg-slate-50 text-slate-400 border-slate-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handleSelectOption(opt.key)}
                    className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start justify-between gap-3 ${btnStyle}`}
                  >
                    <div>
                      <span className="text-sm sm:text-base font-semibold block">
                        <strong className="mr-2 font-mono text-xs px-2 py-0.5 rounded bg-white/80 border border-slate-200">
                          {opt.key}
                        </strong>
                        {opt.textEs}
                      </span>
                      {opt.textArm && (
                        <span className="text-xs text-slate-600 block mt-1">
                          {opt.textArm}
                        </span>
                      )}
                    </div>

                    {isSubmitted && (
                      <span className="shrink-0 mt-0.5">
                        {isCorrect && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                        {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600" />}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Explanation if answered or submitted */}
          {(isSubmitted || selectedAnswers[currentQ.id]) && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs sm:text-sm animate-in fade-in duration-150">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">Ճիշտ պատասխան՝</span>
                <span className="font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  {currentQ.correctAnswer}
                </span>
              </div>
              <div className="text-slate-800">
                <span className="font-semibold text-slate-600 block text-[11px] uppercase tracking-wide">
                  Explicación (Español):
                </span>
                <p className="mt-0.5">{currentQ.explanationEs}</p>
              </div>
              <div className="text-amber-950 bg-amber-50 p-2.5 rounded-lg border border-amber-200/60">
                <span className="font-semibold text-amber-900 block text-[11px] uppercase tracking-wide mb-0.5">
                  Հայերեն բացատրություն՝
                </span>
                <p>{currentQ.explanationArm}</p>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Նախորդը
            </button>

            <span className="text-xs text-slate-500 font-mono">
              {currentIndex + 1} / {totalQuestions}
            </span>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === totalQuestions - 1}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-40 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              Հաջորդը <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
