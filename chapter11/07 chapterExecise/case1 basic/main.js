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
    currentIndex--
    if(currentIndex === -1){
      currentIndex = 0
    }



  }else{
    // 点击的是右边的箭头
    currentIndex++
    if(currentIndex === 5){
      currentIndex = 4
    }


  }
  
  if(currentIndex === 0){

    leftArrow.classList.add('arrow-unclick')

  }else if(currentIndex === 4){ 
    rightArrow.classList.add('arrow-unclick')
  }else{
    leftArrow.classList.remove('arrow-unclick')
    rightArrow.classList.remove('arrow-unclick')
  }


  linesArr.forEach((item,index)=>{
    if(index === currentIndex){
      item.classList.add('line-index')
    }else{
      item.classList.remove('line-index')
    }
  })
  moveBar.style.transform = `translateX(-${currentIndex * 755}px)`
}

rightArrow.addEventListener('click',arrowClick)
leftArrow.addEventListener('click',arrowClick)