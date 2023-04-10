import { Container } from "../../libs/pixijs.js"
import TitleBox from "./titleBox.js"
import ShapeBox from "./shapeBox.js"

export default class PlayScene {
  constructor({ gameBlockTextTexture, rainBowColorTexture, chineseText, shapesBundle }, app) {
    this.sceneBox = new Container()
    this.gameBlockTextTexture = gameBlockTextTexture
    this.rainBowColorTexture = rainBowColorTexture
    this.chineseText = chineseText
    this.shapesBundle = shapesBundle

    this.shapePosInfos = [
      { x: app.screen.width / 3, y: 500 },
      { x: app.screen.width / 8, y: 300 },
      { x: app.screen.width / 5 * 4, y: 200 },
      { x: app.screen.width / 5 * 4.5, y: 100 },
      { x: app.screen.width / 10 * 4, y: 80 },
      { x: app.screen.width / 6 * 4, y: 520 },
      { x: app.screen.width / 6 * 5, y: 400 },
      { x: app.screen.width / 5, y: 150 }
    ]

    this.app = app
    this.init()
  }


  init() {
    const titleBox = new TitleBox({ gameBlockTextTexture: this.gameBlockTextTexture, rainBowColorTexture: this.rainBowColorTexture, chineseText: this.chineseText }, this.app.ticker)

    titleBox.element.x = this.app.screen.width / 2
    titleBox.element.y = this.app.screen.height / 2

    this.sceneBox.addChild(titleBox.element)

    // console.log(Object.values(this.shapesBundle))
    let j = 0
    for (let i in this.shapesBundle) {
      const shape = new ShapeBox(this.shapesBundle[i], this.shapePosInfos[j])
      this.sceneBox.addChild(shape.element)
      j++
    }



    // this.shapesBundle.forEach((shapeTexture, index) => {
    //   const shape = new ShapeBox(shapeTexture)
    // })



  }
}