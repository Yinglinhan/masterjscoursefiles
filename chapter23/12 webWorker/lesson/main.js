

const worker = new Worker('worker.js')
console.log(999)

worker.addEventListener('message', function (e) {
  console.log('收到了', e.data)
})

worker.postMessage('1')