
const { Application, Sprite, Texture, Assets, Text, Container, Graphics, AnimatedSprite, BlurFilter, DisplacementFilter } = PIXI

async function main() {
  const app = new Application({
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x000000,
  })

  document.body.appendChild(app.view)

  Assets.add('human', 'src/imgs/Soldier.png')

  Assets.add('block', 'src/imgs/displacement/watertexure.png')
  Assets.add('moutain', 'src/imgs/displacement/moutain.jpg')

  const humanTexture = await Assets.load('human')
  const humanSprite = new Sprite(humanTexture)

  app.stage.addChild(humanSprite)

  const blurFilter = new BlurFilter()
  blurFilter.blur = 0
  // humanSprite.filters = [blurFilter]

  const blockTexture = await Assets.load('block')
  const blockSprite = new Sprite(blockTexture)

  const moutainTexture = await Assets.load('moutain')
  const moutainSprite = new Sprite(moutainTexture)

  moutainSprite.width = app.screen.width
  moutainSprite.height = app.screen.height



  const displacementFilter = new DisplacementFilter(blockSprite)

  moutainSprite.filters = [displacementFilter]
  moutainSprite.addChild(blockSprite)

  blockSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

  app.stage.addChild(moutainSprite)

  blockSprite.scale.set(3)

  app.ticker.add(() => {
    blockSprite.x += 1

  })

  // app.stage.addChild(blockSprite)







}

main()