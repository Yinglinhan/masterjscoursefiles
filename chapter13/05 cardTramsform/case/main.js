
/* 
整体代码是用class作为组织方式

*/

// 可以拖动的圆点
// 这个类里面都是静态方法和静态属性 因为是只有一个 不用重复创建 我就用这种方式来组织代码
class SlideBar {
  // 整体bar的父元素
  static controlBarDom = document.querySelector('.control-bar')
  // 拖动的圆点
  static touchCircle = this.controlBarDom.querySelector('.touch-circle')
  // 随着圆点拖动出现的白色进度条
  static progressLine = this.controlBarDom.querySelector('.progress-line')
  // 随着圆点拖动实现文字大小变化的底部文字
  static controlText = document.querySelector('.card-titles')

  // 拖动相关的数据存放对象
  static moveInfo = {}

  // 设定相关事件回调
  static setEvents(){

    // touchstart 事件
    this.touchCircle.addEventListener('touchstart', (e)=>{

      // 因为只是横向拖动 所以主要记录两个数据
      // 一个是手指按下去时候的x坐标点  然后是按下去的时候 圆点已经有的transform的值 因为有可能圆点并不是在初始位置

      const transform = getComputedStyle(this.touchCircle).transform
      const matrix = new DOMMatrixReadOnly(transform)

      // touchstart时圆点已经有的transform translateX的值
      this.moveInfo.basicTransX = Math.round(matrix.m41)

      // touchstart时手指的点击到的x轴坐标
      this.moveInfo.startX = Math.round(e.changedTouches[0].clientX)

    })


    // touchmove 事件
    this.touchCircle.addEventListener('touchmove', (e)=>{
      
      // 防止页面上下滚动 这里比用touch-action pan-x 的效果好
      e.preventDefault()

      // 移动中手指的x坐标 减去 一开始start的x坐标 + 已有的translateX的值
      let transX = e.changedTouches[0].clientX - this.moveInfo.startX + this.moveInfo.basicTransX
      
      // 设定可以拖动的边界
      if(transX < 0){
        // 无法超过初始位置
        transX = 0
      }else if(transX > this.moveInfo.moveSpanWidth){
        // 无法拖动超过最大拖动距离 
        transX = this.moveInfo.moveSpanWidth
      }
      
      // 已拖动距离和最大移动距离的比例 利用这个比例用来控制字号大小
      const ration = transX / this.moveInfo.moveSpanWidth

      // 通过利用比例值实现控制字体的大小
      this.controlText.style.fontSize = this.moveInfo.fontSize * (1 + ration) + 'px'

      // 圆点的被拖动的效果 就是改变圆点的translateX
      e.currentTarget.style.transform = `translateX(${transX}px)`

      // 进度条跟随圆点的效果 同步改变白色进度条的translateX
      this.progressLine.style.transform = `translateX(-${ this.moveInfo.moveSpanWidth - transX}px)`



    },{passive:false})

  }

  // 进行一些基础计算的方法
  static basicCal(){
    // 计算下圆点的最大移动距离 并记录到moveInfo这个对象中
    const moveSpanWidth = this.controlBarDom.getBoundingClientRect().width - this.touchCircle.getBoundingClientRect().width
    this.moveInfo.moveSpanWidth = Math.round(moveSpanWidth)

    // 获取到字体的初始大小
    this.moveInfo.fontSize = parseInt(getComputedStyle(this.controlText).fontSize)
  }

  // 这个类的一些初始化要调用的方法
  static sliderinit(){
    this.basicCal()
    this.setEvents()
  }

}




// Card类 负责大卡片和小卡片
// 还是把原来的DOM中的相关大卡片小卡片获取到作为模板 利用JS创建更多不同内容的大小卡片
// 这里有constructor 构造函数  因为要创建很多个大小卡片的实例
class Card {
  // 大卡片模板
  static mockCard = document.querySelector('.one-card')

  // 小卡片模板
  static mockLittleCard = document.querySelector('.card-color-board')

  // 获取大卡片的基本尺寸信息
  static basicCardInfo = this.mockCard.getBoundingClientRect()

  // 获取大卡片的父元素
  static cardStage = document.querySelector('.card-stage')

  // 获取小卡片的父元素
  static littleCardBox = document.querySelector('.card-click-stage')
  

  constructor(cardData){
    // 克隆大小卡片 到 实例对象中保存
    this.dom = Card.mockCard.cloneNode(true)
    this.littleCardDom = Card.mockLittleCard.cloneNode(true)
    // 初始化大小卡片的内容样色等
    this.initCardContent(cardData)

  }

  // 初始化大小卡片内容的方法 注意 这是原型方法 不是静态方法
  initCardContent(cardData){
    const {texts, color, detailText,imgUrl,colorName} = cardData
    this.dom.style.backgroundColor = color

    this.dom.firstElementChild.firstElementChild.innerText = detailText
    this.dom.firstElementChild.lastElementChild.src = imgUrl

    this.littleCardDom.style.backgroundColor = color

    this.littleCardDom.firstElementChild.innerText = colorName[0].toUpperCase()
  }
  // 设置大卡片的宽和高 可以保证每个卡片的尺寸一模一样 注意 这是原型方法 不是静态方法
  setCardSize(){
    this.dom.style.width = Card.basicCardInfo.width + "px"
    this.dom.style.height = Card.basicCardInfo.height + "px"
  }

