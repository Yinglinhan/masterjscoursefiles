/* 

mouseMove

mouseDrag

mouseDown

mouseUp

*/



window.onload = function () {

  paper.install(window)
  paper.setup('myCanvas')

  let myPath = new Path()
  myPath.strokeColor = 'green'
  myPath.strokeWidth = 10
  myPath.add(new Point(100, 100))
  myPath.add(new Point(200, 200))

  const tool = new Tool()
  tool.onMouseDown = function () {
    console.log(9999)
  }

  view.onFrame = function () {
    // console.log(666)
  }


}

/*

view

Tool

Path

point
*/




// paper.setup('myCanvas')

// // const myPath = new paper.Path()

// // myPath.strokeColor = 'black'

// // myPath.add(new paper.Point(100, 100))
// // myPath.add(new paper.Point(200, 200))

// const circle = new paper.Path.Circle(new paper.Point(100, 100), 30)
// circle.strokeColor = 'black'
// circle.strokeWidth = 10

// //circle.position

// let lastX = 0
// let lastY = 0

// let mouseX = 0

// let mouseY = 0

// const tool = new paper.Tool()
// tool.onMouseMove = function (e) {
//   // console.log(e)
//   // circle.position = e.point
//   mouseX = e.point.x
//   mouseY = e.point.y
// }
// // a-> from  b->to  n -> 强度 （0-1）
// const lerp = (a, b, n) => {
//   return (1 - n) * a + n * b;
// };

/*
100，200，0.2  =》 80+ 40 =〉 120
120，200，0.2 =》 96 + 40 =〉 136
136，200，0.2 =》 108.8 + 40 =〉 148.8


*/



// paper.view.onFrame = function () {

//   lastX = lerp(lastX, mouseX, 0.2)
//   lastY = lerp(lastY, mouseY, 0.2)

//   circle.position = new paper.Point(lastX, lastY)

// }


// requestAnimationFrame


/*
event.downPoint  鼠标按下的点

event.lastPoint 上一次触发点

event.middlePoint  上一次和这次触发的点的中间点

event.delta 和上一次的差值

event.point  当前触发的点

*/
// tool.onMouseDown = function () {
//   console.log(11111)
// }

