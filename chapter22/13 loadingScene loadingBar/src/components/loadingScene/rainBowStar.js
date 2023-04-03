
import { AnimatedSprite, Container } from "../../libs/pixijs.js"

export default class RainBowStar {
  constructor(sheet) {
    this.sheet = sheet
    this.centerEye = new AnimatedSprite(sheet.animations['center/center'])
    this.leftEye = new AnimatedSprite(sheet.animations['left/left'])
    this.rightEye = new AnimatedSprite(sheet.animations['right/right'])
    this.element = new Container()
    this.init()
  }
  init() {

    this.centerEye.animationSpeed = 0.2
    this.centerEye.loop = false
    this.leftEye.animationSpeed = 0.2
    this.leftEye.loop = false
    this.rightEye.animationSpeed = 0.2
    this.rightEye.loop = false

    this.element.addChild(this.rightEye)
    this.autoWink()


    // anchor pivot
    this.element.pivot.set(this.element.width / 2, this.element.height / 2)
    this.element.scale.set(0.5)
    this.element.x = 200
    this.element.y = 100
    // this.centerEye.play()
  }

  changeEyeSprite(animationAciton) {
    this.element.children[0].gotoAndStop(0)
    this.element.removeChildren()
    this.element.addChild(animationAciton)
    // animationAciton.play()
    this.element.children[0].play()
  }

  autoWink() {
    const allWinks = [this.centerEye, this.leftEye, this.rightEye]

    const randomIndex = Math.floor(Math.random() * 3)

    this.changeEyeSprite(allWinks[randomIndex])

    const randomTime = Math.floor(Math.random() * 2 + 3)

    setTimeout(() => {
      this.autoWink()
      console.log('眨眼了')
    }, randomTime * 1000)
  }

}