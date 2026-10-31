import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Page({ children, className = '' }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={`mx-auto w-full max-w-6xl px-4 pb-24 pt-6 ${className}`}
    >
      {children}
    </motion.main>
  );
}

export function Card({ children, className = '', ...rest }) {
  return (
    <motion.div
      whileHover={{ y: -3, borderColor: 'rgba(56,189,248,.5)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`rounded-2xl border border-white/10 bg-base-800/80 p-4 shadow-card backdrop-blur ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Tag({ children, tone = 'default' }) {
  const tones = {
    default: 'text-muted border-white/10 bg-base-700/70',
    topic: 'text-violet-300 border-violet-400/30 bg-violet-500/10',
    img: 'text-sky-300 border-sky-400/30 bg-sky-500/10',
    diff1: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10',
    diff2: 'text-amber-300 border-amber-400/30 bg-amber-500/10',
    diff3: 'text-rose-300 border-rose-400/30 bg-rose-500/10',
    done: 'text-emerald-300 border-emerald-400/40 bg-emerald-500/15'
  };
  return <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${tones[tone]}`}>{children}</span>;
}

export function Btn({ children, variant = 'primary', className = '', ...rest }) {
  const v = {
    primary: 'bg-gradient-to-r from-sky-400 to-cyan-400 text-base-950 font-bold shadow-glow hover:brightness-110',
    secondary: 'border border-white/15 bg-base-700/80 text-ink hover:border-sky-400/50',
    ghost: 'border border-sky-400/60 text-sky-300 bg-transparent hover:bg-sky-400/10',
    danger: 'border border-rose-400/60 text-rose-300 bg-transparent hover:bg-rose-400/10'
  }[variant];
  return (
    <motion.button whileTap={{ scale: 0.96 }} whileHover={{ y: -1 }}
      className={`rounded-xl px-4 py-2 text-sm transition-colors ${v} ${className}`} {...rest}>
      {children}
    </motion.button>
  );
}

export function Toasts({ toasts }) {
  return (
    <div className="fixed bottom-4 right-4 z-[200] flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map(t => (
          <motion.div key={t.id} initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 60, opacity: 0 }}
            className="max-w-sm rounded-xl border border-emerald-400/40 bg-base-700/95 px-4 py-3 text-sm text-ink shadow-card">
            {t.msg}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function useToasts() {
  const [toasts, setToasts] = useState([]);
  const toast = (msg) => {
    const id = Math.random().toString(36).slice(2);
    setToasts(ts => [...ts, { id, msg }]);
    setTimeout(() => setToasts(ts => ts.filter(t => t.id !== id)), 3400);
  };
  return [toasts, toast];
}

export function Confetti({ fire }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!fire || !ref.current) return;
    const cv = ref.current, ctx = cv.getContext('2d');
    cv.width = innerWidth; cv.height = innerHeight;
    const colors = ['#38bdf8', '#34d399', '#fbbf24', '#a78bfa', '#f472b6'];
    const ps = Array.from({ length: 90 }, () => ({
      x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * .4,
      vx: (Math.random() - .5) * 2, vy: 2 + Math.random() * 3.5,
      s: 4 + Math.random() * 6, c: colors[(Math.random() * colors.length) | 0], r: Math.random() * Math.PI
    }));
    let frames = 0;
    let raf;
    (function anim() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(p => { p.x += p.vx; p.y += p.vy; p.r += .05; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s); ctx.restore(); });
      if (++frames < 140) raf = requestAnimationFrame(anim); else ctx.clearRect(0, 0, cv.width, cv.height);
    })();
    return () => cancelAnimationFrame(raf);
  }, [fire]);
  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-[150]" />;
}

export function ProgressBar({ value, className = '' }) {
  return (
    <div className={`h-2 overflow-hidden rounded-full border border-white/10 bg-base-700 ${className}`}>
      <motion.div initial={false} animate={{ width: `${value}%` }} transition={{ duration: .4 }}
        className="h-full rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-violet-400" />
    </div>
  );
}

export function Kpi({ n, l, accent }) {
  return (
    <Card className="text-center">
      <div className={`text-2xl font-extrabold ${accent ? 'bg-gradient-to-r from-amber-300 to-pink-400 bg-clip-text text-transparent' : 'bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent'}`}>{n}</div>
      <div className="mt-0.5 text-[11px] uppercase tracking-wide text-muted">{l}</div>
    </Card>
  );
}

export function DiffTag({ d }) {
  return <Tag tone={`diff${d}`}>{['', 'Foundation', 'Intermediate', 'Advanced'][d]}</Tag>;
}
