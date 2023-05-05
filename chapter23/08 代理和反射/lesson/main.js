
const obj = {
  name:'hellocode'
}

const proxyObj = new Proxy(obj,{
  set(target,key,value){
    console.log('set',key,value)
    
    return Reflect.set(...arguments)
  },

  deleteProperty(target,property){
    console.log('delete',property)
    
    return Reflect.deleteProperty(...arguments)
  }
})

obj.abc =1111
proxyObj.t = 888

delete proxyObj.abc
console.log(obj,proxyObj)


// const obj = {
//   a: 1
// }

// Object.defineProperty(obj, 'name', {
//   configurable: false,
//   value: 'hellocode',
//   writable: true,
//   enumerable: true
// })

// const proxyObj = new Proxy(obj, {
//   has(target, key) {
//     if (key === 'name') {
//       return false
//     } else {
//       return true
//     }
//   }
// })

// 'a' in proxyObj

// Reflect.get(obj, 'a') //  => obj.a
// console.log(Reflect.set(obj, 'name', 'kkk'))

// console.log(Reflect.set(obj, 'name', false))
// console.log(obj)