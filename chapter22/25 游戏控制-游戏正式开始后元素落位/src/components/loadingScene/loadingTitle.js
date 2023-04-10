import { Container } from "../../libs/pixijs.js";
import RainBowStar from "./rainBowStar.js";
import LoadingBar from "./loadingBar.js";
import LoadingText from "./loadingText.js";
import Control from "../gameControl/control.js";

import AuthorText from "./authorText.js";

export default class LoadingTitle {
  constructor(sheet) {
    this.element = new Container()
    this.rainBowStarSheetData = sheet
    this.loadingBarInstance = null

    this.rainBowStarInstance = null
    this.loadingTextInstance = null
    this.authorTextInstance = null


    this.init()
  }
  init() {
    const rainBowStar = new RainBowStar(this.rainBowStarSheetData)

    const loadingBar = new LoadingBar()


    const loadingText = new LoadingText()

    const authorText = new AuthorText()

    this.element.addChild(authorText.element, rainBowStar.element, loadingBar.element, loadingText.element)



    authorText.element.y = 200
    rainBowStar.element.x = authorText.element.width / 2
    rainBowStar.element.y = 50

    loadingBar.element.x = authorText.element.width / 2
    loadingBar.element.y = 120

    loadingText.element.x = authorText.element.width / 2 - 55
    loadingText.element.y = 150


    this.element.pivot.set(this.element.width / 2, this.element.height / 2)

    this.loadingBarInstance = loadingBar
    this.rainBowStarInstance = rainBowStar
    this.loadingTextInstance = loadingText
    this.authorTextInstance = authorText

  }

  disappear() {
    gsap.to(this.rainBowStarInstance.element, {
      alpha: 0,
      y: this.rainBowStarInstance.element.y - 100,
      duration: 0.75,
      delay: 0.65,
      onComplete: () => {
        Control.playSceneAppear()
      }
    })

    gsap.to(this.loadingTextInstance.element, {
      alpha: 0,
      y: this.loadingTextInstance.element.y + 100,
      duration: 0.75,
      delay: 0.65
    })

    gsap.to(this.authorTextInstance.element, {
      alpha: 0,
      y: this.authorTextInstance.element.y + 100,
      duration: 0.75,
      delay: 0.65
    })

    gsap.to(this.loadingBarInstance.element, {
      alpha: 0,
      duration: 0.75
    })


  }
}