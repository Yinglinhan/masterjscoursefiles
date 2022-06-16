// 功能检测

if (window.addEventListener) {
  // window.addEventListener("devicemotion", handleMotionEvent, false);



} else {
  // alert("该浏览器不支持devicemotion");
  // onload
}


// 同一个元素 手机端 也有touch事件 pc端也有mouse事件 如何弄?
// BOM 浏览器对象模型


// ios 所有苹果手机
/* 

注意 所有ios端的浏览器的内核 都是苹果的

iOS 下的浏览器都是 Safari / WebKit 套壳

“iOS上的所有浏览器，实际上都是苹果官方浏览器Safari的换皮产品，Chrome、Firefox、Edge等都不例外。苹果还限制了第三方浏览器开发功能。”

*/

// 事件函数中的this  非箭头函数 指向的 就是绑定他的那个dom元素


const img = new Image();
img.onload = ()=>{  console.log(this) };

// img.onload()

img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Culinary_fruits_front_view.jpg/2560px-Culinary_fruits_front_view.jpg'
