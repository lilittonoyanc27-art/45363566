/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GRAMMAR_CATEGORIES, EXERCISE_SUSTANTIVOS, EXERCISE_VERBOS, EXERCISE_DETERMINANTES } from './dataMorphology';
import { LITERARY_REPASO_TABLE } from './dataLiterature';
import { Volume2, RotateCw, Check, X, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { speakSpanish } from './speechUtil';

interface Flashcard {
  id: string;
  frontEs: string;
  frontType: string;
  backArm: string;
  explanationEs: string;
  explanationArm: string;
  exampleEs?: string;
}

export const FlashcardsMode: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'morph' | 'figures'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [knownCards, setKnownCards] = useState<Set<string>>(new Set());

  // Build card deck from data
  const cards: Flashcard[] = [
    // Categories
    ...GRAMMAR_CATEGORIES.map(cat => ({
      id: `cat-${cat.id}`,
      frontEs: cat.nameEs,
      frontType: 'Խոսքի մաս / Categoría gramatical',
      backArm: cat.nameArm,
      explanationEs: cat.whatToAnalyzeEs,
      explanationArm: cat.whatToAnalyzeArm,
      exampleEs: `${cat.exampleEs} (${cat.exampleAnalysisEs})`
    })),
    // Nouns
    ...EXERCISE_SUSTANTIVOS.map(s => ({
      id: `sus-${s.id}`,
      frontEs: s.word,
      frontType: 'Գոյական / Sustantivo',
      backArm: s.translationArm,
      explanationEs: s.analysisEs,
      explanationArm: s.analysisArm
    })),
    // Verbs
    ...EXERCISE_VERBOS.map(v => ({
      id: `v-${v.id}`,
      frontEs: v.sentenceEs,
      frontType: 'Բայ / Verbo',
      backArm: v.translationArm,
      explanationEs: v.analysisEs,
      explanationArm: v.analysisArm
    })),
    // Literary Figures
    ...LITERARY_REPASO_TABLE.map((fig, idx) => ({
      id: `fig-${idx}`,
      frontEs: fig.conceptEs,
      frontType: 'Գեղարվեստական միջոց / Figura literaria',
      backArm: fig.howToRecognizeArm,
      explanationEs: fig.howToRecognizeEs,
      explanationArm: fig.howToRecognizeArm,
      exampleEs: fig.exampleEs
    }))
  ];

  const filteredCards = cards.filter(c => {
    if (filter === 'morph') return c.frontType.includes('Խոսքի') || c.frontType.includes('Գոյական') || c.frontType.includes('Բայ');
    if (filter === 'figures') return c.frontType.includes('Figura') || c.frontType.includes('Գեղարվեստական');
    return true;
  });

  const currentCard = filteredCards[currentIndex] || filteredCards[0];
  const isKnown = currentCard ? knownCards.has(currentCard.id) : false;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(filteredCards.length - 1);
    }
  };

  const toggleKnown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard) return;
    const next = new Set(knownCards);
    if (next.has(currentCard.id)) {
      next.delete(currentCard.id);
    } else {
      next.add(currentCard.id);
    }
    setKnownCards(next);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Top Deck Controls */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
            Ինտերակտիվ քարտեր / Tarjetas de memoria
          </span>
          <h3 className="text-lg font-bold text-slate-900 font-display">
            Սեղմիր քարտին՝ հայերեն թարգմանությունն ու վերլուծությունը բացելու համար
          </h3>
        </div>
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => { setFilter('all'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              filter === 'all' ? 'bg-slate-900 text-white font-semibold' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Բոլորը ({cards.length})
          </button>
          <button
            type="button"
            onClick={() => { setFilter('morph'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              filter === 'morph' ? 'bg-amber-600 text-white font-semibold' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Ձևաբանություն
          </button>
          <button
            type="button"
            onClick={() => { setFilter('figures'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
              filter === 'figures' ? 'bg-amber-600 text-white font-semibold' : 'bg-slate-100 text-slate-700'
            }`}
          >
            Գրական միջոցներ
          </button>
        </div>
      </div>

      {/* Progress & Known counter */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono px-1">
        <span>Քարտ {currentIndex + 1} / {filteredCards.length}</span>
        <span>Յուրացված՝ {knownCards.size} / {filteredCards.length}</span>
      </div>

      {/* The Flashcard itself */}
      {currentCard && (
        <div
          onClick={handleFlip}
          className="relative min-h-[340px] bg-white border-2 border-slate-200 hover:border-amber-400 rounded-2xl p-6 sm:p-8 shadow-sm cursor-pointer transition-all flex flex-col justify-between select-none"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
              {currentCard.frontType}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  speakSpanish(currentCard.frontEs);
                }}
                className="text-slate-400 hover:text-amber-600 p-1 rounded-md hover:bg-slate-100 transition-colors"
                title="Լսել արտասանությունը"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={toggleKnown}
                className={`p-1.5 rounded-md text-xs font-medium transition-colors flex items-center gap-1 ${
                  isKnown ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
                title={isKnown ? 'Հեռացնել յուրացվածներից' : 'Նշել որպես յուրացված'}
              >
                <Check className="w-4 h-4" />
                {isKnown ? 'Գիտեմ' : 'Նշել'}
              </button>
            </div>
          </div>

          {/* Card Body */}
          <div className="my-auto py-6 text-center space-y-4">
            {!isFlipped ? (
              <div className="space-y-3">
                <span className="text-3xl sm:text-4xl font-bold font-display text-slate-900 block leading-tight">
                  {currentCard.frontEs}
                </span>
                <span className="text-xs text-amber-800 inline-flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 font-medium">
                  <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                  Սեղմիր քարտին՝ հայերենը բացելու համար
                </span>
              </div>
            ) : (
              <div className="space-y-3 text-left bg-amber-50/60 p-5 rounded-xl border border-amber-200/80 animate-in fade-in zoom-in-95 duration-150">
                <div>
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block">
                    Հայերեն թարգմանություն՝
                  </span>
                  <span className="text-2xl font-bold text-slate-900 font-display mt-0.5 block">
                    {currentCard.backArm}
                  </span>
                </div>

                {currentCard.explanationArm && (
                  <div className="pt-2 border-t border-amber-200/60 text-xs sm:text-sm text-slate-800">
                    <span className="font-semibold text-slate-900 block text-xs uppercase mb-0.5">
                      Վերլուծություն / Ինչպես ճանաչել՝
                    </span>
                    <p className="leading-relaxed">{currentCard.explanationArm}</p>
                  </div>
                )}

                {currentCard.exampleEs && (
                  <div className="pt-2 border-t border-amber-200/60 text-xs text-slate-700">
                    <span className="font-semibold text-slate-900 block text-xs uppercase mb-0.5">
                      Օրինակ՝
                    </span>
                    <p className="font-mono text-slate-900 font-semibold">{currentCard.exampleEs}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-100 pt-3">
            <span>{isFlipped ? 'Կողմ 2/2 (Հայերեն)' : 'Կողմ 1/2 (Իսպաներեն)'}</span>
            <span className="flex items-center gap-1 text-slate-500">
              <RotateCw className="w-3.5 h-3.5" /> Շրջել
            </span>
          </div>
        </div>
      )}

      {/* Nav Controls */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrev}
          className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Նախորդ քարտը
        </button>
        <button
          type="button"
          onClick={handleFlip}
          className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm transition-colors cursor-pointer shadow-sm flex items-center gap-2"
        >
          <RotateCw className="w-4 h-4" /> Շրջել քարտը
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
        >
          Հաջորդը <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
