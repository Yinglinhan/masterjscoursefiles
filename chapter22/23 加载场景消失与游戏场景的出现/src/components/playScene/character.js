

export default class Character {
  constructor(posInfo) {
    this.posInfo = posInfo
    this.needAotoAnimation = false
    // this.superInit()
  }
  superInit() {
    // this.showUp()

    this.element.alpha = 0
    this.element.x = this.posInfo.from.x
    this.element.y = this.posInfo.from.y

  }

  showUp() {
   

    gsap.to(this.element, {
      x: this.posInfo.to.x,
      y: this.posInfo.to.y,
      alpha: 1,
      duration: 0.75,
      onComplete: () => {
        if (this.needAotoAnimation) {
          gsap.to(this.autoAnimationType === 'scale' ? this.element.scale : this.element, this.animationInfo)
        }
      }
    })

  }


}