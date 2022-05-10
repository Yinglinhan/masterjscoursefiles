
/* 
这个案例文件有些逻辑和课程中的演示不太一致
关键是思路
学习理解这种面向对象的组织代码的方式
*/

// 获取已经在html中写好的 待办事项卡片 作为模板
const todoCard = document.querySelector(".todo-card")

todoCard.remove()

// 获取已经在html中写好的 已完成卡片 作为模板
const doneCard = document.querySelector(".done-card")

doneCard.remove()


// 输入框 的类型
class InputBar {
  constructor(id) {
    this.ele = document.querySelector("input")
    // 这个是输入提示文字元素
    this.inputHint = document.querySelector(".input-hint")

    this.eleBasicStyle = {}
    // 变化的目标样式
    this.eleTargetStyle = {
      backgroundColor: "white",
      border: "2px solid #D4D4D4",
      width: "20rem",
      cursor: "text",
    }
    this.buttons = []
    // 存放已输入的相关文字数据
    this.inputValue = ""
  }

  barInit() {
    const computedStyle = getComputedStyle(this.ele)
    // console.log(computedStyle.backgroundColor,computedStyle.width,computedStyle.border)
    this.eleBasicStyle.backgroundColor = computedStyle.backgroundColor
    this.eleBasicStyle.width = computedStyle.width
    this.eleBasicStyle.border = computedStyle.border
    this.eleBasicStyle.cursor = computedStyle.cursor

    // 回车键产生元素
    this.ele.addEventListener('keyup',(e)=>{
      if(e.key === 'Enter'){
        // 判断下输入框内是否已经输入数据
        if(this.ele.value){
          new TodoCard(todoCard,this.ele.value,null,true)
          this.ele.value = ''
        }
      }
    })


    // input元素
    this.ele.addEventListener("focus", (e) => {
      // 这里是用来控制输入提示文字
      if(this.inputValue){
        // 如果input中有已经输入的文字 就把文字提示透明度设置为0
        this.inputHint.style.opacity = 0
      }else{
        this.inputHint.style.opacity = 1
      }



      e.currentTarget.style.backgroundColor = this.eleTargetStyle.backgroundColor
      e.currentTarget.style.border = this.eleTargetStyle.border
      e.currentTarget.style.width = this.eleTargetStyle.width
      e.currentTarget.style.cursor = this.eleTargetStyle.cursor

      // 把保存在实例中之前已经输入的文字数据给到 input 的value属性 让其又显示出来
      e.currentTarget.value = this.inputValue
      this.buttonsAni("showUp")
    })
    this.ele.addEventListener("blur", (e) => {
      this.inputHint.style.opacity = 0
      e.currentTarget.style.backgroundColor = this.eleBasicStyle.backgroundColor
      e.currentTarget.style.border = this.eleBasicStyle.border
      e.currentTarget.style.width = this.eleBasicStyle.width
      e.currentTarget.style.cursor = this.eleBasicStyle.cursor

      this.inputValue = e.currentTarget.value

      // 清空输入的内容
      e.currentTarget.value = ""
      this.buttonsAni("fadeOut")
    })


    // 通过已经是有有输入数据来让决定输入文字提示是否显示
    this.ele.addEventListener("input",(e)=>{
      
      if(e.currentTarget.value === ''){
        this.inputHint.style.opacity = 1
      }else{
        this.inputHint.style.opacity = 0
      }
    })
  }

  // 把按钮实例添加到inputBar的实例中
  addBtn(...btns) {
    btns.forEach((item) => {
      this.buttons.push(item)
    })
  }

  // 按钮的动画
  buttonsAni(type) {
    if (type === "showUp") {
      this.buttons.forEach((btn) => {
        btn.showUp()
      })
    } else {
      this.buttons.forEach((btn) => {
        btn.fadeOut()
      })
    }
  }
}

const inputBar = new InputBar("input")
inputBar.barInit()// 这个barInit方法 其实也可以直接在constructor最后调用

