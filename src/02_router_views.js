/* ============================================================
   v7 router + home/learn/progress views (patch-based rendering)
   ============================================================ */

function nav(name){
  S.screen=name;
  $$(".screen").forEach(x=>x.classList.toggle("active",x.id==="scr-"+name));
  $$(".navbtn").forEach(b=>b.classList.toggle("active",b.dataset.nav===name));
  const views={home:renderHome,learn:renderLearn,cases:()=>{S.caseId=null;renderCaseList();renderCase();},quiz:renderQuizHome,progress:renderProgress};
  (views[name]||(()=>{}))();
  updateChip();window.scrollTo({top:0});
}
document.addEventListener("click",e=>{const b=e.target.closest("[data-nav]");if(b)nav(b.dataset.nav);});

function updateChip(){
  bumpStreak();
  $("#progchip").innerHTML=`<b>${Math.round(overall()*100)}%</b> · Lv${level()} ${esc(levelName())} · ${S.profile.xp} XP`;
}
Bus.on("xp",updateChip);
Bus.on("badge",updateChip);

/* ---------- home ---------- */
function renderHome(){
  const hs=$("#hero-strip");
  if(hs&&!hs.childElementCount){
    CASES.slice(0,6).forEach(c=>{
      const im=el("img",{class:"thumb",src:c.img,alt:c.title,title:c.title});
      im.style.cssText="width:150px;aspect-ratio:4/3;object-fit:cover;margin:0;border-radius:10px;opacity:.9";
      hs.appendChild(im);
    });
  }
  $("#kpi-cases").textContent=CASES.length;
  $("#kpi-quiz").textContent=QUIZ.length;
  $("#kpi-mastered").textContent=TOPICS.filter(t=>mastery(t)>=CFG.masteryThreshold).length+"/"+TOPICS.length;
  $("#kpi-done").textContent=Math.round(overall()*100)+"%";
  $("#kpi-xp").textContent=S.profile.xp+" XP · Lv"+level()+" "+levelName();
  const bb=$("#kpi-badges");if(bb)bb.textContent=S.profile.badges.length+" 🏅";
}

/* ---------- learn ---------- */
function renderLearn(){
  const host=$("#module-list");host.innerHTML="";
  MODULES.forEach(m=>{
    const arr=S.checks[m.id]||[];const done=arr.filter(Boolean).length;
    host.appendChild(el("div",{class:"card"},[
      el("h3",{},[m.title]),
      el("p",{class:"muted"},[m.summary]),
      el("div",{class:"row"},[el("span",{class:"tag"},[m.time]),el("span",{class:"tag"},[m.tag]),el("span",{class:"tag"},[`${done}/${m.checklist.length}`])]),
      el("div",{style:"margin-top:10px"},[el("button",{class:"btn small","data-open-module":m.id},["Open module"])])
    ]));
  });
  $("#module-detail").innerHTML="";
}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-open-module]");if(!b)return;
  const m=MODULES.find(x=>x.id===b.dataset.openModule);
  const arr=S.checks[m.id]||m.checklist.map(()=>false);
  const det=$("#module-detail");
  det.innerHTML=`<div class="panel" style="margin-top:16px"><h2>${esc(m.title)}</h2>${m.html}
    <h3>Checklist</h3>
    ${m.checklist.map((c,i)=>`<label class="checkitem"><input type="checkbox" data-check="${m.id}:${i}" ${arr[i]?"checked":""}><span>${esc(c)}</span></label>`).join("")}
    <div class="row" style="margin-top:10px"><button class="btn secondary small" data-nav="learn">← All modules</button></div></div>`;
  const md=$("#module-detail");if(md.scrollIntoView)md.scrollIntoView({behavior:"smooth"});
});
document.addEventListener("change",e=>{
  const c=e.target.closest("[data-check]");if(!c)return;
  const [mid,i]=c.dataset.check.split(":");
  const arr=S.checks[mid]||MODULES.find(m=>m.id===mid).checklist.map(()=>false);
  arr[+i]=c.checked;S.checks[mid]=arr;saveProfile();updateChip();
  if(arr.every(Boolean)){addXp(CFG.xp.moduleCheck*arr.length,"module complete: "+mid);awardBadge("mod_"+mid,"Module finisher","Completed "+mid);}
  else if(c.checked){addXp(CFG.xp.moduleCheck,"checklist item");}
});

/* ---------- progress ---------- */
function renderProgress(){
  let hot=0;CASES.forEach(c=>{hot+=Object.values(Store.get("hot_"+c.id,{})).filter(Boolean).length});
  $("#p-cases").textContent=S.done.length+" / "+CASES.length;
  $("#p-hot").textContent=hot;
  $("#p-acc").textContent=S.raw.ans?Math.round(S.raw.corr/S.raw.ans*100)+"%":"–";
  $("#p-streak").textContent=S.profile.streak.n+" 🔥";
  $("#p-xp").textContent=S.profile.xp+" XP";
  $("#p-level").textContent="Lv"+level()+" "+levelName()+" ("+xpProgress()+"% to next)";
  $("#p-bar").style.width=Math.round(overall()*100)+"%";
  $("#p-topics").innerHTML=TOPICS.map(t=>`<div class="topicbar"><span class="nm">${esc(t)}</span><span class="bar"><div style="width:${mastery(t)}%"></div></span><span class="pc">${mastery(t)}%</span></div>`).join("");
  const now=Date.now();
  const due=QUIZ.filter(x=>{const s=S.quiz[x.q];return s&&s.due<=now});
  $("#p-due").innerHTML=due.length?due.map(x=>`<li>${esc(x.q.slice(0,80))}…</li>`).join(""):"<li class='muted'>Nothing due — nice work.</li>";
  $("#p-checks").innerHTML=MODULES.map(m=>{const arr=S.checks[m.id]||[];const d=arr.filter(Boolean).length;return `<li>${esc(m.title.split("·")[0].trim())}: ${d}/${m.checklist.length}</li>`}).join("");
  $("#p-osce").innerHTML=S.profile.osce.length?S.profile.osce.slice(-5).reverse().map(o=>`<li>${new Date(o.t).toLocaleString()} — <b>${o.score}/${CFG.osce.questions}</b> (${o.pct}%)</li>`).join(""):"<li class='muted'>No OSCE attempts yet.</li>";
  $("#p-badges").innerHTML=S.profile.badges.length?S.profile.badges.map(b=>`<li>🏅 <b>${esc(b.name)}</b> — ${esc(b.desc)}</li>`).join(""):"<li class='muted'>No badges yet — complete cases and quizzes to earn them.</li>";
}
$("#p-reset").addEventListener("click",()=>{
  if(!confirm("Reset all local progress? This cannot be undone."))return;
  Object.keys(localStorage).filter(k=>k.startsWith(CFG.storagePrefix)).forEach(k=>localStorage.removeItem(k));
  location.reload();
});
