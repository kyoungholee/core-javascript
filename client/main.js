import {xhrData, insertLast, xhrPromise,tiger} from './lib/index.js'


//뿌려준다. 
// xhrPromise.get('https://jsonplaceholder.typicode.com/users/4')
// .then((res)=> {
//   insertLast(document.body, JSON.stringify(res));
// }).catch((err)=> {
//   console.log(err);
// })

// xhrData.get(
//   'https://jsonplaceholder.typicode.com/users/4',
//   (res) => {

//       insertLast('body' ,JSON.stringify(res));
//   },
//   (err) => {
//     console.log(err);
//   }
// )


//fetch를 만든거를 쓸 수 있다.

console.log(tiger);

tiger.get(
    'https://jsonplaceholder.typicode.com/users/2',
  )


