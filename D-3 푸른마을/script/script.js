$(document).ready(function () {

    // dropDown
    var $gnb = $("li.main");

    $("ul.sub").hide();
    $("#gnbBg").hide();
    $gnb.on("mouseenter", function () {
        $("ul.sub").stop().show();
        $("#gnbBg").stop().show();
        $(this).children("a").addClass("on");
    });
    $gnb.on("mouseleave", function () {
        $("ul.sub").stop().hide();
        $("#gnbBg").stop().hide();
        $(this).children("a").removeClass("on");
    });

    // slide
    var slideNum = 2;
    var slideDelay = 3;

    $(".frame>a:nth-child(1)").siblings().hide();
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

    // NGboard
    $(".content div").hide();
    $(".tab>li>a").click(function () {
        $(".content div").hide().filter(this.hash).fadeIn(0)
        $(".tab>li").click(function () {
            $(this).addClass("on")
        })
        $(".tab>li").removeClass("on")
    }).filter(":eq()").click()

})