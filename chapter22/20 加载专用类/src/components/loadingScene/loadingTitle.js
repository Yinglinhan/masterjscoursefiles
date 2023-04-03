import { Container } from "../../libs/pixijs.js";
import RainBowStar from "./rainBowStar.js";
import LoadingBar from "./loadingBar.js";
import LoadingText from "./loadingText.js";

import AuthorText from "./authorText.js";

export default class LoadingTitle {
  constructor(sheet) {
    this.element = new Container()
    this.rainBowStarSheetData = sheet

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



  }
}