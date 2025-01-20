const input = document.querySelector('input');

const formData = new FormData();

let fileDataBlob = null
input.addEventListener('change', (e) => {
  console.log(input.files)

  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {

    fileDataBlob = new Blob([reader.result], { type: file.type })


  }

  reader.readAsArrayBuffer(file);

})

const btn = document.querySelector('#button');





btn.addEventListener('click', async (e) => {
  e.target.style.backgroundColor = 'blue';

  const reponse = await fetch('/send-png', {
    method: 'POST',
    body: fileDataBlob,
    headers: {
      "Content-Type": "image/png"
    }
  })


  const data = await reponse.blob();
  const url = URL.createObjectURL(data);
  console.log(data)
  const img = document.createElement('img');
  img.src = url;
  document.body.appendChild(img);




})