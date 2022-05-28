// 作用域 和 作用域链

// 函数定义被执行后 它的上层作用域链就被确定了


// function test(){}
// test()
// 当函数定义执行后 内存中会同时产生一个原型对象 然后 该函数的prototype属性会指向这个对象


// function gogogo(){}

let a = 100

{
  let b = 2000

  const obj = {
    abc(){
      console.log(b)
    }
  }
  console.log(obj)
}
// Block  块  -> 块及作用域
// Script 全局作用域 -> 用户脚本作用域数据 
// Global window对象

// console.log(window)
// unshift

// console.log(Global)
// 