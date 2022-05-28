// 类型  
// '1'

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

// cat1.miao()
// cat2.miao()
// cat3.miao()

// 类型的实例
// String
// Number
// Boolean

// Object

// Function

// const str = new String(1)
// console.log(str)

// const num = new Number(1)
// console.log(num)

// const boolean = new Boolean(1)
// console.log(boolean)

// const sum = new Function('a', 'b', 'return a + b');

// console.log(sum)
// console.log(sum(2, 6));
// console.log(window)
// Window

function CatConstructor(name,age){
	this.name = name
	this.age = age
	this.miao = function(){
	console.log('喵喵叫')
	}
}

var cat1 = new CatConstructor('eleven',2)
var cat2 = new CatConstructor('棉花',6)
var cat3 = new CatConstructor('seven',1)

var other = {}

console.log(cat1 instanceof CatConstructor)
console.log(other instanceof CatConstructor)