class Btn {
  constructor(className, targetColor) {
    this.btn = document.querySelector(className)
    this.btnType = className.includes('confirm') ? 'confirm' : 'cancel'
    this.parentInputbar = null
    this.btnBasicStyle = {}
    this.btnTargetStyle = {
      backgroundColor: targetColor,
      opacity: 1,
      pointerEvents: "auto",
    }
  }
  init(inputBar) {

    const computedStyle = getComputedStyle(this.btn)
  
    this.btnBasicStyle.backgroundColor = computedStyle.backgroundColor
    this.btnBasicStyle.opacity = computedStyle.opacity
    this.btnBasicStyle.pointerEvents = computedStyle.pointerEvents

    // 这个方法 就是把 按钮和input输入元素关联起来 其实就是把按钮元素实例中的parentInputbar属性设置为传入的input元素
    this.installInput(inputBar)

    // 初始化按钮的点击事件
    this.btn.addEventListener('mousedown',(e)=>{
      if(this.btnType === 'confirm'){

        // 这里是点击confirm按钮 表示要创建新的待办事项卡片

        // 阻止点击按钮元素导致input元素失去焦点
        e.preventDefault()

        if(this.parentInputbar.ele.value){
          new TodoCard(todoCard,this.parentInputbar.ele.value,null,true)

          // 把输入框清空
          this.parentInputbar.ele.value = ''
        }
        this.parentInputbar.inputHint.style.opacity = 1

      }else{
        // 点击的是cancel按钮要执行的逻辑
        this.parentInputbar.ele.value = ''
      }
      
    })
   


  }

  installInput(inputBar){
    this.parentInputbar = inputBar
  }
  showUp() {
    this.btn.style.backgroundColor =
    this.btnTargetStyle.backgroundColor.backgroundColor
    this.btn.style.opacity = this.btnTargetStyle.opacity
    this.btn.style.pointerEvents = this.btnTargetStyle.pointerEvents
  }

  fadeOut() {
    this.btn.style.backgroundColor = this.btnBasicStyle.backgroundColor
    this.btn.style.opacity = this.btnBasicStyle.opacity
    this.btn.style.pointerEvents = this.btnBasicStyle.pointerEvents
  }
}

const confirmBtn = new Btn(".btn-confirm", "#2627CF")
const cancelBtn = new Btn(".btn-cancel", "black")
confirmBtn.init(inputBar)
cancelBtn.init(inputBar)

inputBar.addBtn(confirmBtn, cancelBtn)






// 待办卡片 类型


class TodoCard {
  constructor(cardNode,cardText,colorIndex,isCreate) {
    // 所有待办卡片的容器元素
    this.cardContainer = document.querySelector(".todo-card-container")
    // 用模板元素深度克隆一个待办卡片元素
    this.card = cardNode.cloneNode(true)
    // 可编辑区域元素
    this.editBlock = this.card.querySelector(".todo-edit")
    // 底部右侧图标们的父元素
    this.iconsBar = this.card.querySelector(".icons-bar")
    // 完成图标元素
    this.doneIcon =  this.card.querySelector(".done-icon-box")
    // 颜色圆点们的父元素
    this.colorBoard = this.card.querySelector(".color-board")

    // 待办事项数量的元素
    this.cardNumBox = document.querySelector(".card-num")

    // 卡片是否有文字数据
    this.cardText = cardText ? cardText : null

    // 实现双击可编辑
    this.clickCount = 0
    this.clickTimeId = 0

    // 检测是否确定删除的计时器ID
    this.deleteId = 0

    // 所有颜色的名称
    this.cardColors = ["qing", "green", "orange", "yellow", "purple"]

    // 卡片的颜色索引位
    this.colorIndex = colorIndex !== null ? colorIndex : null 

    this.cardState = {
      iconsShow:false,
      colorBoardShow:false,
      isFav:false,
      // 判断是否是通过输入创建 还是通过从已完成返回创建
      isCreate:isCreate
    }
    this.init()
  }
  


