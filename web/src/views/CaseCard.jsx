import { motion } from 'framer-motion';
import { useCaseImage } from '../data/cases.js';
import { Card, Tag, DiffTag } from '../ui.jsx';

export default function CaseCard({ c, done, onOpen, index = 0 }) {
  const src = useCaseImage(c);
  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }}>
      <Card className="group cursor-pointer overflow-hidden p-0" onClick={onOpen}>
        <div className="relative aspect-[4/3] overflow-hidden bg-black">
          {src
            ? <img src={src} alt={c.title} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.06]" />
            : <div className="flex h-full w-full animate-pulse items-center justify-center bg-base-800 text-xs text-muted">loading…</div>}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          {done
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
  );
}
