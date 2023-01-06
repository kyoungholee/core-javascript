/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조


let cssCode = ` 
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  name : "asd",
  age : 23,
  isAdmin : true,
}


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  name : "lee",
  email : "asd@naver.com",
  isAdmin : true,

}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


// console.log(authUser["name"]);
// console.log(authUser["email"]);


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

                      //디폴트 파라미터. 



// 프로퍼티 포함 여부 확인

for(let key in authUser) {
  if(Object.prototype.hasOwnProperty.call(authUser, key)){
    console.log(authUser[key]);
  }

}


// 프로퍼티 나열

// let keyArr = Object.keys(authUser);
// console.log(keyArr);


function getPropertiesList(name , age) {
  return {
    name,
    age,
  }
}


let result = getPropertiesList("asd", 34);

/**배열의 키를 순회해서 뽑는 방법 과 push로 인해 넣을 수 있다.  */

// function getPropertiesList(object) {
//   let result = [];

//   for(let key in object) {
//     result.push()
//   }
// }





// 프로퍼티 제거 or 삭제 


function removeProperty(object, key) {
  object[key] = null


 }


 removeProperty(authUser, 'name');





// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,

}

// for(values in student) {
//   console.log(student[values]);
// }


// let sum = Object.values(student);






// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {

  if(Object.keys(object).length) {
    return true;
  }
  else {
    return false;
  }
}


isEmptyObject(student);



let lee = {
  qwe : 100,
  zzz : 160,
  pete : 430
}

console.log(  Object.entries(lee) );

/*구조 분해 할당 !!
배열 자체를 분해하서   
키와 값으로 나누겠다 !!!! 


객체의 구조분해 할당과 
배열의 구조분해 할당이 있다. 


*/
let total = 0;

for(let [key, value] of Object.entries(lee)) {

  // let key = keyValue[0]; // 키만 
  // let value = keyValue[1]; // 값만 나옴 
  
  total += value;

}

console.log(total);




let color = ['#ff0000', '#2b00ff', '#00ff2f'];
const COLOR_RED = color[0];
const COLOR_BLUE = color[1];
const COLOR_GREEN = color[2];

const [red, blue, green] = color





/**
 * 
 * 객체 분해 발당 
 */

let ex = {
  qwe : 100,
  zzz : 160,
  pete : 430
}


const {
  qwe,
  zzz,
  pete
} = ex;


console.log(qwe);




