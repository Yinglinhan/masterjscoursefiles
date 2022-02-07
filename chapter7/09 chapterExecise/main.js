/* 

定义一个类，这个类在创建实例的时候可以传一个参数，是任意长度的字符串（最好是一段长文字有逗号），这个参数值会保存在实例上的text属性上，这个类的每个实例都能调用原型上的一个叫做splitStr的方法，只要调用这个方法，就能把这个实例的text属性中的字符串按照逗号分隔成一个数组返回

*/

// class StringHandle {
//   constructor(text){
//     this.text = text;
//   }

//   splitStr(){
//     return this.text.split(',')
//   }

// }

// const str = new StringHandle("12312,1234534,3457,8654,433");

// console.log(str.splitStr())


// 把这个代码中的原型链绘制出来 绘制到null为止
// class Fruit {}

// class Apple extends Fruit {}

// class Grape extends Fruit {}

// class HongfushiApple extends Apple {}



// const apple = new Apple()


/* 

建一个新的类型，继承自数组的构造函数，这个类型的实例有一个原型方法push，每个实例调用这个方法可以把传入的参数存入实例的cache属性中，cache指向的是一个普通的对象，每次存入的数据以数字为键，从零开始，依次递增 

*/

// class Barry extends Array {
//   constructor(){
//     super();
//     this.cache = {}
//     this.count = 0
//   }
//   push(x){
//     this.cache[this.count] = x
//     this.count++
//   }
// }

// const a = new Barry()
// a.push(123)
// a.push(3)
// a.push(4)
// console.log(a)

/* 
用类定义的方法 分别定义三个你生活中常见的事物 一定要合理得
用上实例的属性或方法 原型方法 及静态方法和静态属性

*/

/* 

说出 __proto__  prototype  [[Prototype]]这三个属性的区别和联系


*/



/* 
用构造函数的方式 定义三个类 同时让这三个类成依次的继承关系，即父类，子类 ，子子类（提示 修改构造函数的prototype属性为其他类型的实例）
*/
// ({} instanceof Object) // prototype

function A(){}  // 父类
function B(){}  // 子类
function C(){}  // 子子类


B.prototype = new A()
C.prototype = new B()


const c = new C()

console.log(c instanceof B)
console.log(c)

c.__proto__ = {}

