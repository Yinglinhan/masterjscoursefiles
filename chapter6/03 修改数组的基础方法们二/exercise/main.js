// const arr = [1,23,4,5,6,8]
// // 分别实现
// // 删掉2，3索引位，并加入一个666数字类型数据
// // 从第3个索引位开始 后面全部删掉
// // 从-3索引位开始 删掉2个元素 并添加自自定义的三个数据
// // 不删除任何元素 从第四个索引位 添加 2个自定义数据
// // 删除全部数据 原数组变成空数组

// // arr.splice(2,2,666)
// // arr.splice(3)
// // arr.splice(-3,2,777,888,999)
// // arr.splice(4,0,666,888)
// // arr.splice(0)
// console.log(arr)

const arr1 = [1,2,3,4,5,6]
const arr2 = ["好奇","代码","三","木","嘿嘿嘿"]
const arr3 = [{x:1},{y:222},{z:666}]

// 定义一个函数 传入一个数组
// 函数会将传入的数组 掐头去尾只取中间的数据
// 并把取到的数据作为一个新数组返回 同时不改变原数组

function mySlice(arr){
	const len = arr.length;
	const result = arr.slice(1,len - 1)
	return result
}

console.log(mySlice(arr3))