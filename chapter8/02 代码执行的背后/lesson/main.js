// 任何一个数据  都可以被多个标识符引用

// const obj  = {a:123}
// const a = obj
// a.a = 100
// console.log(obj)
// const arr = [{},[],obj]

// 预编译

let a = 100
let b = 2000

function test(){
  const innerA = 6
  console.log(a,innerA)
}

test()

// console.log('全部执行完成')