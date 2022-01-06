

// >  < >=  <=

// console.log(1 > 3, 1 < 3)

// var person = {
// 	name:'小明',
// 	age:18
// }

// if (person.age < 18) {
// 	console.log("不可以找对象")
// }else{
// 	console.log("可以找对象")
// }

// var isBigger = 4 > 3 
// console.log(isBigger)

// == !=  === !==  
//  = = =  严格相等   ! = =  严格不等
// = = 相等   ! = 不等
// 1 == 2 // false
// 1 != 2 // true

// console.log('123s' > 2) 

// NaN Not a Number
// 跟任何数据比较 都是false 跟NaN比较 都是false
// console.log(NaN > 1000)
// parseInt()
// parseFloat()

//parse Int Integer 
parseInt('s123')  // NaN 
parseInt('123') // 123
parseInt('123sss') //123
parseInt('123s123231') //  123 只解析到非数字位置 后面就算再有数字也不管了
parseInt('123.11') //123
// - 开头必须是数字字符
// - 如果开头遇到非数字字符 直接返回NaN
// - 解析转换到非数字字符的前一个 包括. 后面不管了

//floating-point number
parseFloat('123.11') // 123.11
parseFloat('123.11s12312') // 123.11
// - 开头必须是数字字符
// - 如果开头遇到非数字字符 直接返回NaN
// 能解析数字字符之后一个小数点及之后的数字，
//  仅限一个小数点，遇到其他的非数字字符或者小数点就停止解析


// console.log(1 == true)
// console.log(1 === true)
// console.log(1 === '1')
// console.log(1 == '1')

// var obj = {
// 	name : 'xx'
// }

// var a = obj

// var b = a

// var c = {}

// console.log(a === b,a === obj, c === obj)


