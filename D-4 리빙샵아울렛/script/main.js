$(document).ready(function () {


    // dropDown
    var $gnb = $("li.main");

    $("#gnbBg").hide();
    $("ul.sub").hide();

    $gnb.on("mouseenter", function () {
        $("#gnbBg").stop().fadeIn(0);
        $("ul.sub").stop().fadeIn(0);
        $(this).children("a").addClass("on");
    });
    $gnb.on("mouseleave", function () {
        $("#gnbBg").stop().fadeOut(0);
        $("ul.sub").stop().fadeOut(0);
        $(this).children("a").removeClass("on");
    })

    // slide

    $('#slide #inner a').eq(0).siblings().hide();

    var slideIndex = 0;
    setInterval(function () {
        if (slideIndex < 2) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }
        $("#slide #inner a").eq(slideIndex).siblings().fadeOut(800);
        $("#slide #inner a").eq(slideIndex).fadeIn(800);
    }, 3000);

})