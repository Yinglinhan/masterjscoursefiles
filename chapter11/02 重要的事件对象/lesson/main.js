// 事件对象

const body = document.querySelector("body")
// console.log(h1)

body.addEventListener('click', (e) => {
  console.log("我是body")
})

const h1 = document.querySelector('.en')
h1.addEventListener('click', (e) => {

  console.log("我是h1")

})

/* 

const eventObj = new PointerEvent(xxx)
fn(eventObj)

*/
// event.preventDefault()  阻止元素的默认行为
// event.stopPropagation()

// event.target 指向你点击的那个元素

// pageX pageY  文档坐标 以文档的左上角为原点
// screenX screenY 屏幕坐标 屏幕左上角为坐标原点
// clientX clientY 浏览器内容显示区域坐标 页面显示区域左上角为坐标原点

// 练习
// 用事件对象替换this 实现对元素的访问 改造上节课的两个题目