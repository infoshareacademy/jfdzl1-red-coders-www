$(document).ready(function() {
  $('a.internal').click(function(event) {
    event.preventDefault();
    var offset = $('.header__top').height() + 25;
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - offset
    }, 800);
  });
});
