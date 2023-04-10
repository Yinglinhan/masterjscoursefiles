
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

    this.direction = 0
    this.speed = 12
    this.x = null
    this.y = null
    this.vx = 0
    this.vy = 0


    this.init()
  }
  init() {
    this.needAotoAnimation = true
    this.element.x = this.posInfo.x
    this.element.y = this.posInfo.y
    this.superInit()

  }
  shapeGetRandomReady() {
    const randomX = Math.random() * innerWidth / 2 + innerWidth / 4
    this.element.x = randomX
    this.element.y = -50


    // 随机一个45-135的角度值
    const randomAngle = Math.random() * 90 + 45
    // 转换成弧度值
    const randomRadian = randomAngle * Math.PI / 180

    this.direction = randomRadian

    this.x = this.element.x
    this.y = this.element.y

  }

  oneStep() {
    console.log(this)
    this.vx = this.speed * Math.cos(this.direction)
    this.vy = this.speed * Math.sin(this.direction)
    this.x += this.vx
    this.y += this.vy
    this.element.x = this.x
    this.element.y = this.y
  }

}