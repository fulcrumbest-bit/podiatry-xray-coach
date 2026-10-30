import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore, patch, patchDeep, addXp, awardBadge, mastery } from '../store.js';
import { MODULES, QUIZ } from '../data/content.js';
import { Card, Tag, Btn, ProgressBar } from '../ui.jsx';

export default function Learn({ toast }) {
  const s = useStore();
  const [open, setOpen] = useState(s.checks[MODULES[0].id] ? null : MODULES[0].id);

  const toggleCheck = (mid, i) => {
    const arr = [...(s.checks[mid] || MODULES.find(m => m.id === mid).checklist.map(() => false))];
    arr[i] = !arr[i];
    patchDeep('checks', { [mid]: arr });
    if (arr[i]) {
      addXp(5, 'checklist');
      const all = MODULES.find(m => m.id === mid).checklist.every((_, j) => arr[j]);
      if (all) {
        toast(`Module complete: ${MODULES.find(m => m.id === mid).title} (+5 XP)`);
        awardBadge('mod_' + mid, MODULES.find(m => m.id === mid).title, 'Completed a learning module');
      }
    }
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
      <aside>
        <h1 className="mb-3 text-2xl font-black tracking-tight">Learning modules</h1>
        <div className="space-y-2">
          {MODULES.map(m => {
            const done = (s.checks[m.id] || []).filter(Boolean).length;
            const total = m.checklist.length;
            return (
              <button key={m.id} onClick={() => setOpen(open === m.id ? null : m.id)}
                className={`w-full rounded-xl border p-3 text-left transition-all ${open === m.id ? 'border-sky-400/60 bg-base-700 shadow-glow' : 'border-white/10 bg-base-800/70 hover:border-sky-400/30'}`}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold">{m.title}</span>
                  <Tag tone={done === total ? 'done' : 'default'}>{done}/{total}</Tag>
                </div>
                <div className="mt-1.5 flex items-center gap-2 text-[11px] text-muted">
                  <Tag tone="topic">{m.tag}</Tag><span>{m.time}</span>
                  <span className="ml-auto font-mono text-sky-300/80">{mastery(m.tag === 'Foundation' ? 'views' : m.tag, QUIZ)}% quiz</span>
                </div>
                <ProgressBar value={total ? done / total * 100 : 0} className="mt-2 h-1" />
              </button>
            );
          })}
        </div>
      </aside>

      <div>
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key={open} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
              <Card>
                {(() => {
                  const m = MODULES.find(x => x.id === open);
                  return (
                    <>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <Tag tone="topic">{m.tag}</Tag><span className="text-xs text-muted">{m.time} read</span>
                      </div>
                      <h2 className="mb-1 text-xl font-extrabold">{m.title}</h2>
                      <p className="mb-3 text-sm text-muted">{m.summary}</p>
                      <div className="lesson" dangerouslySetInnerHTML={{ __html: m.html }} />
                      <div className="mt-5 border-t border-white/10 pt-4">
                        <h3 className="mb-2 text-sm font-extrabold uppercase tracking-wide text-emerald-300">Prove it — self-check</h3>
                        <div className="space-y-2">
                          {m.checklist.map((c, i) => (
                            <label key={i} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm transition-colors ${(s.checks[open] || [])[i] ? 'border-emerald-400/50 bg-emerald-500/10' : 'border-white/10 bg-base-700/50 hover:border-sky-400/40'}`}>
                              <input type="checkbox" checked={!!(s.checks[open] || [])[i]} onChange={() => toggleCheck(open, i)} className="mt-0.5 h-4 w-4 accent-emerald-400" />
                              <span>{c}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </Card>
            </motion.div>
          ) : (
            <motion.div key="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Card className="py-10 text-center text-muted">
                Select a module on the left to start learning. Tick each self-check item as you master it.
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
