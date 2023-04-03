import { Application, Assets } from "./src/libs/pixijs.js";
import LoadingScene from "./src/components/loadingScene/LoadingScene.js";
import PlayScene from "./src/components/playScene/playScene.js";
// console.log(Application, gsap)

const app = new Application({
  resizeTo: window,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
})

document.body.appendChild(app.view)

await Assets.load('src/assets/fonts/RetroGaming.ttf')
await Assets.load('src/assets/fonts/upheavtt.ttf')

const gameBlockTextTexture = await Assets.load('src/assets/titleTextures/blockText.png')
const rainBowColorTexture = await Assets.load('src/assets/titleTextures/rainBowColor.png')
const chineseText = await Assets.load('src/assets/titleTextures/dang.png')

const sheet = await Assets.load('src/assets/raibowStarSheet/rainbowStar.json');

Assets.addBundle('shapes', {
  shape1: 'src/assets/shapes/shape1.png',
  shape2: 'src/assets/shapes/shape2.png',
  shape3: 'src/assets/shapes/shape3.png',
  shape4: 'src/assets/shapes/shape4.png',
  shape5: 'src/assets/shapes/shape5.png',
  shape6: 'src/assets/shapes/shape6.png',
  shape7: 'src/assets/shapes/shape7.png',
  shape8: 'src/assets/shapes/shape8.png'

})


const barTexture = await Assets.load('src/assets/elements/barBlock.png')
const barCornerTexture = await Assets.load('src/assets/elements/barCorner.png')



const shapesBundle = await Assets.loadBundle('shapes')
// console.log(shapesBundle)




// const loadingScene = new LoadingScene(sheet,app)
// console.log(loadingScene)


const playScene = new PlayScene({ barTexture, barCornerTexture, rainBowColorTexture, gameBlockTextTexture, chineseText, shapesBundle }, app)

app.stage.addChild(playScene.sceneBox)