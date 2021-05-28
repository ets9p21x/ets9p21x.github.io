window.onload = function () {
    var newSlideSize = function slideSize() {
        console.log($(window).height())
        $(".swiper-container,.swiper-wrapper,.swiper-slide").height($(window).height());
    };
    newSlideSize();
    $(window).resize(function () {
        newSlideSize();
    });

    var mySwiper = new Swiper('.swiper-container', {
        pagination: '.pagination',
        loop: true,
        autoplay: 5000,
        paginationClickable: true,
        onSlideChangeStart: function () {
            //回调函数
        }
    });



};