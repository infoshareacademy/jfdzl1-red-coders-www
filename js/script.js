$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header__top").addClass("header__top--fixed");
    } else {
        $(".header__top").removeClass("header__top--fixed");
    }
});