import { cursorInit } from './components/cursorEffect.js'
import WorkList from './components/workList.js'
import pageInit from './components/pageInit.js'


// pageInit()



const worksData = [
  {
    title: 'Recongroup',
    subTitle: 'Corporate Design / Webdesign & Development',
    imgUrl: './src/imgs/recon.jpg'
  },
  {
    title: 'Glassland',
    subTitle: 'Webdesign & Development',
    imgUrl: './src/imgs/glassland-screen-2.gif'
  },
  {
    title: 'PEFC',
    subTitle: 'Graphic Design / Animations / SM',
    imgUrl: './src/imgs/pefc-sujet.jpg'
  },
  {
    title: 'Biosphere Lab Lungau',
    subTitle: 'Corporate Design / Webdesign & Development / Social Media / Newsletter',
    imgUrl: './src/imgs/biosphere-lab-box.jpg'
  },
  {
    title: 'ZIID',
    subTitle: 'Corporate Design / Webdesign / Graphic Design / Newsletter ',
    imgUrl: './src/imgs/ziid-flyer-2.jpg'
  },
  {
    title: 'Hotel Gambswirt',
    subTitle: 'Webdesign / Social Media / Photography',
    imgUrl: './src/imgs/gambswirt-screen-2.jpg'
  },
  {
    title: 'More works',
    subTitle: 'More works & photography',
    imgUrl: './src/imgs/HBM-3.jpg'
  },
]




cursorInit()

WorkList.init(worksData)


// console.log(gsap)

gsap.set('.circle-img', {
  opacity: 0,
  scale: 0,
  xPercent: -50,
  yPercent: -50,
})

const workElement = $('.one-work')


workElement.hover(function (e) {
  // console.log(e)

  const circle = this.querySelector('.circle-img')


  gsap.to(circle, {
    x: e.offsetX,
    y: e.offsetY,
    scale: 1,
    opacity: 1,
    duration: 0.2
  })


}, function () {
  const circle = this.querySelector('.circle-img')

  gsap.to(circle, {

    scale: 0,
    opacity: 0,
    duration: 0.2
  })
  console.log('out')
})

workElement.mousemove(function (e) {
  const circle = this.querySelector('.circle-img')
  gsap.to(circle, {
    x: e.offsetX,
    y: e.offsetY,

  })

})





// 底部文字小图标点击修改

$('.footer-info-right').click(function () {
  // console.log(11)
  $(this).toggleClass('ticked')
})


// 切换主题
$('.info-header-nav-badge-switch').click(function (e) {
  console.log(e.target)
  if (!e.target.classList.contains('fakeCheckBox')) {
    $('body').toggleClass('fugu')
  }

})



//pc click

const title = document.querySelector('.info-header-text-detail')

const clickEvent = (function () {
  if ('ontouchstart' in document.documentElement === true)
    return 'touchstart';
  else
    return 'click';
})();


console.log(clickEvent)


// ontouchstart
if ('ontouchstart' in document.documentElement === true) {
  title.addEventListener('touchstart', () => {
    console.log('touchstart')
  })
} else {
  title.addEventListener('click', () => {
    console.log('click')
  })

}