  // 把大卡片添加到相应父元素中 注意 这是原型方法 不是静态方法
  appendCard(){
    Card.cardStage.appendChild(this.dom)
  }

  // 把小卡片添加到相应父元素中 注意 这是原型方法 不是静态方法
  appendLittleCard(){
    Card.littleCardBox.appendChild(this.littleCardDom)
  }

  // 把模板卡片在节点树上删除
  static cardRemove(){
    this.mockCard.remove()
    this.mockLittleCard.remove()
  }

}

// 这个AppController类型 是用来设定整个页面一些具体交互的
// 因为他不需要实例 所以 我这里都用静态属性和静态方法

class AppController {
  // 创建的所有Card实例都要放到这个数组中，以便后续使用
  static allCards = []
  // 所有大卡片的父元素
  static cardStage = document.querySelector('.card-stage')

  // 当前出现在页面中的大卡片的索引位  对应的就是allCards这个数组中的索引位
  static currentIndex = 0

  // 所有卡片的信息数据
  static cardsDatas = [
    // texts,color,detailText,imgUrl
    {
      texts:['Keep',"Learning","Code"],
      color:'#4700D8',
      colorName:'blue',
      detailText:'There are going to be days where you’re undone, stressed out, tired, spent. And I’ll still love you just as much in those moments as I ever have, maybe even a little more, because it’ll mean you let me get close enough to know the real you. That’s all I want. ',
      imgUrl:'src/img/page1.png'
    },
    {
      texts:['Coding',"Is","Fun"],
      color:'#E84A5F',
      colorName:'red',
      detailText:'Ask me to define my love for you and I’ll say it’s captured in every beautiful memory of our past, detailed out in the vivid visions of our dreams, and future plans, but most of all it’s right now, in the moment where everything I’ve ever wanted in my life is standing right in front of me and smiling. ',
      imgUrl:'src/img/page2.png'
    },
    {
      texts:["Create","Some","Difference"],
      color:'#17B978',
      colorName:'Green',
      detailText:'I love you the way a drowning man loves air. And it would destroy me to have  you just a little.',
      imgUrl:'src/img/page3.png'
    },
    {
      texts:['Never',"Stop","Learning"],
      color:'#892CDC',
      colorName:'purple',
      detailText:'There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.',
      imgUrl:'src/img/page4.png'
    },
    {
      texts:['Enjoy',"Your","Time"],
      color:'#F8CB2E',
      colorName:'yellow',
      detailText:'The problems of your past are your business. The problems of your future are my privilege.',
      imgUrl:'src/img/page5.png'
    }
  ]


  // 创建卡片的方法
  // 创建的同时 把卡片依次添加到 allCards这个数组中
  static  createCards(){
    this.cardsDatas.forEach( (cardData,index)=> {
      this.allCards.push(new Card(cardData))
    })
  }


  // 把添加到allCards这个数组中的所有卡片进行初始化
  static cardsInit(){

    this.allCards.forEach( (cardInstance,index)=> {
      
      if(index === 0 ){
        // 只把第一个卡片直接添加到DOM中进行显示
        cardInstance.appendCard()
      }else{
        
        // 其他的卡片先做基本的样式改变 比如透明度为0  再添加到文档树中 这样就看不到了
        // 改变他的定位方式为absolute 这样卡片可以重叠在一起
        cardInstance.littleCardDom.style.transform = 'scale(0.9)';
        cardInstance.dom.style.position = 'absolute';
        cardInstance.dom.style.top = '2rem';
        cardInstance.dom.style.transform = 'translateY(60px)';
        cardInstance.dom.style.opacity = 0
        cardInstance.appendCard()

      }

      // 设置大卡片的大小
      cardInstance.setCardSize()
      // 添加相应的小卡片到文档树中
      cardInstance.appendLittleCard()
    })
  }

