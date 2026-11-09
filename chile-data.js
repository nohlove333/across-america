// North is decreasing y. Civic axis: Constitución → La Moneda → Ciudadanía → Alameda → Bulnes.
export const CHILE_SIZE=[3600,4100],CHILE_SPAWN=[1800,1170],CHILE_AVATAR={radius:36,height:94};
export const CHILE_BOUNDS={left:100,right:3500,top:100,bottom:4000};
export const CHILE_PALACE=[1260,1410,1080,850];
export const CHILE_CONSTITUTION=[1000,300,1600,900],CHILE_CITIZEN=[1000,2440,1600,570];
export const CHILE_ALAMEDA=[0,3060,3600,260],CHILE_BULNES=[1290,3490,1020,610];
export const CHILE_POOLS=[[1110,2500,470,120],[2020,2500,470,120]];
export const CHILE_LAWNS=[[[1240,380],[2360,380],[1800,625]],[[1240,1120],[2360,1120],[1800,875]],[[1080,510],[1080,990],[1550,750]],[[2520,510],[2520,990],[2050,750]]];
export const CHILE_TREES=[[1390,420],[2210,420],[1390,1080],[2210,1080],[1130,650],[1130,850],[2470,650],[2470,850],[1120,2810],[2480,2810],[1420,3650],[2180,3650],[1420,3900],[2180,3900]];
// Surrounding civic blocks are schematic, not exact office-building reconstructions.
export const CHILE_BLOCKS=[
 [210,260,530,660,310,'#d8d1b9'],[2850,260,500,640,360,'#c8ccbf'],
 [210,1190,530,750,350,'#d5c8b0'],[2850,1190,500,750,330,'#c8c4b0'],
 [210,2180,530,650,290,'#c9cbb8'],[2850,2180,500,650,320,'#d4cbb4'],
 [210,3500,700,490,360,'#c9c7af'],[2690,3500,660,490,380,'#c9d0c4']
];
export const CHILE_EXHIBIT=[2850,2860,400,125];
export const CHILE_POIS=[
 {x:1800,y:1260,title:'라 모네다 궁전 북쪽 정면',kind:'landmark',key:'palace'},
 {x:1800,y:750,title:'헌법 광장 · 대각선 산책길',kind:'place',key:'constitution'},
 {x:1800,y:2760,title:'시민 광장 · 물의 거울',kind:'place',key:'citizen'},
 {x:2520,y:2710,title:'지하 문화센터 안내',kind:'place',key:'culture'},
 {x:1800,y:3730,title:'불네스 보행 거리',kind:'place',key:'bulnes'},
 {x:3040,y:2940,title:'칠레 소개 엽서 자리 · 학습용',kind:'place',key:'postcard'}
];
export const CHILE_NPC_SPACES=[
 {id:'north',x:2090,y:1260,radius:36,passing:{x:1930,y:1260}},
 {id:'constitution',x:2000,y:750,radius:36,passing:{x:1840,y:750}},
 {id:'citizen',x:1800,y:2870,radius:36,passing:{x:1640,y:2870}},
 {id:'bulnes',x:1800,y:3820,radius:36,passing:{x:1640,y:3820}}
];
export const chileElevation=()=>0;
const rect=(id,[x,y,w,h],top=200)=>({id,shape:'rect',x,y,w,h,top});
export const CHILE_OBSTACLES=[rect('palace',CHILE_PALACE,440),...CHILE_BLOCKS.map((b,i)=>rect('civic-'+i,[b[0]-10,b[1]-10,b[2]+20,b[3]+20],b[4]+20)),...CHILE_POOLS.map((b,i)=>rect('water-'+i,[b[0]-8,b[1]-8,b[2]+16,b[3]+16],35)),...CHILE_TREES.map(([x,y],i)=>({id:'tree-'+i,shape:'circle',x,y,r:38,top:150})),{id:'flag',shape:'circle',x:1800,y:3190,r:60,top:750},rect('exhibit-panel',[2850,2860,400,22],160),rect('culture-panel',[2500,2630,160,20],110)];
export function chileObstacleAt(x,y){return CHILE_OBSTACLES.find(o=>o.shape==='circle'?Math.hypot(x-o.x,y-o.y)<36+o.r:Math.hypot(Math.max(o.x-x,0,x-o.x-o.w),Math.max(o.y-y,0,y-o.y-o.h))<36)||null;}
export function chileCanWalk(x,y){return Number.isFinite(x)&&Number.isFinite(y)&&x>=CHILE_BOUNDS.left&&x<=CHILE_BOUNDS.right&&y>=CHILE_BOUNDS.top&&y<=CHILE_BOUNDS.bottom&&!chileObstacleAt(x,y);}
export function chileSegmentClear(a,b){const n=Math.max(1,Math.ceil(Math.hypot(a.x-b.x,a.y-b.y)/6));for(let i=0;i<=n;i++){const t=i/n;if(!chileCanWalk(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t))return false;}return true;}
export const CHILE_NOTES={
 palace:['조폐국에서 정부 청사로','라 모네다 궁전은 칠레 행정부의 청사예요. 호아킨 토에스카가 설계한 신고전주의 건물로, 1805년 동전을 만드는 조폐국으로 문을 열고 1846년 정부 청사로 쓰이기 시작했어요. 북쪽의 모네다 거리를 향한 주 정면과 낮고 긴 흰 외관, 반복되는 창과 안뜰을 참고했습니다. 내부 출입은 이번 맵에 포함하지 않았어요.'],
 constitution:['궁전 북쪽의 헌법 광장','헌법 광장은 라 모네다 궁전의 북쪽에 있습니다. 가운데 원형 공간으로 네 모서리의 길이 모이는 구성을 참고했어요. 주변 행정 건물과 궁전을 함께 볼 수 있도록 길을 넓혔습니다. 이 광장은 남쪽의 시민 광장이나 산티아고의 아르마스 광장과 다른 장소예요.'],
 citizen:['궁전 남쪽의 시민 광장','시민 광장은 라 모네다 궁전 남쪽에 있어요. 물의 거울처럼 주변을 비추는 얕은 수면과 넓은 보행 공간을 참고했습니다. 이곳의 남쪽을 알라메다 대로가 가로지르고, 그 너머로 불네스 보행 거리가 이어져요. 실제 도로와 차도는 이 맵보다 복잡하며, 게임의 넓은 횡단 구간은 학습용으로 단순화했습니다.'],
 culture:['광장 아래에 있는 문화센터','센트로 쿨투랄 라 모네다는 시민 광장 아래의 지하 문화 공간이에요. 궁전 옆의 별도 지상 궁전으로 만들지 않고, 광장 가장자리의 안내 표지로 위치를 표현했습니다. 이번에는 내부 전시장·지하층으로 들어가지 않아요.'],
 bulnes:['수도의 일상을 잇는 보행 거리','불네스 거리는 시민 광장 남쪽으로 이어지는 보행 공간입니다. 라 모네다와 주변 행정 건물로 이루어진 도심 축을 볼 수 있어요. 산티아고는 칠레의 수도이며 안데스산맥 가까이에 있는 큰 도시예요. 동쪽 산맥은 먼 배경으로만 단순화했고, 길 끝에 바로 산이 붙어 있다는 뜻은 아닙니다.'],
 postcard:['길쭉한 국토 · 구리 · 포도','칠레의 남아메리카 본토는 태평양과 안데스산맥 사이에서 남북으로 길게 이어져요. 구리 광업과 포도 재배·수출도 나라를 알아보는 중요한 소재입니다. 이곳은 칠레의 국토와 생산 활동을 소개하는 학습용 자리입니다. 도심의 광산이나 포도밭을 재현한 장소는 아닙니다. 안내 NPC에게 자료 분석 미션을 받을 수 있습니다.']
};
export const CHILE_SOURCES=[
 {title:'산티아고 시 관광청 · 라 모네다 궁전',url:'https://www.santiagoturismo.cl/es/palacio-de-la-moneda/'},
 {title:'산티아고 시 관광청 · 헌법 광장(궁전 북쪽)',url:'https://www.santiagoturismo.cl/es/plaza-de-la-constitucion/'},
 {title:'산티아고 시 관광청 · 시민 광장(궁전 남쪽)',url:'https://www.santiagoturismo.cl/es/plaza-de-la-ciudadania/'},
 {title:'산티아고 시 관광청 · 지하 라 모네다 문화센터',url:'https://www.santiagoturismo.cl/es/centro-cultural-palacio-la-moneda/'},
 {title:'산티아고 시 관광청 · 불네스 보행 거리',url:'https://www.santiagoturismo.cl/es/paseo-bulnes/'},
 {title:'칠레 관광청 · 수도 산티아고와 안데스',url:'https://chile.travel/en/destinations/santiago-capital/'},
 {title:'칠레 국회도서관 · 산티아고 분지와 동쪽 안데스',url:'https://www.bcn.cl/siit/nuestropais/region13/relieve.htm'},
 {title:'칠레 정부 · 국토 소개',url:'https://www.gob.cl/en/our-country/'},
 {title:'칠레 구리 위원회 · 광업 통계',url:'https://www.cochilco.cl/web/50-anios-de-la-mineria-en-cifras/'},
 {title:'칠레 농업정책연구청 · 2026년 6월 과일·포도 통계',url:'https://www.odepa.gob.cl/publicaciones/boletines/boletin-de-fruta-junio-2026'}
];
export const CHILE_MAP_NOTE='라 모네다 궁전의 북쪽 헌법 광장과 남쪽 시민 광장, 알라메다 대로 너머의 불네스 보행 거리라는 방향 관계를 참고한 학습용 재구성입니다. 실제 축척·건물 수·층수·창 수·도로 폭·수면 및 녹지 크기를 단순화했습니다. 안뜰은 위에서만 보이며 궁전 내부·문화센터 지하는 이동 공간이 아닙니다. 주변 건물·소개 엽서 자리는 창작 모형이고 실제 점포·관광 안내소의 재현이 아닙니다. 안데스산맥은 동쪽 먼 배경의 상징 표현입니다. 자료 확인: 2026.10.16.';
