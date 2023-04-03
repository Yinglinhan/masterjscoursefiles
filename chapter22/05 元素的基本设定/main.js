
const { Application, Sprite, Texture, Assets, Text, Container, Graphics } = PIXI

async function main() {
  const app = new Application({
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x000000,
  })

  document.body.appendChild(app.view)

  Assets.add('human', './src/imgs/Soldier.png')
  Assets.add('logo', './src/imgs/logo.png')

  const textureHuman = await Assets.load('human')
  const textureLogo = await Assets.load('logo')

  const human = new Sprite(textureHuman)
  const logo = new Sprite(textureLogo)

  // human.addChild(logo)
  // const container = new Container()
  app.stage.addChild(human)
  // app.stage.addChild(human)

  // 位置 坐标
  // x y anchor

  human.pivot.x = human.width / 2
  human.pivot.y = human.height / 2

  // human.anchor.x = 0.5
  // human.anchor.y = 0.5
  human.x = 200
  human.y = 200

  // app.screen 渲染器渲染效果大小

  // app.view 画布的大小
  // console.log(app.screen.width, app.view.width)

  // 旋转
  // angle degree 角度制
  // rotation radian 弧度制

  // anchor 0-1
  // pivot 具体坐标值


  // human.rotation = Math.PI / 2

  // 缩放和斜切  scale 和 skew
  // human.scale.set(2)

  // 透明度 alpha
  // visible  不渲染 数据不更新 包括子元素

  // renderable 不渲染 但是数据更新 不影响子元素

  // human.alpha = 0.5

  const circle = new Graphics()
  circle.beginFill(0xff0000)
    .drawCircle(0, 0, 50)
    .endFill()



  app.stage.addChild(circle)

  circle.x = 100
  circle.y = 100
  human.addChild(circle)
  // human.mask = circle

}

main()