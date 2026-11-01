/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface WordAnalysis {
  word: string;
  translationArm: string;
  analysisEs: string;
  analysisArm: string;
  category: string;
  notes?: string;
}

export interface SentenceAnalysis {
  id: string;
  sentenceEs: string;
  sentenceArm: string;
  explanationArm?: string;
  words: WordAnalysis[];
}

export interface GrammarCategory {
  id: string;
  nameEs: string;
  nameArm: string;
  whatToAnalyzeEs: string;
  whatToAnalyzeArm: string;
  detailsEs: string[];
  detailsArm: string[];
  exampleEs: string;
  exampleAnalysisEs: string;
  exampleArm: string;
  exampleAnalysisArm: string;
  tags: string[];
}

export interface VerbPersonRow {
  personaEs: string;
  personaArm: string;
  singularEs: string;
  singularArm: string;
  pluralEs: string;
  pluralArm: string;
}

export interface LiteratureQuestion {
  id: number;
  exerciseTitleEs: string;
  exerciseTitleArm: string;
  exerciseType: 'mcq' | 'genre' | 'true_false' | 'device' | 'metaphor' | 'poem' | 'text' | 'correction' | 'production';
  questionEs: string;
  questionArm: string;
  options?: { key: string; textEs: string; textArm?: string }[];
  correctAnswer: string;
  explanationEs: string;
  explanationArm: string;
  // Extra metadata for specific exercises
  extraInfo?: {
    termA?: string;
    termB?: string;
    structure?: string;
    soundRepeated?: string;
    correctedSentence?: string;
    normalOrder?: string;
    subgenre?: string;
    syllables?: string;
    rhyme?: string;
  };
}

export interface LiteraryDeviceSummary {
  conceptEs: string;
  howToRecognizeEs: string;
  howToRecognizeArm: string;
  exampleEs?: string;
  exampleArm?: string;
}

export interface OralTemplate {
  formulaEs: string;
  formulaArm: string;
  exampleEs: string;
}
