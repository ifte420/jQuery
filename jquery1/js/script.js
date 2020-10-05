$(document).ready(function () {
    $('p').hover(function () {
            alert("Hello");
        },
        function () {
            alert("Bye");
        }
    );

    $('input').focus(function () {
        $(this).css("background", "#5bfafa");
    });

    $('b').on({
        mouseenter: function () {
            $(this).css("background-color", "#957dfd");
        },
        mouseleave: function () {
            $(this).css("background-color", "#a6ff8b");
        },
        click: function () {
            $(this).css("background-color", "rgba(252, 89, 108, 0.53)");
        }
    });
    $('button').click(function () {
        $('ul li:nth-child(2)').hide();
        //ul li:last-child
    });


    $('a[target="_blank"]').click(function () {
        $(this).hide();
    });


});
