$(document).ready(function(){

    $('.cross').click(function(){
        $('.menu').css('display', 'none')
    })

    $('.burger-btn').click(function(){
        $('.menu').css('display', 'flex')
    })

    $('.menu nav ul li a').click(function(){
        $('.menu').css('display', 'none')
        
    })
  
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:300,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    $(window).scroll(function(){
          
        $('header').toggleClass('dark', $(this).scrollTop() > (window.screen.height - 200));
    });


});