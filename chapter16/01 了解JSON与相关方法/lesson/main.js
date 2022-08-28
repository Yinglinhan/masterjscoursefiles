/* 
JSON
JavaScript Object Notation 像JS对象形式类似一种形式

属性名一定要用双引号
数字  字符串  布尔值  数组  对象  null 
不能用undefined 


JSON.parse  解析成JS可用的数据形式
第二个参数可传函数


JSON.stringify  转换成穿字符串的JSON格式   过滤掉所有的方法 包括原型链的数据 任何是undefined的属性
可以有三个参数  第二个如果是数组 就是一个过滤器  如果是函数 可以接收两个参数 动态修改最后产出的结果
第三个 是缩进  传数字就可以
第二个和第三个都是可选参数
*/

// const jsonData ='{"name":"好奇代码的三木","age":"18","male":null}'

// console.log(jsonData)

// console.log(JSON.parse(jsonData))


const  data = {
  name:'abc',
  age:19,
  male:true,

}


// console.log(JSON.stringify(data))

// const result = JSON.stringify(data,["name","age"])
// console.log(result)


// const result = JSON.stringify(data,(key,value)=>{

//   if(key === ''){
//     return value
//   }else if(key === 'age'){
//     return 30
//   }else{
//     return value
//   }


// })
// console.log(result)


const jsonData ='{"name":"好奇代码的三木","age":"18","male":null}'

const result2 = JSON.parse(jsonData,(k,v)=>{
  if(k === ''){
    return v
  }else if(k === "age"){
    return undefined
  }else{
    return v
  }
  
})

console.log(result2)

// const a = {
//   releaseDate:new Date(2028,11,1), //这里其实是生成了一个日期格式的数据了
//   a:123
// }
// let jsonText = JSON.stringify(a)
// console.log(jsonText)

// let result = JSON.parse(jsonText,(key, value)=> key === 'releaseDate' ? new Date(value) : value)

// console.log(result)