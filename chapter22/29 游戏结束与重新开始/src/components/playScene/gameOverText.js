
import Character from "./character.js";
import { Text, Container } from "../../libs/pixijs.js";
import GameLoader from "../gameControl/gameLoader.js";


import RainbowStar from "../loadingScene/rainBowStar.js";

export default class GameOverText extends Character{

  constructor(posInfo) {
    super(posInfo)
    this.element = null
    this.init()
  }
  init() {
    const container = new Container()
    const rainbowStar = new RainbowStar(GameLoader.allData.loadScene.rainbowStarSheetData)
    const gameOverText = new Text('Game Over', {
      fontFamily: 'upheavtt',
      fontSize: 82,
      fill: 0xFFFFFF,
      letterSpacing: 2,
      align: 'center',
      //加上投影
      dropShadow: true,
      dropShadowColor: '#DD5A5F',
    })
    // gameOverText.anchor.set(0.5)

    container.addChild(gameOverText, rainbowStar.element)
    // 让rainbowStar.eyeBox在gameOverText的中心偏上50像素
    rainbowStar.element.x = gameOverText.width / 2
    rainbowStar.element.y = gameOverText.y





    this.element = container



    this.superInit()
  }






}