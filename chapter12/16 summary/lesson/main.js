const testDiv = document.querySelector('.test-div')
console.log(testDiv)
testDiv.addEventListener('click',(e)=>{
  testDiv.style.width = '200px'
  testDiv.style.height = '300px'
  testDiv.style.opacity = 0.2
})


testDiv.addEventListener('transitionend',(e)=>{
  console.log(this)
})
  
// const obj = {
//   test(){

//     testDiv.addEventListener('transitionend',(e)=>{
//       console.log(this)
//     })
//   }
// }
// obj.test()

// transitionend 元素的几个属性发生了变化 就会触发几次



//class 

class Card {
  constructor(name){
    this.name = name
  }

  callMyName(){
    console.log(this.name)
  }

}

const card = new Card('a')
card.callMyName()