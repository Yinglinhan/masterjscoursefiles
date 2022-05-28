// 四个圆 统一是黑色 然后 能把这个元素改变成元素上设置的某个颜色值
// data-color this dataset 修改背景色
// const all = document.querySelectorAll('.container div')
// console.log(all)
// const allArr = [...all]
// allArr.forEach((item)=>{
//   item.addEventListener('click',function(e){
//     const color = this.dataset.color
//     e.target.style.backgroundColor = color
//   })
// })




// 每次点击某个元素的文字  变为 你是被我第几个点到的
const all = document.querySelectorAll('.text-container div')

const allArr = [...all]
console.log(allArr)

let clickCount = 1


allArr.forEach((item)=>{
  item.addEventListener('click',function(e){

    e.target.innerText = `你是被我第${clickCount}个点到的`
    clickCount++;
  })
})