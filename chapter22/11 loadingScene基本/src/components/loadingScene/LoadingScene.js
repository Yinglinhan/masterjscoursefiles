import { Container, Text } from "../../libs/pixijs.js"
import LoadingTitle from "./loadingTitle.js"

export default class LoadingScene {
  constructor() {
    this.sceneBox = new Container()
    this.init()
  }

  init() {
    const loadingTitle = new LoadingTitle()

    this.sceneBox.addChild(loadingTitle.titleBox)
  }

}