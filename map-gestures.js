// Pointer Events cover tablet fingers, pens, and mouse without synthetic-click duplicates.
export function bindMapGestures(canvas,{hitTest,onSelect,onEnter,onPan,onZoom,now=()=>performance.now()}){
 const pointers=new Map();let lastTap=null,multi=false,pinch=0;
 const resetTap=()=>{lastTap=null;};
 canvas.addEventListener('pointerdown',e=>{if(e.button>0)return;if(!pointers.size){multi=false;pinch=0;}pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,distance:0,time:now()});if(pointers.size>1){multi=true;resetTap();const a=[...pointers.values()];pinch=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);}canvas.setPointerCapture?.(e.pointerId);canvas.focus({preventScroll:true});});
 canvas.addEventListener('pointermove',e=>{const p=pointers.get(e.pointerId);if(!p)return;const dx=e.clientX-p.x,dy=e.clientY-p.y;p.distance+=Math.hypot(dx,dy);p.x=e.clientX;p.y=e.clientY;if(pointers.size>=2){multi=true;resetTap();const a=[...pointers.values()],distance=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);if(pinch>0&&distance>0)onZoom(distance/pinch,(a[0].x+a[1].x)/2,(a[0].y+a[1].y)/2);pinch=distance;}else if(p.distance>10){resetTap();onPan(dx,dy);} });
 canvas.addEventListener('pointerup',e=>{const p=pointers.get(e.pointerId);if(!p)return;pointers.delete(e.pointerId);const t=now(),distance=Math.max(p.distance,Math.hypot(e.clientX-p.startX,e.clientY-p.startY));if(!multi&&distance<=10&&t-p.time<650){const id=hitTest(e.clientX,e.clientY);if(id){const double=lastTap&&lastTap.id===id&&t-lastTap.time<=450&&Math.hypot(e.clientX-lastTap.x,e.clientY-lastTap.y)<=44;onSelect(id);if(double){resetTap();onEnter(id);}else lastTap={id,x:e.clientX,y:e.clientY,time:t};}else resetTap();}else resetTap();if(!pointers.size){multi=false;pinch=0;}});
 // A normal capture-loss after pointerup must not cancel a legitimate first tap.
 for(const type of ['pointercancel','lostpointercapture'])canvas.addEventListener(type,e=>{if(!pointers.has(e.pointerId))return;pointers.delete(e.pointerId);resetTap();multi=pointers.size>0;pinch=0;});
 canvas.addEventListener('dblclick',e=>e.preventDefault());canvas.addEventListener('contextmenu',e=>e.preventDefault());
 return {resetTap};
}
