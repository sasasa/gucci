var mySwiper = new Swiper ('.swiper-container', {
  effect: "fade",
  speed: 500,
  // parallax: true,
  loop: true,
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
})


$('.nav-button').click(function(){
  document.querySelector('html').classList.toggle('open');
})



let $header = $('header');
$header.hover(function(){
  $(this).addClass('black');
}, function(){
  if (!$header.hasClass('scroll')) {
    $(this).removeClass('black');
  }
})


$(window).resize(function() {
  let isRunning = false
  if (!isRunning) {
    isRunning = true

    // 描画する前のタイミングで呼び出してもらう
    window.requestAnimationFrame(() => {

      if(window.innerWidth < 900) {
        $header.removeClass('black');
        $('.logo').removeClass('scroll');
      }

      isRunning = false
    })
  }
})

$(window).scroll(function() {
  // 呼び出されるまで何もしない
  let isRunning = false
  if (!isRunning) {
    isRunning = true

    // 描画する前のタイミングで呼び出してもらう
    window.requestAnimationFrame(() => {

      if(window.innerWidth < 900) {
        $header.removeClass('black');
        $('.logo').removeClass('scroll');
      }

      currentScrollTop = $(this).scrollTop()
      if(currentScrollTop <= 50) {
        console.log('一番上にいる')
        if(window.innerWidth >= 900) {
          $header.removeClass('black');
          $('.logo').removeClass('scroll');
        }
      } else {
        if(window.innerWidth >= 900) {
          $header.addClass('black');
          $('.logo').addClass('scroll');
        }
      }

      isRunning = false
    })
  }
});