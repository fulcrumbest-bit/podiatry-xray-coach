import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useStore, level, levelName, xpProgress, LEVELS, LEVEL_NAMES, mastery, overall, dueCount, resetAll } from '../store.js';
import { QUIZ } from '../data/content.js';
import { CASES } from '../data/cases.js';
import { Card, Tag, Btn, Kpi, ProgressBar, DiffTag } from '../ui.jsx';

export default function Progress({ toast }) {
  const s = useStore();
  const pct = Math.round(overall(QUIZ) * 100);
  const tags = useMemo(() => [...new Set(CASES.map(c => c.quizTag).concat(QUIZ.map(q => q.tag)))], []);
  const l = level();

  return (
    <div>
      <h1 className="mb-4 text-2xl font-black tracking-tight">Your progress</h1>

      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Kpi n={s.profile.xp} l="total XP" />
        <Kpi n={levelName()} l={`Level ${l + 1} of ${LEVEL_NAMES.length}`} accent />
        <Kpi n={`${s.raw.corr}/${s.raw.ans}`} l="answers correct" />
        <Kpi n={`${s.done.length}/${CASES.length}`} l="cases done" />
      </div>

      <Card className="mb-5">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-bold">Level {l + 1} — {levelName()}</span>
          <span className="font-mono text-sky-300">{xpProgress()}% to {LEVEL_NAMES[l + 1] || 'max'}</span>
        </div>
        <ProgressBar value={xpProgress()} />
        <div className="mt-2 text-xs text-muted">Next level at {LEVELS[l + 1] ?? '—'} XP · overall mastery {pct}%</div>
      </Card>

      <div className="mb-5 grid gap-5 lg:grid-cols-2">
        <Card>
          <div className="mb-3 text-sm font-extrabold">Mastery by topic</div>
          <div className="space-y-2.5">
            {tags.map(t => {
              const m = mastery(t, QUIZ);
              return (
                <div key={t}>
                  <div className="mb-1 flex justify-between text-xs">
                    <Tag tone="topic">{t}</Tag><span className="font-mono text-sky-300">{m}%</span>
                  </div>
                  <ProgressBar value={m} className="h-1.5" />
                </div>
              );
            })}
          </div>
        </Card>
        <Card>
          <div className="mb-3 text-sm font-extrabold">Badges ({s.profile.badges.length})</div>
          {s.profile.badges.length === 0
            ? <p className="text-sm text-muted">Complete cases, finish practice sets and hit OSCE targets to earn badges.</p>
            : <div className="flex flex-wrap gap-2">
                {s.profile.badges.map(b => (
                  <span key={b.id} title={b.desc}
                    className="rounded-xl border border-amber-400/40 bg-amber-500/10 px-3 py-2 text-xs font-semibold text-amber-200">
                    🏅 {b.name}
                  </span>
                ))}
              </div>}
          <div className="mt-4 border-t border-white/10 pt-3 text-xs text-muted">
            Streak: {s.profile.streak.n} day{s.profile.streak.n === 1 ? '' : 's'} · {dueCount(QUIZ)} quiz items due for review · OSCE attempts: {s.profile.osce.length}
            {s.profile.osce.length > 0 && <> · best {Math.max(...s.profile.osce.map(o => o.score))}/10</>}
          </div>
        </Card>
      </div>

      <h2 className="mb-3 text-lg font-extrabold">Case checklist</h2>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {CASES.map(c => (
          <div key={c.id} className={`flex items-center gap-2.5 rounded-xl border p-3 ${s.done.includes(c.id) ? 'border-emerald-400/40 bg-emerald-500/10' : 'border-white/10 bg-base-800/70'}`}>
            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${s.done.includes(c.id) ? 'bg-emerald-400 text-base-950' : 'bg-base-700 text-muted'}`}>{s.done.includes(c.id) ? '✓' : ''}</span>
            <div className="min-w-0">
              <div className="truncate text-[13px] font-semibold">{c.title}</div>
              <div className="flex gap-1"><Tag tone="topic">{c.topic}</Tag><DiffTag d={c.diff} /></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Btn variant="danger" onClick={() => { if (confirm('Reset all progress on this device?')) { resetAll(); toast('Progress reset'); } }}>Reset all progress</Btn>
      </div>
    </div>
  );
}
