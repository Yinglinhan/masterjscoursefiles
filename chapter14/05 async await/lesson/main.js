// async asynchronous 异步
// await 等待的意思

/* 

async function foo() {}

let bar =  async function() {}

let baz = async () => {}  // 箭头函数也可以

class Qux {
	async qux(){}
}

async关键字可以让函数具有异步特征
要配合await这个关键字 
目前的语言标准值中 只有在async函数中才能使用await
await 左侧及下方代码会是异步状态
await 右侧及上方代码会是同步状态
await关键字 一般情况后面是要跟一个 promise实例的
await 会等到这个promise实例变成fullfilled 之后 解析出实例的数据
*/

// console.log(1)

// async function test(){
//   console.log(4)
//   // throw new Error("11")
//   await new Promise(function(resolve, reject){})
//   console.log(resultA)


// }

// const p = test()
// // p.catch(() => {})
// console.log(p)
// console.log(3)

/* 
1 只要是用了async标明的函数 他的返回值 一定是个promise实例
 如果有返回值 那么会是该实例的PromiseResult的值

2 async函数中抛出错误或任何值。 会返回拒绝的promise实例 注意 这里是抛出

3 如果函数中有产生拒绝的promise实例 如果你需要对他进行处理 一定要返回出来
不然无法通过过 比如 catch来处理

4 在await 后面的表达式抛出错误 或者 是返回一个拒绝promise的实例 异步函数中后续的代码就不会执行了  await能获取到错误信息 而异步函数整体返回一个拒绝的promise实例

5 await后面可以跟不是promise实例的数据  如果不是，这个值就被当做已解决的promise实例中包含的数据
await关键字期待（但实际上并不要求）一个实现thenable接口的对象，但常规值也可以
如果是实现了thenable接口的对象 则这个对象可以由await来解包
promise实例 都是thenable对象


6 await 和一元操作符一样 可以单独使用 也可以在表达式中使用
*/

// 用async await 配合promise 实现一种非阻塞的代码暂停的执行(一定时间后异步执行)

function sleep(delay){
  return new Promise((resolve,reject)=>{setTimeout(resolve, delay)})
 }
 
 async function foo(){
   const t0 = Date.now()
   await sleep(1500)
   console.log(Date.now() - t0)

   await sleep(1000)
   console.log(Date.now() - t0)

   await sleep(2000)
   console.log(Date.now() - t0)
 }
 
 foo()