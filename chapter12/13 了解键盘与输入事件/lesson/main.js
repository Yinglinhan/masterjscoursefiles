
// 所有按键和输入事件 都要绑定在可获取焦点的元素上
// 才有可能被触发
// 触发的重要前提是该元素 是当前的焦点元素


// 键盘按键的事件
/* 
keydown 任何按键 按下按键  不抬起来会持续触发
keypress 字符类按键 （包括回车键） 按按键  （DOM3被废弃 目前主流浏览器还能用）
keyup  任何按键 抬起按键

keydown -> keypress -> keyup

事件对象中的重要属性
keyCode  charCode   key按键上具体字符  code按键名称


ctrlKey altKey  shiftKey  metaKey （mac 苹果键  win win键）

*/

// 按键事件的目标 是获取我们按下了哪个键 不需要获取输入的内容

// 比如做游戏键盘控制一般 都通过 事件流机制 委托到body上 进行触发


// 输入事件

// 是可获得焦点的元素 必须可编辑元素 要获得焦点
// <input>, <select>, 或 <textarea> contentEditable="true"

/* 

input   事件对象类型InputEvent
任何会改变编辑框内内容的输入都会触发
（输入法待定状态也会触发）
退格键触发
单独按功能键不触发

textInput   事件对象类型 TextEvent
只有按下按键后获取到的是输入内容才会触发
退格键不触发
输入法状态下不触发
单独按功能键不触发


beforeinput  事件对象类型 InputEvent
特点和input类似

输入事件 每次有的内容输入都会触发

event.data 通过这个data属性来获取当前输入的字符
input.value 获取所有已输入的数据（当前）
*/

// change 事件
/* 

内容数据发生概念的前提下
输入时不会触发 按回车 或者失去焦点的情况下 才会触发
input 在type是text类型时 value改变才会触发
checkBox checked值改变 会触发


对 contentEditable="true" 属性元素不起作用

*/

/* 
e.preventDefault()
keydown、keypress、textInput
三种事件处理里调用event.preventDefault()
会阻止住内容输入到输入框里。
*/



const  input = document.querySelector('input')

input.addEventListener('input',(e)=>{

    e.preventDefault()
    console.log(e.data)
})



