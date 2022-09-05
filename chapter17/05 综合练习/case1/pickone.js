
// []  10个人  0 - 9 
// 22个人  0 - 21  
export default function (names,id){
  //  整数随机数实现
  // Math.random()
  if(names instanceof Array){

    let pickInterNum = 0
    const targetDom = document.getElementById(id)
    let isPicking = false

    // 添加基本结构
    const domTree = `
      <div id="showName">
      111
      </div>

      <span id="btn">开始</span>
    
    `

    targetDom.innerHTML = domTree


    // 获取展示元素 和 按钮元素
    
    const nameBox = document.getElementById('showName')
    const btn = document.getElementById('btn')
    btn.style.backgroundColor = 'black' 
    btn.style.color = 'white' 



    const pickFun = function(){
      const length = names.length

      const index = Math.floor(Math.random() * length) 
  

      const resultName = names[index]
      return resultName
    }

    const pausePick = function(){
      clearInterval(pickInterNum)
    }

    const pickStart = function(){
      pickInterNum = setInterval(()=>{
        const pickResult = pickFun()
        console.log(pickResult)
        nameBox.innerText = pickResult
      },100)
  
    }

    btn.addEventListener('click',()=>{
     if(isPicking){
      pausePick()
      btn.innerText = '开始'
      isPicking = false
     }else{
      pickStart()
      isPicking = true
      btn.innerText = '暂停'
     }
    })




  }else{
    throw new Error('第一个参数需要数组')
  }

}