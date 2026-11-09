import * as T from './assets/vendor/three.module.js';
import {QUEBEC_EXPANSION,QUEBEC_SIZE,QUEBEC_HOUSES,QUEBEC_CHURCH,QUEBEC_POIS,quebecElevation,QUEBEC_TREES,QUEBEC_LAMPS,QUEBEC_BENCHES} from './quebec-data.js?v=quick91';
export const U=50;
const materials=new Map();
function mat(color){if(!materials.has(color))materials.set(color,new T.MeshLambertMaterial({color}));return materials.get(color);}
function box(g,x,y,z,w,h,d,color){const m=new T.Mesh(new T.BoxGeometry(w,h,d),mat(color));m.position.set(x,y+h/2,z);g.add(m);return m;}
function cone(g,x,y,z,r,h,color,sides=6){const m=new T.Mesh(new T.ConeGeometry(r,h,sides),mat(color));m.position.set(x,y+h/2,z);g.add(m);return m;}
function cylinder(g,x,y,z,r,h,color,sides=8){const m=new T.Mesh(new T.CylinderGeometry(r,r,h,sides),mat(color));m.position.set(x,y+h/2,z);g.add(m);return m;}
function roof(g,w,d,h,color){const shape=new T.Shape();shape.moveTo(-w/2,0);shape.lineTo(0,h);shape.lineTo(w/2,0);shape.closePath();const mesh=new T.Mesh(new T.ExtrudeGeometry(shape,{depth:d,bevelEnabled:false}),mat(color));mesh.position.z=-d/2;g.add(mesh);return mesh;}
function plaque(g,text,w,h,color='#405956'){
 if(typeof document==='undefined')return;
 const cv=document.createElement('canvas');cv.width=384;cv.height=96;const c=cv.getContext('2d');c.fillStyle=color;c.fillRect(0,0,384,96);c.strokeStyle='#d5c49c';c.lineWidth=8;c.strokeRect(6,6,372,84);c.fillStyle='#fff5da';c.textAlign='center';c.textBaseline='middle';c.font='bold 37px sans-serif';c.fillText(text,192,50,350);
 const tex=new T.CanvasTexture(cv);tex.colorSpace=T.SRGBColorSpace;const m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map:tex,side:T.DoubleSide}));g.add(m);return m;
}
function windowFrame(g,x,y,z,w=.48,h=.66){box(g,x,y,z,w+.13,h+.13,.10,'#e9dfc7');box(g,x,y+.06,z+.065,w,h,.045,'#718d91');box(g,x,y+.07,z+.095,.045,h,.03,'#e2d6b9');box(g,x,y+h*.52,z+.10,w,.035,.03,'#e2d6b9');box(g,x,y-.07,z+.06,w+.2,.09,.20,'#aa9676');}
function house(scene,item){const [gx,gz,gw,gd,gh,color,roofColor,name,face]=item,w=gw/U,d=gd/U,h=gh/U,upper=quebecElevation(gx+gw/2,gz+gd/2)>0,g=new T.Group();g.position.set((gx+gw/2)/U,quebecElevation(gx+gw/2,gz+gd/2)/U,(gz+gd/2)/U);g.userData.expanded=true;scene.add(g);box(g,0,0,0,w,h,d,color);box(g,0,0,0,w+.12,.24,d+.12,'#a99f8b');
 // Limestone courses, corner stones, cornice and drainpipes distinguish façades.
 for(let y=.55;y<h;y+=.4)box(g,0,y,d/2+.012,w,.018,.02,'#b4aa96');
 for(const x of [-w/2+.08,w/2-.08]){box(g,x,0,d/2+.04,.15,h,.09,'#e7dfc9');box(g,x,0,-d/2-.03,.15,h,.07,'#b8ad96');}
 box(g,0,h-.09,0,w+.18,.14,d+.18,'#e5dcc4');const rg=new T.Group();rg.position.y=h;g.add(rg);roof(rg,w+.35,d+.3,1.25,roofColor);
 // Seam lines and chimneys on the steep roof.
 for(let z=-d/2;z<=d/2;z+=.35){const line=new T.Mesh(new T.BoxGeometry(w*.53,.025,.025),mat('#4e6262'));line.position.set(-w*.255,h+.66,z);line.rotation.z=Math.atan2(1.25,w/2);g.add(line);}
 box(g,w*.27,h+.35,-d*.2,.32,1.1,.35,'#ad927a');box(g,w*.27,h+1.38,-d*.2,.44,.13,.44,'#8a8272');
 for(let y=1.55;y<h-.5;y+=1.05)for(let x=-w/2+.6;x<w/2-.35;x+=.95)windowFrame(g,x,y,d/2+.02);
 // Windows on back and sides remain visible from the upper-town viewpoint.
 for(const side of [-1,1])for(let z=-d/2+.6;z<d/2-.2;z+=.9)for(let y=1.5;y<h-.5;y+=1.05){const win=new T.Group();win.position.set(side*(w/2+.025),y,z);win.rotation.y=side*Math.PI/2;g.add(win);windowFrame(win,0,0,0,.45,.6);}
 const shop=new T.Group();shop.rotation.y=face===1?Math.PI/2:face===-1?-Math.PI/2:0;shop.position.z=face?0:d/2+.03;if(face)shop.position.x=face*w/2;g.add(shop);const sw=face?d:w;
 box(shop,-sw*.2,.12,.05,.55,1.04,.12,'#425d60');windowFrame(shop,sw*.19,.42,.06,sw*.33,.7);const sign=plaque(shop,name,Math.min(sw-.15,2.8),.38);if(sign)sign.position.set(0,1.23,.19);
 const awning=new T.Mesh(new T.BoxGeometry(sw+.12,.09,.73),mat(roofColor));awning.position.set(0,2.35,.4);awning.rotation.x=.16;shop.add(awning);
 for(let i=0;i<7;i++)box(shop,-sw/2+(i+.5)*sw/7,2.21,.72,sw/7,.18,.065,i%2?'#f2e6cf':roofColor);
 // Dormer houses and flower boxes are part of the characteristic roofline.
 for(const x of [-w*.24,w*.24]){box(g,x,h+.1,d*.28,.62,.65,.44,color);windowFrame(g,x,h+.18,d*.28+.24,.32,.39);const dr=new T.Group();dr.position.set(x,h+.73,d*.28);g.add(dr);roof(dr,.8,.6,.35,roofColor);}
 return g;
}
function tree(scene,gx,gz,scale=1,base=0){const g=new T.Group();g.position.set(gx/U,base,gz/U);g.scale.setScalar(scale);g.userData.expanded=true;scene.add(g);cylinder(g,0,0,0,.11,1.25,'#977c5f');for(const [x,y,z,r]of [[0,1.05,0,.74],[-.42,1.1,.05,.48],[.35,1.4,.06,.5],[0,1.65,0,.47]]){const leaf=new T.Mesh(new T.IcosahedronGeometry(r,1),mat(['#c99558','#b7724b','#d6ad64','#ae694d','#c89c65'][Math.abs(Math.round(gx/70+gz/45))%5]));leaf.position.set(x,y,z);g.add(leaf);}return g;}
function lamp(scene,x,z,h=1.9,base=0){const g=new T.Group();g.position.set(x/U,base,z/U);g.userData.expanded=true;scene.add(g);cylinder(g,0,0,0,.045,h,'#526367');box(g,0,h,0,.28,.35,.28,'#526367');box(g,0,h+.06,.15,.19,.2,.015,'#f5df9e');cone(g,0,h+.35,0,.25,.23,'#526367',4);return g;}
function bench(scene,x,z,rot=0){const g=new T.Group();g.position.set(x/U,0,z/U);g.rotation.y=rot;scene.add(g);for(const xx of [-.48,.48])box(g,xx,0,0,.09,.43,.55,'#65706a');for(let i=0;i<4;i++){box(g,0,.43,-.23+i*.15,1.3,.07,.12,'#ad9271');box(g,0,.55+i*.12,-.29,1.3,.08,.07,'#ad9271');}}
function terrainTexture(){if(typeof document==='undefined')return null;const cv=document.createElement('canvas');cv.width=2200;cv.height=1550;const c=cv.getContext('2d');c.fillStyle='#d9c9af';c.fillRect(0,0,2200,1550);
 for(let y=0;y<1550;y+=19)for(let x=0;x<2200;x+=31){const n=((x*17+y*13)%47)/47;c.fillStyle=['#cabea6','#ded0b4','#d4c4a9','#e4d6ba'][Math.floor(n*4)];c.fillRect(x+(y%38?15:0),y,29,17);}
 c.fillStyle='#c4b087';c.fillRect(0,0,370,1550);c.fillRect(0,0,1750,380);c.fillStyle='#e7d4b4';c.fillRect(685,520,250,900);c.fillRect(1080,670,540,120);c.fillRect(1620,400,190,1070);c.fillRect(320,1300,1320,130);
 c.strokeStyle='#bab098';c.lineWidth=2;for(let y=530;y<1420;y+=27)for(let x=700;x<930;x+=44)c.strokeRect(x+(y%54?20:0),y,41,24);
 c.strokeStyle='#b6b09e';for(let y=480;y<820;y+=35)for(let x=1160;x<1610;x+=48)c.strokeRect(x+(y%70?24:0),y,46,33);
 for(let i=0;i<260;i++){const x=100+(i*137)%1680,y=365+(i*191)%1080;c.save();c.translate(x,y);c.rotate((i%9)*.47);c.fillStyle=['#b97d48','#c49555','#ad674a','#d3a263'][i%4];c.beginPath();c.ellipse(0,0,3+i%3,1.8,0,0,Math.PI*2);c.fill();c.restore();}const tex=new T.CanvasTexture(cv);tex.colorSpace=T.SRGBColorSpace;return tex;}
