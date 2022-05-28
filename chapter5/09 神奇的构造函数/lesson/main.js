// const obj = {

// 	name:'小明'
// };

// 不能用箭头函数的写法
// function CatConstructor(name,age){
// 	this.name = name
// 	this.age = age
// 	this.miao = function(){
// 		console.log("喵喵喵")
// 	}
	
// }

// new
// const cat1 = new CatConstructor('eleven',4)

// console.log(cat1)
/* 

1. 在内存中创建一个新对象
2. 构造函数内部的this被赋值为这个新对象 即this指向新对象
3. 执行构造函数内部的代码（给新对象添加属性和方法）
4. 如果构造函数返回非空对象，则返回该对象，否则 比如没有return，则默认返回刚创建的对象 也就是返回this

*/

// function test(x){
// 	console.log('我是个一般函数',x)
// }



// function CatConstructor(name,age){
// 	this.name = name
// 	this.age = age
// 	this.miao = function(){
// 	console.log('喵喵叫')
// 	}
// }

// var cat1 = new CatConstructor('eleven',2)
// var cat2 = new CatConstructor('棉花',6)
// var cat3 = new CatConstructor('seven',1)
// console.log(cat1,cat2,cat3)
// cat1.miao()
// cat2.miao()
// cat3.miao()

// const obj = new Object();

// console.log(obj)

// new.target 

// function Test(x){
// 	this.abc = x
// 	console.log(new.target)
// }

// var t = new Test(1)

// console.log(t)

/* 

定义一个构造函数，用new 配合构造函数执行会创造一个对象，这个对象有一个name属性和一个tellMyName方法，

对象的name属性的值由执行构造函数时传入

只要这个对象的执行自己的tellMyName这个方法，就能输出这个对象的name属性的值到控制台

*/
function Cat(name, type){
	this.name = name
	this.type = type
	console.log(this)
}

new Cat('11','中华田园猫')
Cat('11','中华田园猫')
new Cat()

// 会输出什么
// 如果构造函数 不用new来使用 可能会导致的问题 
