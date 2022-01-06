//三目运算符   条件运算符

// expression ？ expression1 : expression2

// true ? 1 : 2
// false ? 1 : 2
// console.log(false ? 1 : 2)

// var age = 26;

// var beverage = age >= 21 ? "Beer" : "Juice";

// console.log(beverage);
// var a = 100 
// var b = 50

// var result = a > 100 ? b = 666 : b = 333

// //result, b
// console.log(result,b)

// + - 尝试把数据转换为数字类型 number类型
// +true
// -true
// -''
// +undefined 
// +'s' 
// +'123'


// + 


var a = true ? 1 : 2

var b = false ? 3 : 4

var c = 1 > 2 ? '我' : '你'



var d = 100

d = d > 100 ? d = 200 : d = 300

// 执行完之后d的值是多少

var e = '0'

e = e ? parseInt(e) : e + 100

// 执行完之后 e的值是？