
// circle 类型 
/*   
  主要是提示圆点的创建和添加
*/ 

class HintCircle {

  constructor(){
    // 利用圆点模板 深克隆一个节点 
    this.dom = HintCircle.targetCircle.cloneNode(true)
    // 添加到父元素上 
    this.appendCircle()
  }

  // 把创建的克隆节点 圆点 添加到节点树上特定的父元素上
  appendCircle(){
    HintCircle.targetContainer.appendChild(this.dom)
  }

  // 所有圆点的父级元素
  static targetContainer = document.querySelector('.circle-hint')
  
  // 作为模板的圆点元素
  static targetCircle = document.querySelector('.circle')

  // 主要就是负责把原本的圆点从dom树上清除掉
  // 等其他代码来创建所有的圆点
  static init(){
    this.targetCircle.remove()
  }
  
}




// page 类


class Page {
  constructor(pageData){
    this.dom = Page.targetPage.cloneNode(true)
    
    //给页面设置宽度 和浏览器显示区域宽度一致 
    this.dom.style.width = document.documentElement.clientWidth + 'px'
    // 根据传入的数据修改页面的内容
    this.initContent(pageData)
    // 把页面添加到页面容器中 page-box
    this.appendPage()
  }
  appendPage(){
    Page.pageContainer.appendChild(this.dom)
  }

  // 根据页面的数据修改克隆出来的oage节点的内容
  initContent(pageData){
    // 解构赋值的方式 获取到相应的各个数据
    const {texts,color,detailText,imgUrl} = pageData


    // 修改大标题
    const spanArr = [...this.dom.querySelector('.page-text-box').children]
    spanArr.forEach((span,index)=>{
      span.innerText = texts[index]
    })


    // 修改卡片背景色
    const cardBox = this.dom.querySelector('.page-img')
    cardBox.style.backgroundColor = color

    // 修改卡片文字
    const p = this.dom.querySelector('p')
    p.innerText = detailText

    // 修改图片地址
    const img = this.dom.querySelector('img')
    img.src = imgUrl
  }
 
  // 页面的容器元素
  static pageContainer = document.querySelector('.page-box')

  // 页面的模板节点
  static targetPage = document.querySelector('.one-page')

  // 删除原始页面dom
  static init(){
    this.targetPage.remove()
  }
}
 


// control 类
// 所有相关的控制功能都放到这个类的各个静态方法中

class AppController {

  // 要创建页面的数量  这个数据其实可以不用 直接用pagesData的length就可以
  static pageNum = 5
  // 所有page的外层容器
  static pageBox = document.querySelector('.page-box')

  //一个page的宽度 其实就是浏览器的显示区域的宽度
  static onePageWidth = document.documentElement.clientWidth

  // 记录当前浏览器显示的是哪一个页面的索引位
  static currentIndex = 0

  // 用来记录移动相关数据
  static moveInfo = {}

  // 用来收集创建的Circle类型的实例
  static circles = []

  // 用来收集创建的Page类型的实例
  static pages = []
  
  // 用来创建Page类型的不同实例显示内容的数据
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


  // 创建Circle实例的方法
  static createCircle(){
    for(let i = 0; i < this.pageNum; i++){
      const circle = new HintCircle()
      this.circles.push(circle)
      //让一开始的情况下 第一个圆点是选中的状态
      if(i === 0){
        circle.dom.classList.add('selected-circle')
      }
    }
  }

  // 创建Page实例的方法
  static createPage(){
    for(let i = 0; i < this.pageNum; i++){
      const page = new Page(this.pagesDatas[i])
      this.pages.push(page)

      // 把所有非第一个的page的负责旋转的节点  设置旋转中心 为右侧中间  Y轴旋转为-25度
      if(i !== 0){
        page.dom.firstElementChild.style.transformOrigin = `right center`;
        page.dom.firstElementChild.style.transform = `rotateY(-25deg)`
      }
    }
  }

  // 设置circle圆点实例的状态 （每次执行都会重新根据当前的currentIndex来设置相应的圆点的样式）
  static setCircleState(){
    this.circles.forEach((circle,index)=>{
      // 先把元素的选中样式给去掉 不管有没有都先去了
      circle.dom.classList.remove('selected-circle')
      circle.dom.style.backgroundColor = 'white'
      // 这里再重新比较 如果index相等 那么加上选中的样式
      if(index === this.currentIndex){
        circle.dom.classList.add('selected-circle')
        circle.dom.style.backgroundColor = this.pagesDatas[index].color
      }
    })
  }

