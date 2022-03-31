/* 

父元素 和子元素 都要绑定点击事件 的处理函数

1. 如何能让父元素的事件处理函数在点击子元素之后先触发
2. 点击到子元素时  父元素的点击事件处理函数不会触发

*/

const parent = document.querySelector('.parent')
const son = document.querySelector('.son')

parent.addEventListener('click',()=>{
  console.log('parent 触发')
})


son.addEventListener('click',(e)=>{
  console.log('son 触发')
  e.stopPropagation()
})