/* 

- touchstart：手指触摸，手指在元素上按下
- touchmove：手指移动，手指在元素上按下后，在屏幕任意位置移动
- touchend：手指抬起，手指在元素按下后，在屏幕任意位置抬起
- touchcancel : 触摸中断触发


mousedown：鼠标按下       touchstart：手指触摸

mousemove：鼠标移动       touchmove：手指移动

mouseup：鼠标抬起          touchend：手指抬起


touch事件只能在移动端使用；在pc端页面（不会触发）

mouse事件在移动端也会触发 以及 click  会有300ms的延迟



touch事件的touchstart只能在元素内触发，touchmove和touchend可以在屏幕任意位置触发；

touch事件只有在touchstart触发后，才能触发touchmove和touchend事件；

mouse事件都只能在元素内触发；

但mouse事件的mousemove只要在元素内没有鼠标按下也能触发
*/

const box = document.querySelector('.box')
// box.addEventListener('mousedown',()=>{
//   console.log('mousedown')
// })

// box.addEventListener('touchstart',(e)=>{
//   console.log('touchstart',e)
// })
// box.addEventListener('touchmove',(e)=>{
//   console.log('touchmove',e)
// })
// box.addEventListener('touchend',(e)=>{
//   console.log('touchend',e)
// })

/* 
Touch 触摸点一个类型 然后每个实例 都代表一个接触点
identifier 触摸点的唯一标识


changedTouches 和上一次触发相比 有数据发生改变的触摸点的集合（一定是targetTouches中的实例）

targetTouches  一开始接触时在目标元素上的触摸点

touches 整个屏幕上所有的接触点

一根手指的情况下
在 touchstart事件对象中 changedTouches 和 targetTouches是一样的
在 touchmove事件对象中  changedTouches 和 targetTouches是一样的
在touchend事件对象中  touches和targetTouches 没有touch实例 changedTouches有touch实例
*/


// document.body.addEventListener('touchstart',(e)=>{
//   // console.log('touchstart',e)
//   e.preventDefault()

// },{passive:false})

/* 
passive:true  表示不会调用 e.preventDefault()
passive:false  表示会调用 e.preventDefault()

*/

/* 
touch-action


gesturestart

gestureend

gesturechange

*/