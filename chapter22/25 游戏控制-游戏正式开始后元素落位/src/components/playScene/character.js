

export default class Character {
  constructor(posInfo) {
    this.posInfo = posInfo
    this.needAotoAnimation = false
    this.loopAnimation = null
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
          this.loopAnimation = gsap.to(this.autoAnimationType === 'scale' ? this.element.scale : this.element, this.animationInfo)
        }
      }
    })

  }

  hide() {
    if (this.loopAnimation) {
      this.loopAnimation.pause()
    }

    if (this.getToReady) {
      this.getToReady()
    } else {
      gsap.to(this.element, {
        x: this.posInfo.from.x,
        y: this.posInfo.from.y,
        duration: 0.75,

      })
    }


  }



}