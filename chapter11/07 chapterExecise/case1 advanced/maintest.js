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
    if(currentIndex === 0){
      console.log('左边 第一个')
      moveBar.style.transition = 'none'
      moveBar.style.transform = `translate(-${linesArr.length * 755}px)`
      
      setTimeout(()=>{
        moveBar.style.transition = 'transform 0.5s ease-in-out'
        moveBar.style.transform = `translate(-${(linesArr.length - 1) * 755}px)`
      },0)
      currentIndex = 4
    }else{
      currentIndex--
      moveBar.style.transform = `translate(-${currentIndex * 755}px)`
    }


   
    
  }else{
    // 点击的就是右箭头
    // if(currentIndex !== 4){
    //   currentIndex++
    // }

    if(currentIndex === 0){
      moveBar.style.transition = 'transform 0.5s ease-in-out'
    }
    
    currentIndex++
    
    moveBar.style.transform = `translate(-${currentIndex * 755}px)`
  }
  console.log(currentIndex)

  // moveBar.style.transform = `translate(-${currentIndex * 755}px)`
  // console.log(currentIndex)


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

  

  // if(currentIndex === 4){
  //   rightArrow.classList.add('arrow-unclick')
  // }else{
  //   rightArrow.classList.remove('arrow-unclick')
  // }

  // if(currentIndex === 0){
  //   leftArrow.classList.add('arrow-unclick')
  // }else{
  //   leftArrow.classList.remove('arrow-unclick')
  // }




}

console.log(leftArrow)

leftArrow.addEventListener('click',arrowHandle)
rightArrow.addEventListener('click',arrowHandle)

moveBar.addEventListener('transitionend',function(e){
  if(currentIndex === 5){
    e.target.style.transition = 'none'
    e.target.style.transform = 'translate(0px)'
    currentIndex = 0
  }
})

