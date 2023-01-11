/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className = 'asd');

//가장 많이 사용 함 클래스를 추가 할때  기본 클래스는 그냥 두고 클래스를 추가 하고 싶을때
// first.classList.add("asdsddsd");

// first.classList.remove("asdsddsd");

function addClass(node, className) {
  if (typeof node !== 'string' || typeof className !== 'string')
  {
    throw new TypeError("잘못된 타입입니다.");
    
  }
  node = getNode(node);

  node.classList.add(className);
}

addClass('.first', "sfd")

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`


// function removeClass(node, className) {
//   if(!className) {
//     node.classList.remove(className);
//     return;
//   }
//   if (typeof node !== 'string' || typeof className !== 'string')
//   {
//     throw new TypeError("잘못된 타입입니다.");
    
//   }



//   node = getNode(node);

//   node.className = '';

// }

// removeClass('.first');

