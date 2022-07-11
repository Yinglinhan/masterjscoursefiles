function getDataFromUrl(url, data, callback) {
  const randomDelay = Math.random().toFixed(3) * 10000;

  setTimeout(() => {  
    callback()
  },randomDelay)

}



getDataFromUrl('http://aaaaaaaa','123123',(resData)=>{
  console.log('received data')
})

