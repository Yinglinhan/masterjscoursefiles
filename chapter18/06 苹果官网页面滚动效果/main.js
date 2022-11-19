const canvas = document.getElementById("myCanvas");
canvas.style.backgroundColor='#212121';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

const imgArr = []
let drawImgIndex = 0
function calStartPos(imgSize,canvasSize){

    const pos = {
        x:0,
        y:0
    }

    if(canvasSize.width > imgSize.width){
        pos.x = (canvasSize.width - imgSize.width)/2
    }
    if(canvasSize.height > imgSize.height){
        pos.y = (canvasSize.height - imgSize.height)/2
    }
    return pos
}



function init(imgArr){
    for(let i=1;i<65;i++){
        const img = new Image()
        if(i<10){
            img.src = `./assets/000${i}.png`
        }else{
            img.src = `./assets/00${i}.png`
        }
        imgArr.push(img)
        
    }
}

init(imgArr)


function drawImg(img){
        const startPos =  calStartPos({
        width:img.width,
        height:img.height
       },
       {
           width:canvas.width,
           height:canvas.height
       }
       )
        ctx.drawImage(img, startPos.x, startPos.y,img.width,img.height);
}

function clearImg(){

}

// img.addEventListener('load',(e)=>{
   

//     // const startPos =  calStartPos({
//     //     width:img.width,
//     //     height:img.height
//     //    },
//     //    {
//     //        width:canvas.width,
//     //        height:canvas.height
//     //    }
//     //    )
//     // ctx.drawImage(img, startPos.x, startPos.y,img.width,img.height);

// })

// img.src= './assets/0001.png'

setTimeout(()=>{

    drawImg(imgArr[drawImgIndex])
},1000)

document.addEventListener('wheel',(e)=>{
    
    if(Math.abs(e.deltaY) > 10){
        if(e.deltaY < 0 && drawImgIndex > 0){
            drawImgIndex--

        }else if(e.deltaY > 0 &&  drawImgIndex < 63){
            drawImgIndex++
        }
        ctx.clearRect(0,0,innerWidth,innerHeight)
        console.log(drawImgIndex)
        drawImg(imgArr[drawImgIndex])
    }
    
    //drawImg
})