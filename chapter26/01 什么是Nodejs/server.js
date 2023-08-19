

setImmediate(() => {
  console.log('setImmediate')
})

process.nextTick(() => {
  {
    console.log('tick')
  }
})
console.log(__dirname, __filename)
process.env