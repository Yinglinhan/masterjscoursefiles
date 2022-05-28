console.log(innerWidth,document.documentElement.clientWidth,document.documentElement.offsetWidth)
console.log(innerHeight,document.documentElement.clientHeight,document.documentElement.offsetHeight)

const div = document.querySelector('.container')
div.addEventListener('click', () =>{
  console.log('click')
})


div.addEventListener('mousedown',(e)=>{
  console.log('mousedown')
})


div.addEventListener('touchstart',(e)=>{
  console.log('touchstart')
})
// document.body.addEventListener('touchstart',(e)=>{
//   e.preventDefault()
// },{passive:false})