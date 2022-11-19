const canvas = document.getElementById('myCanvas')


canvas.width = 800
canvas.height = 800

canvas.style.border="1px solid gray"

const ctx = canvas.getContext('2d')

const prePos = {
    x:0,
    y:0
}

let writable = false

//mousemove
canvas.addEventListener('mousemove',(e)=>{
    console.log(e.offsetX,e.offsetY)
    if(writable){
        draw(e.offsetX,e.offsetY,ctx,prePos)
    }
})

canvas.addEventListener('mousedown',(e)=>{
    writable = true
    prePos.x = e.offsetX
    prePos.y = e.offsetY
})

canvas.addEventListener('mouseup',(e)=>{
    writable = false
})


// lineTo
function draw(x,y,ctx,prePos){
    // 第一次触发
    if(prePos.x === 0 && prePos.y === 0){
        prePos.x = x
        prePos.y = y
    }else{
        ctx.moveTo(prePos.x,prePos.y)
        ctx.lineTo(x,y)
        prePos.x = x
        prePos.y = y
        ctx.stroke()
    }
    // ctx.moveTo(x+10,y)
    // ctx.arc(x,y,10,0,Math.PI*2)
    // ctx.fill()
}

