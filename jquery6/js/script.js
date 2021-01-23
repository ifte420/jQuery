$(function () {
    // CountDown js start

    //    $('.count_down').countdown('2021/03/20', function (event) {
    //        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    //    });
    $('.count_down').countdown('2021/03/20', function (event) {
        $(this).html(event.strftime('%w'));
    });
    $('.count_down2').countdown('2021/03/20', function (event) {
        $(this).html(event.strftime('%d'));
    });
    $('.count_down3').countdown('2021/03/20', function (event) {
        $(this).html(event.strftime('%H'));
    });
    $('.count_down4').countdown('2021/01/01', function (event) {
        $(this).html(event.strftime('%S'));
    });

    // Filter js start
    var containerEl = document.querySelector('.mix_item');

    var mixer = mixitup(containerEl);



    // Water Rippl js start
    $('#Water_ripple').ripples({
        resolution: 512,
        dropRadius: 10,
        perturbance: 0.04,
    });


    // Wow js start
    new WOW().init();

    // Pre Loader star 

    $(window).load(function () {
        $('.pre_loader').delay(1000).fadeOut(500);
    });

    // Back to top button js

    $(window).scroll(function () {
        var btn_fade = $(this).scrollTop();

        if (btn_fade > 150) {
            $('.btp').fadeIn();
        }
        
        else{
            $('.btp').fadeOut();
        }
    });

    $('.btp').click(function(){
        $('html,body').animate({
            scrollTop: 0,
        }, 2000);
    });
    

});
