
//fetch mdn에서 헤더를 볼 수 있다. 
const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-reffere',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}

//fetch API 만들기 !!! axios 처럼 만들기 !!
//fetch를 이용해 get 방식으로 외부에 데이터를 가져오는 방법 ~~!! 
export const tiger = async (option = {}) => {

  // let config = { ...defaultOptions};
  // config = { ...config, ...option};


//내가 직접 넣은 url을 뺀 나머지 객체들이 들어간다.
                              //합성과 동시에 추출         
  const {url, ...restOption} = {...defaultOptions, ...option,
                                // option에서 바뀌지 않는 값은 defaultOptionsd에서 기본값을 그대로 넣는다.

              //얕은 복사 이후 한번더 얕은 복사를 함 ---> 당장 깊은 복사를 할수가 없으니
              //'Content-Type':'application/json; charset=UTF-8'이 값을 뽑기 위해
    headers : { ...defaultOptions.headers, ...option.headers}
                                          //바뀐 headers 값이 있을 수도 있으니
  }


  let response = await fetch(url, restOption);


  // 'https://jsonplaceholder.typicode.com/users/2',
  // //객체를 꼭 !! 열어야한다.
  // {
  //   method : 'GET',
  //   headers : {
  //     'Content-Type': 'application/json',
  //   },
  //   body : null
  // }


  
  // response.then((res)=> {
  // console.log(res);
  // })

  
  //fetch에서는 ok를 붙이면 성공을 표시한다.

  if(response.ok) {

                          //알아서 JSON.parse() 자체를 알아서 해준다.
                    //받은 값이 promise이기 때문에  await를 붙여서 넘겨줘야합니다.
                    //그래야 순수한 data 값을 얻을 수 있습니다.
    response.data = await response.json();
                        //response.json()은 프로미스를 반환합니다.
  }


  console.log(response);

  return response;

}



tiger.get = (url, option) => {
  return tiger({
    url,
    ...option,

  })
}


tiger.post = (url, body, option) => {
  return tiger({
    method : "POST",
    url,
    body : JSON.stringify(body),
    ...option
  })
}



tiger.put = (url, body, option) => {
  return tiger({
    method : "POST",
    url,
    body : JSON.stringify(body),
    ...option
  })
}


                    //객체 값을 받는다. 
tiger.delete = (url, option) => {
  return tiger({
    method : "POST",
    url,
    ...option
  })
}

