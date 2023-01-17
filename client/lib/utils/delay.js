import { getNode } from "../dom/getNode.js";

console.log("aaaaaaaaaaaaaa");





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


aa();