
## Symbol 符号

数字 Number 字符换 String 布尔 Boolean 未定义 Undefined 空 Null

Symbol 符号 对象的属性名（非字符串形式的对象属性名称）

Symbol的描述就是用来调试观看用的，具有语义化的效果

### 意义
1. 避免属性名冲突
2. 用于创建内置方法和属性




Object.getOwnPropertySymbols()  获取对象的所有符号属性

### Symbol.for()  Symbol.keyFor()
Symbol.for() 管理全局Symbol注册表 有就取 没有就创建

Symbol.keyFor() 传入的是symbol 有的话 返回字符串标记 没有就返回undefined

### 内部方法和属性

Symbol.asyncIterator

Symbol.hasInstance 用于对象的 instanceof 操作符

Symbol.isConcatSpreadable

Symbol.iterator 

下面这四个和正则相关

Symbol.match

Symbol.replace

Symbol.search

Symbol.split




Symbol.species 

Symbol.toPrimitive

Symbol.toStringTag

Symbol.unscopables