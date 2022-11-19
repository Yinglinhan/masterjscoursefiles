
const canvas = document.getElementById('myCanvas')
canvas.width = 800
canvas.height = 800

canvas.style.border='2px solid black'


const ctx = canvas.getContext('2d')

// translate(x, y) 位移 以坐标系的当前状态为基础 沿着x轴或者y轴移动

// rotate(angle) 旋转 传入的是弧度值 顺时针方向 旋转起始点 原点右侧
// radians（弧度值） = (Math.PI/180)*degrees
// 永远以坐标系原点为旋转中心
// 每次传入的值都是要转动的角度 不是累加

// scale(x,y)
// 以自己轴线为缩放参考线 可以是负数 负数就会有镜像的效果
// ctx

// ctx.scale(0.5,0.5)
// ctx.scale(-1, 1);
// ctx.font = '48px serif';
// ctx.fillText('MDN', -135, 120);


// ctx.lineWidth = 8
// ctx.lineCap='round'

// ctx.moveTo(220,200)
// ctx.arc(200,200,20,0,Math.PI*2)
// ctx.stroke()
// ctx.translate(200,200)

// ctx.rotate(-(Math.PI/180)*90)
// ctx.moveTo(36,0)
// ctx.lineTo(50,0)
// ctx.stroke()

// for(let i = 0;i<7;i++){
//   ctx.rotate((Math.PI/180)*45)
//   ctx.moveTo(36,0)
//   ctx.lineTo(50,0)
//   ctx.stroke()
// }
