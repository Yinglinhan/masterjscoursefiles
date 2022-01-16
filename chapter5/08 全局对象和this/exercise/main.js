// const func = {
//   test:function(){
// 		// this -> window{}
//     const showThis = ()=>{
      
// 				console.log(this) // window {}
// 				function innerShow(){
// 					console.log(this)	// window {}
// 				}
// 				innerShow()
//     }
//     showThis()
//   }
// }

// // func.test()
// var func2 = func.test
// func2()

// // 输出this是什么

function test(o){

	//this -> window
	
	o.go()  // this -> obj{}
	o.go2() //箭头函数  往外找 this -> window

}

function go(){
	console.log(this)
}

var obj = {
	go, 
	go2:()=>{
		console.log(this)
	}
}

test(obj)
// 输出this是什么