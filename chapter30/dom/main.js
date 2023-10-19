const element = document.querySelector('#abc')
console.log(element)

const data = element.getAttribute('self-data')
console.log(data)
element.setAttribute('self-data', 'new data')

const data2 = element.getAttribute('self-data')
console.log(data2)