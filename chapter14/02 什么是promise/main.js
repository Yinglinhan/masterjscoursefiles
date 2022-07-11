// console.log('111')


// console.log(new Promise(()=>{}))

// const p1 = new Promise((success, fail) => {
//   setTimeout(() => {
//     // success(1000)
//     fail(2)
//   },3000);
// })
// let pp = 'fake';
// const p2 = p1.then(()=>{
//   // throw new Error(111)
// })

// const p3 = p2.then((res) => {
//   console.log(res)
//   return 987
// },(err) => {
//   console.log(err)
//   // return 'faileeeee'
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {

//       resolve(6666999)
//     },5000)
//   })
// })
// const p4 = p3.then((res) => {
//   console.log(res)
// })

// setTimeout(() => {
//   console.log(p1,p2,p3,pp, pp === p2)
// },4000);

// // setTimeout(() =>{
// //   console.log(p1,p2,p3)
// // },3000);
// async function test(){
//   // await p2
//   console.log('test')
// }
// test()

// console.log(333)

// const p1 = new Promise((resolve,reject)=>{
//   resolve(333);
//   console.log(333)

// })
// const p1 = Promise.resolve(1)

// const p2 = p1.then()


// console.log(p1 === p2)



// const p =  new Promise((resolve,reject)=>{

//   try {
//     throw new Error('xxx')
//   }catch(e) {

//     console.log(e)
//   }
// })


setTimeout(function() {
  console.log(1)
})


new Promise((resolve,reject)=>{
  console.log(2)
})

console.log(3)

setTimeout(()=>{
  console.log(4)
},100)
