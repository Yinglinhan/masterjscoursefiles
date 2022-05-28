// go()
// // 函数声明
// // function go(){
// //   console.log('go')
// // }

// // 函数表达式
// // 第一次赋值的给的变量名 就是 函数名

// // var go = function (){
// //   console.log('go')
// // }

// // go()


// // 箭头函数
// var arrowSum = (a, b) => {
// 	return a + b
// }

// var abc = () => 1
// // 没有参数 要用括号。如果函数题中只有一条语句 不用花括号 直接跟 箭头会有return的作用

// var bcd = () => {
//   return 2
// }
// // 如果用了 大括号 箭头就没有return的作用 如果要有返回值 就要手动写一个return

// // console.log(bcd())

// var  e = a => {

// }


// var  g = a => a

// // 如果只有一个参数  可以不用圆括号
// // console.log(g(2))
// var obj = {
// 	name:'小明',
// 	walk:()=>{
// 		console.log('我正在走路')
// 	},
//   // walk(){

//   // },
//   // talk:function(){

//   // },
// 	gender:'male'
// }

// obj.walk()

// // 函数的命名要注意可读性  语义性
// function sum(x,y){

// }

// sum(1,2)


function a(){
	return 1
}

function b(x){
	return x
}

function c(x,y){
	return x + y
}

function d(x,y,z){
	
	var result = x + y + z
	return result
	
}

// 那这四个函数分别用函数表达式的方式箭头函数的方式重写