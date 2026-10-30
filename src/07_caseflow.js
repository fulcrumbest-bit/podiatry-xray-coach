/* ============================================================
   v7 case flow — state machine: review -> questions -> report -> debrief
   plus anatomy label drills. Patch-based DOM updates.
   ============================================================ */

const STEPS=["Film review","Case questions","Your report","Debrief"];
const diffName=d=>["","Foundation","Intermediate","Advanced"][d];

function diffTag(d){return `<span class="tag diff${d}">${diffName(d)}</span>`}

function renderCaseList(){
  const f=$("#case-filter");const topics=[...new Set(CASES.map(c=>c.topic))];
  if(f.options.length<2+topics.length){topics.forEach(t=>{const o=el("option",{value:t},[t]);f.appendChild(o)})}
  const tf=f.value,df=$("#case-diff").value,sf=$("#case-status").value;
  const host=$("#case-list");host.innerHTML="";
  CASES.filter(c=>(tf==="all"||c.topic===tf)&&(df==="all"||String(c.diff)===df)&&(sf==="all"||(sf==="done"?S.done.includes(c.id):!S.done.includes(c.id))))
  .forEach(c=>{
    const found=Store.get("hot_"+c.id,{});const n=Object.values(found).filter(Boolean).length;
    host.appendChild(el("div",{class:"card"},[
      el("img",{class:"thumb",src:c.img,alt:"",loading:"lazy"}),
      el("h3",{},[c.title]),
      el("div",{class:"row"},[el("span",{class:"tag topic"},[c.topic]),el("span",{class:`tag diff${c.diff}`},[diffName(c.diff)]),el("span",{class:"tag img"},["real X-ray"]),S.done.includes(c.id)?el("span",{class:"tag",style:"color:var(--accent2);border-color:#1d4d3d"},["✓ done"]):null].filter(Boolean)),
      el("p",{class:"muted",style:"font-size:13px"},[c.stem.slice(0,105)+"…"]),
      el("p",{class:"muted",style:"font-size:12px"},[`${n}/${c.hotspots.length} findings found`]),
      el("button",{class:"btn small","data-open-case":c.id},[S.done.includes(c.id)?"Review":"Start case"])
    ]));
  });
}
["#case-filter","#case-diff","#case-status"].forEach(id=>$(id).addEventListener("change",renderCaseList));
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-open-case]");if(!b)return;
  S.caseId=b.dataset.openCase;S.step=0;
  S.found={...(Store.get("hot_"+S.caseId,{}))};
  S.measure=false;S.mpts=[];S.loupe=false;S.compare=0;S.invert=false;
  renderCase();
  const cd=$("#case-detail");if(cd&&cd.scrollIntoView)cd.scrollIntoView({behavior:"smooth"});
});

function revealHotspot(c,i){
  if(S.found[i])return;
  S.found[i]=true;Store.set("hot_"+c.id,S.found);
  const allDone=c.hotspots.every((h,j)=>S.found[j]);
  if(allDone&&!S.done.includes(c.id)){S.done.push(c.id);saveProfile();}
  addXp(CFG.xp.hotspot,"finding: "+c.hotspots[i].label.slice(0,40));
  if(allDone){
    addXp(CFG.xp.caseComplete,"case complete: "+c.title);
    confetti(90);toast(`🎉 Case complete: ${c.title}`);
    awardBadge("case_"+c.id,"Case solver",c.title);
    if(S.done.length===CASES.length)awardBadge("all_cases","Full library","Completed all "+CASES.length+" cases");
  } else {
    toast("Finding identified: "+c.hotspots[i].label);
  }
  renderCase();
  const fb=$("#fb");
  if(fb){fb.className="feedback ok";fb.textContent=`✓ ${c.hotspots[i].label}. ${c.hotspots[i].expl}`+(allDone?" All findings identified — case complete! 🎉":"");}
  updateChip();
}

