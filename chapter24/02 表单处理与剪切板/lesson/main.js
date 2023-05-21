// FormData 可迭代对象

// const btn = document.querySelector('#btn')
// const form = document.querySelector('#table')

// btn.addEventListener('click', function () {
//   const formData = new FormData(form)
//   console.log(formData)
//   for (let i of formData) {
//     console.log(i)
//   }
// })

// navigator.clipboard
//   .readText()
//   .then(
//     (clipText) => (document.querySelector(".editor").innerText += clipText)
//   );


navigator.clipboard.writeText("xxx").then(
  () => {
    /* clipboard successfully set */
    console.log('success')
  },
  () => {
    /* clipboard write failed */
    console.log('fail')

  }
);
xxx