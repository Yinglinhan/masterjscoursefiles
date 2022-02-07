
/* 
先定义一个类型 该类型可以传入三个参数，2个原型方法，一个静态方法，该类型的实例有三个属性，属性的值分别是调用该类型new的时候传入的三个参数，然后基于这个类型定义一个派生类，该派生类要有额外的两个属性，也可以通过new的时候传入，作为该类型实例的这两个额外属性的值，同时该派生类要有一个自己的原型方法，以及一个自己的静态属性

*/

class Father{
	constructor(x,y,z){
		this.x = x
		this.y = y
		this.z = z
	}
}

class Son extends Father {
	constructor(x,y,z,a,b){
		super(x,y,z)
		this.a = a
		this.b = b
	}

	test(){

	}

	static go(){}
}


class GrandSon extends Son {
	constructor(x,y,z,a,b,d,e){
		super(x,y,z,a,b)
		this.d = d
		this.e = e
	}
}

/* 

定义一个三层的类型，一个父类，一个子类，一个子子类，每个多一层类型，该类型的实例上的属性就要比上一层多一个，父类至少2个属性

*/

/* 
 父类 和 子类的静态方法中的this 在调用的时候会指向谁？
*/