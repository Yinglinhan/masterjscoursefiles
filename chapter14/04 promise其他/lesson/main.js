// 三个原型方法

// then 

// Promise.prototype.catch
// 相当于调用 then(null,handleRejected)
// 只传一个函数 相当于是handleRejected函数
// 函数也有参数 可以获取到 实例的数据
// 该方法也会返回一个新的promise实例

// const p1 = new Promise((resolve, reject) =>{reject(1)})
// p1.catch((err) =>{console,log(err)})


// Promise.prototype.finally
/* 
只传一个函数 作为参数  函数没有参数 不需要形参

不管父实例的状态是fullfilled 还是 rejected 都会执行

这个方法主要用来清理代码 或 一些不管是什么状态下都要执行的代码

finally方法 也会产生一个新的promise实例

父实例的状态和数据会原样后传

函数中返回的数据 不会改变实例的数据

*/

// const p1 = new Promise((resolve, reject) =>{reject(1)})
// const p2 = p1.finally(() =>{return 111})
// console.log(p2 === p1)

// 静态方法

// Promise.resolve() 产生一个fullfilled状态的实例 
// 可以传入一个参数 这个参数 就是这个实例的数据

// Promise.reject() 产生一个rejected状态的实例
// 可以传入一个参数 这个参数 就是这个实例的数据


// console.log(Promise.resolve(111))
// console.log(Promise.reject(222))


// Promise.all()  全部
// 要传入一个可迭代对象 比如说数组 
// 数组里面都是promise实例
// 执行返回一个新的promise实例
// 这个实例的状态和数据 根据数组中的promise实例们的状态来决定的
/* 
如果所有都是 fullfilled 那这个实例也是fullfilled状态 数据是数组中所有实例的数据组成的数组

如果有一个是rejected 那么这个实例也是rejected状态 数据就是这个rejected实例的数据

（多个rejected实例的话 只用第一个的数据）

全部是fullfilled 返回的才是fullfilled
只有有一个rejected 返回的就是rejected

*/

// const p = Promise.all([
//   new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(666)
//     },3000)
//   }),
//   Promise.reject(222)
// ])
// console.log(p)


// Promise.race() 比赛 也是返回一个promise实例
/* 
只要第一个落定 Promise.race就会包装其解决值或拒绝理由

第一个拒绝 返回的实例就是就拒绝 第一个解决 返回的实例就是解决

其他promise拒绝 会被静默处理

就看第一个变状态的就好 

*/


// Promise.any() 任何一个   也是返回一个promise实例

/* 
只要其中一个实例的状态变为fullfilled状态  返回的这个实例就是fullfilled状态 数据就是该实例的数据

如果所有的实例都是rejected状态 返回的这实例的状态就会变成rejected 数据是所有rejcted实例的数据组成的数组

全部是rejected 返回的才是rejected
只有有一个fullfilled 返回的就是fullfilled

*/




// const p = Promise.any([
//   new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       reject(666)
//     },3000)
//   }),
//   Promise.reject(222)
// ])
// console.log(p)