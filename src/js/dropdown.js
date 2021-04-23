$('.some class').on('click', function(){
    $(this).toggleClass('some class--active');
    $(this).siblings().slideToggle('200'); // скорость 2с
});

/* order-fulfillment-cargo.html */
$('.contacts-block__header').on("click", function() {
    $(this).find('.drop-arrow').toggleClass('drop-arrow--active');
    $('.contacts-block').find('.contacts-block__content').slideToggle(400);
});

$('.payment-block__header').on("click", function() {
    $(this).find('.drop-arrow').toggleClass('drop-arrow--active');
    $('.payment-block').find('.payment-block__content').slideToggle(400);
});

$('.documents-block__header').on("click", function() {
    $(this).find('.drop-arrow').toggleClass('drop-arrow--active');
    $('.documents-block').find('.documents-block__content').slideToggle(400);
});

$('.your-car-block__header').on("click", function() {
    $(this).find('.drop-arrow').toggleClass('drop-arrow--active');
    $('.your-car-block').find('.your-car-block__info').slideToggle(400);
});

/* order-fulfillment-driver.html */
$('.help-block__header').on("click", function() {
    $(this).find('.drop-arrow').toggleClass('drop-arrow--active');
    $('.help-block').find('.help-block__info').slideToggle(400);
});