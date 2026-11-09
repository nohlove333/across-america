// Coalesce only position/camera writes. Mission and reward saves remain immediate.
export function createPositionWriter(storage,key,onError=()=>{},now=Date.now){
 let lastValue=null,lastAttempt=-Infinity,lastError=false;
 return(value,force=false)=>{
  const encoded=JSON.stringify(value),time=now();
  if(encoded===lastValue)return true;
  if(!force&&time-lastAttempt<900)return false;
  lastAttempt=time;
  try{storage.setItem(key,encoded);lastValue=encoded;lastError=false;return true;}
  catch{if(!lastError)onError();lastError=true;return false;}
 };
}
