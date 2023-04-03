
const { Application, Sprite, Texture, Assets, Text, Container, Graphics, AnimatedSprite } = PIXI

async function main() {
  const app = new Application({
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    backgroundColor: 0x000000,
  })

  document.body.appendChild(app.view)


  const ball = new Graphics()
  ball.beginFill(0xffffff)
  ball.drawCircle(0, 0, 50)
  ball.endFill()
  ball.x = app.screen.width / 2
  ball.y = app.screen.height / 2
  app.stage.addChild(ball)

  let speed = 10
  let direction = 1.9
  let vx = Math.cos(direction) * speed
  let vy = Math.sin(direction) * speed

  let ballX = ball.x
  let ballY = ball.y

  app.ticker.add(() => {

    ballX += vx
    ballY += vy

    ball.x = ballX
    ball.y = ballY

    if (ball.x <= ball.width / 2 || ball.x >= app.screen.width - ball.width / 2) {

      direction = Math.PI - direction

      vx = Math.cos(direction) * speed
      vy = Math.sin(direction) * speed
    } else if (ball.y <= ball.height / 2 || ball.y >= app.screen.height - ball.height / 2) {
      direction = 2 * Math.PI - direction
      vx = Math.cos(direction) * speed
      vy = Math.sin(direction) * speed
    }

  })
  // console.log(Math.sin(2))

  // 左边界内 ball.x > ball.width/2 =》 ball.width/2
  // 右边界内 ball.x < app.screen.width - ball.width/2 =》 app.screen.width - ball.width/2
  // 上边界内 ball. > ball.height/2 =》 ball.height/2
  // 下边界内 ball.y < app.screen.height - ball.height/2 =》 app.screen.height - ball.height/2


}

main()