let options = {
  // root: document.querySelector('#scrollArea'),
  rootMargin: '0px 0px -50px 0px',
  threshold: 1.0
}
function cb(){
  console.log(1111)
}

let observer = new IntersectionObserver(cb, options);

const target = document.querySelector('h2')
observer.observe(target)