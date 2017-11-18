$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 5000
    });
});

$('#myCarousel').hover(function() {
    $(this).carousel('pause');
}, function() {
    $(this).carousel('cycle');
});