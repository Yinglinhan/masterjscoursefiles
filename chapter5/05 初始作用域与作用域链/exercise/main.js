// var a = 1, b = 66;

// console.log(a)

// function test(a,b,c){
// 	// a -> 100   b -> 2  c -> 6

// 	c = 3
// 	// a -> 100   b -> 2  c -> 3
// 	console.log(a,b,c)
// }


// test(100,2,6)
// // 输出什么

var t = 6

function test(a,b,c){
	// a -> 6   b -> 30  c -> 50
	console.log(a,b,c)

	c = 3
	b = 200
	// a -> 6   b -> 200  c -> 3
	function inner(a){
		  // a -> 3
			var abc = 10 * b

			// abc -> 2000
				
			console.log(a * abc) // 6000

	}

	inner(c)
}

test(t,30,50)

// 输出什么