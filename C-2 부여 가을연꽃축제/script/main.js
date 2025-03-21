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
    var slideNum = 2;
    var slideDelay = 3;

    setInterval(function () {
        if (slideNum <= 3) {
            $(".frame>a:nth-child(" + (slideNum - 1) + ")").fadeOut(500)
            $(".frame>a:nth-child(" + slideNum + ")").fadeIn(500)
            slideNum++
        } else if (slideNum == 4) {
            slideNum = 1
            $(".frame>a:nth-child(3)").fadeOut(500)
            $(".frame>a:nth-child(" + slideNum + ")").fadeIn(500)
            slideNum++
        }
    }, slideDelay * 1000)

})