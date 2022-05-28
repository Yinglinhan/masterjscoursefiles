// for of
// for in 是用来迭代遍历对象（普通对象）的属性
//   可能会迭代顺序不确定

// for of 可以使用break 和continue
// for of 可以迭代 可迭代对象  数组是一种可迭代对象 
// for of 不可以迭代普通对象

let arr = [1,2,3,4,5,'6',7,8,9,10]
// let str = '好奇代码的三木'
// for(let item of str){
//   console.log(item)
// }

// for of 可以迭代 数组  字符串


// keys  键
// values 值
// entries 对（键 与 值）
// 返回的都是可迭代对象
// 可以使用for of 进行遍历 一次迭代
const result = arr.entries()
console.log(result)

for (let i of result){
  console.log(i)
}