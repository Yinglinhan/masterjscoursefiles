

  const canvas = document.getElementById('myCanvas');
  
  canvas.width = 800
  canvas.height = 800
  
  canvas.style.border='1px solid black'
  
  const ctx = canvas.getContext('2d');

  
  // save 保存状态 绝大部分画笔样式设定 坐标系的变化
  // 不会保存画笔的起笔点 落笔点 不会保存当前画布上的内容
  // restore 取出状态 只能是最近一次保存的相关的设置


  ctx.save()

  ctx.lineWidth = 6
  ctx.moveTo(100,100)
  ctx.lineTo(100,150)
  ctx.stroke()

  ctx.save()
  ctx.beginPath()
  ctx.lineWidth = 10
  ctx.moveTo(120,100)
  ctx.lineTo(120,150)
  ctx.stroke()
  ctx.restore()
  ctx.save()
  ctx.beginPath()
  ctx.lineWidth = 20
  ctx.moveTo(150,100)
  ctx.lineTo(150,150)
  ctx.stroke()

  ctx.save()
  
  ctx.beginPath()
  ctx.moveTo(190,100)
  ctx.lineTo(190,150)
  ctx.restore()
  ctx.restore()
  ctx.restore()
  ctx.restore()
  ctx.stroke()