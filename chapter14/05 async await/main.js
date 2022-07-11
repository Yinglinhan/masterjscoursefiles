console.log(111)
async function test(){
  console.log('async')
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(66666)
    },1000)
  })

  console.log(result)
}
test()

console.log(222)