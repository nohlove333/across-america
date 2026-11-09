import {LEARNING} from './learning-data.js?v=quick91';
import {NPC_LAYOUT} from './npc-layout.js?v=quick91';
// Fictional names for the established AA guide characters; no portrait/placement changes.
export const GUIDE_NAMES={canada:['마리','노아','아미나','줄리앙'],usa:['마야','알렉스','조던','샘'],mexico:['루시아','마테오','엘레나','디에고'],panama:['소피아','안드레스','로사','다니엘'],peru:['발레리아','미겔','카밀라','하비에르'],brazil:['비아','루카스','아나','페드루'],argentina:['마르티나','니콜라스','솔','토마스'],chile:['카탈리나','벤하민','파스','펠리페']};
export function guideInfo(id,index,progress={solved:[]}){const d=LEARNING[id],npc=NPC_LAYOUT[id].filter(n=>n.group==='guide')[index],tasks=Object.entries(d.assignment).filter(([,i])=>i===index).map(([key])=>key),solved=tasks.filter(key=>(progress.solved||[]).includes(key)).length;return {id:npc.id,name:GUIDE_NAMES[id][index],role:npc.role,tasks,solved,total:tasks.length,done:tasks.length>0&&solved===tasks.length,status:tasks.length?(solved===tasks.length?'✓':'!'):'i'};}
