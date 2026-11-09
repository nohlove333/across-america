import {applyDialogue84} from './npc-dialogue84.js?v=quick91';
import {NPC_COMPACT73} from './npc-compact73.js';
import {NPC_SOCIAL_LAYOUT,NPC_GREETERS} from './npc-social-layout.js?v=quick91';
import {WORLD_NPC_ROSTERS} from './world-npc-registry.js?v=quick91';
import {ARGENTINA_ROSTER} from './argentina-roster.js?v=quick91';
// Approved characters and coordinates retained; guide subjects revised with the learning content.
export const NPC_LAYOUT={
 "canada": [
  {
   "id": "canada-0",
   "x": 810,
   "y": 1790,
   "heading": -1.7539071440573808,
   "art": "canada",
   "row": 0,
   "role": "자료 연결 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "기록 펼치기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "거리 안내소 옆",
   "placementReason": "거리 기록을 복원하는 안내인이 실제 안내 표지와 만나는 자리입니다.",
   "stationBounds": [
    720,
    1670,
    900,
    1860
   ],
   "lookAt": {
    "x": 650,
    "y": 1760
   },
   "approach": {
    "x": 729,
    "y": 1775
   }
  },
  {
   "id": "canada-1",
   "x": 1475,
   "y": 862,
   "heading": 1.194835372923591,
   "art": "canada",
   "row": 1,
   "role": "언어·다문화 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "건축 스케치 설명",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "로얄 광장 서쪽",
   "placementReason": "성당과 석조 거리 경관을 바라보며 건축을 설명합니다.",
   "stationBounds": [
    1400,
    830,
    1640,
    1010
   ],
   "lookAt": {
    "x": 1625,
    "y": 920
   },
   "approach": {
    "x": 1551,
    "y": 892
   }
  },
  {
   "id": "canada-2",
   "x": 2055,
   "y": 1220,
   "heading": -1.1722738811284763,
   "art": "canada",
   "row": 2,
   "role": "이주 역사 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "기록 읽기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "강변 보행로의 넓은 쉼터",
   "placementReason": "이주 기록과 강을 연결해 설명하되 강변 통행선은 비웁니다.",
   "stationBounds": [
    1970,
    1080,
    2200,
    1400
   ],
   "lookAt": {
    "x": 2000,
    "y": 1220
   },
   "approach": {
    "x": 1979,
    "y": 1252
   }
  },
  {
   "id": "canada-3",
   "x": 1100,
   "y": 230,
   "heading": 0.621659922283089,
   "art": "canada",
   "row": 3,
   "role": "지리 조사 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "지도 살펴보기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "상부 전망 테라스",
   "placementReason": "지형 지도를 펼칠 평탄한 자리이며 계단 진입부와 떨어져 있습니다.",
   "stationBounds": [
    1030,
    150,
    1180,
    320
   ],
   "lookAt": {
    "x": 1150,
    "y": 300
   },
   "approach": {
    "x": 1148,
    "y": 297
   }
  },
  {
   "id": "canada-4",
   "x": 550,
   "y": 250,
   "heading": 1.5707963267948966,
   "art": "canada",
   "row": 4,
   "role": "벤치에서 독서",
   "context": "독서하는 부부",
   "action": "벤치에서 독서",
   "group": "resident",
   "scene": "독서하는 부부",
   "pose": "seated",
   "height": 1.3,
   "radius": 25,
   "stationBounds": [
    350,
    150,
    800,
    320
   ],
   "placementReason": "독서하는 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "canada-5",
   "x": 700,
   "y": 250,
   "heading": -1.5707963267948966,
   "art": "canada",
   "row": 5,
   "role": "앉아 차 마시기",
   "context": "독서하는 부부",
   "action": "앉아 차 마시기",
   "group": "resident",
   "scene": "독서하는 부부",
   "pose": "seated",
   "height": 1.3,
   "radius": 25,
   "stationBounds": [
    350,
    150,
    800,
    320
   ],
   "placementReason": "독서하는 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "canada-6",
   "x": 2141,
   "y": 1421,
   "heading": 0,
   "art": "canada",
   "row": 6,
   "role": "웃으며 이야기",
   "context": "대화하는 친구",
   "action": "웃으며 이야기",
   "group": "resident",
   "scene": "대화하는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1900,
    1350,
    2200,
    1620
   ],
   "placementReason": "대화하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "canada-7",
   "x": 2141,
   "y": 1571,
   "heading": 3.141592653589793,
   "art": "canada",
   "row": 7,
   "role": "손짓하며 이야기",
   "context": "대화하는 친구",
   "action": "손짓하며 이야기",
   "group": "resident",
   "scene": "대화하는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1900,
    1350,
    2200,
    1620
   ],
   "placementReason": "대화하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "canada-8",
   "x": 2099,
   "y": 1693,
   "heading": 1.2490457723982544,
   "art": "canada",
   "row": 8,
   "role": "강 사진 찍기",
   "context": "강을 구경하는 가족",
   "action": "강 사진 찍기",
   "group": "resident",
   "scene": "강을 구경하는 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1870,
    1630,
    2200,
    1840
   ],
   "placementReason": "강을 구경하는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "canada-9",
   "x": 1993,
   "y": 1799,
   "heading": 1.6971553266749657,
   "art": "canada",
   "row": 9,
   "role": "강 가리키기",
   "context": "강을 구경하는 가족",
   "action": "강 가리키기",
   "group": "resident",
   "scene": "강을 구경하는 가족",
   "pose": "standing",
   "height": 1.31,
   "radius": 25,
   "stationBounds": [
    1870,
    1630,
    2200,
    1840
   ],
   "placementReason": "강을 구경하는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "canada-10",
   "x": 935,
   "y": 1330,
   "heading": 1.5707963267948966,
   "art": "canada",
   "row": 10,
   "role": "책 정리하기",
   "context": "책방과 스케치",
   "action": "책 정리하기",
   "group": "resident",
   "scene": "책방과 스케치",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    840,
    1120,
    1140,
    1470
   ],
   "placementReason": "책방과 스케치 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "canada-11",
   "x": 1085,
   "y": 1330,
   "heading": -1.5707963267948966,
   "art": "canada",
   "row": 11,
   "role": "스케치하기",
   "context": "책방과 스케치",
   "action": "스케치하기",
   "group": "resident",
   "scene": "책방과 스케치",
   "pose": "seated",
   "height": 1.3,
   "radius": 25,
   "stationBounds": [
    840,
    1120,
    1140,
    1470
   ],
   "placementReason": "책방과 스케치 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  }
 ],
 "usa": [
  {
   "id": "usa-0",
   "x": 1510,
   "y": 1250,
   "heading": -1.2722973952087173,
   "art": "usa",
   "row": 0,
   "role": "문화 자료 해설",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "마이크 들고 취재",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "전광판 보행 광장 동쪽",
   "placementReason": "방송 취재 역할이 전광판과 광장을 배경으로 만납니다.",
   "stationBounds": [
    1440,
    1110,
    1720,
    1420
   ],
   "lookAt": {
    "x": 1350,
    "y": 1300
   },
   "approach": {
    "x": 1432,
    "y": 1274
   }
  },
  {
   "id": "usa-1",
   "x": 731,
   "y": 946,
   "heading": 0.9590693617390221,
   "art": "usa",
   "row": 1,
   "role": "음악 예술 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "색소폰 연주",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "브로드웨이 보행 공간",
   "placementReason": "음악 안내와 작은 연주가 극장가의 보행 공간에 놓입니다.",
   "stationBounds": [
    730,
    870,
    1050,
    1070
   ],
   "lookAt": {
    "x": 950,
    "y": 1100
   },
   "approach": {
    "x": 798,
    "y": 993
   }
  },
  {
   "id": "usa-2",
   "x": 800,
   "y": 1450,
   "heading": 1.373400766945016,
   "art": "usa",
   "row": 2,
   "role": "도시·산업 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "도시 지도 설명",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "극장가 보행로 안쪽",
   "placementReason": "도시 지도 안내를 건물 출입구와 차도에서 떨어진 곳에 둡니다.",
   "stationBounds": [
    690,
    1340,
    960,
    1530
   ],
   "lookAt": {
    "x": 950,
    "y": 1480
   },
   "approach": {
    "x": 880,
    "y": 1466
   }
  },
  {
   "id": "usa-3",
   "x": 1510,
   "y": 1860,
   "heading": -1.6316965350728847,
   "art": "usa",
   "row": 3,
   "role": "자연·문화 지리 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "강·평원 자료 비교",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "남쪽 광장 지도 안내 자리",
   "placementReason": "강·평원 자료를 비교하는 학습 안내이며 뉴욕 현장을 자연 지형으로 표현하지 않습니다.",
   "stationBounds": [
    1440,
    1770,
    1740,
    1950
   ],
   "lookAt": {
    "x": 1350,
    "y": 1850
   },
   "approach": {
    "x": 1428,
    "y": 1855
   }
  },
  {
   "id": "usa-4",
   "x": 1435,
   "y": 2100,
   "heading": 1.5707963267948966,
   "art": "usa",
   "row": 4,
   "role": "표 들고 걷기",
   "context": "공연 보러 가는 친구",
   "action": "표 들고 걷기",
   "group": "resident",
   "scene": "공연 보러 가는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1380,
    2020,
    1750,
    2170
   ],
   "placementReason": "공연 보러 가는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "usa-5",
   "x": 1585,
   "y": 2100,
   "heading": -1.5707963267948966,
   "art": "usa",
   "row": 5,
   "role": "친구에게 인사",
   "context": "공연 보러 가는 친구",
   "action": "친구에게 인사",
   "group": "resident",
   "scene": "공연 보러 가는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1380,
    2020,
    1750,
    2170
   ],
   "placementReason": "공연 보러 가는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "usa-6",
   "x": 746,
   "y": 1591,
   "heading": 0,
   "art": "usa",
   "row": 6,
   "role": "셀카 찍기",
   "context": "셀카 찍는 커플",
   "action": "셀카 찍기",
   "group": "resident",
   "scene": "셀카 찍는 커플",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    680,
    1550,
    950,
    1870
   ],
   "placementReason": "셀카 찍는 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "usa-7",
   "x": 746,
   "y": 1741,
   "heading": 3.141592653589793,
   "art": "usa",
   "row": 7,
   "role": "셀카에 손 흔들기",
   "context": "셀카 찍는 커플",
   "action": "셀카에 손 흔들기",
   "group": "resident",
   "scene": "셀카 찍는 커플",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    680,
    1550,
    950,
    1870
   ],
   "placementReason": "셀카 찍는 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "usa-8",
   "x": 1465,
   "y": 850,
   "heading": 1.5707963267948966,
   "art": "usa",
   "row": 8,
   "role": "전광판 가리키기",
   "context": "전광판 보는 가족",
   "action": "전광판 가리키기",
   "group": "resident",
   "scene": "전광판 보는 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1430,
    780,
    1740,
    1010
   ],
   "placementReason": "전광판 보는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "usa-9",
   "x": 1615,
   "y": 850,
   "heading": 1.5707963267948966,
   "art": "usa",
   "row": 9,
   "role": "놀라서 올려다보기",
   "context": "전광판 보는 가족",
   "action": "놀라서 올려다보기",
   "group": "resident",
   "scene": "전광판 보는 가족",
   "pose": "standing",
   "height": 1.31,
   "radius": 25,
   "stationBounds": [
    1430,
    780,
    1740,
    1010
   ],
   "placementReason": "전광판 보는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "usa-10",
   "x": 1707,
   "y": 1576,
   "heading": -0.7853981633974483,
   "art": "usa",
   "row": 10,
   "role": "시계 보며 걷기",
   "context": "바쁜 일상",
   "action": "시계 보며 걷기",
   "group": "resident",
   "scene": "바쁜 일상",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1400,
    1500,
    1770,
    1760
   ],
   "placementReason": "바쁜 일상 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "usa-11",
   "x": 1601,
   "y": 1682,
   "heading": 2.356194490192345,
   "art": "usa",
   "row": 11,
   "role": "음료 들고 음악 듣기",
   "context": "바쁜 일상",
   "action": "음료 들고 음악 듣기",
   "group": "resident",
   "scene": "바쁜 일상",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1400,
    1500,
    1770,
    1760
   ],
   "placementReason": "바쁜 일상 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  }
 ],
 "mexico": [
  {
   "id": "mexico-0",
   "x": 2560,
   "y": 1120,
   "heading": -1.8157749899217608,
   "art": "mexico",
   "row": 0,
   "role": "이주·언어 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "건축과 문화 설명",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "예술 궁전 앞 광장 동쪽",
   "placementReason": "궁전 외관을 설명하는 문화 안내를 정면 광장 가장자리에 둡니다.",
   "stationBounds": [
    2480,
    990,
    2700,
    1220
   ],
   "lookAt": {
    "x": 2400,
    "y": 1080
   },
   "approach": {
    "x": 2480,
    "y": 1100
   }
  },
  {
   "id": "mexico-1",
   "x": 1382,
   "y": 552,
   "heading": -0.802637834591978,
   "art": "mexico",
   "row": 1,
   "role": "음식 문화 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "타코 접시 살피기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "공원 음식 체험 자리 · 타코 준비",
   "placementReason": "타코 안내인이 공원 속 재료 노점과 체험 자리 사이에서 안내합니다.",
   "stationBounds": [
    1180,
    500,
    1390,
    570
   ],
   "lookAt": {
    "x": 1280,
    "y": 650
   },
   "approach": {
    "x": 1323,
    "y": 609
   }
  },
  {
   "id": "mexico-2",
   "x": 1533,
   "y": 550,
   "heading": -1.1675148450760604,
   "art": "mexico",
   "row": 2,
   "role": "문화 교류 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "토르티야 빚기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "토르티야 노점 앞",
   "placementReason": "토르티야 안내인이 해당 노점 가까이에서 조리 과정을 보여줍니다.",
   "stationBounds": [
    1470,
    500,
    1600,
    700
   ],
   "lookAt": {
    "x": 1370,
    "y": 620
   },
   "approach": {
    "x": 1458,
    "y": 582
   }
  },
  {
   "id": "mexico-3",
   "x": 1090,
   "y": 640,
   "heading": 1.522054475484965,
   "art": "mexico",
   "row": 3,
   "role": "식재료 기록 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "옥수수 기록하기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "옥수수 노점과 재료 안내 자리",
   "placementReason": "식재료 기록 안내인을 대로에서 음식 체험 구역으로 옮깁니다.",
   "stationBounds": [
    990,
    560,
    1180,
    720
   ],
   "lookAt": {
    "x": 1280,
    "y": 650
   },
   "approach": {
    "x": 1172,
    "y": 644
   }
  },
  {
   "id": "mexico-4",
   "x": 864,
   "y": 1180,
   "heading": 1.8439365569096526,
   "art": "mexico",
   "row": 4,
   "role": "사진 찍기",
   "context": "공원 나들이 가족",
   "action": "사진 찍기",
   "group": "resident",
   "scene": "공원 나들이 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    680,
    590,
    1040,
    1230
   ],
   "placementReason": "공원 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "mexico-5",
   "x": 984,
   "y": 1059,
   "heading": -0.2680388250934094,
   "art": "mexico",
   "row": 5,
   "role": "공원 지도 보기",
   "context": "공원 나들이 가족",
   "action": "공원 지도 보기",
   "group": "resident",
   "scene": "공원 나들이 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    680,
    590,
    1040,
    1230
   ],
   "placementReason": "공원 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "mexico-6",
   "x": 1026,
   "y": 1222,
   "heading": -2.3586394730954057,
   "art": "mexico",
   "row": 6,
   "role": "그림 보여주기",
   "context": "공원 나들이 가족",
   "action": "그림 보여주기",
   "group": "resident",
   "scene": "공원 나들이 가족",
   "pose": "standing",
   "height": 1.31,
   "radius": 25,
   "stationBounds": [
    680,
    590,
    1040,
    1230
   ],
   "placementReason": "공원 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "mexico-7",
   "x": 425,
   "y": 750,
   "heading": 1.5707963267948966,
   "art": "mexico",
   "row": 7,
   "role": "벤치에서 책 읽기",
   "context": "독서하는 어르신 부부",
   "action": "벤치에서 책 읽기",
   "group": "resident",
   "scene": "독서하는 어르신 부부",
   "pose": "seated",
   "height": 1.3,
   "radius": 25,
   "stationBounds": [
    370,
    650,
    660,
    830
   ],
   "placementReason": "독서하는 어르신 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "mexico-8",
   "x": 575,
   "y": 750,
   "heading": -1.5707963267948966,
   "art": "mexico",
   "row": 8,
   "role": "웃으며 대화",
   "context": "독서하는 어르신 부부",
   "action": "웃으며 대화",
   "group": "resident",
   "scene": "독서하는 어르신 부부",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    370,
    650,
    660,
    830
   ],
   "placementReason": "독서하는 어르신 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "mexico-9",
   "x": 1057,
   "y": 802,
   "heading": 1.5707963267948966,
   "art": "mexico",
   "row": 9,
   "role": "스케치하기",
   "context": "그림과 음악 친구",
   "action": "스케치하기",
   "group": "resident",
   "scene": "그림과 음악 친구",
   "pose": "seated",
   "height": 1.3,
   "radius": 25,
   "stationBounds": [
    970,
    740,
    1300,
    860
   ],
   "placementReason": "그림과 음악 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "mexico-10",
   "x": 1207,
   "y": 802,
   "heading": -1.5707963267948966,
   "art": "mexico",
   "row": 10,
   "role": "기타 연주",
   "context": "그림과 음악 친구",
   "action": "기타 연주",
   "group": "resident",
   "scene": "그림과 음악 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    970,
    740,
    1300,
    860
   ],
   "placementReason": "그림과 음악 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "mexico-11",
   "x": 1500,
   "y": 800,
   "heading": 0,
   "art": "mexico",
   "row": 11,
   "role": "바구니 들고 준비",
   "context": "체험 자리 도우미",
   "action": "바구니 들고 준비",
   "group": "resident",
   "scene": "체험 자리 도우미",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1390,
    740,
    1600,
    860
   ],
   "placementReason": "체험 자리 도우미 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  }
 ],
 "panama": [
  {
   "id": "panama-0",
   "x": 2470,
   "y": 2040,
   "heading": -1.1401038154083887,
   "art": "panama",
   "row": 0,
   "role": "지협 지리 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "방문 지도 펼치기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "방문자 센터 남쪽 안내 마당",
   "placementReason": "기본 시점에서 건물에 가리지 않는 열린 마당에서 방문자를 맞습니다.",
   "stationBounds": [
    2360,
    1980,
    2650,
    2160
   ],
   "lookAt": {
    "x": 2340,
    "y": 2100
   },
   "approach": {
    "x": 2396,
    "y": 2074
   }
  },
  {
   "id": "panama-1",
   "x": 2160,
   "y": 1850,
   "heading": -1.7057730766488202,
   "art": "panama",
   "row": 1,
   "role": "갑문 운항 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "수위 그림 설명",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "갑문 관찰 길의 넓은 동쪽 포켓",
   "placementReason": "수위 설명은 갑문 가까이에서 하고 수변 주 통로를 비웁니다.",
   "stationBounds": [
    2100,
    1770,
    2260,
    1980
   ],
   "lookAt": {
    "x": 1940,
    "y": 1820
   },
   "approach": {
    "x": 2079,
    "y": 1839
   }
  },
  {
   "id": "panama-2",
   "x": 3010,
   "y": 2200,
   "heading": -0.5947592574833528,
   "art": "panama",
   "row": 2,
   "role": "대양·항로 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "태블릿 점검",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "운하 탐험 학습 마당",
   "placementReason": "시설 기술 안내를 방문객용 학습 마당에 둡니다. 실제 제한구역에 들어가지 않습니다.",
   "stationBounds": [
    2850,
    2100,
    3220,
    2270
   ],
   "lookAt": {
    "x": 2880,
    "y": 2390
   },
   "approach": {
    "x": 2964,
    "y": 2268
   }
  },
  {
   "id": "panama-3",
   "x": 2153,
   "y": 660,
   "heading": -1.6195381781048284,
   "art": "panama",
   "row": 3,
   "role": "시설 기술 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "항로 가리키기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "호수 방향 전망 길 옆",
   "placementReason": "항로 지도를 호수 방향을 볼 수 있는 관찰 포켓에서 펼칩니다.",
   "stationBounds": [
    2050,
    520,
    2220,
    730
   ],
   "lookAt": {
    "x": 1920,
    "y": 650
   },
   "approach": {
    "x": 2071,
    "y": 656
   }
  },
  {
   "id": "panama-4",
   "x": 2215,
   "y": 2210,
   "heading": -1.5707963267948966,
   "art": "panama",
   "row": 4,
   "role": "배 가리키기",
   "context": "삼대가 함께하는 견학",
   "action": "배 가리키기",
   "group": "resident",
   "scene": "삼대가 함께하는 견학",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2030,
    2010,
    2250,
    2280
   ],
   "placementReason": "삼대가 함께하는 견학 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "panama-5",
   "x": 2045,
   "y": 2210,
   "heading": -1.5707963267948966,
   "art": "panama",
   "row": 5,
   "role": "쌍안경 관찰",
   "context": "삼대가 함께하는 견학",
   "action": "쌍안경 관찰",
   "group": "resident",
   "scene": "삼대가 함께하는 견학",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2030,
    2010,
    2250,
    2280
   ],
   "placementReason": "삼대가 함께하는 견학 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "panama-6",
   "x": 2130,
   "y": 2065,
   "heading": -1.3445771888209985,
   "art": "panama",
   "row": 6,
   "role": "지도 들고 미소",
   "context": "삼대가 함께하는 견학",
   "action": "지도 들고 미소",
   "group": "resident",
   "scene": "삼대가 함께하는 견학",
   "pose": "standing",
   "height": 1.31,
   "radius": 25,
   "stationBounds": [
    2030,
    2010,
    2250,
    2280
   ],
   "placementReason": "삼대가 함께하는 견학 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "panama-7",
   "x": 3043,
   "y": 2427,
   "heading": -0.7853981633974483,
   "art": "panama",
   "row": 7,
   "role": "카메라 들고 걷기",
   "context": "사진과 지도 친구",
   "action": "카메라 들고 걷기",
   "group": "resident",
   "scene": "사진과 지도 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2820,
    2290,
    3220,
    2630
   ],
   "placementReason": "사진과 지도 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "panama-8",
   "x": 2937,
   "y": 2533,
   "heading": 2.356194490192345,
   "art": "panama",
   "row": 8,
   "role": "친구에게 손짓",
   "context": "사진과 지도 친구",
   "action": "친구에게 손짓",
   "group": "resident",
   "scene": "사진과 지도 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2820,
    2290,
    3220,
    2630
   ],
   "placementReason": "사진과 지도 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "panama-9",
   "x": 2055,
   "y": 800,
   "heading": -1.5707963267948966,
   "art": "panama",
   "row": 9,
   "role": "배 사진 찍기",
   "context": "배를 찍는 커플",
   "action": "배 사진 찍기",
   "group": "resident",
   "scene": "배를 찍는 커플",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2030,
    760,
    2260,
    970
   ],
   "placementReason": "배를 찍는 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "panama-10",
   "x": 2205,
   "y": 800,
   "heading": -1.5707963267948966,
   "art": "panama",
   "row": 10,
   "role": "사진 화면 함께 보기",
   "context": "배를 찍는 커플",
   "action": "사진 화면 함께 보기",
   "group": "resident",
   "scene": "배를 찍는 커플",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2030,
    760,
    2260,
    970
   ],
   "placementReason": "배를 찍는 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "panama-11",
   "x": 3223,
   "y": 1050,
   "heading": 0,
   "art": "panama",
   "row": 11,
   "role": "안내 책자 정리",
   "context": "방문자 센터 직원",
   "action": "안내 책자 정리",
   "group": "resident",
   "scene": "방문자 센터 직원",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    3220,
    1020,
    3460,
    1220
   ],
   "placementReason": "방문자 센터 직원 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  }
 ],
 "peru": [
  {
   "id": "peru-0",
   "x": 1850,
   "y": 2830,
   "heading": -1.6801148606827967,
   "art": "peru",
   "row": 0,
   "role": "산지 문화 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "직물 보여주기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "조망 길 입구 동쪽",
   "placementReason": "문화 안내인이 첫 조망 길에서 방문자를 맞되 중앙 탐방선은 비웁니다.",
   "stationBounds": [
    1800,
    2770,
    2030,
    2930
   ],
   "lookAt": {
    "x": 1660,
    "y": 2810
   },
   "approach": {
    "x": 1768,
    "y": 2821
   }
  },
  {
   "id": "peru-1",
   "x": 1815,
   "y": 1620,
   "heading": -1.5707963267948966,
   "art": "peru",
   "row": 1,
   "role": "고도·기후 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "기후 관측 기록",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "중앙 광장 동쪽 자료 관찰 자리",
   "placementReason": "고도·기후 비교는 넓은 광장에서 지도와 관측 기록으로 진행합니다.",
   "stationBounds": [
    1780,
    1510,
    2010,
    1770
   ],
   "lookAt": {
    "x": 1660,
    "y": 1620
   },
   "approach": {
    "x": 1733,
    "y": 1620
   }
  },
  {
   "id": "peru-2",
   "x": 2010,
   "y": 1410,
   "heading": -3.0066159037358697,
   "art": "peru",
   "row": 2,
   "role": "석조 보존 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "무릎 꿇고 표본 관찰",
   "group": "guide",
   "scene": "안내팀",
   "pose": "seated",
   "height": 1.3,
   "radius": 25,
   "station": "석조 건물군 바깥 탐방로",
   "placementReason": "보존 안내를 건물 사이의 공공 탐방로에 두며 유적 벽·실내는 피합니다.",
   "stationBounds": [
    1900,
    1350,
    2060,
    1480
   ],
   "lookAt": {
    "x": 1990,
    "y": 1260
   },
   "approach": {
    "x": 1999,
    "y": 1329
   }
  },
  {
   "id": "peru-3",
   "x": 1475,
   "y": 3030,
   "heading": -1.129003161277453,
   "art": "peru",
   "row": 3,
   "role": "지리 자료 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "기후 카드 비교",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "남서쪽 산지림 조망 길",
   "placementReason": "지리 자료 비교를 숲과 경작 테라스를 살피는 탐방로에 둡니다.",
   "stationBounds": [
    1250,
    2940,
    1530,
    3210
   ],
   "lookAt": {
    "x": 1350,
    "y": 3090
   },
   "approach": {
    "x": 1401,
    "y": 3065
   }
  },
  {
   "id": "peru-4",
   "x": 1794,
   "y": 2977,
   "heading": 1.0537643743033538,
   "art": "peru",
   "row": 4,
   "role": "유적 사진 찍기",
   "context": "산지 여행 가족",
   "action": "유적 사진 찍기",
   "group": "resident",
   "scene": "산지 여행 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1780,
    2950,
    2050,
    3260
   ],
   "placementReason": "산지 여행 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "peru-5",
   "x": 1964,
   "y": 2977,
   "heading": -1.0537643743033538,
   "art": "peru",
   "row": 5,
   "role": "능선 가리키기",
   "context": "산지 여행 가족",
   "action": "능선 가리키기",
   "group": "resident",
   "scene": "산지 여행 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1780,
    2950,
    2050,
    3260
   ],
   "placementReason": "산지 여행 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "peru-6",
   "x": 1879,
   "y": 3122,
   "heading": 3.141592653589793,
   "art": "peru",
   "row": 6,
   "role": "지도 살펴보기",
   "context": "산지 여행 가족",
   "action": "지도 살펴보기",
   "group": "resident",
   "scene": "산지 여행 가족",
   "pose": "standing",
   "height": 1.31,
   "radius": 25,
   "stationBounds": [
    1780,
    2950,
    2050,
    3260
   ],
   "placementReason": "산지 여행 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "peru-7",
   "x": 1940,
   "y": 1545,
   "heading": 0,
   "art": "peru",
   "row": 7,
   "role": "쌍안경 관찰",
   "context": "관찰하는 어르신 커플",
   "action": "쌍안경 관찰",
   "group": "resident",
   "scene": "관찰하는 어르신 커플",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1840,
    1500,
    2070,
    1840
   ],
   "placementReason": "관찰하는 어르신 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "peru-8",
   "x": 1940,
   "y": 1695,
   "heading": 3.141592653589793,
   "art": "peru",
   "row": 8,
   "role": "탐방 지팡이 짚기",
   "context": "관찰하는 어르신 커플",
   "action": "탐방 지팡이 짚기",
   "group": "resident",
   "scene": "관찰하는 어르신 커플",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1840,
    1500,
    2070,
    1840
   ],
   "placementReason": "관찰하는 어르신 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "peru-9",
   "x": 2004,
   "y": 3097,
   "heading": 0,
   "art": "peru",
   "row": 9,
   "role": "휴대용 의자에서 스케치",
   "context": "스케치하는 친구",
   "action": "휴대용 의자에서 스케치",
   "group": "resident",
   "scene": "스케치하는 친구",
   "pose": "seated",
   "height": 1.3,
   "radius": 25,
   "stationBounds": [
    1780,
    2980,
    2050,
    3320
   ],
   "placementReason": "스케치하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "peru-10",
   "x": 2004,
   "y": 3247,
   "heading": 3.141592653589793,
   "art": "peru",
   "row": 10,
   "role": "친구 그림 보기",
   "context": "스케치하는 친구",
   "action": "친구 그림 보기",
   "group": "resident",
   "scene": "스케치하는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1780,
    2980,
    2050,
    3320
   ],
   "placementReason": "스케치하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "peru-11",
   "x": 1900,
   "y": 850,
   "heading": 0,
   "art": "peru",
   "row": 11,
   "role": "잎을 돋보기로 관찰",
   "context": "산지 생태 기록",
   "action": "잎을 돋보기로 관찰",
   "group": "resident",
   "scene": "산지 생태 기록",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1790,
    720,
    2020,
    980
   ],
   "placementReason": "산지 생태 기록 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  }
 ],
 "brazil": [
  {
   "id": "brazil-0",
   "x": 2510,
   "y": 2270,
   "heading": -1.473543128543331,
   "art": "brazil",
   "row": 0,
   "role": "음악 문화 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "공연 손짓 안내",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "삼바 광장 동쪽 안내 자리",
   "placementReason": "삼바 문화 안내가 무대 앞 광장과 연결되고 중앙 진입로는 비웁니다.",
   "stationBounds": [
    2490,
    2160,
    2620,
    2380
   ],
   "lookAt": {
    "x": 2300,
    "y": 2290
   },
   "approach": {
    "x": 2428,
    "y": 2278
   }
  },
  {
   "id": "brazil-1",
   "x": 2085,
   "y": 2020,
   "heading": 0.27159959176007603,
   "art": "brazil",
   "row": 1,
   "role": "축제 무대 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "클립보드와 진행 신호",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "무대 서쪽 진행 자리",
   "placementReason": "무대 감독이 무대를 볼 수 있는 옆자리에서 안내하며 계단과 경사로를 비웁니다.",
   "stationBounds": [
    2000,
    1910,
    2120,
    2110
   ],
   "lookAt": {
    "x": 2320,
    "y": 2050
   },
   "approach": {
    "x": 2107,
    "y": 2099
   }
  },
  {
   "id": "brazil-2",
   "x": 2650,
   "y": 1990,
   "heading": -1.3996477213787146,
   "art": "brazil",
   "row": 2,
   "role": "리듬·음악 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "판데이루 연주",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "무대 동쪽 연주 준비 자리",
   "placementReason": "리듬 안내와 연주자가 무대 옆에서 만납니다.",
   "stationBounds": [
    2560,
    1890,
    2740,
    2090
   ],
   "lookAt": {
    "x": 2320,
    "y": 2050
   },
   "approach": {
    "x": 2569,
    "y": 2004
   }
  },
  {
   "id": "brazil-3",
   "x": 1300,
   "y": 1300,
   "heading": -2.7928216500058864,
   "art": "brazil",
   "row": 3,
   "role": "아마존 지리 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "아마존 강 지도 설명",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "숲 연결 길 위쪽 · 지도 비교 안내",
   "placementReason": "아마존은 이곳의 실제 경관이 아니라 비교 지도 주제입니다. 안내인은 숲 연결 길 입구의 평탄한 테라스에 둡니다.",
   "stationBounds": [
    1190,
    1230,
    1380,
    1330
   ],
   "lookAt": {
    "x": 1260,
    "y": 1190
   },
   "approach": {
    "x": 1272,
    "y": 1223
   }
  },
  {
   "id": "brazil-4",
   "x": 1997,
   "y": 2147,
   "heading": 1.8906881472726373,
   "art": "brazil",
   "row": 4,
   "role": "탐보링 연주",
   "context": "함께 연주하는 친구",
   "action": "탐보링 연주",
   "group": "festival",
   "scene": "함께 연주하는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1740,
    1880,
    2150,
    2380
   ],
   "placementReason": "함께 연주하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-5",
   "x": 2103,
   "y": 2253,
   "heading": 2.346892432917209,
   "art": "brazil",
   "row": 5,
   "role": "수르두 북 연주",
   "context": "함께 연주하는 친구",
   "action": "수르두 북 연주",
   "group": "festival",
   "scene": "함께 연주하는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1740,
    1880,
    2150,
    2380
   ],
   "placementReason": "함께 연주하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-6",
   "x": 2645,
   "y": 2180,
   "heading": -1.9775433985208677,
   "art": "brazil",
   "row": 6,
   "role": "긴 치마로 춤추기",
   "context": "춤추는 친구",
   "action": "긴 치마로 춤추기",
   "group": "festival",
   "scene": "춤추는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2550,
    2110,
    3030,
    2390
   ],
   "placementReason": "춤추는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-7",
   "x": 2795,
   "y": 2180,
   "heading": -1.8574175690203494,
   "art": "brazil",
   "row": 7,
   "role": "무릎 굽혀 리듬 타기",
   "context": "춤추는 친구",
   "action": "무릎 굽혀 리듬 타기",
   "group": "festival",
   "scene": "춤추는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2550,
    2110,
    3030,
    2390
   ],
   "placementReason": "춤추는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-8",
   "x": 2735,
   "y": 2340,
   "heading": -2.1967211207436854,
   "art": "brazil",
   "row": 8,
   "role": "박수치며 웃기",
   "context": "박수와 리듬 부부",
   "action": "박수치며 웃기",
   "group": "festival",
   "scene": "박수와 리듬 부부",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2550,
    2110,
    3110,
    2390
   ],
   "placementReason": "박수와 리듬 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-9",
   "x": 2885,
   "y": 2340,
   "heading": -2.05891457466224,
   "art": "brazil",
   "row": 9,
   "role": "셰이커 흔들기",
   "context": "박수와 리듬 부부",
   "action": "셰이커 흔들기",
   "group": "festival",
   "scene": "박수와 리듬 부부",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2550,
    2110,
    3110,
    2390
   ],
   "placementReason": "박수와 리듬 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-10",
   "x": 1988,
   "y": 2258,
   "heading": 2.151815803629748,
   "art": "brazil",
   "row": 10,
   "role": "리본 흔들며 인사",
   "context": "축제 자원봉사자",
   "action": "리본 흔들며 인사",
   "group": "festival",
   "scene": "축제 자원봉사자",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1660,
    1880,
    2130,
    2380
   ],
   "placementReason": "축제 자원봉사자 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-11",
   "x": 2094,
   "y": 2364,
   "heading": 2.5325257503080176,
   "art": "brazil",
   "row": 11,
   "role": "가랜드 준비",
   "context": "축제 자원봉사자",
   "action": "가랜드 준비",
   "group": "festival",
   "scene": "축제 자원봉사자",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1660,
    1880,
    2130,
    2380
   ],
   "placementReason": "축제 자원봉사자 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-12",
   "x": 3045,
   "y": 2310,
   "heading": -1.9272977120046948,
   "art": "brazil-extra",
   "row": 0,
   "role": "가족 사진 찍기",
   "context": "공연 보는 가족",
   "action": "가족 사진 찍기",
   "group": "festival",
   "scene": "공연 보는 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2710,
    1900,
    3130,
    2390
   ],
   "placementReason": "공연 보는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-13",
   "x": 2925,
   "y": 2190,
   "heading": -1.8138294670845754,
   "art": "brazil-extra",
   "row": 1,
   "role": "공연 가리키기",
   "context": "공연 보는 가족",
   "action": "공연 가리키기",
   "group": "festival",
   "scene": "공연 보는 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2710,
    1900,
    3130,
    2390
   ],
   "placementReason": "공연 보는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-14",
   "x": 3088,
   "y": 2147,
   "heading": -1.709228139022647,
   "art": "brazil-extra",
   "row": 2,
   "role": "귀 보호구 쓰고 응원",
   "context": "공연 보는 가족",
   "action": "귀 보호구 쓰고 응원",
   "group": "festival",
   "scene": "공연 보는 가족",
   "pose": "standing",
   "height": 1.31,
   "radius": 25,
   "stationBounds": [
    2710,
    1900,
    3130,
    2390
   ],
   "placementReason": "공연 보는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-15",
   "x": 2980,
   "y": 1950,
   "heading": -1.4352686128093959,
   "art": "brazil-extra",
   "row": 3,
   "role": "박수치며 관람",
   "context": "함께 즐기는 관객",
   "action": "박수치며 관람",
   "group": "festival",
   "scene": "함께 즐기는 관객",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2680,
    1900,
    3130,
    2390
   ],
   "placementReason": "함께 즐기는 관객 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-16",
   "x": 2860,
   "y": 2070,
   "heading": -1.6262948320406136,
   "art": "brazil-extra",
   "row": 4,
   "role": "휠체어에서 손 흔들기",
   "context": "함께 즐기는 관객",
   "action": "휠체어에서 손 흔들기",
   "group": "festival",
   "scene": "함께 즐기는 관객",
   "pose": "seated",
   "height": 1.3,
   "radius": 32,
   "stationBounds": [
    2680,
    1900,
    3130,
    2390
   ],
   "placementReason": "함께 즐기는 관객 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-17",
   "x": 2817,
   "y": 1907,
   "heading": -1.3093175110826474,
   "art": "brazil-extra",
   "row": 5,
   "role": "프로그램 읽기",
   "context": "함께 즐기는 관객",
   "action": "프로그램 읽기",
   "group": "festival",
   "scene": "함께 즐기는 관객",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2680,
    1900,
    3130,
    2390
   ],
   "placementReason": "함께 즐기는 관객 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-18",
   "x": 1755,
   "y": 1960,
   "heading": 1.4301384289294732,
   "art": "brazil-extra",
   "row": 6,
   "role": "친구와 지도 보기",
   "context": "축제에서 만난 친구",
   "action": "친구와 지도 보기",
   "group": "festival",
   "scene": "축제에서 만난 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1680,
    1880,
    2130,
    2380
   ],
   "placementReason": "축제에서 만난 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-19",
   "x": 1905,
   "y": 1960,
   "heading": 1.3803612113813424,
   "art": "brazil-extra",
   "row": 7,
   "role": "웃으며 박수",
   "context": "축제에서 만난 친구",
   "action": "웃으며 박수",
   "group": "festival",
   "scene": "축제에서 만난 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1680,
    1880,
    2130,
    2380
   ],
   "placementReason": "축제에서 만난 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-20",
   "x": 1075,
   "y": 500,
   "heading": 1.5707963267948966,
   "art": "brazil-extra",
   "row": 8,
   "role": "전망대에서 물 마시기",
   "context": "전망대에서 쉬는 방문객",
   "action": "전망대에서 물 마시기",
   "group": "resident",
   "scene": "전망대에서 쉬는 방문객",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    900,
    400,
    1380,
    700
   ],
   "placementReason": "전망대에서 쉬는 방문객 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-21",
   "x": 1225,
   "y": 500,
   "heading": -1.5707963267948966,
   "art": "brazil-extra",
   "row": 9,
   "role": "모자 들고 쉬기",
   "context": "전망대에서 쉬는 방문객",
   "action": "모자 들고 쉬기",
   "group": "resident",
   "scene": "전망대에서 쉬는 방문객",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    900,
    400,
    1380,
    700
   ],
   "placementReason": "전망대에서 쉬는 방문객 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-22",
   "x": 1860,
   "y": 2155,
   "heading": 1.8157749899217608,
   "art": "brazil-extra",
   "row": 10,
   "role": "두 셰이커 연주",
   "context": "음악과 무대 준비",
   "action": "두 셰이커 연주",
   "group": "festival",
   "scene": "음악과 무대 준비",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1650,
    1880,
    2140,
    2380
   ],
   "placementReason": "음악과 무대 준비 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "brazil-23",
   "x": 1860,
   "y": 2305,
   "heading": 2.093447099589736,
   "art": "brazil-extra",
   "row": 11,
   "role": "무대 천 정리",
   "context": "음악과 무대 준비",
   "action": "무대 천 정리",
   "group": "festival",
   "scene": "음악과 무대 준비",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1650,
    1880,
    2140,
    2380
   ],
   "placementReason": "음악과 무대 준비 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  }
 ],
 "argentina": [
  {
   "id": "argentina-0",
   "x": 2300,
   "y": 1050,
   "heading": -0.8542546526984929,
   "art": "argentina",
   "row": 0,
   "role": "초원 농목업 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "문화 지도 보여주기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "5월 광장 동쪽 문화 안내",
   "placementReason": "문화 안내를 궁전 정면을 볼 수 있는 광장 가장자리에 둡니다.",
   "stationBounds": [
    2190,
    980,
    2420,
    1110
   ],
   "lookAt": {
    "x": 2140,
    "y": 1190
   },
   "approach": {
    "x": 2238,
    "y": 1104
   }
  },
  {
   "id": "argentina-1",
   "x": 1430,
   "y": 2630,
   "heading": 1.7801817197483922,
   "art": "argentina",
   "row": 1,
   "role": "문화 전시 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "전시 카드 분류",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "도레고 광장 북쪽 전시 안내",
   "placementReason": "전시 분류 안내를 골동품·시장 구역의 입구 쪽으로 연결합니다.",
   "stationBounds": [
    1390,
    2500,
    1510,
    2730
   ],
   "lookAt": {
    "x": 1570,
    "y": 2600
   },
   "approach": {
    "x": 1510,
    "y": 2613
   }
  },
  {
   "id": "argentina-2",
   "x": 2240,
   "y": 2990,
   "heading": -1.7419449322110787,
   "art": "argentina",
   "row": 2,
   "role": "음악 유산 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "탱고 동작 설명",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "탱고 바닥 동쪽 바깥",
   "placementReason": "탱고 안내인은 춤추는 바닥 밖에서 안내하여 사용자가 올라갈 공간을 남깁니다.",
   "stationBounds": [
    2160,
    2820,
    2380,
    3140
   ],
   "lookAt": {
    "x": 1780,
    "y": 2910
   },
   "approach": {
    "x": 2159,
    "y": 2976
   }
  },
  {
   "id": "argentina-3",
   "x": 2130,
   "y": 2760,
   "heading": 0.7853981633974483,
   "art": "argentina",
   "row": 3,
   "role": "이주·문화 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "음식 기록 펼치기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "도레고 광장 음식·이주 기록 자리",
   "placementReason": "음식·이주 자료를 빈 연결 도로에서 시장 구역으로 옮깁니다.",
   "stationBounds": [
    2070,
    2700,
    2230,
    2850
   ],
   "lookAt": {
    "x": 2230,
    "y": 2860
   },
   "approach": {
    "x": 2188,
    "y": 2818
   }
  },
  {
   "id": "argentina-4",
   "x": 1540,
   "y": 3005,
   "heading": 1.5707963267948966,
   "art": "argentina",
   "row": 4,
   "role": "긴 치마로 작은 탱고 스텝",
   "context": "탱고를 즐기는 커플",
   "action": "긴 치마로 작은 탱고 스텝",
   "group": "resident",
   "scene": "탱고를 즐기는 커플",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1490,
    2790,
    2060,
    3030
   ],
   "placementReason": "탱고를 즐기는 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "argentina-5",
   "x": 1690,
   "y": 3005,
   "heading": -1.5707963267948966,
   "art": "argentina",
   "row": 5,
   "role": "짝을 향한 탱고 스텝",
   "context": "탱고를 즐기는 커플",
   "action": "짝을 향한 탱고 스텝",
   "group": "resident",
   "scene": "탱고를 즐기는 커플",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1490,
    2790,
    2060,
    3030
   ],
   "placementReason": "탱고를 즐기는 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "argentina-6",
   "x": 1245,
   "y": 2850,
   "heading": 1.5707963267948966,
   "art": "argentina",
   "row": 6,
   "role": "가게 책 살피기",
   "context": "골동품 거리 친구",
   "action": "가게 책 살피기",
   "group": "resident",
   "scene": "골동품 거리 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1110,
    2750,
    1450,
    3080
   ],
   "placementReason": "골동품 거리 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "argentina-7",
   "x": 1395,
   "y": 2850,
   "heading": -1.5707963267948966,
   "art": "argentina",
   "row": 7,
   "role": "친구에게 소품 보여주기",
   "context": "골동품 거리 친구",
   "action": "친구에게 소품 보여주기",
   "group": "resident",
   "scene": "골동품 거리 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1110,
    2750,
    1450,
    3080
   ],
   "placementReason": "골동품 거리 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "argentina-8",
   "x": 2100,
   "y": 2610,
   "heading": -1.3051423636970614,
   "art": "argentina",
   "row": 8,
   "role": "사진 찍기",
   "context": "광장 나들이 가족",
   "action": "사진 찍기",
   "group": "resident",
   "scene": "광장 나들이 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1790,
    2490,
    2140,
    2810
   ],
   "placementReason": "광장 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "argentina-9",
   "x": 1980,
   "y": 2730,
   "heading": 2.875938690491956,
   "art": "argentina",
   "row": 9,
   "role": "아이에게 광장 가리키기",
   "context": "광장 나들이 가족",
   "action": "아이에게 광장 가리키기",
   "group": "resident",
   "scene": "광장 나들이 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1790,
    2490,
    2140,
    2810
   ],
   "placementReason": "광장 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "argentina-10",
   "x": 1937,
   "y": 2567,
   "heading": 0.7853981633974499,
   "art": "argentina",
   "row": 10,
   "role": "그림 보며 놀라기",
   "context": "광장 나들이 가족",
   "action": "그림 보며 놀라기",
   "group": "resident",
   "scene": "광장 나들이 가족",
   "pose": "standing",
   "height": 1.31,
   "radius": 25,
   "stationBounds": [
    1790,
    2490,
    2140,
    2810
   ],
   "placementReason": "광장 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "argentina-11",
   "x": 1845,
   "y": 1210,
   "heading": 0,
   "art": "argentina",
   "row": 11,
   "role": "스케치하기",
   "context": "거리 그림 작가",
   "action": "스케치하기",
   "group": "resident",
   "scene": "거리 그림 작가",
   "pose": "seated",
   "height": 1.3,
   "radius": 25,
   "stationBounds": [
    1710,
    1070,
    1980,
    1340
   ],
   "placementReason": "거리 그림 작가 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  }
 ],
 "chile": [
  {
   "id": "chile-0",
   "x": 2090,
   "y": 1260,
   "heading": -1.5707963267948966,
   "art": "chile",
   "row": 0,
   "role": "기후·농업 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "지역 문화 설명",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "라 모네다 북쪽 정면 광장",
   "placementReason": "중부 문화·수도 안내를 궁전 정면 광장과 연결합니다.",
   "stationBounds": [
    1990,
    1200,
    2270,
    1300
   ],
   "lookAt": {
    "x": 1800,
    "y": 1260
   },
   "approach": {
    "x": 2008,
    "y": 1260
   }
  },
  {
   "id": "chile-1",
   "x": 3275,
   "y": 2980,
   "heading": -1.7419449322110787,
   "art": "chile",
   "row": 1,
   "role": "생산 활동 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "엽서 초안 살피기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "관광 엽서 패널 동쪽",
   "placementReason": "엽서 편집 안내를 실제 학습 패널 옆에 둡니다.",
   "stationBounds": [
    3190,
    2940,
    3430,
    3040
   ],
   "lookAt": {
    "x": 3040,
    "y": 2940
   },
   "approach": {
    "x": 3194,
    "y": 2966
   }
  },
  {
   "id": "chile-2",
   "x": 2670,
   "y": 2780,
   "heading": -2.0125894923123404,
   "art": "chile",
   "row": 2,
   "role": "광물 자원 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "구리 표본 보여주기",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "문화센터 안내 옆 자료 자리",
   "placementReason": "구리 표본은 문화센터와 엽서 학습 구역을 잇는 자료 안내로 두며 도심에 광산을 놓지 않습니다.",
   "stationBounds": [
    2600,
    2690,
    2760,
    2930
   ],
   "lookAt": {
    "x": 2520,
    "y": 2710
   },
   "approach": {
    "x": 2596,
    "y": 2745
   }
  },
  {
   "id": "chile-3",
   "x": 2790,
   "y": 2990,
   "heading": 1.7681918866447774,
   "art": "chile",
   "row": 3,
   "role": "과수 농업 안내",
   "missionTopic": "국가 카드와 조사 자료의 근거 해석",
   "context": "안내팀",
   "action": "포도 바구니 들고 설명",
   "group": "guide",
   "scene": "안내팀",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "station": "관광 엽서 패널 서쪽",
   "placementReason": "포도 농업 자료를 엽서 학습 구역에 모으며 도심에 포도밭이 있다는 뜻이 아닙니다.",
   "stationBounds": [
    2660,
    2940,
    2880,
    3040
   ],
   "lookAt": {
    "x": 3040,
    "y": 2940
   },
   "approach": {
    "x": 2870,
    "y": 2974
   }
  },
  {
   "id": "chile-4",
   "x": 1947,
   "y": 697,
   "heading": 0.7853981633974483,
   "art": "chile",
   "row": 4,
   "role": "책 읽으며 쉬기",
   "context": "광장에서 쉬는 부부",
   "action": "책 읽으며 쉬기",
   "group": "resident",
   "scene": "광장에서 쉬는 부부",
   "pose": "seated",
   "height": 1.3,
   "radius": 25,
   "stationBounds": [
    1890,
    610,
    2140,
    890
   ],
   "placementReason": "광장에서 쉬는 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "chile-5",
   "x": 2053,
   "y": 803,
   "heading": -2.356194490192345,
   "art": "chile",
   "row": 5,
   "role": "음료 들고 대화",
   "context": "광장에서 쉬는 부부",
   "action": "음료 들고 대화",
   "group": "resident",
   "scene": "광장에서 쉬는 부부",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1890,
    610,
    2140,
    890
   ],
   "placementReason": "광장에서 쉬는 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "chile-6",
   "x": 3450,
   "y": 2845,
   "heading": 0,
   "art": "chile",
   "row": 6,
   "role": "엽서 고르기",
   "context": "엽서 고르는 친구",
   "action": "엽서 고르기",
   "group": "resident",
   "scene": "엽서 고르는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    3390,
    2800,
    3500,
    3040
   ],
   "placementReason": "엽서 고르는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "chile-7",
   "x": 3450,
   "y": 2995,
   "heading": 3.141592653589793,
   "art": "chile",
   "row": 7,
   "role": "카메라 사진 보여주기",
   "context": "엽서 고르는 친구",
   "action": "카메라 사진 보여주기",
   "group": "resident",
   "scene": "엽서 고르는 친구",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    3390,
    2800,
    3500,
    3040
   ],
   "placementReason": "엽서 고르는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "chile-8",
   "x": 1815,
   "y": 2930,
   "heading": 1.836450289892732,
   "art": "chile",
   "row": 8,
   "role": "문화센터 지도 보기",
   "context": "문화센터 나들이 가족",
   "action": "문화센터 지도 보기",
   "group": "resident",
   "scene": "문화센터 나들이 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1630,
    2730,
    1980,
    3000
   ],
   "placementReason": "문화센터 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "chile-9",
   "x": 1935,
   "y": 2810,
   "heading": -0.265653963097837,
   "art": "chile",
   "row": 9,
   "role": "아이에게 표지 가리키기",
   "context": "문화센터 나들이 가족",
   "action": "아이에게 표지 가리키기",
   "group": "resident",
   "scene": "문화센터 나들이 가족",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    1630,
    2730,
    1980,
    3000
   ],
   "placementReason": "문화센터 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "chile-10",
   "x": 1978,
   "y": 2973,
   "heading": -2.356194490192343,
   "art": "chile",
   "row": 10,
   "role": "엽서 그림 보기",
   "context": "문화센터 나들이 가족",
   "action": "엽서 그림 보기",
   "group": "resident",
   "scene": "문화센터 나들이 가족",
   "pose": "standing",
   "height": 1.31,
   "radius": 25,
   "stationBounds": [
    1630,
    2730,
    1980,
    3000
   ],
   "placementReason": "문화센터 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  },
  {
   "id": "chile-11",
   "x": 2222,
   "y": 3758,
   "heading": 0,
   "art": "chile",
   "row": 11,
   "role": "가방 들고 걷기",
   "context": "퇴근길 주민",
   "action": "가방 들고 걷기",
   "group": "resident",
   "scene": "퇴근길 주민",
   "pose": "standing",
   "height": 1.52,
   "radius": 25,
   "stationBounds": [
    2040,
    3700,
    2290,
    3940
   ],
   "placementReason": "퇴근길 주민 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다."
  }
 ]
};

