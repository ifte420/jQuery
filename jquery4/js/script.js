//(selector).action();

//$('.hide').click(function () {
//    $('h1').hide();
//});
//
//$('.show').click(function () {
//    $('h1').show();
//})
//
//$('.hide_show').click(function () {
//    $('h1').toggle();
//});




//$('.hide').click(function () {
//    $('.one').fadeOut(1000);
//});
//
//$('.show').click(function () {
//    $('.one').fadeIn(2000);
//})
//
//$('.hide_show').click(function () {
//    $('.one').fadeToggle(500);
//});



$('.hide').click(function () {
    $('.one').slideUp(1000);
});

$('.show').click(function () {
    $('.one').slideDown(1000);
})

$('.hide_show').click(function () {
    $('.one').slideToggle(500);
});












// ======== Menu fix ======

var navoff = $('.menu').offset().top;

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > navoff){
       $('.menu').addClass('menu_fix');
       }
    else{
        $('.menu').removeClass('menu_fix');
    }
});
