function renderCase(){
  const host=$("#case-detail");
  if(!S.caseId){host.innerHTML="";return}
  const c=CASES.find(x=>x.id===S.caseId);
  const found=S.found;const nFound=c.hotspots.filter((h,i)=>found[i]).length;
  host.innerHTML=`
  <div class="panel" style="margin-top:16px">
    <div class="row" style="justify-content:space-between">
      <h2 style="border:none;margin:0">${esc(c.title)}</h2>
      <span>${diffTag(c.diff)} <span class="tag topic">${esc(c.topic)}</span> <span class="tag img">real clinical X-ray</span></span>
    </div>
    <p class="muted" style="margin-top:6px"><b>Presentation:</b> ${esc(c.stem)}</p>
    <div class="stepper">${STEPS.map((s,i)=>`<span class="step ${i===S.step?"active":i<S.step?"done":""}" data-step="${i}" role="button" tabindex="0">${i+1} ${s}</span>`).join("")}</div>
    <div class="twocol">
      <div>
        <div class="viewer">
          <div class="viewport" id="vp" style="aspect-ratio:${c.imgW}/${c.imgH}" tabindex="0" aria-label="Radiograph viewer. Drag to pan, scroll to zoom, arrow keys pan, plus and minus zoom, R resets.">
            <div class="canvas"><img src="${c.img}" width="800" alt="Clinical radiograph: ${esc(c.title)}" draggable="false" style="width:800px;height:auto;filter:${S.invert?"invert(1)":"none"}"></div>
            <div id="loupe"></div>
          </div>
        </div>
        <div class="vtools">
          <button class="tbtn ${S.loupe?"on":""}" id="t-loupe">🔍 Loupe</button>
          <button class="tbtn ${S.measure?"on":""}" id="t-measure">📐 Angle</button>
          <button class="tbtn ${S.invert?"on":""}" id="t-invert">◐ Invert</button>
          <button class="tbtn ${S.hotHidden?"on":""}" id="t-hot">${S.hotHidden?"Show hotspots":"Hide hotspots"}</button>
          ${c.compare?`<button class="tbtn ${S.compare?"on":""}" id="t-cmp">⇄ Compare normal</button>`:""}
          <span class="sep"></span>
          <label>W/L <input type="range" id="rng-w" min="40" max="220" value="100"></label>
          <button class="tbtn" id="t-reset">Reset (R)</button>
        </div>
        <div class="feedback" id="fb"></div>
        <p class="muted" style="font-size:12px"><b>Image:</b> ${esc(c.attr)}</p>
      </div>
      <div id="step-pane">${stepBody(c)}</div>
    </div>
    <div class="row" style="margin-top:12px">
      <button class="btn secondary small" data-nav="cases">← Case list</button>
      ${S.step>0?`<button class="btn secondary small" id="btn-prev-step">← Back</button>`:""}
      ${S.step<STEPS.length-1?`<button class="btn small" id="btn-next-step">Next step →</button>`:""}
    </div>
  </div>`;

  /* viewer */
  const viewer=new Viewer($("#vp"),c);
  viewer.onTap=e=>{
    const p=viewer.toPct(e);
    if(S.measure){
      S.mpts.push(p);
      const canvas=$("#vp .canvas");
      canvas.appendChild(el("div",{class:"tool-dot",style:`left:${p.x}%;top:${p.y}%`}));
      if(S.mpts.length===3){
        const [A,B,C]=S.mpts;
        const ang=angleDeg(A,B,C);
        const mx=(A.x+B.x+C.x)/3,my=(A.y+B.y+C.y)/3;
        canvas.appendChild(el("div",{class:"tool-label",style:`left:${mx}%;top:${my}%`},[`∠ ${ang.toFixed(1)}°`]));
        const fb=$("#fb");if(fb){fb.className="feedback ok";fb.textContent=`Measured angle = ${ang.toFixed(1)}°. Compare with the reference ranges in the Learn modules.`;}
        S.mpts=[];
      }
      return;
    }
    let best=-1,bd=1e9;
    c.hotspots.forEach((h,i)=>{if(S.found[i])return;const d=Math.hypot(h.x-p.x,h.y-p.y);if(d<bd){bd=d;best=i}});
    const fb=$("#fb");
    if(best>=0&&bd<=12)revealHotspot(c,best);
    else if(best>=0){fb.className="feedback no";fb.textContent="Close — sweep systematically; use the loupe if needed.";}
    else{fb.className="feedback no";fb.textContent="Nothing significant there. Check soft tissues, every cortex, joints, alignment.";}
  };

  /* hotspot buttons */
  const canvas=$("#vp .canvas");
  if(!S.hotHidden){
    c.hotspots.forEach((h,i)=>{
      const b=el("button",{type:"button",class:"hotspot"+(found[i]?" found":"")+(found[i]?" show":""),
        style:`left:${h.x}%;top:${h.y}%`,"aria-label":found[i]?("Finding found: "+h.label):("Mark finding "+(i+1))});
      b.innerHTML=(found[i]?"✓":"?")+`<span class="hs-label">${esc(h.label)}</span>`;
      b.addEventListener("click",ev=>{ev.stopPropagation();revealHotspot(c,i);});
      canvas.appendChild(b);
    });
  }
  /* compare overlay */
  if(c.compare&&S.compare){
    const cmp=el("img",{src:c.compare,alt:"",draggable:"false"});
    cmp.setAttribute("aria-hidden","true");
    cmp.style.cssText=`position:absolute;left:0;top:0;width:800px;height:auto;clip-path:inset(0 0 0 ${S.compare}%);opacity:.8;pointer-events:none;filter:${S.invert?"invert(1)":"none"}`;
    canvas.appendChild(cmp);
  }
  /* tools */
  $("#t-loupe").onclick=()=>{S.loupe=!S.loupe;renderCase();};
  $("#t-measure").onclick=()=>{S.measure=!S.measure;S.mpts=[];renderCase();};
  $("#t-invert").onclick=()=>{S.invert=!S.invert;renderCase();};
  $("#t-hot").onclick=()=>{S.hotHidden=!S.hotHidden;renderCase();};
  const tc=$("#t-cmp");if(tc)tc.onclick=()=>{S.compare=S.compare?0:50;renderCase();};
  $("#t-reset").onclick=()=>{S.measure=false;S.mpts=[];renderCase();};
  $("#rng-w").oninput=e=>{canvas.style.filter=`brightness(${e.target.value}%) contrast(100%)${S.invert?" invert(1)":""}`;};
  const np=$("#btn-next-step");if(np)np.onclick=()=>{S.step++;renderCase();};
  const pp=$("#btn-prev-step");if(pp)pp.onclick=()=>{S.step--;renderCase();};
  $$("#case-detail .step").forEach(st=>{
    st.addEventListener("click",()=>{S.step=+st.dataset.step;renderCase();});
    st.addEventListener("keydown",ev=>{if(ev.key==="Enter"||ev.key===" "){ev.preventDefault();S.step=+st.dataset.step;renderCase();}});
  });
  bindStep(c);
  updateChip();
}

