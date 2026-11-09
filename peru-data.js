// North is decreasing y. Broad teaching paths replace the real site's narrow, regulated circuits.
export const PERU_SIZE=[3400,3600],PERU_SPAWN=[1660,2810],PERU_AVATAR={radius:36,height:94};
export const PERU_BOUNDS={left:550,right:2750,top:500,bottom:3420};
export const PERU_PLATEAU=[[700,800],[1100,500],[2200,600],[2750,1000],[2750,2450],[2500,3250],[1700,3420],[750,3150],[550,2000]];
export const PERU_PLAZA=[1340,1040,620,1130];
// Roofless enclosures are purpose-built approximations, not numbered excavated buildings.
export const PERU_ROOMS=[
 [830,1090,270,240,130],[830,1470,270,270,150],
 [850,2060,300,250,145],[1240,2240,290,240,130],
 [2150,1050,310,260,150],[2150,1470,310,260,130],
 [2190,1920,300,270,150],[2000,2250,290,240,135],
 [930,2720,260,230,150]
];
export const PERU_TERRACES=[[740,2480,450,120],[740,2630,450,70],[900,3100,350,80],[2160,2590,440,130],[2160,2750,440,120],[2160,2900,350,110],[2100,3050,300,85]];
export const PERU_ROCKS=[[1110,690,95,90],[1190,1880,60,55],[2520,2360,52,60]];
export const PERU_POIS=[
 {x:1660,y:2810,title:'마추픽추 조망 길',kind:'landmark',key:'citadel'},
 {x:1660,y:1620,title:'중앙 광장',kind:'place',key:'plaza'},
 {x:1990,y:1260,title:'지붕 없는 석조 건물군',kind:'place',key:'stone'},
 {x:1960,y:2740,title:'계단식 경작지 관찰',kind:'place',key:'terraces'},
 {x:1660,y:850,title:'와이나픽추 방향 전망',kind:'place',key:'mountain'},
 {x:1350,y:3090,title:'안데스 산지와 숲',kind:'place',key:'forest'}
];
export const PERU_NPC_SPACES=[
 {id:'entry',x:1850,y:2830,radius:36,passing:{x:1690,y:2830}},
 {id:'plaza',x:1790,y:1620,radius:36,passing:{x:1630,y:1620}},
 {id:'stone',x:2010,y:1410,radius:36,passing:{x:1850,y:1410}},
 {id:'terraces',x:1970,y:3000,radius:36,passing:{x:1810,y:3000}}
];
export const peruElevation=(x,y)=>(3300-y)*.04;
const rect=(id,x,y,w,h,top=170)=>({id,shape:'rect',x,y,w,h,top});
export const PERU_OBSTACLES=[];
// Match the three continuous walls and the two front wall pieces on either side of each wide doorway.
for(const [i,[x,y,w,d,h]]of PERU_ROOMS.entries()){const t=22,gap=128;PERU_OBSTACLES.push(rect('room-'+i+'-west',x,y,t,d,h),rect('room-'+i+'-east',x+w-t,y,t,d,h),rect('room-'+i+'-north',x,y,w,t,h),rect('room-'+i+'-front-left',x,y+d-t,(w-gap)/2,t,h),rect('room-'+i+'-front-right',x+(w+gap)/2,y+d-t,(w-gap)/2,t,h));}
PERU_OBSTACLES.push(...PERU_TERRACES.map(([x,y,w,h],i)=>rect('terrace-'+i,x,y,w,h,90)),...PERU_ROCKS.map(([x,y,rx,ry],i)=>rect('rock-'+i,x-rx,y-ry,rx*2,ry*2,170)));
function inPolygon(x,y){let inside=false;for(let i=0,j=PERU_PLATEAU.length-1;i<PERU_PLATEAU.length;j=i++){const [a,b]=PERU_PLATEAU[i],[c,d]=PERU_PLATEAU[j];if((b>y)!==(d>y)&&x<(c-a)*(y-b)/(d-b)+a)inside=!inside;}return inside;}
function edgeDistance(x,y){let nearest=Infinity;for(let i=0;i<PERU_PLATEAU.length;i++){const a=PERU_PLATEAU[i],b=PERU_PLATEAU[(i+1)%PERU_PLATEAU.length],dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy)));nearest=Math.min(nearest,Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy));}return nearest;}
export function peruObstacleAt(x,y){return PERU_OBSTACLES.find(o=>o.shape==='circle'?Math.hypot(x-o.x,y-o.y)<36+o.r:Math.hypot(Math.max(o.x-x,0,x-o.x-o.w),Math.max(o.y-y,0,y-o.y-o.h))<36)||null;}
export function peruCanWalk(x,y){return Number.isFinite(x)&&Number.isFinite(y)&&inPolygon(x,y)&&edgeDistance(x,y)>=42&&!peruObstacleAt(x,y);}
export function peruSegmentClear(a,b){const n=Math.max(1,Math.ceil(Math.hypot(a.x-b.x,a.y-b.y)/6));for(let i=0;i<=n;i++){const t=i/n;if(!peruCanWalk(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t))return false;}return true;}
export const PERU_NOTES={
 citadel:['산지의 지형과 어우러진 잉카 유적','마추픽추는 페루 안데스산맥 동쪽 사면의 산지에 있는 잉카 유적이에요. UNESCO는 약 2,430m 높이의 입지와 석벽·테라스·경사로가 주변 지형에 어우러지는 모습을 설명합니다. 이 맵은 전체 유적의 실측 복원이 아니라 중심 광장과 건물군, 경작지와 산봉우리의 관계를 간추린 모형이에요.'],
 plaza:['건물 사이에 남겨진 열린 공간','마추픽추에는 건물만 빽빽하게 들어선 것이 아니라 광장과 열린 공간도 있어요. 농업 구역과 도시 구역, 상부와 하부의 구성이 함께 나타납니다. 이 맵에서는 넓힌 광장을 통해 석조 건물군 사이를 걸어 볼 수 있어요. 실제 관람 동선과 출입 가능한 구역은 다릅니다.'],
 stone:['돌을 쌓아 만든 벽과 사다리꼴 입구','지붕이 남아 있지 않은 석조 건물과 사다리꼴 형태의 입구를 관찰해 보세요. 건물마다 돌을 다듬고 쌓은 방식에도 차이가 있어요. 이 모형은 벽돌 건물이 아니라 불규칙한 석재의 이음과 돌벽을 참고했습니다. 작은 문은 캐릭터가 걸어 들어갈 수 있도록 실제 비례보다 넓혔어요.'],
 terraces:['비탈을 여러 층의 평평한 면으로','경작 테라스는 비탈에 돌로 옹벽을 쌓아 여러 층의 평평한 면을 만든 공간이에요. 마추픽추의 농업 구역은 넓은 테라스들로 이루어져 있습니다. 이 맵에서는 경작지 자체를 가로지르지 않고 옆의 관찰 길에서 층층이 이어지는 모습을 살펴봅니다.'],
 mountain:['유적 뒤로 솟은 와이나픽추','마추픽추 유적과 와이나픽추 산은 같은 이름의 장소가 아니에요. 와이나픽추가 유적 너머로 솟은 산지 경관을 참고해 배경 봉우리를 만들었습니다. 이 맵에서는 봉우리를 오르지 않고 넓은 전망 길에서 바라봐요. 산 모양과 높이 비율은 단순화했습니다.'],
 forest:['안데스산맥이 모두 눈 덮인 산은 아니에요','마추픽추 주변에는 열대 산지림이 있어요. 산지가 펼쳐져 있지만 온도와 식생은 위치와 높이에 따라 달라집니다. 이곳을 눈과 얼음만 있는 곳으로 떠올리지 않도록 녹색 사면과 숲을 함께 표현했어요. 고도·기후 비교 활동은 다른 국가의 맵을 완성한 뒤 추가합니다.']
};
export const PERU_SOURCES=[
 {title:'UNESCO · 마추픽추의 입지·유적·산지림과 공간 구성',url:'https://whc.unesco.org/en/list/274/'},
 {title:'페루 공식 관광청 · 마추픽추 경관과 유적 안내',url:'https://www.peru.travel/attractions/machu-picchu'},
 {title:'PROMPERÚ · 건축·테라스 안내 책자(2020, 관람 시간·회로는 현행 안내 아님)',url:'https://repositorio.promperu.gob.pe/server/api/core/bitstreams/cf7f4511-c4f4-41da-b023-604af7b8ed65/content'}
];
export const PERU_MAP_NOTE='UNESCO·페루 공식 자료를 참고한 학습용 재구성입니다. 건물·경작지·산봉우리의 수와 위치·높이·비례는 단순화했고, 길과 문을 넓혔습니다. 완만한 보행 경사는 조작을 위한 가상 지형이며 실제 유적의 해발 고도나 계단·공식 관람 회로를 재현하지 않습니다. 절벽과 경작지·배경 산에는 들어갈 수 없습니다. 자료 확인: 2026.10.16.';
