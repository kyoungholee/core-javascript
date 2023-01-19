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

// rendingUserList 함수 만들기
// ajax (tiger) get user List

// 유저 카드 생성
// 생성된 카드로 랜더링

//  1. userList.js로 갑니다.
//  2. renderUserCard 함수를 만들기
//  3. 만들어진 함수 안에 createUserCard를 던지고,
//  4. renderUserCard함수를 사용했을 때  랜더링이 잘 될 수 있도록.

const userCardContainer = getNode('.user-card-inner');


async function rendingUserList() {

  renderSpinner(userCardContainer)
  //getNode('.empty-user-card').remove();

  try{
    //await delayP(2000)

    getNode('.loadingSpinner').remove();

    let response = await tiger.get( 'http://localhost:3000/users/' );
  
    let userData = response.data;
    // userData.forEach(data=> renderUserCard(userCardContainer,data))
    userData.forEach((data)=> {
      renderUserCard(userCardContainer,data)
    })
  
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


//내가 클릭한 대상에 버튼만 수집!!!!  버튼만 수집 !! 한다. 
  //console.log(deleteButton);
}

//이벤트 위임을 이용한다. !! 
userCardContainer.addEventListener('click', handler);



//서버를 파고  json-data를 넣어준다.
/**
 * json서버 npm으로 이용한 서버 다운로드 
 *  이후 서버과 클라이언트를 열고
 *  서버는 3000번 클라이언트는 5000번이다.
 * 서버에서 get, post, delete, update를  사용 할 수 있다.
 * 
 * get은 그냥 가능하지만 update,delete는 서버를 확인하면서 해야한다.
 *  결국 fetch와 프로미스를 사용 하면 통신이 가능하다. 
 * fetcg로 get .. post . delete할 서버에서 데이터를 받는 역할이고 
 * 프로미스는 then을 이용해 성공과 실패를 나누고 비동기 통신을 할 ㅜㅅ 있다.
 * 
 * 
 */
