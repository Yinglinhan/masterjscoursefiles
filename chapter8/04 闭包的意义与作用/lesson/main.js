// let a = 100
// let b = 2000

// const test = function(){
//   let innerA = 6
// 	let innerB = 88
// 	function go(x){
//     console.log(innerA)
//     innerA = x
//   }

//   return go

// }

// const c = test()
// c(100)
// c(200)

// console.log('全部执行完成')

// function cacheArr(){
	
// 	const cache = []
	
//   return {
// 		add(x){
// 				cache.push(x)
// 			},
// 		delete(){
// 			cache.pop()
// 		},
// 		log(){
// 			console.log(cache)
// 		}
// 	}
// }

// const a = cacheArr()
// a.add(1)
// a.add('添加')
// a.log()
// a.delete()
// a.log()

let foo = function(){
	let i = 0;
	return function(){
			console.log(i++);
	}
}
let f1 = foo();
let f2 = foo();
f1();
f2();
f1();