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





// const loadingScene = new LoadingScene(sheet,app)
// console.log(loadingScene)


const playScene = new PlayScene({ rainBowColorTexture, gameBlockTextTexture, chineseText}, app)

app.stage.addChild(playScene.sceneBox)