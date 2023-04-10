import Character from "./character.js";
import { Container, Sprite } from "../../libs/pixijs.js";
import Control from "../gameControl/control.js";

export default class BlockBar extends Character {
  constructor(barCornerTexture, barTexture, posInfo) {
    super(posInfo)
    this.element = new Container()
    this.barTexture = barTexture
    this.barCornerTexture = barCornerTexture
    this.pointerDownPos = {}
    this.canbeDrag = false
    this.animationInfo = {
      keyframes: {
        '0%': { x: this.posInfo.to.x, },
        "50%": { x: this.posInfo.to.x - 100, },
        "100%": { x: this.posInfo.to.x, }
      },
      duration: 2,
      delay: Math.random(),
      ease: 'none',
      repeat: -1
    }

    this.barBlock = null
    this.leftBarSide = null
    this.rightBarSide = null


    this.init()
  }

  init() {

    this.needAotoAnimation = true

    const centerBar = new Sprite(this.barTexture)
    const leftSide = new Sprite(this.barCornerTexture)
    const rightSide = new Sprite(this.barCornerTexture)

    centerBar.anchor.set(0.5)
    rightSide.anchor.set(0.5)
    leftSide.anchor.set(0.5)

    this.barBlock = centerBar
    this.leftBarSide = leftSide
    this.rightBarSide = rightSide



    this.element.addChild(centerBar, rightSide, leftSide)



    leftSide.angle = 180
    centerBar.x = leftSide.width / 2 + centerBar.width / 2

    rightSide.x = leftSide.width + centerBar.width


    this.superInit()

    this.setUpDrag()


    this.element.eventMode = 'static'
    this.element.addEventListener('click', () => {
      this.barDecrease()
    })

  }

  setUpDrag() {
    this.element.eventMode = 'static'

    this.element.addEventListener('pointerdown', (e) => {
      if (Control.gameIsStart) {
        this.canbeDrag = true
        this.pointerDownPos.x = e.client.x
        this.pointerDownPos.y = e.client.y
        document.body.style.cursor = 'grab'
      }

    })

    this.element.addEventListener('globalpointermove', (e) => {
      if (this.canbeDrag) {
        const distanceX = e.client.x - this.pointerDownPos.x
        this.element.x += distanceX
        this.pointerDownPos = {
          x: e.client.x,
          y: e.client.y
        }

      }
    })


    this.element.addEventListener('pointerupoutside', () => {
      this.canbeDrag = false
      document.body.style.cursor = 'default'

    })


    this.element.addEventListener('pointerup', (e) => {

      this.canbeDrag = false
      document.body.style.cursor = 'default'
    })


    this.element.addEventListener('pointerover', () => {
      if (Control.gameIsStart) {
        document.body.style.cursor = 'grab'
      }
    })


    this.element.addEventListener('pointerout', () => {
      if (!this.canbeDrag) {
        document.body.style.cursor = 'default'
      }
    })






  }




  barDecrease() {
    // console.log(11111)
    if (Control.gameIsStart) {
      gsap.to(this.barBlock, {
        width: this.barBlock.width - 40,
        duration: 0.35
      })
      // 让leftBarSide向右移动减少的一般的距离
      gsap.to(this.leftBarSide, {
        x: this.leftBarSide.x + 20,
        duration: 0.35
      })
      // 让rightBarSide向左移动减少的一般的距离
      gsap.to(this.rightBarSide, {
        x: this.rightBarSide.x - 20,
        duration: 0.35
      })
    }
  }
}
