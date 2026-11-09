// Stop outside the NPC's collision circle, within conversation range and line of sight.
export function planNpcApproach(npc,player,{walkable,path,speechClear=()=>true}){
 const candidates=[];if(npc.approach)candidates.push({...npc.approach});
 const angle=Math.atan2(player.y-npc.y,player.x-npc.x);
 for(const radius of [92,112,132])for(let i=0;i<24;i++){const a=angle+i*Math.PI/12;candidates.push({x:npc.x+Math.cos(a)*radius,y:npc.y+Math.sin(a)*radius});}
 const valid=candidates.filter(p=>walkable(p)&&Math.hypot(p.x-npc.x,p.y-npc.y)<=140&&speechClear(p,npc)).sort((a,b)=>Math.hypot(a.x-player.x,a.y-player.y)-Math.hypot(b.x-player.x,b.y-player.y));
 for(const goal of valid){const route=path(player,goal);if(route)return{goal,route};}return null;
}
