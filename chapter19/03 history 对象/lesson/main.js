console.log(history.length)


//pushState
//replaceState 
// 不会重新加载页面 能改变地址栏地址
history.replaceState({ a: 111 }, null)
console.log(history.state)
history.back()

// popState 
// state 在500k ～1m以内
window.addEventListener('popstate', (e) => {
  console.log(e)
})

// hashchange hash值被改变时会触发
window.addEventListener('hashchange')

