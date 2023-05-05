## webWorker注意点

同源限制

DOM限制 无法访问dom 也没有dom相关的方法 但是可以访问navigator 和location

通信限制  无法直接通信 需要通过消息

脚本限制

文件限制


webWorker的代码 会在主线程的同步代码执行完之后才开始执行
worker 的全局对象不是window 而是self


### 传递接受数据
postMessage 方法
message 事件 （onmessage）