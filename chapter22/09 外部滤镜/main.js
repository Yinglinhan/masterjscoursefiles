
const { Application, Sprite, Texture, Assets, Text, Container, Graphics, AnimatedSprite, BlurFilter, DisplacementFilter } = PIXI
// console.log(PIXI.filters.ShockwaveFilter)

const ShockwaveFilter = PIXI.filters.ShockwaveFilter
async function main() {
  const app = new Application({
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x000000,
  })

  document.body.appendChild(app.view)


  Assets.add('moutain', 'src/imgs/displacement/moutain.jpg')

  const moutainTexture = await Assets.load('moutain')
  const moutainSprite = new Sprite(moutainTexture)

  moutainSprite.width = app.screen.width
  moutainSprite.height = app.screen.height


  app.stage.addChild(moutainSprite)


  const wave = new ShockwaveFilter([300, 300], {
    radius: 200,
    wavelength: 100,
    amplitude: 20,
    speed: 100
  }, 0)

  moutainSprite.filters = [wave]

  app.ticker.add((delta) => {
    wave.time += 0.05

    // if (wave.time > 4) {
    //   wave.time = 0
    // }
  })

  moutainSprite.interactive = true

  moutainSprite.addEventListener('click', (e) => {
    console.log(e.client)
    wave.center = [e.client.x, e.client.y]
    wave.time = 0
  })







}

main()