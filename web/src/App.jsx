import { Suspense, lazy, useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useStore, patch, overall } from './store.js';
import { QUIZ } from './data/content.js';
import { useInstallPrompt } from './pwa.js';
import { Page, Toasts, Confetti, useToasts, Btn } from './ui.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import Palette from './components/Palette.jsx';
import Skeleton from './components/Skeleton.jsx';

const Home = lazy(() => import('./views/Home.jsx'));
const Learn = lazy(() => import('./views/Learn.jsx'));
const Cases = lazy(() => import('./views/Cases.jsx'));
const CaseDetail = lazy(() => import('./views/CaseDetail.jsx'));
const Quiz = lazy(() => import('./views/Quiz.jsx'));
const Progress = lazy(() => import('./views/Progress.jsx'));
const Syllabus = lazy(() => import('./views/Syllabus.jsx'));

const NAV = [
  ['home', 'Home'], ['learn', 'Learn'], ['cases', 'Cases'], ['quiz', 'Quiz'], ['syllabus', 'Map'], ['progress', 'Progress']
];

export default function App() {
  const s = useStore();
  const [toasts, toast] = useToasts();
  const [confettiAt, setConfettiAt] = useState(0);
  const bip = useInstallPrompt();
  const [installDismissed, setInstallDismissed] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const togglePalette = useCallback(() => setPaletteOpen(o => !o), []);
  const fire = () => setConfettiAt(Date.now());

  const route = s.route;
  const caseOpen = s.screen;
  const go = (r) => patch({ route: r, screen: null });

  return (
    <ErrorBoundary>
      <div className="min-h-screen font-sans text-ink"
        style={{ background: 'radial-gradient(1100px 500px at 85% -10%, rgba(56,189,248,.14), transparent 60%), radial-gradient(900px 500px at -10% 20%, rgba(167,139,250,.12), transparent 60%), radial-gradient(700px 600px at 50% 110%, rgba(52,211,153,.08), transparent 60%), linear-gradient(180deg,#0a101f,#070b14 40%)', backgroundAttachment: 'fixed' }}>
        <header className="sticky top-0 z-50 border-b border-white/10 bg-base-950/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-2.5">
            <button onClick={() => go('home')} className="mr-auto flex items-center gap-2.5">
              <span className="h-3 w-3 rounded-full shadow-[0_0_12px_#34d399]" style={{ background: 'radial-gradient(circle at 35% 35%,#a7f3d0,#10b981)' }} />
              <span className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-lg font-extrabold tracking-tight text-transparent">
                Foot &amp; Ankle X-Ray Coach
              </span>
              <span className="hidden text-[10px] font-medium text-muted sm:block">podiatry education · AU · education only</span>
            </button>
            {NAV.map(([id, label]) => (
              <button key={id} onClick={() => go(id)}
                className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-all ${route === id ? 'border-transparent bg-gradient-to-r from-sky-400 to-cyan-400 font-bold text-base-950 shadow-glow' : 'border-white/10 bg-base-700/80 text-ink hover:border-sky-400/50 hover:text-sky-300'}`}>
                {label}
              </button>
            ))}
            <button onClick={togglePalette}
              title="Command palette (Ctrl+K)"
              className="hidden rounded-full border border-white/10 bg-base-700/80 px-3 py-1.5 text-xs text-muted hover:border-sky-400/50 md:block">
              ⌘K
            </button>
            <span className="hidden rounded-full border border-white/10 bg-base-700/80 px-3 py-1.5 text-xs text-muted md:block">
              <b className="text-emerald-300">{Math.round(overall(QUIZ) * 100)}%</b> mastery
            </span>
          </div>
        </header>

        <div className="mx-auto max-w-6xl px-4">
          <div className="mt-3 rounded-xl border border-amber-400/30 bg-gradient-to-r from-amber-950/80 to-amber-950/40 px-4 py-2.5 text-[13px] text-amber-200">
            <b>Education only.</b> Study aid for podiatry students — <b>not a medical device</b>; it does not diagnose, treat, cure or prevent any condition.
            All images are real clinical radiographs from Wikimedia Commons under open licences (CC0 / public domain / CC BY / CC BY-SA), attribution shown per case.
            Never enter real patient information. Progress stays on this device.
          </div>
        </div>

        <Suspense fallback={<Skeleton />}>
          <AnimatePresence mode="wait">
            {caseOpen
              ? <CaseDetail key={caseOpen} caseId={caseOpen} toast={toast} fire={fire} onBack={() => patch({ screen: null })} />
              : route === 'home' && <Page key="home"><Home toast={toast} /></Page>
            }
            {!caseOpen && route === 'learn' && <Page key="learn"><Learn toast={toast} /></Page>}
            {!caseOpen && route === 'cases' && <Page key="cases"><Cases toast={toast} /></Page>}
            {!caseOpen && route === 'quiz' && <Page key="quiz"><Quiz toast={toast} fire={fire} /></Page>}
            {!caseOpen && route === 'syllabus' && <Page key="syllabus"><Syllabus toast={toast} /></Page>}
            {!caseOpen && route === 'progress' && <Page key="progress"><Progress toast={toast} /></Page>}
          </AnimatePresence>
        </Suspense>

        {bip && !installDismissed && (
          <div className="fixed bottom-4 left-4 z-[180] flex items-center gap-3 rounded-2xl border border-sky-400/40 bg-base-800/95 px-4 py-3 shadow-card backdrop-blur">
            <span className="text-sm text-ink">Install the app for offline use on this device?</span>
            <Btn className="!px-3 !py-1.5 !text-xs" onClick={() => { bip.prompt(); bip.userChoice.then(() => setInstallDismissed(true)); }}>Install</Btn>
            <button onClick={() => setInstallDismissed(true)} className="text-muted hover:text-ink" aria-label="Dismiss">✕</button>
          </div>
        )}

        <Palette open={paletteOpen} onToggle={togglePalette} onClose={() => setPaletteOpen(false)} />
        <Toasts toasts={toasts} />
        <Confetti fire={confettiAt} />
      </div>
    </ErrorBoundary>
  );
}
