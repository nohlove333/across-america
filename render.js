import {COUNTRY_GEOMETRY} from './assets/geography/countries-simple.js';
import {CHILE_POIS} from './chile-data.js?v=quick91';
import {ARGENTINA_POIS} from './argentina-data.js?v=quick91';
import {BRAZIL_POIS} from './brazil-data.js?v=quick91';
import {PERU_POIS} from './peru-data.js?v=quick91';
import {PANAMA_POIS} from './panama-data.js?v=quick91';
import {MEXICO_POIS} from './mexico-data.js?v=quick91';
import {TIMES_POIS} from './times-data.js?v=quick91';
import {QUEBEC_POIS} from './quebec-data.js?v=quick91';
import {LAND_RINGS} from './assets/geography/land-simple.js';
import {REGIONS} from './data.js?v=quick91';
export const MAP_W=1120;
export let MAP_H=720;
export function setMapHeight(height=720){MAP_H=height;mapLabelLayouts.clear();}
export const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
// Winkel Tripel: compromise world projection, standard parallel acos(2/pi).
// Formula: PROJ wintri / d3-geo-projection winkel3 (ISC).
export function project(lon,lat){const l=lon*Math.PI/180,p=lat*Math.PI/180,a=Math.acos(clamp(Math.cos(p)*Math.cos(l/2),-1,1)),sinc=a<1e-10?1:Math.sin(a)/a;return{x:MAP_W/2+195*(l*(2/Math.PI)+2*Math.cos(p)*Math.sin(l/2)/sinc)/2,y:360-195*(p+Math.sin(p)/sinc)/2};}
export function mapPreset(kind){return kind==='world'?{kind:'world',scale:1,x:MAP_W/2,y:360}:{kind:'america',scale:1.4,x:project(-88,13).x,y:project(-88,13).y};}
export function screenPoint(p,v){return{x:(p.x-v.x)*v.scale+MAP_W/2,y:(p.y-v.y)*v.scale+MAP_H/2};}
export function worldPoint(p,v){return{x:(p.x-MAP_W/2)/v.scale+v.x,y:(p.y-MAP_H/2)/v.scale+v.y};}
export function zoomMap(v,factor,point={x:MAP_W/2,y:MAP_H/2}){const old=worldPoint(point,v);v.scale=clamp(v.scale*factor,v.kind==='america'?1.4:1,5.6);const now=worldPoint(point,v);v.x+=old.x-now.x;v.y+=old.y-now.y;constrainMap(v);}
export function constrainMap(v){v.x=clamp(v.x,MAP_W*.17,MAP_W*.83);v.y=clamp(v.y,720*.20,720*.80);}
function polygon(c,points,fill,stroke){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.stroke();}}
export function round(c,x,y,w,h,r,fill,stroke){c.beginPath();c.roundRect(x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.stroke();}}
export function ellipse(c,x,y,rx,ry,fill){c.fillStyle=fill;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();}
const AMERICA_RINGS=LAND_RINGS.filter(r=>r.some(p=>p[1]>-60)&&r.every(p=>p[0]<0)&&r.reduce((sum,p)=>sum+p[0],0)/r.length<-30);
function landPath(c,rings=LAND_RINGS){c.beginPath();for(const ring of rings){ring.forEach(([lon,lat],i)=>{const p=project(lon,lat);i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y);});c.closePath();}}
function countryPath(c,id){const g=COUNTRY_GEOMETRY[id];if(!g)return;c.beginPath();for(const poly of (g.type==='Polygon'?[g.coordinates]:g.coordinates))for(const ring of poly){ring.forEach(([lon,lat],i)=>{const p=project(lon,lat);i?c.lineTo(p.x,p.y):c.moveTo(p.x,p.y);});c.closePath();}}
const projectedCountries=Object.fromEntries(Object.entries(COUNTRY_GEOMETRY).map(([id,g])=>[id,(g.type==='Polygon'?[g.coordinates]:g.coordinates).map(poly=>poly.map(r=>r.map(([lon,lat])=>{const p=project(lon,lat);return[p.x,p.y];})))]));
export function countryAtMapPoint(screen,v){const p=worldPoint(screen,v),inside=ring=>{let yes=false;for(let i=0,j=ring.length-1;i<ring.length;j=i++){const[a,b]=ring[i],[x,y]=ring[j];if((b>p.y)!==(y>p.y)&&p.x<(x-a)*(p.y-b)/(y-b)+a)yes=!yes;}return yes;};return Object.entries(projectedCountries).find(([,polys])=>polys.some(rings=>inside(rings[0])&&!rings.slice(1).some(inside)))?.[0]||null;}
const mapLabelLayouts=new Map();
export function drawMap(c,v,selected,visited=[]){
 c.fillStyle='#faf7ee';c.fillRect(0,0,MAP_W,MAP_H);c.save();c.translate(MAP_W/2,MAP_H/2);c.scale(v.scale,v.scale);c.translate(-v.x,-v.y);
 // Clean silhouettes: no graticule, equator line, or dense coastal strokes.
 landPath(c);c.fillStyle='#dcd6c5';c.fill('evenodd');
 landPath(c,AMERICA_RINGS);c.fillStyle='#b5c9bd';c.fill('evenodd');
 countryPath(c,selected);c.fillStyle='#e7be75';c.fill('evenodd');c.restore();
 const mobileWorld=v.kind==='world'&&(c.canvas.clientWidth||MAP_W)<500;const ls=clamp(MAP_W/(c.canvas.clientWidth||MAP_W),1,2.6);
 const anchors={canada:[-108,59],usa:[-102,38],mexico:[-103,24],panama:[-80,8.5],peru:[-75,-9],brazil:[-52,-10],argentina:[-64,-37],chile:[-72,-30]};
 const offsets={canada:[0,-6],usa:[0,0],mexico:[-48,7],panama:[65,6],peru:[-58,-2],brazil:[35,-5],argentina:[58,28],chile:[-61,20]};
 const labels=[],layoutKey=(v.kind||'america')+':'+Math.round(c.canvas.clientWidth||MAP_W)+':'+MAP_H;let layout=mapLabelLayouts.get(layoutKey);const base=mapPreset(v.kind||'america');if(!layout){layout={};mapLabelLayouts.set(layoutKey,layout);}
 for(let i=0;i<REGIONS.length;i++){
  const r=REGIONS[i],p=screenPoint(project(...anchors[r.id]),v),active=r.id===selected;if(mobileWorld&&!active){ellipse(c,p.x,p.y,3.5*ls,3.5*ls,'#847a63');continue;}const lw=92*ls,lh=30*ls,bp=screenPoint(project(...anchors[r.id]),base);
  if(!layout[r.id]){const [dx,dy]=offsets[r.id],bx=bp.x+dx*ls,by=bp.y+dy*ls,candidates=[];for(let radius=0;radius<9;radius++)for(const [sx,sy]of [[0,1],[0,-1],[-1,0],[1,0],[-1,1],[1,1],[-1,-1],[1,-1]])candidates.push({x:bx+sx*radius*22*ls,y:by+sy*radius*19*ls});candidates.sort((a,b)=>Math.hypot(a.x-bx,a.y-by)-Math.hypot(b.x-bx,b.y-by));const occupied=mobileWorld?[]:Object.values(layout).map(q=>q.base);const found=candidates.find(q=>q.x-lw/2>=8&&q.x+lw/2<=MAP_W-8&&q.y-lh/2>=40&&q.y+lh/2<=MAP_H-38&&!occupied.some(l=>Math.abs(q.x-l.x)<lw+7*ls&&Math.abs(q.y-l.y)<lh+8*ls))||{x:bx,y:by};layout[r.id]={base:found,offset:{x:found.x-bp.x,y:found.y-bp.y}};}
  // Screen-sized offset stays near its national anchor; zooming reduces the leader.
  const z=base.scale/v.scale,x=p.x+layout[r.id].offset.x*z,y=p.y+layout[r.id].offset.y*z;
  if(x+lw/2<0||x-lw/2>MAP_W||y+lh/2<0||y-lh/2>MAP_H)continue;
  const ex=clamp(p.x,x-lw/2,x+lw/2),ey=clamp(p.y,y-lh/2,y+lh/2);
  if(Math.hypot(ex-p.x,ey-p.y)>4*ls){c.beginPath();c.moveTo(p.x,p.y);c.lineTo(ex,ey);c.lineWidth=1*ls;c.strokeStyle='#9a927b';c.stroke();ellipse(c,p.x,p.y,2*ls,2*ls,'#81765e');}
  // Soft cream button, thin ink outline, inset highlight and restrained offset shadow.
  round(c,x-lw/2+2*ls,y-lh/2+3*ls,lw,lh,5*ls,'#b9aa87','#51483d');
  round(c,x-lw/2,y-lh/2,lw,lh,5*ls,active?'#f1d98a':'#fffdf5','#51483d');
  c.lineWidth=.7*ls;round(c,x-lw/2+2*ls,y-lh/2+2*ls,lw-4*ls,lh-4*ls,3*ls,null,active?'#fff1bd':'#e8e0ce');
  c.fillStyle='#51483d';c.font=`700 ${11*ls}px "AA Journal",sans-serif`;c.textAlign='center';c.fillText(`${String(i+1).padStart(2,'0')}  ${r.name}`,x,y+5*ls);labels.push({id:r.id,x:x-lw/2,y:y-lh/2,w:lw,h:lh,dot:p});
 }
 c.fillStyle='#92a18b';c.font='8px "AA Body",sans-serif';c.textAlign='left';c.fillText('색이 칠해진 곳은 선택한 국가입니다. 이름표를 눌러 탐험지를 골라요.',22,MAP_H-12);
 return labels;
}
export function block(c,x,y,w,h,height,color){
 ellipse(c,x+w/2+12,y+h/2+8,w*.62,h*.62,'#596c4e12');
 polygon(c,[[x,y-height],[x+w,y-height],[x+w,y+h],[x,y+h]],'#d8ccb4','#a2a58c');
 polygon(c,[[x+w,y-height],[x+w+12,y-height-9],[x+w+12,y+h-9],[x+w,y+h]],'#b9bca3','#a2a58c');
 polygon(c,[[x,y-height],[x+12,y-height-9],[x+w+12,y-height-9],[x+w,y-height]],color,'#a2a58c');
 c.fillStyle='#faf5e5';for(let xx=x+18;xx<x+w-10;xx+=35)round(c,xx,y-height+17,13,19,2,'#edf0df','#b3baa1');
}
export function drawLayout(c,r,{labels=true}={}){
 const [w,h]=r.size;c.fillStyle='#dfe7d0';c.fillRect(0,0,w,h);
 c.strokeStyle='#ccd7bd';c.lineWidth=1;for(let x=0;x<w;x+=80){c.beginPath();c.moveTo(x,0);c.lineTo(x,h);c.stroke();}for(let y=0;y<h;y+=80){c.beginPath();c.moveTo(0,y);c.lineTo(w,y);c.stroke();}
 if(r.id==='peru'){for(let i=0;i<7;i++)polygon(c,[[60,150+i*175],[900,70+i*175],[1220,180+i*175],[230,300+i*175]],i%2?'#d3ddbc':'#d8e2c3','#becba8');}
 if(r.id==='brazil'){ellipse(c,370,300,250,190,'#ccd9b6');ellipse(c,370,275,180,140,'#c0d0a5');}
 if(r.id==='chile'){for(let y=40;y<h;y+=260)polygon(c,[[1100,y+210],[1210,y+30],[1300,y+220]],'#cad6c3');}
 if(r.water){polygon(c,r.water,'#b8d5d7','#9fbdc0');c.strokeStyle='#d5e8e3';c.lineWidth=3;for(let i=0;i<7;i++){const x=w-120-i*26,y=130+i*115;c.beginPath();c.moveTo(x,y);c.lineTo(x+60,y+3);c.stroke();}}
 for(const [x,y,ww,hh,title]of r.districts){round(c,x,y,ww,hh,35,'#f0eddb70');if(labels){c.fillStyle='#8d9c7a';c.font='17px "AA Body",sans-serif';c.textAlign='center';c.fillText(title,x+ww/2,y+hh/2);}}
 for(const path of r.roads){c.lineCap='round';c.lineJoin='round';for(const [stroke,width]of [['#c9ccb1',62],['#e9e1c9',54]]){c.strokeStyle=stroke;c.lineWidth=width;c.beginPath();path.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.stroke();}}
 if(r.id==='panama'){for(const [x,y]of [[850,320],[1070,620]]){c.strokeStyle='#829e99';c.lineWidth=9;c.beginPath();c.moveTo(x,y);c.lineTo(x+200,y-120);c.stroke();}}
 for(const [x,y,ww,hh,hhgt]of r.blocks)block(c,x,y,ww,hh,hhgt,r.color);
 const [hx,hy,hw,hh]=r.hub;round(c,hx-40,hy+hh-5,hw+80,125,25,'#f1ead6','#c1c5a6');
 block(c,hx,hy,hw,hh,r.id==='peru'?26:65,r.color);
 // Open outlines communicate the massing stage rather than finished monuments.
 c.strokeStyle='#ffffff80';c.lineWidth=2;c.setLineDash([7,5]);c.strokeRect(hx+20,hy+20,hw-40,hh-40);c.setLineDash([]);
 if(labels){c.fillStyle='#546b4c';c.font='600 18px "AA Body",sans-serif';c.textAlign='center';c.fillText(r.landmark,hx+hw/2,hy+hh+68);c.fillStyle='#97a486';c.font='11px "AA Body",sans-serif';c.fillText('랜드마크 구역',hx+hw/2,hy+hh+90);}
 for(let i=0;i<r.stops.length;i++){const [x,y,title]=r.stops[i];ellipse(c,x,y+10,26,12,'#6a82551c');round(c,x-21,y-40,42,45,9,'#f6f1dd','#94a27c');c.fillStyle='#8a9c70';c.font='bold 18px "AA Body",sans-serif';c.textAlign='center';c.fillText(['i','▤','◇'][i],x,y-11);if(labels){c.font='12px "AA Body",sans-serif';c.fillStyle='#768b60';c.fillText(title,x,y+35);}}
 c.strokeStyle='#a5b68c';c.setLineDash([7,6]);c.lineWidth=2;c.strokeRect(55,70,w-110,h-115);c.setLineDash([]);
 if(labels){c.font='12px "AA Body",sans-serif';c.fillStyle='#8ca17a';c.textAlign='left';c.fillText('이동 가능한 탐험 범위',75,h-18);}
}
const detailedPreviews=new Map();
export function drawPreview(c,r,w,h){if(r.detail&&typeof window!=='undefined'){let preview=detailedPreviews.get(r.id);if(!preview){preview=new Image();preview.src=r.id==='chile'?'assets/chile-preview.png?v=1':r.id==='argentina'?'assets/argentina-preview.png?v=1':r.id==='brazil'?'assets/brazil-preview.png?v=2':r.id==='peru'?'assets/peru-preview.png?v=1':r.id==='panama'?'assets/panama-preview.png?v=1':r.id==='mexico'?'assets/mexico-preview.png?v=1':r.id==='usa'?'assets/times-preview.png?v=2':'assets/quebec-preview.png?v=9';detailedPreviews.set(r.id,preview);}if(preview.complete&&preview.naturalWidth){c.fillStyle=r.id==='usa'?'#1c2843':'#d8e8df';c.fillRect(0,0,w,h);const scale=Math.min(w/preview.width,h/preview.height);c.drawImage(preview,(w-preview.width*scale)/2,(h-preview.height*scale)/2,preview.width*scale,preview.height*scale);return;}if(!preview.complete)preview.addEventListener('load',()=>drawPreview(c,r,w,h),{once:true});}c.fillStyle='#e9edde';c.fillRect(0,0,w,h);const scale=Math.min((w-25)/r.size[0],(h-20)/r.size[1]);c.save();c.translate((w-r.size[0]*scale)/2,(h-r.size[1]*scale)/2+7);c.scale(scale,scale);drawLayout(c,r,{labels:false});c.restore();}
export function interactables(r){if(r.id==='canada')return QUEBEC_POIS;if(r.id==='usa')return TIMES_POIS;if(r.id==='mexico')return MEXICO_POIS;if(r.id==='panama')return PANAMA_POIS;if(r.id==='peru')return PERU_POIS;if(r.id==='brazil')return BRAZIL_POIS;if(r.id==='argentina')return ARGENTINA_POIS;if(r.id==='chile')return CHILE_POIS;return[{x:r.hub[0]+r.hub[2]/2,y:r.hub[1]+r.hub[3]+65,title:r.landmark,kind:'landmark'},...r.stops.map(([x,y,title])=>({x,y,title,kind:'stop'}))];}
