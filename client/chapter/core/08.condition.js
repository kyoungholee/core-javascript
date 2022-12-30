/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let number = prompt('숫자를 입력해 주세요', 0) ;

let message = 
( number > 0) ? '1' :
( number < 0) ? '-1'  :
'암것도 아님' ;

console.log(message);

// if( number > 0) {
//   console.log(1);
// }
// else if( number < 0) {
//   console.log(-1);
// }
// else{
//   console.log(0);
// }












// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 1;

// 영화 볼거니?
let goingToWatchMovie = 2;


// if 문(statement) 
  if( didWatchMovie === 1 ) {
    console.log("yes");
  }
  else if(goingToWatchMovie === 2 ){
    console.log("no");
  }
  else{
    console.log("영화보러 가자 ")
  }

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식



