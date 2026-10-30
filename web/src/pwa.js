import { useEffect, useState } from 'react';

export function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

export function useInstallPrompt() {
  const [prompt, setPrompt] = useState(null);
  useEffect(() => {
    const onBip = (e) => { e.preventDefault(); setPrompt(e); };
    window.addEventListener('beforeinstallprompt', onBip);
    return () => window.removeEventListener('beforeinstallprompt', onBip);
  }, []);
  return prompt;
}
