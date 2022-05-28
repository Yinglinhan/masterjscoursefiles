// var a = 100
// var b = a
// console.log("a",a, "b",b)
// b = 80
// console.log("a",a, "b",b)

var littleBoy = {
	name:"小明",
	gender:""
}


// var bigBoy = littleBoy
// var test = bigBoy

// console.log('littleBoy的name',littleBoy.name,'bigBoy的name',bigBoy.name)


// littleBoy.name = "大大"
// console.log('littleBoy的name',littleBoy.name,'bigBoy的name',bigBoy.name)
// console.log(test.name)

// var littleBoy = {
// 	name:"小明",
// 	gender:"male"
// }
// var smallBoy = {
//   name:littleBoy.name,
// 	gender:littleBoy.gender
// }

// var smallBoy = littleBoy

// var littleBoy = {
// 	name:"小明",
// 	gender:"male",
// 	parent:{
// 		mom:'aaaa',
// 		dad:'bbbb'
// 	}
// }

// var smallBoy = {
// 	name:littleBoy.name,
// 	gender:littleBoy.gender,
// 	parent:littleBoy.parent

// }

// littleBoy.parent.mom = 'big'
// console.log(smallBoy.parent.mom)



// var littleBoy = {
// 	name:"小明",
// 	gender:""
// }
// var bigBoy = littleBoy

// console.log(littleBoy)
// console.log('littleBoy的name',littleBoy.name)
// littleBoy.name = "大大"
// console.log(littleBoy)

// null 基本数据类型 null
// typeof 1 // 返回number
// typeof 'a' // 返回string
// typeof false // 返回boolean

// var a = {
// 	name:"小明",
// 	gender:"male"
// }


// var b = a

// var c = a
// a = null
// b = null
// c = null

// var a = 1
// var b = a


// var c = {
// 	name:'xxx'
// }

// var d = c

// 两者在内存中的不同过程写出来


// var a = {}
// var b = {
// 	name:'xxx'
// }
// var c = a
// var d = b

// d = {
// 	name:'ccc'
// }

// var e = d


// 这时候内存中几个对象数据


var a = {
	name:"xxx",
	gender:"xxx",
	child:{
		name:"",
		age:3
	}
}

// 任意声明一个变量 然后创建一个对象和a中的对象数据都一样 赋值给这个变量 
// 但是修改这个变量中对象的数据 不会影响到a这个对象的数据