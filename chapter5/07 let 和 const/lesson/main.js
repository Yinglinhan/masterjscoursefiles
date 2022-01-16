// {
// 	const a = 100
// 	const test = function (){
// 		console.log('test')
// 	}	
// }

// console.log(test)
// console.log(a)

//const
// const abc = 1
// abc = 2
// const obj = {
// 	name:'xxx'
// }
// obj.name = 'yyy'
// obj.type = 'new'


// obj = {}
// 首先是 let 和const声明的标识符

 //首先是 let 和const声明的标识符 不能在声明前访问或使用

 // let 和 const  不能重复声明同名标识符
// console.log(a)
	// var a = 100
	// var a =200

// “暂时性死区”（ temporal dead zone，简称 TDZ）
/* 
{
	a

}
*/

// function a(x){
//   let x = 0
// }

// a()

//let和const要点
/* 
	共同点

	两者会被块级作用域锁定 

	外部无法访问到在块级作用域中用let 和const声明的标识符

	声明的变量一定要在声明代码后面才能正常访问和使用 不然会报错


	不同的

	const 声明时就一定要赋值 不然会报错

	let 可以先声明 需要赋值的时候再赋值 未赋值前变量值是undefined
*/

// {
// 	const a = 1
// 	let b = true
// 	var c = 100
// 	function abc(){
// 		console.log(666)
// 	}
// }
// // 哪些能在全局作用域中访问到

const b = 200
const a = '好奇代码的三木'

{
	const a = 1
	let b = true
	var c = 100
	function test(x){
		console.log(x)
	}
  test(a)
}
// test(b)
// 输出什么
