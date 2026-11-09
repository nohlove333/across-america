import * as T from './assets/vendor/three.module.js';

// The same scene geometry is also rendered without WebGL for asset QA and for
// devices that cannot create a WebGL context. This is not a second flat map.
export function drawSceneGeometry(c,scene,camera,width=c.canvas.width,height=c.canvas.height){
 scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);camera.updateProjectionMatrix();
 const gradient=c.createLinearGradient(0,0,0,height);gradient.addColorStop(0,scene.userData.autumn?'#bba6c1':'#73bce8');gradient.addColorStop(.62,scene.userData.autumn?'#e7b5a1':'#b9dcef');gradient.addColorStop(1,scene.userData.autumn?'#f2d0a7':'#d0e6ec');c.fillStyle=gradient;c.fillRect(0,0,width,height);
 const sky=scene.background?.isTexture&&scene.background.image;if(sky){const scale=Math.max(width/sky.width,height/sky.height);c.drawImage(sky,(width-sky.width*scale)/2,(height-sky.height*scale)/2,sky.width*scale,sky.height*scale);}const faces=[],matrix=new T.Matrix4(),worldMatrix=new T.Matrix4(),sun=new T.Vector3(-.4,.83,.4).normalize();
 const collect=(object,world)=>{
  const geo=object.geometry,pos=geo.attributes.position,uv=geo.attributes.uv,index=geo.index,total=index?index.count:pos.count;
  for(let n=0;n<total;n+=3){const ids=[0,1,2].map(i=>index?index.getX(n+i):n+i),verts=ids.map(i=>new T.Vector3().fromBufferAttribute(pos,i).applyMatrix4(world));let material=object.material;if(Array.isArray(material)){const g=geo.groups.find(g=>n>=g.start&&n<g.start+g.count);material=material[g?.materialIndex||0];}if(!material||material.visible===false)continue;
   let polygon=verts.map((v,i)=>({v,uv:uv?[uv.getX(ids[i]),uv.getY(ids[i])]:null}));
   const clipped=[];for(let i=0;i<polygon.length;i++){const a=polygon[i],b=polygon[(i+1)%polygon.length],da=-a.v.clone().applyMatrix4(camera.matrixWorldInverse).z-camera.near,db=-b.v.clone().applyMatrix4(camera.matrixWorldInverse).z-camera.near;if(da>=0)clipped.push(a);if((da>=0)!==(db>=0)){const t=da/(da-db);clipped.push({v:a.v.clone().lerp(b.v,t),uv:a.uv?a.uv.map((v,k)=>v+(b.uv[k]-v)*t):null});}}
   for(let fan=1;fan+1<clipped.length;fan++){const triangle=[clipped[0],clipped[fan],clipped[fan+1]],visibleVerts=triangle.map(p=>p.v);
   const pts=visibleVerts.map(v=>v.clone().project(camera));if(pts.every(v=>v.z>1)||pts.every(v=>v.x>1)||pts.every(v=>v.x<-1)||pts.every(v=>v.y>1)||pts.every(v=>v.y<-1))continue;
   const screen=pts.map(v=>[(v.x+1)*width/2,(1-v.y)*height/2]);const [a,b,e]=screen,area=(b[0]-a[0])*(e[1]-a[1])-(b[1]-a[1])*(e[0]-a[0]);if(material.side!==T.DoubleSide&&area>=0)continue;
   const normal=verts[1].clone().sub(verts[0]).cross(verts[2].clone().sub(verts[0])).normalize(),shade=material.isMeshBasicMaterial?1:.61+.38*Math.max(0,normal.dot(sun));let color=material.color.clone();if(material.vertexColors&&geo.attributes.color){const attr=geo.attributes.color,average=new T.Color(0,0,0);for(const id of ids){average.r+=attr.getX(id)/3;average.g+=attr.getY(id)/3;average.b+=attr.getZ(id)/3;}color.multiply(average);}if(object.isInstancedMesh&&object.instanceColor){const instance=new T.Color();object.getColorAt(object.userData.softwareInstance||0,instance);color.multiply(instance);}const [r,g,bv]=[color.r,color.g,color.b].map(v=>Math.round(T.MathUtils.clamp(T.ColorManagement.workingToColorSpace(new T.Color(v,v,v),T.SRGBColorSpace).r*shade,0,1)*255));
   faces.push({screen,depth:pts.map(v=>v.z),invW:visibleVerts.map(v=>1/-v.clone().applyMatrix4(camera.matrixWorldInverse).z),z:pts.reduce((s,v)=>s+v.z,0)/3,rgb:[r,g,bv],opacity:material.opacity,image:material.map?.image,uv:triangle[0].uv?triangle.map(p=>p.uv):null});
   }
  }
 };
 scene.traverse(o=>{if(!o.isMesh||o.isSprite||!o.visible)return;if(o.isInstancedMesh){for(let i=0;i<o.count;i++){o.getMatrixAt(i,matrix);worldMatrix.multiplyMatrices(o.matrixWorld,matrix);o.userData.softwareInstance=i;collect(o,worldMatrix);}}else collect(o,o.matrixWorld);});
 faces.sort((a,b)=>b.z-a.z);
 const output=c.getImageData(0,0,width,height),pixels=output.data,depth=new Float32Array(width*height);depth.fill(Infinity);
 for(const face of faces){const[a,b,e]=face.screen,area=edge(a,b,e);if(Math.abs(area)<.0001)continue;const x0=Math.max(0,Math.floor(Math.min(a[0],b[0],e[0]))),x1=Math.min(width-1,Math.ceil(Math.max(a[0],b[0],e[0]))),y0=Math.max(0,Math.floor(Math.min(a[1],b[1],e[1]))),y1=Math.min(height-1,Math.ceil(Math.max(a[1],b[1],e[1]))),tex=face.image&&face.uv?getTexturePixels(face.image,c):null;
  for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++){const point=[x+.5,y+.5],wa=edge(b,e,point)/area,wb=edge(e,a,point)/area,wc=1-wa-wb;if(wa<-.00001||wb<-.00001||wc<-.00001)continue;const z=wa*face.depth[0]+wb*face.depth[1]+wc*face.depth[2],at=y*width+x;if(z>=depth[at])continue;let[r,g,bv]=face.rgb,alpha=face.opacity??1;if(tex){const weights=[wa*face.invW[0],wb*face.invW[1],wc*face.invW[2]],sum=weights.reduce((a,b)=>a+b,0),u=face.uv.reduce((s,v,i)=>s+v[0]*weights[i],0)/sum,v=face.uv.reduce((s,v,i)=>s+v[1]*weights[i],0)/sum,tx=Math.max(0,Math.min(tex.width-1,Math.floor(u*tex.width))),ty=Math.max(0,Math.min(tex.height-1,Math.floor((1-v)*tex.height))),i=(ty*tex.width+tx)*4;r=tex.data[i];g=tex.data[i+1];bv=tex.data[i+2];alpha*=tex.data[i+3]/255;}if(alpha<.02)continue;const i=at*4;pixels[i]=r*alpha+pixels[i]*(1-alpha);pixels[i+1]=g*alpha+pixels[i+1]*(1-alpha);pixels[i+2]=bv*alpha+pixels[i+2]*(1-alpha);pixels[i+3]=255;depth[at]=z;}
 }
 c.putImageData(output,0,0);c.globalAlpha=1;return depth;
}
const texturePixels=new WeakMap();
function edge(a,b,p){return(p[0]-a[0])*(b[1]-a[1])-(p[1]-a[1])*(b[0]-a[0]);}
function getTexturePixels(image,context){if(texturePixels.has(image))return texturePixels.get(image);let c=image;if(!c.getContext){if(typeof document==='undefined')return null;c=document.createElement('canvas');c.width=image.width;c.height=image.height;c.getContext('2d').drawImage(image,0,0);}const data=c.getContext('2d').getImageData(0,0,c.width,c.height);texturePixels.set(image,data);return data;}

export function makeCamera(aspect=1120/720,yaw=.26,zoom=1,target=new T.Vector3(0,2,-3)){
 const camera=new T.PerspectiveCamera(43,aspect,.1,200);const distance=aspect<1.1?60:40;camera.position.set(target.x+Math.sin(yaw)*distance/zoom,target.y+13/zoom,target.z+Math.cos(yaw)*distance/zoom);camera.lookAt(target);camera.updateMatrixWorld(true);camera.updateProjectionMatrix();return camera;
}
