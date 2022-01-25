
// sort 排序

let arr = [5,1,8,2,11]




// cb 一定要有返回值
// 
// function compare(a, b) {
//   if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
//     return -1;
//   }
//   if (a > b ) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }
function compare(a, b) {
  return a - b;
}
// a > b
 // b a

// arr.sort(compare)
// console.log(arr)

// 你要确定 你想要的排序结果 是升序(前面小 后面大) 还是降序（前面大 后面小）

// 假设 a b是已经被排好的数据中的两个 a是前面 b是后面

// 要负数（小的减大的） a - b //  b - a
// let family = [{age:46},{age:82},{age:18}]

// // b - a
// family.sort((a,b)=>{
//   return b.age - a.age
// })

// console.log(family)







// reverse 返过来
// 修改原数组 
// 返回原数组

// let arr = [1,2,3,4,5]
// arr.reverse()
// console.log(arr)

// let arr = [
// 	{name:'小明',score:60},
// 	{name:'小花',score:81},
// 	{name:'小亮',score:62},
// 	{name:'小章',score:73},
// 	{name:'小李',score:66},
// 	{name:'小胖',score:92},
// ]
// 定义一个函数 一个参数 传入数组
// 把传入的数组 处理按照分数降序排列
// 然后把相应同学的姓名 按同样的顺序组成一个新数组 返回出来

console.log(function(){} instanceof Array)