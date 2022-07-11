// console.log('好奇代码的三木')

// setTimeout(function () {

//   console.log('1')

// },100)


// console.log('2')

// setTimeout(function () {
//   console.log('3')
// },50)

// console.log(4)

// setTimeout  setInterval
// EventLoop
/* 
'好奇代码的三木'
2
4
3
1
*/

/* 
异步代码 
简单的理解 让函数（代码）在将来某个特定时候或者时机执行的代码

定时器
DOM事件处理函数
交叉观察器  IntersectionObserver 


从服务器获取数据的代码 函数 方法




*/

function getDataFromUrl(url, data, callback) {
  const randomDelay = Math.random().toFixed(3) * 10000;

  setTimeout(() => {  
    callback()
  },randomDelay)

}

getDataFromUrl()
// 其他同步代码

/* 
A  http://aaaaaaaa
B  http://bbbbbbbb
C  http://cccccccc


A -> B -> C
*/
// 获取A数据
getDataFromUrl('http://aaaaaaaa','a',(resData)=>{
  console.log('received a data ')
  // 获取B数据
  getDataFromUrl('http://bbbbbbbb',resData,(resData)=>{
    console.log('received b data ')

    getDataFromUrl('http://cccccccc',resData,(resData)=>{
      console.log('received c data ')

      getDataFromUrl('http://cccccccc',resData,(resData)=>{
        console.log('received c data ')
  
        getDataFromUrl('http://cccccccc',resData,(resData)=>{
        console.log('received c data ')
  
            getDataFromUrl('http://cccccccc',resData,(resData)=>{
            console.log('received c data ')
      
            
          })
        })
      })
    })
  })

})

// 回调地狱  callback hell






