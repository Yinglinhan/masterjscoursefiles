const canvas = document.getElementById('myCanvas')


canvas.width = 800
canvas.height = 800

canvas.style.border = "1px solid gray"

const ctx = canvas.getContext('2d')

const img = new Image()
img.src = './imgs/stone.jpg'

img.onload = function () {
    ctx.drawImage(img, 0, 0, 100, 100, 100, 100, 400, 100)
}
//

//img

// 图片跨域问题
// hellcode.fun
// hellcode.fun/img.png
// baidu.com/xx/xx.png

// drawImage(image, x, y, width, height)

// 裁切绘制的作用 drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
// sourceX sourceY