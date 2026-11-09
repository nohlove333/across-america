export const TUTORIAL_KEY='aa.expedition.tutorial.v1';
export const TUTORIAL_STEPS=[
 ['어디든 걸어가 볼까요?','지도에서 나라나 국기 카드를 빠르게 두 번 누르면 탐험이 시작돼요. 나라 안에서는 바닥을 누르거나 방향 버튼으로 걸어가세요.','컴퓨터에서는 방향키·WASD로 이동해요. Space는 점프, T는 춤! 모바일에서는 방향 버튼 옆의 점프·춤 버튼을 누르세요.'],
 ['사람에게 묻고, 장소를 살펴봐요','주민을 누르면 가까운 자리로 걸어가요. 미션 안내원을 누르면 바로 문제와 답 입력칸이 열려요. 노란 테두리는 가까이 있는 주민을 알려 줘요.','장소 안내판은 가까이에서 E키나 살펴보기로 읽어요. 약도에서 번호·장소 이름을 누르면 설명과 이동 경로를 확인할 수 있어요.'],
 ['자료를 읽고, 안내원 문제에 도전해요','안내원을 누르면 문제와 답 입력칸이 바로 열려요. 안내원마다 문제 하나만 해결하세요. 자료는 필요할 때 읽어도 돼요. 막히면 문제창의 힌트를 확인해요.','미션을 처음 해결할 때마다 그 나라의 코인 10개를 받아요. 이 나라의 문제를 모두 풀고 코인을 모아 보물열쇠로 교환한 뒤 보물상자를 여세요.'],
 ['여덟 조각을 이어 마지막 문으로!','보물상자에서 얻은 암호카드는 가방에 모여요. 카드를 뒤집어 나라별 조각을 읽고, 두 문장을 찾아보세요.','마지막 문에 두 문장을 입력하면 명예의 전당에 갈 수 있어요. 암호를 알아냈다면 모든 카드를 모으기 전에도 도전할 수 있어요.'],
 ['다음 시간에도 이어서 탐험해요','캐릭터와 진행 상황, 나라별 마지막 위치는 현재 브라우저에 자동 저장돼요. 같은 기기·브라우저로 돌아오면 이어서 할 수 있어요.','다른 기기로 옮기거나 브라우저 데이터를 지우기 전에는 탐험 노트에서 백업 파일을 저장하세요. 새 기기의 탐험 노트에서 그 파일을 복원하면 돼요.']
];
const QUICK=[['나라 두 번 누르기','바닥 누르기 · 이동','Space · 점프 / T · 춤'],['주민 · 이야기 듣기','안내원 · 미션 열기','약도 · 장소 찾기'],['자료 2개 읽기','안내원마다 문제 1개','모든 문제 → 열쇠 → 보물'],['가방에서 카드 뒤집기','두 문장 완성하기','마지막 문 → 명예의 전당'],['이 브라우저 · 자동 저장','탐험 노트 · 백업','새 기기 · 파일 복원']];
const TIPS=['화면의 국가 카드 버튼으로 그 나라의 자료를 다시 읽을 수 있어요.','주민의 말풍선을 읽는 동안에도 자유롭게 움직일 수 있어요.','각 나라의 코인은 그 나라의 열쇠로 교환해요.','서두르지 말고 카드를 하나씩 비교해 보세요.','이 안내는 도움말에서 언제든 다시 볼 수 있어요.'];
export function createTutorial({openInfo,storage,onFinish=()=>{}}){
 function done(){try{return storage.getItem(TUTORIAL_KEY)==='read';}catch{return false;}}
 function show(index=0){index=Math.max(0,Math.min(TUTORIAL_STEPS.length-1,index));const step=TUTORIAL_STEPS[index];
  openInfo('탐험 안내 · '+(index+1)+' / '+TUTORIAL_STEPS.length,`<section class="tutorial-step" aria-label="${step[0]}"><nav class="tutorial-progress" aria-label="안내 단계">${TUTORIAL_STEPS.map((s,i)=>`<button type="button" data-tutorial-step="${i}" aria-label="${i+1}단계 ${s[0]}" ${i===index?'aria-current="step"':''}>${i+1}</button>`).join('')}</nav><div class="tutorial-kicker">나의 첫 아메리카 탐험 · STEP 0${index+1}</div><h3>${step[0]}</h3><ol class="tutorial-route">${QUICK[index].map(t=>`<li>${t}</li>`).join('')}</ol><div class="tutorial-reading"><p>${step[1]}</p><p>${step[2]}</p></div><aside class="tutorial-tip"><b>탐험 메모</b><p>${TIPS[index]}</p></aside><div class="tourism-actions tutorial-actions">${index?'<button id="tutorialPrev" type="button">← 이전</button>':'<span>약 1분이면 준비 끝!</span>'}<button id="tutorialNext" type="button" class="primary">${index===TUTORIAL_STEPS.length-1?'탐험 시작 →':'다음 →'}</button></div></section>`);
  document.querySelectorAll('[data-tutorial-step]').forEach(b=>b.onclick=()=>show(Number(b.dataset.tutorialStep)));
  const prev=document.querySelector('#tutorialPrev');if(prev)prev.onclick=()=>show(index-1);
  document.querySelector('#tutorialNext').onclick=()=>{if(index<TUTORIAL_STEPS.length-1)show(index+1);else{try{storage.setItem(TUTORIAL_KEY,'read');}catch{}document.querySelector('#infoDialog').close();onFinish();}};
 }
 return{show,done};
}
