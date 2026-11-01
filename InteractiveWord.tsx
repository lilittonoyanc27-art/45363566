/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, Sparkles, X, ChevronDown } from 'lucide-react';
import { speakSpanish } from './speechUtil';

interface InteractiveWordProps {
  spanish: string;
  armenian: string;
  analysisEs?: string;
  analysisArm?: string;
  category?: string;
  alwaysShow?: boolean;
  className?: string;
  isBlock?: boolean;
}

export const InteractiveWord: React.FC<InteractiveWordProps> = ({
  spanish,
  armenian,
  analysisEs,
  analysisArm,
  category,
  alwaysShow = false,
  className = '',
  isBlock = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakSpanish(spanish);
  };

  if (alwaysShow) {
    return (
      <span className={`inline-flex flex-col items-start ${isBlock ? 'w-full' : ''} ${className}`}>
        <span className="inline-flex items-center gap-2 font-semibold text-slate-900 text-base sm:text-lg">
          <span>{spanish}</span>
          <button
            type="button"
            onClick={handleAudio}
            title="Հնչեցնել իսպաներեն / Escuchar pronunciación"
            className="text-slate-400 hover:text-amber-600 transition-colors p-1 rounded cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </span>
        <span className="text-sm sm:text-base text-amber-900 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mt-1">
          {armenian}
        </span>
      </span>
    );
  }

  return (
    <span className={`relative inline-block ${isBlock ? 'w-full' : ''} ${className}`}>
      <button
        type="button"
        onClick={handleClick}
        className={`group text-left inline-flex items-baseline gap-1.5 px-2 py-1 -mx-1 rounded-lg transition-all cursor-pointer ${
          isOpen
            ? 'bg-amber-100 text-amber-950 ring-2 ring-amber-300 font-semibold'
            : 'text-slate-900 hover:bg-amber-50 hover:text-amber-900 border-b-2 border-dashed border-amber-400 font-medium'
        }`}
        title="Սեղմիր՝ հայերեն թարգմանությունը տեսնելու համար / Clic para ver traducción armenia"
      >
        <span className="text-base sm:text-lg">{spanish}</span>
        <span className="text-xs text-amber-700 opacity-70 group-hover:opacity-100 transition-opacity font-mono font-bold">
          [հայ]
        </span>
      </button>

      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute z-40 left-0 top-full mt-2 w-80 sm:w-96 p-4 bg-white border border-amber-300 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-150 text-slate-800"
        >
          <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2.5 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-lg font-display">{spanish}</span>
              <button
                type="button"
                onClick={handleAudio}
                className="text-slate-500 hover:text-amber-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                title="Հնչեցնել արտասանությունը"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            {category && (
              <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
                {category}
              </span>
            )}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-md hover:bg-slate-100 ml-auto cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5 text-sm">
            <div className="bg-amber-50 text-amber-950 p-3 rounded-xl border border-amber-200">
              <span className="text-xs text-amber-800 block uppercase font-bold tracking-wider mb-1">
                Հայերեն թարգմանություն
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-900 block">{armenian}</span>
            </div>

            {analysisEs && (
              <div className="text-slate-700 pt-1">
                <span className="font-semibold text-slate-700 block text-xs uppercase tracking-wide">
                  Análisis morfológico:
                </span>
                <span className="text-sm text-slate-800 font-mono leading-relaxed block mt-1">
                  {analysisEs}
                </span>
              </div>
            )}

            {analysisArm && (
              <div className="text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200 mt-2">
                <span className="font-semibold text-slate-900 block text-xs uppercase tracking-wide mb-1">
                  Քերականական վերլուծություն (հայերեն)՝
                </span>
                <span className="text-sm text-slate-800 leading-relaxed block font-medium">
                  {analysisArm}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </span>
  );
};

export const SentenceAnalyzerCard: React.FC<{
  title: string;
  sentenceEs: string;
  sentenceArm: string;
  explanationArm?: string;
  words: {
    word: string;
    translationArm: string;
    analysisEs: string;
    analysisArm: string;
    category: string;
  }[];
  alwaysShowTranslation: boolean;
}> = ({ title, sentenceEs, sentenceArm, explanationArm, words, alwaysShowTranslation }) => {
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-4">
        <div>
          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
            {title}
          </span>
          <div className="flex items-center gap-2 mt-1">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 font-display leading-snug">
              «{sentenceEs}»
            </h4>
            <button
              type="button"
              onClick={() => speakSpanish(sentenceEs)}
              className="text-slate-400 hover:text-amber-600 transition-colors p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
              title="Լսել ամբողջ նախադասությունը / Escuchar oración completa"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="text-xs sm:text-sm text-slate-600 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200 self-start sm:self-auto font-medium">
          Սեղմիր բառին՝ վերլուծելու համար
        </div>
      </div>

      {/* Sentence interactive breakdown row */}
      <div className="flex flex-wrap gap-2.5 items-center p-4 bg-amber-50/50 rounded-2xl border border-amber-200/70 mb-4">
        {words.map((item, idx) => {
          const isSelected = selectedWordIndex === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedWordIndex(isSelected ? null : idx)}
              className={`px-4 py-2.5 rounded-xl text-base transition-all cursor-pointer flex flex-col items-start ${
                isSelected
                  ? 'bg-amber-600 text-white shadow-md ring-2 ring-amber-300 font-semibold'
                  : 'bg-white hover:bg-amber-100 text-slate-900 border border-slate-200'
              }`}
            >
              <span className="font-bold flex items-center gap-1.5 text-base sm:text-lg">
                {item.word}
                {isSelected && <ChevronDown className="w-4 h-4" />}
              </span>
              <span className={`text-xs sm:text-sm mt-0.5 font-medium ${isSelected ? 'text-amber-100' : 'text-amber-800'}`}>
                {item.translationArm}
              </span>
            </button>
          );
        })}
      </div>

      {/* Armenian sentence translation always clear */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-4 text-sm sm:text-base text-slate-800">
        <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider mb-1 text-slate-500">
          Հայերեն թարգմանություն՝
        </span>
        <p className="font-medium text-base sm:text-lg text-slate-900">
          «{sentenceArm}»
        </p>
      </div>

      {/* Active word inspector */}
      {selectedWordIndex !== null && words[selectedWordIndex] && (
        <div className="p-5 bg-white border-2 border-amber-400 rounded-2xl shadow-lg mb-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between border-b border-amber-100 pb-3 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                {words[selectedWordIndex].word}
              </span>
              <button
                type="button"
                onClick={() => speakSpanish(words[selectedWordIndex].word)}
                className="text-amber-700 hover:text-amber-900 p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer"
                title="Լսել բառը"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                {words[selectedWordIndex].category}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSelectedWordIndex(null)}
              className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-base">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1">
                Análisis morfológico (Español):
              </span>
              <p className="text-slate-900 font-mono text-sm sm:text-base leading-relaxed">
                {words[selectedWordIndex].analysisEs}
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wide block mb-1">
                Քերականական վերլուծություն (Հայերեն)՝
              </span>
              <p className="text-amber-950 text-sm sm:text-base leading-relaxed font-medium">
                {words[selectedWordIndex].analysisArm}
              </p>
            </div>
          </div>
        </div>
      )}

      {explanationArm && (
        <div className="text-sm text-slate-700 bg-amber-50/50 p-3.5 rounded-xl border border-amber-100">
          <strong className="text-amber-950 mr-1.5">Ուշադրություն՝</strong>
          {explanationArm}
        </div>
      )}
    </div>
  );
};
