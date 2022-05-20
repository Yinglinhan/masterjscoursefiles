
/* 

这个写法并不是用img图片元素
而是用div的背景图片的方式
但是思路是一样的

*/


const imgs = document.querySelectorAll(".icon-div")
const showLayer = document.querySelector(".show-layer")

const basicImgInfo = {}

function handleClick(e) {
  console.log(e.currentTarget.className)
  showLayer.style.backgroundColor = `rgba(0,0,0,0.5)`

  const imgPosInfo = e.currentTarget.getBoundingClientRect()
  console.log(imgPosInfo.top,imgPosInfo.left)
  const cloneImg = e.currentTarget.cloneNode(true)
  basicImgInfo.img = cloneImg
  basicImgInfo.top = imgPosInfo.top
  basicImgInfo.left = imgPosInfo.left

  cloneImg.style.position = "absolute"
  cloneImg.style.left = imgPosInfo.left + "px"
  cloneImg.style.top = imgPosInfo.top + "px"
  showLayer.appendChild(cloneImg)

  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  
  setTimeout(() => {
    cloneImg.style.top = (screenHeight - 600 )/2 + 'px'
    cloneImg.style.left = (screenWidth - 600 )/2 + 'px'
    cloneImg.style.height = "600px"
    cloneImg.style.width = "600px"
  }, 10)
  
  showLayer.style.pointerEvents = "auto"
  document.body.style.overflow = 'hidden'
}
imgs.forEach((item, index) => {
  item.addEventListener("click", handleClick)
})




showLayer.addEventListener('click',(e)=>{
  if(e.target.classList.contains('show-layer') ){
    basicImgInfo.img.style.top = basicImgInfo.top + 'px'
    basicImgInfo.img.style.left = basicImgInfo.left +'px'
    basicImgInfo.img.style.height = "200px"
    basicImgInfo.img.style.width = "200px"

    showLayer.style.pointerEvents = "none"
    document.body.style.overflow = 'auto'
    showLayer.style.backgroundColor = `rgba(0,0,0,0)`
    setTimeout(()=>{
      basicImgInfo.img.remove()
    },350)
  }
})
