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
        $(".sound").css("background-image", "url(../img/button_speaker.png)");
    }

    $(".sound").click(function () {
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
            $(".sound").css("background-image", "url(../img/button_mute.png)");
        } else {
            $("video").prop('muted', true);
            $(".sound").css("background-image", "url(../img/button_speaker.png)");
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
})
