// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//     if (st > lastScrollTop){
//         $('html, body').animate({
//         	scrollTop: $("#full3").offset().top
//     	}, 2000);
//     	lastScrollTop = $("#full3").offset().top;
//     } else {
//        $('html, body').animate({
//         	scrollTop: $("#full2").offset().top
//     	}, 2000);
//        lastScrollTop = $("#full2").offset().top;
//     }
//     console.log(st + ">" + lastScrollTop);

// });
$(document).ready(function(){
      $('.carousel.carousel-slider').carousel({full_width: true});
    });

