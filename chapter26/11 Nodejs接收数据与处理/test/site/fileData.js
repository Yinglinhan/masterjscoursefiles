const fileInput = document.querySelector('input[type="file"]');



fileInput.addEventListener('change', function (event) {
  const file = fileInput.files[0];
  console.log(file)
  console.log(file.name); // 输出文件名
  console.log(file.size); // 输出文件大小
  console.log(file.type); // 输出文件类型

  console.log(file)
  console.log(999)
})

document.getElementById('button').addEventListener('click', function (event) {



  document.getElementsByTagName('span')[0].innerHTML = 'Uploading...';

  const file = fileInput.files[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    console.log(reader.result)
    fetch('http://localhost:3000/send', {
      method: 'POST',
      body: reader.result,
      headers: {
        'Content-Type': 'image/jpg',
        'Content-Length': reader.result.byteLength,
      }
    }).then(response => {
      console.log(response.text());
    }).catch(error => {
      console.error(error);
    });
  }

  reader.readAsArrayBuffer(file);



});


