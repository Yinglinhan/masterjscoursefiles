
// let person = {
// 	name:"小明",
// 	age:16,
// 	talk(){
// 		console.log('我是小明，我在说话')
// 	}
// }
/* 
创建一个空数组，并且把对象中 各个属性的值从对象中取出来，复制到数组中，并且最后要通过数组来调用talk函数
*/

// let arr = []
// for(let key in person){
// 	arr[arr.length] = person[key]
// }
// console.log(arr)
// arr[2]()

let arr1 = [1,3,4,5,6,7,8,9,22,3]
// 定义一个函数  该函数接收两个参数 第一个是有数据的数组
// 第二个参数是数字  
// 函数执行会把传入的数组 从尾部开始删除 删除第二个参数个数的数据

function deleteArr(arr,dcount){
	const len = arr.length;
	arr.length = len -dcount
}
deleteArr(arr1,7)
console.log(arr1)