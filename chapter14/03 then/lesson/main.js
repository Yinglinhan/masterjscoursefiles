// then 接下来 下一步
// Promise.prototype.then 原型方法 每一个Promise类型的实例都可以调用
// then 方法执行要传两个函数做为参数 （可以不传）
// 第一个函数  是resolve这个方法执行的时候 就是它被放入任务队列的时候
 // handleResolve 下一步要执行的代码
// 第二个函数 是reject这个方法执行的时候 就是他被放入任务队列的时候
// handleReject 解决之前promise的拒绝的问题 处理错误的概念


function getDataFromUrl(url, data, callback) {
  const randomDelay = Math.random().toFixed(3) * 10000;

  setTimeout(() => {  
    callback()
  },randomDelay)

}


// const p1 = new Promise( (resolve, reject) =>{
  
//   // setTimeout(()=>{
//   //   console.log('执行了')
    
//   //   resolve(1)
//   //   // reject(22222)
//   // },3000)


//   getDataFromUrl("http://xxxx", 'a', (data)=>{
//     resolve(data)
//     })
// })

// then 执行 也会返回一个promise实例
// 两个方法都传了情况下 两个方法执行过程中不出错
// 方法执行完实例就会变成 fullfilled状态 
// [[PromiseResult]] 他的值 就是函数的返回值
// 可以返回新的promise实例 （这个特殊情况）

// 如果遇到某个相应的函数参数没传
// 数据和状态原样后传

// 在then方法中传入的函数 都是异步执行的
// 函数可以设定一个参数 取到的都是前一个promise实例的  [[PromiseResult]]
// const p2 = p1.then(
//   (res)=>{},
//   (err)=>{}
// )

// const p3 = p2.then(

// )
// console.log(p3)

// then的promise的这种连续链式调用 是一环接着一环的
// promise实例链 是通过then链式调用形成的
// 根据前一个实例的最终状态 来决定 当前实例执行的是哪一个函数


/* 

then没有传相应状态的处理函数 状态和数据会原样后传给产生的实例（原样上一个的状态和数据）

只要then传了相应的处理函数 只要函数没报错 实例状态一定是fullfilled 数据是函数返回值（没有返回值 就是undefined）

如果promise实例链上最后一个实例最终是rejected状态 那么会代码报错 报错信息中包含 实例的数据

如果 then方法中的传入的函数 返回一个新的promise实例 这个实例的状态和数据
会跟这个新产生的promise实例的状态同步

*/

// const p1 =  new Promise((resolve, reject) =>{
  
//   getDataFromUrl('http://aaaa','a',(res)=>{
//     resolve(res)
//   })
//   // throw new Error('11')
// })

// const p2 = p1.then(
// (res)=>{
//  return new Promise((resolve, reject) =>{
//   getDataFromUrl('http://bbbb',res,(response)=>{
//     resolve(response)
//   })
//  })

// },
// (err)=>{}
// )
// p2.then(
//  (res)=>{
//   getDataFromUrl('http://ccc',res,(response)=>{
   
//   })
//  },
//  (err)=>{} 
// )

// console.log(p1)
// 


// const p1 = new Promise((resolve, reject) =>{

//   resolve()
// });
// console.log(p1)
// p1.then(
//   (res)=>{console.log(666)}
// )
// console.log(555)


// try{
  
// }catch(err){

// }
// const p1 = new Promise((resolve, reject) =>{

//   reject()
// });
// console.log(p1)
// p1.then(
//   (res)=>{console.log(666)},
//   (err)=>{console.log(666)}
// )
// console.log(555)

/* 

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);





const promise1 = new Promise((resolve, reject) => {
  console.log('promise1')
  resolve('resolve1')
})
const promise2 = promise1.then(res => {
  console.log(res)
})
console.log('1', promise1);
console.log('2', promise2);



const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))
fn().then(res => {
  console.log(res)
})
console.log('start')



const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
console.log("start");
fn().then(res => {
  console.log(res);
});

*/