### 类数组的判断
1. 类数组对象具有 `length` 属性，表示其元素的个数；
2. 类数组对象的元素可以通过索引进行访问，类似于数组；


##  常见类数组
arguments
NodeList
HTMLCollection
TypedArray
String 对象
set map weakSet weakMap
Promise.all()
Promise.race()

### 类数组没有数组有的大部分方法
类数组上有什么方法可以调用 完全看该类数组自己的定义的

### 类数组转换为数组

... 直接用扩展运算符
Array.from()  

for of 可以直接迭代类数组

有Symbol(Symbol.iterator)方法的对象都可以用for of 进行迭代 也可以用扩展运算符进行转数组

