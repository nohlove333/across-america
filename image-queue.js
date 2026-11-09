// Bound decoding work on classroom tablets while preserving the original PNGs.
export function createTaskQueue(limit=8){
 let active=0;const waiting=[];
 const pump=()=>{while(active<limit&&waiting.length){const {task,resolve,reject}=waiting.shift();active++;Promise.resolve().then(task).then(resolve,reject).finally(()=>{active--;pump();});}};
 return task=>new Promise((resolve,reject)=>{waiting.push({task,resolve,reject});pump();});
}
const enqueue=createTaskQueue(8);
export const loadNpcImage=src=>enqueue(async()=>{const image=new Image();image.decoding='async';image.src=src;await image.decode();return image;});
