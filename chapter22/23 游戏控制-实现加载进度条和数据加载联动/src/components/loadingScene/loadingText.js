import { Text } from '../../libs/pixijs.js'

export default class LoadingText {
  constructor() {
    this.element = new Text('loading...', {
      fontFamily: 'RetroGaming',
      fontSize: 20,
      fill: 0xffffff,
      letterSpacing: 2,
    })
    this.init()
  }

  // 每隔500毫秒改变一次loading的文字，依次为loading...、loading、loading.、loading..、loading...
  autoChange() {
    let count = 0
    console.log(99)
    const timer = setInterval(() => {
      if (count === 4) {
        count = 0
      }
      this.element.text = 'loading' + '.'.repeat(count)
      count++
    }, 500)
    return timer
  }

  init() {
    // this.element.anchor.set(0.5)
    this.autoChange()
  }

}