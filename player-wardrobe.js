import {PLAYER_RIG,GARMENT_AXES} from './assets/player-wardrobe/rig.js?v=quick91';
import {drawSchoolShirt} from './player-school-shirt.js?v=quick91';
import metadata from './assets/player-wardrobe/metadata.js?v=quick91';
export const EXTRA_OUTFITS=['삼바 · 틸 튜닉','삼바 · 플럼 축제복','탱고 · 붉은 민소매 드레스','탱고 · 다크 재킷','정장 · 네이비 바지','정장 · 베이지 치마','교복 · 반소매 셔츠와 바지','교복 · 조끼와 치마'];
const cache=new Map();
async function garment(row,direction){const key=row+':'+direction;if(!cache.has(key))cache.set(key,(async()=>{const meta=metadata[row][direction],image=new Image();image.src=meta.src;await image.decode();const c=document.createElement('canvas');c.width=meta.width;c.height=meta.height;const ctx=c.getContext('2d');ctx.drawImage(image,0,0);return{...meta,pixels:ctx.getImageData(0,0,c.width,c.height).data,skin:Uint8Array.from(atob(meta.skin),v=>v.charCodeAt(0))};})());return cache.get(key);}
export function playerHeadBoundary(cell){return PLAYER_RIG[cell.frameIndex].shoulderY;}
export function headProtection(cell,join){
 const{width:w,height:h,mask,pixels}=cell,protectedPixels=new Uint8Array(w*h),headLabels=new Uint8Array(w*h),seen=new Uint8Array(w*h);
 for(let i=0;i<mask.length;i++)if(mask[i]===1||mask[i]===3)headLabels[i]=1;
 // Preserve face/ears by connected semantic components, without treating lower hands as face.
 for(let i=0;i<mask.length;i++)if(mask[i]===2&&!seen[i]){const part=[i];seen[i]=1;let top=h;for(let n=0;n<part.length;n++){const q=part[n],x=q%w,y=Math.floor(q/w);top=Math.min(top,y);for(const next of[x? q-1:-1,x<w-1?q+1:-1,y?q-w:-1,y<h-1?q+w:-1])if(next>=0&&!seen[next]&&mask[next]===2){seen[next]=1;part.push(next);}}if(top<join-12)for(const q of part)headLabels[q]=1;}
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){const i=y*w+x;if(!pixels[i*4+3])continue;if(y<join){protectedPixels[i]=1;continue;}for(let yy=Math.max(0,y-2);yy<=Math.min(h-1,y+2);yy++)for(let xx=Math.max(0,x-2);xx<=Math.min(w-1,x+2);xx++)if(headLabels[yy*w+xx])protectedPixels[i]=1;}
 return protectedPixels;
}
export async function composePlayerWardrobe(cell,basePixels,row,direction,skinRGB){
 const g=await garment(row,direction),join=playerHeadBoundary(cell),bodyHeight=cell.anchorY-join,scale=bodyHeight/(g.height-1),c=document.createElement('canvas');c.width=cell.width;c.height=cell.height;const ctx=c.getContext('2d');const garmentPixels=new Uint8ClampedArray(g.pixels);
 for(let i=0;i<g.skin.length;i++)if(g.skin[i]){const p=i*4,light=Math.max(g.pixels[p],g.pixels[p+1],g.pixels[p+2])/255;for(let k=0;k<3;k++)garmentPixels[p+k]=Math.round(skinRGB[k]*Math.max(.5,light));}
 const layer=document.createElement('canvas');layer.width=g.width;layer.height=g.height;layer.getContext('2d').putImageData(new ImageData(garmentPixels,g.width,g.height),0,0);
 if(row===6)drawSchoolShirt(layer.getContext('2d'),g,direction,garmentPixels); // authored clothing only; head and anatomy are reused

 ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(layer,cell.anchorX-GARMENT_AXES[row][direction]*scale,join,g.width*scale,g.height*scale);
 const output=ctx.getImageData(0,0,cell.width,cell.height),protectedPixels=headProtection(cell,join);for(let i=0;i<protectedPixels.length;i++)if(protectedPixels[i])output.data.set(basePixels.subarray(i*4,i*4+4),i*4);ctx.putImageData(output,0,0);return{canvas:c,join,protectedPixels};
}
