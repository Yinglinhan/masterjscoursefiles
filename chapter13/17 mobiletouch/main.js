/* 
1. 不要直接用图片  要用div或者其他元素的背景



*/


const oneBlock = document.querySelector('.one-block');

oneBlock.remove()

class Block {
  constructor(oneBlock){
    this.block = oneBlock.cloneNode(true);
    this.init()
  }
  init(){

  }
}


class Contaienr {
  constructor(){
    this.container = document.querySelector('.container')
    this.blockNum = 36
    this.allBlocks = []
    this.touchInfo = {
      accumulatorX:0, 
      accumulatorY:0
    }
    this.oneBlockInfo = {}
    this.init()
  }

  
  init(){
    // 把规定数量的block添加到container中

    for(let i=0;  i < this.blockNum;i++){

      this.addBlock(new Block(oneBlock))
    }
    console.log(this.allBlocks)
    this.allBlocks.forEach(block =>{
      this.container.appendChild(block.block)
    })
    
    const oneBlockInfo = this.allBlocks[0].block.getBoundingClientRect()
    this.oneBlockInfo.width = oneBlockInfo.width
    this.oneBlockInfo.height = oneBlockInfo.height

    this.setScreenCenter()

    this.initTouch()


  }
  addBlock(block){

    this.allBlocks.push(block)
  }
  setScreenCenter(){
    const posInfo = this.container.getBoundingClientRect()

    

    const top = parseInt(posInfo.height)/2 - document.documentElement.clientHeight/2
    const left = parseInt(posInfo.width)/2 - document.documentElement.clientWidth/2

    console.log(left, top)

    this.container.style.left = 0 + 'px'
    this.container.style.top = 0 +'px'
    // this.container.style.transform = 'scale(0.1)'
  }
  initTouch(){
    document.body.addEventListener('touchstart',(e)=>{
      e.preventDefault()
      // console.log(e.targetTouches[0].clientX,e.targetTouches[0].clientY,'start')
      this.touchInfo.startX = e.changedTouches[0].clientX
      this.touchInfo.startY = e.changedTouches[0].clientY
      const transform = getComputedStyle(this.container).transform
      const matrix = new DOMMatrixReadOnly(transform)
      // console.log(matrix.m41,matrix.m42)
      this.touchInfo.baseTranslateY = Math.round(matrix.m42)
      this.touchInfo.baseTranslateX = Math.round(matrix.m41)


      console.log(e, e.changedTouches[0].clientX,e.changedTouches[0].clientY, 'start')


    })

    document.body.addEventListener('touchmove',(e)=>{
      e.preventDefault()
      // console.log(e,e.targetTouches[0].clientX,e.targetTouches[0].clientY)

      this.container.style.transform = `translate(${e.targetTouches[0].clientX - this.touchInfo.startX + this.touchInfo.baseTranslateX}px, ${e.targetTouches[0].clientY - this.touchInfo.startY + this.touchInfo.baseTranslateY}px)`

  

    })


    document.body.addEventListener('touchend',(e)=>{
      e.preventDefault()
      // console.log(e.changedTouches[0].clientX,e.changedTouches[0].clientY,'end')
      // this.touchInfo.startX = e.changedTouches[0].clientX
      // this.touchInfo.startY = e.changedTouches[0].clientY
      // const transform = getComputedStyle(this.container).transform
      // const matrix = new DOMMatrixReadOnly(transform)

      // console.log(e, e.changedTouches[0].clientX,e.changedTouches[0].clientY, 'end')
      this.touchInfo.accumulatorX += e.changedTouches[0].clientX - this.touchInfo.startX
      this.touchInfo.accumulatorY += e.changedTouches[0].clientY - this.touchInfo.startY

      // 左移  -x  上移 -y
      if(Math.abs(this.touchInfo.accumulatorX) > this.oneBlockInfo.width){
        // console.log('已经横向移动了一个block宽度了',this.touchInfo.accumulatorX)  
       
        if(this.touchInfo.accumulatorX < 0){
          this.touchInfo.accumulatorX += this.oneBlockInfo.width
          
        }else{
          this.touchInfo.accumulatorX -= this.oneBlockInfo.width
        }
        
      }


      if(Math.abs(this.touchInfo.accumulatorY) > this.oneBlockInfo.height){
        // console.log('已经竖向移动了一个block高度了')  
        if(this.touchInfo.accumulatorY< 0){
          this.touchInfo.accumulatorY += this.oneBlockInfo.height
          
        }else{
          this.touchInfo.accumulatorY -= this.oneBlockInfo.height
        }
      }

      this.container.style.transform = `translate(${this.touchInfo.accumulatorX}px,${this.touchInfo.accumulatorY}px)`

    })
  }


}
const container = new Contaienr()



