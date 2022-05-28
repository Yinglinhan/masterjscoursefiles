
/* 
要点 
1 背景颜色 不能直接用透明度 而要用有透明度的颜色
2 让点击无效的css属性 pointerEvents
3 让页面无法滚动
4 实现图片从原本位置移动到中间展开的效果（障眼法 其实是复制了一个图片节点 放到了展示层中）
5 图片比例尺寸 移动距离 如何居中显示
*/

const imgs = document.querySelectorAll("img")
const imgsArr = [...imgs]
const overLayer = document.querySelector(".overlay-show")

let isShow = false
let cloneImg = null
let cloneImgBasicInfo = {}


imgsArr.forEach((item)=>{
  item.addEventListener("click", (e) => {

    isShow = true
    const imgPos = e.currentTarget.getBoundingClientRect()
  
    cloneImg = e.currentTarget.cloneNode(true)
    overLayer.appendChild(cloneImg)
  
    cloneImgBasicInfo.top = imgPos.top
    cloneImgBasicInfo.left = imgPos.left
  
    cloneImg.style.position = "absolute"
    cloneImg.style.top = imgPos.top + "px"
    cloneImg.style.left = imgPos.left + "px"
    const moveLeft = innerWidth / 2 - 320
    const moveTop = innerHeight / 2 - 200
  
    setTimeout(() => {
      cloneImg.style.width = "640px"
      cloneImg.style.top = moveTop + "px"
      cloneImg.style.left = moveLeft + "px"
    }, 1)
  
    overLayer.style.backgroundColor = `rgba(0, 0, 0, .5)`
    overLayer.style.pointerEvents = "auto"
    document.body.style.overflow = 'hidden'
  
  })
})






overLayer.addEventListener("click", (e) => {

  if (e.target.classList.contains("overlay-show")) {
    cloneImg.style.width = "200px"
    cloneImg.style.top = cloneImgBasicInfo.top + "px"
    cloneImg.style.left = cloneImgBasicInfo.left + "px"
    overLayer.style.backgroundColor = `rgba(0, 0, 0, 0)`
    overLayer.style.pointerEvents = "none"

    cloneImg.addEventListener("transitionend", (e) => {

      if (isShow) {
        cloneImg.remove()
        cloneImg = null
        isShow = false
        document.body.style.overflow = 'auto'
      } 
    })
  }
})
