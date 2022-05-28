// if else 

/* 
if 一定要有的 而且只能在开头 只有一个
else if   可以有也可以没有，而且可以不止一个 
else 可以有也可以没有，只能有一个，只能在最后

*/

// if(condition){
//   // 必须有且只能有一个，只能在开头
//     xxxxxx
//   }else if(condition){
//   // 可以多个，可以没有
//     xxxxxx
//   }else if(condition){
//     xxxxxx
//   }else{
//   //最多一个，可以没有,但一定在最后
//     xxxxxx
//   }

// 只要执行了其中一个分支的代码 ，整个if else语句就结束了
// 可以只写一个if

// if(condition){

// }else{

// }

// var age = 18

// if(age > 18){
// 	console.log('可以谈恋爱')
// }
// age = 19
// console.log(age)

var a = 5

if(a > 18){
	console.log('可以谈恋爱')
}else if(a > 10){
	console.log('可以烫头发')
}else if(a > 7){
	console.log('可以玩电脑')
}else{
  console.log('可以')
}


// a = 2
// console.log(a)