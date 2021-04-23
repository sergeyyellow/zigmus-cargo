$('.profile-card__drop').on('click', function () {
    $(this).parent().parent().parent().toggleClass('profile-card--active');
    $(this).parent().parent().siblings().find('.profile-card__offer').slideToggle('300');
});