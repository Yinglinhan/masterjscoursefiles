var obj = {
	name:'',
	age:0,
	gender:'',
	height:''
}

// 用for in 给对象的每个属性设置不同的值
for(var key in obj){
  console.log(key)
  // if(key === 'name'){
  //   obj[key] = '小明'
  // }else if(key === 'age'){
  //   obj[key] = 18
  // }else if(key === 'gender'){
  //   obj[key] = 'male'
  // }else{
  //   obj[key] = '178cm'
  // }


  if(key === 'name'){
    obj[key] = '小明'
  }

  if(key === 'age'){
    obj[key] = 18
  }

  if(key === 'gender'){
    obj[key] = 'male'
  }
  
  if(key === 'height'){
    obj[key] = '180cm'
  }

}

console.log(obj)