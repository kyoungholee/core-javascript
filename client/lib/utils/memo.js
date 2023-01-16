

/** 메모제이션을 이용한 클로저 예제 문제!!!!!!!!!!! 
 * 메모제이션에 callback 함수를 기억하고 
 * 다시 key 값만 불러오게 되면 기억되어있는 공간에서 value을 반환합나다.
 */


/**react에서의 useMemo와 비슷한 개념이다 !!!! 
 * 
 * 저장을 해놓고 언제든지 사용 할 수 있다.
 * dom에서  ()=> document.querySelector('#cube')이런식으로 
 * 자주 사용하는 dom을 제어하거나 계속해서 사용하는 dom을 재사용할 때 많이 사용할 수 있씁니다.
 * 
 */
export const memo = () => {
  
  const cache = {}

  return (key, callback) => {

      //get 부분 단순히 보여준다. 
  if(!callback) { 
    console.log("반환")
    return cache[key]; //cache 키의 반환 값 
  }



  if(cache[key]) { //cache에 키가 이미 있어?? 그럼 그냥 return 만해 !!
    console.warn("이미 키 값이 존재 합니다.")
    return;
  }

            //콜백함수 실행      콜백함수로 굳이 매개변수로 받는 이유는 많은 양에 코드를 넣기 위함 
            cache[key] = callback(); //key에 value 값으로 들어감 
          //여기서 callback 함수가 기록 됩니다. 
          //받은 콜백함수를 호출한 다음 cache[key] 값에 함수 호출 값을 저장해준다.

            console.log(cache);
          
  }
}







//값을 설정한다 set

//클로저 실행시 !!! 한번 더 호출을 해줘야한다.
memo()('cube', ()=> document.querySelector('#cube'));


//위에서 설정한 값을 가져옴  get!!! 
//클로저 실행시 !!! 한번 더 호출을 해줘야한다.
memo()('cube');
