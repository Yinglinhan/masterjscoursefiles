

// console.log
// // 控制台  仪表盘
// // 日志 记录

// // 阵列 数组 array
// // 引用类型的数据
// // 集合类型

// let arr = [1, "这是一个数组", false, [1,2,3],{name:'hehe'} ]
// // 索引 索引位 槽位
// // 0 1 2 3
// // arr[1] = '三木'
// arr[100] = 100
// // console.log(arr)

// let options = [1,,,,,,,2]
// let arr2 = []
// // console.log(options)
// // Array
// let arr3 = new Array(20)
// // console.log(arr3)

// // console.log(typeof Array.of(1,2,3))
// // 返回object

// const arr6 = [1,2,3,5,6] // 5
// console.log(arr6.length)
// 不仅仅是只读的 
// 通过修改length属性，可以从数组末尾删除或者添加元素

// arr6.length = 2
// console.log(arr6)


// 数组中最后一个元素的索引位是length - 1
// 新增的数据的索引位 是length
// arr6[arr6.length] = 100
// console.log(arr6)


// arr6.open = function(){
//   console.log('open')
// }

// arr6.abc = 123
// // console.log(arr6)
// // 数组 是一种默认使用数字字符做键 key的一种特殊对象类型

// // 数组是引用类型的

// let arr9 = [123,2,5]
// let ar = arr9

// ar[1] = 'male'
// console.log(arr9)

let person = {
	name:"小明",
	age:16,
	talk(){
		console.log('我是小明，我在说话')
	}
}
//创建一个空数组，并且把对象中 各个属性的值从对象中取出来，复制到数组中，并且最后要通过数组来调用talk函数

let arr = [1,3,4,5,6,7,8,9,22,3]
// 定义一个函数  该函数接收两个参数 第一个是有数据的数组
// 第二个参数是数字  
// 函数执行会把传入的数组 从尾部开始删除 删除第二个参数个数的数据