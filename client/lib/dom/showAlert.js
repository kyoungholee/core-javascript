import { getNode } from './getNode.js';
import { addClass, removeClass } from './css.js';

export  function showAlert(node, text , timeout) {

  if(typeof node === 'string') {
    node = getNode(node);
    node.textContext = "text";


    addClass(node, 'is-active');
    setTimeout(() => {
      removeClass(node, 'is-active');
    }, timeout);

  }

}