
const { Application } = PIXI

const app = new Application({
  resizeTo: window,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true,
  backgroundColor: 0xffffff,
})

document.body.appendChild(app.view)