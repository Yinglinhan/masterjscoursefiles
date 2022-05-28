// document.createElement()
// document.createTextNode()
// document.createAttribute() 

// Element.setAttributeNode 把这个传入的节点设置为该元素的属性

// Element.getAttributeNode 传入属性名 获取到该属性名的节点



// Node.appendChild 默认会添加到子节点类数组中最后一个
// Node.insertBefore 添加到某个元素之前 
// 用某个元素的父元素来调用 第一个参数是要插入的元素 
// 第二个是参考元素
const div = document.createElement("div")
// const textNode = document.createTextNode("新添加的")
// const textNode2 = document.createTextNode("22")
// console.log(div)
// div.appendChild(textNode)
// div.appendChild(textNode2)
div.innerText = "哈哈哈哈"
div.style.fontSize = "100px"
console.log(div)
document.body.appendChild(div)

// document.body.appendChild(div)
const h1 = document.querySelector('.en')
// console.log(h1)
h1.parentNode.insertBefore(div,h1)

// h1.parentNode.insertBefore(div,h1)
// console.log(document.body.childNodes)

/* 

Node.removeChild()

Node.replaceChild()

*/

// 同一个元素 只能添加到DOM tree 上某一个地方 不能重复添加

// 如果文档中已经存在的节点传给appendChild，则这个节点会从之前的位置被转移到新位置

    /*   
      <div>
        <span>abc</span>
        <div>
          <span>888</span>
        </div>
      </div> 
    */

    // 先创建最外面元素
    // 然后依次创建添加内部元素 并 appendChild到这个外面元素上
    // 最后只要把这个最外层的div元素添加到DOM上就好了


    // Text.splitText()
    // Node.normalise()

    /* 
    1.创建一个方法 可以最前面插入 node.insertAfter(ele)
    2. 用js的方式创建以下结构的domtree ，并让其显示在页面上

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