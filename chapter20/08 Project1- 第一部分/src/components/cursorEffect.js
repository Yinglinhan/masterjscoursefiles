
export function cursorInit() {







  // 内部小圆点
  const centerDot = $('.mousePoint')
  // console.log(centerDot)

  // getComputedStyle


  // 小圆点变大圆点
  const allElements = $('div[data-bigdot=true]')
  // console.log(allElements)
  allElements.hover(() => {
    // console.log('移入')
    centerDot.addClass('bigDot')
  }, () => {
    // console.log('移出')
    centerDot.removeClass('bigDot')
  })


  // 外环
  paper.setup('myCanvas')
  const circle = new paper.Path.Circle(new paper.Point(300, 300), 20)
  circle.strokeColor = '#dcff7d'
  circle.strokeWidth = 2


  const tool = new paper.Tool()

  let lastX = 0
  let lastY = 0

  let mouseX = 0
  let mouseY = 0

  tool.onMouseMove = function (e) {
    mouseX = e.point.x
    mouseY = e.point.y
  }

  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  paper.view.onFrame = function () {

    lastX = lerp(lastX, mouseX, 0.2)
    lastY = lerp(lastY, mouseY, 0.2)

    circle.position = new paper.Point(lastX, lastY)
    const centerDotHeight = centerDot.height()
    const centerDotWidth = centerDot.width()
    centerDot.css(
      'transform',
      `translateX(${mouseX - centerDotWidth / 2}px) translateY(${mouseY - centerDotHeight / 2}px)`
    )


  }




}