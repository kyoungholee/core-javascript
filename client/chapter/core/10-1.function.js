/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// function calcPrice(a, b, c, d) {

//   let sum = a + b + c + d;

//   return sum;
// }

// let result = calcPrice(100, 500, 20, 40);

// console.log(result);



// 함수 선언

// 함수 호출

// 함수 값 반환

// 매개 변수

// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;


// function rem(pxValue, base = 16) {

//   if( typeof pxValue === "string") {
//     pxValue = parseInt(pxValue, 10);
//   }

//   let result = (pxValue / base).toString();

//   return typeof(result  + "px");

// }

// let newRem = rem("50px", 10);

// console.log(newRem);

// console.assert(rem(20) === '1.25rem');



// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.









/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// let resultX = calcTotal(10000, 8900, 1360, 2100);
// let resultY = calcTotal(21500, 3200, 9800, 4700);
// let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);





// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression = function (url,resolve,reject){
  
  // if(typeof url === 'string' && url.includes('http') && url.includes('www')){
  if(typeof url === 'string' && url.match(/http.+www/)){
    resolve(url) // 위에서 받은 url 매개변수를 함수 호출에 인자로 다시 쓸 수 있다. 
  }else{
    reject()
  }
  
};


callbackFunctionExpression(
  'https://www.naver.com',
  function (url){ // 맨 처음엔  callbackFunctionExpression 함수의  resolve의 인자 였지만 !! 두번째로 resolve가 호출한 인자를 받아 매개변수에 저장 할 수 있는 역할도 가능 !!! 
    console.log(`${url} 해당 페이지로 이동합니다.`); //매개변수로 받은 url을 화면에 보여준다. 
  },
  function (){
    throw new Error('url 입력 정보가 올바르지 않습니다.')
  }
)


// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;



