const box = document.querySelector('.content-box')
const dotsArr = [...document.querySelectorAll('.dot')]
const content = document.querySelector('.content')


let currentIndex = 0
let timeId = 0
let deltaTotal = 0
// console.log(box.childElementCount)
console.log(content.clientWidth)
window.addEventListener('wheel', (e)=>{


  deltaTotal+= e.deltaY
  // console.log(deltaTotal)
  if(deltaTotal < 0 ){
    deltaTotal = 0
  }else if(deltaTotal > content.clientWidth * 3){
    deltaTotal = content.clientWidth * 3
  }

  dotsArr.forEach((item,index)=>{
    const nowIndex = parseInt(deltaTotal / content.clientWidth)
    if(index === nowIndex){
      item.classList.add('big-dot')
    }else{
      item.classList.remove('big-dot')
    }
  })



  box.style.transform = `translateX(-${deltaTotal}px)`

  // clearTimeout(timeId)

  // if(deltaTotal > 1000 || deltaTotal < -1000){
  //   timeId = setTimeout(()=>{
  //     // console.log(currentIndex)
  
  //     if(e.deltaY > 0){
  //       if(!(currentIndex === box.childElementCount - 1)){
  //         currentIndex++;
  //       }
        
  //     }else{
  //       if(currentIndex !== 0){
  //         currentIndex--
  //       }
  //     }

  //     box.style.transform = `translateX(-${currentIndex * 100}vw)`
  //     deltaTotal = 0
  //     dotsArr.forEach((item,index) =>{
  //       if(index === currentIndex){
  //         item.classList.add('big-dot')
  //       }else{
  //         item.classList.remove('big-dot')
  //       }
  //     })
  //   },50)
  // }
  

  
})