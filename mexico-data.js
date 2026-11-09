// South is increasing y. Preserve real relative directions, but enlarge pedestrian spaces.
export const MEXICO_SIZE=[3300,2200],MEXICO_SPAWN=[2240,1150],MEXICO_AVATAR={radius:36,height:94};
export const MEXICO_BOUNDS={left:90,right:3210,top:90,bottom:2110};
export const MEXICO_PALACE=[1860,370,800,460];
export const MEXICO_PARK=[160,230,1480,1000];
export const MEXICO_TOWER=[3000,1550,190,190,650];
// Fictional supporting blocks retain urban scale without claiming to reproduce individual buildings.
export const MEXICO_BLOCKS=[
 [170,75,350,110,150,'#d9c6ae'],[690,65,360,115,140,'#d2c5b0'],[1230,70,340,115,165,'#dac9bc'],
 [1830,70,340,150,170,'#d9d1bc'],[2360,65,280,150,160,'#c9cdbd'],
 [3030,280,170,380,220,'#d2c8b2'],[3020,850,180,300,175,'#d7c5b6'],
 [220,1750,300,230,145,'#d5bd9f'],[770,1750,290,230,160,'#c6cbb8'],[1320,1750,300,230,150,'#d6b7a1'],
 [1880,1770,280,240,160,'#cda88c'],[2340,1780,260,230,185,'#d5c5a9']
];
// A clearly labelled teaching workshop inside the park; not a claim of a permanent real facility.
export const MEXICO_STALLS=[
 [1090,330,180,110,'MAÍZ','#93ac99'],[1360,330,180,110,'TORTILLAS','#d4b777']
];
export const MEXICO_TREES=[
 [300,360,1.1],[550,350,1.15],
 [300,570,1.05],[310,920,1.1],[550,1040,1.15],[1130,1040,1.1],[1410,960,1.2],
 [110,1570,.95],[1760,1560,.95]
];
export const MEXICO_GARDENS=[[240,290,420,310],[240,880,420,260],[1070,880,470,260]];
// Keep denser tree planting inside protected beds, never across the walking paths.
for(const [x,y,w,d]of MEXICO_GARDENS)for(let xx=x+65;xx<x+w-45;xx+=125)for(let yy=y+65;yy<y+d-40;yy+=120)if(MEXICO_TREES.every(t=>Math.hypot(t[0]-xx,t[1]-yy)>85))MEXICO_TREES.push([xx,yy,1.05+((xx+yy)%3)*.08]);
export const MEXICO_FOUNTAINS=[[840,455,64],[840,1030,64]];
export const MEXICO_LAMPS=[[1750,350],[1750,1010],[2720,350],[2720,1030],[230,1280],[1620,1280],[1800,2040]];
export const MEXICO_POIS=[
 {x:2260,y:1040,title:'벨라스 아르테스 궁전 앞',kind:'landmark',key:'palace'},
 {x:920,y:750,title:'알라메다 센트랄 공원',kind:'place',key:'park'},
 {x:2380,y:1270,title:'후아레스 대로',kind:'place',key:'avenue'},
 {x:2880,y:1470,title:'라티노아메리카나 타워 전망',kind:'place',key:'tower'},
 {x:1280,y:650,title:'공원 속 음식 만들기 · 학습용 체험 자리',kind:'place',key:'food'},
 {x:2870,y:1260,title:'역사 지구의 길',kind:'place',key:'city'}
];
export const MEXICO_NPC_SPACES=[
 {id:'palace',x:2560,y:1120,radius:36,passing:{x:2420,y:1120}},
 {id:'park',x:1180,y:750,radius:36,passing:{x:1040,y:750}},
 {id:'food',x:1500,y:650,radius:36,passing:{x:1370,y:650}},
 {id:'avenue',x:1850,y:1530,radius:36,passing:{x:2000,y:1530}}
];
export const mexicoElevation=()=>0;
const rect=(id,x,y,w,h,top=300)=>({id,shape:'rect',x,y,w,h,bottom:0,top});
export const MEXICO_OBSTACLES=[rect('palace',...MEXICO_PALACE,600),rect('tower',...MEXICO_TOWER.slice(0,4),800),
 rect('palace-portico',2110,830,300,30,180),
 ...MEXICO_BLOCKS.map(([x,y,w,d,h],i)=>rect('block-'+i,x,y,w,d,h+40)),
 ...MEXICO_STALLS.map(([x,y,w,d],i)=>rect('stall-'+i,x-8,y-8,w+16,d+16,160)),
 ...MEXICO_GARDENS.map((r,i)=>rect('planted-bed-'+i,...r,120)),
 ...MEXICO_FOUNTAINS.map(([x,y,r],i)=>({id:'fountain-'+i,shape:'circle',x,y,r,bottom:0,top:70})),
 ...MEXICO_TREES.map(([x,y,s],i)=>({id:'tree-'+i,shape:'circle',x,y,r:35*s,bottom:0,top:150*s})),
 ...MEXICO_LAMPS.map(([x,y],i)=>({id:'lamp-'+i,shape:'circle',x,y,r:5,bottom:0,top:160}))];
