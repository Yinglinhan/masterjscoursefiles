// console.log({},[], function(){}.prototype)
// 方括号P属性 -> [[Prototype]]

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


const chinacat1 = new ChinaCat('eleven',5,function(){console.log("起飞啦")},'china');
// console.log(Function.prototype)
console.log([])

// 构造函数的prototype属性是可以修改的
// class 的 prototype 的属性的指向是不能修改的

// 作业 画原型链的图 自己定义个父类 子类 子子类 然后把从子类到null的整个原型链自己画出来 推荐用figjam工具