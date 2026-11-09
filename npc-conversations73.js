// Short connected exchanges between companions; no learning answers or progress writes.
const exchanges={
 family:['물병은 가방에 있지?','응, 내가 챙겨 왔어.','그럼 이번엔 내가 길을 골라도 돼?','좋아, 우리 같이 가 보자.'],
 photo:['여기 배경으로 사진 한 장 찍자.','좋아, 이번엔 내가 찍어 줄게.','찍었다! 다 같이 나온 걸로 골라 보자.','난 방금 찍은 사진이 제일 좋아.'],
 book:['어디까지 읽었어?','방금 재미있는 부분이 나왔어.','다 읽으면 나도 빌려줘.','응, 책갈피 꽂아 둘게.'],
 show:['우리 자리 번호가 몇 번이었지?','표 뒤쪽에 적혀 있어.','찾았다. 이제 같이 가자.','잠깐, 표는 내가 들게.'],
 seller:['이쪽 진열은 내가 정리할게요.','그럼 나는 포장부터 할게요.','봉투도 여기 놓아 둘게요.','고마워요. 이제 다 준비됐네요.'],
 art:['여기 창문은 어떻게 그릴까?','선 몇 개로만 그려 봐.','그렇게 하니까 모양이 보이네!','완성되면 서로 보여 주자.'],
 elder:['늘 걷던 길인데 오늘은 반대로 왔네.','그러게. 이쪽 풍경도 괜찮다.','다음에도 이쪽으로 걸어 보자.','좋아. 약속한 거다.'],
 friends:['다음엔 어느 쪽으로 가 볼까?','아까 지나온 광장으로 가자.','좋아, 사진 한 장만 더 찍고 가자.','그럼 카메라는 내가 들게.']
};
export function connectConversations(layout){for(const roster of Object.values(layout)){const groups=new Map();for(const n of roster)if(n.socialGroup&&n.group!=='guide'&&!n.performance){if(!groups.has(n.socialGroup))groups.set(n.socialGroup,[]);groups.get(n.socialGroup).push(n);}for(const [key,group]of groups){if(group.length<2)continue;const context=key+' '+group.map(n=>n.role).join(' ');const type=/사진|셀카/.test(context)?'photo':/독서|책 읽/.test(context)?'book':/공연|관객|전광판/.test(context)?'show':/판매|가게|기념품/.test(context)?'seller':/그림|스케치|화가/.test(context)?'art':/가족|보호자/.test(context)?'family':/노년|어르신|오랜 친구/.test(context)?'elder':'friends';group.forEach((n,i)=>{const line=n.lines.find(l=>l.to==='companion');if(line)line.text=exchanges[type][i%4];});}}}
