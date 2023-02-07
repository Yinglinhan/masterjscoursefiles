

export default class WorkList {
  constructor(data) {
    this.listData = data
    this.targetElement = document.querySelector('.works-container')
  }

  createWorkDom(workData) {
    const htmlText = `
    <div class="one-work">
          <div class="one-work-text-box">
            <a href='./moreworks' class="one-work-title">
              ${workData.title}
            </a >
  
            <span class="move-text">
            ${workData.subTitle}
            </span>
          </div>
          <div class="circle-img">
            <img src=${workData.imgUrl} alt="">
          </div>
        </div>
    `
    return htmlText
  }

  append(html) {
    this.targetElement.insertAdjacentHTML('beforeend', html)
  }

  listInit() {
    this.listData.forEach(work => {
      const html = this.createWorkDom(work)
      this.append(html)
    })
  }


  static init(data) {
    if (this.createList instanceof WorkList) {
      console.log('已经创建过了，不再创建')
    } else {
      this.createList = new this(data)
      this.createList.listInit()
    }

  }

  static createList = null
}