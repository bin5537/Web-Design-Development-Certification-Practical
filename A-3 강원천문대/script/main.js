$(document).ready(function () {

    // popup
    $("#notice>ul>li:nth-child(1)").on("click", function () {
        $("#popup").css("display", "block")
    })
    $("#close").on("click", function () {
        $("#popup").css("display", "none")
    })

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