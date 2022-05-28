const layer = document.querySelector('.cover-layer')

const imgs = document.querySelectorAll('img')

const imgCloneInfo = {}

const imgArr = [...imgs]


imgArr.forEach(img =>{
  img.addEventListener('click', (e) =>{
    layer.style.backgroundColor = `rgba(0,0,0,0.5)`

    const posInfo = e.currentTarget.getBoundingClientRect()

    imgCloneInfo.top = posInfo.top
    imgCloneInfo.left = posInfo.left
    console.log(posInfo.left, posInfo.top)

    const cloneImg = e.currentTarget.cloneNode(true)

    imgCloneInfo.img = cloneImg

    cloneImg.style.position = 'absolute'
    cloneImg.style.top = posInfo.top + 'px'
    cloneImg.style.left = posInfo.left + 'px'

    const screenWidth = window.innerWidth / 2
    const screenHeight = window.innerHeight / 2
    layer.appendChild(cloneImg)


    layer.style.pointerEvents = 'auto'

    document.body.style.overflow = 'hidden'

    setTimeout(()=>{
      cloneImg.style.width = '640px'
      cloneImg.style.top = screenHeight - 200 + 'px'
      cloneImg.style.left = screenWidth - 320 + 'px'
    },1)
  })
})


layer.addEventListener('click',(e)=>{
  if(e.target.classList.contains('cover-layer')){
    e.target.style.backgroundColor = `rgba(0,0,0,0)`
    imgCloneInfo.img.style.width = '200px'
    imgCloneInfo.img.style.top = imgCloneInfo.top + 'px'
    imgCloneInfo.img.style.left = imgCloneInfo.left + 'px'
    layer.style.pointerEvents = 'none'

    setTimeout(()=>{
      imgCloneInfo.img.remove()
      document.body.style.overflow = 'auto'
    },350)
  }
})

// 障眼法