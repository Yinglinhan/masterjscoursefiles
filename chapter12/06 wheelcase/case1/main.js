const box = document.querySelector('.content-box')
const dotsArr = [...document.querySelectorAll('.dot')]


let currentIndex = 0

let timeId = 0
let deltaTotal = 0
// console.log(box.childElementCount)
window.addEventListener('wheel', (e)=>{


  deltaTotal+= e.deltaY
  clearTimeout(timeId)

  if(deltaTotal > 1000 || deltaTotal < -1000){
    timeId = setTimeout(()=>{
      // console.log(currentIndex)
  
      if(e.deltaY > 0){
        if(!(currentIndex === box.childElementCount - 1)){
          currentIndex++;
        }
        
      }else{
        if(currentIndex !== 0){
          currentIndex--
        }
      }

      box.style.transform = `translateY(-${currentIndex * 100}vh)`
      deltaTotal = 0
      dotsArr.forEach((item,index) =>{
        if(index === currentIndex){
          item.classList.add('big-dot')
        }else{
          item.classList.remove('big-dot')
        }
      })
    },50)
  }
  

  
})