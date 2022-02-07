//原型   原型链
// Array  []

function bark(){
	console.log("汪汪汪 bark")
}

function Dog(name){
	this.bark = bark
	this.name = name
}

Dog.prototype.swim = function(type){
	console.log(this.name,type,"swimming")
}

const dog1 = new Dog("可乐");

dog1.swim("狗刨式")

// 用new 配合执行函数 
// 1 会在内存当中创建一个新的对象 {}
// 2 把这个新对象的[[Prototype]]指向该构造函数的prototype指向的对象（更改指向）
// 3 把这个新对象 赋值给this 关键字

// 实例本身上有的 不会往构造函数的prototype属性指向的对象上找


// dog1.swim()
// console.log(Dog.prototype.swim === dog1.swim)

// console.log(dog1.__proto__ === Dog.prototype) // [[Prototype]]

// console.log([])
// 任何一个对象 （对象实例）天生都有[[Prototype]]属性

// console.log(dog1.bark === dog2.bark)

// 函数共享

// console.log([].push === [].push)

// 原型   prototype

// length  定义的参数个数
// name 函数名 定义时标识符的名称
// prototype (箭头函数没有这个属性)

// console.log(Dog.prototype)

// 任何对象（对象实例）都有[[Prototype]]属性 默认的指向是一个对象
// 用new 关键字 配合构造函数 产生的对象 它的[[ Prototype ]]属性会被修改指向 该构造函数上prototype属性指向的对象
// 每个函数都有prototype属性，这个属性指向的对象有一个constructor属性，指向的是函数本身
/* 

1. 定义一个构造函数，然后new一个实例，自己绘制一个和我一样的构造函数 实例 原型的关系图 推荐用 figma中的这个工具画 */

/* 

1. 只有构造函数有prototype属性

2. 每个构造函数的实例都有[[Prototype]]内部属性，它在实例刚创建时没有值

3. 同一个构造函数通过new创建出来的实例，他们都可以访问到构造函数上prototype属性指向对象上的方法和属性

4. 任何构造函数的实例，和普通对象没有任何关系
*/