
// // reduce 加总(并不是只能加总)
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => 1;

// // 1 2 -> 3
// // 3 3 -> 6
// // 6 4 -> 10

// const result = array1.reduce(reducer)
// // console.log(result);
// 每次cb的返回值 会作为 下一次 accumulator 的值
// 最后一次执行完  reduce的返回值 就是最终 accumulator 的值

// reduce 没有传入第二个参数 决定了 accumulator第一次执行时的值是哪个
// 也决定了 是从哪一个开始遍历

//   reduce传了第二个参数的话 第一次执行cb accumulator 就是这个参数的值
//   而且第一次执行cb时 当前数据参数 是数组中第一个数据
//   reduce没传了第二个参数的话  第一次执行cb accumulator 就是数组中的第一个数据
//   当前数据参数 是数组中第二个数据开始

// // 从左到右

// // reduceRight 是从右到左

// const arr = [{score:60},{score:80},{score:100}]

// // const reducer2 = (accumulator,cv) => {
// //   return {
// //     score:accumulator.score + cv.score
// //   }
// // }

// const reducer2 = (accumulator,cv) => accumulator + cv.score
// // 第一次执行 
// // accumulator -> 0     cv -> {score:60} 60 
// // 第二次执行
// // accumulator -> 60  cv -> {score:80}

// console.log(arr.reduce(reducer2, 0))
// // console.log(arr.reduce(reducer2).score)

const family = [
  {mom:{age:45}},
  {daddy:{age:46}},
  {son:{age:18}},
  {daughter:{age:20}}
  ]

  // 用reduce计算出这个家庭所有人年纪的总数

  const arr = [[1,2],[5,11],[8,9],[3,8]]
/* 
定义一个函数 可以把这种类型的数组中的有所有数字类型数字都相加
然后把加总的结果返回
要用reduceRight实现 */