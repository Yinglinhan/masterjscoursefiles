// const a = 123



// function test(){
//   let a  = 100
//   setTimeout(() =>{
// 		a = 300
// 		console.log(this)
// 	  console.log(a)
   
//   },5000)
// }

// test.call({name:'好奇代码的三木'})

/* 
问题一  控制台会输出什么 

问题二  被settimeout设置为异步函数的这个箭头函数的作用域链 Scopes属性中的数组和顺序
[{this:xx,a:xx},{a},{global object}]
*/


/* 
定义一个函数，专门用来生成0-100随机数（都包含），但是生成的随机数，必须是偶数

*/

// function ran(){
//   const ranNum = Math.floor(Math.random() * 100)
//   if(ranNum % 2 === 0){
//     return ranNum
//   }else{
//     return ran()
//   }
// }



// console.log(ran())


/* 
定义一个派生类，派生自Date，这个类的实例有一个原型方法，可以计算中该时间实例的是该年中的第几天 （假设每个月都是30天 一年是360天，用UTC时区计算）

*/

// class Cdate extends Date {
//   calDay(){

//     const months =  this.getUTCMonth()
//     const day =  this.getUTCDate()

//     const result = months * 30 + day
//     return result
//   }
// }

// const ndate = new Cdate("1986-02-08")

// console.log(ndate.calDay())

// 1 > 3 ? true : false ? '1' === 1 : '好奇代码的三木' ? 100/2 : '好好' + '学习' 

/* 
用立即执行函数返回一个函数，这个函数有一个形参，这函数要么传函数作为参数，要么不传参数，同时如果传入超过一个参数 会抛出错误 提示只能传一个参数，如果传的不是函数，也会抛出错误，提示只能传函数类型的数据，如果把函数作为实参传入，那么被传入的这个函数将会被存在闭包中，如果不传入实参，那么之前传入的那些存起来的函数，将会被依次 以后传的先执行 依次执行

*/


// const allFn  = (function(){
//   const cache = []
//   return function(fn){
    
//     if(arguments.length === 0){
//       cache.forEach(fn => fn())
//       return
//     }

//     if(arguments.length > 1){
//       throw new Error("只能传入一个参数")
//     }

//     if(typeof fn !== 'function'){
//       throw new Error("只能传入函数")
//     }else{
//       cache.push(fn)
//     }
//   }
// })()

// allFn(22323)
// allFn(()=> console.log(8))
// allFn(()=> console.log(6999))
// allFn()

// 给函数类型定义一个新的原型方法，叫做after，该方法返回一个函数

// const fn = afn.after(bfn)
// fn()// afn先执行 bfn后执行

Function.prototype.after = function(fn){
  // console.log(this)
  const self = this
  return function(){

    self()
    fn()
  }
}

function test(){
  console.log(111)
}
const resultFn = test.after(function(){console.log(222)})
resultFn()