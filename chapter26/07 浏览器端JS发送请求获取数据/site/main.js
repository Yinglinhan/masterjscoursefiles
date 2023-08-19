
async function getData() {
  const response = await fetch('http://localhost:3000/getimg')

  const data = await response.blob()

  console.log(data)

  const url = URL.createObjectURL(data)

  const link = document.createElement('a');
  link.href = url;
  link.download = 'anabasdasdsada.png';
  link.click();


  // const data = await response.blob()
  // const url = URL.createObjectURL(data)
  // const image = document.querySelector('img')
  // image.src = `data:image/png;base64,${data}`

  // console.log(url)


}

getData()