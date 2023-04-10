import { Application, Assets } from "./src/libs/pixijs.js";
import LoadingScene from "./src/components/loadingScene/LoadingScene.js";

// console.log(Application, gsap)

const app = new Application({
  resizeTo: window,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
})

document.body.appendChild(app.view)

await Assets.load('src/assets/fonts/RetroGaming.ttf')
await Assets.load('src/assets/fonts/upheavtt.ttf')


const sheet = await Assets.load('src/assets/raibowStarSheet/rainbowStar.json');






const loadingScene = new LoadingScene(sheet,app)
// console.log(loadingScene)


app.stage.addChild(loadingScene.sceneBox)