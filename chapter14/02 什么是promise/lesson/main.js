// Promise 允诺 许诺   期约
// 是对某个行为产生的结果约定好后续处理方式的一种机制

// resolve 解决 成功  reject 拒绝 驳回 失败
// 都是函数 执行时可以传值
// 传入promise中的这个函数 一般被称为执行函数 他是同步执行的

function getDataFromUrl(url, data, callback) {
  const randomDelay = Math.random().toFixed(3) * 10000;

  setTimeout(() => {  
    callback()
  },randomDelay)

}
// console.log(1)
// const p1  = new Promise((resolve,reject)=>{
//   // 真正你想要执行的代码 写在这个函数里面
//   // console.log(2)
//   getDataFromUrl('http://localhost:8080/','a',()=>{
//     console.log('aaaa')
//     resolve(1111)
//     // reject(222)
//   })


// })
// console.log(3)
// console.log(p1)

/* 
resolve 执行会让promise实例变成 fullfilled状态
reject执行 会让priomise实例变成 rejected状态
注意 每个promise的实例的状态只能改变一次  要么 从pending变成fullfilled  要么从pending变成rejected 

[[PromiseState]] promise实例的状态 
pending 待定状态
fullfilled 成功状态 解决状态
rejected 失败状态 拒绝状态

resolve 和 reject 能改变相应promise实例的[[PromiseResult]]
执行时传入什么  值就会称为 [[PromiseResult]] 的值
[[PromiseResult]]

*/
setTimeout(function() {
  console.log(1)
})


new Promise((resolve,reject)=>{
  console.log(2)
})

console.log(3)

setTimeout(()=>{
  console.log(4)
},100)
// 2 3 1 4