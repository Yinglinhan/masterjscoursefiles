/* 

声明一个函数，这个函数可以传入一个参数，然后执行这个函数的时候如果传入的是布尔类型的值，会输出文字-我是布尔值，如果传入的是字符串类型的数据，会输出-我是字符串。如果传入的是数字类型的数据，会输出该数字，如果传入的是其他类型的数据，那么会输出-我是其他的

*/
// function testParams(x){
// 	if(typeof x === "string"){
// 		console.log('我是字符串')
// 	}else if(typeof x === 'number'){
// 		console.log(x)
// 	}else if(typeof x === 'boolean'){
// 		console.log('我是布尔值')
// 	}else{
// 		console.log('我是其他的')
// 	}
	
// }
// testParams(1)
// testParams('三木')
// testParams(true)
// testParams({})

// function callFunc(fn){
// 	if(typeof fn === "function"){
// 		fn()
// 	}else{
// 		return
// 	}
	
// }
// console.log(typeof function(){})
// 这个函数该如何修改 才能在传入的参数不是函数的时候不报错 而在传入的参数是函数的时候正常执行

// 声明一个函数 ，设置一个参数，如果函数执行时传入的实参是对象类型，同时没有一个name属性，那么会给这个对象设置一个name属性，属性值为任意

function test(o){
	
	if(typeof o === 'object'){
		var temp = {
			...o
		};
		if(!('name' in temp)){
			temp.name="sanmu"
		}
		return temp
	}
}

var obj = {type:'666'}
var result = test(obj)
console.log(obj)
console.log(result)
console.log(result === obj)