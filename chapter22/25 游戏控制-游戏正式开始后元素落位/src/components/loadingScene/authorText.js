import { Text, Container } from '../../libs/pixijs.js'


export default class AuthorText {
  constructor() {

    this.element = null

    this.init()

  }

  init() {
    // 创建一个Text实例，文字内容是Simple Game develop & design by Hellocode，字体是Retro Gaming
    const authorText = new Text('Simple Game develop & design by ', {
      fontFamily: 'Retro Gaming',
      fontSize: 22,
      fill: 0x3c3c3c,
      letterSpacing: 2,
      align: 'center',
      // alpha: 0.5
    })

    const helloCodeText = new Text('Hellocode', {
      fontFamily: 'Retro Gaming',
      fontSize: 22,
      fill: 0x3c3c3c,
      letterSpacing: 2,
      align: 'center',

    })
    // 创建一个容器
    const titleBox = new Container()
    titleBox.addChild(authorText, helloCodeText)


    // 让两个文字刚好从视觉上连在一起
    helloCodeText.x = authorText.width

    this.element = titleBox

    //设置元素可以被交互
    titleBox.eventMode = 'static'

    let intervalId = null

    titleBox.addEventListener('mouseenter', () => {
      const colors = [0xff0000, 0xff7f00, 0xffff00, 0x00ff00, 0x0000ff, 0x4b0082, 0x9400d3]
      let i = 0
      intervalId = setInterval(() => {
        helloCodeText.style.fill = colors[i]
        i = (i + 1) % colors.length
      }, 200)
    })

    titleBox.addEventListener('mouseleave', () => {
      clearInterval(intervalId)
      helloCodeText.style.fill = 0x3c3c3c
    })


    helloCodeText.eventMode = 'static'
    // 点击后在新页面打开链接
    helloCodeText.addEventListener('click', () => {

      // window.open('https://hellocode.fun')
      window.location.href = 'https://hellocode.fun'
    })

    helloCodeText.addEventListener('mouseenter', () => {

      //改变鼠标样式
      document.body.style.cursor = 'pointer'
    })

    helloCodeText.addEventListener('mouseleave', () => {
      //恢复鼠标样式
      document.body.style.cursor = 'default'
    })

    // this.element.y = 500




  }
}
