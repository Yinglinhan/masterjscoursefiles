const parent = document.querySelector('.parent');

parent.addEventListener('click',function(e) {
  // const color = e.target.dataset.color
  e.target.classList.add('movego')

})

// document.body.onmousemove = function(e){
//   console.log(e.clientX, e.clientY)
// }

// 交互的动画 过渡效果 如何产生 如何实现
/* 
1.通过连续快速的改变某个元素的和样式属性 一般是 style属性

2.通过CSS transition  设置不同的样式 两个或者多个状态（style 和 css）

3.通过CSS animation 添加动画相应的class来实现

4.通过Animation这个类型（JS Element.animate() 这个方法）

*/

/* 
1. 连续交互 连续变化 就用修改style属性

2. 一个状态到另一个状态的变化  transition 最适合两个状态之间变化
  animation可实现更多状态之间的变化

3. AE  lottie 都是直接做好 然后导入来实现

*/

// 需要获取的信息
/* 
1. 事件的信息 鼠标的坐标 等等 通过事件对象来获取到
2. 元素的信息 元素当前的一些信息 style
  window.getComputeStyle 获取到元素当前的最终呈现出来的样式的数据
  Element.getBoundingClientRect()  left, top, right, bottom, x, y, 
  width height 包括到边框 
  
  window.innerWidth innerHeight 浏览器内容显示区域   outerHeight  outerWidth
  HTMLElement  offsetTop offsetLeft  offsetHeight  offseWidth 以父元素为参考 长宽包括边框

  Element.clientWidth   clientHeight 不包括边框
  document.documentElement.clientWidth  clientHeight 浏览器显示窗口

*/

//  透明度 尺寸大小 位置 颜色 投影 圆角

console.log(document.querySelector('.son').getBoundingClientRect())

//  transform  top left margin  重排 重绘的问题

//  svg 元素的动画 className
const svg = document.querySelector("svg")
console.log(svg.className) //setAttribute("class",'xx')

// 给svg元素加一个div父级 对这个div进行变化操作
