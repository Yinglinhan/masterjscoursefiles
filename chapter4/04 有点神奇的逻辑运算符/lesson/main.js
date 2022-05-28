// 逻辑非!  
// 逻辑或 ||   逻辑与（且）&&

true || true // 只要一个表达式结果是true 这整体就是true

true && true // 两个都是true 整体表达式才是true

false && true // false
true && false // false
true && true // true
false && false  // true

true || true  // true
false || true  //true
true || false  // true
false || false  //false

// console.log(true && true)

1 || null  // 1 -> true     true    1

1 && null // 1 -> true   null->false  false

// console.log(1 || null )
// console.log(1 && null)
/* 
左边的表达式 能决定 整个语句是true 还是 false  就没右边什么事了

就直接返回左边的表达式结果

左边的表达式不能决定 才要看右边  

看也就意味着 直接返回右边的表达式结果了

更简单点 就是返回能决定整体是true还是false的那个表达式的结果

*/

// 3 < 1 || 100  // 100

// '好奇代码的三木' || 0 // '好奇代码的三木'

// 100 && '三木' // '三木'

// undefined && 666 > 999 // undefined

// 100 > 2 || false // true

// // console.log(100 > 2 || false)

// // 短路求值

// var name = '11' || null

100 < 101 || '好奇代码的三木'

'' || 0

'我' && '你'

0 && 666 > 999

100 > 2 && false


