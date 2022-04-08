const titlesArr = [...document.querySelectorAll('.title')]
const navBar = document.querySelector('.nav-bar')
const imgsArr = [...document.querySelectorAll('.img-box')]
// const sunnyTitle = document.querySelector('.sunny-title')

const moveCard = document.querySelector('.title-bg')

const baseX = 20
const baseY = 10

// console.log(sunnyTitle.offsetWidth,sunnyTitle.offsetLeft)
navBar.addEventListener('click',(e)=>{
  console.log(e.target.offsetLeft)
  if(e.target.classList.contains('title')){
    moveCard.style.transform = `translate(${e.target.offsetLeft + baseX}px,${e.target.offsetTop + baseY}px)`
    titlesArr.forEach((item)=>{
      item.classList.remove('title-selected')
    })
    e.target.classList.add('title-selected')

    const weatherName = e.target.className.split(' ')[1].split('-')[0]
    console.log(weatherName)
    imgsArr.forEach((item)=>{
      if(item.className.includes(weatherName)){
        item.classList.add('img-selected')
      }else{
        item.classList.remove('img-selected')
      }
    })
  }
})
// console.log(titles)