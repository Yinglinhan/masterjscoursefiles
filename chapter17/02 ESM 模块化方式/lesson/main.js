// ECMAScript 2015  JavaScript module
// ESM 

// 一般导出用花括号接 保持同名
// 所有都放到一个对象里
// 可以按需导入 不需要就不导入
// import {abc,T} from './moduleA.js'

// import * as x from './moduleA.js'


// 默认导入 自定义标识符 直接可以
// 看见和一般导入 一起使用
// import xxxx from './moduleA.js'

// import { T } from  './moduleA.js'



// console.log(x.abc())

// 动态加载
import('./moduleA.js')
  .then((module) => {
    // Do something with the module.
    console.log(module)
  });