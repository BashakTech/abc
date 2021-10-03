$(".banner").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
});




$(".backtotop").click(function(){
    $("html,body").animate({
      scrollTop:0
    },1000)
  })
  
  $(window).scroll(function(){
    if($(window).scrollTop()>400){
      $(".backtotop").fadeIn()
    }else{
      $(".backtotop").fadeOut()
    }
  
    if($(window).scrollTop()>300){
      $(".menu").addClass("fixedmenu")
    }else{
      $(".menu").removeClass("fixedmenu")
    }
  })