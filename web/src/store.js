import { useSyncExternalStore, useCallback } from 'react';
import { CASES } from './data/cases.js';

const PREFIX = 'fxr9_';
const listeners = new Set();

const defaults = () => ({
  route: 'home',
  profile: { xp: 0, streak: { n: 0, last: null }, osce: [], badges: [], created: Date.now() },
  raw: { ans: 0, corr: 0 },
  quiz: {},          // question -> {ef, reps, interval, due}
  done: [],          // case ids completed
  checks: {},        // moduleId -> [bool]
  found: {},         // caseId -> {hotspotIndex: true}
  reports: {},       // caseId -> user's report text
  screen: null
});

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(PREFIX + 'state');
    if (raw) return { ...defaults(), ...JSON.parse(raw) };
  } catch (e) {}
  return defaults();
}
function persist() {
  try { localStorage.setItem(PREFIX + 'state', JSON.stringify(state)); } catch (e) {}
  listeners.forEach(l => l());
}

export function useStore() {
  return useSyncExternalStore(cb => { listeners.add(cb); return () => listeners.delete(cb); }, () => state);
}

export function getState() { return state; }

export function patch(p) { state = { ...state, ...p }; persist(); }
export function patchDeep(key, p) { state = { ...state, [key]: { ...state[key], ...p } }; persist(); }

export const LEVELS = [0, 100, 300, 600, 1000, 1600, 2400, 3400, 4600, 6000, 8000];
export const LEVEL_NAMES = ['Novice', 'Apprentice', 'Reader', 'Analyst', 'Specialist', 'Consultant', 'Fellow', 'Master', 'Grandmaster', 'Radiologist'];
export const XP = { hotspot: 10, caseComplete: 50, quizCorrect: 15, quizWrong: 2, oscePoint: 20, moduleCheck: 5, streakBonus: 25 };

export function level() { let l = 0; for (let i = 0; i < LEVELS.length; i++) if (state.profile.xp >= LEVELS[i]) l = i; return l; }
export function levelName() { return LEVEL_NAMES[Math.min(level(), LEVEL_NAMES.length - 1)]; }
export function xpProgress() { const l = level(); const lo = LEVELS[l], hi = LEVELS[l + 1] || lo * 1.5; return l >= LEVELS.length - 1 ? 100 : Math.round((state.profile.xp - lo) / (hi - lo) * 100); }

export function addXp(n, reason) {
  const profile = { ...state.profile, xp: state.profile.xp + n };
  patch({ profile });
  bumpStreak();
  return { n, reason };
}
function bumpStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.profile.streak.last !== today) {
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    patch({ profile: { ...state.profile, streak: { n: state.profile.streak.last === y ? state.profile.streak.n + 1 : 1, last: today } } });
  }
}
export function awardBadge(id, name, desc) {
  if (state.profile.badges.find(b => b.id === id)) return false;
  patch({ profile: { ...state.profile, badges: [...state.profile.badges, { id, name, desc, t: Date.now() }] } });
  return true;
}
export function srsUpdate(q, ok) {
  const now = Date.now();
  const s = state.quiz[q] || { ef: 2.5, reps: 0, interval: 0, due: 0 };
  if (ok) { s.ef = Math.min(3, s.ef + .1); s.reps++; s.interval = s.reps === 1 ? 1 : s.reps === 2 ? 3 : Math.round(s.interval * s.ef); s.due = now + s.interval * 864e5; }
  else { s.ef = Math.max(1.3, s.ef - .2); s.reps = 0; s.interval = 0; s.due = now + 6e5; }
  patchDeep('quiz', { [q]: s });
  patch({ raw: { ans: state.raw.ans + 1, corr: state.raw.corr + (ok ? 1 : 0) } });
}
export function dueCount(QUIZ) { const now = Date.now(); return QUIZ.filter(x => { const s = state.quiz[x.q]; return s && s.due <= now; }).length; }
export function mastery(tag, QUIZ) {
  const qs = QUIZ.filter(q => q.tag === tag);
  if (!qs.length) return 0;
  return Math.round(qs.filter(q => state.quiz[q.q] && state.quiz[q.q].reps >= 2).length / qs.length * 100);
}
export function overall(QUIZ) {
  const done = state.done.length / CASES.length;
  const totalChecks = 24; // modules checklists
  const dc = Object.values(state.checks).flat().filter(Boolean).length / totalChecks;
  const topics = [...new Set(CASES.map(c => c.quizTag).concat(QUIZ.map(q => q.tag)))];
  const tm = topics.reduce((n, t) => n + mastery(t, QUIZ), 0) / topics.length / 100;
  return done * .45 + dc * .2 + tm * .35;
}
export function resetAll() {
  Object.keys(localStorage).filter(k => k.startsWith(PREFIX)).forEach(k => localStorage.removeItem(k));
  state = defaults(); persist();
}
