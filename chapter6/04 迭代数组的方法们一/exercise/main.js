const arr = [1,"hello",3,true,'220','false']

// 定义一个函数，可以传入一个数组，
// 函数执行后 把数组中的字符串类型的数据取出 组成一个新数组返回
// 至少用三个方式实现

//方法一
function filterString1(arr){
	return arr.filter((ele)=>{
		return typeof ele === 'string'
	})
}



// 方法二
function filterString2(arr){
	const result = []

	arr.forEach((ele)=>{
		if(typeof ele === 'string'){
			result.push(ele)
		}
	})
	return result

}

// 方法三
function filterString3(arr){
	const result = []

	arr.map((ele)=>{
		if(typeof ele === 'string'){
			result.push(ele)
		}
	})
	return result

}


console.log(filterString3(arr))