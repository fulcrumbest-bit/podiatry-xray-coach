/* ============================================================
   v7 assessment — practice (SRS + confidence), OSCE timed mode,
   anatomy label drills, session summary
   ============================================================ */

function renderQuizHome(){
  $("#quiz-due").textContent=dueCount()+" due for review";
  $("#quiz-area").innerHTML="";
  $("#quiz-start").onclick=()=>runQuiz(false);
  $("#quiz-osce").onclick=()=>runQuiz(true);
  const db=$("#quiz-drill");if(db)db.onclick=runDrill;
}

function runQuiz(osce){
  const host=$("#quiz-area");
  /* interleaving: shuffle tags so question types mix */
  const pool=QUIZ.slice().sort(()=>Math.random()-.5).slice(0,CFG.osce.questions);
  let i=0,score=0;
  const end=Date.now()+CFG.osce.minutes*60*1000;
  let timer=null;
  const answers={};
  const finish=()=>{
    clearInterval(timer);
    const pct=Math.round(score/pool.length*100);
    if(osce){
      S.profile.osce.push({t:Date.now(),score,pct});saveProfile();
      addXp(score*CFG.xp.oscePoint,`OSCE ${score}/${pool.length}`);
      if(pct>=80)awardBadge("osce_"+Date.now(),"OSCE pass",`Scored ${pct}% on a timed OSCE`);
    }
    host.innerHTML=`<div class="qcard"><h2>${osce?"⏱ OSCE":"Practice"} complete</h2>
      <p>Score: <b>${score}/${pool.length}</b> (${pct}%). ${osce?(pct>=80?"Excellent — exam-ready.":pct>=60?"Good — review the misses below.":"Keep practising the case library."):"Correct answers scheduled for spaced review."}</p>
      ${osce?`<h3>Review</h3><ul class="tight">${pool.map(x=>`<li>${esc(x.q.slice(0,90))}… — <b>${esc(x.opts[x.a])}</b></li>`).join("")}</ul>`:""}
      <div class="row"><button class="btn small" id="q-again">Again</button><button class="btn secondary small" data-nav="quiz">Quiz home</button></div></div>`;
    $("#q-again").onclick=()=>runQuiz(osce);
    if(!osce)pool.forEach(x=>{if(answers[x.q]!==undefined)srsUpdate(x,answers[x.q]);});
    if(S.screen==="progress")renderProgress();
    updateChip();
  };
  const renderQ=()=>{
    if(i>=pool.length)return finish();
    const x=pool[i];
    host.innerHTML=`<div class="qcard">
      <div class="muted" style="font-size:12.5px">${osce?"OSCE":"Practice"} ${i+1}/${pool.length} · <span class="tag">${esc(x.tag)}</span>${osce?` · <span id="tmr" class="streak"></span>`:""}</div>
      <h3 style="color:var(--ink)">${esc(x.q)}</h3>
      ${x.opts.map((o,k)=>`<button class="opt" data-a="${k}">${esc(o)}</button>`).join("")}
      <div class="feedback" id="qfb"></div>
      ${osce?"":`<div class="row" style="margin-top:8px"><span class="muted" style="font-size:12px">Confidence:</span>
        <button class="tbtn conf" data-c="1">Low</button><button class="tbtn conf" data-c="2">Medium</button><button class="tbtn conf" data-c="3">High</button>
        <button class="btn small" id="qnext" disabled style="margin-left:auto">Next →</button></div>`}
    </div>`;
    if(osce&&!timer)timer=setInterval(()=>{
      const t=$("#tmr");if(!t)return;
      const l=Math.max(0,end-Date.now());
      t.textContent=Math.floor(l/6e4)+":"+String(Math.floor(l%6e4/1e3)).padStart(2,"0");
      if(l<=0)finish();
    },1000);
    let confSel=3;
    $$all("#quiz-area .conf").forEach(b=>b.onclick=()=>{confSel=+b.dataset.c;$$all("#quiz-area .conf").forEach(x=>x.classList.toggle("on",x===b));});
    $$all("#quiz-area .opt").forEach(b=>b.onclick=()=>{
      const a=+b.dataset.a,ok=a===x.a;
      score+=ok?1:0;answers[x.q]=ok;
      $$all("#quiz-area .opt").forEach(o=>{o.disabled=true;const k=+o.dataset.a;const cl=k===x.a?"correct":k===a?"wrong":"";if(cl)o.classList.add(cl)});
      if(!osce){
        srsUpdate(x,ok);
        if(ok){addXp(CFG.xp.quizCorrect,"quiz correct");if(confSel===3)addXp(5,"confident correct");}
        else addXp(CFG.xp.quizWrong,"quiz attempt");
        const fb=$("#qfb");fb.className="feedback "+(ok?"ok":"no");
        fb.textContent=(ok?"✓ Correct. ":"✗ Not quite — the answer is highlighted. ")+x.expl+(ok&&confSel<3?" (Overconfident — watch this topic.)":"");
        if(ok)toast("✓ Correct — "+x.tag);
        const nx=$("#qnext");nx.disabled=false;nx.onclick=()=>{i++;renderQ()};
      } else {
        const nx=el("button",{class:"btn small"},["Next →"]);
        nx.onclick=()=>{i++;renderQ()};
        host.querySelector(".qcard").appendChild(nx);
      }
    });
  };
  renderQ();
}

