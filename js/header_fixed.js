var elementPosition = $('.header__top').offset();
$(window).scroll(function () {
        if ($(window).scrollTop() > elementPosition.top) {
            $('.header__top').addClass('header_fixed');
        }
        else {
            $('.header__top').css('position', 'static');
        }
    }
)
;
