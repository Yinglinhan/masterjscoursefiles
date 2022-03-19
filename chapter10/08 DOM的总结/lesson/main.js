// 类型 实例 & 原型 继承的意义
function a(){

}
class A {

}


// 命名空间 NS -> NameSpace 命名空间
// 命名空间存在的意义 是为了防止冲突

/* 

<table>
	<tr>
		<td>Apples</td>
		<td>Bananas</td>
	</tr>
</table>

<table xmlns="xxxxxxx">
    <name>African Coffee Table</name>
    <width>80</width>
    <length>120</length>
</table>


<svg width="173" height="252" viewBox="0 0 173 252" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="173" height="252" fill="#E54444"/>
</svg>


xmlns -> xml namespace
*/



/* 

NamedNodeMap  Element.attributes
DOMTokenList  Element.classList
NodeList        querySelector
HtmlCollection  ClassName
CSSStyleDeclaration  HTMLElement.style


*/


// DOM 不是JS语言标准中的东西 其他语言中也可以使用DOM

/* 

# Python DOM example
import xml.dom.minidom as m
doc = m.parse("C:\\Projects\\Py\\chap1.xml");
doc.nodeName # DOM property of document object;
p_list = doc.getElementsByTagName("para");

*/

/// DOM的接口标准的level问题
// DOM4