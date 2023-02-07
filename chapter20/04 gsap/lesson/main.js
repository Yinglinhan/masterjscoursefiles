console.log(gsap)
// Tween  补间动画（缓动动画）
// Timeline 时间线动画

/*

gsap.to

gsap.from

gsap.fromTo

gsap.set


*/
const tl = gsap.timeline()

tl.to(
  '.yellow', {
  x: 300,
  duration: 3,
  ease:'none'
}
)

tl.to(
  '.yellow', {
  x: 600,
  duration: 3,
  ease:'none'
}
)
tl.to(
  '.yellow', {
  x: 600,
  y: 300,
  duration: 3,
  ease:'none'
}
)

