//  Object.is
// Object.keys( )

// Object.values( )

// Object.entries( )

// Object.create( ) 
// Object.create(null) 创建没有原型的对象

// Object.getOwnPropertyNames( )
// var obj = { 0: "a", 1: "b", 2: "c"};
// console.log(Object.getOwnPropertyNames(obj))

// Object.freeze( )
// Object.assign( )

// Object.prototype  原型上的方法
// Object.prototype.hasOwnProperty()

let a = {b:123};
// console.log('toString' in a)
// console.log(a.hasOwnProperty('toString'))

// hasOwnProperty 返回false  in操作符 返回 true -> 说明该属性或方法是在原型上的

//Object.prototype.isPrototypeOf()
const obj = {}
const prototype = Object.prototype
// console.log(prototype.isPrototypeOf(obj))

// constructor 
// xxx instanceof Array

// Object.prototype.toString()


// Object.prototype.valueOf()

console.log(function() {}.valueOf())