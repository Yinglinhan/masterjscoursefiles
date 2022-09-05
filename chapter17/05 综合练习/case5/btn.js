// 传入一个父元素id 该按钮就会出现在父元素中

export class Button{
  constructor(id,btnColor){
    this.targetDOM = document.getElementById(id)
    this.btnColor = btnColor
    this.btn = null
    this.init()
  }

  init(){
    this.btn = document.createElement('div')
    this.btn.innerText = 'button'

    this.targetDOM.appendChild(this.btn)
    const btn = this.btn
    btn.style.backgroundColor = this.btnColor
    btn.style.color = 'white'
    btn.style.padding = '10px'
    btn.style.display = 'inline-block'
    btn.style.borderRadius = '10px'


    btn.addEventListener('click',()=>{
      alert('我是按钮')
    })
  }

}

