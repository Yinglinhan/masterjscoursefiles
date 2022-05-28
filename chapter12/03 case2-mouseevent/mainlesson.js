
const navBar = document.querySelector('.nav-bar')
// console.log(navBar)

const imgsArr = [...document.querySelectorAll('.img-box')]

const bgWhite = document.querySelector('.title-bg')

const titlesArr = [...document.querySelectorAll('.title')]

const baseX = 20
const baseY = 10

navBar.addEventListener('click',(e)=>{
  if(e.target.classList.contains('title')){

    titlesArr.forEach(item =>{
      item.classList.remove('title-selected')
    })
    e.target.classList.add('title-selected')

    bgWhite.style.transform = `translate(${e.target.offsetLeft + baseX}px,${baseY}px)`

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