export 
function isNumericString(data) {
  data = Number(data); // asd123

  return (!(isNaN(data))); //숫자면 false //문자와 숫자 true 
}