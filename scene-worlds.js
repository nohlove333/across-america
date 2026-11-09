import {chestSegmentClear} from './chest-collision.js?v=quick91';
import {npcSegmentClear,findNpcPath,npcTopology} from './npc-navigation.js?v=quick91';
import {QUEBEC_BOUNDS} from './quebec-data.js?v=quick91';
import {buildChile,chileCamera} from './chile-model.js?v=quick91';
import {CHILE_BOUNDS,CHILE_NOTES,CHILE_SOURCES,CHILE_MAP_NOTE,chileElevation,chileSegmentClear} from './chile-data.js?v=quick91';
import {findChilePath} from './chile-path.js?v=quick91';
import {buildArgentina,argentinaCamera} from './argentina-model.js?v=quick91';
import {ARGENTINA_BOUNDS,ARGENTINA_NOTES,ARGENTINA_SOURCES,ARGENTINA_MAP_NOTE,argentinaElevation,argentinaSegmentClear} from './argentina-data.js?v=quick91';
import {findArgentinaPath} from './argentina-path.js?v=quick91';
import {buildBrazil,brazilCamera,brazilPickRamp} from './brazil-model.js?v=quick91';
import {BRAZIL_BOUNDS,BRAZIL_NOTES,BRAZIL_SOURCES,BRAZIL_MAP_NOTE,brazilElevation,brazilSegmentClear} from './brazil-data.js?v=quick91';
import {findBrazilPath} from './brazil-path.js?v=quick91';
import {buildPeru,peruCamera,peruPickRamp} from './peru-model.js?v=quick91';
import {PERU_BOUNDS,PERU_NOTES,PERU_SOURCES,PERU_MAP_NOTE,peruElevation,peruSegmentClear} from './peru-data.js?v=quick91';
import {findPeruPath} from './peru-path.js?v=quick91';
import {buildPanama,panamaCamera} from './panama-model.js?v=quick91';
import {PANAMA_BOUNDS,PANAMA_NOTES,PANAMA_SOURCES,PANAMA_MAP_NOTE,panamaElevation,panamaSegmentClear} from './panama-data.js?v=quick91';
import {findPanamaPath} from './panama-path.js?v=quick91';
// Per-city data keeps geometry, picking, navigation and reference notes paired.
import {buildTimes,timesCamera,timesPickRamp} from './times-model.js?v=quick91';
import {TIMES_BOUNDS,TIMES_NOTES,TIMES_SOURCES,recoverTimesPosition,timesElevation,timesSegmentClear} from './times-data.js?v=quick91';
import {findTimesPath} from './times-path.js?v=quick91';
import {QUEBEC_NOTES,QUEBEC_SOURCES,quebecSegmentClear} from './quebec-data.js?v=quick91';
import {findQuebecPath} from './quebec-path.js?v=quick91';
import {buildMexico,mexicoCamera} from './mexico-model.js?v=quick91';
import {MEXICO_BOUNDS,MEXICO_NOTES,MEXICO_SOURCES,MEXICO_MAP_NOTE,mexicoElevation,mexicoSegmentClear} from './mexico-data.js?v=quick91';
import {findMexicoPath} from './mexico-path.js?v=quick91';
export const WORLDS={
 chile:{canvas:'#chileScene',title:'칠레 맵 고증·참고 자료',caption:'칠레 08 · 산티아고 — 라 모네다와 두 광장·불네스 거리',world:{build:buildChile,camera:chileCamera,elevation:chileElevation,bounds:CHILE_BOUNDS,heights:[0],pickRamp:()=>null,sky:false,orbit:{yaw:3.36,pitch:.59}},path:findChilePath,segmentClear:chileSegmentClear,notes:CHILE_NOTES,sources:CHILE_SOURCES,note:CHILE_MAP_NOTE,description:'라 모네다 궁전의 북쪽 주 정면과 헌법 광장, 남쪽 시민 광장, 알라메다 대로 너머의 불네스 보행 거리를 잇는 도심 축을 참고했습니다. 낮고 긴 흰 청사와 안뜰·수면·행정 건물로 구성하고 보행로는 넓혔습니다. 궁전 내부·문화센터 지하는 구현하지 않았고, 안내 패널과 소개 엽서 자리는 학습용 창작입니다.'},
 argentina:{canvas:'#argentinaScene',title:'아르헨티나 맵 고증·참고 자료',caption:'아르헨티나 07 · 부에노스아이레스 — 5월 광장과 산텔모·탱고 바닥',world:{build:buildArgentina,camera:argentinaCamera,elevation:argentinaElevation,bounds:ARGENTINA_BOUNDS,heights:[0],pickRamp:()=>null,sky:false,orbit:{yaw:4.75,pitch:.59}},path:findArgentinaPath,segmentClear:argentinaSegmentClear,notes:ARGENTINA_NOTES,sources:ARGENTINA_SOURCES,note:ARGENTINA_MAP_NOTE,description:'5월 광장 동쪽의 카사 로사다 서쪽 정면과 중앙 아치, 서쪽의 카빌도·북서쪽 대성당, 남쪽 산텔모·도레고 광장의 관계를 참고했습니다. 긴 거리를 압축하고 보행 공간을 넓힌 학습용 모형입니다. 탱고 바닥과 상점·노점은 창작했습니다.'},
 brazil:{canvas:'#brazilScene',title:'브라질 맵 고증·참고 자료',caption:'브라질 06 · 리우 — 코르코바두·해안과 학습용 삼바 광장',world:{build:buildBrazil,camera:brazilCamera,elevation:brazilElevation,bounds:BRAZIL_BOUNDS,heightTolerance:.0001,heights:[0,.45,5],pickRamp:brazilPickRamp,sky:false,orbit:{yaw:1.35,pitch:.56}},path:findBrazilPath,segmentClear:brazilSegmentClear,notes:BRAZIL_NOTES,sources:BRAZIL_SOURCES,note:BRAZIL_MAP_NOTE,description:'코르코바두 정상의 예수상과 전망대, 숲과 해안 시가지, 코파카바나의 검고 흰 물결 포장, 동쪽 팡 지 아수카르 경관을 참고했습니다. 여러 장소의 거리를 압축했고 경사로와 삼바·카니발 학습 광장·무대는 창작했습니다. 조각 모형·건물·바닥 무늬는 직접 제작했습니다.'},
 peru:{canvas:'#peruScene',title:'페루 맵 고증·참고 자료',caption:'페루 05 · 마추픽추 — 석조 유적·경작 테라스와 산지림',world:{build:buildPeru,camera:peruCamera,elevation:peruElevation,bounds:PERU_BOUNDS,heights:[],pickRamp:peruPickRamp,sky:false,orbit:{yaw:.18,pitch:.55}},path:findPeruPath,segmentClear:peruSegmentClear,notes:PERU_NOTES,sources:PERU_SOURCES,note:PERU_MAP_NOTE,description:'산등성이의 유적과 중앙 광장, 지붕 없는 석조 건물군, 계단식 경작지와 와이나픽추 방향 경관을 참고했습니다. 동선과 문을 넓히고, 보행 경사를 완만하게 단순화한 수업용 모형입니다. 돌 무늬와 건물·지형은 직접 제작했습니다.'},
 panama:{canvas:'#panamaScene',title:'파나마 맵 고증·참고 자료',caption:'파나마 04 · 미라플로레스 — 기존 2단 갑문과 전망 산책로',world:{build:buildPanama,camera:panamaCamera,elevation:panamaElevation,bounds:PANAMA_BOUNDS,heights:[0],pickRamp:()=>null,sky:false,orbit:{yaw:1.05,pitch:.62}},path:findPanamaPath,segmentClear:panamaSegmentClear,notes:PANAMA_NOTES,sources:PANAMA_SOURCES,note:PANAMA_MAP_NOTE,description:'미라플로레스의 나란한 두 통로와 각각의 2단 갑실, V자형 수문, 벽 위 전기 기관차와 중앙 제어 건물, 운하 쪽 방문자 센터를 참고했습니다. 물길 축과 수위·시설 비례를 단순화하고 관찰 길과 학습용 마당을 넓혔습니다. 모형과 표지·선박은 직접 제작했습니다.'},
 canada:{canvas:'#quebecScene',title:'캐나다 맵 참고 자료',caption:'캐나다 01 · 퀘벡 구시가지 — 학습용으로 재구성한 3D 맵',world:{},path:findQuebecPath,segmentClear:quebecSegmentClear,notes:QUEBEC_NOTES,sources:QUEBEC_SOURCES,description:'프티 샹플랭의 절벽 아래 거리, 로얄 광장과 석조 성당, 카스쿠 계단, 푸니쿨레르, 세인트로렌스강의 관계를 참고했습니다. 건물과 거리 모형은 직접 제작했습니다.'},
 usa:{canvas:'#timesScene',title:'미국 맵 참고 자료',caption:'미국 02 · 뉴욕 타임스스퀘어 — 밤의 보행 광장 3D 맵',world:{build:buildTimes,camera:timesCamera,elevation:timesElevation,bounds:TIMES_BOUNDS,heights:[0,1.4],pickRamp:timesPickRamp,night:true,orbit:{yaw:.64,pitch:.61}},path:findTimesPath,segmentClear:timesSegmentClear,recover:recoverTimesPosition,notes:TIMES_NOTES,sources:TIMES_SOURCES,description:'브로드웨이의 보행 광장, 더피 광장의 붉은 TKTS 계단, 극장가와 전광판 경관을 참고했습니다. 전광판의 그림과 문구·상점·극장 이름은 이 사이트용으로 창작했습니다.'},
 mexico:{canvas:'#mexicoScene',title:'멕시코 맵 고증·참고 자료',caption:'멕시코 03 · 예술 궁전과 알라메다 공원 — 음식 만들기 자리는 학습용 창작 공간',world:{build:buildMexico,camera:mexicoCamera,elevation:mexicoElevation,bounds:MEXICO_BOUNDS,heights:[0],pickRamp:()=>null,sky:false,orbit:{yaw:.22,pitch:.62}},path:findMexicoPath,segmentClear:mexicoSegmentClear,notes:MEXICO_NOTES,sources:MEXICO_SOURCES,note:MEXICO_MAP_NOTE,description:'벨라스 아르테스 궁전의 남향 정면·흰 대리석 외관·중앙 돔, 서쪽 알라메다 센트랄 공원, 남쪽 후아레스 대로와 남동쪽 타워의 관계를 참고했습니다. 음식 만들기 자리는 공원 안에 추가한 학습용 창작 공간이며 실제 상설 조리시설의 재현이 아닙니다. 모형·간판·재료 소품은 직접 제작했습니다.'}
};

for(const [id,config]of Object.entries(WORLDS)){const original=config.path,terrain=config.segmentClear;config.world.regionId=id;config.baseSegmentClear=terrain;config.world.speechClear=(a,b)=>terrain(a,b)&&chestSegmentClear(id,a,b);config.segmentClear=(a,b,options)=>npcSegmentClear(id,a,b)&&chestSegmentClear(id,a,b)&&terrain(a,b,options);config.path=(a,b)=>findNpcPath(a,b,{original,clear:config.segmentClear,bounds:config.world.bounds||QUEBEC_BOUNDS,cacheKey:npcTopology(id)});}
