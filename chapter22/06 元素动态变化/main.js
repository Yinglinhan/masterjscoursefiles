
const { Application, Sprite, Texture, Assets, Text, Container, Graphics, AnimatedSprite } = PIXI

async function main() {
  const app = new Application({
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x000000,
  })

  document.body.appendChild(app.view)

  // Assets.add('human', './src/imgs/Soldier.png')


  // const textureHuman = await Assets.load('human')


  // const human = new Sprite(textureHuman)

  // app.stage.addChild(human)


  // human.interactive = true

  // const humanRotate = () => {
  //   // human.angle += 1
  //   // human.x += 1
  // }

  // let isAdd = true

  // human.addEventListener('click', () => {
  //   if (isAdd) {
  //     app.ticker.remove(humanRotate)
  //     isAdd = false
  //   } else {
  //     app.ticker.add(humanRotate)
  //     isAdd = true
  //   }
  // })
  // human.anchor.set(0.5)
  // human.x = 200
  // human.y = 200

  // app.ticker.add(humanRotate)
  // const allImgs = [
  //   'src/imgs/walking/1.png',
  //   'src/imgs/walking/2.png',
  //   'src/imgs/walking/3.png',
  //   'src/imgs/walking/4.png',
  //   'src/imgs/walking/5.png',
  // ]

  // const textureAll = []

  // for (let i = 0; i < allImgs.length; i++) {
  //   const texture = await Assets.load(allImgs[i])
  //   textureAll.push(texture)
  // }

  // const animatedSprite = new AnimatedSprite(textureAll)

  // app.stage.addChild(animatedSprite)
  // animatedSprite.animationSpeed = 0.2
  // animatedSprite.play()



  // 中间的按钮
  const button = new Graphics()
  button.beginFill(0xffffff)
  button.drawRect(0, 0, 100, 50)
  button.endFill()


  const box = new Graphics()
  box.beginFill(0x00ffff)
  box.drawRect(0, 0, 500, 500)
  box.endFill()
  box.x = - box.width
  box.y = 100


  app.stage.addChild(button, box)

  console.log(gsap)

  const obj = {
    x: - box.width,
  }

  let isShow = false

  button.interactive = true
  button.addEventListener('click', () => {

    if (isShow) {
      isShow = false
      gsap.to(obj, {
        x: -box.width,
        duration: 2,
        onUpdate: () => {
          box.x = obj.x
        }
      })
    } else {
      isShow = true
      gsap.to(obj, {
        x: 100,
        duration: 2,
        onUpdate: () => {
          box.x = obj.x
        }
      })
    }

  })



}

main()