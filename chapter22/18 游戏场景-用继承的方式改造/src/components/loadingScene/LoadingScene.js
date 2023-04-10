import { Container, Text } from "../../libs/pixijs.js"
import LoadingTitle from "./loadingTitle.js"

export default class LoadingScene {
  constructor(sheet, app) {
    this.sceneBox = new Container()

    this.app = app
    this.raibowStarSheet = sheet

    this.init()
  }

  init() {
    const loadingTitle = new LoadingTitle(this.raibowStarSheet)

    loadingTitle.element.x = this.app.screen.width / 2
    loadingTitle.element.y = this.app.screen.height / 2

    this.sceneBox.addChild(loadingTitle.element)
  }

}