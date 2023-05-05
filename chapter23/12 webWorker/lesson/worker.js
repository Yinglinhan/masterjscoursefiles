console.log('worker')

self.addEventListener('message', function (e) {
  console.log('worker收到了', e.data)
})
self.postMessage({ a: 11 })