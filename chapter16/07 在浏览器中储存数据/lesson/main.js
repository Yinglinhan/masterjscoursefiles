// Session Storage
// 页面关闭就消失

// Local Storage
// 除非手动删除 不然一直都在
// 跨页面访问 同源即可访问

// 5m


// setItem    getItem   removeItem  clear()

localStorage.setItem('a',111)
localStorage.setItem('vvv',false)

console.log(localStorage.getItem('vvv'))

localStorage.removeItem('vvv')



// IndexedDB  数据库
