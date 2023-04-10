import { Container } from "../../libs/pixijs.js"
import TitleBox from "./titleBox.js"
import ShapeBox from "./shapeBox.js"
import BlockBar from "./blockBar.js"
import GoldenStar from "./goldenStar.js"
import StartBtn from "./startBtn.js"

export default class PlayScene {
  constructor({ goldenStarTexture, barCornerTexture, barTexture, gameBlockTextTexture, rainBowColorTexture, chineseText, shapesBundle }, app) {
    this.sceneBox = new Container()
    this.gameBlockTextTexture = gameBlockTextTexture
    this.rainBowColorTexture = rainBowColorTexture
    this.chineseText = chineseText
    this.shapesBundle = shapesBundle

    this.barCornerTexture = barCornerTexture
    this.barTexture = barTexture
    this.goldenStarTexture = goldenStarTexture

    this.app = app
    this.shapePosInfos = [
      { from: { x: 100, y: -20 }, to: { x: this.app.screen.width / 3, y: 500 } },
      { from: { x: -20, y: 100 }, to: { x: this.app.screen.width / 8, y: 300 } },
      { from: { x: this.app.screen.width / 3, y: -50 }, to: { x: this.app.screen.width / 5 * 4, y: 200 } },
      { from: { x: this.app.screen.width, y: -10 }, to: { x: this.app.screen.width / 5 * 4.5, y: 100 } },
      { from: { x: this.app.screen.width / 2, y: -20 }, to: { x: this.app.screen.width / 10 * 4, y: 80 } },
      { from: { x: this.app.screen.width / 5 * 4, y: -20 }, to: { x: this.app.screen.width / 6 * 4, y: 520 } },
      { from: { x: this.app.screen.width, y: -20 }, to: { x: this.app.screen.width / 6 * 5, y: 400 } },
      { from: { x: this.app.screen.width + 30, y: 100 }, to: { x: this.app.screen.width / 5, y: 150 } },
    ]


    this.init()
  }


  init() {
    const titleBox = new TitleBox({ gameBlockTextTexture: this.gameBlockTextTexture, rainBowColorTexture: this.rainBowColorTexture, chineseText: this.chineseText },
      this.app.ticker,
      {
        from: { x: this.app.screen.width / 2, y: -100 }, to: { x: this.app.screen.width / 2, y: 300 }
      }
    )

    // titleBox.element.x = this.app.screen.width / 2
    // titleBox.element.y = this.app.screen.height / 2

    this.sceneBox.addChild(titleBox.element)

    // console.log(Object.values(this.shapesBundle))
    let j = 0
    for (let i in this.shapesBundle) {
      const shape = new ShapeBox(this.shapesBundle[i], this.shapePosInfos[j])
      // console.log(shape)
      this.sceneBox.addChild(shape.element)
      j++
    }



    const blockBar = new BlockBar(this.barCornerTexture, this.barTexture,
      {
        from: { x: 100, y: this.app.screen.height - 300 }, to: { x: this.app.screen.width / 3, y: this.app.screen.height - 300 }
      }

    )

    this.sceneBox.addChild(blockBar.element)


    const goldenStar = new GoldenStar(this.goldenStarTexture,
      {
        from: { x: this.app.screen.width, y: 100 }, to: { x: this.app.screen.width * 6 / 10, y: 480 }
      }
    )

    this.sceneBox.addChild(goldenStar.element)



    const startBtn = new StartBtn({
      from: {
        x: this.app.screen.width / 2,
        y: this.app.screen.height + 100
      },
      to: {
        x: this.app.screen.width / 2,
        y: this.app.screen.height - 120
      }
    })

    this.sceneBox.addChild(startBtn.element)

  }
}