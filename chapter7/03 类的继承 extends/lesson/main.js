// 继承

class Cat {

	constructor(name,age,fn){
		this.name = name;
		this.age = age;
		this.action = fn
	}

	miao(){
		console.log("miaomiao")
	}

	static species = ["china","japan","usa"]
	static run(){
		console.log("running")
	}

}

class ChinaCat extends Cat {
	constructor(name,age,fn,type){
		super(name,age,fn)
		this.type = type
	}
	t(){
		super.miao()
		console.log("t")
	}
	static ttt(){
		console.log(super.species)
		console.log("ttt")
	}
}
// 子类  派生类
// 父类  基类

const chinacat1 = new ChinaCat('eleven',5,function(){console.log("起飞啦")},'china');
// console.log(chinacat1)
// chinacat1.t()
chinacat1.miao()
/* 

子类如果不写constructor方法

偷偷会在子类中调用了父类的constructor方法 偷偷进行 我们看不到的

父类中constrcutor方法设置的实例的属性或者方法

都会出现在子类创造的实例中

在使用子类new时  可以通过给子类传相应的参数 来给子类实例相应属性设置数据
*/
// super 超级   父类有时候又被称为超类
// super() 就是手动调用父类的constructor方法
// 一旦在子类的定义了constructor方法 那么 要马上调用super()
// 一旦在子类中定义了 constructor 方法  如果 有参数 需要手动设置，并手动传入super中
// super 可以在子类原型方法中 通过super. 的方式访问到父类的原型方法
//super 可以在子类静态方法中 通过super. 的方式访问到父类的静态方法

/* 

1. super只能出现在派生类中 也就是子类中

2. 不能单独引用super关键字，要么用它在子类的constructor方法中，通过super()调用父类的constructor，要么 在子类的原型方法中使用访问父类的原型方法，要么在子类的静态方法中使用访问父类的静态方法或者属性

3. 调用super() 会调用父类的constructor，并将返回的实例赋值给子类中的constructor方法中的this，所以在子类的constructor方法中使用this之前 ，一定要super()

4. super()的行为如同调用构造函数，一旦写了super(),如果父类的构造函数需要传参，必须手动手动传入

5. 如果在派生类中没有定义类构造函数，在实例化派生类时会自动调用super()，而且会将所有实例化时传入的参数都传入给这个自动调用的super()

6. 如果在派生类中显式定义了constructor，则要么必须在其中调用super()，要么必须在其中返回一个对象
*/

// 子类的实例是可以访问到（可以调用）父类原型上的方法的

// 这个extends 继承 主要是继承两点
/* 
1. 是父类constructor中对this的设置，子类的实例上也会有
2. 子类可以不仅可以访问自己类的原型方法，还可以访问到父类上的原型方法
*/

// const Apple = class extends Fruit{}

// extends  后面跟构造函数 不一定是某个类

/* 

先定义一个类型 该类型可以传入三个参数，2个原型方法，一个静态方法，该类型的实例有三个属性，属性的值分别是调用该类型new的时候传入的三个参数，然后基于这个类型定义一个派生类，该派生类的实例要有额外的两个属性，也可以通过new的时候传入，作为该类型实例的这两个额外属性的值，同时该派生类要有一个自己的原型方法，以及一个自己的静态属性

*/

/* 

定义一个三层的类型，一个父类，一个子类，一个子子类，每个类型的实例上的属性就要比上一层类型的实例多一个，父类的实例至少2个属性

*/

// 父类 和 子类的静态方法中的this 在调用的时候会指向谁？