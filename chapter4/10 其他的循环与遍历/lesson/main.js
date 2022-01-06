// while

// while(condition){
// 	// 要执行的语句
// }

// var a = 0
// while(a < 10){

// 	console.log(a)
// 	a++
// }




//do white

// do{
//   // 要执行的语句
//   }while(condition)

// var a = 10

// do{
// 	a++
//   console.log(a)
// }while(a < 11)



// var a

// do{
// 	a = 0
// 	console.log(a)
// 	a++
// }while(a < 10)


// for in   , for of  遍历 迭代

// for in 只跟对象配合使用

// var person = {
// 	name:"小明",
// 	age:12,
// 	gender:"male",
// 	height:150
// }


// for(var key in person){
//   if(key === "gender"){
//     break;
//   }
//   console.log(key,person[key])
// }
// for(var key in person){
  
//   // console.log(key,person[key])
//   // person[key] = 66
//   if(key === 'age'){
//     person[key] = 20
//   }
// }

// console.log(person)

// in 
// if('type' in person){
//   console.log('有type')
// }else{
//   console.log('没有type')
// }

var obj = {
	name:'',
	age:0,
	gender:'',
	height:''
}

// 用for in 给对象的每个属性设置不同的值