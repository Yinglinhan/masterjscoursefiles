
/* 
mouseenter  mouseleave

只要在元素范围内 都不会再触发
只有真正离开元素才会触发mouseleave

1 不冒泡 
2 不会在光标经过后代元素时触发


mouseover  mouseout
经过子元素都会触发

鼠标经过在父元素内容的子元素 也会触发mouseout
然后mouseover会冒泡 导致父元素的mouseover也触发


relatedTarget 相关的元素/目标

进入元素的事件 的事件对象中的 relatedTarget ->  从哪个元素过来

离开元素的的事件  事件对象中的 relatedTarget ->  到哪个元素去 

*/

const parent = document.querySelector('.parent')
const son = document.querySelector('.son')

// parent.addEventListener('mouseenter',(e)=>{
//   console.log('mouseenter')
// })


// parent.addEventListener('mouseleave',(e)=>{
//   console.log('mouseeleave')
// })

parent.addEventListener('mouseover',(e)=>{
  console.log('mouseover parent',e)
})


parent.addEventListener('mouseout',(e)=>{
  console.log('mouseeout',e)
})