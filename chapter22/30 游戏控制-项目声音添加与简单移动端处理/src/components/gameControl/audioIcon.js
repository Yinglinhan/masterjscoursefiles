import { Sprite, Graphics } from "../../libs/pixijs.js"
const { sound } = PIXI


export default class AudioIcon {
  constructor(app) {
    this.element = Sprite.from('src/assets/control/audio.png')
    this.isMuted = true
    this.app = app
    this.init()
  }

  init() {
    this.element.anchor.set(0.5)
    // 让元素显示在左下角
    this.element.x = 30
    this.element.y = this.app.screen.height - 30

    this.element.alpha = 0.5

    this.app.stage.addChild(this.element)
    // 创建一个遮罩层，可以用来遮挡部分audioIcon
    const mask = new Graphics()
    mask.beginFill(0xffffff)
    mask.drawRect(0, 0, 35, 35)
    mask.endFill()
    this.element.addChild(mask)
    //设置mask的锚点为中心，用pivot方式设置
    mask.pivot.set(17.5, 17.5)
    mask.x = -15

    this.element.mask = mask

    // this.app.stage.addChild(mask)
    this.setHoverEffect()
    this.setClickAction()
  }


  setHoverEffect() {
    // 设置鼠标悬浮时透明度变化到0.8
    this.element.eventMode = 'static'
    this.element.addEventListener('pointerover', () => {
      this.element.alpha = 0.8
      document.body.style.cursor = 'pointer'
    })
    this.element.addEventListener('pointerout', () => {
      this.element.alpha = 0.5
      document.body.style.cursor = 'default'
    })
  }

  setClickAction() {
    // 点击后让mask的x设置回0，再点击一次让mask的x设置为-15
    this.element.addEventListener('pointerdown', () => {
      this.element.mask.x = this.element.mask.x === 0 ? -15 : 0

      if (this.isMuted) {
        sound.unmuteAll()
      } else {
        sound.muteAll()
      }
      this.isMuted = !this.isMuted
    })
  }
}