import { Container, Text } from "../../libs/pixijs.js"
import LoadingTitle from "./loadingTitle.js"

export default class LoadingScene {
  constructor(sheet) {
    this.sceneBox = new Container()

    this.raibowStarSheet = sheet

    this.init()
  }

  init() {
    const loadingTitle = new LoadingTitle(this.raibowStarSheet)

    this.sceneBox.addChild(loadingTitle.titleBox)
  }

}