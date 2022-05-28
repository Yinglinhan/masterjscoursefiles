// parseInt parseFloat
// window

// console.log(window)

// window.alert('好奇代码')
// alert('123')
// var aaa = 345
// abc = 123
// console.log(window)


// this
// 只函数中有  除箭头函数外
// 函数执行时自动声明的 
// 可以理解成是一个变量  标识符

// function test(){
// 	console.log(this)
// }

// test()

// const obj = {
// 	test,
// 	name:"obj"

// }
// obj.test()

// // 哪里来的不重要
// 重要的是 它的调用方式

// 通过某个对象的方法这样调用 this就是指向这个对象本身 obj.test()
// 如果不是通过某个对象来调用的话 那么this 就指向全局作用域中的window

// 箭头函数中 没有 this

// const arrowFunc = () => console.log(this)

// arrowFunc()

//全局作用域中的this 指向window
// console.log(this)


// var a = {
//   b:function(){
  
//     var go = ()=>{
//       console.log(this)
//     }
//     go()
//   }
// }
// a.b()
// var e = a.b 
// e()

//最近一层的非箭头函数中的this是绑定的

//作用域 是函数执行才会产生的  


// const func = {
//   test:function(){
  
//     const showThis = ()=>{
      
// 				console.log(this)
// 				function innerShow(){
// 					console.log(this)	
// 				}
// 				innerShow()
//     }
//     showThis()
//   }
// }
// func.test()
// var func2 = func.test
// func2()

// 输出this是什么


function test(o){
	o.go()
	o.go2()

}

function go(){
	console.log(this)
}

var obj = {
	go, 
	go2:()=>{
		console.log(this)
	}
}

test(obj)
// 输出this是什么


