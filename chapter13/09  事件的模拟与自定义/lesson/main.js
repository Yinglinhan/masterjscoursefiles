
// document.addEventListener('mousemove',(e)=>{
//   console.log('mousemove',e)
// })

// MouseEvent

// const eventInstance = new MouseEvent('mousemove')

// setTimeout(()=>{
//   document.dispatchEvent(eventInstance)
// },3000)

// 创建一个相应事件对象的类型的实例 传入相应的事件名称 和数据（可以不传）
// 把想要触发该事件的元素 调用这个元素的dispatchEvent 那事件类型实例传进去

/* 

PointerEvent  

TouchEvent

UIEvent

WheelEvent

TransitionEvent

AnimationEvent

FocusEvent

InputEvent

KeyBoardEvent

MouseEvent




*/


// 自定义  CustomEvent

const h1 = document.querySelector('h1')
h1.addEventListener('abc',(e) => {
  console.log('我是自定义')
})

const eventInstance = new CustomEvent('abc')

setTimeout(()=>{
  h1.dispatchEvent(eventInstance)
},2000)