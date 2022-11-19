const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let prePos = {
    x:0,
    y:0
}

canvas.addEventListener('mousemove',(e)=>{
    console.log(e.clientX,e.clientY)
    // panDraw(ctx,e.clientX,e.clientY)
    panLineDraw(ctx,e.clientX,e.clientY,prePos)
})

canvas.addEventListener('mousedown',(e)=>{

})

canvas.addEventListener('mouseup',(e)=>{

})


// function panDraw(ctx,x,y){
//     ctx.moveTo(x-2,y);
//     ctx.arc(x,y,2,0,Math.PI *2,true)
//     ctx.fill()
// }


function panLineDraw(ctx,x,y,prePos){
    if(prePos.x === 0 && prePos.y === 0){
        prePos.x = x
        prePos.y = y
        return
    }else{
        // ctx.beginPath()
        ctx.moveTo(prePos.x,prePos.y)
        ctx.lineTo(x,y)
        ctx.stroke()
        prePos.x = x
        prePos.y = y
    }
}