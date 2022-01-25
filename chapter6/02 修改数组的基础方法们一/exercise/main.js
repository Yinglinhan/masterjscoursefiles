// 定义一个函数
// 接收一个参数  可以传入一个数组 数组至少要有三个数据
// 如果数组长度 length是双数
// 那么取 把数组第一个数据 和最后一个数据 然后再放到 开头和末尾 
// [1,2,3,5] -> [1,1,2,3,5,5] 改变原数组

// 如果length单数
// 把数组 第一个 和最后一个去掉 并且 把这两个去掉的数据组成一个新数组 返回 
// [1,2,3] -> [2]  返回[1,3]

function  editArr(arr){
	const len = arr.length
	if(len % 2 === 0){
		//这里是双数
		const head = arr[0]
		const end = arr[len - 1]
		arr.push(end)
		arr.unshift(head)
		return arr
	}else{
		// 这里是单数
		const head = arr.shift()
		const end = arr.pop()
		return [head,end]
	}
}


console.log(editArr([12,6,9,78,99]))