  // 设定相应的事件 来实现交互效果
  static setUpEvents(){

    // 计算卡片的旋转中心点坐标  以及 卡片的一半宽  一半高的数据
    // 通过这两个数据 和 手指点击的坐标点进行比较
    function calCenterPos(cardInfo){

      const x = Math.round(cardInfo.width / 2) + Math.round(cardInfo.left)
      const y = Math.round(cardInfo.height /2) + Math.round(cardInfo.top)

      return {
        x,y,hw:Math.round(cardInfo.width /2),hh:Math.round(cardInfo.height /2)
      }
    }

    // 这个方法就是用来实现手指touch 大卡片 卡片旋转的效果
    function cardTransMove(e,type){

      if(type === 'move'){
        this.allCards[this.currentIndex].dom.style.transition = 'none'
      }else{
        this.allCards[this.currentIndex].dom.style.transition = `transform 0.1s 0s ease-in-out`
      }


      const centerPos = calCenterPos(e.currentTarget.getBoundingClientRect())


      const touchX = Math.round(e.changedTouches[0].clientX)
      const touchY = Math.round(e.changedTouches[0].clientY)


      // 获取到手指的触摸点和旋转中心的店的两个轴向的距离
      const disX = centerPos.x - touchX
      const disY = centerPos.y - touchY

      /* 
      
      x 正 左侧 x负 右侧

      y 正 上方  y负 下方
      
      */

      // 两个轴向的距离分别和大卡片的半边距离进行比较 获得相应的两个轴向的比例
      const rationX = disX / centerPos.hw
      const rationY = disY / centerPos.hh

      
      setTimeout(()=>{
        // 利用两个轴向的比例值 乘以 最大的旋转角度值 分别是rotateY 和 rotateX的变化 就能实现上下左右同时切斜的效果
        this.allCards[this.currentIndex].dom.style.transform = `rotateY(${-10 * rationX}deg) rotateX(${10 * rationY}deg)`
      },1)

    }


    // touchstart 事件 注意 这些事件都绑定在在大卡片的父元素上
    this.cardStage.addEventListener('touchstart', (e)=>{
      // 注意这里用call进行调用 是为了让cardTransMove这个方法中的this在该函数调用时可以指向正确的对象
      // this 指向的是 AppController 这个class
      cardTransMove.call(this,e,'start')
    })

    // touchmove 事件
    this.cardStage.addEventListener('touchmove', (e)=>{
      // 阻止默认行为 在卡片上滑动的时候 不会让页面上下滚动
      e.preventDefault() 
      cardTransMove.call(this,e,'move')
    },{passive:false})

    // touchend 事件
    this.cardStage.addEventListener('touchend', (e)=>{
      // 给当前在页面中显示的卡片设定transition
      this.allCards[this.currentIndex].dom.style.transition = 'all 0.5s ease-in-out'

      // 让卡片有一个回复默认状态的一个动画效果
      setTimeout(()=>{
        this.allCards[this.currentIndex].dom.style.transform = `rotateY(0deg) rotateX(0deg)`
      },1)

    })

    // 遍历Card的实例 并给小卡片设置相应事件的回调 
    // 这里主要是用来实现方式手指横滑也会触发页面切换 
    // 只有手指从点击到离开 手指没有变得情况下 才会触发卡片的切换效果
    this.allCards.forEach( (cardInstance,index)=>{

     let touchPos = {}
      cardInstance.littleCardDom.addEventListener('touchstart', (e)=>{
        //  记录下手指点击的位置
        touchPos.x = e.changedTouches[0].clientX
        touchPos.y = e.changedTouches[0].clientY
      })

      cardInstance.littleCardDom.addEventListener('touchend',(e)=>{
        // 比较下手指离开后的位置信息 完全一致才算没有滑动 才算是点击操作 （其实可以有少量移动 ）
        if(touchPos.x === e.changedTouches[0].clientX && touchPos.y === e.changedTouches[0].clientY){
          // 大卡片的整体切换动画
          this.cardAnimation(index)
        }
      })
    })
    
  }
  
  // 点击小卡片的小卡片大小变化的效果
  static hintCardAni(touchIndex){

    this.allCards.forEach((card,index)=>{
        
        if(touchIndex !== index){
          card.littleCardDom.style.transform = 'scale(0.9)'
        }else{
          card.littleCardDom.style.transform = 'scale(1)'
        }
    })

  }

  // 大卡片的整体切换动画效果
  static cardAnimation(index){
    // 这里做一个判断 是用来避免传入的index是本来已经在当前显示的卡片的index的值 这样就不必执行了
   if(index !== this.currentIndex){
    this.allCards[index].dom.style.transition = 'all 0.5s 0.35s ease-in-out'
    this.allCards[index].dom.style.zIndex = 2
    
  
    this.allCards[this.currentIndex].dom.style.transition = 'all 1s ease-in-out'
    this.allCards[this.currentIndex].dom.style.zIndex = 1

    this.hintCardAni(index)

    setTimeout(()=>{
      // 卡片小时
      this.allCards[this.currentIndex].dom.style.opacity = 0
      this.allCards[this.currentIndex].dom.style.transform = 'translateY(60px)'

      // 卡片出现
      this.allCards[index].dom.style.opacity = 1
      this.allCards[index].dom.style.transform = 'translateY(0px)'
      this.currentIndex = index
    },1)
    
   }

    
  }



  // 整体初始化方法 所有其他的类的初始化等方法都在这里调用
  static appInit(){

    const container = document.querySelector('.container');
    // 把最外层容器元素的宽度 设置为 屏幕宽度
    container.style.width = document.documentElement.clientWidth + 'px';

    SlideBar.sliderinit()
    Card.cardRemove()
    this.createCards()
    this.cardsInit()
    this.setUpEvents()

  }
}

// 调用初始化方法
AppController.appInit()