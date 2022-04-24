

const stackLayersArr = [...document.querySelectorAll('.stack-layer')]


// 每一层和下一层之间都是差这个值的translateY
// 我这里就利用这个基础的差值 来计算每个layer的基础值
const deltaBaseY = 50

// 层叠的开始变化的距离
const targetY = 600

const deltaYtotlal = 0

function stackLayerMove(layer,index,targetY) {
  // 每一层的基础translateY的值 就是它的索引值 乘以 基本的差值数
  // deltaBaseY * index 每一个layer的基础translateY的值
  if(scrollY <= (targetY -  deltaBaseY * index )){
    layer.style.transform = `translateY(${deltaBaseY * index + scrollY}px)` 
  }else{
    layer.style.transform = `translateY(${targetY}px)`
  }


}

const textBox = document.querySelector('.text-box')
const movingText = document.querySelector('.moving-text')
// 偷懒让文字内容够长
for(let i = 0; i < 20; i++){
  const newText = movingText.cloneNode(true)
  textBox.appendChild(newText)
}

let textTranslateX = 0
let translateDelta = 2

// 让文字自动移动
let setTimeId = setInterval(()=>{
  textTranslateX+=translateDelta
  textBox.style.transform =`translateX(-${textTranslateX}px)`
},20)


let scrollSpeed = 0
let preScrollY = 0 
let resetTimeId = 0

// 这个方法就是改变文字的移动速度
function settingSpeed(){
  scrollSpeed = window.scrollY - preScrollY
  
  preScrollY = window.scrollY
  console.log( )

  clearTimeout(resetTimeId)
  translateDelta = Math.abs(scrollSpeed) > 2 ? Math.abs(scrollSpeed) : 2
  resetTimeId = setTimeout(()=>{
    translateDelta = 2
  },50)

}

// 文字上的那个变色的贴图
const blueTag = document.querySelector('.blue-tag')
const startColorChangeY = 600
let opacity = 0
// 穿插变化的两个元素
const vertLoop = document.querySelector('.vert-loop')
const horiLoop = document.querySelector('.hori-loop')


// 可以在一定scroll 区间内 实现元素的透明度改变
function changeOpacity(startY,changeSpan,target,reverse){
  if(scrollY  > startY ){
    const deltaY = scrollY - startY
    
    if(deltaY < changeSpan){
      opacity = (1 -  deltaY / changeSpan).toFixed(2)
     
    }else{
      opacity = 0
    }
    
  }else{
    opacity = 1
  }
  if(reverse){
    target.style.opacity = 1 - opacity
  }else{
    target.style.opacity = opacity
  }
  
}

// 可以在一定scroll 区间内 实现元素的移动 X方向或者Y方向都可以
function changeTranslate(startY,changeSpan,targetTrans,direction,targetDOM,baseDis){
  /* 
  startY  开始变化的目标点 
  changeSpan scrollY距离的区间值
  targetTrans 改变到的最终目标值
  direction 方向
  targetDOM 作用的元素
  baseDis 改变到的最终目标值 另一个方向的目标值 或者是基础值
  
  */
  if(scrollY  > startY ){
    const deltaY = scrollY - startY
    
    if(deltaY < changeSpan){
      
      targetDOM.style.transform = `translate${direction}(-${((1- deltaY / changeSpan) * baseDis) }px)`
    }else{

      targetDOM.style.transform = `translate${direction}(${targetTrans}px)`
    }
    
  }else{
    targetDOM.style.transform = `translate${direction}(-${baseDis}px)`
  }

 
}

// 穿插元素的移动函数
function changeLoopTrans(startY,targetDOM){
  console.log(targetDOM)
  if(scrollY > startY){

    const deltaY = scrollY - startY
    
    
    if(deltaY > 120){
      const ratio = (deltaY - 120)/120 > 2.5 ? 2.5 : (deltaY - 120)/120

      targetDOM.style.transform = `translateY(${deltaY * 1.2}px) scale(${ratio + 1})`
    }else{
      targetDOM.style.transform = `translateY(${deltaY * 1.2}px)`
    }
  }

}

const bigTitle = document.querySelector('.big-title')

const textMask =  document.querySelector('.text-mask')

// 通过js来设定遮罩在文字的半透明层的尺寸 因为直接通过样式设置不太好设置得刚好
textMask.style.height = bigTitle.offsetHeight + 110 + 'px'
textMask.style.width = bigTitle.offsetWidth +  'px'


window.addEventListener('scroll',(e)=>{

  stackLayersArr.forEach((item,index)=>{
    stackLayerMove(item,index,targetY)

  })
  settingSpeed()
  
  //改变tag的透明度
  changeOpacity( startColorChangeY,300, blueTag)
  changeOpacity( startColorChangeY,300, horiLoop,true)


  changeTranslate(600,300,0,'Y',vertLoop,160)
  changeTranslate(600,180,0,'X',horiLoop,320)
  changeLoopTrans(900,vertLoop)
  
  // 实现半透明遮罩的移动
  if(scrollY > 1300){
    const deltaY = scrollY - 1300
    textMask.style.transform = `translateY(${deltaY * 1.2}px)`
  }
})





