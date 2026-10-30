/* ============================================================
   v7 PACS-style viewer — encapsulated class, keyboard + pointer
   ============================================================ */

class Viewer{
  constructor(vp,c){
    this.vp=vp;this.c=c;
    this.canvas=vp.querySelector(".canvas");
    this.scale=1;this.tx=0;this.ty=0;
    this.ptrs=new Map();this.drag=null;
    this.onTap=null; // set by case flow
    this.imgH=c.imgH?800*c.imgH/c.imgW:600;
    this.fit();
    this.bind();
  }
  apply(){this.canvas.style.transform=`translate(${this.tx}px,${this.ty}px) scale(${this.scale})`}
  fit(){
    const r=this.vp.getBoundingClientRect();
    const iw=800,ih=this.imgH;
    this.scale=Math.min(r.width/iw,r.height/ih);
    this.tx=(r.width-iw*this.scale)/2;this.ty=(r.height-ih*this.scale)/2;
    this.apply();
  }
  toPct(e){
    const r=this.vp.getBoundingClientRect();
    return{x:(e.clientX-r.left-this.tx)/this.scale/800*100,
           y:(e.clientY-r.top-this.ty)/this.scale/this.imgH*100};
  }
  bind(){
    const vp=this.vp;
    vp.addEventListener("pointerdown",e=>{
      try{vp.setPointerCapture(e.pointerId)}catch(_){}
      this.ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(this.ptrs.size===1)this.drag={x:e.clientX,y:e.clientY,tx:this.tx,ty:this.ty,moved:false};
      if(this.ptrs.size===2)this.drag=null;
    });
    vp.addEventListener("pointermove",e=>{
      if(!this.ptrs.has(e.pointerId)){this.loupeMove(e);return}
      const prev=this.ptrs.get(e.pointerId);
      this.ptrs.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(this.ptrs.size===1&&this.drag){
        const dx=e.clientX-this.drag.x,dy=e.clientY-this.drag.y;
        if(Math.abs(dx)+Math.abs(dy)>4)this.drag.moved=true;
        this.tx=this.drag.tx+dx;this.ty=this.drag.ty+dy;this.apply();
      } else if(this.ptrs.size===2){
        const a=[...this.ptrs.values()];
        const d0=Math.hypot(prev.x-a[0].x,prev.y-a[0].y),d1=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);
        if(d0>0&&d1>0){const ns=Math.min(8,Math.max(.2,this.scale*d1/d0));this.tx=a[0].x-400*ns;this.ty=a[0].y-300*ns;this.scale=ns;this.apply();}
      }
      this.loupeMove(e);
    });
    const up=e=>{
      const tap=this.ptrs.size===1&&this.drag&&!this.drag.moved;
      this.ptrs.delete(e.pointerId);if(!this.ptrs.size)this.drag=null;
      if(tap&&this.onTap)this.onTap(e);
    };
    vp.addEventListener("pointerup",up);vp.addEventListener("pointercancel",up);
    vp.addEventListener("wheel",e=>{
      e.preventDefault();
      const r=vp.getBoundingClientRect();
      const lx=(e.clientX-r.left-this.tx)/this.scale,ly=(e.clientY-r.top-this.ty)/this.scale;
      const f=e.deltaY<0?1.18:1/1.18;
      const ns=Math.min(8,Math.max(.2,this.scale*f));
      this.tx=e.clientX-r.left-lx*ns;this.ty=e.clientY-r.top-ly*ns;this.scale=ns;this.apply();
    },{passive:false});
    vp.tabIndex=0;
    vp.addEventListener("keydown",e=>{
      const st=60/this.scale;let used=true;
      if(e.key==="ArrowLeft")this.tx+=st;
      else if(e.key==="ArrowRight")this.tx-=st;
      else if(e.key==="ArrowUp")this.ty+=st;
      else if(e.key==="ArrowDown")this.ty-=st;
      else if(e.key==="+"||e.key==="=")this.scale=Math.min(8,this.scale*1.25);
      else if(e.key==="-")this.scale=Math.max(.2,this.scale/1.25);
      else if(e.key==="r"||e.key==="R")this.fit();
      else used=false;
      if(used){this.apply();e.preventDefault()}
    });
    window.addEventListener("resize",()=>{if(S.screen==="cases"&&S.caseId)this.fit()});
  }
  loupeMove(e){
    const loupe=this.vp.querySelector("#loupe");if(!loupe||!S.loupe)return;
    const r=this.vp.getBoundingClientRect();
    const mx=e.clientX-r.left,my=e.clientY-r.top;
    if(mx<0||my<0||mx>r.width||my>r.height){loupe.style.display="none";return}
    const lx=(mx-this.tx)/this.scale,ly=(my-this.ty)/this.scale;
    loupe.style.display="block";loupe.style.left=(mx-100)+"px";loupe.style.top=(my-100)+"px";
    const img=this.vp.querySelector("img");
    const natW=img.naturalWidth||this.c.imgW,natH=img.naturalHeight||this.c.imgH;
    const z=3;
    loupe.style.backgroundImage=`url(${this.c.img})`;
    loupe.style.backgroundSize=`${natW*z}px ${natH*z}px`;
    loupe.style.backgroundPosition=`${-(lx*z-100)}px ${-(ly*z-100)}px`;
  }
  hideLoupe(){const l=this.vp.querySelector("#loupe");if(l)l.style.display="none"}
}

function angleDeg(A,B,C){
  const v1={x:A.x-B.x,y:A.y-B.y},v2={x:C.x-B.x,y:C.y-B.y};
  return Math.acos(Math.max(-1,Math.min(1,(v1.x*v2.x+v1.y*v2.y)/(Math.hypot(v1.x,v1.y)*Math.hypot(v2.x,v2.y)||1))))*180/Math.PI;
}
