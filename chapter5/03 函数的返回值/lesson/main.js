
// 函数中专用关键字 return 返回的意思
// return 只能跟一个值 表达式




// function sum(x, y){
// 	var result = x + y
// 	return result
// }

// console.log(sum(1,2))
// function a() {

//   return 1 + 2
// }

// console.log(a())

// return 后面 的语句是不会执行的 整个函数就执行结束了
// 跟在return后面的表达式是会执行的 return会返回表达式的记过
// function a(x, y){
// 	return x + y
// 	console.log(666) // 这句就不会执行了
// }

// console.log(a(1,2))

// function sum(x, y){
// 	var result = x + y
// 	return
// }
// console.log(sum(2,5))

// 函数执行是一定会返回东西 要么是我们自己设定的 要么是undefined

// var temp;

// function sum(x, y){
// 	var result = x + y
// 	return result
// }

// temp = sum(2,5)

// console.log(temp)

// 函数内也可以声明 定义 函数
// function g(){
// 	// var a = 22
// 	function abc(){
// 		console.log('我是abc')
// 	}

// 	return abc

// }

// var temp = 100
// temp = g()()

// console.log(temp)

// var a = 1

// var obj = {
// 	name:"xx"
// }

// function abc(){
// 	return 'abc'
// }
// function t(){
// 	return 1
// }

// console.log(a)
// console.log(obj.name)
// console.log(abc(t()))
// console.log(abc() + '加上我')

// function sum(x, y){
// 	var result = x + y
// 	return result
// }

// function multi(x,y){
	
// 	return x * y
// }

// // multi(2,sum(3,6))
// console.log(multi(2,sum(3,6)))

// 函数是 一等公民
// 所谓一等公民，你可以理解为就是可以作为参数传递，从函数返回，修改并分配给变量
// function func(x){
//   return x * 100
// }

// function func2(x,y,z){
//   return x  + y + z
// }
// function func3(x,y){
//   return x * y 
// }


// func(func2(func3(1,6),8,10)) // 结果是多少


// function go(x,y){
//   var a = x + y
//   console.log(a)
//   return a
//   var b = x * y
//   console.log(b)
// }
// // go(3,6)

// function test(x){

//   if(typeof x === 'number'){
//     console.log(x)
//     return true
//   }else if (typeof x === 'string'){
//     return  x + '嘿嘿嘿'
//   }else{
//     console.log(x)
//   }
// }

// test(true)
// test('true')
// 判断返回什么

/* 
定义一个函数 如果传入的是数字类型的数据 根据数值大小返回不同的成绩等级判定文字

小于60 不及格

60-80 良好

80-90 优秀

90-100 顶呱呱

传入的如果不是数字类型的数据 全部返回 去你大爷的
*/