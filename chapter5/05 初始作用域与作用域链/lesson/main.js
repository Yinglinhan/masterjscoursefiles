// var a = 1, b = 2;

// console.log(a)

// function test(){
// 	var c = 3
// 	console.log(b)
// }

// test()
// console.log(c)

// 函数执行 会形成自己的作用域
// 函数内部声明 或者 定义的标识符 只在函数内部能够访问
// 函数外部无法访问到函数内部的标识符

// var a = 1, b = 2;

// console.log(a)

// function test(){
// 	var c = 3
//   // var b = 666
// 	console.log(b)
// }

// test()
// console.log(c)
// 如果函数内有和外部同名的标识符 只要在内部找到了就不会往外找了
// 具有遮蔽的效果



/* 

function main(){
	var a = 1, b = 2;

	console.log(a)

	function test(b){
		// b->888
		var c = 3
		console.log(b)
	}

	test()
	console.log(c)


}


*/

// 直到找到最外层

// console.log()

// var a = 1, b = 2;

// console.log(a)

// function test(b){
// 	var c = 3
// 	// console.log(word)
// 	function hello(){
// 			var word ='hello' 
// 			console.log('hello')
// 			console.log(a)
// 			console.log(b)
// 	}
// 	hello()
// }

// test(888)

//从里到外 找到即止

// var a = 1, b = 66;

// console.log(a)

// function test(a,b,c){
// 	c = 3
// 	console.log(a,b,c)
// }

// test(100,2,6)
// 输出什么

var t = 6

function test(a,b,c){
	
	console.log(a,b,c)

	c = 3
	b = 200
	
	function inner(a){
			var abc = 10 * b
				
			console.log(a * abc)

	}

	inner(c)
}

// test(t,30,50)

// 输出什么