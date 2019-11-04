window.onload = function () {
    // $('.m-banner').mouseout(function () {
    //     bannerStartSlide();
    // });
    // $('.m-banner').mouseover(function () {
    //     bannerStopSlide();
    // });
    bannerStartSlide();
}

/**
 * 轮播图开始滚动
 */
function bannerStartSlide() {
    console.log('轮播图开始滚动');
    let picSrcs = ["../pic/banner/banner1.jpg"
        , "../pic/banner/banner2.jpg"
        , "../pic/banner/banner3.jpg"
        , "../pic/banner/banner4.jpg"];
    let banner_width = $('.u-banner1').width();
    let banner1 = $('.u-banner1');
    let banner2 = $('.u-banner2');
    $('.m-banner').animate({
            right: '+=' + banner_width
        }
        , 2000
        , function () {
            banner2.css({"background-image": "url('pic/banner/banner1.jpg')"});
            banner1.css({"background-image": "url('pic/banner/banner2.jpg')"});
        });
}

/**
 * 轮播图停止滚动
 */
function bannerStopSlide() {
    console.log('轮播图停止滚动');
    $('.m-banner').stop();
}