import { Container } from "../../libs/pixijs.js";
import RainBowStar from "./rainBowStar.js";

export default class LoadingTitle {
  constructor(sheet) {
    this.titleBox = new Container()
    this.rainBowStarSheetData = sheet

    this.init()
  }
  init() {
    const rainBowStar = new RainBowStar(this.rainBowStarSheetData)
    this.titleBox.addChild(rainBowStar.element)
  }
}