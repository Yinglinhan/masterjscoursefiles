// window.addEventListener('xxxx', function(e){
//   console.log(e)
// })

// const eventR = new Event('xxxx')


// window.dispatchEvent(eventR)


const box = document.querySelector('.box')
// console.log(box)

box.addEventListener('click', function(e){  
  console.log(e)
})

const cEvent = new PointerEvent('click')

setInterval(()=>{
  box.dispatchEvent(cEvent)
},1000)