  init() {
    // 初始化卡片的颜色 随机颜色
    if(this.colorIndex === null){
      this.colorIndex = Math.ceil(Math.random() * 5) - 1
    }
    // 先删除卡片本来的颜色
    this.card.classList.remove("card-orange")
    this.card.classList.add("card-" + this.cardColors[this.colorIndex])


    // 初始已有的输入卡片内容 设置到 this.cardText中
    if(this.cardText !== null){
      this.editBlock.innerText = this.cardText
    }


    // 卡片的投影 输入状态 即输入元素获得焦点时 产生投影
    this.editBlock.addEventListener('focus', (e)=>{
      this.card.classList.add('shadow-'+ this.cardColors[this.colorIndex])
    })

    this.editBlock.addEventListener('blur',(e)=>{
      this.card.classList.remove('shadow-'+ this.cardColors[this.colorIndex])
    })

  

    // 初始化 双击激活编辑状态

    this.card.addEventListener("mousedown", (e) => {
      clearTimeout(this.clickTimeId)
      if (this.clickCount === 0) {
        e.preventDefault()
        this.clickCount++
        this.clickTimeId = setTimeout(() => {
          this.clickCount = 0
        }, 300)
      } else {
        this.editBlock.focus()
        this.clickCount = 0
      }
    })

    // 初始化 鼠标移入
    this.card.addEventListener("mouseenter", (e) => {
    
      this.doneIcon.style.opacity = 1
      this.doneIcon.style.transform = `translateX(0px)`

      this.doneIcon.firstElementChild.style.transform = `rotate(0deg)`
    
      
      const allChildArr = [...this.iconsBar.children]

      // 四个图标的出现效果
      allChildArr.forEach((icon, index) => {

        if(icon.classList.contains('icon-box')){
          icon.firstElementChild.style.transform = "rotate(0deg)"
          icon.style.transform = "translateX(0px)"
          icon.style.opacity = 1
        }
      })
      this.cardState.iconsShow = true

    })
    // 初始化 鼠标移出
    this.card.addEventListener("mouseleave", (e) => {


      this.doneIcon.style.opacity = 0
      this.doneIcon.style.transform = `translateX(-20px)`

      this.doneIcon.firstElementChild.style.transform = `rotate(-35deg)`

      this.cardState.iconsShow = false

      const allChildArr = [...this.iconsBar.children]

      // 四个图标的消失效果
      allChildArr.forEach((icon, index) => {


        if(this.cardState.isFav && icon.classList.contains('icon-fav') ){
            return
        }

        if(icon.classList.contains('icon-box')){

          icon.firstElementChild.style.transform = "rotate(30deg)"

          icon.style.transform = "translateX(20px)"
          icon.style.opacity = 0
        }
      })

      // 当鼠标移出卡片区域时 色号版也会恢复到默认状态
      if(this.cardState.colorBoardShow){
        setTimeout(() =>{
          this.colorBoard.style.transform = `translateY(10px)`
          this.colorBoard.style.opacity = 0
          this.cardState.colorBoardShow = false
        },350)
      }

 
    })


    // 点击完成图标
    this.doneIcon.addEventListener('click', () =>{
      this.moveCardToDone()
    })


   
    
    // 初始化 点击 颜色icon 颜色色板出现

    this.iconsBar.children[1].addEventListener("click", (e) => {
   

      if(this.cardState.colorBoardShow){

        this.colorBoard.style.transform = `translateY(10px)`
        this.colorBoard.style.opacity = 0
        this.cardState.colorBoardShow = false
      }else{

        this.colorBoard.style.transform = `translateY(0px)`
        this.colorBoard.style.opacity = 1
        this.cardState.colorBoardShow = true
      }

    })


   


    // 初始化色板的点击改变卡片颜色


    this.colorBoard.addEventListener('click',(e)=>{
      e.stopPropagation()
      if(e.target.classList.contains('color-dot')){

        // 通过小圆点元素上的data属性 获取到元素相应的索引位数据
        this.colorIndex = parseInt(e.target.dataset.index)
        const tempClassName = this.card.className.split(' ')[0]
        const colorClass = e.target.className.split(' ')[1]
        const shadowClass = 'shadow-' + this.cardColors[e.target.dataset.index]

        // 判断当前文档的焦点元素是否是卡片的可编辑元素
        if(document.activeElement === this.editBlock){
          this.card.className = tempClassName + ' ' + colorClass + ' ' + shadowClass
        }else{
          this.card.className = tempClassName + ' ' + colorClass
        }

       
      }
    })

    // 初始化编辑按钮

    this.iconsBar.children[2].addEventListener("click",(e)=>{

      this.editBlock.focus()
      this.card.classList.add('shadow-'+ this.cardColors[this.colorIndex])
    })




    // 初始化星号图标的点击固定功能

    this.iconsBar.children[3].addEventListener("click",(e)=>{

      this.cardState.isFav = !this.cardState.isFav
      e.currentTarget.children[0].children[1].style.fill = this.cardState.isFav ?  '#EDCE46' : 'white'

    })

    // 初始化长按删除图标 旋转动效 删除卡片功能

    this.iconsBar.children[0].addEventListener('mousedown',(e)=>{
      
      const target =  e.currentTarget.children[1].firstElementChild
      // 改变strokeDashoffset值 让白边开始逐渐出现 产生动画
      target.style.strokeDashoffset = '0'
      const styles = getComputedStyle(target)

      // 持续判断是否已经转完一圈
      this.deleteId = setInterval(() =>{
        if(parseInt(styles.strokeDashoffset) === 0 ){

          this.deleteCard()
          clearInterval( this.deleteId)
        }
      },100)
    })

    // 鼠标抬起的话 取消转圈 让转圈反向转
    this.iconsBar.children[0].addEventListener('mouseup',(e)=>{

      const target =  e.currentTarget.children[1].firstElementChild
      const styles = getComputedStyle(target)
      console.log(styles.strokeDashoffset)
      if(parseInt(styles.strokeDashoffset) > 0){
        clearInterval(this.deleteId)
        // 重新设置为完全消失的一个值 这样就会反向转回去了
        target.style.strokeDashoffset = '88'
      }

    })

    // 把创建的卡片添加到卡片容器中
    this.appendCard(this.cardState.isCreate)
    this.updataNum()


  }
  // 更新待办事项卡片的数量
  updataNum(){
    this.cardNumBox.innerText = this.cardContainer.children.length
  }

