## 生成器

生成器函数的定义方式
箭头函数是不能用来定义生成器函数的

yield 只能在生成器函数中使用

```javascript
function * generatorFn()

let generatorFn = function * () {}

let foo = {
	* generatorFn() {}
}

class Foo {
	* generatorFn (){}
}

class Bar {
	static * generatorFn () {}
}
```

### yield关键字
停（继续）  

给  


接 第二次执行next方法传入的数据才能接到 只有第一个参数有效

平级的代码 只能在前面有赋值操作


委托式的用法 
把迭代目标变成yield * 后面的可迭代对象
```javascript
function * generatorFn(){
	yield * [1,2,3]
}

let gObj = generatorFn()

for(const x of gObj){
	console.log(x)
}


```


### 生成器函数执行
不会让内部代码执行 只会产生一个生成器对象并返回


### 生成器对象

是对应的生成器函数代码执行的控制器
如果调用next方法 生成器函数的代码就开始执行
两个状态 suspended 暂停  closed 关闭

如果生成器函数有最后return 一个数据
那么在生成器对象上调用next方法的时候 
在第一次返回的对象done为true的时候
value值就是函数中return的值
之后 再去让生成器对象执行next方法 那么返回的对象 {done:true,value:undefined}

生成器对象是可迭代对象，迭代器工厂函数执行返回的其实就是他自己这个生成器对象本身 => 一种自引用

有return 方法 用来提前关闭 生成器对象 
throw 用来在生成器内部抛出错误