// const promise1 = new Promise((resolve, reject) => {

//   setTimeout(() => { //func1
//     resolve("success");
//     console.log("timer1");
//   }, 1000);
//   console.log("promise1里的内容");

// });

// const promise2 = promise1.then(() => { //func2
//   throw new Error("error!!!");
// });

// console.log("promise1", promise1);
// console.log("promise2", promise2);

// setTimeout(() => { //func3
//   console.log("timer2");
//   console.log("promise1", promise1);
//   console.log("promise2", promise2);
// }, 2000);

// 宏任务 table   
// 微任务 table  


// 宏任务 queue func3
// 微任务 queue  

// promise1里的内容  promise1 Promise{}  promise2 Promise{}
//  timer1 Error timer2 promise1 Promise{}  promise2 Promise{}



// const p1 = new Promise((resolve) => {
//   setTimeout(() => { //func1 -> 0
//     resolve('resolve3');
//     console.log('timer1')
//   }, 0)
//   resolve('resovle1');
//   resolve('resolve2');
// }).then(res => { // func2
//   console.log(res)
//   setTimeout(() => { //func4 -> 1000
//     console.log(p1)
//   }, 1000)
// }).finally(res => { // func3
//   console.log('finally', res)
// })


// 宏任务 table      
// 微任务 table   


// 宏任务 queue   func4
// 微任务 queue   

// resolve1  finally undefined  timer1 promise{}
// 微任务产生的微任务 也会马上被执行


// const async1 = async () => {
//   console.log('async1');
//   setTimeout(() => {// func1 -> 2000
//     console.log('timer1')
//   }, 2000)
//   await new Promise(resolve => { 
//     console.log('promise1')
//   })
//   console.log('async1 end')  //func2
//   return 'async1 success'
// } 

// console.log('script start');
// console.log(async1())
// async1().then(res => console.log(res)); //func3
// console.log('script end');
// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .catch(4)
//   .then(res => console.log(res)) //func5

// setTimeout(() => { // func6 -> 1000
//   console.log('timer2')
// }, 1000)

// 宏任务 table   func1 -> 2000     func6 -> 1000
// 微任务 table   func2  func3


// 宏任务 queue   
// 微任务 queue  

// script start async1  promise1   script end   1  timer2  timer1



// function promise1 () {
//   let p = new Promise((resolve) => {
//     console.log('promise1');
//     resolve('1')
//     setTimeout(()=>{
//       console.log(3333)
//     },0)
//   })
//   return p;
// }

// function promise2 () {
//   return new Promise((resolve, reject) => {
//     reject('error')
//   })
// }

// promise2()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
//   .finally(() => console.log('finally2'))


// promise1()
//   .then(res => new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(8888)
//       console.log('ok')
//     },1000)
//   }))
//   .catch(err => console.log(err))
//   .finally(() => console.log('finally1'))


// 一定要等父promise实例状态更改之后 才会触发相应的函数 回调

// promise1   1   error  finally1  finally2


async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});
console.log('script end')


// script start     async1 start   async2   promise1  script end

// async1 end   promise2   setTimeout