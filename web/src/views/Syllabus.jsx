import { useMemo } from 'react';
import { useStore, patch, mastery } from '../store.js';
import { CURRICULUM } from '../data/curriculum.js';
import { QUIZ } from '../data/content.js';
import { CASES } from '../data/cases.js';
import { Card, Tag, Btn, ProgressBar } from '../ui.jsx';

export default function Syllabus({ toast }) {
  const s = useStore();
  const casesFor = (topic) => CASES.filter(c => !topic || c.topic === topic).map(c => c.id);

  const doneFor = (item) => {
    if (item.links?.cases) return item.links.cases.reduce((n, t) => n + CASES.filter(c => c.topic === t && s.done.includes(c.id)).length, 0);
    if (item.links?.quiz) return mastery(item.links.quiz, QUIZ);
    return 0;
  };

  return (
    <div>
      <h1 className="mb-1 text-2xl font-black tracking-tight">Curriculum map</h1>
      <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted">
        What this trainer covers, mapped to the Podiatry Board of Australia Professional Capabilities (2022),
        AHPRA accreditation expectations, MBS podiatry imaging items, ACR Appropriateness Criteria and
        IWGDF/IDSA 2023 diabetic-foot guidance — the imaging anchors of an Australian podiatry degree.
      </p>
      <div className="space-y-4">
        {CURRICULUM.map(d => (
          <Card key={d.id}>
            <div className="mb-1 text-[15px] font-extrabold text-sky-300">{d.domain}</div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {d.capabilities.map(c => <Tag key={c} tone="topic">{c}</Tag>)}
            </div>
            <div className="space-y-2">
              {d.items.map((it, i) => {
                const m = it.links?.quiz ? mastery(it.links.quiz, QUIZ) : null;
                const cd = it.links?.cases ? doneFor(it) : null;
                return (
                  <div key={i} className="rounded-xl border border-white/10 bg-base-700/50 p-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <p className="max-w-xl text-[13.5px] font-semibold leading-relaxed">{it.label}</p>
                      <div className="flex gap-1.5">
                        {it.links?.quiz && <Btn variant="ghost" className="!px-2.5 !py-1 !text-[11px]" onClick={() => patch({ route: 'quiz' })}>Quiz · {m}%</Btn>}
                        {it.links?.cases && <Btn variant="ghost" className="!px-2.5 !py-1 !text-[11px]" onClick={() => patch({ route: 'cases' })}>Cases · {cd} done</Btn>}
                      </div>
                    </div>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-muted">{it.ref}</p>
                    {m !== null && <ProgressBar value={m} className="mt-2 h-1" />}
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