/* anatomy label drill: pick a normal-anatomy case, drag/click labels onto hotspots */
function runDrill(){
  const host=$("#quiz-area");
  const normals=CASES.filter(c=>c.topic==="Normal anatomy"||c.topic==="Pitfalls");
  if(!normals.length){host.innerHTML=`<div class="qcard"><p>No anatomy cases available.</p></div>`;return}
  const c=normals[Math.floor(Math.random()*normals.length)];
  const labels=c.hotspots.map(h=>h.label);
  const shuffled=labels.slice().sort(()=>Math.random()-.5);
  host.innerHTML=`<div class="qcard">
    <h2>🏷 Anatomy drill</h2>
    <p class="muted">Tap a label, then tap the structure on the film. Case: <b>${esc(c.title)}</b></p>
    <div class="row" id="drill-labels">${shuffled.map((l,i)=>`<button class="tbtn drill-label" data-l="${esc(l)}">${esc(l)}</button>`).join("")}</div>
    <div class="viewer" style="margin-top:10px"><div class="viewport" id="vp" style="aspect-ratio:${c.imgW}/${c.imgH}">
      <div class="canvas"><img src="${c.img}" width="800" style="width:800px;height:auto" alt="${esc(c.title)}" draggable="false"></div>
    </div></div>
    <div class="feedback" id="dfb"></div>
    <div class="row" style="margin-top:8px"><span class="muted" id="dscore"></span></div>
  </div>`;
  let sel=null,score=0;
  const viewer=new Viewer($("#vp"),c);
  $$all("#drill-labels .drill-label").forEach(b=>b.onclick=()=>{
    sel=b.dataset.l;
    $$all("#drill-labels .drill-label").forEach(x=>x.classList.toggle("on",x===b));
  });
  viewer.onTap=e=>{
    if(!sel)return;
    const p=viewer.toPct(e);
    let best=-1,bd=1e9;
    c.hotspots.forEach((h,i)=>{const d=Math.hypot(h.x-p.x,h.y-p.y);if(d<bd){bd=d;best=i}});
    const fb=$("#dfb");
    if(best>=0&&bd<=12&&c.hotspots[best].label===sel){
      score++;addXp(CFG.xp.quizCorrect,"label correct: "+sel);
      fb.className="feedback ok";fb.textContent="✓ Correct — that's the "+sel+".";
      const lb=$$all("#drill-labels .drill-label").find(x=>x.dataset.l===sel);
      if(lb){lb.disabled=true;lb.classList.add("on");lb.textContent="✓ "+sel;}
      const canvas=$("#vp .canvas");
      canvas.appendChild(el("div",{class:"hotspot found show",style:`left:${c.hotspots[best].x}%;top:${c.hotspots[best].y}%`},["✓",el("span",{class:"hs-label"},[c.hotspots[best].label])]));
      sel=null;
      $("#dscore").textContent=`Score ${score}/${labels.length}`;
      if(score===labels.length){awardBadge("drill_"+c.id,"Anatomist","Labelled every structure in "+c.title);confetti(60);toast("🏅 Anatomy drill complete!");}
    } else {
      fb.className="feedback no";fb.textContent="Not that one — try again.";
    }
  };
}
