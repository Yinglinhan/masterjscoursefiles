

// function func(x){
//   return x * 100
// }

// function func2(x,y,z){
//   return x  + y + z
// }
// function func3(x,y){
//   return x * y 
// }


// console.log(func(func2(func3(1,6),8,10)) ) 
// 结果是多少

// function go(x,y){
//   var a = x + y
//   console.log(a)
//   return a
//   var b = x * y
//   console.log(b)
// }
// go(3,6) 
// // 控制台会输出什么

// function test(x){

//   if(typeof x === 'number'){
//     console.log(x)
//     return true
//   }else if (typeof x === 'string'){
//     return  x + '嘿嘿嘿'
//   }else{
//     console.log(x)
//   }
// }

// console.log(test(true)) // 返回什么 undefined
// console.log(test('true'))  // 返回什么 true嘿嘿嘿

/* 

定义一个函数 如果传入的是是数字类型的数据 根据数值大小返回不同的成绩等级判定文字

小于60 返回不及格

60-80 良好

80-90 优秀

90-100 顶呱呱

传入的如果不是数字类型的数据 全部返回 去你大爷的

*/

function testScore(s){
	if(typeof s === "number"){
		if(s < 60){
			return '不及格'
		}else if(s >=60 && s < 80){
			return '良好'
		}else if(s >=80 && s <90){
			return '优秀'
		}else{
			return '顶呱呱'
		}

	}else{
		return '去你大爷的'
	}
	
}

console.log(testScore(59))
console.log(testScore(69))
console.log(testScore(99))
console.log(testScore('1'))