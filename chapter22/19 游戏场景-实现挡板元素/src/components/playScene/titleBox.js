import { Container, Sprite, TilingSprite, Text } from "../../libs/pixijs.js"
import Character from "./character.js"

export default class TitleBox extends Character {
  constructor({
    gameBlockTextTexture,
    rainBowColorTexture,
    chineseText
  }, ticker, posInfo) {
    super(posInfo)
    this.element = new Container()
    this.gameBlockTextTexture = gameBlockTextTexture
    this.rainBowColorTexture = rainBowColorTexture
    this.chineseTextTextrue = chineseText
    this.ticker = ticker
    this.init()
  }

  init() {




    const gameBlockText = new Sprite(this.gameBlockTextTexture)
    // this.element.addChild(gameBlockText)

    const rainbowTextureLayer = new TilingSprite(this.rainBowColorTexture, gameBlockText.width, gameBlockText.height)
    // this.element.addChild(rainbowTextureLayer)

    const gameTitleBox = new Container()
    gameTitleBox.addChild(rainbowTextureLayer, gameBlockText)
    this.element.addChild(gameTitleBox)
    rainbowTextureLayer.mask = gameBlockText

    this.ticker.add(() => {
      rainbowTextureLayer.tilePosition.y += 2

    })

    const gameBlockTextShadow = new Sprite(this.gameBlockTextTexture)
    gameBlockTextShadow.tint = 0xDD5A5F
    gameBlockTextShadow.x = 6
    gameBlockTextShadow.y = 6

    gameTitleBox.addChildAt(gameBlockTextShadow, 0)


    gameTitleBox.y = 100


    const chineseText = new Sprite(this.chineseTextTextrue)
    this.element.addChildAt(chineseText, 0)
    chineseText.alpha = 0.8
    chineseText.tint = 0x302526

    chineseText.anchor.set(0.5)
    chineseText.x = gameTitleBox.width / 2
    chineseText.y = 80


    const backTitle = new Text('BACK', {
      fontFamily: 'upheavtt',
      fontSize: 72,
      fill: 0xECBB79,
      letterSpacing: 2,
      align: 'center',
      dropShadowColor: '#DD5A5F',
      dropShadow: true,
      dropShadowDistance: 6

    })

    this.element.addChildAt(backTitle, 1)
    backTitle.anchor.set(0.5)
    backTitle.x = gameTitleBox.width / 2
    backTitle.y = 30


    this.element.pivot.set(this.element.width / 2, this.element.height / 2)
    this.superInit()
  }
}