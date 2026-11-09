// Restore the current tab's screen only for a browser reload.
export const REFRESH_SESSION_KEY='aa.expedition.refresh.v1';
export function createRefreshSession(storage){
 const clean=data=>{if(data?.version!==1||!/^#(?:map|hall|region\/[a-z]+)$/.test(data.hash))return null;const map=data.map,kind=map?.kind==='world'?'world':'america';return{version:1,hash:data.hash,scrollY:Number.isFinite(data.scrollY)?Math.max(0,Math.min(1e7,data.scrollY)):0,map:map&&[map.x,map.y,map.scale].every(Number.isFinite)?{kind,x:map.x,y:map.y,scale:Math.max(kind==='world'?1:1.4,Math.min(5.6,map.scale))}:null};};
 return{read(type){if(type!=='reload')return null;try{return clean(JSON.parse(storage?.getItem(REFRESH_SESSION_KEY)||'null'));}catch{return null;}},save(data){try{const next=clean({version:1,...data});if(next)storage?.setItem(REFRESH_SESSION_KEY,JSON.stringify(next));}catch{}},clear(){try{storage?.removeItem(REFRESH_SESSION_KEY);}catch{}}};
}
