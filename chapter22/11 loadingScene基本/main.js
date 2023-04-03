import { Application } from "./src/libs/pixijs.js";
import LoadingScene from "./src/components/loadingScene/LoadingScene.js";

// console.log(Application, gsap)

const app = new Application({
  resizeTo: window,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
})

document.body.appendChild(app.view)

const loadingScene = new LoadingScene()

const obj = {
  abc: loadingScene
}


app.stage.addChild(obj.abc.sceneBox)