
import { Container, Graphics } from "../../libs/pixijs.js"

export default class LoadingBar {
  constructor() {
    this.element = new Container()
    this.num = 24
    this.colors = [0xDC2B01, 0xF37E15, 0xFCD633, 0x63DC15, 0x41A4F5, 0x19227D, 0x663AB8, 0xA123B0]
    this.init()
  }

  barUpdate(progress) {
    // progress是0到100的值，根据progress的值，让this.element中的元素颜色依次改变，从而实现进度条的动画
    for (let i = 0; i < this.num; i++) {

      const bar = this.element.children[i]

      if (i <= progress / 100 * this.num) {
        bar.beginFill(this.colors[i % this.colors.length])

        // 0 % 8 =>0
        // 7 % 8 =>7
        // 8 % 8 =>0
        // 9 % 8 =>1

      } else {
        bar.beginFill(0x3C3C3C)
      }
      bar.drawRect(0, 0, 6, 6)
      bar.endFill()
    }
  }

  init() {
    // 根据this.num创建24个的长宽都是4的Graphics的矩形，并且依次添加到this.element
    for (let i = 0; i < this.num; i++) {
      const rect = new Graphics()
      rect.beginFill(0x3C3C3C)
      rect.drawRect(0, 0, 6, 6)
      rect.endFill()
      rect.x = i * 12

      this.element.addChild(rect)

    }

    this.element.pivot.set(this.element.width / 2, this.element.height / 2)

    const obj = {
      num: 0
    }
    gsap.to(obj, {
      num: 100,
      duration: 3,
      onUpdate: () => {
        this.barUpdate(obj.num)
      }
    })
  }
}