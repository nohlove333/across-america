import {STORAGE_KEY,safeState} from './data.js?v=quick91';
import {LEARNING_KEY,freshLearning} from './learning-engine.js?v=quick91';
import {SCENE_MEMORY_KEY} from './scene-memory.js?v=quick91';
import {HALL_KEY,sanitizeHall} from './hall-state.js?v=quick91';
import {TUTORIAL_KEY} from './tutorial.js?v=quick91';
// Only this game's progress keys. Avatar and unrelated apps are never cleared.
export function clearExplorationRecords(storage){
 const entries=[[LEARNING_KEY,JSON.stringify(freshLearning())],[STORAGE_KEY,JSON.stringify(safeState())],[SCENE_MEMORY_KEY,JSON.stringify({version:1,regions:{}})],[HALL_KEY,JSON.stringify(sanitizeHall())],[TUTORIAL_KEY,null],['aa.hall.position.v1',null]],before=[];
 try{for(const[key]of entries)before.push([key,storage.getItem(key)]);for(const[key,value]of entries)value===null?storage.removeItem(key):storage.setItem(key,value);return{ok:true};}
 catch{let restored=true;for(const[key,value]of before){try{value===null?storage.removeItem(key):storage.setItem(key,value);}catch{restored=false;}}return{ok:false,restored};}
}
