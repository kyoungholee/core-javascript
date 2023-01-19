
import { getNode, saveStorage  } from "./lib/index.js";



const textField = getNode('.textField');

//cost deleteButton = getNode('input[value = "삭제"]');

localStorage('area').then((res) => {
  textField.value = res;
})



function inputHandler () {
  saveStorage('area', textField.value);
}

                      //input 핸들러를 이용해 input창을 컨트롤 한다. 
textField.addEventListener('input', inputHandler) 