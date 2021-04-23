$('.response-popup__add-list-item').on('click', function () {
    $('.response-popup__input').removeClass('none')
})

$('body').on('click', '.add-list-img', function () {
    $('.response-popup__add-input').val('');
    $('.response-popup__input').addClass('none');
    $('.response-popup__list').append(`<li class="response-popup__list-item">` + value + `</li>`);
});

$('.span-text').on('click', function () {
    $(this).find('.response-popup__dropdown').toggleClass('none');
});

$('.dropdow-list').on('click', function () {
    var listValue = $(this).text();
    $(this).parent().parent().find('span').text(listValue);
});

$('.top-filters__less-btn').on('click', function () {
    $('.main-filters').addClass('none');
    $('.filters__footer').addClass('none');
    $('.filters__main').addClass('remove-filter-style');
    $('.section-results').removeClass('search-results');
    $(this).addClass('none');
    $('.top-filters__more-btn').removeClass('none');
});
$('.top-filters__more-btn').on('click', function () {
    $('.main-filters').removeClass('none');
    $('.filters__footer').removeClass('none');
    $('.filters__main').removeClass('remove-filter-style');
    $('.section-results').addClass('search-results');
    $(this).addClass('none');
    $('.top-filters__less-btn').removeClass('none');
});

$('.order-card__settings-btn').on('click', function () {
    $(this).find('ul').toggleClass('none');
});

$('.carrier-profile__check-dropdown').on('click', function () {
    $(this).toggleClass('carrier-profile__check-dropdown--active')
    $('.carrier-profile__check-list').toggleClass('none');
});

$('.carrier-profile__item-head').on('click', function () {
    $(this).toggleClass('carrier-profile__item-head--active')
    $(this).parent().find('.carrier-profile__item-content').toggleClass('carrier-profile__item-content--active');
    $(this).parent().find('.carrier-profile__item-content').slideToggle('1000');
});

$('.knowledge-base__question-descr').on('click', function () {
    $(this).toggleClass('knowledge-base__question-descr--active')
    $(this).find('.knowledge-base__question-descr-content ').toggleClass('knowledge-base__question-descr-content--active');
});

$('.knowledge-base__start-working-block').on('click', function () {
    $(this).toggleClass('knowledge-base__start-working-block--active')
    $(this).find('.knowledge-base__start-working-block-content').toggleClass('knowledge-base__start-working-block-content--active');
});
