$(document).ready(function () {
    $('#hide').click(function () {
        $('p').hide('fast');
    });

    $('#show').click(function () {
        $('p').show('slow');
    });

    $('#toggle').click(function () {
        $('p').toggle(500);
    });
    
    
    $('.pain').click(function(){
        $('.box1').fadeTo('slow', 0.3);
        $('.box2').fadeTo('slow', 0.4);
        $('.box3').fadeTo('slow', 0.7);
    });
});
