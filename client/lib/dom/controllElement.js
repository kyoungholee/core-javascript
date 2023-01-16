import { typeError } from "../error/typeError.js";
import { isElement } from "../utils/typeOf.js";


//TS와 같은 js쓰는 타입을 미리 체크할 수 있는 구문 
//JsDoc
/**
 * @function isElement checkElement
 * @param {HTMLElement} node
 * @return set disabled
 */



export function disableElement(node) {

  if(!isElement(node)) {
    typeError('DOM 요소가 아닙니다.')
  }

  //비활성화를 꺼라
  node.disabled = true;
}


export function enableElement(node) {
  if(!isElement(node)) {
    typeError('DOM 요소가 아닙니다.')
  }
  //비활성화를 켜라
  node.disabled = false;
}


export function visibleElement(node) {

  if(!isElement(node)) {
    typeError('DOM 요소가 아닙니다.')
  }

  node.hidden = false;
}


export function invisibleElement(node) {

  if(!isElement(node)) {
    typeError('DOM 요소가 아닙니다.')
  }

  node.hidden = true;
}