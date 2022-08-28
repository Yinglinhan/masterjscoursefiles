// cookie是和网址强相关

// set-cookie

// cookie一般来是通过响应头来设置的
// cookie是会自动发送到相应的网址（通过请求头发送） （有相应网址的cookie前提下）
// cookie和访问的domain和path强相关
// cookie 是有有效期的 超过有效期会自动删除
// 每个cookie 大小不超过4kb  4 * 1024byte


// 没有 SameSite 属性的 Cookies 默认为 SameSite=Lax

// let date = new Date(Date.now() + 86400e3);
// date = date.toUTCString();

// encodeURIComponent()   
// document.cookie = "user=hellocode;max-age=" + 24*50*60  + ''
// document.cookie = "user=hellocode111"


// 修改cookie
// 删除cookie  删除 max-age 设置为0 或者为负数
// console.log(document.cookie)



