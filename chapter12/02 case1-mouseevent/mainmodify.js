

const allUnits = document.querySelectorAll(".one-unit")
const allUnitsArr = [...allUnits]

let clickable = true
let clickTimeId = 0

/* 
实现点击变化小竖条的状态
*/
function handleClick(e) {
  if (!clickable) {
    return
  }
  const target = e.currentTarget
  if (!target.classList.contains("add-unit")) {
    // 这里对几个竖条的样式做改变
    const allUnitsArr = [...document.querySelectorAll(".one-unit")]
    allUnitsArr.forEach((item) => {
      item.classList.remove("selected-unit")
    })
    target.classList.add("selected-unit")
  } else {
    // 这里来添加新的竖条
    const rootDiv = document.createElement("div")
    rootDiv.classList.add("one-unit")

    // 内部分第一个span元素
    const span = document.createElement("span")
    span.classList.add("currency")
    span.innerText = "CNY"

    // 内部的第二个元素 div
    const div = document.createElement("div")
    // 两个span子元素
    const spanInner1 = document.createElement("span")
    spanInner1.classList.add("num")
    spanInner1.innerText = "75"

    const spanInner2 = document.createElement("span")
    spanInner2.classList.add("symbol")
    spanInner2.innerText = "%"

    // 这个是span之间的换行符的效果 有一个距离
    const text = document.createTextNode("")
    text.data = "\n"

    div.appendChild(spanInner1)
    div.appendChild(text)
    div.appendChild(spanInner2)

    rootDiv.appendChild(span)
    rootDiv.appendChild(div)

    e.currentTarget.parentNode.insertBefore(rootDiv, e.currentTarget.parentNode.lastElementChild)

    // 给添加的新的竖条添加事件
    rootDiv.addEventListener("mousedown", handlMouseDown)
    rootDiv.addEventListener("mouseup", handlMouseUp)
    rootDiv.addEventListener("transitionend", handleTransitionEnd)
    rootDiv.addEventListener("click", handleClick)
    console.log("我点到添加的了")
  }
}

allUnitsArr.forEach((item) => {
  item.addEventListener("click", handleClick)
})

/* 
实现拖拽改变顺序交互动画逻辑的相关变量
*/
// 竖条是否可被拖拽
let blockMoving = false
// 鼠标按下时的位置坐标
const startedBlockPos = { x: 0, y: 0 }

// 移动了多少距离 
let blockDisX = 0
let blockDisY = 0

// 当前正在移动的竖条的引用
let target = null
// 当前移动的竖条的索引值
let targetIndex = 0
// 当前竖条移动到的位置的索引位
let currentPosIndex = 0
// 当前竖条移动了几个索引位（负的是往左 正的是往右）
let moveStep = 0


// 一根竖条的宽度 不写死 点击获取
let blockWidth = 0

// 竖条之间的间隔大小 这里是写死了 其实也可以动态获取
const gapWidth = 16

function changePos(allUnits, targetIndex, disX, moveWidth) {

  // 通过已经移动的横向距离和移动一个身位的宽度的比值来确定移动到了哪个位置
  moveStep = parseInt(disX / moveWidth)

  currentPosIndex = moveStep + targetIndex


  // 把非拖拽元素的translateX 都改为 0
  for (let i = 0; i < allUnits.length; i++) {
    if (i !== targetIndex) {
      allUnits[i].style.transform = `translateX(0px) `
    }
  }

  // 判断哪些元素需要被设置translateX ，不管哪个向左还是向右移动 移动的距离都是一个 moveWidth的宽度 但是有正负之分
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

function handlMouseDown(e) {
  if (e.currentTarget.classList.contains("add-unit")) {
    return
  }

  // 设置click事件可点击与否的变量
  clickTimeId = setTimeout(() => {
    clickable = false
  }, 200)

  const all = document.querySelectorAll(".one-unit")
  const allArr = [...all]

  // 设置鼠标点下之后的竖条的索引位  然后这个元素当前的一个所在位置的索引位
  allArr.forEach((item, index) => {
    if (item === e.currentTarget) {
      targetIndex = index
      currentPosIndex = index
    }
  })

  // 让竖条可拖动 在body的mousemove中其中的代码能执行
  blockMoving = true
  
  // 设置点击的鼠标坐标点
  startedBlockPos.x = e.clientX
  startedBlockPos.y = e.clientY

  // 设置被拖动的这个竖条
  target = e.currentTarget
  target.style.transition = "none"
  target.style.zIndex = 10

  // 获取到竖条的宽度
  blockWidth = target.getBoundingClientRect().width

}

function handlMouseUp(e) {
  if (e.currentTarget.classList.contains("add-unit")) {
    return
  }


  //用来实现拖拽不会点击
  clearTimeout(clickTimeId)
  setTimeout(() => {
    clickable = true
  })

  // 让竖条可移动的变量 还原成false 这样 就不会执行拖拽部分的代码
  blockMoving = false
 


  // 修改moveStep 处理超出边界的情况

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

  //还原到初始0
  moveStep = 0

}


// transition结束之后的重新顺序
function handleTransitionEnd(e) {
  if (target === e.currentTarget) {
    if (currentPosIndex !== targetIndex) {

      const all = document.querySelectorAll(".one-unit")


      // 控制currentPosIndex数字 让它是一个正确的最后放置的索引位
      if (currentPosIndex < 0) {
        currentPosIndex = 0
      } else if (currentPosIndex > all.length - 2) {
        currentPosIndex = all.length - 2
      }

      // 改变被拖拽元素的 DOM 中结构的位置
      if (currentPosIndex < targetIndex) {
        target.parentNode.insertBefore(target, all[currentPosIndex])
      } else {
        target.parentNode.insertBefore(target, all[currentPosIndex + 1])
      }


      // 让所有元素都还原成0的translate 同时变化时为了没有过渡效果 把transition设置为none
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


// 给初始的竖条添加事件相关的事件处理函数
allUnitsArr.forEach((item) => {
  item.addEventListener("mousedown", handlMouseDown)
  item.addEventListener("mouseup", handlMouseUp)
  item.addEventListener("transitionend", handleTransitionEnd)
})


document.body.addEventListener("mousemove", (e) => {
  if (blockMoving) {
    
    // 被拖拽竖条的移动
    blockDisX =  e.clientX - startedBlockPos.x
    blockDisY =  e.clientY - startedBlockPos.y
    target.style.transform = `translate(${blockDisX}px, ${blockDisY}px) `

    // 其他竖条的基本移动距离
    changePos(
      document.querySelectorAll(".one-unit"),
      targetIndex,
      blockDisX,
      blockWidth + gapWidth
    )
  }
})






/* 

实现整体拖拽
有问题的实现 只在控制bar那边设定mousemove
需要在body上设置 mousemove

*/

const wallet = document.querySelector(".container")

// console.log(wallet)

const moveBar = document.querySelector(".moveBar")

let isStarted = false
const startedPos = { x: 0, y: 0 }
const baseDis = { x: 0, y: 0 }

let disX = 0
let disY = 0

moveBar.addEventListener("mousedown", (e) => {

  isStarted = true
  startedPos.x = e.clientX
  startedPos.y = e.clientY
  console.log(startedPos)
})

moveBar.addEventListener("mouseup", (e) => {

  isStarted = false
  baseDis.x = disX
  baseDis.y = disY
})

document.body.addEventListener("mousemove", (e) => {

  if (isStarted) {


    disX = baseDis.x + e.clientX - startedPos.x
    disY = baseDis.y + e.clientY - startedPos.y
    wallet.style.transform = `translate(${disX}px, ${disY}px) `
  }
})
