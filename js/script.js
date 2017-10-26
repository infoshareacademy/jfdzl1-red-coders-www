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

//
$(function(){
    $(".hkshortinfo").slideUp(0);
    $("#hk").mouseover(function(){
            $(".hkshortinfo").slideDown(1000);
        });
});

$(function(){
    $(".soshortinfo").slideUp(0);
    $("#so").mouseover(function(){
        $(".soshortinfo").slideDown(1000);
    });
});

$(function(){
    $(".mdshortinfo").slideUp(0);
    $("#md").mouseover(function(){
        $(".mdshortinfo").slideDown(1000);
    });
});

$(function(){
    $(".hkshortinfo").slideUp(0);
    $("#hk").mouseover(function(){
        $(".hkshortinfo").slideDown(1000);
    });
});

$(function(){
    $(".mzshortinfo").slideUp(0);
    $("#mz").mouseover(function(){
        $(".mzshortinfo").slideDown(1000);
    });
});

$(function(){
    $(".jfshortinfo").slideUp(0);
    $("#jf").mouseover(function(){
        $(".jfshortinfo").slideDown(700);
    });
});