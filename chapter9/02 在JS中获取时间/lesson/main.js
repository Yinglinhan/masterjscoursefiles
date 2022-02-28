// GMT  Greenwich Mean Time 格林尼治标准时间
// 以前的世界标准时间
// 零时区 中时区的另一种称呼

// GMT + 8   
// bj 16:00  london 8:00
// London 10:00  Beijing  18:00

// UTC  Coordinated Universal Time 协调世界时
// 现在使用的世界标准时间
// 协调世界时组织 
/* 
因为地球自转越来越慢，每年都会比前一年多出零点几秒，每隔几年协调世界时组织都会给世界时+1秒，让基于原子钟的世界时和基于天文学（人类感知）的格林尼治标准时间相差不至于太大。并将得到的时间称为UTC
*/
// GMT = UTC + 0
// 北京时间  UTC + 8 
// CST（北京时间）(China Standard Time)
// PST（太平洋时间）

// 东二区 8:00 发了一个新的帖子 
//  UTC + 2  8:00 -> UTC + 0   6:00
// 东一区 7:00 
// 东八区 14:00 

// Date 

// 不需要具体时间，只需要一个相对时间
// Date.now() -> 距离1970 1月1日 0点0时0分 （UTC）的毫秒数  -> 时间戳
// console.log(Date.now())
/* 
  const firstClick =  Date.now()

  const secondClick = Date.now()

  多3000毫秒
*/
// Date.parse() 把某个时间字符串 转成毫秒数
// '1995-12-17T03:24:00' ISO
// console.log(Date.parse('1995-12-17T03:24:00'))


// 需要具体的时间的场景
/* 

var today = new Date(); 当前时间 
var today = new Date(Date.now()) 传入毫秒数 时间戳
var birthday = new Date('1995-12-17T03:24:00');
var birthday = new Date(1995, 11, 17, 3, 24, 0);
*/

/* 
getDate 月的第几天   1--31

getDay  返回星期几  0 表示星期天  0-6 

getMonth  为基于0的值（0表示一年中的第一月

getFullYear( ) 年份

*/
let now = new Date();
// console.log(now.getHours())
// console.log(now.getUTCHours())
console.log(now.toISOString())
console.log(now.toString())
// toISOString UTC 0时区时间 字符串格式
// toString 当地时间 字符串格式

// 2022.2.22
console.log(now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate())
// 1997.7.1

/* 
自己定义一个格式化方法 让每一个日期实例都可以用 返回一个包含该Date实例的日期信息数据
 {
	year:'xx',
	month:'xxx',
	date
 }
*/