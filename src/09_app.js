
/* ============================================================
   v8 app chrome: splash, install prompt, beforeinstallprompt
   ============================================================ */
(function(){
  const splash=document.getElementById("splash");
  function hideSplash(){if(splash){splash.classList.add("hide");setTimeout(()=>splash.remove(),500);}}
  if(document.readyState==="complete"||document.readyState==="interactive")hideSplash();
  else window.addEventListener("DOMContentLoaded",()=>setTimeout(hideSplash,350));
  window.addEventListener("load",()=>setTimeout(hideSplash,600));

  let deferredPrompt=null;
  const bar=document.getElementById("installbar");
  const isStandalone=window.matchMedia("(display-mode:standalone)").matches||window.navigator.standalone===true;
  window.addEventListener("beforeinstallprompt",e=>{
    e.preventDefault();deferredPrompt=e;
    if(!isStandalone&&bar)bar.classList.add("show");
  });
  const ib=document.getElementById("install-btn");
  if(ib)ib.onclick=async()=>{
    if(!deferredPrompt)return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt=null;if(bar)bar.classList.remove("show");
    toast("App installed — find the X-Ray Coach icon on your desktop/home screen");
  };
  const idm=document.getElementById("install-dismiss");
  if(idm)idm.onclick=()=>{if(bar)bar.classList.remove("show")};
  window.addEventListener("appinstalled",()=>{if(bar)bar.classList.remove("show");toast("✅ Installed");confetti(50)});
})();
