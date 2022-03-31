


// const son = document.querySelector('.son')
// parent.addEventListener('click',(e)=>{

//   console.log(e)
// })


// e.currentTarget 哪个元素上的事件处理函数触发了 该函数中的事件对象的currentTarget属性 指向的就是该元素 

//  e.currentTarget  this 指向的是同一个元素
// e.target 目标元素  操作哪个就是哪个




// 点击之后变成绿色

// 最笨的一种
// const sons = document.querySelectorAll('.son')
// console.log(sons)
// sons[0].addEventListener('click',function(e){
//   e.target.style.backgroundColor="green"
// })
// sons[1].addEventListener('click',function(e){
//   e.target.style.backgroundColor="green"
// })
// sons[2].addEventListener('click',function(e){
//   e.target.style.backgroundColor="green"
// })
// sons[3].addEventListener('click',function(e){
//   e.target.style.backgroundColor="green"
// })


// 稍微笨一点
// const sons = document.querySelectorAll('.son')
// function changeColor(e){
//   e.target.style.backgroundColor="green"
// }

// sons[0].addEventListener('click',changeColor)
// sons[1].addEventListener('click',changeColor)
// sons[2].addEventListener('click',changeColor)
// sons[3].addEventListener('click',changeColor)


// 聪明的办法

const parent = document.querySelector('.parent')
parent.addEventListener('click',(e)=>{
  // console.log(e.target)
  console.log(e.target.dataset.role)
  const color = e.target.dataset.color
  e.target.style.backgroundColor = color
})

// e.target 非常关键 
// 事件委托 就是只在父元素上设置相关事件的事件处理函数 通过
//  e.target 属性来确定 真正操作的元素  然后在其事件处理函数中通过相应逻辑来处
//  事件委托 是利用了 事件流的机制
//  实现事件委托时，父元素的事件处理函数设置在冒泡阶段和捕获阶段皆可，一般设置在冒泡阶段

// 练习
// 点击的元素元素data-color设置的颜色 其他元素变回蓝色