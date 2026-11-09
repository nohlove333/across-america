// The exact approved Studio v15 renderer/assets are retained separately.
export * from './player-avatar-art.js?v=quick91';
import {OUTFITS} from './player-avatar-art.js?v=quick91';
import {DANCE_FRAMES} from './dance-controls.js?v=quick91';
export const SELECTABLE_OUTFITS=OUTFITS.map((name,id)=>({name,id}));
const danceCache=new WeakMap();
const smooth=(a,b,v)=>{const t=Math.max(0,Math.min(1,(v-a)/(b-a)));return t*t*(3-2*t);};
// A continuous inverse warp keeps neck, sleeves, hair and dress connected.
// No cut-and-paste limbs, recolouring or changes to the approved idle artwork.
export function dancingSprite(sprite,direction,phase){
 if(!sprite)return sprite;
 const frame=((Math.floor(phase)%DANCE_FRAMES)+DANCE_FRAMES)%DANCE_FRAMES;
 if(frame===0||frame===8)return sprite;
 let cache=danceCache.get(sprite);
 if(!cache){const {width:w,height:h}=sprite.canvas;cache={frames:new Map(),source:sprite.canvas.getContext('2d').getImageData(0,0,w,h).data};danceCache.set(sprite,cache);}
 if(cache.frames.has(frame))return cache.frames.get(frame);
 const {width:w,height:h}=sprite.canvas,canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;
 const ctx=canvas.getContext('2d'),out=ctx.createImageData(w,h),src=cache.source;
 const angle=frame/DANCE_FRAMES*Math.PI*4,sway=Math.sin(angle),pulse=Math.sin(angle*2),cx=sprite.anchorX,foot=sprite.anchorY;
 const xMin=Math.max(0,Math.floor(sprite.bounds.x0-32)),xMax=Math.min(w-1,Math.ceil(sprite.bounds.x1+32));
 const yMin=Math.max(0,Math.floor(sprite.bounds.y0-16)),yMax=Math.min(h-1,Math.ceil(foot+18));
 for(let y=yMin;y<=yMax;y++){
  const body=smooth(320,378,y),feet=smooth(420,foot,y),arms=smooth(326,356,y)*(1-smooth(405,431,y));
  // Waist leads; head follows only slightly. The two feet alternate weight.
  const bend=sway*(3+12*body-11*feet);
  for(let x=xMin;x<=xMax;x++){
   const side=Math.tanh((x-cx)/25),edge=smooth(26,68,Math.abs(x-cx));
   const dx=bend+sway*side*edge*arms*7+feet*side*pulse*3;
   const dy=sway*side*edge*arms*10+feet*(sway*side*5+Math.abs(sway)*2);
   const sx=x-dx,sy=y-dy,x0=Math.floor(sx),y0=Math.floor(sy),fx=sx-x0,fy=sy-y0,p=(y*w+x)*4;
   let a=0,r=0,g=0,b=0;
   for(let oy=0;oy<2;oy++)for(let ox=0;ox<2;ox++){
    const xx=x0+ox,yy=y0+oy;if(xx<0||xx>=w||yy<0||yy>=h)continue;
    const q=(yy*w+xx)*4,weight=src[q+3]/255*(ox?fx:1-fx)*(oy?fy:1-fy);
    a+=weight;r+=src[q]*weight;g+=src[q+1]*weight;b+=src[q+2]*weight;
   }
   out.data[p+3]=Math.round(a*255);if(a){out.data[p]=Math.round(r/a);out.data[p+1]=Math.round(g/a);out.data[p+2]=Math.round(b/a);}
  }
 }
 ctx.putImageData(out,0,0);const result={...sprite,canvas};cache.frames.set(frame,result);return result;
}
