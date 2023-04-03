
const { Application, Sprite, Texture, Assets, Text, Graphics } = PIXI

async function main() {
  const app = new Application({
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0xffffff,
  })

  document.body.appendChild(app.view)

  // Sprite 精灵 元素  Text 文字  Graphics 基本图形

  // 元素后台准备

  // const sprite = Sprite.from('./src/imgs/Soldier.png') // 存在异步的情况
  // // console.log(sprite.width)

  // const texture = Texture.from('./src/imgs/Soldier.png')
  // const sprite2 = new Sprite(texture)

  // // setTimeout(() => {
  // //   console.log(sprite.width)
  // // }, 300)
  // app.stage.addChild(sprite2) //元素上场


  // Assets 实现加载

  Assets.add('Soldier', './src/imgs/Soldier.png')

  const texture = await Assets.load('Soldier')
  const sprite2 = new Sprite(texture)
  console.log(sprite2.width)
  app.stage.addChild(sprite2)

  await Assets.load('./src/xxx.otf')

  // 文字
  const text = new Text('hellocode', {
    fontFamily: 'xxx',
    fontSize: 80,
    fill: 0xff1010,
    align: 'center',
  });

  app.stage.addChild(text)

  // 绘制一个矩形
  const rect = new Graphics();
  rect.beginFill(0xff0000)
    .drawRoundedRect(0, 0, 100, 100, 20)
    .endFill()

  rect.width = 1000

  // beginFill 绘制图形 然后 endFill


  const line = new Graphics();
  line.lineStyle(10, 0x00ff00, 1)
    .moveTo(0, 0)
    .lineTo(100, 300)


  app.stage.addChild(rect)
  app.stage.addChild(line)

}

main()