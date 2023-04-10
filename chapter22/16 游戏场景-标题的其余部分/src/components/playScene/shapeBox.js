
import { Sprite } from "../../libs/pixijs.js";



export default class ShapeBox {
  constructor(texture, posInfo) {
    this.element = new Sprite(texture)
    // console.log(posInfo)
    this.posInfo = posInfo
    this.animationInfo = {
      keyframes: {
        '0%': { x: 1, y: 1 },
        "50%": { x: 1.2, y: 1.2 },
        "100%": { x: 1, y: 1 }
      },
      duration: 1.2,
      delay: Math.random(),
      ease: 'none',
      repeat: -1
    }
    this.init()
  }
  init() {
    this.element.x = this.posInfo.x
    this.element.y = this.posInfo.y
    gsap.to(this.element.scale, this.animationInfo)
  }
}