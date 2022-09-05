// 传入一个元素的id 然后这个元素 被点击就会变大


export default function(id){

  const dom = document.getElementById(id)
  
  dom.style.transition = `transform 1s ease`
  dom.style.transformOrigin = `left center`

  dom.addEventListener('click',()=>{
    dom.style.transform = `scale(1.2)`
  })
}