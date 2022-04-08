/* 
实现点击变化小竖条的状态
*/

const containerBody = document.querySelector('.container-body')

const allUnits = document.querySelectorAll('.one-unit')

let clickable = true
let clickTimeId = 0

const allUnitsArr = [...allUnits]

function handleClick(e){
  if(!clickable){
    return
  }
  const target = e.currentTarget
  if(!target.classList.contains('add-unit')){
    // 这里对几个竖条的样式做改变
    const allUnitsArr = [...document.querySelectorAll('.one-unit')
  ]
    allUnitsArr.forEach(item => {
      item.classList.remove('selected-unit')
    })
    target.classList.add('selected-unit')
    


  }else{
    // 这里来添加新的竖条
    // 最多添加到6个 
    const rootDiv= document.createElement('div')
    rootDiv.classList.add('one-unit')
    
    // 内部分第一个span元素
    const span = document.createElement('span')
    span.classList.add('currency')
    span.innerText = "CNY"

    // 内部的第二个元素 div
    const div = document.createElement("div")
      // 两个span子元素
    const spanInner1 =  document.createElement('span')
    spanInner1.classList.add('num')
    spanInner1.innerText = "75"

    const spanInner2 =  document.createElement('span')
    spanInner2.classList.add('symbol')
    spanInner2.innerText = "%"

    // 这个是span之间的换行符的效果 有一个距离
    const text = document.createTextNode('')
    text.data = '\n'

    div.appendChild(spanInner1)
    div.appendChild(text)
    div.appendChild(spanInner2)

    rootDiv.appendChild(span)
    rootDiv.appendChild(div)
    
    containerBody.insertBefore(rootDiv,containerBody.lastElementChild)
    
    rootDiv.addEventListener('mousedown', handlMouseDown)
    rootDiv.addEventListener('mouseup', handlMouseUp)
    rootDiv.addEventListener('transitionend',handleTransitionEnd)
    rootDiv.addEventListener('click', handleClick)
    console.log('我点到添加的了')
  }
}


allUnitsArr.forEach(item =>{
 item.addEventListener('click', handleClick)
})


/* 
实现拖拽改变顺序交互动画逻辑
*/
let blockMoving = false
const startedBlockPos = {x: 0, y: 0}
const baseBlockDis = {x: 0, y: 0}

let blockDisX = 0
let blockDisY = 0

let target = null;
let targetIndex = 0
let currentPosIndex = 0
let moveStep = 0


let blockWidth = 0
const gapWidth = 16





function changePos(allUnits,targetIndex,disX,moveWidth){
  // console.log(allUnits,fireDis, targetIndex,disX,moveWidth)

  // const resultBig = fireDis.filter((item)=>{
  //   return item > disX
  // })
  // const resultSmall = fireDis.filter((item)=>{
  //   return item < disX
  // })
  // const areaLeft = resultSmall.pop()
  // const areaRight = resultBig.shift()
  // const mostLeft = fireDis[0]
  // const mostRight = fireDis[fireDis.length - 1]

  moveStep = parseInt(disX / moveWidth )
  currentPosIndex = moveStep + targetIndex
  // console.log(currentPosIndex)
  for(let i = 0; i < allUnits.length;i++){
      
    if(i !== targetIndex){
      allUnits[i].style.transform = `translateX(0px) `
    }
  }
  
  
  if(currentPosIndex > targetIndex ){
    const  needMoveCount = currentPosIndex - targetIndex

    for(let i = 1; i <=  needMoveCount;i++){
      if(targetIndex + i !== (allUnits.length - 1)){
        allUnits[targetIndex + i] ? allUnits[targetIndex + i].style.transform = `translateX(-${moveWidth}px) ` :''
      }
      
    }

  }else if(currentPosIndex < targetIndex){
    
    const needMoveCount =  targetIndex - currentPosIndex
   
    for(let i = 1; i <= needMoveCount;i++){
      
      allUnits[targetIndex - i] ? allUnits[targetIndex - i].style.transform = `translateX(${moveWidth}px) ` : ''
    }

  }else{

  }
  // if(moveStep > )
  // if(areaLeft < 0 || areaLeft === undefined){
  //   moveStep = parseInt((Math.abs(disX) / moveWidth ))


  // }else if(areaRight > 0){
  //   isLeft = false
  // }




}

