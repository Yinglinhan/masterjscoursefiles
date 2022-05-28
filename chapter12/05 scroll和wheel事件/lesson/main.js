
// wheel 只要在元素上 滚动了中键就会触发
// 内容有没有滚动都会触发

/* 
事件对象 值的正负和滚动方向有关
deltaX  横向
deltaY  竖向

中键往上滚 （手指往上搓） 正数 deltaY
中键往下滚  (手指往下搓)  负数 deltaY

*/

// window.addEventListener('wheel',(e)=>{
//   console.log(e)
// })


// scroll   只要在元素上  内容被滚动了才会触发
// 事件对象 没有什么重要的信息
// window.addEventListener('scroll',(e)=>{
//   console.log(e)
// })

// 整个文档的滚动 一般是绑在 window对象中（documet也是可以）
// 绑在某个元素上
// scroll 一定要绑在 作为视窗（窗口 显示区域）的那个父元素上

// const box = document.querySelector('#box')
// box.addEventListener('wheel',(e)=>{
//   console.log(e)
// })

/* 

Document 

Element

scroll  wheel

*/

/* 
-----------------
*/

// 属性

/* 
window

window.scrollY 只读 竖向滚动距离
window.scrollX 只读  横向滚动距离


Element
Element.scrollTop   可读又可写 
Element.scrollLeft   可读又可写
通过视窗元素 父元素 访问到 滚动到了多少的位置（距离）
通过父元素 （视窗元素）设置 scrollTop 可以使元素内容滚动距离 直接跳到相应的滚动距离
通过html元素 设置 scrollTop 可以使整体文档 直接跳到相应的滚动距离
如果访问的是html元素的scrollTop 返回的其实就是 window.scrollY


Element.scrollHeight  只读 滚动内容的整体高度
Element.scrollWidth  只读  滚动的内容的整体宽度

访问视口窗口元素 （父元素上）这两个属性 获取内容整体的高度和宽度

document.documentElement.scrollHeight 整个文档的内容高度
document.documentElement.scrollWidth 整个文档的内容宽度
*/

// window.addEventListener('scroll',(e)=>{
//   console.log(window.scrollY)
// })
// const box = document.querySelector('#box')
// box.addEventListener('scroll',(e)=>{
//   console.log(e.currentTarget.scrollTop)
// })

// box.addEventListener('click',function(e){
//  document.documentElement.scrollTop = 0 
// })

// 方法


/* 
Window  整体文档滚动 在window上调用

scroll  滚动到多少

scrollTo  滚动到多少

scrollBy 每次滚动多少




Element 父元素（视窗元素） 上调用
scroll 滚动到多少

scrollTo 滚动到多少

scrollBy 每次滚动多少

scrollIntoView 让某个元素滚动到视窗里 
*/


const box = document.querySelector('#box')
const h3 = document.querySelector('h3')
h3.addEventListener('click',(e)=>{
  box.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
})