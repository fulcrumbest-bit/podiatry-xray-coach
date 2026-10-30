/* ============================================================
   v7 core — config, constants, store, events, gamification
   ============================================================ */
"use strict";

const CFG={
  storagePrefix:"fxr7_",
  osce:{questions:10,minutes:10},
  masteryThreshold:80,          // % to count a topic as mastered
  xp:{hotspot:10,caseComplete:50,quizCorrect:15,quizWrong:2,oscePoint:20,moduleCheck:5,streakBonus:25},
  levels:[0,100,300,600,1000,1600,2400,3400,4600,6000,8000],
  levelNames:["Novice","Apprentice","Reader","Analyst","Specialist","Consultant","Fellow","Master","Grandmaster","Radiologist"]
};

const Store={
  get(k,d){try{const v=localStorage.getItem(CFG.storagePrefix+k);return v?JSON.parse(v):d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(CFG.storagePrefix+k,JSON.stringify(v))}catch(e){}},
  del(k){try{localStorage.removeItem(CFG.storagePrefix+k)}catch(e){}}
};

/* tiny event bus so modules don't call each other directly */
const Bus={
  _m:{},
  on(ev,fn){(this._m[ev]=this._m[ev]||[]).push(fn);return this},
  emit(ev,data){(this._m[ev]||[]).forEach(fn=>{try{fn(data)}catch(e){console.error(ev,e)}})}
};

/* central reactive state */
const S={
  screen:"home",caseId:null,step:0,found:{},hotHidden:true,
  measure:false,mpts:[],loupe:false,compare:0,invert:false,
  profile:Store.get("profile",{xp:0,streak:{n:0,last:null},osce:[],badges:[],created:Date.now()}),
  raw:Store.get("raw",{ans:0,corr:0}),
  quiz:Store.get("quiz",{}),
  done:Store.get("done",[]),
  checks:Store.get("checks",{})
};
function saveProfile(){Store.set("profile",S.profile);Store.set("raw",S.raw);Store.set("quiz",S.quiz);Store.set("done",S.done);Store.set("checks",S.checks);}

function addXp(n,reason){
  S.profile.xp+=n;saveProfile();
  Bus.emit("xp",{n,reason,total:S.profile.xp,level:level()});
  toast(`+${n} XP — ${reason}`);
}
function level(){let l=0;for(let i=0;i<CFG.levels.length;i++)if(S.profile.xp>=CFG.levels[i])l=i;return l;}
function levelName(){return CFG.levelNames[Math.min(level(),CFG.levelNames.length-1)];}
function xpProgress(){const l=level();const lo=CFG.levels[l],hi=CFG.levels[l+1]||CFG.levels[l]*1.5;return l>=CFG.levels.length-1?100:Math.round((S.profile.xp-lo)/(hi-lo)*100);}
function bumpStreak(){
  const today=new Date().toISOString().slice(0,10);
  if(S.profile.streak.last!==today){
    const y=new Date(Date.now()-864e5).toISOString().slice(0,10);
    S.profile.streak.n=(S.profile.streak.last===y)?S.profile.streak.n+1:1;
    S.profile.streak.last=today;
    if(S.profile.streak.n>0&&S.profile.streak.n%3===0)addXp(CFG.xp.streakBonus,`streak ${S.profile.streak.n} days 🔥`);
    saveProfile();
  }
}
function awardBadge(id,name,desc){
  if(S.profile.badges.find(b=>b.id===id))return;
  S.profile.badges.push({id,name,desc,t:Date.now()});saveProfile();
  toast(`🏅 Badge unlocked: ${name}`);confetti(60);
  Bus.emit("badge",{id,name,desc});
}

