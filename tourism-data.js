import {REGION_BY_ID} from './data.js?v=quick91';
import {interactables} from './render.js?v=quick91';
import {TOURISM_CATALOG} from './tourism-catalog.js?v=quick91';
const cache=new Map();
// Keep the proven walkable sign anchors; only the real-place selection changes.
export function tourismTargets(region){
 if(!region)return[];if(cache.has(region.id))return cache.get(region.id);
 const pois=interactables(region),result=(TOURISM_CATALOG[region.id]||[]).map((entry,i)=>{
  const poi=pois.find(p=>p.key===entry.poiKey);if(!poi)throw Error('Missing tourism anchor '+region.id+':'+entry.poiKey);
  return{x:entry.x,y:entry.y,key:'tourist-'+entry.poiKey,kind:'tourism',title:entry.title,poi,number:String(i+1),entry};
 });cache.set(region.id,result);return result;
}
export function tourismPlace(regionId,key){return tourismTargets(REGION_BY_ID[regionId]).find(p=>p.key===key);}
export function tourismTargetForPOI(region,key){return tourismTargets(region).find(t=>t.poi.key===key||t.entry.aliases.includes(key));}
export function tourismCopy(region,target){
 const entry=tourismPlace(region.id,target?.key)?.entry;if(!entry)return null;
 return{subtitle:entry.location,localName:entry.localName,body:entry.sentences.join(' '),sentences:entry.sentences,sources:entry.sources};
}
