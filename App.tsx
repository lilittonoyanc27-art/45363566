/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MorphologySection } from './MorphologySection';
import { LiteratureSection } from './LiteratureSection';
import { ExamMode } from './ExamMode';
import { FlashcardsMode } from './FlashcardsMode';
import { SearchModal } from './SearchModal';
import { Search, Volume2, BookMarked, Sparkles, Check, Globe, HelpCircle } from 'lucide-react';

export default function App() {
  const [activeMainTab, setActiveMainTab] = useState<'morphology' | 'literature' | 'exam' | 'flashcards'>('morphology');
  const [alwaysShowTranslation, setAlwaysShowTranslation] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [fontScale, setFontScale] = useState<'md' | 'lg' | 'xl'>('lg');

  // Sync font size class on root html element
  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-scale-md', 'font-scale-lg', 'font-scale-xl');
    root.classList.add(`font-scale-${fontScale}`);
  }, [fontScale]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* TOP BAR CONTRACT: Zone 1 (Brand) - Zone 2 (4 Links) - Zone 3 (1 Action) */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single element brand wordmark */}
          <button
            type="button"
            onClick={() => setActiveMainTab('morphology')}
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 font-display flex items-center gap-2 cursor-pointer"
          >
            <span className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-xs">
              7.º
            </span>
            <span>Քերականական վերլուծություն & Գրականություն</span>
          </button>

          {/* Zone 2: 4 clean single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              type="button"
              onClick={() => setActiveMainTab('morphology')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeMainTab === 'morphology' ? 'text-slate-900 font-bold border-b-2 border-amber-500 pb-0.5' : ''
              }`}
            >
              1. Ձևաբանություն (Teoría)
            </button>
            <button
              type="button"
              onClick={() => setActiveMainTab('literature')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeMainTab === 'literature' ? 'text-slate-900 font-bold border-b-2 border-amber-500 pb-0.5' : ''
              }`}
            >
              2. Գրականություն (100 հարց)
            </button>
            <button
              type="button"
              onClick={() => setActiveMainTab('exam')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeMainTab === 'exam' ? 'text-slate-900 font-bold border-b-2 border-amber-500 pb-0.5' : ''
              }`}
            >
              3. Քննության Սիմուլյատոր
            </button>
            <button
              type="button"
              onClick={() => setActiveMainTab('flashcards')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeMainTab === 'flashcards' ? 'text-slate-900 font-bold border-b-2 border-amber-500 pb-0.5' : ''
              }`}
            >
              4. Հիշաքարտեր (Tarjetas)
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action (Search & Font Size switch) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Font size switcher */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setFontScale('md')}
                className={`px-2 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  fontScale === 'md' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Սովորական տառաչափ (18px)"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontScale('lg')}
                className={`px-2 py-1 text-xs font-bold rounded transition-colors cursor-pointer ${
                  fontScale === 'lg' ? 'bg-white text-amber-700 shadow-xs ring-1 ring-amber-300' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Մեծ տառաչափ (19.5px)"
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => setFontScale('xl')}
                className={`px-2 py-1 text-xs font-extrabold rounded transition-colors cursor-pointer ${
                  fontScale === 'xl' ? 'bg-white text-amber-800 shadow-xs ring-1 ring-amber-400' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Շատ մեծ տառաչափ (21px)"
              >
                A++
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Որոնում</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto px-4 py-2 border-t border-slate-100 bg-slate-50 text-xs">
          <button
            type="button"
            onClick={() => setActiveMainTab('morphology')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium ${
              activeMainTab === 'morphology' ? 'bg-amber-600 text-white font-semibold' : 'text-slate-600'
            }`}
          >
            1. Ձևաբանություն
          </button>
          <button
            type="button"
            onClick={() => setActiveMainTab('literature')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium ${
              activeMainTab === 'literature' ? 'bg-amber-600 text-white font-semibold' : 'text-slate-600'
            }`}
          >
            2. Գրականություն (100)
          </button>
          <button
            type="button"
            onClick={() => setActiveMainTab('exam')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium ${
              activeMainTab === 'exam' ? 'bg-amber-600 text-white font-semibold' : 'text-slate-600'
            }`}
          >
            3. Սիմուլյատոր
          </button>
          <button
            type="button"
            onClick={() => setActiveMainTab('flashcards')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium ${
              activeMainTab === 'flashcards' ? 'bg-amber-600 text-white font-semibold' : 'text-slate-600'
            }`}
          >
            4. Քարտեր
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Banner with Interactive Controls */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <span>7.º CURSO</span>
                <span>·</span>
                <span>LENGUA CASTELLANA Y LITERATURA</span>
                <span>·</span>
                <span>ԱՐՄ ↔ ԻՍՊ</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display leading-tight text-white text-balance">
                Քերականական վերլուծություն & 100 քննական առաջադրանք
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Ինտերակտիվ ուսումնական ձեռնարկ. Սեղմիր ցանկացած իսպաներեն բառի, նախադասության կամ կանոնի վրա՝ հայերեն թարգմանությունն ու քերականական վերլուծությունը բացելու համար։
              </p>
            </div>

            {/* Translation & Font size mode control box */}
            <div className="bg-white/10 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-white/15 space-y-3.5 shrink-0 md:max-w-xs">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                Կարգավորումներ & Տառաչափ
              </span>

              {/* Font size picker */}
              <div className="space-y-1">
                <span className="text-xs text-slate-300 block">Տառաչափ (Font size):</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setFontScale('md')}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors text-center ${
                      fontScale === 'md' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Սովորական
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontScale('lg')}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors text-center ${
                      fontScale === 'lg' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Մեծ (A+)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontScale('xl')}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors text-center ${
                      fontScale === 'xl' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Շատ մեծ
                  </button>
                </div>
              </div>

              {/* Translation mode control switch */}
              <div className="border-t border-white/10 pt-3">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={alwaysShowTranslation}
                    onChange={(e) => setAlwaysShowTranslation(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded text-amber-500 focus:ring-amber-400"
                  />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    {alwaysShowTranslation
                      ? 'Միշտ ցուցադրել հայերեն թարգմանությունները'
                      : 'Սեղմել իսպաներենին՝ հայերենը բացելու համար'}
                  </span>
                </label>
              </div>

              <div className="text-[11px] text-slate-300 border-t border-white/10 pt-2 leading-relaxed">
                💡 Յուրաքանչյուր բառի մոտ կա բարձրախոս (Speaker icon)՝ իսպաներեն արտասանությունը լսելու համար։
              </div>
            </div>
          </div>
        </div>

        {/* Tab View Router */}
        {activeMainTab === 'morphology' && (
          <MorphologySection alwaysShowTranslation={alwaysShowTranslation} />
        )}

        {activeMainTab === 'literature' && (
          <LiteratureSection alwaysShowTranslation={alwaysShowTranslation} />
        )}

        {activeMainTab === 'exam' && (
          <ExamMode alwaysShowTranslation={alwaysShowTranslation} />
        )}

        {activeMainTab === 'flashcards' && (
          <FlashcardsMode />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>7.º Curso — Análisis Morfológico y Literatura Española (Հայերեն թարգմանություններով)</span>
          <div className="flex items-center gap-4 text-slate-600">
            <button
              type="button"
              onClick={() => setActiveMainTab('morphology')}
              className="hover:text-slate-900 cursor-pointer"
            >
              Ձևաբանություն
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setActiveMainTab('literature')}
              className="hover:text-slate-900 cursor-pointer"
            >
              Գրականություն (100)
            </button>
            <span>·</span>
            <button
              type="button"
              onClick={() => setActiveMainTab('exam')}
              className="hover:text-slate-900 cursor-pointer"
            >
              Սիմուլյատոր
            </button>
          </div>
        </div>
      </footer>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
