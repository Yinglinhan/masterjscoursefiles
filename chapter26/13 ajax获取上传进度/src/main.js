const input = document.querySelector('input');

const btn = document.querySelector('#button');


btn.addEventListener('click', async (e) => {
  e.target.style.backgroundColor = 'blue';

  var xhr = new XMLHttpRequest();

  var file = input.files[0];

  // 监听上传进度
  xhr.upload.addEventListener('progress', function (event) {
    if (event.lengthComputable) {
      var percentComplete = event.loaded / event.total * 100;
      console.log('上传进度：' + percentComplete + '%');
    }
  });

  // 监听上传完成事件
  xhr.addEventListener('load', function (event) {
    console.log('上传完成');
  });

  // 监听上传出错事件
  xhr.addEventListener('error', function (event) {
    console.log('上传出错');
  });

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = xhr.responseText;
        console.log('响应的数据：' + response);
      } else {
        console.log('请求出错：' + xhr.status);
      }
    }
  };

  // 将整个文件作为单个块上传
  xhr.open('POST', '/send-ajax', true);
  xhr.setRequestHeader('Content-Type', 'image/png');
  xhr.send(file);


})