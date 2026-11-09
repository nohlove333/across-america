import {brazilSegmentClear} from './brazil-data.js?v=quick91';
// Dialogue and silent choreography; no progress keys or learning state are mutated.
export const TALK_DISTANCE=140;
export function canTalk(npc,player,blocked=false){return !blocked&&!!npc&&Math.hypot(npc.x-player.x,npc.y-player.y)<=TALK_DISTANCE;}
export class TangoEvent{
 constructor(){this.active=false;this.started=0;this.cooldown=0;this.enterCount=0;}
 update(player,time,blocked=false){const d=Math.hypot(player.x-1790,player.y-2940);if(blocked){this.active=false;return false;}if(this.active&&d>570){this.active=false;this.cooldown=time+2;}else if(!this.active&&d<440&&time>=this.cooldown){this.active=true;this.started=time;this.enterCount++;}return this.active;}
 pose(n,time,reduced=false){if(!this.active||reduced||!n.performance)return{x:0,y:0,heading:n.heading};const t=time-this.started,p=n.performance;if(p.kind==='dance'){const phase=(t%(12+p.pair*2))/(12+p.pair*2)*Math.PI*2+p.pair*.85,sign=p.side?-1:1,pause=Math.sin(phase)>0.8;return{x:pause?0:Math.sin(phase)*(5+p.pair),y:pause?0:Math.sin(phase*2)*(3+p.pair),heading:n.heading+sign*(pause?0:Math.sin(phase)*.8)};}return{x:0,y:Math.sin(t*2.2+(p.offset||0))*.9,heading:n.heading};}
}
export function speechDuration(text){return Math.max(2.6,Math.min(23.6,1.1+Array.from(text||'').length/9));}
export function bubblePlacement(point,rect,width,height){
 const margin=8,w=Math.min(width,Math.max(1,rect.width-margin*2)),h=Math.min(height,Math.max(1,rect.height-margin*2));
 const x=Math.max(margin,Math.min(rect.width-w-margin,point.x-w/2));
 const above=point.y-h-20,below=above<margin;
 const y=Math.max(margin,Math.min(rect.height-h-margin,below?point.y+23:above));
 return {x,y,width:w,height:h,tailX:Math.max(18,Math.min(w-18,point.x-x)),below};
}
export function inGreetingZone(n,player){
 const dx=player.x-n.x,dy=player.y-n.y,d=Math.hypot(dx,dy),heading=n.heading||0;
 // A shallow front semicircle includes someone crossing directly in front,
 // but never someone walking behind the NPC. World headings do not rotate.
 return d<165&&dx*Math.sin(heading)+dy*Math.cos(heading)>=-18;
}
const socialKey=n=>n.socialGroup?'group:'+n.socialGroup:'npc:'+n.id;
export class LivingDialogue{
 constructor(parent){this.indices=new Map();this.visits=new Map();this.nextAuto=0;this.node=document.createElement('aside');this.node.className='living-npc-bubble';this.node.hidden=true;this.node.setAttribute('aria-live','polite');this.node.setAttribute('aria-atomic','true');this.node.setAttribute('aria-label','주민의 말');parent.append(this.node);}
 reduced(){return typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;}
 close(){this.motion?.cancel();this.node.hidden=true;this.node.setAttribute('data-phase','hidden');this.current=null;this.queue=[];this.groupMembers=[];this.handoffAt=null;this.closing=false;this.enterPending=false;}
 dismiss(time){if(!this.current||this.closing)return;this.closing=true;this.enterPending=false;const duration=this.reduced()?0:240;this.closeAt=time+duration/1000;this.node.setAttribute('data-phase','exit');this.node.setAttribute('aria-hidden','true');this.motion?.cancel();this.motion=this.node.animate?.([{opacity:1,transform:'translateY(0)'},{opacity:0,transform:'translateY(-5px)'}],{duration,easing:'ease-in',fill:'forwards'});if(!duration)this.close();}
 show(n,player,{blocked=false,time=performance.now()/1000,automatic=false,continuation=false}={}){
  if(!automatic)this.queue=[];
  if(n?.active===false||!n?.lines?.length||!(automatic?!blocked&&Math.hypot(n.x-player.x,n.y-player.y)<=(continuation?440:165):canTalk(n,player,blocked))||n.group==='guide')return false;
  const visitors=n.lines.map((line,index)=>({line,index})).filter(v=>v.line.to!=='companion').sort((a,b)=>a.line.text.length-b.line.text.length);const visitor=visitors[0]?.index??0;
  const companion=n.lines.findIndex(v=>v.to==='companion');const index=automatic?(companion>=0?companion:Math.max(0,visitor)):this.current?.id===n.id&&!this.automatic?this.lineIndex:(this.indices.get(n.id)||0)%n.lines.length;
  const line=n.lines[index];if(!automatic)this.indices.set(n.id,(index+1)%n.lines.length);
  this.motion?.cancel();this.handoffAt=null;this.closing=false;this.current=n;this.lineIndex=index;this.automatic=automatic;this.until=time+speechDuration(line.text);this.textLength=Array.from(line.text).length;
  this.visits.set(socialKey(n),{inside:true,last:time});this.nextAuto=Math.max(this.nextAuto,time+1.8);
  this.node.replaceChildren();const frame=document.createElement('div');frame.className='npc-bubble-frame';const paper=document.createElement('div');paper.className='npc-bubble-paper';
  const label=document.createElement('strong');label.className='npc-bubble-name';label.textContent=n.name;const text=document.createElement('p');text.textContent=line.text;paper.append(label,text);frame.append(paper);this.node.append(frame);this.node.hidden=false;this.node.style.visibility='hidden';this.enterPending=true;this.node.setAttribute('aria-hidden','false');this.node.setAttribute('data-phase','enter');return true;
 }
 startGroup(n,roster,player,{blocked=false,time=performance.now()/1000,canGreet=()=>true,visible=()=>true}={}){
  if(!canTalk(n,player,blocked)||!canGreet(n)||n.group==='guide')return false;
  const members=n.socialGroup&&!n.performance?roster.filter(m=>m.socialGroup===n.socialGroup&&m.active!==false&&m.group!=='guide'&&!m.performance&&m.lines?.some(l=>l.to==='companion')&&Math.hypot(m.x-player.x,m.y-player.y)<=440&&visible(m)&&canGreet(m)):[];
  if(members.length<2)return this.show(n,player,{blocked,time});
  this.close();this.groupMembers=members;this.queue=members.slice(1);
  return this.show(members[0],player,{blocked,time,automatic:true,continuation:true});
 }
 tickAuto(roster,player,{time,blocked=false,visible=()=>true,canGreet=()=>true}={}){
  const groups=new Map(),candidates=[];
  for(const n of roster){if(!n.autoGreeting||n.active===false||n.group==='guide'||n.performance||!n.lines?.length)continue;const k=socialKey(n);if(!groups.has(k))groups.set(k,[]);groups.get(k).push(n);}
  for(const[k,ns]of groups){const visit=this.visits.get(k),distance=Math.min(...ns.map(n=>Math.hypot(n.x-player.x,n.y-player.y)));if(visit&&distance>320)visit.inside=false;
   if(visit&&(visit.inside||time-visit.last<30))continue;
   for(const n of ns)if((ns.length>1?Math.hypot(n.x-player.x,n.y-player.y)<165:inGreetingZone(n,player))&&visible(n)&&canGreet(n))candidates.push({n,d:Math.hypot(n.x-player.x,n.y-player.y)});
  }
  if(blocked){this.close();return false;}
  if(this.current&&this.automatic&&time>=this.until&&!this.closing){
   const nearGroup=(this.groupMembers||[this.current]).some(n=>Math.hypot(n.x-player.x,n.y-player.y)<280);
   if(this.queue?.length&&nearGroup){
    if(this.handoffAt==null){this.handoffAt=time+(this.reduced()?0:.12);this.node.setAttribute('data-phase','exit');this.motion?.cancel();this.motion=this.node.animate?.([{opacity:1},{opacity:0}],{duration:this.reduced()?0:150,fill:'forwards'});}
    if(time>=this.handoffAt){let next;while((next=this.queue.shift())){if(visible(next)&&canGreet(next))return this.show(next,player,{time,automatic:true,continuation:true});}this.handoffAt=null;}
   }else{this.queue=[];this.handoffAt=null;}
  }
  if(this.current||time<this.nextAuto)return false;const chosen=candidates.sort((a,b)=>a.d-b.d||a.n.id.localeCompare(b.n.id))[0];if(!chosen)return false;
  this.groupMembers=groups.get(socialKey(chosen.n))||[chosen.n];
  const first=this.groupMembers.find(n=>visible(n)&&canGreet(n))||chosen.n;
  this.queue=this.groupMembers.filter(n=>n.id!==first.id&&visible(n)&&canGreet(n)).sort((a,b)=>roster.indexOf(a)-roster.indexOf(b));
  return this.show(first,player,{time,automatic:true,continuation:this.groupMembers.length>1});
 }
 update(player,point,rect,blocked,time){
  if(!this.current)return;if(this.closing&&time>=this.closeAt){this.close();return;}
  if(blocked||!point||point.z<-1||point.z>1||point.x<0||point.x>rect.width||point.y<0||point.y>rect.height){this.close();return;}
  const distance=this.automatic&&this.groupMembers?.length?Math.min(...this.groupMembers.map(n=>Math.hypot(n.x-player.x,n.y-player.y))):Math.hypot(this.current.x-player.x,this.current.y-player.y);
  if(!this.closing&&(distance>(this.automatic?280:TALK_DISTANCE)||(time>=this.until&&!this.queue?.length&&this.handoffAt==null)))this.dismiss(time);if(!this.current)return;
  const max=Math.max(1,Math.min(112,rect.width-16));this.node.style.maxWidth=max+'px';this.node.style.width='max-content';
  const width=Math.min(this.node.offsetWidth||Math.max(112,Math.min(max,Math.min(this.textLength,15)*10+22)),max),height=this.node.offsetHeight||Math.ceil(this.textLength/Math.max(1,Math.floor((width-20)/10)))*18+32;
  const at=bubblePlacement(point,rect,width,height);this.node.style.left=at.x+'px';this.node.style.top=at.y+'px';this.node.style.setProperty?.('--tail-x',at.tailX+'px');this.node.setAttribute('data-tail',at.below?'up':'down');
  if(this.enterPending){this.enterPending=false;this.node.style.visibility='visible';this.motion=this.node.animate?.([{opacity:0,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:this.reduced()?0:200,easing:'ease-out'});}
 }
}

export class SambaEvent extends TangoEvent {
 constructor(points=[]){super();this.points=points;}
 update(player,time,blocked=false){const d=Math.min(...this.points.map(n=>Math.hypot(player.x-n.x,player.y-n.y)));if(blocked){this.active=false;return false;}if(this.active&&d>420){this.active=false;this.cooldown=time+2;}else if(!this.active&&d<280&&time>=this.cooldown){this.active=true;this.started=time;this.enterCount++;}return this.active;}
 pose(n,time,reduced=false){if(!this.active||reduced||!n.performance)return{x:0,y:0,heading:n.heading};const t=time-this.started+(n.performance.offset||0)*.6;let x=Math.sin(t*1.7)*3,y=Math.sin(t*2.2)*2;
  // Keep the original stance and choreography, but slide along a stage edge
  // instead of moving the feet through its backdrop clearance.
  if(!brazilSegmentClear(n,{x:n.x+x,y:n.y+y})){if(brazilSegmentClear(n,{x:n.x+x,y:n.y}))y=0;else if(brazilSegmentClear(n,{x:n.x,y:n.y+y}))x=0;else x=y=0;}
  return{x,y,heading:n.heading+Math.sin(t*1.1)*.24};}
}

// Poses are visual only: collision centers and original artwork stay unchanged.
export function conversationPose(n,speaker,time,reduced=false){
 if(!speaker||n.group==='guide'||n.performance||!(n.id===speaker.id||n.socialGroup&&n.socialGroup===speaker.socialGroup))return null;
 const speaking=n.id===speaker.id;
 return{heading:speaking?n.heading:Math.atan2(speaker.x-n.x,speaker.y-n.y),tilt:reduced?0:Math.sin(time*(speaking?5.5:2.2)+(n.id.length%5))*(speaking?.025:.008)};
}
