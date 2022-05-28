// 简写赋值  可计算属性  解构赋值

// 简写赋值
// let n = "Matt"
// let person = {
// 	n  // 相当于是 n:n
// };
// console.log(person);

// function abc(){
// }

// let person = {

// 	abc  // abc:abc
// };
// console.log(person);


// // 可计算属性
// let nameKey = 'name'
// let person = {
// 	[nameKey + 'abc']:'Matt' // 可计算属性 不仅可以使用变量 还可以使用表达式
// }
// console.log(person)
// 可计算属性表达式中抛出任何错误都会中断对象创建，如果计算属性的表达式有副作用，
// 当表达式抛出错误时，之前完成的计算是不能回滚的

// const methodKey = 'sayName'
// // 简写方法名与计算属性相容
// let person = {
// 	[methodKey](name){
// 		console.log(`My name is ${name}`)
// 	}
// }

// 对象解构

// 快速地把对象中的数据赋值到当前环境的变量中
// let person = {
// 	name:'Matt',
// 	age: 27
// }

// let { name: personName, age: personAge } = person
// 注意前面要有个声明的关键字 这里是let 两个变量就同时声明了
// 整个看起来就像是反向的字面量对象的生成
// personName 是 Matt
// personAge 是 27
// console.log(personName,personAge)


// let {name, age} = person
// 这样就是用了和属性名一样的同名变量

// console.log(name, age)

// let {name, job} = person
// job这个变量没有对应在对象里面的属性 因此它的值就是 undefined

// console.log(job)

// let { name, job="Software engineer" } = person
// 可以添加默认值

// 数字和字符串 也可以被解构 但是原始值被解构时会在后台被转换成包装类对象
// let { length } = 'foobar';
// console.log(length) // 6 这里其实就是字符串包装类的属性length被解构出来了

// let { constructor:c } = 4;
// console.log(c === Number); // true  这里其实就是数字的包装类的构造函数被解构出来了

// // null 和 undefined 不能被解构。会报错

// 把一个对象里面的属性通过解构赋值给另一个对象
let person = {
	name:'name',
	age:27,
	job:{
		title:'Software engineer'
	}
}

// 可以使用嵌套结构 把对象中层级比较深的某个数据取出来赋值给当前环境中的变量
let { job: { title:abc }} = person
console.log(abc) // Software engineer