export function buildQuebec(){const scene=new T.Scene();scene.background=new T.Color('#ead0bc');scene.userData.autumn=true;scene.add(new T.HemisphereLight('#ffe8d1','#938b94',1.6));const sun=new T.DirectionalLight('#ffd2a1',1.8);sun.position.set(-26,18,16);scene.add(sun);
 const terrain=new T.Mesh(new T.BoxGeometry(44,.25,31),new T.MeshLambertMaterial({color:'#ded3ba',map:terrainTexture()}));terrain.position.set(22,-.13,15.5);scene.add(terrain);
 // Cliff, wooded upper terrace and the lower-town embankment.
 box(scene,17.5,0,3.2,32,2.9,6.4,'#b0a083');box(scene,17.5,2.9,3.2,32,.1,6.4,'#baa77d');
 for(let x=120;x<1680;x+=155){box(scene,x/U,.12,6.52,2.85,2.5,.35,'#a7a48f');for(let y=.45;y<2.7;y+=.4)box(scene,x/U,y,6.72,2.7,.035,.035,'#bdb69e');}
 // Staircase is walkable and uses the same height function as the avatar.
 for(let i=0;i<20;i++){const z=320+i*10,top=quebecElevation(780*QUEBEC_EXPANSION,z*QUEBEC_EXPANSION)/U;box(scene,15.6,0,(z+5)/U,2.8,Math.max(.06,top),.2,'#c9bba2');}
 for(const x of [710,850]){for(let z=320;z<=520;z+=20)cylinder(scene,x/U,quebecElevation(780*QUEBEC_EXPANSION,z*QUEBEC_EXPANSION)/U,z/U,.045,.8,'#596967');const from=new T.Vector3(x/U,3.8,6.4),to=new T.Vector3(x/U,.8,10.4),delta=to.clone().sub(from),rail=new T.Mesh(new T.CylinderGeometry(.045,.045,delta.length(),6),mat('#596967'));rail.position.copy(from.clone().add(to).multiplyScalar(.5));rail.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize());scene.add(rail);}
 for(let x=160;x<1660;x+=80)if(x<700||x>870)cylinder(scene,x/U,3,6.1,.035,.8,'#66756a');box(scene,8.6,3.8,6.1,10.8,.06,.05,'#657467');box(scene,25.1,3.8,6.1,16.2,.06,.05,'#657467');
 for(const h of QUEBEC_HOUSES)house(scene,h);
 // Place Royale church: stone nave, pitched roof, arched entrance and bell tower.
 const [cx,cz,cw,cd]=QUEBEC_CHURCH,g=new T.Group();g.position.set((cx+cw/2)/U,0,(cz+cd/2)/U);g.userData.expanded=true;scene.add(g);box(g,0,0,0,cw/U,3.7,cd/U,'#d7d0bb');const rg=new T.Group();rg.position.y=3.7;g.add(rg);roof(rg,cw/U+.3,cd/U+.3,1.6,'#788b88');const arch=new T.Shape();arch.moveTo(-.53,0);arch.lineTo(.53,0);arch.lineTo(.53,1.12);arch.absarc(0,1.12,.53,0,Math.PI,false);arch.lineTo(-.53,0);const doorway=new T.Mesh(new T.ExtrudeGeometry(arch,{depth:.07,bevelEnabled:false}),mat('#6a6555'));doorway.position.z=cd/U/2+.08;g.add(doorway);for(let i=0;i<9;i++){const a=i*Math.PI/8;box(g,Math.cos(a)*.65,1.12+Math.sin(a)*.65,cd/U/2+.13,.17,.17,.12,'#eee4ce');}for(const xx of [-.68,.68])box(g,xx,0,cd/U/2+.13,.19,1.2,.12,'#eee4ce');for(let x=-.4;x<.5;x+=.16)box(g,x,0,cd/U/2+.17,.025,1.12,.02,'#938367');box(g,0,.67,cd/U/2+.18,1,.07,.035,'#95876a');windowFrame(g,0,2.15,cd/U/2+.08,.65,.9);box(g,0,4.1,cd/U/2-.5,1,1.45,1,'#e1d9bf');for(const x of [-.27,.27])box(g,x,4.45,cd/U/2+.02,.2,.57,.04,'#667c78');cone(g,0,5.55,cd/U/2-.5,.75,1.45,'#6a8380',4);box(g,0,6.94,cd/U/2-.5,.055,.5,.055,'#596d68');box(g,0,7.22,cd/U/2-.5,.3,.045,.055,'#596d68');
 for(const side of [-1,1])for(let z=-1.3;z<1.6;z+=.95){const a=new T.Group();a.position.set(side*2.28,1.55,z);a.rotation.y=side*Math.PI/2;g.add(a);windowFrame(a,0,0,0,.5,.95);}
 // Quiet square, statue pedestal, seating and trees.
 for(const [x,y,rot]of QUEBEC_BENCHES)bench(scene,x,y,rot);
 // Funicular rails and a small carriage along the bluff (decorative, not a real route).
 for(const x of [950,1010]){const rail=box(scene,x/U,0,8.1,.045,4.7,.06,'#6f7d76');rail.rotation.x=-.57;rail.position.y=1.7;}const car=new T.Group();car.position.set(19.6,1.45,8.0);scene.add(car);box(car,0,0,0,1.1,.85,.85,'#a66655');box(car,0,.25,.44,.8,.42,.035,'#b6d6d4');box(car,0,.85,0,1.25,.1,.95,'#ebe2c8');
 // Château Frontenac is a distant upper-town silhouette, not the main exploration site.
 const ch=new T.Group();ch.position.set(25,3.1,2.8);scene.add(ch);box(ch,0,0,0,7,3.8,2.5,'#b69b81');const cr=new T.Group();cr.position.y=3.8;ch.add(cr);roof(cr,7.3,2.9,2,'#6f958c');for(const x of [-3.3,0,3.3]){box(ch,x,0,0,1.6,5,1.8,'#b99e83');cone(ch,x,5,0,1.4,2.8,'#6f958c',4);}for(let x=-3;x<=3;x+=.55)for(let y=1;y<3.5;y+=.7)box(ch,x,y,1.27,.22,.4,.035,'#657d7c');
 for(const [x,z,s,b]of QUEBEC_TREES)tree(scene,x,z,s,b);
 for(const [x,z]of QUEBEC_LAMPS)lamp(scene,x,z);
 // River, stone quay, railing and a small moored boat.
 box(scene,40.2,.015,15.5,7.6,.04,31,'#b4abb0');box(scene,36.45,-.12,15.5,.45,.28,31,'#b6b19c');for(let z=450;z<1500;z+=65)cylinder(scene,36.1,0,z/U,.035,.65,'#667f7d');box(scene,36.1,.65,19,.045,.045,21,'#667f7d');for(let z=1;z<30;z+=1.4)box(scene,40+(z%3),.065,z,1.2,.012,.025,'#e6c8b2');const boat=new T.Group();boat.position.set(40,.07,20.5);scene.add(boat);box(boat,0,0,0,1.5,.4,4,'#f2e8d0');box(boat,0,.4,.2,1.1,.7,1.7,'#d8c5a4');box(boat,0,.7,1.08,.8,.3,.03,'#7fa2a6');cylinder(boat,0,1.1,-.3,.035,2.4,'#7b8c87');
 // Small future investigation props are deliberately distinct from scenery.
 const info=new T.Group();info.position.set(10.4,0,27.2);scene.add(info);for(const x of [-.45,.45])box(info,x,0,0,.08,1.35,.08,'#7d775e');const ip=plaque(info,'INFORMATION',1.25,.7);if(ip)ip.position.set(0,1.15,.06);box(info,0,1.58,0,1.55,.1,.45,'#819788');
 const chest=new T.Group();chest.position.set(31.6,0,25);scene.add(chest);box(chest,0,0,0,.9,.65,.65,'#a98a62');box(chest,0,.65,0,.95,.12,.7,'#c1a279');box(chest,0,.25,.34,.13,.22,.025,'#e6cf89');for(const x of [-.32,.32])box(chest,x,0,.34,.07,.7,.035,'#e0c27a');
 // Expand land, stairs and rails; preserve the physical sizes of grouped buildings/props.
 for(const o of scene.children){if(o.isLight||o.userData.expanded)continue;o.position.x*=QUEBEC_EXPANSION;o.position.z*=QUEBEC_EXPANSION;if(o.isMesh){o.scale.x*=QUEBEC_EXPANSION;o.scale.z*=QUEBEC_EXPANSION;}}
 scene.userData.terrain=terrain;scene.userData.poi=QUEBEC_POIS;scene.userData.size=QUEBEC_SIZE;return scene;
}
export function mergeStatic(scene){scene.updateMatrixWorld(true);const bins=new Map(),old=[];scene.traverse(o=>{if(!o.isMesh||Array.isArray(o.material))return;const key=o.material.uuid;if(!bins.has(key))bins.set(key,{material:o.material,parts:[]});let g=o.geometry.clone();if(g.index)g=g.toNonIndexed();bins.get(key).parts.push(g.applyMatrix4(o.matrixWorld));old.push(o);});for(const o of old)o.removeFromParent();for(const bin of bins.values()){const ps=[],ns=[],us=[],cs=[];for(const g of bin.parts){ps.push(...g.attributes.position.array);ns.push(...g.attributes.normal.array);if(g.attributes.uv)us.push(...g.attributes.uv.array);if(g.attributes.color)cs.push(...g.attributes.color.array);g.dispose();}const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(ps,3));geo.setAttribute('normal',new T.Float32BufferAttribute(ns,3));if(us.length===ps.length/3*2)geo.setAttribute('uv',new T.Float32BufferAttribute(us,2));if(cs.length===ps.length)geo.setAttribute('color',new T.Float32BufferAttribute(cs,3));scene.add(new T.Mesh(geo,bin.material));}scene.updateMatrixWorld(true);}
export function quebecCamera(aspect=1.6,{mode='street',x=(mode==='overview'?1100:800)*QUEBEC_EXPANSION,y=(mode==='overview'?775:1100)*QUEBEC_EXPANSION,zoom=.9,yaw=Math.atan2(4.5,18),pitch=Math.atan2(12,Math.hypot(4.5,18))}={}){
 const camera=new T.PerspectiveCamera(42,aspect,.1,300),wide=mode==='overview',target=new T.Vector3(x/U,wide?1.2:quebecElevation(x,y)/U+.9,y/U);
 const place=(at,distance)=>{const horizontal=Math.cos(pitch)*distance;camera.position.set(at.x+Math.sin(yaw)*horizontal,at.y+Math.sin(pitch)*distance,at.z+Math.cos(yaw)*horizontal);camera.lookAt(at);camera.updateMatrixWorld(true);camera.updateProjectionMatrix();};
 let fit=1;
 if(wide){const centre=new T.Vector3(22*QUEBEC_EXPANSION,1.2,15.5*QUEBEC_EXPANSION),bounds=[[0,0,0],[44,0,0],[0,0,31],[44,0,31],[0,3,0],[44,3,0],[25,10,2.8]].map(([x,y,z])=>[x*QUEBEC_EXPANSION,y,z*QUEBEC_EXPANSION]);for(let i=0;i<3;i++){place(centre,71*fit);const extent=Math.max(...bounds.map(p=>{const v=new T.Vector3(...p).project(camera);return Math.max(Math.abs(v.x),Math.abs(v.y));}));if(extent<=.88)break;fit*=extent/.88;}}
 place(target,(wide?71:22)/zoom*fit);camera.userData.target=target;return camera;
}
