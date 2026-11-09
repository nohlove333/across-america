// Semantic label maps are authored assets, never inferred from displayed colors.
export const REGION = Object.freeze({protected:0,hair:1,skin:2,iris:3});
export function unpackMap(encoded,count,bits){
  const binary=atob(encoded),expected=Math.ceil(count*bits/8);
  if(binary.length!==expected)throw Error('색 영역 마스크의 크기가 맞지 않습니다.');
  const result=new Uint8Array(count),limit=(1<<bits)-1;
  for(let i=0;i<count;i++)result[i]=(binary.charCodeAt(Math.floor(i*bits/8))>>((i*bits)%8))&limit;
  return result;
}
export function readMaskedCell(ctx,meta){
  const [x,y,width,height]=meta.rect,count=width*height;
  if(!Number.isInteger(count)||count<=0)throw Error('잘못된 캐릭터 마스크입니다.');
  const pixels=ctx.getImageData(x,y,width,height).data;
  const mask=unpackMap(meta.labels,count,2),opacity=unpackMap(meta.opacity,count,1);
  let hairPixels=0,eyePixels=0;
  for(let i=0;i<count;i++){
    pixels[i*4+3]=opacity[i]?255:0;
    if(!opacity[i]&&mask[i])throw Error('배경에는 색 영역을 지정할 수 없습니다.');
    if(mask[i]===REGION.hair)hairPixels++;if(mask[i]===REGION.iris)eyePixels++;
  }
  return {width,height,pixels,mask,bounds:meta.bounds,anchorX:meta.anchorX,anchorY:meta.anchorY,hairPixels,eyePixels};
}
