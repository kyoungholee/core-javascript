import { diceAnimation, insertLast, invisibleElement, visibleElement ,  attr, clearContents} from "./lib/index.js";
import { getNode ,getNodes} from "./lib/dom/getNode.js";

// class buttonGroup안에 모든 버튼 태그를 전부 가져온다.
//배열에 구조분해할당---> 밑에 처럼 자식요소들을 하나씩 변수로 받을 필요가 없다.
//구조분해 할당으로 변수들을 받으면 알아서 자리를 찾아간다.
const [rollingDiceButton, recordButton, resetButton ] = getNodes('.buttonGroup > button');

//const rollingDiceButton = getNode('.buttonGroup > button:ntn-child(1)');
//HTML에 .buttonGroup에 있는 두번째 자식 속성을 가지고 오는 방법 (버튼 태그의) type에 두번째 자식의 속성을 가져옴
//const recordButton = getNode('.buttonGroup > button:ntn-child(2)');
//const resetButton = getNode('.buttonGroup > button:ntn-child(3)');

const recordListWrapper = getNode('.recordListWrapper');
const numberRecord = getNode('#cube');
const tdValue = getNode('tbody');

let count = 1;
let result = 0;

function renderRecordListItem() {

  //주사위에 무작위 나온 값을 넣어줘라
  // 값을가져오는 것  getAttribute!! 한 모습
  let recodeNumber = Number( attr('#cube', 'data-dice'));

  let result =+ recodeNumber;

  let template =
  `<tr>
    <td>${count}</td>
    <td>${recodeNumber}</td>
    <td>${result}</td>
  </tr>`;

  //useState안에는 클로저로 이루어져 있습니다. 

  //뿌려주고 있습니다.  넣어서 보여줄 수 있습니다.
  insertLast('.recordListWrapper tbody', template);
  count++;

  //이부분을 코딩 하지 않을 경우 스크롤은 계속 내려가지만 가장 맨위에만 보여준다.
  //스크롤 길이만큼 항목을 찍어준다.  
  //하지만 이 코드를 적어주면 스크롤이 내려가는 만큼 가장 밑을 볼 수 있다.
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}
const handlerRollingDice = () => {

  let stopAnimation;
  let isRolling = false;

  //diceAnimation();

  //매초마다 계속해서 반복한다, 0.1초 마다

//즉시실행 함수로 클로저를 만들어 봄 
  return function() {
    //false 일때만 실행 (!isRolling)이 false 입니다
    if(!isRolling) {
      stopAnimation = setInterval(diceAnimation , 100);
       //활성화 시켜라 여기서 disable은 비 활성화된 상태이며 true를 할당 시
       //누를 수 있는 상태로 된다.
       //누를수 있게 버튼을 활성화 시킨다.
      recordButton.disable = true;
      resetButton.disable = true;
      }
      else {
        //setInterval을 종료하는 함수
        clearInterval(stopAnimation);
        // 활성화 되어 있는걸 꺼라!!  사용 할 수 없게 
        recordButton.disable = false;
        resetButton.disable = false;
      }
      isRolling = !isRolling;
    }
  }

  const handleRecord = () => {
    //visibleElement(recordListWrapper);
    recordListWrapper.hidden = false;
    renderRecordListItem();
  }

  const handleReset = () => {
    count = 0;
    result = 0;
    
    // invisibleElement(recordListWrapper);
    recordListWrapper.hidden = true;
    clearContents('.recordListWrapper tbody');
    //('.recordListWrapper tbody').textContext = "";
  }
  
                                              //이벤트 발생시 함수자체를 반환해줍니다.
  //위에서 클로저를 사용할 경우 return문에 있는 함수를  실행해줘야 하기 때문에 handlerRollingDice함수에
  // ()를 추가해줘야한다.
                                      //이벤트핸들러에서 콜백함수가 호출 되고 있다면 거의 클로저입니다.
rollingDiceButton.addEventListener('click', handlerRollingDice());

recordButton.addEventListener('click', handleRecord);

resetButton.addEventListener('click', handleReset);