  // 添加卡片的方法
  appendCard(isCreate){
    this.cardContainer.appendChild(this.card)
    
    // 卡片添加后的动画效果 根据卡片是通过输入框产生还是通过已完成卡片返回产生 有不同的动画效果
    setTimeout(() =>{
      if(isCreate){
        this.card.classList.remove('card-add-init')
      }else{

        this.card.classList.add('done-back-todo-ani')
        setTimeout(() => {
          this.card.classList.remove('card-add-init','done-back-todo-ani')
        },1500)
      }
    },50)
  }

  // 把待办事项卡偏转换成已完成事项卡片的效果
  // 本质上 其实是先把待办卡删除  然后再创建一个已完成卡片的实例
  moveCardToDone(){
    this.cardText = this.editBlock.innerText
    this.card.classList.add('todo-card-done-ani') // 先进行消失的动画
    setTimeout(() =>{
      this.card.remove() // 真正让卡片从DOM树上消失
      this.updataNum() // 更新待办事项的卡片的数量 
    },1600)

    setTimeout(() =>{
      new DoneCard(doneCard,this.cardText,this.colorIndex)
    },600)
  }

  deleteCard(){

    this.card.style.width = '0px'
    this.card.style.paddingLeft = '0px'
    this.card.style.paddingRight = '0px'
    this.card.style.opacity = 0
    this.card.style.marginRight = '0px'
    this.iconsBar.style.display = 'none'
    setTimeout(() =>{
      this.card.remove() // 卡片删除
      this.updataNum() 
    },400)
  }
}

const card = new TodoCard(todoCard,'这是一个待办事项案例',3,true)
const card2 = new TodoCard(todoCard,'功能还挺多',2,true)
const card3 = new TodoCard(todoCard,'不信你可以试试',4,true)





