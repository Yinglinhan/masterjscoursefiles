

export default class Character {
  constructor(posInfo) {
    this.posInfo = posInfo
    this.needAotoAnimation = false
    this.loopAnimation = null
    // this.superInit()
  }
  superInit() {
    // this.showUp()

    if (this.anchor) {
      this.element.anchor.set(this.anchor.x, this.anchor.y)
    } else {
      this.element.pivot.set(this.element.width / 2, this.element.height / 2)
    }

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
      this.loopAnimation.kill()
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


  showResult() {
    gsap.to(this.element, {
      y: this.element.y - 500,
      duration: 0.75
    })
  }



}