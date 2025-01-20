

// 第一个 cloudy

const sunIcon = document.querySelector('.icon-cloudy-sun')
const cloudyIconBigCloud = document.querySelector('.icon-cloudy-big-cloud')
const cloudyIconSmallCloud = document.querySelector('.icon-cloudy-small-cloud')

let cloudyIconBigLock = false
let cloudyIconSmallLock = false

const iconBox = document.querySelector('.icon-box-cloudy')
iconBox.addEventListener('mouseenter', () => {

  cloudyIconBigLock = false
  cloudyIconSmallLock = false

  // 太阳旋转
  sunIcon.classList.add('sun-rotate')

  // 两朵云的慢慢移动的效果
  cloudyIconBigCloud.classList.add('icon-cloudy-big-cloud-ani')
  cloudyIconSmallCloud.classList.add('icon-cloudy-small-cloud-ani')
})

iconBox.addEventListener('mouseleave', () => {

  // 两个云的动画锁
  cloudyIconBigLock = true
  cloudyIconSmallLock = true
})

sunIcon.addEventListener('transitionend', (e) => {
  // 把太阳的样式还原
  e.currentTarget.style.transition = 'none'
  e.currentTarget.classList.remove('sun-rotate')
  setTimeout(() => {
    e.target.style.transition = `transform 1.65s ease-in-out`
  })
})

cloudyIconBigCloud.addEventListener('animationiteration', (e) => {

  if (cloudyIconBigLock) {
    // 如果条件符合 删除让大云动起来的类动画
    e.currentTarget.classList.remove('icon-cloudy-big-cloud-ani')

  }
})
cloudyIconSmallCloud.addEventListener('animationiteration', (e) => {
  if (cloudyIconSmallLock) {
    // 如果条件符合 删除让小云动起来的类动画
    e.currentTarget.classList.remove('icon-cloudy-small-cloud-ani')

  }
})



// 第二个 sunny

const sunnySmallIcon = document.querySelector('.smaller ')
const sunnyBigIcon = document.querySelector('.bigger ')

const iconSunnyBox = document.querySelector('.icon-box-sunny')

let smallLock = false
let bigLock = false


iconSunnyBox.addEventListener('mouseenter', (e) => {
  // console.log(e.currentTarget)
  if (!smallLock && !bigLock) {
    bigLock = true
    smallLock = true
    sunnySmallIcon.classList.add('fly-out')
    sunnyBigIcon.classList.add('fly-in')
  }
})


sunnyBigIcon.addEventListener('transitionend', (e) => {
  // 变化结束后 让元素还原默认状态
  bigLock = false
  e.currentTarget.style.transition = 'none'
  e.currentTarget.classList.remove('fly-in')
  const target = e.currentTarget
  setTimeout(() => {
    target.style.transition = 'transform 1.5s ease-in-out'
  })
})

sunnySmallIcon.addEventListener('transitionend', (e) => {
  // 变化结束后 让元素还原默认状态
  smallLock = false
  e.currentTarget.style.transition = 'none'
  e.currentTarget.classList.remove('fly-out')
  // 这里注意
  const target = e.currentTarget
  setTimeout(() => {
    target.style.transition = 'transform 1.5s ease-in-out'
  })
})


// 第三个 rainy

const rainIconBox = document.querySelector('.rainy-icon')
const rainCloud = document.querySelector('.icon-rainy-cloud')

const fakeRainyCloud = document.querySelector('.fake-rainy-cloud')
const fakeRainyRain = document.querySelector('.fake-rainy-rain')
const rainDotsArr = [...document.querySelectorAll('.rain')]

let rainyLock = false


rainIconBox.addEventListener('mouseenter', (e) => {
  if (rainyLock) {
    // 如果锁是true 直接返回 后面代码就不会执行了
    return
  }
  // 把锁设定为true 这样可以防止重复执行
  rainyLock = true

  // 下雨的效果
  rainDotsArr.forEach((item, index) => {
    if (index > 4) {
      // 这里获取到的包括假雨点 所以要把假雨点排除不做处理
      return
    }
    if (index === 1 || index === 3 || index === 4) {
      item.style.transitionDelay = index * 0.05 + 's'
      item.classList.add('raining')
    } else {
      if (index === 0) {
        item.style.transitionDelay = '0.2s'
      } else {
        item.style.transitionDelay = '0.3s'
      }
      item.classList.add('raining')
    }
  })

  rainCloud.classList.add('away-cloud')
  // 另一片云和雨移动进来
  fakeRainyCloud.classList.add('fake-in-cloud')
  fakeRainyRain.classList.add('fake-in-rain')
})

