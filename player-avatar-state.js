import {COLORS as OLD_COLORS} from './sprites.js?v=quick91';
import {COLORS,DEFAULTS,validConfig} from './player-sprites.js?v=quick91';
export const AVATAR_FORMAT='studio-v15';
const outfitMap=[9,9,9,9,6,0,7,6,4,5,2,3,7,0,9,8];
const rgb=hex=>[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16));
function nearest(kind,index,fallback){
  if(!Number.isInteger(index)||!OLD_COLORS[kind][index])return fallback;
  const old=rgb(OLD_COLORS[kind][index][1]);
  const distances=COLORS[kind].map(([,c])=>rgb(c).reduce((s,v,i)=>s+(v-old[i])**2,0));
  return distances.indexOf(Math.min(...distances));
}
export function readPlayerAvatar(raw){
  let value;try{value=JSON.parse(raw||'null');}catch{return {...DEFAULTS};}
  if(value?.format===AVATAR_FORMAT)return validConfig(value.avatar);
  const a=value?.avatar;if(!a||typeof a!=='object')return {...DEFAULTS};
  return validConfig({...a,outfit:outfitMap[a.outfit]??DEFAULTS.outfit,
    hairColor:nearest('hair',a.hairColor,DEFAULTS.hairColor),
    skinColor:nearest('skin',a.skinColor,DEFAULTS.skinColor),
    eyeColor:nearest('eyes',a.eyeColor,DEFAULTS.eyeColor)});
}
export function savePlayerAvatar(storage,key,avatar){
  const previous=storage.getItem(key);
  if(previous&&!storage.getItem(key+'.legacy-v1')){
    try{if(JSON.parse(previous)?.format!==AVATAR_FORMAT)storage.setItem(key+'.legacy-v1',previous);}catch{}
  }
  storage.setItem(key,JSON.stringify({version:2,format:AVATAR_FORMAT,avatar:validConfig(avatar)}));
}
