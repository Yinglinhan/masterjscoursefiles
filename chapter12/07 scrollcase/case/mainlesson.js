
const stackLayersArr = [...document.querySelectorAll('.stack-layer')]
// console.log(stackLayers)

const layerDelataY = 50

// 滚动到600  scrollY的值为600的情况下 所有layer都叠在一起
const targetY = 600

window.addEventListener('scroll', (e) => {
  console.log(window.scrollY)
  stackLayersArr.forEach((item,index)=>{
  //  if(scrollY >= targetY){
  //   item.style.transform = `translateY(${targetY}px)`
  //  }else if(scrollY < (targetY - index * layerDelataY)){
  //   item.style.transform = `translateY(${index * layerDelataY + scrollY}px)`
  //  }


    if(scrollY <= (targetY -  layerDelataY * index )){
      item.style.transform = `translateY(${layerDelataY * index + scrollY}px)` 
    }else{
      item.style.transform = `translateY(${targetY}px)`
    }

    
  })
})  