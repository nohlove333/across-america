// Player outfit14: the supplied summer-uniform reference, on the unchanged
// original garment rig. Only textiles/collar/tie change; hands and outer body
// silhouette are copied back from the canonical donor after compositing.
export function drawSchoolShirt(ctx,g,direction,pixels){
 const w=g.width,h=g.height,paint=new Uint8ClampedArray(pixels);
 for(let y=0;y<h;y++)for(let x=0;x<w;x++){
  const i=y*w+x,p=i*4,v=Math.max(...pixels.subarray(p,p+3));
  if(!pixels[p+3]||g.skin[i]||v<43)continue;
  // Source hem44, shoe panels62: measured in this 71px canonical donor.
  const color=y<44?[239,237,230]:y<62?[78,83,87]:[232,231,223];
  const shade=y<44?.87+Math.min(v/120,1)*.13:y<62?.72+Math.min(v/120,1)*.28:.80+Math.min(v/85,1)*.20;
  for(let k=0;k<3;k++)paint[p+k]=Math.round(color[k]*shade);
 }
 ctx.putImageData(new ImageData(paint,w,h),0,0);ctx.save();ctx.lineJoin='round';ctx.lineCap='round';
 const front=direction===0,back=direction===1,right=direction===3;
 const mirror=p=>right?p.map(([x,y])=>[w-x,y]):p;
 const body=front?[[25,0],[71,0],[67,15],[73,40],[68,44],[27,44],[22,40],[29,15]]:back?[[25,0],[69,0],[65,18],[70,41],[66,44],[28,44],[24,41],[29,18]]:mirror([[16,0],[37,0],[43,15],[40,43],[9,43],[9,28],[13,15]]);
 function polygon(points,fill,line='#555650',width=1.25){ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fillStyle=fill;ctx.fill();if(line){ctx.strokeStyle=line;ctx.lineWidth=width;ctx.stroke();}}
 polygon(body,'#efede6');
 function line(points,color='#c8c7bf',width=.85){ctx.beginPath();points.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();}
 if(back){line([[30,9],[64,9]]);line([[46,10],[47,32]],'#dad8d0');}
 else{
  const collars=front?[[[34,0],[48,5],[41,13],[34,7]],[[48,5],[61,0],[61,7],[54,13]]]:[mirror([[14,0],[23,5],[18,12],[13,6]]),mirror([[23,5],[29,0],[30,7],[26,12]])];
  for(const c of collars)polygon(c,'#faf8f0','#8c8e87',1);
  line(front?[[48,12],[48,42]]:mirror([[18,12],[17,41]]));
  // Plain shirt breast pocket, absent on the back; no blazer lapels or vest.
  if(front)line([[58,17],[67,17],[66,25],[59,25],[58,17]],'#c5c5bd',.8);
  const tie=front?[[45,6],[51,6],[50,11],[54,29],[48,35],[42,29],[46,11]]:mirror([[19,6],[23,6],[22,11],[24,29],[20,34],[17,29],[20,11]]);
  polygon(tie,'#4a535e','#343d47',1.1);ctx.save();ctx.clip();
  // Diagonal woven stripes, kept subdued at native game size.
  const tx=front?48:right?w-21:21;
  for(let y=9;y<37;y+=5)line([[tx-9,y+4],[tx+9,y-3]],'#b4bec8',.85);
  ctx.restore();
  for(const y of[37,41]){ctx.beginPath();ctx.arc(front?48:right?w-17:17,y,.6,0,Math.PI*2);ctx.fillStyle='#91958f';ctx.fill();}
 }
 // Keep short-sleeve seams in the existing arm pose (not a new limb drawing).
 if(front||back){line([[7,21],[20,26]],'#b0b0a8',.8);line([[77,26],[89,21]],'#b0b0a8',.8);}
 else line(mirror([[49,22],[64,28]]),'#b0b0a8',.8);
 ctx.restore();
 const out=ctx.getImageData(0,0,w,h);for(let i=0;i<w*h;i++)if(!pixels[i*4+3]||g.skin[i])out.data.set(pixels.subarray(i*4,i*4+4),i*4);ctx.putImageData(out,0,0);
}
