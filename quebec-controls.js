export const ORBIT_DEFAULTS=Object.freeze({yaw:Math.atan2(4.5,18),pitch:Math.atan2(12,Math.hypot(4.5,18)),zoom:.95});
export const wrapAngle=angle=>((angle%(Math.PI*2))+Math.PI*2)%(Math.PI*2);
export const clampZoom=zoom=>Math.max(.45,Math.min(2.1,zoom));
export function orbitState(state,yaw,pitch=0){state.yaw=wrapAngle(state.yaw+yaw);state.pitch=Math.max(.35,Math.min(1.12,state.pitch+pitch));}
export function screenToWorld(dx,dy,yaw){return{x:dx*Math.cos(yaw)+dy*Math.sin(yaw),y:dy*Math.cos(yaw)-dx*Math.sin(yaw)};}
export function worldToScreen(dx,dy,yaw){return{x:dx*Math.cos(yaw)-dy*Math.sin(yaw),y:dx*Math.sin(yaw)+dy*Math.cos(yaw)};}
export function panOrbit(control,dx,dy,{yaw,pitch,unitsPerPixel}){const p=screenToWorld(dx,dy/Math.sin(pitch),yaw);control.x-=p.x*unitsPerPixel;control.y-=p.y*unitsPerPixel;control.follow=false;}
// Pointer gestures share one state machine: a pinch can never become a walk tap.
export function bindQuebecGestures(canvas,{onTap=()=>{},onRotate=()=>{},onZoom=()=>{},onPan=()=>{},onStart=()=>{}}={}){
 const points=new Map();let multi=false,axis='';const bindings=[];
 const listen=(name,fn)=>{canvas.addEventListener(name,fn,{passive:false});bindings.push([name,fn]);};
 const clear=()=>{points.clear();multi=false;axis='';};
 listen('contextmenu',e=>e.preventDefault());
 listen('pointerdown',e=>{if(e.button!==0&&e.button!==2)return;e.preventDefault();canvas.setPointerCapture(e.pointerId);if(!points.size){multi=false;axis='';onStart();}points.set(e.pointerId,{x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,distance:0,button:e.button,shift:e.shiftKey});if(points.size>1)multi=true;});
 listen('pointermove',e=>{const p=points.get(e.pointerId);if(!p)return;e.preventDefault();const before=[...points.values()].map(v=>({...v})),dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;p.distance+=Math.abs(dx)+Math.abs(dy);
  if(points.size===2){const after=[...points.values()],oldDistance=Math.hypot(before[0].x-before[1].x,before[0].y-before[1].y),distance=Math.hypot(after[0].x-after[1].x,after[0].y-after[1].y);if(oldDistance>8&&distance>8)onZoom(Math.max(.75,Math.min(1.33,distance/oldDistance)));return;}
  if(points.size!==1||multi||p.distance<8)return;if(p.button===2||p.shift||e.shiftKey){onPan(dx,dy);return;}if(!axis)axis=Math.abs(p.y-p.startY)>=Math.abs(p.x-p.startX)?'tilt':'rotate';if(axis==='tilt')onRotate(0,dy*.006);else onRotate(dx*.006,0);
 });
 listen('pointerup',e=>{const p=points.get(e.pointerId);if(!p)return;e.preventDefault();if(!multi&&points.size===1&&p.button===0&&p.distance<8&&Math.hypot(e.clientX-p.startX,e.clientY-p.startY)<8)onTap(e.clientX,e.clientY);points.delete(e.pointerId);if(!points.size)clear();});
 for(const type of ['pointercancel','lostpointercapture'])listen(type,e=>{if(points.has(e.pointerId)){points.delete(e.pointerId);multi=true;}if(!points.size)clear();});
 listen('wheel',e=>{e.preventDefault();onZoom(Math.exp(-Math.max(-100,Math.min(100,e.deltaY))*.002));});
 const win=globalThis.window,doc=globalThis.document;win?.addEventListener?.('blur',clear);const visibility=()=>{if(doc.hidden)clear();};doc?.addEventListener?.('visibilitychange',visibility);
 return()=>{for(const [name,fn]of bindings)canvas.removeEventListener(name,fn);win?.removeEventListener?.('blur',clear);doc?.removeEventListener?.('visibilitychange',visibility);clear();};
}
