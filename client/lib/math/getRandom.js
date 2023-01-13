import { typeError} from '../error/typeError.js';

export function getRandom(n) {

  if(!n ) {
    typeError("매개변수 1개 받아라 !! ")
  }

  if( typeof n !== 'number') {
    typeError("숫자로 입력하세요");
  }


  return Math.round(Math.random() * n); 
}