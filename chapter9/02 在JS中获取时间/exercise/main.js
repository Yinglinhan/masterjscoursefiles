/* 
自己定义一个格式化方法 让每一个日期实例都可以用 返回一个包含该Date实例的日期信息数据
const obj = {
	year:'xx',
	month:'xxx',
	date
}
*/

Date.prototype.collect = function(){
  return {
    year:this.getFullYear(),
    month:this.getMonth(),
    day:this.getDate(),
    hour:this.getHours(),
    min:this.getMinutes(),
    second:this.getSeconds(),
  }
}

const date = new Date()
console.log(date.collect())