  // 设定所有相关交互的事件
  static eventSetup(){

   
    // touchstart 事件
    this.pageBox.addEventListener('touchstart', (e)=>{
      
      // 保存手指一开始触摸的点的横坐标数据
      this.moveInfo.startX = e.changedTouches[0].clientX

      // 获取touchstart触发时当时page-box这个页面容器元素的translateX的值
      const transform = getComputedStyle(this.pageBox).transform
      const matrix = new DOMMatrixReadOnly(transform)
      this.moveInfo.baseTranslateX = Math.round(matrix.m41)

    })

    // touchmove 事件
    this.pageBox.addEventListener('touchmove', (e)=>{
      


      // 设定滑动的边界 当移动超过左右边界时 不让页面移动了
      let currentTransX = e.changedTouches[0].clientX - this.moveInfo.startX + this.moveInfo.baseTranslateX
      if(currentTransX > 0 ){
        currentTransX = 0
      }else if(currentTransX < -(this.pageNum - 1)*this.onePageWidth){
        currentTransX = -(this.pageNum - 1)*  this.onePageWidth
      }
      // 这里是把当前的translateX的值 保存在moveInfo这个对象中
      this.moveInfo.currentTransX = currentTransX
      // 设置这个page-box元素元素的transform属性
      this.pageBox.style.transform = `translateX(${currentTransX}px)`


      // 判断是往左还是往右
      // 获取移动触发时的点的横坐标
      const x = e.changedTouches[0].clientX 

      // 这个横坐标的值 和 一开始点击时的横坐标值进行比较
      if(x > this.moveInfo.startX){
        // 手指向右滑动的情况
      

        // 如果当前已经是第一个page了 就不需要再进行旋转变化了 直接返回 后面的代码就不会执行了
        if(this.currentIndex === 0){
          return
        }

        // 设置当前page的变换点  
        this.pages[this.currentIndex].dom.firstElementChild.style.transformOrigin = `right center`
        
        // 手指移动距离 和 整个页面宽度的比例 这个比例用来和page旋转的最大角度（自己定义的） 相乘 来获取到 通过手指滑动让页面产生多少度的旋转
        const ratio = (x - this.moveInfo.startX) / this.onePageWidth

        // 向右 产生旋转变化的是 当前index（也就是currentIndex） 和 上一个index（也就是currentIndex - 1） 
        // 注意 设置rotateY的是page下面的子元素  firstElementChild  注意自己的页面元素结构
        this.pages[this.currentIndex].dom.firstElementChild.style.transform = `rotateY(-${(25 * ratio).toFixed(1)}deg)`

        this.pages[this.currentIndex - 1].dom.firstElementChild.style.transform = `rotateY(${(25 *( 1- ratio)).toFixed(1)}deg)`



      }else if(x < this.moveInfo.startX){
        // 手指向左滑动的情况
         if(this.currentIndex === this.pages.length - 1){
          return
        }
         // 向左 产生变化的是 当前index 和 下一个index
        // console.log('向左')
        /* 
          滑动距离 和 旋转角度的 一个比例
          滑动距离范围 一个page的宽度  
          旋转角度   0-25
        
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
        // 手指向右滑动

        // 判断下当前页面是否是第一个page 如果不是 起码都是第二个 就可以减 1
        if(this.currentIndex !== 0){
          this.currentIndex--
        }
        
        // 设置page容器的transition 让他可以有自动过度效果
        this.pageBox.style.transition = `transform 0.35s ease-in-out`
        
        //  设置大1的index的page的transition  也就是即将移出去的那个page
        this.pages[this.currentIndex + 1].dom.firstElementChild.style.transition = `transform 0.35s ease-in-out`

        // 设置要出现在页面中的page的transition
        this.pages[this.currentIndex].dom.firstElementChild.style.transition = `transform 0.35s ease-in-out`

        // 通过settimeout 设置transform的值 来实现动画效果
        setTimeout(()=>{
          // 页面的移动
          this.pageBox.style.transform = `translateX(-${this.onePageWidth * this.currentIndex}px)`

          // 两个页面的渲染
          this.pages[this.currentIndex].dom.firstElementChild.style.transform = `rotateY(0deg)`
          this.pages[this.currentIndex + 1].dom.firstElementChild.style.transform = `rotateY(-25deg)`
        },1)
        
      }else if(x < this.moveInfo.startX){
        // 手指向左滑动 如果不是最后一个 就还可以加一
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
      if(e.target.classList.contains('page-box')){
        
        // 这个方法用来设定哪个圆点呈现为选中或者说是当前状态
        this.setCircleState()

        // 还原transition为none
        e.currentTarget.style.transition = 'none'
       

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

  // 相当于页面的启动功能
  static appInit(){
    const container = document.querySelector('.container')
    container.style.width = innerWidth + 'px'
    container.style.height = innerHeight + 'px'

    this.pageBox.style.width = this.pageNum * this.onePageWidth + 'px'
    
    HintCircle.init()
    Page.init()
    this.createCircle()
    this.createPage()
    this.eventSetup()
  }

}


// 通过这个类的静态方法 来实现页面功能
// 因为所有的其他的方法 都在这个方法中调用 
AppController.appInit()
