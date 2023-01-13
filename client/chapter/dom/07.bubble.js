/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');

const news = getNode('.news');

const desc = getNode('.desc');
const pop = getNode('.pop');


//visual === 함수를 호출한 대상 !! 
visual.addEventListener('click', function(e) {
  console.log("visasd");
  //console.log(e.target); //내가 직접 클릭한 대상이다 !!!!!!!!!!!!!!!!!!!!!!!!!!!! 내가 직접한거 

  console.log(e.currentTarget); // 이벤트가 직접 가해진곳 !! 내가 이벤트를 건곳 
  // 이벤트가 걸린 곳 !! 

  console.log("this : ", this);
  // CSS('.pop', 'display', 'block');
  pop.style.display = 'block';
})

// first.style.transform = 'rotate(140deg)';


getNode('.pop').addEventListener('click', () => {
  CSS('.pop', 'display', 'none');
})


// news.addEventListener('click', function(e) {
//   console.log(e.target);
//   console.log(e.currentTarget)
//   console.log("news");
// })

// desc.addEventListener('click', function(e) {
//   e.stopPropagation();
//   console.log("desc");
//})

//target
//current target

/* 캡처링 ----------------------------------------------------------------- */










visual.addEventListener('click',(e) => {
  let elem = e.currentTarget;


    console.log(elem); //visual 노드 전체를 보여줌.
    console.log(this); // window를 보여준다.

});