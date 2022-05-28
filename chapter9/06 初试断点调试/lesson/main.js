let a = 100,
    b = true,
    obj = {
      x:1,
      y:2
    }

function go(){
  const inner = "inner"
  // throw new Error("111")
  console.log(666)
  console.log(inner)
}


function test(){
  const t = 666
  go()
  console.log(t)
}




test()

// 断点
// 重新刷新页面
// step 会忽略异步的代码