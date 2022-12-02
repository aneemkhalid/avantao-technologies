$(document).ready(function() {

    $('.testimonial_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
    });

    $('.common-slider-inner').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
            }
        }]
    });

    $(".welcome span").on("click", function() {
        $('.welcome').toggleClass('para');
        if ($('.welcome').hasClass('para')) {
            $(".welcome span").text("less___");
        } else {
            $(".welcome span").text("more___");
        }
    });

    $(".page-up").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $("header").addClass("darkHeader");
            if ($(window).width() < 767) {
                $("header").removeClass("darkHeader");
            }
           
        } else {
            $("header").removeClass("darkHeader");
        }
         if ($('header').hasClass('darkHeader')){
                $('body').css('padding-top','64px');
            }
            else{
                $('body').css('padding-top','0');
            }
    })

});