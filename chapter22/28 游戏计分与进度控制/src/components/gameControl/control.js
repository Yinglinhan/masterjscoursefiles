
import LoadingScene from '../loadingScene/LoadingScene.js'
import PlayScene from '../playScene/playScene.js'
import GameLoader from './gameLoader.js'



export default class Control {

  static gameApp = null

  static playScene = null

  static loadScene = null

  static gameIsStart = false

  static gameScore = 0

  static BlockBarLife = 3

  static boundary = {
    left: 0,
    top: 0,
    right: innerWidth,
    bottom: innerHeight
  }

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
    // console.log(this.playScene.allInstances.shapes)
    this.playScene.allInstances.shapes.forEach((item) => {
      item.shapeGetRandomReady()
    })
    // 随机获取一个0-7的整数值
    const randomIndex = Math.floor(Math.random() * 8)
    this.currentShapeIndex = randomIndex

    // bind
    this.shapeMoveFunc = this.playScene.allInstances.shapes[randomIndex].oneStep.bind(this.playScene.allInstances.shapes[randomIndex])
    this.gameApp.ticker.add(this.shapeMoveFunc)

    this.detectBoundaryFunc = this.detectBoundary.bind(this)
    this.gameApp.ticker.add(this.detectBoundaryFunc)

    setTimeout(() => {
      this.playScene.allInstances.shapes[randomIndex].isInArea = true
    }, 500)


  }

  static detectBoundary() {

    const shape = this.playScene.allInstances.shapes[this.currentShapeIndex]
    const blockBar = this.playScene.allInstances.blockBar


    // getGlobalPosition()
    const { x: barX, y: barY } = blockBar.element.getGlobalPosition()

    // console.log(barX, barY)
    const barLeft = barX - blockBar.element.width / 2
    const barRight = barX + blockBar.element.width / 2
    const barTop = barY - blockBar.element.height / 2

    // 左右边界检测 并修改方向
    if (shape.element.x < this.boundary.left + shape.element.width / 2 || shape.element.x > this.boundary.right - shape.element.width / 2) {
      console.log(1)
      shape.direction = Math.PI - shape.direction // 左右碰撞改方向
    }

    // 上方检测并修改方向
    if (shape.element.y < this.boundary.top + shape.element.height / 2 && shape.isInArea) {
      console.log(2)
      shape.direction = 2 * Math.PI - shape.direction // 上面碰撞改方向
    }

    // 出界
    if (shape.element.y > this.boundary.bottom + 100) {
      console.log('出界')
      this.shapeGetOut()
    }

    // 挡板挡回去
    if (shape.element.y + shape.element.height / 2 >= barTop) {
      if (shape.element.x + shape.element.width / 2 >= barLeft && shape.element.x - shape.element.width / 2 <= barRight) {
        if (!shape.shapeIsOut) {
          console.log('挡回去')
          this.hitBlock()
          shape.direction = 2 * Math.PI - shape.direction // 上面碰撞改方向
        }
      } else {
        shape.shapeIsOut = true
      }
    }

  }


  static gameOver() {
    this.playScene.gameOver()


  }



  static shapeGetOut() {
    if (this.BlockBarLife > 0) {
      this.BlockBarLife--

      // 删除当前shape的运动
      this.gameApp.ticker.remove(this.shapeMoveFunc)
      // 删除当前的检测边界
      this.gameApp.ticker.remove(this.detectBoundaryFunc)

      const shape = this.playScene.allInstances.shapes[this.currentShapeIndex]
      shape.isInArea = false

      this.playScene.allInstances.blockBar.barDecrease()

      setTimeout(() => {
        shape.shapeIsOut = false
        this.shapesMoveStart()
      }, 1000)


    } else {

      // 删除当前shape的运动
      this.gameApp.ticker.remove(this.shapeMoveFunc)
      // 删除当前的检测边界
      this.gameApp.ticker.remove(this.detectBoundaryFunc)

      const shape = this.playScene.allInstances.shapes[this.currentShapeIndex]
      shape.isInArea = false
      this.gameOver()
    }





  }

  static hitBlock() {

    const scoreTextInstance = this.playScene.scoreTextInstance

    this.gameScore += 100

    scoreTextInstance.element.text = this.gameScore

    const goldenStarInstance = this.playScene.allInstances.goldenStar

    goldenStarInstance.bounce()
  }



}