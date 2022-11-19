const canvas = document.getElementById('myCanvas')
canvas.width = 800
canvas.height = 800
// canvas.style.backgroundColor = 'black'
canvas.style.border = '1px solid black'

const showCircle = document.getElementById('show-color-circle')
const selectedCircle = document.getElementById('selected-color-circle')
const ctx = canvas.getContext('2d')

const img = new Image()
img.src = './imgs/stone.jpg'

img.onload = () => {
    ctx.drawImage(img, 0, 0)
}

function getColor(event, target) {
    const imgData = ctx.getImageData(event.offsetX, event.offsetY, 1, 1)
    // console.log(imgData)
    const data = imgData.data
    const colorData = `rgba(${data[0]},${data[1]},${data[2]},${data[3] / 255})`

    target.style.backgroundColor = colorData
}

canvas.addEventListener('mousemove', (e) => {
   
    getColor(e, showCircle)

})

canvas.addEventListener('click', (e) => {
    getColor(e, selectedCircle)
})
