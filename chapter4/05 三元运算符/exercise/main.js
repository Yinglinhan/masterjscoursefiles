var a = true ? 1 : 2

var b = false ? 3 : 4

var c = 1 > 2 ? '我' : '你'


var d = 100

d = d > 100 ? d = 200 : d = 300

// 执行完之后d的值是多少
// console.log(d)

var e = '0'

e = e ? parseInt(e) : e + 100

// 执行完之后 e的值是？
console.log(e)