// ESM 要点
/* 


- 代码是在模块作用域之中运行，而不是在全局作用域运行。模块内部的顶层变量，外部不可见
- 模块脚本自动采用严格模式，不管有没有声明`use strict`
- 模块之中，可以使用`import`命令加载其他模块（.js后缀不可省略，需要提供绝对 URL 或相对 URL），也可以使用`export`命令输出对外接口
- 模块之中，顶层的`this`关键字返回`undefined`，而不是指向`window`。也就是说，在模块顶层使用`this`关键字，是无意义的
- 同一个模块如果加载多次，将只执行一次
*/

import * as x from './moduleA.js'
console.log(this)
const  a = {
  abc(){
    console.log(this)
  }
}
a.abc()

/* 
1. 什么时候用模块化
    1. 大项目时 可复用的一些功能代码 比如计算一定范围的随机数
    2. 想要单独管理的比较大型的代码块 比如 某个类型型 某个构造函数
    3. 使用其他人的代码 或者代码库



*/

import confetti from 'https://cdn.skypack.dev/canvas-confetti';
confetti();

import lodash from 'https://cdn.skypack.dev/lodash';

console.log($,_)