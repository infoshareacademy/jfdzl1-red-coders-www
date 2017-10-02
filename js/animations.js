$(document).ready(function() {
  $('a.internal').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 800);
  });
});
