/* 

定义一个类型 该类型的实例有一个name属性，和一个tellMyName的原型方法，每个实例调用tellMyName方法之后，都会输出实例自己的name属性的值
*/

// class Name {
// 	constructor(name){
// 		this.name = name
// 	}
// 	tellMyName(){
// 		console.log(this.name)
// 	}
// }

// const name1 = new Name("eleven")
// name1.tellMyName()
// console.log(name1)


/* 

定义一个类型，该类型的实例有两个属性，一个是name，一个是age， 该类型上有一个init静态方法，该方法可传入两个参数，这个init方法执行之后，会返回这个这个类型的实例，而传入的这两个参数，分别就是这个实例的name属性和age属性的值

*/

class Person {

	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	static init(name,age){
		return new Person(name,age)
	}
}

const person = Person.init('eleven',5)
console.log(person)

