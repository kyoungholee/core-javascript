/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

const first = getNode('.first');
const second = getNode('.second');
const ground = getNode('.ground');
const ball = getNode('.ball');

function handle() {
  
  // second.remove(); //  
  //이미 있는 노드는 css를 이용해 지워야 한다. 

  // second.classList.remove("display = none")
  
  console.log("hiy!");
}

// function handle() {
//   console.log("click");
// }


first.addEventListener('click', handle);

ground.addEventListener('click', function(e) {
  console.log(e.offsetX, e.offsetY);

  ball.style.transform = `translate(${e.offsetX}px, ${e.offsetY}px)`;
});






// - addEventListener
// - removeEventListener