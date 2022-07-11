// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
//   console.log(2);
// });

// promise.then(() => {
//   console.log(3);
// });

// console.log(4);

// 1  2  4  3

// const promise1 = new Promise((resolve, reject) => {
//   console.log('promise1')
//   resolve('resolve1')
// })
// const promise2 = promise1.then(res => {
//   console.log(res)
// })
// console.log('1', promise1);
// console.log('2', promise2);


// promise1   1 Promise{}   2 Promise{}   resolve1


// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// fn().then(res => {
//   console.log(res)
// })

// console.log('start')

// 1 start   success


const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("start");

fn().then(res => {
  console.log(res);
});

// start  1  success
