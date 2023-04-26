let sym = Symbol()
// let sym1 = Symbol()
let abc = Symbol('personName') // 有描述的 Symbol
let d = Symbol('personName')

const obj = {
	[sym]: 111,
	[abc]: 'ccc',
	[Symbol('test')]: '11111111111',
	a: 0
}
const symbolsArr = Object.getOwnPropertySymbols(obj)
// console.log(symbolsArr)
// console.log(obj[symbolsArr[2]])


const a = Symbol.for('foo')
const b = Symbol.for('foo')
// console.log(a === b)

console.dir()
const arr = []

arr[Symbol.iterator] = function () {

}