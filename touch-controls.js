// Limit selection suppression to game controls; learning text stays selectable.
export function suppressControlSelection(controls){
 const cleanups=[];
 for(const button of controls)for(const type of ['contextmenu','selectstart','dragstart']){
  const prevent=e=>{e.preventDefault();e.stopPropagation();};button.addEventListener(type,prevent);cleanups.push(()=>button.removeEventListener(type,prevent));
 }
 return()=>cleanups.forEach(fn=>fn());
}
export function bindTouchControls({controls,danceButton,jumpButton,onDance,onJump}){
 suppressControlSelection(controls);
 for(const [button,action]of [[danceButton,onDance],[jumpButton,onJump]]){
  button.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();action();});
 }
}
