// 事件目标 我们的行为 事件真正作用的那个元素节点
// 事件目标一定是行为作用到的最深层的那个元素节点

// 浏览器是能在我们行为之后判断出我们的事件目标是哪个元素节点
// 也知道 我们对元素 进行的是什么操作
// 事件流 只要相应行为 或者事件发生了 就会产生 
// 如果任何一层都没有注册相应事件处理函数 那么啥都不会发生

// 目标元素的层级结构上的父级元素们 都会收到相应的事件触发信号

// html -> body -> h1(事件目标) click
// 触发  ->>   触发  ->>   触发
// 触发  <<-   触发     <<-

// addEventListener 第三个参数 默认是false 不在捕获阶段执行
// 默认在冒泡阶段执行

//DOM0事件处理程序注册在事件流的冒泡阶段 
// element.onclick = function(){}
// document.body.addEventListener('click',function(e){console.log('body',e.currentTarget)})

// const h1 = document.querySelector('.en')
// h1.addEventListener('click',
//   function(e){console.log('h1 sssss',e.stopPropagation())},
//   true)

// event.eventPhase 事件流阶段 1-> 捕获阶段  2->目标阶段 3->冒泡阶段

// event.cuerrentTargt 触发的事件处理函数所绑定的元素

// event.target 事件目标
// 捕获和冒泡都是针对事件目标的父级元素的

// 事件冒泡是可以取消的 event.stopPropagation()

// 添加到捕获阶段 父级元素 比内部元素早接收到事件信号
// 冒泡阶段 父级元素 比 内部元素晚接收到事件信号
// 不是所有事件都会冒泡  不冒泡的事件 只会到目标阶段就停止了
// 父子层级结构 非视觉层面  而是物理层面

const parent = document.querySelector('.parent')
// const son = document.querySelector('.son')

parent.addEventListener('click',()=>console.log('parent'))

/* 

父元素 和子元素 都要绑定点击事件 的处理函数

1. 如何能让父元素的事件处理函数在点击子元素之后先触发
2. 点击到子元素时  父元素的点击事件处理函数不会触发

*/