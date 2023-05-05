function curry(f) { // curry(f) 执行柯里化转换
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// 用法
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

// alert(); // 3
// curriedSum(1)(2) 

const fun1 = curriedSum(3)
const result = fun1(6)

console.log(fun1(6),fun1(11),fun1(12)) // 7