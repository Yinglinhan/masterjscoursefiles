// 定义一个函数，两个参数，第一个是数组，第二个是类型的字符串

// 该函数 可以根据传入的类型字符串 把数组中相应类型的元素的索引位都找出来
// 组成一个新数组 返回

// findIndex 
// indexOf

// function typeIndex(arr,type){
// 	let result = []
// 	arr.forEach(function(ele,index){
// 		if(typeof ele === type){
// 			result.push(index)
// 		}
// 	})
// 	return result
// }

// console.log(typeIndex([1,2,3,4,'1'],'string'))



// 定义一个函数  一个参数
// 函数执行时 传入的数组 如果有任意一个数据为布尔类型 而且该数据的索引位非最后一个
// 那么会把这个数组中的所有数据 拼接成一个字符串 返回

// function testArr(arr){
// 	const testIndex = arr.findIndex(ele => typeof ele === 'boolean')

// 	if(testIndex !== -1 && testIndex !== arr.length - 1){
// 		let str = ''
// 		arr.forEach(ele => str += ele)
// 		return str
// 	}
	
// }

// console.log(testArr([1,2,3,true,{}]))




let arr = [1,23,2,1,23,1,'三木',6]

// 定义一个函数 传入两个参数
// 一个是数组 一个是你想要查找的数据
// 函数执行会把传入第二个参数数据相同的
// 数组中的索引位 返回回来 组成一个新数组
// 最后返回这个新数组
// 没有任何匹配的就返回空数组

function testArr(arr,item){
	let idx = arr.indexOf(item)
	const result = []
	while(idx !== -1){
		result.push(idx)
		idx = arr.indexOf(item,idx + 1)
	}
	return result
}

console.log(testArr(arr,23))