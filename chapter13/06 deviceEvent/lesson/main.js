// deviceorientation 手机转动 
//  devicemotion 手机移动

// orientationchange 横屏竖屏判断

/* 
绑定在window上

新的是用 screen.orientation  change 事件

事件对象中没有什么有价值的东西
 event.target -> window
 window.screen.orientation.angle\
 
 screen.orientation.type 
 "portrait-primary",  手机向上竖屏

  "portrait-secondary", 手机朝下竖屏

 "landscape-primary", 手机向左 横屏

 "landscape-secondary". 手机向右 横屏
*/

// window.addEventListener("orientationchange", event => {
//  console.log(screen.orientation.angle,screen.orientation.type);
// });

// window.onorientationchange = event => {
//   console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
// };

// 方式一
// screen.orientation.onchange = (e)=>{
//   console.log(e)
//  }

// 方式二
screen.orientation.addEventListener('change',(e)=>{
  // console.log(e)
  console.log(screen.orientation.type,screen.orientation.angle)
})



// ios需要https协议 而且还需要授权

// deviceorientation 手机转动 
// 绑定在window上

// window.ondeviceorientation = (e)=>{
//   console.log(9999)
// }

// window.addEventListener('deviceorientation',(e)=>{
//   console.log(e)
// },true)

/* 
alpha 0-360 浮点数  表示围绕z轴旋转时y轴转动的度数 （左右转）

beta -180 -180 浮点数  表示围绕x轴旋转时z轴转动的度数 （前后转）

gamma -90 - 90 浮点数  表示围绕y轴旋转时z轴轴转动的度数 （扭转）

*/




// devicemotion 手机移动
// 绑定在window上
/* 

event对象 

acceleration xyz各个维度的加速信息 不考虑重力情况下

accelerationIncludingGravity  反应各个维度的加速信息，包含z轴自然重力加速度

interval 表示从设备获取数据的间隔时间，单位是毫秒

rotationRate 包含alpha beta gamma 属性 表示设备朝向

*/