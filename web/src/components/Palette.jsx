import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { patch } from '../store.js';
import { CASES } from '../data/cases.js';
import { MODULES, QUIZ } from '../data/content.js';

export default function Palette({ open: openProp, onToggle, onClose }) {
  const [internal, setInternal] = useState(false);
  const open = openProp !== undefined ? openProp : internal;
  const setOpen = useCallback((v) => {
    const nv = typeof v === 'function' ? v(open) : v;
    if (openProp !== undefined) {
      if (nv !== openProp) { if (nv && onToggle) onToggle(); else if (!nv && onClose) onClose(); }
    } else setInternal(nv);
  }, [openProp, onToggle, onClose, open]);
  const [q, setQ] = useState('');

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen(o => !o); return; }
      if (e.key === 'Escape') { setOpen(false); return; }
      if (e.target && e.target.tagName === 'INPUT') return;
      if (e.key === '1') patch({ route: 'home', screen: null });
      else if (e.key === '2') patch({ route: 'learn', screen: null });
      else if (e.key === '3') patch({ route: 'cases', screen: null });
      else if (e.key === '4') patch({ route: 'quiz', screen: null });
      else if (e.key === '5') patch({ route: 'progress', screen: null });
      else if (e.key === '6') patch({ route: 'syllabus', screen: null });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  const actions = useMemo(() => {
    const a = [
      { label: 'Home', hint: '1', run: () => patch({ route: 'home', screen: null }) },
      { label: 'Learn modules', hint: '2', run: () => patch({ route: 'learn', screen: null }) },
      { label: 'Case library', hint: '3', run: () => patch({ route: 'cases', screen: null }) },
      { label: 'Quiz & drills', hint: '4', run: () => patch({ route: 'quiz', screen: null }) },
      { label: 'Progress', hint: '5', run: () => patch({ route: 'progress', screen: null }) },
      { label: 'Curriculum map', hint: '6', run: () => patch({ route: 'syllabus', screen: null }) },
      ...CASES.map(c => ({ label: 'Case: ' + c.title, hint: '', run: () => patch({ screen: c.id }) })),
      ...MODULES.map(m => ({ label: 'Lesson: ' + m.title, hint: '', run: () => patch({ route: 'learn', screen: null }) })),
      ...QUIZ.slice(0, 12).map(x => ({ label: 'Q: ' + x.q.slice(0, 60) + '…', hint: '', run: () => patch({ route: 'quiz', screen: null }) }))
    ];
    if (!q) return a.slice(0, 26);
    const lq = q.toLowerCase();
    return a.filter(x => x.label.toLowerCase().includes(lq)).slice(0, 12);
  }, [q]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <motion.div initial={{ y: -18, opacity: 0, scale: .98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -10, opacity: 0 }}
            className="mx-auto mt-[12vh] w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-base-800 shadow-card"
            onClick={e => e.stopPropagation()}>
            <input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="Jump to a case, lesson or section"
              className="w-full border-b border-white/10 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-muted" />
            <div className="max-h-80 overflow-y-auto p-2">
              {actions.map((a, i) => (
                <button key={i} onClick={() => { setOpen(false); setQ(''); a.run(); }}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[13px] hover:bg-sky-400/10">
                  <span className="truncate">{a.label}</span>
                  {a.hint && <kbd className="rounded border border-white/15 bg-base-700 px-1.5 py-0.5 font-mono text-[10px] text-muted">{a.hint}</kbd>}
                </button>
              ))}
              {actions.length === 0 && <div className="px-3 py-4 text-center text-sm text-muted">No matches</div>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
