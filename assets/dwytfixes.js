function isTouchScreendevice() {
  let isMobile = window.matchMedia(
    "only screen and (max-width: 767px)"
  ).matches;

  if (isMobile) {
    return "ontouchstart" in window || navigator.maxTouchPoints;
  }
}
jQuery(document).ready(function ($) {
  if (isTouchScreendevice()) {
      $("body").addClass("touch");
    $("body").removeClass("notouch");
    console.log('test');
  } else {
    $("body").removeClass("touch");
    $("body").addClass("notouch");
    console.log('atest');
  }
  $('a.nov-toggle-page').click(function(){
    var words = $('.threshold_spend').text().split(' ');
    words.splice(2,0,'more');
    $('.threshold_spend').text(words.join(' '));
  });

  /* on scroll header sticky on mobile */
  $(window).scroll(function() {    
    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 300) {
        $(".header-mobile").addClass("sticky");
    }else{
      $(".header-mobile").removeClass("sticky");
    }
  });
});

