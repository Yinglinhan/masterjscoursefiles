// DOM 浏览器相关的事件 BOM 

// 用户界面事件 UIEvent
/* 

load

unload

error

select

resize

scroll 

*/

// 焦点事件

/* 
1. focusout   在失去焦点的元素上触发
2. focusin   在获得焦点的元素上触发
3. blur   在失去焦点的元素上触发
4. focus    在获得焦点的元素上触发

*/

// 鼠标和滚轮事件

/* 

click  单击左边鼠标键（快速按下又抬起） 或者 回车键时触发

dbclick 双击事件

mousedown 任意鼠标键按下即触发

mouseenter 鼠标光标进入元素内部时触发 不冒泡 不会在光标经过后代元素时触发

mouseleave 鼠标光标移动到元素外部时触发 不冒泡 不会在光标经过后代元素时触发

mousemove 鼠标光标在元素范围内移动时反复触发

mouseout 鼠标光标从一个元素移动到另一个元素上时触发，移到的元素可以是原始元素的外部元素，也可以是原始元素的子元素 

mouseover  鼠标光标从元素外部移动到元素内部时触发

mouseup   抬起鼠标按键时触发

mousewheel事件

*/
// 键盘与输入事件
/* 
keydown 用户按下键盘上某个按键时触发 持续按住 持续触发

textInput  原来是keypress （目前主流浏览器应该都还能用）    DOM3废弃    按下键盘某个键并产生字符时触发 

keyup 用户释放键盘上某个键时触发

所有元素都支持这些事件，但是一般文本框输入时最常用这些事件

textInput 这个事件是对keypress事件的扩展 用于在文本显示给用户之前更方便地截获文本输入

*/

// 合成事件 输入法

/* 
compositionstart  在IME的文本合成系统打开时触发 表示输入即将开始

compositionupdate  在新字符插入输入字段时触发

compositionend 在IME的文本合成系统关闭时触发 表示恢复正常键盘输入
*/

// HTML5加入的一些事件
/* 
- contextmenu事件
- beforeunload 事件
- DOMContentLoaded 事件
- readystatechange 事件
- pageshow 和 pagehide事件
- haschange 事件
*/

// 移动设备的事件
/* 
- orientationchange 事件
- deviceorientation 事件
- devicemotion 事件
*/
// 触摸及手势事件

/* 
- 触摸事件
    
    touchstart 手指放到屏幕上时触发 （即使有一个手指已经放在屏幕上）
    
    touchmove 手指在屏幕上滑动时连续触发 在这个事件中调用preventDefault（）可以阻止滚动
    
    touchend 手指从屏幕上移开时触发
    
    touchcancel 系统停止跟踪触摸时触发，文档中并未明确什么情况下停止跟踪
    
- 手势事件

    手势事件 会在两个手指触碰屏幕且相对距离或旋转角度变化时触发

    gesturestart 一个手指已经放在屏幕上 再把另一个手指放到屏幕上触发

    gesturechange 任何一个手指在屏幕上的位置发生变化时触发

    gestrueend 其中一个手指离开屏幕时触发

*/
// 过渡及动画事件
/* 
transitioncancel

transitionend

transitionrun

transitionstart

Element.animate() Animation
CSS Animation

1. animationcancel
2. animationend
3. animationiteration
4. animationstart

*/

//  事件如何使用  查文档
//  事件对象 的属性 通过 事件对象类型的文档来找


// document.body.addEventListener('click', function(e) {
//   console.log(e)
// })

// DOM 0 Element.onclick  handle 手柄 控制器 操作器
// door handle
// GlobalEventHandlers 句柄 行为和要执行函数之间的媒介
// WindowEventHandlers
