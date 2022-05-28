// class 类

// 类声明的写法
// 不会有作用域提升效果
// 受块级作用域限制的
class Dog {
	constructor(name, age ,fn){
		this.name = name;
		this.gae = age;
		this.fn = fn;
	}

	swim(){
		console.log("swimming")
	}

	static abc = 123
	static test(){
		console.log("test")
	}
	static species = []
}
const dog = new Dog("可乐",5, function(){console.log("bark")})

console.log(dog)
Dog.test()


const Cat = class {

}

console.log(typeof Dog)
// console.log(Dog.test())

// console.log(Dog.prototype)
// // 有name  length  prototype 三个属性

// const dog = new Dog();
// // class 一定要用new 来调用 不然会报错 

// console.log(dog)

/* 
用class声明和表达式各定义一个类型，这个类型要有构造方法  两个原型方法 以及一个静态属性 一个静态方法

*/

/* 

定义一个类型 该类型的实例有一个name属性，和一个tellMyName的原型方法，每个实例调用tellMyName方法之后，都会输出实例自己的name属性的值*/

/* 
定义一个类型，该类型的实例有两个属性，一个是name，一个是age， 该类型上有一个init静态方法，该方法可传入两个参数，这个init方法执行之后，会返回这个这个类型的实例，而传入的这两个参数，分别就是这个实例的name属性和age属性的值

*/