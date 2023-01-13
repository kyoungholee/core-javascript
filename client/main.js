import {getNode} from './lib/dom/getNode.js';
import {jujeobData} from './data/data.js';
import { getRandom } from './lib/math/getRandom.js';
import { isNumericString } from './lib/utils/typeOf.js';
import { showAlert } from './lib/dom/showAlert.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');


console.log ( isNumericString('as123') );


function clickSubmitHandler(e) {
  e.preventDefault();
  let name = nameField.value;

  //리턴 값이 배열이니깐 !! 
  let list = jujeobData(name);
  //console.log(list);

  if(!name) {
  
    showAlert('.alert', '올바른 정보를 입력해주세요', 3000);
  }
  if(isNumericString(name)) {
    console.log("숫자야!");
    showAlert('.alert', "에러입니다", 2000);
  }

  let pick = list[getRandom(list.length-1)];
  console.log(pick);

  // console.log(list);

  // console.log( name);

  //화면에 보여주는 역할!!!~~ 화면에 보여주자 ~ 


  result.textContent="";
  result.insertAdjacentHTML('afterbegin', pick);



}

submit.addEventListener('click', clickSubmitHandler);