// resize 
// 绑在window上
// 窗口改变超过一个像素就会触发 

// let timePre = 0
// const box = document.querySelector('.box')
// box.style.height = innerHeight / 10 + 'px'
// box.style.width = innerWidth / 10 + 'px'
// box.style.backgroundColor = 'red'

// window.addEventListener('resize',function(e) {  
//   box.style.height = innerHeight / 10 + 'px'
//   box.style.width = innerWidth / 10 + 'px'
// })

// load 事件
// 绑定在window对象上
/* 
在window对象上，load事件会在整个页面（包括所有外部资源如图片、JavaScript文件和CSS文件）加载完成之后触发。
*/

// window.addEventListener('load',()=>{
//   console.log(111)
// })

// 图片元素 只要添加了src属性 就会去加载相应的图片
// 是否添加到dom树上 不影响加载图片 
let image = new Image()
image.src ="https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/05/03/0/16912734.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=1050&exp=3600";
image.onload = function() {
  console.log('我已经加载了')
}
// document.body.appendChild(image)

// DOMContentLoaded 事件
// 添加到window上
// 这个事件会在DOM树构建完成后立即触发，而不用等待图片、JavaScript文件、css文件或其他资源加载完成
// 相比load事件，DOMContentLoaded事件可以让开发者在外部资源下载的同时就能指定事件处理程序，从而让用户能够更快地于页面交互

// readystatechange 文档状态改变触发事件
// 绑定在document上
// document.readyState
// loading interactive complete
document.addEventListener("readystatechange",(e)=>{
  console.log(document.readyState)
})


// contextmenu 
// 事件对象是 pointerEvents类型 有很多鼠标位置信息
// 整个文档 document设置的话 整个文档都右键点击无效
// 可以给某个元素设置 
// 是冒泡事件 
const h1 = document.querySelector('h1')
h1.addEventListener("contextmenu",(e)=>{
  e.preventDefault()// 阻止鼠标右键点击菜单栏出现
  console.log(e)
})


// beforeunload
/* 
这个事件会在window上触发，用意是开发者提供阻止页面被卸载的机会

这个事件会在页面即将从浏览器中卸载时触发

这个事件不能取消

*/
window.addEventListener('beforeunload',(e)=>{
  console.log(1111)
})


// haschange
/* 
该事件用于在URL散列值（url最后的#后面的部分）发生变化时通知开发者
绑定在window上

event对象有两个新属性 oldURL 和 newURL ，分别用来保存变化前后的URL，包含散列值的完整URL
*/

window.addEventListener('hashchange', function (e) {
  console.log(e)
})

// pageshow pagehide
/* 
会在页面显示时触发 在新加载的页面上，pageshow会在load事件之后触发

在来自往返缓存的页面上，pageshow会在页面状态完全恢复后触发

这个事件的目标是document，但是处理程序必须添加到window上

pageshow的event对象中还包含了一个名为 persisted的属性 这个属性是一个布尔值 如果页面储存在 往返缓存中就是true 否则就是false



这个事件会在页面从浏览器中卸载后 在unload事件之前触发

这个事件的目标是document，但是处理程序必须添加到window上

event对象也有persisted属性  但是对pagehide事件来说 persisted为true 表示页面在卸载之后会保存在往返缓存中

因此 第一次触发pageshow事件 persisted 始终为false 第一次触发pagehide事件时persisted属性始终为true（除非页面不符合使用往返缓存的条件）

注册了onunload事件处理程序（即使是空函数）的页面会自动排除在往返缓存之外

*/