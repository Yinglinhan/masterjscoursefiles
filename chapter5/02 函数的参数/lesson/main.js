
// function speak(x){
// 	console.log(x)
// }

// speak('哎哟不错哦')
// speak('哎哟 蛮屌的哟')
// speak('哎哟 厉害咯')

// speak(1)
// speak(true)
// speak(null)
// speak({
// 	name:'我是小明'
// })
// 函数不能重复声明

// 函数名不能和变量冲突 
// function speak(x, y, z, a, bcd){
// 	console.log(x)
// 	console.log(x)
// 	console.log(x)
// 	console.log(y)
// 	console.log(z)
// 	console.log(a)
// 	console.log(bcd)
// }

// speak(1,2,3,4,5)

// function div(a, b){
// 	var result = a / b
// 	console.log(result)
// }

// div(1,2)
// div(2,1)
// div(,2)

// 定义了几个参数 执行时就用几个参数

// function test(a,b){
// 	console.log(a,b)
// }
// test(3)

// 定义时的参数 叫 形参 形式上的参数
// 执行函数时传入的参数 叫做 实参  实际上的真实使用的
// var obj = {
// 	walk:function(x,y){
// 			//
// 	},
// 	speak(x){
// 				//
// 	}
// }


// function testFn(x){
// 	x()
// }

// function hello(){
// 	console.log('hello')

// }

// testFn(hello)

// 传参时，实参的位置和形参的位置是一一对应的
// function speak(x, y, z, a, bcd){
// 	console.log(x)
// 	console.log(x)
// 	console.log(x)
// 	console.log(y)
// 	console.log(z)
// 	console.log(a)
// 	console.log(bcd)
// }

// speak(1,3,6)

/* 
1. 声明一个函数，这个函数可以传入一个参数，然后执行这个函数的时候如果传入的是布尔类型的值，会输出文字-我是布尔值，如果传入的是字符串类型的数据，会输出-我是字符串。如果传入的是数字类型的数据，会输出该数字，如果传入的是其他类型的数据，那么会输出-我是其他的
*/

/* 
	function callFunc(fn){
		fn()
	}
这个函数该如何修改 才能在传入的参数不是函数的时候不报错 而在传入的参数是函数的时候正常执行
*/

/* 
声明一个函数,设置一个参数，如果函数执行时传入的实参是对象类型，同时没有一个name属性，那么会给这个对象设置一个name属性，属性值为任意
*/
