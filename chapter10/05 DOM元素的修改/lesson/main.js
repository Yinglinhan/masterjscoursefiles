// 改变样式
// HTMLElement.style CSSStyleDeclaration  样式属性 小驼峰写法
// 一定要加单位
const h1 = document.getElementById("test")

// console.log(h1.style)

// h1.style.backgroundColor = "red"
// h1.style.backgroundColor = '#000'
// h1.style.fontSize = "120px"

// Element.classList    DOMTokenList 类数组
// 四个都是方法   add  remove  toggle 有就删除 没有就加上  contains 是否包含
// console.log(h1.classList)
// h1.classList.add('bgred')
// h1.classList.remove('bgred')
// h1.classList.toggle('fontBig')
// console.log(h1.classList.contains('fontBig'))


// Element.className dom元素属性时 用className写法

// console.log(h1.className)
// h1.className="fontBig"

// style样式优先级高于class

// 改变元素额属性

/* 
Element.getAttribute  无法获取用户自定义属性
Element.setAttribute
Element.removeAttribute
Element.hasAttributes
*/
// console.log(h1.getAttribute('id'))
// h1.setAttribute('id',"abc")
// console.log(h1.getAttribute('id'))
// h1.setAttribute('style',"background-color:red")


// 改变元素子元素

/* 

HTMLElement.innerText 可读可写 
  对应元素中包含的所有文本内容，无论文本在子树中的哪个层级

  读取时 它会按照深度优先的顺序将子树中所有文本 节点的值拼接起来

  写入时 会移除所有后代并插入一个包含该值的文本节点

  设置innerText会移除元素之前所有的后代节点，完全改变DOM子树

  div.innerText = div.innerText

Element.innerHTML 可读可写  修改整体DOM元素内部的结构 
  读取时，会返回元素所有后代的HTML字符串，包括元素、注释和文本节点，不同浏览器返回可能稍有区别

  写入时，会根据提供的字符串值以新的DOM子树替代元素中原来包含的所有节点（替换子节点 ） 如果有特殊字符 会转换成实体符号


Element.outerHTML 可读可写
  读取时  返回该元素本身及其所有后代元素的HTML字符串

  写入时  会取代元素本身及其后代所有元素

*/

/* 
Element.id

HTMLElement.title

HTMLElement.hidden 

*/

/* 

1. 定义一个函数，可以找到所有span元素，并让span中文字一开始显示为0，然后让元素中显示的数字 ，每隔一秒 加1


2. 定义一个函数，可以自动切换某个元素的字体颜色，在三种颜色中每隔一秒依次切换

*/