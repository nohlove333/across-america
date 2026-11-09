import {EXTRA_OUTFITS,composePlayerWardrobe} from './player-wardrobe.js?v=quick91';
import {readMaskedCell} from './sprite-masks.js?v=quick91';
export const HAIRS = ['숏컷','까까머리','가르마형','중단발','묶음머리','똥머리','곱슬머리'];
export const OUTFITS = ['기본 탐험복','필드 셔츠','여행 후드','데님 멜빵','남색 원피스','탐험 조끼·치마','왕자풍 의상','공주풍 의상',...EXTRA_OUTFITS];
// Retired choices retain stable IDs/assets for saved avatars and existing NPCs.
export const SELECTABLE_OUTFITS=OUTFITS.map((name,id)=>({name,id})).filter(x=>x.id!==1&&x.id!==4);
export const DIRECTIONS = ['front','back','left','right'];
export const COLORS = {
  hair: [['기본 회갈색','#bba596'],['밤갈색','#8f6a54'],['짙은 갈색','#59473e'],['차분한 검정','#343b3e'],['밝은 금발','#e1c48b'],['은회색','#b8b9c5'],['장밋빛','#cc96ac'],['민트빛','#94b8ac'],['선물 · 코코아 로즈','#ba8f92'],['선물 · 라벤더','#aba1c8'],['선물 · 구름빛','#9db9cb'],['선물 · 살구빛','#d9ad8d']],
  skin: [['피부색 1','#f5d7bf'],['피부색 2','#e7bd98'],['피부색 3','#d2a17b'],['피부색 4','#b7835b'],['피부색 5','#966747'],['피부색 6','#6e4d3a'],['밝은 아이보리','#fff0df']],
  eyes: [['갈색','#b38a52'],['짙은 갈색','#775239'],['푸른색','#7197b4'],['초록색','#81936c'],['보라색','#a18ab8'],['분홍색','#c889a1'],['선물 · 헤이즐','#a29a59'],['선물 · 청록','#609f9d'],['선물 · 황금빛','#c5a257'],['선물 · 자수정','#9182b8']]
};
export const DEFAULTS = Object.freeze({hair:0,outfit:0,hairColor:0,skinColor:0,eyeColor:0,name:'나의 탐험가'});
export function validConfig(input={}) {
  const c={...DEFAULTS};
  for(const [key,len] of Object.entries({hair:7,outfit:OUTFITS.length,hairColor:COLORS.hair.length,skinColor:7,eyeColor:COLORS.eyes.length})) if(Number.isInteger(input[key])&&input[key]>=0&&input[key]<len)c[key]=input[key];
  if(typeof input.name==='string')c.name=Array.from(input.name.replace(/[\u0000-\u001f\u007f]/g,'')).slice(0,10).join('')||DEFAULTS.name;
  return c;
}
export function directionFor(dx,dy){return Math.abs(dx)>Math.abs(dy)?(dx<0?'left':'right'):(dy<0?'back':'front');}
export function movementStep(dx,dy,dt,speed=128){const len=Math.hypot(dx,dy);if(!len)return{x:0,y:0};const s=Math.min(dt,.05)*speed/len;return{x:dx*s,y:dy*s};}
export function rgbToHsv(r,g,b){r/=255;g/=255;b/=255;const max=Math.max(r,g,b),min=Math.min(r,g,b),d=max-min;let h=0;if(d){if(max===r)h=((g-b)/d)%6;else if(max===g)h=(b-r)/d+2;else h=(r-g)/d+4;h*=60;if(h<0)h+=360;}return[h,max?d/max:0,max];}
function rgb(hex){return[1,3,5].map(n=>parseInt(hex.slice(n,n+2),16));}
const rawCache=new Map(),renderCache=new Map();
const clamp=(n,lo,hi)=>Math.max(lo,Math.min(hi,n));

// Each frame remains a complete drawing. Fixed semantic maps specify exactly
// which pixels may change; no HSV thresholds or face/hand/body rules run here.
export function loadAtlas(outfit){
  if(rawCache.has(outfit))return rawCache.get(outfit);
  const promise=(async()=>{
    const id=String(outfit+1).padStart(2,'0');
    const [img,metadata]=await Promise.all([
      (async()=>{const image=new Image();image.decoding='async';image.src=`assets/outfit-${id}.png`;await image.decode();return image;})(),
      import(`./assets/masks/outfit-${id}.js?v=quick91`).then(m=>m.default)
    ]);
    if(metadata.version!==1||metadata.cells.length!==56||metadata.sourceSize[0]!==img.naturalWidth||metadata.sourceSize[1]!==img.naturalHeight)throw Error('원본과 캐릭터 마스크가 맞지 않습니다.');
    const canvas=document.createElement('canvas');canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;
    const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.drawImage(img,0,0);
    return {cells:metadata.cells.map((meta,frameIndex)=>({...readMaskedCell(ctx,meta),frameIndex})),cellHeight:metadata.cellHeight};
  })();
  rawCache.set(outfit,promise);promise.catch(()=>rawCache.delete(outfit));return promise;
}

