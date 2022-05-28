
// Circle

class Circle {
  constructor(){
    this.dom = HintCircle.targetCircle.cloneNode(true)
    this.appendCircle()
  }
  appendCircle(){
    HintCircle.targeContainer.appendChild(this.dom)
  }

  static targeContainer = document.querySelector('.circle-hint')
  static targetCircle = document.querySelector('.circle')
  static circleInit(){
    this.targetCircle.remove()
  }
  
}


// Page
class Page {
  static pageContainer = document.querySelector('.pages-box')
  static pageTarget = document.querySelector('.one-page')
  static pageInit(){
    this.pageTarget.remove()
  }
  constructor(pageData){
      this.dom = Page.pageTarget.cloneNode(true)
      this.initContent(pageData)
      this.appendPage()
  }

  appendPage(){
    Page.pageContainer.appendChild(this.dom)
  }
  
  initContent(pageData){
    const {texts,color,detailText,imgUrl} = pageData
    // console.log(texts,color,detailText,imgUrl)

    // 修改大标题
    const spanArr = [...this.dom.querySelector('.page-titles').children]
    spanArr.forEach((span,index)=>{
      span.innerText = texts[index]
    })


    // 修改卡片背景色
    const cardBox = this.dom.querySelector('.page-card')
    cardBox.style.backgroundColor = color

    // 修改卡片文字
    const p = this.dom.querySelector('p')
    p.innerText = detailText

    // 修改图片地址
    const img = this.dom.querySelector('img')
    img.src = imgUrl
  }
}


// 控制类 
class Controller {
  static pagesDatas = [
    // texts,color,detailText,imgUrl
    {
      texts:['Keep',"Learning","Code"],
      color:'#4700D8',
      detailText:'There are going to be days where you’re undone, stressed out, tired, spent. And I’ll still love you just as much in those moments as I ever have, maybe even a little more, because it’ll mean you let me get close enough to know the real you. That’s all I want. ',
      imgUrl:'src/img/page1.png'
    },
    {
      texts:['Coding',"Is","Fun"],
      color:'#E84A5F',
      detailText:'Ask me to define my love for you and I’ll say it’s captured in every beautiful memory of our past, detailed out in the vivid visions of our dreams, and future plans, but most of all it’s right now, in the moment where everything I’ve ever wanted in my life is standing right in front of me and smiling. ',
      imgUrl:'src/img/page2.png'
    },
    {
      texts:["Create","Some","Difference"],
      color:'#17B978',
      detailText:'I love you the way a drowning man loves air. And it would destroy me to have  you just a little.',
      imgUrl:'src/img/page3.png'
    },
    {
      texts:['Never',"Stop","Learning"],
      color:'#892CDC',
      detailText:'There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.',
      imgUrl:'src/img/page4.png'
    },
    {
      texts:['Enjoy',"Your","Time"],
      color:'#F8CB2E',
      detailText:'The problems of your past are your business. The problems of your future are my privilege.',
      imgUrl:'src/img/page5.png'
    }
  ]
  static pageBox = document.querySelector('.pages-box')
  static moveInfo = {}
  static onePageWidth = this.pageBox.getBoundingClientRect().width
  static currentIndex = 0
  static pages = []

  static appInit(){
    const container = document.querySelector('.container')
    console.log(container)
    container.style.height = document.documentElement.clientHeight + 'px'
    container.style.width = document.documentElement.clientWidth + 'px'

    const OnePage = document.querySelector('.one-page')
    OnePage.style.width = document.documentElement.clientWidth + 'px'

    Page.pageInit()
    Circle.circleInit()
    this.createPage()

    this.setupEvents()

  }

  static createPage(){
    this.pagesDatas.forEach( (item,index)=>{
      this.pages.push(new Page(item))
    })
  }
  static createCircle(){

  }

