// 线程 thread
// cpu最小的工作单元

// 线程 同一个时间点只能干一件事
// 单线程

// function test(x){
//         console.log(x)
// }

// const id = setInterval(console.log,1000,9999999,888)
// const id = setTimeout(console.log,5000,666)
// console.log(id)
// clearTimeout(id)
// test()
// console.log(id)
// setTimeout(function(){
//     clearInterval(id)
// },5000)
// 从上到下 依次执行  同步 -> 依次

// 不同步 -> 异步 让函数（代码）在将来某个特点时机执行
// Asynchronous 异步
// Synchronize 同步 

// 定时器 -> 函数
// setTimeout 
// setInterval
// 第二个参数 delay 可以不设置，不设置的情况下 默认就是0
// clearInterval
// clearTimeout

// 任何被定时器设定为异步执行的代码 都会在我们定义的同步代码执行完之后再执行
// setInterval(function() {
//     console.log(6)
// },0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)






function go(){
	console.log(2)
	setTimeout(console.log,2000,3)
}
console.log(1)
go()
setTimeout(x => console.log(x),500,4)