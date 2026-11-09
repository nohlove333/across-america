// North is decreasing y. Landmark directions are retained; kilometres and heights are compressed.
export const BRAZIL_SIZE=[3800,3600],BRAZIL_SPAWN=[1130,850],BRAZIL_AVATAR={radius:36,height:94};
export const BRAZIL_BOUNDS={left:300,right:3230,top:250,bottom:3270};
export const BRAZIL_WALK_POLYGON=[[300,250],[1450,250],[1450,1400],[1600,1400],[1600,1500],[3230,1500],[3230,3270],[900,3270],[900,2000],[1080,2000],[1080,1400],[300,1400]];
export const BRAZIL_UPPER=[300,250,1150,1150],BRAZIL_RAMP=[1080,1400,520,600],BRAZIL_STATUE=[700,700];
export const BRAZIL_BLOCKS=[
 [1720,1530,300,250,260,'#c8cbb5'],[2220,1520,290,270,330,'#d7cdb8'],[2720,1530,300,270,280,'#c3ceca'],
 [1780,2440,280,210,210,'#e0c9ab'],[2260,2440,280,210,270,'#c6d1c4'],[2730,2440,280,210,230,'#dbcdb8'],
 [970,2220,270,310,170,'#c8bfa4']
];
export const BRAZIL_STAGE=[2170,1950,320,180];
export const BRAZIL_STAGE_HEIGHT=22.5,BRAZIL_STAGE_RAMP=[2220,2130,220,140];
export const BRAZIL_BEDS=[[380,330,190,230],[350,1070,210,240],[1710,2720,200,130],[3090,2730,100,320]];
export const BRAZIL_PALMS=[[1770,2785],[3125,2810],[3125,2970]];
export const BRAZIL_POIS=[
 {x:1110,y:800,title:'코르코바두 예수상 전망대',kind:'landmark',key:'statue'},
 {x:1110,y:1190,title:'산 위에서 바라보는 리우',kind:'place',key:'view'},
 {x:1330,y:1770,title:'티주카 숲 연결 길 · 학습용',kind:'place',key:'forest'},
 {x:2300,y:2290,title:'삼바·카니발 탐험 광장 · 학습용',kind:'place',key:'carnival'},
 {x:2540,y:2800,title:'코파카바나 물결무늬 산책로',kind:'place',key:'promenade'},
 {x:2610,y:3100,title:'대서양을 바라보는 해변',kind:'place',key:'beach'}
];
export const BRAZIL_NPC_SPACES=[
 {id:'summit',x:1240,y:1000,radius:36,passing:{x:1080,y:1000}},
 {id:'forest',x:1450,y:1790,radius:36,passing:{x:1280,y:1790}},
 {id:'carnival',x:2490,y:2270,radius:36,passing:{x:2330,y:2270}},
 {id:'coast',x:2810,y:2940,radius:36,passing:{x:2640,y:2940}}
];
export function brazilElevation(x,y){const [sx,sy,sw,sd]=BRAZIL_STAGE,[rx,ry,rw,rd]=BRAZIL_STAGE_RAMP;if(x>=sx&&x<=sx+sw&&y>=sy&&y<=sy+sd)return BRAZIL_STAGE_HEIGHT;if(x>=rx&&x<=rx+rw&&y>=ry&&y<=ry+rd)return BRAZIL_STAGE_HEIGHT*(ry+rd-y)/rd;if(x>=1080&&x<=1600&&y>=1400&&y<=2000)return 250*(2000-y)/600;if(x<=1450&&y<=1400)return 250;return 0;}
const rect=(id,x,y,w,h,top=200)=>({id,shape:'rect',x,y,w,h,top});
export const BRAZIL_OBSTACLES=[rect('statue-pedestal',610,610,180,180,650),...BRAZIL_BLOCKS.map(([x,y,w,d,h],i)=>rect('city-block-'+i,x-8,y-8,w+16,d+16,h+30)),rect('stage-backdrop',2170,1948,320,28,160),rect('stage-speaker-left',2167,2107,26,26,85),rect('stage-speaker-right',2467,2107,26,26,85),...BRAZIL_BEDS.map((b,i)=>rect('planted-bed-'+i,...b,190)),rect('ramp-east-railing',1585,1400,20,570,350)];
function inPolygon(x,y){let inside=false;for(let i=0,j=BRAZIL_WALK_POLYGON.length-1;i<BRAZIL_WALK_POLYGON.length;j=i++){const [a,b]=BRAZIL_WALK_POLYGON[i],[c,d]=BRAZIL_WALK_POLYGON[j];if((b>y)!==(d>y)&&x<(c-a)*(y-b)/(d-b)+a)inside=!inside;}return inside;}
function edgeDistance(x,y){let best=Infinity;for(let i=0;i<BRAZIL_WALK_POLYGON.length;i++){const a=BRAZIL_WALK_POLYGON[i],b=BRAZIL_WALK_POLYGON[(i+1)%BRAZIL_WALK_POLYGON.length],dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/(dx*dx+dy*dy)));best=Math.min(best,Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy));}return best;}
export function brazilObstacleAt(x,y){return BRAZIL_OBSTACLES.find(o=>o.shape==='circle'?Math.hypot(x-o.x,y-o.y)<36+o.r:Math.hypot(Math.max(o.x-x,0,x-o.x-o.w),Math.max(o.y-y,0,y-o.y-o.h))<36)||null;}
export function brazilCanWalk(x,y){return Number.isFinite(x)&&Number.isFinite(y)&&inPolygon(x,y)&&edgeDistance(x,y)>=40&&!brazilObstacleAt(x,y);}
export function brazilSegmentClear(a,b,{footHeight}={}){const n=Math.max(1,Math.ceil(Math.hypot(a.x-b.x,a.y-b.y)/6));let h=brazilElevation(a.x,a.y);for(let i=0;i<=n;i++){const t=i/n,x=a.x+(b.x-a.x)*t,y=a.y+(b.y-a.y)*t,hh=brazilElevation(x,y);if(!brazilCanWalk(x,y))return false;if(Math.abs(hh-h)>5&&!(Number.isFinite(footHeight)&&footHeight>=Math.max(h,hh)-.1&&Math.abs(hh-h)<=30))return false;h=hh;}return true;}
export const BRAZIL_NOTES={
 statue:['코르코바두 산 위의 예수상','리우데자네이루의 예수상은 코르코바두 산 위에 있어요. RIOTUR는 1931년에 문을 연 이 기념물의 높이를 상 자체 30m, 받침대를 포함하면 38m로 설명합니다. 두 팔을 펼친 모습과 산 위 전망 공간을 참고했어요. 맵의 크기와 높이는 이 실제 수치의 축척을 재현한 것이 아닙니다.'],
 view:['산과 도시와 바다가 함께 있는 경관','코르코바두 전망에서는 리우의 도시와 산, 해안 경관을 함께 볼 수 있어요. 맵에서는 동쪽 방향의 팡 지 아수카르와 남동쪽 해안의 관계를 압축해 표현했습니다. 코파카바나는 산 정상과 같은 장소가 아니며, 실제로 두 곳 사이에는 시가지와 긴 이동 거리가 있습니다.'],
 forest:['리우의 숲은 아마존이 아니에요','티주카 국립공원의 숲과 코르코바두는 리우 도시 경관의 일부예요. 브라질 북부의 아마존 지역과는 다른 장소입니다. 이 넓은 연결 길은 산과 도시 구역을 쉽게 오가도록 만든 학습용 경사로이며 실제 등산로나 도로를 재현한 것이 아닙니다.'],
 carnival:['삼바와 카니발을 배울 학습용 광장','리우 카니발에는 삼바 학교의 퍼레이드와 여러 거리 축제가 있어요. 대표적인 삼바 학교 퍼레이드 장소인 삼보드로무는 도심의 별도 시설입니다. 이 광장과 작은 무대는 삼바 문화를 탐험할 수 있도록 만든 학습용 공간으로, 예수상 옆이나 해변에 실제로 이 시설이 있다는 뜻은 아닙니다. 앞쪽의 넓은 경사로를 이용해 무대 위에도 올라가 볼 수 있어요. 무대 주변의 무용수에게 가까이 가면 짧은 삼바 동작을 볼 수 있습니다.'],
 promenade:['검고 흰 돌로 만든 물결무늬','코파카바나의 산책로에는 검고 흰 포르투갈식 돌 포장으로 만든 물결무늬가 있어요. RIOTUR는 리스본 산책로에서 받은 영향을 설명합니다. 바다와 산책로, 시가지가 나란히 이어지는 해안 도시 경관을 살펴보세요.'],
 beach:['리우에서 바라보는 바다는 대서양','리우데자네이루는 브라질의 대서양 연안에 있는 도시예요. 코파카바나는 리우 남부 해안의 해변입니다. 이 맵에서는 모래사장을 걸을 수 있고 바다로는 들어갈 수 없어요. 해안선·거리·건물은 학습을 위해 단순화했습니다. 브라질 전체의 기후나 생활을 이 해변 하나로 설명하지 않도록 해요.']
};
export const BRAZIL_SOURCES=[
 {title:'UNESCO · 산과 바다가 만나는 리우 문화 경관',url:'https://whc.unesco.org/en/list/1100/'},
 {title:'RIOTUR · 팡 지 아수카르와 우르카',url:'https://riotur.rio/que_fazer/paodeacucar/'},
 {title:'RIOTUR · 코르코바두 예수상',url:'https://riotur.rio/que_fazer/cristoredentor/'},
 {title:'티주카 국립공원 · 코르코바두의 위치와 접근',url:'https://parquenacionaldatijuca.rio/como-visitar-o-corcovado/'},
 {title:'RIOTUR · 코파카바나와 물결무늬 산책로',url:'https://riotur.rio/que_fazer/copacabana-e-leme/'},
 {title:'RIOTUR · 삼보드로무와 삼바 학교 퍼레이드',url:'https://riotur.rio/que_fazer/passarela-professor-darcy-ribeiro-sambodromo/'},
 {title:'브라질 공식 관광청 · 카니발',url:'https://visitbrasil.com/en/festivity/carnival-en'}
];
export const BRAZIL_MAP_NOTE='코르코바두·리우 시가지·코파카바나를 한 화면에 압축한 학습용 공간입니다. 실제 지형·해발 고도·건물 수·거리·축척·관광 동선을 재현하지 않습니다. 산 위 전망대와 해안을 잇는 경사로, 삼바·카니발 광장과 무대는 학습용 창작입니다. 실제 삼보드로무가 산 정상이나 코파카바나 해변에 있다는 뜻이 아닙니다. 자료 확인: 2026.10.16.';
