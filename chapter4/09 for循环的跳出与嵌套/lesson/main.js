

// break 结束剩余的所有循环

// continue 会结束当前次循环 当前后续代码不执行 进入下一次循环 
// for(var i = 0; i < 10;i++){
		
// 		if(i === 5){
// 			continue
// 		}
// 		console.log(i)
// 		
// }


// label 
outter:
for (var i = 0; i<10;i++){
	
	inner:
	for(var j = 0; j<10;j++){
			if(j === 3){
				continue outter;
			}
		console.log(i + '-' +j)
	}
	
}



