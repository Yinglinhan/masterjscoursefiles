// function factorial (num) {
// 	if(num <= 1){
//         return 1;
//     }else{
//         return num * factorial(num - 1);
//     }
// }

function factorial (num) {

  switch(true) {
    case num <= 1:
      return 1;
    default:
      return num * factorial(num - 1)
  }


}
console.log(factorial (4))