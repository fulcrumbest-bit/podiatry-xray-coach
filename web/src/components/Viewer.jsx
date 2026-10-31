import { useRef, useState, useCallback, useEffect } from 'react';

/* PACS-style viewer. Overlay (hotspots / measurement points) lives INSIDE the same
   transformed layer as the <img>, so markers are glued to anatomy at any zoom/pan. */
export default function Viewer({ img, imgW, imgH, hotspots = [], found = {}, onReveal, onMoveHotspot, showHotspots, tools }) {
  const vpRef = useRef(null);
  const layerRef = useRef(null);
  const [view, setView] = useState({ s: 1, tx: 0, ty: 0 });
  const [loupe, setLoupe] = useState(null);
  const [wl, setWl] = useState(100);
  const [invert, setInvert] = useState(false);
  const [mpts, setMpts] = useState([]);
  const [angle, setAngle] = useState(null);
  const [dragHs, setDragHs] = useState(null); // index of hotspot being dragged (edit mode)
  const ptrs = useRef(new Map());
  const drag = useRef(null);
  const viewRef = useRef(view);
  viewRef.current = view;

  const W = 800;
  const H = imgH ? W * imgH / imgW : 600;

  const apply = useCallback((v) => {
    if (layerRef.current) layerRef.current.style.transform = `translate(${v.tx}px,${v.ty}px) scale(${v.s})`;
  }, []);

  const fit = useCallback(() => {
    const vp = vpRef.current; if (!vp) return;
    const r = vp.getBoundingClientRect();
    const s = Math.min(r.width / W, r.height / H) * 0.98;
    const v = { s, tx: (r.width - W * s) / 2, ty: (r.height - H * s) / 2 };
    setView(v); apply(v);
  }, [apply, H]);

  useEffect(() => { fit(); }, [fit, img]);
  useEffect(() => {
    const onR = () => fit();
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, [fit]);

  const toPct = useCallback((e) => {
    const r = vpRef.current.getBoundingClientRect();
    const v = viewRef.current;
    return {
      x: (e.clientX - r.left - v.tx) / v.s / W * 100,
      y: (e.clientY - r.top - v.ty) / v.s / H * 100
    };
  }, [H]);

  const zoomAt = (clientX, clientY, f) => {
    const r = vpRef.current.getBoundingClientRect();
    const v = viewRef.current;
    const lx = (clientX - r.left - v.tx) / v.s, ly = (clientY - r.top - v.ty) / v.s;
    const ns = Math.min(8, Math.max(0.15, v.s * f));
    const nv = { s: ns, tx: clientX - r.left - lx * ns, ty: clientY - r.top - ly * ns };
    setView(nv); apply(nv);
  };

  const onPointerDown = (e) => {
    try { vpRef.current.setPointerCapture(e.pointerId); } catch (_) {}
    ptrs.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.current.size === 1) drag.current = { x: e.clientX, y: e.clientY, tx: viewRef.current.tx, ty: viewRef.current.ty, moved: false };
    if (ptrs.current.size === 2) drag.current = null;
  };
  const onHotspotPointerDown = (e, i) => {
    if (!onMoveHotspot) return;
    e.stopPropagation();
    e.preventDefault();
    try { vpRef.current.setPointerCapture(e.pointerId); } catch (_) {}
    setDragHs(i);
    ptrs.current.clear();
    drag.current = { hs: i, moved: false };
  };
  const onPointerMove = (e) => {
    if (drag.current && drag.current.hs !== undefined && onMoveHotspot) {
      const p = toPct(e);
      drag.current.moved = true;
      onMoveHotspot(drag.current.hs, Math.max(0, Math.min(100, p.x)), Math.max(0, Math.min(100, p.y)));
      return;
    }
    const r = vpRef.current.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    if (!ptrs.current.has(e.pointerId)) {
      if (tools.loupe && mx >= 0 && my >= 0 && mx <= r.width && my <= r.height) {
        const v = viewRef.current;
        setLoupe({ mx, my, lx: (mx - v.tx) / v.s, ly: (my - v.ty) / v.s });
      } else setLoupe(null);
      return;
    }
    const prev = ptrs.current.get(e.pointerId);
    ptrs.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (ptrs.current.size === 1 && drag.current) {
      const dx = e.clientX - drag.current.x, dy = e.clientY - drag.current.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) drag.current.moved = true;
      const v = { ...viewRef.current, tx: drag.current.tx + dx, ty: drag.current.ty + dy };
      setView(v); apply(v);
    } else if (ptrs.current.size === 2) {
      const a = [...ptrs.current.values()];
      const d0 = Math.hypot(prev.x - a[0].x, prev.y - a[0].y);
      const d1 = Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y);
      if (d0 > 0 && d1 > 0) {
        const midX = (a[0].x + a[1].x) / 2, midY = (a[0].y + a[1].y) / 2;
        const f = d1 / d0;
        const r = vpRef.current.getBoundingClientRect();
        const v = viewRef.current;
        const lx = (midX - r.left - v.tx) / v.s, ly = (midY - r.top - v.ty) / v.s;
        const ns = Math.min(8, Math.max(0.15, v.s * f));
        const nv = { s: ns, tx: midX - r.left - lx * ns, ty: midY - r.top - ly * ns };
        setView(nv); apply(nv);
      }
    }
    if (tools.loupe) {
      const v = viewRef.current;
      setLoupe({ mx, my, lx: (mx - v.tx) / v.s, ly: (my - v.ty) / v.s });
    }
  };
  const onPointerUp = (e) => {
    if (drag.current && drag.current.hs !== undefined) { drag.current = null; setDragHs(null); return; }
    const tap = ptrs.current.size === 1 && drag.current && !drag.current.moved;
    ptrs.current.delete(e.pointerId);
    if (!ptrs.current.size) drag.current = null;
    if (tap) handleTap(e);
  };
  const onWheel = (e) => {
    e.preventDefault();
    zoomAt(e.clientX, e.clientY, e.deltaY < 0 ? 1.18 : 1 / 1.18);
  };
  const onKey = (e) => {
    const st = 60 / viewRef.current.s; let used = true; const v = { ...viewRef.current };
    if (e.key === 'ArrowLeft') v.tx += st;
    else if (e.key === 'ArrowRight') v.tx -= st;
    else if (e.key === 'ArrowUp') v.ty += st;
    else if (e.key === 'ArrowDown') v.ty -= st;
    else if (e.key === '+' || e.key === '=') { zoomAt(vpRef.current.getBoundingClientRect().left + vpRef.current.clientWidth / 2, vpRef.current.getBoundingClientRect().top + vpRef.current.clientHeight / 2, 1.25); return; }
    else if (e.key === '-') { zoomAt(vpRef.current.getBoundingClientRect().left + vpRef.current.clientWidth / 2, vpRef.current.getBoundingClientRect().top + vpRef.current.clientHeight / 2, 1 / 1.25); return; }
    else if (e.key === 'r' || e.key === 'R') { fit(); setMpts([]); setAngle(null); return; }
    else used = false;
    if (used) { e.preventDefault(); setView(v); apply(v); }
  };

  // image-space point: percentages -> the 800-wide internal image coordinates
  const toImg = (p) => ({ x: p.x / 100 * W, y: p.y / 100 * H });
  function internalAngleDeg(A, B, C) {
    const a = toImg(A), b = toImg(B), c = toImg(C);
    const u = { x: a.x - b.x, y: a.y - b.y }, v = { x: c.x - b.x, y: c.y - b.y };
    const den = Math.hypot(u.x, u.y) * Math.hypot(v.x, v.y);
    if (den < 1e-9) return null; // coincident points
    return Math.acos(Math.max(-1, Math.min(1, (u.x * v.x + u.y * v.y) / den))) * 180 / Math.PI;
  }

  function handleTap(e) {
    const p = toPct(e);
    if (tools.measure) {
      const pts = [...mpts, p];
      setMpts(pts);
      if (pts.length === 3) {
        const [A, B, C] = pts;
        const internal = internalAngleDeg(A, B, C);
        // B\u00f6hler-style acute angle = supplement of the large internal angle at the vertex;
        // Gissane-style uses the internal angle itself. Show both, labelled.
        const acute = internal === null ? null : Math.min(internal, 180 - internal);
        setAngle(internal === null ? null : { internal, acute });
        setMpts([]);
      }
      return;
    }
    // hit test in image pixels: dx=(t.x-p.x)*W/100 etc.; per-marker radius (default 3.5% of min(W,H), ossicle-scale markers smaller)
    const pi = toImg(p);
    let best = -1, bd = 1e9;
    hotspots.forEach((h, i) => {
      if (found[i]) return;
      const hi = toImg(h);
      const d = Math.hypot(hi.x - pi.x, hi.y - pi.y);
      const r = (h.r || 0.035) * Math.min(W, H); // fraction of min image dimension
      if (d < bd) { bd = d; best = i; }
      if (d <= r && bd > r) {} // noop; nearest within radius wins below
    });
    if (best >= 0) {
      const h = hotspots[best];
      const hi = toImg(h);
      const r = (h.r || 0.035) * Math.min(W, H);
      if (bd <= r) onReveal(best);
    }
  }

  const filter = `brightness(${wl}%) contrast(100%)${invert ? ' invert(1)' : ''}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-card">
      <div
        ref={vpRef}
        className="relative w-full cursor-crosshair touch-none overflow-hidden outline-none"
        style={{ aspectRatio: `${imgW}/${imgH}`, background: 'radial-gradient(circle at 50% 40%, #0a0f1a, #000)' }}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
        onKeyDown={onKey}
        onPointerLeave={() => setLoupe(null)}
        role="application"
        aria-label="Radiograph viewer. Drag to pan, scroll to zoom, arrow keys pan, plus and minus zoom, R resets."
      >
        <div ref={layerRef} className="absolute left-0 top-0 origin-top-left will-change-transform" style={{ width: W, height: H }}>
          {img
            ? <img src={img} width={W} height={H} draggable={false} alt="clinical radiograph"
                style={{ width: W, height: H, filter, userSelect: 'none', display: 'block' }} />
            : <div className="flex h-full w-full items-center justify-center text-sm text-muted">loading film…</div>}
          {showHotspots && hotspots.map((h, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { e.stopPropagation(); if (dragHs !== null) return; onReveal(i); }}
              onPointerDown={onMoveHotspot ? (e) => onHotspotPointerDown(e, i) : undefined}
              title={onMoveHotspot ? 'Drag to correct this marker\u2019s position' : undefined}
              className={`absolute z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[11px] font-extrabold transition-transform ${
                dragHs === i ? 'scale-125 border-2 border-amber-300 bg-amber-400 text-base-950 shadow-[0_0_16px_rgba(251,191,36,.8)]'
                : found[i]
                  ? 'border-2 border-emerald-300 bg-emerald-400 text-base-950 shadow-[0_0_14px_rgba(52,211,153,.7)]'
                  : onMoveHotspot
                    ? 'border-2 border-amber-300/80 bg-amber-400/20 text-amber-200 cursor-grab hover:scale-125 hover:bg-amber-400/40'
                    : 'animate-pulse border-2 border-dashed border-sky-400 bg-sky-400/15 text-sky-300 hover:scale-125 hover:bg-sky-400/40'
              }`}
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              aria-label={found[i] ? `Finding found: ${h.label}` : `Mark finding ${i + 1}`}
            >
              {found[i] ? '✓' : '?'}
              {found[i] && (
                <span className="absolute left-1/2 top-[115%] z-20 -translate-x-1/2 whitespace-nowrap rounded-lg border border-emerald-300/60 bg-base-950/95 px-2.5 py-1 text-xs font-semibold text-ink shadow-card">
                  {h.label}
                </span>
              )}
            </button>
          ))}
          {mpts.map((p, i) => (
            <span key={i} className="absolute z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,.8)]"
              style={{ left: `${p.x}%`, top: `${p.y}%` }} />
          ))}
        </div>
        {angle !== null && angle !== undefined && (
          <span className="absolute left-1/2 top-[8%] z-20 -translate-x-1/2 whitespace-nowrap rounded-lg border border-amber-400/70 bg-amber-950/95 px-2 py-1 font-mono text-xs text-amber-200">
            {angle && angle.internal !== null && angle.internal !== undefined
              ? <>∠ internal {angle.internal.toFixed(1)}° · acute {angle.acute.toFixed(1)}° — R to clear</>
              : 'coincident points — angle undefined, R to clear'}
          </span>
        )}
        {tools.loupe && loupe && img && (
          <div className="pointer-events-none absolute z-30 h-[190px] w-[190px] rounded-full border-[3px] border-sky-400 shadow-[0_10px_40px_rgba(0,0,0,.8)]"
            style={{
              left: loupe.mx - 95, top: loupe.my - 95,
              backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat',
              backgroundSize: `${W * 3}px ${H * 3}px`,
              backgroundPosition: `${-(loupe.lx * 3 - 95)}px ${-(loupe.ly * 3 - 95)}px`
            }} />
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2 border-t border-white/10 bg-base-800/90 px-3 py-2">
        <ToolBtn on={tools.loupe} onClick={tools.toggleLoupe}>🔍 Loupe</ToolBtn>
        <ToolBtn on={tools.measure} onClick={() => { tools.toggleMeasure(); setMpts([]); setAngle(null); }}>📐 Angle</ToolBtn>
        <ToolBtn on={invert} onClick={() => setInvert(v => !v)}>◐ Invert</ToolBtn>
        <ToolBtn on={showHotspots} onClick={tools.toggleHotspots}>{showHotspots ? 'Hide markers' : 'Show markers'}</ToolBtn>
        <span className="mx-1 h-5 w-px bg-white/10" />
        <label className="flex items-center gap-2 text-xs text-muted">W/L
          <input type="range" min="40" max="220" value={wl} onChange={e => setWl(+e.target.value)} className="w-24 accent-sky-400" />
        </label>
        <ToolBtn onClick={() => { fit(); setMpts([]); setAngle(null); }}>Reset (R)</ToolBtn>
      </div>
    </div>
  );
}

function ToolBtn({ on, onClick, children }) {
  return (
    <button type="button" onClick={onClick}
      className={`rounded-lg border px-2.5 py-1.5 text-xs transition-colors ${
        on ? 'border-transparent bg-gradient-to-r from-sky-400 to-cyan-400 font-bold text-base-950' : 'border-white/15 bg-base-700/80 text-ink hover:border-sky-400/50'
      }`}>
      {children}
    </button>
  );
}
