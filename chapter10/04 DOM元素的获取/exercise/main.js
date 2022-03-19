// 定义一个函数，可以判断某个元素是否有子元素，如果有 依次输出所有子节点的nodeValue到控制台



// hasChildNodes( )
// function loopOut(domElement){
//   if(domElement.hasChildNodes()){
//     const allChilds = [...domElement.childNodes]
//     allChilds.forEach((item)=>{
//       console.log(item.nodeValue)
//     })
//   }
// }

// const titleElements = document.getElementsByTagName('head')
// loopOut(titleElements[0])

// 定义一个函数 能够找到这个元素的的最深入的最后一个子元素(html类型的元素) 并返回

// lastElementChild 
// childNodes 

function findLoop(domElement){
  if(domElement.childElementCount > 0){
    return findLoop(domElement.lastElementChild)
  }else{
    return domElement
  }
}

console.log(findLoop(document.getElementById('div')))