  static setupEvents(){

    this.pageBox.addEventListener('touchstart',(e)=>{



      this.moveInfo.startX = e.changedTouches[0].clientX

      const transform = getComputedStyle(this.pageBox).transform
      const matrix = new DOMMatrixReadOnly(transform)
      this.moveInfo.baseTranslateX = Math.round(matrix.m41)
    })


    this.pageBox.addEventListener('touchmove',(e)=>{

      let currentTransX = e.changedTouches[0].clientX - this.moveInfo.startX + this.moveInfo.baseTranslateX
      
      if(currentTransX > 0 ){
        currentTransX = 0
      }else if(currentTransX < -(this.pagesDatas.length - 1)*this.onePageWidth){
        currentTransX = -(this.pagesDatas.length  - 1)*this.onePageWidth
      }


      this.pageBox.style.transform = `translateX(${currentTransX}px)`

      // 判断是往左还是往右
      const x = e.changedTouches[0].clientX 
      // console.log(x)
      if(x > this.moveInfo.startX){
        // 向右 产生变化的是 当前index 和 上一个index  this.currentIndex
        if(this.currentIndex === 0){
          return
        }
        // console.log('向右')
        this.pages[this.currentIndex].dom.firstElementChild.style.transformOrigin = `right center`
        const ratio = (x - this.moveInfo.startX) / this.onePageWidth

        this.pages[this.currentIndex].dom.firstElementChild.style.transform = `rotateY(-${(25 * ratio).toFixed(1)}deg)`

        this.pages[this.currentIndex - 1].dom.firstElementChild.style.transform = `rotateY(${(25 *( 1- ratio)).toFixed(1)}deg)`



      }else if(x < this.moveInfo.startX){
        
         if(this.currentIndex === this.pages.length - 1){
          return
        }
         // 向左 产生变化的是 当前index 和 下一个index
        // console.log('向左')
        /* 
          滑动距离 和 旋转角度的 一个比例
          滑动距离范围 一个page的宽度  
          旋转角度   0-45
        
        */

          this.pages[this.currentIndex].dom.firstElementChild.style.transformOrigin = `left center`
          // 当前index Page的移动同步旋转
          const ratio = ( this.moveInfo.startX - x) / this.onePageWidth

          this.pages[this.currentIndex].dom.firstElementChild.style.transform = `rotateY(${(25 * ratio).toFixed(1)}deg)`
  
  
          // 下一个index Page的移动同步旋转
          this.pages[this.currentIndex + 1].dom.firstElementChild.style.transform = `rotateY(-${(25 *( 1-ratio)).toFixed(1)}deg)`

         
      }


    })

    // touchend
    this.pageBox.addEventListener('touchend',(e)=>{
      const x = e.changedTouches[0].clientX 

      if(x > this.moveInfo.startX){
        // console.log('向右')
        if(this.currentIndex !== 0){
          this.currentIndex--
        }
        this.pageBox.style.transition = `transform 0.35s ease-in-out`
        this.pages[this.currentIndex + 1].dom.firstElementChild.style.transition = `transform 0.35s ease-in-out`
        this.pages[this.currentIndex].dom.firstElementChild.style.transition = `transform 0.35s ease-in-out`
        setTimeout(()=>{
          this.pageBox.style.transform = `translateX(-${this.onePageWidth * this.currentIndex}px)`
          this.pages[this.currentIndex].dom.firstElementChild.style.transform = `rotateY(0deg)`
          this.pages[this.currentIndex + 1].dom.firstElementChild.style.transform = `rotateY(-25deg)`
        },1)
        
      }else if(x < this.moveInfo.startX){
        // console.log('向左')
        if(this.currentIndex !== this.pageNum - 1){
          this.currentIndex++
        }
        this.pageBox.style.transition = `transform 0.35s ease-in-out`
        this.pages[this.currentIndex - 1].dom.firstElementChild.style.transition = `transform 0.35s ease-in-out`
        this.pages[this.currentIndex].dom.firstElementChild.style.transition = `transform 0.35s ease-in-out`
        setTimeout(()=>{
          this.pageBox.style.transform = `translateX(-${this.onePageWidth * this.currentIndex}px)`
          this.pages[this.currentIndex - 1].dom.firstElementChild.style.transform = `rotateY(25deg)`
          this.pages[this.currentIndex].dom.firstElementChild.style.transform = `rotateY(0deg)`
        },1)
      }
    })

    // transitionend
    this.pageBox.addEventListener('transitionend',(e)=>{
      if(e.target.classList.contains('pages-box')){
        // this.setCircleState()
        // 还原transition为none
        e.currentTarget.style.transition = 'none'
        this.pages[this.currentIndex - 1].dom.firstElementChild.style.transition = `none`
        this.pages[this.currentIndex].dom.firstElementChild.style.transition = `none`

        // 设置所有卡片旋转容器的变化中心 和 取消transition
        this.pages.forEach((page,index)=>{
          page.dom.firstElementChild.style.transition = `none`
          if(index < this.currentIndex){
            page.dom.firstElementChild.style.transformOrigin = `left center`
          }else if(index > this.currentIndex){
            page.dom.firstElementChild.style.transformOrigin = `right center`
          }
        })
      }
      

    })

  }


}

Controller.appInit()

/* 
transform-style: preserve-3d;
perspective: 800px;

*/