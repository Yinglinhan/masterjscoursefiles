/* 
定义一个函数，这个函数可以传入任意数量的实参，但是会根据传入参数不同的数据类型进行不同的处理，如果都是数字类型，会相加并返回，如果是全是字符串类型，会把所有字符串拼接在一起并返回，如果是布尔值类型的数据，会把所有布尔值按照传入顺序组成一个数组返回，如果同时传入的数据同时有多个类型，那么会在控制台输出 “我处理不了”

*/

function checkArg(){
  const arr = Array.from(arguments);

  if(arr.every((item,index) => typeof item === 'number')){
    const result = arr.reduce((acc, item) => acc + item,0)
    return result
  }else if(arr.every((item,index) => typeof item === 'string')){
    const result = arr.reduce((acc, item) => acc + item,'')
    return result
  }else if(arr.every((item,index) => typeof item === 'boolean')){
    return arr
  }else{
    console.log("我处理不了")
  }
}

console.log(checkArg('true,false,true',"好奇代码"))