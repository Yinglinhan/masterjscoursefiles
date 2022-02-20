function go(){
	console.log(2)
	setTimeout(console.log,2000,3)
}
console.log(1)
go()
setTimeout(x => console.log(x),500,4)

// 1
// 2
// 4
// 3