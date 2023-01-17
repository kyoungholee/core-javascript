/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const year =2022;
console.log(year);


// undefined, null

console.log( (undefined) );

// boolean

let kind = true;
console.log(kind);


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed

console.log(Number(undefined) );


// null

// boolean

// *1, /1 , 1 앞에 이런 값들이 붙으면 숫자로 자동 형변환이 된다.

// string

// numeric string

let width = "320px";

console.log(parseInt(width, 10));


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 


console.log(!!null);