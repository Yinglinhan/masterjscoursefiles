// var lock = true

// for (var i = 0; i<10;i++){

// 	if(lock){
// 		for(var j = 0; j<10;j++){
// 		if(j === 5){
// 			lock = false
// 		}
// 		console.log(i + '-' +j)
// 		}
// 	}
	
// }

// 依次输出的内容 写出来 0-0 …… 0-9

//自己手写一个for循环、依次输出 10，9，8……到1
// for (var a = 10; a > 1; a--){
//   console.log(a)
// }

// 实现一个嵌套循环 两层循环 10-10 10-9 10-8 ……  0-10 0-9 0-8 …… 0-0

for(var i = 10; i > -1; i--){

  for(var j = 10; j > -1; j--){
    console.log(i + '-' + j)
  }

}