// 完成卡片类型

class DoneCard {
  // 三个参数 完成卡片的模板  完成卡片要显示的文字内容  颜色值的索引位
  constructor(doneCard,textValue,colorIndex){
    this.cardContainer = document.querySelector(".done-card-container") // 完成卡片们的父级元素
    this.card = doneCard.cloneNode(true)
    this.textSpan = this.card.querySelector('.card-text')
    this.doneNumBox = document.querySelector('.done-num')
    this.textValue = textValue
    this.colorIndex = colorIndex
    this.cardColors = ["qing", "green", "orange", "yellow", "purple"]
    this.iconsBar = this.card.querySelector('.done-card-icons')
    this.init()
  }


  init(){

    // 添加完成卡片到完成卡片们的父级元素
    this.appendCard()
  
    // 设置文本内容
    this.textSpan.innerText = this.textValue

    // 设置卡片颜色
    this.card.classList.remove("card-orange")
    this.card.classList.add("card-" + this.cardColors[this.colorIndex])
   



    // 初始化效果鼠标移入   完成卡片的控制图标出现
    this.card.addEventListener("mouseenter", (e) => {
    
      const allChildArr = [...this.iconsBar.children]

      allChildArr.forEach((icon, index) => {

        if(icon.classList.contains('icon-box')){
          icon.firstElementChild.style.transform = "rotate(0deg)"
          icon.style.transform = "translateX(0px)"
          icon.style.opacity = 1
        }
      })

    })


    // 初始化 鼠标移出 完成卡片的控制图标消失
    this.card.addEventListener("mouseleave", (e) => {

      const allChildArr = [...this.iconsBar.children]

      allChildArr.forEach((icon, index) => {

        if(icon.classList.contains('icon-box')){
          icon.firstElementChild.style.transform = "rotate(30deg)"
          icon.style.transform = "translateX(20px)"
          icon.style.opacity = 0
        }
      })

    })
    
    // 删除键长按与放开  和待办事项卡片的逻辑是一样的
    this.iconsBar.children[0].addEventListener('mousedown',(e)=>{
      const target =  e.currentTarget.children[1].firstElementChild
      target.style.strokeDashoffset = '0'
      const styles = getComputedStyle(target)
   
      this.deleteId = setInterval(() =>{
        if(parseInt(styles.strokeDashoffset) === 0 ){

          this.deleteCard()
          clearInterval( this.deleteId)
        }
      },100)
    })

    this.iconsBar.children[0].addEventListener('mouseup',(e)=>{

      const target =  e.currentTarget.children[1].firstElementChild
      const styles = getComputedStyle(target)
      console.log(styles.strokeDashoffset)
      if(parseInt(styles.strokeDashoffset) > 0){
        clearInterval(this.deleteId)
        target.style.strokeDashoffset = '88'
      }

    })


    // 返回todo
    
    this.iconsBar.children[1].addEventListener('click',(e)=>{
      this.backToDo()
      setTimeout(() =>{
        this.card.remove() // 把待办卡片删除 
        this.updataNum()
      },400)
    })


  }

  updataNum(){
    this.doneNumBox.innerText = this.cardContainer.children.length
  }

  appendCard(){
    this.cardContainer.appendChild(this.card)
    this.updataNum()
    setTimeout(()=>{
      this.card.classList.remove('done-card-init')
    },50)
  }

  deleteCard(){
    // this.card.remove()
    this.card.style.width = '0px'
    this.card.style.paddingLeft = '0px'
    this.card.style.paddingRight = '0px'
    this.card.style.opacity = 0
    this.card.style.marginRight = '0px'
    this.iconsBar.style.display = 'none'
    this.textSpan.style.opacity = 0

    

    setTimeout(() =>{
      this.card.remove()
      this.updataNum()
    },400)
  }

  backToDo(){

    this.card.classList.add('done-card-init')
    
    // 创建一个新的待办卡片
    new TodoCard(todoCard,this.textValue,this.colorIndex,false)
    
  }

}

new DoneCard(doneCard,'试试就逝世',1)