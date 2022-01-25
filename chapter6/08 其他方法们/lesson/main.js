// find 返回元素  寻找 找到的意思
// findIndex 返回索引
// cb如果返回真值 那么 该元素 就被返回
// 只返回第一个 cb是真值的情况 
// 否则返回undefined



//includes  包含的意思
// 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。



// concat 合并成一个新数组
// 不改变原数组
// 返回一个新数组
// 调用concat方法的数组的数据在新数组前面
// 传值 不一定要传数组 也可以是单个的数据
// const array1 = ['a', 'b', 'c'];
// const array3 = array1.concat(1,2,3,4)
// console.log(array3)

// fill 填充
// 左闭右开  （不包括end）
// 修改原数组
// 返回的也是原数组
const array1 = [1, 2, 3, 4];
const result = array1.fill(1,1,2)
console.log(result)

// copyWithin
// 用数组自己的某些数据来 覆盖 自己数组中特定索引位开始的数据
// 后面两个参数 左闭右开 （end 不包含）
// 会修改原数组


// join 链接的意思
// 不传参数 默认用逗号相连接
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join(''))
