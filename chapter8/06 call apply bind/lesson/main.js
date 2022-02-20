// 任何函数都可以直接使用 
// 改变 或者 指定调用函数中的this指向

// call  apply  bind

// function test(a,b){
//     console.log(this, a, b)
// }

// test.call({a:123},6,9)
// test.apply({a:123},[6,9])
// const t = test.bind({a:123},6,9)

// call 第一个参数是this指向数据 后面是作为函数的参数 可任意多个  立即执行
// apply 最多两个 第一个参数是this指向数据 第二个就是所有实参数据的数据 立即执行

// bind 返回函数 可后续调用 传参和call一样

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
  
// function Food(name, price) {
//      // this -> {}
//     Product.call(this, name, price);
//     this.category = 'food';
// }
  
// console.log(new Food('cheese', 5).name);

// xxx instanceof  Array

// console.log(Object.prototype.toString.call([]),{}.toString())
// console.log([])

// Object.prototype.toString.call([]) === "[object Array]"

// call apply  只在函数调用他们两个时 生效 
// bind 返回一个新函数 该函数的this指向绑定 一直生效
// 都不会影响原函数



function test(a,b){
    console.log(this, a, b)
}

const t = test.bind({a:123},6,9)

test()
