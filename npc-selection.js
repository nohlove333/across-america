// One nearby character, within the existing manual talking range.
export function selectedNpc(roster,player,blocked=false,clear=()=>true){
 if(blocked||!player)return null;
 return roster.filter(n=>n.active!==false&&(n.group==='guide'||n.lines?.length)&&Math.hypot(n.x-player.x,n.y-player.y)<=110&&clear(n)).sort((a,b)=>Math.hypot(a.x-player.x,a.y-player.y)-Math.hypot(b.x-player.x,b.y-player.y)||a.id.localeCompare(b.id))[0]?.id||null;
}
const outlines=new WeakMap();
export function outlinedNpcFrame(image){
 if(outlines.has(image))return outlines.get(image);
 const pad=3,canvas=document.createElement('canvas'),mask=document.createElement('canvas');canvas.width=mask.width=image.width+pad*2;canvas.height=mask.height=image.height+pad*2;
 const m=mask.getContext('2d');m.drawImage(image,pad,pad);m.globalCompositeOperation='source-in';m.fillStyle='#f4d34f';m.fillRect(0,0,mask.width,mask.height);
 const c=canvas.getContext('2d');for(let a=0;a<Math.PI*2;a+=Math.PI/8)c.drawImage(mask,Math.cos(a)*pad,Math.sin(a)*pad);c.drawImage(image,pad,pad);
 const result={image:canvas,pad};outlines.set(image,result);return result;
}