fakeRainyCloud.addEventListener('transitionend', (e) => {

  // 还原默认状态
  rainyLock = false
  fakeRainyCloud.style.transition = 'none'
  fakeRainyRain.style.transition = 'none'
  fakeRainyCloud.classList.remove('fake-in-cloud')
  fakeRainyRain.classList.remove('fake-in-rain')

  rainCloud.style.transition = 'none'
  rainCloud.classList.remove('away-cloud')


  rainDotsArr.forEach((item, index) => {
    if (index > 4) {
      // 假雨点不做处理
      return
    }
    item.style.transition = 'none'
    item.classList.remove('raining')
  })

  setTimeout(() => {
    fakeRainyCloud.style.transition = 'transform 1s 1.2s ease-in-out'
    fakeRainyRain.style.transition = 'transform 1s 1.2s ease-in-out'
    rainCloud.style.transition = 'transform 1s 0.8s ease-in-out'
    rainDotsArr.forEach((item, index) => {
      if (index > 4) {
        // 假雨点不做处理
        return
      }
      item.style.transition = 'transform 0.6s ease-in-out'

    })
  })


})

// 观察器实现在视窗后才出现的效果

function cb(entries) {
  console.log(2222)
  entries.forEach(item => {
    if (item.isIntersecting) {

      if (item.target.className.includes('title')) {
        item.target.classList.remove('static-icon-init')
      } else if (item.target.className.includes('part4')) {
        item.target.classList.remove('part4-init')
      } else {
        const children = [...item.target.children]
        children.forEach((child, index) => {
          if (child.className.includes('pic')) {
            // 静态图标元素
            child.style.transitionDelay = index * 0.1 + 's'
            child.classList.remove('static-icon-init')
          } else {
            // 有动画的那三个图标
            child.style.transitionDelay = index * 0.2 + 's'
            child.classList.remove('ani-icon-init')
          }


        })
      }

    }
  })
}

const options = {
  rootMargin: '20px',
  threshold: 0.75
}

const observer = new IntersectionObserver(cb, options)

const aniIconsPart = document.querySelector('.part2')

observer.observe(aniIconsPart)


// 动态生成剩余所有静态图标

// 先把原先在html中写的那第一排图标添加到观察器实例中
const part3IconsBox = document.querySelector('.icons-box')
observer.observe(part3IconsBox.firstElementChild)

// 观察图标部分的标题
const iconsTitle = document.querySelector('.icons-title')
observer.observe(iconsTitle)


let lineDiv = null

// 批量创建图标元素
for (let i = 6; i < 26; i++) {

  if (i % 5 === 1) {
    lineDiv = document.createElement('div')
    lineDiv.classList.add('icons-line')
    part3IconsBox.appendChild(lineDiv)
    observer.observe(lineDiv)
  }

  const div = document.createElement('div')
  div.classList.add('pic-icon', 'static-icon-init')

  div.style.backgroundImage = `url('src/icons/Icon${i}.png')`
  lineDiv.appendChild(div)
}

// 最后一部分的简单效果 
const part4 = document.querySelector('.part4')
observer.observe(part4)

const titleSun = document.querySelector('.title-sun')

const transform = getComputedStyle(titleSun).transform
const basicTransformData = new DOMMatrixReadOnly(transform)
console.log(basicTransformData, basicTransformData.m42)

// 这是scrollY的最大值
const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight
window.addEventListener('scroll', (e) => {
  // 到文档滚动最大距离还剩300的时候 进行相应的太阳横向滚动交互
  if (scrollY > maxScrollHeight - 300) {
    const deltaY = scrollY - (maxScrollHeight - 300)
    console.log(deltaY * 0.4)
    // transform:translate(-3rem,-5rem);
    // 30 - 120  0 - 90 
    // 0 - 300   0 - 90
    titleSun.style.transform = `translate(${basicTransformData.m41 + deltaY * 0.4}px, ${basicTransformData.m42}px)`

  }

})