const moveBar = document.querySelector('.img-box-move')

const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')

const lines = document.querySelectorAll('.line')

const linesArr = [...lines]

let currentIndex = 0

function arrowClick(e){

  const isLeft = e.currentTarget.classList.contains('left-arrow')

  if(isLeft){
    // 点击的是左边的箭头
    if(currentIndex === 0){

      moveBar.style.transition = 'none'
      currentIndex = 5
      moveBar.style.transform = `translateX(-${currentIndex * 755}px)`
      currentIndex--
      setTimeout(()=>{
        moveBar.style.transition = 'transform 0.5s ease-in-out'
        moveBar.style.transform = `translateX(-${currentIndex * 755}px)`
      },0)
    }else{
      currentIndex--
      moveBar.style.transform = `translateX(-${currentIndex * 755}px)`
    }
    
  }else{
    // 点击的是右边的箭头

    if(currentIndex === 0){
      moveBar.style.transition = 'transform 0.5s ease-in-out'
    }
    currentIndex++
    moveBar.style.transform = `translateX(-${currentIndex * 755}px)`
  
  }
  
 

  // 处理底部的标识横线
  linesArr.forEach((item,index)=>{
    if(index === currentIndex){
      item.classList.add('line-index')
    }else{
      item.classList.remove('line-index')
    }
  })

  if(currentIndex === linesArr.length){
    linesArr[0].classList.add('line-index')
  }

}

// 处理右箭头到头后 最后一张图的快速切换
moveBar.addEventListener('transitionend',function(e){

  if(currentIndex === 5){
    // console.log(e.target.style.transition)
    e.target.style.transition = 'none'
    e.target.style.transform = `translateX(0px)`
    currentIndex = 0
    console.log(currentIndex)
  }

})

rightArrow.addEventListener('click',arrowClick)
leftArrow.addEventListener('click',arrowClick)