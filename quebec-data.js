export const QUEBEC_EXPANSION=1.25;
// Game coordinates. The spatial relationships follow official tourism references;
// footprints, distances and the cliff height are deliberately composed for play.
export const QUEBEC_SIZE=[2200,1550];
export const QUEBEC_HOUSES=[
 [400,540,230,130,160,'#d4c5ac','#5e7778','ATELIER',1],
 [390,720,245,145,190,'#d8d1bf','#925f54','BOUTIQUE',1],
 [400,915,230,135,165,'#c4c5b8','#63798a','LIBRAIRIE',1],
 [390,1100,245,155,200,'#e5d3b4','#6f7e6b','CAFÉ',1],
 [955,760,230,135,180,'#d5c2a3','#796b7e','GALERIE',-1],
 [960,950,225,145,155,'#e1cbb1','#9c6b58','ARTISAN',-1],
 [960,1145,230,140,180,'#c4c9bc','#5a777e','MAISON',-1],
 [1400,820,190,150,160,'#e1d5be','#6c7f87','ATELIER',0],
 [1350,1050,230,145,175,'#d2bfa6','#877566','BOUTIQUE',0],
 [1270,1240,240,140,150,'#d9cfbc','#667b72','CAFÉ',0],
 [130,680,200,160,180,'#c8bba6','#7c8585','MAISON',0],
 [130,930,185,170,150,'#e2d6c1','#86675c','MAISON',0]
];
export const QUEBEC_CHURCH=[1370,430,225,220];
export const QUEBEC_POIS=[
 {x:800,y:880,title:'프티 샹플랭 거리',kind:'landmark',key:'street'},
 {x:1300,y:735,title:'로얄 광장',kind:'place',key:'square'},
 {x:780,y:530,title:'카스쿠 계단',kind:'place',key:'stairs'},
 {x:1740,y:1020,title:'세인트로렌스강 전망',kind:'place',key:'river'},
 {x:520,y:1410,title:'거리 안내소',kind:'stop',key:'guide'},
 {x:1580,y:1305,title:'탐험 보관함',kind:'stop',key:'chest'}
];
// Geometry and collisions read the same prop placement lists.
export const QUEBEC_TREES=[[220,110,1.1,3],[320,90,.9,3],[1020,120,1,3],[160,220,1.3,3],[1770,420,.7,0],[1770,690,.7,0],[1770,1320,.75,0],[300,1320,1,0],[240,1180,.9,0]];
export const QUEBEC_LAMPS=[[1590,600],[1800,840],[1800,1230]];
export const QUEBEC_BENCHES=[];
export const QUEBEC_AVATAR={radius:36,height:94};
function legacyElevation(x,y){return y<320?150:y<=520&&x>=710&&x<=850?150*(520-y)/200:0;}
const rect=(id,x,y,w,h,bottom=0,top=300)=>({id,shape:'rect',x,y,w,h,bottom,top});
const circle=(id,x,y,r,bottom=0,top=300)=>({id,shape:'circle',x,y,r,bottom,top});
const segment=(id,ax,ay,bx,by,r,bottom=0,top=400)=>({id,shape:'segment',ax,ay,bx,by,r,bottom,top});
function shopRect(h,along,out,width,depth){const [x,y,w,d,,,,,face]=h;if(face===1)return[x+w+out-depth/2,y+d/2+along-width/2,depth,width];if(face===-1)return[x-out-depth/2,y+d/2-along-width/2,depth,width];return[x+w/2+along-width/2,y+d+out-depth/2,width,depth];}
export const QUEBEC_OBSTACLES=[];
for(const [i,h]of QUEBEC_HOUSES.entries()){
 const [x,y,w,d,ht,,,,face]=h,base=legacyElevation(x+w/2,y+d/2);QUEBEC_OBSTACLES.push(rect('house-'+i,x,y,w,d,base,base+ht+70));
 const sw=face?d:w;
 QUEBEC_OBSTACLES.push(rect('awning-'+i,...shopRect(h,0,20,sw+6,36.5),base+115,base+122));

}
QUEBEC_OBSTACLES.push(rect('church',...QUEBEC_CHURCH,0,350),rect('chateau',1040,65,420,155,150,550));
// The wall is a narrow ledge, not a blanket barrier over the empty lower street.
QUEBEC_OBSTACLES.push(segment('cliff-west',85,320,710,320,5),segment('cliff-east',850,320,1680,320,5));
for(const [a,b]of [[160,700],[850,1660]])QUEBEC_OBSTACLES.push(segment('terrace-rail-'+a,a,305,b,305,3,150,195));
for(const x of [710,850])for(let y=320;y<530;y+=10){const base=legacyElevation(780,Math.min(520,y+5));QUEBEC_OBSTACLES.push(segment('stair-rail-'+x+'-'+y,x,y,x,y+10,4,Math.max(0,base-8),base+55));}
// Low cable hardware and the suspended cabin really intersect a walking avatar.
QUEBEC_OBSTACLES.push(rect('funicular-cabin',952.5,378.75,55,42.5,72,122));
for(const x of [950,1010])QUEBEC_OBSTACLES.push(segment('funicular-rail-'+x,x,342,x,468,2,0,210));
for(const [i,[x,y,s,base]]of QUEBEC_TREES.entries())QUEBEC_OBSTACLES.push(circle('tree-'+i,x,y,40*s,base*50,base*50+155*s));
for(const [i,[x,y]]of QUEBEC_LAMPS.entries())QUEBEC_OBSTACLES.push(circle('lamp-'+i,x,y,3,0,115));
for(const [i,[x,y,rot]]of QUEBEC_BENCHES.entries()){const turn=Math.abs(Math.sin(rot))>.5;QUEBEC_OBSTACLES.push(rect('bench-'+i,x-(turn?17:33),y-(turn?33:17),turn?34:66,turn?66:34,0,50));}
QUEBEC_OBSTACLES.push(rect('guide-board',487,1348,66,24,0,90),rect('chest',1556,1233,48,35,0,40),segment('quay-rail',1805,450,1805,1500,3,0,38));
// Expand distances between object centres while retaining buildings and avatar dimensions.
const S=QUEBEC_EXPANSION;
for(const a of [QUEBEC_HOUSES, [QUEBEC_CHURCH]])for(const h of a){h[0]=h[0]*S+(S-1)*h[2]/2;h[1]=h[1]*S+(S-1)*h[3]/2;}
for(const list of [QUEBEC_TREES,QUEBEC_LAMPS,QUEBEC_BENCHES])for(const p of list){p[0]*=S;p[1]*=S;}
for(const p of QUEBEC_POIS){p.x*=S;p.y*=S;}
for(const o of QUEBEC_OBSTACLES){if(o.shape==='segment'){o.ax*=S;o.ay*=S;o.bx*=S;o.by*=S;o.r*=S;}else if(o.shape==='rect'){o.x=o.x*S+(S-1)*o.w/2;o.y=o.y*S+(S-1)*o.h/2;}else{o.x*=S;o.y*=S;}}
QUEBEC_SIZE[0]*=S;QUEBEC_SIZE[1]*=S;
export const QUEBEC_BOUNDS={left:90*S,right:1785*S,top:70*S,bottom:1510*S};
export const QUEBEC_SPAWN=[800*S,1320*S];
export const QUEBEC_NPC_SPACES=[
 {id:'street',x:900*S,y:1100*S,radius:36,passing:{x:800*S,y:1100*S}},
 {id:'square',x:1180*S,y:690*S,radius:36,passing:{x:1250*S,y:790*S}},
 {id:'river',x:1730*S,y:1120*S,radius:36,passing:{x:1650*S,y:1120*S}},
 {id:'terrace',x:500*S,y:200*S,radius:36,passing:{x:580*S,y:200*S}}
];
export function quebecElevation(x,y){return legacyElevation(x/S,y/S);}
function distanceToSegment(x,y,o){const dx=o.bx-o.ax,dy=o.by-o.ay,t=Math.max(0,Math.min(1,((x-o.ax)*dx+(y-o.ay)*dy)/(dx*dx+dy*dy)));return Math.hypot(x-o.ax-t*dx,y-o.ay-t*dy);}
export function quebecObstacleAt(x,y){const bottom=quebecElevation(x,y),top=bottom+QUEBEC_AVATAR.height,r=QUEBEC_AVATAR.radius;return QUEBEC_OBSTACLES.find(o=>{if(top<=o.bottom||bottom>=o.top)return false;if(o.shape==='circle')return Math.hypot(x-o.x,y-o.y)<r+o.r;if(o.shape==='segment')return distanceToSegment(x,y,o)<r+o.r;const dx=Math.max(o.x-x,0,x-o.x-o.w),dy=Math.max(o.y-y,0,y-o.y-o.h);return Math.hypot(dx,dy)<r;})||null;}
export function quebecCanWalk(x,y){
 if(!Number.isFinite(x)||!Number.isFinite(y)||x<QUEBEC_BOUNDS.left||x>QUEBEC_BOUNDS.right||y<QUEBEC_BOUNDS.top||y>QUEBEC_BOUNDS.bottom)return false;
 if(y<320*S&&x>1660*S)return false;
 return !quebecObstacleAt(x,y);
}
export function quebecSegmentClear(a,b){const n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.y-a.y)/6));for(let i=0;i<=n;i++){const t=i/n;if(!quebecCanWalk(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t))return false;}return true;}
export const QUEBEC_SOURCES=[
 {title:'퀘벡시 관광청 · 프티 샹플랭',url:'https://www.quebec-cite.com/en/old-quebec-city/petit-champlain'},
 {title:'퀘벡시 관광청 · 로얄 광장',url:'https://www.quebec-cite.com/en/what-to-do-quebec-city/place-royale'},
 {title:'퀘벡시 관광청 · 카스쿠 계단',url:'https://www.quebec-cite.com/en/what-to-do-quebec-city/breakneck-steps'},
 {title:'퀘벡시 관광청 · 푸니쿨레르',url:'https://explore.quebec-cite.com/en/explore/detail/funiculaire-du-vieux-quebec'}
];
export const QUEBEC_NOTES={
 street:['절벽 아래의 보행 거리','프티 샹플랭 지구는 퀘벡 구시가지의 낮은 지대, 캅 디아망 기슭에 있어요. 상점이 이어지는 보행 거리와 돌로 지은 건물의 외관을 살펴보세요.'],
 square:['건물이 둘러싼 광장','로얄 광장은 프티 샹플랭 거리와 가까운 구시가지의 광장이에요. 주변 건물에서는 프랑스와 영국의 영향을 함께 볼 수 있어요. 이 맵은 노트르담데빅투아르 성당의 돌벽·경사지붕·종탑을 단순화해 표현했어요.'],
 stairs:['위쪽 도시와 아래쪽 도시','카스쿠 계단은 코트 드 라 몽타뉴와 프티 샹플랭 거리를 연결해요. 실제 계단과 도시의 높낮이를 참고했으며, 계단 수와 높이·경사는 탐험용으로 재구성했어요. 옆의 경사형 승강기는 위아래 도시를 연결하는 푸니쿨레르를 표현한 모형이에요.'],
 river:['도시 옆의 세인트로렌스강','프티 샹플랭 지구는 세인트로렌스강과 가까워요. 강변에서 낮은 지대의 거리와 그 뒤의 높은 지형을 함께 바라볼 수 있어요. 이 맵의 산책로와 선박 위치는 학습용으로 구성했어요.'],
 guide:['나만의 속도로 둘러보기','프티 샹플랭 거리에서 로얄 광장과 강변을 잇는 길을 걸어 보세요. 계단을 올라가면 위에서 도시를 바라볼 수 있어요. 안내소·상점 이름·거리 소품의 배치는 탐험을 위한 창작 요소예요.'],
 chest:['조사 미션과 보물 보관함','캐나다의 자료를 읽고 안내 NPC의 미션을 해결해 보세요. 나라 코인 40개를 보물열쇠로 교환하면 상자를 열 수 있습니다. 이미 얻은 보물과 암호카드는 가방에서 다시 확인할 수 있어요.']
};
