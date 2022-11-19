// var result = '100'

// result += 100  // '10000'

// result = -result / 2 + '' // '-5000'

// result = +result >  500 // false

// // result 最后的值是什么
// // console.log(result)


// var a = '好奇代码'
// var b = 100

// var result;

// result = +a > 1 || b // 100
// result =  (result - 200) < 0 && parseInt(a) // NaN
// result = result || !result

// 最后result 是什么 true
// console.log(result)

// var person = {
// 	name:'小明',
// 	age:18,
// 	gender:'male',
// 	girlfriend:'小丽'
// }

// 遍历这个对象把所有的属性名和属性对应的值取出来
// 拼接成 name=小明&age=18&gender=male&girlfriend=小丽 这样一整个字符串

// var result = '';
// var count = 0
// var temp = ''

// for (var key in person){
//   // console.log(key)
//   count++
//   if(count === 4) {
//     temp = key + '=' + person[key] 
//   }else{
//     temp = key + '=' + person[key] + '&'
//   }

//   result += temp
  
// }

// console.log(result)



// 根据这个对象的age属性的数字大小来给这个对象修改属性和对象相关属性的数据
// 如果 age属性值 小于 18
// 设置一个属性叫girlfriend 值是 null

// 如果age属性值 大于18 小于 25
// 设置属性 girlfriend的值为 小丽

// age属性的值 大于25 小于 30
// 如果有girlfriend 属性 要先删除 girlfriend属性
// 并且设置一个属性 wife  值为 小丽

// 如果age 大于 30
// 那么设置一个属性 child 值为一个对象 对象有一个属性
// name 小小明 age 3 gender female

// 用if else 和switch case 语句分别实现
// var person = {
// 	name:'小明',
// 	age:27,
// 	gender:'male',
// }

// if(person.age < 18){
//   // person['girlfriend'] = null
//   person.girlfriend = null
// }else if(person.age >= 18 && person.age < 25){
//   person.girlfriend = '小丽'
// }else if(person.age < 30 && person.age >=25){
//   if('girlfriend' in person){
//     delete person['girlfriend']
//   }
//   person.wife = '小丽'
// }else{
//   person.child = {
//     name:'小小明',
//     age:3,
//     gender:'female'
//   }
// }

// switch (true) {
//   case person.age < 18 :
//     person.girlfriend = null
//     break;
//   case person.age >= 18 && person.age < 25:
//     person.girlfriend = '小丽'
//     break;
//   case person.age < 30 && person.age >=25:
//     if('girlfriend' in person){
//           delete person['girlfriend']
//         }
//     person.wife = '小丽'
//     break;
//   default:
//     person.child = {
//           name:'小小明',
//           age:3,
//           gender:'female'
//         }
// }

// console.log(person)

// var age = 20

// if(age > 18){
// 	console.log('可以谈恋爱')
// }else if(a > 10){
// 	console.log('可以烫头发')
// }else if(a > 7){
// 	console.log('可以玩电脑')
// }




// var age = 20

// if(age > 18){
// 	console.log('可以谈恋爱')
// }

// if(age > 10){
// 	console.log('可以烫头发')
// }

// if(age > 7){
// 	console.log('可以玩电脑')
// }


// var age = 10

// var a = age > 100 ? a = 100 : a = 200 // 200

// a = a + '' ? a + 200 : '好奇代码的三木' // 400


// if(a){
// 	a = parseInt(a) - 100
// }

// //a 最后为多少 300


// 有一个对象 你不知道具体这个对象中的属性和值
// 但是你需要把这个对象中只要是某个属性它的值 
// 只要是是undefined null 和 NaN 
// 你就要把这个属性名称输出到控制台

var obj = {
	a:'123',
	b:undefined,
	c:666,
	d:null,
	e:NaN,
  f:999,
  g:null,
}

var temp

for (var key in obj){
  // console.log(key,obj[key])
  temp = obj[key] + ''
  // console.log(temp)
  if(obj[key] === undefined || obj[key] === null || temp === 'NaN'){

    console.log(obj[key])
  }

}



// 有两个对象obj1  obj2
// 其中一个对象你不知道具体的属性和值 obj1 属性和值非常多
// 有一个对象 obj2 是你自己的数据 里面已经有一些属性和值
// 然后你想要把 obj1中所有obj2中没有的属性 的数据都复制一份到
// obj2中 但是如果有同样属性名的 不要复制

// var obj1 = {
//   name:'abc',
//   age:16,
// };


// var obj2 ={
//   name:'cici',
//   type:'big',
//   old:true,
//   bigger:false
// }

// for (var key in obj2){
//   if(key in obj1){

//   }else{
//     obj1[key] = obj2[key]
//   }
// }
// console.log(obj1)


// for循环的退出

// 当 i = 3 的时候 结束所有循环
// 当 j = 6 的时候 结束所有循环

// var lock = false

// for (var i = 0; i<10;i++){

//     if(lock){
//       break;
//     }
  
//   for(var j = 0; j<10;j++){
//     if(j === 6){
//       lock = true
//       break;
//     }
//     console.log(i + '-' +j)
//   }

// }