export async function getSprite(config,direction='front',phase=0){
  const c=validConfig(config),dir=DIRECTIONS.indexOf(direction);if(dir<0)throw Error('잘못된 방향입니다.');
  const key=[c.outfit,c.hair,dir,phase%2,c.hairColor,c.skinColor,c.eyeColor].join(':');
  if(renderCache.has(key))return renderCache.get(key);
  const atlas=await loadAtlas(c.outfit<8?c.outfit:0),cell=atlas.cells[c.hair*8+dir*2+phase%2];
  const palette=[null,rgb(COLORS.hair[c.hairColor][1]),rgb(COLORS.skin[c.skinColor][1]),rgb(COLORS.eyes[c.eyeColor][1])];
  const data=new Uint8ClampedArray(cell.pixels);const base=[0,240,248,225];
  for(let i=0;i<cell.mask.length;i++){
    const kind=cell.mask[i];if(!kind)continue;const p=i*4,target=palette[kind];
    // Skin uses the swatch as its lightest base (255), never an amplified tint.
    // Preserve existing shading; whites, dark outlines and clothes are left intact.
    const value=Math.max(data[p],data[p+1],data[p+2]);const factor=kind===2?clamp(value/255,.50,1):clamp(value/base[kind],.50,1.18);
    const saturation=rgbToHsv(data[p],data[p+1],data[p+2])[1];
    for(let k=0;k<3;k++){
      let value=target[k]*factor;
      if(kind===1&&saturation<.18){const tint=saturation/.18;value=value*tint+250*(1-tint);}
      data[p+k]=clamp(value,0,255);
    }
  }
  let canvas;if(c.outfit>=8)canvas=(await composePlayerWardrobe(cell,data,c.outfit-8,dir,palette[2])).canvas;else{canvas=document.createElement('canvas');canvas.width=cell.width;canvas.height=cell.height;canvas.getContext('2d').putImageData(new ImageData(data,cell.width,cell.height),0,0);}
  const result={canvas,anchorX:cell.anchorX,anchorY:cell.anchorY,unit:150/atlas.cellHeight,bounds:cell.bounds};
  renderCache.set(key,result);if(renderCache.size>180)renderCache.delete(renderCache.keys().next().value);return result;
}

export function drawSprite(ctx,sprite,x,y,scale=1){if(!sprite)return;const k=sprite.unit*scale;ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';ctx.drawImage(sprite.canvas,x-sprite.anchorX*k,y-sprite.anchorY*k,sprite.canvas.width*k,sprite.canvas.height*k);}

export async function atlasDiagnostics(outfit){const a=await loadAtlas(outfit);return a.cells.map((c,i)=>({hair:Math.floor(i/8),direction:DIRECTIONS[Math.floor(i%8/2)],phase:i%2,width:c.bounds.x1-c.bounds.x0+1,height:c.bounds.y1-c.bounds.y0+1,hairPixels:c.hairPixels,eyePixels:c.eyePixels}));}

// Animate one complete drawing with a continuous displacement field. No detached
// heads, arms or garment layers; the head and central torso remain pixel-stable.
const walkCache=new WeakMap();
export function walkingSprite(sprite,direction,phase){return animatedSprite(sprite,direction,phase,false);}
export function dancingSprite(sprite,direction,phase){return animatedSprite(sprite,direction,phase,true);}
function animatedSprite(sprite,direction,phase,dance){
  if(!sprite)return sprite;
  const beat=dance?[0,.707,1,.707,0,-.707,-1,-.707][phase%8]:[0,1,0,-1][phase%4];if(!beat)return sprite;
  let cache=walkCache.get(sprite);if(!cache){cache=new Map();walkCache.set(sprite,cache);}
  const key=`${dance}:${direction}:${beat}`;if(cache.has(key))return cache.get(key);
  const {canvas,bounds}=sprite,w=canvas.width,h=canvas.height;
  const ctx=canvas.getContext('2d'),source=ctx.getImageData(0,0,w,h).data;
  const output=new Uint8ClampedArray(source.length),height=bounds.y1-bounds.y0,width=bounds.x1-bounds.x0;
  const center=(bounds.x0+bounds.x1)/2;
  const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const nx=(x-center)/width,ny=(y-bounds.y0)/height,side=nx<0?-1:1;
    // Hands at the outer sides move in opposition; abdomen and face stay fixed.
    const arm=smooth(.14,.21,Math.abs(nx))*(1-smooth(.32,.40,Math.abs(nx)))*smooth(.65,.72,ny)*(1-smooth(.83,.88,ny));
    const leg=smooth(.88,.95,ny)*(1-smooth(.20,.29,Math.abs(nx)));
    const sideView=direction==='left'||direction==='right';
    const dx=beat*height*(dance?arm*.025*side:arm*(sideView?.018:.008)*side-leg*.009*side);
    const dy=beat*height*(dance?arm*.055*side:arm*.018*side-leg*.014*side);
    const sx=x-dx,sy=y-dy,x0=Math.floor(sx),y0=Math.floor(sy),fx=sx-x0,fy=sy-y0;
    const p=(y*w+x)*4;
    // Premultiplied bilinear sampling prevents dark fringes at transparent edges.
    let alpha=0;const sums=[0,0,0];
    for(let oy=0;oy<2;oy++)for(let ox=0;ox<2;ox++){
      const xx=x0+ox,yy=y0+oy;if(xx<0||xx>=w||yy<0||yy>=h)continue;
      const q=(yy*w+xx)*4,weight=(ox?fx:1-fx)*(oy?fy:1-fy),a=source[q+3]/255*weight;
      alpha+=a;for(let k=0;k<3;k++)sums[k]+=source[q+k]*a;
    }
    output[p+3]=Math.round(alpha*255);if(alpha)for(let k=0;k<3;k++)output[p+k]=Math.round(sums[k]/alpha);
  }
  const resultCanvas=document.createElement('canvas');resultCanvas.width=w;resultCanvas.height=h;
  resultCanvas.getContext('2d').putImageData(new ImageData(output,w,h),0,0);
  const result={...sprite,canvas:resultCanvas};cache.set(key,result);return result;
}
