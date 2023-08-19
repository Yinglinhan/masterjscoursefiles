const input = document.querySelector('input');

const formData = new FormData();


console.log(input);
let fileData = null
input.addEventListener('change', (e) => {
  console.log(input.files)

  const file = input.files[0];

  formData.append('pngImg', file);

  console.log(file.name); // 输出文件名
  console.log(file.size); // 输出文件大小
  console.log(file.type); // 输出文件类型




  // FileReader

  // const reader = new FileReader();
  // reader.onload = (e) => {

  //   fileData = reader.result;
  //   console.log(fileData)

  // }
  // // readAsText
  // // readAsDataURL
  // reader.readAsArrayBuffer(file);

})

const btn = document.querySelector('#button');

// 文字字符
// ArrayBuffer
// Blob
// formData

// ReadableStream



const arrayData = new Int32Array([1, 2, 3, 1])
console.log(arrayData)

const blobData = new Blob(new Int32Array([1, 2, 3, 1]), { type: 'application/octet-stream' })


btn.addEventListener('click', async (e) => {
  e.target.style.backgroundColor = 'blue';




  const reponse = await fetch('http://localhost:3000/send-blob', {
    method: 'POST',
    body: blobData,
    headers: {
      "Content-Type": "application/octet-stream"
    }
  })


  const data = await reponse.text();
  console.log(data)



  // const reponse = await fetch('http://localhost:3000/send-form', {
  //   method: 'POST',
  //   body: formData,
  //   headers: {
  //     "Content-Length":reader.result.byteLength
  //   }
  // })

  // const data = await reponse.text();
  // console.log(data)



})