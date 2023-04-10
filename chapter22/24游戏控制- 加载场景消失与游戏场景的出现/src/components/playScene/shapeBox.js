
import { Sprite } from "../../libs/pixijs.js";
import Character from "./character.js";

export default class ShapeBox extends Character {
  constructor(texture, posInfo) {
    super(posInfo)
    this.element = new Sprite(texture)

    this.autoAnimationType = 'scale'
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
    this.needAotoAnimation = true
    this.element.x = this.posInfo.x
    this.element.y = this.posInfo.y
    this.superInit()

  }

}