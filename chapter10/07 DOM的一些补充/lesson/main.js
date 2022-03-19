//HTMLElement.dataset
// 可以访问到元素上的data-xxx  方式定义的自定义数据
// data-xx 可以设置多个
const h2 = document.getElementsByTagName('h2')
console.log(h2[0].ownerDocument)
// console.log(h2[0].dataset)

/* 

data-myname 、data-myName 可以通过myname访问

data-my-name 、data-My-Name要通过myName来访问

*/

// DocumentFragment


/* 
如果文档中的一个节点被添加到了一个文档片段，该节点就会从文档树中移除，不会再被浏览器渲染。

可以通过appendChild等方法添加文档片段到文档树，但是这样其实只是把把文档片段的内容添加到文档树，文档片段中的节点就会被渲染出来，而文档片段本身永远都不会被添加到文档树中

*/

// DocumentFragment实例  文档片段
/* 
    - div
    - div
    - span

document.createDocumentFragment()
文档片段从Node类型继承了所有文档类型具备的可以执行DOM操作的方法
所有Node类型上定义的属性和方法 都可以使用
*/


// document.createElement('div')

const script = document.createElement("script")
console.log(script)
script.text = `console.log("我是新加入的")`

document.body.appendChild(script)
// innerHTML
// 通过innerHTML属性创建的<script>元素永远不会执行

/* 
Element.insertAdjacentHTML( ) 

Element.insertAdjacentText( )


Node.isEqualNode()

Node.ownerDocument -> document

Node.cloneNode()

*/

/* 
CharacterData.length属性

CharacterData.appendData（text）

CharacterData.deleteData（offset，count）

CharacterData.insertData（offset，text）

CharacterData.replaceData（offset，count，text）

Text.splitText（offset）

CharacterData.substringData（offset，count）

CharacterData.data

*/

/* 
动态创建一个style元素 添加到head元素中
动态创建一个style元素 添加到head元素中
*/
