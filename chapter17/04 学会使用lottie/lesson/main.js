// https://assets2.lottiefiles.com/packages/lf20_jE2XBqLqI1.json




const animation = document.querySelector("#lottie")
console.log(animation)

animation.addEventListener('ready',()=>{
  animation.resize()
  animation.pause()
  animation.setDirection(-1)
  animation.setLooping(true)
})

$('h1').on('click',()=>{
  animation.play()
})