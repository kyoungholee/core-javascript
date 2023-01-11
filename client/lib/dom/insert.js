














let template = '<div class="box">새롭게 추가된 엘리먼트 입니다.</div>'
h1.insertAdjacentHTML('afterbegin',template);
// - insertAdjacentElement
// - insertAdjacentText

function insertBefore(node, text) {

  if(typeof node === 'string') {
    node = getNode(node);
  }

  if(node.nodeType !== document.ELEMENT_NODE  ) {
    typeError("에러입니다.")
  }


  node.insertAdjacentHTML('beforebegin', text);
}

function insertFirst(node, text) {

  if(typeof node === 'string') {
    node = getNode(node);
  }
  node.insertAdjacentHTML('afterbegin', text);
}

function insertLase(node, text) {

  if(typeof node === 'string') {
    node = getNode(node);
  }
  node.insertAdjacentHTML('beforeend', text);
}

function insertAfter(node, text) {

  if(typeof node === 'string') {
    node = getNode(node);
  }
  node.insertAdjacentHTML('afterend', text);
}