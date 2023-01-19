import { typeError } from "../error/typeError.js";

/* xhr.readyState 통신하는 상태 
0: uninitalized 초기화
1: loading 로딩
2: loaded 로딩이 완료됌
3:interative 인터렉티브
4:complete 완료
 */
export function xhrData({
//객체 구조 분해 할당을 하게 되면 초기값 설정이 가능합니다. 
  method = 'GET',
  url,
  //객체에 대한 메소드를 전달한거임
  onSuccess = null,
  onFalse = null,
  body = null,
  //서버와 통신을 하기 위해 headers 영역을 매개변수로 설정해줬습니다.
  headers = {
    'Content-Type': 'application/json',
}
  }){
              //생성자 객체를 만들어줬습니다.
  const xhr = new XMLHttpRequest();

  // 비동기 통신 오픈
  xhr.open(method, url);

  //get 통신에 Header 설정 및 불러올 수 있다.
  //console.log(Object.entries(headers));
  xhr.setRequestHeader('name', 'tiger');

  // 2중 배열일 경우  키와 값을 찾고 싶으면 배열 구조분해 할당을 이용해 코드 와 같이 키와 값을 찾을 수 있습니다.
  // forEach는 배열 자체를 돌면서 배열을 벗긴 후 값을 반환해 줍니다. 만약 지금 코드와 달리 2중배열이 아닐 경우 매개변수에는 굳이 배열 구조분해 할당이 필요 없이
  //그냥 key와 value만 넣어서 return해 주면 됩니다.
  //하지만 지금은 2중배열인 관계로 배열구조분해 할당을 사용합니다.
  Object.entries(headers).forEach( ([key, value])=> {
  //   item으로 매개변수 지정할 경우  배열로 들어 가기 때문에 그 배열을 벗겨내야한다. 
  //   let key = item[0];
  //   let value = item[1];
  xhr.setRequestHeader(key, value);
  //console.log (key, value);
  // console.log(item);
 })
                      //맨위에 있는 state의 값이 바뀔때 마다 실행 됩니다.
  xhr.addEventListener('readystatechange',()=>{
    
    //xhr에 원하는 키의 값만 뽑아서 원하는 값을 가져옴  즉!! 프로퍼티를 가져옴
    const {status, readyState, response} = xhr;  //객체 구조 분해 할당
    if(status >= 200 && status < 400){
      if(readyState === 4){
        //console.log('통신 성공');
        //함수 실행 
        onSuccess(JSON.parse(response));
        //GET을 이용해 데이터를 받아서 화면에 뿌려줘야하기 때문에 객체화를 시킬 수 있는 JSON.parse()를 이용합니다.
      }  
    }else{
      onFalse('통신 실패');
      //console.error();
    }
  })

  // 서버에 요청
  //객체를 문자화 해서 보내줘야한다.
  xhr.send(JSON.stringify(body));
}

//함수 호출 부분
// 요게 첫번째 방법 !! 함수를 호출 한 후 , 매개변수로 객체를 전달하고,  객체 안에서, 프로퍼티와  화살표 함수 메소드를 이용해 GET 통신 하는 방법 
xhrData({
  url: 'https://jsonplaceholder.typicode.com/users',
  method:'GET',

            //JSON.parse(response)의 객체를 result로 받았습니다.
  onSuccess : (result) => {
    //console.log(result);

  },
  onFalse : (err) => {
    //console.log(err);
  }
})

//xhrData 함수에(함수지만 타임이 object이므로 객체처럼 사용 가능!!) get 메서드를 추가
//xhrData함수이지만 typeof로 확인하면 object로 나오기 때문에 함수도!!! 객체처럼  점(.)을 이용해 메서드를 추가 할 수 있습니다.
xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
}

//get 메서드를 호출해서 사용한다.
xhrData.get(
  'https://jsonplaceholder.typicode.com/users/4',
  (res) => {
    //console.log(res);
  },
  (err) => {
    //console.log(err);
  }
);

