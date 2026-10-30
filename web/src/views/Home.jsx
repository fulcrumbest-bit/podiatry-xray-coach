import { motion } from 'framer-motion';
import { useStore, patch, level, levelName, xpProgress, dueCount, overall, addXp, awardBadge } from '../store.js';
import { QUIZ, MODULES } from '../data/content.js';
import { CASES as REAL_CASES } from '../data/cases.js';
import { Card, Tag, Btn, Kpi, ProgressBar, DiffTag } from '../ui.jsx';

const stagger = { animate: { transition: { staggerChildren: 0.06 } } };
const item = { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } };

export default function Home({ toast }) {
  const s = useStore();
  const pct = Math.round(overall(QUIZ) * 100);
  const due = dueCount(QUIZ);
  const doneCases = s.done.length;

  return (
    <div>
      <motion.section variants={stagger} initial="initial" animate="animate" className="mb-6">
        <motion.h1 variants={item} className="text-3xl font-black tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-r from-sky-300 via-emerald-300 to-violet-300 bg-clip-text text-transparent">
            Read foot &amp; ankle X-rays
          </span>
          <br />like a clinician.
        </motion.h1>
        <motion.p variants={item} className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          A structured trainer for Australian podiatry students: {MODULES.length} guided lessons,
          {' '}{REAL_CASES.length} real clinical radiographs with clickable findings, a {QUIZ.length}-item
          spaced-repetition quiz and timed OSCE drills. Everything stays on this device.
        </motion.p>
        <motion.div variants={item} className="mt-5 flex flex-wrap gap-3">
          <Btn onClick={() => patch({ route: 'cases' })}>Start with real cases →</Btn>
          <Btn variant="secondary" onClick={() => patch({ route: 'learn' })}>Guided lessons</Btn>
          <Btn variant={due > 0 ? 'ghost' : 'secondary'} onClick={() => patch({ route: 'quiz' })}>
            {due > 0 ? `Review ${due} due question${due === 1 ? '' : 's'}` : 'Practice quiz'}
          </Btn>
        </motion.div>
      </motion.section>

      <motion.section variants={stagger} initial="initial" animate="animate" className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <motion.div variants={item}><Kpi n={s.profile.xp} l="XP earned" /></motion.div>
        <motion.div variants={item}><Kpi n={levelName()} l={`Level ${level() + 1}`} accent /></motion.div>
        <motion.div variants={item}><Kpi n={`${doneCases}/${REAL_CASES.length}`} l="cases completed" /></motion.div>
        <motion.div variants={item}><Kpi n={`${s.profile.streak.n} day${s.profile.streak.n === 1 ? '' : 's'}`} l="streak" /></motion.div>
      </motion.section>

      <Card className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-bold text-ink">Overall mastery</span>
          <span className="font-mono text-sky-300">{pct}%</span>
        </div>
        <ProgressBar value={pct} />
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted">
          <Tag>{s.raw.ans} questions answered</Tag>
          <Tag>{s.raw.ans ? Math.round(s.raw.corr / s.raw.ans * 100) : 0}% first-pass accuracy</Tag>
          <Tag tone="done">{s.profile.badges.length} badges</Tag>
        </div>
      </Card>

      <motion.h2 variants={item} initial="initial" animate="animate" className="mb-3 text-lg font-extrabold">Featured cases</motion.h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {[0, 7, 10].map(i => {
          const c = REAL_CASES[i];
          return (
            <motion.div key={c.id} variants={item} initial="initial" animate="animate">
              <Card className="group cursor-pointer overflow-hidden p-0" onClick={() => patch({ screen: c.id })}>
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img src={c.resolved} alt={c.title} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                  {s.done.includes(c.id) && <span className="absolute right-2 top-2 rounded-full border border-emerald-300/60 bg-emerald-500/90 px-2 py-0.5 text-[11px] font-bold text-base-950">✓ done</span>}
                </div>
                <div className="p-3.5">
                  <div className="mb-1.5 flex flex-wrap gap-1.5">
                    <Tag tone="topic">{c.topic}</Tag><DiffTag d={c.diff} />
                  </div>
                  <div className="text-sm font-bold leading-snug">{c.title}</div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
