
// IntersectionObserver  相交观察器

// 被观察元素   与 浏览器显示窗口 或者 被观察元素的父级元素

function callback(entries){
  // console.log(entries)
  entries.forEach(item=>{
      console.log(item.target.classList.add)
  })
  // IntersectionObserverEntry.target
  // console.log(111)
}


/* 

- `time`：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒

- `rootBounds`：根元素的矩形区域的信息，`getBoundingClientRect()`方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回`null`
- `boundingClientRect`：目标元素的矩形区域的信息
- `intersectionRect`：目标元素与视口（或根元素）的交叉区域的信息

重要的三个
- `intersectionRatio`：目标元素的可见比例，即`intersectionRect`占`boundingClientRect`的比例，完全可见时为`1`，完全不可见时小于等于`0`
- `target`：被观察的目标元素，是一个 DOM 节点对象
- isIntersecting  false往分离方向    true 往相交方向

*/

const options = {
  // root: 相交参照目标 比如说视窗 不设置就是以视窗为相交目标
  rootMargin:'0px', // 上右下左
   // 一定要带单位 如果相交参考目标是浏览器窗口的话 还可以用百分比
   // 正值向外延伸  负值向内缩小
  threshold:[0.2,0.8]// 相交比例 0 - 1 可以传数组，可以设置多个比例 [0.2, 0.35, 0.7]
}

const observer = new IntersectionObserver(callback,options)
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
// console.log(h2)
// 创建了一个相交观察器实例
// 具体观察哪个元素 用通过实例的observe方法来确定
observer.observe(h2)
observer.observe(h3)


// 一个观察器实例可以绑定观察多个元素
// 当你去绑定具体的观察元素时 观察器实例上的回调会触发

// 相交方向 达到触发器实例设置的相交比例时就会触发
// 分离方向 达到相交比例也会触发
// 三次触发机会

// 观察器的回调函数执行的是异步的  

// 老版IE浏览器不支持

/* 

- 图片懒加载——当图片滚动到可见时才进行加载
- 内容无限滚动——也就是用户滚动到接近内容底部时直接加载更多，而无需用户操作翻页，给用户一种网页可以无限滚动的错觉
- 检测广告的曝光情况——为了计算广告收益，需要知道广告元素的曝光情况
- 在用户看见某个区域时执行任务或播放动画


*/

