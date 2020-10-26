$(document).ready(function(){
    $("html").niceScroll();
    
    $('.carousel').carousel({
        
        interval: 6000
        
    });
$('.carousel').carousel({
    interval:6000
});
// Trigger Tool Box
$('.gear-check').click(function(){
    $('.color-option').fadeToggle();
});
// Change Color
var colorLi = $('.color-option li');
colorLi.eq(0).css("backgroundColor", "#E60024").end()
    
.eq(1).css("backgroundColor", "#E426D5").end()

.eq(2).css("backgroundColor", "#009AFF").end()

.eq(3).css("backgroundColor", "#FFD500");

colorLi.click(function () {

$("link[href*='theme']").attr("href", $(this).attr("data-value"));

});
// Loading Screen

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .spinner").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
  });
  // Scroll To Top Button
  var Scroll=$('.scroll-top');
 $(window).scroll(function(){
     $(this).scrollTop()>=700?Scroll.show():Scroll.hide();
    });
    Scroll.click(function(){
      $('html,body').animate({scrollTop:0},600);
 
  });
});


