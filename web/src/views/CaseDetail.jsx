import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore, patch, patchDeep, addXp, awardBadge, srsUpdate, XP } from '../store.js';
import { QUIZ, MODULES } from '../data/content.js';
import { CASES, useCaseImage, useCompareImage } from '../data/cases.js';
import Viewer from '../components/Viewer.jsx';
import { Card, Tag, Btn, DiffTag, ProgressBar } from '../ui.jsx';

const STEPS = ['Film review', 'Case questions', 'Your report', 'Debrief'];

const RUBRIC = [
  ['Technique stated (views, WB status, quality)', 'technique'],
  ['Systematic findings described', 'findings?'],
  ['Impression / diagnosis given', 'impression'],
  ['Recommendation / next step', 'recommend']
];

export default function CaseDetail({ caseId, toast, fire, onBack }) {
  const s = useStore();
  const c = CASES.find(x => x.id === caseId);
  const img = useCaseImage(c || {});
  const cmpImg = useCompareImage(c || {});
  const [step, setStep] = useState(0);
  const [showHotspots, setShowHotspots] = useState(true);
  const [tools, setTools] = useState({ loupe: false, measure: false });
  const [mode, setMode] = useState('guided'); // guided | exam
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showExpert, setShowExpert] = useState(false);
  const [answered, setAnswered] = useState({});
  const [reflection, setReflection] = useState('');
  const [finished, setFinished] = useState(() => s.done.includes(caseId));

  const found = (c && s.found[caseId]) || {};
  const foundCount = Object.keys(found).length;
  const report = (c && s.reports[caseId]) || '';
  const caseQuiz = useMemo(() => (c ? QUIZ.filter(q => q.tag === c.quizTag).slice(0, mode === 'exam' ? 5 : 3) : []), [c, mode]);
  const linkedModule = useMemo(() => {
    if (!c) return null;
    const tag = c.quizTag;
    return MODULES.find(m => (m.refs || '').includes(tag) || m.tag === tag || (m.html || '').toLowerCase().includes(tag)) || MODULES[0];
  }, [c]);

  if (!c) return null;

  const allAnswered = caseQuiz.length > 0 && caseQuiz.every((_, qi) => answered[qi] !== undefined);

  const reveal = (i) => {
    if (found[i]) return;
    patchDeep('found', { [caseId]: { ...found, [i]: true } });
    addXp(XP.hotspot, 'hotspot');
    toast(`Finding located: ${c.hotspots[i].label} (+${XP.hotspot} XP)`);
    if (Object.keys({ ...found, [i]: true }).length === c.hotspots.length) {
      awardBadge('all_' + caseId, 'Full sweep', `Found every finding in “${c.title}”`);
      toast('All findings located — nice systematic sweep.');
    }
  };

  const hint = () => {
    const next = c.hotspots.findIndex((_, i) => !found[i]);
    if (next < 0) { toast('All findings already located.'); return; }
    setHintsUsed(h => h + 1);
    const h = c.hotspots[next];
    toast(`Hint ${hintsUsed + 1}: ${h.hint || 'scan the region the marker indicates'}`);
  };

  const answer = (qi, oi) => {
    if (answered[qi] !== undefined) return;
    const q = caseQuiz[qi];
    const ok = oi === q.a;
    setAnswered(a => ({ ...a, [qi]: oi }));
    srsUpdate(q.q, ok);
    addXp(ok ? XP.quizCorrect : XP.quizWrong, ok ? 'correct' : 'review');
    toast(ok ? `Correct (+${XP.quizCorrect} XP)` : `Not quite — explanation shown below (+${XP.quizWrong} XP)`);
  };

  const complete = () => {
    if (finished) return;
    setFinished(true);
    patch({ done: [...s.done, caseId] });
    const bonus = mode === 'exam' ? 25 : 0;
    addXp(XP.caseComplete + bonus, 'case');
    awardBadge('case_' + caseId, 'Case completed', c.title);
    if (mode === 'exam') awardBadge('exam_' + caseId, 'Exam-mode clear', `Completed “${c.title}” in exam mode`);
    if (s.done.length + 1 >= CASES.length) awardBadge('all_cases', 'Library master', 'Completed every case in the library');
    fire(1);
    toast(`Case complete: ${c.title} (+${XP.caseComplete + bonus} XP)`);
  };

  const rubricHits = RUBRIC.map(([label, pattern]) => report.trim().length >= 20 && new RegExp(pattern, 'i').test(report));

  return (
    <motion.main initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
      className="mx-auto w-full max-w-6xl px-4 pb-24 pt-6">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Btn variant="secondary" onClick={onBack}>← Library</Btn>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="truncate text-lg font-extrabold sm:text-xl">{c.title}</h1>
            <Tag tone="topic">{c.topic}</Tag><DiffTag d={c.diff} />
            {finished && <Tag tone="done">✓ completed</Tag>}
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <button onClick={() => setMode('guided')}
            className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-all ${mode === 'guided' ? 'border-transparent bg-gradient-to-r from-emerald-400 to-teal-400 text-base-950' : 'border-white/10 bg-base-700/80 text-muted'}`}>
            Guided mode
          </button>
          <button onClick={() => { setMode('exam'); setShowHotspots(false); setAnswered({}); setStep(0); }}
            className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-all ${mode === 'exam' ? 'border-transparent bg-gradient-to-r from-amber-300 to-pink-400 text-base-950' : 'border-white/10 bg-base-700/80 text-muted'}`}>
            Exam mode
          </button>
        </div>
      </div>

      {mode === 'exam' && (
        <div className="mb-4 rounded-xl border border-amber-400/40 bg-amber-500/10 px-4 py-2.5 text-[13px] text-amber-200">
          <b>Exam mode:</b> markers hidden, 5 questions, no hints, +25 XP bonus on completion. Scaffolding is off — this mirrors assessment conditions.
        </div>
      )}

      <div className="mb-5 flex flex-wrap items-center gap-2">
        {STEPS.map((st, i) => (
          <div key={st} className="flex items-center gap-2">
            <button onClick={() => setStep(i)}
              className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-all ${i === step ? 'border-transparent bg-gradient-to-r from-sky-400 to-cyan-400 text-base-950 shadow-glow' : i < step ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300' : 'border-white/10 bg-base-700/80 text-muted'}`}>
              {i + 1}. {st}
            </button>
            {i < STEPS.length - 1 && <span className="text-muted">→</span>}
          </div>
        ))}
        <span className="ml-auto text-xs text-muted">{foundCount}/{c.hotspots.length} findings</span>
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid gap-5 lg:grid-cols-[1fr_320px]">
            <div>
              <Viewer
                img={img} imgW={c.imgW} imgH={c.imgH}
                hotspots={c.hotspots} found={found} onReveal={reveal} showHotspots={showHotspots && mode === 'guided'}
                tools={{
                  loupe: tools.loupe, measure: tools.measure,
                  toggleLoupe: () => setTools(t => ({ ...t, loupe: !t.loupe })),
                  toggleMeasure: () => setTools(t => ({ ...t, measure: !t.measure })),
                  toggleHotspots: () => setShowHotspots(v => !v)
                }}
              />
              {cmpImg && (
                <div className="mt-4">
                  <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-muted">Comparison view</div>
                  <Viewer img={cmpImg} imgW={c.imgW} imgH={c.imgH} hotspots={[]} found={{}} onReveal={() => {}} showHotspots={false}
                    tools={{ loupe: false, measure: false, toggleLoupe: () => {}, toggleMeasure: () => {}, toggleHotspots: () => {} }} />
                </div>
              )}
              <Card className="mt-4 border-sky-400/20 bg-sky-500/5">
                <div className="mb-1 text-[11px] font-bold uppercase tracking-wide text-sky-300">Clinical stem</div>
                <p className="text-[15px] leading-relaxed">{c.stem}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">Image: {c.attr}</p>
              </Card>
            </div>
            <div className="space-y-4">
              <Card>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-extrabold">Findings to locate</span>
                  {mode === 'guided' && <Btn variant="ghost" className="!px-3 !py-1 !text-xs" onClick={hint}>💡 Hint</Btn>}
                </div>
                <ProgressBar value={c.hotspots.length ? foundCount / c.hotspots.length * 100 : 0} className="mb-3" />
                <div className="space-y-2">
                  {c.hotspots.map((h, i) => (
                    <div key={i} className={`rounded-xl border p-3 text-[13px] transition-colors ${found[i] ? 'border-emerald-400/40 bg-emerald-500/10' : 'border-white/10 bg-base-700/60'}`}>
                      <div className="flex items-center gap-2 font-bold">
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] ${found[i] ? 'bg-emerald-400 text-base-950' : 'bg-sky-400/30 text-sky-200'}`}>{found[i] ? '✓' : i + 1}</span>
                        {found[i] ? h.label : (mode === 'exam' ? 'Hidden in exam mode — find it on the film' : 'Undiscovered finding — tap the pulsing marker on the film')}
                      </div>
                      {found[i] && <p className="mt-1.5 leading-relaxed text-ink/85">{h.expl}</p>}
                    </div>
                  ))}
                </div>
                <Btn className="mt-3 w-full" onClick={() => setStep(1)} disabled={mode === 'guided' && foundCount === 0}>
                  {mode === 'guided' && foundCount === 0 ? 'Locate at least one finding to continue' : 'Continue to case questions →'}
                </Btn>
              </Card>
              {linkedModule && (
                <Card className="border-violet-400/30 bg-violet-500/5">
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-wide text-violet-300">Linked lesson</div>
                  <p className="text-[13px] leading-relaxed text-ink/85">{linkedModule.title}</p>
                  <Btn variant="secondary" className="mt-2 !px-3 !py-1.5 !text-xs" onClick={() => patch({ route: 'learn', screen: null })}>Open in Learn</Btn>
                </Card>
              )}
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-3xl space-y-4">
            <Card className="border-sky-400/20 bg-sky-500/5">
              <p className="text-[15px] leading-relaxed">{c.stem}</p>
            </Card>
            {caseQuiz.map((q, qi) => (
              <Card key={qi}>
                <div className="mb-3 text-[15px] font-semibold leading-relaxed">{qi + 1}. {q.q}</div>
                <div className="grid gap-2">
                  {q.opts.map((o, oi) => {
                    const sel = answered[qi] === oi;
                    const correct = q.a === oi;
                    return (
                      <button key={oi} onClick={() => answer(qi, oi)} disabled={answered[qi] !== undefined}
                        className={`rounded-xl border px-3.5 py-2.5 text-left text-sm transition-all ${
                          answered[qi] !== undefined
                            ? correct ? 'border-emerald-400/60 bg-emerald-500/15 font-semibold text-emerald-200'
                              : sel ? 'border-rose-400/60 bg-rose-500/15 text-rose-200' : 'border-white/10 bg-base-700/50 text-muted'
                            : 'border-white/10 bg-base-700/70 hover:border-sky-400/50 hover:bg-base-700'
                        }`}>
                        <span className="mr-2 font-mono text-xs opacity-70">{'ABCD'[oi]}</span>{o}
                        {answered[qi] !== undefined && correct && ' ✓'}
                        {answered[qi] !== undefined && sel && !correct && ' ✗'}
                      </button>
                    );
                  })}
                </div>
                {answered[qi] !== undefined && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 rounded-xl border border-sky-400/30 bg-sky-500/10 p-3 text-[13.5px] leading-relaxed">
                    <b>Why:</b> {q.expl}
                  </motion.div>
                )}
              </Card>
            ))}
            <div className="flex gap-3">
              <Btn variant="secondary" onClick={() => setStep(0)}>← Film</Btn>
              <Btn onClick={() => setStep(2)} disabled={!allAnswered}>Write your report →</Btn>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid gap-5 lg:grid-cols-2">
            <Card>
              <div className="mb-2 text-sm font-extrabold">Your structured report</div>
              <p className="mb-2 text-xs text-muted">Technique → Findings → Impression → Recommendation</p>
              <textarea value={report} rows={12} placeholder="TECHNIQUE: …&#10;FINDINGS: …&#10;IMPRESSION: …&#10;RECOMMENDATION: …"
                onChange={e => patchDeep('reports', { [caseId]: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-base-950/80 p-3 font-mono text-[13px] leading-relaxed outline-none focus:border-sky-400/60" />
              <div className="mt-3 space-y-1.5">
                <div className="text-[11px] font-bold uppercase tracking-wide text-muted">Report rubric — live check</div>
                {RUBRIC.map(([label], i) => (
                  <div key={i} className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-xs ${rubricHits[i] ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200' : 'border-white/10 bg-base-700/50 text-muted'}`}>
                    <span className={`flex h-4 w-4 items-center justify-center rounded-full text-[10px] ${rubricHits[i] ? 'bg-emerald-400 text-base-950' : 'bg-base-600 text-muted'}`}>{rubricHits[i] ? '✓' : ''}</span>
                    {label}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-3">
                <Btn variant="secondary" onClick={() => setStep(1)}>← Questions</Btn>
                <Btn onClick={() => setStep(3)} disabled={report.trim().length < 20}>Compare &amp; debrief →</Btn>
              </div>
            </Card>
            <Card>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-extrabold">Expert report</span>
                <Btn variant="ghost" className="!px-3 !py-1 !text-xs" onClick={() => setShowExpert(v => !v)}>{showExpert ? 'Hide' : 'Reveal'}</Btn>
              </div>
              {showExpert
                ? <pre className="whitespace-pre-wrap font-mono text-[12.5px] leading-relaxed text-emerald-200/90">{c.report}</pre>
                : <p className="text-sm text-muted">Write your own report first, then reveal the expert version to self-assess structure and terminology.</p>}
            </Card>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="grid gap-5 lg:grid-cols-2">
            <div className="space-y-4">
              <Card>
                <div className="mb-2 text-sm font-extrabold text-violet-300">Differential diagnosis</div>
                <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-ink/90">
                  {c.ddx.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </Card>
              <Card>
                <div className="mb-2 text-sm font-extrabold text-amber-300">Clinical pearls</div>
                <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-ink/90">
                  {c.pearls.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </Card>
              <Card>
                <div className="mb-2 text-sm font-extrabold text-emerald-300">Key teaching points</div>
                <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-ink/90">
                  {c.teach.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
                <p className="mt-3 text-xs text-muted">Linked lesson: {c.refs.join(' · ')}</p>
                <p className="mt-1 text-xs text-muted">Image: {c.attr}</p>
              </Card>
              <Card>
                <div className="mb-2 text-sm font-extrabold text-sky-300">Reflection</div>
                <textarea value={reflection} rows={3} placeholder="What would you do differently next time? What will you remember?"
                  onChange={e => setReflection(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-base-950/80 p-3 text-[13px] leading-relaxed outline-none focus:border-sky-400/60" />
              </Card>
            </div>
            <div>
              <Card className="border-emerald-400/30 bg-emerald-500/5">
                <div className="mb-2 text-sm font-extrabold">Finish this case</div>
                <p className="mb-3 text-sm leading-relaxed text-muted">
                  Marking complete records +{XP.caseComplete}{mode === 'exam' ? ' + 25 exam bonus' : ''} XP, updates your streak and mastery for “{c.quizTag}”.
                  {hintsUsed > 0 && mode === 'guided' && <span className="block text-xs text-amber-300/80">Hints used this session: {hintsUsed}</span>}
                </p>
                {finished
                  ? <Tag tone="done">✓ This case is already completed</Tag>
                  : <Btn onClick={complete}>Mark case complete (+{XP.caseComplete}{mode === 'exam' ? 25 : 0} XP)</Btn>}
                <div className="mt-3 flex flex-wrap gap-2">
                  <Btn variant="secondary" onClick={onBack}>Back to library</Btn>
                  <Btn variant="ghost" onClick={() => { const i = CASES.findIndex(x => x.id === caseId); patch({ screen: CASES[(i + 1) % CASES.length].id }); setStep(0); setAnswered({}); setShowExpert(false); setMode('guided'); setShowHotspots(true); }}>Next case →</Btn>
                </div>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
