/* 

自定义一个错误类型 ，然后定义一个函数，该函数在执行时会在某个情况下抛出这个自定义的错误

*/

class SuperError extends Error {
  constructor(message){
    super()
    this.message = message
    this.name = "superError"
  }
}

function test(a,b){
  if(arguments.length === 0){
    throw new SuperError('没有传参')
  }
  console.log(a,b)

}

test(1,2)