function stepBody(c){
  const found=S.found;const nFound=c.hotspots.filter((h,i)=>found[i]).length;
  if(S.step===0)return `
    <h3>1 · Film review</h3>
    <p class="muted" style="font-size:13.5px">Study the film. Click a hotspot marker (or tap the image) when you find the abnormality. Tools: loupe, zoom, window/level, invert, angle.</p>
    <div class="row"><span class="tag">${nFound}/${c.hotspots.length} findings</span></div>
    <div class="teachpt"><b>Systematic approach:</b> soft tissues → every cortex → joints → alignment/measurements → compare with normal.</div>`;
  if(S.step===1)return `<h3>2 · Case questions</h3><p class="muted" style="font-size:13.5px">Answer from the film, not memory.</p><div id="case-q-area"></div>`;
  if(S.step===2)return `
    <h3>3 · Write your structured report</h3>
    <p class="muted" style="font-size:13px">Technique → Findings → Impression → Recommendations.</p>
    <textarea class="ta" id="my-report" placeholder="TECHNIQUE: ...\nFINDINGS: ...\nIMPRESSION: ...\nRECOMMENDATION: ...">${esc(Store.get("report_"+c.id,""))}</textarea>
    <div class="row" style="margin:8px 0"><button class="btn small" id="save-report">Save draft</button>
    <button class="btn ghost small" id="show-expert">Show expert report</button></div>
    <div id="expert-area"></div>`;
  return `
    <h3>4 · Debrief</h3>
    <h3 style="color:var(--accent2)">Findings</h3>
    ${c.hotspots.map((h,i)=>`<div class="${found[i]?"teachpt":"pitfall"}"><b>${found[i]?"✓":"✗"} ${esc(h.label)}</b><br><span class="muted" style="font-size:13px">${esc(h.expl)}</span></div>`).join("")}
    <h3>Differential diagnoses</h3><ul class="tight">${c.ddx.map(d=>`<li>${esc(d)}</li>`).join("")}</ul>
    <h3>Management pearls (Australian practice)</h3><ul class="tight">${c.pearls.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>
    <h3>Teaching points</h3><ul class="tight teach">${(c.teach||[]).map(t=>`<li>${esc(t)}</li>`).join("")}</ul>
    <h3>Expert report</h3><div class="reportbox">${esc(c.report||"")}</div>
    <p class="muted" style="font-size:12.5px"><b>References:</b> ${esc(c.refs.join("; "))}</p>
    ${S.done.includes(c.id)?'<div class="feedback ok" style="display:block">✓ Case completed — recorded in your progress.</div>':""}`;
}

