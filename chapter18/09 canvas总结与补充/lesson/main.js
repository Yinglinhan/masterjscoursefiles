const canvas = document.getElementById('myCanvas')
canvas.width = 800
canvas.height = 800

canvas.style.border = '1px solid black'

const img = document.getElementById('img')
const a = document.getElementById('aaa')

const ctx = canvas.getContext('2d')

const step = 1
const initPos = {
  x: 200,
  y: 200
}

// 擦除 不能擦除路径 只能擦除在画板上已经绘制的图形
// function draw(x,y) {

//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   ctx.beginPath()
//   ctx.moveTo(initPos.x + 20, initPos.y)
//   ctx.arc(initPos.x, initPos.y, 20, 0, Math.PI * 2)
//   ctx.fill()

//   initPos.x += step
//   requestAnimationFrame(()=>{
//     draw(1,2)
//   })
// }

// draw()
ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.beginPath()
ctx.moveTo(initPos.x + 20, initPos.y)
ctx.arc(initPos.x, initPos.y, 20, 0, Math.PI * 2)
ctx.fill()


const data = canvas.toDataURL('image/png')
console.log(data)
img.src = data
a.href = data