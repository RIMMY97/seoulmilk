$("document").ready(function () {

    $(".player").click(function () {
        var mediaVideo = $("video").get(0);
        if (mediaVideo.paused) {
            mediaVideo.play();
            $(this).css("background-image", "url(../img/button_pause.png)");
        } else {
            mediaVideo.pause();
            $(this).css("background-image", "url(../img/button_play.png)");
        }
    });

    //player

    if ($("video").prop('muted')) {
        $(".sound .ico").css("background-image", "url(../img/button_speaker.png)");
        $(".sound .text").text("소리 on");
    }

    $(".sound").click(function () {
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
            $(".sound .ico").css("background-image", "url(../img/button_mute.png)");
            $(this).css("background-color", "rgba(237, 28, 36, 0.7)");
            $(".sound .text").text("소리 off");
        } else {
            $("video").prop('muted', true);
            $(".sound .ico").css("background-image", "url(../img/button_speaker.png)");
            $(".sound").css("background-color", "rgba(168, 168, 168, 0.5)");
            $(".sound .text").text("소리 on");
        }
    });

    //sound

    //main controls

    var Slider = $('.product .product_section .product-slide .slider').lightSlider({
        pauseOnHover: true,
        item: 7
    });

    // best_menu

    $(".story .story_wrap .story_img #milk").addClass("on");

    $(".story .story_wrap .story_img #milk").mouseover(function () {
        var i = $(this).index();
        $(this).addClass("on");
        $(".story .story_wrap .story_img #cheese").removeClass("on")
        $(".story .story_wrap .story_img #excur").removeClass("on")
    })

    $(".story .story_wrap .story_img #cheese").mouseover(function () {
        var i = $(this).index();
        $(this).addClass("on");
        $(".story .story_wrap .story_img #milk").removeClass("on")
        $(".story .story_wrap .story_img #excur").removeClass("on")
    })

    $(".story .story_wrap .story_img #excur").mouseover(function () {
        var i = $(this).index();
        $(this).addClass("on");
        $(".story .story_wrap .story_img #milk").removeClass("on")
        $(".story .story_wrap .story_img #cheese").removeClass("on")
    })

    // story mouse over __ 쉬운 방법이 있을텐데 아직 못 찾았다 ㅠ

    $(window).scroll(function () {
        var pos = $(window).scrollTop();
        if (pos > 100) {
            $("aside").fadeIn(500)
        } else {
            $("aside").fadeOut(500)
        }
        //scroll aside
    })

    $("aside").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 500)
    })

    //aside
})
