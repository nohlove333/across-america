// Ordinary fictional residents: short situation-based speech. No quiz answers.
const scenarios={
 photo:['한 장만 더 찍어 주실래요?','이번엔 눈 안 감았어요.','사진에 우리 다 나왔어?','응, 이번 사진은 잘 나왔어.','배경까지 나오게 조금만 뒤로 가자.'],
 family:['같이 산책하러 나왔어요.','간식 먹을 자리를 찾고 있어요.','가방에 물병 있지?','응, 내가 챙겼어.','집에 가기 전에 한 바퀴 더 돌자.'],
 child:['저도 사진 찍어 봤어요!','아까 본 걸 그림으로 그릴 거예요.','내가 고른 길로 가 보자!','나도 같이 갈래!','우리 간식은 언제 먹어?'],
 friend:['친구를 만나러 왔어요.','우리 사진을 한 장 남기려고요.','점심은 어디서 먹을까?','아까 본 가게로 가자.','좋아, 길은 내가 볼게.'],
 elder:['책 읽다가 산책 나왔어요.','오늘은 친구하고 같이 걸어요.','책갈피 여기 있었네.','아까 찾던 게 그거였어?','응, 가방 밑에 들어 있었어.'],
 seller:['선물 고르고 계세요?','궁금한 건 가까이 보여 드릴게요.','이쪽 진열은 제가 정리할게요.','그럼 나는 포장부터 할게요.','작은 봉투 하나만 부탁해요.'],
 book:['읽던 부분이 재미있어서요.','딱 한 장만 더 읽으려고요.','어디까지 읽었어?','지금 제일 재미있는 부분이야.','다 읽으면 나도 빌려줘.'],
 art:['이 풍경을 그려 보고 있어요.','스케치가 끝나면 보여 드릴게요.','지우개 좀 빌려줄래?','여기 있어. 다 그렸어?','조금만, 창문을 더 그릴게.'],
 show:['공연 시작을 기다리고 있어요.','표를 가방에 넣었는지 다시 봐야겠어요.','우리 자리 번호가 몇 번이지?','표 뒤쪽에 적혀 있어.','찾았다. 늦지 않아서 다행이야.'],
 work:['일 끝나고 잠깐 걷고 있어요.','친구랑 만나기로 했어요.','먼저 도착했네. 오래 기다렸어?','아니, 나도 방금 왔어.','그럼 저녁 먹으러 갈까?'],
 walk:['같이 한 바퀴 걷고 있어요.','돌아갈 때는 다른 길로 가 보려고요.','우리 이쪽으로 가 볼까?','좋아, 아까는 반대쪽으로 왔잖아.','다음 모퉁이에서 사진도 찍자.']
};
const details={canada:'돌아가는 길에 책방도 들를 거예요.',usa:'조금 있다 극장 앞에서 만나기로 했어요.',mexico:'공원에서 그림을 더 그리고 갈 거예요.',panama:'배 사진을 한 장 더 찍으려고요.',peru:'풍경을 수첩에 그려 두려고요.',brazil:'친구와 공연을 보기로 했어요.',argentina:'광장 한 바퀴 돌고 카페에 가려고요.',chile:'광장에서 친구를 기다리고 있어요.'};
export function reviseResidentDialogue(layout){for(const [id,roster]of Object.entries(layout)){const groups=new Map();for(const n of roster){if(n.group==='guide'||n.performance)continue;const key=n.socialGroup||n.id;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(n);}for(const [key,ns]of groups){const context=key+' '+ns.map(n=>n.role+' '+(n.action||'')).join(' ');const type=/사진|셀카/.test(context)?'photo':/판매|가게|기념품/.test(context)?'seller':/독서|책 읽/.test(context)?'book':/그림|스케치|화가/.test(context)?'art':/공연|관객|전광판/.test(context)?'show':/퇴근|바쁜/.test(context)?'work':/가족|보호자/.test(context)?'family':/노년|어르신|오랜 친구/.test(context)?'elder':/친구/.test(context)?'friend':'walk';ns.forEach((n,i)=>{const lines=scenarios[n.age<13?'child':type],turn=lines[2+i%3];n.lines=[{to:'player',text:lines[i%2]},{to:'player',text:i%2?details[id]:lines[1]},{to:ns.length>1?'companion':'player',text:ns.length>1?turn:details[id]}];});}}}
