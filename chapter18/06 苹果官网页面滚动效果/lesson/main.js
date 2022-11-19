const canvas = document.getElementById('myCanvas')
canvas.width = innerWidth
canvas.height = innerHeight
canvas.style.backgroundColor = 'black'


const ctx = canvas.getContext('2d')
const imgsArr = []
function calDrawStartPos(img) {
    const x = (canvas.width - img.width) / 2
    const y = (canvas.height - img.height) / 2
    return {
        x, y
    }
}

function init() {
    for (let i = 1; i < 65; i++) {
        const img = new Image()
        if (i < 10) {
            img.src = `./assets/000${i}.png`
        } else {
            img.src = `./assets/00${i}.png`
        }
        imgsArr.push(img)
    }
}

init()
// console.log(imgsArr)



//drawImage(image, x, y)

// window.onresize = (e) => {
//     canvas.width = innerWidth
//     canvas.height = innerHeight
//     const startPos = calDrawStartPos(img1)
//     console.log(startPos)
//     ctx.drawImage(img1, startPos.x, startPos.y)

// }

// img1.onload = (e) => {
//     const startPos = calDrawStartPos(e.target)
//     ctx.drawImage(e.target, startPos.x, startPos.y)
// }

let imgCount = 0

// function draw(img){

// }
setTimeout(() => {
    const startPos = calDrawStartPos(imgsArr[0])

    // console.log(imgCount, 'up')
    ctx.drawImage(imgsArr[0], startPos.x, startPos.y)
}, 500)

window.addEventListener('wheel', (e) => {
    // console.log(e.deltaY)

    if (e.deltaY > 5 && imgCount < 64) {
        const startPos = calDrawStartPos(imgsArr[imgCount])
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        console.log(imgCount, 'up')
        ctx.drawImage(imgsArr[imgCount], startPos.x, startPos.y)
        imgCount++
    } else if (e.deltaY < -5 && imgCount > 1) {

        const startPos = calDrawStartPos(imgsArr[imgCount])
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // console.log(imgCount, imgsArr[imgCount], 'down')
        imgCount--
        ctx.drawImage(imgsArr[imgCount], startPos.x, startPos.y)

    }
})

