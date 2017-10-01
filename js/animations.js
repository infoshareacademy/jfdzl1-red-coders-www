$(document).ready(function () {
    $('a.nav__link').click(function() {

            event.preventDefault();
            $('body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);

    });
});