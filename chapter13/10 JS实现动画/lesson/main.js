// Animation
/* 
Animation 实例常用的属性和方法
play 方法
pause 方法
playState 属性

*/



// Element.animate() 返回一个Animation 类型的实例



// css keyframe 帧动画 

const h1 = document.querySelector('h1')
const h1Ani = h1.animate([
  {
    transform: 'translateX(0px)'
  },
  {
    transform: 'translateX(300px)'
  },
],3000)

h1Ani.pause()

h1.addEventListener('click', () => {
  if(h1Ani.playState === 'paused'){
    h1Ani.play()
  }else{
    h1Ani.pause()
  }
})

