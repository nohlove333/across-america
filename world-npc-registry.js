// Existing NPC artwork and mission IDs are preserved; additions appear only after batch registration.
export const WORLD_NPC_ROSTERS={
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
      },
      "name": "클레르",
      "age": 24,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 클레르예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 먼저 도착했어요. 천천히 둘러보세요."
        },
        {
          "to": "companion",
          "text": "잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 0",
        "wardrobe": "자료 연결 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 0",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "올리비에",
      "age": 31,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 올리비에예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "막 준비를 마쳤어요. 궁금한 게 있으면 편하게 말씀하세요."
        },
        {
          "to": "companion",
          "text": "이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 1",
        "wardrobe": "언어·다문화 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 1",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "나디아",
      "age": 38,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 나디아예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "잠깐 정리하고 있었어요. 이야기 나눌 시간은 있어요."
        },
        {
          "to": "companion",
          "text": "나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 2",
        "wardrobe": "이주 역사 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 2",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "루이",
      "age": 45,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 루이예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "지도를 접으려던 참이에요. 같이 보실래요?"
        },
        {
          "to": "companion",
          "text": "잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 3",
        "wardrobe": "지리 조사 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 3",
        "ageCategory": "adult",
        "group": "안내팀"
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
      "placementReason": "독서하는 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "마농",
      "age": 67,
      "ageCategory": "older adult",
      "relation": "독서하는 부부",
      "lines": [
        {
          "to": "player",
          "text": "간식은 챙겼는데 물을 벌써 다 마셨네요."
        },
        {
          "to": "player",
          "text": "손에 든 게 있어서 인사는 고개로 할게요."
        },
        {
          "to": "companion",
          "text": "앙드레, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 4",
        "wardrobe": "벤치에서 독서 기존 전용 의상",
        "hairstyle": "existing distinct source character 4",
        "ageCategory": "older adult",
        "group": "독서하는 부부"
      }
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
      "placementReason": "독서하는 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "앙드레",
      "age": 67,
      "ageCategory": "older adult",
      "relation": "독서하는 부부",
      "lines": [
        {
          "to": "player",
          "text": "오늘은 제가 가고 싶은 길을 고르기로 했어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구가 저쪽을 보고 있어요."
        },
        {
          "to": "companion",
          "text": "마농, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 5",
        "wardrobe": "앉아 차 마시기 기존 전용 의상",
        "hairstyle": "existing distinct source character 5",
        "ageCategory": "older adult",
        "group": "독서하는 부부"
      }
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
      "placementReason": "대화하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "소피",
      "age": 27,
      "ageCategory": "adult",
      "relation": "대화하는 친구",
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만나면 늘 시간이 금방 가네요."
        },
        {
          "to": "player",
          "text": "오늘은 조금 일찍 나왔어요. 덕분에 여유가 있네요."
        },
        {
          "to": "companion",
          "text": "펠릭스, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 6",
        "wardrobe": "웃으며 이야기 기존 전용 의상",
        "hairstyle": "existing distinct source character 6",
        "ageCategory": "adult",
        "group": "대화하는 친구"
      }
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
      "placementReason": "대화하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "펠릭스",
      "age": 34,
      "ageCategory": "adult",
      "relation": "대화하는 친구",
      "lines": [
        {
          "to": "player",
          "text": "저쪽 구경도 하고 왔어요. 생각보다 오래 걸었네요."
        },
        {
          "to": "player",
          "text": "잠깐 쉬면서 일행을 기다려요."
        },
        {
          "to": "companion",
          "text": "소피, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 7",
        "wardrobe": "손짓하며 이야기 기존 전용 의상",
        "hairstyle": "existing distinct source character 7",
        "ageCategory": "adult",
        "group": "대화하는 친구"
      }
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
      "placementReason": "강을 구경하는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "이사벨",
      "age": 41,
      "ageCategory": "adult",
      "relation": "강을 구경하는 가족",
      "lines": [
        {
          "to": "player",
          "text": "저는 여기서 쉬면서 사람들 구경하는 게 좋아요."
        },
        {
          "to": "player",
          "text": "지나가시는 데 불편하면 조금 비켜 드릴게요."
        },
        {
          "to": "companion",
          "text": "에밀, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 8",
        "wardrobe": "강 사진 찍기 기존 전용 의상",
        "hairstyle": "existing distinct source character 8",
        "ageCategory": "adult",
        "group": "강을 구경하는 가족"
      }
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
      "placementReason": "강을 구경하는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "에밀",
      "age": 10,
      "ageCategory": "child",
      "relation": "강을 구경하는 가족",
      "lines": [
        {
          "to": "player",
          "text": "천천히 걸으니 평소에 안 보이던 것도 보이네요."
        },
        {
          "to": "player",
          "text": "밖에서 만나니 할 얘기가 더 많네요."
        },
        {
          "to": "companion",
          "text": "이사벨, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 9",
        "wardrobe": "강 가리키기 기존 전용 의상",
        "hairstyle": "existing distinct source character 9",
        "ageCategory": "child",
        "group": "강을 구경하는 가족"
      }
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
      "placementReason": "책방과 스케치 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "샤를로트",
      "age": 55,
      "ageCategory": "adult",
      "relation": "책방과 스케치",
      "lines": [
        {
          "to": "player",
          "text": "안녕하세요. 오늘 본 것들을 수첩에 적고 있어요."
        },
        {
          "to": "player",
          "text": "가방을 열어 보니 작은 물건들이 잔뜩 있네요."
        },
        {
          "to": "companion",
          "text": "테오, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 10",
        "wardrobe": "책 정리하기 기존 전용 의상",
        "hairstyle": "existing distinct source character 10",
        "ageCategory": "adult",
        "group": "책방과 스케치"
      }
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
      "placementReason": "책방과 스케치 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "테오",
      "age": 67,
      "ageCategory": "older adult",
      "relation": "책방과 스케치",
      "lines": [
        {
          "to": "player",
          "text": "서두르지 않으셔도 돼요. 저도 그냥 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 한 장 찍고 마저 걸어가려고요."
        },
        {
          "to": "companion",
          "text": "샤를로트, 잠깐만, 지도 방향부터 돌려 보자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/canada.png row 11",
        "wardrobe": "스케치하기 기존 전용 의상",
        "hairstyle": "existing distinct source character 11",
        "ageCategory": "older adult",
        "group": "책방과 스케치"
      }
    },
    {
      "id": "canada-v3-0",
      "name": "아멜리",
      "region": "canada",
      "zone": "canada",
      "age": 34,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7848271161817312,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 0,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 0,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "오늘은 아이가 길을 골랐어요. 덕분에 여기까지 왔네요."
        },
        {
          "to": "player",
          "text": "가방은 제가 맡았는데 간식이 반이네요. 돌아가는 길에 책방에도 들르려고요."
        },
        {
          "to": "companion",
          "text": "가브리엘, 잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 0,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 1: round-neck top and open cardigan with straight trousers in dusty teal, ochre, warm gray and plum. Distinct detail: small canvas tote"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1534,
      "y": 1338,
      "stationBounds": [
        1499,
        1303,
        1569,
        1373
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-1",
      "name": "가브리엘",
      "region": "canada",
      "zone": "canada",
      "age": 39,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7787165369514121,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 1,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 2,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "사진은 제가 찍기로 했어요. 그래서 제 사진만 없네요."
        },
        {
          "to": "player",
          "text": "조금 더 걷고 다 같이 쉬려고요. "
        },
        {
          "to": "companion",
          "text": "아멜리, 이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 2,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 2: collared shirt with rolled sleeves and relaxed trousers in dusty teal, ochre, warm gray and plum. Distinct detail: compact camera"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1669,
      "y": 1338,
      "stationBounds": [
        1634,
        1303,
        1704,
        1373
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-2",
      "name": "로미",
      "region": "canada",
      "zone": "canada",
      "age": 9,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 2.3495051774897036,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 2,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 4,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "저기까지 걸어왔어요. 생각보다 안 멀었어요."
        },
        {
          "to": "player",
          "text": "제 가방에는 제가 고른 간식이 있어요. "
        },
        {
          "to": "companion",
          "text": "오웬, 나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 4,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 3: small motif T-shirt and knee shorts in dusty teal, ochre, warm gray and plum. Distinct detail: small leaf motif"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1534,
      "y": 1473,
      "stationBounds": [
        1499,
        1438,
        1569,
        1508
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-3",
      "name": "오웬",
      "region": "canada",
      "zone": "canada",
      "age": 7,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -2.3556157560379702,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 3,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 1,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 어른이 저쪽에 있어요. 저는 여기 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 찍을 때 자꾸 눈이 감겨요. "
        },
        {
          "to": "companion",
          "text": "로미, 잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 1,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 4: peter-pan collar blouse and modest jumper skirt in dusty teal, ochre, warm gray and plum. Distinct detail: tiny flower hair clip"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1669,
      "y": 1473,
      "stationBounds": [
        1634,
        1438,
        1704,
        1508
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-4",
      "name": "야스민",
      "region": "canada",
      "zone": "canada",
      "age": 42,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "보호자",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7852533882110813,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 4,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 3,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "다 같이 나오려니 준비하는 데 한참 걸렸어요."
        },
        {
          "to": "player",
          "text": "그래도 나오길 잘했어요. 아이들이 신났네요. "
        },
        {
          "to": "companion",
          "text": "에티엔, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 3,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 5: light blouse and wide culottes in dusty teal, ochre, warm gray and plum. Distinct detail: folded town map"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1737,
      "y": 1751,
      "stationBounds": [
        1702,
        1716,
        1772,
        1786
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-5",
      "name": "에티엔",
      "region": "canada",
      "zone": "canada",
      "age": 71,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7811747801489269,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 5,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 5,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "손주가 아는 길이라며 앞장섰어요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 따라다니는 날이에요. "
        },
        {
          "to": "companion",
          "text": "야스민, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 5,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 6: button cardigan and below-knee pleated skirt in dusty teal, ochre, warm gray and plum. Distinct detail: fine round spectacles and subtle age lines"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1872,
      "y": 1751,
      "stationBounds": [
        1837,
        1716,
        1907,
        1786
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-6",
      "name": "릴리",
      "region": "canada",
      "zone": "canada",
      "age": 12,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 2.351969878732183,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 6,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 2,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "집에 가면 오늘 본 걸 그려 보려고요."
        },
        {
          "to": "player",
          "text": "작은 수첩은 제가 직접 골랐어요. 돌아가는 길에 책방에도 들르려고요."
        },
        {
          "to": "companion",
          "text": "노엘, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 2,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 7: striped crewneck and simple shorts in dusty teal, ochre, warm gray and plum. Distinct detail: water flask"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1737,
      "y": 1886,
      "stationBounds": [
        1702,
        1851,
        1772,
        1921
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-7",
      "name": "노엘",
      "region": "canada",
      "zone": "canada",
      "age": 8,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -2.3560484867505602,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 7,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 4,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "아까부터 재미있는 모양을 찾고 있어요."
        },
        {
          "to": "player",
          "text": "저쪽에도 하나 있어요. 같이 온 가족한테 보여 주려고요. "
        },
        {
          "to": "companion",
          "text": "릴리, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 4,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 8: soft short sleeve shirt and ankle pants in dusty teal, ochre, warm gray and plum. Distinct detail: small cloth backpack"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1872,
      "y": 1886,
      "stationBounds": [
        1837,
        1851,
        1907,
        1921
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-8",
      "name": "조이",
      "region": "canada",
      "zone": "canada",
      "age": 20,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7928054353286058,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 8,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 1,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만날 때마다 어디서 만났는지 사진을 남겨요."
        },
        {
          "to": "player",
          "text": "오늘 사진은 제 차례예요. 잘 나와야 할 텐데요. "
        },
        {
          "to": "companion",
          "text": "알렉시, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 1,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 9: short casual jacket and contrast plain top in dusty teal, ochre, warm gray and plum. Distinct detail: theater or museum leaflet"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 922,
      "y": 878,
      "stationBounds": [
        887,
        843,
        957,
        913
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-9",
      "name": "알렉시",
      "region": "canada",
      "zone": "canada",
      "age": 22,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7853981633974559,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 9,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 3,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 친구가 가게 구경을 좋아해요."
        },
        {
          "to": "player",
          "text": "저는 기다리는 동안 여기서 쉬고 있어요. "
        },
        {
          "to": "companion",
          "text": "조이, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 3,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 10: knitted short-sleeve top and A-line midi skirt in dusty teal, ochre, warm gray and plum. Distinct detail: small woven bag"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1057,
      "y": 878,
      "stationBounds": [
        1022,
        843,
        1092,
        913
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-10",
      "name": "미레유",
      "region": "canada",
      "zone": "canada",
      "age": 21,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 2.3561944901923524,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 10,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 0,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "약속 시간보다 일찍 와서 한 바퀴 돌았어요."
        },
        {
          "to": "player",
          "text": "친구가 오면 방금 본 곳도 같이 가 보려고요. "
        },
        {
          "to": "companion",
          "text": "조이, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 0,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 11: open overshirt and tapered cotton pants in dusty teal, ochre, warm gray and plum. Distinct detail: notebook"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 922,
      "y": 1013,
      "stationBounds": [
        887,
        978,
        957,
        1048
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-11",
      "name": "사미",
      "region": "canada",
      "zone": "canada",
      "age": 23,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.363601762123502,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 11,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 2,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "어디로 갈지는 아직 안 정했어요."
        },
        {
          "to": "player",
          "text": "친구들 의견부터 들어 보려고요. "
        },
        {
          "to": "companion",
          "text": "조이, 잠깐만, 지도 방향부터 돌려 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 2,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 12: plain polo and cloth shoulder bag in dusty teal, ochre, warm gray and plum. Distinct detail: cloth cap held in hand"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1057,
      "y": 1013,
      "stationBounds": [
        1022,
        978,
        1092,
        1048
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-12",
      "name": "레아",
      "region": "canada",
      "zone": "canada",
      "age": 15,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 1.5675117610024993,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 12,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 4,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 사진 찍고 있어요. 배경 고르는 데 더 오래 걸리네요."
        },
        {
          "to": "player",
          "text": "아직 한 장도 못 골랐어요. 다 조금씩 달라 보여요. 돌아가는 길에 책방에도 들르려고요."
        },
        {
          "to": "companion",
          "text": "쥘, 방금 웃어서 흔들렸어. 한 번만 더 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 4,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 13: thin cotton sweater and straight jeans in dusty teal, ochre, warm gray and plum. Distinct detail: wrist friendship band"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 488,
      "y": 103,
      "stationBounds": [
        453,
        68,
        523,
        138
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-13",
      "name": "쥘",
      "region": "canada",
      "zone": "canada",
      "age": 16,
      "ageCategory": "teen",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.2585735914115422,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 13,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 1,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "잠깐 나왔다가 친구들까지 만났어요."
        },
        {
          "to": "player",
          "text": "원래는 집에 일찍 갈 생각이었는데요. "
        },
        {
          "to": "companion",
          "text": "레아, 다음엔 나도 같이 데려가."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 1,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 14: short sleeve blouse with narrow woven sash in dusty teal, ochre, warm gray and plum. Distinct detail: striped socks"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 623,
      "y": 103,
      "stationBounds": [
        588,
        68,
        658,
        138
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-14",
      "name": "엘리",
      "region": "canada",
      "zone": "canada",
      "age": 17,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -1.5675174580196116,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 14,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 3,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "친구가 빌려준 책을 오늘 돌려주려고요."
        },
        {
          "to": "player",
          "text": "한 권 더 빌려 오면 가방이 꽉 차겠어요. "
        },
        {
          "to": "companion",
          "text": "레아, 다 읽었어. 뒤에 이야기도 궁금하더라."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 3,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 15: soft zip jacket without explorer patches and knee shorts in dusty teal, ochre, warm gray and plum. Distinct detail: small book"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 758,
      "y": 103,
      "stationBounds": [
        723,
        68,
        793,
        138
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-15",
      "name": "로랑",
      "region": "canada",
      "zone": "canada",
      "age": 68,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.005624740740366444,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 15,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 5,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "늘 걷던 길인데 오늘은 반대로 와 봤어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구는 저보다 더 천천히 걷네요. "
        },
        {
          "to": "companion",
          "text": "세실, 우리 여기서 조금 쉬었다 갈까?"
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 5,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 16: knit vest and pleated trousers in dusty teal, ochre, warm gray and plum. Distinct detail: square glasses and gray brows"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1996,
      "y": 1373,
      "stationBounds": [
        1961,
        1338,
        2031,
        1408
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-16",
      "name": "세실",
      "region": "canada",
      "zone": "canada",
      "age": 73,
      "ageCategory": "older adult",
      "genderPresentation": "feminine",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 3.1360498285799583,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 16,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 5,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 얘기하다가 쉬는 시간을 놓쳤어요."
        },
        {
          "to": "player",
          "text": "이제는 그늘을 찾아 앉으려고요. "
        },
        {
          "to": "companion",
          "text": "로랑, 아까 하던 얘기 어디까지 했지?"
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 5,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 17: collared blouse and long modest skirt in dusty teal, ochre, warm gray and plum. Distinct detail: tiny brooch"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1996,
      "y": 1508,
      "stationBounds": [
        1961,
        1473,
        2031,
        1543
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "canada-v3-17",
      "name": "카림",
      "region": "canada",
      "zone": "canada",
      "age": 36,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "거리 판매자",
      "relation": "거리 이웃",
      "context": "거리 이웃",
      "scene": "거리 이웃",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.293698189720203,
      "pose": "standing",
      "art": "world-v3-canada",
      "row": 17,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 4,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "편하게 구경하세요. 고르시기 전에 가까이 보셔도 돼요."
        },
        {
          "to": "player",
          "text": "작은 선물을 찾는 손님이 많이 들러요. "
        },
        {
          "to": "player",
          "text": "저는 카림이에요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 4,
        "wardrobe": "autumn urban Quebec outfit, warm but not bulky; scarf, wool cardigan, pea coat, knit sweater, cloth tote or notebook; no generic explorer outfit. Variant 18: rolled sleeve shirt with small waist apron in dusty teal, ochre, warm gray and plum. Distinct detail: postcards in a basket"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1844,
      "y": 1531,
      "stationBounds": [
        1809,
        1496,
        1879,
        1566
      ],
      "placementReason": "Predeployment: clear all existing POIs and learning targets by 105 units; preserve nearby companions and reachability."
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
      },
      "name": "조던",
      "age": 24,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 조던이에요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 먼저 도착했어요. 천천히 둘러보세요."
        },
        {
          "to": "companion",
          "text": "잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 0",
        "wardrobe": "문화 자료 해설 기존 전용 의상",
        "hairstyle": "existing distinct source character 0",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "에이버리",
      "age": 31,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 에이버리예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "막 준비를 마쳤어요. 궁금한 게 있으면 편하게 말씀하세요."
        },
        {
          "to": "companion",
          "text": "이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 1",
        "wardrobe": "음악 예술 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 1",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "테일러",
      "age": 38,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 테일러예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "잠깐 정리하고 있었어요. 이야기 나눌 시간은 있어요."
        },
        {
          "to": "companion",
          "text": "나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 2",
        "wardrobe": "도시·산업 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 2",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "모건",
      "age": 45,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 모건이에요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "지도를 접으려던 참이에요. 같이 보실래요?"
        },
        {
          "to": "companion",
          "text": "잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 3",
        "wardrobe": "자연·문화 지리 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 3",
        "ageCategory": "adult",
        "group": "안내팀"
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
      "placementReason": "공연 보러 가는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "리오",
      "age": 52,
      "ageCategory": "adult",
      "relation": "공연 보러 가는 친구",
      "lines": [
        {
          "to": "player",
          "text": "간식은 챙겼는데 물을 벌써 다 마셨네요."
        },
        {
          "to": "player",
          "text": "손에 든 게 있어서 인사는 고개로 할게요."
        },
        {
          "to": "companion",
          "text": "하퍼, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 4",
        "wardrobe": "표 들고 걷기 기존 전용 의상",
        "hairstyle": "existing distinct source character 4",
        "ageCategory": "adult",
        "group": "공연 보러 가는 친구"
      }
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
      "placementReason": "공연 보러 가는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "하퍼",
      "age": 59,
      "ageCategory": "adult",
      "relation": "공연 보러 가는 친구",
      "lines": [
        {
          "to": "player",
          "text": "오늘은 제가 가고 싶은 길을 고르기로 했어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구가 저쪽을 보고 있어요."
        },
        {
          "to": "companion",
          "text": "리오, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 5",
        "wardrobe": "친구에게 인사 기존 전용 의상",
        "hairstyle": "existing distinct source character 5",
        "ageCategory": "adult",
        "group": "공연 보러 가는 친구"
      }
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
      "placementReason": "셀카 찍는 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "제이미",
      "age": 27,
      "ageCategory": "adult",
      "relation": "셀카 찍는 커플",
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만나면 늘 시간이 금방 가네요."
        },
        {
          "to": "player",
          "text": "오늘은 조금 일찍 나왔어요. 덕분에 여유가 있네요."
        },
        {
          "to": "companion",
          "text": "데번, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 6",
        "wardrobe": "셀카 찍기 기존 전용 의상",
        "hairstyle": "existing distinct source character 6",
        "ageCategory": "adult",
        "group": "셀카 찍는 커플"
      }
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
      "placementReason": "셀카 찍는 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "데번",
      "age": 34,
      "ageCategory": "adult",
      "relation": "셀카 찍는 커플",
      "lines": [
        {
          "to": "player",
          "text": "저쪽 구경도 하고 왔어요. 생각보다 오래 걸었네요."
        },
        {
          "to": "player",
          "text": "잠깐 쉬면서 일행을 기다려요."
        },
        {
          "to": "companion",
          "text": "제이미, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 7",
        "wardrobe": "셀카에 손 흔들기 기존 전용 의상",
        "hairstyle": "existing distinct source character 7",
        "ageCategory": "adult",
        "group": "셀카 찍는 커플"
      }
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
      "placementReason": "전광판 보는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "레이나",
      "age": 41,
      "ageCategory": "adult",
      "relation": "전광판 보는 가족",
      "lines": [
        {
          "to": "player",
          "text": "저는 여기서 쉬면서 사람들 구경하는 게 좋아요."
        },
        {
          "to": "player",
          "text": "지나가시는 데 불편하면 조금 비켜 드릴게요."
        },
        {
          "to": "companion",
          "text": "올리버, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 8",
        "wardrobe": "전광판 가리키기 기존 전용 의상",
        "hairstyle": "existing distinct source character 8",
        "ageCategory": "adult",
        "group": "전광판 보는 가족"
      }
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
      "placementReason": "전광판 보는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "올리버",
      "age": 10,
      "ageCategory": "child",
      "relation": "전광판 보는 가족",
      "lines": [
        {
          "to": "player",
          "text": "천천히 걸으니 평소에 안 보이던 것도 보이네요."
        },
        {
          "to": "player",
          "text": "밖에서 만나니 할 얘기가 더 많네요."
        },
        {
          "to": "companion",
          "text": "레이나, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 9",
        "wardrobe": "놀라서 올려다보기 기존 전용 의상",
        "hairstyle": "existing distinct source character 9",
        "ageCategory": "child",
        "group": "전광판 보는 가족"
      }
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
      "placementReason": "바쁜 일상 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "나오미",
      "age": 55,
      "ageCategory": "adult",
      "relation": "바쁜 일상",
      "lines": [
        {
          "to": "player",
          "text": "안녕하세요. 오늘 본 것들을 수첩에 적고 있어요."
        },
        {
          "to": "player",
          "text": "가방을 열어 보니 작은 물건들이 잔뜩 있네요."
        },
        {
          "to": "companion",
          "text": "크리스, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 10",
        "wardrobe": "시계 보며 걷기 기존 전용 의상",
        "hairstyle": "existing distinct source character 10",
        "ageCategory": "adult",
        "group": "바쁜 일상"
      }
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
      "placementReason": "바쁜 일상 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "크리스",
      "age": 62,
      "ageCategory": "older adult",
      "relation": "바쁜 일상",
      "lines": [
        {
          "to": "player",
          "text": "서두르지 않으셔도 돼요. 저도 그냥 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 한 장 찍고 마저 걸어가려고요."
        },
        {
          "to": "companion",
          "text": "나오미, 잠깐만, 지도 방향부터 돌려 보자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/usa.png row 11",
        "wardrobe": "음료 들고 음악 듣기 기존 전용 의상",
        "hairstyle": "existing distinct source character 11",
        "ageCategory": "older adult",
        "group": "바쁜 일상"
      }
    },
    {
      "id": "usa-v3-0",
      "name": "케일라",
      "region": "usa",
      "zone": "usa",
      "age": 34,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7853981633974483,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 0,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 1,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "오늘은 아이가 길을 골랐어요. 덕분에 여기까지 왔네요."
        },
        {
          "to": "player",
          "text": "가방은 제가 맡았는데 간식이 반이네요. 조금 있다가 극장 쪽에서 일행을 만나기로 했어요."
        },
        {
          "to": "companion",
          "text": "앤서니, 잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 1,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 1: round-neck top and open cardigan with straight trousers in dusty blue, muted coral, cream and charcoal. Distinct detail: small canvas tote"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 888,
      "y": 1643,
      "stationBounds": [
        853,
        1608,
        923,
        1678
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-1",
      "name": "앤서니",
      "region": "usa",
      "zone": "usa",
      "age": 39,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7928054353286134,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 1,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 3,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "사진은 제가 찍기로 했어요. 그래서 제 사진만 없네요."
        },
        {
          "to": "player",
          "text": "조금 더 걷고 다 같이 쉬려고요. "
        },
        {
          "to": "companion",
          "text": "케일라, 이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 3,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 2: collared shirt with rolled sleeves and relaxed trousers in dusty blue, muted coral, cream and charcoal. Distinct detail: compact camera"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1023,
      "y": 1643,
      "stationBounds": [
        988,
        1608,
        1058,
        1678
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-2",
      "name": "마야",
      "region": "usa",
      "zone": "usa",
      "age": 9,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 2.36360176212351,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 2,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 0,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "저기까지 걸어왔어요. 생각보다 안 멀었어요."
        },
        {
          "to": "player",
          "text": "제 가방에는 제가 고른 간식이 있어요. "
        },
        {
          "to": "companion",
          "text": "엘리엇, 나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 0,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 3: small motif T-shirt and knee shorts in dusty blue, muted coral, cream and charcoal. Distinct detail: small leaf motif"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 888,
      "y": 1778,
      "stationBounds": [
        853,
        1743,
        923,
        1813
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-3",
      "name": "엘리엇",
      "region": "usa",
      "zone": "usa",
      "age": 7,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -2.356194490192345,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 3,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 2,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 어른이 저쪽에 있어요. 저는 여기 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 찍을 때 자꾸 눈이 감겨요. "
        },
        {
          "to": "companion",
          "text": "마야, 잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 2,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 4: peter-pan collar blouse and modest jumper skirt in dusty blue, muted coral, cream and charcoal. Distinct detail: tiny flower hair clip"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1023,
      "y": 1778,
      "stationBounds": [
        988,
        1743,
        1058,
        1813
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-4",
      "name": "그레이스",
      "region": "usa",
      "zone": "usa",
      "age": 42,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "보호자",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7812383663008291,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 4,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 4,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "다 같이 나오려니 준비하는 데 한참 걸렸어요."
        },
        {
          "to": "player",
          "text": "그래도 나오길 잘했어요. 아이들이 신났네요. "
        },
        {
          "to": "companion",
          "text": "샘, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 4,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 5: light blouse and wide culottes in dusty blue, muted coral, cream and charcoal. Distinct detail: folded town map"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1542,
      "y": 965,
      "stationBounds": [
        1507,
        930,
        1577,
        1000
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-5",
      "name": "샘",
      "region": "usa",
      "zone": "usa",
      "age": 71,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7840421069760645,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 5,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 5,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "손주가 아는 길이라며 앞장섰어요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 따라다니는 날이에요. "
        },
        {
          "to": "companion",
          "text": "그레이스, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 5,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 6: button cardigan and below-knee pleated skirt in dusty blue, muted coral, cream and charcoal. Distinct detail: fine round spectacles and subtle age lines"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1677,
      "y": 965,
      "stationBounds": [
        1642,
        930,
        1712,
        1000
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-6",
      "name": "조슈아",
      "region": "usa",
      "zone": "usa",
      "age": 12,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 2.354827089262762,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 6,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 3,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "집에 가면 오늘 본 걸 그려 보려고요."
        },
        {
          "to": "player",
          "text": "작은 수첩은 제가 직접 골랐어요. 조금 있다가 극장 쪽에서 일행을 만나기로 했어요."
        },
        {
          "to": "companion",
          "text": "루비, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 3,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 7: striped crewneck and simple shorts in dusty blue, muted coral, cream and charcoal. Distinct detail: water flask"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1542,
      "y": 1100,
      "stationBounds": [
        1507,
        1065,
        1577,
        1135
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-7",
      "name": "루비",
      "region": "usa",
      "zone": "usa",
      "age": 8,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -2.3520233489391336,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 7,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 0,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "아까부터 재미있는 모양을 찾고 있어요."
        },
        {
          "to": "player",
          "text": "저쪽에도 하나 있어요. 같이 온 가족한테 보여 주려고요. "
        },
        {
          "to": "companion",
          "text": "조슈아, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 0,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 8: soft short sleeve shirt and ankle pants in dusty blue, muted coral, cream and charcoal. Distinct detail: small cloth backpack"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1677,
      "y": 1100,
      "stationBounds": [
        1642,
        1065,
        1712,
        1135
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-8",
      "name": "퀸",
      "region": "usa",
      "zone": "usa",
      "age": 20,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.0025637473284747998,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 8,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 2,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만날 때마다 어디서 만났는지 사진을 남겨요."
        },
        {
          "to": "player",
          "text": "오늘 사진은 제 차례예요. 잘 나와야 할 텐데요. "
        },
        {
          "to": "companion",
          "text": "카터, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 2,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 9: short casual jacket and contrast plain top in dusty blue, muted coral, cream and charcoal. Distinct detail: theater or museum leaflet"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1464,
      "y": 1465,
      "stationBounds": [
        1429,
        1430,
        1499,
        1500
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-9",
      "name": "카터",
      "region": "usa",
      "zone": "usa",
      "age": 22,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -1.5707963267948943,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 9,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 4,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 친구가 가게 구경을 좋아해요."
        },
        {
          "to": "player",
          "text": "저는 기다리는 동안 여기서 쉬고 있어요. "
        },
        {
          "to": "companion",
          "text": "퀸, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 4,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 10: knitted short-sleeve top and A-line midi skirt in dusty blue, muted coral, cream and charcoal. Distinct detail: small woven bag"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1609,
      "y": 1473,
      "stationBounds": [
        1574,
        1438,
        1644,
        1508
      ],
      "placementReason": "Predeployment: clear all existing POIs and learning targets by 105 units; preserve nearby companions and reachability."
    },
    {
      "id": "usa-v3-10",
      "name": "조셀린",
      "region": "usa",
      "zone": "usa",
      "age": 21,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 1.5707963267948943,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 10,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 1,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "약속 시간보다 일찍 와서 한 바퀴 돌았어요."
        },
        {
          "to": "player",
          "text": "친구가 오면 방금 본 곳도 같이 가 보려고요. "
        },
        {
          "to": "companion",
          "text": "퀸, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 1,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 11: open overshirt and tapered cotton pants in dusty blue, muted coral, cream and charcoal. Distinct detail: notebook"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1368,
      "y": 1560,
      "stationBounds": [
        1333,
        1525,
        1403,
        1595
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-11",
      "name": "마일스",
      "region": "usa",
      "zone": "usa",
      "age": 23,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -3.1390289062613186,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 11,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 3,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "어디로 갈지는 아직 안 정했어요."
        },
        {
          "to": "player",
          "text": "친구들 의견부터 들어 보려고요. "
        },
        {
          "to": "companion",
          "text": "퀸, 잠깐만, 지도 방향부터 돌려 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 3,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 12: plain polo and cloth shoulder bag in dusty blue, muted coral, cream and charcoal. Distinct detail: cloth cap held in hand"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1464,
      "y": 1655,
      "stationBounds": [
        1429,
        1620,
        1499,
        1690
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-12",
      "name": "헤이즐",
      "region": "usa",
      "zone": "usa",
      "age": 15,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 1.568992206309158,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 12,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 0,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 사진 찍고 있어요. 배경 고르는 데 더 오래 걸리네요."
        },
        {
          "to": "player",
          "text": "아직 한 장도 못 골랐어요. 다 조금씩 달라 보여요. 조금 있다가 극장 쪽에서 일행을 만나기로 했어요."
        },
        {
          "to": "companion",
          "text": "아리, 방금 웃어서 흔들렸어. 한 번만 더 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 0,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 13: thin cotton sweater and straight jeans in dusty blue, muted coral, cream and charcoal. Distinct detail: wrist friendship band"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1500,
      "y": 2216,
      "stationBounds": [
        1465,
        2181,
        1535,
        2251
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-13",
      "name": "아리",
      "region": "usa",
      "zone": "usa",
      "age": 16,
      "ageCategory": "teen",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 13,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 2,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "잠깐 나왔다가 친구들까지 만났어요."
        },
        {
          "to": "player",
          "text": "원래는 집에 일찍 갈 생각이었는데요. "
        },
        {
          "to": "companion",
          "text": "헤이즐, 다음엔 나도 같이 데려가."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 2,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 14: short sleeve blouse with narrow woven sash in dusty blue, muted coral, cream and charcoal. Distinct detail: striped socks"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1635,
      "y": 2216,
      "stationBounds": [
        1600,
        2181,
        1670,
        2251
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-14",
      "name": "브룩",
      "region": "usa",
      "zone": "usa",
      "age": 17,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -1.568992206309158,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 14,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 4,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "친구가 빌려준 책을 오늘 돌려주려고요."
        },
        {
          "to": "player",
          "text": "한 권 더 빌려 오면 가방이 꽉 차겠어요. "
        },
        {
          "to": "companion",
          "text": "헤이즐, 다 읽었어. 뒤에 이야기도 궁금하더라."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 4,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 15: soft zip jacket without explorer patches and knee shorts in dusty blue, muted coral, cream and charcoal. Distinct detail: small book"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1770,
      "y": 2216,
      "stationBounds": [
        1735,
        2181,
        1805,
        2251
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-15",
      "name": "프랭크",
      "region": "usa",
      "zone": "usa",
      "age": 68,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 1.57739703593364,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 15,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 5,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "늘 걷던 길인데 오늘은 반대로 와 봤어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구는 저보다 더 천천히 걷네요. "
        },
        {
          "to": "companion",
          "text": "에블린, 우리 여기서 조금 쉬었다 갈까?"
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 5,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 16: knit vest and pleated trousers in dusty blue, muted coral, cream and charcoal. Distinct detail: square glasses and gray brows"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 660,
      "y": 1862,
      "stationBounds": [
        625,
        1827,
        695,
        1897
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-16",
      "name": "에블린",
      "region": "usa",
      "zone": "usa",
      "age": 73,
      "ageCategory": "older adult",
      "genderPresentation": "feminine",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -1.57739703593364,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 16,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 5,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 얘기하다가 쉬는 시간을 놓쳤어요."
        },
        {
          "to": "player",
          "text": "이제는 그늘을 찾아 앉으려고요. "
        },
        {
          "to": "companion",
          "text": "프랭크, 아까 하던 얘기 어디까지 했지?"
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 5,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 17: collared blouse and long modest skirt in dusty blue, muted coral, cream and charcoal. Distinct detail: tiny brooch"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 795,
      "y": 1862,
      "stationBounds": [
        760,
        1827,
        830,
        1897
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "usa-v3-17",
      "name": "제시",
      "region": "usa",
      "zone": "usa",
      "age": 36,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "거리 판매자",
      "relation": "거리 이웃",
      "context": "거리 이웃",
      "scene": "거리 이웃",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 2.8244100289844303,
      "pose": "standing",
      "art": "world-v3-usa",
      "row": 17,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 0,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "편하게 구경하세요. 고르시기 전에 가까이 보셔도 돼요."
        },
        {
          "to": "player",
          "text": "작은 선물을 찾는 손님이 많이 들러요. "
        },
        {
          "to": "player",
          "text": "저는 제시예요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 0,
        "wardrobe": "modern New York evening casual clothing: short light jacket, striped shirt, cable sweater, tailored trousers or modest skirt, canvas sneakers, small theater program; no national costume stereotypes. Variant 18: rolled sleeve shirt with small waist apron in dusty blue, muted coral, cream and charcoal. Distinct detail: postcards in a basket"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1525,
      "y": 731,
      "stationBounds": [
        1490,
        696,
        1560,
        766
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
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
      },
      "name": "알레한드라",
      "age": 24,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 알레한드라예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 먼저 도착했어요. 천천히 둘러보세요."
        },
        {
          "to": "companion",
          "text": "잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 0",
        "wardrobe": "이주·언어 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 0",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "미겔",
      "age": 31,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 미겔이에요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "막 준비를 마쳤어요. 궁금한 게 있으면 편하게 말씀하세요."
        },
        {
          "to": "companion",
          "text": "이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 1",
        "wardrobe": "음식 문화 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 1",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "시메나",
      "age": 38,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 시메나예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "잠깐 정리하고 있었어요. 이야기 나눌 시간은 있어요."
        },
        {
          "to": "companion",
          "text": "나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 2",
        "wardrobe": "문화 교류 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 2",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "라파엘",
      "age": 45,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 라파엘이에요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "지도를 접으려던 참이에요. 같이 보실래요?"
        },
        {
          "to": "companion",
          "text": "잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 3",
        "wardrobe": "식재료 기록 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 3",
        "ageCategory": "adult",
        "group": "안내팀"
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
      "placementReason": "공원 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "카를라",
      "age": 52,
      "ageCategory": "adult",
      "relation": "공원 나들이 가족",
      "lines": [
        {
          "to": "player",
          "text": "간식은 챙겼는데 물을 벌써 다 마셨네요."
        },
        {
          "to": "player",
          "text": "손에 든 게 있어서 인사는 고개로 할게요."
        },
        {
          "to": "companion",
          "text": "프란시스코, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 4",
        "wardrobe": "사진 찍기 기존 전용 의상",
        "hairstyle": "existing distinct source character 4",
        "ageCategory": "adult",
        "group": "공원 나들이 가족"
      }
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
      "placementReason": "공원 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "프란시스코",
      "age": 59,
      "ageCategory": "adult",
      "relation": "공원 나들이 가족",
      "lines": [
        {
          "to": "player",
          "text": "오늘은 제가 가고 싶은 길을 고르기로 했어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구가 저쪽을 보고 있어요."
        },
        {
          "to": "companion",
          "text": "카를라, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 5",
        "wardrobe": "공원 지도 보기 기존 전용 의상",
        "hairstyle": "existing distinct source character 5",
        "ageCategory": "adult",
        "group": "공원 나들이 가족"
      }
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
      "placementReason": "공원 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "레나타",
      "age": 10,
      "ageCategory": "child",
      "relation": "공원 나들이 가족",
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만나면 늘 시간이 금방 가네요."
        },
        {
          "to": "player",
          "text": "오늘은 조금 일찍 나왔어요. 덕분에 여유가 있네요."
        },
        {
          "to": "companion",
          "text": "카를라, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 6",
        "wardrobe": "그림 보여주기 기존 전용 의상",
        "hairstyle": "existing distinct source character 6",
        "ageCategory": "child",
        "group": "공원 나들이 가족"
      }
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
      "placementReason": "독서하는 어르신 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "훌리오",
      "age": 67,
      "ageCategory": "older adult",
      "relation": "독서하는 어르신 부부",
      "lines": [
        {
          "to": "player",
          "text": "저쪽 구경도 하고 왔어요. 생각보다 오래 걸었네요."
        },
        {
          "to": "player",
          "text": "잠깐 쉬면서 일행을 기다려요."
        },
        {
          "to": "companion",
          "text": "돌로레스, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 7",
        "wardrobe": "벤치에서 책 읽기 기존 전용 의상",
        "hairstyle": "existing distinct source character 7",
        "ageCategory": "older adult",
        "group": "독서하는 어르신 부부"
      }
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
      "placementReason": "독서하는 어르신 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "돌로레스",
      "age": 41,
      "ageCategory": "adult",
      "relation": "독서하는 어르신 부부",
      "lines": [
        {
          "to": "player",
          "text": "저는 여기서 쉬면서 사람들 구경하는 게 좋아요."
        },
        {
          "to": "player",
          "text": "지나가시는 데 불편하면 조금 비켜 드릴게요."
        },
        {
          "to": "companion",
          "text": "훌리오, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 8",
        "wardrobe": "웃으며 대화 기존 전용 의상",
        "hairstyle": "existing distinct source character 8",
        "ageCategory": "adult",
        "group": "독서하는 어르신 부부"
      }
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
      "placementReason": "그림과 음악 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "엔리케",
      "age": 67,
      "ageCategory": "older adult",
      "relation": "그림과 음악 친구",
      "lines": [
        {
          "to": "player",
          "text": "천천히 걸으니 평소에 안 보이던 것도 보이네요."
        },
        {
          "to": "player",
          "text": "밖에서 만나니 할 얘기가 더 많네요."
        },
        {
          "to": "companion",
          "text": "마리아나, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 9",
        "wardrobe": "스케치하기 기존 전용 의상",
        "hairstyle": "existing distinct source character 9",
        "ageCategory": "older adult",
        "group": "그림과 음악 친구"
      }
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
      "placementReason": "그림과 음악 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "마리아나",
      "age": 55,
      "ageCategory": "adult",
      "relation": "그림과 음악 친구",
      "lines": [
        {
          "to": "player",
          "text": "안녕하세요. 오늘 본 것들을 수첩에 적고 있어요."
        },
        {
          "to": "player",
          "text": "가방을 열어 보니 작은 물건들이 잔뜩 있네요."
        },
        {
          "to": "companion",
          "text": "엔리케, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 10",
        "wardrobe": "기타 연주 기존 전용 의상",
        "hairstyle": "existing distinct source character 10",
        "ageCategory": "adult",
        "group": "그림과 음악 친구"
      }
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
      "placementReason": "체험 자리 도우미 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "로베르토",
      "age": 62,
      "ageCategory": "older adult",
      "relation": "체험 자리 도우미",
      "lines": [
        {
          "to": "player",
          "text": "서두르지 않으셔도 돼요. 저도 그냥 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 한 장 찍고 마저 걸어가려고요."
        },
        {
          "to": "player",
          "text": "저는 로베르토예요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/mexico.png row 11",
        "wardrobe": "바구니 들고 준비 기존 전용 의상",
        "hairstyle": "existing distinct source character 11",
        "ageCategory": "older adult",
        "group": "체험 자리 도우미"
      }
    },
    {
      "id": "mexico-v3-0",
      "name": "아브릴",
      "region": "mexico",
      "zone": "mexico",
      "age": 34,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7853981633974483,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 0,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 2,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "오늘은 아이가 길을 골랐어요. 덕분에 여기까지 왔네요."
        },
        {
          "to": "player",
          "text": "가방은 제가 맡았는데 간식이 반이네요. 공원에서 좀 더 쉬고 가려고요."
        },
        {
          "to": "companion",
          "text": "안드레스, 잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 2,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 1: round-neck top and open cardigan with straight trousers in dusty rose, sage, warm cream and indigo. Distinct detail: small canvas tote"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 693,
      "y": 673,
      "stationBounds": [
        658,
        638,
        728,
        708
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-1",
      "name": "안드레스",
      "region": "mexico",
      "zone": "mexico",
      "age": 39,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7928054353286134,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 1,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 4,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "사진은 제가 찍기로 했어요. 그래서 제 사진만 없네요."
        },
        {
          "to": "player",
          "text": "조금 더 걷고 다 같이 쉬려고요. "
        },
        {
          "to": "companion",
          "text": "아브릴, 이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 4,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 2: collared shirt with rolled sleeves and relaxed trousers in dusty rose, sage, warm cream and indigo. Distinct detail: compact camera"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 828,
      "y": 673,
      "stationBounds": [
        793,
        638,
        863,
        708
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-2",
      "name": "사라",
      "region": "mexico",
      "zone": "mexico",
      "age": 9,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 2.36360176212351,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 2,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 1,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "저기까지 걸어왔어요. 생각보다 안 멀었어요."
        },
        {
          "to": "player",
          "text": "제 가방에는 제가 고른 간식이 있어요. "
        },
        {
          "to": "companion",
          "text": "파블로, 나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 1,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 3: small motif T-shirt and knee shorts in dusty rose, sage, warm cream and indigo. Distinct detail: small leaf motif"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 693,
      "y": 808,
      "stationBounds": [
        658,
        773,
        728,
        843
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-3",
      "name": "파블로",
      "region": "mexico",
      "zone": "mexico",
      "age": 7,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -2.356194490192345,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 3,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 3,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 어른이 저쪽에 있어요. 저는 여기 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 찍을 때 자꾸 눈이 감겨요. "
        },
        {
          "to": "companion",
          "text": "사라, 잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 3,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 4: peter-pan collar blouse and modest jumper skirt in dusty rose, sage, warm cream and indigo. Distinct detail: tiny flower hair clip"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 828,
      "y": 808,
      "stationBounds": [
        793,
        773,
        863,
        843
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-4",
      "name": "나탈리아",
      "region": "mexico",
      "zone": "mexico",
      "age": 42,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "보호자",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7848194292430789,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 4,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 0,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "다 같이 나오려니 준비하는 데 한참 걸렸어요."
        },
        {
          "to": "player",
          "text": "그래도 나오길 잘했어요. 아이들이 신났네요. "
        },
        {
          "to": "companion",
          "text": "루벤, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 0,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 5: light blouse and wide culottes in dusty rose, sage, warm cream and indigo. Distinct detail: folded town map"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1147,
      "y": 1181,
      "stationBounds": [
        1112,
        1146,
        1182,
        1216
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-5",
      "name": "루벤",
      "region": "mexico",
      "zone": "mexico",
      "age": 71,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7920797898434796,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 5,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 5,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "손주가 아는 길이라며 앞장섰어요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 따라다니는 날이에요. "
        },
        {
          "to": "companion",
          "text": "나탈리아, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 5,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 6: button cardigan and below-knee pleated skirt in dusty rose, sage, warm cream and indigo. Distinct detail: fine round spectacles and subtle age lines"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1282,
      "y": 1181,
      "stationBounds": [
        1247,
        1146,
        1317,
        1216
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-6",
      "name": "아멜리아",
      "region": "mexico",
      "zone": "mexico",
      "age": 12,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 2.3628838028949812,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 6,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 4,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "집에 가면 오늘 본 걸 그려 보려고요."
        },
        {
          "to": "player",
          "text": "작은 수첩은 제가 직접 골랐어요. 공원에서 좀 더 쉬고 가려고요."
        },
        {
          "to": "companion",
          "text": "이안, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 4,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 7: striped crewneck and simple shorts in dusty rose, sage, warm cream and indigo. Distinct detail: water flask"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1147,
      "y": 1316,
      "stationBounds": [
        1112,
        1281,
        1182,
        1351
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-7",
      "name": "이안",
      "region": "mexico",
      "zone": "mexico",
      "age": 8,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -2.3556234429766327,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 7,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 1,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "아까부터 재미있는 모양을 찾고 있어요."
        },
        {
          "to": "player",
          "text": "저쪽에도 하나 있어요. 같이 온 가족한테 보여 주려고요. "
        },
        {
          "to": "companion",
          "text": "아멜리아, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 1,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 8: soft short sleeve shirt and ankle pants in dusty rose, sage, warm cream and indigo. Distinct detail: small cloth backpack"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1282,
      "y": 1316,
      "stationBounds": [
        1247,
        1281,
        1317,
        1351
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-8",
      "name": "조에",
      "region": "mexico",
      "zone": "mexico",
      "age": 20,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7853981633974483,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 8,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 3,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만날 때마다 어디서 만났는지 사진을 남겨요."
        },
        {
          "to": "player",
          "text": "오늘 사진은 제 차례예요. 잘 나와야 할 텐데요. "
        },
        {
          "to": "companion",
          "text": "다리오, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 3,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 9: short casual jacket and contrast plain top in dusty rose, sage, warm cream and indigo. Distinct detail: theater or museum leaflet"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1638,
      "y": 733,
      "stationBounds": [
        1603,
        698,
        1673,
        768
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-9",
      "name": "다리오",
      "region": "mexico",
      "zone": "mexico",
      "age": 22,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7928054353286134,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 9,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 0,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 친구가 가게 구경을 좋아해요."
        },
        {
          "to": "player",
          "text": "저는 기다리는 동안 여기서 쉬고 있어요. "
        },
        {
          "to": "companion",
          "text": "조에, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 0,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 10: knitted short-sleeve top and A-line midi skirt in dusty rose, sage, warm cream and indigo. Distinct detail: small woven bag"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1773,
      "y": 733,
      "stationBounds": [
        1738,
        698,
        1808,
        768
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-10",
      "name": "카르멘",
      "region": "mexico",
      "zone": "mexico",
      "age": 21,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 2.36360176212351,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 10,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 2,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "약속 시간보다 일찍 와서 한 바퀴 돌았어요."
        },
        {
          "to": "player",
          "text": "친구가 오면 방금 본 곳도 같이 가 보려고요. "
        },
        {
          "to": "companion",
          "text": "조에, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 2,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 11: open overshirt and tapered cotton pants in dusty rose, sage, warm cream and indigo. Distinct detail: notebook"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1638,
      "y": 868,
      "stationBounds": [
        1603,
        833,
        1673,
        903
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-11",
      "name": "에밀리오",
      "region": "mexico",
      "zone": "mexico",
      "age": 23,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.356194490192345,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 11,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 4,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "어디로 갈지는 아직 안 정했어요."
        },
        {
          "to": "player",
          "text": "친구들 의견부터 들어 보려고요. "
        },
        {
          "to": "companion",
          "text": "조에, 잠깐만, 지도 방향부터 돌려 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 4,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 12: plain polo and cloth shoulder bag in dusty rose, sage, warm cream and indigo. Distinct detail: cloth cap held in hand"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1773,
      "y": 868,
      "stationBounds": [
        1738,
        833,
        1808,
        903
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-12",
      "name": "루나",
      "region": "mexico",
      "zone": "mexico",
      "age": 15,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.00010826750187779395,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 12,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 1,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 사진 찍고 있어요. 배경 고르는 데 더 오래 걸리네요."
        },
        {
          "to": "player",
          "text": "아직 한 장도 못 골랐어요. 다 조금씩 달라 보여요. 공원에서 좀 더 쉬고 가려고요."
        },
        {
          "to": "companion",
          "text": "다나, 방금 웃어서 흔들렸어. 한 번만 더 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 1,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 13: thin cotton sweater and straight jeans in dusty rose, sage, warm cream and indigo. Distinct detail: wrist friendship band"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 725,
      "y": 936,
      "stationBounds": [
        690,
        901,
        760,
        971
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-13",
      "name": "다나",
      "region": "mexico",
      "zone": "mexico",
      "age": 16,
      "ageCategory": "teen",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 3.0303048726071586,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 13,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 3,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "잠깐 나왔다가 친구들까지 만났어요."
        },
        {
          "to": "player",
          "text": "원래는 집에 일찍 갈 생각이었는데요. "
        },
        {
          "to": "companion",
          "text": "루나, 다음엔 나도 같이 데려가."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 3,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 14: short sleeve blouse with narrow woven sash in dusty rose, sage, warm cream and indigo. Distinct detail: striped socks"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 725,
      "y": 1071,
      "stationBounds": [
        690,
        1036,
        760,
        1106
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-14",
      "name": "아우렐리아",
      "region": "mexico",
      "zone": "mexico",
      "age": 17,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 3.141484595470196,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 14,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 0,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "친구가 빌려준 책을 오늘 돌려주려고요."
        },
        {
          "to": "player",
          "text": "한 권 더 빌려 오면 가방이 꽉 차겠어요. "
        },
        {
          "to": "companion",
          "text": "루나, 다 읽었어. 뒤에 이야기도 궁금하더라."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 0,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 15: soft zip jacket without explorer patches and knee shorts in dusty rose, sage, warm cream and indigo. Distinct detail: small book"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 725,
      "y": 1206,
      "stationBounds": [
        690,
        1171,
        760,
        1241
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-15",
      "name": "호르헤",
      "region": "mexico",
      "zone": "mexico",
      "age": 68,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 15,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 5,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "늘 걷던 길인데 오늘은 반대로 와 봤어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구는 저보다 더 천천히 걷네요. "
        },
        {
          "to": "companion",
          "text": "필라르, 우리 여기서 조금 쉬었다 갈까?"
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 5,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 16: knit vest and pleated trousers in dusty rose, sage, warm cream and indigo. Distinct detail: square glasses and gray brows"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 305,
      "y": 673,
      "stationBounds": [
        270,
        638,
        340,
        708
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-16",
      "name": "필라르",
      "region": "mexico",
      "zone": "mexico",
      "age": 73,
      "ageCategory": "older adult",
      "genderPresentation": "feminine",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 3.141592653589793,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 16,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 5,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 얘기하다가 쉬는 시간을 놓쳤어요."
        },
        {
          "to": "player",
          "text": "이제는 그늘을 찾아 앉으려고요. "
        },
        {
          "to": "companion",
          "text": "호르헤, 아까 하던 얘기 어디까지 했지?"
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 5,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 17: collared blouse and long modest skirt in dusty rose, sage, warm cream and indigo. Distinct detail: tiny brooch"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 305,
      "y": 808,
      "stationBounds": [
        270,
        773,
        340,
        843
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "mexico-v3-17",
      "name": "이반",
      "region": "mexico",
      "zone": "mexico",
      "age": 36,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "거리 판매자",
      "relation": "거리 이웃",
      "context": "거리 이웃",
      "scene": "거리 이웃",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -1.4529080453089191,
      "pose": "standing",
      "art": "world-v3-mexico",
      "row": 17,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 1,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "편하게 구경하세요. 고르시기 전에 가까이 보셔도 돼요."
        },
        {
          "to": "player",
          "text": "작은 선물을 찾는 손님이 많이 들러요. "
        },
        {
          "to": "player",
          "text": "저는 이반이에요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 1,
        "wardrobe": "modern park outing in Mexico City: light cotton blouse or polo, simple cardigan, patterned modest skirt or linen trousers, canvas shoes; small sketchbook or basket; no safari outfit. Variant 18: rolled sleeve shirt with small waist apron in dusty rose, sage, warm cream and indigo. Distinct detail: postcards in a basket"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1023,
      "y": 934,
      "stationBounds": [
        988,
        899,
        1058,
        969
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
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
      },
      "name": "마리엘라",
      "age": 24,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 마리엘라예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 먼저 도착했어요. 천천히 둘러보세요."
        },
        {
          "to": "companion",
          "text": "잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 0",
        "wardrobe": "지협 지리 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 0",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "에두아르도",
      "age": 31,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 에두아르도예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "막 준비를 마쳤어요. 궁금한 게 있으면 편하게 말씀하세요."
        },
        {
          "to": "companion",
          "text": "이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 1",
        "wardrobe": "갑문 운항 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 1",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "야밀레트",
      "age": 38,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 야밀레트예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "잠깐 정리하고 있었어요. 이야기 나눌 시간은 있어요."
        },
        {
          "to": "companion",
          "text": "나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 2",
        "wardrobe": "대양·항로 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 2",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "리카르도",
      "age": 45,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 리카르도예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "지도를 접으려던 참이에요. 같이 보실래요?"
        },
        {
          "to": "companion",
          "text": "잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 3",
        "wardrobe": "시설 기술 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 3",
        "ageCategory": "adult",
        "group": "안내팀"
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
      "placementReason": "삼대가 함께하는 견학 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "아이다",
      "age": 52,
      "ageCategory": "adult",
      "relation": "삼대가 함께하는 견학",
      "lines": [
        {
          "to": "player",
          "text": "간식은 챙겼는데 물을 벌써 다 마셨네요."
        },
        {
          "to": "player",
          "text": "손에 든 게 있어서 인사는 고개로 할게요."
        },
        {
          "to": "companion",
          "text": "호세, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 4",
        "wardrobe": "배 가리키기 기존 전용 의상",
        "hairstyle": "existing distinct source character 4",
        "ageCategory": "adult",
        "group": "삼대가 함께하는 견학"
      }
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
      "placementReason": "삼대가 함께하는 견학 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "호세",
      "age": 59,
      "ageCategory": "adult",
      "relation": "삼대가 함께하는 견학",
      "lines": [
        {
          "to": "player",
          "text": "오늘은 제가 가고 싶은 길을 고르기로 했어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구가 저쪽을 보고 있어요."
        },
        {
          "to": "companion",
          "text": "아이다, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 5",
        "wardrobe": "쌍안경 관찰 기존 전용 의상",
        "hairstyle": "existing distinct source character 5",
        "ageCategory": "adult",
        "group": "삼대가 함께하는 견학"
      }
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
      "placementReason": "삼대가 함께하는 견학 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "멜리사",
      "age": 10,
      "ageCategory": "child",
      "relation": "삼대가 함께하는 견학",
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만나면 늘 시간이 금방 가네요."
        },
        {
          "to": "player",
          "text": "오늘은 조금 일찍 나왔어요. 덕분에 여유가 있네요."
        },
        {
          "to": "companion",
          "text": "아이다, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 6",
        "wardrobe": "지도 들고 미소 기존 전용 의상",
        "hairstyle": "existing distinct source character 6",
        "ageCategory": "child",
        "group": "삼대가 함께하는 견학"
      }
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
      "placementReason": "사진과 지도 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "마리오",
      "age": 34,
      "ageCategory": "adult",
      "relation": "사진과 지도 친구",
      "lines": [
        {
          "to": "player",
          "text": "저쪽 구경도 하고 왔어요. 생각보다 오래 걸었네요."
        },
        {
          "to": "player",
          "text": "잠깐 쉬면서 일행을 기다려요."
        },
        {
          "to": "companion",
          "text": "니디아, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 7",
        "wardrobe": "카메라 들고 걷기 기존 전용 의상",
        "hairstyle": "existing distinct source character 7",
        "ageCategory": "adult",
        "group": "사진과 지도 친구"
      }
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
      "placementReason": "사진과 지도 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "니디아",
      "age": 41,
      "ageCategory": "adult",
      "relation": "사진과 지도 친구",
      "lines": [
        {
          "to": "player",
          "text": "저는 여기서 쉬면서 사람들 구경하는 게 좋아요."
        },
        {
          "to": "player",
          "text": "지나가시는 데 불편하면 조금 비켜 드릴게요."
        },
        {
          "to": "companion",
          "text": "마리오, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 8",
        "wardrobe": "친구에게 손짓 기존 전용 의상",
        "hairstyle": "existing distinct source character 8",
        "ageCategory": "adult",
        "group": "사진과 지도 친구"
      }
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
      "placementReason": "배를 찍는 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "안토니오",
      "age": 48,
      "ageCategory": "adult",
      "relation": "배를 찍는 커플",
      "lines": [
        {
          "to": "player",
          "text": "천천히 걸으니 평소에 안 보이던 것도 보이네요."
        },
        {
          "to": "player",
          "text": "밖에서 만나니 할 얘기가 더 많네요."
        },
        {
          "to": "companion",
          "text": "힐다, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 9",
        "wardrobe": "배 사진 찍기 기존 전용 의상",
        "hairstyle": "existing distinct source character 9",
        "ageCategory": "adult",
        "group": "배를 찍는 커플"
      }
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
      "placementReason": "배를 찍는 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "힐다",
      "age": 55,
      "ageCategory": "adult",
      "relation": "배를 찍는 커플",
      "lines": [
        {
          "to": "player",
          "text": "안녕하세요. 오늘 본 것들을 수첩에 적고 있어요."
        },
        {
          "to": "player",
          "text": "가방을 열어 보니 작은 물건들이 잔뜩 있네요."
        },
        {
          "to": "companion",
          "text": "안토니오, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 10",
        "wardrobe": "사진 화면 함께 보기 기존 전용 의상",
        "hairstyle": "existing distinct source character 10",
        "ageCategory": "adult",
        "group": "배를 찍는 커플"
      }
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
      "placementReason": "방문자 센터 직원 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "로넬",
      "age": 62,
      "ageCategory": "older adult",
      "relation": "방문자 센터 직원",
      "lines": [
        {
          "to": "player",
          "text": "서두르지 않으셔도 돼요. 저도 그냥 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 한 장 찍고 마저 걸어가려고요."
        },
        {
          "to": "player",
          "text": "저는 로넬이에요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/panama.png row 11",
        "wardrobe": "안내 책자 정리 기존 전용 의상",
        "hairstyle": "existing distinct source character 11",
        "ageCategory": "older adult",
        "group": "방문자 센터 직원"
      }
    },
    {
      "id": "panama-v3-0",
      "name": "레이디",
      "region": "panama",
      "zone": "panama",
      "age": 34,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.004665456596869376,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 0,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 3,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "오늘은 아이가 길을 골랐어요. 덕분에 여기까지 왔네요."
        },
        {
          "to": "player",
          "text": "가방은 제가 맡았는데 간식이 반이네요. 배가 지나가는 걸 조금 더 보고 가려고요."
        },
        {
          "to": "companion",
          "text": "오마르, 잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 3,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 1: round-neck top and open cardigan with straight trousers in muted turquoise, terracotta, sand and navy. Distinct detail: small canvas tote"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3172,
      "y": 2452,
      "stationBounds": [
        3137,
        2417,
        3207,
        2487
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-1",
      "name": "오마르",
      "region": "panama",
      "zone": "panama",
      "age": 39,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -1.5760348675498097,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 1,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 0,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "사진은 제가 찍기로 했어요. 그래서 제 사진만 없네요."
        },
        {
          "to": "player",
          "text": "조금 더 걷고 다 같이 쉬려고요. "
        },
        {
          "to": "companion",
          "text": "레이디, 이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 0,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 2: collared shirt with rolled sleeves and relaxed trousers in muted turquoise, terracotta, sand and navy. Distinct detail: compact camera"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3267,
      "y": 2548,
      "stationBounds": [
        3232,
        2513,
        3302,
        2583
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-2",
      "name": "케빈",
      "region": "panama",
      "zone": "panama",
      "age": 9,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 1.5760288979560404,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 2,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 2,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "저기까지 걸어왔어요. 생각보다 안 멀었어요."
        },
        {
          "to": "player",
          "text": "제 가방에는 제가 고른 간식이 있어요. "
        },
        {
          "to": "companion",
          "text": "파올라, 나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 2,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 3: small motif T-shirt and knee shorts in muted turquoise, terracotta, sand and navy. Distinct detail: small leaf motif"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3076,
      "y": 2548,
      "stationBounds": [
        3041,
        2513,
        3111,
        2583
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-3",
      "name": "파올라",
      "region": "panama",
      "zone": "panama",
      "age": 7,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -3.1369271969929238,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 3,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 4,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 어른이 저쪽에 있어요. 저는 여기 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 찍을 때 자꾸 눈이 감겨요. "
        },
        {
          "to": "companion",
          "text": "케빈, 잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 4,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 4: peter-pan collar blouse and modest jumper skirt in muted turquoise, terracotta, sand and navy. Distinct detail: tiny flower hair clip"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3172,
      "y": 2643,
      "stationBounds": [
        3137,
        2608,
        3207,
        2678
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-4",
      "name": "로레나",
      "region": "panama",
      "zone": "panama",
      "age": 42,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "보호자",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7884086291446425,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 4,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 1,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "다 같이 나오려니 준비하는 데 한참 걸렸어요."
        },
        {
          "to": "player",
          "text": "그래도 나오길 잘했어요. 아이들이 신났네요. "
        },
        {
          "to": "companion",
          "text": "사울, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 1,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 5: light blouse and wide culottes in muted turquoise, terracotta, sand and navy. Distinct detail: folded town map"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2137,
      "y": 962,
      "stationBounds": [
        2102,
        927,
        2172,
        997
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-5",
      "name": "사울",
      "region": "panama",
      "zone": "panama",
      "age": 71,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7831711981857411,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 5,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 5,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "손주가 아는 길이라며 앞장섰어요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 따라다니는 날이에요. "
        },
        {
          "to": "companion",
          "text": "로레나, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 5,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 6: button cardigan and below-knee pleated skirt in muted turquoise, terracotta, sand and navy. Distinct detail: fine round spectacles and subtle age lines"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2272,
      "y": 962,
      "stationBounds": [
        2237,
        927,
        2307,
        997
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-6",
      "name": "테오필로",
      "region": "panama",
      "zone": "panama",
      "age": 12,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 2.3539809227290576,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 6,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 0,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "집에 가면 오늘 본 걸 그려 보려고요."
        },
        {
          "to": "player",
          "text": "작은 수첩은 제가 직접 골랐어요. 배가 지나가는 걸 조금 더 보고 가려고요."
        },
        {
          "to": "companion",
          "text": "제니, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 0,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 7: striped crewneck and simple shorts in muted turquoise, terracotta, sand and navy. Distinct detail: water flask"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2137,
      "y": 1097,
      "stationBounds": [
        2102,
        1062,
        2172,
        1132
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-7",
      "name": "제니",
      "region": "panama",
      "zone": "panama",
      "age": 8,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -2.3592183535761215,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 7,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 2,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "아까부터 재미있는 모양을 찾고 있어요."
        },
        {
          "to": "player",
          "text": "저쪽에도 하나 있어요. 같이 온 가족한테 보여 주려고요. "
        },
        {
          "to": "companion",
          "text": "테오필로, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 2,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 8: soft short sleeve shirt and ankle pants in muted turquoise, terracotta, sand and navy. Distinct detail: small cloth backpack"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2272,
      "y": 1097,
      "stationBounds": [
        2237,
        1062,
        2307,
        1132
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-8",
      "name": "아드리안",
      "region": "panama",
      "zone": "panama",
      "age": 20,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.002308869040854672,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 8,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 4,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만날 때마다 어디서 만났는지 사진을 남겨요."
        },
        {
          "to": "player",
          "text": "오늘 사진은 제 차례예요. 잘 나와야 할 텐데요. "
        },
        {
          "to": "companion",
          "text": "노엘리아, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 4,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 9: short casual jacket and contrast plain top in muted turquoise, terracotta, sand and navy. Distinct detail: theater or museum leaflet"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3406,
      "y": 1048,
      "stationBounds": [
        3371,
        1013,
        3441,
        1083
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-9",
      "name": "노엘리아",
      "region": "panama",
      "zone": "panama",
      "age": 22,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -1.5714116284823216,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 9,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 1,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 친구가 가게 구경을 좋아해요."
        },
        {
          "to": "player",
          "text": "저는 기다리는 동안 여기서 쉬고 있어요. "
        },
        {
          "to": "companion",
          "text": "아드리안, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 1,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 10: knitted short-sleeve top and A-line midi skirt in muted turquoise, terracotta, sand and navy. Distinct detail: small woven bag"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3501,
      "y": 1144,
      "stationBounds": [
        3466,
        1109,
        3536,
        1179
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-10",
      "name": "에리카",
      "region": "panama",
      "zone": "panama",
      "age": 21,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 1.5714080504073566,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 10,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 3,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "약속 시간보다 일찍 와서 한 바퀴 돌았어요."
        },
        {
          "to": "player",
          "text": "친구가 오면 방금 본 곳도 같이 가 보려고요. "
        },
        {
          "to": "companion",
          "text": "아드리안, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 3,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 11: open overshirt and tapered cotton pants in muted turquoise, terracotta, sand and navy. Distinct detail: notebook"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3310,
      "y": 1144,
      "stationBounds": [
        3275,
        1109,
        3345,
        1179
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-11",
      "name": "리스",
      "region": "panama",
      "zone": "panama",
      "age": 23,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -3.139262341893692,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 11,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 0,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "어디로 갈지는 아직 안 정했어요."
        },
        {
          "to": "player",
          "text": "친구들 의견부터 들어 보려고요. "
        },
        {
          "to": "companion",
          "text": "아드리안, 잠깐만, 지도 방향부터 돌려 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 0,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 12: plain polo and cloth shoulder bag in muted turquoise, terracotta, sand and navy. Distinct detail: cloth cap held in hand"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3406,
      "y": 1239,
      "stationBounds": [
        3371,
        1204,
        3441,
        1274
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-12",
      "name": "마리솔",
      "region": "panama",
      "zone": "panama",
      "age": 15,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7840046957567289,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 12,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 2,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 사진 찍고 있어요. 배경 고르는 데 더 오래 걸리네요."
        },
        {
          "to": "player",
          "text": "아직 한 장도 못 골랐어요. 다 조금씩 달라 보여요. 배가 지나가는 걸 조금 더 보고 가려고요."
        },
        {
          "to": "companion",
          "text": "호수에, 방금 웃어서 흔들렸어. 한 번만 더 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 2,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 13: thin cotton sweater and straight jeans in muted turquoise, terracotta, sand and navy. Distinct detail: wrist friendship band"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2286,
      "y": 2092,
      "stationBounds": [
        2251,
        2057,
        2321,
        2127
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-13",
      "name": "호수에",
      "region": "panama",
      "zone": "panama",
      "age": 16,
      "ageCategory": "teen",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 2.5944605197277566,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 13,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 4,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "잠깐 나왔다가 친구들까지 만났어요."
        },
        {
          "to": "player",
          "text": "원래는 집에 일찍 갈 생각이었는데요. "
        },
        {
          "to": "companion",
          "text": "마리솔, 다음엔 나도 같이 데려가."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 4,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 14: short sleeve blouse with narrow woven sash in muted turquoise, terracotta, sand and navy. Distinct detail: striped socks"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2381,
      "y": 2188,
      "stationBounds": [
        2346,
        2153,
        2416,
        2223
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-14",
      "name": "올가",
      "region": "panama",
      "zone": "panama",
      "age": 17,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.3548036217039385,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 14,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 1,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "친구가 빌려준 책을 오늘 돌려주려고요."
        },
        {
          "to": "player",
          "text": "한 권 더 빌려 오면 가방이 꽉 차겠어요. "
        },
        {
          "to": "companion",
          "text": "마리솔, 다 읽었어. 뒤에 이야기도 궁금하더라."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 1,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 15: soft zip jacket without explorer patches and knee shorts in muted turquoise, terracotta, sand and navy. Distinct detail: small book"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2477,
      "y": 2283,
      "stationBounds": [
        2442,
        2248,
        2512,
        2318
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-15",
      "name": "아르만도",
      "region": "panama",
      "zone": "panama",
      "age": 68,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.004945837635967905,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 15,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 5,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "늘 걷던 길인데 오늘은 반대로 와 봤어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구는 저보다 더 천천히 걷네요. "
        },
        {
          "to": "companion",
          "text": "레티시아, 우리 여기서 조금 쉬었다 갈까?"
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 5,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 16: knit vest and pleated trousers in muted turquoise, terracotta, sand and navy. Distinct detail: square glasses and gray brows"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2823,
      "y": 2464,
      "stationBounds": [
        2788,
        2429,
        2858,
        2499
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-16",
      "name": "레티시아",
      "region": "panama",
      "zone": "panama",
      "age": 73,
      "ageCategory": "older adult",
      "genderPresentation": "feminine",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -3.136599073653429,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 16,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 5,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 얘기하다가 쉬는 시간을 놓쳤어요."
        },
        {
          "to": "player",
          "text": "이제는 그늘을 찾아 앉으려고요. "
        },
        {
          "to": "companion",
          "text": "아르만도, 아까 하던 얘기 어디까지 했지?"
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 5,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 17: collared blouse and long modest skirt in muted turquoise, terracotta, sand and navy. Distinct detail: tiny brooch"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2823,
      "y": 2599,
      "stationBounds": [
        2788,
        2564,
        2858,
        2634
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "panama-v3-17",
      "name": "안젤",
      "region": "panama",
      "zone": "panama",
      "age": 36,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "거리 판매자",
      "relation": "거리 이웃",
      "context": "거리 이웃",
      "scene": "거리 이웃",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.1178882814854907,
      "pose": "standing",
      "art": "world-v3-panama",
      "row": 17,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 2,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "편하게 구경하세요. 고르시기 전에 가까이 보셔도 돼요."
        },
        {
          "to": "player",
          "text": "작은 선물을 찾는 손님이 많이 들러요. "
        },
        {
          "to": "player",
          "text": "저는 안젤이에요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 2,
        "wardrobe": "modern Panama visitor everyday clothing: breathable cotton shirt, simple midi skirt or lightweight trousers, small sunhat, compact camera or water flask; no safari or explorer vest. Variant 18: rolled sleeve shirt with small waist apron in muted turquoise, terracotta, sand and navy. Distinct detail: postcards in a basket"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2011,
      "y": 977,
      "stationBounds": [
        1976,
        942,
        2046,
        1012
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
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
      },
      "name": "루스",
      "age": 24,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 루스예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 먼저 도착했어요. 천천히 둘러보세요."
        },
        {
          "to": "companion",
          "text": "잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 0",
        "wardrobe": "산지 문화 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 0",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "윌리안",
      "age": 31,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 윌리안이에요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "막 준비를 마쳤어요. 궁금한 게 있으면 편하게 말씀하세요."
        },
        {
          "to": "companion",
          "text": "이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 1",
        "wardrobe": "고도·기후 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 1",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "마리벨",
      "age": 67,
      "ageCategory": "older adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 마리벨이에요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "잠깐 정리하고 있었어요. 이야기 나눌 시간은 있어요."
        },
        {
          "to": "companion",
          "text": "나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 2",
        "wardrobe": "석조 보존 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 2",
        "ageCategory": "older adult",
        "group": "안내팀"
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
      },
      "name": "에드윈",
      "age": 45,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 에드윈이에요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "지도를 접으려던 참이에요. 같이 보실래요?"
        },
        {
          "to": "companion",
          "text": "잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 3",
        "wardrobe": "지리 자료 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 3",
        "ageCategory": "adult",
        "group": "안내팀"
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
      "placementReason": "산지 여행 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "플로르",
      "age": 52,
      "ageCategory": "adult",
      "relation": "산지 여행 가족",
      "lines": [
        {
          "to": "player",
          "text": "간식은 챙겼는데 물을 벌써 다 마셨네요."
        },
        {
          "to": "player",
          "text": "손에 든 게 있어서 인사는 고개로 할게요."
        },
        {
          "to": "companion",
          "text": "호르단, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 4",
        "wardrobe": "유적 사진 찍기 기존 전용 의상",
        "hairstyle": "existing distinct source character 4",
        "ageCategory": "adult",
        "group": "산지 여행 가족"
      }
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
      "placementReason": "산지 여행 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "호르단",
      "age": 59,
      "ageCategory": "adult",
      "relation": "산지 여행 가족",
      "lines": [
        {
          "to": "player",
          "text": "오늘은 제가 가고 싶은 길을 고르기로 했어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구가 저쪽을 보고 있어요."
        },
        {
          "to": "companion",
          "text": "플로르, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 5",
        "wardrobe": "능선 가리키기 기존 전용 의상",
        "hairstyle": "existing distinct source character 5",
        "ageCategory": "adult",
        "group": "산지 여행 가족"
      }
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
      "placementReason": "산지 여행 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "야넬라",
      "age": 10,
      "ageCategory": "child",
      "relation": "산지 여행 가족",
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만나면 늘 시간이 금방 가네요."
        },
        {
          "to": "player",
          "text": "오늘은 조금 일찍 나왔어요. 덕분에 여유가 있네요."
        },
        {
          "to": "companion",
          "text": "플로르, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 6",
        "wardrobe": "지도 살펴보기 기존 전용 의상",
        "hairstyle": "existing distinct source character 6",
        "ageCategory": "child",
        "group": "산지 여행 가족"
      }
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
      "placementReason": "관찰하는 어르신 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "베토",
      "age": 34,
      "ageCategory": "adult",
      "relation": "관찰하는 어르신 커플",
      "lines": [
        {
          "to": "player",
          "text": "저쪽 구경도 하고 왔어요. 생각보다 오래 걸었네요."
        },
        {
          "to": "player",
          "text": "잠깐 쉬면서 일행을 기다려요."
        },
        {
          "to": "companion",
          "text": "셀리아, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 7",
        "wardrobe": "쌍안경 관찰 기존 전용 의상",
        "hairstyle": "existing distinct source character 7",
        "ageCategory": "adult",
        "group": "관찰하는 어르신 커플"
      }
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
      "placementReason": "관찰하는 어르신 커플 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "셀리아",
      "age": 41,
      "ageCategory": "adult",
      "relation": "관찰하는 어르신 커플",
      "lines": [
        {
          "to": "player",
          "text": "저는 여기서 쉬면서 사람들 구경하는 게 좋아요."
        },
        {
          "to": "player",
          "text": "지나가시는 데 불편하면 조금 비켜 드릴게요."
        },
        {
          "to": "companion",
          "text": "베토, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 8",
        "wardrobe": "탐방 지팡이 짚기 기존 전용 의상",
        "hairstyle": "existing distinct source character 8",
        "ageCategory": "adult",
        "group": "관찰하는 어르신 커플"
      }
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
      "placementReason": "스케치하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "다비드",
      "age": 67,
      "ageCategory": "older adult",
      "relation": "스케치하는 친구",
      "lines": [
        {
          "to": "player",
          "text": "천천히 걸으니 평소에 안 보이던 것도 보이네요."
        },
        {
          "to": "player",
          "text": "밖에서 만나니 할 얘기가 더 많네요."
        },
        {
          "to": "companion",
          "text": "루스벨, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 9",
        "wardrobe": "휴대용 의자에서 스케치 기존 전용 의상",
        "hairstyle": "existing distinct source character 9",
        "ageCategory": "older adult",
        "group": "스케치하는 친구"
      }
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
      "placementReason": "스케치하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "루스벨",
      "age": 55,
      "ageCategory": "adult",
      "relation": "스케치하는 친구",
      "lines": [
        {
          "to": "player",
          "text": "안녕하세요. 오늘 본 것들을 수첩에 적고 있어요."
        },
        {
          "to": "player",
          "text": "가방을 열어 보니 작은 물건들이 잔뜩 있네요."
        },
        {
          "to": "companion",
          "text": "다비드, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 10",
        "wardrobe": "친구 그림 보기 기존 전용 의상",
        "hairstyle": "existing distinct source character 10",
        "ageCategory": "adult",
        "group": "스케치하는 친구"
      }
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
      "placementReason": "산지 생태 기록 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "레오노르",
      "age": 62,
      "ageCategory": "older adult",
      "relation": "산지 생태 기록",
      "lines": [
        {
          "to": "player",
          "text": "서두르지 않으셔도 돼요. 저도 그냥 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 한 장 찍고 마저 걸어가려고요."
        },
        {
          "to": "player",
          "text": "저는 레오노르예요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/peru.png row 11",
        "wardrobe": "잎을 돋보기로 관찰 기존 전용 의상",
        "hairstyle": "existing distinct source character 11",
        "ageCategory": "older adult",
        "group": "산지 생태 기록"
      }
    },
    {
      "id": "peru-v3-0",
      "name": "다니엘라",
      "region": "peru",
      "zone": "peru",
      "age": 34,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7879374958035721,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 0,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 4,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "오늘은 아이가 길을 골랐어요. 덕분에 여기까지 왔네요."
        },
        {
          "to": "player",
          "text": "가방은 제가 맡았는데 간식이 반이네요. 걷다가 잠깐 숨을 돌리고 있어요."
        },
        {
          "to": "companion",
          "text": "페르난도, 잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 4,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 1: round-neck top and open cardigan with straight trousers in muted burgundy, olive, stone gray and sky blue. Distinct detail: small canvas tote"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2094,
      "y": 1639,
      "stationBounds": [
        2059,
        1604,
        2129,
        1674
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-1",
      "name": "페르난도",
      "region": "peru",
      "zone": "peru",
      "age": 39,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7833503968258471,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 1,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 1,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "사진은 제가 찍기로 했어요. 그래서 제 사진만 없네요."
        },
        {
          "to": "player",
          "text": "조금 더 걷고 다 같이 쉬려고요. "
        },
        {
          "to": "companion",
          "text": "다니엘라, 이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 1,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 2: collared shirt with rolled sleeves and relaxed trousers in muted burgundy, olive, stone gray and sky blue. Distinct detail: compact camera"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2229,
      "y": 1639,
      "stationBounds": [
        2194,
        1604,
        2264,
        1674
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-2",
      "name": "니나",
      "region": "peru",
      "zone": "peru",
      "age": 9,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 2.354157118327125,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 2,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 3,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "저기까지 걸어왔어요. 생각보다 안 멀었어요."
        },
        {
          "to": "player",
          "text": "제 가방에는 제가 고른 간식이 있어요. "
        },
        {
          "to": "companion",
          "text": "티아고, 나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 3,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 3: small motif T-shirt and knee shorts in muted burgundy, olive, stone gray and sky blue. Distinct detail: small leaf motif"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2094,
      "y": 1774,
      "stationBounds": [
        2059,
        1739,
        2129,
        1809
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-3",
      "name": "티아고",
      "region": "peru",
      "zone": "peru",
      "age": 7,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -2.358744217256981,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 3,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 0,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 어른이 저쪽에 있어요. 저는 여기 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 찍을 때 자꾸 눈이 감겨요. "
        },
        {
          "to": "companion",
          "text": "니나, 잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 0,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 4: peter-pan collar blouse and modest jumper skirt in muted burgundy, olive, stone gray and sky blue. Distinct detail: tiny flower hair clip"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2229,
      "y": 1774,
      "stationBounds": [
        2194,
        1739,
        2264,
        1809
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-4",
      "name": "아말리아",
      "region": "peru",
      "zone": "peru",
      "age": 42,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "보호자",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.0014175275270519106,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 4,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 2,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "다 같이 나오려니 준비하는 데 한참 걸렸어요."
        },
        {
          "to": "player",
          "text": "그래도 나오길 잘했어요. 아이들이 신났네요. "
        },
        {
          "to": "companion",
          "text": "세사르, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 2,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 5: light blouse and wide culottes in muted burgundy, olive, stone gray and sky blue. Distinct detail: folded town map"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1733,
      "y": 3160,
      "stationBounds": [
        1698,
        3125,
        1768,
        3195
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-5",
      "name": "세사르",
      "region": "peru",
      "zone": "peru",
      "age": 71,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -1.5707963267948966,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 5,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 5,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "손주가 아는 길이라며 앞장섰어요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 따라다니는 날이에요. "
        },
        {
          "to": "companion",
          "text": "아말리아, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 5,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 6: button cardigan and below-knee pleated skirt in muted burgundy, olive, stone gray and sky blue. Distinct detail: fine round spectacles and subtle age lines"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1829,
      "y": 3255,
      "stationBounds": [
        1794,
        3220,
        1864,
        3290
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-6",
      "name": "알론소",
      "region": "peru",
      "zone": "peru",
      "age": 12,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 1.5707963267948966,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 6,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 1,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "집에 가면 오늘 본 걸 그려 보려고요."
        },
        {
          "to": "player",
          "text": "작은 수첩은 제가 직접 골랐어요. 걷다가 잠깐 숨을 돌리고 있어요."
        },
        {
          "to": "companion",
          "text": "브리사, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 1,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 7: striped crewneck and simple shorts in muted burgundy, olive, stone gray and sky blue. Distinct detail: water flask"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1638,
      "y": 3255,
      "stationBounds": [
        1603,
        3220,
        1673,
        3290
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-7",
      "name": "브리사",
      "region": "peru",
      "zone": "peru",
      "age": 8,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 3.1401751260627413,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 7,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 3,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "아까부터 재미있는 모양을 찾고 있어요."
        },
        {
          "to": "player",
          "text": "저쪽에도 하나 있어요. 같이 온 가족한테 보여 주려고요. "
        },
        {
          "to": "companion",
          "text": "알론소, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 3,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 8: soft short sleeve shirt and ankle pants in muted burgundy, olive, stone gray and sky blue. Distinct detail: small cloth backpack"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1733,
      "y": 3350,
      "stationBounds": [
        1698,
        3315,
        1768,
        3385
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-8",
      "name": "파비올라",
      "region": "peru",
      "zone": "peru",
      "age": 20,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7853981633974483,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 8,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 0,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만날 때마다 어디서 만났는지 사진을 남겨요."
        },
        {
          "to": "player",
          "text": "오늘 사진은 제 차례예요. 잘 나와야 할 텐데요. "
        },
        {
          "to": "companion",
          "text": "나우엘, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 0,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 9: short casual jacket and contrast plain top in muted burgundy, olive, stone gray and sky blue. Distinct detail: theater or museum leaflet"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2013,
      "y": 783,
      "stationBounds": [
        1978,
        748,
        2048,
        818
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-9",
      "name": "나우엘",
      "region": "peru",
      "zone": "peru",
      "age": 22,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7928054353286134,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 9,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 2,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 친구가 가게 구경을 좋아해요."
        },
        {
          "to": "player",
          "text": "저는 기다리는 동안 여기서 쉬고 있어요. "
        },
        {
          "to": "companion",
          "text": "파비올라, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 2,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 10: knitted short-sleeve top and A-line midi skirt in muted burgundy, olive, stone gray and sky blue. Distinct detail: small woven bag"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2148,
      "y": 783,
      "stationBounds": [
        2113,
        748,
        2183,
        818
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-10",
      "name": "마르셀라",
      "region": "peru",
      "zone": "peru",
      "age": 21,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 2.36360176212351,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 10,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 4,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "약속 시간보다 일찍 와서 한 바퀴 돌았어요."
        },
        {
          "to": "player",
          "text": "친구가 오면 방금 본 곳도 같이 가 보려고요. "
        },
        {
          "to": "companion",
          "text": "파비올라, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 4,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 11: open overshirt and tapered cotton pants in muted burgundy, olive, stone gray and sky blue. Distinct detail: notebook"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2013,
      "y": 918,
      "stationBounds": [
        1978,
        883,
        2048,
        953
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-11",
      "name": "니콜",
      "region": "peru",
      "zone": "peru",
      "age": 23,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.356194490192345,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 11,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 1,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "어디로 갈지는 아직 안 정했어요."
        },
        {
          "to": "player",
          "text": "친구들 의견부터 들어 보려고요. "
        },
        {
          "to": "companion",
          "text": "파비올라, 잠깐만, 지도 방향부터 돌려 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 1,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 12: plain polo and cloth shoulder bag in muted burgundy, olive, stone gray and sky blue. Distinct detail: cloth cap held in hand"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2148,
      "y": 918,
      "stationBounds": [
        2113,
        883,
        2183,
        953
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-12",
      "name": "카탈리나",
      "region": "peru",
      "zone": "peru",
      "age": 15,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7849470473814941,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 12,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 3,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 사진 찍고 있어요. 배경 고르는 데 더 오래 걸리네요."
        },
        {
          "to": "player",
          "text": "아직 한 장도 못 골랐어요. 다 조금씩 달라 보여요. 걷다가 잠깐 숨을 돌리고 있어요."
        },
        {
          "to": "companion",
          "text": "엘리안, 방금 웃어서 흔들렸어. 한 번만 더 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 3,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 13: thin cotton sweater and straight jeans in muted burgundy, olive, stone gray and sky blue. Distinct detail: wrist friendship band"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1874,
      "y": 2699,
      "stationBounds": [
        1839,
        2664,
        1909,
        2734
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-13",
      "name": "엘리안",
      "region": "peru",
      "zone": "peru",
      "age": 16,
      "ageCategory": "teen",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.190094018719152,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 13,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 0,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "잠깐 나왔다가 친구들까지 만났어요."
        },
        {
          "to": "player",
          "text": "원래는 집에 일찍 갈 생각이었는데요. "
        },
        {
          "to": "companion",
          "text": "카탈리나, 다음엔 나도 같이 데려가."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 0,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 14: short sleeve blouse with narrow woven sash in muted burgundy, olive, stone gray and sky blue. Distinct detail: striped socks"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2067,
      "y": 2769,
      "stationBounds": [
        2032,
        2734,
        2102,
        2804
      ],
      "placementReason": "Predeployment: clear all existing POIs and learning targets by 105 units; preserve nearby companions and reachability."
    },
    {
      "id": "peru-v3-14",
      "name": "빅토리아",
      "region": "peru",
      "zone": "peru",
      "age": 17,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.3557410786004,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 14,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 2,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "친구가 빌려준 책을 오늘 돌려주려고요."
        },
        {
          "to": "player",
          "text": "한 권 더 빌려 오면 가방이 꽉 차겠어요. "
        },
        {
          "to": "companion",
          "text": "카탈리나, 다 읽었어. 뒤에 이야기도 궁금하더라."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 2,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 15: soft zip jacket without explorer patches and knee shorts in muted burgundy, olive, stone gray and sky blue. Distinct detail: small book"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2065,
      "y": 2890,
      "stationBounds": [
        2030,
        2855,
        2100,
        2925
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-15",
      "name": "페드리코",
      "region": "peru",
      "zone": "peru",
      "age": 68,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 1.5641511221128188,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 15,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 5,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "늘 걷던 길인데 오늘은 반대로 와 봤어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구는 저보다 더 천천히 걷네요. "
        },
        {
          "to": "companion",
          "text": "루이사, 우리 여기서 조금 쉬었다 갈까?"
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 5,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 16: knit vest and pleated trousers in muted burgundy, olive, stone gray and sky blue. Distinct detail: square glasses and gray brows"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1828,
      "y": 1834,
      "stationBounds": [
        1793,
        1799,
        1863,
        1869
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-16",
      "name": "루이사",
      "region": "peru",
      "zone": "peru",
      "age": 73,
      "ageCategory": "older adult",
      "genderPresentation": "feminine",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -1.5642203647481925,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 16,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 5,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 얘기하다가 쉬는 시간을 놓쳤어요."
        },
        {
          "to": "player",
          "text": "이제는 그늘을 찾아 앉으려고요. "
        },
        {
          "to": "companion",
          "text": "페드리코, 아까 하던 얘기 어디까지 했지?"
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 5,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 17: collared blouse and long modest skirt in muted burgundy, olive, stone gray and sky blue. Distinct detail: tiny brooch"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1963,
      "y": 1834,
      "stationBounds": [
        1928,
        1799,
        1998,
        1869
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "peru-v3-17",
      "name": "레나토",
      "region": "peru",
      "zone": "peru",
      "age": 36,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "거리 판매자",
      "relation": "거리 이웃",
      "context": "거리 이웃",
      "scene": "거리 이웃",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.3877442907227317,
      "pose": "standing",
      "art": "world-v3-peru",
      "row": 17,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 3,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "편하게 구경하세요. 고르시기 전에 가까이 보셔도 돼요."
        },
        {
          "to": "player",
          "text": "작은 선물을 찾는 손님이 많이 들러요. "
        },
        {
          "to": "player",
          "text": "저는 레나토예요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 3,
        "wardrobe": "modern highland visitor layers: fitted warm cardigan, simple knit pullover or light rain jacket, plain trousers, small backpack, sensible closed shoes; no military/explorer patches and no ancient Inca dress. Variant 18: rolled sleeve shirt with small waist apron in muted burgundy, olive, stone gray and sky blue. Distinct detail: postcards in a basket"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2122,
      "y": 3186,
      "stationBounds": [
        2087,
        3151,
        2157,
        3221
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
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
      },
      "name": "마리아",
      "age": 24,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 마리아예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 먼저 도착했어요. 천천히 둘러보세요."
        },
        {
          "to": "companion",
          "text": "잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 0",
        "wardrobe": "음악 문화 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 0",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "파울루",
      "age": 31,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 파울루예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "막 준비를 마쳤어요. 궁금한 게 있으면 편하게 말씀하세요."
        },
        {
          "to": "companion",
          "text": "이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 1",
        "wardrobe": "축제 무대 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 1",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "레오나르두",
      "age": 38,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 레오나르두예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "잠깐 정리하고 있었어요. 이야기 나눌 시간은 있어요."
        },
        {
          "to": "companion",
          "text": "나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 2",
        "wardrobe": "리듬·음악 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 2",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "헬레나",
      "age": 45,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 헬레나예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "지도를 접으려던 참이에요. 같이 보실래요?"
        },
        {
          "to": "companion",
          "text": "잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 3",
        "wardrobe": "아마존 지리 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 3",
        "ageCategory": "adult",
        "group": "안내팀"
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
      "placementReason": "함께 연주하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "주앙",
      "age": 52,
      "ageCategory": "adult",
      "relation": "함께 연주하는 친구",
      "lines": [
        {
          "to": "player",
          "text": "간식은 챙겼는데 물을 벌써 다 마셨네요."
        },
        {
          "to": "player",
          "text": "손에 든 게 있어서 인사는 고개로 할게요."
        },
        {
          "to": "companion",
          "text": "브루나, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 4",
        "wardrobe": "탐보링 연주 기존 전용 의상",
        "hairstyle": "existing distinct source character 4",
        "ageCategory": "adult",
        "group": "함께 연주하는 친구"
      }
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
      "placementReason": "함께 연주하는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "브루나",
      "age": 59,
      "ageCategory": "adult",
      "relation": "함께 연주하는 친구",
      "lines": [
        {
          "to": "player",
          "text": "오늘은 제가 가고 싶은 길을 고르기로 했어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구가 저쪽을 보고 있어요."
        },
        {
          "to": "companion",
          "text": "주앙, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 5",
        "wardrobe": "수르두 북 연주 기존 전용 의상",
        "hairstyle": "existing distinct source character 5",
        "ageCategory": "adult",
        "group": "함께 연주하는 친구"
      }
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
      "placementReason": "춤추는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "카이우",
      "age": 27,
      "ageCategory": "adult",
      "relation": "춤추는 친구",
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만나면 늘 시간이 금방 가네요."
        },
        {
          "to": "player",
          "text": "오늘은 조금 일찍 나왔어요. 덕분에 여유가 있네요."
        },
        {
          "to": "companion",
          "text": "비앙카, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 6",
        "wardrobe": "긴 치마로 춤추기 기존 전용 의상",
        "hairstyle": "existing distinct source character 6",
        "ageCategory": "adult",
        "group": "춤추는 친구"
      }
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
      "placementReason": "춤추는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "비앙카",
      "age": 34,
      "ageCategory": "adult",
      "relation": "춤추는 친구",
      "lines": [
        {
          "to": "player",
          "text": "저쪽 구경도 하고 왔어요. 생각보다 오래 걸었네요."
        },
        {
          "to": "player",
          "text": "잠깐 쉬면서 일행을 기다려요."
        },
        {
          "to": "companion",
          "text": "카이우, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 7",
        "wardrobe": "무릎 굽혀 리듬 타기 기존 전용 의상",
        "hairstyle": "existing distinct source character 7",
        "ageCategory": "adult",
        "group": "춤추는 친구"
      }
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
      "placementReason": "박수와 리듬 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "오타비우",
      "age": 41,
      "ageCategory": "adult",
      "relation": "박수와 리듬 부부",
      "lines": [
        {
          "to": "player",
          "text": "저는 여기서 쉬면서 사람들 구경하는 게 좋아요."
        },
        {
          "to": "player",
          "text": "지나가시는 데 불편하면 조금 비켜 드릴게요."
        },
        {
          "to": "companion",
          "text": "루아나, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 8",
        "wardrobe": "박수치며 웃기 기존 전용 의상",
        "hairstyle": "existing distinct source character 8",
        "ageCategory": "adult",
        "group": "박수와 리듬 부부"
      }
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
      "placementReason": "박수와 리듬 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "루아나",
      "age": 48,
      "ageCategory": "adult",
      "relation": "박수와 리듬 부부",
      "lines": [
        {
          "to": "player",
          "text": "천천히 걸으니 평소에 안 보이던 것도 보이네요."
        },
        {
          "to": "player",
          "text": "밖에서 만나니 할 얘기가 더 많네요."
        },
        {
          "to": "companion",
          "text": "오타비우, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 9",
        "wardrobe": "셰이커 흔들기 기존 전용 의상",
        "hairstyle": "existing distinct source character 9",
        "ageCategory": "adult",
        "group": "박수와 리듬 부부"
      }
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
      "placementReason": "축제 자원봉사자 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "아르투르",
      "age": 55,
      "ageCategory": "adult",
      "relation": "축제 자원봉사자",
      "lines": [
        {
          "to": "player",
          "text": "안녕하세요. 오늘 본 것들을 수첩에 적고 있어요."
        },
        {
          "to": "player",
          "text": "가방을 열어 보니 작은 물건들이 잔뜩 있네요."
        },
        {
          "to": "companion",
          "text": "루시아나, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 10",
        "wardrobe": "리본 흔들며 인사 기존 전용 의상",
        "hairstyle": "existing distinct source character 10",
        "ageCategory": "adult",
        "group": "축제 자원봉사자"
      }
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
      "placementReason": "축제 자원봉사자 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "루시아나",
      "age": 62,
      "ageCategory": "older adult",
      "relation": "축제 자원봉사자",
      "lines": [
        {
          "to": "player",
          "text": "서두르지 않으셔도 돼요. 저도 그냥 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 한 장 찍고 마저 걸어가려고요."
        },
        {
          "to": "companion",
          "text": "아르투르, 잠깐만, 지도 방향부터 돌려 보자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil.png row 11",
        "wardrobe": "가랜드 준비 기존 전용 의상",
        "hairstyle": "existing distinct source character 11",
        "ageCategory": "older adult",
        "group": "축제 자원봉사자"
      }
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
      "placementReason": "공연 보는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "페르난다",
      "age": 30,
      "ageCategory": "adult",
      "relation": "공연 보는 가족",
      "lines": [
        {
          "to": "player",
          "text": "아이가 제 손을 잡고 앞장서네요."
        },
        {
          "to": "player",
          "text": "가족사진은 아직 한 장도 못 골랐어요."
        },
        {
          "to": "companion",
          "text": "구스타부, 방금 웃어서 흔들렸어. 한 번만 더 찍자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 0",
        "wardrobe": "가족 사진 찍기 기존 전용 의상",
        "hairstyle": "existing distinct source character 0",
        "ageCategory": "adult",
        "group": "공연 보는 가족"
      }
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
      "placementReason": "공연 보는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "구스타부",
      "age": 37,
      "ageCategory": "adult",
      "relation": "공연 보는 가족",
      "lines": [
        {
          "to": "player",
          "text": "가족사진을 찍으려는데 다들 다른 곳을 봐요."
        },
        {
          "to": "player",
          "text": "아이가 가리키는 곳을 같이 보고 있어요."
        },
        {
          "to": "companion",
          "text": "페르난다, 다음엔 나도 같이 데려가."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 1",
        "wardrobe": "공연 가리키기 기존 전용 의상",
        "hairstyle": "existing distinct source character 1",
        "ageCategory": "adult",
        "group": "공연 보는 가족"
      }
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
      "placementReason": "공연 보는 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "지오바나",
      "age": 10,
      "ageCategory": "child",
      "relation": "공연 보는 가족",
      "lines": [
        {
          "to": "player",
          "text": "조금 더 걷고 나서 간식을 먹기로 했어요."
        },
        {
          "to": "player",
          "text": "구경할 게 많아서 자꾸 멈추게 돼요."
        },
        {
          "to": "companion",
          "text": "페르난다, 다 읽었어. 뒤에 이야기도 궁금하더라."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 2",
        "wardrobe": "귀 보호구 쓰고 응원 기존 전용 의상",
        "hairstyle": "existing distinct source character 2",
        "ageCategory": "child",
        "group": "공연 보는 가족"
      }
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
      "placementReason": "함께 즐기는 관객 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "엔주",
      "age": 51,
      "ageCategory": "adult",
      "relation": "함께 즐기는 관객",
      "lines": [
        {
          "to": "player",
          "text": "저는 돌아가는 길도 기억하고 있어요."
        },
        {
          "to": "player",
          "text": "저는 여기서 쉬고 갈래요."
        },
        {
          "to": "companion",
          "text": "베아트리스, 우리 여기서 조금 쉬었다 갈까?"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 3",
        "wardrobe": "박수치며 관람 기존 전용 의상",
        "hairstyle": "existing distinct source character 3",
        "ageCategory": "adult",
        "group": "함께 즐기는 관객"
      }
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
      "placementReason": "함께 즐기는 관객 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "베아트리스",
      "age": 67,
      "ageCategory": "older adult",
      "relation": "함께 즐기는 관객",
      "lines": [
        {
          "to": "player",
          "text": "할머니랑 같이 오니까 더 재미있어요."
        },
        {
          "to": "player",
          "text": "지금은 바람이 잘 통하는 자리를 찾는 중이에요."
        },
        {
          "to": "companion",
          "text": "엔주, 아까 하던 얘기 어디까지 했지?"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 4",
        "wardrobe": "휠체어에서 손 흔들기 기존 전용 의상",
        "hairstyle": "existing distinct source character 4",
        "ageCategory": "older adult",
        "group": "함께 즐기는 관객"
      }
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
      "placementReason": "함께 즐기는 관객 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "하비",
      "age": 26,
      "ageCategory": "adult",
      "relation": "함께 즐기는 관객",
      "lines": [
        {
          "to": "player",
          "text": "친구 그림을 구경하다가 제 것도 그려봤어요."
        },
        {
          "to": "player",
          "text": "안경을 닦다가 일행을 놓칠 뻔했네요."
        },
        {
          "to": "companion",
          "text": "엔주, 이쪽 바구니도 같이 정리할까?"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 5",
        "wardrobe": "프로그램 읽기 기존 전용 의상",
        "hairstyle": "existing distinct source character 5",
        "ageCategory": "adult",
        "group": "함께 즐기는 관객"
      }
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
      "placementReason": "축제에서 만난 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "니콜리",
      "age": 33,
      "ageCategory": "adult",
      "relation": "축제에서 만난 친구",
      "lines": [
        {
          "to": "player",
          "text": "밖에 나오니 기분이 좋네요. 잠깐 쉬고 있어요."
        },
        {
          "to": "player",
          "text": "오늘은 친구가 길을 안내해 준대요."
        },
        {
          "to": "companion",
          "text": "마르셀루, 잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 6",
        "wardrobe": "친구와 지도 보기 기존 전용 의상",
        "hairstyle": "existing distinct source character 6",
        "ageCategory": "adult",
        "group": "축제에서 만난 친구"
      }
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
      "placementReason": "축제에서 만난 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "마르셀루",
      "age": 40,
      "ageCategory": "adult",
      "relation": "축제에서 만난 친구",
      "lines": [
        {
          "to": "player",
          "text": "서로 찍은 사진을 보여 주는 중이에요."
        },
        {
          "to": "player",
          "text": "손뼉 치다 보니 시간이 금방 가네요."
        },
        {
          "to": "companion",
          "text": "니콜리, 이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 7",
        "wardrobe": "웃으며 박수 기존 전용 의상",
        "hairstyle": "existing distinct source character 7",
        "ageCategory": "adult",
        "group": "축제에서 만난 친구"
      }
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
      "placementReason": "전망대에서 쉬는 방문객 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "데보라",
      "age": 47,
      "ageCategory": "adult",
      "relation": "전망대에서 쉬는 방문객",
      "lines": [
        {
          "to": "player",
          "text": "여기서 친구 기다리다 한 바퀴 더 돌았어요."
        },
        {
          "to": "player",
          "text": "물 한 모금 마시고 다시 둘러보려고요."
        },
        {
          "to": "companion",
          "text": "마우루, 나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 8",
        "wardrobe": "전망대에서 물 마시기 기존 전용 의상",
        "hairstyle": "existing distinct source character 8",
        "ageCategory": "adult",
        "group": "전망대에서 쉬는 방문객"
      }
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
      "placementReason": "전망대에서 쉬는 방문객 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "마우루",
      "age": 54,
      "ageCategory": "adult",
      "relation": "전망대에서 쉬는 방문객",
      "lines": [
        {
          "to": "player",
          "text": "오늘은 마음에 드는 장면만 골라 찍고 있어요."
        },
        {
          "to": "player",
          "text": "모자를 잠깐 벗으니 좀 시원하네요."
        },
        {
          "to": "companion",
          "text": "데보라, 잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 9",
        "wardrobe": "모자 들고 쉬기 기존 전용 의상",
        "hairstyle": "existing distinct source character 9",
        "ageCategory": "adult",
        "group": "전망대에서 쉬는 방문객"
      }
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
      "placementReason": "음악과 무대 준비 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "클라우지아",
      "age": 61,
      "ageCategory": "older adult",
      "relation": "음악과 무대 준비",
      "lines": [
        {
          "to": "player",
          "text": "구경하느라 약속한 시간을 잊을 뻔했어요."
        },
        {
          "to": "player",
          "text": "준비가 다 끝나면 저도 구경하려고요."
        },
        {
          "to": "companion",
          "text": "호제리우, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 10",
        "wardrobe": "두 셰이커 연주 기존 전용 의상",
        "hairstyle": "existing distinct source character 10",
        "ageCategory": "older adult",
        "group": "음악과 무대 준비"
      }
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
      "placementReason": "음악과 무대 준비 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "호제리우",
      "age": 29,
      "ageCategory": "adult",
      "relation": "음악과 무대 준비",
      "lines": [
        {
          "to": "player",
          "text": "아이들이랑 같이 오면 자주 멈추게 되네요."
        },
        {
          "to": "player",
          "text": "마지막으로 이것만 정리하고 쉬려고요."
        },
        {
          "to": "companion",
          "text": "클라우지아, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/brazil-extra.png row 11",
        "wardrobe": "무대 천 정리 기존 전용 의상",
        "hairstyle": "existing distinct source character 11",
        "ageCategory": "adult",
        "group": "음악과 무대 준비"
      }
    },
    {
      "id": "brazil-v3-0",
      "name": "아드리아나",
      "region": "brazil",
      "zone": "brazil",
      "age": 24,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "삼바 공연자",
      "relation": "새 삼바 공연팀",
      "context": "새 삼바 공연팀",
      "scene": "새 삼바 공연팀",
      "group": "resident",
      "height": 1.95,
      "radius": 25,
      "heading": -0.46142484555933067,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 0,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 0,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 아드리아나예요. 곧 같이 시작해요."
        },
        {
          "to": "player",
          "text": "잠깐 보고 가셔도 좋아요. 앞쪽 길은 조금만 비워 주세요."
        },
        {
          "to": "companion",
          "text": "하파엘, 첫 박자 맞춰 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 0,
        "wardrobe": "emerald and yellow carnival outfit: SMALL semicircular green/yellow feather crown no wider than 1.25 head widths, gold gem motif on full-coverage sleeveless tunic, modest layered knee-length feather skirt over shorts, feather shoulder accents, small feather fan in each hand; keep feather ornament small enough not to obscure face or nearby people; no realistic body/skin exposure"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "performance": {
        "kind": "samba",
        "offset": 0
      },
      "x": 2420,
      "y": 1877,
      "stationBounds": [
        2385,
        1842,
        2455,
        1912
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-1",
      "name": "하파엘",
      "region": "brazil",
      "zone": "brazil",
      "age": 27,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "삼바 공연자",
      "relation": "새 삼바 공연팀",
      "context": "새 삼바 공연팀",
      "scene": "새 삼바 공연팀",
      "group": "resident",
      "height": 1.95,
      "radius": 25,
      "heading": -1.5712328437184873,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 1,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 2,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 하파엘이에요. 곧 같이 시작해요."
        },
        {
          "to": "player",
          "text": "잠깐 보고 가셔도 좋아요. 앞쪽 길은 조금만 비워 주세요."
        },
        {
          "to": "companion",
          "text": "아드리아나, 타이나, 첫 박자 맞춰 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 2,
        "wardrobe": "blue and green carnival outfit: asymmetrical small feather comb on one side of hair, blue fitted high-neck tunic with green gem belt, layered short cape of feathers at shoulders, wide green knee shorts, one small feather fan; different silhouette from row above; keep feather ornament small enough not to obscure face or nearby people; no realistic body/skin exposure"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "performance": {
        "kind": "samba",
        "offset": 1
      },
      "x": 2420,
      "y": 2012,
      "stationBounds": [
        2385,
        1977,
        2455,
        2047
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-2",
      "name": "타이나",
      "region": "brazil",
      "zone": "brazil",
      "age": 30,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "삼바 공연자",
      "relation": "새 삼바 공연팀",
      "context": "새 삼바 공연팀",
      "scene": "새 삼바 공연팀",
      "group": "resident",
      "height": 1.95,
      "radius": 20,
      "heading": -2.680340804753345,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 2,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 4,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 타이나예요. 곧 같이 시작해요."
        },
        {
          "to": "player",
          "text": "잠깐 보고 가셔도 좋아요. 앞쪽 길은 조금만 비워 주세요."
        },
        {
          "to": "companion",
          "text": "아드리아나, 비토르, 첫 박자 맞춰 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 4,
        "wardrobe": "gold decorated carnival outfit: thin gold headband with three small upright plumes, cream-and-gold long-sleeve top, dark green trousers, feather hip bustle only on one side, small wrist plumes, no feather crown fan; keep feather ornament small enough not to obscure face or nearby people; no realistic body/skin exposure"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "performance": {
        "kind": "samba",
        "offset": 2
      },
      "x": 2420,
      "y": 2147,
      "stationBounds": [
        2385,
        2112,
        2455,
        2182
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-3",
      "name": "비토르",
      "region": "brazil",
      "zone": "brazil",
      "age": 33,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "삼바 공연자",
      "relation": "새 삼바 공연팀",
      "context": "새 삼바 공연팀",
      "scene": "새 삼바 공연팀",
      "group": "resident",
      "height": 1.95,
      "radius": 20,
      "heading": 0.4660386794823943,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 3,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 1,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 비토르예요. 곧 같이 시작해요."
        },
        {
          "to": "player",
          "text": "잠깐 보고 가셔도 좋아요. 앞쪽 길은 조금만 비워 주세요."
        },
        {
          "to": "companion",
          "text": "아드리아나, 카롤리나, 첫 박자 맞춰 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 1,
        "wardrobe": "green-yellow carnival outfit: modest jewel-patterned vest over cream shirt, flowing green/yellow knee-length overskirt over shorts, feather collar behind shoulders, small radial feather head ornament, held feather ribbon props; keep feather ornament small enough not to obscure face or nearby people; no realistic body/skin exposure"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "performance": {
        "kind": "samba",
        "offset": 3
      },
      "x": 2285,
      "y": 1877,
      "stationBounds": [
        2250,
        1842,
        2320,
        1912
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-4",
      "name": "카롤리나",
      "region": "brazil",
      "zone": "brazil",
      "age": 36,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "삼바 공연자",
      "relation": "새 삼바 공연팀",
      "context": "새 삼바 공연팀",
      "scene": "새 삼바 공연팀",
      "group": "resident",
      "height": 1.95,
      "radius": 25,
      "heading": 1.5712278381954947,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 4,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 3,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 카롤리나예요. 곧 같이 시작해요."
        },
        {
          "to": "player",
          "text": "잠깐 보고 가셔도 좋아요. 앞쪽 길은 조금만 비워 주세요."
        },
        {
          "to": "companion",
          "text": "아드리아나, 이카루, 첫 박자 맞춰 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 3,
        "wardrobe": "blue-green carnival outfit: low feather tiara, emerald high-neck long sleeve tunic, blue asymmetric pleated skirt over shorts, feather wrist cuffs and small gold belt ornaments, no shoulder cape; keep feather ornament small enough not to obscure face or nearby people; no realistic body/skin exposure"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "performance": {
        "kind": "samba",
        "offset": 4
      },
      "x": 2285,
      "y": 2012,
      "stationBounds": [
        2250,
        1977,
        2320,
        2047
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-5",
      "name": "이카루",
      "region": "brazil",
      "zone": "brazil",
      "age": 39,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "삼바 공연자",
      "relation": "새 삼바 공연팀",
      "context": "새 삼바 공연팀",
      "scene": "새 삼바 공연팀",
      "group": "resident",
      "height": 1.95,
      "radius": 25,
      "heading": 2.6757281721197854,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 5,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 5,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 이카루예요. 곧 같이 시작해요."
        },
        {
          "to": "player",
          "text": "잠깐 보고 가셔도 좋아요. 앞쪽 길은 조금만 비워 주세요."
        },
        {
          "to": "companion",
          "text": "아드리아나, 첫 박자 맞춰 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 5,
        "wardrobe": "gold and teal carnival outfit: small swept-back feather comb, teal sleeveless full-coverage top, gold vest-like overlay, knee-length teal trousers, fan-shaped feather hip ornaments, small hand feather shaker; keep feather ornament small enough not to obscure face or nearby people; no realistic body/skin exposure"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "performance": {
        "kind": "samba",
        "offset": 5
      },
      "x": 2285,
      "y": 2147,
      "stationBounds": [
        2250,
        2112,
        2320,
        2182
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-6",
      "name": "조아나",
      "region": "brazil",
      "zone": "brazil",
      "age": 38,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "보호자 관객",
      "relation": "새 공연 가족",
      "context": "새 공연 가족",
      "scene": "새 공연 가족",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7847918824005046,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 6,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 2,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "아이들이 먼저 좋은 자리를 찾았어요."
        },
        {
          "to": "player",
          "text": "앞에 선 분들 가리지 않게 같이 서 있으려고요."
        },
        {
          "to": "companion",
          "text": "미라, 아이들 잘 보이게 이쪽에 같이 서자."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 2,
        "wardrobe": "modern Rio everyday outfit for civilians, breathable cotton, modest midi skirts or relaxed trousers, light knit top, comfortable shoes; do not dress civilians in carnival costumes. Variant 7: striped crewneck and simple shorts in soft coral, dusty turquoise, sage, cream and sand. Distinct detail: water flask"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "x": 3055,
      "y": 2531,
      "stationBounds": [
        3020,
        2496,
        3090,
        2566
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-7",
      "name": "미라",
      "region": "brazil",
      "zone": "brazil",
      "age": 41,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "보호자 관객",
      "relation": "새 공연 가족",
      "context": "새 공연 가족",
      "scene": "새 공연 가족",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.7852605873639119,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 7,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 4,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "가족 사진은 공연이 끝나고 찍기로 했어요."
        },
        {
          "to": "player",
          "text": "지금 찍으면 다들 무대만 보겠어요."
        },
        {
          "to": "companion",
          "text": "조아나, 공연 끝나고 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 4,
        "wardrobe": "modern Rio everyday outfit for civilians, breathable cotton, modest midi skirts or relaxed trousers, light knit top, comfortable shoes; do not dress civilians in carnival costumes. Variant 8: soft short sleeve shirt and ankle pants in soft coral, dusty turquoise, sage, cream and sand. Distinct detail: small cloth backpack"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "x": 3190,
      "y": 2531,
      "stationBounds": [
        3155,
        2496,
        3225,
        2566
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-8",
      "name": "베니시우스",
      "region": "brazil",
      "zone": "brazil",
      "age": 9,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이 관객",
      "relation": "새 공연 가족",
      "context": "새 공연 가족",
      "scene": "새 공연 가족",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 2.3560567472151277,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 8,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 1,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "저도 박자 맞출 수 있어요. 아까부터 세고 있었어요."
        },
        {
          "to": "player",
          "text": "집에서도 이 동작 해 봐도 될까요?"
        },
        {
          "to": "companion",
          "text": "알리시, 나랑 같이 손뼉 쳐 봐."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 1,
        "wardrobe": "modern Rio everyday outfit for civilians, breathable cotton, modest midi skirts or relaxed trousers, light knit top, comfortable shoes; do not dress civilians in carnival costumes. Variant 9: short casual jacket and contrast plain top in soft coral, dusty turquoise, sage, cream and sand. Distinct detail: theater or museum leaflet"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "x": 3055,
      "y": 2666,
      "stationBounds": [
        3020,
        2631,
        3090,
        2701
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-9",
      "name": "알리시",
      "region": "brazil",
      "zone": "brazil",
      "age": 6,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이 관객",
      "relation": "새 공연 가족",
      "context": "새 공연 가족",
      "scene": "새 공연 가족",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -2.3555880422518367,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 9,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 3,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "옷에 깃털이 있어요. 저거 봤어요?"
        },
        {
          "to": "player",
          "text": "저도 손뼉 같이 칠래요."
        },
        {
          "to": "companion",
          "text": "베니시우스, 저기 깃털 움직이는 거 봐!"
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 3,
        "wardrobe": "modern Rio everyday outfit for civilians, breathable cotton, modest midi skirts or relaxed trousers, light knit top, comfortable shoes; do not dress civilians in carnival costumes. Variant 10: knitted short-sleeve top and A-line midi skirt in soft coral, dusty turquoise, sage, cream and sand. Distinct detail: small woven bag"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "x": 3190,
      "y": 2666,
      "stationBounds": [
        3155,
        2631,
        3225,
        2701
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-10",
      "name": "도나",
      "region": "brazil",
      "zone": "brazil",
      "age": 69,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 관객",
      "relation": "새 노년 친구",
      "context": "새 노년 친구",
      "scene": "새 노년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.006575962046700832,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 10,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 0,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 공연 보러 나왔어요."
        },
        {
          "to": "player",
          "text": "앉을 자리를 먼저 봐 두려고요."
        },
        {
          "to": "companion",
          "text": "발데르, 우리 조금 쉬었다가 또 볼까?"
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 0,
        "wardrobe": "modern Rio everyday outfit for civilians, breathable cotton, modest midi skirts or relaxed trousers, light knit top, comfortable shoes; do not dress civilians in carnival costumes. Variant 11: open overshirt and tapered cotton pants in soft coral, dusty turquoise, sage, cream and sand. Distinct detail: notebook"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "x": 1731,
      "y": 2122,
      "stationBounds": [
        1696,
        2087,
        1766,
        2157
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-11",
      "name": "발데르",
      "region": "brazil",
      "zone": "brazil",
      "age": 72,
      "ageCategory": "older adult",
      "genderPresentation": "masculine",
      "role": "노년 관객",
      "relation": "새 노년 친구",
      "context": "새 노년 친구",
      "scene": "새 노년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -3.134947448907719,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 11,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 2,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "음악이 들려서 이쪽으로 와 봤어요."
        },
        {
          "to": "player",
          "text": "친구도 금방 따라올 거예요."
        },
        {
          "to": "companion",
          "text": "도나, 아까 그 박자, 나도 기억나."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 2,
        "wardrobe": "modern Rio everyday outfit for civilians, breathable cotton, modest midi skirts or relaxed trousers, light knit top, comfortable shoes; do not dress civilians in carnival costumes. Variant 12: plain polo and cloth shoulder bag in soft coral, dusty turquoise, sage, cream and sand. Distinct detail: cloth cap held in hand"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "x": 1731,
      "y": 2257,
      "stationBounds": [
        1696,
        2222,
        1766,
        2292
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-12",
      "name": "세우",
      "region": "brazil",
      "zone": "brazil",
      "age": 20,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "친구 관객",
      "relation": "새 관객 친구",
      "context": "새 관객 친구",
      "scene": "새 관객 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.00018042561886556836,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 12,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 4,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구들 다 모였나 세어 보는 중이에요."
        },
        {
          "to": "player",
          "text": "한 명은 사진 찍느라 뒤처졌어요."
        },
        {
          "to": "companion",
          "text": "티아, 한 명만 더 오면 다 모인다."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 4,
        "wardrobe": "modern Rio everyday outfit for civilians, breathable cotton, modest midi skirts or relaxed trousers, light knit top, comfortable shoes; do not dress civilians in carnival costumes. Variant 13: thin cotton sweater and straight jeans in soft coral, dusty turquoise, sage, cream and sand. Distinct detail: wrist friendship band"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "x": 3145,
      "y": 1742,
      "stationBounds": [
        3110,
        1707,
        3180,
        1777
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-13",
      "name": "티아",
      "region": "brazil",
      "zone": "brazil",
      "age": 22,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구 관객",
      "relation": "새 관객 친구",
      "context": "새 관객 친구",
      "scene": "새 관객 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.934020009309587,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 13,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 1,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "아까 찍은 사진을 친구한테 보여 주고 있어요."
        },
        {
          "to": "player",
          "text": "잘 나온 걸 고르는 게 더 어렵네요."
        },
        {
          "to": "companion",
          "text": "세우, 방금 사진 보여 줘. 나 눈 감았어?"
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 1,
        "wardrobe": "modern Rio everyday outfit for civilians, breathable cotton, modest midi skirts or relaxed trousers, light knit top, comfortable shoes; do not dress civilians in carnival costumes. Variant 14: short sleeve blouse with narrow woven sash in soft coral, dusty turquoise, sage, cream and sand. Distinct detail: striped socks"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "x": 3145,
      "y": 1877,
      "stationBounds": [
        3110,
        1842,
        3180,
        1912
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-14",
      "name": "닐루",
      "region": "brazil",
      "zone": "brazil",
      "age": 21,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "친구 관객",
      "relation": "새 관객 친구",
      "context": "새 관객 친구",
      "scene": "새 관객 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -3.1414125365823007,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 14,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 3,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "오늘은 마지막까지 보고 가기로 했어요."
        },
        {
          "to": "player",
          "text": "집에 가는 시간은 다 같이 맞췄어요."
        },
        {
          "to": "companion",
          "text": "세우, 돌아갈 때도 같이 가자."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 3,
        "wardrobe": "modern Rio everyday outfit for civilians, breathable cotton, modest midi skirts or relaxed trousers, light knit top, comfortable shoes; do not dress civilians in carnival costumes. Variant 15: soft zip jacket without explorer patches and knee shorts in soft coral, dusty turquoise, sage, cream and sand. Distinct detail: small book"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "x": 3145,
      "y": 2012,
      "stationBounds": [
        3110,
        1977,
        3180,
        2047
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "brazil-v3-15",
      "name": "리타",
      "region": "brazil",
      "zone": "brazil",
      "age": 35,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "기념품 판매자",
      "relation": "기념품 이웃",
      "context": "기념품 이웃",
      "scene": "기념품 이웃",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.7576465329532542,
      "pose": "standing",
      "art": "world-v3-brazil",
      "row": 15,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 5,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "작은 선물 찾으세요? 천천히 둘러보세요."
        },
        {
          "to": "player",
          "text": "마음에 드는 건 가까이 보여 드릴게요."
        },
        {
          "to": "player",
          "text": "저는 리타예요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 5,
        "wardrobe": "modern Rio everyday outfit for civilians, breathable cotton, modest midi skirts or relaxed trousers, light knit top, comfortable shoes; do not dress civilians in carnival costumes. Variant 16: knit vest and pleated trousers in soft coral, dusty turquoise, sage, cream and sand. Distinct detail: square glasses and gray brows"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive formation, all learning routes and near-talk access passed",
        "interaction": "proximity, modal block and 3 audience-tagged lines tested"
      },
      "x": 3178,
      "y": 2303,
      "stationBounds": [
        3143,
        2268,
        3213,
        2338
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
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
      },
      "name": "프란시스카",
      "age": 24,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 프란시스카예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 먼저 도착했어요. 천천히 둘러보세요."
        },
        {
          "to": "companion",
          "text": "잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 0",
        "wardrobe": "기후·농업 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 0",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "벤하민",
      "age": 31,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 벤하민이에요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "막 준비를 마쳤어요. 궁금한 게 있으면 편하게 말씀하세요."
        },
        {
          "to": "companion",
          "text": "이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 1",
        "wardrobe": "생산 활동 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 1",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "안토니아",
      "age": 38,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 안토니아예요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "잠깐 정리하고 있었어요. 이야기 나눌 시간은 있어요."
        },
        {
          "to": "companion",
          "text": "나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 2",
        "wardrobe": "광물 자원 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 2",
        "ageCategory": "adult",
        "group": "안내팀"
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
      },
      "name": "크리스토발",
      "age": 45,
      "ageCategory": "adult",
      "relation": "안내팀",
      "lines": [
        {
          "to": "player",
          "text": "반가워요. 크리스토발이에요. 잠깐 이야기 나누고 가세요."
        },
        {
          "to": "player",
          "text": "지도를 접으려던 참이에요. 같이 보실래요?"
        },
        {
          "to": "companion",
          "text": "잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 3",
        "wardrobe": "과수 농업 안내 기존 전용 의상",
        "hairstyle": "existing distinct source character 3",
        "ageCategory": "adult",
        "group": "안내팀"
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
      "placementReason": "광장에서 쉬는 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "마이테",
      "age": 67,
      "ageCategory": "older adult",
      "relation": "광장에서 쉬는 부부",
      "lines": [
        {
          "to": "player",
          "text": "간식은 챙겼는데 물을 벌써 다 마셨네요."
        },
        {
          "to": "player",
          "text": "손에 든 게 있어서 인사는 고개로 할게요."
        },
        {
          "to": "companion",
          "text": "비센테, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 4",
        "wardrobe": "책 읽으며 쉬기 기존 전용 의상",
        "hairstyle": "existing distinct source character 4",
        "ageCategory": "older adult",
        "group": "광장에서 쉬는 부부"
      }
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
      "placementReason": "광장에서 쉬는 부부 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "비센테",
      "age": 59,
      "ageCategory": "adult",
      "relation": "광장에서 쉬는 부부",
      "lines": [
        {
          "to": "player",
          "text": "오늘은 제가 가고 싶은 길을 고르기로 했어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구가 저쪽을 보고 있어요."
        },
        {
          "to": "companion",
          "text": "마이테, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 5",
        "wardrobe": "음료 들고 대화 기존 전용 의상",
        "hairstyle": "existing distinct source character 5",
        "ageCategory": "adult",
        "group": "광장에서 쉬는 부부"
      }
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
      "placementReason": "엽서 고르는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "호세파",
      "age": 27,
      "ageCategory": "adult",
      "relation": "엽서 고르는 친구",
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만나면 늘 시간이 금방 가네요."
        },
        {
          "to": "player",
          "text": "오늘은 조금 일찍 나왔어요. 덕분에 여유가 있네요."
        },
        {
          "to": "companion",
          "text": "아구스틴, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 6",
        "wardrobe": "엽서 고르기 기존 전용 의상",
        "hairstyle": "existing distinct source character 6",
        "ageCategory": "adult",
        "group": "엽서 고르는 친구"
      }
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
      "placementReason": "엽서 고르는 친구 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "아구스틴",
      "age": 34,
      "ageCategory": "adult",
      "relation": "엽서 고르는 친구",
      "lines": [
        {
          "to": "player",
          "text": "저쪽 구경도 하고 왔어요. 생각보다 오래 걸었네요."
        },
        {
          "to": "player",
          "text": "잠깐 쉬면서 일행을 기다려요."
        },
        {
          "to": "companion",
          "text": "호세파, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 7",
        "wardrobe": "카메라 사진 보여주기 기존 전용 의상",
        "hairstyle": "existing distinct source character 7",
        "ageCategory": "adult",
        "group": "엽서 고르는 친구"
      }
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
      "placementReason": "문화센터 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "힐데",
      "age": 41,
      "ageCategory": "adult",
      "relation": "문화센터 나들이 가족",
      "lines": [
        {
          "to": "player",
          "text": "저는 여기서 쉬면서 사람들 구경하는 게 좋아요."
        },
        {
          "to": "player",
          "text": "지나가시는 데 불편하면 조금 비켜 드릴게요."
        },
        {
          "to": "companion",
          "text": "로돌포, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 8",
        "wardrobe": "문화센터 지도 보기 기존 전용 의상",
        "hairstyle": "existing distinct source character 8",
        "ageCategory": "adult",
        "group": "문화센터 나들이 가족"
      }
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
      "placementReason": "문화센터 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "로돌포",
      "age": 48,
      "ageCategory": "adult",
      "relation": "문화센터 나들이 가족",
      "lines": [
        {
          "to": "player",
          "text": "천천히 걸으니 평소에 안 보이던 것도 보이네요."
        },
        {
          "to": "player",
          "text": "밖에서 만나니 할 얘기가 더 많네요."
        },
        {
          "to": "companion",
          "text": "힐데, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 9",
        "wardrobe": "아이에게 표지 가리키기 기존 전용 의상",
        "hairstyle": "existing distinct source character 9",
        "ageCategory": "adult",
        "group": "문화센터 나들이 가족"
      }
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
      "placementReason": "문화센터 나들이 가족 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "도미니카",
      "age": 10,
      "ageCategory": "child",
      "relation": "문화센터 나들이 가족",
      "lines": [
        {
          "to": "player",
          "text": "안녕하세요. 오늘 본 것들을 수첩에 적고 있어요."
        },
        {
          "to": "player",
          "text": "가방을 열어 보니 작은 물건들이 잔뜩 있네요."
        },
        {
          "to": "companion",
          "text": "힐데, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 10",
        "wardrobe": "엽서 그림 보기 기존 전용 의상",
        "hairstyle": "existing distinct source character 10",
        "ageCategory": "child",
        "group": "문화센터 나들이 가족"
      }
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
      "placementReason": "퇴근길 주민 장면을 담당 장소 안의 넓은 보행 공간에 모았습니다.",
      "name": "가스톤",
      "age": 62,
      "ageCategory": "older adult",
      "relation": "퇴근길 주민",
      "lines": [
        {
          "to": "player",
          "text": "서두르지 않으셔도 돼요. 저도 그냥 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 한 장 찍고 마저 걸어가려고요."
        },
        {
          "to": "player",
          "text": "저는 가스톤이에요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "status": "existing country-specific art reused after visual audit",
        "source": "assets/npcs/v4/chile.png row 11",
        "wardrobe": "가방 들고 걷기 기존 전용 의상",
        "hairstyle": "existing distinct source character 11",
        "ageCategory": "older adult",
        "group": "퇴근길 주민"
      }
    },
    {
      "id": "chile-v3-0",
      "name": "트리니다드",
      "region": "chile",
      "zone": "chile",
      "age": 34,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7826772712563576,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 0,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 1,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "오늘은 아이가 길을 골랐어요. 덕분에 여기까지 왔네요."
        },
        {
          "to": "player",
          "text": "가방은 제가 맡았는데 간식이 반이네요. 광장에서 만나기로 해서 먼저 와 있어요."
        },
        {
          "to": "companion",
          "text": "시몬, 잠깐, 물병 내가 들게."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 1,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 1: round-neck top and open cardigan with straight trousers in soft mint, dusty plum, cream and warm brown. Distinct detail: small canvas tote"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3329,
      "y": 3128,
      "stationBounds": [
        3294,
        3093,
        3364,
        3163
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-1",
      "name": "시몬",
      "region": "chile",
      "zone": "chile",
      "age": 39,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "보호자",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.784477108391569,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 1,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 3,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "사진은 제가 찍기로 했어요. 그래서 제 사진만 없네요."
        },
        {
          "to": "player",
          "text": "조금 더 걷고 다 같이 쉬려고요. "
        },
        {
          "to": "companion",
          "text": "트리니다드, 이번엔 다 같이 사진 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 3,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 2: collared shirt with rolled sleeves and relaxed trousers in soft mint, dusty plum, cream and warm brown. Distinct detail: compact camera"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3464,
      "y": 3128,
      "stationBounds": [
        3429,
        3093,
        3499,
        3163
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-2",
      "name": "아만다",
      "region": "chile",
      "zone": "chile",
      "age": 9,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 2.3552684046650407,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 2,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 0,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "저기까지 걸어왔어요. 생각보다 안 멀었어요."
        },
        {
          "to": "player",
          "text": "제 가방에는 제가 고른 간식이 있어요. "
        },
        {
          "to": "companion",
          "text": "엘로이, 나 저쪽도 보고 싶어!"
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 0,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 3: small motif T-shirt and knee shorts in soft mint, dusty plum, cream and warm brown. Distinct detail: small leaf motif"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3329,
      "y": 3263,
      "stationBounds": [
        3294,
        3228,
        3364,
        3298
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-3",
      "name": "엘로이",
      "region": "chile",
      "zone": "chile",
      "age": 7,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 A",
      "context": "새 가족 A",
      "scene": "새 가족 A",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -2.3534685675958693,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 3,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 2,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 어른이 저쪽에 있어요. 저는 여기 구경 중이에요."
        },
        {
          "to": "player",
          "text": "사진 찍을 때 자꾸 눈이 감겨요. "
        },
        {
          "to": "companion",
          "text": "아만다, 잠깐만, 신발 끈 풀렸어."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 2,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 4: peter-pan collar blouse and modest jumper skirt in soft mint, dusty plum, cream and warm brown. Distinct detail: tiny flower hair clip"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3464,
      "y": 3263,
      "stationBounds": [
        3429,
        3228,
        3499,
        3298
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-4",
      "name": "레오노라",
      "region": "chile",
      "zone": "chile",
      "age": 42,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "보호자",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.0025637473284747937,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 4,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 4,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "다 같이 나오려니 준비하는 데 한참 걸렸어요."
        },
        {
          "to": "player",
          "text": "그래도 나오길 잘했어요. 아이들이 신났네요. "
        },
        {
          "to": "companion",
          "text": "다미안, 조금만 쉬었다가 같이 가자."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 4,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 5: light blouse and wide culottes in soft mint, dusty plum, cream and warm brown. Distinct detail: folded town map"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1684,
      "y": 2700,
      "stationBounds": [
        1649,
        2665,
        1719,
        2735
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-5",
      "name": "다미안",
      "region": "chile",
      "zone": "chile",
      "age": 71,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -1.570796326794892,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 5,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 5,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "손주가 아는 길이라며 앞장섰어요."
        },
        {
          "to": "player",
          "text": "오늘은 제가 따라다니는 날이에요. "
        },
        {
          "to": "companion",
          "text": "레오노라, 천천히 가도 돼. 시간 넉넉해."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 5,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 6: button cardigan and below-knee pleated skirt in soft mint, dusty plum, cream and warm brown. Distinct detail: fine round spectacles and subtle age lines"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1818,
      "y": 2650,
      "stationBounds": [
        1783,
        2615,
        1853,
        2685
      ],
      "placementReason": "Predeployment: clear all existing POIs and learning targets by 105 units; preserve nearby companions and reachability."
    },
    {
      "id": "chile-v3-6",
      "name": "마르틴",
      "region": "chile",
      "zone": "chile",
      "age": 12,
      "ageCategory": "child",
      "genderPresentation": "feminine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": 1.570796326794892,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 6,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 3,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "집에 가면 오늘 본 걸 그려 보려고요."
        },
        {
          "to": "player",
          "text": "작은 수첩은 제가 직접 골랐어요. 광장에서 만나기로 해서 먼저 와 있어요."
        },
        {
          "to": "companion",
          "text": "베니시오, 이거 봐. 내가 찾았어."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 3,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 7: striped crewneck and simple shorts in soft mint, dusty plum, cream and warm brown. Distinct detail: water flask"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1588,
      "y": 2795,
      "stationBounds": [
        1553,
        2760,
        1623,
        2830
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-7",
      "name": "베니시오",
      "region": "chile",
      "zone": "chile",
      "age": 8,
      "ageCategory": "child",
      "genderPresentation": "masculine",
      "role": "아이",
      "relation": "새 가족 B",
      "context": "새 가족 B",
      "scene": "새 가족 B",
      "group": "resident",
      "height": 1.33,
      "radius": 20,
      "heading": -3.1390289062613186,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 7,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 0,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "아까부터 재미있는 모양을 찾고 있어요."
        },
        {
          "to": "player",
          "text": "저쪽에도 하나 있어요. 같이 온 가족한테 보여 주려고요. "
        },
        {
          "to": "companion",
          "text": "마르틴, 나도 사진에 같이 나올래."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 0,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 8: soft short sleeve shirt and ankle pants in soft mint, dusty plum, cream and warm brown. Distinct detail: small cloth backpack"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1684,
      "y": 2890,
      "stationBounds": [
        1649,
        2855,
        1719,
        2925
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-8",
      "name": "레베카",
      "region": "chile",
      "zone": "chile",
      "age": 20,
      "ageCategory": "adult",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.783656008473114,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 8,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 2,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 만날 때마다 어디서 만났는지 사진을 남겨요."
        },
        {
          "to": "player",
          "text": "오늘 사진은 제 차례예요. 잘 나와야 할 텐데요. "
        },
        {
          "to": "companion",
          "text": "라파엘라, 너는 어느 사진이 더 좋아?"
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 2,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 9: short casual jacket and contrast plain top in soft mint, dusty plum, cream and warm brown. Distinct detail: theater or museum leaflet"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1990,
      "y": 3842,
      "stationBounds": [
        1955,
        3807,
        2025,
        3877
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-9",
      "name": "라파엘라",
      "region": "chile",
      "zone": "chile",
      "age": 22,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -0.779896424727604,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 9,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 4,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "같이 온 친구가 가게 구경을 좋아해요."
        },
        {
          "to": "player",
          "text": "저는 기다리는 동안 여기서 쉬고 있어요. "
        },
        {
          "to": "companion",
          "text": "레베카, 아까 그 얘기 끝까지 해 봐."
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 4,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 10: knitted short-sleeve top and A-line midi skirt in soft mint, dusty plum, cream and warm brown. Distinct detail: small woven bag"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2125,
      "y": 3842,
      "stationBounds": [
        2090,
        3807,
        2160,
        3877
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-10",
      "name": "히메나",
      "region": "chile",
      "zone": "chile",
      "age": 21,
      "ageCategory": "adult",
      "genderPresentation": "androgynous",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 2.350673442654468,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 10,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 1,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "약속 시간보다 일찍 와서 한 바퀴 돌았어요."
        },
        {
          "to": "player",
          "text": "친구가 오면 방금 본 곳도 같이 가 보려고요. "
        },
        {
          "to": "companion",
          "text": "레베카, 이번엔 네가 길 골라."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 1,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 11: open overshirt and tapered cotton pants in soft mint, dusty plum, cream and warm brown. Distinct detail: notebook"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1990,
      "y": 3977,
      "stationBounds": [
        1955,
        3942,
        2025,
        4012
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-11",
      "name": "벨트란",
      "region": "chile",
      "zone": "chile",
      "age": 23,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "새 친구",
      "context": "새 친구",
      "scene": "새 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.354433025345406,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 11,
      "sourceAvatarConfig": {
        "hair": 4,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 3,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "어디로 갈지는 아직 안 정했어요."
        },
        {
          "to": "player",
          "text": "친구들 의견부터 들어 보려고요. "
        },
        {
          "to": "companion",
          "text": "레베카, 잠깐만, 지도 방향부터 돌려 보자."
        }
      ],
      "identityV3": {
        "hairstyle": "묶음머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 3,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 12: plain polo and cloth shoulder bag in soft mint, dusty plum, cream and warm brown. Distinct detail: cloth cap held in hand"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2125,
      "y": 3977,
      "stationBounds": [
        2090,
        3942,
        2160,
        4012
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-12",
      "name": "클레멘테",
      "region": "chile",
      "zone": "chile",
      "age": 15,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7850179938176866,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 12,
      "sourceAvatarConfig": {
        "hair": 0,
        "outfit": 0,
        "skinColor": 0,
        "hairColor": 0,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 사진 찍고 있어요. 배경 고르는 데 더 오래 걸리네요."
        },
        {
          "to": "player",
          "text": "아직 한 장도 못 골랐어요. 다 조금씩 달라 보여요. 광장에서 만나기로 해서 먼저 와 있어요."
        },
        {
          "to": "companion",
          "text": "아멜리아, 방금 웃어서 흔들렸어. 한 번만 더 찍자."
        }
      ],
      "identityV3": {
        "hairstyle": "숏컷 — reference edit head preserved",
        "skinToneIndex": 0,
        "hairColorIndex": 0,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 13: thin cotton sweater and straight jeans in soft mint, dusty plum, cream and warm brown. Distinct detail: wrist friendship band"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1987,
      "y": 574,
      "stationBounds": [
        1952,
        539,
        2022,
        609
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-13",
      "name": "아멜리아",
      "region": "chile",
      "zone": "chile",
      "age": 16,
      "ageCategory": "teen",
      "genderPresentation": "masculine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 2.293698189721409,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 13,
      "sourceAvatarConfig": {
        "hair": 3,
        "outfit": 0,
        "skinColor": 1,
        "hairColor": 2,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "잠깐 나왔다가 친구들까지 만났어요."
        },
        {
          "to": "player",
          "text": "원래는 집에 일찍 갈 생각이었는데요. "
        },
        {
          "to": "companion",
          "text": "클레멘테, 다음엔 나도 같이 데려가."
        }
      ],
      "identityV3": {
        "hairstyle": "중단발 — reference edit head preserved",
        "skinToneIndex": 1,
        "hairColorIndex": 2,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 14: short sleeve blouse with narrow woven sash in soft mint, dusty plum, cream and warm brown. Distinct detail: striped socks"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2082,
      "y": 670,
      "stationBounds": [
        2047,
        635,
        2117,
        705
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-14",
      "name": "테레시타",
      "region": "chile",
      "zone": "chile",
      "age": 17,
      "ageCategory": "teen",
      "genderPresentation": "feminine",
      "role": "친구",
      "relation": "청소년 친구",
      "context": "청소년 친구",
      "scene": "청소년 친구",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.355814089524726,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 14,
      "sourceAvatarConfig": {
        "hair": 6,
        "outfit": 0,
        "skinColor": 2,
        "hairColor": 4,
        "eyeColor": 2
      },
      "lines": [
        {
          "to": "player",
          "text": "친구가 빌려준 책을 오늘 돌려주려고요."
        },
        {
          "to": "player",
          "text": "한 권 더 빌려 오면 가방이 꽉 차겠어요. "
        },
        {
          "to": "companion",
          "text": "클레멘테, 다 읽었어. 뒤에 이야기도 궁금하더라."
        }
      ],
      "identityV3": {
        "hairstyle": "곱슬머리 — reference edit head preserved",
        "skinToneIndex": 2,
        "hairColorIndex": 4,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 15: soft zip jacket without explorer patches and knee shorts in soft mint, dusty plum, cream and warm brown. Distinct detail: small book"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 2178,
      "y": 765,
      "stationBounds": [
        2143,
        730,
        2213,
        800
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-15",
      "name": "파트리시오",
      "region": "chile",
      "zone": "chile",
      "age": 68,
      "ageCategory": "older adult",
      "genderPresentation": "androgynous",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": 0.7853981633974388,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 15,
      "sourceAvatarConfig": {
        "hair": 2,
        "outfit": 0,
        "skinColor": 3,
        "hairColor": 5,
        "eyeColor": 3
      },
      "lines": [
        {
          "to": "player",
          "text": "늘 걷던 길인데 오늘은 반대로 와 봤어요."
        },
        {
          "to": "player",
          "text": "같이 온 친구는 저보다 더 천천히 걷네요. "
        },
        {
          "to": "companion",
          "text": "파스, 우리 여기서 조금 쉬었다 갈까?"
        }
      ],
      "identityV3": {
        "hairstyle": "가르마형 — reference edit head preserved",
        "skinToneIndex": 3,
        "hairColorIndex": 5,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 16: knit vest and pleated trousers in soft mint, dusty plum, cream and warm brown. Distinct detail: square glasses and gray brows"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3397,
      "y": 2627,
      "stationBounds": [
        3362,
        2592,
        3432,
        2662
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-16",
      "name": "파스",
      "region": "chile",
      "zone": "chile",
      "age": 73,
      "ageCategory": "older adult",
      "genderPresentation": "feminine",
      "role": "노년 시민",
      "relation": "동네 어르신",
      "context": "동네 어르신",
      "scene": "동네 어르신",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.3561944901923355,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 16,
      "sourceAvatarConfig": {
        "hair": 5,
        "outfit": 0,
        "skinColor": 4,
        "hairColor": 5,
        "eyeColor": 0
      },
      "lines": [
        {
          "to": "player",
          "text": "친구랑 얘기하다가 쉬는 시간을 놓쳤어요."
        },
        {
          "to": "player",
          "text": "이제는 그늘을 찾아 앉으려고요. "
        },
        {
          "to": "companion",
          "text": "파트리시오, 아까 하던 얘기 어디까지 했지?"
        }
      ],
      "identityV3": {
        "hairstyle": "똥머리 — reference edit head preserved",
        "skinToneIndex": 4,
        "hairColorIndex": 5,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 17: collared blouse and long modest skirt in soft mint, dusty plum, cream and warm brown. Distinct detail: tiny brooch"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 3493,
      "y": 2723,
      "stationBounds": [
        3458,
        2688,
        3528,
        2758
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    },
    {
      "id": "chile-v3-17",
      "name": "이시도라",
      "region": "chile",
      "zone": "chile",
      "age": 36,
      "ageCategory": "adult",
      "genderPresentation": "masculine",
      "role": "거리 판매자",
      "relation": "거리 이웃",
      "context": "거리 이웃",
      "scene": "거리 이웃",
      "group": "resident",
      "height": 1.72,
      "radius": 25,
      "heading": -2.298677320248702,
      "pose": "standing",
      "art": "world-v3-chile",
      "row": 17,
      "sourceAvatarConfig": {
        "hair": 1,
        "outfit": 0,
        "skinColor": 5,
        "hairColor": 0,
        "eyeColor": 1
      },
      "lines": [
        {
          "to": "player",
          "text": "편하게 구경하세요. 고르시기 전에 가까이 보셔도 돼요."
        },
        {
          "to": "player",
          "text": "작은 선물을 찾는 손님이 많이 들러요. "
        },
        {
          "to": "player",
          "text": "저는 이시도라예요. 다음에 보시면 또 인사해 주세요."
        }
      ],
      "identityV3": {
        "hairstyle": "까까머리 — reference edit head preserved",
        "skinToneIndex": 5,
        "hairColorIndex": 0,
        "wardrobe": "modern Santiago city outing: everyday cotton shirt, soft knit vest, light blazer or cardigan, trousers or modest skirt, shoulder bag or postcard booklet; no copied explorer look. Variant 18: rolled sleeve shirt with small waist apron in soft mint, dusty plum, cream and warm brown. Distinct detail: postcards in a basket"
      },
      "status": {
        "art": "four-direction reference edit registered; scene visual QA pending",
        "placement": "cohesive group; terrain and near-talk access route passed",
        "interaction": "3 audience-tagged lines; near-only and modal blocking tests passed"
      },
      "x": 1718,
      "y": 3017,
      "stationBounds": [
        1683,
        2982,
        1753,
        3052
      ],
      "placementReason": "group formation, 135-unit spacing; complete learning access and near-talk routes checked"
    }
  ]
};
export const CUSTOM_NPC_ART_COUNTS={"canada":18,"usa":18,"mexico":18,"panama":18,"peru":18,"brazil":16,"chile":18};
