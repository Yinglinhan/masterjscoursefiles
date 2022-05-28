// 按照如下html结构，用js的方式创建一个DOM，然后在页面中显示出来
/* 
  <div>
    <ul class="list">
      <li>8</li>
      <li>7</li>
      <li>6</li>
    </ul>
  </div>

  <div>
    <ol>
      <li>888</li>
    </ol>
  </div>

*/

// 创建一个函数，可以让页面中的某个元素（以该元素内的文字为目标），在函数执行之后三秒之后消失



// function disappear(text) {

//   const collector = []

//   function getElement (collection,target,text) {
  
//     const arr = [...target.childNodes]
  
//     arr.forEach(item => {
//       if(item.nodeValue === text){
//         collection.push(item.parentNode)
//         // 文本节点的子元素为空的类数组
//       }else if(item.childNodes.length > 0){
//         getElement(collection,item,text)
//       }
//     })
//   }
  
//   getElement(collector, document, text)
//   console.log(collector)
//   collector.forEach(ele => {
//     console.log(ele)
//     ele.hidden = true
//   })

// }

// disappear('666')



// 定义一个函数，可以改变传入元素的字号大小，先设置为12px，每隔2秒增加2px，超过30px会变回12px，然后继续增加，一直循环不停


// const span = document.getElementById('span')
// span.style.fontSize = "12px"
// console.log(span.style.fontSize)



// function changeFontSize(domElement) {
//   domElement.style.fontSize = '12px'


//   setInterval(()=>{
//     const nowPx = parseInt(domElement.style.fontSize)
//     if( nowPx  >= 30 ){
//       domElement.style.fontSize = '12px'
//     }else {
//       domElement.style.fontSize = nowPx + 2 + 'px'
//     }

//   },2000)
// }

// changeFontSize(span)


// 定义一个函数，可以让页面中的元素，按照元素中的的文字（数字），多少秒后字体颜色变成传入的颜色

// const span = document.getElementById('span')

// function changeColor(domElement,color){
//   const textNode = domElement.childNodes[0]
//   const num = parseInt(textNode.nodeValue)
//   setTimeout(()=>{
//     domElement.style.color = color
//   },num * 1000)
// }
// changeColor(span,'red')

/* 

定义一个函数，可以传参，两个参数，第一个参数传入一个元素节点，第二个参数传要获取的属性节点的名称（数组形式传），不传属性节点的名称就把所有属性节点都获取了，把获取到的属性节点放到一个数组中返回

*/
const span = document.getElementById('span')

function getAttributes(ele, attributes) {

  let result = []

  const allAttributes = [...ele.attributes]

  if( attributes ){
    //传了第二个参数
    attributes.forEach(item => {
      allAttributes.forEach( attr => {
        if(attr.nodeName === item){
          result.push(attr)
        }
      })
    })

  }else{
    // 没有传第二个参数
    result = allAttributes
  }

  return result
}

console.log(getAttributes(span,['id']))
