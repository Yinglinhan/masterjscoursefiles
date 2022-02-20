let a = 100
let b = 2000
const test = function (){
  const innerA = 6
  const innerB = 88
  const abc = {
    go(){
      console.log(123);
    }
  }
  console.log(abc)
}

test()

console.log('全部执行完成')

// Closure 就是闭包
// 闭包是一种作用域类型
// 1. 要形成闭包 必须在我们自定义的函数内 再定义函数 同时该函数用到父函数中的标识符
// 父函数的活动对象中的标识符（属性）

