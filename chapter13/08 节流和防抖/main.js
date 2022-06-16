// function debounceFunc(fn,delay) {
//   let timer = null;
//   return function() {
//     let _that = this; // 这里要解释下
//     let args = arguments; // 这里要用变量保存下 是为了后面不冲突 可以传


//       clearTimeout(timer);
  

//     timer = setTimeout(function(){
//       fn.apply(_that,args);
//     },delay)
//   }
// }


// function outPut(e,content) {
//   console.log(e,content)
// }

// const outPutdeBounce = debounceFunc(outPut,1000)
// document.addEventListener('mousemove', (e)=>{
//   outPutdeBounce(e,'111111')
// }, false);







function createDeBounceFunc(fn,delay) {
  let timer = null;

  return function() {
    let _this =  this;
    let args = arguments;
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(_this,args)
    },delay)
  }

}

function test(e,content){
  console.log(e,content)
}




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



const bounceTest = createBounceFunc(test,1000)
const throttleTest = createThrottleFunc(test,1000)
document.addEventListener('mousemove',(e)=>{
  bounceTest(e,'666')
})



