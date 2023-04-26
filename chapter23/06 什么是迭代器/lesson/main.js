// const arr = [1, 2, 3, 4]

// const iter = arr[Symbol.iterator]()
// console.log(iter.next()) // { value: 1, done: false }
// console.log(iter.next()) // { value: 2, done: false }
// console.log(iter.next()) // { value: 3, done: false }
// console.log(iter.next()) // { value: 4, done: false }
// console.log(iter.next()) // { value: undefined, done: true }

// for (let i of arr) {
//   console.log(i)
// }

// for (let i of arr) {
//   console.log(i)
// }


// const [a,b] = arr
// console.log(a,b)


// let arr = [1, 2, 3, 4, 5]
// let iter = arr[Symbol.iterator]()

// console.dir(iter)
// iter.next()

// for (let i of iter) {
//   console.log(i)
//   if (i > 2) {
//     console.log('我结束啦')
//     break
//   }
// }


// for (let i of iter) {
//   console.log(i)
// }


const testObj = {}

testObj[Symbol.iterator] = function () {
  let i = 0
  return {
    next: function () {
      return {
        value: i++,
        done: i > 10
      }
    }
  }
}
/**
 * 第一次 
 * {value:0,done:false}
 * 第二次
 *  {value:1,done:false}
 * 
 * ……
 * 
 * 第十次
 * {value:9,done:false}
 * 第十一次
 * {value:10,done:true}
 */


for (let i of testObj) {
  console.log(i)
}