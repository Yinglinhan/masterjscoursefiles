const canvas = document.getElementById('myCanvas')
canvas.width = 800
canvas.height = 800

canvas.style.border = '1px solid black'


const ctx = canvas.getContext('2d')

const imgData = ctx.createImageData(100, 100)
console.log(imgData)
// rgb 
// Uint8ClampedArray  数组 8 位无符号整型固定数组
// 8位 就是 8比特 = 1字节
// 定型数组
// 一个字节 转换成十进制的话 0-255 
// [0,false,{},[],'123']

// ctx.createImageData(width, height)  返回 ImageData 对象

// ctx.getImageData(left, top, width, height); 返回 ImageData 对象

//

// ctx.putImageData(myImageData, dx, dy);