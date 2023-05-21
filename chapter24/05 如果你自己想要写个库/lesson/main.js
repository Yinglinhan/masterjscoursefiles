// let name = 123
// function ttt(){

// }

// export default {
//   test() {
//     console.log(name)
//     ttt()
//   },
//   abc: 999
// }


export default class Abc {
  constructor() {
    this.name = 123
    this._name = 666
  }
  _test() {
    console.log(this.name)
  }
}

import xxx from 'xxx.js'

// const abc