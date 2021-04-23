$('.profile-card__check').on('click', function () {
    $(this).find('.check-span').toggleClass('display-none checked');
    var length = $('.checked').length;
    $('.check-length').val(length);
});

$('.cancel-btn').on('click', function () {
    $('.check-span').removeClass('checked');
    $('.check-span').addClass('display-none');
    var length = $('.checked').length;
    $('.check-length').val(length);
});
