//childNodes


// Document
/* 
document.getElementById 
  - 传入一个参数 id值 
  - 返回 元素引用

document.getElementsByClassName
  - 传入一个参数 css的类名 可以多个类型 空格间隔
  - 返回的是 HTMLCollection 类数组 

document.getElementsByName
  - 传入一个参数  元素的name属性的值
  - 返回一个NodeList 类型的类数组

document.getElementsByTagName 
  - 传入参数 标签名  大小写保持和html元素一致
  - 返回 HTMLCollection 类数组


document.querySelector
  - 传id 传class名都可以  要按照class中的写法 #test .test
  - 返回元素 第一个匹配的
document.querySelectorAll  
  - 获取所有匹配的
  - 返回NodeList
 
*/


// NodeList 静态数据 HTMLCollection 动态数据
// const h1 = document.getElementById('test')
// console.log(h1)
// const cn = document.getElementsByClassName('en tt')
// console.log(cn)
// const nameElement = document.getElementsByName('test')
// console.log(nameElement)

// const test = document.querySelector(".b > .tt")
// console.log(test)

// Element 
/* 
没有通过id获取的方式
Element.getElementsByClassName
Element.getElementsByTagName
Element.querySelector
Element.querySelectorAll
*/
const body = document.getElementsByClassName('b')
// console.log(body[0])
const result = body[0].querySelector('.en.tt')
console.log(result.childElementCount)

// Node 类型
// Node.nodeName 大写的标签名
// Node.nodeValue
/* 
对于文档节点来说, nodeValue
返回null
. 对于text, comment,来说, nodeValue返回该节点的文本内容
. 对于 attribute 节点来说, 返回该属性的属性值.
*/
// Node.nodeType

/* 

Node.parentNode 父节点

Node.previousSibling  前一个节点

Node.nextSibling 后一个节点

Node.firstChild  第一个子节点

Node.lastChild  最后一个子节点

*/

// Node.childNodes  返回的是一个类数组 NodeList

// Node.hasChildNodes() 返回布尔值 表明当前节点是否有子节点

// Node.contains() 传入某个节点的引用 返回的是布尔值 传入的节点是否为该节点的后代节点


// Element 类型上的方法
// Element.tagName 标签名 大写

// Element.attributes  返回NamedNodeMap类型实例 包含所有该元素的属性节点

/* 

Element.children 只反映Element类型及子类型的实例

Element.childElementCount 只反映Element类型及子类型的实例

Element.firstElementChild

Element.lastElementChild
*/

/* 

1.定义一个函数，可以判断某个元素是否有子元素，如果有 依次输出所有子节点的nodeValue到控制台

2.定义一个函数 能够找到这个元素的的最深入的最后一个子元素 并返回 //childNodes

*/