function bindStep(c){
  if(S.step===1){
    const area=$("#case-q-area");if(!area)return;
    const pool=QUIZ.filter(q=>q.tag===c.quizTag).slice(0,2);
    let i=0;
    const renderQ=()=>{
      if(i>=pool.length){area.innerHTML=`<div class="feedback ok">Case questions done. Next step →</div>`;return}
      const x=pool[i];
      area.innerHTML=`<div class="muted" style="font-size:12px">Q${i+1}/${pool.length} · ${esc(x.tag)}</div>
        <p style="font-size:14px">${esc(x.q)}</p>
        ${x.opts.map((o,k)=>`<button class="opt" data-a="${k}">${esc(o)}</button>`).join("")}
        <div class="feedback" id="cq-fb"></div>`;
      $$("#case-q-area .opt").forEach(b=>b.onclick=()=>{
        const a=+b.dataset.a,ok=a===x.a;
        $$("#case-q-area .opt").forEach(o=>{o.disabled=true;const k=+o.dataset.a;const cl=k===x.a?"correct":k===a?"wrong":"";if(cl)o.classList.add(cl)});
        srsUpdate(x,ok);if(ok)addXp(CFG.xp.quizCorrect,"case question correct");else addXp(CFG.xp.quizWrong,"case question");
        const fb=$("#cq-fb");fb.className="feedback "+(ok?"ok":"no");fb.textContent=(ok?"✓ ":"✗ Correct answer: "+x.opts[x.a]+". ")+x.expl;
        const nb=el("button",{class:"btn small"},["Next →"]);nb.style.marginTop="8px";
        nb.onclick=()=>{i++;renderQ()};area.appendChild(nb);
      });
    };
    renderQ();
  }
  if(S.step===2){
    const sr=$("#save-report");if(sr)sr.onclick=()=>{
      Store.set("report_"+c.id,$("#my-report").value);
      $("#expert-area").innerHTML=`<div class="feedback ok" style="margin-top:8px">Draft saved locally. Compare it with the expert report.</div>`;
      toast("Report draft saved");
    };
    const se=$("#show-expert");if(se)se.onclick=()=>{
      $("#expert-area").innerHTML=`<h3 style="margin-top:10px">Expert report</h3><div class="reportbox">${esc(c.report||"")}</div>`;
    };
  }
}
