import Character from "./character.js";
import { Container, Sprite } from "../../libs/pixijs.js";


export default class BlockBar extends Character {
  constructor(barCornerTexture, barTexture, posInfo) {
    super(posInfo)
    this.element = new Container()
    this.barTexture = barTexture
    this.barCornerTexture = barCornerTexture
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
    this.init()
  }

  init() {

    this.needAotoAnimation = true

    const centerBar = new Sprite(this.barTexture)
    const leftSide = new Sprite(this.barCornerTexture)
    const rightSide = new Sprite(this.barCornerTexture)

    this.element.addChild(centerBar, rightSide, leftSide)

    leftSide.anchor.set(0.5)
    leftSide.x = leftSide.width / 2
    leftSide.y = leftSide.height / 2
    leftSide.angle = 180

    centerBar.x = leftSide.width
    rightSide.x = leftSide.width + centerBar.width

    this.superInit()

  }
}
