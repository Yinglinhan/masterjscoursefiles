import { Application, Assets } from "./src/libs/pixijs.js";
import LoadingScene from "./src/components/loadingScene/LoadingScene.js";

// console.log(Application, gsap)

const app = new Application({
  resizeTo: window,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
})

document.body.appendChild(app.view)

const sheet = await Assets.load('src/assets/raibowStarSheet/rainbowStar.json');






const loadingScene = new LoadingScene(sheet)
// console.log(loadingScene)


app.stage.addChild(loadingScene.sceneBox)