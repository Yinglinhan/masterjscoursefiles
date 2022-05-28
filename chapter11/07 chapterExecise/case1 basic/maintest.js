const moveBar = document.querySelector('.img-box-move')


const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

const lines = document.querySelectorAll('.line')
const linesArr = [...lines]
// console.log(linesArr)


let currentIndex = 0


function arrowHandle(e){
  // console.log(e.currentTarget)
  const isLeft = e.currentTarget.classList.contains('left-arrow')
  if(isLeft){
    // 点击是左箭头
    if(currentIndex !== 0){
      currentIndex--
    }
    
  }else{
    // 点击的就是右箭头
    if(currentIndex !== 4){
      currentIndex++
    }

  }

  moveBar.style.transform = `translate(-${currentIndex * 755}px)`
  console.log(currentIndex)

  linesArr.forEach((item,index)=>{
    if(index === currentIndex){
      item.classList.add('line-index')
    }else{
      item.classList.remove('line-index')
    }
  })

  if(currentIndex === 4){
    rightArrow.classList.add('arrow-unclick')
  }else{
    rightArrow.classList.remove('arrow-unclick')
  }

  if(currentIndex === 0){
    leftArrow.classList.add('arrow-unclick')
  }else{
    leftArrow.classList.remove('arrow-unclick')
  }




}

console.log(leftArrow)

leftArrow.addEventListener('click',arrowHandle)
rightArrow.addEventListener('click',arrowHandle)

