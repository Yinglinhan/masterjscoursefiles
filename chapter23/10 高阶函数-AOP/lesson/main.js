

// function func1(){
//     console.log("func1");
// }

Function.prototype.after = function (fn) {
  const self = this
  return function (...args) {
    const result = self.apply(this, args)
    fn.apply(this, args)
    return result
  }
}

Function.prototype.before = function (fn) {
  const self = this
  return function (...args) {
    fn.apply(this, args)
    return self.apply(this, args)
  }
}

function method() {
  console.log('method')
}

const func = method.after(function(){
  console.log('after')
})

func()