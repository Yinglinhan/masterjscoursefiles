const fileInput = document.querySelector('input[type="file"]');

// const htmlForm = document.querySelector('form');
// const fromData = new FormData(htmlForm);


// fileInput.addEventListener('change', () => {
//   const form = new FormData();
//   const file = fileInput.files[0];
//   form.append('myimg', file);
//   // console.log(file.name); // 输出文件名
//   // console.log(file.size); // 输出文件大小
//   // console.log(file.type); // 输出文件类型

//   console.log(form._boundary);
//   // console.log(form._boundary);

//   fetch('http://localhost:3000/send', {
//     method: 'POST',
//     body: form,
//     // headers: {
//     //   'Content-Type': 'multipart/form-data'
//     // }
//   }).then(response => {
//     console.log(response.text());
//   }).catch(error => {
//     console.error(error);
//   });
// });



document.getElementById('button').addEventListener('click', function (event) {
  // event.preventDefault();

  // document.getElementsByTagName('span')[0].innerHTML = 'Uploading...';
  // const file = fileInput.files[0];
  // console.log(file.name); // 输出文件名
  // console.log(file.size); // 输出文件大小
  // console.log(file.type); // 输出文件类型

  // console.log(file)


  // const reader = new FileReader();
  // reader.onload = function (e) {
  //   console.log(reader.result)
  //   fetch('http://localhost:3000/send', {
  //     method: 'POST',
  //     body: reader.result,
  //     headers: {
  //       'Content-Type': 'image/jpg',
  //       'Content-Length': reader.result.byteLength,
  //     }
  //   }).then(response => {
  //     console.log(response.text());
  //   }).catch(error => {
  //     console.error(error);
  //   });
  // }

  // reader.readAsArrayBuffer(file);


  document.getElementsByTagName('span')[0].innerHTML = 'Uploading...';

    const file = fileInput.files[0];
  console.log(file.name); // 输出文件名
  console.log(file.size); // 输出文件大小
  console.log(file.type); // 输出文件类型

  console.log(file)
  console.log(999)

  fetch('http://localhost:3000/send', {
    method: 'POST',
    body: '123123213123',
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',

    }
  }).then(response => {
    return response.text()
  }).then(data => {
    console.log(data)
  })
    .catch(error => {
      console.error(error);
    });
});


