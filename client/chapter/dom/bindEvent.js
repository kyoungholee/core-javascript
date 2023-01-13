
function bindEvent(node, type, handler) {
  if( typeof node === "string") {
    node = getNode(node);
  }

  if(!(/mouseenter|click|mousemove|mouseleave/g.test(type))){
    typeError('bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.')
  }

  node.addEventListener(type, handler);
  
  // 클로져를 이용해 removeEventListener 를 항상 지워 줘야하는데 매번 귀찮기 떄문에 
  // 유틸 함수를 만들때는 클로저를 이용해 removeEventListener를 넣어줘야 한다. 
  return () => node.removeEventListener(type, handler);

}

const off = bindEvent('.first', 'click', handler)

bindEvent('.second', 'click', off);