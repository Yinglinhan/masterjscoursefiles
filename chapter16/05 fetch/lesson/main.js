
// 默认GET
// const result = fetch('https://console-mock.apipost.cn/app/mock/project/8dcbedb7-e91e-4cd3-8301-8b4a788de906/abc')
// console.log(result)
// result.then(
//   (response)=>{
//     // console.log(response)
//     return response.json()
//   }
// ).then(
//   (data)=>{
//     console.log(data)
//   }
// ).catch((error)=>{

// })

// async  await
// 用try catch 处理错误

// async function getData(){

 
//     const response = await fetch('https://console-mock.apipost.cn/app/mock/project/8dcbedb7-e91e-4cd3-8301-8b4a788de906/abc')

//     const data = await response.json()
 
 
// }

// getData()


// 如何用POST方法
const obj = {
  a:111,
  b:"hellocode"
}

const jsondata = JSON.stringify(obj)

async function getData(){

 
  const response = await fetch('https://console-mock.apipost.cn/app/mock/project/8dcbedb7-e91e-4cd3-8301-8b4a788de906/abc',{
    method:"POST",
    headers:{
      "Content-Type":"application/json;charset=utf-8"
    },
    body:jsondata
  })

  console.log(response.status,response.statusText,response.ok)

  console.log(response)
  if(response.ok){
    const data = await response.json()
    console.log(data)
  }

  

}

getData()

console.log(Headers, Response, Request)
  // Response  Request