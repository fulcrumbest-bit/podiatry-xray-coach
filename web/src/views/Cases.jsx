import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useStore, patch } from '../store.js';
import { CASES as REAL_CASES } from '../data/cases.js';
import { Card, Tag, DiffTag } from '../ui.jsx';

const TOPICS = ['All', ...[...new Set(REAL_CASES.map(c => c.topic))]];
const DIFFS = [0, 1, 2, 3];

export default function Cases() {
  const s = useStore();
  const [topic, setTopic] = useState('All');
  const [diff, setDiff] = useState(0);
  const [q, setQ] = useState('');

  const list = useMemo(() => REAL_CASES.filter(c =>
    (topic === 'All' || c.topic === topic) &&
    (diff === 0 || c.diff === diff) &&
    (!q || (c.title + ' ' + c.stem + ' ' + c.topic).toLowerCase().includes(q.toLowerCase()))
  ), [topic, diff, q]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black tracking-tight">Case library</h1>
          <p className="mt-1 text-sm text-muted">{REAL_CASES.length} real clinical radiographs · {s.done.length} completed · click a case to open the viewer</p>
        </div>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search cases…"
          className="w-56 rounded-xl border border-white/10 bg-base-700/80 px-3.5 py-2 text-sm outline-none placeholder:text-muted focus:border-sky-400/60" />
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {TOPICS.map(t => (
          <button key={t} onClick={() => setTopic(t)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${topic === t ? 'border-transparent bg-gradient-to-r from-sky-400 to-cyan-400 text-base-950' : 'border-white/10 bg-base-700/80 text-muted hover:border-sky-400/40 hover:text-ink'}`}>
            {t}
          </button>
        ))}
        <span className="mx-1 h-6 w-px bg-white/10" />
        {DIFFS.map(d => (
          <button key={d} onClick={() => setDiff(diff === d ? 0 : d)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${diff === d ? 'border-transparent bg-gradient-to-r from-amber-300 to-pink-400 text-base-950' : 'border-white/10 bg-base-700/80 text-muted hover:border-amber-400/40 hover:text-ink'}`}>
            {d === 0 ? 'Any level' : ['Foundation', 'Intermediate', 'Advanced'][d - 1]}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c, i) => (
          <motion.div key={c.id} layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }}>
            <Card className="group cursor-pointer overflow-hidden p-0" onClick={() => patch({ screen: c.id })}>
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img src={c.resolved} alt={c.title} loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                {s.done.includes(c.id)
                  ? <span className="absolute right-2 top-2 rounded-full border border-emerald-300/60 bg-emerald-500/90 px-2 py-0.5 text-[11px] font-bold text-base-950">✓ completed</span>
                  : <span className="absolute right-2 top-2 rounded-full border border-sky-400/50 bg-sky-500/20 px-2 py-0.5 text-[11px] font-semibold text-sky-200 backdrop-blur">{c.hotspots.length} finding{c.hotspots.length === 1 ? '' : 's'}</span>}
              </div>
              <div className="p-3.5">
                <div className="mb-1.5 flex flex-wrap gap-1.5">
                  <Tag tone="topic">{c.topic}</Tag><DiffTag d={c.diff} />
                </div>
                <div className="text-sm font-bold leading-snug">{c.title}</div>
                <div className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">{c.stem}</div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      {list.length === 0 && <Card className="py-10 text-center text-muted">No cases match — try clearing the search.</Card>}
    </div>
  );
}
