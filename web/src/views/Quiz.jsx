import { useMemo, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore, patch, srsUpdate, addXp, awardBadge, dueCount, XP } from '../store.js';
import { QUIZ, MODULES } from '../data/content.js';
import { CASES } from '../data/cases.js';
import { Card, Tag, Btn, ProgressBar } from '../ui.jsx';

function shuffle(a) { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; } return r; }

export default function Quiz({ toast, fire }) {
  const s = useStore();
  const [mode, setMode] = useState(null); // null | 'practice' | 'osce' | 'anatomy'
  const [session, setSession] = useState(null); // {qs, i, answers[], conf[], done}
  const [osce, setOsce] = useState(null); // {qs, i, left, score, done}
  const [osceResult, setOsceResult] = useState(null);
  const [conf, setConf] = useState(3);

  const due = useMemo(() => QUIZ.filter(q => { const st = s.quiz[q.q]; return st && st.due <= Date.now(); }), [s.quiz]);
  const tags = useMemo(() => [...new Set(QUIZ.map(q => q.tag))], []);

  const startPractice = (pool) => {
    setSession({ qs: shuffle(pool).slice(0, 10), i: 0, answers: [], conf: [], done: false });
    setMode('practice');
  };
  const startOsce = () => {
    const qs = shuffle(QUIZ).slice(0, 10);
    setOsce({ qs, i: 0, left: 600, score: 0, answers: [] });
    setOsceResult(null);
    setMode('osce');
  };
  const startAnatomy = () => {
    const withHs = CASES.filter(c => c.hotspots.length);
    setSession({ qs: withHs.map(c => ({
      q: `On this ${c.topic.toLowerCase()} film (${c.title}), tap the marker for: ${c.hotspots[0].label}`,
      opts: c.hotspots.map(h => h.label),
      a: 0, tag: c.quizTag, expl: c.hotspots[0].expl, imgCase: c
    })), i: 0, answers: [], conf: [], done: false });
    setMode('anatomy');
  };

  // OSCE timer
  const osceRef = useRef(null);
  useEffect(() => {
    if (!osce || osceResult) return;
    osceRef.current = setInterval(() => {
      setOsce(o => {
        if (!o) return o;
        if (o.left <= 1) { clearInterval(osceRef.current); return { ...o, left: 0 }; }
        return { ...o, left: o.left - 1 };
      });
    }, 1000);
    return () => clearInterval(osceRef.current);
  }, [osce !== null, osceResult]);
  useEffect(() => {
    if (osce && osce.left === 0 && !osceResult) finishOsce(osce);
  }, [osce?.left]);

  const finishOsce = (o) => {
    const res = { score: o.score, total: o.qs.length, t: Date.now() };
    setOsceResult(res);
    patch({ profile: { ...s.profile, osce: [...s.profile.osce, res] } });
    const gained = res.score * XP.oscePoint;
    addXp(gained, 'osce');
    if (res.score >= 8) { awardBadge('osce_' + res.t, `OSCE ${res.score}/10`, 'Scored 8+ in a timed OSCE drill'); fire(1); }
    if (o.answers.every(a => a.ok)) awardBadge('perfect_' + res.t, 'Flawless OSCE', '10/10 in a timed drill');
    toast(`OSCE finished: ${res.score}/10 (+${gained} XP)`);
  };

  const answerOsce = (oi) => {
    const q = osce.qs[osce.i];
    const ok = oi === q.a;
    const answers = [...osce.answers, { ok }];
    const score = osce.score + (ok ? 1 : 0);
    if (osce.i + 1 >= osce.qs.length) {
      const final = { ...osce, answers, score };
      setOsce(null);
      finishOsce(final);
    } else setOsce({ ...osce, i: osce.i + 1, answers, score });
  };

  const answerPractice = (oi, conf) => {
    const q = session.qs[session.i];
    const ok = oi === q.a;
    srsUpdate(q.q, ok);
    addXp(ok ? XP.quizCorrect : XP.quizWrong, ok ? 'correct' : 'review');
    const answers = [...session.answers, { oi, ok, conf }];
    if (session.i + 1 >= session.qs.length) {
      setSession({ ...session, answers, done: true });
      const correct = answers.filter(a => a.ok).length;
      if (correct === answers.length) { awardBadge('session_' + Date.now(), 'Perfect round', 'All correct in a practice set'); fire(1); }
      toast(`Set complete: ${correct}/${answers.length}`);
    } else setSession({ ...session, i: session.i + 1, answers });
  };

  /* ---------- render ---------- */
  if (!mode) {
    return (
      <div>
        <h1 className="mb-1 text-2xl font-black tracking-tight">Quiz &amp; drills</h1>
        <p className="mb-5 text-sm text-muted">{QUIZ.length} questions · spaced repetition picks what is due · {due.length} due now</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="flex flex-col">
            <div className="text-base font-extrabold text-sky-300">Practice — spaced repetition</div>
            <p className="mb-3 mt-1 flex-1 text-sm leading-relaxed text-muted">10 mixed questions, prioritising what the SRS says is due. Rate your confidence to calibrate yourself.</p>
            <Btn onClick={() => startPractice(due.length >= 10 ? due : QUIZ)}>{due.length > 0 ? `Review ${due.length} due + top up` : 'Practice 10'}</Btn>
          </Card>
          <Card className="flex flex-col">
            <div className="text-base font-extrabold text-amber-300">OSCE drill — timed</div>
            <p className="mb-3 mt-1 flex-1 text-sm leading-relaxed text-muted">10 questions in 10 minutes, exam-style. +{XP.oscePoint} XP per correct answer. Best for exam prep.</p>
            <Btn variant="secondary" onClick={startOsce}>Start 10-min OSCE</Btn>
            {s.profile.osce.length > 0 && <p className="mt-2 text-xs text-muted">Best: {Math.max(...s.profile.osce.map(o => o.score))}/10 · attempts: {s.profile.osce.length}</p>}
          </Card>
          <Card className="flex flex-col">
            <div className="text-base font-extrabold text-emerald-300">Anatomy drill — spot it</div>
            <p className="mb-3 mt-1 flex-1 text-sm leading-relaxed text-muted">Name the labelled structure on real radiographs. Trains pattern recognition on actual films.</p>
            <Btn variant="secondary" onClick={startAnatomy}>Start anatomy drill</Btn>
          </Card>
        </div>
        <h2 className="mb-3 mt-8 text-lg font-extrabold">By topic</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tags.map(t => {
            const n = QUIZ.filter(q => q.tag === t).length;
            return (
              <Card key={t} className="flex items-center justify-between">
                <div>
                  <Tag tone="topic">{t}</Tag>
                  <div className="mt-1 text-xs text-muted">{n} questions</div>
                </div>
                <Btn variant="ghost" className="!px-3 !py-1.5 !text-xs" onClick={() => startPractice(QUIZ.filter(q => q.tag === t))}>Practice</Btn>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  if (mode === 'osce') {
    if (osceResult) {
      return (
        <Card className="mx-auto max-w-md py-10 text-center">
          <div className="bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-6xl font-black text-transparent">{osceResult.score}/10</div>
          <p className="mt-2 text-sm text-muted">Timed OSCE drill complete · +{osceResult.score * XP.oscePoint} XP</p>
          <div className="mt-5 flex justify-center gap-3">
            <Btn onClick={startOsce}>Retry</Btn>
            <Btn variant="secondary" onClick={() => { setMode(null); setOsceResult(null); }}>Menu</Btn>
          </div>
        </Card>
      );
    }
    if (!osce) return null;
    const q = osce.qs[osce.i];
    const mm = String(Math.floor(osce.left / 60)).padStart(2, '0');
    const ss = String(osce.left % 60).padStart(2, '0');
    return (
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <div className={`font-mono text-2xl font-black ${osce.left < 60 ? 'text-rose-400' : 'text-sky-300'}`}>{mm}:{ss}</div>
          <ProgressBar value={(osce.i / osce.qs.length) * 100} className="flex-1" />
          <span className="text-sm text-muted">{osce.i + 1}/{osce.qs.length} · score {osce.score}</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={osce.i} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
            <Card>
              <Tag tone="topic">{q.tag}</Tag>
              <div className="mb-4 mt-2 text-[15px] font-semibold leading-relaxed">{q.q}</div>
              <div className="grid gap-2">
                {q.opts.map((o, oi) => (
                  <button key={oi} onClick={() => answerOsce(oi)}
                    className="rounded-xl border border-white/10 bg-base-700/70 px-3.5 py-2.5 text-left text-sm transition-all hover:border-sky-400/50 hover:bg-base-700">
                    <span className="mr-2 font-mono text-xs opacity-70">{'ABCD'[oi]}</span>{o}
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  // practice & anatomy
  const q = session.qs[session.i];
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <Btn variant="secondary" className="!px-3 !py-1.5 !text-xs" onClick={() => { setMode(null); setSession(null); }}>← Exit</Btn>
        <ProgressBar value={session.done ? 100 : (session.i / session.qs.length) * 100} className="flex-1" />
        <span className="text-sm text-muted">{Math.min(session.i + 1, session.qs.length)}/{session.qs.length}</span>
      </div>

      {session.done ? (
        <Card className="py-10 text-center">
          {(() => {
            const correct = session.answers.filter(a => a.ok).length;
            const overconf = session.answers.filter(a => !a.ok && a.conf >= 4).length;
            const under = session.answers.filter(a => a.ok && a.conf <= 2).length;
            return (
              <>
                <div className="bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-6xl font-black text-transparent">{correct}/{session.answers.length}</div>
                <p className="mt-2 text-sm text-muted">Practice set complete</p>
                <div className="mx-auto mt-4 max-w-sm space-y-1 text-left text-[13px] text-muted">
                  {overconf > 0 && <p>⚠ Overconfident on {overconf} — you were sure but wrong. Review those explanations.</p>}
                  {under > 0 && <p>💡 Under-confident on {under} — you knew it but doubted yourself.</p>}
                  {overconf === 0 && under === 0 && <p>Well calibrated — your confidence matched your accuracy.</p>}
                </div>
                <div className="mt-5 flex justify-center gap-3">
                  <Btn onClick={() => startPractice(mode === 'anatomy' ? session.qs : due.length >= 10 ? due : QUIZ)}>Again</Btn>
                  <Btn variant="secondary" onClick={() => { setMode(null); setSession(null); }}>Menu</Btn>
                </div>
              </>
            );
          })()}
        </Card>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div key={session.i} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}>
            <Card>
              <div className="flex items-center gap-2">
                <Tag tone="topic">{q.tag}</Tag>
                {mode === 'anatomy' && q.imgCase && <Tag tone="img">real film</Tag>}
              </div>
              <div className="mb-4 mt-2 text-[15px] font-semibold leading-relaxed">{q.q}</div>
              {mode === 'anatomy' && q.imgCase && (
                <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black">
                  <img src={q.imgCase.resolved} alt={q.imgCase.title} className="max-h-72 w-full object-contain" />
                </div>
              )}
              <div className="grid gap-2">
                {q.opts.map((o, oi) => (
                  <button key={oi} onClick={() => answerPractice(oi, conf)}
                    className="rounded-xl border border-white/10 bg-base-700/70 px-3.5 py-2.5 text-left text-sm transition-all hover:border-sky-400/50 hover:bg-base-700">
                    <span className="mr-2 font-mono text-xs opacity-70">{'ABCD'[oi]}</span>{o}
                  </button>
                ))}
              </div>
              <ConfPicker value={conf} onPick={setConf} />
            </Card>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

function ConfPicker({ value, onPick }) {
  return (
    <div className="mt-4 border-t border-white/10 pt-3">
      <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-muted">Confidence before answering</div>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map(n => (
          <button key={n} onClick={() => onPick(n)}
            className={`h-8 w-8 rounded-lg border text-xs font-bold transition-all ${value === n ? 'border-transparent bg-gradient-to-r from-sky-400 to-cyan-400 text-base-950' : 'border-white/10 bg-base-700/80 text-muted hover:border-sky-400/40'}`}>
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
