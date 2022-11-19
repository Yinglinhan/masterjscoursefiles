// canvas 元素可以使用任意多个
// 不要用css的方式 或者 style 进行设置宽高

const canvas = document.getElementById('myCanvas')
canvas.width = 500
canvas.height = 500

canvas.style.border='2px solid black'

// console.log(canvas)
//getContext context 上下文 环境的意思

const ctx = canvas.getContext('2d')

// console.log(ctx)


// fillRect(x, y, width, height)
// ctx.fillRect(100,100,100,100)
// ctx.strokeRect(300,300,100,100)


//只能绘制两种类型 矩形 路径


// 首先 要有一个起笔点 
// moveTo(x,y)
// lineTo(x,y) 绘制到哪个坐标点
// stroke() 描边
// 绘制完的路径 模认是透明 需要额外的命令去上色
// 一定要明确起笔点的位置
// 每次绘制完路径之后 笔尖就是落在绘制的路径的结尾点
// arc(x, y, radius, startAngle, endAngle, counterclockwise ) // 绘制弧度 用角度值
// 最后一个参数 传true 就是逆时针，如果不传 或者false 就是顺时针绘制
// 注意 arc方法的真正的起始绘制点 是设定的圆心坐标 右侧 横坐标加上绘制半径

// lineWidth  线段的宽度
// strokeStyle 描边颜色


// 路径绘制可以进行分组
// 每次绘制的时候 是对当前组进行绘制
// 默认是有一个分组

// beginPath 创建一个路径组 路径层 

// closePath 不是结束路径 只是闭合路径

// fill 自动填充封闭的形状

// ctx.moveTo(50,50)
// ctx.globalAlpha = 0.2
ctx.lineCap = "round";
// ctx.lineJoin = "round";
ctx.beginPath()
ctx.lineWidth = 20
ctx.strokeStyle = 'red'

ctx.moveTo(50,50)
ctx.lineTo(100,100)
ctx.lineTo(50,100)
ctx.closePath()
// ctx.lineTo(50,50)
// ctx.moveTo(100,120)
// ctx.lineTo(100,150)

ctx.fill()
ctx.stroke()
ctx.lineTo(200,120)
ctx.stroke()

// console.log(11)
ctx.beginPath()
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.lineWidth = 10
ctx.moveTo(200,230)
ctx.arc(200,200,30,Math.PI/2,Math.PI)
// ctx.lineTo(500,500)
ctx.stroke()

// fillStyle 修改填充颜色
/* 

arcTo(x1, y1, x2, y2, radius)

quadraticCurveTo(cp1x, cp1y, x, y) 二次贝塞尔曲线

bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) 三次贝塞尔曲线

rect(x, y, width, height) 矩形路径（会自动调用moveTo方法）

path2D


globalAlpha = transparencyValue  0～1
fillStyle
strokeStyle rgba (r,g,b,透明度) 0-1

1. 绘制路径时一定要注意 这个笔在哪里 哪里是起笔点 绘制完后笔停留在哪里 非常重要
2. 路径 显示绘制隐形的 最后要上色
3. 绘制路径的逻辑是特有的 其他的比如 矩形 文字 没有那个起笔落笔的逻辑


*/

// clearRect(x, y, width, height) // 清除 橡皮擦的功能