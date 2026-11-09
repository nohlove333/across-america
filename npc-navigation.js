import {NPC_LAYOUT} from './npc-layout.js?v=quick91';
const navigationGrids=new WeakMap();
export function npcTopology(region){return (NPC_LAYOUT[region]||[]).map(n=>`${n.x},${n.y},${n.radius}`).join(';');}
export function npcObstacleAt(region,x,y,radius=36){return (NPC_LAYOUT[region]||[]).find(p=>Math.hypot(x-p.x,y-p.y)<radius+p.radius)||null;}
export function npcSegmentClear(region,a,b){const dx=b.x-a.x,dy=b.y-a.y,dd=dx*dx+dy*dy;return !(NPC_LAYOUT[region]||[]).some(p=>{const t=dd?Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/dd)):0;return Math.hypot(a.x+t*dx-p.x,a.y+t*dy-p.y)<36+p.radius;});}
// Retain terrain-aware routing; only search around residents when its route is obstructed.
export function findNpcPath(a,b,{original,clear,bounds,cacheKey}){
 if(clear(a,b))return [{x:b.x,y:b.y}];
 const smooth=route=>{const result=[];let current=a,index=0;while(index<route.length){let next=route.length-1;while(next>index&&!clear(current,route[next]))next--;result.push(route[next]);current=route[next];index=next+1;}return result;};
 const direct=original(a,b);if(!direct)return null;let prev=a;if(direct.every(p=>{const ok=clear(prev,p);prev=p;return ok;}))return smooth(direct);
 const step=20,left=Math.floor(bounds.left/step),top=Math.floor(bounds.top/step),cols=Math.ceil(bounds.right/step)-left+1,rows=Math.ceil(bounds.bottom/step)-top+1,key=(x,y)=>y*cols+x,point=(x,y)=>({x:(left+x)*step,y:(top+y)*step});
 const signature=`${left},${top},${cols},${rows}:${cacheKey}`;
 let grid=cacheKey===undefined?null:navigationGrids.get(clear);
 if(!grid||grid.signature!==signature){grid={signature,points:new Map(),edges:new Map()};if(cacheKey!==undefined)navigationGrids.set(clear,grid);}
 const cache=grid.points;
 const valid=(x,y)=>{if(x<0||y<0||x>=cols||y>=rows)return false;const k=key(x,y);if(!cache.has(k)){const p=point(x,y);cache.set(k,clear(p,p));}return cache.get(k);};
 const snap=p=>{const x=Math.round(p.x/step)-left,y=Math.round(p.y/step)-top;for(let r=0;r<6;r++){let best=null,d=Infinity;for(let dx=-r;dx<=r;dx++)for(let dy=-r;dy<=r;dy++){const xx=x+dx,yy=y+dy,at=point(xx,yy);if(!valid(xx,yy)||!clear(p,at))continue;const distance=Math.hypot(p.x-at.x,p.y-at.y);if(distance<d){best=[xx,yy];d=distance;}}if(best)return best;}return null;};
 if(!clear(a,a)||!clear(b,b))return null;const start=snap(a),end=snap(b);if(!start||!end)return null;const costs=new Float64Array(cols*rows).fill(Infinity),from=new Int32Array(cols*rows).fill(-1),heap=[];const heuristic=(x,y)=>Math.hypot(x-end[0],y-end[1]);
 function push(n){heap.push(n);let i=heap.length-1;while(i){const p=(i-1)>>1;if(heap[p].f<=n.f)break;heap[i]=heap[p];i=p;}heap[i]=n;}
 function pop(){const first=heap[0],last=heap.pop();if(heap.length){let i=0;while(i*2+1<heap.length){let j=i*2+1;if(j+1<heap.length&&heap[j+1].f<heap[j].f)j++;if(heap[j].f>=last.f)break;heap[i]=heap[j];i=j;}heap[i]=last;}return first;}
 const begin=key(...start),finish=key(...end);costs[begin]=0;from[begin]=begin;push({k:begin,g:0,f:heuristic(...start)});
 while(heap.length){const n=pop();if(n.g!==costs[n.k])continue;if(n.k===finish)break;const x=n.k%cols,y=Math.floor(n.k/cols);for(const [dx,dy]of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const xx=x+dx,yy=y+dy;if(!valid(xx,yy))continue;const at=key(xx,yy),g=n.g+Math.hypot(dx,dy);if(g>=costs[at])continue;const edge=Math.min(n.k,at)*cols*rows+Math.max(n.k,at);if(!grid.edges.has(edge))grid.edges.set(edge,clear(point(x,y),point(xx,yy)));if(!grid.edges.get(edge))continue;costs[at]=g;from[at]=n.k;push({k:at,g,f:g+heuristic(xx,yy)});}}
 if(from[finish]===-1)return null;const route=[];for(let k=finish;k!==begin;k=from[k])route.push(point(k%cols,Math.floor(k/cols)));route.push(point(...start));route.reverse();route.push({x:b.x,y:b.y});return smooth(route);
}
