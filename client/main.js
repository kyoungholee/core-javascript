import { diceAnimation, insertLast, invisibleElement, visibleElement ,  attr, clearContents} from "./lib/index.js";
import { getNode ,getNodes} from "./lib/dom/getNode.js";

// [ 레코드 리스트 보이기 ]
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기 

// class buttonGroup안에 모든 버튼 태그를 전부 가져온다.
//배열에 구조분해할당---> 밑에 처럼 자식요소들을 하나씩 변수로 받을 필요가 없다.
//구조분해 할당으로 변수들을 받으면 알아서 자리를 찾아간다.
const [rollingDiceButton, recordButton, resetButton ] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

//const rollingDiceButton = getNode('.buttonGroup > button:ntn-child(1)');

//HTML에 있는 두번째 속성을 가지고 오는 방법 (버튼 태그의) type에 두번째 자식의 속성을 가져옴
//const recordButton = getNode('.buttonGroup > button:ntn-child(2)');
//const resetButton = getNode('.buttonGroup > button:ntn-child(3)');

const numberRecord = getNode('#cube');

const tdValue = getNode('tbody');

let count = 1;
let result = 0;
function renderRecordListItem() {



  //주사위에 무작위 나온 값을 넣어줘라
  // 값을가져오는 것  
  let recodeNumber = Number( attr('#cube', 'data-dice'));

  let result =+ recodeNumber;

  let template =
  `<tr>
    <td>${count}</td>
    <td>${recodeNumber}</td>
    <td>${result}</td>
  </tr>`;

  //useState안에는 클로저로 이루어져 있다. 

  //뿌려주고 있다.  넣어서 보여줄 수 있다.
  insertLast('.recordListWrapper tbody', template);
  count++;

  //코딩 하지 않을 경우 맨처음을 보여준다. 스크롤은 계속해서 내려가는데 
  
  
  //스크롤 길이만큼 항목을 찍어준다.  하지만 이 코드를 적어주면 스크롤이 내려가는 만큼 가장 밑을 볼 수 있다.

  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}


/**이벤트 구문
 * 
 * 
 * 
 * 
 */


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
    visibleElement(recordListWrapper);
    renderRecordListItem();
  }

  const handleReset = () => {
    count = 0;
    result = 0;
    
    invisibleElement(recordListWrapper);
    clearContents('.recordListWrapper tbody');

    //('.recordListWrapper tbody').textContext = "";
  }


  //handlerRollingDice()()
                                              //이벤트 발생시 함수자체를 반환해줍니다.
  //위에서 클로저를 사용할 경우 return문에 있는 함수를  실행해줘야 하기 때문에 handlerRollingDice함수에
  // ()를 추가해줘야한다.
                                      //이벤트핸들러에서 콜백함수가 호출 되고 있다면 거의 클로저입니다.
rollingDiceButton.addEventListener('click', handlerRollingDice());


recordButton.addEventListener('click', handleRecord);

resetButton.addEventListener('click', handleReset);