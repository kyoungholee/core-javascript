/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */


// let age = 20;

// if( age >= 14 && age  <= 90) {
//   console.log("속합니다.");
// }
// else {
//   console.log("아닙니다.");
// }









// let a = 10;
// let b = '';
// let value = Boolean(b);

// // 논리곱(그리고) 연산자
// let AandB = a && b

// // 논리합(또는) 연산자
// let AorB = a || b;

// // 부정 연산자
// let reverseValue = !value;


// // 조건 처리

// // 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy;

// // 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy;



/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

// const MORNING    = '아침',
//       LUNCH      = '점심',
//       DINNER     = '저녁',
//       NIGHT      = '밤',
//       LATE_NIGHT = '심야',
//       DAWN       = '새벽';

// let thisTime;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

// switch (date) {
//   case "아침":
//     console.log('뉴스 기사 글을 읽는다.');
//     break;
//     case "점심":
//     console.log('자주 가는 식당에 가서 식사를 한다.');
//     break;
//     case "저녁":
//     console.log('동네 한바퀴를 조깅한다.');
//     break;
//     case "밤":
//     console.log('친구에게 전화를 걸어 수다를 떤다.');
//     break;
//     case "심야":
//     case "새벽": 
//       console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
//       break;
//     default: 
//       console.log("커피나 마시자 !!");

// }



/* switch문 → if문 변환 --------------------------------------------------- */


// let date = prompt("시간이 맞게 입력해주세요", "");


// if( date === "아침") {
//   console.log('뉴스 기사 글을 읽는다.');
// }
// else if( date === "점심") {
  
//   console.log('자주 가는 식당에 가서 식사를 한다.');

// }
// else if( date === "저녁") {
  
//   console.log('동네 한바퀴를 조깅한다.');
  
// }
// else if( date === "밤") {
  
//   console.log('친구에게 전화를 걸어 수다를 떤다.');
  
// }
// else if( date === "새벽") {
  
//   console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
  
// }
// else {
//   console.log('잠이나 자 !!! ');
// }

// let num = 123;
// console.log( typeof num);

// let num1 = '10';
// console.log( typeof num1);

// if( num === num1) {
//   console.log( true);
// }
// else {
//   console.log( false);
// }

/* switch vs. if -------------------------------------------------------- */

// function getRandom(n) {
//   return Math.round(Math.random() * n);
// }


// function getDay(dayValue) {
//   switch (dayValue) {
//     case 0:
//       return "일";
//     case 1:
//       return "월";
//     case 2:
//       return "화";
//     case 3:
//       return "수";
//     case 4:
//       return "목";
//     case 5:
//       return "금";
//     case 6:
//       return "토";
//   }
// }

// let result = getDay(getRandom(6));
// console.log(result);


// let id = prompt("아이디를 입력해주세요");
//  let idLowerCase = id.toLowerCase();
// if (id === null) {
//   alert("취소되었습니다");
// } else if (idLowerCase !== "admin" && id !== null) {
//   alert("알 수 없는 사용자입니다.");
// } else if (idLowerCase == "admin") {
//   let pw = prompt("비밀번호를 입력해주세요");
//   if (pw == null) {
//     alert("취소되었습니다");
//   } else if (pw !== "Cancel" && pw !== "theMaster") {
//     alert("잘못된 비밀번호 입니다.");
//   } else if (pw == "theMaster") {
//     alert("환영합니다!");
//   }
// } 



let username = prompt("사용자 이름을 입력해주세요", "");


if (username.toUpperCase() || username.toLowerCase() === "admin") {

  let pass = prompt("비밀번호를 입력해주세요", "");

  if(pass.toUpperCase() || pass.toLowerCase() === "themaster") {
    console.log("환영합니다.");
  }
  else if( pass == '' || pass == null) {
    console.log("잘못된 정보 입니다,");
  }
  else {
    console.log("인증 실패입니다.");
  }
}
  else if( username === "" || username === null ) {
    console.log("취소됨");
  }
  else {
    console.log("인증 실패");
  }
