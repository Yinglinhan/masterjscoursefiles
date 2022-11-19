function clock() {
  const now = new Date();
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.save();
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(300, 300);
  // ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'white';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';

  // Hour marks
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (let i = 0; i < 1; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hr  = now.getHours() % 12;

  ctx.fillStyle = 'black';

  // Write image description
  canvas.innerText = `The time is: ${hr}:${min}`; 

  // // Write Hours
  ctx.save();
  ctx.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // // Write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(-18, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();
  ctx.restore();

  // // Write seconds
  ctx.save();
  ctx.rotate(sec * Math.PI / 30);
  ctx.strokeStyle = '#D46666';
  // ctx.fillStyle = '#D40000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();

  ctx.restore();

 
  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
