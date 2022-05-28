// 动态创建一个style元素 添加到head元素中
const style = document.createElement('style')
// style.innerText = `
// .title{
//   font-size:60px;
// }

// .slogan{
//   color:red;
//   font-size:30px;
// }

// `

const styleText = document.createTextNode(
  `
 .title{
   font-size:60px;
 }

 .slogan{
   color:red;
   font-size:30px;
 }

 `
)
style.appendChild(styleText)

document.head.appendChild(style)