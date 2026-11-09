import {LEARNING,FINAL_SENTENCES} from './learning-data.js?v=quick91';
export const LEARNING_KEY='aa.expedition.learning.v1';
export const missionCount=id=>Object.keys(LEARNING[id].assignment).length;
export const solvedCount=(state,id)=>Object.keys(LEARNING[id].assignment).filter(k=>state.countries[id].solved.includes(k)).length;
export const keyPrice=id=>missionCount(id)*10;
const ids=Object.keys(LEARNING),unique=(a,allowed)=>[...new Set(Array.isArray(a)?a.filter(v=>allowed.includes(v)):[])];
export function freshLearning(){return{version:3,countries:Object.fromEntries(ids.map(id=>[id,{read:false,seen:[],tools:[],solved:[],claimed:false,flipped:false,keyExchanged:false}])),final:false};}
export function sanitizeLearning(input){const out=freshLearning();if(![1,2,3].includes(input?.version))return out;for(const id of ids){const a=input.countries?.[id],b=out.countries[id];if(!a)continue;b.seen=input.version===1?unique(a.seen,[0,1,2]).map(i=>i+1):unique(a.seen,[0,1,2,3]);b.read=a.read===true&&b.seen.length===LEARNING[id].cards.length;b.tools=unique(a.tools,['tool0','tool1']);b.solved=unique(a.solved,['activity','q1','q2','q3']);b.claimed=a.claimed===true&&solvedCount(out,id)===missionCount(id);b.flipped=a.flipped===true&&b.claimed;b.keyExchanged=solvedCount(out,id)===missionCount(id)&&(a.keyExchanged===true||b.claimed);}out.final=input.final===true;return out;}
export const normalizeAnswer=value=>String(value??'').normalize('NFKC').trim().toLowerCase().replace(/[\s.,!?。！？·、“”‘’"'「」『』:;\-]/gu,'');
export function checkShort(id,qid,value){const q=LEARNING[id]?.questions.find(q=>q.id===qid);return!!q&&q.answers.some(a=>normalizeAnswer(a)===normalizeAnswer(value));}
export function readCard(state,id,index){if(!LEARNING[id]||!Number.isInteger(index)||index<0||index>=LEARNING[id].cards.length)return false;const c=state.countries[id];if(!c.seen.includes(index))c.seen.push(index);return true;}
export function finishReading(state,id){const c=state.countries[id];if(c.seen.length!==LEARNING[id].cards.length)return false;c.read=true;return true;}
export function collectTool(state,id,tool){const c=state.countries[id];if(!LEARNING[id].tools.some(t=>t.id===tool))return false;if(c.tools.includes(tool))return false;c.tools.push(tool);return true;}
export function solveShort(state,id,qid,value){if(!checkShort(id,qid,value))return false;const c=state.countries[id];if(!c.solved.includes(qid))c.solved.push(qid);return true;}
export function checkActivity(id,values){const a=LEARNING[id]?.activity;if(!a)return false;if(a.type==='locks')return values?.inletClosed===true&&values.level===0&&values.outletOpen===true&&values.shipPassed===true;return a.fields.every((f,i)=>values?.[i]===f[2]);}
export function solveActivity(state,id,values){const c=state.countries[id];if(c.tools.length!==2||!checkActivity(id,values))return false;if(!c.solved.includes('activity'))c.solved.push('activity');return true;}
export function claimTreasure(state,id){const c=state.countries[id];if(solvedCount(state,id)!==missionCount(id)||!c.keyExchanged)return false;const first=!c.claimed;c.claimed=true;return first;}
export function flipTreasure(state,id){const c=state.countries[id];if(!c.claimed)return false;const first=!c.flipped;c.flipped=true;return first;}
export function learningSummary(state){const all=Object.values(state.countries);return{read:all.filter(c=>c.read).length,tools:all.reduce((n,c)=>n+c.tools.length,0),solved:ids.reduce((n,id)=>n+solvedCount(state,id),0),treasures:all.filter(c=>c.claimed).length,keys:all.filter(c=>c.flipped).length};}
export function checkFinal(values){return Array.isArray(values)&&values.length===2&&values.every((v,i)=>normalizeAnswer(v)===normalizeAnswer(FINAL_SENTENCES[i]));}
// Explicit lock state transitions: no opening at unequal water levels; one-way lowering simulation.
export function lockStep(s,action){const n={...s};if(action==='close'&&!n.shipPassed)n.inletClosed=true;if(action==='lower'&&n.inletClosed&&!n.outletOpen)n.level=Math.max(0,n.level-1);if(action==='open'&&n.inletClosed&&n.level===0)n.outletOpen=true;if(action==='sail'&&n.outletOpen&&n.level===0)n.shipPassed=true;return n;}

export const checkFinalText=value=>normalizeAnswer(value)===normalizeAnswer(FINAL_SENTENCES.join(" "));

export const MISSION_COINS=10,KEY_PRICE=40;
export function countryWallet(state,id){const c=state.countries[id];return solvedCount(state,id)*MISSION_COINS-(c.keyExchanged?keyPrice(id):0);}
export function coinBalance(state){return ids.reduce((n,id)=>n+countryWallet(state,id),0);}
export function exchangeKey(state,id){const c=state.countries[id];if(c.keyExchanged||solvedCount(state,id)!==missionCount(id)||countryWallet(state,id)<keyPrice(id))return false;c.keyExchanged=true;return true;}
