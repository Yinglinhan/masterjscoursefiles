// instanceof 
// instance


// 右边的构造函数的原型对象是否在左边实例的原型链上面
// 如果在 就会返回 true 如果不在 返回false
// console.log([] instanceof Object)
// console.log([] instanceof Array)

// 数组 函数 这两个类型 都是继承与Object这个类型

// 我们自己定义的所有（非派生类）类型 一定都是直接继承自Object
// 我们自己定义的派生类 最终也一定能继承到Object这层

// const arr = []
// arr.push
// console.log(arr.hasOwnProperty)
// class Cat {}
// const cat = new Cat()
// console.log(Boolean.prototype)
/* 
我们知道的 除了 能让实例访问到原型链上的各种方法

还会继承父类的实例属性和方法 也就是通过this直接在实例本身上设置的
*/