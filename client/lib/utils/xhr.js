

/* xhr.readyState 통신하는 상태 
0: uninitalized 초기화
1: loading 로딩
2: loaded 로딩이 완료됌
3:interative 인터렉티브
4:complete 완료
 */

// xhrData 함수 만들기 method, url 

export function xhrData({
//객체 구조 분해 할당을 하게 되면 초기값 설정이 가능합니다. 
  method = 'GET',
  url,
  //객체에 대한 메소드를 전달한거임
  onSuccess = null,
  onFalse = null,
  body = null,
  headers = {
    'Content-Type': 'application/json',
}
  }){


  const xhr = new XMLHttpRequest();


  // 비동기 통신 오픈
  xhr.open(method, url);


  //get 통신에 Header 설정
  console.log(Object.entries(headers));

  // xhr.setRequestHeader('name', 'tiget');

                                    //2중배열 즉 배열 안에 배열이 있는 경우  키와 값을 내가 찾고 싶으면
                                //2중 배열을 벗겨야 한다. 그럴때 배열 구조분해 할당을 이용해 키와 값을 
                                // 바로 찾을 수 있다. 
                                //forEach는 배 열자체에있는 값을 한번 돌고 // 돌기되면 배열안에 값을 반환합니다.
                                //하지만 지금은 2중 배열이기 때문에  키와 값을 찾을라면 한번더 배열을 돌아야한다.
                                //그래서 배열 구조분해 할당으로 인해 값을 찾으 수 있다.
                                //  또 배열안에 키와 값을 찾아서 
                                //console.log를 찍으면 키와 값을 얻을 수 있다. 

  //forEach는 배열 한바퀴를 돌면서 값들을 다 찾는다. 그런 다음 배열을 벗기고 값을 찾을 수 있다 2중배열이 아닌 경우에는
  
  // Object.entries(headers).forEach( ([key, value])=> {
  //     item으로 매개변수 지정할 경우  배열로 들어 가기 때문에 그 배열을 벗겨내야한다. 
  //   let key = item[0];
  //   let value = item[1];
  //   xhr.setRequestHeader(key, value);

  //   console.log (key, value);
  //   console.log(item);
 // })

 
  
 


  xhr.addEventListener('readystatechange',()=>{
    
    //xhr에 원하는 키의 값만 뽑아서 원하는 값을 가져옴  즉!! 프로퍼티를 가져옴

    const {status, readyState, response} = xhr;  //객체 구조 분해 할당
    if(status >= 200 && status < 400){
      if(readyState === 4){
        console.log('통신 성공');
        //함수 실행 
        onSuccess(JSON.parse(response));
        //처음에는 문자형태로 되어 있는데 !!! 내가 서버로 데이터를 보내기 위해 객체화 시킴 
        // JSON.parse를 써서 객체화 시킴  xhr의 내가 전달 받은 데이터 값을 GET은 내가 데이터를 받음 !!! 
        //console.log(JSON.parse(response))
      }  
    }else{
      onFalse('통신 실패');
      //console.error();
    }
  })

  //PUT 같은 경우 서버에 요청을 보낼때 body값을 같이 넣어서 보내줘야한다.

  // 서버에 요청

  //객체를 문자화 해서 보내줘야한다.
  xhr.send(JSON.stringify(body));
}

//함수 호출 부
// xhrData({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   // method:'GET',

//   //위에서 통신 성공에 JSON.parse(response)데이터를 가져와서 내가 써야한다. (받아와야한다)

//             //JSON.parse(response)의 객체를 result로 받았습니다.
//   onSuccess : (result) => {
//     console.log(result);

//   },
//   onFalse : (err) => {
//     console.log(err);
//   }
// })


// xhrData.post(

// )

// xhrData.delete();


//xhrData 객체에 get 메서드를 추가
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
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);


//xhrData 객체에 post 메서드를 추가
xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method : "POST",
    body,
    url,
    onSuccess,
    onFail
  })
}


// //get 메서드를 호출해서 사용한다.
// xhrData.post(
//   'https://jsonplaceholder.typicode.com/users',
  
//   {
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//     street: "Victor Plains",
//     suite: "Suite 879",
//     city: "Wisokyburgh",
//     zipcode: "90566-7771",
//     geo: {
//     lat: "-43.9509",
//     lng: "-34.4618"
//     }
//   },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//     name: "Deckow-Crist",
//     catchPhrase: "Proactive didactic contingency",
//     bs: "synergize scalable supply-chains"
// }
//   },
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );


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

// xhrData.put(
//   'https://jsonplaceholder.typicode.com/users/2',
  
//   {
//     name: "aaa",
//     username: "kssh",
//     email: "Shanna@melissa.tv",
//   },
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );


//xhrData 객체에 DELETE 메서드를 추가
//해당 url에 항목을 지워준다. 

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
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );



// xhrData('POST','https://jsonplaceholder.typicode.com/users', {
//   name: "kkkkkkkkkkkkk",
//   username: "aaaaaaaaaa",
//   email: "Sincere@april.biz",
//   address: {
//   street: "Kulas Light",
//   suite: "Apt. 556",
//   city: "Gwenborough",
//   zipcode: "92998-3874",
//   geo: {
//   lat: "-37.3159",
//   lng: "81.1496"
//     }
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//   name: "Romaguera-Crona",
//   catchPhrase: "Multi-layered client-server neural-net",
//   bs: "harness real-time e-markets"
//     }
//   })

