// 事件  event

// setTimeout setInterval 
// 事件循环机制   eventLoop 
// 事件 -> 函数 等待执行的函数 方法

// DOM中的事件 -> 行为 行为背后对应着某个（某些）待执行函数 


// 给元素的某个行为（属性）添加上对应的 函数 （绑定）
// 等到用户对该元素实施 该行为
// 浏览器会检测到 在元素上 该行为发生了 ，会马上触发该行为绑定的函数
// 函数执行 那么 会产生 相应的交互或者动画的效果

// 1. 最基本的写法 直接在html文档里面写  
// onclick 事件属性纯小写 都是on开头

/* 
2. DOM0   每个事件 只能添加一个函数
  let btn = document.getElementById("myBtn")
  btn.onclick = function(){ console.log("Clicked") }
*/
// const h1 = document.querySelector(".en")
// console.log(h1)
h1.onclick = function(){
  this.style.color='red'
}

h1.onclick = null
/* 
3 DOM2 事件处理程序 事件处理函数 -> 给给元素某个事件绑定的函数的一种称呼
  addEventListener  可以添加无数个
  先添加 先执行
*/


/* 
  事件处理函数 中的this 非箭头函数中 是指向绑定元素本身
  可以通过this 来访问元素
  如果你需要在事件处理函数中使用this  就用function关键字的函数
*/
const h1 = document.querySelector(".en")
const fn = function(){
  console.log('6666')
}
function abc(){

}

h1.addEventListener('click',abc)

h1.removeEventListener('click',abc)


// 鼠标点击 浏览器是如何判断的呢


// 四个圆 统一是黑色 然后 能把这个元素改变成元素上设置的某个颜色值
// data-color this dataset 修改背景色

// 每次点击某个元素的文字  变为 你是被我第几个点到的

/* 
  <span>aa</span>
  <span>cc</span>
  <span>bb</span>
*/