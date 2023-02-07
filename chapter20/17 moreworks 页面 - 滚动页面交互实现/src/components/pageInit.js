
export default function pageInit() {
  $(function () {
    $('.loading-block').addClass('loading-block-moveup')
    const eles = $('.init-Ref')
    setTimeout(() => {
      const io = new IntersectionObserver((entries) => {
        // console.log(entries)
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log(entry)
            $(entry.target).addClass('animate__animated animate__fadeIn')
          }
        })
      })

      eles.each((index, dom) => {
        // console.log(dom)
        io.observe(dom)
      })
    }, 2200)




  })
}