/* 
1. 先搞定基本的状态
2. 化繁为简 从最基本的开始
3. 碰到问题 再解决问题
4. 通过备注分析和记录自己的思路
5. 写代码没有唯一答案 能实现的就是ok的
*/


// 尽量写活代码 不要写死代码 写活代码的关键其实就是找规律

/* 
mousedown
mouseup
click
dbclick

mousemove

事件对象中有个属性 buttons

*/

document.body.addEventListener('mousedown', function(e){
  console.log(e)
})

/* 
0 表示没有按键或变化
1 表示 左
2 表示 右
4 表示 中
  多个按键数值相加
*/