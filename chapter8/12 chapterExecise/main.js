// let a = 123

// function abc(){
//   let a = 100
//   return function(x){
//     a += x
//     console.log(a)
//   }
// }

// const c = abc()
// c(200)
// c(600)
// const d = abc()
// d(666)
// console.log('结束了')

// function fn() {
//    a = 0 
//   return function(b) {
//     return b + a++
//   }
// }
// var f = fn() // a -> 0
// console.log(f(5)) // 5  a-> 1  
// console.log(fn()(5)) // 5  a ->1
// console.log(f(5)) // 6  a -> 2
// console.log(a) // 

// function test(){
// 	setTimeout(function(){
// 		console.log(1)
// 	},1000)
// }

// function log(){
// 	console.log(3)
// 	setTimeout(function(){
// 		console.log(5)
// 	},0)
// }

// setTimeout(function(){
// 	console.log(2)
// },2000)

// log()
// console.log(4)
// 3
// 4
// 5 
// 2

// var test = (function(i) {
//   return function() {
//     console.log( i *= 2)
//   }
// })(2)

// test(5)

// 4

// 实现一个深克隆函数

// const obj = {
//   a:123,
//   b:{
//     x:123,
//     y:{
//       t:'是我'
//     }
//   },
//   c:true
// }

// function clone(o){
//   const cloneObj = {}

//   Object.keys(o).forEach((key,index)=>{
//     if(typeof o[key] === "object"){
//       cloneObj[key] = clone(o[key])
//     }else{
//       cloneObj[key] = o[key]
//     }
//   })

//   return cloneObj
// }

// const result = clone(obj)
// console.log(result.b.y === obj.b.y)


// 实现一个函数 不管传多少数据（数字）都能加起来的一个函数 加总结果返回 分别用剩余参数收集符和arguments来实现

// function allPlus(){
//   const arr = Array.from(arguments);
//   const all = arr.reduce((accumulator,currentValue) => accumulator + currentValue,0)
//   return all
// }

// console.log(allPlus(100,200,300))


// function allPlus(...all){
//   const result = all.reduce((accumulator,currentValue) => accumulator + currentValue,0)
//   return result
// }

// console.log(allPlus(100,200,300))

// 实现一个函数 当传参个数少于等于3个 相乘  ，如果传入参数大于3个 相加 返回结果（传入的都是数字类型数据）

// function test(){
//   const arr = Array.from(arguments)
//   let result;
//   if(arr.length <=3){
//     result = arr.reduce((accumulator,currentValue) => accumulator * currentValue,1)
    
//   }else{
//     result = arr.reduce((accumulator,currentValue) => accumulator + currentValue,0)
//   }
//   return result
// }

// console.log(test(2,8,6,6))

// 说出 bind apply 和call 三个方法的异同

// bind 返回函数 不立即执行  apply 和call是立即执行
// bind call 从第二个参数开始依次传入参数 不限数量
// apply 第二个参数 是数组 所有参数放入这个数组 没有第三个及后续参数

// 用三种写法 实现把函数中的arguments转成数组

// Array.from
// [].slice.call(arguments) -> Array.prototype.slice.call(arguments)
// [...arguments]


/* 
定义一个函数，函数中定义一个变量是一个数组，然后该函数返回一个对象，对象有两个方法，一个listen方法 ，只能传入函数，可以把传入的函数存入这个父函数中定义的数组中，同时还有另外一个方法，叫dispatch ，只要执行这个方法，就会将父函数中存入的各个函数依次执行

*/

function controller(){
  const  cache = []

  return {
    listen(fn){
      cache.push(fn)
    },
    dispatch(){
      cache.forEach(item => item())
    }
  }
}

const con = controller()
// console.log(con)
con.listen(()=>{console.log(666)})
con.listen(()=>{console.log(888)})
con.listen(()=>{console.log(999)})
con.dispatch()