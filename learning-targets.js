import {LEARNING} from './learning-data.js?v=quick91';
import {NPC_LAYOUT} from './npc-layout.js?v=quick91';
import {interactables} from './render.js?v=quick91';
export function learningTargets(region){const d=LEARNING[region.id],pois=interactables(region),guides=NPC_LAYOUT[region.id].filter(n=>n.group==='guide');return [...guides.map((n,i)=>({...n.approach,title:n.role,key:'npc-'+i,kind:'npc',guide:i,npc:n})),...d.tools.map(t=>({...pois.find(p=>p.key===t.poi),title:t.title,key:t.id,kind:'tool'})),{x:region.spawn[0],y:region.spawn[1],key:'treasure',kind:'treasure',title:'탐험 보관함'}];}
