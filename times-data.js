// Learning-scale city, inspired by Times Square's plazas; not a surveyed model.
export const TIMES_SIZE=[2400,2600],TIMES_SPAWN=[1220,2000],TIMES_AVATAR={radius:36,height:94};
export const TIMES_BOUNDS={left:100,right:2300,top:100,bottom:2500};
// One Times Square remains at the southern end; lateral spacing is adapted for an unobstructed learning plaza.
// x, y, width, depth, height, facade, sign theme. Buildings never occupy the central aisle.
export const TIMES_BUILDINGS=[
 [150,180,340,330,540,'#424b65',0],[130,650,370,330,390,'#596079',1],
 [140,1150,350,340,470,'#434c68',2],[150,1690,340,330,330,'#566076',3],
 [120,2190,380,280,440,'#465369',4],
 [1910,130,350,360,590,'#434c64',4],[1870,670,390,320,480,'#58627a',0],
 [1900,1180,350,330,540,'#465671',1],[1870,1690,390,330,410,'#5a5b76',2],
 [1920,2200,340,260,340,'#49556b',3],
 [650,140,300,240,340,'#56617b',3],[1530,130,250,260,450,'#485771',1],
 [1560,2280,240,220,520,'#424c69',5]
];
export const TIMES_STEPS={x:1100,y:350,w:320,d:400,height:70,landing:140};
export const TIMES_TAXIS=[[650,1100],[1710,1770]];
export const TIMES_LAMPS=[[650,590],[1740,570],[650,1640],[1730,2090],[920,2420],[1460,2420]];
export const TIMES_POIS=[
 {x:1220,y:1350,title:'타임스스퀘어 보행 광장',kind:'landmark',key:'plaza'},
 {x:1260,y:810,title:'더피 광장 · 붉은 계단',kind:'place',key:'steps'},
 {x:860,y:1000,title:'브로드웨이 거리',kind:'place',key:'broadway'},
 {x:1550,y:1560,title:'빛으로 둘러싸인 거리',kind:'place',key:'screens'},
 {x:650,y:1450,title:'극장가 산책길',kind:'place',key:'theatre'},
 {x:1220,y:2070,title:'남쪽 광장 전망',kind:'place',key:'south'}
];
export const TIMES_NPC_SPACES=[
 {id:'plaza',x:1510,y:1250,radius:36,passing:{x:1370,y:1250}},
 {id:'steps',x:1540,y:850,radius:36,passing:{x:1400,y:850}},
 {id:'theatre',x:640,y:1560,radius:36,passing:{x:780,y:1560}},
 {id:'south',x:1500,y:2100,radius:36,passing:{x:1360,y:2100}}
];
export function timesElevation(x,y){const s=TIMES_STEPS;if(x<s.x||x>s.x+s.w||y<s.y||y>s.y+s.d)return 0;return y<s.y+s.landing?s.height:s.height*(s.y+s.d-y)/(s.d-s.landing);}
const rect=(id,x,y,w,h,bottom=0,top=700)=>({id,shape:'rect',x,y,w,h,bottom,top});
const segment=(id,ax,ay,bx,by,r,bottom=0,top=200)=>({id,shape:'segment',ax,ay,bx,by,r,bottom,top});
export const TIMES_OBSTACLES=TIMES_BUILDINGS.map(([x,y,w,d,h],i)=>rect('building-'+i,x,y,w,d,0,h+30));
TIMES_OBSTACLES.push(segment('steps-back',1100,350,1420,350,4,0,130));
for(const x of [1100,1420])for(let y=350;y<750;y+=10){const h=timesElevation(1260,y+5);TIMES_OBSTACLES.push(segment('steps-rail-'+x+'-'+y,x,y,x,y+10,4,Math.max(0,h-10),h+55));}
for(const [i,[x,y]] of TIMES_TAXIS.entries())TIMES_OBSTACLES.push(rect('parked-taxi-'+i,x-42,y-64,84,128,0,60));
for(const [i,[x,y]] of TIMES_LAMPS.entries())TIMES_OBSTACLES.push({id:'lamp-'+i,shape:'circle',x,y,r:5,bottom:0,top:180});
function distanceToSegment(x,y,o){const dx=o.bx-o.ax,dy=o.by-o.ay,t=Math.max(0,Math.min(1,((x-o.ax)*dx+(y-o.ay)*dy)/(dx*dx+dy*dy)));return Math.hypot(x-o.ax-t*dx,y-o.ay-t*dy);}
export function timesObstacleAt(x,y){const bottom=timesElevation(x,y),top=bottom+94,r=36;return TIMES_OBSTACLES.find(o=>{if(top<=o.bottom||bottom>=o.top)return false;if(o.shape==='circle')return Math.hypot(x-o.x,y-o.y)<r+o.r;if(o.shape==='segment')return distanceToSegment(x,y,o)<r+o.r;return Math.hypot(Math.max(o.x-x,0,x-o.x-o.w),Math.max(o.y-y,0,y-o.y-o.h))<r;})||null;}
export function timesCanWalk(x,y){return Number.isFinite(x)&&Number.isFinite(y)&&x>=100&&x<=2300&&y>=100&&y<=2500&&!timesObstacleAt(x,y);}
export function timesSegmentClear(a,b){const n=Math.max(1,Math.ceil(Math.hypot(a.x-b.x,a.y-b.y)/6));for(let i=0;i<=n;i++){const t=i/n;if(!timesCanWalk(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t))return false;}return true;}
// Repair a stale/invalid foot position without leaving an avatar trapped inside a collider.
export function recoverTimesPosition(p){if(timesCanWalk(p.x,p.y))return p;let best=null,distance=Infinity;if(Number.isFinite(p.x)&&Number.isFinite(p.y))for(let dx=-160;dx<=160;dx+=8)for(let dy=-160;dy<=160;dy+=8){const d=Math.hypot(dx,dy),x=p.x+dx,y=p.y+dy;if(d<distance&&timesCanWalk(x,y)){best={x,y};distance=d;}}return best||{x:TIMES_SPAWN[0],y:TIMES_SPAWN[1]};}
export const TIMES_NOTES={
 plaza:['도시 한가운데의 열린 공간','타임스스퀘어에는 브로드웨이를 따라 이어지는 보행 광장이 있어요. 이 맵에서는 넓은 광장과 교차하는 거리를 자유롭게 걸으며 도시 풍경을 살펴볼 수 있어요.'],
 steps:['더피 광장의 붉은 계단','브로드웨이와 47번가 부근의 더피 광장에는 붉은 계단이 있고, 그 아래에는 공연표를 판매하는 TKTS 부스가 있어요. 이 맵의 계단도 앞쪽에서 올라가 주변을 바라볼 수 있어요.'],
 broadway:['다른 방향의 거리가 만나는 풍경','브로드웨이와 7번가 주변의 거리와 광장 관계를 참고했어요. 실제 도로의 축척과 차량 통행을 그대로 옮기기보다, 걸어서 둘러보기 좋은 탐험 공간으로 재구성했어요.'],
 screens:['어두운 하늘과 밝은 화면','주변 건물의 전광판과 불 켜진 창문을 참고해 밤의 도시를 표현했어요. 화면 속 그림과 문구는 이 사이트를 위해 창작했으며, 실제 상업 광고를 복제하지 않았어요.'],
 theatre:['공연장이 모여 있는 도시','타임스스퀘어 주변에는 브로드웨이 극장가가 있어요. 공연장 입구와 작은 상점이 있는 거리를 둘러보세요. 이 맵의 극장 이름과 공연 포스터는 창작한 장식이에요.'],
 south:['거리 전체를 바라보기','원 타임스스퀘어는 브로드웨이 43번가 쪽 남단에, 더피 광장의 붉은 계단은 47번가 쪽 북단에 있어요. 이 학습용 맵은 남북 관계를 유지하되 중앙 시야를 가리지 않도록 남쪽 건물의 좌우 간격을 조정했어요. 높이가 다른 건물과 전광판, 대각선으로 이어지는 길이 만드는 도시 풍경을 살펴보세요. 이곳은 학습용 재구성이며 건물의 배치와 높이는 실제와 다릅니다.']
};
export const TIMES_SOURCES=[
 {title:'Times Square Alliance · 원 타임스스퀘어와 브로드웨이 43번가',url:'https://www.timessquarenyc.org/nye/nye-faq'},
 {title:'Times Square Alliance · 보행 광장과 더피 광장',url:'https://www.timessquarenyc.org/business-community/planning-an-event'},
 {title:'Times Square Alliance · TKTS와 붉은 계단',url:'https://www.timessquarenyc.org/retail/tkts-times-square'},
 {title:'Times Square Alliance · 극장가 역사',url:'https://www.timessquarenyc.org/page/historical-highlights-of-the-theater-district'},
 {title:'Times Square Alliance · 전광판과 도시 경관',url:'https://www.timessquarenyc.org/business-community/advertisement-sponsorships'}
];
