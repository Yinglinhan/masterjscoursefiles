//  声明1个函数，函数名称自定义，当函数执行时，会依次输出0-0……8-8的字符串


// function loop(){
// 	for(var i=0; i< 9; i++){


// 		for(var j=0; j<9;j++){
// 			console.log(i + '-' + j)
// 		}

// 	}
// }


// loop()

// 定义一个对象，对象中有一个方法，然后执行这个对象的方法时，会依次输出9-9 9-8 9-7这三个字符串

var lock = false

function loop(){
	 
		for(var i=9; i> 0; i--){

			if(lock){
				break
			}
		
			for(var j=9; j>0; j--){
				console.log(i +'-'+ j)
				if(j === 7){
					lock = true
					break 
				}
			}

		}
}
loop()