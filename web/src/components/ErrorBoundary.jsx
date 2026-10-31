import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(p) { super(p); this.state = { err: null }; }
  static getDerivedStateFromError(err) { return { err }; }
  componentDidCatch(err, info) { console.error('BOUNDARY CAUGHT:', err && err.message, 'STACK:', err && err.stack, 'INFO:', info && info.componentStack); }
  render() {
    if (this.state.err) {
      return (
        <div className="mx-auto max-w-lg px-4 py-16 text-center">
          <div className="text-4xl">⚠</div>
          <h1 className="mt-3 text-xl font-extrabold">Something went wrong in this view</h1>
          <p className="mt-2 text-sm text-muted">Your progress is saved. Reload the page — if it repeats, use Reset below.</p>
          <div className="mt-5 flex justify-center gap-3">
            <button onClick={() => location.reload()} className="rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-4 py-2 text-sm font-bold text-base-950">Reload</button>
            <button onClick={() => { Object.keys(localStorage).filter(k => k.startsWith('fxr9_')).forEach(k => localStorage.removeItem(k)); location.reload(); }} className="rounded-xl border border-rose-400/60 px-4 py-2 text-sm text-rose-300">Reset progress</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
