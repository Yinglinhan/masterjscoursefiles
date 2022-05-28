/* 
定义一个函数，可以找到所有span元素，并让span中一开始显示为0，然后让元素中显示的数字 ，每隔一秒 加1

*/

// function getAllSpan(tagName){
//   const allElements = [...document.getElementsByTagName(tagName)]
//   console.log(allElements)

//   let count = 0
//   setInterval(()=>{

//     allElements.forEach( item => {
//       item.innerText = count
//     })
//     count++

//   },1000)
 
  
// }
// getAllSpan('span')

/* 

定义一个函数，可以自动切换某个元素的字体颜色，在三种颜色中每隔一秒依次切换
*/
const fontClass = ['fontRed','fontBlue','fontYellow']

function changeClass(domElement, allClass){

  let length =  fontClass.length
  let count = 0

  setInterval(()=>{
    domElement.className = allClass[count]
    if(count === length - 1){
      count = 0
    }else{
      count++
    }

  },1000)
}

changeClass(document.getElementById('span'),fontClass)



