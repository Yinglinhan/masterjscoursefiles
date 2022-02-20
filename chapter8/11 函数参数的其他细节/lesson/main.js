// 参数收集符 ...
// 只能放在最后
// 和arguments不冲突
// function test(a,b,...s){
// 	console.log(a,b,s)
// }

// test(2,5,8888,6,4,3,2)

// 函数参数的解构传值 ES6
// 对象

// function test(a,{x = 123,y = 234} ){
// 	console.log(a,x,y)
// }

// test(1,{})

/* 
对象  属性名关键

可以重命名 用冒号 
 
设置解构传值 就一定要传值

可以设置默认值  

整体默认值  （可以不传值）

属性默认值  必须传值
*/

function test(a,[x,y = 123],b,d ){
	console.log(a,x,y)
}

test(1,[22],2,5)

// 数组 解构传值 是严格按照顺序的
// 不能重命名

// function abc({x,y,z},a,b,[e,f]){

// }

// function go({x,a,s,d,f}){
// 	console.log(x,a,s,d,f)
// }

// const arr = [2,6]
// let [a,v] = arr
// console.log(a,v)

// const arr = [1,2,3]
// function test(arr){
// 	const arr2 = [...arr]
// 	arr[0] = 100
// }
// console.log(arr)

// 通过作用域链
// 通过参数
const arr = [12,3,4]

// function test(a){
// 	a
// }
// test(arr)

//  如果 函数内部需要用到外部数据 尽量都用 参数的方式传到函数内部处理

// 如果参数多 建议用对象{} 或数组方式 进行解构传入
// 如果是哪些只在某个函数中才用到的数据 要在该函数中定义


// 定义一个函数 起码要三个参数 ，其中一个是对象或数组，然后用结构传值的方式来定义，同时要设置默认值