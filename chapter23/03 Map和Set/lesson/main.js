// 数组和对象
// Map weakMap Set weakSet

const m = new Map([
	['a', 1],
	[NaN, 100],
	[{}, 200],
	[() => { }, [1, 2, 3]]
])

// for (let i of m) {
// 	console.log(i)
// }
m.set('bar', 'foo')

// m.forEach((value, key, map) => {
// 	console.log(value, key, map)
// })

const arr = [...m]
// console.log(arr)

// let obj = {}
// const wm = new WeakMap([[obj, 1]])
// // console.log(wm)
// obj = null
// console.log(wm)


const s = new Set([1, 22, 22, 3, 22])
// console.log(s)
// for(let i of s) {
// 	console.log(i)
// }


console.log([...s])
