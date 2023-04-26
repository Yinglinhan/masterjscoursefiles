# 属性描述符
用来描述某个属性有哪些特性

## 数据属性（描述符）
[[ Configurable ]] 是否可配置 布尔值  管理相关描述符属性是否可修改  是否可删除该属性 delete
[[ Enumerable ]] 是否可枚举 布尔值 true 就能被for in循环出来   false 不能
可以通过 Object.keys() 方法、Object.values() 方法或 Object.entries() 方法获取到

[[ Writable ]] value的值是否可修改 布尔值  如果是false 无法通过赋值符号修改值
[[ Value ]] 数据的值 默认undefined

## 访问器属性（描述符）
setter 设置器 getter 访问器

[[ Configurable ]]

[[ Enumerable ]]

[[ Get ]]

[[ Set ]]

如果你尝试在一个已经定义了访问器属性的对象上直接定义同名的数据属性，那么它将会覆盖原有的访问器属性。
### 获取某个对象的属性描述符
Object.getOwnPropertyDescriptors()
Object.getOwnPropertyDescriptor()


### 设置属性描述符

Object.defineProperty()

Object.defineProperties() 

#### 用defineProperty设置
数据属性 未设置都是false
访问器属性  未设置都是false


#### 字面量方式定义

数据属性 未设置都是true
访问器属性 未设置是true

### class方式定义的类也能实现属性描述符
直接通过类型代码实现的要么是原型上的 要么是类本身上的

### 对象是一组属性和方法的无序集合
for-in 循环、Object.keys()的枚举顺序是不确定的，取决于Javascript引擎，可能因浏览器而异

Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()和Object.assign()的枚举顺序是确定的。先以升序枚举数值键，然后以插入顺序枚举字符串和符号键。在对象字面量中定义的键以它们的逗号分隔的顺序插入。

### 可枚举和可遍历是两个概念
在 JavaScript 中，可枚举（enumerable）和可遍历（iterable）是两个不同的概念。

可枚举属性指的是对象的属性是否可以被 for...in 循环枚举到。一个对象的可枚举属性可以通过 Object.keys() 方法、Object.values() 方法或 Object.entries() 方法获取到。

可遍历对象指的是实现了 @@iterator 方法的对象，该方法返回一个迭代器对象，可以用于遍历该对象的元素。可遍历对象可以使用 for...of 循环进行遍历操作。例如，数组、Map、Set 等都是可遍历对象。

虽然可枚举属性和可遍历对象都与遍历相关，但它们是不同的概念。一个对象可以同时拥有可枚举属性和可遍历性，也可以只有其中的一种或者都没有。

**注意**
在ES6中，Object.keys()方法的行为被修改，它现在按照属性添加的顺序返回对象自身可枚举属性的名称数组。这意味着，如果您使用ES6或更高版本的JavaScript，那么Object.keys()方法的枚举顺序应该是确定的。

需要注意的是，虽然ES6规范规定了Object.keys()方法的枚举顺序，但是仍有一些旧版浏览器可能不支持这种行为。因此，在编写代码时，最好使用其他方法来控制遍历对象属性的顺序，例如使用Map或Array来存储属性和值对，并按照特定顺序遍历它们。

总之，如果您使用ES6或更高版本的JavaScript，并且需要遍历对象属性并保证枚举顺序，则可以使用Object.keys()方法。但是，在旧版浏览器中，Object.keys()方法可能无法保证枚举顺序，因此最好使用其他方法来控制遍历对象属性的顺序。