
const { Application, Sprite, Texture, Assets } = PIXI

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
}

main()