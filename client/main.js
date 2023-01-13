import {getNode, css, addClass, removeClass} from "./lib/index.js";












//const calculator = document.querySelector('.calculator');
const result = document.querySelector('.result');
const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const done = document.querySelector('#done');

//const operator = document.querySelector('.operator');

// function getInputValue() {

//   if( typeof node === 'string') {
//     node = getNode(node);

//     if(node.tagName !== 'INPUT') {
//       throw new Error("에러입니다.");
//     }

//     return node.value;
//   }
// }



function handler(e) {
e.preventDefault();

 //let target = e.target;

  //console.log(target);

 
 // console.log( firstNumber.value);

 let firstValue = firstNumber.value;

 //console.log(firstValue);

 let secondValue = secondNumber.value;

  //console.log( secondNumber.value);
  //  secondNumber.value;

  //console.log(done);

  let total = Number(firstValue) + Number(secondValue);
  console.log(total);

  result.textContent = '';
  result.insertAdjacentHTML('afterbegin', total);


}


function inputHandler() {
 
  let firstValue = firstNumber.value;

  //console.log(firstValue);
 
  let secondValue = secondNumber.value;
 
   //console.log( secondNumber.value);
   //  secondNumber.value;
 
   //console.log(done);
 
   let total = Number(firstValue) + Number(secondValue);
   console.log(total);
 
   result.textContent = '';
   result.insertAdjacentHTML('afterbegin', total);
 
}

done.addEventListener('click', handler);


firstNumber.addEventListener('change', inputHandler);