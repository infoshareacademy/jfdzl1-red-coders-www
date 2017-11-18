$(document).ready(function () {
    $('a.internal').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 800);
        $('.tablet_img').click(function () {
            $(this).addClass('.tablet_img_temp')
        });
    });
    window.sr = ScrollReveal();
    sr.reveal('.first_icon', {
        reset: true,
        delay: 150,
    });
    sr.reveal('.second_icon', {
        reset: true,
        delay: 250,
    });
    sr.reveal('.third_icon', {
        reset: true,
        delay: 350,
    });
    sr.reveal('.fourth_icon', {
        reset: true,
        delay: 450,
    });
});
$(document).ready(function () {
    $('.tablet_img').on('mouseover', function () {
        $(this).animate({
            left: "50px",
            opacity: 0.5,
        });
    });
});
