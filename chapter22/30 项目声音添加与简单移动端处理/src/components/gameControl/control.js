
import LoadingScene from '../loadingScene/LoadingScene.js'
import PlayScene from '../playScene/playScene.js'
import GameLoader from './gameLoader.js'
import AudioIcon from './audioIcon.js'

const { sound } = PIXI


export default class Control {

  static gameApp = null

  static playScene = null

  static loadScene = null

  static gameIsStart = false

  static gameScore = 0

  static isMobile = false

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

    sound.add('hit', '/src/assets/audio/block.mp3');
    sound.add('fail', '/src/assets/audio/fail.mp3');
    sound.add('decrease', '/src/assets/audio/decrease.mp3')
    sound.add('opening', '/src/assets/audio/opening.mp3')
    sound.volumeAll = 0.2
    sound.muteAll()


    this.detectDevice()

    const audioIcon = new AudioIcon(app)
    app.stage.addChild(audioIcon.element)

    await GameLoader.loadSceneAssetsLoad()

    // 创建并显示加载场景
    const loadingScene = new LoadingScene(this.gameApp)
    if (this.isMobile) {
      loadingScene.sceneBox.scale.set(0.6)
    }
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
    sound.play('opening', {
      loop: true
    })
  }

  static gameStart() {
    this.playScene.gameStart()
    this.gameIsStart = true
    sound.stop('opening')
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
    this.gameIsStart = false
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
      sound.play('decrease')
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
      sound.play('fail')
    }





  }

  static hitBlock() {
    sound.play('hit')

    const scoreTextInstance = this.playScene.scoreTextInstance

    this.gameScore += 100

    scoreTextInstance.element.text = this.gameScore

    const goldenStarInstance = this.playScene.allInstances.goldenStar

    goldenStarInstance.bounce()
  }

  static resetScore() {
    this.gameScore = 0
    const scoreTextInstance = this.playScene.scoreTextInstance


    scoreTextInstance.element.text = this.gameScore
  }
  static detectDevice() {
    const ua = navigator.userAgent
    const ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
    const isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
    const isAndroid = ua.match(/(Android)\s+([\d.]+)/)
    const isMobile = isIphone || isAndroid
    if (isMobile) {
      this.isMobile = true
    }
  }



}