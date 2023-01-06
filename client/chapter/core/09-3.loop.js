



//2 ~ 10의 짝수 출력하기

// for(let i = 2; i <= 10; i++) {
//   if(i % 2 !== 0) 
//   continue;
//   {
    
//     console.log(i);
//   }
// }


// const frontEndDev = [
//   'HTML',
//   'CSS',
//   'SVG',
//   'JavaScript',
//   'jQuery',
//   'React',
//   'Redux',
// ];

// for(let i = 0; i < frontEndDev.length; i++) {

//   if(frontEndDev[i].includes('jQuery')) {
//     break;
//   }

//   // if( (frontEndDev[i].includes('SVG')) === true) {
//   //   continue;
//   // }
//   // else if( (frontEndDev[i].includes('jQuery')) === true){
//   //   continue;
//   // }

//   console.log(frontEndDev[i]);

// }


/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */


const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
};

for( let value in javaScript ) {
  console.log(value);

  if(Object.prototype.hasOwnProperty.call(javaScript, value) ) {

    console.log(value);


  }
}

Object.prototype === {};



// 이번 챕터 공부는 객체에 대한 공부다 !! 즉 객체지향 프로그래밍에서 배울만한 내용임

// let key = "toString";

// console.log(key in javaScript);


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


//hasOwnProperty 기능 !! 
// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty(key) );


// 내 조상에 있는 키 값을 찾는게 아니라!! 지금 현재 객체에 그 본연에 값의 키값을 있는 경우 
// trd이고 없으면 F

//hasOwnProperty는 자바스크립트에서 보호해주지 않는다.



//진짜 보호 해줄 수 있는 진짜 오브젝트가 찐으로 가지고 있는 객체에 접근하는 거다 !!
// 직접 사용 할 수 없다..!! 
//진짜 오브젝트가 가지고 있는 남에것이다. 이 변수께 아니고  원래 객체꺼다. 

// 그래서 우리는 빌려와서 사용해야된다.  객체를 빌려와서 사용하는게 call()이라는 메서드이다.

// 프로토타입은 ? 자료형이 가지고 있는 능력 즉 !! 찐 객체에 있는 능력을 쓰고 싶을때 
//prototype이라고 붙으고 그 객체에 능력을 사용 할 수 있다.
// 하지만 우리는 바로 사용 할 수  없기 떄문에 call() 메서드를 이용해 가져와서 사용해야 한다.

/**
 *               객체 생성자
 *  const obj = new Object() 찐 객체 능력을 obj에서 줘라 !! 
 * 
 *  call bind 도 공부 !!! 
 */
//찐 객체 능력  어떤능력hasOwnProperty 빌려쓴다(객체 능력을, 키에 값을) 

//오브젝트가 가지고 있는 진짜 능력 

//앞에 대분자는 생성자다!! ( object)

// Object.prototype.hasOwnProperty.call(javaScript, key)


// 찐 객체를 직접 쓰지말고  객체에 속성을 이용해 가져와라 위에 처럼 ! 





//call 에 대한 설명 함수를 실행 시키는 능력 !! 
// 함수가 가진 능력이니깐 함수랑 같이 쓰기 가능 
const user = {
  name : 'lee',
  age : 32
}

function hello() {
  // console.log(this);
}


//특정 함수를 불러오고 싶을떄 함수를 대신 실행해주는   call, apply, bind
// bind는 값을 가지고 있다는 뜻 
hello.call();




// for ~ in 문 ============> 객체를 순한할때 사용하는게 좋다 !!! 
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

//for ~ of를 사용 하지만 for문도 ㄷ ㅏ가능하다 

let tens = [10, 100 ,1000, 10000] ;

for(let value in tens) {
  console.log(tens[value]);
}

































