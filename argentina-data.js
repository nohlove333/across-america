// North is decreasing y; Plaza Dorrego lies south of Plaza de Mayo. Distances are compressed.
export const ARGENTINA_SIZE=[3500,3700],ARGENTINA_SPAWN=[2140,1190],ARGENTINA_AVATAR={radius:36,height:94};
export const ARGENTINA_BOUNDS={left:100,right:3400,top:100,bottom:3600};
export const ARGENTINA_PALACE=[2670,570,520,950],ARGENTINA_COMPOUND=[2570,500,690,1100];
export const ARGENTINA_PLAZA=[950,620,1500,1060],ARGENTINA_DORREGO=[1050,2520,1450,700],ARGENTINA_DANCE=[1470,2760,610,300];
export const ARGENTINA_CABILDO=[330,1150,400,550],ARGENTINA_CATHEDRAL=[220,200,760,740];
export const ARGENTINA_PYRAMID=[1500,1140,55];
export const ARGENTINA_BEDS=[[1080,760,330,160],[1870,760,350,160],[1080,1380,330,150],[1870,1380,350,150]];
export const ARGENTINA_BLOCKS=[
 [1180,140,390,250,210,'#c7cbb9'],[1850,140,420,260,250,'#d5c9b2'],[2760,100,390,230,220,'#c9cfc0'],
 [360,2200,420,320,190,'#cfbaa4'],[360,2780,420,330,200,'#c8c8ad'],[420,3350,480,220,160,'#d2bda5'],
 [1200,2140,440,250,230,'#c8c5ae'],[1920,2140,450,250,210,'#d7c0ae'],[2730,2160,450,300,230,'#bfc9bb'],
 [2730,2760,450,310,220,'#d1c8b2'],[1250,3430,420,160,190,'#c7b6a2'],[2000,3430,410,160,200,'#d0c5b0'],[2820,3350,350,220,170,'#c4cbb8']
];
export const ARGENTINA_STALLS=[[1120,2580,170,110],[2270,2580,170,110]];
export const ARGENTINA_TREES=[[1160,820],[1320,820],[1950,820],[2150,820],[1160,1440],[1320,1440],[1950,1440],[2150,1440]];
export const ARGENTINA_POIS=[
 {x:2380,y:1180,title:'카사 로사다 서쪽 정면',kind:'landmark',key:'palace'},
 {x:1730,y:1140,title:'5월 광장과 기념탑',kind:'place',key:'plaza'},
 {x:1090,y:600,title:'메트로폴리타나 대성당 전망',kind:'place',key:'cathedral'},
 {x:900,y:1510,title:'카빌도 앞 거리',kind:'place',key:'cabildo'},
 {x:1570,y:2600,title:'산텔모 · 도레고 광장',kind:'place',key:'dorrego'},
 {x:1780,y:2910,title:'탱고 탐험 바닥 · 학습용',kind:'place',key:'tango'}
];
export const ARGENTINA_NPC_SPACES=[
 {id:'palace',x:2300,y:1050,radius:36,passing:{x:2140,y:1050}},
 {id:'plaza',x:1820,y:1210,radius:36,passing:{x:1660,y:1210}},
 {id:'dorrego',x:2090,y:2670,radius:36,passing:{x:1930,y:2670}},
 {id:'tango',x:2050,y:3060,radius:36,passing:{x:1890,y:3060}}
];
export const argentinaElevation=()=>0;
const rect=(id,[x,y,w,h],top=200)=>({id,shape:'rect',x,y,w,h,top});
export const ARGENTINA_OBSTACLES=[rect('palace-fenced-compound',ARGENTINA_COMPOUND,600),rect('cathedral',ARGENTINA_CATHEDRAL,450),rect('cabildo',ARGENTINA_CABILDO,350),...ARGENTINA_BLOCKS.map((b,i)=>rect('block-'+i,[b[0]-10,b[1]-25,b[2]+20,b[3]+60],b[4]+30)),...ARGENTINA_BEDS.map((b,i)=>rect('garden-'+i,b,130)),...ARGENTINA_STALLS.map((b,i)=>rect('stall-'+i,[b[0]-8,b[1]-8,b[2]+16,b[3]+16],150)),{id:'pyramid',shape:'circle',x:1500,y:1140,r:55,top:300}];
export function argentinaObstacleAt(x,y){return ARGENTINA_OBSTACLES.find(o=>o.shape==='circle'?Math.hypot(x-o.x,y-o.y)<36+o.r:Math.hypot(Math.max(o.x-x,0,x-o.x-o.w),Math.max(o.y-y,0,y-o.y-o.h))<36)||null;}
export function argentinaCanWalk(x,y){return Number.isFinite(x)&&Number.isFinite(y)&&x>=100&&x<=3400&&y>=100&&y<=3600&&!argentinaObstacleAt(x,y);}
export function argentinaSegmentClear(a,b){const n=Math.max(1,Math.ceil(Math.hypot(a.x-b.x,a.y-b.y)/6));for(let i=0;i<=n;i++){const t=i/n;if(!argentinaCanWalk(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t))return false;}return true;}
export const ARGENTINA_NOTES={
 palace:['분홍빛 외관과 큰 중앙 아치','카사 로사다는 아르헨티나 국가 정부의 청사예요. 5월 광장을 바라보는 서쪽 정면에는 두 건물을 연결한 큰 중앙 아치가 있습니다. 서로 다른 두 날개와 발코니, 창문과 지붕을 참고해 모형을 만들었어요. 건물과 울타리 안에는 들어가지 않고 앞의 넓은 공간에서 살펴봅니다.'],
 plaza:['카사 로사다 서쪽의 5월 광장','5월 광장은 부에노스아이레스의 중요한 역사적 장소예요. 광장 동쪽의 카사 로사다와 서쪽의 카빌도·대성당이 서로 다른 건축 경관을 이룹니다. 광장 안의 피라미데 데 마요는 1811년 5월 혁명 1주년을 기념해 세운 기념물이 바탕이 된 탑이에요. 이 맵의 녹지·길·기념물 크기는 실제와 다릅니다.'],
 cathedral:['고전적인 기둥이 있는 정면','메트로폴리타나 대성당은 5월 광장 북서쪽에 있어요. 높고 뾰족한 두 첨탑 대신 고전적인 신전을 떠올리게 하는 정면이 특징입니다. 공식 관광 안내가 설명하는 12개의 기둥과 삼각형 박공을 참고했습니다. 내부는 이번 맵에 포함하지 않았어요.'],
 cabildo:['아치와 시계탑이 있는 카빌도','카빌도는 식민지 시기 행정과 5월 혁명의 역사를 살펴볼 수 있는 건물이에요. 광장 서쪽의 흰 외관, 연속된 아치와 가운데 시계탑을 참고했어요. 카사 로사다와 카빌도를 같은 건물로 혼동하지 않도록 위치와 색·형태를 비교해 보세요.'],
 dorrego:['남쪽 산텔모의 포장된 광장','도레고 광장은 5월 광장과 다른 장소이며 남쪽 산텔모 지구에 있어요. 공식 관광 안내는 주변의 옛집·카페·골동품 상점과 포장된 광장을 소개합니다. 이 맵에서는 긴 이동 거리를 줄이고, 좁은 골목을 넓혀 두 구역을 연결했어요. 작은 가게와 노점은 직접 만든 예시 모형입니다.'],
 tango:['아르헨티나와 우루과이가 함께 나누는 탱고','탱고는 라플라타강 유역의 부에노스아이레스와 몬테비데오에서 발전한 음악과 춤의 전통이에요. 아르헨티나와 우루과이가 함께 UNESCO 무형유산으로 등재했습니다. 이 바닥은 탱고 문화를 배울 학습용 공간으로 추가했으며 누구나 걸어 들어갈 수 있어요. 주변 무용수에게 가까이 가면 짧은 탱고 동작을 볼 수 있고, 안내 NPC에게 조사 미션을 받을 수 있습니다.']
};
export const ARGENTINA_SOURCES=[
 {title:'아르헨티나 대통령실 · 카사 로사다 서쪽 정면·아치·발코니',url:'https://www.casarosada.gob.ar/informacion/archivo/66-memoria-recuperacion-palacio-gobierno/exteriores/27958-fachada-oeste'},
 {title:'부에노스아이레스 관광청 · 5월 광장',url:'https://turismo.buenosaires.gob.ar/es/otros-establecimientos/plaza-de-mayo'},
 {title:'부에노스아이레스 관광청 · 메트로폴리타나 대성당',url:'https://turismo.buenosaires.gob.ar/es/otros-establecimientos/catedral-metropolitana'},
 {title:'부에노스아이레스 관광청 · 역사 지구·카빌도',url:'https://turismo.buenosaires.gob.ar/es/circuitos-avenida-de-mayo/historico'},
 {title:'부에노스아이레스 관광청 · 도레고 광장',url:'https://turismo.buenosaires.gob.ar/es/otros-establecimientos/plaza-dorrego'},
 {title:'부에노스아이레스 관광청 · 5월 기념탑',url:'https://turismo.buenosaires.gob.ar/en/atractivo/pir%C3%A1mide-de-mayo'},
 {title:'UNESCO · 아르헨티나·우루과이의 탱고 공동 등재',url:'https://ich.unesco.org/en/rl/tango-00258'}
];
export const ARGENTINA_MAP_NOTE='5월 광장과 남쪽 산텔모·도레고 광장의 방향 관계를 참고한 학습용 재구성입니다. 실제 두 광장은 붙어 있지 않으며 거리·도로 폭·건물 수·비례를 압축·단순화했습니다. 탱고 바닥과 가게·노점은 학습용 창작이고 실제 상설 무대나 점포의 재현이 아닙니다. 강을 카사 로사다 바로 뒤에 붙여 표현하지 않았습니다. 자료 확인: 2026.10.16.';
