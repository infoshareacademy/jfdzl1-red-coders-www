$(document).ready(function () {
    $('a.internal').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 800);
    });
    window.sr = ScrollReveal();
    sr.reveal('.first_icon', {
        reset: true,
        delay: 150,
        distance: 0
    });
        sr.reveal('.second_icon', {
        reset: true,
        delay: 250,
        distance: 0
    });
    sr.reveal('.third_icon', {
        reset: true,
        delay: 350,
        distance: 0
    });
    sr.reveal('.fourth_icon', {
        reset: true,
        delay: 450,
        distance: 0
    });
});
