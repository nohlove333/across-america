// Supplementary references used by the 2026-10-18 review; no answer or progress changes.
const refs={
 rio:['UNESCO · 산과 바다 사이 리우의 도시 경관','https://whc.unesco.org/en/list/1100/'],
 rioSamba:['브라질 관광청 · 리우와 삼바 학교','https://visitbrasil.com/en/location/rio-de-janeiro-en/'],
 copper:['칠레 구리위원회 · 구리 산업 자료','https://www.cochilco.cl/web/anuario-de-estadisticas-del-cobre-y-otros-minerales/'],
 glacier:['미국 국립공원청 · 빙하와 U자곡','https://www.nps.gov/articles/ushapedvalleysfjordshangingvalleys.htm'],
 quebec:['UNESCO · 퀘벡 구시가지','https://whc.unesco.org/en/list/300/'],
 pluralism:['OpenStax · 문화 다원주의와 동화 모형','https://openstax.org/books/introduction-sociology-3e/pages/11-4-intergroup-relationships'],
 jazz:['미국 국립공원청 · 뉴올리언스 재즈의 기원','https://www.nps.gov/jazz/learn/historyculture/history_early.htm'],
 mexican:['UNESCO · 멕시코 전통 음식 문화','https://ich.unesco.org/en/RL/traditional-mexican-cuisine-ancestral-ongoing-community-culture-the-michoacan-paradigm-00400'],
 hispanic:['미국 인구조사국 · 히스패닉의 의미','https://www.census.gov/topics/population/hispanic-origin/about.html'],
 canal:['파나마 운하청 · 국제 항로 연결','https://pancanal.com/en/connectivity/'],
 terraces:['UNESCO · 마추픽추의 경작 테라스','https://whc.unesco.org/en/list/274/'],
 basin:['USGS · 유역과 물의 이동','https://www.usgs.gov/water-science-school/science/watersheds-and-drainage-basins'],
 samba:['UNESCO · 바히아 삼바 전통과 리우 삼바의 관계','https://ich.unesco.org/en/RL/samba-de-roda-of-reconcavo-of-bahia-00101'],
 tango:['UNESCO · 아르헨티나·우루과이의 탱고','https://ich.unesco.org/en/RL/tango-00258'],
 chile:['칠레 기상청 · 중부의 겨울 강수','https://blog.meteochile.gob.cl/2018/06/26/invierno-en-chile-todo-sobre-lluvias/'],
 irrigation:['FAO · 관개의 의미','https://www.fao.org/4/a0135e/A0135E07.htm'],
 water:['OECD · 칠레의 물 관리','https://www.oecd.org/en/publications/oecd-environmental-performance-reviews-chile-2024_5bc65d36-en/full-report/component-7.html']
};
const links={canada:{q1:['glacier'],q2:['quebec'],q3:['pluralism'],activity:['quebec']},usa:{q2:['jazz'],activity:['jazz']},mexico:{q2:['mexican'],q3:['hispanic'],activity:['mexican']},panama:{q2:['canal'],q3:['canal'],activity:['canal']},peru:{q3:['terraces']},brazil:{q2:['basin'],q3:['rioSamba'],activity:['basin','rio','rioSamba']},argentina:{q2:['tango'],q3:['tango'],activity:['tango']},chile:{q1:['chile'],q2:['irrigation'],q3:['copper'],activity:['chile','water']}};
export const quizReviewReferences=(id,key)=>(links[id]?.[key]||[]).map(k=>refs[k]);

const basis={
canada:{q1:'보충 지형 개념: 미국 국립공원청 U자곡·빙하 침식 자료.',q2:'동아출판 사회① 92~93쪽 문화 경관과 연결한 퀘벡 지역 사례. UNESCO 퀘벡 구시가지 자료.',q3:'보충 비교 모형: OpenStax Introduction to Sociology 3e 11.4. 교재 92쪽의 문화 공존·융합과 연결하며 이 이론명이 교재 본문에 있다는 뜻은 아닙니다.'},
usa:{q1:'동아출판 사회① 86~87쪽 기후와 농목업의 관계.',q2:'보충 지역 사례: 미국 국립공원청 뉴올리언스 재즈의 기원. 교재 92쪽 문화 융합과 연결.',q3:'동아출판 사회① 94~95쪽 초국적 기업의 의미와 공간적 분업.'},
mexico:{q1:'동아출판 사회① 84~85쪽 지리적·문화적 지역 구분.',q2:'동아출판 사회① 92~93쪽 문화의 공존·융합. 멕시코 음식의 재료·기술은 UNESCO 보충 자료.',q3:'동아출판 사회① 90~91쪽 인구 구성·히스패닉. 미국 인구조사국의 용어 범위도 참고.'},
panama:{q1:'동아출판 사회① 84~85쪽 파나마 지협과 아메리카의 지리적 구분.',q2:'파나마 운하청 국제 항로 자료와 교재 84쪽 두 대양의 위치를 연결한 보충 항로 문항.',q3:'보충 위치 개념: 위도·경도의 절대적 위치와 교통·접근성의 상대적 위치를 구별하는 문항. 운하의 연결성은 파나마 운하청 자료.'},
peru:{q1:'동아출판 사회① 86~87쪽 비슷한 위도에서 고도에 따른 기온 차이. 교재의 보고타·마나우스 비교를 키토 사례로 재구성했으며 키토는 에콰도르 도시입니다.',q2:'동아출판 사회① 86~87쪽 적도 주변 안데스 산지의 고산 기후.',q3:'보충 지역 사례: UNESCO 마추픽추의 농업 테라스와 산지 적응.'},
brazil:{q1:'동아출판 사회① 86~87쪽 아마존 유역의 열대 우림 기후.',q2:'보충 개념: USGS 유역·배수 분지 자료. 아마존 유역은 교재 86·88~89쪽과 연결.',q3:'교재의 리우 카니발과 연결한 공동체 공연 준비 사례. 브라질 관광청의 삼바 학교·제작자 참여 자료 보충.',activity:'아마존 유역 개념(USGS)·리우 도시 경관(UNESCO)·공동체 축제와 관광(브라질 관광청)을 종합한 자료 연결 활동.'},
argentina:{q1:'동아출판 사회① 86~87쪽 온대 초원 팜파스와 농목업.',q2:'동아출판 사회① 92~93쪽 문화의 이동·융합과 연결한 보충 비교 문항. 탱고 형성·확산은 UNESCO 자료.',q3:'UNESCO Tango 00258: 아르헨티나와 우루과이 공동 등재.'},
chile:{q1:'보충 지역 기후: 칠레 기상청의 중부 겨울 강수 자료. 남반구의 계절과 월을 연결.',q2:'보충 농업 개념: FAO 관개 정의와 칠레 중부의 건조한 여름을 연결.',q3:'보충 생산 활동: 칠레 구리위원회 구리 산업 자료.'}};
export const quizReviewBasis=(id,key)=>basis[id]?.[key]||null;
