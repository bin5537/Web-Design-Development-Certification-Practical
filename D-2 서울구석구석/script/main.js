$(document).ready(function () {

    // popup
    $("#notice>ul>li:nth-child(1)").on("click", function () {
        $("#popupBg").css("display", "block")
    })
    $("#close").on("click", function () {
        $("#popupBg").css("display", "none")
    })

    // dropDown
    var $gnb = $("li.main");

    $gnb.on("mouseenter", function () {
        $(this).find("ul.sub").stop().slideDown();
        $(this).children("a").addClass("on");
    });
    $gnb.on("mouseleave", function () {
        $(this).find("ul.sub").stop().slideUp();
        $(this).children("a").removeClass("on");
    })

    // slide
    setInterval(function () {
        $('.frame').animate({
            "left": "-100%"
        }, 1000, function () {
            $('.frame>li').eq(0).appendTo(".frame");
            $('.frame').css({
                "left": "0px"
            });
        })
    }, 3000);

})