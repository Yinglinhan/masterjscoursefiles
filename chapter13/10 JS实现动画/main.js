const circle  = document.querySelector('.circle')

const circleAni = circle.animate(
  [
    {
      transform: 'translateX(800px)'
    }
  ],
  10000
)
// setTimeout(()=>{
//   // circleAni.updatePlaybackRate(10)
//   circleAni.playbackRate = 10
// },2000)

// circleAni.playbackRate = 10
circleAni.pause()
circle.addEventListener('mousedown', ()=>{
  // console.log(circleAni.playState)
  if(circleAni.playState === 'paused'){
    circleAni.play()
  }else{
    circleAni.pause()
  }
  
  // console.log(circleAni.playState)
})