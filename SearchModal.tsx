/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, X, Volume2, ArrowRight } from 'lucide-react';
import { GRAMMAR_CATEGORIES, EXERCISE_SUSTANTIVOS, EXERCISE_VERBOS, EXERCISE_DETERMINANTES, FINAL_EXAM_MORPHOLOGY } from './dataMorphology';
import { ALL_100_QUESTIONS, LITERARY_REPASO_TABLE } from './dataLiterature';
import { speakSpanish } from './speechUtil';

interface SearchItem {
  id: string;
  titleEs: string;
  titleArm: string;
  category: string;
  descEs: string;
  descArm: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  // Collect all searchable index items
  const allItems: SearchItem[] = useMemo(() => {
    const list: SearchItem[] = [];

    // Categories
    GRAMMAR_CATEGORIES.forEach(cat => {
      list.push({
        id: `cat-${cat.id}`,
        titleEs: cat.nameEs,
        titleArm: cat.nameArm,
        category: 'Խոսքի մաս',
        descEs: cat.whatToAnalyzeEs,
        descArm: cat.whatToAnalyzeArm
      });
    });

    // Sustantivos
    EXERCISE_SUSTANTIVOS.forEach(s => {
      list.push({
        id: `sus-${s.id}`,
        titleEs: s.word,
        titleArm: s.translationArm,
        category: 'Գոյական (Sustantivo)',
        descEs: s.analysisEs,
        descArm: s.analysisArm
      });
    });

    // Verbos
    EXERCISE_VERBOS.forEach(v => {
      list.push({
        id: `v-${v.id}`,
        titleEs: v.sentenceEs,
        titleArm: v.translationArm,
        category: 'Բայ (Verbo)',
        descEs: v.analysisEs,
        descArm: v.analysisArm
      });
    });

    // Determinantes
    EXERCISE_DETERMINANTES.forEach(d => {
      list.push({
        id: `det-${d.id}`,
        titleEs: `${d.word} — ${d.sentenceEs}`,
        titleArm: d.translationArm,
        category: 'Որոշիչ / Դերանուն / Հոդ',
        descEs: d.analysisEs,
        descArm: d.analysisArm
      });
    });

    // Final exam words
    FINAL_EXAM_MORPHOLOGY.questions.forEach(q => {
      list.push({
        id: `final-${q.id}`,
        titleEs: q.word,
        titleArm: q.questionArm,
        category: 'Examen Final',
        descEs: q.analysisEs,
        descArm: q.analysisArm
      });
    });

    // Literature questions
    ALL_100_QUESTIONS.forEach(q => {
      list.push({
        id: `lit-${q.id}`,
        titleEs: `#${q.id} ${q.questionEs}`,
        titleArm: q.questionArm,
        category: q.exerciseTitleEs,
        descEs: q.explanationEs,
        descArm: q.explanationArm
      });
    });

    // Literary Repaso
    LITERARY_REPASO_TABLE.forEach((item, idx) => {
      list.push({
        id: `rep-${idx}`,
        titleEs: item.conceptEs,
        titleArm: item.howToRecognizeArm,
        category: 'Գրական հասկացություն',
        descEs: item.howToRecognizeEs,
        descArm: item.howToRecognizeArm
      });
    });

    return list;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 8);
    const q = query.toLowerCase().trim();
    return allItems
      .filter(item =>
        item.titleEs.toLowerCase().includes(q) ||
        item.titleArm.toLowerCase().includes(q) ||
        item.descEs.toLowerCase().includes(q) ||
        item.descArm.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [allItems, query]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-20"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Փնտրիր իսպաներեն կամ հայերեն (օր. sustantivo, metáfora, verbos, niña, perros)..."
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-2 py-1 bg-white border border-slate-200 rounded-md cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 divide-y divide-slate-100 flex-1">
          {results.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-sm">
              Ոչինչ չգտնվեց «{query}» հարցմամբ
            </div>
          ) : (
            results.map(item => (
              <div
                key={item.id}
                className="py-3 px-3 hover:bg-amber-50/50 rounded-xl transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {item.category}
                    </span>
                    <span className="font-bold text-slate-900 text-sm sm:text-base font-display">
                      {item.titleEs}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => speakSpanish(item.titleEs)}
                    className="text-slate-400 hover:text-amber-600 p-1 rounded hover:bg-white cursor-pointer"
                    title="Լսել արտասանությունը"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xs sm:text-sm font-semibold text-amber-900">
                  {item.titleArm}
                </div>

                <div className="text-xs text-slate-600 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="bg-slate-50 p-2 rounded border border-slate-100 font-mono text-[11px] text-slate-700">
                    {item.descEs}
                  </div>
                  <div className="bg-amber-50/60 p-2 rounded border border-amber-100 text-[11px] text-slate-800">
                    {item.descArm}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <span>Ցուցադրված է {results.length} արդյունք</span>
          <span>Սեղմիր բարձրախոսին՝ արտասանությունը լսելու համար</span>
        </div>
      </div>
    </div>
  );
};
