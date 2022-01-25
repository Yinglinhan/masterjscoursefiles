//复杂问题 用注释分解 理清思路 然后一步一步做

// let arr = [12,41,20,66,35,70]

// 定义一个构造函数 一个参数
// 使用该构造函数 配合new 会产生有一个属性age的实例对象
// 利用上面数组中的数据，产出一个数组
// 数组中都是该构造函数的实例，实例的age值依次分别数arr这个数组中的数据
// 同时 最终的数组中的对象顺序 要按照age属性的值从小到大排列（升序排列）

// function PersonAge(age){
//   this.age = age
// }

// const result = arr
//               .map((ele) => {
//                 return new PersonAge(ele)
//               })
//               .sort((a,b) => a.age - b.age) 

// console.log(result)
        

// 定义一个函数，函数有两个参数
// 第一个和第二个参数传入有数据的数组
// 会比较这传入的两个数组中是否有相同（严格相等）的数据
// 有 函数返回true  没有 返回false

// function testArr(arr1,arr2){
//   // findIndex 传入函数检测 
//   const result = arr1.findIndex((ele,index,array) => {
//     const result = arr2.findIndex((ele1,index1,array1) => {
//       return ele1 === ele
//     })
//     if(result === -1){
//       return false
//     }else{
//       return true
//     }
//   })

//   if(result === -1){
//     return false
//   }else{
//     return true
//   }
// }

// console.log(testArr([1,2,3],[9,5,8]))

// let arr =[
// 	{name:'小明',score:60},
// 	{name:'小花',score:81},
// 	{name:'小亮',score:62},
// 	{name:'小章',score:73},
// 	{name:'小李',score:66},
// 	{name:'小胖',score:92},
// ]

// 定义一个函数 可以传入一个数组 和 一个字符串
// 这个函数执行时 可以筛选出数组中分数低于80分的对象
// 然后给该对象 设置一个属性 叫做 label 这个属性的值就是传入的第二个参数 字符串
// 同时 要创建一个新的数组 用深克隆的方式 按原数组相反的顺序 复制这些对象数据到新的的数组中
// 最后 还要在这个新数组的最后加上一个 所有对象的score总分的数据 数字类型的数据
// 函数执行完之后把这个新数组返回

// function arrangeArr(arr,str){
//   // filter
//   const tempArr = arr.filter(ele => ele.score < 80)
  
//   tempArr.forEach( ele => ele.label = str)
//   // console.log(tempArr,arr)

//   arr.reverse()

//   const result = arr.map( ele =>{
//     return {
//       ...ele
//     }
//   })
//   return result

// }

// console.log(arrangeArr(arr,'下次努力') === arr)

// let arr = [[1,2,3,'s','m','6',true], [12,12,32,'s2','木','6',false]]
// 定义一个函数 传入两个参数, 第一个是数组 第二个传某个数据
// 执行时传入上述这样结构的数组 和 一个你筛选的数据

// 筛选出数组中 和 传入进行筛选数据严格相等的数据
// 统计一共有多少个 返回 数量


// function countArr(arr,data){
//   let result = []
//   arr.forEach(ele => {
//     const tempArr = ele.filter((item) => item === data)
//     console.log(tempArr)
//     result = [...result, ...tempArr]
//   })
//   // console.log(result)
//   return result.length
// }

// console.log(countArr(arr,2))


// let arr = [1,2,3,4,5,6,7,8,9]
// 根据这个数组 创建一个新数组
// 这个新数组 的每一位数据 都是这个原数组相应索引位的值 与下一位索引位的值的和 
// 如果是最后一位 那就是和第一位的索引位和

// let result = arr.map((ele,index,array)=>{
//   if(index === arr.length - 1){
//     return index + 0
//   }else{
//     return index + index + 1
//   }
// })

// console.log(result)

// let arr = [1,2,3,'s','m','6',true]
// 定义一个函数 一个参数
// 可以把传入的数组
// 按照不同的数据类型进行不同的处理
// 如果是数字类型 把所有数字类型相加
// 如果是字符串 所有字符串拼接到一起
// 其他类型都忽略
// 然后 加总的数字 和 拼接的字符串 添加到原数组的后面
// 返回原数组

// function handleArr(arr){
//   let strTotal = '';
//   let numTotal = 0
//   arr.forEach(ele => {
//     if(typeof ele === 'string'){
//       strTotal += ele
//     }else if(typeof ele === 'number'){
//       numTotal += ele
//     }
//   })
//   arr.push(strTotal,numTotal)
//   return arr
// }
// console.log(handleArr(arr))


// 定义一个函数 可以传入一个字符串
// 然后把字符串拆分成一个个的字符
// 倒序放入到一个数组中
// 返回这个数组

// function test(str){
//   let arr = []
//   for(let s of str){
//     arr.push(s)
//   }
//   return arr.reverse()
// }

// console.log(test('我是三木'))




// 定义一个函数 两个参数 可以传入一个数组，和 一个数据类型的字符串 string number
// 函数执行时 如果 数组中有传入的数据类型
// 那么要把数组中所有数据全变成该类型的字符串名称
// 没有该类型数据的话
// 要把数组清空
// 最后返回这个原数组数组

// function handleArr(arr, typeStr){
//   const isTrue = arr.some(ele => typeof ele === typeStr)

//   if(isTrue){
//     arr.fill(typeStr)
//   }else{
//     arr.length = 0
//   }
//   return arr
// }

// console.log(handleArr([1,true,false],'string'))

// let arr = [1,'1',2,3,'s','m','6',true]


// 定义一个函数 传入两个参数 第一个数组  第二个是类型字符串
// 函数执行时 会把原数组中的所有非第二个参数类型名称的数据都删掉
// 这些删掉的数据会组成一个新数组
// 返回 新数组的长度

// 只有splice 可以从数组中间轻松删数据
// function handleArr(arr,typeStr){
//   const indexArr = [];
//   let spliceCount = 0
//   const resultArr = []
//   arr.forEach((ele,index)=>{
//     if(typeof ele !== typeStr){
//       indexArr.push(index);
//     }
//   })

//   indexArr.forEach((ele) => {
//     resultArr.push(...arr.splice(ele - spliceCount,1))
//     spliceCount++;
//   })
//   console.log(arr)
//   return resultArr
// }

// console.log(handleArr(arr,'boolean'))


let arr = [1,[2,4],5,[6,'true',1],[6,10], true]
// 定义一个函数 可以传入这样一个数组
// 计算出这个数组中所有数字类型数据的总和的值
// 并把所有非数字类型的数据组成一个新数组
// 返回新数组
// instanceof Array

function handleArr(arr){
  let total = 0
  let restArr = []
  arr.forEach(ele => {
    if(typeof ele === 'number'){
      total += ele
    }else if(ele instanceof Array){
      ele.forEach(ele1 => {
        if(typeof ele1 === 'number'){
          total += ele1
        }else{
          restArr.push(ele1)
        }
      })
    }else{
      restArr.push(ele)
    }
  })
  console.log(total, restArr)
  return restArr
  
}

handleArr(arr)




