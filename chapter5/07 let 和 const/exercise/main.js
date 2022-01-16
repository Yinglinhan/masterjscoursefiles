
// {
// 	const a = 1
// 	let b = true
// 	var c = 100
// 	function abc(){
// 		console.log(666)
// 	}
// }

// // 哪些能在全局作用域中访问到
// console.log(c)
// console.log(abc)
// console.log(b)

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