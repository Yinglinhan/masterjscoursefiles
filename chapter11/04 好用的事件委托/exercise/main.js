// 练习
// 点击的元素元素data-color设置的颜色 其他元素变回蓝色

const container = document.querySelector('.container')
console.log(container)
const sons = document.querySelectorAll('.container div')
const sonsArr = [...sons]
container.addEventListener('click',(e)=>{

  const color = e.target.dataset.color
  e.target.style.backgroundColor = color

  sonsArr.forEach((ele)=>{
    if(ele !== e.target){
      ele.style.backgroundColor = 'blue'
    }
  })

})


