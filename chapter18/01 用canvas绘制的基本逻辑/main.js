const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = 4
    ctx.lineCap = 'round';
    ctx.arc(75, 75, 10, 0, Math.PI * 2, true); // Outer circle

    ctx.moveTo(83, 83)
    ctx.lineTo(92,92)

    // ctx.arc(300, 300, 10, 0, Math.PI * 2, true); // Outer circle
    // // ctx.arc(400, 300, 10, 0, Math.PI * 2, true); // Outer circle



    ctx.moveTo(200,200)
    ctx.lineTo(200,170)
    // ctx.moveTo(210, 170)
    ctx.arc(205, 170, 5, Math.PI , Math.PI * 1.5 , false);
    ctx.lineTo(230,165)
    ctx.arc(230, 170, 5, Math.PI * 1.5 , Math.PI * 2 , false)
    ctx.lineTo(235,200)
    ctx.arc(230, 200, 5, 0 , Math.PI / 2 , false)
    ctx.lineTo(210,205)
    ctx.arc(205, 200, 5, Math.PI / 2 , Math.PI , false)


    ctx.moveTo(310,300)

    ctx.arc(300, 300, 10, 0, Math.PI * 2, true)

    ctx.moveTo(300,282)
    ctx.lineTo(300,278) // 上
    ctx.moveTo(314,288)
    ctx.lineTo(318,284) // 右上
    ctx.moveTo(318,300)
    ctx.lineTo(322,300) // 右侧
    ctx.moveTo(315,313)
    ctx.lineTo(319,316) // 右下
    ctx.moveTo(300,318)
    ctx.lineTo(300,322) // 下
    ctx.moveTo(286,313)
    ctx.lineTo(283,317) // 左下
    ctx.moveTo(282,300)
    ctx.lineTo(278,300) // 左侧
    
    ctx.moveTo(287,287)
    ctx.lineTo(282,283)


    ctx.stroke();


    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    // ctx.stroke();


    // function draw() {
    //   const canvas = document.getElementById('myCanvas');
    //   if (canvas.getContext) {
    //     const ctx = canvas.getContext('2d');
    
    //     for (let i = 0; i < 4; i++) {
    //       for (let j = 0; j < 3; j++) {
    //         ctx.beginPath();
    //         const x = 25 + j * 50; // x coordinate
    //         const y = 25 + i * 50; // y coordinate
    //         const radius = 20; // Arc radius
    //         const startAngle = 0; // Starting point on circle
    //         const endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
    //         const counterclockwise = i % 2 !== 0; // clockwise or counterclockwise
    
    //         ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
    
    //         if (i > 1) {
    //           ctx.fill();
    //         } else {
    //           ctx.stroke();
    //         }
    //       }
    //     }
    //   }
    // }
    

    // draw()