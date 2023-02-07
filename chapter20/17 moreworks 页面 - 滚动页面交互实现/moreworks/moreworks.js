gsap.registerPlugin(ScrollTrigger)

const sections = gsap.utils.toArray('.block')

let allWidth = 0

sections.forEach(item => {
  allWidth += item.getBoundingClientRect().width
})


gsap.to('.scroll-content', {
  x: - allWidth + document.querySelector('.scroll-content').offsetWidth,
  // offsetWidth clientWidth
  ease: 'none',

  scrollTrigger: {
    trigger: '.scroll-content',
    pin: true,
    scrub: 1,
    end: () => '+=' + (allWidth - document.querySelector('.scroll-content').offsetWidth),
    onLeave: () => {
      document.body.classList.add('black')
    },
  }
})



gsap.to('.font-graphy', {
  x: -200,
  ease: 'none',
  scrollTrigger: {
    trigger: '.scroll-content',
    scrub: 1,
    start: document.querySelector('.project-cards-block').getBoundingClientRect().width - innerWidth + 800,
    end: '+=' + innerWidth
  }
})