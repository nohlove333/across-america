// Sweep the whole vector first, retaining a diagonal whenever the path is clear.
// Small substeps keep the same collision behavior at different frame rates.
export function moveVector(player,dx,dy,distance,{walkable,clear}){
 const length=Math.hypot(dx,dy);if(!length||distance<=0)return 0;const start={x:player.x,y:player.y},steps=Math.max(1,Math.ceil(distance/5)),sx=dx/length*distance/steps,sy=dy/length*distance/steps;
 const allowed=p=>walkable(p)&&clear(player,p);
 for(let i=0;i<steps;i++){const both={x:player.x+sx,y:player.y+sy};if(allowed(both)){player.x=both.x;player.y=both.y;continue;}const x={x:player.x+sx,y:player.y},y={x:player.x,y:player.y+sy};if(sx&&allowed(x)){player.x=x.x;}else if(sy&&allowed(y)){player.y=y.y;}else break;}
 return Math.hypot(player.x-start.x,player.y-start.y);
}
