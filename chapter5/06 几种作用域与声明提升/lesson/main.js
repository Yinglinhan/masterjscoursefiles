// 全局作用域  函数作用域  块级作用域

// 声明提升 hosting
// console.log(a)

// var a = 0
// var a
// a = 0

// 用函数声明的方式来定义函数 也会有声明提升效果
// abc()

// function abc(){
// 	console.log('abc执行了')
// }

// a = 100
// console.log(a)

// function abc(){
// 	a = 123
// 	var b = 345
// 	console.log('abc执行了')
// }

// abc()

// console.log(a)
// console.log(b)

{
	var a = 100
	function test(){
		console.log('test')
	}	
}

console.log(a,test)