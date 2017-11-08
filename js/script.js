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

// Team members animation after scroll....
$(function(){
    $(".hkshortinfo, .soshortinfo, .mdshortinfo, .mzshortinfo, .jfshortinfo ").slideUp(0);
});

$(window).scroll(function(){
    var position = $("#team-info").offset();
    var scroll =  $(window).scrollTop();
    if (scroll >= position.top -210) {
        setTimeout(animate, 1000);
        function animate() {
            $("#hk").addClass("rotate").next().find("div").slideDown(2000, function () {
                $("#so").addClass("rotate").next().find("div").slideDown(2000, function () {
                    $("#md").addClass("rotate").next().find("div").slideDown(2000, function () {
                        $("#mz").addClass("rotate").next().find("div").slideDown(2000, function () {
                            $("#jf").addClass("rotate").next().find("div").slideDown(2000)
                        })
                    })
                })
            })
        }
    }
});
