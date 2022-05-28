let arr = [
	{name:'小明',score:60},
	{name:'小花',score:81},
	{name:'小亮',score:62},
	{name:'小章',score:73},
	{name:'小李',score:66},
	{name:'小胖',score:92},
]

// 定义一个函数 一个参数 传入数组
// 把传入的数组 处理按照分数降序排列
// 然后把相应同学的姓名 按同样的顺序组成一个新数组 返回出来


function sortScore(arr){
	// 降序排列  前大 后小
	// a前 b后
	// 取负值 
	arr.sort((a,b) => b.score - a.score)
	return arr.map((ele) => ele.name)
}

console.log(sortScore(arr))