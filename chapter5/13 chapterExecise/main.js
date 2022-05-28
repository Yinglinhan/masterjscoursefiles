
/* 
声明一个函数，设定两个参数，函数执行时传入参数的数据类型如果有一个不是对象，就会输出-我需要对象 ，如果两个都是对象，把两个对象的属性和方法合并到一个新的对象中，并输出这个对象,并返回这个新对象（传入的两个对象至少有一个方法一个属性名，而且属性名和方法名不重复）

typeof 对象    object
*/

// function testObj(o1,o2){
//   if(typeof o1 === 'object' && typeof o2 === 'object'){
//     // const newObj = {}
//     const result = {
//       ...o1,...o2
//     }
//     console.log(result)
//     return result

//   }else{
//     console.log('我需要对象')
//   }
// }

// const  obj1 = {
//   name:'123',
//   good:666
// }

// const obj2 = {
//   hello:999,
//   good:'三木'
// }

// console.log(testObj(obj1,12))


// 
/* 

声明一个函数 可以根据参数传入的数字大小（两个参数） 循环输出不同的字符组合
1,3

0-0 0-1 0-2 0-3 1-0 1-1 1-2 1-3

6,8
0-8 6-8

*/


// function loop(x,y){
//   for(let i=0; i < x + 1; i++){

//     for(let j=0; j<y + 1; j++){
//       console.log(i + '-' +j)
//     }

//   }
// }

// loop(6,8)

// 上一个案例 多一个参数 这个参数可以控制是否为倒序输出  函数可以控制倒序

// function loop(x,y,isRever){
//   // if(isRever){

//   //   for(let i=0; i < x + 1; i++){

//   //     for(let j=0; j<y + 1; j++){
//   //       console.log(i + '-' +j)
//   //     }
//   //   }
//   // }else{

//   //   for(let i=x; i > -1; i--){

//   //     for(let j=y; j > -1; j--){
//   //       console.log(i + '-' +j)
//   //     }
//   //   }
//   // }
// }

// loop(6,8,false)

// function loop(x,y,isRever){

//   isRever = isRever === undefined ? false : isRever

//   for(let i = isRever ? 0 : x ;  isRever ? i < x + 1 : i > -1; isRever ? i++ : i --){

//     for(let j= isRever ? 0 : y;isRever ?  j<y + 1 : j > -1; isRever ? j++ :j--){
//       console.log(i + '-' +j)
//     }
//   }
// }

// loop(6,8)

// var obj = {
// 	name:'a',
// 	age:18,
// 	loop(fn){
// 		for (let x in this){
// 			if(typeof obj[x] !== 'function'){
// 				fn(x)
// 			}
// 		}
// 	}
// };

// obj.loop(item =>{
// 	console.log(item)
// })

// function LoopObj(name,age){
//   this.name = name
//   this.age = age
//   this.loop = function(fn){

//     for(let key in this){
//       if(typeof this[key] !== 'function'){
//         fn(this[key])
//       }
//     }
      
   
//   }
// }
// const loopObj1 = new LoopObj('三木',18)
// const loopObj2 = new LoopObj('三木三木',1818)
// loopObj1.loop( x => console.log(x) )
// loopObj2.loop( x => console.log(x) )



// 判断这个obj的loop方法这样执行之后 控制台输出的什么
// 然后用构造函数的方式改变 创建这个对象的代码 可以方便创造出不同name属性和age属性值的对象
// 但他们都有一样的可以传入函数的loop方法

// 每一个构造函数执行loop方法输出的变成是属性值，而不是属性名，输出要通过传入的函数实现

/* 

定义一个构造函数，有两个参数，可以任意设置成属性或方法，当通过new 调用时 ，它会返回对象，但是如果不是通过new调用，它会把传入的两个参数拼接成一个字符串然后返回
*/


// function CreateObj(x,y){
//   if(typeof new.target === 'function'){
//     this.name = x
//     this.type = y
//   }else{
//     const result = x + '' + y
//     return result
//   }

// }

// console.log(new CreateObj(1,2))
// console.log(CreateObj(666,8888))




// function M(name,age){
// 	this.name = '三木'
// 	this.age = 18
//   console.log(this)
// 	return {
// 		baby:'tally'
// 	}
// }
// console.log(new M('好奇',20))

// function A(x){
// 	this.name = x
// 	this.go = () => {
// 		console.log(this)
// 	}
// 	(()=>{console.log(this)})()
// }

// const a = new A('aa')
// // a 实例

// a.go() 

// // a 实例

// const test = a.go
// test() 

// // a 实例

// A()
// // widnow对象

/* 

声明一个空对象，然后定义一个函数，设置一个参数，可以把每次函数执行时传入的数据放入到一开始的空对象中，属性名用数字字符的形式，依次递增，同时函数在每次添加完对象的属性之后，会把对象的中的已有属性和值 按照key-value的形式 字符串 形式 依次输出到控制台

*/

const obj = {}

// let count = 0

// function add(x,obj){
//   obj[count] = x
//   count++
//   for(let key in obj){
//     console.log(key + '-' + obj[key])
//   }
// }


// add('san',obj)
// add('好奇代码',obj)
// add('s',obj)
// add('好奇代码',obj)
// add('好奇代码',obj)
// add('好奇代码',obj)
// add('好奇代码',obj)
// add('好奇代码',obj)


// console.log(obj)
let a = 100
function abc(x){
  x = 300
  return x
}

console.log(abc(a))
console.log(a)