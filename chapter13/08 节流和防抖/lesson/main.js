
// 防抖与节流  debounce    throttle
// 能在一些高频触发的事件中降低代码的执行频率的功能（函数）

// resize  mousemove   输入相关的事件


// 防抖 过略掉所有前面的事件触发，直到最后一次触发可以真正让我们需要执行的代码执行

// setTimeout

// let timer

// document.addEventListener('mousemove', function(e) {
//   clearTimeout(timer)
//   timer = setTimeout(function() {
//     console.log(666)
//   },1000)
// })

// let timer
// function debounce(func, delay) {
//   clearTimeout(timer)
//   timer = setTimeout(function() {
//     func()
//   }, delay)
// }



// function test1(){
//   console.log('test1')
// }

// document.addEventListener('mousemove', () => {
//   debounce(test1, 2000)
// })



// 用闭包的方式实现


function test(a){
  console.log(a)
}


function createDeBounceFunc(fn,delay){
  
  let timer ;

  return function () {
      const _this = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {  
        fn.apply(_this,args);
      },delay)
  }
}

const testDeBounce = createDeBounceFunc(test,5000)



// 节流 降低核心代码的执行频率 

function createThrottleFunc(fn,limit) {
  
  let flag = true;
  
  return function() {
    const _this = this;
    const args = arguments;
   
    if(flag){
    flag = false
    fn.apply(_this,args)
    setTimeout(()=>{
      flag = true
    },limit)
   }

  }
}

const testThrottle = createThrottleFunc(test,2000)

document.addEventListener('mousemove', () => {
  testThrottle('123')
});