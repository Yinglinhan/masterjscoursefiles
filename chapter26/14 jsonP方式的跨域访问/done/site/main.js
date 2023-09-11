function testFun(a, b) {
  console.log(a + b)
  return a + b;
}



const btn = document.querySelector('span');
btn.addEventListener('click', () => {
  // fetch('http://localhost:3000/api-json/?cb=testFun')

  console.log('click');

  const script = document.createElement('script');
  script.src = 'http://localhost:3000/api-json/?cb=testFun';
  document.body.appendChild(script);
  console.log(script);
})