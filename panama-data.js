// Local diagram axis follows the waterway: top = lake/NW, bottom = Pacific/SE.
// Distances, visitor paths and water-level differences are teaching reconstructions.
export const PANAMA_SIZE=[3800,3500],PANAMA_SPAWN=[1970,2380],PANAMA_AVATAR={radius:36,height:94};
export const PANAMA_BOUNDS={left:1770,right:3690,top:130,bottom:3370};
export const PANAMA_LANES=[[650,380],[1170,380]];
export const PANAMA_CHAMBERS=[[610,990,-22],[1640,990,-70]];
export const PANAMA_CENTER=[2350,1270,800,580];
export const PANAMA_THEATER=[2800,590,420,380];
export const PANAMA_BEDS=[[2180,160,340,410],[3350,180,300,550],[2220,2820,460,470],[3330,2910,330,370]];
export const PANAMA_PALMS=[[2240,260],[2440,450],[3430,350],[3580,590],[2330,2980],[2560,3160],[3450,3070],[3560,3220]];
export const PANAMA_SIGNS=[[2190,1040,'MIRAFLORES'],[2190,2530,'CANAL DE PANAMÁ']];
export const PANAMA_POIS=[
 {x:1910,y:2350,title:'미라플로레스 갑문 전망',kind:'landmark',key:'locks'},
 {x:1910,y:1560,title:'갑문과 수문 관찰 길',kind:'place',key:'gates'},
 {x:2140,y:1190,title:'방문자 센터 앞',kind:'place',key:'visitor'},
 {x:1920,y:650,title:'미라플로레스 호수 방향',kind:'place',key:'lake'},
 {x:1920,y:3050,title:'태평양으로 이어지는 수로',kind:'place',key:'pacific'},
 {x:2880,y:2390,title:'운하 탐험 마당 · 학습용 공간',kind:'place',key:'learning'}
];
export const PANAMA_NPC_SPACES=[
 {id:'locks',x:2140,y:2210,radius:36,passing:{x:1980,y:2210}},
 {id:'visitor',x:2490,y:1040,radius:36,passing:{x:2650,y:1040}},
 {id:'learning',x:2990,y:2480,radius:36,passing:{x:2820,y:2480}},
 {id:'lake',x:2130,y:800,radius:36,passing:{x:1960,y:800}}
];
export const panamaElevation=()=>0;
const rect=(id,[x,y,w,h],top=200)=>({id,shape:'rect',x,y,w,h,bottom:0,top});
export const PANAMA_OBSTACLES=[rect('visitor-center-with-balconies',[2280,1257,883,606],350),rect('theater',PANAMA_THEATER,240),
 ...PANAMA_BEDS.map((r,i)=>rect('planted-bed-'+i,r,160)),
 ...PANAMA_SIGNS.map(([x,y],i)=>rect('sign-'+i,[x-65,y-10,130,20],110)),
 rect('bus',[3410,2450,145,390],150)];
export function panamaObstacleAt(x,y){return PANAMA_OBSTACLES.find(o=>o.shape==='circle'?Math.hypot(x-o.x,y-o.y)<36+o.r:Math.hypot(Math.max(o.x-x,0,x-o.x-o.w),Math.max(o.y-y,0,y-o.y-o.h))<36)||null;}
export function panamaCanWalk(x,y){return Number.isFinite(x)&&Number.isFinite(y)&&x>=1770&&x<=3690&&y>=130&&y<=3370&&!panamaObstacleAt(x,y);}
export function panamaSegmentClear(a,b){const n=Math.max(1,Math.ceil(Math.hypot(a.x-b.x,a.y-b.y)/6));for(let i=0;i<=n;i++){const t=i/n;if(!panamaCanWalk(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t))return false;}return true;}
export const PANAMA_NOTES={
 locks:['두 줄로 나란히 놓인 2단 갑문','미라플로레스는 파나마 운하의 태평양 쪽에 있는 갑문이에요. 기존 갑문은 나란한 두 통로에 각각 두 단계의 갑실이 이어집니다. 이 맵에서는 네 갑실을 볼 수 있어요. 2016년 확장 운하의 코콜리 갑문과는 다른 시설입니다.'],
 gates:['배를 들어 올리는 것은 물이에요','수문은 갑실을 구분하는 커다란 문이에요. 물을 채우거나 빼면 물에 떠 있는 배도 높아지거나 낮아집니다. 벽 위의 전기 기관차는 배의 위치를 제어하는 데 쓰여요. 이 모형의 수위는 서로 다른 높이를 구분하기 위한 예시이며 실측 수치나 현재 운항 상태가 아닙니다.'],
 visitor:['작업 구역 밖에서 운하 살펴보기','미라플로레스 방문자 센터에는 갑문과 선박을 관찰하는 테라스와 관람 공간이 있어요. 맵에서는 운하 쪽 외관과 층층이 이어지는 발코니를 참고했습니다. 내부와 지붕은 들어가는 공간이 아니며 넓은 바깥길을 이용해 주세요. 실제 방문 경로나 현재 운영 상태를 안내하는 지도가 아닙니다.'],
 lake:['바로 다음은 대서양이 아니에요','갑문의 상류 쪽에는 미라플로레스 호수가 있어요. 대서양으로 가려면 페드로미겔 갑문, 가툰호 등 운하의 다른 구간을 더 지나야 해요. 이 맵은 운하 전체가 아니라 미라플로레스 주변만 재구성했습니다. 화면의 위쪽은 호수가 있는 북서쪽 방향으로 단순화했어요.'],
 pacific:['태평양 쪽 입구로 이어지는 물길','미라플로레스 아래쪽의 수로는 발보아와 태평양 쪽으로 이어져요. 파나마 운하는 지협을 가로지르는 인공 물길로 태평양과 대서양을 연결합니다. 두 대양이 이 갑문 양 끝에 바로 붙어 있는 것은 아니에요.'],
 learning:['지협과 운하는 달라요','지협은 큰 육지 사이를 잇는 좁은 땅이고, 운하는 사람이 만든 물길이에요. 물길과 숲, 선박과 갑문을 함께 관찰해 보세요. 이 마당은 운하와 해상 항로를 조사하기 위해 만든 학습용 공간입니다. 단서 상자에서 자료를 읽고 안내 NPC에게 항로 분석 미션을 받아 보세요.']
};
export const PANAMA_SOURCES=[
 {title:'파나마 운하청 · 기존 갑문의 구조·수문·전기 기관차',url:'https://pancanal.com/en/design-of-the-locks/'},
 {title:'파나마 운하청 · 운하의 작동 원리와 구간',url:'https://pancanal.com/en/history-of-the-panama-canal/'},
 {title:'파나마 운하청 방문 안내 · 미라플로레스 테라스와 외관 사진',url:'https://visitcanaldepanama.com/en/points-of-interest/miraflores-visitor-center/'},
 {title:'파나마 운하청 · 확장 운하와 기존 운하의 구분',url:'https://pancanal.com/en/discover-the-expanded-canal/'}
];
export const PANAMA_MAP_NOTE='미라플로레스 기존 갑문의 두 통로·2단 구조를 참고한 학습용 재구성입니다. 물길 축을 화면 위아래로 단순화했으며 위쪽은 호수·북서 방향, 아래쪽은 태평양·남동 방향입니다. 갑실의 폭·길이·수위·방문 동선은 실측과 다릅니다. 동쪽 전망 산책로와 탐험 마당은 넓힌 창작 공간이며 작업 구역은 들어갈 수 없습니다. 선박·기관차는 정지 모형이며 운항 시뮬레이션이 아닙니다. 자료 확인: 2026.10.16.';
