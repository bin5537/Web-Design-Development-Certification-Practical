$(document).ready(function () {

    // dropDown
    var $gnb = $("li.main");

    $("ul.sub").hide();
    $gnb.on("mouseenter", function () {
        $(this).find("ul.sub").stop().slideDown();
        $(this).children("a").addClass("on");
    });
    $gnb.on("mouseleave", function () {
        $(this).find("ul.sub").stop().slideUp();
        $(this).children("a").removeClass("on");
    });

    // slide
    setInterval(function () {
        $('.frame').animate({
            "top": "-300px"
        }, 1000, function () {
            $('.frame>li').eq(0).appendTo(".frame");
            $('.frame').css({
                "top": "0px"
            });
        })
    }, 3000);
    
})