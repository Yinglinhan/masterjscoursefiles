function test(x){
	
}


test.level = 1
// console.log(test.level)

test.go = function(){
		console.log('gogogo')
}

// test.go()

// console.log(test)

// length   prototype  name
// console.log(test.length)
// console.log(test.prototype)
// console.log(test.name)

const a = {}

const b = {}

const c = a

console.log(Object.is(a,b))
console.log(Object.is(a,c))

// 静态方法 static method

