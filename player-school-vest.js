// Authored clothing paths inside the existing canonical garment silhouette.
// The original sleeves, hands, trousers, shoe contour and source shading remain
// the rig: no face, hair, skin, limb or whole-body geometry is redrawn.
export function drawSchoolVest(ctx,g,direction,pixels){
 const {width:w,height:h}=g,shirt=new Uint8ClampedArray(pixels);
 // The measured jacket hem is row 42 in the 71px donor. Replace its textile
 // with an ivory shirt; preserve dark contours, exposed hands and trousers.
 for(let y=0;y<42;y++)for(let x=0;x<w;x++){const i=y*w+x,p=i*4,v=Math.max(...pixels.subarray(p,p+3));if(!pixels[p+3]||g.skin[i]||v<42||v>145)continue;const f=.86+Math.min(1,v/110)*.14;for(let k=0;k<3;k++)shirt[p+k]=Math.round([237,232,219][k]*f);}
 ctx.putImageData(new ImageData(shirt,w,h),0,0);ctx.save();
 // Clip to the original opaque clothing silhouette, preserving its contour.
 const shape=direction===0?[[25,0],[36,0],[48,15],[60,0],[71,0],[66,18],[70,40],[25,40],[30,18]]:direction===1?[[25,0],[69,0],[65,18],[69,40],[25,40],[29,18]]:direction===2?[[18,0],[37,0],[43,12],[39,40],[8,40],[12,16],[17,12]]:[[64,0],[45,0],[39,12],[43,40],[74,40],[70,16],[65,12]];
 ctx.beginPath();shape.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fillStyle=direction===1?'#806675':'#896777';ctx.fill();ctx.strokeStyle='#3d353b';ctx.lineWidth=1.8;ctx.lineJoin='round';ctx.stroke();
 // A plain knitted V-neck and ribbed hem distinguish it from both lapel suits.
 ctx.strokeStyle='#b49a9f';ctx.lineWidth=1;ctx.beginPath();if(direction===0){ctx.moveTo(36,1);ctx.lineTo(48,17);ctx.lineTo(60,1);}ctx.moveTo(direction<2?27:direction===2?10:44,37);ctx.lineTo(direction<2?68:direction===2?39:72,37);ctx.stroke();ctx.restore();
 // Compositing cannot enlarge the supplied body or overwrite original hands.
 const out=ctx.getImageData(0,0,w,h),skin=g.skin;for(let i=0;i<w*h;i++){if(!pixels[i*4+3]||skin[i])out.data.set(pixels.subarray(i*4,i*4+4),i*4);}ctx.putImageData(out,0,0);
}
