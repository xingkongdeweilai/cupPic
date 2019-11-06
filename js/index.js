window.onload = function () {
    // $('.m-banner').mouseout(function () {
    //     bannerStartSlide();
    // });
    // $('.m-banner').mouseover(function () {
    //     bannerStopSlide();
    // });
    setTimeout(bannerStartSlide, 2000);
}

let isOdd = true;
let index = 2;
let banner1 = $('.u-banner1');
let banner2 = $('.u-banner2');
let animateX1;
let animateX2;
let picSrcs = ["pic/banner/banner1.jpg"
    , "pic/banner/banner2.jpg"
    , "pic/banner/banner1.jpg"
    , "pic/banner/banner2.jpg"
    , "pic/banner/banner1.jpg"
];
let picWidth = '100%';

/**
 * 轮播图开始滚动
 */
function bannerStartSlide() {
    console.log('轮播图开始滚动');
    if (isOdd) {
        animateX1 = picWidth;
        animateX2 = 0;
    } else {
        animateX1 = 0;
        animateX2 = picWidth;
    }

    banner1.animate({
            right: animateX1
        }
        , 2000
        , function () {
            // afterSlide();
        });
    banner2.animate({
            right: animateX2
        }
        , 2000
        , function () {
            afterSlide();
        });
}

function afterSlide() {
    if (isOdd) {
        banner1.css({
            "background-image": "url('" + picSrcs[index] + "')",
            "right": "-100%"
        });
        isOdd = false;
    } else {
        banner2.css({
            "background-image": "url('" + picSrcs[index] + "')",
            "right": "-100%"
        });
        isOdd = true;
    }
    if (index >= picSrcs.length - 1) {
        index = 0;
    } else {
        index++;
    }
    setTimeout(function () {
        bannerStartSlide();
    }, 2000);
}

/**
 * 轮播图停止滚动
 */
function bannerStopSlide() {
    console.log('轮播图停止滚动');
    $('.m-banner').stop();
}