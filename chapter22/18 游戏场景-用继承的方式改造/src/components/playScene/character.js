

export default class Character {
  constructor(posInfo) {
    this.posInfo = posInfo
    // this.superInit()
  }
  superInit() {
    this.showUp()

  }

  showUp() {

    this.element.alpha = 0
    this.element.x = this.posInfo.from.x
    this.element.y = this.posInfo.from.y

    gsap.to(this.element, {
      x: this.posInfo.to.x,
      y: this.posInfo.to.y,
      alpha: 1,
      duration: 0.75
    })

  }


}