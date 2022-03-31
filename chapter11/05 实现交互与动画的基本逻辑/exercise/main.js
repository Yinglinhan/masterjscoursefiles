// 定义一个函数  传入两个参数 限定一个范围 都是正整数
// 会返回这个限定范围内的一个任意正整数

// 4 - 10    20 - 50
// 0 - 6  -4   0 - 30    -20
function rangeRandom(begin,end){
  const num = end - begin
  
  return  Math.round(Math.random() * num) + begin
}

console.log(rangeRandom(5,30))


