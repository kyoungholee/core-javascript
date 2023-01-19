import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

//console.log("aaaaaaaaaaaaaa");



const first = getNode('.first');

function aa () {
  // 동기 !!!!
  first.style.top = '-100px';

  //비동기
  setTimeout( () => {
    first.style.transform = 'rotate(360deg)'
  }, 2000)
  //비동기
  setTimeout( () => {
  first.style.top = '0px';
  }, 3000)

// 동기 !!!!
}

//aa();

const defalutOption = {
  shouldReject : false,
  timeout : 2000,
  data : "성공",
  errorMessage : '에러'
}

//매개변수로 객체 자체를 넣을 수도 있다.
export function delayP(option = {} ) {

  let config = { ...defalutOption};

  if(isNumber(option)) {
    config.timeout = option;
  }

  //객체 합성 : mixin 객체를 합친다 !!!!!! 
  //기존에 존재하고 있던 객체에서 새로운 객체를 계속해서 추가해서 넣을 수 있다.
  //option = {}로 받은 매개변수들로 추가 가능하다.
  if(isObject(option)) {
    config = { ...config, ...option};

  }



  const {shouldReject, data , errorMessage, timeout} = config;

  return new Promise( (res, rej) => {
    setTimeout( ()=> {
      !shouldReject ? res(data) : rej(errorMessage);

    }, timeout)
  })
}

//  delayP({
//   data : "안녕",

//  }).then( (res)=> {
//   console.log(res);
//  }) 

 // 프로미스 체이닝에서 then에 계속적인 return값을  계속해서 리턴해 준다음 
 // 다음 then에서 받고 계속해서 프로미스 체이닝을 이러나게 하려면 return 값을 계속해서 내보내줘야한다.
 // 이런 귀찮음을 해결하기 위해 async await이 나온거 
//  delayP()
//  .then( (res)=> {
//   console.log(res);
//   return 'aa' //Promise 자체 객체를 다시 리턴해줘서 다음 then에서 받아서 처리 할 수 있습니다. 
//  })

//  .then((res)=> {
//   console.log(res);
//  })


//async await 

//항상 해당 함수!!!!!!!!에 .then 혹은 .catch 를 사용 하고
// await를 then 대신에 사용 할 수 있으며 이것 또한 해당 함수를 호출 하고 그 앞에 await를 적어준다.


// async : 일반 함수를 promise를 반환하는 함수로 만든다.
// await :  1. promise가 반환하는 result를 가져오기.
//          2. 코드 실행 흐름 제어 

//프라미스 자체를 리턴해줍니다. 
async function delayAsync() {

  return '완료';
}
// 프라미스 자체를 리턴했기 때문에 then 쓰는거 대신 await를 사용합니다. 
let result =  delayAsync();

console.log(result);
