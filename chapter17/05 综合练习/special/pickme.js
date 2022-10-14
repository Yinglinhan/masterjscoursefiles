import confetti from 'https://cdn.skypack.dev/canvas-confetti';
export default class PickerMe {


  constructor(data){
    this.data = data
    this.intervalNum = 0
    this.preIndex = 0
    this.showNameDOM = null
    this.isPicking = false
    this.init()
  }

  init(){
    const containerBox = document.createElement('div')
    const cbs = containerBox.style

    document.body.appendChild(containerBox)
    document.body.style.width = innerWidth  + 'px'
    document.body.style.height = innerHeight  + 'px'
    document.body.style.margin = '0px'
    document.body.style.overflow = "hidden"
    cbs.height = '100%'
    cbs.width = '100%'
    cbs.display = 'flex'
    cbs.flexDirection = 'column'
    cbs.alignItems = 'center'
    cbs.justifyContent = 'center'
    cbs.fontFamily = 'PingFang SC'
    cbs.position = 'relative'



    document.body.style.background = 'linear-gradient(to top right,#131313 , #3E3E3E)'
    console.log(666)



    const funcNameBox = document.createElement('div')
    const fnbs = funcNameBox.style
    fnbs.color = 'white'
    fnbs.fontWeight = 100
    fnbs.fontSize = '4rem'
    fnbs.position = 'absolute'
    fnbs.transition = '0.5s transform ease-out'
    fnbs.transformOrigin = '50% 0px'


    const nameSpan1 = document.createElement('span')
    const nameSpan2 = document.createElement('span')

    nameSpan1.innerText = 'Pick'
    nameSpan2.innerText = 'me'

    nameSpan1.style.marginRight = '1rem'
    nameSpan2.style.marginLeft = '1rem'
    nameSpan1.style.fontWeight = 900
    funcNameBox.appendChild(nameSpan1)
    funcNameBox.appendChild(nameSpan2)
    
    containerBox.appendChild(funcNameBox)
    



    const btn = document.createElement('div')
    btn.innerText = 'START'
    btn.style.position = 'absolute'
    btn.style.bottom = '100px'
    btn.style.display = 'inline-block'
    btn.style.border = '1px solid #272727 '
    btn.style.fontSize = '0.8rem'
    btn.style.padding = '4px 10px'
    btn.style.color = '#787878'
    btn.style.background = '#272727'
    btn.style.borderRadius = '4px'
    btn.style.letterSpacing = '1px'
    btn.style.cursor = 'pointer'


    btn.style.transition = 'all 0.3s linear'
    containerBox.appendChild(btn)



    const nameShowBox = document.createElement('div')
    nameShowBox.innerText = '好奇代码的三木'
    const nsbs = nameShowBox.style

    nsbs.fontSize = '4rem'
    nsbs.fontWeight = 100
    nsbs.color = 'white'
    nsbs.opacity = 0
    nsbs.transition = `1s opacity ease-out 0.2s`
    containerBox.appendChild(nameShowBox)

    this.showNameDOM = nameShowBox



    btn.addEventListener('click',()=>{
      funcNameBox.style.transform = 'scale(0.3) translateY(-200px)'
      nameShowBox.style.opacity = 1
      if(this.isPicking){
        confetti()
        this.stopPick()
        this.isPicking = false
        btn.innerText = 'START'
        btn.style.color = '#787878'
        btn.style.border = '1px solid #272727 '
        btn.style.background = '#272727'
      }else{
        this.startPick()
        this.isPicking = true
        btn.innerText = 'STOP'
        btn.style.color = '#999999'
        btn.style.border = '1px solid #555555 '
        btn.style.background = '#444444'
      }
      
    })


    const circle1 = document.createElement('div')
    const cs1 = circle1.style
    cs1.position = 'absolute'
    cs1.height = '200px'
    cs1.width = '200px'
  
    cs1.background = '#492CFC'
    cs1.filter = 'blur(50px)'
    cs1.bottom = '-50%'
    cs1.right = '20%'
    cs1.opacity = 0.5



    const circle2 = document.createElement('div')
    const cs2 = circle2.style
    cs2.position = 'absolute'
    cs2.height = '200px'
    cs2.width = '200px'
  
    cs2.background = '#9AFFB6'
    cs2.filter = 'blur(60px)'
    cs2.bottom = '-60%'
    cs2.left = '30%'
    cs2.opacity = 0.5

    
    
    containerBox.appendChild(circle1)
    containerBox.appendChild(circle2)


    circle1.animate([
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-20px)' },
      { transform: 'translateY(0px)' }
    ],
    {
      // timing options
      duration: 10000,

      iterations: Infinity
    }
    )



    circle2.animate([
      { transform: 'translateY(0px) translateX(0px)' },
      { transform: 'translateY(-50px) translateX(-20px)' },
      { transform: 'translateY(0px) translateX(0px)' }
    ],
    {
      // timing options
      duration: 10000,
      delay:2000,
      iterations: Infinity
    }
    )
   
  }
  pickFunc(){
    console.log(this)
    const name = this.randomName()
    this.showNameDOM.innerText =  name 
  }


  startPick(){
    this.intervalNum = setInterval(
      this.pickFunc.bind(this),100
    )
  }

  stopPick(){
    clearInterval(this.intervalNum)
  }

  randomName(){
      const length = this.data.length


      let randomIndex = Math.floor(Math.random() * length)

      while(randomIndex === this.preIndex){
        randomIndex = Math.floor(Math.random() * length)
      }

      this.preIndex = randomIndex

      return this.data[randomIndex]

  }
}