


function fine(){
	console.log("好的")
	console.log("我知道了")
	console.log("谢谢")
}

// console.log(fine)

// fine()
// fine()
// fine()
// fine()
// fine()
// fine()


var fine2 = fine
// fine2()


// console.log(fine === fine2)
// 函数也是引用类型的数据

var person = {}
person.hello = fine
// console.log(person.hello)
person.hello()
// 属性 -> 数据    方法 -> 函数


var obj = {

	hello: function (){
	  // 要执行的代码
	},
	
	go(){
		// 要执行的代码
	},
};

console.log()
/* 
 练习

1. 声明1个函数，函数名称自定义，当函数执行时，会依次输出0-0……8-8的字符串

2. 定义一个对象，对象中有一个方法，然后执行这个对象的方法时，会依次输出9-9 9-8 9-7这三个字符串

*/