//xhrData 객체에 post 메서드를 추가
//post 이기 때문에 body값이 필요합니다. 
xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method : "POST",
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.post(
  'https://jsonplaceholder.typicode.com/users',
  
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
    street: "Victor Plains",
    suite: "Suite 879",
    city: "Wisokyburgh",
    zipcode: "90566-7771",
    geo: {
    lat: "-43.9509",
    lng: "-34.4618"
    }
  },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
    name: "Deckow-Crist",
    catchPhrase: "Proactive didactic contingency",
    bs: "synergize scalable supply-chains"
}
  },
  (res) => {
    //console.log(res);
  },
  (err) => {
    //console.log(err);
  }
);

//xhrData 객체에 PUT 메서드를 추가
xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method : "PUT",
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.put(
  'https://jsonplaceholder.typicode.com/users/2',
  
  {
    name: "aaa",
    username: "kssh",
    email: "Shanna@melissa.tv",
  },
  (res) => {
    //console.log(res);
  },
  (err) => {
    //console.log(err);
  }
);

//해당 url에 항목을  꼭 입력해줘서 정확하게 지워줘야 합니다. 
xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method : "DELETE",
    url,
    onSuccess,
    onFail
  })
}

// xhrData.delete(
//   'https://jsonplaceholder.typicode.com/users/2',
//   (res) => {
//     //console.log(res);
//   },
//   (err) => {
//     //console.log(err);
//   }
// );









//Promise API


const defaultOption = {
  url : '',
  method : 'GET',
  headers : {     
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  },
  body : null,

}


export function xhrPromise(option = {}) {

  const xhr = new XMLHttpRequest();

  //바로 합성과 동시에 구조 분해 할당을 넣어준다.                        위에서 정의한 객체, 내가 새로 받은 객체 값 
  const {method, url, body, headers} = Object.assign({}, defaultOption, option);
                                                  //빈객체 {}에 모두 넣어준다.

  //let config = { ...defaultOption};
  //config = { ...config, ...option};
  //const {method, url, body, headers} = config;


  if(!url) {
    typeError("서버와 통신 할 수 없습니다 url 넣으세요 ~")
  }

  xhr.open(method, url);

  
  xhr.send( body ? JSON.stringify(body) : null);

  return new Promise((res, rej)=> {
    xhr.addEventListener('readystatechange', ()=> {
      const {status, readyState, response} = xhr;

      if( status >= 200 && status < 400) {
        if(readyState === 4) {
          
          res(JSON.parse(response));
          console.log("성공");
        }
      }else {
        rej("에러입니다.");

      }
    })
  })

}

// xhrPromise({
//   url : 'https://jsonplaceholder.typicode.com/users/2'
// })
// .then( (result)=> {
//   result;
// })
// .catch((err) => {
//   console.log(err);
// })




xhrPromise.get = (url) => {
  //프로미스 객체가 튀어 나와야하기 떄문에 return을 해줘야 한다.
  return xhrPromise({
    method : "GET",
    url,
  })

}

//promise의 return 값을 받는다 !!! 
// xhrPromise.get('https://jsonplaceholder.typicode.com/users')
// .then((res)=> {
//   console.log("get 통신 성공 ");
// }).catch((err)=> {
// console.log("실패 ");
// })



xhrPromise.post = (url, body) => {
  //프로미스 객체가 튀어 나와야하기 떄문에 return을 해줘야 console.error('한다',한다)
  return xhrPromise({
    method : "POST",
    url,
    body
  })
}

xhrPromise.put = (url, body) => {
  //프로미스 객체가 튀어 나와야하기 떄문에 return을 해줘야 console.error('한다',한다)
  return xhrPromise({
    method : "PUT",
    url,
    body
  })

}

xhrPromise.delete = (url) => {
  //프로미스 객체가 튀어 나와야하기 떄문에 return을 해줘야 console.error('한다',한다)
  return xhrPromise({
    method : "DELETE",
    url,
  })

}

//promise의 return 값을 받는다 !!! 
// xhrPromise.post('https://jsonplaceholder.typicode.com/users/2')
// .then((res)=> {
//   console.log("get 통신 성공 ");
// }).catch((err)=> {
// console.log("실패 ");
// })