NPC_LAYOUT.argentina = ARGENTINA_ROSTER;

Object.assign(NPC_LAYOUT,WORLD_NPC_ROSTERS);

// Reversible social-spacing overlay; original registry rows/art/dialogue stay retained.
for(const [region,roster] of Object.entries(NPC_LAYOUT))for(const n of roster){
 const change=NPC_SOCIAL_LAYOUT[region]?.[n.id];
 if(change){n.originalPlacement??={x:n.x,y:n.y,heading:n.heading,stationBounds:n.stationBounds,lookAt:n.lookAt};Object.assign(n,change);}
 n.autoGreeting=(NPC_GREETERS[region]||[]).includes(n.id);
}

// Keep every authored character in an explicit inventory; inactive residents do not render, greet or collide.
export const NPC_INVENTORY={...NPC_LAYOUT};
for(const region of Object.keys(NPC_LAYOUT))NPC_LAYOUT[region]=NPC_INVENTORY[region].filter(n=>n.active!==false);


for(const [region,changes]of Object.entries(NPC_COMPACT73))for(const n of NPC_LAYOUT[region]||[]){if(changes[n.id]){n.beforeCompact73={x:n.x,y:n.y,heading:n.heading};Object.assign(n,changes[n.id]);n.stationBounds=[n.x-35,n.y-35,n.x+35,n.y+35];n.placementReason='가족·친구 사이를 62~140단위로 모으고 서로 바라보도록 배치. 무리 사이360이상과 학습 동선 보존.';}}



// This authored per-person script supersedes the legacy shared scenario templates.
applyDialogue84(NPC_LAYOUT);
