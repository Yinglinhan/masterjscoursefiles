// Uncaught 未捕获 caught catch 捕获

// console.log(a)
// try中的代码报错（立即停止）并不会在控制台报错
// 会立即开始执行catch中的代码
// 不管用不用错误对象 这个错误对象的定义 一定要写
// finally （可写可不写） 中的代码 一定会运行
// 只要代码中包含了finally子句，try块或者catch块中的return语句就会被忽略
// 如果出错 并执行了catch块中代码之后，finally块中的代码仍执行
try {
  console.log(a)
  console.log(111)
}catch(e) { // 错误对象 message 属性是都有的
  console.log(e.message)
}finally{

}

// try 尝试 catch 捕获抓住
// 试一试这部分代码有没有问题 如果有问题 我捕获 没问题我就啥也不干


