// console.log(111)


// const obj = {
//   a:111,
//   b:false
// }



// console.log(JSON.stringify(obj))
// console.log(JSON.stringify(obj,["b"]))
// console.log(JSON.stringify(obj,(k,v)=>{
//   if(k === ''){
//     return {"x":1,"y":6666}
//   }
//   return 23
// }))


// const obj2 = {
//   a:111,
//   b:false,
//   toJSON:function(){
//     return '6666'
//   }
// }
// console.log(JSON.stringify(obj2))  // '"bar"'
// console.log(JSON.stringify({x: obj2})); // '{"x":"bar"}'

// const jsonData = '{"result":111,"boolean":true,"num":"数字","other":null}'
// console.log(JSON.parse(jsonData))
// console.log(JSON.parse(jsonData,(k,v)=>{
//   if(k === ''){
//     return v
//   }
//   return 2
// }))


// console.log(JSON)
console.log(JSON.stringify({a:[123,"1111"]}))
