// 함수 선언 → 일반 함수 (표현)식

/** 
let calculateTotal = function() {

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 


  //let arr = Array.from(arguments) // static method

  let total = 0;
  
  let arr = Array.prototype.slice.call(arguments) // Instance Method

  arr.forEach(function(item,index){
    
     total += item;

   });

  return (total);
  
  
};

console.log(calculateTotal(1,2,3,4,5,6,7,100));

*/






// function normalFunction() {
//   console.log("일반함수 : ", this);
// }

// const allowFunction = () => {
//   console.log( "화살표함수 : ",this);
// }

// normalFunction(); // 호출한 대상을 this에 넣어서 부른다. 호출하는 함수에 따라 this 값이 달라진다.
//                           // 호출하는 대상 !!!!!!!
//                           //함수 호출 앞에 뭐가 있는지 !!!! 호출대상.호출함수();
// allowFunction(); // 부모를 따른다.  바인딩 하지 않는다. 


//객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
//메서드 안에서의 함수는 this 를 찾기 위해서는 arrowFunction 이 오히려 좋아



// const user = {
//   name:'tiger',
//   age:32,
//   address:'서울시 중랑구 면목동',
//   grades:[80,90,100],
//   totalGrades: function (){
//    /*  let total = 0;
//     this.grades.forEach((item)=>{
//       this
//     })
//     return total */

//     function foo(){
//       console.log('foo : ', this);
//     }

//     const bar = () =>{
//       console.log('bar : ', this);
//     }

//     foo.call(user) // user
//     bar() // user object

//   }
// }


// console.log(user.totalGrades());


function createUser(name , age) {
  return {
    name : name,
    age  : age,
  }
}

const user = createUser("kyoungho", 30);
const cup = new createUser("nawon", 20);
