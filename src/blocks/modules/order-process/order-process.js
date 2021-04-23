$('.aside-process__payment-cancel').on('click', function () {
    $('.overlay, #cancel-order').fadeIn('slow');
});

$('.aside-process__docs-add').on('click', function () {
    $('.overlay, #add-document').fadeIn('slow');
});

$('.aside-process__item-title').on('click', function () {
    $(this).siblings().slideToggle('300');
    $(this).toggleClass('aside-process__item-title--active');
});