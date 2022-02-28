// Uncaught 未捕获 
// ReferenceError 引用错误
// TypeError 类型错误
// SyntaxError 句法/语法 错误

// Error 基本类型 所有其他错误类型都派生于它
/* 

InternalError 会在底层JavaScript引擎排除异常时由浏览器抛出

EvalError 会在使用eval函数发生异常时抛出

RangeError 错误会在数值越界时抛出

URIError 只会在使用encodeURI或者decodeURI但传入了格式错误的URI时发生
*/
// throw new TypeError('我是一个错误')

// 抛出一个错误类型的实例

// 自定义错误类型
// 一定要有 name 和 message
// class CustomError extends Error {
//   constructor(message){
//     super()
//     this.message = message
//     this.name = "bigError"
//   }
// }

// throw new CustomError('hhhhh')

// function test(){
//   if(arguments.length < 2){
//     throw new CustomError("我需要两个参数")
//   }else{
//     console.log(arguments)
//   }
// }

// test(1)

// function test1(){
//   console.log(b)
// }

// function test(){
//   test1()
// }

// test()
/* 
自定义一个错误类型 ，然后定义一个函数，该函数在执行时会在某个情况下抛出这个自定义的错误
*/