/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function speakSpanish(text: string) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Clean text from punctuation if needed
  const cleaned = text.replace(/^[¡¿«"]+|[!?»"]+$/g, '').trim();
  const utterance = new SpeechSynthesisUtterance(cleaned || text);
  utterance.lang = 'es-ES';
  utterance.rate = 0.9; // Slightly slower for language learners

  // Try to pick a natural Spanish voice
  const voices = window.speechSynthesis.getVoices();
  const spanishVoice = voices.find(v => v.lang.startsWith('es') && !v.name.includes('Google') === false) ||
                       voices.find(v => v.lang.startsWith('es'));
  if (spanishVoice) {
    utterance.voice = spanishVoice;
  }

  window.speechSynthesis.speak(utterance);
}
