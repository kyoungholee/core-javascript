/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray

const arr = [10, 100, 1000 ,10000, 14];

console.log(typeof arr);



//Object.prototype.toString.call(null) => Object NUll
//정확하게 타입을 찾을 수 있다!!! 정확한 타입을 찾기위함이다. 진짜 타입을 체크해줄 수 console.error('있다',있다)
//자바스크립트의 타입 비교에 대한 문제점이 있다. null 같은 경우  object가 나오고  
//타입에 이슈를 보안하기 위해 typescripts를 사용하는 것 !! 

function isArray(data) {

  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
}

// console.log(isArray(Number));





/* 요소 순환 -------------------------------------------------------------- */

// forEach

arr.forEach( (item, index, array) => {
  console.log(item);
})

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice 시작 제거 및 추가 가능 !
// sort 정렬한다, 

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat 합친다.
// slice 자른다,
// map 배열로 반환 


let arr2 = arr.map( (item, value)=> {
  return item
})

console.log(arr2);


/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf 배열에 요소가 포함되어 있지!!??~ 
// lastIndexOf
// includes 있는지 포함되어 있는지 ... 배열에서 !! 

/* 요소 찾기 -------------------------------------------------------------- */

// find


const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]

let finds = users.find( (item, index) => {
  return item.id === 3
})

console.log(finds);


// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter 
let num = arr.filter((number, key) => {
  return number < 100;
})

console.log(num);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

let sum = friends.reduce((prev, curr)=> {
  return prev + curr.age;
},0)

console.log(sum)

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join