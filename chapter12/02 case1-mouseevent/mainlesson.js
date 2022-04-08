const blocksArr = [...document.querySelectorAll('.one-unit')]


const blockDownPos = {x: 0, y: 0}
const blockBaiscTrans = {x: 0, y: 0}
let blockDisX = 0, blockDisY = 0
let blockMovable = false

let target = null
let targetIndex = 0
let currentPosIndex = 0
let gapWidth = 16
let blockWidth = 0
let moveStep = 0


let clickable = true
let clickTimeId = 0


function handleBlockDown(e){

  if(!e.currentTarget.classList.contains('add-unit')){
    // 设置click事件可点击与否的变量
    clickTimeId = setTimeout(() => {
      clickable = false
    }, 200)


    // console.log(1)
    blockMovable = true
    blockDownPos.x = e.clientX
    blockDownPos.y = e.clientY
    target = e.currentTarget


    const all = document.querySelectorAll(".one-unit")
    const allArr = [...all]

    allArr.forEach((item, index) => {
      if (item === e.currentTarget) {
        targetIndex = index
        currentPosIndex = index
      }
    })


    target.style.transition = "none"
    target.style.zIndex = 10

    blockWidth = target.getBoundingClientRect().width
  }
}

function handleBlockUp(e){

  if(!e.currentTarget.classList.contains("add-unit")){
    clearTimeout(clickTimeId)
    setTimeout(() => {
      clickable = true
    })
    // clickable = true
    blockMovable = false


    const allUnits = document.querySelectorAll(".one-unit")
    if (moveStep < 0 - targetIndex) {
      moveStep = -targetIndex
    } else if (moveStep > allUnits.length - targetIndex - 2) {
      moveStep = allUnits.length - targetIndex - 2
    }

    target.style.transition = "all 0.2s ease-in-out"
    target.style.zIndex = 0

    target.style.transform = `translateX(${
      moveStep * (blockWidth + gapWidth)
    }px) `
  }
  moveStep = 0
}

function changePos(allUnits, disX, moveWidth){
  moveStep = parseInt(disX / moveWidth)

  currentPosIndex = moveStep + targetIndex

  console.log(moveStep)


  for (let i = 0; i < allUnits.length; i++) {
    if (i !== targetIndex) {
      allUnits[i].style.transform = `translateX(0px) `
    }
  }

  if (currentPosIndex > targetIndex) {
    const needMoveCount = currentPosIndex - targetIndex

    for (let i = 1; i <= needMoveCount; i++) {
      if (targetIndex + i !== allUnits.length - 1) {
        allUnits[targetIndex + i]
          ? (allUnits[
              targetIndex + i
            ].style.transform = `translateX(-${moveWidth}px) `)
          : ""
      }
    }
    
  } else if (currentPosIndex < targetIndex) {
    const needMoveCount = targetIndex - currentPosIndex

    for (let i = 1; i <= needMoveCount; i++) {
      allUnits[targetIndex - i]
        ? (allUnits[
            targetIndex - i
          ].style.transform = `translateX(${moveWidth}px) `)
        : ""
    }
  }






}

function handleBlockMove(e){
  // console.log(target)
  if(blockMovable){
    // console.log(2222)
    blockDisX = blockBaiscTrans.x + e.clientX - blockDownPos.x
    blockDisY = blockBaiscTrans.y + e.clientY- blockDownPos.y
    target.style.transform = `translate(${blockDisX}px,${blockDisY}px)`
    changePos(
      [...document.querySelectorAll('.one-unit')],
      blockDisX, 
      gapWidth + blockWidth)
  }
}

