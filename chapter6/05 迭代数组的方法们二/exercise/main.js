// const family = [
// 		{mom:{age:45}},
// 		{daddy:{age:46}},
// 		{son:{age:18}},
// 		{daughter:{age:20}}
// 	]

// // 用reduce计算出这个家庭所有人年纪的总数
// const total = family.reduce((accumulator,currentValue) => {
// 	let tempKey;
// 	for(let key in currentValue) {
// 		tempKey = key
// 	}
// 	return accumulator + currentValue[tempKey].age

// } ,0)

// console.log(total)

const arr = [[1,2],[5,11],[8,9],[3,8]]

/* 
定义一个函数 可以把这种类型的数组中的有所有数字类型数字都相加
然后把加总的结果返回
要用reduceRight实现
*/

const total = arr.reduceRight((accumulator,currentValue) => {
	let tempTotal = 0
	tempTotal = currentValue.reduceRight((accumulator,currentValue) => accumulator + currentValue, 0)
	return accumulator + tempTotal
},0)

console.log(total)