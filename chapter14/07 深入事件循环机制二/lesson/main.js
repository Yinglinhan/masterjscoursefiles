// 宏任务 macrotask也被称为task

// 微任务 microtask也被称为jobs 
// ES6 Promise 是ES6语言版本才有的

/* 
浏览器环境中常见的宏任务

- 主代码块（同步代码）
- setTimeout
- setInterval
- requestAnimationFrame ()-浏览器

每次都从事件队列中取一个执行
会在一个宏任务执行结果后，在下一个宏任务执行前，GUI渲染线程开始工作，对页面进行渲染


宏任务 -> GUI渲染 -> 宏任务 -> ...
*/


/* 
微任务

当一个宏任务执行完，会在渲染前，将执行期间所产生的所有微任务都执行完

宏任务 -> 微任务 -> GUI渲染 -> 宏任务 -> ...

- Promise.then(xxxx,xxx)
- catch(xxx)
- finally(xxxx)
- Object.observe
- MutationObserver


*/






// function test() {
//   console.log(1)
//   setTimeout(function () { 	// timer1
//     console.log(2)
//   }, 1000)
// }

// test();

// setTimeout(function () { 		// timer2
//   console.log(3)
// })

// new Promise(function (resolve) {
//   console.log(4)
//   setTimeout(function () { 	// timer3
//     console.log(5)
//   }, 100)
//   resolve()
// }).then(function () {
//   setTimeout(function () { 	// timer4
//     console.log(6)
//   }, 0)
//   console.log(7)
// })

// console.log(8)

setTimeout(() => console.log(4))

async function test() {
  console.log(1)
  await Promise.resolve()
  console.log(3)
}

test()

console.log(2)
// 可以理解为，await 以前的代码，相当于与 new Promise 的同步代码，await 以后的代码相当于 Promise.then的异步