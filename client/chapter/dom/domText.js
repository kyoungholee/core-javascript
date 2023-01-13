const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
function handler() {
  console.log("test!!");

  //second.remove();

  //second.after(third);

  let template = '<div class="box">새롭게 추가된 엘리먼트 입니다.</div>'

  first.insertAdjacentElement('afterend', third );

}

first.classList.add("f");

first.classList.add("kyounsds");
first.setAttribute('class', 'hohoho');


first.addEventListener('click',handler);


second.addEventListener('click', (e) => {
  console.log(e.target.value);
})

console.log("test");
