/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }
                  // 함수안에 매개변수로 쓰이면 Rest파라미터 라고 부른다. 
// const calcTotal = ( ...args) => {
//   console.log(args);

//   let total = 0;

//   args.forEach((item) => {
//     total += item;
//   })


//   console.log(total);
// }

// let resultX = calcTotal(10000, 8900, 1360, 2100);
// let resultY = calcTotal(21500, 3200, 9800, 4700);
// let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (a, b, c, d) => {
  return a+b+c+d;
}


// 화살표 함수와 this

/** 
 *  
 * 
 */





/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (a ,b) => {

  let result = 1;

  for(let i = 0; i < b; i++) {
    result *= a;
  }

  return result;
}

pow(2,50) // 9007199254740992


// repeat(text: string, repeatCount: number): string;
let repeat = (a, b) => {


  let result = "";
  for(let i = 0; i < b; i++) {
    result += a;
  } 

  
  return result;
  
}


repeat('hello😘',2) // 'hello😘hello😘hello😘'
