document.getElementById('button').addEventListener('click', function (event) {

  const blobData = new Blob(['hellocode'], { type: 'text/plain' })

  console.log(blobData)

  fetch('http://localhost:3000/send', {
    method: 'POST',
    body: blobData,
    headers: {
      'Content-Type': blobData.type
    }
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data)
    })








})