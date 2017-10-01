var elementPosition = $('.header__top').offset();
$(window).scroll(function(){
    if($(window).scrollTop() > elementPosition.top) {
        $('.header__top').css('position', 'fixed').css('top', '0');
    }
    else {
        $('.header__top').css('position','static');
    }
});
