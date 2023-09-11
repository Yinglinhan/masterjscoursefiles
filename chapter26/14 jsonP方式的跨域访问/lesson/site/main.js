

function abc(a, b) {
  console.log(a + b);
  return a + b;
}


// fetch('http://localhost:3000/')
//   .then(res => res.text())
//   .then(text => {
//     console.log(text);
//   })


const btn = document.querySelector('span');
btn.addEventListener('click', () => {
  const script = document.createElement('script');
  script.src = 'http://localhost:3000/?callback=abc';
  document.body.appendChild(script);
})