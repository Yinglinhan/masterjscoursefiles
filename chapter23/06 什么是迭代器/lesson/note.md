##  可迭代对象
for of
...
Array.from


Symbol.iterator

### 可迭代对象的被迭代过程
1. 调用可迭代对象的Symbol.iterator方法 => 迭代器 工厂  函数
2. 调用Symbol.iterator方法返回的迭代器对象 => 迭代器   对象
3. 迭代器对象上有next方法，调用next方法，返回一个迭代结果对象 IteratorResult {value: any, done: boolean}
4. {value: any, done: boolean} 如果整个迭代过程完成，也就是所有数据都迭代完了那么 done会变成true，否则就是false。value就是当前迭代的值。如果全部数据都迭代完，value就会变成undefined
5. 迭代器对象是一次性的，只能做一个整体的迭代，迭代完成之后就会被销毁，不能再次使用


### 迭代器的提前终止与关闭
关闭的情况
有些迭代器上是有return方法的，调用return方法，可以提前终止迭代过程，也可以关闭迭代器对象。 迭代器就完全销毁了，不能再次使用了。

数组和很多类数组是没有return方法，不能提前关闭的


提前终止
1. 解构操作时未消费所有值
2. for-of 循环通过break continue return  throw提前退出


### 迭代器本身也是可迭代的
迭代器被迭代时，会迭代产生迭代器的那个可迭代对象
迭代可迭代对象 或者 迭代可迭代对象的Symbol.iterator方法返回的迭代器对象，都是一样的效果


## 可以给普通对象定义迭代器工厂函数实现可迭代
```javascript
const testObj = {}

testObj[Symbol.iterator] = function () {
  let i = 0
  return {
    next: function () {
      return {
        value: i++,
        done: i > 10
      }
    }
  }
}
/**
 * 第一次 
 * {value:0,done:false}
 * 第二次
 *  {value:1,done:false}
 * 
 * ……
 * 
 * 第十次
 * {value:9,done:false}
 * 第十一次
 * {value:10,done:true}
 */


for (let i of testObj) {
  console.log(i)
}
```