const canvas = document.getElementById('myCanvas')

canvas.width = 800
canvas.height = 800

canvas.style.border = '1px solid black'

const ctx = canvas.getContext('2d')



function drawClock() {
  const now = new Date()

  const hours = now.getHours() % 12 // 0 ~ 23   -> 0 ~ 11
  const mins = now.getMinutes() // 0 ~ 59
  const secs = now.getSeconds() // 0 ~ 59
  ctx.beginPath()
  // console.log(hours, mins, secs)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.save()

  // ctx.moveTo(400,400)
  ctx.translate(400, 400)
  ctx.rotate(-Math.PI / 2)
  ctx.save()
  for (let i = 0; i < 12; i++) {

    if (i !== 0) {
      ctx.rotate(Math.PI / 6)
    }
    ctx.moveTo(130, 0)
    ctx.lineTo(150, 0)
    ctx.stroke()

  }

  ctx.restore()

  ctx.save()

  ctx.beginPath()
  ctx.lineWidth = 6
  ctx.lineCap = 'round'
  const hourRotate = hours * (Math.PI / 6) + mins * ((Math.PI / 360)) + secs * ((Math.PI / 21600))
  ctx.rotate(hourRotate)
  ctx.moveTo(-10, 0)
  ctx.lineTo(100, 0)
  ctx.stroke()

  ctx.restore()
  ctx.save()
  ctx.beginPath()
  ctx.lineWidth = 3
  ctx.lineCap = 'round'
  const minuteRotate = mins * ((Math.PI / 30)) + secs * ((Math.PI / 1800))
  ctx.rotate(minuteRotate)
  ctx.moveTo(-30, 0)
  ctx.lineTo(100, 0)
  ctx.stroke()

  ctx.restore()
  ctx.beginPath()
  ctx.lineWidth = 1
  ctx.lineCap = 'round'
  ctx.strokeStyle = 'green'
  const secRotate = secs * ((Math.PI / 30))
  ctx.rotate(secRotate)
  ctx.moveTo(-50, 0)
  ctx.lineTo(100, 0)
  ctx.stroke()
  ctx.restore()
  ctx.restore()
  requestAnimationFrame(drawClock)
}

requestAnimationFrame(drawClock)