/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);


// 2. 값이 할당되지 않은 상태
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1  = "hello";
let message2  = 'hello';
let nickname = "tiger"
let message3  = `안녕 내 이름은 ${nickname} 야 ~ `;


console.log(message1, message2, message3);



// 4. 정수, 부동 소수점 숫자(길이 제약)
let num = 10;
let num1 = 10.23;




// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// 6. 참(true, yes) 또는 거짓(false, no)
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
// 8. 고유한 식별자(unique identifier)


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류



// Object
//객체 리터럴 !!~ 
const user = {

  // 프로퍼티 라고 말한다.
  name : 'asd', 
  age : 32,

  //함수가 들어가면 method 이다 .
  fish : function() {
    return "asdasd"
  }
}

// Array
//배열 리터럴 방식!!!! 리터럴은 그냥 값이라고 생각하면 된다.
let list = [10, 100, 134, 24, 3455, 45 ];

// function

                  //매개변수
let fuc = function(a, b) {
  return 3;
}

                //인자(argument)
console.log(fuc( 10 , 30));



// this


