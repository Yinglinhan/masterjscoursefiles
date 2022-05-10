

class InputBar {
  constructor(){
    this.inputEle = document.querySelector('input')
    this.btnBox = document.querySelector('.input-buttons')
    

  }

  init(){

    this.inputEle.addEventListener('focus',(e)=>{
      this.inputEle.classList.add('input-focus')
      this.btnBox.style.opacity = 1
    })

    this.inputEle.addEventListener('blur',(e)=>{
      this.inputEle.classList.remove('input-focus')
      this.btnBox.style.opacity = 0
    })

  }

}

const inputBarInstance = new InputBar();
inputBarInstance.init()

const templeCard = document.querySelector('.todo-card')
templeCard.remove()

class ToDoCard {
  constructor(card){
    this.card = card.cloneNode(true)
    this.editBlock = this.card.querySelector('.edit-block')
    this.cardContainer = document.querySelector('.todo-card-container')
    this.fourIcons = this.card.querySelector('.four-icons').children
    this.doneIcon = this.card.querySelector('.icon-box-done-init')
    this.colorBoard = this.card.querySelector('.color-board')
    this.clickTimeId = 0
    this.clickCount = 0
    this.deleteId = 0
    this.stateCard = {
      isFav:false
    }
    this.init()
  }
  init(){
    this.appendCard()

    // 实现双击才能输入
    
    this.card.addEventListener('mousedown',(e)=>{
      e.preventDefault()
      e.stopPropagation()

      clearTimeout(this.clickTimeId)
      this.clickCount++
      
      if(this.clickCount === 2){

        this.editBlock.focus()
      }
      
      this.clickTimeId = setTimeout(()=>{
        this.clickCount = 0
      },200)
    })

    this.editBlock.addEventListener('focus',(e)=>{
      const selection = getSelection()
      const range = selection.getRangeAt(0)
      const textNode = this.editBlock.childNodes[0]
      range.setStart(textNode,textNode.length)
    })
 
    // 鼠标移入卡片区域 图标出现
    this.card.addEventListener('mouseenter',(e)=>{
        const fourIconsArr = [...this.fourIcons]

        fourIconsArr.forEach((icon)=>{
          icon.classList.remove('icon-init')
          icon.firstElementChild.classList.remove('svg-init')
        })
        this.doneIcon.classList.remove('icon-box-done-init')
        this.doneIcon.firstElementChild.classList.remove('svg-done-init')
    })

    this.card.addEventListener('mouseleave',(e)=>{
      const fourIconsArr = [...this.fourIcons]

      fourIconsArr.forEach((icon,index)=>{

       
        if(this.stateCard.isFav && index === 3){
          return
        }else{
          icon.classList.add('icon-init')
          icon.firstElementChild.classList.add('svg-init')
        }

      })

      this.doneIcon.classList.add('icon-box-done-init')
      this.doneIcon.firstElementChild.classList.add('svg-done-init')

      setTimeout(()=>{
        this.colorBoard.classList.add('color-init')
      },400)
    })

    // 点击色点实现卡片颜色切换
    this.colorBoard.addEventListener('click',(e)=>{
      // console.log(e.target.className)

      if(e.target.nodeName === 'SPAN'){
        const colorClass = e.target.className
        const basicClass = this.card.className.split(' ')[0]
        this.card.className = basicClass + ' ' + colorClass
      }

    })

    // 点击调色板按钮 实现调色板出现的切换
    this.fourIcons[1].addEventListener('click',(e)=>{
      this.colorBoard.classList.toggle('color-init')
    })

    // 点击重点图标 然后图标固定 变颜色
    this.fourIcons[3].addEventListener('click',(e)=>{
      this.stateCard.isFav = !this.stateCard.isFav
      // console.log(this.stateCard.isFav)
      e.currentTarget.children[0].children[1].style.fill = this.stateCard.isFav ?  '#EDCE46' : 'white'
    })

    this.fourIcons[0].addEventListener('mousedown',(e)=>{
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

    this.fourIcons[0].addEventListener('mouseup',(e)=>{
      const target =  e.currentTarget.children[1].firstElementChild
      const styles = getComputedStyle(target)

      if(parseInt(styles.strokeDashoffset) > 0){
        clearInterval(this.deleteId)
        target.style.strokeDashoffset = '88'
      }
    })




  }
  appendCard(){

    this.cardContainer.appendChild(this.card)
  }
}

const card1 = new ToDoCard(templeCard)
const card2 = new ToDoCard(templeCard)
const card3 = new ToDoCard(templeCard)