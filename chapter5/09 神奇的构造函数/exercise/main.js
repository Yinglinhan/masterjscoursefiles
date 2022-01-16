/* 

定义一个构造函数，用new 配合构造函数执行会创造一个对象，这个对象有一个name属性和一个tellMyName方法，

对象的name属性的值由执行构造函数时传入

只要通过对象的执行这个方法，就能输出这个对象的name属性的值到控制台
*/

// function CreateObj(name){
// 	this.name = name
// 	this.tellMyName = function(){
// 		console.log(this.name)
// 	}
// }

// const obj = new CreateObj('三木')
// const obj2 = new CreateObj('好奇代码')
// obj.tellMyName()
// obj2.tellMyName()

function Cat(name, type){
	this.name = name
	this.type = type
	console.log(this)
}

new Cat('11','中华田园猫') //   {name:'11',type:'中华田园猫'}
Cat('11','中华田园猫') // window {}
new Cat()  // {name:undefined,type:undefined}

// 会输出什么


// 如果构造函数 不用new来使用 可能会导致的问题