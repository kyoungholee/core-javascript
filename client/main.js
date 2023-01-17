const pr = new Promise ((resolve, reject) => {
  console.log("내가 첫번쨰따!!!!!!!!!!!!!!!!!") // 이부부은 비동기임 !! 
  setTimeout( ()=> {
    resolve("OK");
  }, 1000);
})


console.log("asdasd");

pr.then( (내가받음) => {
  console.log(내가받음);
})

.catch((err) => {
  console.log(err);
})