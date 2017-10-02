// Top menu animation after scroll

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header__top").addClass("header__top--fixed");
    } else {
        $(".header__top").removeClass("header__top--fixed");
    }
});

// Change responsive menu after click on "Hamburger"

$(".navbar-toggle").click(function(){
    $(".header__top").toggleClass("header__top--dark_background");
});