function handlMouseDown(e){

  if(e.currentTarget.classList.contains('add-unit')){
    return
  }
  
  // 设置click事件可点击与否的变量
  clickTimeId = setTimeout(()=>{
    clickable = false;
  },200)
  



  const all = document.querySelectorAll('.one-unit')
  const allArr = [...all]

  allArr.forEach((item,index)=>{
    if(item === e.currentTarget){
      targetIndex = index
    currentPosIndex= index
    }
  })

  blockMoving  = true
  startedBlockPos.x = e.clientX
  startedBlockPos.y = e.clientY
  target = e.currentTarget
  target.style.transition = 'none'
  target.style.zIndex = 10
  
  blockWidth = target.getBoundingClientRect().width
  // setFireDis(fireDis, targetIndex, document.querySelector('.container-body').childElementCount - 1)
  // 设置用于移动的基本参数
 

}


function handlMouseUp(e){

  if(e.currentTarget.classList.contains('add-unit')){
    return
  }
  clearTimeout(clickTimeId)
  setTimeout(()=>{
    clickable = true
  })

  blockMoving = false
  baseBlockDis.x = 0
  baseBlockDis.y = 0
  startedBlockPos.x = 0
  startedBlockPos.y = 0
  blockDisX = 0
  blockDisY = 0
  // console.log(currentPosIndex)
  // console.log(moveStep,targetIndex)

  // 修改moveStep 处理超出边界的情况

  const allUnits = document.querySelectorAll('.one-unit')
  if(moveStep < (0 - targetIndex)){
    moveStep = -targetIndex
  }else if(moveStep > (allUnits.length - targetIndex - 2)){
    moveStep = allUnits.length - targetIndex - 2
  }

  target.style.transition = "all 0.2s ease-in-out"
  target.style.zIndex = 0

  target.style.transform = `translateX(${moveStep * (blockWidth + gapWidth)}px) `
  
  //还原下这个数值
  moveStep = 0


  /* 
  修改moveStep
  还有transition结束之后的重新顺序
  
  */
}


function handleTransitionEnd(e){
  if(target === e.currentTarget){

    if(currentPosIndex !== targetIndex){
      // console.log(currentPosIndex)
      const all = document.querySelectorAll('.one-unit')

      if(currentPosIndex < 0){
        currentPosIndex = 0
      }else if(currentPosIndex >  all.length - 2){
        currentPosIndex =  all.length - 2
      }

      if(currentPosIndex < targetIndex){
        target.parentNode.insertBefore(target,all[currentPosIndex])
      }else{
        target.parentNode.insertBefore(target,all[currentPosIndex + 1])
      }

      const allArr = [...all]
      allArr.forEach(item => {
        item.style.transition = 'none'
        item.style.transform  = 'translate(0px)'
      })

      setTimeout(()=>{
        allArr.forEach(item => {
          item.style.transition = "all 0.2s ease-in-out"
        })
       
      })
    }

  }
}


allUnitsArr.forEach((item) =>{

  item.addEventListener('mousedown', handlMouseDown)
  item.addEventListener('mouseup', handlMouseUp)
  item.addEventListener('transitionend',handleTransitionEnd)
  
})

document.body.addEventListener('mousemove',(e)=>{

  if(blockMoving){
    blockDisX =  baseBlockDis.x +  e.clientX - startedBlockPos.x
    blockDisY =  baseBlockDis.y + e.clientY - startedBlockPos.y
    target.style.transform = `translate(${blockDisX}px, ${blockDisY}px) `

    // 其他竖条的基本移动距离

    changePos(document.querySelectorAll('.one-unit'),targetIndex,blockDisX,(blockWidth + gapWidth) )

  }



})
























/* 

实现整体拖拽
有问题的实现 只在控制bar那边设定mousemove
需要在body上设置 mousemove

*/


const wallet = document.querySelector('.container')

// console.log(wallet)

const moveBar  = document.querySelector('.moveBar')

let isStarted = false
const startedPos = {x: 0, y: 0}
const baseDis = {x: 0, y: 0}

let disX = 0
let disY = 0


moveBar.addEventListener('mousedown',(e)=>{
  // console.log(e)
  isStarted = true
  startedPos.x = e.clientX
  startedPos.y = e.clientY
  console.log(startedPos)
})

moveBar.addEventListener('mouseup',(e)=>{
  // console.log(e)
  isStarted = false
  baseDis.x = disX
  baseDis.y = disY
})


document.body.addEventListener('mousemove',(e)=>{
  // console.log(e)
    if(isStarted){
    console.log(e.clientX - startedPos.x,e.clientY - startedPos.y)

    disX = baseDis.x +  e.clientX - startedPos.x
    disY = baseDis.y + e.clientY - startedPos.y
    wallet.style.transform = `translate(${disX}px, ${disY}px) `
  }
})


