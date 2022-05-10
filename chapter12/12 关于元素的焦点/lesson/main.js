// 焦点是和键盘操作密切相关的一个概念

// 每个页面 只能有一个元素获得焦点  获得焦点的元素是可以改变的

// 页面默认的焦点元素 是body
// document.activeElement -> 永远指向当前的焦点元素


// 改变页面中的焦点元素
/* 

- 使用`鼠标`点击元素；
- 调用元素的 `focus()` 方法；
- 通过 `Tab 键`进行切换。

 无障碍设计的
*/

// 默认能获得焦点的元素
/* 

body , a, area, button, input, object, select, textarea


div p

- 设置了 `tabindex` 属性的元素；
- 设置了 `contenteditable="true"` 属性的元素。
*/


// 获得焦点的事件  失去焦点的事件

/* 

HTMLElement.focus()

HTMLElement.blur()


1. focusout 在失去焦点的元素上触发 会冒泡
2. focusin 在获得焦点的元素上触发  会冒泡

3. blur 在失去焦点的元素上触发 有捕获 不冒泡
4. focus 在获得焦点的元素上触发 有捕获 不冒泡

有元素获得焦点，一般就有元素会失去焦点
这两个事件几乎是同时发生的，但他们的执行顺序有区别，blur事件的监听方法先执行，然后才是focus事件的监听方法。


当鼠标点击某个不能获取焦点的元素  文档的document.activeElement 会变成body
*/

const  input = document.querySelector('input')

// console.log(input)

// input.addEventListener('blur',(e)=>{
//   console.log(e)
// })

input.addEventListener('focus',(e)=>{
  console.log('获得了焦点啦')
})

input.addEventListener('blur',(e)=>{
  console.log('失去了焦点啦')
})


