

// function* generatorFn() {
//   console.log(1)
//   const a = yield 1;
//   console.log(a)
//   console.log(2)
//   yield 2;
//   console.log(3)
//   // return 1000

// }

// const generator = generatorFn();
// console.log(generator)
// console.log(generator.next())
// generator.next(100)
// console.log(generator)
// console.log(generator.next())
// console.log(generator)
// console.log(generator.next())


// function* generatorFn() {
//   const b = Math.random() * 100
//   console.log(b)
//   const a = yield 1
//   console.log(a)
//   console.log( yield 2 + 2)
//   yield 3
//   console.log(yield)
//   return 100
// }

// const g = generatorFn()

// console.log(g.next())
// console.log(g.next())
// console.log(g.next(55))
// console.log(g.next())
// console.log(g.next(66))
// console.log(g.next())

// function* generatorFn() {

//   yield 1
//   yield 2
//   yield 3
// }

// const g = generatorFn()

// console.log(g)

// for (let i of g) {
//   console.log(i)
// }

// const obj = {}
// obj[Symbol.iterator] = function* () {

//   yield 1
//   yield 2
//   yield 3
// }
// for (let i of obj) {
//   console.log(i)
// }

// function * generatorFn(){
// 	yield * [1,2,3]
// }

// let gObj = generatorFn()

// for(const x of gObj){
// 	console.log(x)
// }


function* fibonacci(n, current = 0, next = 1) {
  if (n === 0) {
    return current;
  }
  yield current;
  yield* fibonacci(n - 1, next, current + next);
}

// 生成斐波那契数列的前10个数
for (let value of fibonacci(10)) {
  console.log(value);
}