export function mexicoObstacleAt(x,y){return MEXICO_OBSTACLES.find(o=>o.shape==='circle'?Math.hypot(x-o.x,y-o.y)<36+o.r:Math.hypot(Math.max(o.x-x,0,x-o.x-o.w),Math.max(o.y-y,0,y-o.y-o.h))<36)||null;}
export function mexicoCanWalk(x,y){return Number.isFinite(x)&&Number.isFinite(y)&&x>=90&&x<=3210&&y>=90&&y<=2110&&!mexicoObstacleAt(x,y);}
export function mexicoSegmentClear(a,b){const n=Math.max(1,Math.ceil(Math.hypot(a.x-b.x,a.y-b.y)/6));for(let i=0;i<=n;i++){const t=i/n;if(!mexicoCanWalk(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t))return false;}return true;}
export const MEXICO_NOTES={
 palace:['흰 대리석 외관과 둥근 지붕','벨라스 아르테스 궁전은 멕시코시티의 문화시설이에요. 흰 대리석으로 마감한 외관과 중앙 돔을 참고해 모형을 만들었어요. 정면은 후아레스 대로가 있는 남쪽을 향합니다. INBAL은 외관의 아르 누보와 내부의 아르 데코 양식을 설명하고 있어요.'],
 park:['궁전 서쪽의 도심 공원','알라메다 센트랄은 궁전의 서쪽에 있는 도심 공원이에요. 나무가 있는 녹지와 산책로, 분수를 둘러보세요. 이 맵은 실제 공원의 모든 길과 조각상·분수 개수를 복원한 지도가 아닙니다.'],
 avenue:['랜드마크와 거리를 연결하기','궁전의 남쪽 정면 앞에는 광장이 있고, 더 남쪽으로 후아레스 대로가 이어져요. 궁전 동쪽에는 에헤 센트랄 도로가 있습니다. 이 맵에서는 길과 횡단보도를 넓혀 걸어서 둘러보기 쉽게 만들었어요.'],
 tower:['서로 다른 시대의 도시 경관','라티노아메리카나 타워는 궁전에서 남동쪽 방향에 있어요. 낮은 역사 지구 건물들과 높이 차이를 이루는 모습을 살펴보세요. 이 모형의 높이와 거리 비율은 실제 축척과 다릅니다.'],
 food:['알라메다 공원의 학습용 음식 만들기 자리','이 자리는 공원에서 멕시코 음식 만들기를 배울 수 있도록 마련한 학습용 체험 공간이에요. 실제 공원에 이 위치와 모습의 상설 조리시설이 있다는 뜻은 아닙니다. UNESCO는 멕시코 전통 음식문화에서 옥수수·콩·고추와 농사·조리 기술·공동체 관습의 관계를 함께 설명해요. 이곳에서는 음식 문화의 재료와 형성 과정을 자료로 살펴봅니다. 실제 조리나 재료를 조작하는 기능은 제공하지 않습니다.'],
 city:['사막으로만 떠올리지 않기','멕시코시티는 해발 2,000m가 넘는 고지대에 자리한 도시예요. 나무가 있는 공원과 역사 지구의 시가지가 함께 있는 모습을 살펴보세요. 멕시코 전체를 사막이나 하나의 기후로 생각하지 않도록 해요.']
};
export const MEXICO_SOURCES=[
 {title:'INAH · 알라메다 공원의 위치와 기록',url:'https://catalogonacionalmhi.inah.gob.mx/consulta_publica/detalle/94736'},
 {title:'INBAL · 예술 궁전의 외관과 건축 양식',url:'https://inba.gob.mx/prensa/22803/palacio-de-bellas-artes-91-aos-como-icono-del-arte-y-la-cultura-mexicana'},
 {title:'INAH · 궁전의 남향 정면과 건축 기록',url:'https://catalogonacionalmhi.inah.gob.mx/consulta_publica/detalle/11909'},
 {title:'멕시코시티 관광청 · 역사 지구 공식 지도',url:'https://www.turismo.cdmx.gob.mx/storage/app/media/planos_2020/M1_centro.pdf'},
 {title:'INEGI · 멕시코시티 지역별 고도',url:'https://www.inegi.org.mx/app/cuadroentidad/CDMX/2024/01/1_2'},
 {title:'UNESCO · 멕시코 전통 음식문화',url:'https://ich.unesco.org/en/RL/traditional-mexican-cuisine-ancestral-ongoing-community-culture-the-michoacan-paradigm-00400'}
];
export const MEXICO_MAP_NOTE='실제 장소의 방향 관계를 참고한 학습용 재구성입니다. 공원 속 음식 만들기 자리는 학습용 창작 공간이며, 도로 폭·건물 크기·식재와 분수 배치는 실제와 다릅니다.';
