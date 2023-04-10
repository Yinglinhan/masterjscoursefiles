import { Container } from "../../libs/pixijs.js"
import LoadingTitle from "./loadingTitle.js"
import GameLoader from "../gameControl/gameLoader.js"


export default class LoadingScene {
  constructor(app) {
    this.sceneBox = new Container()

    this.app = app

    this.loadingBarInstance = null
    
    this.init()
  }

  init() {
    const loadingTitle = new LoadingTitle(GameLoader.allData.loadScene.rainbowStarSheetData)

    this.loadingBarInstance = loadingTitle.loadingBarInstance

    loadingTitle.element.x = this.app.screen.width / 2
    loadingTitle.element.y = this.app.screen.height / 2

    this.sceneBox.addChild(loadingTitle.element)
  }

}