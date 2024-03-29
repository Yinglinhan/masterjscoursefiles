// 都是返回某个数据的索引值
// 返回的都是第一个匹配的 或者 满足函数判断条件的（函数返回真值）

// findIndex
// cb如果执行后返回true（真值） 
// findIndex就会把这次执行cb的元素的索引值返回
// 如果没有任何满足cb返回ture的情况 findIndex 返回 -1
// 不会修改原数组

// indexOf
// 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
// 不修改原数组
// 可以传第二个参数 从哪个索引位开始找
// 从左往右找

// lastIndexOf
// 在数组中的最后一个的索引  如果不存在则返回 -1
// 可以传第二个参数 从哪个索引位开始找
// 从右往左找
// 不改变原数组

// 定义一个函数，两个参数，第一个是数组，第二个是类型的字符串 number string boolean

// 该函数 可以根据传入的类型字符串 把数组中相应类型的元素的索引位都找出来
// 组成一个新数组 返回


// 定义一个函数  一个参数
// 函数执行时 传入的数组 如果有任意一个数据为布尔类型 而且该数据的索引位非最后一个
// 那么会这个数组中的所有数据 拼接成一个字符串 返回
// [ture,1]

let arr = [1,23,2,1,23,1,'三木',6]

// 定义一个函数 传入两个参数
// 一个是数组 一个是你想要查找的数据
// 函数执行会把传入第二个参数数据相同的
// 数组中的索引位 获取到 组成一个新数组
// 最后返回这个新数组
// 没有任何匹配的就返回空数组



