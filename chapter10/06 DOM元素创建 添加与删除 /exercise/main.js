// 创建一个方法 在某个元素后面插入 每个节点都能使用

// Node.insertAfter(newNode)

// appendChild inserBefore

// Node.prototype.insertAfter = function(newNode){
//   console.log(this.nextElementSibling)
//   if(this.nextElementSibling === null){
//     this.parentNode.appendChild(newNode);
//   }else{
//     this.parentNode.insertBefore(newNode, this.nextElementSibling);
//   }
// }

// const div = document.createElement("div")
// div.innerText = 666

// document.getElementById('div3').insertAfter(div)



/* 
  <div>
    <span name="title">好奇代码的三木</span>
    <div>
      <p class="p1">
          这是第一段话
      </p>
      <p class="p2">
          这是第二段话
      </p>
    </div>
  </div>

*/
const rootDiv = document.createElement("div")

rootDiv.innerHTML = `<span name="title">好奇代码的三木</span>
<div>
  <p class="p1">
      这是第一段话
  </p>
  <p class="p2">
      这是第二段话
  </p>
</div>`



// const span = document.createElement("span")
// const spanText = document.createTextNode("好奇代码的三木")
// span.appendChild(spanText)
// span.setAttribute('name',"title")

// const div = document.createElement("div")
// const p1 = document.createElement('p')
// const p1Text = document.createTextNode("这是第一段话")
// p1.appendChild(p1Text)
// p1.setAttribute('class','p1')

// const p2 = document.createElement('p')
// const p2Text = document.createTextNode("这是第二段话")
// p2.appendChild(p2Text)
// p2.setAttribute('class','p2')

// div.appendChild(p1)
// div.appendChild(p2)

// rootDiv.appendChild(span)
// rootDiv.appendChild(div)

document.body.appendChild(rootDiv)
