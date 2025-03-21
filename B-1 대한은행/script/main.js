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

    $gnb.on("mouseenter", function () {
        $("ul.sub").stop().slideDown();
        $(this).children("a").addClass("on");
    });
    $gnb.on("mouseleave", function () {
        $("ul.sub").stop().slideUp();
        $(this).children("a").removeClass("on");
    });

    // slide
    setInterval(function () {
        $('.frame').animate({
            "left": "-1200px"
        }, 1000, function () {
            $('.frame>li').eq(0).appendTo(".frame");
            $('.frame').css({
                "left": "0px"
            });
        })
    }, 3000);

    // tabMenu
    $(".content div").hide();
    $(".tab>li>a").click(function () {
        $(".content div").hide().filter(this.hash).fadeIn(0)
        $(".tab>li").click(function () {
            $(this).addClass("on")
        })
        $(".tab>li").removeClass("on")
    }).filter(":eq()").click()

})

// 이벤트를 반복적으로 실행할 함수
function animateFrame() {
    const frame = document.querySelector('.inner>ul');
    const frameItems = frame.querySelectorAll('li');

    // 애니메이션을 시작하기 전에 frame을 왼쪽으로 이동시킴
    frame.style.marginLeft = "-1200px";

    // 1초 동안 애니메이션 실행
    frame.style.transition = "margin-left 1s";

    // 애니메이션이 끝날 때 호출될 콜백 함수
    function animationEndCallback() {
        // 첫 번째 항목을 맨 뒤로 이동
        const firstItem = frameItems[0];
        frame.appendChild(firstItem);

        // frame의 위치를 초기화
        frame.style.left = "0";

        // 다음 애니메이션을 위해 콜백 함수 제거
        frame.removeEventListener('transitionend', animationEndCallback);

        // 3초 후에 다음 애니메이션 실행
        setTimeout(animateFrame, 3000);
    }

    // 애니메이션이 끝날 때 콜백 함수를 호출하기 위해 이벤트 리스너 추가
    frame.addEventListener('transitionend', animationEndCallback);

    // frame을 다시 오른쪽으로 이동시켜 애니메이션 시작
    frame.style.left = "0";
}

// 초기 애니메이션 시작
animateFrame();