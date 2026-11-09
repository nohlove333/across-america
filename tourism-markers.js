import * as T from './assets/vendor/three.module.js';
import {tourismTargets} from './tourism-data.js?v=quick91';
export class TourismMarkers{
 constructor(scene,region,elevation){this.entries=[];if(!region)return;
  for(const t of tourismTargets(region)){
   const group=new T.Group();group.position.set(t.x/50,elevation(t.x,t.y)/50,t.y/50);
   const post=new T.Mesh(new T.BoxGeometry(.045,.65,.045),new T.MeshBasicMaterial({color:'#7c7967'}));post.position.y=.32;post.visible=false;group.add(post);
   const c=document.createElement('canvas');c.width=128;c.height=96;const g=c.getContext('2d');g.fillStyle='#fff1cf';g.fillRect(2,2,124,92);g.strokeStyle='#77715d';g.lineWidth=3;g.strokeRect(2,2,124,92);g.fillStyle='#374c47';g.font='bold 48px sans-serif';g.textAlign='center';g.fillText("i",64,64);
   const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;
   const sign=new T.Mesh(new T.PlaneGeometry(.56,.42),new T.MeshBasicMaterial({map:texture,side:T.DoubleSide,toneMapped:false}));sign.visible=false;sign.position.y=.8;sign.userData.tourismKey=t.key;group.add(sign);scene.add(group);this.entries.push(sign);
  }
 }
 update(camera){for(const e of this.entries)e.quaternion.copy(camera.quaternion);}
}
