/* global gsap */

import {
  tiger,
  delayP,
  getNode,
  insertLast,
  changeColor,
  renderSpinner,
  renderUserCard,
  renderError,
  attr
} from './lib/index.js';

// 유저 카드 생성
// 생성된 카드로 랜더링

//  1. userList.js로 갑니다.
//  2. renderUserCard 함수를 만들기
//  3. 만들어진 함수 안에 createUserCard를 던지고,
//  4. renderUserCard함수를 사용했을 때  랜더링이 잘 될 수 있도록.

const userCardContainer = getNode('.user-card-inner');

async function rendingUserList() {

  renderSpinner(userCardContainer)

  try{
    //await delayP(2000)

    getNode('.loadingSpinner').remove();
                                //json서버로 부터 데이터를 받아옴
    let response = await tiger.get( 'http://localhost:3000/users/' );
  
    let userData = response.data;
    // userData.forEach(data=> renderUserCard(userCardContainer,data))
    userData.forEach((data)=> {
      renderUserCard(userCardContainer,data)
    })
  
    //색과 애니메이션
    changeColor('.user-card');
    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0,
      opacity:1,
      duration:1.5,
      stagger: 0.2,
    })
  }catch(err){
    renderError(userCardContainer)
  }
}
//여기까지 get으로 보여준다.
rendingUserList();

//이벤트 위임을 통해 !! 내가 원하는 버튼 혹은 대상만 찾을 수 있다.
//가장 상위에 있는 클래스를 선택한 후
/**
 * 내가 클릭 할 버튼을 이벤트로 만들어 준다
 * 그런 다음 콜백함수에 e.target.closest를 이용해 해당 태그를 가져옵니다.
 *  e.target.closest('button');
 */
function handler(e) {
  //누른 대상에 인접한  button 있으면 허용이다.
  let deleteButton = e.target.closest('button');
              //누른 대상에 인접한  article이 있으면 허용이다.
  let article = e.target.closest('article');

  if(!deleteButton || ! article) {
    console.log("asdasd");
    return;
  }

  let id = attr(article, 'data-index').slice(-1);

    //하나 지우고 , 다시 카드를 쭉 없애고 다시 뿌려줘야한다.  (리렌더링)
  tiger.delete(` http://localhost:3000/users/${id}`).then(()=> {
    //요소들을 한번 싹!!! 비우고

    //remove를 쓰면  '.user-card-inner 태그 자체가 없어진다.
    //우리는 태그 안에 속성을 지워야하기 때문에 innerHTML을 사용한다.
  userCardContainer.innerHTML = '';
  //다시 get 해준다.
  rendingUserList();
  })
  console.log((id));
}

//부모 노드를 받는다.~ 이벤트 위임을 이용한다. !! 
userCardContainer.addEventListener('click', handler);





