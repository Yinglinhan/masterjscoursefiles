

const scrollNum = document.querySelector('#scroll-num')

const translateEle = document.querySelector('.scroll-target')
const translateNum = document.querySelector('#translate-num')
const initTranslateNum = document.querySelector('#init-num')
const boxScrollY = document.querySelector('#scoll-box-num')
const translateYchange = document.querySelector('#translate-change')

const moveText = document.querySelector('.moving-text')

const refer = document.querySelector('.refer')

const transform = getComputedStyle(translateEle).transform
// console.log(transform)
const matrix = new DOMMatrixReadOnly(transform)
const baseTranslateY = matrix.m42
// console.log(matrix)
// m41 是X   m42 是Y
// console.log(matrix.m42)

// 设置元素内 初始translateY 的数据
initTranslateNum.innerText = baseTranslateY

const translateY = baseTranslateY + scrollY

// 设置元素内 当前translateY 的初始数据
translateNum.innerText = translateY

// // 设置元素内 改变值translateY 的初始数据
translateYchange.innerText = baseTranslateY - translateY


let preScrollY = 0 

let deltaXmove = 2
let textMoveTransX = 0
let timeId = 0
// setInterval(()=>{
//   textMoveTransX += deltaXmove
//   moveText.style.transform =`translateX(-${textMoveTransX}px)`
// },20)

// requestAnimationFrame(fn)

// let frameTimeId = 0
// function textMoving(){
//     textMoveTransX += deltaXmove
//     moveText.style.transform =`translateX(-${textMoveTransX}px)`

//     frameTimeId = requestAnimationFrame(textMoving)
// }

// requestAnimationFrame(textMoving)

//cancelAnimationFrame(frameTimeId)





window.addEventListener('scroll',(e)=>{
  // console.log(111)
  // 设置页面左上角页面滚动数据
  scrollNum.innerText = scrollY
  // 设置元素内页面滚动数据
  boxScrollY.innerText = scrollY
  
  // clearTimeout(timeId)
  // timeId = setTimeout(()=>{
  //   deltaXmove = 2
  // },100)

  // console.log(scrollY - preScrollY)
  // deltaXmove = scrollY - preScrollY
  // preScrollY = scrollY


  // if(scrollY >= 300 && scrollY < 400){

  //     const deltaY = scrollY - 300
  //     console.log(1 - deltaY/200)
  //     const opacity  = 1 - deltaY/200
  //     translateEle.style.opacity = opacity
  //     // 1 - 0.5                  0 - 0.5
  //     // 0 - 100   0 - 100 / 200  0 - 0.5
  // }else if(scrollY <300){
  //   translateEle.style.opacity = 1 
  // }else{
  //   translateEle.style.opacity = 0.5
  // }

  // 这个区间内向左移动200px 
  // 1 - 1.5 scale()
  if(scrollY >= 300 && scrollY < 400){
    // 100px 的滚动距离内 移动 200px
    const deltaY = scrollY - 300
    // const tranlateX = deltaY * 2

    const scaleRatio = (deltaY/200 + 1).toFixed(2)
    refer.style.transform = `scale(${scaleRatio})`
    // 1 - 1.5    0 - 0.5  * 200  0 - 100 

    // 0 - 100


    // 0 - 200
    // 0 - 100 * 2
    // refer.style.transform = `translateX(-${tranlateX}px)`
  }

  


  /* 
  元素当前的translateY
    const deltaScrollY = scrollY - preScrollY // deltaY
    eleTranslateY + deltaScrollY
    preScrollY = scrollY
  */



  // const translateY = (baseTranslateY + scrollY).toFixed(2)

  // translateEle.style.transform = `translateY(${translateY}px)`
  // 设置元素内 当前translateY 的数据
  // translateNum.innerText = translateY


  // if(scrollY >= 300){
  //   translateEle.style.transform = `translateY(${baseTranslateY + 300}px)`
  //   translateNum.innerText = baseTranslateY + 300
  // }else{
  //   translateEle.style.transform = `translateY(${translateY}px)`
  //   // 设置元素内 当前translateY 的数据
  //   translateNum.innerText = translateY
      
  // // 设置元素内 改变值translateY 的数据
  // translateYchange.innerText = (translateY -  baseTranslateY).toFixed(2)
  // }

  // if(scrollY >= 500){
  //   const deltaScrollY = scrollY - 500
  //   translateEle.style.transform = `translateY(${baseTranslateY + deltaScrollY}px)`
  //     // 设置元素内 当前translateY 的数据
  //   translateNum.innerText = baseTranslateY + deltaScrollY
  //   translateYchange.innerText = (deltaScrollY).toFixed(2)
  // }

  /* 
  
  setInterval
  */


})