function handleTransitionEnd(e){
  if (target === e.currentTarget) {
    if (currentPosIndex !== targetIndex) {

      const all = document.querySelectorAll(".one-unit")


      // 控制currentPosIndex数字 让它是一个正确的最后放置的索引位
      if (currentPosIndex < 0) {
        currentPosIndex = 0
      } else if (currentPosIndex > all.length - 2) {
        currentPosIndex = all.length - 2
      }

      if (currentPosIndex < targetIndex) {
        target.parentNode.insertBefore(target, all[currentPosIndex])
      } else {
        target.parentNode.insertBefore(target, all[currentPosIndex + 1])
      }

      const allArr = [...all]
      allArr.forEach((item) => {
        item.style.transition = "none"
        item.style.transform = "translate(0px)"
      })

      // 恢复默认有过渡的属性
      setTimeout(() => {
        allArr.forEach((item) => {
          item.style.transition = "all 0.2s ease-in-out"
        })
      })
    }
  }
}

blocksArr.forEach(item =>{
  item.addEventListener('mousedown',handleBlockDown)
  item.addEventListener('mouseup',handleBlockUp)
  item.addEventListener('transitionend',handleTransitionEnd)
})


document.body.addEventListener('mousemove', handleBlockMove)






/* 

1. mousedown
2. mouseup
3. click
4. dbclick


*/





















/* 

-----------------------
*/





// e.currentTarget

function handleClick(e){
  if(!clickable){
    return
  }


  if(e.currentTarget.classList.contains('add-unit')){
 
    const rootDiv = document.createElement('div')
    rootDiv.classList.add('one-unit')

    const span = document.createElement('span')
    span.classList.add('currency')
    span.innerHTML = "CNY"

    const div = document.createElement('div')
    const spanInner1 = document.createElement('span')
    spanInner1.classList.add('num')
    spanInner1.innerText = "76"

    const text = document.createTextNode(`\n`)

    const spanInner2 = document.createElement('span')
    spanInner2.classList.add('symbol')
    spanInner2.innerText = "%"

    div.appendChild(spanInner1)
    div.appendChild(text)
    div.appendChild(spanInner2)

    rootDiv.appendChild(span)
    rootDiv.appendChild(div)

    rootDiv.addEventListener('click',handleClick)
    rootDiv.addEventListener("mousedown", handleBlockDown)
    rootDiv.addEventListener("mouseup", handleBlockUp)
    rootDiv.addEventListener("transitionend", handleTransitionEnd)


    //insertBefore
    e.currentTarget.parentNode.insertBefore(rootDiv, e.currentTarget)
    

    
  }else{
    [...document.querySelectorAll('.one-unit')].forEach((item)=>{
      item.classList.remove('selected-unit') 
    })
    e.currentTarget.classList.add('selected-unit')
  }
  // console.log(e.currentTarget.className.includes('add-unit'))
  
}

blocksArr.forEach((item)=>{
  // console.log(item)
  item.addEventListener('click',handleClick)
})


// mousedown  mouseup  mousemove
// clientX clientY

// tranform  tranlate 0,0 

const moveBar = document.querySelector('.moveBar')
const mouseDownPos = {x: 0, y: 0}
const mouseBaiscTrans = {x: 0, y: 0}
let disX = 0, disY = 0
let movable = false


moveBar.addEventListener('mousedown',(e)=>{
  // console.log(e.clientX ,e.clientY,'down')
  mouseDownPos.x = e.clientX
  mouseDownPos.y = e.clientY
  movable = true
  console.log(mouseDownPos)
})

moveBar.addEventListener('mouseup',(e)=>{
  // console.log(e,'up')
  movable = false
  mouseBaiscTrans.x = disX
  mouseBaiscTrans.y = disY
})


const wallet = document.querySelector('.container')

document.body.addEventListener('mousemove',(e)=>{
  // console.log(e,'moving')
  // console.log(e.clientX ,e.clientY,'up')

  if(movable){
    // console.log(e.clientX - mouseDownPos.x, e.clientY- mouseDownPos.y)
    disX = mouseBaiscTrans.x + e.clientX - mouseDownPos.x
    disY = mouseBaiscTrans.y + e.clientY- mouseDownPos.y
    wallet.style.transform = `translate(${disX}px,${disY}px)`
  }

})




