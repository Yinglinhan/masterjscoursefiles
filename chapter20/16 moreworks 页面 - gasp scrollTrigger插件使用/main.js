// console.log(ScrollTrigger)
gsap.registerPlugin(ScrollTrigger)

const sections = gsap.utils.toArray('.block')
console.log(sections)
let allwidth = 0

sections.forEach(item => {
  allwidth += item.getBoundingClientRect().width
})

console.log(allwidth)


gsap.to('.scrollContent', {
  x: - allwidth + document.querySelector('.scrollContent').offsetWidth,
  ease: 'none',
  scrollTrigger: {
    trigger: '.scrollContent',
    pin: true,
    scrub: 1,
    end: () => "+=" + (allwidth - document.querySelector('.scrollContent').offsetWidth),
    // onLeave: () => {
    //   console.log(11)
    // },
    // onEnterBack: () => {
    //   console.log(222)
    // }
  }
})

const cbTrigger = ScrollTrigger.create({
  trigger: 'body',
  end: ()=> 'bottom ' + `${innerHeight + 200}px`,
  onLeave: () => {
    console.log(1111)
  },
  onEnterBack: () => {
    console.log(1222222)
  }
})