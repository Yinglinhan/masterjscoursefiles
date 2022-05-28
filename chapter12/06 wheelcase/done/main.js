

let timeId = 0
let partIndex = 0
let deltaYCount = 0

const allPartsArr = [...document.querySelectorAll('.content')]

const dotsArr = [...document.querySelectorAll('.dot')]

window.addEventListener('wheel',(e)=>{

  deltaYCount += e.deltaY

  clearTimeout(timeId)
  timeId = setTimeout(()=>{
    // console.log(deltaYCount)
    if(!(deltaYCount < -1000 || deltaYCount > 1000)){
      return
    }
    if(deltaYCount > 0){
      // 滚轮向上 页面向下滚动 下翻
      if(partIndex < allPartsArr.length - 1){
        partIndex++
        allPartsArr.forEach(item =>{
          item.classList.remove('show-layer')
        })
        allPartsArr[partIndex].classList.add('show-layer')
        allPartsArr[partIndex].classList.remove('away-layer')
      }

    }else{
      // 滚轮向下 页面向上滚动 上翻
      if(partIndex > 0){
        allPartsArr[partIndex].classList.add('show-layer')
        allPartsArr[partIndex].classList.add('away-layer')
        partIndex--
        allPartsArr[partIndex].classList.add('second-layer')
      }
  
    }
    dotsArr.forEach((item,index)=>{
      if(index === partIndex){
        item.classList.add('big-dot')
      }else{
        item.classList.remove('big-dot')
      }
    })
    deltaYCount = 0
  },300)
})





// setTimeout(()=>{
//   console.log(partIndex)
// },3000)