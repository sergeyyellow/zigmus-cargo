
$('.header__register-btn').on('click', function () {
    $('.overlay, #register-popup').fadeIn('slow');
});

$('.registration__profile-btn').on('click', function () {
    $('.overlay, #register-popup').fadeIn('slow');
});

$('.start__btn').on('click', function () {
    $('.overlay, #register-popup').fadeIn('slow');
});

$('.header__enter-btn').on('click', function () {
    $('.overlay, #enter-popup').fadeIn('slow');
});

$('.cargo-auction__details-btn').on('click', function () {
    $('.overlay, #cargo-order-card').fadeIn('slow');
});
$('.transport-auction-order-card__response-btn').on('click', function () {
    $('.overlay, #transport-order-card').fadeIn('slow');
});

$('.registration__enter-btn').on('click', function () {
    $('.overlay, #enter-popup').fadeIn('slow');
});

$('.popup__close-btn').on('click', function () {
    $('.overlay, .popup').fadeOut('slow');
});

$('#forgot-pass').on('click', function () {
    $('#enter-popup').fadeOut('slow');
    $('#forgot-password').fadeIn('slow');
});

$('#email-reset').on('click', function () {
    $(this).hide();
    $('#phone-reset').show();
    $('.reset-popup__phone-reset').hide();
    $('.get-new-password-phone__btn').hide();
    $('.reset-popup__email-reset').show();
    $('.get-new-password-email__btn').show();
});

$('#phone-reset').on('click', function () {
    $(this).hide();
    $('#email-reset').show();
    $(".reset-popup__email-reset").hide();
    $(".get-new-password-email__btn").hide();
    $(".reset-popup__phone-reset").show();
    $(".get-new-password-phone__btn").show();
});

$('input[name=phone]').mask("+375 (99) 999-99-99");

$("#email-enter").on("click", function () {
    $(this).hide();
    $('#phone-enter').show();
    $(".enter-popup__phone-enter").hide();
    $(".enter-popup__email-enter").show();
});

$("#phone-enter").on("click", function () {
    $(this).hide();
    $('#email-enter').show();
    $(".enter-popup__email-enter").hide();
    $(".enter-popup__phone-enter").show();
});

$('.documents-block__add-button').on('click', function () {
    $('.overlay, #add-document-popup').fadeIn('slow');
});

$('.payment-block__cancel-the-order').on('click', function () {
    $('.overlay, #undo-order-popup').fadeIn('slow');
});