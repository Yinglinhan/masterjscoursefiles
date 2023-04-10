
import LoadingScene from '../loadingScene/LoadingScene.js'
import PlayScene from '../playScene/playScene.js'
import GameLoader from './gameLoader.js'



export default class Control {

  static gameApp = null

  static playScene = null

  static loadScene = null

  static gameIsStart = false

  //当前运动小元素的索引位
  static currentShapeIndex = 0

  static async gameInit(app) {
    this.gameApp = app
    // 加载loadScene场景资源
    await GameLoader.loadSceneAssetsLoad()

    // 创建并显示加载场景
    const loadingScene = new LoadingScene(this.gameApp)
    this.gameApp.stage.addChild(loadingScene.sceneBox)

    this.loadScene = loadingScene

    // console.log(loadingScene.loadingBarInstance)
    // 开始加载游戏场景资源
    await GameLoader.playSceneAssetsLoad(loadingScene.loadingBarInstance, this)

    const playScene = new PlayScene(this.gameApp)
    this.gameApp.stage.addChild(playScene.sceneBox)

    this.playScene = playScene

  }

  static loadSceneDisappear() {
    this.loadScene.disappear()
  }

  static playSceneAppear() {
    this.playScene.appear()
  }

  static gameStart() {
    this.playScene.gameStart()
    this.gameIsStart = true
    setTimeout(() => {
      this.shapesMoveStart()
    }, 2000)
  }

  static shapesMoveStart() {
    console.log(this.playScene.allInstances.shapes)
    this.playScene.allInstances.shapes.forEach((item) => {
      item.shapeGetRandomReady()
    })
    // 随机获取一个0-7的整数值
    const randomIndex = Math.floor(Math.random() * 8)
    this.currentShapeIndex = randomIndex

    // bind
    this.shapeMoveFunc = this.playScene.allInstances.shapes[randomIndex].oneStep.bind(this.playScene.allInstances.shapes[randomIndex])
    this.gameApp.ticker.add(this.shapeMoveFunc)



  }



}