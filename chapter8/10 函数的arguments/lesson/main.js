


// 非箭头函数中才有

// 箭头函数 不能使用arguments  super  new.target
// 箭头函数中没有this
// 箭头函数没有prototype属性

// function 函数
// this arguments new.target

// arguments
// function inner(){
// 	console.log(inner.caller)
// }
function test(a,b){
	// "use strict"
	console.log(a,b);
	a = 666
	// inner()
	// console.log([].slice.call(arguments))
}

test()



// test(200,300,123,55,3)

// 类数组 
// 有length属性 数字做属性名 同时可以用索引值获取到其中的数据
// 没有数组实例那些方法

// arguments对象(类数组)始终会与对应的命名参数保持同步 但它们的内存是分开的 并不是同一个数据

// arguments对象的长度 是根据调用时传入的参数个数 而不是定义时的形参个数

// 在使用默认参数时 arguments对象的值不反映参数的默认值，只反映传给函数的参数

// 一旦使用了(任何一个)参数的默认值 那么函数中的arguments中的数据就不会和参数保持同步


// Array.from(arguments)
// ... -> [...arguments]
// [].slice.call(arguments)  具有length属性的对象

// arguments.callee -> 指向函数本身
// 函数实例 function.caller -> 指向调用该函数的函数


// 函数的严格模式
// class 的代码 默认是使用严格模式

/* 

定义一个函数，这个函数可以传入任意数量的实参，但是会根据传入参数不同的数据类型进行不同的处理，如果都是数字类型，会相加并返回，如果是全是字符串类型，会把所有字符串拼接在一起并返回，如果是布尔值类型的数据，会把所有布尔值按照传入顺序组成一个数组返回，如果同时传入的数据同时有多个类型，那么会在控制台输出 “我处理不了”

*/