/* derived: content list with embedded images resolved */
const CASES=REAL_CASES.map(c=>{
  const o={...c};
  const k=o.img.split("/").pop();
  if(IMAGE_DATA[k])o.img=IMAGE_DATA[k];
  if(o.compare){const ck=o.compare.split("/").pop();if(IMAGE_DATA[ck])o.compare=IMAGE_DATA[ck];}
  return o;
});
const TOPICS=[...new Set(CASES.map(c=>c.quizTag).concat(QUIZ.map(q=>q.tag)))];

function mastery(tag){
  const qs=QUIZ.filter(q=>q.tag===tag);
  if(!qs.length)return 0;
  const got=qs.filter(q=>S.quiz[q.q]&&S.quiz[q.q].reps>=2).length;
  return Math.round(got/qs.length*100);
}
function overall(){
  const done=S.done.length/CASES.length;
  const totalChecks=MODULES.reduce((n,m)=>n+m.checklist.length,0);
  const dc=totalChecks?Object.values(S.checks).flat().filter(Boolean).length/totalChecks:0;
  const tm=TOPICS.length?TOPICS.reduce((n,t)=>n+mastery(t),0)/TOPICS.length/100:0;
  return done*.45+dc*.2+tm*.35;
}

/* ---------- tiny DOM helpers ---------- */
const $=(s,r)=> (r||document).querySelector(s);
const $$=(s,r)=>Array.from((r||document).querySelectorAll(s));
const el=(tag,attrs,children)=>{
  const e=document.createElement(tag);
  if(attrs)for(const k in attrs){
    if(k==="class")e.className=attrs[k];
    else if(k==="html")e.innerHTML=attrs[k];
    else if(k.startsWith("on")&&typeof attrs[k]==="function")e.addEventListener(k.slice(2),attrs[k]);
    else e.setAttribute(k,attrs[k]);
  }
  (children||[]).forEach(c=>e.appendChild(typeof c==="string"?document.createTextNode(c):c));
  return e;
};
const esc=s=>String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));

/* ---------- feedback: toasts + confetti ---------- */
function toast(msg){
  const host=$("#toasts");if(!host)return;
  const t=el("div",{class:"toast"},[msg]);
  host.appendChild(t);
  setTimeout(()=>{t.style.opacity="0";t.style.transition="opacity .4s";setTimeout(()=>t.remove(),400)},3400);
}
function confetti(n){
  const cv=$("#confetti");if(!cv||!cv.getContext)return;
  const ctx=cv.getContext("2d");cv.width=innerWidth;cv.height=innerHeight;
  const colors=["#38bdf8","#34d399","#fbbf24","#a78bfa","#f472b6"];
  const ps=[];
  for(let i=0;i<(n||80);i++)ps.push({x:Math.random()*cv.width,y:-20-Math.random()*cv.height*.4,vx:(Math.random()-.5)*2,vy:2+Math.random()*3.5,s:4+Math.random()*6,c:colors[i%colors.length],r:Math.random()*Math.PI});
  let frames=0;
  (function anim(){
    ctx.clearRect(0,0,cv.width,cv.height);
    ps.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.r+=.05;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s);ctx.restore()});
    if(++frames<140)requestAnimationFrame(anim);else ctx.clearRect(0,0,cv.width,cv.height);
  })();
}

/* ---------- SRS (SM-2) ---------- */
function srsUpdate(q,ok){
  const now=Date.now();
  const s=S.quiz[q.q]||{ef:2.5,reps:0,interval:0,due:0,conf:3};
  if(ok){s.ef=Math.min(3,s.ef+.1);s.reps++;s.interval=s.reps===1?1:s.reps===2?3:Math.round(s.interval*s.ef);s.due=now+s.interval*864e5;}
  else{s.ef=Math.max(1.3,s.ef-.2);s.reps=0;s.interval=0;s.due=now+6e5;}
  S.quiz[q.q]=s;
  S.raw.ans++;if(ok)S.raw.corr++;
  saveProfile();
  return s;
}
function dueCount(){const now=Date.now();return QUIZ.filter(x=>{const s=S.quiz[x.q];return s&&s.due<=now}).length}
