$('.from-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
});

$('.where-label').on('click', function () {
    $('.overlay, #map-popup').fadeIn('slow');
});

$('.from-input').on('input', function () {
    $('.from-content').addClass('valid');
});

$('.where-input').on('input', function () {
    $('.from-content').addClass('valid');
});

$('.popup-close-btn').on('click', function () {
    $('.overlay, .popup').fadeOut('slow');
});

$('.your-bet-btn').on('click', function () {
    $('.overlay, #bet-popup').fadeIn('slow');
});

$('.auction-bet-popup__accept-bet-btn').on('click', function () {
    $('.overlay, #bet-popup').fadeOut('slow');
});

