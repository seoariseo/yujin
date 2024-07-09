$(function () {
    //메뉴
    $(".main li").mouseover(function () {
        $(".sub, .sub_bg").stop().slideDown();
    }) //mouseover


    $(".main li").mouseout(function () {
        $(".sub, .sub_bg").stop().slideUp();
    }) //mouseover


    // $(".fade li").eq(0).siblings().hide();
    $(".fade li").hide();
    $(".fade li").eq(0).show();

    var n = 0;

    setInterval(function () {
        // $(".fade li").eq(n).fadeOut();

        if (n == 2) {
            n = 0;

        } else {
            n++;
        } ///
        $(".fade li").eq(n).fadeIn().siblings().fadeOut();
        //두개로 나누어서 해도 되고 한번에 넣어서 해도 됨.
        console.log(n);
    }, 1500)


    //팝업

    $(".p_up").click(function(){
        $(".popup").show();
    })//click

    $(".close").click(function(){
        $(".popup").hide();
    })

}) //jquery