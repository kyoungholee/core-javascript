//get

const arrfn = (function() {
function getAttr(node, prop) {
  // return console.log((node) );

  if(typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
  // node.getAttribute(prop)
}

getAttr('.first', 'class');

//set
function serAttr(node, prop, aaa){

  if(typeof node === 'string') {
    node = getNode(node);
  }

  if(typeof prop !== 'string') {
    throw new TypeError("다시 작성");
  }

  node.setAttribute(prop, aaa);
}


//attr
function attr(node, prop, value) {

  if(!value) {
    if(typeof node === 'string') {
      node = getNode(node);
    }

    // console.log( first.getAttribute(prop) );
    return node.getAttribute(prop);

  }else {

    if(typeof node === 'string') {
      node = getNode(node);
    }
  
    if(typeof prop !== 'string') {
      throw new TypeError("다시 작성");
    }
  
    node.setAttribute(prop, value);
    
  }
}



return attr;
})
