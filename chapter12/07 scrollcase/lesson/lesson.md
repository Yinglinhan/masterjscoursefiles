# scroll 事件
内容要滚动起来才会触发

最大滚动距离 = 内容高度 - 视口高度/视口元素高度
最小滚动距离 = 0

window.scrollY
Element.scrollTop


## 文档滚动相关的元素垂直移动的交互
元素在视口内保持不动  
元素translateY初始基础值 + scrollY 

元素在也跟随文档滚动，但是比一般元素慢   
元素translateY初始基础值 + scrollY*小于1的正小数

元素在也跟随文档滚动，和其他正常元素方向相反  
元素translateY初始基础值 + scrollY*大于1的数



元素的translateY不改变的时候 它就会跟随文档滚动
在某个目标scrollY的点 让元素的translateY的值就不再改变了
元素就会在某个scrollY距离之后 从不动到跟随文档滚动

元素一开始跟随滚动 然后在某个scrollY距离之后 就保持原地不动
在该目标scrollY之后 元素的translateY 要加上 每次触发之间的scrollY的差值

## 文档滚动的其他元素变化交互
要么跟scrollY 直接发生关系 要么跟scroll事件每次触发之间的scrollY的差值产生关系