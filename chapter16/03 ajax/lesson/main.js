
const xhr = new XMLHttpRequest()

xhr.addEventListener('load',(e)=>{
  // console.log(e)

  // status code   statusText
  console.log(xhr.status)
  if(xhr.status  >= 200 && xhr.status < 400){
    console.log(xhr.response)
    // 后续的数据处理
  }else{
    
  }
  // console.log(xhr.response)
  
})

// xhr.addEventListener('progress',(e)=>{
//   //  lengthComputable  loaded total
//   console.log(e)
//   if(e.lengthComputable){
//     const ratio = e.loaded / e.total
//   }
// })


xhr.onreadystatechange = function(){
  console.log(xhr.readyState)
}
// onreadystatechange    readyState


xhr.responseType = "json"
xhr.open('GET','https://devapi.qweather.com/v7/weather/now?location=101010100&key=fad5aee95b114afa93da9aec5354f183')
// 三个参数 前两个必传

xhr.send()


// load   progress  error (都在open方法执行前设定)
// xhr.response 响应的数据
// xhr.responseType 返回的数据的自动处理方式

// GET 方法提交数据的方式

// http://xxxxxx.com/getdata?name=123&class=7

// POST  方法提交数据的方式 不用给api地址添加额外字符

// const user = {
//   a:'1',
//   b:8888
// }
// const data = JSON.stringify(user)

// xhr.send(data)
// content-type



// const result = encodeURIComponent("data=http://hahahah")
// console.log(result)

//  decodeURI  encodeURI()

// decodeURIComponent  encodeURIComponent


// let url = new URL("https://hellocode.fun/getdata")
// url.searchParams.set('name',"tttt   aaaa!")
// url.searchParams.set('u',"oooa!")
// console.log(url)

// xhr.abort()
// xhr.timeout = 1000 指定超时

/* 

- `loadstart` —— 请求开始。
- `progress` —— 一个响应数据包到达，此时整个 response body 都在 `response` 中。
- `abort` —— 调用 `xhr.abort()` 取消了请求。
- `error` —— 发生连接错误，例如，域错误。不会发生诸如 404 这类的 HTTP 错误。
- `load` —— 请求成功完成。
- `timeout` —— 由于请求超时而取消了该请求（仅发生在设置了 timeout 的情况下）。
- `loadend` —— 在 `load`，`error`，`timeout` 或 `abort` 之后触发。


*/


