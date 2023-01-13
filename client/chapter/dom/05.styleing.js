/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log("first Name : ",  first.className = 'asd');

//가장 많이 사용 함 클래스를 추가 할때  기본 클래스는 그냥 두고 클래스를 추가 하고 싶을때
first.classList.add("fffffffffffffffffffffffffffffffff");

first.classList.remove("asdsddsd");

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

first.style.transform = 'rotate(140deg)';

// 노드의 속성(선택자, id, 클래스).style.css속성명 = '속성에 맞는 값 (항상 단위를 넣어줘야 한다.)'



/* 계산된 스타일 읽기 가져오는 방법 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`


// console.log (getComputedStyle(first).fontSize) ;


//자바스크립트에선 객체의 key, value 값을 변수로 받기 위해선 점(.)을 사용하면 안됩니다.
//변수로 받을때는 []표기법을 사용합니다. 그 []는 문자열로 받을 수 있다.
function getCss(node, size) {

  if( typeof node === 'string') {
    node = getNode(node);
  }

  if( typeof size !== 'string') {
    throw new TypeError("에러 입니다.");
  }


 
return getComputedStyle(node)[size];

// getComputedStyle(node) 객체다 !!!!!!! 


}

console.log (getCss('.first',"fontSiz"));


function setCss(node, prop, value) {
  
  if( typeof node === 'string') {
    node = getNode(node);
  }
  
 node.style[prop] = value;

}

console.log (setCss('.first', 'color', 'red')); //red




function CSS(node, size, value) {


  if( typeof node === 'string') {
    node = getNode(node);
  }

  if( typeof size !== 'string') {
    throw new TypeError("ffffffffffffffff");
  }

  if( !(size in document.body.style) ) {
    throw new TypeError("ffffffffffffffffffff23333333333333333344f");
  }

  if(!value) {
    return getComputedStyle(node)[size];
  }

  node.style[size] = value;


}

// const css = (node, size, value) => {
//   !value ? getCss(node, prop) : setCss(node, prop, value )

// }

CSS('.first', 'font-size');
CSS('.first', 'font-size', '100px');











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

