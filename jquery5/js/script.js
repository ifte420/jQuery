$(function () {
    //    $('.banner_slider').slick({
    //        slidesToShow: 1,
    //        slidesToScroll: 1,
    //        autoplay: true,
    //        autoplaySpeed: 2000,
    //    });
    //    $('.banner_item1').slick({
    //        slidesToShow: 1,
    //        slidesToScroll: 1,
    //        autoplay: true,
    //        autoplaySpeed: 2000,
    //    });

    $('.ifte').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.ifte_text'
    });
    $('.ifte_text').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.ifte',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
    
    //veno box start
    
    
     $('.venobox').venobox({
        spinner: 'wave',
        spinColor: '#ed5a5a'
     }); 
    
    // counter up start
    $('.count').counterUp({
    delay: 10,
    time: 3000
});
});
